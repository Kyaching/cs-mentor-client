import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import CourseDetail from "../components/Courses/CourseDetail";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
  {
    path: "/details/:id",
    element: <CourseDetail />,
    loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
  },
]);
