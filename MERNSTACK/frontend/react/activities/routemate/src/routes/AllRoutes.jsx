import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  ContactIn,
  ContactUs,
  ContactEu,
  PageNotFound,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />}>
        <Route path="in" element={<ContactIn />} />
        <Route path="us" element={<ContactUs />} />
        <Route path="eu" element={<ContactEu />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
