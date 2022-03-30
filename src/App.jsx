import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./containers/Header";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import ProfilePage from "./routes/ProfilePage";
import SignUp from "./routes/SignUp";
import Admin from "./routes/Admin";
import {getAllUsers, getUser} from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers.users);
  const sign = useSelector((state) => state.signInOut);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (!sign.token) return;
    dispatch(getUser(sign.token.userId));
  }, [sign]);

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
