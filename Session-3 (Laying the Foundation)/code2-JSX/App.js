import ReactDOM from "react-dom/client";

const heading = (
  <div id="title" className="title-class">
    <h1>Namaste Javascript Bootstrap</h1>
    <h2>From Zero to Hero</h2>
    <h3>in 3 Months</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
