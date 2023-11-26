import { FaGoogle } from "react-icons/fa";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const { LoginGoogle } = UseAuth();

  const handleGoogleLogin = () => {
    LoginGoogle().then((result) => {
      // console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success('Your account created successfully')
        navigate("/");
      });
    });
  };

  return (
    <div>
      <div className="">
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn px-10 ">
          <FaGoogle className="text-2xl text-pink-500"></FaGoogle> Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
