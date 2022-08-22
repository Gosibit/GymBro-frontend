import "../styles/ProductsSection/ProductsSection.scss";
function ProductsSection(products: any) {
  return (
    <section className="products-section">
      <div className="products-section__wrapper">
        <h1>BESTSELLERS</h1>
        <div className="products-section_product"></div>
      </div>
    </section>
  );
}
export default ProductsSection;
