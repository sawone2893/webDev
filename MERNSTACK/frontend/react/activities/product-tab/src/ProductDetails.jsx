import "./ProductDetails.css";
export default function ProductDetails({ title, description }) {
  return (
    <div className="ProductDetails">
      <h3>{title}</h3>
      {description.map((desc) => (
        <li>{desc}</li>
      ))}
    </div>
  );
}
