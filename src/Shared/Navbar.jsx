import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";



const NavBar = () => {
const {user, logOut}=useContext(AuthContext)
const [cart]=useCart()
const [isAdmin]= useAdmin()
const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch((error)=> console.log(error))
}
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to='/secret'>secret</Link></li>
        {
            user && isAdmin &&   <li><Link to='/dashboard/admin-home'>Admin Home</Link></li>
        }
        {
            user && isAdmin &&   <li><Link to='/dashboard/user-home'>User Home</Link></li>
        }
        <li>
            <Link to='/dashboard/carts'>
            <p className="items-center inline-flex">
          
    <div className="badge badge-secondary">+{cart.length}</div>
    <TiShoppingCart className="text-2xl" />
            </p>
            </Link>
        </li>
        {
        user?
         <>
       {/* <span>
     {user?.displayName }
    </span> */}
         <p onClick={handleLogOut} className="items-center inline-flex">Log Out</p>
        </>: 
        <>
            <li><Link to='/login'>Login</Link></li>
        </>
    }
        
     
    </>

  

    return (
        <>
            <div className="flex mx-auto  container p-2 fixed z-10 text-white  top-0 bg-black opacity-80 justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-black shadow  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                  <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;

