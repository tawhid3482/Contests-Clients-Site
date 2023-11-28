import { Helmet } from "react-helmet-async";
import DashboardSectionTitle from "../DashboardSectionTiltle/DashboardSectionTitle";

const UserWinner = () => {
    return (
        <div>
             <Helmet>
        <title>LOREMIPSUM | WINNER</title>
      </Helmet>
            <DashboardSectionTitle title={' Winning Contests'}></DashboardSectionTitle>
            <div className="flex justify-center items-center h-96">
                <p className="text-4xl font-bold">Sorry! You are not winner</p>
            </div>
        </div>
    );
};

export default UserWinner;