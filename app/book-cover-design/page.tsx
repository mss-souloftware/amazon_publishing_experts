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
import heroImg from '@/public/images/Website Creator-bro.png';
import aud2 from '@/public/images/aud2.webp';
import readingGlasses from '@/public/images/Reading glasses-rafiki.png';
import HeroForm from '@/components/HeroForm';
import ResearchSteps from '@/components/ResearchSteps';

export default function BookPrintingServices() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                                Turn your words into reality with top-quality book printing services.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, our book printing services turn your manuscript into a tangible work of art. Whether you need custom printing for unique projects or dependable printing for self-published books, we provide high-quality solutions tailored to your needs.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our streamlined process combines advanced technology with expert craftsmanship, guaranteeing that every detail—from cover to binding—meets the highest standards. Trust Amazon Publishing Experts to bring your book to life.
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
                            <Image src={heroImg} alt="Book Printing Services" width={600} height={500} className="w-full" />
                        </div>
                    </div>

                  <HeroForm/>
                </div>
            </section>

            {/* Custom Printing Benefits */}
            <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Turn your words into reality with top-quality book printing services.
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our custom book printing services ensure your work stands out, honoring each author’s unique vision. Whether you’re an experienced professional or a self-published author, we offer:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Professional Customization – From paper type to cover finishes, create a book that reflects your individual style.",
                                    "Flexible Printing Options – Choose from softcover, hardcover, or specialty formats suitable for any genre or purpose.",
                                    "Scalable Services – Print a single copy or scale up for mass distribution.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <FaCheck className="text-[#F89A1C] text-xl mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700"><strong>{item.split(' – ')[0]}</strong> {item.split(' – ')[1]}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-700 leading-relaxed mt-6">
                                As one of the leading book printing services, we prioritize originality and quality to ensure your book leaves a lasting impression.
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
                            <Image src={aud2} alt="Custom Book Printing" width={600} height={500} className="w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Trust Us */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why authors trust Amazon publishing experts for exceptional book printing.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                        With Amazon Publishing Experts, you can achieve extraordinary results instead of settling for the ordinary. Our online book printing services combine precision, reliability, and affordability to bring your vision to life.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <Image src={readingGlasses} alt="Trusted Book Printing" width={600} height={500} className="w-full" />
                        </div>
                        <div className="space-y-8 text-left order-1 md:order-2">
                            <ul className="space-y-6">
                                {[
                                    "High-Quality Results – Our modern book printing technology ensures crisp text and vibrant, eye-catching images.",
                                    "Eco-Friendly Practices – We use sustainable materials and practices to minimize environmental impact.",
                                    "Personalized Support – Our team of experts ensures every detail meets your expectations.",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <FaCheck className="text-[#F89A1C] text-2xl mt-1 flex-shrink-0" />
                                        <div>
                                            <strong className="block text-xl">{item.split(' – ')[0]}</strong>
                                            <span className="text-gray-600">{item.split(' – ')[1]}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-gray-700 mt-8">
                                Whether it’s large-scale production or custom photo book printing, we provide tailored solutions to suit your needs. Experience exceptional quality and service that transforms your manuscript into a true masterpiece.
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