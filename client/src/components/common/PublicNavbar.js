import React from 'react';
import { Link } from 'react-router-dom';

function PublicNavbar() {
  return (
    <nav>
      <h1>Public Nav</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default PublicNavbar;
