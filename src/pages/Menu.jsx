import { Helmet } from "react-helmet";

import menuImg  from "../assets/menu/banner3.jpg";
import desertImg  from "../assets/menu/dessert-bg.jpeg";
import pizzaImg  from "../assets/menu/pizza-bg.jpg";
import saladImg  from "../assets/menu/salad-bg.jpg";
import soupImg  from "../assets/menu/soup-bg.jpg";
import Covered from "../Shared/Covered";

import useMenu from "../hooks/useMenu";
import SectionTittle from "../HomeComponent/SectionTittle";
import MenuCategory from "../MenuComponent/MenuCategory";



const Menu = () => {
    const [menu]=useMenu()
    const dessert =menu.filter(item=> item.category==='dessert');
    const soup =menu.filter(item=> item.category==='soup');
    const salad =menu.filter(item=> item.category==='salad');
    const pizza =menu.filter(item=> item.category==='pizza');
    const offered =menu.filter(item=> item.category==='offered')
    return (
        <div>
                 <Helmet>
        <title>Bistro|| Menu</title>
      </Helmet>
   <Covered img={menuImg} title={'Our Menu'}></Covered>
   <SectionTittle subHeading={'Dont miss'} heading={'todays offer'}></SectionTittle>
<MenuCategory items={offered}></MenuCategory>
<MenuCategory items={dessert} title={'desert'} img={desertImg}></   MenuCategory>
<MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
<MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
<MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>

        </div>
      
    );
};

export default Menu;