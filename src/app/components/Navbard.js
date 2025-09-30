"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed   top-0 left-0 right-0 bg-black bg-opacity-95 p-4 flex justify-between items-center z-[1111] backdrop-blur-md">
      <Link href="/">
        <div className="logo">
          <Image
            src="/logo/studiotech-belgium-logo.png"
            alt="Studiotech logo"
            className="w-60 h-[60px] transition-transform duration-300 hover:scale-105"
            width={167}
            height={56}
          />
        </div>
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link href="/solutions" className="text-white hover:text-yellow-400">
          Solutions
        </Link>
        <Link href="/services" className="text-white hover:text-yellow-400">
          Services
        </Link>
        <Link href="/news" className="text-white hover:text-yellow-400">
          News
        </Link>
        <Link href="/partners" className="text-white hover:text-yellow-400">
          Partners
        </Link>
        <Link
          href="/about-studiotech"
          className="text-white hover:text-yellow-400"
        >
          About
        </Link>

        <Link href="/contact" className="nav-contact-btn">
          Get in Touch
        </Link>
      </div>
      {/* زر القائمة الجانبية عند الشاشات الصغيرة */}
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* القائمة الجانبية للشاشات الصغيرة */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-black bg-opacity-95 w-full flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="/solutions"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link href="/news" className="text-white hover:text-yellow-400">
            News
          </Link>
          <Link href="/partners" className="text-white hover:text-yellow-400">
            Partners
          </Link>
          <Link
            href="/about-studiotech"
            className="text-white hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="nav-contact-btn"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
