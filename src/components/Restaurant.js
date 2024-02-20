import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { IoMdTimer } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import MenuCard from "./MenuCard";
import ShimmerRes from "./ShimmerRes";
import useOnlineStatus from "../utils/useOnlineStatus";

const Restaurant = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [showInd, setShowInd] = useState();
  const params = useParams();
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_URL + params.id);
      const json = await data.json();
      setRestaurantInfo(json?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantInfo.length == 0) {
    return <ShimmerRes />;
  }

  if (!onlineStatus) {
    return <h1>No Internet Connection</h1>;
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
  } = restaurantInfo[2]?.card?.card?.info;

  let groupedCard;
  restaurantInfo.forEach((restaurant) => {
    if (restaurant.groupedCard) {
      groupedCard = restaurant.groupedCard;
    }
  });

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
                  <MenuCard
                    menu={card?.card?.card}
                    showItems={ind == showInd && true}
                    setShowItems={() => setShowInd(ind)}
                  />
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
