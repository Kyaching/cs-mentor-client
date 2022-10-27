import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const ref = createRef();
const CourseDetail = () => {
  const courseDetail = useLoaderData();
  const { id, name, description, image, rating } = courseDetail;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="hidden md:block w-24 h-18" src={Logo} alt="" />
            <span>CS MENTOR</span>
          </Link>
        </div>
        <div className="navbar-end">
          <Pdf targetRef={ref} filename="course.pdf">
            {({ toPdf }) => (
              <button className="btn btn-info" onClick={toPdf}>
                Download Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>

      <div className=" m-4 flex flex-col">
        <div
          ref={ref}
          className="md:w-1/2 mx-auto p-6 rounded-md shadow-md  bg-gray-100 dark:bg-gray-900 dark:text-gray-50"
        >
          <img
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            src={image}
            alt=""
          />
          <div className="mt-6 mb-2">
            <div className="flex justify-between">
              <span className="block text-xs font-medium tracking-widest uppercase text-gray-700 dark:text-violet-400">
                Course Name
              </span>
              <div className="flex items-center">
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStar className="text-orange-400" />
                <FaStarHalfAlt className="text-orange-400" />
                <span className="mx-3">{rating?.number}</span>
              </div>
            </div>

            <h2 className="text-xl text-gray-900 font-semibold tracking-wide">
              {name}
            </h2>
          </div>
          <p className="text-gray-900 dark:text-gray-100">{description}</p>
          <div className="text-center mt-5"></div>
        </div>
        <div className="text-center my-5">
          <Link className="btn btn-success" to={`/checkout/${id}`}>
            <span>Get Premium Access</span>
          </Link>
          <Link className="ml-8 btn btn-success" to="/">
            <span>Back to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
