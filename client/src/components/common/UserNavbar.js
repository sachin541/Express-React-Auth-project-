import React from 'react';
import { Link } from 'react-router-dom';

function UserNavbar({logout}) {
  

  return (
    <nav>
      <h1>User</h1>
      <Link to="/">Home</Link>
      <Link to="/user">User Dashboard</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default UserNavbar;
