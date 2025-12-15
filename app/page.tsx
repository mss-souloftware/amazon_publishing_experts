"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import CTA from '@/components/CTA';
import ContactCTA from '@/components/ContactCTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { IoCheckmarkDoneOutline } from "react-icons/io5";


import bannerImg from '@/public/images/Audiobook-bro.png';
import book5 from '@/public/images/Book5.png';
import portfolioBook from '@/public/images/PortfolioBooks/Book-d6.png';
import trustpilot from '@/public/images/trust.webp';
import award from '@/public/images/award.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import HeroForm from '@/components/HeroForm';

export default function HomePage() {
  const statsImages = [
    '/images/table1.jpeg',
    '/images/table2.jpeg',
    '/images/table4.png',
    '/images/table5.jpeg',
  ];

  useEffect(() => {
    const goTopBtn = document.getElementById('goto-top');
    const handleScroll = () => {
      if (window.scrollY > 300) {
        goTopBtn?.classList.remove('hidden');
      } else {
        goTopBtn?.classList.add('hidden');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-bold text-gray-900">
                <span className="block text-2xl md:text-3xl font-semibold">Welcome to a Smooth and Successful Publishing Experience!</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">Elevate your publishing journey with expert guidance from Amazon specialists.</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we’re your partners in bringing your publishing vision to life, supporting you at every stage—whether you’re a first-time writer or an experienced author.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(760) 546-5229" className="btn bg-gray-800 text-white hover:bg-gray-900 px-8 py-4 rounded-lg text-center font-semibold">
                  Request Call Back
                </a>
                <a href="/contact" className="btn bg-[#F89A1C] text-black hover:bg-yellow-400 px-8 py-4 rounded-lg text-center font-semibold">
                  Chat with Us Now
                </a>
              </div>
            </div>

            <div>
              <Image src={bannerImg} alt="Amazon publishing experts" width={600} height={500} className="w-full" priority />
            </div>
          </div>

          <HeroForm/>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 mt-15 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-sm font-semibold text-[#F89A1C] uppercase tracking-wider">What We Offer</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            <span className="text-[#F89A1C]">Expert support</span> to take your Book global.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {[
              { icon: "task", title: "Tailored Publishing Plans", desc: "Customized strategies to fit your needs." },
              { icon: "user", title: "Author-First Approach", desc: "We prioritize your vision and goals." },
              { icon: "royalty", title: "Royalty Management", desc: "Transparent and efficient earnings tracking." },
              { icon: "refund", title: "Risk-Free Commitment", desc: "Money-back guarantee if you're not satisfied." },
              { icon: "review", title: "Satisfaction Guaranteed", desc: "Your success is our priority." },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-white shadow-lg p-6 rounded-xl text-center min-h-70 md:min-h-65 flex flex-col items-center justify-center">
                  <img src={`/images/${item.icon}.png`} alt={item.title} className="w-16 h-16 md:w-20 md:h-20 mx-auto" />
                  <h5 className="text-lg md:text-xl font-bold mt-4">{item.title}</h5>
                  <p className="text-sm md:text-base text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="https://www.trustpilot.com/review/amazonpublishingexperts.com" target="_blank" rel="noopener noreferrer">
              <Image src={trustpilot} alt="Trustpilot Reviews" width={400} height={250} className="mx-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 bg-black">
        <Image src={award} alt="Awards & Recognition" width={1000} height={200} className="w-full max-w-5xl mx-auto" />
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image src={book5} alt="Why choose us" width={600} height={600} className="w-full" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h4 className="text-sm font-semibold text-[#F89A1C] uppercase tracking-wider">Why Choose Us</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Take your First step toward achieving <span className="text-[#F89A1C]">Self-publishing Success.</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we understand that self-publishing can be overwhelming. That’s why we provide a range of personalized services designed to bring your ideas to life effortlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[{name: "Expert Guidance", p:"Gain insights and direction from seasoned writers and professional editors."}, {name: "Personalized Support", p:"Benefit from customized assistance designed to accelerate your progress as an author or editor."}, {name: "Thriving Community",p:"Engage with inspiring individuals from the literary world who can help you grow and stay motivated."}, {name: "Unlock your Potential",p:"Access the tools, resources, and opportunities you need to showcase and elevate your literary talent."}].map((t, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                    <p className="text-gray-600 mt-2">{t.p} </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="tel:(760) 546-5229" className="btn bg-gray-800 text-white hover:bg-gray-900 px-8 py-4 rounded-lg text-center font-semibold">
                  Request Call Back
                </a>
                <a href="/contact" className="btn bg-[#F89A1C] text-black hover:bg-yellow-400 px-8 py-4 rounded-lg text-center font-semibold">
                  Chat with Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 bg-[#1C1C1C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-sm font-semibold uppercase tracking-wider">Services We Offer</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Transforming your ideas into standout bestsellers.</h2>
          <p className="mt-6 max-w-4xl mx-auto text-gray-300">
            Explore our wide range of services that cater to the diverse needs of authors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: "Formatting", img: "/images/Editorial commision-bro.png" },
              { title: "Editing", img: "/images/Blog post-bro.png" },
              { title: "Ghostwriting", img: "/images/BOOK ILLUSTRATION SERVICES.png" },
              { title: "Cover Design", img: "/images/Designer-pana.png" },
              { title: "Illustration", img: "/images/BOOK ILLUSTRATION SERVICES.png" },
              { title: "Marketing", img: "/images/Marketing-bro.png" },
            ].map((service, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
                <Image src={service.img} alt={service.title} width={300} height={200} className="mx-auto rounded-lg" />
                <h3 className="text-2xl font-bold mt-6">{service.title}.</h3>
                <p className="mt-3 opacity-90">Professional {service.title.toLowerCase()} services tailored to your manuscript.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiobook Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-[#F89A1C] uppercase tracking-wider">Professional Narration & High-Quality Audio</h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Expand your audience with an engaging, high-quality <span className="text-[#F89A1C]">Audiobook.</span>
              </h2>
              <p className="text-lg text-gray-700 mt-4">
                In today’s fast-paced digital world, many readers choose listening over reading, and we’re here to help you reach them.
              </p>
              <ul className="space-y-3 text-gray-700 mt-6">
                <li className="flex items-start gap-3"><span className="text-[#F89A1C] text-xl"><IoCheckmarkDoneOutline /></span> Skilled professional narrators</li>
                <li className="flex items-start gap-3"><span className="text-[#F89A1C] text-xl"><IoCheckmarkDoneOutline /></span> Advanced technology ensures exceptional audio quality</li>
                <li className="flex items-start gap-3"><span className="text-[#F89A1C] text-xl"><IoCheckmarkDoneOutline /></span> Tailored sound effects</li>
                <li className="flex items-start gap-3"><span className="text-[#F89A1C] text-xl"><IoCheckmarkDoneOutline /></span> Wide distribution platforms</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="tel:(760) 546-5229" className="btn bg-gray-800 text-white hover:bg-gray-900 px-8 py-4 rounded-lg text-center font-semibold">
                  Request Call Back
                </a>
                <a href="/contact" className="btn bg-[#F89A1C] text-black hover:bg-yellow-400 px-8 py-4 rounded-lg text-center font-semibold">
                  Chat with Us Now
                </a>
              </div>
            </div>
            <div>
              <Image src={portfolioBook} alt="Audiobook" width={600} height={600} className="w-full rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Carousel */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-sm font-semibold text-[#F89A1C] uppercase tracking-wider">
            Start Your Publishing Journey Today.
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Your story matters—let’s help you <span className="text-[#F89A1C] block">Share It with the World.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Start your publishing journey with Amazon Publishing Experts and witness your aspirations come to fruition.
          </p>

          <div className="mt-12 max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true, type: "progressbar" }}
              className="pb-12 testimonials-swiper"
            >
              {statsImages.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <Image
                      src={src}
                      alt={`Success stat ${i + 1}`}
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <ContactCTA />
      <PortfolioShowcase />
      <Testimonials />
      <FAQSection />
      <CTA />

     
    </>
  );
}