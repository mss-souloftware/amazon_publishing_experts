"use client";

import { useEffect } from "react";
import Image from "next/image";
import {FaArrowUp} from "react-icons/fa";
import Link from "next/link";

// React Icons
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterest,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {

    useEffect(() => {
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = "https://embed.tawk.to/689f7fd9ed02831924d242f9/1j2ngmqk6";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        document.body.appendChild(s1);

        const openTawkChat = () => {
            // @ts-ignore
            if (typeof Tawk_API !== "undefined" && Tawk_API?.toggle) {
                // @ts-ignore
                Tawk_API.toggle();
            } else {
                setTimeout(openTawkChat, 500);
            }
        };

        const elements = document.querySelectorAll("a, button");
        elements.forEach((el) => {
            const text = el.textContent?.trim().toLowerCase() || "";

            if (
                text.includes("chat with us now") ||
                text.includes("chat now") ||
                text.includes("live chat")
            ) {
                el.addEventListener("click", (e) => {
                    e.preventDefault();
                    openTawkChat();
                });
            }
        });

        return () => {
            elements.forEach((el) => {
                el.replaceWith(el.cloneNode(true));
            });
        };
    }, []);

    return (
        <footer className="bg-black text-white pt-8 md:pt-12 pb-6">
            
            <div className="max-w-7xl mx-auto px-4">
                
                <div className="text-center mb-8 md:mb-12">
                    <Link href="https://amazonpublishingexperts.co.uk/">
                        <Image
                            src="/images/amazon experts square logo_fixed_White.png"
                            alt="Amazon publishing experts"
                            width={120}
                            height={120}
                            className="mx-auto w-24 md:w-auto"
                        />
                    </Link>
                    <p className="text-center pt-4 text-gray-300 text-sm md:text-base max-w-xl mx-auto">
                        Your trusted partner for exceptional ghostwriting,
                        editing, design, publishing, and marketing solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8 md:mt-12 text-gray-300">

                    <div>
                        <h5 className="text-lg font-semibold pb-2">Services</h5>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li><Link href="/book-marketing-services">Book Marketing Services</Link></li>
                            <li><Link href="/audio-book-services">Audiobook Services</Link></li>
                            <li><Link href="/book-publishing-services">Self Publishing</Link></li>
                            <li><Link href="/book-illustration-services">Book Illustration</Link></li>
                            <li><Link href="/book-cover-design">Book Cover Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold pb-2">Quick Links</h5>
                        <ul className="space-y-2 text-sm md:text-base">
                            <li><Link href="/index">Home</Link></li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/testimonial">Testimonials</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold pb-2">Contact</h5>

                        <ul className="space-y-3 text-sm md:text-base">
                            <li>
                                <a href="tel:(760) 546-5229" className="flex items-center gap-2">
                                    <FaPhoneAlt /> (760) 546-5229
                                </a>
                            </li>

                            <li>
                                <a href="mailto:support@amazonpublishingexperts.com" className="flex items-center gap-2">
                                    <FaEnvelope />
                                    support@amazonpublishingexperts.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://maps.app.goo.gl/nHAwqF6PusnqPFVX9"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FaMapMarkerAlt />
                                    Mailing Address: 600 West Broadway, San Diego, CA 92101
                                </a>
                            </li>

                            <li className="flex gap-4 text-xl pt-2 justify-start">
                                <a href="https://www.facebook.com/amazonpublishingexperts/" target="_blank"><FaFacebookF /></a>
                                <a href="https://www.instagram.com/amazonpublishingexperts/" target="_blank"><FaInstagram /></a>
                                <a href="https://x.com/westernpubhouse" target="_blank"><FaTwitter /></a>
                                <a href="https://www.pinterest.com/amazonpublishingexperts/" target="_blank"><FaPinterest /></a>
                                <a href="https://www.youtube.com/@amazonpublishingexperts" target="_blank"><FaYoutube /></a>
                            </li>

                            <li>
                                <Image
                                    src="/images/f-payment.webp"
                                    alt="Payment Methods"
                                    width={160}
                                    height={60}
                                    className="w-auto h-auto max-w-full"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-black mt-8 md:mt-12 py-4 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4 md:gap-0">
                    <p className="text-center md:text-left">
                        © 2025 Amazon publishing experts | All Rights Reserved.
                    </p>

                    <div className="flex gap-4 text-center md:text-right">
                        <Link href="/terms-and-condition">Terms & Conditions</Link>
                        <span>|</span>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
  
        </footer>
    );
}