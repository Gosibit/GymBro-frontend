import "../../styles/Navbar/Navbar.css";
import "../../styles/Link/Link.css";
import logo from "../../files/gymbro-navbar-logo.png";
import Login from "../Auth/Login";
import SearchBar from "./SearchBar";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";

function Navbar() {
  const categories = ["T-Shirts", "Shorts"];
  const genders = ["M", "F"];
  const [searchParams, setSearchParams] = useSearchParams({});
  const [params, setParams] = useState<any>({});
  useEffect(() => {
    setParams({});
    searchParams.forEach((value: string, key: string) => {
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
              <li
                className={
                  params.gender && params.gender[0] === gender
                    ? "navbar__wrapper__list__item navbar__wrapper__list__item--active"
                    : "navbar__wrapper__list__item"
                }
                key={gender}
              >
                <Link
                  to={"/products?gender=" + gender}
                  className="Link"
                  key={gender}
                >
                  {gender === "M" ? "Men" : "Women"}
                </Link>
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
            );
          })}
          <li
            className={
              params.category && params.category === "Accessories"
                ? "navbar__wrapper__list__item--active"
                : "navbar__wrapper__list__item"
            }
            key="ACCESORIES"
          >
            <Link className="Link" to="products?category=Accessories">
              ACCESSORIES
            </Link>
          </li>
          <li className="navbar__wrapper__list__item" key="SALES">
            SALES
          </li>
          <li className="navbar__wrapper__list__item" key="ABOUT US">
            ABOUT US
          </li>
        </ul>
        <SearchBar></SearchBar>
        <Login></Login>
        <ShoppingCart></ShoppingCart>
      </div>
    </nav>
  );
}

export default Navbar;
