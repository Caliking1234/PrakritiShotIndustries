"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); 

  return (
    <div className="w-full flex flex-row items-center justify-between px-4 h-[80px] bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-x-3">
        <Image
          src={"/images/PSILogo.png"}
          alt="logo"
          className="h-[60px] w-auto"
          width={80}
          height={60}
        />
        <p className="hidden sm:block text-base sm:text-xl text-[#576983] uppercase font-bold">
          Prakriti Shot Industries
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-6 text-sm md:text-base font-medium text-gray-700">
        <Link href="#who-we-are" className="hover:text-[#576983] transition">
          Home
        </Link>
        <Link href="#why-choose-us" className="hover:text-[#576983] transition">
          Why Choose Us
        </Link>
        <Link href="#products" className="hover:text-[#576983] transition">
          Products
        </Link>
        <Link href="#difference" className="hover:text-[#576983] transition">
          Difference
        </Link>
        <Link href="#contact" className="hover:text-[#576983] transition">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={handleToggle} className="focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 text-gray-700 text-base animate-slideDown">
          <Link
            href="#who-we-are"
            onClick={handleLinkClick}
            className="hover:text-[#576983] transition"
          >
            Home
          </Link>
          <Link
            href="#why-choose-us"
            onClick={handleLinkClick}
            className="hover:text-[#576983] transition"
          >
            Why Choose Us
          </Link>
          <Link
            href="#products"
            onClick={handleLinkClick}
            className="hover:text-[#576983] transition"
          >
            Products
          </Link>
          <Link
            href="#difference"
            onClick={handleLinkClick}
            className="hover:text-[#576983] transition"
          >
            Difference
          </Link>
          <Link
            href="#contact"
            onClick={handleLinkClick}
            className="hover:text-[#576983] transition"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
