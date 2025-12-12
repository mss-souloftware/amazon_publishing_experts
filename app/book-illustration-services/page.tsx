"use client";
import React from 'react';
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaArrowUp } from 'react-icons/fa';
import { MdOutlineRadioButtonChecked } from "react-icons/md";

import heroImg from '@/public/images/Wall post-amico.png';
import aud2 from '@/public/images/aud2.webp';
import ContactCTA from '@/components/ContactCTA';

export default function BookMarketingServices() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                               Bring your stories to life with captivating book illustrations.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                               At Amazon Publishing Experts, we offer professional book illustration services to bring your story to life. Our talented team of artists creates striking visuals that captivate readers of all ages—whether it’s a children’s book illustration, a bold cover design, or a vibrant picture book. Let us help elevate your book with engaging and inspiring artwork that leaves a lasting impression.
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
                            <Image src={heroImg} alt="Book Illustration Services" width={600} height={500} className="w-full" />
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

            {/* Why Choose Our Illustration Services */}
            <section className="py-12 md:py-24 lg:py-32 px-4 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold">
                               Custom illustration services tailored for every genre.
                            </h2>
                            <p className="text-md text-gray-700 leading-relaxed">
                               At Amazon Publishing Experts, we offer personalized illustration services tailored to every genre and style. Our team of artists is committed to creating artwork that perfectly complements your story—whether you need sophisticated illustrations for an adult book or vibrant, playful visuals for a children’s picture book. We take the time to fully understand your manuscript, including its tone, content, and target audience, to ensure our illustrations align seamlessly.
                            </p>
                            <p className="text-md text-gray-700 leading-relaxed">
                               From intricate, narrative-driven artwork for adult novels to whimsical and engaging images for young readers, our designs enhance your storytelling and captivate audiences. With our customized approach, each illustration is unique and true to your vision, creating a harmonious blend of text and imagery that leaves a lasting impression.
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
                            <Image src={aud2} alt="Custom Book Illustrations" width={600} height={500} className="rounded-xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Illustration Services List */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                       Professional illustrators skilled in all kinds of books.
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                        At Amazon publishing experts, our team of professionals has extensive expertise in designing excellent illustration books for a wide range of genres, such as:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <Image src="/images/Poetry-pana.png" alt="Book Illustration Genres" width={600} height={500} className="w-full" />
                        </div>
                        <div className="space-y-8 text-left order-1 md:order-2">
                            <ul className="space-y-6 text-lg">
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-2xl"><MdOutlineRadioButtonChecked /></span>
                                    <div>
                                        <strong className="block text-xl">Children’s Book Illustration</strong>
                                        <span className="text-gray-600">We specialize in creating vibrant, engaging artwork that captures young readers’ attention and ignites their imagination.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-2xl"><MdOutlineRadioButtonChecked /></span>
                                    <div>
                                        <strong className="block text-xl">Story Book Illustration</strong>
                                        <span className="text-gray-600">Our illustrations enhance the emotional depth and overall impact of your story, perfectly complementing the narrative</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-2xl"><MdOutlineRadioButtonChecked /></span>
                                    <div>
                                        <strong className="block text-xl">Picture Book Illustration</strong>
                                        <span className="text-gray-600">Our artists craft exquisitely detailed visuals that bring your story to life, making them ideal for picture books.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-[#F89A1C] text-2xl"><MdOutlineRadioButtonChecked /></span>
                                    <div>
                                        <strong className="block text-xl">Book Cover Illustration</strong>
                                        <span className="text-gray-600">We design striking cover art that reflects the essence of your story and draws readers in.</span>
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
                                    <div className='flex items-center'>
                                        <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                                        <strong className="block text-xl">&nbsp; Research and Planning</strong>
                                    </div>
                                    <span className="text-black text-sm px-3">It starts with understanding your goals for the project. Our project manager will have an in-depth conversation with you to align our efforts with your publishing objectives and create a clear roadmap for success.</span>
                                </li>
                                <li className="flex flex-col items-start gap-4">
                                    <div className='flex items-center'>
                                        <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                                        <strong className="block text-xl">&nbsp; Creative Collaboration</strong>
                                    </div>
                                    <span className="text-black text-sm px-3">Collaboration is at the heart of what we do. We foster an environment where your voice and creative vision are respected and shine through in the final product.</span>
                                </li>
                                <li className="flex flex-col items-start gap-4">
                                    <div className='flex items-center'>
                                        <span className="text-[#F89A1C] text-3xl"><MdOutlineRadioButtonChecked /></span>
                                        <strong className="block text-xl">&nbsp; Execution</strong>
                                    </div>
                                    <span className="text-black text-sm px-3">Guided by your vision and feedback, we apply our expertise to refine your book. From storytelling and precise editing to producing captivating audiobooks, we bring your project to life with skill and professionalism.</span>
                                </li>
                                <li className="flex flex-col items-start gap-4">
                                    <div className='flex items-center'>
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
                            <Image src="/images/Thesis-rafiki.png" alt="Our Process" width={600} height={500} className="w-full" />
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