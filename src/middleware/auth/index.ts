import { Request, Response, NextFunction, Router } from 'express';
import jwt from 'jsonwebtoken';

import validator, { ValidationSource } from '../validator';
import { AuthFailureError } from '../../helpers/api.error';
import UsersService from '../../services/access/users.service';
import schema from './schema';

const router = Router();

router.use(validator(schema.headers, ValidationSource.HEADER), async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization') as String;

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

export default router;
