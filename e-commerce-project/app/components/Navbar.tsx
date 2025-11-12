"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Banner */}
      <div className="bg-black text-white text-center font-medium py-2 sm:flex sm:items-center sm:justify-center gap-2">
        <p className="text-sm w-[250px] m-auto sm:w-fit">
          New season coming! Discount 10% for all products! Checkout Now!
           <span className="bg-gray-800 text-white px-2 mx-2 rounded-2xl text-xs">
          20:40
          </span>
        </p>
    
      </div>

      {/* Main Navbar */}
      <div className="container m-auto">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 border-[#A3A3A3] border-b border-dashed">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={172}
              height={32}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-gray-700">
            <button
              aria-label="Search"
              className="hover:text-black transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>

            <div
              className="flex items-center gap-1 cursor-pointer text-darkprimary hover:text-black transition-colors"
              role="button"
              aria-label="Categories"
            >
              <span>Categories</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            <Link
              href="/signin"
              className="flex items-center gap-1 text-darkprimary hover:text-black transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign in</span>
            </Link>

            <button
              aria-label="Wishlist"
              className="hover:text-black text-darkprimary transition-colors"
            >
              <Heart className="w-4 h-4" />
            </button>

            <div
              className="relative cursor-pointer text-darkprimary hover:text-black transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-black rounded-full" />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <button
              aria-label="Search"
              className="hover:text-black transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              aria-label="Wishlist"
              className="hover:text-black transition-colors"
            >
              <Heart className="w-5 h-5" />
            </button>

            <div
              className="relative cursor-pointer hover:text-black transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-black rounded-full" />
            </div>

            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:text-black transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-b border-dashed border-gray-300 bg-white px-6 py-3 space-y-4">
            <Link
              href="/categories"
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/signin"
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
