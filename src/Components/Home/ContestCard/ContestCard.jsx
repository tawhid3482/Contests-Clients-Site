import ContestCards from "./ContestCards";

const ContestCard = ({ item, filterCards }) => {
  const limitContests = item?.slice(0,5)
  const limitContests2 = filterCards?.slice(0,5)
  return (
    <div className="dark:bg-slate-700 dark:text-slate-100">
      <div className="my-10 ">
        <div className="flex flex-wrap justify-center  items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
          {limitContests2?.length > 0 ? (
            limitContests2?.map((contest) => (
              <ContestCards key={contest._id} contest={contest} />
            ))
          ) : (
            <div></div>
          )}
        </div>
        {limitContests?.length > 0 && (
          <div className={`mt-10 ${limitContests2 ? "hidden" : ""}`}>
            <div className="flex flex-wrap justify-center items-center md:grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {limitContests?.map((contest) => (
                <ContestCards key={contest._id} contest={contest} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContestCard;
