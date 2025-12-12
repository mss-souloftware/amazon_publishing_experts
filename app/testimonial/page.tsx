// app/testimonials/page.tsx (or appropriate path)
"use client";
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaArrowUp } from 'react-icons/fa';

// Import images
import testimonialHero from '@/public/images/Feedback-cuate.png';
import bm1 from '@/public/images/bm1.webp';

export default function Testimonial() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-lg lg:text-5xl font-semibold text-gray-900">What Our Clients Say</h3>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Authentic achievements from authors at Amazon Publishing Experts.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, we are dedicated to turning dreams into reality. But don’t just take our word for it—hear directly from our clients who have experienced the exceptional service and results we provide. Our testimonials page features stories from writers, publishers, and companies who entrusted us with their publishing journeys. Read on to see how we’ve helped our clients achieve their goals and deliver high-quality books to readers worldwide. Their success is our greatest pride.
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
                            <Image src={testimonialHero} alt="Client Testimonials" width={600} height={500} className="w-full rounded-xl" />
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

            {/* Success Stories Section */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                Creating standout success stories across all genres<span className='text-[#F89A1C]'>.</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, we are passionate about connecting diverse stories with readers across the globe. Our portfolio spans a wide range of genres, including children’s literature, academic works, memoirs, fiction, and non-fiction. From professional editing to flawless layout, each book reflects our meticulous attention to detail. Whether it’s a groundbreaking business guide or a heartfelt children’s story, we ensure every narrative stands out and shines on the shelf.
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
                            <Image src={bm1} alt="Success stories across genres" width={600} height={500} className="rounded-xl w-full" />
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
                className="fixed bottom-8 right-8 bg-[#F89A1C] hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110"
                aria-label="Back to top"
            >
                <FaArrowUp size={24} />
            </button>
        </>
    );
}