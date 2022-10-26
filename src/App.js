import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
