import Product from "./Product";

function ProductTab() {
  let features=["Hi-Tech","Durable"];
  return (
    <div className="ProductTab">
      <Product title="Phone" price={10000} features={features} />
      <Product title="Laptop" price={80000} features={features} />
      <Product title="Pen" price={10} features={features} />
    </div>
  );
}

export default ProductTab;

