import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {courses.map((course) => (
              <Link to={`/details/${course.id}`} key={course.id}>
                {course.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500  lg:col-span-9 md:col-span-9 min-h-96">
          <section className="md:py-0 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                <p className="font-serif text-sm dark:text-gray-400">
                  Qualisque erroribus usu at, duo te agam soluta mucius.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {courses.map((course) => (
                  <Course key={course.id} course={course} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Courses;
