import { combineResolvers } from 'graphql-resolvers';

import UserWorkflow from '../../workflows/users';
import isAuthenticated from '../shared/resolvers/isAuthenticated';

const Query = {
  me: combineResolvers(isAuthenticated, async (parent, args, { me }) => UserWorkflow.getAccountInfoById(me.id)),
};

const Mutation = {
  login: async (parent, { email, password }) => UserWorkflow.login({ email, password }),
};

export default {
  Mutation,
  Query,
};
