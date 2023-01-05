import { createContext } from "react";

const UserContext = createContext({
  email: "default@gmail.com",
  setEmail: () => {},
});

export default UserContext;
