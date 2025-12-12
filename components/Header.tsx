"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navOpen]);

  return (
    <>
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        {/* Top Navbar */}
        <section className="border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/amazon experts logo_FIXED.png"
                  alt="Amazon Publishing Experts"
                  width={180}
                  height={60}
                  className="h-12 md:h-14 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center space-x-8">
                {/* Services Dropdown */}
                <div className="group relative">
                  <button className="flex items-center gap-1 font-medium hover:text-[#F89A1C] transition">
                    Services <IoIosArrowDown className="text-sm" />
                  </button>
                  <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-3">
                      {[
                        { href: "/book-marketing-services", icon: "/images/menu-icon1.webp", label: "Book Marketing" },
                        { href: "/book-illustration-services", icon: "/images/menu-icon2.webp", label: "Book Illustration" },
                        { href: "/book-publishing-services", icon: "/images/menu-icon3.webp", label: "Self Publishing" },
                        { href: "/book-cover-design", icon: "/images/menu-icon4.webp", label: "Book Cover Design" },
                        { href: "/audio-book-services", icon: "/images/menu-icon8.webp", label: "Audio Book" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3 hover:bg-[#F89A1C] hover:text-white transition font-medium"
                        >
                          <Image src={item.icon} alt="" width={36} height={36} className="rounded-md" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/about" className="font-medium hover:text-[#F89A1C] transition">About Us</Link>
                <Link href="/portfolio" className="font-medium hover:text-[#F89A1C] transition">Portfolio</Link>
                <Link href="/testimonial" className="font-medium hover:text-[#F89A1C] transition">Testimonial</Link>
                <Link href="/contact" className="font-medium hover:text-[#F89A1C] transition">Contact</Link>

                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg"
                >
                  GET A CONSULT
                </Link>
              </nav>

              {/* Mobile Icons */}
              <div className="md:hidden flex items-center gap-4">
                <Link href="tel:(760)546-5229" className="text-xl text-gray-700">
                  <FaPhoneAlt />
                </Link>
                <button
                  onClick={() => setNavOpen(true)}
                  className="text-2xl text-gray-700"
                  aria-label="Open menu"
                >
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Menu Container – No fixed, only absolute */}
        {navOpen && (
          <div className="absolute inset-0 bg-white z-50"> {/* This full-screen white layer guarantees solidity */}

            {/* Dark backdrop (click to close) */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setNavOpen(false)}
            />

            {/* Sliding Sidebar – absolute + translate */}
            <nav
              className="absolute top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out translate-x-0"
            >
              <div className="p-6 h-full flex flex-col overflow-y-auto">
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setNavOpen(false)}
                    className="text-3xl text-gray-600 hover:text-black transition"
                    aria-label="Close menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Logo */}
                <div className="text-center mb-8">
                  <Image
                    src="/images/amazon experts logo_FIXED.png"
                    alt="Logo"
                    width={160}
                    height={50}
                    className="mx-auto"
                  />
                </div>

                {/* Links */}
                <div className="space-y-5 text-lg font-medium flex-1">
                  <Link href="/" className="block py-2 hover:text-[#F89A1C]" onClick={() => setNavOpen(false)}>
                    Home
                  </Link>

                  {/* Services Accordion */}
                  <details className="group">
                    <summary className="flex items-center justify-between py-3 cursor-pointer font-semibold hover:text-[#F89A1C] list-none">
                      Services
                      <IoIosArrowDown className="transition-transform group-open:rotate-180 text-xl" />
                    </summary>
                    <div className="pl-6 mt-3 space-y-3 border-l-4 border-[#F89A1C]/20">
                      <Link href="/book-marketing-services" className="block py-2 text-gray-700" onClick={() => setNavOpen(false)}>Book Marketing</Link>
                      <Link href="/book-illustration-services" className="block py-2 text-gray-700" onClick={() => setNavOpen(false)}>Book Illustration</Link>
                      <Link href="/book-publishing-services" className="block py-2 text-gray-700" onClick={() => setNavOpen(false)}>Self Publishing</Link>
                      <Link href="/book-cover-design" className="block py-2 text-gray-700" onClick={() => setNavOpen(false)}>Book Cover Design</Link>
                      <Link href="/audio-book-services" className="block py-2 text-gray-700" onClick={() => setNavOpen(false)}>Audio Book</Link>
                    </div>
                  </details>

                  <Link href="/about" className="block py-2 hover:text-[#F89A1C]" onClick={() => setNavOpen(false)}>About Us</Link>
                  <Link href="/portfolio" className="block py-2 hover:text-[#F89A1C]" onClick={() => setNavOpen(false)}>Portfolio</Link>
                  <Link href="/testimonial" className="block py-2 hover:text-[#F89A1C]" onClick={() => setNavOpen(false)}>Testimonial</Link>
                  <Link href="/contact" className="block py-2 hover:text-[#F89A1C]" onClick={() => setNavOpen(false)}>Contact</Link>

                  <Link
                    href="/contact"
                    className="block text-center bg-black text-white py-4 rounded-lg font-bold mt-8 shadow-lg"
                    onClick={() => setNavOpen(false)}
                  >
                    GET A CONSULT
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}