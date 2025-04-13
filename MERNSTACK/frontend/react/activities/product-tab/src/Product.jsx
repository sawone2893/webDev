import ProductDetails from "./ProductDetails";
import Price from "./Price";
import "./Product.css";

export default function Product({idx}){
    let title=["Lenovo G78","Dell Span1245","HP Span1245","Dell GL1245"]
    let oldPrices=["811000","78451","124578","98563"];
    let newPrices=["801000","68451","104578","88563"];
    let details=[["Hi-Tech","Fast"],["Fast","HD Resolution"],["Utlra Fast","8Gb RAM"],["Hi-Tech","Durable"]];
    return (
        <div className="Product">
            <ProductDetails title={title[idx]} description={details[idx]}/>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}