import IProduct from "../../Interfaces/IProduct";
import "../../styles/ProductsSection/ProductsSection.scss";
import ProductPreview from "./ProductPreview";
function ProductsSection(products: IProduct[]) {
  console.log(products);
  console.log("xd");
  return (
    <section className="products-section">
      <h2>BESTSELLERS</h2>
      <div className="products-section__wrapper">
        {Object.values(products).map((product: IProduct) => {
          return (
            <ProductPreview key={product._id} {...product}></ProductPreview>
          );
        })}
        <div className="products-section_product"></div>
      </div>
    </section>
  );
}
export default ProductsSection;
