import { useSelector } from "react-redux";

function useAuth() {
  const sign = useSelector((state) => state.signInOut);
  const userData = useSelector((state) => state.userData);


  const hasToken = () => {
    return Boolean(sign.token)
  }

  const hasUserData = () => {
    return Boolean(userData)
  }

  const isLoggedIn = () => {
    return hasToken() && hasUserData();
  };

  const isAdmin = () => {
    return isLoggedIn() && userData.role === "admin";
  }

  return { isLoggedIn, hasToken, hasUserData, isAdmin };
}

export default useAuth
