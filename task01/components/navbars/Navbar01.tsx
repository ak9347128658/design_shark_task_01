"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, Search } from "lucide-react";
import { BG_COLOR_01, BG_COLOR_02 } from "@/constants/colors";

export default function Navbar01() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  const navLinks = [
    { name: "Home", href: "#", dropdown: null },
    { name: "About Us", href: "#", dropdown: null },
    {
      name: "Portfolio",
      href: "#",
      dropdown: [
        { name: "Portfolio Item 1", href: "#" },
        { name: "Portfolio Item 2", href: "#" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "Page 1", href: "#" },
        { name: "Page 2", href: "#" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      dropdown: [
        { name: "Blog Post 1", href: "#" },
        { name: "Blog Post 2", href: "#" },
      ],
    },
    { name: "Contact Us", href: "#", dropdown: null },
  ];

  return (
    <header className={`flex items-center justify-between py-5 px-4 md:px-4 lg:px-5 ${BG_COLOR_01} shadow-sm z-50`}>
      {/* Mobile Menu Trigger */}
      <button
        className="lg:hidden p-1.5 rounded-md border border-gray-300 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <Menu className="h-6 w-6 text-gray-800" />
      </button>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center p-3 border-b border-gray-200">
            <Link href="/" className="flex items-center gap-1.5">
              <div className="h-10 w-10 bg-[#FFD700] rounded-full flex items-center justify-center">
                <span className="font-bold text-black text-xl">S</span>
              </div>
              <span className="text-3xl md:text-4xl font-bold text-black">SAOR</span>
            </Link>
            <button
              className="p-1.5 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <Menu className="h-6 w-6 rotate-90 text-gray-800" />
            </button>
          </div>
          <nav className="grid gap-2 py-4 px-3">
            {navLinks.map((link) =>
              link.dropdown ? (
                <details key={link.name} className="group">
                  <summary className="flex w-full items-center py-2 text-base md:text-lg font-semibold text-gray-800 cursor-pointer justify-between">
                    {link.name} <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="grid gap-1 pl-3 pt-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex w-full items-center py-1.5 text-sm md:text-base text-gray-700 hover:${BG_COLOR_02} hover:text-black cursor-pointer relative overflow-hidden transition-all duration-300 group/item`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ verticalAlign: "baseline" }}
                      >
                        <span
                          className={`absolute inset-y-0 left-0 w-0 ${BG_COLOR_02} transition-all duration-300 group-hover/item:w-full`}
                        ></span>
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex w-full items-center py-2 text-base md:text-lg font-semibold text-gray-800 hover:${BG_COLOR_02} cursor-pointer relative overflow-hidden transition-all duration-300 group`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ verticalAlign: "baseline" }}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-0 ${BG_COLOR_02} transition-all duration-300 group-hover:w-full`}
                  ></span>
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ),
            )}
          </nav>
        </div>
      )}

      {/* Desktop Logo */}
      <Link href="/" className="hidden lg:flex items-center gap-1.5">
        <div className="h-10 w-10 bg-[#FFD700] rounded-full flex items-center justify-center">
          <span className="font-bold text-black text-xl">S</span>
        </div>
        <span className="text-3xl lg:text-4xl font-bold text-black">SAOR</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-4 lg:space-x-6 items-baseline">
          {navLinks.map((link) => (
            <li key={link.name} className="relative flex items-baseline">
              {link.dropdown ? (
                <>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm lg:text-base font-medium text-gray-800 hover:${BG_COLOR_02} focus:outline-none cursor-pointer relative overflow-hidden transition-all duration-300 group`}
                    onClick={() => handleDropdownToggle(link.name)}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-expanded={openDropdown === link.name}
                    style={{ verticalAlign: "baseline" }}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-0 ${BG_COLOR_02} transition-all duration-300 group-hover:w-full`}
                    ></span>
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown className="h-4 w-4 relative z-10" />
                  </button>
                  {openDropdown === link.name && (
                    <ul
                      className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={`block px-3 py-2 text-sm lg:text-base text-gray-700 hover:${BG_COLOR_02} cursor-pointer relative overflow-hidden transition-all duration-300 group/item`}
                            style={{ verticalAlign: "baseline" }}
                          >
                            <span
                              className={`absolute inset-y-0 left-0 w-0 ${BG_COLOR_02} transition-all duration-300 group-hover/item:w-full`}
                            ></span>
                            <span className="relative z-10">{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-sm lg:text-base font-medium text-gray-800 hover:${BG_COLOR_02} cursor-pointer relative overflow-hidden transition-all duration-300 group`}
                  style={{ verticalAlign: "baseline" }}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-0 ${BG_COLOR_02} transition-all duration-300 group-hover:w-full`}
                  ></span>
                  <span className="relative z-10">{link.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right section: Search and CTA */}
      <div className="flex items-center gap-3 lg:gap-4">
        <button
          className="border border-gray-300 h-10 w-10 rounded-none hidden lg:flex items-center justify-center bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 p-2"
          aria-label="Search"
        >
          <Search className="h-5 w-5 text-gray-700" />
        </button>
        <Link
          href="#"
          className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 font-semibold px-4 py-2 lg:px-6 lg:py-3 flex items-center gap-2 text-sm lg:text-base transition-colors"
        >
          Get A Quote <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}