import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

 const axiosSecure = axios.create({
    baseURL:'https://assingment-12-server-bay.vercel.app'
})
const UseAxiosSecure = () => {
    const navigate = useNavigate();
  const { logOut } = UseAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("stoop", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
    return axiosSecure
};

export default UseAxiosSecure;