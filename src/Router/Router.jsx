import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home/Home";
import Login from "../Page/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
