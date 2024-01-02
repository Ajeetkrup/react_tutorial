import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    props.restaurant.info;
  let trimmedCuisines = [];
  for (let i = 0; i < 4 && i < cuisines.length; i++) {
    trimmedCuisines.push(cuisines[i]);
  }

  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} altname={cloudinaryImageId} />
      <h3 className="food-name">{name}</h3>
      <h4 className="res-card-utils">
        {avgRating || "Not Have"} Stars | {sla.slaString}
      </h4>
      <h4>{costForTwo}</h4>
      <h4 className="cuisines">{trimmedCuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
