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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
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
