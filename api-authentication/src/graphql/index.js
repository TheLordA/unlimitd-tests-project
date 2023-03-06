import path from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, './**/resolvers.js'));

const typeDefs = mergeTypeDefs(typesArray, { all: true });
const resolvers = mergeResolvers(resolversArray);

const schema = makeExecutableSchema({ resolvers, typeDefs });

export default schema;
