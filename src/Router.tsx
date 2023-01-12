import { Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home/index";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CheckoutOrder } from "./pages/CheckoutOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkoutorder" element={<CheckoutOrder />} />
      </Route>
    </Routes>
  );
}
