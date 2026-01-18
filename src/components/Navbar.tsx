import { useState } from "react";
import logo from "../assets/logos/logo.png";

const navItems = ["Our Story", "For Partners", "Science", "Journal"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F3F1ED] backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
          
              <img src={logo} alt="logo" className="h-8 w-6" />
           
            <span className="text-lg font-semibold text-black anonymous-pro-bold">Paia Health</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                className="relative text-sm font-medium text-gray-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="rounded-[50px] bg-[#461111] px-4 py-2.5 cursor-pointer font-[500] text-sm text-white/80 transition hover:bg-[#461111]/80 hover:text-[#DEB2B5]">
              Discuss Partnerships
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-[#461111] transition ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#461111] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#461111] transition ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-6 pt-2">
          {navItems.map((item) => (
            <button
              key={item}
              className="text-left text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
          <button className="mt-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
            Discuss Partnerships
          </button>
        </div>
      </div>
    </nav>
  );
}
