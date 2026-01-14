import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";

export default function RegenexxForm() {
    return (
        <>
      <Navbar />
      <div className="min-h-screen bg-[#1e242a] text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Information Section - Shows first on mobile */}
            <div className="space-y-6 md:ml-12 lg:order-2">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Regenexx Procedure Candidate Form</h1>
  
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    If you are suffering from arthritis, joint or muscle injury, spine pain, a sports-related injury, or
                    other degenerative orthopedic condition, you may be a good candidate for this ground-breaking
                    treatment. Please complete the Procedure Candidate Form below and we will get back to you with more
                    information after your form is received.
                  </p>
  
                  <div >
                    <p className="text-white">
                      <span className="font-semibold text-xl">Please note:</span> Regenexx Procedures are not reimbursable by
                      Healthcare or Medicare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Form Section - Shows second on mobile */}
            <div className="space-y-6 md:mr-12 lg:order-1">
              <form className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm text-gray-300">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm text-gray-300">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    />
                  </div>
                </div>
  
                {/* Zip Code */}
                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block text-sm text-gray-300">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
  
                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm text-gray-300">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
  
                {/* Text Consent */}
                <div className="space-y-2">
                  <label htmlFor="textConsent" className="block text-sm text-gray-300">
                    Is It Ok To Text You? *
                  </label>
                  <select
                    id="textConsent"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    <option value="" className="text-gray-400">
                      Select an option
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
  
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-gray-300">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
  
                {/* Interest Selection */}
                <div className="space-y-2">
                  <label htmlFor="interestedIn" className="block text-sm text-gray-300">
                    I Am Interested In Talking About My: *
                  </label>
                  <select
                    id="interestedIn"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  >
                    <option value="" className="text-gray-400">
                      Select a condition
                    </option>
                    <option value="arthritis">Arthritis</option>
                    <option value="joint-injury">Joint or Muscle Injury</option>
                    <option value="spine-pain">Spine Pain</option>
                    <option value="sports-injury">Sports-Related Injury</option>
                    <option value="orthopedic">Other Orthopedic Condition</option>
                  </select>
                </div>
  
                {/* Additional Information */}
                <div className="space-y-2">
                  <label htmlFor="additionalInfo" className="block text-sm text-gray-300">
                    Please Assist Your Regenerative Medicine Consultant By Providing Additional Information About Your
                    Condition Or Surgical Procedure You Are Wanting To Avoid
                  </label>
                  <textarea
                    id="additionalInfo"
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent min-h-[120px] resize-none"

                  />
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-sky-400 hover:bg-sky-500 text-slate-900 font-semibold py-3 px-4 rounded-md text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                >
                  BEGIN CANDIDACY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }