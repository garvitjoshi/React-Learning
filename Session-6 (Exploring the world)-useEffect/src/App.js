import ReactDOM from "react-dom/client";
import data from "./data.json";
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";
// import * as constants from "./constants";
import { title } from "./constants";

import { useState, useEffect } from "react";
import NoResultsComponent from "./NoResultsComponent";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      {/* <h2>{constants.title}</h2> */}
      <h2>{title}</h2>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
  // if (!filteredRestaurants.length) return <NoResultsComponent />;

  return filteredRestaurants.map((restro) => {
    return (
      <CardComponent
        className="card-component"
        restraunt={restro}
        key={restro.id}
      />
    );
  });
};

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("Hello");
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5121551&lng=77.3912953&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json?.data?.cards[2]?.data?.data?.cards);
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

const AppLayout = () => (
  <>
    <HeadingComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
