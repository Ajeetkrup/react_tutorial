import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "No User Defined",
});

export default UserContext;
