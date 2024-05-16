import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [emailForVerification, setEmailForVerification] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = authService.getCurrentUser();
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  const login = async (email, password) => {
    const { user, error } = await authService.login(email, password);
    if (user) {
      setCurrentUser(user);
    }
    return { user, error }; // Return user and error
  };

  const signup = async (email, password) => {
    const { error } = await authService.signup(email, password);
    if (!error) {
      setEmailForVerification(email);
    }
    return { error }; // Return error only
  };

  const verifyOtp = async (email, otp) => {
    const { user, error } = await authService.verifyOtp(email, otp);
    console.log(error); 
    if (user) {
      setCurrentUser(user);
    }
    return { user, error }; // Return user and error
  };

  const logout = async () => {
    await authService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, verifyOtp, emailForVerification, logout }}>
      {children}
    </AuthContext.Provider>
  );
};







