import "../styles/Navbar/Navbar.css";
import "../styles/Link/Link.css";
import logo from "../files/gymbro-navbar-logo.png";
import userIcon from "../files/user-icon.svg";
import shoppingCartIcon from "../files/shopping-cart-icon.svg";
import SearchBar from "./SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const categories = ["T-Shirts", "Accessories", "Shorts"];
  const genders = ["M", "F"];
  const [searchParams, setSearchParams] = useSearchParams({});
  const [params, setParams] = useState<any>({});
  useEffect(() => {
    console.log("xd");
    setParams({});
    searchParams.forEach((value: string, key: string) => {
      console.log(value, key);
      setParams((params: any) => ({ ...params, [key]: value }));
    });
  }, [searchParams]);
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
                className="Link"
                key={gender}
              >
                <li
                  className={
                    params.gender && params.gender[0] === gender
                      ? "navbar__wrapper__list__item navbar__wrapper__list__item--active"
                      : "navbar__wrapper__list__item"
                  }
                  key={gender}
                >
                  {gender === "M" ? "Men" : "Women"}
                  <ul className="navbar__wrapper__list__item__dropdown">
                    {categories.map((category) => {
                      return (
                        <li
                          key={gender + category}
                          className={
                            params.gender &&
                            params.gender[0] === gender &&
                            params.category &&
                            params.category === category
                              ? "navbar__wrapper__list__item__dropdown__item--active"
                              : "navbar__wrapper__list__item__dropdown__item"
                          }
                        >
                          <Link
                            className="Link"
                            to={`/products?gender=${gender}&category=${category}`}
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
          <li className="navbar__wrapper__list__item" key="ACCESORIES">
            ACCESSORIES
          </li>
          <li className="navbar__wrapper__list__item" key="SALES">
            SALES
          </li>
          <li className="navbar__wrapper__list__item" key="ABOUT US">
            ABOUT US
          </li>
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
