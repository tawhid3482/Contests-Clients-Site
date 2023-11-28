import { FaEdit, FaTrash } from "react-icons/fa";
import UseCard from "../../../../Hooks/UseCard";
import DashboardSectionTitle from "../DashboardSectionTitle";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ManageContest = () => {
  const [contests, refetch] = UseCard();
  const axiosSecure = UseAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contests/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("contest deleted successfully");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
       <Helmet>
        <title>LOREMIPSUM | MANAGE</title>
      </Helmet>
      <DashboardSectionTitle title={"Manage-Contests"}></DashboardSectionTitle>
      <div className=" m-3 ">
        <h2 className="text-3xl font-semibold">
          Total Contests: {contests?.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-lg bg-pink-400 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Fee</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contests?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.fee}</td>
                <td>
                  <Link to={`/dashboard/updateContest/${item._id}`}>
                    <button className="btn ">
                      <FaEdit className="text-xl text-pink-500"></FaEdit>
                    </button>
                  </Link>
                </td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="btn"
                  >
                    <FaTrash className="text-xl text-pink-500"></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
