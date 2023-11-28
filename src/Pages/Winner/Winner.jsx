import WinnerCard from "./WinnerCard";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Winner = () => {
  const axiosSecure =UseAxiosSecure()

  const { data: winners = [] } = useQuery({
      queryKey: ["winners"],
      queryFn: async () => {
        const res = await axiosSecure.get("/winners"
        );
        return res.data;
      },
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5  ">
      {winners?.map((winner) => (
        <WinnerCard key={winner._id} winner={winner}></WinnerCard>
      ))}
    </div>
  );
};

export default Winner;
