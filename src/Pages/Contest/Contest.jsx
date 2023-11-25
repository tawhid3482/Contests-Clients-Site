import UseCard from "../../Hooks/UseCard";
import AllContest from "./AllContest";

const Contest = () => {
  const [contests] = UseCard();
  console.log(contests);

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {
        contests?.map((contest)=><AllContest key={contest._id} contest={contest}></AllContest>)
    }
  </div>;
};

export default Contest;
