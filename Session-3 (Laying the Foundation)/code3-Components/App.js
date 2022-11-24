import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1>Namaste Javascript Bootstrap</h1>;
};

const Heading2Component = () => <h2>From Zero to Hero</h2>;

const HeadingComponent = () => {
  return (
    <div id="title" className="title-class">
      <TitleComponent />
      <Heading2Component />
      <h3>in 3 Months</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
