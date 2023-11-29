import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { BsSun } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";
import UseAuth from "../../Hooks/UseAuth";
import logo from "../../assets/logo/logo.png";
import { FcRegisteredTrademark } from "react-icons/fc";
import UseRegister from "../../Hooks/UseRegister";
import UseAdmin from "../../Hooks/UseAdmin";

const Navbar = () => {
  const { user, logOut } = UseAuth(null);
  const [isAdmin] = UseAdmin();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [theme, setTheme] = useState(null);
  const [resUser] = UseRegister();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const links = (
    <>
      <li className="ml-4">
        <Link
          to="/"
          className="flex justify-center  hover:bg-white bg-purple-100"
        >
          Home
        </Link>
      </li>

      <li className="ml-4">
        <Link
          to="/contest"
          className="flex justify-center  hover:bg-white bg-purple-100"
        >
          Contests
        </Link>
      </li>

      {user && !isAdmin && (
        <li className="ml-4">
          <Link
            to="/dashboard/resContests"
            className="flex justify-center  hover:bg-white bg-purple-100"
          >
            <FcRegisteredTrademark className="text-xl " />
            <div className="badge badge-secondary">+{resUser?.length}</div>
          </Link>
        </li>
      )}
      
      <li className="ml-4">
        <Link
          to="/winner"
          className="flex justify-center  hover:bg-white bg-purple-100"
        >
          Best Creator 
        </Link>
      </li>
      <li className="ml-4">
        <Link
          to="/best"
          className="flex justify-center  hover:bg-white bg-purple-100"
        >
          Best Contests
        </Link>
      </li>

  
    </>
  );

  return (
    <div className=" bg-pink-200   container mx-auto">
      <div className="navbar  p-2 dark:text-black dark:bg-slate-700 ">
        <div className="navbar-start">
          {user ? (
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img src="" alt="" />
                  )}
                </div>
              </label>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                <li className="">
                  <button className="btn btn-sm uppercase">
                    {user.displayName}
                  </button>
                </li>

                <li className="">
                  {user && isAdmin && (
                    <Link
                      to={"/dashboard/adminHome"}
                      className="btn btn-sm uppercase"
                    >
                      Dashboard
                    </Link>
                  )}
                  {user && !isAdmin && (
                    <Link
                      to={"/dashboard/home"}
                      className="btn btn-sm uppercase"
                    >
                      Dashboard
                    </Link>
                  )}
                </li>

                <li className="">
                  <button onClick={logOut} className="btn btn-sm uppercase">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-60 ">{links}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center  mr-5 md:mr-4 lg:mr-0">
            <button
              onClick={handleTheme}
              className="btn btn-sm rounded-3xl mr-5"
            >
              {theme === "dark" ? <BsSun /> : <GiNightSleep />}
            </button>
            <img src={logo} className="w-40 h-14" alt="" />
          </div>

          <div className="dropdown">
            <label
              onClick={toggleMenu}
              tabIndex={0}
              className="btn btn-ghost lg:hidden "
            >
              {isMenuVisible ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <AiOutlineMenuUnfold className="text-2xl" />
              )}
            </label>
            {isMenuVisible && (
              <ul className="menu menu-sm dropdown-content right-1 mt-2 z-[1] p-2 shadow bg-blue-300 rounded-lg w-64 mx-auto text-center">
                {links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
