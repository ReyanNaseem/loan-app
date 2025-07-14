import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import LoanCategories from './LoanCategories'

const Home = () => {
  return (
    <div>
      <Header/>
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
        Welcome to LoanCraft
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Get instant, reliable, and secure loans tailored to your needs.
        Sign up today to apply for personal or business loans with ease.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/apply-loan"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Apply for Loan
        </Link>
        
      </div>
    </section>
    <LoanCategories/>
      <Footer/>
    </div>
  )
}

export default Home