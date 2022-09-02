import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/ChangePassword/ChangePassword.css";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const [isChangeSuccess, setIsChangeSuccess] = useState(false);
  const [isChangeError, setIsChangeError] = useState(false);

  const { token } = useParams();
  const validatePassword = (password: string) => {
    const regex =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9!@$!%*?&]{8,30}$/;
    return setIsPasswordValid(regex.test(String(password)));
  };
  const validateConfirmPassword = (
    password: string,
    confirmPassword: string
  ) => {
    return setIsConfirmPasswordValid(password === confirmPassword);
  };

  const cleanDataStates = () => {
    setPassword("");
    setConfirmedPassword("");
  };

  const cleanValidations = () => {
    setIsChangeError(false);
    setIsChangeSuccess(false);
  };
  const changePasswordRequest = () => {
    if (!isPasswordValid || !isConfirmPasswordValid) return;
    cleanDataStates();
    axios
      .post(process.env.REACT_APP_BE_DOMAIN + "/auth/reset-password", {
        password: password,
        token: token,
      })
      .then(() => {
        setIsChangeSuccess(true);
        setTimeout(() => (window.location.href = "/"), 3000);
      })
      .catch(() => {
        setIsChangeError(true);
      });
  };

  useEffect(() => {
    cleanValidations();
    validatePassword(password);
    validateConfirmPassword(password, confirmedPassword);
  }, [password, confirmedPassword]);

  return (
    <div className="change-password">
      <h1>Change Password</h1>
      <form
        className="change-password__form"
        onSubmit={(e) => {
          changePasswordRequest();
          e.preventDefault();
        }}
      >
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="change-password__form__input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!isPasswordValid && password.length > 1 && (
          <p className="change-password__form__error">
            Password must be at least 8 characters long, contain at least one
            uppercase letter, one lowercase letter, one number and one special
            character.
          </p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmedPassword}
          className="change-password__form__input"
          onChange={(e) => {
            setConfirmedPassword(e.target.value);
          }}
        />
        {!isConfirmPasswordValid && confirmedPassword.length > 1 && (
          <p className="change-password__form__error">
            Passwords are not the same.
          </p>
        )}

        <button className="change-password__form__button">
          Change Password
        </button>
      </form>
      {isChangeSuccess && (
        <div className="change-password__success">
          <p>Password changed successfully!</p>
          <p>You will be redirected in 3 seconds</p>
        </div>
      )}
      {isChangeError && (
        <div className="change-password__fail">
          <p>Something went wrong with changing password.</p>
        </div>
      )}
    </div>
  );
}

export default ChangePassword;
