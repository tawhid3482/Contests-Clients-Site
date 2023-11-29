import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseRes = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: saikat = [] } = useQuery({
    queryKey: ["saikat", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/resMembers?email=${user?.email}`);
      return res.data;
    },
  });
  return [saikat, refetch];
};

export default UseRes;
