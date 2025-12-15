import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="bottom-form pb-0 bg-black py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* HEADINGS */}
        <h4 className="text-white text-center text-xl font-semibold">
          Let's collaborate Now!
        </h4>
        <h2 className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
          Stop Letting Your Masterpiece Gather Dust!
        </h2>
        <p className="text-white text-center py-2 text-sm md:text-base max-w-2xl mx-auto">
          Let’s connect and get your name gracing the bestseller lists. Have
          questions or need more information?
        </p>

        {/* CONTACT ICONS */}
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-6 pb-8 text-sm md:text-lg">
          <li className="flex items-center gap-2">
            <img src="/images/phone.webp" alt="phone" className="w-8 md:w-14" />
            <Link href="tel:(760) 546-5229" className="text-white hover:text-[#F89A1C] transition">
              (760) 546-5229
            </Link>
          </li>
          <li className="flex l items-center gap-2 ">
            <img src="/images/envlop.webp" alt="email" className="w-10 md:w-14" />
            <Link
              href="mailto:support@amazonpublishingexperts.com"
              className="text-white hover:text-[#F89A1C] transition"
            >
              support@amazonpublishingexperts.com
            </Link>
          </li>
        </ul>

        {/* FORM BOX */}
        <div className="b-form-bg bg-white rounded-2xl shadow-2xl overflow-hidden mx-0 md:mx-20">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

            {/* LEFT IMAGE */}
            <div className="order-2 md:order-1 flex items-center justify-center bg-gray-100 p-6 md:p-0">
              <Image
                src="/images/lp-bottom-form.webp"
                alt="Amazon publishing experts"
                width={600}
                height={600}
                className="w-full h-[620px] max-h-96 md:max-h-full object-contain rounded-lg"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="order-1 md:order-2 p-6 md:p-8 lg:p-10">
              <div className="get-started-form main-form text-black space-y-5">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Enter the literary spotlight and make your mark today!
                </h2>

                <p className="text-sm md:text-base py-2">
                  Let’s connect and get your name gracing the bestseller lists.
                  Have questions or need more information? Feel free to reach
                  out to us at{" "}
                  <a href="tel:(760) 546-5229" className="text-[#F89A1C] font-semibold">
                    (760) 546-5229
                  </a>
                  .
                </p>

                <form className="w-full space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="quote[name]"
                      required
                      placeholder="Full Name"
                      className="w-full p-3 rounded-md border border-gray-400 focus:border-[#F89A1C] focus:outline-none transition"
                    />

                    <input
                      type="email"
                      name="quote[email]"
                      required
                      placeholder="Email"
                      className="w-full p-3 rounded-md border border-gray-400 focus:border-[#F89A1C] focus:outline-none transition"
                    />
                  </div>

                  <div className="flex gap-4">
                    <input
                      type="tel"
                      name="quote[phone]"
                      required
                      placeholder="Phone Number"
                      className="w-full p-3 rounded-md border border-gray-400 focus:border-[#F89A1C] focus:outline-none transition"
                    />

                    <select
                      name="quote[services]"
                      className="w-full p-3 rounded-md border border-gray-400 focus:border-[#F89A1C] focus:outline-none transition"
                    >
                      <option>Select Services</option>
                      <option value="Digital Book Publishing">Book Publishing</option>
                      <option value="Book Marketing Service">Book Marketing</option>
                      <option value="Ghostwriting Service">Book Cover</option>
                      <option value="Fiction Writing Service">Audio Book</option>
                      <option value="Children’s Books Service">Book Illustrations</option>
                    </select>
                  </div>

                  <textarea
                    name="quote[comments]"
                    placeholder="About Project"
                    className="w-full p-3 rounded-md border border-gray-400 focus:border-[#F89A1C] focus:outline-none transition h-18 resize-none"
                  />

                  {/* CHECKBOX */}
                  <div className="pt-2 text-xs md:text-sm">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="bn_emailPromotional"
                        required
                        defaultChecked
                        className="mt-1 flex-shrink-0"
                      />
                      <span>
                        Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (
                        <Link
                          href="https://amazonpublishingexperts.co.uk/privacy-policy"
                          className="text-[#F89A1C] underline"
                        >
                          PRIVACY POLICY
                        </Link>{" "}
                        &{" "}
                        <Link
                          href="https://amazonpublishingexperts.co.uk/terms-and-condition"
                          className="text-[#F89A1C] underline"
                        >
                          TERMS & CONDITIONS
                        </Link>
                        ). Carrier charges may apply for SMS. Reply STOP or
                        UNSUBSCRIBE to stop anytime.
                      </span>
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full bg-[#F89A1C] hover:bg-yellow-400 text-black font-bold py-3 rounded-md transition duration-300"
                  >
                    Let's Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}