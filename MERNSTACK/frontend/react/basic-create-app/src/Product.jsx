import "./Product.css";

function Product({ title, price, features }) {
  let isDiscount = price > 30000;
  let style = { backgroundColor: isDiscount ? "yellow" : "" };
  return (
    <div className="Product" style={style}>
      <h1>{title}</h1>
      <p>Price: Rs {price}</p>
      {isDiscount ? <p>Discount of 5%</p> : null}
      {isDiscount && <p>Discount of 5%</p>}
      <ul>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
