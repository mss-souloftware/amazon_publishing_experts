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