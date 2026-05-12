import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Sparkles, Menu, X } from "lucide-react";

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[64px] sm:h-[68px] flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 shadow-lg shadow-violet-300/40 group-hover:shadow-violet-400/50 transition-shadow" />
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
              <span className="text-white font-black text-base sm:text-lg italic">V</span>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-30 blur-md transition-opacity -z-10" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-black tracking-tight text-gray-900">Velocity</div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-violet-500 uppercase -mt-0.5">Learning</div>
          </div>
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-gray-50/80 border border-gray-100">
          {(["Courses", "Roadmap", "Mentorship", "FAQs"] as const).map((l) => (
            <a key={l} href={l === "FAQs" ? "/#faqs" : "#"} className="px-3 lg:px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:text-violet-600 hover:shadow-sm transition-all">{l}</a>
          ))}
          <Link to="/about" className="px-3 lg:px-4 py-1.5 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:text-violet-600 hover:shadow-sm transition-all">About Us</Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Link to="/outreach" className="group relative inline-flex items-center gap-1.5 sm:gap-2 pl-4 sm:pl-5 pr-3 sm:pr-4 py-2 sm:py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 text-white text-xs sm:text-sm font-semibold transition-all">
            <span className="hidden xs:inline">Join </span>Waitlist
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-500 group-hover:bg-violet-400 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </Link>
          <button className="hidden sm:flex w-10 h-10 rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 items-center justify-center text-gray-500 transition-all">
            <Sparkles className="w-4 h-4" />
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 flex items-center justify-center text-gray-500 transition-all"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
          {(["Courses", "Roadmap", "Mentorship", "FAQs"] as const).map((l) => (
            <a key={l} href={l === "FAQs" ? "/#faqs" : "#"} onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-all">{l}</a>
          ))}
          <Link to="/about" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-violet-50 hover:text-violet-600 transition-all">About Us</Link>
        </div>
      )}
    </nav>
  );
};

export default HomeNavbar;
