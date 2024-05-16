import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AdminPage from '../pages/admin/AdminPage';
import UserCenter from '../pages/admin/UserCenter';
function AdminRoutes() {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route path="/" element={currentUser && currentUser.role === 'admin' ? <AdminPage /> : <Navigate to="/Unauthorized" />}/>
      <Route path="/UserCenter" element={currentUser && currentUser.role === 'admin' ? <UserCenter /> : <Navigate to="/UserCenter" />}/>
    </Routes>
  );
}

export default AdminRoutes;
