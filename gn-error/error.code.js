"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gn_enum_1 = require("../gn-enum");
class GN_ERROR_CODE extends gn_enum_1.default {
}
exports.default = GN_ERROR_CODE;
GN_ERROR_CODE.SUCCESS = new GN_ERROR_CODE(['00000', 'ok']);
GN_ERROR_CODE.UNKNOWN_ERROR = new GN_ERROR_CODE(['00001', 'unknown error']);
GN_ERROR_CODE.NETWORK_ERROR = new GN_ERROR_CODE(['00002', 'network error']);
GN_ERROR_CODE.INTERNAL_SERVER_ERROR = new GN_ERROR_CODE(['00003', 'internal server error']);
GN_ERROR_CODE.CACHE_ERROR = new GN_ERROR_CODE(['00004', 'cache error']);
GN_ERROR_CODE.DATABASE_ERROR = new GN_ERROR_CODE(['00005', 'database error']);
GN_ERROR_CODE.TRANSACTION_ERROR = new GN_ERROR_CODE(['00006', 'transaction error']);
GN_ERROR_CODE.HTTP_REQUEST_ERROR = new GN_ERROR_CODE(['00007', 'http request error']);
GN_ERROR_CODE.JWT_GENERATION_ERROR = new GN_ERROR_CODE(['00008', 'jwt generation error']);
GN_ERROR_CODE.JWT_VERIFICATION_ERROR = new GN_ERROR_CODE(['00009', 'jwt verification error']);
GN_ERROR_CODE.UNAUTHORIZED = new GN_ERROR_CODE(['00010', 'unauthorized']);
GN_ERROR_CODE.UNPROCESSABLE_ENTITY = new GN_ERROR_CODE(['00011', 'api param invalid']);
