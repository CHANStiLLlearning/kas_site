import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.png";
const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Programs", path: "/programs" },
  { name: "Events", path: "/events" },
  { name: "Plans", path: "/plans" },
  { name: "Contact US", path: "/contact" },
  { name: "About", path: "/about" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14  flex items-center justify-center p-2 text-white overflow-hidden  group-hover:scale-110 transition-transform">
            <img src={logo} alt="KAS Logo" />
          </div>
          <div>
            <h1 className="text-[#c02424] font-bold text-xl leading-none moul-regular ">
              សាលាខ្មែរអាមេរិកាំង
            </h1>
            <p className="text-[#002B7F] font-bold text-xs tracking-tight uppercase pt-1">
              Khmer American School
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold transition-colors hover:text-[#002B7F] ${location.pathname === item.path ? "text-[#002B7F]" : "text-slate-600"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-1.5 bg-slate-100 rounded-full text-sm border-none focus:ring-2 focus:ring-[#002B7F] w-48 transition-all"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-6 flex flex-col gap-4"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium text-slate-700 hover:text-[#002B7F]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};
