import { Request, Response, NextFunction, Router } from 'express';

import validator, { ValidationSource } from '../validator';
import { AuthFailureError } from '../../helpers/api.error';
import schema from './schema';

const router = Router();

router.use(validator(schema.headers, ValidationSource.HEADER), async (req: Request, res: Response, next: NextFunction) => {

});

export default router;
