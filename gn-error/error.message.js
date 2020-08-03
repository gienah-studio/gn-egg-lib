"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_code_1 = require("./error.code");
const GN_ERROR_MESSAGE = new Map([
    [error_code_1.default.SUCCESS, 'operation succeeded'],
    [error_code_1.default.UNAUTHORIZED, 'unauthorized'],
    [error_code_1.default.UNPROCESSABLE_ENTITY, 'invalid request parameters'],
]);
exports.default = GN_ERROR_MESSAGE;
