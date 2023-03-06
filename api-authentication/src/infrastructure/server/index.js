import { createServer } from 'http';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import schema from '../../graphql';
import getContext from './getContext';

const apolloServer = new ApolloServer({
  context: async ({ req }) => getContext({ token: req.get('Authorization')?.replace('Bearer ', '') }),
  schema,
});

const startApolloServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/',
  });

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀  Server version ready at http://localhost:4000/`);
};

export default startApolloServer;
