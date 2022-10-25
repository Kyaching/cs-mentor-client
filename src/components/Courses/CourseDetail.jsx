import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const courseDetail = useLoaderData();
  console.log(courseDetail);
  const { title, description, image } = courseDetail;
  return (
    <div className="m-4">
      <div className="md:w-1/2 mx-auto p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          src={image}
          alt=""
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
            Course Name
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <p className="dark:text-gray-100">{description}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
