const MycontestCard = ({ item }) => {
  const {
    _id,
    img,
    name,
    count,
    shortDescription,
    contestDescription,
    contestPrize,
    deadline,
    email,
    Name
  } = item;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl md:h-80 w-full">
        <figure>
          <img
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p><span className="text-pink-500">last-date:</span> {deadline}</p> 
          <p>{shortDescription}</p> 
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MycontestCard;
