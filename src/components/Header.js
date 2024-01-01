import image from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} altname="Logo-food-delivery" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
