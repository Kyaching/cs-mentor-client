import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = createRef();
const CourseDetail = () => {
  const courseDetail = useLoaderData();
  const { id, title, description, image } = courseDetail;
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link>Item 1</Link>
            </li>
            <li tabIndex={0}>
              <Link>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
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

      <div className="m-4 flex">
        <div
          ref={ref}
          className="md:w-1/2 mx-auto p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50"
        >
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

          <div className="text-center mt-5">
            <Link className="btn btn-success" to={`/checkout/${id}`}>
              <span>Get Premium Access</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
