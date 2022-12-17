const CardComponent = (props) => {
  // const restraunt = props.restraunt;
  const { name, cuisines, avgRating, cloudinaryImageId } = props.restraunt.data;
  return (
    <div id="card" className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default CardComponent;
