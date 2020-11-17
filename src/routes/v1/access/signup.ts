import { Request, Response, NextFunction, RequestHandler, Router } from 'express';

import schema from './schema';
import _ from '../../../helpers/utils';
import validator from '../../../middleware/validator';
import { BadRequestError, InternalError } from '../../../helpers/api.error';
import { SuccessResponse } from '../../../helpers/api.response';
import UsersService from '../../../services/access/users.service';

const router = Router();

const validateEmailUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const user = await UsersService.findByEmail(email);

    if (user) {
      return BadRequestError('User already registered', res);
    }
    next();
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
};

const createUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await UsersService.create(data);

    return SuccessResponse(res, 'Signup Successful', _.pick(user, ['_id']));
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
};

export default router.post('/', validator(schema.signup), validateEmailUser, createUser);
