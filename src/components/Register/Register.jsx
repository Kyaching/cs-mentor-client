import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUserSignUp, updateUserProfile, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserSignUp(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Success");
        }
        handleUpdateUserProfile(name, photoURL, user);
        form.reset();
      })
      .catch((e) =>
        toast.error(e.message, {
          autoClose: 1000,
          hideProgressBar: false,
        })
      );
  };

  const handleUpdateUserProfile = (name, photoURL, user) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        setUser(user);
        navigate("/");
      })
      .catch((e) =>
        toast.error(e.message, {
          autoClose: 1000,
          hideProgressBar: false,
        })
      );
  };

  return (
    <div className="m-4">
      <div className="w-full mx-auto  max-w-md p-8 space-y-3 rounded-xl border-gray-900 shadow-2xl dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your full Name"
              className="w-full px-4 py-3 rounded-md text-gray-900  dark:border-gray-700 dark:bg-gray-900 dark:text-gray-900"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Enter Photo url link"
              className="w-full px-4 py-3 rounded-md text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail"
              className="w-full px-4 py-3 rounded-md text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-3 rounded-md text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <button className="btn btn-info block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign Up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-100"
          >
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
