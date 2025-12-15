"use client";
import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaArrowUp } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineRadioButtonChecked } from "react-icons/md";

import heroImg from '@/public/images/Marketing-pana.png';
import aud2 from '@/public/images/aud2.webp';
import poetry from '@/public/images/Poetry-bro.png';
import ContactCTA from '@/components/ContactCTA';
import HeroForm from '@/components/HeroForm';
import ResearchSteps from '@/components/ResearchSteps';

export default function BookMarketingServices() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                Amazon publishing specialists: Your reliable partner in book marketing.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Choosing Amazon Publishing Experts means partnering with a team committed to your success. With years of experience in the publishing industry, we know how to position your book effectively.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our team ensures your book marketing efforts succeed by combining innovative strategies with proven techniques. Whether through digital marketing campaigns or specialized promotional efforts, we make sure your book connects with the right audience.
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
                            <Image src={heroImg} alt="Book Marketing Services" width={600} height={500} className="w-full" />
                        </div>
                    </div>

                   <HeroForm/>
                </div>
            </section>

            {/* Why Choose Our Marketing */}
            <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Elevate your book’s performance with professional marketing services.
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed">
                                Amazon Publishing Experts offers tailored book marketing services designed to give your work the visibility it deserves. As a leading book marketing company, we employ a wide range of strategies—including social media campaigns, online promotions, and affiliate marketing—to help your book stand out in a crowded market.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                                Whether you’re launching a new title or reviving an existing one, our team creates customized marketing plans aligned with your goals. By leveraging affiliate networks and maximizing exposure on top platforms, we ensure your book reaches the right audience and generates measurable results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:(760) 546-5229" className="btn bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-lg text-center font-semibold">
                                    Request Call Back
                                </a>
                                <a href="/contact" className="btn bg-[#F89A1C] text-black hover:bg-yellow-400 px-8 py-4 rounded-lg text-center font-semibold">
                                    Chat with Us Now
                                </a>
                            </div>
                        </div>
                        <div>
                            <Image src={aud2} alt="Professional Book Marketing" width={600} height={500} className="rounded-xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing Services List */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Complete book marketing solutions designed to enhance your visibility.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                        Our book marketing company provides a range of services that are customized to fit your particular requirements. These include:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <Image src={poetry} alt="Book Marketing Strategies" width={600} height={500} className="w-full" />
                        </div>
                        <div className="space-y-8 text-left order-1 md:order-2">
                            <ul className="space-y-6 text-lg">
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-5xl"><IoMdCheckmarkCircleOutline /></span>
                                    <div>
                                        <strong className="block text-xl">Affiliate Marketing Book</strong>
                                        <span className="text-gray-600">Leverage book affiliate marketing programs and strategic partnerships to boost your book’s visibility.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-5xl"><IoMdCheckmarkCircleOutline /></span>
                                    <div>
                                        <strong className="block text-xl">E-Book Marketing</strong>
                                        <span className="text-gray-600">Implement creative e-book marketing campaigns that target the right platforms and audiences to maximize digital sales.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-5xl"><IoMdCheckmarkCircleOutline /></span>
                                    <div>
                                        <strong className="block text-xl">Online Marketing Book</strong>
                                        <span className="text-gray-600">Utilize email marketing, social media ads, and SEO strategies to reach readers where they are most active and engaged.</span>
                                    </div>
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