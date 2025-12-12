"use client";
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ContactCTA from '@/components/ContactCTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaArrowUp } from 'react-icons/fa';

// Import images
import heroImg from '@/public/images/Reading book-pana.png';
import editingImg from '@/public/images/editing.webp';
import emp1 from '@/public/images/emp1.webp';
import emp2 from '@/public/images/emp2.webp';

export default function AboutUs() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F89A1C] to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900">
                Explore the specialists behind successful Amazon publishing.
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to Amazon Publishing Experts, where your literary ambitions become reality. We are dedicated to providing comprehensive publishing solutions that support and elevate writers at every stage of their career. From writing and design to marketing and distribution, our team of specialists is here to help you achieve your publishing goals.
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
              <Image src={heroImg} alt="Amazon Publishing Experts" width={600} height={500} className="w-full rounded-xl" />
            </div>
          </div>

          {/* Hero Form */}
          <div className="mt-16 bg-white shadow-[0px_0px_30px_rgba(248,154,28,0.3)] rounded-2xl p-6 sm:p-8 max-w-6xl mx-auto -mb-32 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Ready to Publish? Get Up to <span className="text-red-600">40% Off</span>
            </h3>
            <form className="space-y-4">
              {/* Mobile: Stack vertically | Tablet & up: 2 columns | Desktop: 4 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input type="text" placeholder="Full Name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F89A1C]" />
                <input type="email" placeholder="Email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F89A1C]" />
                <input type="tel" placeholder="Phone Number" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F89A1C]" />
                <input type="text" placeholder="I am looking for..." required className="w-full sm:col-span-2 lg:col-span-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F89A1C]" />
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm text-gray-600">
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" required defaultChecked className="mr-3 mt-1 shrink-0" />
                  <span className="leading-tight">
                    Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                    <a href="/privacy-policy" className="underline font-semibold">PRIVACY POLICY</a> & 
                    <a href="/terms-and-condition" className="underline font-semibold"> TERMS & CONDITIONS</a>) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime.
                  </span>
                </label>
                <button type="submit" className="bg-[#F89A1C] hover:bg-yellow-400 text-black font-bold py-3 px-10 rounded-lg transition whitespace-nowrap">
                  Let's Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <Image src={editingImg} alt="Our Mission" width={600} height={500} className="rounded-xl shadow-xl mx-auto w-full max-w-lg" />
            </div>
            <div className="space-y-6 shadow-lg py-8 px-6 sm:px-12 lg:px-20 rounded-xl bg-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Mission: Elevating authors through exceptional support.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to equip writers with exceptional services and unwavering support. We believe every author deserves to shine, which is why we provide high-quality publishing solutions tailored to your unique needs. Our goal is to guide you through every stage of the publishing journey—from concept to final print—so your book can achieve its full potential.
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
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 shadow-lg py-8 px-6 sm:px-12 lg:px-20 rounded-xl bg-white order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our Expertise: Built on years of proven literary mastery<span className='text-[#F89A1C]'>.</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Amazon Publishing Experts has a long-standing reputation in the publishing industry for quality and reliability. Our team is made up of seasoned professionals specializing in writing, editing, design, and marketing. We bring extensive experience and deep knowledge of the literary market to every project.
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
            <div className="order-1 md:order-2 flex justify-center">
              <Image src={emp1} alt="Our Expertise" width={500} height={400} className="rounded-xl shadow-xl w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image src={emp2} alt="Our Values" width={600} height={500} className="rounded-xl shadow-xl w-full" />
            </div>
            <div className="space-y-6">
              <h6 className="text-sm font-semibold text-orange-600 uppercase tracking-wider">Our Values</h6>
              <h2 className="text-4xl md:text-5xl font-bold">
                Dedicated to honesty, creativity, and forward-thinking solutions<span className='text-[#F89A1C]'>.</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Amazon Publishing Experts is guided by three core values: integrity, innovation, and quality. We are committed to upholding the highest standards in every aspect of our work, ensuring each project is managed with professionalism and care.
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
          </div>
        </div>
      </section>

      {/* Reusable Components */}
      <PortfolioShowcase />
      <Testimonials />
      <FAQSection />
      <CTA />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#F89A1C] text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition z-50"
        aria-label="Back to top"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  );
}