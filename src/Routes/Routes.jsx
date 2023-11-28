import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainlayOut/MainLayOut";
import ErrorPage from "../Shared/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Components/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import ContestDetails from "../Shared/ContestDetails/ContestDetails";
import PrivateRoute from "./PrivateRoute";
import Contest from "../Pages/Contest/Contest";
import Winner from "../Pages/Winner/Winner";
import Best from "../Pages/Best/Best";
import Registration from "../Pages/Register/Registration";
import Dashboard from "../Components/MainlayOut/Dashboard";
import ResContest from "../Pages/Dashboard/ResContest/ResContest";
import MyContest from "../Pages/Dashboard/MyContest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddContest from "../Pages/Dashboard/AddContests/AddContest";
import AdminRoute from "./AdminRoute";
import ManageContest from "../Pages/Dashboard/DashboardSectionTiltle/ManageContest/ManageContest";
import UpdateContest from "../Pages/Dashboard/DashboardSectionTiltle/UpdateContest/UpdateContest";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/DashboardSectionTiltle/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/DashboardSectionTiltle/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/DashboardSectionTiltle/UserHome/UserHome";
import AddWinner from "../Pages/Dashboard/AddWinner/AddWinner";
import UserWinner from "../Pages/Dashboard/UserWinner/UserWinner";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signUp',
                element:<SingUp></SingUp>
            },
            {
                path:'contest',
                element:<Contest></Contest>
            },
            {
                path:'contestDetails/:_id',
                element:<PrivateRoute><ContestDetails></ContestDetails></PrivateRoute>,
                loader:()=>fetch('https://assingment-12-server-bay.vercel.app/contests')
            },
            {
                path:"registration/:_id",
                element:<Registration></Registration>,
                loader:()=>fetch('https://assingment-12-server-bay.vercel.app/contests')
            },
            {
                path:'winner',
                element:<Winner></Winner>
            },
            {
                path:'best',
                element:<Best></Best>
            }

          
        ]
    },
    {
       path:'dashboard' ,
       element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
        {
            path:'resContests',
            element:<ResContest></ResContest>
        },
        {
            path:'mycontests',
            element:<PrivateRoute><MyContest></MyContest></PrivateRoute>
        },
        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path:'paymentHistory',
            element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
            path:'home',
            element:<UserHome></UserHome>
        },
        {
            path:'Mewinner',
            element:<UserWinner></UserWinner>
        },
        {
            path:'updateProfile',
            element:<UpdateProfile></UpdateProfile>
        },
        // admin routes
        {
            path:'users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
            path:'Addcontests',
            element:<AdminRoute><AddContest></AddContest></AdminRoute>
        },
        {
            path:'manage',
            element:<AdminRoute><ManageContest></ManageContest></AdminRoute>
        },
        {
            path:'updateContest/:id',
            element:<AdminRoute><UpdateContest></UpdateContest></AdminRoute>,
            loader:({params})=>fetch(`https://assingment-12-server-bay.vercel.app/contests/${params.id}`)
        },
        {
            path:'adminhome',
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

        },
        {
            path:'winner',
            element:<AdminRoute><AddWinner></AddWinner></AdminRoute>
        },

       ]
    }
])
        

export default Routes;