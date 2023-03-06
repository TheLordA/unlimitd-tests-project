import { useLazyQuery } from '@apollo/client';
import React, { createContext, useEffect, useState } from 'react';
import { CURRENT_USER } from 'src/graphql/users/queries';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const logout = () => {
    // TODO: Implement the logout logic
  };

  // eslint-disable-next-line no-unused-vars
  const [getCurrentUser, { data: currentUser, refetch: refetchCurrentUser }] = useLazyQuery(
    CURRENT_USER,
    {
      nextFetchPolicy: 'cache-and-network',
      onCompleted: () => {
        // TODO: Implement on completed logic
      },
      onError: () => {
        // TODO: Implement on error logic
      },
      refetchWritePolicy: 'overwrite',
    }
  );

  // eslint-disable-next-line no-unused-vars
  const onLoginSuccess = (token) => {
    // TODO: Implement the onLoginSuccess logic
  };

  useEffect(() => {
    // TODO: implement the initialization logic
    setIsInitialized(true);
  }, []);

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
