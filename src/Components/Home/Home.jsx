import UseCard from "../../Hooks/UseCard";
import Team from "../../Pages/Team/Team";
import Banner from "./Banner/Banner";
import ContestCard from "./ContestCard/ContestCard";
import RecentWinner from "./RecentWinner";

const Home = () => {
  const [contests] = UseCard();
  // console.log(contests)

    return (
        <div>
          <Banner contests={contests} ></Banner>
          <ContestCard></ContestCard>
          <RecentWinner></RecentWinner>
          <Team></Team>
        </div>
    );
};

export default Home;