// app/book-publishing-services/page.tsx
"use client";
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaCheck, FaArrowUp } from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';
import { MdOutlineRadioButtonChecked } from "react-icons/md";

// Import images (place in public/images/)
import heroImg from '@/public/images/SELF PUBLISHING SERVICES.png';
import aud2 from '@/public/images/aud2.webp';
import poetry from '@/public/images/Poetry-amico.png';
import hand1 from '@/public/images/Research paper-bro.png';
import HeroForm from '@/components/HeroForm';
import ResearchSteps from '@/components/ResearchSteps';

export default function BookPublishingServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                Complete publishing solutions designed to bring your vision to life.
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we are dedicated to transforming your story into a lasting legacy. Our publishing services revolve around one guiding principle: <strong>your vision</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From in-depth manuscript evaluation to eye-catching cover design, flawless formatting, and strategic global distribution, we provide a complete suite of services to support every stage of your publishing journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Partner with Amazon Publishing Experts and enjoy a seamless, professional, and empowering publishing experience. Let us help you bring your story to life and connect it with readers worldwide.
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
              <Image src={heroImg} alt="Professional Book Publishing" width={600} height={500} className="w-full" />
            </div>
          </div>

          <HeroForm/>
        </div>
      </section>

      {/* Mastering the Art */}
      <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Mastering the art of publishing to create stories that leave a lasting impact.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we recognize that publishing a book is both an art and a journey. Our team of editors, designers, and marketing specialists works closely with you to transform your manuscript into a compelling literary work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every story has the power to inspire, move, and captivate audiences worldwide. That’s why we tailor our comprehensive publishing solutions to reflect your unique voice, vision, and creative intent at every stage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Let us help bring your story to life—and ensure it leaves a lasting impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="tel:(760) 546-5229" className="btn bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-lg text-center font-semibold">
                  Request Call Back
                </a>
                <a href="/contact" className="btn bg-[#F89A1C] text-black hover:bg-yellow-400 px-8 py-4 rounded-lg text-center font-semibold">
                  Chat with Us Now
                </a>
              </div>
            </div>
            <div>
              <Image src={aud2} alt="Mastering Publishing" width={600} height={500} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Online Publishing Expertise */}
      <section className="py-12 md:py-24 px-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Boost your reach with online publishing expertise from Amazon specialists.
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            In today’s fast-paced digital world, standing out as an author requires more than just a great story—it demands a strong online presence and strategic visibility.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image src={poetry} alt="Online Publishing" width={600} height={500} className="w-full" />
            </div>
            <div className="space-y-8 text-left order-1 md:order-2">
              <p className="text-lg text-gray-700">
                Our digital marketing specialists will collaborate with you to:
              </p>
              <ul className="space-y-5">
                {[
                  "Maximize your book’s visibility across platforms like Amazon, Google Books, Apple Books, and more",
                  "Identify and engage the right audience using data-driven campaigns",
                  "Leverage proven distribution channels to reach readers around the globe",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <FaCheck className="text-[#F89A1C] text-2xl mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 mt-8">
                With Amazon Publishing Experts, you’re not just publishing a book—you’re building your brand and growing your readership worldwide.
              </p>
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

      {/* Quality Assurance */}
      <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Quality Assurance – Delivering Excellence at Every Stage
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we believe that quality is the foundation of every great book. That’s why we’ve established a comprehensive quality assurance process to ensure your manuscript not only meets but exceeds industry standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From first-time authors to seasoned writers, our skilled editors and proofreaders carefully review each manuscript, correcting grammar, punctuation, and formatting while enhancing readability and overall impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trust us to transform your vision into a high-quality publication that stands out in today’s competitive market.
              </p>
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
              <Image src={hand1} alt="Quality Publishing" width={600} height={500} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

     <ResearchSteps/>
      <PortfolioShowcase />
      <Testimonials />
      <FAQSection />
      <CTA />

   
    </>
  );
}