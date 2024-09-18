import React, { useContext } from "react";
import userContext from "../Context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      {!user  ? (
        <h2>Please Login</h2>
      ) : (
        <h2>Welcome {user.userName}</h2>
      )}
    </div>
  );
};

export default Profile;
