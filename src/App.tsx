import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Login from "./pages/Auth/Login";
import HowItWorks from "./pages/HowItWroks/HowItWorks";
import Header from "./components/Header";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import GetStarted from "./pages/GetStarted/GetStarted";
import ProductDescription from "./pages/Product/ProductDescription";
import "react-loading-skeleton/dist/skeleton.css";
import ScrollToTop from "./components/ScrollToTop";
import Cart from "./pages/Cart/Cart";
import Billing from "./pages/Billing/Billing";
import OrderConfirm from "./pages/Billing/components/OrderConfirm";
// import { useEffect, useState } from 'react'
// import { StoreRegion } from './Interface/product'
// import Medusa from "@medusajs/medusa-js";
// import { useEffect } from "react";
// const medusa = new Medusa({
//   baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
//   maxRetries: 3,
// });
function App() {
  // const[region, setRegion] = useState<StoreRegion>({
  //   region_id:"",
  //   currency_code:""
  // });
  // useEffect(()=>{
  //   setRegion({
  //     region_id:localStorage.getItem("region")?JSON.parse(localStorage.getItem("region") as string).region_id:"",
  //     currency_code:localStorage.getItem("region")?JSON.parse(localStorage.getItem("region") as string).currency_code:""

  //   })
  // },[])
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token") || "";

  // useEffect(() => {
  //   medusa.auth
  //     .getSession({ authorization: `Bearer ${token}` })
  //     .then(() => {})
  //     .catch(() => {
  //       navigate("/");
  //     });
  // }, []);

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/auth" && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/confirm" element={<OrderConfirm />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
