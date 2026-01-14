import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PartnersLayout from "./layouts/PartnersLayout";
import WomenLayout from "./layouts/WomenLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/partners" element={<PartnersLayout />} />
      <Route path="/women" element={<WomenLayout />} />
    </Routes>
  );
}
