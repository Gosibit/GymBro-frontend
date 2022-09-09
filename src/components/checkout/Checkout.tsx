import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import CheckoutProduct from "./CheckoutProduct";
import dhlIcon from "../../files/dhl-logo.png";
import fedexIcon from "../../files/fedex-logo.png";
import alipayIcon from "../../files/alipay.png";
import cardIcon from "../../files/credit-card.png"
import "../../styles/Checkout/Checkout.css";
function Checkout () {
    enum PaymentMethod {
        CARD= "card",
        ALIPAY = "alipay",
        NULL = "null"
    }
    enum DeliveryMethod {
        DHL = "dhl",
        FEDEX = "fedex",
        NULL = "null"
    }
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.NULL);
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(DeliveryMethod.NULL);
    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
    
    return (
        <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout__wrapper">
            <div className="checkout__wrapper__left-side">
        <div className="checkout__wrapper__left-side__choose-method">
            <h2>Delivery Method</h2>
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
        <div className="checkout__wrapper__left-side__payment-method">
            <h2>Payment Method</h2>
            <div className="checkout__wrapper__left-side__choose-method__options">
                <div className="checkout__wrapper__left-side__choose-method__options__option">
                    <img src={alipayIcon} alt="fedex"/>
                </div>
                <div className="checkout__wrapper__left-side__choose-method__options__option">
                <img src={cardIcon}/>
                </div>
            </div>
        </div>
    {shoppingCart && shoppingCart.products && shoppingCart.products.length > 0 && (
        <div className="checkout__wrapper__left-side__products">
            <h1>Your Order</h1>
            {shoppingCart.products.map((SCproduct) => (
                <CheckoutProduct {...SCproduct}></CheckoutProduct>
                ))}
        </div>
    )}
            </div>
            <div className="checkout__wrapper__right-side">
                <div className="checkout__wrapper__right-side__summary">
                    <h2 >Summary</h2>
                    </div>
            </div>
    </div>
    </div>
    )
}
export default Checkout