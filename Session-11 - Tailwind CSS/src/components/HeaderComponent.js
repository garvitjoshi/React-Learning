import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { title } from "../utils/constants";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      {/* <h2>{constants.title}</h2> */}
      <Link to="/">
        <h2>{title}</h2>
      </Link>
      <Link to="/search">
        <span>Search</span>
      </Link>
      <Link to="/About-us">
        <span>About-us</span>
      </Link>
      <UserContext.Consumer>
        {({ email }) => {
          return <span>{email}</span>;
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default HeadingComponent;
