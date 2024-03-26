// react
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// components
import { StoreContext } from "../../context/StoreContext";
// imgs
import { assets } from "../../assets/assets";
// styles
import "./NavbarStyle.css";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="navbar_menu">
        <Link
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#"
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          Mobile app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt="search_icon" />
        <div className="navbar_search_icon">
         <Link to='/cart'><img src={assets.basket_icon} alt="basket_icon"/></Link> 
         <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sing in</button>
      </div>
    </div>
  );
};

export default Navbar;
