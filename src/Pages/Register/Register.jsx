
const Register = () => {
  return (
    <div>
      asd
    </div>
  );
};

export default Register;






// import { useForm } from "react-hook-form";
// import { FaUtensils } from "react-icons/fa";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

// const imgae_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imgae_hosting_key}`;

// const Register = () => {

//     const {_id,name,}= useLoaderData()
//     const { register, handleSubmit,  } = useForm();


//     const onSubmit = async (data) => {
//         console.log(data);
//         const imageFile = { image: data.image[0] };
//         const res = await axiosPublic.post(image_hosting_api, imageFile, {
//           headers: {
//             "content-type": "multipart/form-data",
//           },
//         });
//         console.log(res.data);
//         if (res.data.success) {
//           const menuItem = {
//             name: data.name,
//             category: data.category,
//             price: parseFloat(data.price),
//             recipe: data.recipe,
//             image: res.data.data.display_url,
//           };
//           const menuRes = await AxiosSecure.patch(`/registers/${_id}`, menuItem);
//           console.log(menuRes.data);
//           console.log(menuRes.data.modifiedCount);
//           if (menuRes.data.modifiedCount > 0) {
//             // reset();
//             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: `${data.name} is updated to the menu`,
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           }
//         }
//       };

//     return (
//         <div>
//              <div className="">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-control w-full my-6 ">
//             <label className="label">
//               <span className="label-text">Recipe Name*</span>
//             </label>
//             <input
//               type="text"
//               defaultValue={name}
//               placeholder="Recipe Name"
//               {...register("name",  { required: true })}
//               className="input input-bordered w-full "
//             />
//           </div>
//           <div className="flex gap-6">
//             {/* category */}
//             <div className="form-control w-full my-6 ">
//               <label className="label">
//                 <span className="label-text">Category*</span>
//               </label>
//               <select
//                 {...register("category", { required: true })}
//                 className="select select-bordered w-full "
//               >
//                 <option disabled value="default">
//                   Select a Category
//                 </option>
//                 <option value="salad">Salad</option>
//                 <option value="pizza">Pizza</option>
//                 <option value="soup">Soup</option>
//                 <option value="dessert">Dessert</option>
//                 <option value="drinks">Drinks</option>
//               </select>
//             </div>
//             {/* price */}
//             <div className="form-control w-full my-6 ">
//               <label className="label">
//                 <span className="label-text">Price*</span>
//               </label>
//               <input
//                 type="number"
//                 placeholder="Price"
//                 {...register("price", { required: true })}
//                 className="input input-bordered w-full "
//               />
//             </div>
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Recipe Details</span>
//             </label>
//             <textarea
//               className="textarea textarea-bordered h-24"
//               {...register("recipe")}
//               placeholder="Recipe Details"
//             ></textarea>
//           </div>
//           <div className="form-control w-full my-6">
//             <input
//               {...register("image", { required: true })}
//               type="file"
//               className="file-input w-full max-w-xs"
//             />
//           </div>

//           <button className="btn ">
//             Update Item<FaUtensils className="text-xl ml-2"></FaUtensils>
//           </button>
//         </form>
//       </div>
//         </div>
//     );
// };

// export default Register;