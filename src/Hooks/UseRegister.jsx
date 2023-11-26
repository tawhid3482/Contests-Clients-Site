import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseRegister = () => {
    const axiosSecure =UseAxiosSecure()
    const {user}=UseAuth()
    const {refetch, data:resUser=[]}=useQuery({
        queryKey:['resUser',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/registers?email=${user?.email}`)
            return res.data
        }
    })
    return [resUser,refetch]
};

export default UseRegister;