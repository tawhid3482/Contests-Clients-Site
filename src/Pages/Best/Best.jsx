import { Helmet } from "react-helmet-async";
import Slider from "../../Components/Home/Slider/Slider";

const Best = () => {
    return (
        <div className="dark:bg-slate-700 dark:text-slate-100">
             <Helmet>
        <title>LOREMIPSUM | BEST</title>
      </Helmet>
           <Slider></Slider>
        </div>
    );
};

export default Best;