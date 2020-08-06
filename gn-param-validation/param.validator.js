"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("@hapi/joi");
const gn_constant_1 = require("../gn-constant");
const GN_PARAM_VALIDATOR = {
    PAGINATION: () => joi
        .object()
        .keys({
        page: joi.number().optional(),
        paginate: joi.number().optional(),
    })
        .unknown(true),
    MOBILE: () => joi.string().regex(gn_constant_1.GN_REGEX.MOBILE),
    GENDER: () => joi.string().valid(gn_constant_1.GN_GENDER.MALE, gn_constant_1.GN_GENDER.FEMALE),
};
exports.default = GN_PARAM_VALIDATOR;
