// import { useEffect, useState } from "react";
import SectionTittle from "../HomeComponent/SectionTittle";
import MenuItemCards from "../Shared/MenuItemCards";
import useMenu from "../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
// const[menu,setMenu]=useState([])
//     useEffect(()=>{
//         fetch('menu.json')
//         .then(res=>res.json())
//         .then(data=>{
//             const popularItems =data.filter(item=>item.category==="popular")
//            setMenu(popularItems)
//            console.log(popularItems)
//         })
//     },[])
    return (
        <div className="mb-10">
            <SectionTittle subHeading={"Popular Menu"}
            heading={"POPULAR ITEMS"}>

            </SectionTittle>
            <div className="grid md:grid-cols-2 gap-8 py-4">
                {
                   popular.map(item=><MenuItemCards key={item._id} item={item}></MenuItemCards>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;