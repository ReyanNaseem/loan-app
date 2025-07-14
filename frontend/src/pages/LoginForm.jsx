import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with your real API endpoint
    // try {
    //   const res = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    axios.post('http://localhost:8080/api/v1/users/login', formData)
    .then((res)=>{
        console.log(res.data);
        navigate('/home');
    })
    .catch((err)=>{
        console.log(err);
    })

    //   const result = await res.json();

    //   if (res.ok) {
    //     alert('Login successful!');
    //     // TODO: Navigate to dashboard or OTP verification
    //     // navigate('/dashboard') or navigate('/verify-otp')
    //   } else {
    //     alert(result.message || 'Login failed');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   alert('Server error during login.');
    // }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Login to LoanCraft</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account? <Link to="/" className="text-blue-600 hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;
