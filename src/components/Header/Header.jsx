import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { WiDaySunny } from "react-icons/wi";
import { MdDarkMode } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
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
              <Link to="/faq" className="justify-between">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
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
          {user?.uid && <h3 className="">Welcome, {user?.displayName} </h3>}
          <div
            className="avatar tooltip tooltip-bottom"
            title={user?.displayName}
          >
            <div className="w-12">
              {user?.uid && <img src={user?.photoURL} alt="" />}
            </div>
          </div>
        </div>
        {user?.uid ? (
          <button onClick={handleLogOut} className="btn btn-info">
            Sign Out
          </button>
        ) : (
          <div className="flex justify-end">
            <Link to="/login" className="btn btn-info mr-5">
              Login
            </Link>
            <Link to="/register" className="btn btn-info">
              Register
            </Link>
          </div>
        )}
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
