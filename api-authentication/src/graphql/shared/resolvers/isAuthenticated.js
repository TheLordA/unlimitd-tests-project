import { ApolloError } from 'apollo-server-express';
import { skip } from 'graphql-resolvers';

/* TODO: Implement a isAuthenticated resolver that is responsible to check if me exists in the context.
 * Hint: Find more informations about context within src/infrastructure/server/getContext.js file
 * Hint: If me exists in the context, then skip the resolver. If me does not exist in the context, then throw an ApolloError with the message 'Not authorized'
 * Hint: A resolver signature looks like (parent, args, context, info) => {}
 */
const isAuthenticated = async () => {};

export default isAuthenticated;
