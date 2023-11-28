import { Helmet } from "react-helmet-async";

const WinnerCard = ({ winner }) => {
  const { name,img,congratulation,prize,deadline,Name} = winner;
  return (
    <div className="dark:bg-slate-700 dark:text-slate-100">
       <Helmet>
        <title>LOREMIPSUM | WINNERS</title>
      </Helmet>
   <div data-aos="flip-left" className="card w-full md:w-80 lg:w-96 lg:h-96 bg-pink-200 shadow-xl dark:bg-slate-700 dark:text-slate-100w">
    
  <figure className="px-10 pt-10">
    <img src={img} alt="" className="rounded-full w-40 h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-orange-400 text-3xl font-bold">{congratulation}</h2>
    <p className="text-lg font-semibold">Winner Name: {name}</p>
    <p className="text-lg font-semibold">Contest Name: {Name}</p>
    <p className="text-lg font-semibold">Winning Prize: {prize}</p>
    <p className="text-lg font-semibold">Last date to collect Prize: {deadline}</p>
    
  </div>
</div>
    </div>
  );
};

export default WinnerCard;
