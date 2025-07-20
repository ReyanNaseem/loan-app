import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

const ApplyLoan = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
    income: '',
    category: 'personal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend via API call here
    console.log(form);
    axios.post(`${import.meta.env.VITE_BASE_URL}/loan`,form)
    .then((res)=>{
      toast.success(res.data.message, {
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
    })
    .catch((err)=>{
      toast.error(err.response.data.message, {
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
    })
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center font-bold text-blue-700 mb-6">Apply for a Loan</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Loan Amount (PKR)</label>
            <input
              type="number"
              name="amount"
              required
              value={form.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Purpose of Loan</label>
            <input
              type="text"
              name="purpose"
              required
              value={form.purpose}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Monthly Income</label>
            <input
              type="number"
              name="income"
              required
              value={form.income}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Loan Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-white"
            >
              <option value="personal">Personal Loan</option>
              <option value="business">Business Loan</option>
              <option value="home">Home Loan</option>
              <option value="education">Education Loan</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApplyLoan;
