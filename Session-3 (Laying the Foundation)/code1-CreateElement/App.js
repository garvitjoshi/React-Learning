import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "title" }, [
  React.createElement("h1", { id: "heading" }, "Namaste Javascript Bootstrap"),
  React.createElement("h2", {}, "From Zero to Hero"),
  React.createElement("h3", {}, "in 3 Months"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
