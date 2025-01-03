import useCart from "../../hooks/useCart";


const Carts = () => {
    const [cart]=useCart()
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    return (
        <div>
        <div className=" flex justify-evenly">
            <h2 className="text-2xl">items:{cart.length}</h2>
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
             {index}
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
              <button className="btn btn-ghost btn-xs">details</button>
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