import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainlayOut/MainLayOut";
import ErrorPage from "../Shared/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Components/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import ContestDetails from "../Shared/ContestDetails/ContestDetails";
import PrivateRoute from "./PrivateRoute";
import Contest from "../Pages/Contest/Contest";
import Register from "../Pages/Register/Register";
import Winner from "../Pages/Winner/Winner";
import Best from "../Pages/Best/Best";

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
                loader:()=>fetch('fake.json')
            },
            {
                path:"registration/:_id",
                element:<Register></Register>,
                loader:()=>fetch('fake.json')
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
        
    }
])
        

export default Routes;