import { AuthenticationError } from 'apollo-server-express';
import config from 'config';
import jwt from 'jsonwebtoken';

import UserService from '../services/users';

const getApprovedUser = async (tokenData) => {
  const userId = tokenData.id;
  const user = await UserService.getAccountInfoById(userId);
  const isTokenRevoked = !user || tokenData.email !== user.email;
  if (isTokenRevoked) throw new AuthenticationError('Token revoked');
  return user;
};

const getDataFromToken = async (token) => {
  if (!token) return {};

  let tokenData;
  try {
    tokenData = jwt.verify(token, config.get('security.jwt.secret'));
  } catch (e) {
    throw new AuthenticationError('Invalid JWT');
  }
  const user = await getApprovedUser(tokenData);
  return { tokenData, user };
};

export { getDataFromToken, getApprovedUser };
