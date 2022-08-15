import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import magnifierIcon from "../files/magnifier-icon.svg";
import useComponentVisible from "../hooks/useComponentVisible";
import "../styles/SearchBar/SearchBar.css";
function SearchBar() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const { ref, isComponentVisible } = useComponentVisible(false);
  const searchProducts = async (title: string) => {
    try {
      if (!process.env.REACT_APP_BE_DOMAIN) throw Error();
      const response = await axios.get(
        `${process.env.REACT_APP_BE_DOMAIN}/products/search-bar-query`,
        { params: { title: title } }
      );
      setSearchedProducts(response.data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      await searchProducts(searchTerm);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);
  return (
    <div className="search-bar" ref={ref}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar__input"
      ></input>
      <button className="search-bar__button">
        <img
          className="search-bar__button__magnifier-icon"
          src={magnifierIcon}
        ></img>
      </button>
      {isComponentVisible && (
        <ul className="search-bar__items">
          {searchedProducts.map((el: any) => {
            return (
              <li className="search-bar__items__item" key={el._id}>
                <img
                  className="search-bar__items__item__image"
                  src={el.imageUrl}
                />
                {el.title}
              </li>
            );
          })}
          {searchedProducts.length === 0 && (
            <span className="search-bar__items__no-products">
              No products found
            </span>
          )}
        </ul>
      )}
    </div>
  );
}
export default SearchBar;
