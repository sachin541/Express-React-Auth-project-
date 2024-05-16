import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(username, password);
      console.log(result);
      if(result.error){
        setError(result.error);
      }else{
        navigate('/verify-otp'); // Redirect to OTP verification page
      }
    } catch (err) {
      setError(err.message); // Assuming the error object has a message property
      console.error('Failed to signup', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;


