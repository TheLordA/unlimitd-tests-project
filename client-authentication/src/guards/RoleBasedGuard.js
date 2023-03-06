import React from 'react';
import { Navigate } from 'react-router-dom';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';

// Helper function to check if the user has the required role
const hasRole = (user, accessibleRoles) => {
  if (!user || !user.roles || user.roles.length === 0) {
    return false;
  }
  return accessibleRoles === user.role;
};

const RoleBasedGuard = ({ accessibleRoles, children }) => {
  const { isAuthenticated, isInitialized, user } = useAuth();

  // Show a loading screen while auth state is not initialized
  if (!isInitialized) {
    return <LoadingScreen />;
  }

  // Navigate to login if user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Navigate to home if user does not have the required role
  if (hasRole(user, accessibleRoles)) {
    return <Navigate to="/" />;
  }

  // Allow access to the component if user is authenticated and has the required role
  return <>{children}</>;
};

export default RoleBasedGuard;
