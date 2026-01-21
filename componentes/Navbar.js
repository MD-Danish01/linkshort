"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-4 md:px-8 shadow-md fixed top-0 z-50">
      <Link href={"/"} className="text-xl md:text-2xl font-bold">
        URL Shortner
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center justify-center gap-6">
          <Link href={"/"} className="hover:text-gray-400">
            Home
          </Link>
          <Link href={"/shorten"} className="hover:text-gray-400">
            Shorten
          </Link>
          <Link href={"/about"} className="hover:text-gray-400">
            About
          </Link>
          <Link href={"/contact"} className="hover:text-gray-400">
            Contact
          </Link>
        </ul>
        <div className="flex gap-4">
          <button className="rounded-2xl px-4 py-1 bg-sky-500 hover:bg-sky-600">
            <Link href={"/shorten"}>Try now</Link>
          </button>
          <button className="rounded-2xl px-4 py-1 bg-sky-500 hover:bg-sky-600">
            <Link href={"/github"}>Github</Link>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg">
          <ul className="flex flex-col items-center py-4">
            <Link
              href={"/"}
              className="py-3 w-full text-center hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"/shorten"}
              className="py-3 w-full text-center hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Shorten
            </Link>
            <Link
              href={"/about"}
              className="py-3 w-full text-center hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="py-3 w-full text-center hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </ul>
          <div className="flex flex-col gap-3 px-4 pb-4">
            <button className="rounded-2xl px-4 py-2 bg-sky-500 hover:bg-sky-600">
              <Link href={"/shorten"} onClick={() => setIsMenuOpen(false)}>
                Try now
              </Link>
            </button>
            <button className="rounded-2xl px-4 py-2 bg-sky-500 hover:bg-sky-600">
              <Link href={"/github"} onClick={() => setIsMenuOpen(false)}>
                Github
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
