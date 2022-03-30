import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Admin() {
  const sign = useSelector((state) => state.signInOut);
  const userData = useSelector((state) => state.userData);

  if (!userData.userData.role.admin && !sign.token) return <Navigate to="/profile" />;

  return <div>Admin</div>;
}

export default Admin;
