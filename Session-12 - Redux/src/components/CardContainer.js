import CardComponent from "./CardComponent";
import { Link } from "react-router-dom";
import NoResultsComponent from "./NoResultsComponent";

const CardContainer = ({ filteredRestaurants, stateName }) => {
  if (!filteredRestaurants.length) return <NoResultsComponent />;
  return (
    <div className="flex flex-wrap">
      {filteredRestaurants.map((restro) => {
        return (
          <Link to={`/restraunt/${restro?.data?.id}`}>
            <CardComponent
              stateName={stateName}
              className="card-component"
              restraunt={restro}
              key={restro.data.id}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CardContainer;
