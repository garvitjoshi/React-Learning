import data from "../utils/data.json";
import { useState } from "react";

const searchRestaunt = (searchText, listOfRestaurants) => {
  return listOfRestaurants.filter((restro) =>
    restro?.data?.name
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredRestaunt = searchRestaunt(
            searchText,
            props.listOfRestaurants
          );
          props.setFilteredRestaurants(filteredRestaunt);
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
        <h1>{searchText}</h1>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
