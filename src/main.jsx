import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { UserProfileProvider } from "./Context/UserProfileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <UserProfileProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
