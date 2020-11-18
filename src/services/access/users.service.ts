import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import Users from '../../models/users';
import config from '../../config';
import { IUser } from '../../types/access';
import { handleError } from '../../helpers/api.error';
export default class UsersService {
  static async create(user: IUser): Promise<IUser> {
    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;

    return Users.create(user)
      .then((data: IUser) => {
        return data;
      })
      .catch((e: Error) => {
        handleError(e);
        throw e;
      });
  }

  static async findByEmail(email: string): Promise<IUser | null> {
    try {
      const data = await Users.findOne({ email });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async comparePassword(confirmPassword: string, password: string): Promise<boolean> {
    try {
      const data = await bcrypt.compare(confirmPassword, password);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static signToken(data: Record<string, unknown>): string {
    return jwt.sign(data, config.jwtSecret, { expiresIn: '24h' });
  }

  static verifyToken(token: string) {
    return jwt.verify(token, config.jwtSecret);
  }
}
