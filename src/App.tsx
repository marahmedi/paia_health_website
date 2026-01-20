import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import PartnersLayout from "./layouts/PartnersLayout";
import WomenLayout from "./layouts/WomenLayout";
import PrivacyPage from "./pages/Legal/PrivacyPage";
import AccountDataPage from "./pages/Legal/AccountDataPage";
import AppDataPage from "./pages/Legal/AppDataPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/partners" element={<PartnersLayout />} />
      <Route path="/women" element={<WomenLayout />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/delete-account" element={<AccountDataPage />} />
      <Route path="/delete-data" element={<AppDataPage />} />
    </Routes>
  );
}
