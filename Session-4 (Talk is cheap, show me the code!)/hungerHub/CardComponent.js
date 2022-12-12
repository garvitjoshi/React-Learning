const CardComponent = (props) => {
  // const restraunt = props.restraunt;
  const { img, name, cusine, stars } = props.restraunt;
  return (
    <div id="card" className="card">
      <img src={img} />
      <h2>{name}</h2>
      <h3>{cusine}</h3>
      <h4>{stars} Star</h4>
    </div>
  );
};

export default CardComponent;
