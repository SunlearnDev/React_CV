import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Private } from "./private";
import HomePages from "../pages/HomePages/index";
import HomePage from "../pages/HomePages/ContentPage/HomePage/HomePage";
import Login from "../layouts/authentication/sign-in/index";
import Register from "../layouts/authentication/sign-up/index";

export default createBrowserRouter([
  {
    element: <Private />,
    path: "/",
    children: [
      {
        element: <HomePages />,
        path: "/",
        children: [
          {
            element: <HomePage />,
            path: "/",
          },
        ],
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
    ],
  },
]);
