// const ProfileComponent = () => {
//   return (
//     <>
//       <h1>Hello Garvit!!</h1>
//     </>
//   );
// };

import { Component } from "react";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "garvitjoshi@hotmail.com",
      phone: "+91-9680139053",
      company: "",
      userInfo: {},
    };

    console.log("Profile-Constructor");
  }

  async componentDidMount() {
    console.log("Profile-componentDidMount");

    const data = await fetch("https://api.github.com/users/garvitjoshi");
    const json = await data.json();
    console.log(json);

    this.setState({ email: json.blog, company: json.company, userInfo: json });
  }

  componentDidUpdate() {
    console.log("Profile-componentDidUpdate");
  }

  render() {
    console.log("Profile-render");

    const { login, avatar_url } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} />
        <h1>Hello {this.props.name}!!</h1>
        <h1>Username: {login}</h1>
        <h1>Email: {this.state.email}</h1>
        <h1>Phone: {this.state.phone}</h1>
        <h1>Company: {this.state.company}</h1>
      </div>
    );
  }
}

export default ProfileComponent;
