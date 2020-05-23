import GN_ERROR_CODE from './error.code';

const GN_ERROR_MESSAGE = {
  [GN_ERROR_CODE.SUCCESS]: 'operation succeeded',
  [GN_ERROR_CODE.ACCOUNT_NOT_FOUND]: 'account not found',
  [GN_ERROR_CODE.RESTORE_AUTH_STATE_ERROR]: 'restore auth state failed',
  [GN_ERROR_CODE.UNPROCESSABLE_ENTITY]: 'invalid request parameters',
  [GN_ERROR_CODE.UNAUTHORIZED]: 'unauthroized'
};

export default GN_ERROR_MESSAGE;
