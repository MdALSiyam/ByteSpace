import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 px-6 md:px-12 text-gray-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-black flex items-center gap-2 mb-3">
            <span className="bg-brandLime text-black px-2 py-1 rounded">b</span> ByteSpace
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Stay up to date with our latest features and releases by joining our newsletter.
          </p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="bg-gray-100 border border-gray-200 px-3 py-2 rounded-md text-sm w-full outline-none" />
            <button className="bg-brandLime text-black px-4 py-2 rounded-md font-medium text-sm hover:bg-lime-400">Search</button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-black mb-3">Featured Courses</h4>
          <ul className="space-y-2 text-sm">
            <li>Development</li>
            <li>Marketing</li>
            <li>Photography</li>
            <li>Finance</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-black mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Business</li>
            <li>IT & Software</li>
            <li>Design</li>
            <li>Sport</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-black mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2026 ByteSpace. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies Settings</span>
        </div>
      </div>
    </footer>
  );
}