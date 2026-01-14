import { Link } from "react-router-dom";

export default function WomenNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl text-[#461111]">
              spa
            </span>
            <h2 className="text-xl font-bold text-[#461111]">
              Paia Health
            </h2>
          </Link>

          <button className="hidden sm:flex h-10 rounded-full bg-[#461111] px-6 text-sm font-semibold text-white">
            Join Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
