import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { ROUTES } from "./components/footer/ui/Footer";
import CartContextProvider from "./provider";
import { Error, ProductPage, HomePage, Cart } from "./routes";

import "normalize.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: ROUTES.CART,
        element: <Cart />,
      },
      {
        path: `${ROUTES.PRODUCT}/:product_id`,
        element: <ProductPage />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
