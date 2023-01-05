import stateObj from "../utils/state-city.json";
import useCities from "./useCities";
import { useState } from "react";

const searchRestaunt = (searchText, listOfRestaurants) => {
  return listOfRestaurants.filter((restro) =>
    restro?.data?.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants, fn }) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("Rajasthan");
  const [cityName, setCityName] = useState("");

  const cityList = useCities(stateName);
  return (
    <div className="m-5 p-5 bg-purple-50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredRestaunt = searchRestaunt(
            searchText,
            listOfRestaurants
          );
          setFilteredRestaurants(filteredRestaunt);
        }}
      >
        <input
          id="restaurant"
          placeholder="Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <select
          value={stateName}
          onChange={(e) => {
            setStateName(e.target.value);
            fn(e.target.value);
          }}
        >
          {Object.keys(stateObj).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <select
          value={cityName}
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        >
          {cityList.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button className="bg-green-800 p-2 mx-5 text-white rounded-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
