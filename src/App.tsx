import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import "./styles/Reset/Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/Products/Products";
import Product from "./components/Product/Product";
import Register from "./components/Auth/Register";
import RegisterSuccess from "./components/Auth/RegisterSuccess";

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
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
