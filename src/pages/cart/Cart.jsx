// react
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';
// components
import { StoreContext } from "../../context/StoreContext";
// styles
import "./CartStyle.css";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart_items">
        <div className="cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart_items_title cart_items_item">
                  <img src={item.image} alt="image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart_bottom">
        <div className="cart_total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Free</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>Procced to checkout</button>
        </div>
        <div className="cart_promocode">
          <div>
            <p>If you have a promocode, enter here</p>
            <div className="cart_promocode_input">
              <input type="text" placeholder="Promocode"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
