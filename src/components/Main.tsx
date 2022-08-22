import ProductsSection from "./ProductsSection";
import "../styles/Main/Main.scss";
import axios from "axios";
import { useState } from "react";

function Main() {
  const [searchedProducts, setSearchedProducts]: any = useState([]);
  const searchProducts = async () => {
    try {
      if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
      const response = await axios.get(
        `${process.env.REACT_APP_BE_DOMAIN}/products/search`,
        { params: { limit: 3 } }
      );
      setSearchedProducts(response.data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <main className="main">
      <ProductsSection products={searchedProducts}></ProductsSection>
    </main>
  );
}
export default Main;
