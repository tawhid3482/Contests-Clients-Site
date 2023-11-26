import SectionTitle from "../../Shared/SectionTitle";
import team from '../../assets/teams/1-RR0421-Cline-high-performing-team-members-900x550.jpg'

import './Team.css'


const Team = () => {
    return (
        <div className="team-item my-8 ">
            <SectionTitle  title={'Our Teams'}></SectionTitle>

            <div className="md:flex justify-center items-center md:gap-16 py-12 px-36">
                    <div className="w-1/2">
                        <img src={team} className="" alt="" />
                    </div>
                    <div className="w-1/2 text-black space-y-2 ">
                        <p className="text-4xl font-semibold">If you any question about us?</p>
                        <p className="text-xl">Contact our team member </p>
                        <h2 className="text-xl">At Our Contest platform, we take pride in our dedicated and innovative team that powers the engine behind our cutting-edge contest creation platform. Each member brings a unique set of skills and expertise to the table, contributing to the success and creativity that define our platform....</h2>
                       <div className="text-center">
                       <button className="btn btn-secondary mt-5">Read more</button>
                       </div>
                    </div>
            </div>
        </div>
    );
};

export default Team;