import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { title } from "../utils/constants";

const HeadingComponent = () => {
  return (
    <div
      id="title"
      className="flex px-10 py-4 justify-between bg-purple-50"
      tabIndex="1"
    >
      {/* <h2>{constants.title}</h2> */}
      <Link to="/">
        <img
          className="h-12"
          src="https://uploads-ssl.webflow.com/6080464681216414c7d1d60b/6080468fecb6a579c58f35f4_hungerhub%20logo.png"
        />
      </Link>

      <div className="flex space-x-8 cursor-pointer">
        <Link to="/search">
          <span>Search</span>
        </Link>
        <Link to="/About-us">
          <span>About-us</span>
        </Link>
        <Link to="/About-us">
          <span>Contact us</span>
        </Link>
        <Link to="/About-us">
          <span>Support</span>
        </Link>
      </div>
    </div>
  );
};

export default HeadingComponent;
