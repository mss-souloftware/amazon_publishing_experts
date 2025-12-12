// components/Testimonials.tsx
'use client';

import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Owen Welch",
    text: "Cheryl guided me through the audiobook creation process, and I couldn’t be happier. She helped me find the perfect narrator, and the final product exceeded all my expectations.",
  },
  {
    name: "Harvey Perkins",
    text: "The book marketing services were a game-changer! Amazon Publishing Experts helped me launch a campaign that brought my book to thousands of readers.",
  },
  {
    name: "Charlie Owens",
    text: "Frank Shaw was fantastic to work with! His expertise and patience made the whole process stress-free. I couldn’t have done it without him!",
  },
  {
    name: "David Davies",
    text: "Their formatting service transformed my messy manuscript into a polished book I’m proud to share. Thank you for making the process so easy!",
  },
  {
    name: "Raymond N",
    text: "I’ve worked with several publishers, but Amazon Publishing Experts stands out as the best. My book’s sales have been fantastic.",
  },
  {
    name: "Steve Jones",
    text: "Excellent value for the quality of work. The team worked closely with me to stay within budget. Extremely satisfied!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-30 bg-gradient-to-b from-white to-gray-50" id="testmonial">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider">
              Join the Ranks of Satisfied Clients.
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Launching Careers. Nurturing{' '}
              <span className="text-[#F89A1C]">Bestselling Authors.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Amazon Publishing Experts, we value the trust our clients place in us. With our expertise and passion, we’re dedicated to supporting your success as a writer, publisher, or company. Ready to start your publishing journey with us? Contact us today to learn how we can bring your project to life.
            </p>
            <a
              href="tel:+44-161-394-0064"
              className="inline-block bg-[#F89A1C] hover:bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg transition shadow-lg"
            >
              Request Call Back
            </a>
          </div>

          {/* Right: Testimonials */}
          <div className="lg:col-span-7">
            {/* Desktop: Grid */}
            <div className="hidden lg:block max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              <div className="grid grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                  <TestimonialCard key={i} {...t} />
                ))}
              </div>
            </div>

            {/* Mobile: Swiper Carousel */}
            <div className="lg:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                pagination={{ clickable: true }}
                className="testimonials-swiper"
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
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

// Reusable Card Component
function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <FaQuoteLeft className="text-4xl text-orange-500 mb-4 opacity-70" />

      <div className="flex items-center justify-between mb-3">
        <h5 className="font-bold text-gray-900 text-lg">{name}</h5>
        <div className="flex text-[#F89A1C]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed text-sm">{text}</p>
    </div>
  );
}