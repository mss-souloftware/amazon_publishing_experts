// app/contact-us/page.tsx
"use client";
import Image from 'next/image';
import CTA from '@/components/CTA';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

// Import images
import contactHero from '@/public/images/Contact us-rafiki.png';
import emp1 from '@/public/images/emp1.webp';
import emp2 from '@/public/images/emp2.webp';

export default function ContactUs() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#F89A1C] to-white px-4 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                                Let us help turn your publishing dreams into reality.
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At Amazon Publishing Experts, we’re here to support you at every step of your publishing journey. Whether you need professional guidance, have questions about our services, or are ready to start your publishing career, we’re just a message away. Reach out to us today, and let’s create something truly extraordinary together!
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
                            <Image src={contactHero} alt="Contact Amazon Publishing Experts" width={600} height={500} className="w-full rounded-xl" />
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

            {/* Contact Info Section */}
            <section className="py-12 md:py-24 px-4 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <Image src={emp1} alt="Contact us" width={500} height={400} className="rounded-xl shadow-xl w-full" />
                        </div>
                        <div className="space-y-6 shadow-lg py-8 px-6 md:py-6 md:px-20 rounded-xl bg-white order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Connect with us whenever and wherever you need<span className='text-[#F89A1C]'>.</span>
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                For all your publishing needs, our dedicated team is here to assist you. We ensure a seamless experience from book creation and editing to marketing and distribution. No matter your experience level as a writer, your questions are always welcome.
                            </p>
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center gap-4">
                                    <FaPhone className="text-[#F89A1C] text-2xl" />
                                    <a href="tel:(760) 546-5229" className="hover:text-[#F89A1C] transition">(760) 546-5229</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <FaEnvelope className="text-[#F89A1C] text-2xl" />
                                    <a href="mailto:support@amazonpublishingexperts.com" className="hover:text-[#F89A1C] transition">
                                        support@amazonpublishingexperts.com
                                    </a>
                                </li>
                            </ul>
                            <p className="text-gray-600">
                                or use our online contact form, and expect a prompt and helpful response.
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

            {/* Feedback Section */}
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                We value and appreciate your feedback<span className='text-[#F89A1C]'>.</span>
                            </h2>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                We value your feedback! Share your thoughts, suggestions, or experiences with us so we can continue to improve our services. At Amazon Publishing Experts, we are committed to collaboration and continuous growth, ensuring every author’s journey is smooth and rewarding.
                                <br className="hidden md:block" /><br className="hidden md:block" />
                                Together, let’s turn your publishing dreams into reality!
                            </p>
                        </div>
                        <div>
                            <Image src={emp2} alt="Your feedback matters" width={600} height={500} className="rounded-xl shadow-xl w-full" />
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