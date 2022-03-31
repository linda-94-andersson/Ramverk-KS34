import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./containers/Header";
import { getUserData } from "./redux/actions/authActions";

const HomePage = React.lazy(() => import("./routes/HomePage"));
const ProductPage = React.lazy(() => import("./routes/ProductPage"));
const ProductDetail = React.lazy(() => import("./routes/ProductDetail"));
const Cart = React.lazy(() => import("./routes/Cart"));
const Login = React.lazy(() => import("./routes/Login"));
const ProfilePage = React.lazy(() => import("./routes/ProfilePage"));
const SignUp = React.lazy(() => import("./routes/SignUp"));
const Admin = React.lazy(() => import("./routes/Admin"));

function App() {
  const dispatch = useDispatch();
  const sign = useSelector((state) => state.signInOut);

  useEffect(() => {
    if (!sign.token) return;
    dispatch(getUserData(sign.token.userId));
  }, [sign]);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/products" exact element={<ProductPage />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
