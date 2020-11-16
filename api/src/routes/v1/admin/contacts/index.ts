import express, { Request, Response, RequestHandler } from 'express';

import { ContactsService } from '../../../../services/contacts/contacts.service';
import { BadRequestError, InternalError } from '../../../../helpers/api.error';
import { SuccessResponse } from '../../../../helpers/api.response';
import _ from '../../../../helpers/utils';
import validator, { ValidationSource } from '../../../../helpers/validator';
import schema from './schema';

const router = express.Router();


router.post('/', validator(schema.group), async (req: Request, res: Response) => {
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

router.put('/', validator(schema.group), async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const contact = await ContactsService.update(data);

    SuccessResponse(res, 'Contact updated successfully', {
      contact: _.pick(contact, ['_id'])
    });
  } catch (error) {
    console.log(error);
    return InternalError(res);
  }
});

export default router;
