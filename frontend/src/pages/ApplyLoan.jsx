import React, { useState } from 'react';

const ApplyLoan = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    purpose: '',
    income: '',
    documents: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend via API call here
    console.log(form);
    alert('Loan application submitted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Apply for a Loan</h1>

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
          <label className="block text-sm font-medium">Loan Amount (INR)</label>
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
          <label className="block text-sm font-medium">Upload ID/Income Proof</label>
          <input
            type="file"
            name="documents"
            accept=".pdf,.jpg,.png"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyLoan;
