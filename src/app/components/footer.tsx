'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Terms</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Accessibility</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">YouTube</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">TikTok</a></li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-white font-semibold mb-4">More</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">How it works</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Guarantee</a></li>
              <li><a href="#" className="hover:text-gray-200 transition-colors duration-200">Refer friends</a></li>
            </ul>
          </div>
          
       
          
       
      
          
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
          <p>Copyright &copy; 2025 Fua, Inc. All Rights Reserved</p>
          <p>Copyright &copy; 2025 Fua, Inc. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
