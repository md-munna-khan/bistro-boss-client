import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter= location.pathname.includes('login') ||  location.pathname.includes('signup')
    console.log(location)
    return (
        <div className="container mx-auto my-10">
       {
        noHeaderFooter||     <nav>
        <Navbar></Navbar>
       </nav>
       }
           <main>
            <Outlet></Outlet>
           </main>
       {
        noHeaderFooter||     <footer>
        <Footer></Footer>
       </footer>
       }
        </div>
    );
};

export default MainLayout;