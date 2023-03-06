import { combineResolvers } from 'graphql-resolvers';

import UserWorkflow from '../../workflows/users';
import isAuthenticated from '../shared/resolvers/isAuthenticated';

const Query = {
  /* TODO: Protect this query endpoint using combineResolvers & isAuthenticated resolver to ensure that only authenticated users can access it.
   * Hint: combineResolvers from 'graphql-resolvers' package is a function that takes in multiple resolvers and returns a single resolver. You can use it to combine multiple resolvers into a single resolver.
   * Hint: You will have to implement isAuthenticated resolver in src/graphql/shared/resolvers/isAuthenticated.js before using it there
   */
  me: async (parent, args, { me }) => UserWorkflow.getAccountInfoById(me.id),
};

const Mutation = {
  login: async (parent, { email, password }) => UserWorkflow.login({ email, password }),
};

export default {
  Mutation,
  Query,
};
