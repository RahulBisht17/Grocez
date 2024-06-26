import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
