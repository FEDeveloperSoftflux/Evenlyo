import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm md:text-base">
          {/* About Section */}
          <div className="space-y-4">
            <img src="/assets/brand.svg" alt="Evenlyo Brand" className="h-7 w-auto" />
            <ul className="space-y-2 text-base">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">About AXT Transportation</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Story Hub/Newsroom</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Investors</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Corporate Social Responsibility</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Global Locations</a></li>
            </ul>
          </div>

          {/* Mobile: Discover & Support Resources side by side */}
          <div className="block md:hidden col-span-1">
            <div className="grid grid-cols-2 gap-6">
              {/* Discover Section */}
              <div className="space-y-4">
                <h3 className="text-base md:text-xl font-semibold">Discover</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Industry</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Products</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Success Stories</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Resource Library</a></li>
                </ul>
              </div>
              {/* Support Resources */}
              <div className="space-y-4">
                <h3 className="text-base md:text-xl font-semibold">Support Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Support and Downloads</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Support</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Request a Repair</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Product Warranty Information</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Developer Portal</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-gray-900">Report a Potential Security Vulnerability or Concern</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop: Discover Section */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-base md:text-xl font-semibold">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Industry</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Success Stories</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Resource Library</a></li>
            </ul>
          </div>

          {/* Desktop: Support Resources */}
          <div className="hidden md:block space-y-4">
            <h3 className="text-base md:text-xl font-semibold">Support Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Support and Downloads</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact Support</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Request a Repair</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Product Warranty Information</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Developer Portal</a></li>
              <li><a href="#" className="text-gray-700 hover:text-gray-900">Report a Potential Security Vulnerability or Concern</a></li>
            </ul>
          </div>

          {/* Connect with our team */}
          <div className="space-y-4">
            <h3 className="text-base md:text-xl font-semibold">Connect with our team</h3>
            <p className="text-sm md:text-base  font-semibold">Stay up to date with AXT Transportation.</p>
            <p className="text-sm md:text-base text-gray-700">Sign up for our newsletter.</p>
            <button className="btn-primary-mobile text-white px-6 py-2 rounded-2xl transition-colors">
              Register Now
            </button>
            <p className="text-xs md:text-sm text-gray-600 mt-4">
              Manage Contact Preferences
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.469-2.123 4.688-1.345 1.337-3.063 1.978-5.061 1.978-1.887 0-3.537-.578-4.963-1.667 1.985.168 3.93-.35 5.683-1.54-1.064-.021-1.94-.618-2.645-1.771.348.056.696.069 1.058.035-.659-.21-1.23-.635-1.671-1.242-.441-.608-.658-1.31-.658-2.078.317.135.688.224 1.077.263-1.225-.894-1.455-2.66-.538-3.921 1.307 1.654 3.028 2.639 5.16 2.954-.11-.5-.126-1.003-.044-1.479.33-1.916 2.18-3.239 4.1-2.913 1.005.171 1.84.742 2.44 1.623.591-.12 1.18-.34 1.729-.657-.193.607-.611 1.103-1.23 1.449.525-.063 1.039-.2 1.529-.405-.351.525-.814.987-1.343 1.343z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        

        {/* Legal and Social Links */}
        <div className="mt-8 pt-6 border-t border-gray-300">
          <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-center md:flex-row md:space-x-6 md:items-center">
              <div className="flex flex-row space-x-2 md:space-x-6 text-[14px] md:text-xs text-gray-600 ">
                <a href="#" className="hover:text-gray-900">Legal</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-gray-900">Terms of Use</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              </div>
              <div className="mt-1 md:mt-0 text-center text-[14px] md:text-xs text-gray-600 ">
                <a href="#" className="hover:text-gray-900">Supply Chain Transparency</a>
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-gray-600 mt-2 md:mt-0 text-center md:text-left">
              ©2025 Zebra Technologies Corp. and/or its affiliates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
