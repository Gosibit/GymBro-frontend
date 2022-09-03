import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/ResetPassword/ResetPassword.css";
function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isRequestSent, setIsRequestSent] = useState(false);
  const validateEmail = (email: string) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  };
  const resetPasswordRequest = () => {
    if (!isEmailValid) return;
    setIsRequestSent(true);
    axios.post(
      process.env.REACT_APP_BE_DOMAIN + "/auth/reset-password-request",
      {
        email: email,
      }
    );
  };
  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);
  return (
    <div className="reset-password">
      <h1>Reset Password</h1>
      <form
        className="reset-password__form"
        onSubmit={(e) => {
          resetPasswordRequest();
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          className="reset-password__form__input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="reset-password__form__button">Reset Password</button>
      </form>
      {isRequestSent && (
        <div className="reset-password__send">
          <p>
            If address exists, we will send you an email with a link to reset
            your password.
          </p>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;
