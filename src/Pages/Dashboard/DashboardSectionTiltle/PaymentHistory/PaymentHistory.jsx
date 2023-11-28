import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import DashboardSectionTitle from "../DashboardSectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { data: payments =[] } = useQuery({
      queryKey: ["payments", user.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`);
        return res.data;
      },
    });
    return (
        <div className="dark:bg-slate-700 dark:text-slate-100">
           <Helmet>
        <title>LOREMIPSUM | PAYMENT</title>
      </Helmet>
            <DashboardSectionTitle title={'Payments History'}></DashboardSectionTitle>
        <p className="text-3xl font-semibold my-4 ">Total Payment:{payments.length}</p>
  
        <div className="overflow-x-auto dark:bg-slate-700 dark:text-slate-100">
          <table className="table table-zebra">
            {/* head */}
            <thead className="text-lg bg-pink-400 text-white">
              <tr>
                <th>#</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="dark:bg-slate-700 dark:text-slate-400">
              {payments.map((payment,index) =>  <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>$ {payment.fee}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.status}</td>
              </tr> )}
            
           
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;