import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

// Dummy user data (replace with real auth user)

const Header = () => {

  const { auth } = useSelector((state) => state)

  const user = {
    email:auth.email,
    fullName: auth.fullName,
    imageUrl: auth.imageUrl
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();


  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('User Logout!!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    navigate('/login');
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">LoanCraft</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="hover:text-blue-200 transition">Home</Link>
          <Link to="/apply-loan" className="hover:text-blue-200 transition">Apply Loan</Link>
          <Link to="/dashboard" className="hover:text-blue-200 transition">Dashboard</Link>

          {/* Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <img
              src={user.imageUrl}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 shadow-xl rounded-md p-4 z-50">
                <div className="mb-2">
                  <p className="font-semibold">{user.fullName}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <hr className="my-2" />
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-md font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-blue-800">
          <Link to="/home" onClick={toggleMenu} className="block py-2 text-white hover:text-blue-200">Home</Link>
          <Link to="/apply-loan" onClick={toggleMenu} className="block py-2 text-white hover:text-blue-200">Apply Loan</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="block py-2 text-white hover:text-blue-200">Dashboard</Link>
          <button
            onClick={handleLogout}
            className="w-full text-left mt-3 bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
