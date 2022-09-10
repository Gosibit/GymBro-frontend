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
  const [isOpen, setIsOpen] = useState(false);
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
          <Link to="sales" className="Link"><li className="navbar__wrapper__list__item  " key="SALES" style={{color:"red"}}>
            SALES
          </li>
          </Link>
         <Link to="about-us" className="Link"> <li className="navbar__wrapper__list__item aboutus" key="ABOUT US">
            ABOUT US
          </li>
          </Link>
          <Link to="/" className="Link"><li className="navbar__wrapper__list__item__main-site" key="Main Site">MAIN SITE</li></Link>
        </ul>
        <div className="navbar__wrapper__functionalities">
        <SearchBar></SearchBar>
        <Login></Login>
        <ShoppingCart navbarSetIsOpen={setIsOpen}></ShoppingCart>
        </div>
      </div>
      {/*//////////////////////////////////MOBILE VERSION////////////////////////////////////////////  */}
      <button className={`mobile-hamburger ${isOpen ? "mobile-hamburger--open" : "" }`} onClick={()=>setIsOpen(!isOpen)} >
            <span className="mobile-hamburger__line"></span>
            <span className="mobile-hamburger__line"></span>
            <span className="mobile-hamburger__line"></span>
      </button>
        {isOpen && (
      <div className="navbar__mobile">
        <ul className="navbar__mobile__list">
          {genders.map((gender) => {
            return (
              <li
                className={
                  params.gender && params.gender[0] === gender
                    ? "navbar__mobile__list__item navbar__mobile__list__item--active"
                    : "navbar__mobile__list__item"
                }
                key={gender}
                onClick={()=>setIsOpen(false)}
              >
                <Link
                  to={"/products?gender=" + gender}
                  className="Link"
                  key={gender}
                >
                  {gender === "M" ? "Men" : "Women"}
                </Link>
                
              </li>
            );
          })}
           <li
            className={
              params.category && params.category === "Accessories"
                ? "navbar__mobile__list__item navbar__mobile__list__item--active"
                : "navbar__mobile__list__item"
            }
            key="ACCESORIES"
            onClick={()=>setIsOpen(false)}
          >
            <Link className="Link" to="products?category=Accessories">
              ACCESSORIES
            </Link>
          </li>
          <Link to="sales" className="Link"><li className="navbar__mobile__list__item " key="SALES"  onClick={()=>setIsOpen(false)} style={{color:"red"}}>
            SALES
          </li>
          </Link>
         <Link to="about-us" className="Link"> <li className="navbar__mobile__list__item aboutus"  onClick={()=>setIsOpen(false)} key="ABOUT US">
            ABOUT US
          </li>
          </Link>
          <li className="navbar__mobile__list__item" key="Main Site" 
                onClick={()=>setIsOpen(false)}
          ><Link to="/" className="Link">MAIN SITE</Link></li>
        </ul>
        <div className="navbar__mobile__functionalities">
        <Login></Login>
        <ShoppingCart navbarSetIsOpen={setIsOpen}></ShoppingCart>
        </div>
        <SearchBar></SearchBar>
      </div>)}
    </nav>
    
  );
}

export default Navbar;
