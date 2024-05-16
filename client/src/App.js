import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import PublicRoutes from './routes/PublicRoutes';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import HomePage from './pages/Public/HomePage';
import NotFoundPage from './pages/Public/NotFoundPage';
import Unauthorized from './pages/Public/Unauthorized';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/user/*" element={<UserRoutes />} />
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/Unauthorized" element={<Unauthorized />} />
      </Routes>
    </div>
  );
}

export default App;







