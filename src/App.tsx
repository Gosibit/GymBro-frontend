import Navbar from "./components/Navbar";
import FirstHeader from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./styles/Reset/Reset.css";
import ProductsSection from "./components/ProductsSection";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FirstHeader></FirstHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
