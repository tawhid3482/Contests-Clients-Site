import { useEffect, useState } from "react";
import WinnerCard from "./WinnerCard";

const Winner = () => {
  const [winners, setWinners] = useState();

  useEffect(() => {
    fetch("winner.json")
      .then((res) => res.json())
      .then((data) => {
        setWinners(data);
      });
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 ">
      {winners?.map((winner) => (
        <WinnerCard key={winner._id} winner={winner}></WinnerCard>
      ))}
    </div>
  );
};

export default Winner;
