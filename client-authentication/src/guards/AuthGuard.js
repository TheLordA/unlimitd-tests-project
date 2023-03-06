import React from 'react';

import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';

// TODO: Implement the auth guard logic
const AuthGuard = ({ children }) => {
  const { isInitialized } = useAuth();

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default AuthGuard;
