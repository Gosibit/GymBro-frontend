import { Link } from "react-router-dom";
import { IShoppingCartProduct } from "../../Interfaces/IShoppingCart";
import "../../styles/CheckoutProduct/CheckoutProduct.css";

const linkStyle = {
    width: "100%",
    display: "flex",
    textDecoration: "none",
    color:"black",
    alignItems: "center",
  }

function CheckoutProduct(SCproduct: IShoppingCartProduct) {
    const { product, quantity, size } = SCproduct;
    const {title,price} = product
    return (
        <div className="checkout-product">
          <Link to={"/products/" + product._id} style={linkStyle}> <img className="checkout-product__image" src={SCproduct.product.imageUrls.original.url} alt={SCproduct.product.title} /></Link>
            <div className="checkout-product__info">
            <Link to={"/products/" + product._id} style={linkStyle}>    <p className="checkout-product__info__title">{title}</p> </Link>
                <p className="checkout-product__info__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkout-product__info__size">Size: {size}</p>
                <p className="checkout-product__info__quantity">Quantity: {quantity}</p>
            </div>
        </div>
    );
}

export default CheckoutProduct