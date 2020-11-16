import Joi from 'joi';
import { JoiObjectId } from '../../../../helpers/validator';

export default {
  group: Joi.object().keys({
    id: JoiObjectId().optional(),
    name: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    cellphone: Joi.string().required().length(10),
    session: Joi.object().required()
  }),
  getGroup: Joi.object().keys({
    id: JoiObjectId().required()
  })
};
