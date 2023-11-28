import { useLoaderData, useNavigate } from "react-router-dom";
import DashboardSectionTitle from "../DashboardSectionTitle";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`;

const UpdateContest = () => {
  const item = useLoaderData();
  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.img[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const contestItem = {
        name: data.name,
        count: data.count,
        fee: parseFloat(data.fee),
        deadline: data.deadline,
        contestDescription: data.contestDescription,
        shortDescription: data.shortDescription,
        contestPrize: data.contestPrize,
        img: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(
        `/contests/${item._id}`,
        contestItem
      );
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        toast.success(`${data.name} updated to the contests`);
        navigate('/dashboard/manage')
      }
    }
  };
  return (
    <div className="dark:bg-slate-700 dark:text-black">
       <Helmet>
        <title>LOREMIPSUM | UPDATE</title>
      </Helmet>
      <DashboardSectionTitle title={"Update Contests"}></DashboardSectionTitle>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Contest Name</span>
              </label>
              <input
                type="text"
                placeholder="Contest Name"
                defaultValue={item?.name}
                {...register("name")}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Count</span>
              </label>
              <input
                type="text"
                placeholder="Count"
                defaultValue={item?.count}
                {...register("count")}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* deadline */}
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Dead line</span>
              </label>
              <input
                type="text"
                placeholder="Dead line "
                defaultValue={item?.deadline}
                {...register("deadline")}
                className="input input-bordered w-full "
              />
            </div>
            {/* fee */}
            <div className="form-control w-full my-6 ">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Fee</span>
              </label>
              <input
                type="number"
                placeholder="Fee"
                defaultValue={item?.fee}
                {...register("fee")}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:bg-slate-700 dark:text-slate-100">Contest Description </span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("contestDescription")}
              placeholder="Contest Description "
              defaultValue={item?.contestDescription}
            ></textarea>
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Short Description </span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                {...register("shortDescription")}
                placeholder="Short Description "
                defaultValue={item?.shortDescription}
              ></textarea>
            </div>
            <div className="form-control w-full md:w-1/2 my-6 ">
              <label className="label">
                <span className="label-text dark:bg-slate-700 dark:text-slate-100">Contest Prize</span>
              </label>
              <input
                type="text"
                placeholder="Contest Prize"
                defaultValue={item?.contestPrize}
                {...register("contestPrize")}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("img")}
              type="file"
            //   defaultValue={item?.img}
              className="file-input w-full max-w-xs"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-secondary">Update Contest</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateContest;
