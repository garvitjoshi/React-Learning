import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const CardComponent = (props) => {
  const { theme } = useContext(ThemeContext);

  if (!props?.restraunt?.data) return null;
  // const restraunt = props.restraunt;
  const { name, cuisines, avgRating, cloudinaryImageId } = props.restraunt.data;
  return (
    <div
      id="card"
      className="card"
      style={{
        background: theme === "light" ? "#fff" : "#000",
      }}
    >
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
      <h5>State: {props.stateName}</h5>
    </div>
  );
};

export default CardComponent;
