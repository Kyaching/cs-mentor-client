import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  return (
    <div className="flex justify-center items-center h-96">
      <div className="text-center text-4xl md:w-1/2 font-bold">
        <h1>
          You get the premium access <span className="text-info">For</span>
          <br />
          <span className="text-success">{course.title}</span>
        </h1>
      </div>
    </div>
  );
};

export default Checkout;
