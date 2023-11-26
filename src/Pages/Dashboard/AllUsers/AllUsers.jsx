import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
       axiosSecure.delete(`/users/${id}`)
       .then(res =>{
        if(res.data.deletedCount > 0){
            toast.success('contest deleted successfully')
            refetch()
        }
       })
      }
    });
  };

  const handleMakeAdmin = (user)=>{
console.log(user)
  }

  return (
    <div>
      <div className=" m-3 ">
        <h2 className="text-3xl font-semibold">Total Users: {users?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button 
                onClick={()=>handleMakeAdmin(user)}
                className="btn "><FaUsers className="text-xl text-pink-500"></FaUsers></button></td>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
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

export default AllUsers;
