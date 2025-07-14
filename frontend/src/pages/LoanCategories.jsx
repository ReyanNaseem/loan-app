import React from 'react';
import { Link } from 'react-router-dom';

const loanTypes = [
  {
    title: 'Personal Loan',
    description: 'Quick personal loans for your immediate needs with low interest rates.',
    image: '/assets/personal-loan.png', // Replace with your actual image path
  },
  {
    title: 'Business Loan',
    description: 'Flexible funding solutions for your startup or growing business.',
    image: '/assets/business-loan.png',
  },
  {
    title: 'Home Loan',
    description: 'Affordable home loans to help you own your dream house.',
    image: '/assets/home-loan.png',
  },
  {
    title: 'Education Loan',
    description: 'Financial support for your studies in India or abroad.',
    image: '/assets/education-loan.png',
  },
];

const LoanCategories = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Loan Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={loan.image}
                alt={loan.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-600">
                {loan.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{loan.description}</p>
              <Link
                to="/apply-loan"
                className="mt-4 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition text-sm"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanCategories;
