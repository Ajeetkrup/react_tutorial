import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaDotCircle } from "react-icons/fa";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} altname="Logo-food-delivery" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online:{" "}
            {onlineStatus ? (
              <span className="veg-icon">
                <FaDotCircle />
              </span>
            ) : (
              <span className="non-veg-icon">
                <FaDotCircle />
              </span>
            )}
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li className="nav-item">
            <button
              className="auth"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
