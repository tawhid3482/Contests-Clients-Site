import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllContest = ({ contest }) => {
    const {_id, img, name, count, shortDescription } = contest || {};
    return (
      <div className="my-10">
      <Helmet>
        <title>LOREMIPSUM | ALL CONTESTS</title>
      </Helmet>
        <div data-aos="flip-right"  className="card w-full md:w-80 lg:w-96 bg-base-100 h-96 shadow-xl dark:bg-slate-500 dark:text-slate-100">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{shortDescription}</p>
            <p>Count:{count}</p>
            <div className="card-actions">
  
              <Link to={`/contestDetails/${_id}`}>
                <button className="btn btn-secondary">Details</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllContest;