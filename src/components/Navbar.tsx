import "../styles/Navbar/Navbar.css";
import logo from "../files/gymbro-navbar-logo.png";
import userIcon from "../files/user-icon.svg";
import shoppingCartIcon from "../files/shopping-cart-icon.svg";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <img className="navbar__container__logo" src={logo} alt="gymbro logo" />
        <ul className="navbar__container__list">
          <li className="navbar__container__list__item">MAN</li>

          <li className="navbar__container__list__item">WOMAN</li>
          <li className="navbar__container__list__item">ACCESSORIES</li>
          <li className="navbar__container__list__item">SALES</li>
          <li className="navbar__container__list__item">ABOUT US</li>
        </ul>
        <SearchBar></SearchBar>
        <img className="navbar__container__user-icon" src={userIcon}></img>
        <img
          className="navbar__container__shopping-cart-icon"
          src={shoppingCartIcon}
        ></img>
      </div>
    </div>
  );
}

export default Navbar;
