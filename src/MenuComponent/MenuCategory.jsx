import { Link } from "react-router-dom";
import Covered from "../Shared/Covered";
import MenuItemCards from "../Shared/MenuItemCards";



const MenuCategory = ({items,title,img}) => {

    return (
        <div className="mb-10">
  {title &&   <Covered img={img} title={title}></Covered>}
    <div className="grid md:grid-cols-2 gap-8 py-4 my-10">
                {
                   items.map(item=><MenuItemCards key={item._id} item={item}></MenuItemCards>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn "> Order Now</button>
            </Link>
    </div>
    );
};




  

export default MenuCategory;