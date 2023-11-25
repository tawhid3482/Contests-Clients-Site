const WinnerCard = ({ winner }) => {
  const { contestPrize, winnerName, winnerImage, shortDescription } = winner;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-80 ">
        <figure>
          <img src={winnerImage} alt="name" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{winnerName}</h2>
          <p>{contestPrize}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
