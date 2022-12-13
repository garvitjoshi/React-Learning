import ReactDOM from "react-dom/client";
import data from "./data.json";
import CardComponent from "./CardComponent";
import SearchBar from "./SearchBar";
// import * as constants from "./constants";
import { title } from "./constants";

import { useState } from "react";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      {/* <h2>{constants.title}</h2> */}
      <h2>{title}</h2>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
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
  const [filteredRestaurants, setFilteredRestaurants] = useState(data);
  return (
    <div className="card-container">
      <SearchBar setFilteredRestaurants={setFilteredRestaurants} />
      <CardContainer filteredRestaurants={filteredRestaurants} />
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
