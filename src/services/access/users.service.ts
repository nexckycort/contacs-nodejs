import jwt from 'jsonwebtoken';

import config from '../../config';

export default class UsersService {
  static signToken(data: any) {
    return jwt.sign(data, config.jwtSecret, { expiresIn: '24h' });
  }

  static verifyToken(token: string) {
    return jwt.verify(token, config.jwtSecret);
  }
}
