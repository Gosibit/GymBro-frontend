import userIcon from "../../files/user-icon.svg";
import useComponentVisible from "../../hooks/useComponentVisible";
import "../../styles/Login/Login.css";
import gymbroLogo from "../../files/gymbro-navbar-logo.png";
import { Link } from "react-router-dom";
function Login() {
  const { ref, isComponentVisible } = useComponentVisible(false);
  return (
    <div className="login" ref={ref}>
      <img src={userIcon} alt="user icon" className="login__icon" />
      {isComponentVisible && (
        <div className="login__dropdown">
          <img src={gymbroLogo} className="login__dropdown__logo"></img>
          <div className="login__dropdown__form">
            <input
              type="text"
              placeholder="Email"
              className="login__dropdown__form__input"
            />
            <input
              type="password"
              placeholder="Password"
              className="login__dropdown__form__input"
            />
            <span className="login__dropdown__form__forgot-password">
              forgot password?
            </span>
            <button className="login__dropdown__form__button">Log in</button>
          </div>
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
