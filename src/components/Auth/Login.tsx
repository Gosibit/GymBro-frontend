import userIcon from "../../files/user-icon.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import "../../styles/Login/Login.css";
import gymbroLogo from "../../files/gymbro-navbar-logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Login() {
  const { ref, isComponentVisible } = useComponentVisible(false);
  const [isNotConfirmed, setIsNotConfirmed] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cleanStates = () => {
    setPassword("");
    setEmail("");
  };
  const cleanErrors = () => {
    setIsNotConfirmed(false);
    setIsLoginError(false);
  };

  const logIn = () => {
    cleanStates();
    axios
      .post(process.env.REACT_APP_BE_DOMAIN + "/users/login", {
        email: email,
        password: password,
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          setIsNotConfirmed(true);
        } else {
          setIsLoginError(true);
        }
      });
  };
  useEffect(() => {
    (email !== "" || password !== "") && cleanErrors();
  }, [email, password]);

  return (
    <div className="login" ref={ref}>
      <img src={userIcon} alt="user icon" className="login__icon" />
      {isComponentVisible && (
        <div className="login__dropdown">
          <img src={gymbroLogo} className="login__dropdown__logo"></img>
          <form
            className="login__dropdown__form"
            onSubmit={(e) => {
              logIn();
              e.preventDefault();
            }}
          >
            <input
              type="text"
              placeholder="Email"
              className="login__dropdown__form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login__dropdown__form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="login__dropdown__form__forgot-password">
              <Link to="/reset-password" className="link">
                forgot password?
              </Link>
            </span>
            {isLoginError && (
              <div className="login__dropdown__form__error">
                Sorry, we could not find user with provided parameters.
              </div>
            )}
            {isNotConfirmed && (
              <div className="login__dropdown__form__error">
                Sorry, you need to confirm your email first.
              </div>
            )}
            <button className="login__dropdown__form__button">Log in</button>
          </form>
          <div className="login__dropdown__signup">
            Not a member yet?{" "}
            <Link to="/register" style={{ color: "blue" }}>
              Register!
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
