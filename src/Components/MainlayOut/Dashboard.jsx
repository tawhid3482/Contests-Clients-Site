import { FaAd, FaBook, FaCartPlus, FaHome, FaList,  FaUsers, FaWind } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import UseRegister from "../../Hooks/UseRegister";

const Dashboard = () => {
  const [resUser] = UseRegister();
  const isAdmin = true;
  return (
    <div className=" md:flex  md:justify-between ">
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>

      <div className="w-full md:w-64 md:min-h-screen bg-pink-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/AdminHome">
                  <FaHome className="text-white text-xl"></FaHome>
                  Admin Home
                </NavLink>
              </li>

              <li className="text-white mt-2">
                <NavLink to="/dashboard/Addcontests">
                  <FaAd className="text-white text-xl"></FaAd>
                  Add Contests
                </NavLink>
              </li>

              <li className="text-white mt-2">
                <NavLink to="/dashboard/manage">
                  <FaList className="text-white text-xl"></FaList>
                 Manage Contests
                </NavLink>
              </li>

              <li className="text-white mt-2">
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-white text-xl"></FaUsers>
                 All Users
                </NavLink>
              </li>

              <li className="text-white mt-2">
                <NavLink to="/dashboard/setwinner">
                  <FaWind className="text-white text-xl"></FaWind>
                 Add Winner
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-white mt-2">
                <NavLink to="/dashboard/myprofile">
                  <FaHome className="text-white text-xl"></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/resContests">
                  <FaCartPlus className="text-white text-xl"></FaCartPlus>
                  Payment{" "}
                  <span className="text-pink-500"> (+{resUser?.length})</span>
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
            </>
          )}

          {/* shayed link */}

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
