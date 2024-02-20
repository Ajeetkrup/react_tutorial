import { useState } from "react";
import MenuItem from "./MenuItem";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const MenuCard = ({ menu, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };

  return (
    <div className="menu-card-info">
      <div className="title" onClick={handleClick}>
        <span className="">{menu?.title}</span>
        <span>
          {!showItems && <FaArrowDown />}
          {showItems && <FaArrowUp />}
        </span>
      </div>
      <div className="info">
        {menu?.itemCards?.map((card, ind) => {
          return (
            <div key={card?.card?.info?.id}>
              {showItems && (
                <MenuItem info={card?.card?.info} isCart={false} cartInd={-1} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
