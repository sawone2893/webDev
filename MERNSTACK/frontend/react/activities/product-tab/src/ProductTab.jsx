import Product from "./Product";
import "./ProductTab.css";
function ProductTab() {
  return (
    <div className="ProductTab">
      <Product idx={0} />
      <Product idx={1} />
      <Product idx={2} />
      <Product idx={3} />
    </div>
  );
}

export default ProductTab;