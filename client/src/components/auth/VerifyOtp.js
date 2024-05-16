import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import authService from '../../services/authService';

function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [resendMessage, setResendMessage] = useState(null);
  const { verifyOtp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password } = location.state;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await verifyOtp(email, otp);
    if (error) {
      setError(error);
    } else {
      navigate('/'); // Redirect to home after successful verification
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await authService.signup(email, password);
      if(response.error){
        setError(response.error || 'Failed to resend OTP. Please try again later.');
        setResendMessage(null)
      } else{
        setResendMessage(response.message || 'OTP has been resent. Please check your email.');
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <p>A verification code has been sent to <strong>{email}</strong></p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {resendMessage && <p style={{ color: 'green' }}>{resendMessage}</p>}
      <form onSubmit={handleSubmit}>
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
      <button onClick={handleResendOtp}>Resend OTP</button>
    </div>
  );
}

export default VerifyOtp;

