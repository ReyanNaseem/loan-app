import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'

const SignupForm = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL

  const [imageFile, setImageFile] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    dob: '',
    income: '',
    employment: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageurl = "";

    const imageData = new FormData();
    imageData.append("image", imageFile);

    const res = await axios.post(
      `${baseUrl}/upload`,
      imageData
    );

    imageurl = res.data.imageUrl;

    const sendData = {
      ...formData,
      imageUrl: imageurl,
    };

    await axios.post(`${baseUrl}/register`, sendData)
      .then((res) => {

        toast.success("Signup successful!: Now check your email.", {
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
        navigate('/verify', {
          state: {
            email: res.data.user.email
          },
        })

      })
      .catch((err) => {

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

      });
      
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xl mt-10">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">LoanCraft Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name *</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Password */}
        <div>
          <label className="block font-semibold mb-1">Password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Profile Image */}
        <div>
          <label className="block font-semibold mb-1">Profile Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleImageChange}
                 className="w-full" />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-semibold mb-1">Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-semibold mb-1">Date of Birth *</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block font-semibold mb-1">Monthly Income (USD) *</label>
          <input type="number" name="income" value={formData.income} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        {/* Employment Status */}
        <div>
          <label className="block font-semibold mb-1">Employment Status *</label>
          <select name="employment" value={formData.employment} onChange={handleChange}
                  className="w-full p-2 border rounded-md" required>
            <option value="">-- Select --</option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="student">Student</option>
            <option value="retired">Retired</option>
          </select>
        </div>

        {/* Address */}
        <div>
          <label className="block font-semibold mb-1">Home Address *</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange}
                 className="w-full p-2 border rounded-md" required />
        </div>

        <button type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md w-full">
          Create Account
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
      </p>
    </div>
  );
};

export default SignupForm;
