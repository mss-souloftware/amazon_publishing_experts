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

          {/* Hero Form */}
          <div className="mt-12 md:mt-16 bg-white shadow-2xl rounded-2xl p-6 md:p-8 max-w-6xl mx-auto -mb-24 md:-mb-32 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Ready to Publish? Get Up to <span className="text-red-600">40% Off</span>
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input type="text" placeholder="Full Name" required className="input border border-gray-300 rounded-lg px-4 py-3 w-full" />
                <input type="email" placeholder="Email" required className="input border border-gray-300 rounded-lg px-4 py-3 w-full" />
                <input type="tel" placeholder="Phone Number" required className="input border border-gray-300 rounded-lg px-4 py-3 w-full" />
                <input type="text" placeholder="I am looking for..." required className="input border border-gray-300 rounded-lg px-4 py-3 w-full lg:col-span-2" />
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <label className="flex items-start text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" required defaultChecked className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                    <a href="/privacy-policy" className="underline font-semibold">PRIVACY POLICY</a> &
                    <a href="/terms-and-condition" className="underline font-semibold"> TERMS & CONDITIONS</a>)- Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime.
                  </span>
                </label>
                <button type="submit" className="bg-[#F89A1C] hover:bg-yellow-400 text-black font-bold py-3 px-10 rounded-lg whitespace-nowrap">
                  Let's Get Started
                </button>
              </div>
            </form>
          </div>
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

      <section className="py-12 md:py-24 px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Our complete and streamlined approach..
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mb-12">
            Our end-to-end process is designed to guide authors through every stage of book production, ensuring your vision is realized with professionalism and care.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-8 text-left">
              <ul className="space-y-6 text-lg">
                <li className="flex flex-col items-start gap-4">
                  <div className="flex items-center">
                    <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                    <strong className="block text-xl">&nbsp; Research and Planning</strong>
                  </div>
                  <span className="text-black text-sm px-3">It starts with understanding your goals for the project. Our project manager will have an in-depth conversation with you to align our efforts with your publishing objectives and create a clear roadmap for success.</span>
                </li>
                <li className="flex flex-col items-start gap-4">
                  <div className="flex items-center">
                    <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                    <strong className="block text-xl">&nbsp; Creative Collaboration</strong>
                  </div>
                  <span className="text-black text-sm px-3">Collaboration is at the heart of what we do. We foster an environment where your voice and creative vision are respected and shine through in the final product.</span>
                </li>
                <li className="flex flex-col items-start gap-4">
                  <div className="flex items-center">
                    <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                    <strong className="block text-xl">&nbsp; Execution</strong>
                  </div>
                  <span className="text-black text-sm px-3">Guided by your vision and feedback, we apply our expertise to refine your book. From storytelling and precise editing to producing captivating audiobooks, we bring your project to life with skill and professionalism.</span>
                </li>
                <li className="flex flex-col items-start gap-4">
                  <div className="flex items-center">
                    <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                    <strong className="block text-xl">&nbsp; Strategic Promotion</strong>
                  </div>
                  <span className="text-black text-sm px-3">Our support continues beyond publication. We implement targeted marketing strategies to ensure your book reaches the right audience, including online campaigns, engaging blogs, and promotional articles.</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-8">
                Amazon Publishing Experts is a trusted book marketing company that manages every step of the process, allowing you to focus on what you do best—writing!!
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
              <Image src="/images/Thesis-rafiki.png" alt="Book Marketing Strategies" width={600} height={500} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <PortfolioShowcase />
      <Testimonials />
      <FAQSection />
      <CTA />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#F89A1C] hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  );
}