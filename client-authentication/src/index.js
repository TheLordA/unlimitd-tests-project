import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from 'src/services/apollo-client';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
  <HelmetProvider>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </HelmetProvider>,
  document.getElementById('root')
);
