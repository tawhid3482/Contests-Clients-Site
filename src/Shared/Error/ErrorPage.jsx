import { Link } from "react-router-dom";
import error from '../../assets/5-Best-Practices-in-Handling-HTTP-Errors-in-JavaScript-removebg-preview.png'
const ErrorPage = () => {
  return (
    <div className="">
      {/* <Helmet>
          <title>Pepper-Error</title>
      </Helmet> */}
      <div className="flex justify-center items-center ">
        <img
          src={error}
          className="h-[500px]"
          alt=""
        />
      </div>
      <div className="text-center mb-5">
        <Link to="/">
          <button className="btn bg-pink-500 text-white">Back home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
