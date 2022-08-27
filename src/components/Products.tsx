import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import IProduct from "../Interfaces/IProduct";
import "../styles/Products/Products.css";

function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [params, setParams] = useState<any>({});

  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
        const response = await axios.get(
          `${process.env.REACT_APP_BE_DOMAIN}/products/search`,
          { params: params }
        );
        setProducts(response.data);
        return;
      } catch (error) {
        console.log(error);
        return;
      }
    };
    searchProducts();
  }, [params]);

  useEffect(() => {
    searchParams.forEach((value: string, key: string) => {
      setParams((params: any) => ({ ...params, [key]: value }));
    });
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      <ul className="products__list">
        {products.map((product: IProduct) => (
          <li key={product._id} className="products__list__item">
            <img
              src={product.imageUrls.original}
              alt={product.title}
              className="products__list__item__image"
            />
            <div className="products__list__item__info">
              <h2 className="products__list__item__info__title">
                {product.title}
              </h2>
              <p className="products__list__item__info__price">
                {product.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
