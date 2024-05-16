import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const { verifyOtp, emailForVerification } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, error } = await verifyOtp(emailForVerification, otp);
    if (error) {
      setError(error);
    } else {
      navigate('/'); // Redirect to home after successful verification
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Verify OTP</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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

