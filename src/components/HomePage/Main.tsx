import ProductsSection from "./ProductsSection";
import "../../styles/HomePage/Main/Main.css";
import axios from "axios";
import { useEffect, useState } from "react";
import IProduct, { Category } from "../../Interfaces/IProduct";
import LandscapeImage from "./LandscapeImage";
import sunglassesLandscape from "../../files/sunglasses-landscape.png";
import Loader from "../Loader/Loader";


function Main() {
  const [bestsellers, setBestsellers] = useState<IProduct[]>([]);
  const [summerItems, setSummerItems] = useState<IProduct[]>([]);

  useEffect(() => {
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
        return;
      }
    };
    searchProducts(3, Category.TSHIRTS);
    searchProducts(6, Category.ACCESORIES);
  }, []);

  return (
    <main className="main">
      {bestsellers.length > 0 ? (
        <ProductsSection products={bestsellers} title="Bestsellers"></ProductsSection>
      ): ( 
        <Loader />
      )
        }
      <LandscapeImage landscapeImage={sunglassesLandscape}></LandscapeImage>
      {summerItems.length > 0  && (
        <ProductsSection products={summerItems} title="Summertime"></ProductsSection>
      )}
    </main>
  );
}
export default Main;
