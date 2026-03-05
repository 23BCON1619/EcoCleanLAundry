import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { openWhatsAppForService } from "../utils/whatsapp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "commercial", path: "/commercial" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const navItemClass = ({ isActive }) =>
    `transition duration-200 hover:text-gray-200 ${
      isActive ? "border-b-2 border-white pb-1" : ""
    }`;

  const mobileNavItemClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-base transition duration-200 ${
      isActive
        ? "bg-white text-[#0F4C81] font-semibold"
        : "text-white hover:bg-white/10"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-[#2FA4D4] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex items-center justify-between gap-3">
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={closeMenu}
          >
            <div className="shrink-0 rounded-xl bg-white/95 p-1.5 sm:p-2 shadow-[0_8px_22px_rgba(15,76,129,0.28)] ring-1 ring-[#0F4C81]/20">
              <img
                src="/logo.png"
                alt="Laundry Logo"
                className="w-[clamp(50px,9vw,88px)] h-auto max-h-[88px] object-contain"
              />
            </div>
            <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide truncate">
              Eco Clean Laundry
            </h1>
          </NavLink>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-3 hidden lg:flex items-center justify-between gap-6">
          <nav className="flex items-center gap-7 text-white text-[16px] font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navItemClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Book Now Button */}
          <button
            type="button"
            onClick={() => openWhatsAppForService("Laundry Service")}
            className="shrink-0 bg-white text-black px-5 py-2.5 rounded-full text-[15px] xl:text-[16px] font-semibold border border-transparent hover:bg-[#2FA4D4] hover:text-white hover:border-white transition duration-300"
          >
            Book Now
          </button>
        </div>

        {/* Mobile / Tablet Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[600px] mt-3" : "max-h-0"
          }`}
        >
          <nav className="rounded-xl bg-[#1E8CB8] p-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={mobileNavItemClass}
                onClick={closeMenu}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-[15px] font-semibold border border-transparent hover:bg-[#2FA4D4] hover:text-white hover:border-white transition duration-300"
              onClick={() => {
                closeMenu();
                openWhatsAppForService("Laundry Service");
              }}
            >
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
