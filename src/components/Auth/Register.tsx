import axios from "axios";
import { useEffect, useState } from "react";
import "../../styles/Register/Register.css";
function Register() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const cleanStates = () => {
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  };
  async function register() {
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      const response = await axios
        .post(process.env.REACT_APP_BE_DOMAIN + "/users/register", {
          email: email,
          password: password,
        })
        .then(() => {
          window.location.href = "/register-success";
        })
        .catch(() => {
          cleanStates();
          setTimeout(() => {
            setIsRegisterError(true);
          }, 50);
        });
    }
  }

  useEffect(() => {
    setIsRegisterError(false);
    const validateEmail = (email: string) => {
      const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return setIsEmailValid(regex.test(String(email).toLowerCase()));
    };
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
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);
  }, [email, password, confirmPassword]);

  return (
    <div className="register">
      <h1>Register</h1>
      <form className="register__form">
        {isRegisterError && (
          <div className="register__form__error">
            <p>Email is already in use!</p>
          </div>
        )}
        <input
          type="text"
          placeholder="Email"
          className="register__form__input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!isEmailValid && (
          <span className="register__form__error">
            Please enter a valid email address
          </span>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="register__form__input"
        />
        {!isPasswordValid && (
          <span className="register__form__error">
            Password must be at least 8 characters long, contain at least one
            uppercase letter, one lowercase letter, one number and one special
            character.
          </span>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          className="register__form__input"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!isConfirmPasswordValid && (
          <span className="register__form__error">Passwords do not match</span>
        )}
        <button
          type="button"
          className="register__form__button"
          onClick={async () => await register()}
        >
          Sign up
        </button>
      </form>
      <div className="register__tos">
        By creating an account, you accept our{" "}
        <span style={{ color: "#0079E9" }}> Terms and Conditions</span> Read our
        <span style={{ color: "#0079E9" }}> Privacy Policy. </span>
      </div>
    </div>
  );
}

export default Register;
