import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Cart, NavBar, Products } from "./components";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId: string, quantity: number) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId: string, quantity: number) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId: string) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <ToastContainer />
      <header>
        <NavBar cart={cart} />
      </header>
      <div>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
          </Routes>
        </main>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
