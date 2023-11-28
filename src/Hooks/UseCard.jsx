import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseCard = () => {
const axiosSecure =UseAxiosSecure()

    const { refetch, data: contests = [] } = useQuery({
        queryKey: ["contests"],
        queryFn: async () => {
          const res = await axiosSecure.get("/contests"
          );
          return res.data;
        },
      });

    return [contests,refetch]
};

export default UseCard;
