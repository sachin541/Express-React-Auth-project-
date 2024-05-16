import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import NotFoundPage from '../pages/Public/NotFoundPage';
import VerifyOtp from '../components/auth/VerifyOtp';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<NotFoundPage />} />
     
    </Routes>
  );
}

export default PublicRoutes;
