import { FaTrash } from "react-icons/fa";
import UseRegister from "../../../Hooks/UseRegister";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import toast from "react-hot-toast";

const ResContest = () => {
  const [resUser,refetch] = UseRegister();
  const totalPrice = resUser.reduce((total, item) => total + item.fee, 0);
const axiosSecure= UseAxiosSecure()
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       axiosSecure.delete(`/registers/${id}`)
       .then(res =>{
        if(res.data.deletedCount > 0){
            toast.success('contest deleted successfully')
            refetch()
        }
       })
      }
    });
  };
  return (
    <div className="text-center">
      <div className="md:flex md:justify-between md:items-center space-y-3 md:space-y-0 ">
        <p className="text-xl lg:text-3xl font-semibold uppercase">
          Your Registration:{" "}
          <span className="text-pink-500">{resUser.length}</span>{" "}
        </p>
        <p className="text-xl lg:text-3xl font-semibold uppercase">
          Total Fee : <span className="text-pink-500">${totalPrice}</span>
        </p>
        <div className="uppercase flex justify-center items-center gap-3">
          <p className="text-xl  lg:text-3xl font-semibold">Confirm:</p>
          <button className="btn text-xl btn-secondary uppercase">Pay</button>
        </div>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="table md:w-full    ">
          {/* head */}
          <thead className="text-lg border bg-pink-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Contest Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {resUser.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="uppercase">{item?.name}</p>
                </td>
                <td>
                  <p>{item?.Name}</p>
                </td>
                <td>{item?.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="btn"
                  >
                    <FaTrash className="text-xl text-pink-500"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResContest;
