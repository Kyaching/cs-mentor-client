import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { WiDaySunny } from "react-icons/wi";
import { MdDarkMode } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ThemeContext } from "../../contexts/ThemeProvider/ThemeProvider";
import ReactTooltip from "react-tooltip";

const Header = () => {
  const navigate = useNavigate();

  const { user, logOut } = useContext(AuthContext);
  const { isDarkMode, handleMode } = useContext(ThemeContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
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
              <NavLink
                to="/courses"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Courses
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Blog
              </NavLink>
            </li>
            {user?.uid ? (
              <button onClick={handleLogOut} className=" my-3 btn btn-info">
                Sign Out
              </button>
            ) : (
              <div className="flex justify-end my-3">
                <Link to="/login" className="btn btn-info mr-5">
                  Login
                </Link>
                <Link to="/register" className="btn btn-info">
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="hidden md:block w-24 h-18" src={Logo} alt="" />
          <span>CS MENTOR</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar-group w-full items-center justify-evenly -space-x-6">
          {user?.uid && (
            <h3 className="hidden md:block">Welcome, {user?.displayName} </h3>
          )}
          {user?.displayName && (
            <div
              className="avatar tooltip  tooltip-bottom cursor-pointer"
              data-tip={user?.displayName}
              title={user?.displayName}
            >
              <div className="w-12">
                {user?.uid && <img src={user?.photoURL} alt="" />}
              </div>
            </div>
          )}
        </div>
        {user?.uid ? (
          <button
            onClick={handleLogOut}
            className="hidden md:block btn btn-info"
          >
            Sign Out
          </button>
        ) : (
          <div className=" hidden  md:flex justify-end">
            <Link to="/login" className="btn btn-info mr-5">
              Login
            </Link>
            <Link to="/register" className="btn btn-info">
              Register
            </Link>
          </div>
        )}
        <div
          onClick={handleMode}
          className="ml-4 flex justify-end cursor-pointer"
        >
          {isDarkMode ? (
            <WiDaySunny className="w-7 h-7 mr-6" />
          ) : (
            <MdDarkMode className="w-7 h-7 mr-6" />
          )}
        </div>
      </div>
      <ReactTooltip />
    </div>
  );
};

export default Header;
