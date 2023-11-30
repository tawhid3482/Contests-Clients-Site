import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { UpdateProfile } = UseAuth();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(name, photo);
    UpdateProfile(name,photo)
      .then((Result) => {
        const user = Result
        console.log(user);
        toast.success("Your profile updated successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Something wrong please try again");
      });
  };

  return (
    <div className="">
      <Helmet>
        <title>LOREMIPSUM | UPDATE PROFILE</title>
      </Helmet>

      <div className="hero min-h-screen bg-base-200 dark:bg-slate-700 dark:text-slate-100">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Your Profile</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered dark:text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo"
                  name="photo"
                  className="input input-bordered dark:text-black"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
