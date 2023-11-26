import {  FaBook, FaCartPlus,  FaHome, FaWind } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import UseRegister from "../../Hooks/UseRegister";

const Dashboard = () => {
    const [resUser]=UseRegister()
  return (
    <div className=" md:flex  md:justify-between ">
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
      <div className="w-full md:w-64 md:min-h-screen bg-pink-500">
        <ul className="menu p-4">
          <li className="text-white mt-2">
            <NavLink to="/dashboard/profile">
              <FaHome className="text-white text-xl"></FaHome>
              My Profile
            </NavLink>
          </li>
          <li className="text-white">
            <NavLink to="/dashboard/resContests">
              <FaCartPlus className="text-white text-xl"></FaCartPlus>
              Payment <span className="text-pink-500"> (+{resUser?.length})</span>
            </NavLink>
          </li>
          <li className="text-white mt-2">
            <NavLink to="/dashboard/mycontests">
              <FaBook className="text-white text-xl"></FaBook>
               Participated Contest
            </NavLink>
          </li>
          <li className="text-white mt-2">
            <NavLink to="/dashboard/winner">
              <FaWind className="text-white text-xl"></FaWind>
              Winning Contest
            </NavLink>
          </li>

          <div className="divider divider-warning">OR</div>

          <li className="text-white mt-2">
            <NavLink to="/">
              <FaHome className="text-white text-xl"></FaHome>
              Home
            </NavLink>
          </li>

          <li className="text-white mt-2">
            <NavLink to="/contest">
              <FaBook className="text-white text-xl"></FaBook>
              Contests
            </NavLink>
          </li>
          <li className="text-white mt-2">
            <NavLink to="/best">
              <GrStatusGood className="text-white text-xl"></GrStatusGood>
              Best Contests
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
