import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import ProductDetail from "../pages/ProductDetails/ProductDetails";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <ProductDetail />,
  }
]);

export default routers;
