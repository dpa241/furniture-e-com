import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import SidebarProvider from "./context/SidebarContext.jsx";
import CartProvider from "./context/CartContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router/Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <App />
          {/* <RouterProvider router={router}/> */}
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  </AuthProvider>
);
