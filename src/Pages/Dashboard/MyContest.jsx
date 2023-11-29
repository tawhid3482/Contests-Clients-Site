import UseRes from "../../Hooks/UseRes";
import DashboardSectionTitle from "./DashboardSectionTiltle/DashboardSectionTitle";
import MycontestCard from "./MyContest/MycontestCard";

const MyContest = () => {
    const [saikat]= UseRes()
    
    return (
       <div className="">
        <DashboardSectionTitle title={'My Contests'}></DashboardSectionTitle>
         <div className="grid grid-cols-1 gap-5 ">
            {
                saikat?.map((item)=><MycontestCard key={item._id} item={item}></MycontestCard>)
            }
        </div>
       </div>
    );
};

export default MyContest;