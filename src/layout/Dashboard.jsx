import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { MdOutlineRateReview } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div className="flex  mx-4 my-4 ">
            <div className="w-64   bg-orange-500 min-h-screen">
            <ul className="menu p-4">
                <li><NavLink to='/dashboard/carts'>
                <FaCartShopping />
                My Cart</NavLink></li>
                <li><NavLink to='/dashboard/user-home'>
                <IoHome />
               User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'>
                <SlCalender />
            Reservation</NavLink></li>
                <li><NavLink to='/dashboard/review'>
                <MdOutlineRateReview />
          Add a Review</NavLink></li>
                <li><NavLink to='/dashboard/booking'>
                <FaBookmark />
          My Bookings</NavLink></li>
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