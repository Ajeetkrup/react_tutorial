import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [LOR, setLOR] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLOR(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-body">
      <div className="search">
        <div className="search-bar">
          <input
            className="search-inp"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurants = LOR.filter((restaurant) => {
                return restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-btn"
          onClick={() => {
            //filter top rated restaurants
            const filteredRestaurants = listOfRestaurants?.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurants?.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
