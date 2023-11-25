import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import ContestDetailsShow from "./ContestDetailsShow";

const ContestDetails = () => {
  const [contestDetail, setContestDetails] = useState(null);

  const data = useLoaderData();
  const { _id } = useParams();

  useEffect(() => {
    if (data) {
      const findContests = data?.find((contest) => contest?._id === _id);
      setContestDetails(findContests);
      console.log(findContests);
    }
  }, [_id, data]);

  return (
    <div>
      <Helmet>
        <title>Saikat | Contests Details</title>
      </Helmet>
      <div className="">
        {contestDetail ? (
          <ContestDetailsShow
            contestDetail={contestDetail}
          ></ContestDetailsShow>
        ) : (
          <div className="text-center text-4xl"></div>
        )}
      </div>
    </div>
  );
};

export default ContestDetails;
