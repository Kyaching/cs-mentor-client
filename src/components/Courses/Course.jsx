import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, image } = course;
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <div>
        <img
          className="object-cover w-full h-52 dark:bg-gray-500"
          alt=""
          src={image}
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        <div className="flex flex-wrap justify-between mb-5 pt-3 space-x-2 text-xs dark:text-gray-400">
          <span>June 1, 2020</span>
          <span>2.1K views</span>
        </div>
        <Link to={`/details/${id}`} className="btn btn-info">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Course;
