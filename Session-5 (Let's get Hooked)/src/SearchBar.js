import { useState } from "react";
import data from "./data.json";

const searchRestaunt = (searchText) => {
  return data.filter((restro) =>
    restro.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
};

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState();

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const filteredRestaunt = searchRestaunt(searchText);
          console.log(filteredRestaunt);
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
