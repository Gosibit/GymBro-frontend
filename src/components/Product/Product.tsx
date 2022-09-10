import axios from "axios";
import { useContext, useEffect, useState } from "react";
import IProduct, { Category } from "../../Interfaces/IProduct";
import { useParams } from "react-router-dom";
import "../../styles/Product/Product.css";
import { IShoppingCartProduct, Size } from "../../Interfaces/IShoppingCart";
import { UserContext } from "../../contexts/UserContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import Loader from "../Loader/Loader";

function Product() {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams();

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const { user, setUser } = useContext(UserContext);
  const [size, setSize] = useState<Size>();

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
    setSize(Size.S);
  }, [params]);
  return (
    <div className="product">
      {product ? (
        <div className="product__wrapper"  >
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
           { product.category!==Category.ACCESORIES &&(
            <select
              id="Size"
              name="Size"
              className="product__wrapper__form__select"
              onChange={(e) =>
                {
                  Object.values(Size).forEach((size) => (
                    size === e.target.value && setSize(size)
                ))}
              }
              value={size}
            >
              {Object.values(Size).map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
           )
           }
            <button
              type="submit"
              className="product__wrapper__form__button"
              onClick={(e) => {
                if(size) addToCart({product,size,quantity:1})
                e.preventDefault();
              }}
            >
              Add to cart
            </button>
          </form>
        </div>
      ):(
        <Loader/>
      )  
      }
    </div>
  );
  function getHeaders() {
   
         return { Authorization: "Bearer " + localStorage.getItem("accessToken")}
  }

  function addToCart({ product, size, quantity }: IShoppingCartProduct) {
    axios
      .post(
        process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/add-to-cart",
        {
         shoppingCartId: shoppingCart?._id,
          productId: product._id,
          size: size,
          quantity: quantity,
        },
        user && {
         headers: getHeaders(),
        }
      )
      .then((res) => {
        if(!shoppingCart && !user) localStorage.setItem("shoppingCartId", res.data._id)
        setShoppingCart(res.data);
      })
    
      return
  }
}

export default Product;
