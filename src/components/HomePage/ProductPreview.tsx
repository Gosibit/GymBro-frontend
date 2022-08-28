import IProduct from "../../Interfaces/IProduct";
import "../../styles/HomePage/ProductPreview/ProductPreview.css";

function ProductPreview(product: IProduct) {
  return (
    <article className="product-preview">
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
    </article>
  );
}

export default ProductPreview;
