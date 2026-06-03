import React from 'react';

export default function Contact() {
  const open = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-6 mb-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-base text-slate-600">
            Reach the SonicResume Group support team through our official communication channels below.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Channel 1: Messenger (Orange Theme Accent) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="text-[#f97316]">💬</span> Facebook Messenger
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Chat directly with our team for instant assistance and platform support queries.
              </p>
            </div>
            <button
              className="bg-[#f97316] hover:bg-orange-600 text-white font-semibold text-sm px-5 py-3 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
              onClick={() =>
                open("https://www.facebook.com/people/SonicResume-Group/61585916721060/")
              }
            >
              Open Messenger Channel
            </button>
          </div>

          {/* Channel 2: Core Corporate Website (Blue Theme Accent) */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="text-blue-600">🌐</span> Enterprise Portal
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Submit formal tickets or explore broad corporate options on our central node.
              </p>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
              onClick={() =>
                open("https://www.sonicresume.com/contact-us-2/")
              }
            >
              Visit Contact Page
            </button>
          </div>

        </div>

        {/* Corporate Footer Note */}
        <p className="text-center text-xs text-slate-400 mt-12 tracking-wide">
          Proudly powered by Noah — A Division of SonicResume Group
        </p>

      </div>
    </div>
  );
}
