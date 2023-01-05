import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

import ErrorComponent from "./components/ErrorComponent";
import HeadingComponent from "./components/HeaderComponent";
import ProfileComponent from "./components/ProfileComponent";
import ReactDOM from "react-dom/client";
import RestaurantComponent from "./components/RestrauntComponent";
import SearchPageComponent from "./components/SearchPageComponent";
import ThemeContext from "./components/ThemeContext";
import UserContext from "./components/UserContext";

// import AboutUsComponent from "./components/AboutUsComponent";

const AboutUsComponent = lazy(() => import("./components/AboutUsComponent"));

const AppLayout = () => {
  const [emailId, setEmailId] = useState("garvit@hello.com");

  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* Context Provider */}
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <UserContext.Provider value={{ email: emailId, setEmail: setEmailId }}>
          <HeadingComponent />
          <div className="body">
            <Outlet />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

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
