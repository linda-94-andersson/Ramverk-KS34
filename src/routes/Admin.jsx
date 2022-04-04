import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import AdminAllProducts from "../containers/AdminAllProducts";
import AdminAllUsers from "../containers/AdminAllUsers";
import AdminAllCarts from "../containers/AdminAllCarts";

function Admin() {
  const auth = useAuth();

  const setShowButton = useRef(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton.current = true;
      } else {
        setShowButton.current = false;
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return !auth.isAdmin() ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Container style={{ marginTop: 40 }}>
        <AdminAllProducts />
        <AdminAllUsers />
        <AdminAllCarts />
        <Button
          variant="dark"
          style={{ position: "fixed", bottom: 20, right: 20 }}
          onClick={scrollToTop}
        >
          &#8679;
        </Button>
      </Container>
    </>
  );
}

export default Admin;
