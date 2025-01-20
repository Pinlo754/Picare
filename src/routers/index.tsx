import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/productdetail",
    element: <ProductDetails/>
  }
]);

export default routers;
