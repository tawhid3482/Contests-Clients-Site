import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseAdmin = () => {
    const { user ,loading} = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isPending:isAdminPanding} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`)
      console.log(res.data)
      return res.data?.admin
    },
  });
  return [isAdmin,isAdminPanding]
};

export default UseAdmin;