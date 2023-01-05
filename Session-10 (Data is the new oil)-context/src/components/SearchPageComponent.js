import { useEffect, useState } from "react";

import CardContainer from "./CardContainer";
import SearchBar from "./SearchBarComponent";

const SearchPageComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5121551&lng=77.3912953&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <div className="card-container">
      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <CardContainer
        filteredRestaurants={
          filteredRestaurants.length ? filteredRestaurants : listOfRestaurants
        }
      />
    </div>
  );
};

export default SearchPageComponent;
