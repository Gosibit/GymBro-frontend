import { Link } from "react-router-dom";
import IProduct from "../../Interfaces/IProduct";
import "../../styles/HomePage/ProductPreview/ProductPreview.css";
import "../../styles/Link/Link.css";

function ProductPreview(product: IProduct) {
  return (
    <article className="product-preview">
      <Link
        to={`/products/${product._id}`}
        className="Link"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={product.imageUrls.original}
          className="product-preview__image"
        ></img>
        <div className="product-preview__text-wrapper">
          <span>{product.title}</span>
          <span className="product-preview__text-wrapper__price">
            {product.price}
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProductPreview;
