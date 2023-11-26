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
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
                loader:()=>fetch('http://localhost:5000/contests')
            },
            {
                path:"registration/:_id",
                element:<Registration></Registration>,
                loader:()=>fetch('http://localhost:5000/contests')
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
            element:<MyContest></MyContest>
        },
        {
            path:'myprofile',
            element:<MyProfile></MyProfile>
        },
        // admin routes
        {
            path:'users',
            element:<AllUsers></AllUsers>
        }
       ]
    }
])
        

export default Routes;