import { Helmet } from "react-helmet-async";
import login from "../../assets/login/istockphoto-1210117007-612x612-removebg-preview.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { LoginGoogle, loginByEmail } = UseAuth();
  
  const [disable, setdisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginByEmail(email, password).then((Result) => {
      const user = Result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your successfully login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  const handleValided = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Saikat | Login</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col  lg:flex-row-reverse  gap-52">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-200 ">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label ">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValided}
                  type="text"
                  placeholder="captcha"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-sm"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  disabled={disable}
                  className="btn btn-secondary"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center ">
              <p>
                New here?
                <Link className="text-pink-500" to="/signUp">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="text-center mt-5 flex flex-col justify-center items-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
            <img src={login} className="w-full md:w-[500px]" alt="" />
          </div>
          {/* <div className="text-center p-4">
            <SocialLogin></SocialLogin>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
