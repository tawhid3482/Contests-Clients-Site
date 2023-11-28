import { FaAd, FaBook, FaCartPlus, FaHistory, FaHome, FaList,  FaUsers, FaWind } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import UseRegister from "../../Hooks/UseRegister";
import UseAdmin from "../../Hooks/UseAdmin";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [resUser] = UseRegister();
  const [isAdmin] = UseAdmin()

  return (
    <div className=" md:flex  md:justify-between dark:bg-slate-700 dark:text-slate-100">
       <Helmet>
        <title>LOREMIPSUM | DASHBOARD</title>
      </Helmet>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>

      <div className=" w-full md:w-64 md:min-h-screen bg-pink-500 dark:bg-slate-700 dark:text-slate-100">
        <ul className="menu p-4 md:fixed md:z-20">
          {isAdmin ? (
            <>
              <li className="text-white">
                <NavLink to="/dashboard/adminhome">
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
                <NavLink to="/dashboard/winner">
                  <FaWind className="text-white text-xl"></FaWind>
                    Add Winner
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="text-white mt-2">
                <NavLink to="/dashboard/home">
                  <FaHome className="text-white text-xl"></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink to="/dashboard/resContests">
                  <FaCartPlus className="text-white text-xl"></FaCartPlus>
                  Payment
                  <span className="text-white"> (+{resUser?.length})</span>
                </NavLink>
              </li>
              <li className="text-white mt-2">
                <NavLink to="/dashboard/mycontests">
                  <FaBook className="text-white text-xl"></FaBook>
                  Participated Contest
                </NavLink>
              </li>
              <li className="text-white mt-2">
                <NavLink to="/dashboard/Mewinner">
                  <FaWind className="text-white text-xl"></FaWind>
                  Winning Contest
                </NavLink>
              </li>
              <li className="text-white mt-2">
                <NavLink to="/dashboard/paymentHistory">
                  <FaHistory className="text-white text-xl"></FaHistory>
                 Payment History
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
