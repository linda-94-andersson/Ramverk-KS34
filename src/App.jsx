import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./containers/Header";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import ProfilePage from "./routes/ProfilePage";
import SignUp from "./routes/SignUp";
import Admin from "./routes/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" exact element={<ProductPage />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<Admin />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
