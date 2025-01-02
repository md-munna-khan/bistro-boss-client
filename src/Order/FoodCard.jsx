import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name,recipe,image,category,price}= item||{}
    const {user}=useAuth()
    console.log(user)
    const navigate = useNavigate()
    const handleAddToCard=food=>{
    if(user && user.email){
      // send item to the database
    }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "please log in and add to the cart!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "first log it!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login')
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="relative">
         <div>
         <img className="object-cover"
            src={image}
            alt="Shoes" />
         </div>
           <div className="absolute  right-6 p-2 rounded-md text-white bg-gray-800  top-3">  <p>{price}</p></div>
        </div>
       
        <div className="card-body text-center">
          <h2 className="text-center text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div className="">
            <button onClick={()=> handleAddToCard(item)} className="p-2 bg-black  border-orange-300 text-orange-500 rounded  border-0 border-b-4  text-center">Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;