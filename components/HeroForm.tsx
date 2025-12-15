import React from 'react'   

function HeroForm() {
    return (
        <div>
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
                        <input type="text" placeholder="I am looking for..." required className="input border border-gray-300 rounded-lg px-4 py-3 w-full lg:col-span-1" />
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
    )
}

export default HeroForm