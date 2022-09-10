type IPaymentEffect = {
    isSuccessfull: boolean;
}

function PaymentEffect ({isSuccessfull}: IPaymentEffect) {
  return (
    <div className="payment-effect" style={{fontSize:"5rem",paddingTop:"12rem",fontFamily:"Koulen"}}>
      <div className="payment-effect__content" style={{textAlign:"center"}}>
        <div className="payment-effect__content__message">
          {isSuccessfull ? (
            <h2>Payment accepted</h2>
          ) : (
            <h2>Payment canceled</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentEffect;