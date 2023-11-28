import { loadStripe } from "@stripe/stripe-js";
import DashboardSectionTitle from "../DashboardSectionTiltle/DashboardSectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Helmet } from "react-helmet-async";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)

const Payment = () => {
    return (
        <div className="dark:bg-slate-700 dark:text-whitecc">
             <Helmet>
        <title>LOREMIPSUM | PAYMENT</title>
      </Helmet>
            <DashboardSectionTitle title={'Payment'}></DashboardSectionTitle>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckOutFrom />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;