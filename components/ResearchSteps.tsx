import React from 'react'
import Image from 'next/image';
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

const ResearchSteps = () => {
    return (
        <div>
            <section className="py-12 md:py-24 px-4">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                        Our complete and streamlined approach..
                    </h2>
                    <p className="text-lg text-gray-600 max-w-4xl ">
                        Our end-to-end process is designed to guide authors through every stage of book production, ensuring your vision is realized with professionalism and care.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="space-y-4 text-left">
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
        </div>
    )
}

export default ResearchSteps