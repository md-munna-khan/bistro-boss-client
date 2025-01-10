import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBook, FaCartShopping, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdOutlineRateReview } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
    const[cart]=useCart()
    // todo 
    const [isAdmin]= useAdmin() 
    return (
        <div className="flex  mx-4 my-4 ">
            <div className="w-64   bg-orange-500 min-h-screen">
            <ul className="menu p-4">
               {
                isAdmin?
                <> 
                
           
                <li><NavLink to='/dashboard/admin-home'>
                <IoHome />
               Admin  Home</NavLink></li>

                <li><NavLink to='/dashboard/add-items'>
                <FaUtensils></FaUtensils>
           Add Items</NavLink></li>

                <li><NavLink to='/dashboard/manage-items'>
              <FaList></FaList>
          Manage Items</NavLink></li>

                <li><NavLink to='/dashboard/manage-bookings'>
              <FaBook></FaBook>
          Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/users'>
            <FaUsers></FaUsers>
        All Users</NavLink></li>
                </>
                : 
                <>
                 <li><NavLink to='/dashboard/carts'>
                <FaCartShopping />
                My Cart ({cart.length})</NavLink></li>
                <li><NavLink to='/dashboard/user-home'>
                <IoHome />
               User Home</NavLink></li>
                <li><NavLink to='/dashboard/History'>
                <SlCalender />
          Payment History</NavLink></li>
                <li><NavLink to='/dashboard/review'>
                <MdOutlineRateReview />
          Add a Review</NavLink></li>
                <li><NavLink to='/dashboard/paymentHistory'>
                <FaBookmark />
          Real Payment History</NavLink></li>
                </>
               }

          {/*  */}
          <div className="divider"></div>
          <li><NavLink to='/'>
                <IoHome />
                Home</NavLink></li>
          <li><NavLink to='/order/salad'>
          <FaBorderAll />
               Order Food</NavLink></li>
            </ul>
            </div>
            <div className="flex-1 p-8"> 
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;