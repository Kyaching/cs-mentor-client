import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const User = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="m-6">
      <div className="hero w-full md:w-1/2 mx-auto my-7 rounded-xl shadow-2xl bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              className="w-1/2 rounded-lg shadow-2xl"
              alt=""
            />
          ) : (
            <img
              className="w-1/2 rounded-lg shadow-2xl"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              alt=""
            />
          )}
          <div>
            <h1 className="text-4xl font-bold">Name: {user?.displayName}</h1>
            <p className="py-6">Email: {user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
