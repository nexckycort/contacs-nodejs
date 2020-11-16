import { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';

import validator, { ValidationSource } from '../helpers/validator';
import { AuthFailureError } from '../helpers/api.error';
import schema from './schema';
import { UsersService } from '../services/access/users.service';

const router = Router();

export default router.use(validator(schema.headers, ValidationSource.HEADER), async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');

  const token = authHeader.split(' ')[1];
  let revisarToken;
  try {
    revisarToken = UsersService.verifyToken(token);
  } catch (error) {
    const messageError = String(error).split(': ')[1];
    return next(AuthFailureError(res, messageError));
  }
  req.body.session = jwt.decode(token);
  next();
});
