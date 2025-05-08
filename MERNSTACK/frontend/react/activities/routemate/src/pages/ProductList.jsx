import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams(); //Accessing Query search params
  console.log(searchParams.get("q"));
  const location = useLocation();
  console.log(location);
  console;
  return <div className="component">ProductList: {searchParams.get("q")}</div>;
};
