import { Router, Request, Response } from 'express';

import { SuccessResponse } from '../../../helpers/api.response';
import _ from '../../../helpers/utils';
import { AuthFailureError, BadRequestError } from '../../../helpers/api.error';
import validator from '../../../middleware/validator';
import schema from './schema';
import UsersService from '../../../services/access/users.service';

const router = Router();

export default router.post('/', validator(schema.userCredential), async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await UsersService.findByEmail(email);
  if (!user) return BadRequestError('User not registered', res);

  const match = await UsersService.comparePassword(password, user.password);
  if (!match) return AuthFailureError(res);

  const token = UsersService.signToken({
    email: user.email,
    nombre: user.name,
    id: user._id
  });
  return SuccessResponse(res, 'Sign in Success', {
    user: _.pick(user, ['_id', 'name', 'email']),
    tokens: token
  });
});
