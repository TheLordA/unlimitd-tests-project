import { ApolloError } from 'apollo-server-express';
import { skip } from 'graphql-resolvers';

const isAuthenticated = async (parent, args, { me }) => {
  if (!me) {
    throw new ApolloError('Not authorized', 'UNAUTHORIZED');
  }

  return skip;
};

export default isAuthenticated;
