import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";
import "./styles/Reset/Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from "./components/Products/Products";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<ProductsList />}></Route>
          <Route path="/products/:_id" element={<Product />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
