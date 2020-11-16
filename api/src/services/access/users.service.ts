import { CreateQuery } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Users from '../../models/users';
import { IUser } from '../../interfaces/access';
import { secretKey } from '../../config';

export class UsersService {
  static async create(user: CreateQuery<IUser>): Promise<IUser> {
    const passwordHash = await bcrypt.hash(user.password, 10);
    user.password = passwordHash;

    return Users.create(user)
      .then((data: IUser) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  static async findByEmail(email: string): Promise<IUser> {
    try {
      const data = await Users.findOne({ email });
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async comparePassword(confirmPassword: string, password: string): Promise<boolean> {
    try {
      const data = await bcrypt.compare(confirmPassword, password);
      return data;
    } catch (error) {
      throw error;
    }
  }

  static signToken(data: any) {
    return jwt.sign(data, secretKey, { expiresIn: '24h' });
  }

  static verifyToken(token: string) {
    return jwt.verify(token, secretKey);
  }
}
