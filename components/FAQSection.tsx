"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Q.1: Is my content kept confidential?",
    answer:
      "Yes, confidentiality is our top priority. Your ideas, documents, and all communications with our team are handled with the utmost care. We also sign non-disclosure agreements (NDAs) to ensure your work remains fully private.",
  },
  {
    question: "Q.2: What genres do you cover?",
    answer:
      "We work across a wide range of genres, including fiction, non-fiction, memoirs, self-help, business, romance, and more. Our diverse team is skilled at adapting to different writing styles and genres to meet your needs.",
  },
  {
    question: "Q.3: How do you ensure the writing matches my voice?",
    answer:
      "We take the time to thoroughly understand your voice and style through careful communication at every stage. By collaborating closely with you, we ensure the final writing reflects your vision and resonates with your audience.",
  },
  {
    question: "Q.4: What is the turnaround time for ghostwriting projects?",
    answer:
      "Turnaround times depend on the complexity of the project, but we always aim to set realistic timelines and deliver on schedule.",
  },
  {
    question: "Q.5: What are the pricing options for ghostwriting?",
    answer:
      "Our pricing is customized for each project. Factors such as genre, word count, research and writing effort, and deadlines are considered to provide a fair and accurate cost estimate.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-sec py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

          {/* FAQ Accordion - Takes full width on mobile, 2/3 on large screens */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h4 className="text-lg font-semibold text-gray-700">Know About Our Services</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-8 leading-tight">
              Frequently Asked Questions
              <span className="text-[#F89A1C]">.</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-lg shadow-[#f8991c4d] transition-all duration-300 hover:shadow-[#f8991c8e] hover:border-[#F89A1C]/30"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center p-5 md:p-6 bg-white hover:bg-yellow-50 transition text-left font-medium text-gray-900"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span className="flex-shrink-0">
                      {openIndex === i ? (
                        <FaMinus className="w-5 h-5 text-[#F89A1C]" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-gray-600" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Body */}
                  {openIndex === i && (
                    <div className="p-5 md:p-6 bg-gradient-to-b from-yellow-50 to-white border-t border-gray-200 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Hidden on mobile, appears on the side on lg+ */}
          <div className="hidden lg:flex justify-center items-center order-1 lg:order-2">
            <Image
              src="/images/Marketing consulting-amico.png"
              alt="Frequently Asked Questions"
              width={500}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Mobile-only Image - Centered above FAQ on small screens */}
          <div className="lg:hidden flex justify-center order-1 mb-8">
            <Image
              src="/images/Marketing consulting-amico.png"
              alt="Frequently Asked Questions"
              width={350}
              height={350}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}