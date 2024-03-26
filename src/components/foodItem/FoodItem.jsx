// react
import { useContext } from "react";
// components
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
// styles
import "./FoodItemStyle.css";

const FoodItem = ({ id, name, price, desc, image }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food_item">
      <div className="food_item_img_container">
        <img src={image} alt="food_item_image" className="food_item_image" />
        {!cartItems[id] 
        ? (
          <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="img" />
        ) : (
          <div className="food_item_counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove_icon_red" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating_starts" />
        </div>
        <p className="food_item_desc">{desc}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
