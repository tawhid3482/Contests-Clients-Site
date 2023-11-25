import UseCard from "../../Hooks/UseCard";
import Banner from "./Banner/Banner";
import ContestCard from "./ContestCard/ContestCard";

const Home = () => {
  const [contests] = UseCard();
  // console.log(contests)

    return (
        <div>
          <Banner contests={contests} ></Banner>
          <ContestCard></ContestCard>
        </div>
    );
};

export default Home;