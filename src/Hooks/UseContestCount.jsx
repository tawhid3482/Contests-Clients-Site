import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseContestCount = () => {

    const axiosSecure =UseAxiosSecure()
    const { refetch, data: contestCounts = [] } = useQuery({
        queryKey: ["counts"],
        queryFn: async () => {
          const res = await axiosSecure.get("/contestCount"
          );
          return res.data;
        },
      });

    return [contestCounts,refetch]
};

export default UseContestCount;