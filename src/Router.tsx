import { Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home/index";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
