import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="py-12 md:py-16 bg-white cta-signup">
      <div className="container mx-auto px-4">
        <div
          className="bg-[#F89A1C] max-w-6xl mx-auto rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">

            {/* Left Image - Hidden on mobile, shown on md+ */}
            <div className="hidden md:flex justify-center items-center p-8 lg:p-12">
              <Image
                src="/images/Contact us-bro.png"
                alt="Amazon publishing experts"
                width={550}
                height={550}
                className="object-contain w-full max-w-sm lg:max-w-none"
                priority
              />
            </div>

            {/* Mobile Image - Only visible on small screens */}
            <div className="md:hidden flex justify-center px-6 pt-6">
              <Image
                src="/images/Contact us-bro.png"
                alt="Amazon publishing experts"
                width={400}
                height={400}
                className="object-contain w-full max-w-xs"
              />
            </div>

            {/* Right Content */}
            <div className="px-6 pb-10 md:px-10 md:py-12 lg:px-16 text-center md:text-left">
              <h4 className="text-lg md:text-xl font-semibold text-black">
                Reach Your Audience Globally
              </h4>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-3 leading-tight">
                Contact us today for a personalized quote for your project!
              </h2>

              <p className="mt-4 text-white text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                Broaden your book’s reach and connect with readers and listeners around the globe. With our professional publishing and distribution services, your work will appear on top platforms for maximum visibility. Whether in print, digital, or audiobook format, we help you share your story with the audience that matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                {/* Call Back Button */}
                <Link
                  href="tel:(760) 546-5229"
                  className="px-8 py-4 bg-gray-900 text-white rounded-lg flex items-center gap-3 hover:bg-gray-800 transition flex justify-center font-semibold text-lg shadow-lg"
                >
                  <FaPhoneAlt className="text-xl" />
                  Request Call Back
                </Link>

                {/* Chat Button */}
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-yellow-400 text-black rounded-lg flex items-center gap-3 hover:bg-yellow-300 transition font-semibold text-lg shadow-lg justify-center"
                >
                  <FaComments className="text-xl" />
                  Chat with Us Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}