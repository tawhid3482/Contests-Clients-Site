import { useForm } from "react-hook-form";
import sign from "../../assets/login/360_F_517139142_ftw0Y7hSAL0f7fgmA9x2g2ff72pCRmUs-removebg-preview.png";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SingUp = () => {
  const axiosPublic = UseAxiosPublic();
  const { CreateUser, UpdateProfile } = UseAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    CreateUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      UpdateProfile(data.name, data.photo)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user save database");
              reset();
              toast.success("Your account created successfully");
              navigate(from, { replace: true });
            }
          });
        })

        .catch(() => {
          toast.error("Something wrong please try again");
        });
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>LOREMIPSUM | SIGN UP</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center flex flex-col justify-center items-center lg:text-left">
            <h1 className="text-5xl font-bold"></h1>
            <img src={sign} className="w-full md:w-[650px]" alt="" />
          </div>

          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  {...register("photo", { required: true })}
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-500">
                    Photo url field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-600"> Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">
                    {" "}
                    Password must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    {" "}
                    Password must be less then 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    {" "}
                    Password must be some specail character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-secondary "
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center ">
              <p>
                New here? 
                <Link className="text-pink-500 ml-2" to="/login">
                   Sign in
                </Link>
              </p>
            </div>
            <div className="text-center p-4 ">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
