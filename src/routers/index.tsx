import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default routers;
