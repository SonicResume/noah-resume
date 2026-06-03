import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        
        {/* Header Section */}
        <div className="border-b border-slate-200 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: June 3, 2026
          </p>
        </div>

        <div className="space-y-8 text-base leading-relaxed text-slate-600">
          
          {/* Introduction */}
          <section>
            <p className="text-lg text-slate-700">
              By accessing or using the NOAH Resume platform and workspace tools managed by SonicResume Group, you legally agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-wide uppercase text-xs border-l-2 border-[#f97316] pl-3">
              1. Permitted Use of Service
            </h2>
            <p>
              You are granted a limited license to utilize this service to design, manage, and export professional career documentation. Any attempt to misuse, reverse-engineer, exploit vulnerabilities, or flood our Firebase database instances will result in immediate account termination.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-wide uppercase text-xs border-l-2 border-blue-600 pl-3">
              2. User Content & Data Responsibility
            </h2>
            <p>
              You maintain 100% intellectual ownership over all information, histories, summaries, and bullet points entered into your profile. You are entirely responsible for verifying the accuracy of your career details and protecting your account login metadata.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3 tracking-wide uppercase text-xs border-l-2 border-[#f97316] pl-3">
              3. Payments, Licensing & Subscriptions
            </h2>
            <p>
              Access parameters are managed securely via automated Stripe transactions. Yearly subscription loops automatically cycle according to designated intervals unless modified inside your billing hub. Commercial source code buyout layers remain governed under separate engineering delivery certificates.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 mt-12 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Corporate Governance & Contact
            </h2>
            <p className="text-sm text-slate-500">
              For administrative inquiries, formal terms validation, or source code acquisition audits, reach out to the SonicResume Group development framework directly through our official contact nodes.
            </p>
            <div className="mt-4 flex gap-4 text-xs font-semibold">
              <a href="https://sonicresume.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                ://sonicresume.com
              </a>
              <span className="text-slate-300">|</span>
              <a href="https://sonicresume.com" className="text-[#f97316] hover:text-orange-600 transition-colors">
                ://sonicresume.com
              </a>
            </div>
          </section>

        </div>

        {/* Brand Footer */}
        <p className="text-center text-xs text-slate-400 mt-12 tracking-wide">
          Proudly powered by Noah — A Division of SonicResume Group
        </p>

      </div>
    </div>
  );
}
