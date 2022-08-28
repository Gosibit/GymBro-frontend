import "../styles/Navbar/Navbar.css";
import logo from "../files/gymbro-navbar-logo.png";
import userIcon from "../files/user-icon.svg";
import shoppingCartIcon from "../files/shopping-cart-icon.svg";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const categories = ["T-Shirts", "Accessories", "Shorts"];
  const genders = ["M", "F"];
  const [isActive, setIsActive] = useState("xd");
  console.log(isActive);
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Link to="/">
          <img className="navbar__wrapper__logo" src={logo} alt="gymbro logo" />
        </Link>
        <ul className="navbar__wrapper__list">
          {genders.map((gender) => {
            return (
              <Link
                to={"/products?gender=" + gender}
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => setIsActive(gender)}
              >
                <li
                  className={
                    isActive[0] === gender
                      ? "navbar__wrapper__list__item active"
                      : "navbar__wrapper__list__item"
                  }
                  key={gender}
                >
                  {gender === "M" ? "Men" : "Women"}
                  <ul className="navbar__wrapper__list__item__dropdown">
                    {categories.map((category) => {
                      return (
                        <li key={gender + category}>
                          <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to={`/products?gender=${gender}&category=${category}`}
                            onClick={() => {
                              setIsActive(`${gender}${category}`);
                            }}
                          >
                            {category}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </Link>
            );
          })}
          <li className="navbar__wrapper__list__item">ACCESSORIES</li>
          <li className="navbar__wrapper__list__item">SALES</li>
          <li className="navbar__wrapper__list__item">ABOUT US</li>
        </ul>
        <SearchBar></SearchBar>
        <img className="navbar__wrapper__user-icon" src={userIcon}></img>
        <img
          className="navbar__wrapper__shopping-cart-icon"
          src={shoppingCartIcon}
        ></img>
      </div>
    </nav>
  );
}

export default Navbar;
