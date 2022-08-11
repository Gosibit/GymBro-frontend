import "../styles/Navbar/Navbar.scss";
import logo from "../files/gymbro-navbar-logo.png";
import userIcon from "../files/user-icon.svg";
import shoppingCartIcon from "../files/shopping-cart-icon.svg";
import magnifierIcon from "../files/magnifier-icon.svg";

const essa = () => {
  console.log(essa);
};
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
        <div className="navbar__container__search-bar">
          <input
            type="text"
            placeholder="Search"
            onKeyUp={essa}
            className="navbar__container__search-bar__input"
          ></input>
          <button className="navbar__container__search-bar__button">
            <img
              className="navbar__container__search-bar__button__magnifier-icon"
              src={magnifierIcon}
            ></img>
          </button>
        </div>
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
