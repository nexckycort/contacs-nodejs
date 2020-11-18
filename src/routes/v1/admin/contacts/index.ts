import { NextFunction, Request, RequestHandler, Response, Router } from 'express';

import { ContactsService } from '../../../../services/contacts/contacts.service';
import { BadRequestError, InternalError } from '../../../../helpers/api.error';
import { SuccessResponse } from '../../../../helpers/api.response';
import _ from '../../../../helpers/utils';
import validator, { ValidationSource } from '../../../../middleware/validator';
import schema from './schema';

const router = Router();

const validateGroup: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { cellphone } = req.body;
    const result = await ContactsService.findByCellPhone(cellphone);

    if (result) {
      return BadRequestError('Contact already registered', res);
    }
    next();
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
};

router.post('/', validator(schema.group), validateGroup, async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const contact = await ContactsService.create(data);

    SuccessResponse(res, 'Contact created successfully', {
      contact: _.pick(contact, ['_id'])
    });
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const contacts = await ContactsService.find();

    return SuccessResponse(res, 'Contacts obtained successfully', _.pick(contacts, ['_id', 'name', 'email', 'cellphone']));
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
});

router.get('/:id', validator(schema.getGroup, ValidationSource.PARAM), async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const contacts = await ContactsService.findByPk(id);

    if (!contacts) {
      return BadRequestError('Contact does not exist', res);
    }

    return SuccessResponse(res, 'Contact obtained successfully', _.pick(contacts, ['_id', 'name', 'email', 'cellphone']));
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
});

router.put('/:id', validator(schema.getGroup, ValidationSource.PARAM), validator(schema.group), async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const contact = await ContactsService.update(id, data);

    SuccessResponse(res, 'Contact updated successfully', {
      contact: _.pick(contact, ['_id', 'name', 'email', 'cellphone'])
    });
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
});

export default router;
