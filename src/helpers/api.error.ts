import { Response } from 'express';
import { ResponseStatus } from '../types/api.response';
import { StatusCode } from '../types/api.response';

enum ErrorMessage {
  UNAUTHORIZED = 'Authentication failure',
  INTERNAL = 'Internal Error',
  NOT_FOUND = 'Not Found',
  BAD_REQUEST = 'Bad Request'
}

export const NotFoundError = (res: Response): Response => {
  return responseError(ResponseStatus.NOT_FOUND, ErrorMessage.NOT_FOUND, res);
};

export const BadRequestError = (message: string, res: Response): Response => {
  return responseError(ResponseStatus.BAD_REQUEST, message, res);
};

export const InternalError = (res: Response): Response => {
  return responseError(ResponseStatus.INTERNAL_ERROR, ErrorMessage.INTERNAL, res);
};

export const AuthFailureError = (res: Response, message: string = ErrorMessage.UNAUTHORIZED): Response => {
  return responseError(ResponseStatus.UNAUTHORIZED, message, res);
};

const responseError = (status: number, message: string, res: Response): Response => {
  return res.status(status).json({
    statusCode: StatusCode.FAILURE,
    message
  });
};
