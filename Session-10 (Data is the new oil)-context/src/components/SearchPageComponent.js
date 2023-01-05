import { useContext, useEffect, useState } from "react";

import CardContainer from "./CardContainer";
import SearchBar from "./SearchBarComponent";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

const SearchPageComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { email, setEmail } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

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

  const [stateName, setStateName] = useState();

  const fn = (x) => {
    console.log(x);
    setStateName(x);
  };

  return (
    <div className="card-container">
      <h4>Serach Component Context: {email}</h4>
      <button
        onClick={() => {
          setEmail("Search@email.com");
        }}
      >
        Update Search Page
      </button>

      <button
        onClick={() => {
          // if (theme === "light") {
          //   setTheme("dark");
          // } else {
          //   setTheme("light");
          // }
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Update Theme: {theme}
      </button>

      <SearchBar
        listOfRestaurants={listOfRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        fn={fn}
      />
      <CardContainer
        stateName={stateName}
        filteredRestaurants={
          filteredRestaurants.length ? filteredRestaurants : listOfRestaurants
        }
      />
    </div>
  );
};

export default SearchPageComponent;
