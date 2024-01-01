import RestaurantCard from "./RestaurantCard";
import resList from "../utils/dummyData";
import { useState } from "react";

const Body = () => {
  const { restaurants } = resList;
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);

  return (
    <div className="res-body">
      <div className="search">
        <button
          className="top-rated-btn"
          onClick={() => {
            //filter top rated restaurants
            const filteredRestaurants = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
