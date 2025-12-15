'use client';

import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { name: "Owen Welch", text: "Cheryl guided me through the audiobook creation process, and I couldn’t be happier. She helped me find the perfect narrator, and the final product exceeded all my expectations." },
  { name: "Harvey Perkins", text: "The book marketing services were a game-changer! Amazon Publishing Experts helped me launch a campaign that brought my book to thousands of readers." },
  { name: "Charlie Owens", text: "Frank Shaw was fantastic to work with! His expertise and patience made the whole process stress-free. I couldn’t have done it without him!" },
  { name: "David Davies", text: "Their formatting service transformed my messy manuscript into a polished book I’m proud to share." },
  { name: "Raymond N", text: "I’ve worked with several publishers, but Amazon Publishing Experts stands out as the best." },
  { name: "Steve Jones", text: "Excellent value for the quality of work. Extremely satisfied!" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonial"
      className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full">

          {/* LEFT CONTENT (UNCHANGED DESKTOP) */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <h4 className="text-sm font-semibold uppercase tracking-wider break-words">
              Join the Ranks of Satisfied Clients.
            </h4>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
              Launching Careers. Nurturing{' '}
              <span className="text-[#F89A1C]">Bestselling Authors.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed break-words">
              At Amazon Publishing Experts, we value the trust our clients place in us.
            </p>

            <a
              href="tel:+44-161-394-0064"
              className="inline-block bg-[#F89A1C] hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg transition shadow-lg"
            >
              Request Call Back
            </a>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 w-full">

            {/* DESKTOP GRID — UNTOUCHED */}
            <div className="hidden lg:block max-h-[500px] overflow-y-auto pr-2 custom-scrollbar w-full">
              <div className="grid grid-cols-2 gap-6 w-full">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
            </div>

            {/* MOBILE SWIPER — FIXED */}
            <div className="lg:hidden w-full">
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={16}
                pagination={{ clickable: true }}
                className="w-full"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i} className="pb-6 w-full">
                    <TestimonialCard {...t} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
      <FaQuoteLeft className="text-3xl text-[#F89A1C] mb-4 opacity-70" />

      <div className="flex items-center justify-between mb-3">
        <h5 className="font-bold text-gray-900 break-words">{name}</h5>
        <div className="flex text-[#F89A1C]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed break-words">{text}</p>
    </div>
  );
}