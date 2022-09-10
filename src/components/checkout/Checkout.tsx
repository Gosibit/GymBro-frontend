import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import CheckoutProduct from "./CheckoutProduct";
import dhlIcon from "../../files/dhl-logo.png";
import fedexIcon from "../../files/fedex-logo.png";
import alipayIcon from "../../files/alipay.png";
import cardIcon from "../../files/credit-card.png"
import "../../styles/Checkout/Checkout.css";
import axios from "axios";
function Checkout () {
    enum PaymentMethod {
        CARD= "card",
        ALIPAY = "alipay",
        NULL = "null"
    }
    enum DeliveryMethod {
        DHL = "Dhl",
        FEDEX = "Fedex",
        NULL = "null"
    }
    
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.NULL);
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(DeliveryMethod.NULL);
    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
    const [isError, setIsError] = useState(false)    
    
    let deliveryPrice: number = 0;

    switch(deliveryMethod){
        case DeliveryMethod.DHL:
            deliveryPrice = 3.50;
            break;
        case DeliveryMethod.FEDEX:
            deliveryPrice = 5.50;
            break;
        case DeliveryMethod.NULL:
            deliveryPrice = 0;
            break;
    }
    const totalPrice = shoppingCart && shoppingCart.total ? parseFloat(shoppingCart.total) + deliveryPrice : deliveryPrice;

    const checkout = () => {
        axios.post(process.env.REACT_APP_BE_DOMAIN + "/shopping-carts/checkout", {
            paymentMethod: paymentMethod,
            deliveryMethod: deliveryMethod,
            shoppingCartId: shoppingCart._id
        }).then((res) => {
            setShoppingCart(res.data);
            window.location.href = res.data.url
        })
            
    }


    return (
        <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout__wrapper">
            <div className="checkout__wrapper__left-side">
        <div className="checkout__wrapper__left-side__choose-method">
            <h2>Choose Delivery Method</h2>
            <div className="checkout__wrapper__left-side__choose-method__options">
                <div className={
                     deliveryMethod===DeliveryMethod.FEDEX ? "checkout__wrapper__left-side__choose-method__options__option--active":
                     "checkout__wrapper__left-side__choose-method__options__option"
                     }>
                    <img src={fedexIcon} alt="fedex" onClick={()=>{setDeliveryMethod(DeliveryMethod.FEDEX)
                    }} />
                </div>
                <div className={
                     deliveryMethod===DeliveryMethod.DHL ? "checkout__wrapper__left-side__choose-method__options__option--active":
                     "checkout__wrapper__left-side__choose-method__options__option"
                     }>
                    <img src={dhlIcon} alt="dhl" onClick={()=>{setDeliveryMethod(DeliveryMethod.DHL)
                    }} />
                </div>
            </div>
        </div>
        <div className="checkout__wrapper__left-side__choose-method">
            <h2>Select Payment Method</h2>
            <div className="checkout__wrapper__left-side__choose-method__options">
            <div className={paymentMethod===PaymentMethod.ALIPAY ? "checkout__wrapper__left-side__choose-method__options__option--active":
                     "checkout__wrapper__left-side__choose-method__options__option"
                     }>
                    <img src={cardIcon} alt="ALIPAY" onClick={()=>{setPaymentMethod(PaymentMethod.ALIPAY)
                    }} />
                         </div>
                <div className={paymentMethod===PaymentMethod.CARD ? "checkout__wrapper__left-side__choose-method__options__option--active":
                     "checkout__wrapper__left-side__choose-method__options__option"
                     }>
                    <img src={alipayIcon} alt="credit card" onClick={()=>{setPaymentMethod(PaymentMethod.CARD)
                    }} />
                </div>
                </div>
        </div>
    {shoppingCart && shoppingCart.products && shoppingCart.products.length > 0 && (
        <div className="checkout__wrapper__left-side__products">
            <h1>Your Order</h1>
            {shoppingCart.products.map((SCproduct) => {
                const { product, size } = SCproduct;
                return <CheckoutProduct key={product._id +size} {...SCproduct}></CheckoutProduct>
            })}
        </div>
    )}
            </div>
            <div className="checkout__wrapper__right-side">
                <div className="checkout__wrapper__right-side__summary">
                    <div className="checkout__wrapper__right-side__summary__items-price">Products Price: {shoppingCart && shoppingCart.total && (shoppingCart.total)}$ </div>
                    <div className="checkout__wrapper__right-side__summary__delivery-price">Delivery Price: 
                    {" " +deliveryPrice.toFixed(2)}$
                    </div>
                    </div>
                    <div className="checkout__wrapper__right-side__summary__total-price">Total Price: {" " + totalPrice.toFixed(2)}$</div>
                    <button className="checkout__wrapper__right-side__summary__button" onClick={()=>{
                        if(paymentMethod===PaymentMethod.NULL || deliveryMethod===DeliveryMethod.NULL)setIsError(true)
                        else checkout()
                    }}>Order</button>
                    </div>
            </div>
    </div>
    )
}
export default Checkout