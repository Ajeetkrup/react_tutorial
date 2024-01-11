import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaDotCircle } from "react-icons/fa";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

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
          <li className="nav-item">
            <Link to="/cart">Cart {cartItems?.length}</Link>
          </li>
          {/* <li className="nav-item">
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
          </li> */}
          <li className="user-name-header">User : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
