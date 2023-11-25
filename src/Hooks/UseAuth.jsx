import { useContext } from "react";
import  { AuthContext } from "../Components/Provider/AuthProvider";

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all
};

export default UseAuth;