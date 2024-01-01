import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.restaurant.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} altname={cloudinaryImageId} />
      <h3 className="food-name">{name}</h3>
      <h4 className="res-card-utils">
        {avgRating || "Not Have"} Stars | {sla.slaString}
      </h4>
      <h4>{costForTwo}</h4>
      <h4 className="cuisines">{cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
