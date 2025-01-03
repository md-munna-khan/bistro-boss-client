import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

import { FaRegTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Carts = () => {
    const [cart,refetch]=useCart()
    const axiosSecure=useAxiosSecure()
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    const handleDelete=id=>{
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
        
          axiosSecure.delete(`/carts/${id}`)
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
        <div>
        <div className=" flex justify-evenly">
            <h2 className="text-2xl">items:{cart?.length}</h2>
            <h2 className="text-2xl">Total Price:{totalPrice}</h2>
            <button className="btn btn-warning">Pay</button>
        </div>
      

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>#</th>
        <th>image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=> <tr key={item._id}>
            <th>
             {index+1}
            </th>
            <td> 
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
             
                
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{item.name}</div>
             
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-2xl">
              <FaRegTrashAlt /></button>
            </th>
          </tr>)
      }
     
    
    </tbody>
  
  </table>
</div>
        </div>
        
    );
};

export default Carts;