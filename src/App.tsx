import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import "./styles/Reset/Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/Products/Products";
import Product from "./components/Product/Product";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";
import ResetPassword from "./components/Auth/ResetPassword";
import ChangePassword from "./components/Auth/ChangePassword";
import EmailConfirmed from "./components/Auth/EmailConfirmed";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
const AuthVerify = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const { exp } = parseJwt(accessToken);
    if (exp * 1000 < Date.now()) return false;
    else return true;
  }
  return false;
};

function App() {
  const setUserRequest = async () => {
    axios
      .get(process.env.REACT_APP_BE_DOMAIN + "/users/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUser(res.data.user);
      });
  };
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    AuthVerify() && setUserRequest();
  }, []);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={providerUser}>
          <Navbar></Navbar>
        </UserContext.Provider>
        <div style={{ minHeight: "calc(100vh - 100px)" }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductsList />}></Route>
            <Route path="/products/:_id" element={<Product />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route
              path="/register-success"
              element={<RegisterSuccess />}
            ></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route
              path="/change-password/:token"
              element={<ChangePassword />}
            ></Route>
            <Route
              path="/auth/confirmation/:token"
              element={<EmailConfirmed />}
            ></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
