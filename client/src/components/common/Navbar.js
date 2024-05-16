import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';
import PublicNavbar from './PublicNavbar';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!currentUser) {
    return <PublicNavbar />;
  }

  if (currentUser.role === 'admin') {
    return <AdminNavbar logout={handleLogout} />;
  }

  if (currentUser.role === 'user') {
    return <UserNavbar logout={handleLogout} />;
  }

  return null;
}

export default Navbar;


