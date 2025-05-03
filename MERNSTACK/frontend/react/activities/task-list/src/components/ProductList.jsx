import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Product } from "./Product";
export const ProductList = () => {
  let API_URL = "http://localhost:8000/products";
  const [url, setUrl] = useState(API_URL);
  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div>
        <button
          onClick={() => {
            setUrl(API_URL);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setUrl(`${API_URL}?in_stock=true`);
          }}
        >
          In Stock Only
        </button>
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
      </div>
      {products && products.map((product) => <Product product={product} />)}
    </section>
  );
};
