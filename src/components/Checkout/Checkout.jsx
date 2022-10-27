import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const course = useLoaderData();
  return (
    <div className="flex justify-center  items-center h-96 flex-col">
      <h1 className="text-center">
        <span className="text-orange-500 font-semibold text-xl md:text-4xl">
          Congratulations!! {user?.displayName}
        </span>
      </h1>
      <div className="text-center text-xl md:text-3xl md:w-1/2 font-bold mt-5">
        <h3>
          You get the premium access
          <span className="text-info"> For</span>
          <br />
          <span className="text-success">{course.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default Checkout;
