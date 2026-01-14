import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = ["Our Story", "Science", "Journal"];

export default function PartnersNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-[#F3F1ED]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} className="h-8 w-6" />
            <span className="font-semibold">Paia Health</span>
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button key={item} className="text-sm text-gray-700">
                {item}
              </button>
            ))}
          </div>

          <button className="hidden md:block rounded-full bg-[#461111] px-4 py-2 text-sm text-white">
            Discuss Partnerships
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
