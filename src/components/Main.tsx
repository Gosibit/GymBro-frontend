import ProductsSection from "./ProductsSection";
import "../styles/Main/Main.scss";
import axios from "axios";
import { useState } from "react";
import IProduct, { Category } from "../Interfaces/Product";
import LandscapeImage from "./LandscapeImage";
import sunglassesLandscape from "../files/sunglasses-landscape.png";

function Main() {
  const [bestsellers, setBestsellers] = useState<IProduct[]>([]);
  const [summerItems, setSummerItems] = useState<IProduct[]>([]);
  const searchProducts = async (limit: number, category: Category) => {
    try {
      if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
      const response = await axios.get(
        `${process.env.REACT_APP_BE_DOMAIN}/products/search`,
        { params: { limit: limit, category: category } }
      );
      category === Category.TSHIRTS && setBestsellers(response.data);
      category === Category.ACCESORIES && setSummerItems(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  if (bestsellers.length === 0) searchProducts(3, Category.TSHIRTS);
  if (summerItems.length === 0) searchProducts(6, Category.ACCESORIES);

  return (
    <main className="main">
      {bestsellers.length > 0 && (
        <ProductsSection {...bestsellers}></ProductsSection>
      )}
      <LandscapeImage landscapeImage={sunglassesLandscape}></LandscapeImage>
      {summerItems.length > 0 && (
        <ProductsSection {...summerItems}></ProductsSection>
      )}
    </main>
  );
}
export default Main;
