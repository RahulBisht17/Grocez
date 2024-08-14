import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import Products from "./components/Product/Products";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Shop from "./Pages/Shop";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
