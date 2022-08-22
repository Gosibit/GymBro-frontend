import IProduct from "../Interfaces/Product";

function ProductPreview(product: IProduct) {
  return (
    <article className="product-preview">
      <img src={product.imageUrls.original}></img>
      <div className="product-preview__text-wrapper">
        <span>{product.title}</span>
        <span>{product.price}</span>
      </div>
    </article>
  );
}

export default ProductPreview;
