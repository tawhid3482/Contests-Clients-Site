import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import Register from './Register'

const Registration = () => {
  const [resContests, setContests] = useState();
  const item = useLoaderData()
  const { _id } = useParams();

  useEffect(() => {
    if (item) {
      const findContests = item?.find((contest) => contest?._id === _id);
      setContests(findContests);
    }
  }, [item, _id]);
  return (
    <div>
      <Helmet>
        <title>LOREMIPSUM | Registration</title>
      </Helmet>
      <div className="">
        
            {resContests ? (
                <Register
                  resContests={resContests}
                ></Register>
              ) : (
                <div className="text-center text-4xl"></div>
              )}
        
      </div>
    </div>
  );
};

export default Registration;
