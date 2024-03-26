// react
import { useState } from "react";
// components
import { assets } from "../../assets/assets";
// styles
import "./LoginPopupStyle.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sing Up");
  return (
    <div className="login_popup">
      <form action="#" className="login_popup_container">
        <div className="login_popup_title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="cross_icon"
          />
        </div>
        <div className="login_popup_inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sing Up" ? "Create account" : "Login"}</button>
        <div className="login_popup_condition">
          <input type="checkbox" required />
          <p>By continuing, i angree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setCurrState("Sing Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already hane an account? <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
