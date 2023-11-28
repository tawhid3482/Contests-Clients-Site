import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ContestDetailsShow = ({ contestDetail }) => {
  const {
    _id,
    img,
    name,
    count,
    shortDescription,
    contestDescription,
    contestPrize,
    deadline,
  } = contestDetail || {};

  return (
    <div>
      <Helmet>
        <title>LOREMIPSUM | Details</title>
      </Helmet>
      <div className="card w-full  lg:card-side bg-base-100 shadow-xl dark:bg-slate-700 dark:text-slate-100">
        <figure className="w-full md:w-2/3">
          <img src={img} className="w-2/3 " alt="Album" />
        </figure>
        <div className="card-body w-full  lg:w-1/3">
          <h2 className="card-title text-3xl">{name}</h2>
          <h2 className="card-title text-3xl">Count:{count}</h2>

          <p className="text-lg font-semibold">
            {shortDescription
              ? shortDescription
              : "Food is a vital aspect of human life, providing nourishment, pleasure, and cultural significance. " +
                "It encompasses a wide variety of flavors, textures, and aromas, reflecting the rich diversity of " +
                "cultures and cuisines around the world."}
          </p>

          <p className="text-2xl font-semibold text-pink-400 ">
            Prize: {contestPrize}
          </p>
          <p className="text-xl"> {contestDescription}</p>
          <p className="text-2xl"> last date: {deadline}</p>
          <div className="card-actions justify-end">
            <Link to={`/registration/${_id}`}>
              <button className="btn bg-pink-400 text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetailsShow;
