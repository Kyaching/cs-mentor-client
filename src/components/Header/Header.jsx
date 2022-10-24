import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { WiDaySunny } from "react-icons/wi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
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
              <a className="justify-between">
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
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-24 h-18" src={Logo} alt="" />
          CS MENTOR
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar-group w-full items-center justify-evenly -space-x-6">
          <h3 className="">Welcome, Kyaching </h3>
          <div className="avatar">
            <div className="w-12">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/login" className="btn btn-info mr-5">
            Login
          </Link>
          <Link to="/register" className="btn btn-info">
            Register
          </Link>
        </div>
        <div
          onClick={handleToggle}
          className="ml-4 flex justify-end cursor-pointer"
        >
          {toggle ? (
            <WiDaySunny className="w-8 h-8 mr-6" />
          ) : (
            <MdDarkMode className="w-8 h-8 mr-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
