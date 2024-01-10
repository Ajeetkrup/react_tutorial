import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Us</h1>
      <h1>User: {loggedInUser}</h1>
      <UserClass name="Ajeet" address="Jamshedpur, Jharkhand" />
    </div>
  );
};

export default About;
