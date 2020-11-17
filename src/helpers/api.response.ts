import { Response } from 'express';

export enum StatusCode {
  SUCCESS = '10000',
  FAILURE = '10001',
  RETRY = '10002',
  INVALID_ACCESS_TOKEN = '10003',
}

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}
export const SuccessResponse = (res: Response, message = 'successful', body: any = false): Response => {
  const data = !body ? {
    statusCode: StatusCode.SUCCESS,
    message
  } :
    {
      statusCode: StatusCode.SUCCESS,
      message,
      data: body
    };
  return res.status(ResponseStatus.SUCCESS).json(data);
};
