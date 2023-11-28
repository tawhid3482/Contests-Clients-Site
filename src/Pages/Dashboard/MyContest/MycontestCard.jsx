import { Helmet } from "react-helmet-async";

const MycontestCard = ({ item }) => {
  const {
    img,
    name,
    shortDescription,
    deadline,
    email,
  } = item;
  return (
    <div className="my-5 dark:bg-slate-700 dark:text-black">
       <Helmet>
        <title>LOREMIPSUM | MY CONTESTS</title>
      </Helmet>
      <div className="card card-side bg-base-100 shadow-xl md:h-72 w-full">
        <figure>
          <img
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase text-3xl">{name}</h2>
          <h2 className="card-title text-2xl">{email}</h2>
          <p><span className="text-pink-500">last-date:</span> {deadline}</p> 
          <p className="text-lg">{shortDescription}</p> 
         
        </div>
      </div>
    </div>
  );
};

export default MycontestCard;
