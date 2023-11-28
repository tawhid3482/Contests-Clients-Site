import toast from "react-hot-toast";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import DashboardSectionTitle from "../DashboardSectionTiltle/DashboardSectionTitle";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`;

const AddWinner = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.img[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });


    if (res.data.success) {
      const contestItem = {
        name: data.name,
        Name: data.Name,
        prize: data.prize,
        deadline: data.deadline,
        congratulation: data.congratulation,
        img: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/winners", contestItem);


      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${data.name} add to the Winner`);
      }
    }
  };
  return (
    <div className="dark:bg-slate-700 dark:text-black">
       <Helmet>
        <title>LOREMIPSUM | ADD WINNERS</title>
      </Helmet>
      <DashboardSectionTitle title={"Add Winners"}></DashboardSectionTitle>
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex  gap-6">

              <div className="form-control w-full my-6 ">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Winner Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Winner Name"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full my-6 ">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Prize Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Prize"
                  {...register("prize", { required: true })}
                  className="input input-bordered w-full "
                />
              </div>

            </div>
            <div className="flex gap-6 ">
             
              <div className="form-control w-full my-3  ">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100" >Dead line</span>
                </label>
                <input
                  type="text"
                  placeholder="Dead line "
                  {...register("deadline")}
                  className="input input-bordered w-full  "
                />
              </div>
              <div className="form-control w-full  my-3 ">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Congratulation</span>
                </label>
                <input
                  type="text"
                  placeholder="Congratulation "
                  {...register("congratulation")}
                  defaultValue={'Congratulation'}
                  className="input input-bordered w-full  "
                />
              </div>
            </div>
            <div className="form-control w-full  my-3 ">
                <label className="label">
                  <span className="label-text dark:bg-slate-700 dark:text-slate-100">Contest Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Contest Name "
                  {...register("Name")}
                  className="input input-bordered w-full  "
                />
              </div>
       
            <div className="form-control w-full my-6">
              <input
                {...register("img", { required: true })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>

            <div className="text-center">
              <button className="btn btn-secondary">Add Contest</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWinner;
