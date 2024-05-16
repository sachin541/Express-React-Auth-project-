import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

const API_URL = 'http://localhost:3000';

function UserCenter() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        if (!token) {
          setError('No token found, please login again.');
          return;
        }

        const response = await axios.get(`${API_URL}/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err); // Log the error for debugging purposes
        setError(err.response ? err.response.data.message : 'Error fetching users');
      }
    };

    if (currentUser && currentUser.role === 'admin') {
      fetchUsers();
    } else {
      setError('Unauthorized');
    }
  }, [currentUser]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>All Users</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserCenter;

