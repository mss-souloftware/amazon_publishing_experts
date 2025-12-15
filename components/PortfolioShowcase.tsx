"use client";

import Image from "next/image";
import React from "react";

const rows = [
  {
    speed: "animate-scroll-slow",     // 22s
    // (slow)
    direction: "ltr",
    books: [
      "Book1.png", "Book11.png", "Book21.png", "Book31.png",
      "Book41.png", "Book51.png", "Book10.png", "Book20.png",
      "Book30.png", "Book40.png", "Book50.png",
    ],
  },
  {
    speed: "animate-scroll-medium",   // 38s   
    direction: "rtl",
    books: [
      "Book5.png", "Book15.png", "Book25.png", "Book35.png",
      "Book45.png", "Book55.png", "Book8.png", "Book18.png",
      "Book28.png", "Book38.png",
    ],
  },
  {
    speed: "animate-scroll-fast",      // 52s   
    direction: "ltr",
    books: [
      "Book3.png", "Book13.png", "Book23.png", "Book33.png",
      "Book43.png", "Book53.png", "Book7.png", "Book17.png",
      "Book27.png", "Book47.png",
    ],
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="portfolio-showcase pt-12 pb-5 md:py-16  lg:py-20 bg-white overflow-hidden">
      <div className=" px-4 md:px-8 lg:px-16 md:w-full">

        <div className="text-center mb-10 md:mb-12 lg:mb-16 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#2c3e50] to-[#f89a1c] bg-clip-text text-transparent leading-tight">
            Turning Powerful Ideas Into Market-Leading Bestsellers
          </h2>
          <p className="mt-3 text-base md:text-lg bg-gradient-to-r from-[#2c3e50] to-[#f89a1c] bg-clip-text text-transparent">
            Discover our diverse collection of published masterpieces across all genres
          </p>
        </div>

        {rows.map((row, index) => (
          <div
            key={index}
            className="my-8 md:my-10 lg:my-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent pointer-events-none" />

            <div
              className={`flex gap-4 md:gap-6 lg:gap-8 ${row.speed} ${
                row.direction === "rtl" ? "animate-scroll-rtl" : "animate-scroll-ltr"
              }`}
              style={{ animationDuration: row.speed === "animate-scroll-slow" ? "50s" : row.speed === "animate-scroll-medium" ? "40s" : "30s" }}
            >
              {[...row.books, ...row.books].map((book, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-36 sm:w-44 md:max-w-9xl lg:w-60"
                >
                  <div
                    className={`${
                      i % 3 === 0 ? "rotate-3" :
                      i % 3 === 1 ? "-rotate-2" :
                      "rotate-2"
                    } transition-transform duration-500 hover:scale-110 hover:rotate-0`}
                  >
                    <Image
                      src={`/images/PortfolioBooks/${book}`}
                      alt="Published Book"
                      width={240}
                      height={360}
                      className="w-full h-auto object-contain  rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>

      <style jsx global>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-ltr {
          animation: scroll-ltr linear infinite;
        }
        .animate-scroll-rtl {
          animation: scroll-rtl linear infinite;
        }
      `}</style>
    </section>
  );
}