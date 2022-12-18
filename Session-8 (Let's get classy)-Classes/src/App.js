import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useEffect, useState } from "react";

import AboutUsComponent from "./components/AboutUsComponent";
import CardComponent from "./components/CardComponent";
import ErrorComponent from "./components/errorComponent";
import NoResultsComponent from "./components/NoResultsComponent";
import ProfileComponent from "./components/ProfileComponent";
import ReactDOM from "react-dom/client";
import RestaurantComponent from "./components/RestrauntComponent";
import SearchBar from "./components/SearchBarComponent";
import { title } from "./utils/constants";

// import * as constants from "./constants";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      {/* <h2>{constants.title}</h2> */}
      <h2>{title}</h2>
    </div>
  );
};

const CardContainer = ({ filteredRestaurants }) => {
  if (!filteredRestaurants.length) return <NoResultsComponent />;
  return filteredRestaurants.map((restro, index) => {
    return (
      <Link to={`/restraunt/${restro?.data?.id}`}>
        <CardComponent
          className="card-component"
          restraunt={restro}
          key={restro.data.id}
        />
      </Link>
    );
  });
};

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

const AppLayout = () => (
  <>
    <HeadingComponent />
    <div className="body">
      <Outlet />
    </div>
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/restraunt/:id",
        element: <RestaurantComponent />,
      },
      {
        path: "/search",
        element: <SearchPageComponent />,
      },
      {
        path: "/about-us",
        element: <AboutUsComponent />,
        children: [
          {
            path: "profile",
            element: <ProfileComponent name={"Garvit"} />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
