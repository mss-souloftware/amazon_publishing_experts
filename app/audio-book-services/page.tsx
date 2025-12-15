"use client";
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaMicrophoneAlt, FaCheck, FaArrowUp } from 'react-icons/fa';
import ContactCTA from '@/components/ContactCTA';
import heroImg from '@/public/images/Audiobook-rafiki.png';
import audG1 from '@/public/images/aud-g1.webp';
import dictionary from '@/public/images/Dictionary-rafiki.png';
import HeroForm from '@/components/HeroForm';
import ResearchSteps from '@/components/ResearchSteps';

export default function AudiobookServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                Bring your story to life through our professional audiobook services.
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Audiobooks are revolutionizing the way stories are experienced, offering readers an immersive, hands-free journey. At Amazon Publishing Experts, we specialize in producing captivating audiobooks with professional narration directly from your manuscript.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert audiobook team supports you at every step—whether you want your audiobook available on Audible, ACX, Apple Books, Spotify, or other global platforms. We deliver top-quality audiobook services, ensuring your story reaches listeners worldwide in an engaging and memorable audio format.
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
              <Image src={heroImg} alt="Professional Audiobook Services" width={600} height={500} className="w-full" />
            </div>
          </div>

          <HeroForm/>
        </div>
      </section>

      {/* Why Choose Us for Audiobooks */}
      <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why authors rely on Amazon publishing experts for audiobook publishing?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Amazon Publishing Experts, we pride ourselves on being leading audiobook publishers. Our comprehensive services transform your manuscript into an immersive audio experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From seamless distribution on major platforms like Audible to professional narration and high-quality production, our experienced team manages every step. We offer solutions tailored to your needs—whether you’re releasing your first audiobook or expanding your portfolio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Choose Amazon Publishing Experts to bring your story to life in a way that resonates with audiences everywhere.
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
              <Image src={audG1} alt="Top Audiobook Publishers" width={600} height={500} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Audiobook Solutions */}
      <section className="py-12 md:py-24 px-4">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore a universe of stories with <span className="block text-[#F89A1C]">our comprehensive audiobook solutions!</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            At Amazon Publishing Experts, we provide everything you need to bring your audiobook to life. Our audiobook services include:
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image src={dictionary} alt="Audiobook Production" width={600} height={500} className="w-full" />
            </div>
            <div className="space-y-8 text-left order-1 md:order-2">
              <ul className="space-y-6">
                {[
                  { icon: FaMicrophoneAlt, title: "Professional Narration", desc: "Work with skilled voice artists who perfectly capture the tone and style of your book." },
                  { icon: FaCheck, title: "High-Quality Production", desc: "Enjoy crystal-clear sound quality that engages listeners from beginning to end." },
                  { icon: FaCheck, title: "Wide Distribution", desc: "Easily upload and distribute your audiobook on Audible, ACX, Apple Books, Spotify, and other global platforms." },
                  { icon: FaCheck, title: "Marketing Support", desc: "Receive guidance on script formatting, mastering, and interactive audiobook features for a unique experience." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <item.icon className="text-[#F89A1C] text-2xl mt-1 flex-shrink-0" />
                    <div>
                      <strong className="block text-xl">{item.title}:</strong>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 mt-8">
                Let us turn your story into an auditory masterpiece that captivates listeners around the world.
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

      <ContactCTA />

    <ResearchSteps/>

      <PortfolioShowcase />
      <Testimonials />
      <FAQSection />
      <CTA />

  
    </>
  );
}