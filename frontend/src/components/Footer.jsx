import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-xl font-semibold mb-2">LoanCraft</h4>
          <p className="text-sm text-gray-200">
            Secure, fast, and trusted loan solutions for your personal and business needs.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/apply-loan" className="hover:underline">Apply</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">Email: support@loancraft.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-6">
        © {new Date().getFullYear()} LoanCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
