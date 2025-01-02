

const MenuItemCards = ({item}) => {
    const {name,recipe,image,category,price}= item||{}
    return (
        <div className=" flex items-center space-x-4">
         <img style={{borderRadius : '0 200px 200px 200px'}} className="w-[110px] " src={image} alt="" />
           <div className="flex items-center">
          <div>
          <h1>{name}------------</h1>
          <p>{recipe}</p>
          </div>
          <p className="text-yellow-500">${price}</p>
           </div>
        </div>
    );
};

export default MenuItemCards;