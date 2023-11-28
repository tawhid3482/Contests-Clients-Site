import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseAuth";
import DashboardSectionTitle from "../DashboardSectionTitle";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import {
  FaBusAlt,
  FaElementor,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: status } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-status");
      return res.data;
    },
  });

  return (
    <div>
       <Helmet>
        <title>LOREMIPSUM | ADMIN HOME</title>
      </Helmet>
      <DashboardSectionTitle title={"Admin Home"}></DashboardSectionTitle>
      <p className="text-3xl font-semibold my-2">Welcome {user.displayName}</p>

      <div className="mt-10 flex  items-start gap-20">
        <div className="">
          <img src={user.photoURL} className="w-52 rounded-full" alt="" />
        </div>
        <div className="">
          <h2 className="text-xl font-medium">
            Position: <span className="text-pink-500">Admin</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Full Name: <br />{" "}
            <span className="text-pink-500 ">{user.displayName}</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Email: <br /> <span className="text-pink-500">{user.email}</span>
          </h2>
        </div>
      </div>
      <div className="mt-10">
        <DashboardSectionTitle
          title={"All Information"}
        ></DashboardSectionTitle>
      </div>
      <div className=" flex justify-between mt-10">
        <div className=" flex gap-10 bg-pink-400 text-white p-3 rounded-xl">
          <div className="">
            <FaMoneyCheckAlt className="text-6xl "></FaMoneyCheckAlt>
          </div>
          <div className="">
            <p className="text-5xl font-bold">${status?.revenue}</p>
            <p className="text-2xl font-bold"> Revenue</p>
          </div>
        </div>
        <div className=" flex gap-10 bg-purple-500 text-white p-3 rounded-xl">
          <div className="">
            <FaUsers className="text-6xl "></FaUsers>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.user}</p>
            <p className="text-2xl font-bold">Users</p>
          </div>
        </div>
        <div className=" flex gap-10 bg-yellow-300 text-white p-3 rounded-xl">
          <div className="">
            <FaElementor className="text-6xl "></FaElementor>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.menuItems}</p>
            <p className="text-2xl font-bold">Contests</p>
          </div>
        </div>
        <div className=" flex gap-10 bg-blue-400 text-white p-3 rounded-xl">
          <div className="">
            <FaBusAlt className="text-6xl "></FaBusAlt>
          </div>
          <div className="">
            <p className="text-5xl font-bold">{status?.orderItems}</p>
            <p className="text-2xl font-bold">Registration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
