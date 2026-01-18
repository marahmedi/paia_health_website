import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/logo-dark.png";
import { useDownloadLink } from "../../lib/useDownloadLink";

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const download = useDownloadLink();

  return (
    <>
      {/* FLOATING NAVBAR */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex h-16 items-center justify-between rounded-[1rem] bg-[#F3F1ED]/80 backdrop-blur-md px-6 shadow-sm border border-black/5">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Paia Health" className="h-8 w-8" />
              <span className="text-sm font-mono font-medium text-black">
                Paia Health
              </span>
            </Link>

            {/* DESKTOP ACTIONS */}
            <div className="hidden md:flex items-center gap-4 ">
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors text-[#69474E]"
              >
                For Individuals
              </Link>

              <a
                  href={download.href}
                  className="inline-flex h-10 w-full sm:w-auto items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  {download.label}
                </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center rounded-full p-2 text-black hover:bg-black/5 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden">
          <div className="absolute top-24 left-1/2 w-[90%] max-w-sm -translate-x-1/2 rounded-2xl bg-[#F3F1ED] p-6 shadow-xl">
            <div className="flex flex-col gap-4 items-center">
              <Link
                to="/women"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-800"
              >
                For Individuals
              </Link>

              <a
                  href={download.href}
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-black px-10 text-md font-semibold text-white transition hover:bg-black/80"
                >
                  {download.label}
                </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
