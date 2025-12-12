// app/components/WhyChoose.jsx

import Link from "next/link";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="why-choose py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold leading-tight">
              Our complete and streamlined approach
              <span className="text-[#F89A1C]">.</span>
            </h2>

            <p className="py-4 text-gray-700">
              Our end-to-end process is designed to guide authors through every stage
              of book production, ensuring your vision is realized with professionalism and care.
            </p>

            <h3 className="text-xl font-semibold mt-6">Research and Planning</h3>
            <p className="py-2 text-gray-600">
              It starts with understanding your goals for the project. Our project manager will
              have an in-depth conversation with you to align our efforts with your publishing
              objectives and create a clear roadmap for success.
            </p>

            <h3 className="text-xl font-semibold mt-6">Creative Collaboration</h3>
            <p className="py-2 text-gray-600">
              Collaboration is at the heart of what we do. We foster an environment where your
              voice and creative vision are respected and shine through in the final product.
            </p>

            <h3 className="text-xl font-semibold mt-6">Execution</h3>
            <p className="py-2 text-gray-600">
              Guided by your vision and feedback, we apply our expertise to refine your book.
              From storytelling and precise editing to producing captivating audiobooks, we bring
              your project to life with skill and professionalism.
            </p>

            <h3 className="text-xl font-semibold mt-6">Strategic Promotion</h3>
            <p className="py-2 text-gray-600">
              Our support continues beyond publication. We implement targeted marketing strategies
              to ensure your book reaches the right audience, including online campaigns, engaging
              blogs, and promotional articles.
            </p>

            <div className="flex gap-4 mt-6 flex-wrap">
              <Link
                href="tel:+44-161-394-0064"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Request Call Back
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 bg-[#F89A1C] text-black rounded-lg hover:bg-yellow-400 transition"
              >
                Chat with Us Now
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Image
              src="/images/Marketing consulting-amico.png"
              alt="Amazon publishing experts"
              className="w-full rounded-lg shadow-md object-cover"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
