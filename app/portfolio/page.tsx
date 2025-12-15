// app/portfolio/page.tsx (or wherever your portfolio page is)
"use client";
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaArrowUp } from 'react-icons/fa';

// Import images
import portfolioHero from '@/public/images/Editorial commision-pana.png';
import bm1 from '@/public/images/bm1.webp';
import HeroForm from '@/components/HeroForm';

export default function Portfolio() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Highlighting exceptional literary talent.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, we bring stories to life with outstanding publishing services. Our portfolio showcases a diverse range of books that have become success stories. From captivating novels to insightful non-fiction, engaging children’s books to beautifully crafted coffee table editions, our work reflects a commitment to quality, innovation, and expertise. Explore our collection to see how we help authors share their voices with readers around the world.
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
                            <Image src={portfolioHero} alt="Portfolio of Amazon Publishing Experts" width={600} height={500} className="w-full rounded-xl" />
                        </div>
                    </div>

                   <HeroForm/>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className="py-12 md:py-18 px-4">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Shaping impactful success stories in every genre<span className='text-[#F89A1C]'>.</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, we excel at connecting diverse stories with readers across the globe. Our portfolio spans a wide range of genres, including children’s literature, academic works, memoirs, fiction, and non-fiction. From professional editing to flawless layout, each book reflects our meticulous attention to detail. Whether it’s a groundbreaking business guide or a heartfelt children’s tale, we ensure every story stands out and shines on the shelf.
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
                        <div className="order-2 md:order-1">
                            <Image src={bm1} alt="Success stories in every genre" width={600} height={500} className="rounded-xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reusable Components */}
            <PortfolioShowcase />
            <Testimonials />
            <FAQSection />
            <CTA />

        </>
    );
}