import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Shop from "./Pages/Shop";
import Layout from "./components/Layout";
import Account from "./Pages/Account";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="account/*" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
