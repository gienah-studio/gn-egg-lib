import * as joi from '@hapi/joi';
import { GN_REGEX, GN_GENDER } from '../gn-constant';

const GN_PARAM_VALIDATOR = {
  PAGINATION: () =>
    joi
      .object()
      .keys({
        page: joi.number().optional(),
        paginate: joi.number().optional(),
      })
      .unknown(true),
  MOBILE: () => joi.string().regex(GN_REGEX.MOBILE),
  GENDER: () => joi.string().valid(GN_GENDER.MALE, GN_GENDER.FEMALE),
};

export default GN_PARAM_VALIDATOR;
