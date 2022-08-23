import ProductsSection from "./ProductsSection";
import "../styles/Main/Main.scss";
import axios from "axios";
import { useState } from "react";
import IProduct from "../Interfaces/Product";
import LandscapeImage from "./LandscapeImage";
import sunglassesLandscape from "../files/sunglasses-landscape.png";

function Main() {
  const [bestsellers, setBestsellers] = useState<IProduct[]>([]);
  const searchProducts = async () => {
    try {
      if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
      const response = await axios.get(
        `${process.env.REACT_APP_BE_DOMAIN}/products/search`,
        { params: { limit: 3 } }
      );
      setBestsellers(response.data);
      console.log(bestsellers);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  if (bestsellers.length === 0) searchProducts();
  return (
    <main className="main">
      {bestsellers.length > 0 && (
        <ProductsSection {...bestsellers}></ProductsSection>
      )}
      <LandscapeImage landscapeImage={sunglassesLandscape}></LandscapeImage>
    </main>
  );
}
export default Main;
