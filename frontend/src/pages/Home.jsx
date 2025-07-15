import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'

const loanCategories = [
  {
    title: 'Personal Loan',
    description: 'Cover your personal expenses with fast and easy loans.',
    icon: '👤',
  },
  {
    title: 'Business Loan',
    description: 'Expand your business with our trusted financial support.',
    icon: '📈',
  },
  {
    title: 'Home Loan',
    description: 'Make your dream home a reality with affordable EMIs.',
    icon: '🏠',
  },
  {
    title: 'Education Loan',
    description: 'Fund your education and shape your future with ease.',
    icon: '🎓',
  },
];

const Home = () => {
  return (
    <>
    <Header/>
    <div className="w-full bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to LoanCraft
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-light">
          Your trusted partner for personal, business, and education loans.
        </p>
        <div className="mt-8">
          <Link
            to="/apply-loan"
            className="bg-white text-blue-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Apply for a Loan
          </Link>
        </div>
      </section>

      {/* Motivational Quote Banner */}
      <section className="bg-blue-100 py-8 px-4 text-center">
        <blockquote className="text-xl italic font-medium text-blue-900 max-w-3xl mx-auto">
          "Opportunities don’t happen. You create them — with the right support and smart financing."
        </blockquote>
      </section>

      {/* Loan Categories */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Loan Categories
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose LoanCraft */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Why Choose LoanCraft?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold mb-2">✅ Instant Online Application</h4>
            <p>Apply from anywhere with our simple and fast online process.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">✅ Quick Approval</h4>
            <p>Get loan approval within hours — no unnecessary delays.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">✅ Flexible EMI Options</h4>
            <p>Choose a repayment schedule that fits your financial needs.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">✅ 100% Secure</h4>
            <p>Your data is protected with advanced security protocols.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-800 text-white py-16 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Craft Your Financial Future?
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Join thousands of satisfied customers who have turned their dreams into reality with LoanCraft.
        </p>
        <Link
          to="/apply-loan"
          className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Apply for a Loan
        </Link>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
