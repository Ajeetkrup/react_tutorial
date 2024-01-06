import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IoMdTimer } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import MenuCard from "./MenuCard";
import ShimmerRes from "./ShimmerRes";

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const params = useParams();
  console.log(params);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL + params.id);
    const json = await data.json();
    console.log(json.data.cards);
    setRestaurantInfo(json?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantInfo.length == 0) {
    return <ShimmerRes />;
  }

  const {
    name,
    cuisines,
    locality,
    areaName,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    expectationNotifiers,
    sla,
  } = restaurantInfo[0]?.card?.card?.info;
  console.log("data -", restaurantInfo[0]?.card?.card?.info.name);

  let groupedCard;
  restaurantInfo.forEach((restaurant) => {
    if (restaurant.groupedCard) {
      groupedCard = restaurant.groupedCard;
    }
  });

  console.log("menu -", groupedCard.cardGroupMap.REGULAR.cards);

  return (
    <div className="res-details">
      <div className="res-info">
        <div className="res-info-detailed">
          <ul>
            <li className="res-title">{name}</li>
            <li className="res-cuisines">{cuisines.join(", ")}</li>
            <li className="res-add">{locality + "," + areaName}</li>
            <li className="res-dis">{expectationNotifiers[0]?.enrichedText}</li>
          </ul>
        </div>
        <div className="ratings">
          <div className="stars">
            {avgRatingString} <FaStar />
          </div>
          <div className="rat-no">{totalRatingsString}</div>
        </div>
      </div>
      <div>
        <HiOutlineCurrencyRupee /> {costForTwoMessage} | <IoMdTimer />
        {sla?.deliveryTime + " mins"}
      </div>
      <div className="res-menu">
        <ul>
          {groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card, ind) => {
            return (
              ind >= 1 &&
              card?.card?.card?.itemCards?.length > 0 && (
                <li key={ind}>
                  <MenuCard menu={card?.card?.card} />
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
