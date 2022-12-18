import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import ErrorComponent from "./components/ErrorComponent";
import HeadingComponent from "./components/HeaderComponent";
import ProfileComponent from "./components/ProfileComponent";
import ReactDOM from "react-dom/client";
import RestaurantComponent from "./components/RestrauntComponent";
import SearchPageComponent from "./components/SearchPageComponent";

// import AboutUsComponent from "./components/AboutUsComponent";

const AboutUsComponent = lazy(() => import("./components/AboutUsComponent"));

const AppLayout = () => (
  <>
    <HeadingComponent />
    <div className="body">
      <Outlet />
    </div>
  </>
);

const routerConfig = [
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
        element: (
          <Suspense fallback="Loading................">
            <AboutUsComponent />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileComponent name={"Garvit"} />,
          },
        ],
      },
    ],
  },
];

const appRouter = createBrowserRouter(routerConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
