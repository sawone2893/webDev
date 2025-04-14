import "./Price.css"
export default function Price({ oldPrice, newPrice }) {
  let oldStyle={textDecoration:"line-through"};
  let newStyle={fontWeight:"bold"};
  return (
    <div className="Price">
      <span style={oldStyle}>Rs {oldPrice}</span>
      <span style={newStyle}>Rs {newPrice}</span>
    </div>
  );
}
