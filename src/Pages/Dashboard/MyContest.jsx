import UseRegister from "../../Hooks/UseRegister";
import MycontestCard from "./MyContest/MycontestCard";

const MyContest = () => {
    const [resUser]=UseRegister()
    return (
        <div className="grid grid-cols-1 gap-5 ">
            {
                resUser?.map((item)=><MycontestCard key={item._id} item={item}></MycontestCard>)
            }
        </div>
    );
};

export default MyContest;