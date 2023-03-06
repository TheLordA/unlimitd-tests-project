import { useLazyQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';
import { CURRENT_USER } from 'src/graphql/users/queries';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const [getCurrentUser, { data: currentUser, refetch: refetchCurrentUser }] = useLazyQuery(
    CURRENT_USER,
    {
      nextFetchPolicy: 'cache-and-network',
      onCompleted: () => {
        setIsAuthenticated(true);
      },
      onError: () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      },
      refetchWritePolicy: 'overwrite',
    }
  );

  const onLoginSuccess = (token) => {
    localStorage.setItem('token', token);
    getCurrentUser();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getCurrentUser();
    } else {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.me) {
      setIsAuthenticated(true);
    }
    setIsInitialized(true);
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isInitialized,
        logout,
        onLoginSuccess,
        user: currentUser?.me,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
