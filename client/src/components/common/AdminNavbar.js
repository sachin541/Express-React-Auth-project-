import React from 'react';
import { Link } from 'react-router-dom';


function AdminNavbar({logout}) {
  

  return (
    <nav>
      <h1>Admin Nav</h1>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin Dashboard</Link>
      <Link to="/admin/UserCenter">UserCenter</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default AdminNavbar;
