import { IShoppingCartProduct } from "../../Interfaces/IShoppingCart";
import "../../styles/ShoppingCartProduct/ShoppingCartProduct.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

import IProduct from "../../Interfaces/IProduct";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const linkStyle = {
  width: "100%",
  display: "flex",
  textDecoration: "none",
  alignItems: "center",
}

function ShoppingCartProduct(SCproduct: IShoppingCartProduct) {
  const { product, quantity, size } = SCproduct;

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="shopping-cart-product">
      <Link
        to={"/products/" + product._id}
        style={linkStyle}
      >
        <img
          src={product.imageUrls.thumbnail.url}
          alt={product.title}
          className="shopping-cart-product__image"
        />
            </Link>

        <div className="shopping-cart-product__info">
        <Link
        to={"/products/" + product._id}
        style={linkStyle}
      > <h3 className="shopping-cart-product__info__title">
            {product.title}
          </h3>
          </Link>
          <div className="shopping-cart-product__info__wrapper">
            <p className="shopping-cart-product__info__wrapper__price">
              {product.price}$
            </p>
            <div className="shopping-cart-product__info__wrapper__quantity">
              <button
                className="shopping-cart-product__info__wrapper__quantity__button"
                onClick={() =>
                  updateProductQuantity({
                    product: product,
                    quantity: quantity - 1,
                    size: size,
                  })
                }
              >
                -
              </button>
              <p className="shopping-cart-product__info__wrapper__quantity__number">
                {quantity}
              </p>
              <button
                className="shopping-cart-product__info__wrapper__quantity__button"
                onClick={() =>
                  updateProductQuantity({
                    product: product,
                    quantity: quantity + 1,
                    size: size,
                  })
                }
              >
                +
              </button>
            </div>
            <button className="shopping-cart-product__info__wrapper__remove" onClick={()=>{
              deleteProduct({product:product,size:size,quantity:quantity})
            }}>remove</button>
          </div>
        </div>
    </div>
  );
  function getHeaders() {
    const headers = user
      ? {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        }
      : undefined;
    return headers;
  }
  function deleteProduct({ product, size }: IShoppingCartProduct) {
    axios
      .delete(
        process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/remove-from-cart",
        {
          headers: getHeaders(),
          params: {
            shoppingCartId: shoppingCart._id,
            productId: product._id,
            size: size,
          },
        }
      )
      .then((res) => {
        setShoppingCart(res.data);
      });
  }

  function updateProductQuantity({
    product,
    size,
    quantity,
  }: IShoppingCartProduct) {
    axios
      .put(
        process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/update-cart",
        {
          shoppingCartId: shoppingCart._id,
          productId: product._id,
          size: size,
          quantity: quantity,
        },
        {
          headers: getHeaders(),
        }
      )
      .then((res) => {
        setShoppingCart(res.data);
      });
  }
}
export default ShoppingCartProduct;
