import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";



const NavBar = () => {
const {user, logOut}=useContext(AuthContext)
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
        <li>
            <Link to='/'>
            <button className="btn">
            <TiShoppingCart />
    <div className="badge badge-secondary">+99</div>
            </button>
            </Link>
        </li>
        {
        user?
         <>
       {/* <span>
     {user?.displayName }
    </span> */}
         <button onClick={handleLogOut} className="btn ">Log Out</button>
        </>: 
        <>
            <li><Link to='/login'>Login</Link></li>
        </>
    }
        
     
    </>

  

    return (
        <>
            <div className="flex mx-auto  container p-2 fixed z-10 text-white  bg bg-black opacity-40 justify-between">
                <div className="navbar-start">
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

