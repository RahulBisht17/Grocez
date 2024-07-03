import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
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
