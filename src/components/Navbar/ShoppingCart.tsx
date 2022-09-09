import { useContext } from "react";
import shoppingCartIcon from "../../files/shopping-cart-icon.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import "../../styles/ShoppingCart/ShoppingCart.css";
import ShoppingCartProduct from "./ShoppingCartProduct";

function ShoppingCart() {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="shopping-cart" ref={ref}>
     { shoppingCart && shoppingCart.products && shoppingCart.products.length > 0 && ( 
      <div className="shopping-cart__counter">
        {shoppingCart.products.length}
      </div>
     )
}
      <img
        src={shoppingCartIcon}
        alt="shopping cart icon"
        className="shopping-cart__icon"
      />
      {isComponentVisible && (
        <div className="shopping-cart__dropdown">
          {shoppingCart &&
          shoppingCart.products &&
          shoppingCart.products.length > 0 ? (
            <><div className="shopping-cart__dropdown__products">
                {shoppingCart.products.map((SCproduct) => (
                  <ShoppingCartProduct {...SCproduct}></ShoppingCartProduct>
                ))}
              </div><div className="shopping-cart__dropdown__total">
                  <p className="shopping-cart__dropdown__total__price">
                    Total: {shoppingCart.total}$
                  </p>
                  <Link to="/checkout">
                    <button className="shopping-cart__dropdown__total__button">
                      Checkout
                    </button>
                  </Link>
                </div></>
          ) : (
            <div className="shopping-cart__dropdown__empty">
              <h2 className="shopping-cart__dropdown__empty__title">
                Your shopping cart is empty
              </h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
