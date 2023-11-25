import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";

const MainLayOut = () => {
  const location = useLocation()
  const isloginPage = location.pathname.includes('login') ||  location.pathname.includes('signUp')
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Saikat | Home</title>
      </Helmet>
    {isloginPage || <Navbar></Navbar>}
      <Outlet></Outlet>
     { isloginPage || <Footer></Footer>}
    </div>
  );
};

export default MainLayOut;
