import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";


const UseRes = () => {
  const axiosSecure =UseAxiosSecure()
  const {user}=UseAuth()
  const {refetch, data:registers=[]}=useQuery({
      queryKey:['registers',user?.email],
      queryFn: async ()=>{
          const res = await axiosSecure.get(`/resMembers?email=${user?.email}`)
          return res.data
      }
  })
  return [registers,refetch]
};

export default UseRes;