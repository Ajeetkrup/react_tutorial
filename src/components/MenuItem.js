import { TbSquareDot } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";
import { MENU_LOGO_URL } from "../utils/constants";
import { LuIndianRupee } from "react-icons/lu";
import { IconContext } from "react-icons";
import { FaMinusCircle } from "react-icons/fa";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const MenuItem = ({ info, isCart, cartInd }) => {
  console.log(cartInd, "cartInd");
  const { category, imageId, itemAttribute, name, price } = info;

  const dispatch = useDispatch();
  const handleAction = () => {
    dispatch(addItem(info));
  };

  const handleRemove = () => {
    dispatch(removeItem(cartInd));
  };

  return (
    <div className="menu">
      <div className="menu-info">
        {itemAttribute?.vegClassifier === "VEG" && (
          <span className="veg-icon">
            <TbSquareDot />
          </span>
        )}
        {itemAttribute?.vegClassifier !== "VEG" && (
          <span className="non-veg-icon">
            <TbSquareDot />
          </span>
        )}
        <div className="menu-name">{name}</div>
        <IconContext.Provider value={{ style: { fontSize: "10px" } }}>
          <div className="menu-cost">
            <LuIndianRupee /> {price / 100}
          </div>
        </IconContext.Provider>
        <div className="menu-desc">{category}</div>
      </div>
      <div className="menu-img">
        {imageId && <img src={MENU_LOGO_URL + imageId} />}
        {!imageId && <img altName="Menu Image" />}
        {!isCart ? (
          <button className="add" onClick={handleAction}>
            <span className="btn-text">Add</span>
            <span className="btn-plus">
              <FaPlus />
            </span>
          </button>
        ) : (
          <button className="remove" onClick={handleRemove}>
            <span className="btn-text">Remove</span>
            <span className="btn-plus">
              <FaMinusCircle />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
