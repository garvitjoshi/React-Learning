import { Outlet } from "react-router-dom";
import React from "react";

// const AboutUs = () => {
//   return (
//     <>
//       <h1>About Us</h1>
//       <Outlet />
//     </>
//   );
// };

class AboutUsComponent extends React.Component {
  constructor() {
    super();
    console.log("About-Constructor");
  }

  componentDidMount() {
    console.log("About-componentDidMount");
  }

  componentDidUpdate() {
    console.log("Profile-componentDidUpdate");
  }

  render() {
    console.log("About-render");
    return (
      <>
        <h1>Class About Us</h1>
        <Outlet />
      </>
    );
  }
}

export default AboutUsComponent;

/**
 *
 * Parent - contructor
 * Parent - render
 * Child  - constructor
 * Child  - render
 * Child  - componentDidMount
 * Parent - componentDidMount
 *
 */
