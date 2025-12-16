
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const shelves = [
  {
    direction: 'ltr' as const,
    speed: 2200,
    books: [
      'Book1.png',
      'Book11.png',
      'Book21.png',
      'Book31.png',
      'Book41.png',
      'Book51.png',
      'Book10.png',
      'Book20.png',
      'Book30.png',
      'Book40.png',
      'Book50.png',
    ],
  },
  {
    direction: 'rtl' as const,
    speed: 3800,
    books: [
      'Book5.png',
      'Book15.png',
      'Book25.png',
      'Book35.png',
      'Book45.png',
      'Book55.png',
      'Book8.png',
      'Book18.png',
      'Book28.png',
      'Book38.png',
    ],
  },
  {
    direction: 'ltr' as const,
    speed: 5200,
    books: [
      'Book3.png',
      'Book13.png',
      'Book23.png',
      'Book33.png',
      'Book43.png',
      'Book53.png',
      'Book7.png',
      'Book17.png',
      'Book27.png',
      'Book47.png',
    ],
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="portfolio-showcase py-16 overflow-hidden">
      <div className="container-fluid px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2c3e50] to-[#f89a1c] mb-4">
            Turning Powerful Ideas Into Market-Leading Bestsellers
          </h2>
          <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#2c3e50] to-[#f89a1c] font-medium">
            Discover our diverse collection of published masterpieces across all genres
          </p>
        </div>

        {shelves.map((shelf, shelfIndex) => (
          <div key={shelfIndex} className="book-shelf relative my-8">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: shelf.speed,
                disableOnInteraction: false,
                reverseDirection: shelf.direction === 'rtl',
              }}
              speed={800}
              spaceBetween={40}
              slidesPerView={2}
              breakpoints={{
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
                1200: { slidesPerView: 6 },
              }}
              dir={shelf.direction}
              watchSlidesProgress={true}
              className="book-carousel"
            >
              {shelf.books.map((book, i) => (
                <SwiperSlide key={i} className="item">
                  <div className={`tilt tilt-${(i % 3) + 1}`}>
                    <Image
                      src={`/images/PortfolioBooks/${book}`}
                      alt="Bestseller"
                      width={300}
                      height={450}
                      className="w-full h-auto object-contain"
                      priority={shelfIndex === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .portfolio-showcase .book-shelf {
          padding: 5px 5px;
          backdrop-filter: blur(6px);
          overflow: hidden;
        }

        .book-carousel .item {
          padding: 0 5px;
          transition: transform 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .tilt {
          display: inline-block;
          transition: transform 0.45s cubic-bezier(0.2, 0.9, 0.2, 1),
            box-shadow 0.35s ease;
          will-change: transform;
          transform-origin: 50% 80%;
        }

        .tilt img {
          border-radius: 14px;
          padding: 12px;
          display: block;
          transition: transform 0.45s cubic-bezier(0.2, 0.9, 0.2, 1),
            box-shadow 0.4s ease;
          will-change: transform;
        }

        /* Tilt variations - exact same as original */
        .tilt-1 {
          transform: rotate(-3deg) translateZ(0);
        }
        .tilt-2 {
          transform: rotate(2deg) translateZ(0);
        }
        .tilt-3 {
          transform: rotate(4deg) translateZ(0);
        }

       /* Floating animation on ALL visible items (including partial) */
.swiper-slide-visible .tilt img {
  animation: floatY 6s ease-in-out infinite;
}

/* Optional: Also keep it on duplicates if needed (usually covered already) */
.swiper-slide-duplicate-visible .tilt img {
  animation: floatY 6s ease-in-out infinite;
}

@keyframes floatY {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-16px);
  }
}
        @media (max-width: 768px) {
          .portfolio-showcase h2 {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .book-shelf {
            padding: 10px 10px;
          }
        }
      `}</style>
    </section>
  );
}