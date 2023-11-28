import { Helmet } from "react-helmet-async";
import UseAuth from "../../../../Hooks/UseAuth";
import DashboardSectionTitle from "../DashboardSectionTitle";
import { Link } from "react-router-dom";

const UserHome = () => {
  const { user } = UseAuth();
  return (
    <div>
      <Helmet>
        <title>LOREMIPSUM | USER HOME</title>
      </Helmet>
      <DashboardSectionTitle title={"User Home"}></DashboardSectionTitle>
      <p className="text-3xl font-semibold my-2">Welcome {user.displayName}</p>

      <div className=" mt-10 grid grid-cols-1 md:flex md:items-start  gap-3 md:gap-10 lg:gap-20">
        <div className="">
          <img src={user.photoURL} className=" w-52 rounded-full" alt="" />
        </div>
        <div className="">
          <h2 className="text-xl font-medium">
            Position: <span className="text-pink-500">User</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Full Name: <br />{" "}
            <span className="text-pink-500 ">{user.displayName}</span>
          </h2>
          <h2 className="text-xl font-medium mt-3">
            Email: <br /> <span className="text-pink-500">{user.email}</span>
          </h2>
        </div>
        <div className="">
          <Link to='/dashboard/updateProfile'>
            <button className="btn btn-secondary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
