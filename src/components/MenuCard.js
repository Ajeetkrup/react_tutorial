import MenuItem from "./MenuItem";

const MenuCard = ({ menu }) => {
  console.log(menu);
  return (
    <div className="menu-card-info">
      <div className="title">{menu?.title}</div>
      <div className="info">
        {menu?.itemCards?.map((card, ind) => {
          return (
            <div key={card?.card?.info?.id}>
              <MenuItem info={card?.card?.info} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
