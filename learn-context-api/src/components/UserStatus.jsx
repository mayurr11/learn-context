import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const UserStatus = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h2>{isLoggedIn ? "You are logged in" : "You are logged out"}</h2>
    </div>
  );
};

export default UserStatus;
