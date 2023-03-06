import config from 'config';
import jwt from 'jsonwebtoken';

const jwtSecret = config.get('security.jwt.secret');
const expiresInDefault = config.get('security.jwt.expiresIn');

const createToken = (payload, expiresIn = expiresInDefault) => jwt.sign(payload, jwtSecret, { expiresIn });

// eslint-disable-next-line import/prefer-default-export
export { createToken };
