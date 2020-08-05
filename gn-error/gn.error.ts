import { EggBaseError, ErrorOptions } from 'egg-errors';
import GN_ERROR_MESSAGE from './error.message';
import GN_ERROR_CODE from './error.code';

export default class GNError extends EggBaseError<ErrorOptions> {
  constructor(code: GN_ERROR_CODE, data?: any) {
    super({ message: GN_ERROR_MESSAGE.get(code) || '', code: code.getValue() });
    if (data == null) {
      return;
    }

    if (data instanceof Error) {
      this.data = {
        message: data.message,
        stack: data.stack,
      };
    } else {
      this.data = data;
      this.message = GN_ERROR_MESSAGE.get(code) || data.message || (data.e && data.e.message);
    }

    if (data.ctx) {
      data.ctx.request.header && (this.requestHeader = data.ctx.request.header);
      data.ctx.request.body && (this.requestBody = data.ctx.request.body);
      data.ctx.request.query && (this.requestQuery = data.ctx.request.query);
      delete this.data.ctx;
    }
  }
}
