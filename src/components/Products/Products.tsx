import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import IProduct from "../../Interfaces/IProduct";
import "../../styles/Products/Products.css";

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
        return;
      }
    };
    searchProducts();
  }, [params]);

  useEffect(() => {
    setParams({});
    searchParams.forEach((value: string, key: string) => {
      setParams((params: any) => ({ ...params, [key]: value }));
    });
  }, [searchParams]);

  return (
    <div className="products">
      <ul className="products__list">
        {products.map((product: IProduct) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            className="Link"
          >
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
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
