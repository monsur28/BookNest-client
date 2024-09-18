import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "../Components/Navbar";
=======
import Main from "../Components/Main";
import Home from "../Components/Home/Home";
>>>>>>> 785660d1a791d866ee4b2e1e4a6a763defb92a80

export const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< HEAD
    element: <Navbar></Navbar>,
=======
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
>>>>>>> 785660d1a791d866ee4b2e1e4a6a763defb92a80
  },
]);
