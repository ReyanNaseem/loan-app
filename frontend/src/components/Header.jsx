import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons (install if not yet)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">LoanCraft</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/apply-loan" className="hover:underline">Apply Loan</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/logout" className="hover:bg-red-500 px-2 py-1 rounded bg-white text-black">Logout</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-4 space-y-3">
          <Link to="/" onClick={closeMenu} className="block">Home</Link>
          <Link to="/apply-loan" onClick={closeMenu} className="block">Apply Loan</Link>
          <Link to="/dashboard" onClick={closeMenu} className="block">Dashboard</Link>
          <Link to="/login" onClick={closeMenu} className="block">Login</Link>
          <Link to="/signup" onClick={closeMenu} className="block">Signup</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
