import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const Allusers = () => {
    const axiosSecure=useAxiosSecure()
    const {data:users=[],refetch}= useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
          console.log(res.data)
          if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an admin Now`, 
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }

    const handleDelete=user=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
          axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            // console.log(res.data);
            if (res.data.deletedCount> 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
        }
      });
    }
    return (
        <div className="">
          <div className="flex justify-evenly text-3xl" >
          <h2>all users</h2>
          <h2>total users {users.length}</h2>
          </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Roll</th>   
        <th>Action</th>   
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map((user,index)=>   <tr key={user._id}>
            {index+1}
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
    {user.role === 'admin'? 'Admin': (<button onClick={()=>handleMakeAdmin(user)}
    className="btn btn-ghost text-white bg-orange-500 btn-xs text-2xl">
                           <FaUsers /></button>)}
            </td>
            <td>
                   <button onClick={()=>handleDelete(user)} className="btn btn-ghost btn-xs text-2xl">
                   <FaRegTrashAlt /></button>
            </td>
          </tr>)
    }
   
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allusers;