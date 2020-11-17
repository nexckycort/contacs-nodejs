import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../helpers/api.error';

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  PARAM = 'params',
}

export const JoiAuthBearer = () =>
  Joi.string().custom((value: string, helpers) => {
    if (!value.startsWith('Bearer ')) return helpers.error('any.invalid');
    if (!value.split(' ')[1]) return helpers.error('any.invalid');
    return value;
  }, 'Authorization Header Validation');

export default (schema: Joi.ObjectSchema, source: ValidationSource = ValidationSource.BODY) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { error } = schema.validate(req[source]);

    if (!error) return next();

    const { details } = error;
    const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(',');

    next(BadRequestError(message, res));
  } catch (error) {
    next(error);
  }
};
