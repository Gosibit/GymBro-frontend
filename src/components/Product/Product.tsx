import axios from "axios";
import { useEffect, useState } from "react";
import IProduct from "../../Interfaces/IProduct";
import { useParams } from "react-router-dom";
import "../../styles/Product/Product.css";

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams();

  useEffect(() => {
    const searchProduct = async () => {
      try {
        if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
        const response = await axios.get(
          `${process.env.REACT_APP_BE_DOMAIN}/products/${params._id}`
        );
        setProduct(response.data);
        return;
      } catch (error) {
        return;
      }
    };
    searchProduct();
  }, [params]);
  return (
    <div className="product">
      {product && (
        <div className="product__wrapper">
          <img
            src={product.imageUrls.original.url}
            alt={product.title}
            className="product__wrapper__image"
          />
          <div className="product__wrapper__info">
            <hgroup>
              <h1>GYMBRO</h1>
              <h2 className="product__wrapper__info__title">{product.title}</h2>
            </hgroup>
            <p className="product__wrapper__info__price">{product.price}</p>
            <p className="product__wrapper__info__description">
              {product.description}
            </p>
          </div>
          <form className="product__wrapper__form">
            <label htmlFor="size">Size</label>
            <select
              id="Size"
              name="Size"
              className="product__wrapper__form__select"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>

            <button type="submit" className="product__wrapper__form__button">
              Add to cart
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Product;
