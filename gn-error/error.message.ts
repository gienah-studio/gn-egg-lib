import GN_ERROR_CODE from './error.code';

const GN_ERROR_MESSAGE = new Map<GN_ERROR_CODE, string>([
  [GN_ERROR_CODE.SUCCESS, 'operation succeeded'],
  [GN_ERROR_CODE.UNAUTHORIZED, 'unauthorized'],
  [GN_ERROR_CODE.UNPROCESSABLE_ENTITY, 'invalid request parameters'],
]);

export default GN_ERROR_MESSAGE;
