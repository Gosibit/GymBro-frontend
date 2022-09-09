import Navbar from "./components/Navbar/Navbar";
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
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";
import { useEffect, useMemo, useState } from "react";
import ScrollToTop from "./hooks/ScrollToTop";

import axios from "axios";
import Checkout from "./components/checkout/Checkout";

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
  const [user, setUser] = useState<any>(null);
  const [shoppingCart, setShoppingCart] = useState<any>(null);

  const setUserRequest = async () => {
    axios
      .get(process.env.REACT_APP_BE_DOMAIN + "/users/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setUser(res.data.user);
        setShoppingCartUserRequest();
      });
  };

  function setShoppingCartUserRequest() {
    axios
      .get(process.env.REACT_APP_BE_DOMAIN + "/shopping-carts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        setShoppingCart(res.data);
      });
  }

  function setShoppingCartAnonymousRequest() {
    axios
      .get(process.env.REACT_APP_BE_DOMAIN + "/shopping-carts", 
      {params: {shoppingCartId: localStorage.getItem('shoppingCartId')},}
      )
      .then((res) => {
        setShoppingCart(res.data);
      });
  }

  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (AuthVerify()) setUserRequest();
    else {
      const shoppingCartId = localStorage.getItem("shoppingCartId");
      shoppingCartId && setShoppingCartAnonymousRequest();
    }
  }, []);

  const providerShoppingCart = useMemo(
    () => ({ shoppingCart, setShoppingCart }),
    [shoppingCart, setShoppingCart]
  );

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <UserContext.Provider value={providerUser}>
          <ShoppingCartContext.Provider value={providerShoppingCart}>
            <Navbar></Navbar>
          <Routes>
            <Route path="/products/:_id" element={<Product />}></Route>
            <Route path = "/checkout" element = {<Checkout/>}></Route>
            </Routes>
          </ShoppingCartContext.Provider>
        </UserContext.Provider>
        <div style={{ minHeight: "calc(100vh - 160px)" }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<ProductsList />}></Route>
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
