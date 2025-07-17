import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerify = () => {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const [email, setEmail] = useState('');
  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Save or restore email
  useEffect(() => {
    const emailFromState = location.state?.email;
    if (emailFromState) {
      setEmail(emailFromState);
      localStorage.setItem('otpEmail', emailFromState); // Save for refresh
    } else {
      const emailFromStorage = localStorage.getItem('otpEmail');
      if (emailFromStorage) {
        setEmail(emailFromStorage);
      } else {
        alert("No email found. Redirecting to signup...");
        navigate('/signup'); // Redirect if no email
      }
    }
  }, [location.state, navigate]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length === OTP_LENGTH) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/verify`, {
          email: email,
          otp: code
        });
        console.log(res.data);
        localStorage.removeItem('otpEmail'); // ✅ Clear email after verification
        navigate('/login');
      } catch (err) {
        console.error(err.response.data.message);
        alert("Verification failed");
      }
    } else {
      alert('Please enter complete OTP.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">Verify OTP</h2>
      <p className="text-center text-gray-600 mb-6">
        Enter the 4-digit code sent to your email <strong>{email}</strong>.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
        <div className="flex justify-center gap-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputsRef.current[idx] = el)}
              className="w-12 h-12 text-center border rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
