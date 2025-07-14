import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const OtpVerify = ({ onVerify }) => {
  const OTP_LENGTH = 4;
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(''));
  const inputsRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Allow only digits

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Auto-focus next
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
      await axios.post(`${import.meta.env.VITE_BASE_URL}/verify`, {email:location.state.email})
      .then((res)=>{
          console.log(res.data);
          navigate('/login');
      })
      .catch((err)=>{
        console.error(err);
        alert("Virification failed");
      })

    } else {
      alert('Please enter complete OTP.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">Verify OTP</h2>
      <p className="text-center text-gray-600 mb-6">
        Enter the 4-digit code sent to your email.
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
