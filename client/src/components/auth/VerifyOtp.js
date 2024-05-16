import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

function VerifyOtp() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/verify-otp`, { email, otp });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify OTP');
      console.error('Failed to verify OTP', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Verify OTP</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
      </label>
      <button type="submit">Verify OTP</button>
    </form>
  );
}

export default VerifyOtp;
