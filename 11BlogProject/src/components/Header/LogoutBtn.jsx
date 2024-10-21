import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    setLoading(true); // Show loading state
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <button
      className={`inline-block px-6 py-2 duration-200 rounded-full ${
        loading ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-blue-400'
      }`}
      onClick={logoutHandler}
      disabled={loading} // Disable button while loading
    >
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  );
}

export default LogoutBtn;
