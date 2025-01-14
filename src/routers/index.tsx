import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import { Footer } from "../components/Footer";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Footer />,
  },
]);

export default routers;
