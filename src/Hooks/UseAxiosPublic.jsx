import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://assingment-12-server-bay.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;