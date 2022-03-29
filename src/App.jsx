import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./containers/Header";
import HomePage from "./routes/HomePage";
import ProductPage from "./routes/ProductPage";
import ProductDetail from "./routes/ProductDetail";
import Cart from "./routes/Cart";
import Login from "./routes/Login";
import ProfilePage from "./routes/ProfilePage";

function App() {

  // function RequireAuth({ children }) {
  //   let auth = useAuth();
  //   let location = useLocation();
  
  //   if (!auth.user) {
  //     // Redirect them to the /login page, but save the current location they were
  //     // trying to go to when they were redirected. This allows us to send them
  //     // along to that page after they login, which is a nicer user experience
  //     // than dropping them off on the home page.
  //     return <Navigate to="/profile" state={{ from: location }} replace />;
  //   }
  
  //   return children;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact component={HomePage} element={<HomePage />} />
          <Route
            path="/products"
            exact
            component={ProductPage}
            element={<ProductPage />}
          />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetail}
            element={<ProductDetail />}
          />
          <Route path="/cart" component={Cart} element={<Cart />} />
          <Route path="/login" component={Login} element={<Login />} />
          <Route
            path="/profile"
            component={ProfilePage}
            element={
              // <RequireAuth>
                <ProfilePage />
              // </RequireAuth>
            }
          />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
