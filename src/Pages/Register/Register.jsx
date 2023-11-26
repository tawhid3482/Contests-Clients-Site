
import { useForm } from "react-hook-form";
import Container from "../../Shared/Container/Container";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseRegister from "../../Hooks/UseRegister";
import { useNavigate } from "react-router-dom";


const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`;

const Register = ({ resContests }) => {
  const [,refetch]=UseRegister()
  const navigate = useNavigate()
  const axiosSecure = UseAxiosSecure()
  console.log(resContests);
  const {
    _id,
    img,
    name,
    count,
    shortDescription,
    contestDescription,
    contestPrize,
    fee,
    deadline,
  } = resContests;
  
  const { user } = UseAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res.data);
    if (res.data.success) {
      const resMember = {
        name: data.name,
        email: data.email,
        fee: parseFloat(data.fee),
        choose: data.choose,
        Name:data.Name,
        image: res.data.data.display_url,
        contestId: _id,
        img,
        count,
        shortDescription,
        contestDescription,
        contestPrize,
        deadline,
      };
      const menuRes = await axiosSecure.post("/registers", resMember);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        toast.success("registration completed");
        refetch()
        navigate('/dashboard/resContests')
      }
    }
  };

  return (
    <div>
      <Container>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>

           <div className="flex gap-6">
           <div className="form-control w-full my-3 ">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-3 ">
              <label className="label">
                <span className="label-text">Contest Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Contest Name"
                {...register("Name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
           </div>
            
            <div className="flex gap-6">
              {/* email */}
              <div className="form-control w-full my-3 ">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>
              {/* fee */}
              <div className="form-control w-full my-3">
                <label className="label">
                  <span className="label-text">Contest Fee*</span>
                </label>
                <input
                  type="number"
                  defaultValue={fee}
                  placeholder="Contest fee"
                  {...register("fee", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Why You Choose That?</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("choose")}
                defaultValue={"<-- I like this -->"}
                placeholder="tell Details"
              ></textarea>
            </div>
            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            <div className="text-center mb-8 ">
              <button className="btn btn-secondary ">Register</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
