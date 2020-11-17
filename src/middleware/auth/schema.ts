import Joi from 'joi';

export default {
  headers: Joi.object().keys({
    'content-type': Joi.string().required().equal('application/json')
  }).unknown(true)
};
