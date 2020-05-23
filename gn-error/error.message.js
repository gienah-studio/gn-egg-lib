"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_code_1 = require("./error.code");
const GN_ERROR_MESSAGE = {
    [error_code_1.default.SUCCESS]: 'operation succeeded',
    [error_code_1.default.ACCOUNT_NOT_FOUND]: 'account not found',
    [error_code_1.default.RESTORE_AUTH_STATE_ERROR]: 'restore auth state failed',
    [error_code_1.default.UNPROCESSABLE_ENTITY]: 'invalid request parameters',
    [error_code_1.default.UNAUTHORIZED]: 'unauthroized'
};
exports.default = GN_ERROR_MESSAGE;
