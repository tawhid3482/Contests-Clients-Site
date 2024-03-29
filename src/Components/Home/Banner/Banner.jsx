import { useEffect, useState, } from "react";
import ContestCard from "../ContestCard/ContestCard";

const Banner = () => {
  const [item,setcontests]=useState()

useEffect(()=>{
   fetch('https://assingment-12-server-bay.vercel.app/contests')
      .then((res) => res.json())
      .then((data) => setcontests(data));
},[])


const [searchQuery, setSearchQuery] = useState("");
const [filterCards, setFilterCards] = useState(item);

  const handleSearch = () => {
    const filteredCard = item?.filter(card =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilterCards(filteredCard);
  };

  return (
    <div className="mt-0 dark:bg-slate-700 dark:text-slate-100">
      <div
        className="hero h-96 mt-16 md:mt-0"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46KpeN6hs-tWsh1xk-rMBgXEpm5ykjNFZ_nlwE1g4NHTyZCEZVHrBSKQR2_Ypzzbn5a8&usqp=CAU)",
        }}
      >
        <div className="hero-overlay bg-black opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-white text-5xl font-bold ">
              Welcome to the Contest Platform
            </h1>
            <div className="flex items-center justify-center">
              <input
                value={searchQuery}
                type="text"
                placeholder="Search your contest here...."
                className="border-2 border-black text-black p-3 rounded-md input-bordered w-full max-w-xs"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="indicator">
                <button
                  onClick={handleSearch}
                  className="p-3 w-28 rounded-md bg-secondary text-white"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {
          <ContestCard
            item={item}
            filterCards={filterCards}
          ></ContestCard>
        }
      </div>
    </div>
  );
};

export default Banner;
