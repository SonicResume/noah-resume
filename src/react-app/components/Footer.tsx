import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          
          {/* Legal Navigation Links Nodes */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link to="/terms" className="hover:text-[#f97316] transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">|</span>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Corporate Brand Subtitle */}
          <p className="text-slate-400 text-xs tracking-wide mt-2">
            Proudly powered by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-[#f97316] bg-clip-text text-transparent font-bold">
              SonicResume Group
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
}
