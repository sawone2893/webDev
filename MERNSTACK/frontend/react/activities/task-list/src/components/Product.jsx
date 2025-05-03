export const Product = ({ product }) => {
  return (
    <div className="Product" key={product.id}>
      <p>{product.name}: ${product.price}: {product.in_stock ? "In Stock" : "Out of Stock!"}</p>
    </div>
  );
};
