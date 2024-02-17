import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAuth from "../../../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UseRegister from "../../../Hooks/UseRegister";

const CheckOutFrom = () => {
  const [error, setError] = useState("");
  const [clientSecret, setclientSecret] = useState("");
  const [transactionId, settransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const { user } = UseAuth();
  const navigate = useNavigate();

  const axiosSecure = UseAxiosSecure();
  const [resUser, refetch] = UseRegister();
  console.log(resUser)
  const totalPrice = resUser?.reduce((total, item) => total + item.fee, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { fee: totalPrice })
        .then((res) => {
        //   console.log(res.data.clientSecret);
          setclientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod hoise", paymentMethod);
      setError("");
    }
    // comfirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
     if (confirmError) {
      console.log("confirmEroor khau");
    } 
    else {
      console.log("success", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        settransactionId(paymentIntent.id);
    
        // now save to the database
        const payment = {
          email: user.email,
          fee: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: resUser.map((item) => item._id),
          status: "pending",
          
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          toast.success("Payment Successful");
          navigate("/dashboard/paymentHistory");
        }
      }
    }
  };
  return (
    <form className="dark:bg-slate-700 dark:text-slate-100" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#039c12",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-secondary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-500">Your Transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckOutFrom;
