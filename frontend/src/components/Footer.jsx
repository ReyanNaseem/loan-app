import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} LoanCraft. All rights reserved.</p>
        <div className="space-x-4 text-sm mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
