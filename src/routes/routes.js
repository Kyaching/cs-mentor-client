import { createBrowserRouter } from "react-router-dom";
import CourseDetail from "../components/Courses/CourseDetail";
import Courses from "../components/Courses/Courses";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

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
    ],
  },
  {
    path: "/details/:id",
    element: <CourseDetail />,
    loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
  },
]);
