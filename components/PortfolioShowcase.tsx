"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const shelves = [
  {
    speed: 30,
    direction: "ltr",
    books: [
      "Book1.png","Book11.png","Book21.png","Book31.png","Book41.png","Book51.png",
      "Book10.png","Book20.png","Book30.png","Book40.png","Book50.png"
    ]
  },
  {
    speed: 38,
    direction: "rtl",
    books: [
      "Book5.png","Book15.png","Book25.png","Book35.png","Book45.png","Book55.png",
      "Book8.png","Book18.png","Book28.png","Book38.png"
    ]
  },
  {
    speed: 52,
    direction: "ltr",
    books: [
      "Book3.png","Book13.png","Book23.png","Book33.png","Book43.png","Book53.png",
      "Book7.png","Book17.png","Book27.png","Book47.png"
    ]
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="portfolio-showcase py-5 overflow-hidden">
      <div className="container-fluid px-md-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Turning Powerful Ideas Into Market-Leading Bestsellers
          </h2>
          <p className="lead">
            Discover our diverse collection of published masterpieces across all genres
          </p>
        </div>

        {shelves.map((s, i) => (
          <Shelf key={i} {...s} />
        ))}
      </div>

      <style jsx global>{`
        .portfolio-showcase h2 {
          font-size: 3rem;
          background: linear-gradient(90deg, #2c3e50, #f89a1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .lead {
          background: linear-gradient(90deg, #2c3e50, #f89a1c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .book-shelf {
          padding: 5px;
          backdrop-filter: blur(6px);
          overflow: hidden;
        }
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll linear infinite;
        }
        .marquee.reverse {
          animation-direction: reverse;
        }
        .book-item {
          flex: 0 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tilt {
          transform-origin: 50% 80%;
          transition: transform 0.45s cubic-bezier(.2,.9,.2,1);
        }
        .tilt img {
          width: 200px;
          height: auto;
          border-radius: 14px;
          padding: 12px;
          animation: floatY 6s ease-in-out infinite;
        }
        .book-item:nth-child(3n) .tilt { transform: rotate(4deg); }
        .book-item:nth-child(3n+1) .tilt { transform: rotate(-3deg); }
        .book-item:nth-child(3n+2) .tilt { transform: rotate(2deg); }

        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width:768px) {
          .portfolio-showcase h2 { font-size: 2.3rem; }
          .tilt img { width: 120px; }
        }
      `}</style>
    </section>
  );
}

function Shelf({ speed, direction, books }: { speed: number; direction: string; books: string[] }) {
  const ref = useRef(null);

  return (
    <div className="book-shelf position-relative">
      <div
        ref={ref}
        className={`marquee ${direction === "rtl" ? "reverse" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...books, ...books].map((b, i) => (
          <div className="book-item" key={i}>
            <div className="tilt">
              <Image
                src={`/images/PortfolioBooks/${b}`}
                alt="Bestseller"
                width={300}
                height={400}
                className="w-50"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
