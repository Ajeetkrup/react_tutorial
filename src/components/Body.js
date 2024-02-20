import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { RESTAURANTS_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [LOR, setLOR] = useState([]);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await fetch(RESTAURANTS_URL);

      const json = await data.json();

      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setLOR(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (!onlineStatus) {
    return <h1>No Internet Connection</h1>;
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
              const filteredRestaurants = LOR?.filter((restaurant) => {
                return restaurant?.info?.name
                  ?.toLowerCase()
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
        <div className="user-name">
          User:{" "}
          <input
            className="user-name-input"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-card-container">
        {listOfRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
