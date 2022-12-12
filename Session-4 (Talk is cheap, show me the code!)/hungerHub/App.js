import ReactDOM from "react-dom/client";

import CardComponent from "./CardComponent";

const title = "Hunger Hub";

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class" tabIndex="1">
      <h2>{title}</h2>
      {/* <CardComponent /> */}
    </div>
  );
};

const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/3a2ed5a05138fb8515048ca6a80a019c",
    name: "Biryani by kilo",
    cusine: "Biryani, Hyderabdi",
    stars: "4",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/swjoqafleha7xyhkxvgq",
    name: "Biryani by kilo 1",
    cusine: "Biryani, Hyderabdi",
    stars: "4",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xc3vq7lpuclbtbyh0lgt",
    name: "Biryani by kilo 2",
    cusine: "Biryani, Hyderabdi",
    stars: "4",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rn4sp0vzeaize0r1hpoc",
    name: "Biryani by kilo 3",
    cusine: "Biryani, Hyderabdi",
    stars: "4",
  },
];

// const CardComponent = (props) => {
//   return (
//     <div id="card" className="card">
//       <img src={props.restraunt.img} />
//       <h2>{props.restraunt.name}</h2>
//       <h3>{props.restraunt.cusine}</h3>
//       <h4>{props.restraunt.stars} Star</h4>
//     </div>
//   );
// };

const CardContainer = () => {
  // for (let i = 0; i < data.length; i++) {
  //   <CardComponent className="card-component" restraunt={data[0]} xyz={1} />;
  // }

  return data.map((restro) => {
    return (
      <CardComponent
        className="card-component"
        restraunt={restro}
        key={restro.id}
      />
    );
  });
};

const BodyComponent = () => (
  <div className="card-container">
    {/*  React.createElement("h1", { id: "heading" }, "Namaste Javascript Bootstrap"), */}
    <CardContainer />
  </div>
);

const AppLayout = () => (
  <>
    <HeadingComponent />
    <BodyComponent />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
