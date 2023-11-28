import { Helmet } from "react-helmet-async";
import UseCard from "../../Hooks/UseCard";
import Team from "../../Pages/Team/Team";
import Banner from "./Banner/Banner";
import ContestCard from "./ContestCard/ContestCard";
import RecentWinner from "./RecentWinner";

const Home = () => {
  const [contests] = UseCard();
  // console.log(contests)

    return (
        <div className="dark:bg-slate-700 dark:text-slate-100">
           <Helmet>
        <title>LOREMIPSUM | HOME</title>
      </Helmet>
          <Banner contests={contests} ></Banner>
          <ContestCard></ContestCard>
          <RecentWinner></RecentWinner>
          <Team></Team>
        </div>
    );
};

export default Home;