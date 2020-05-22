import { EggBaseError, ErrorOptions } from 'egg-errors';
import GN_ERROR_MESSAGE from './error.message';

export default class GNError extends EggBaseError<ErrorOptions> {
  constructor(code, data) {
    super({ message: GN_ERROR_MESSAGE[code], code });
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
      this.message = GN_ERROR_MESSAGE[code] || data.message || (data.e && data.e.message);
    }

    if (data.ctx) {
      this.requestHeader = data.ctx.request.header;
      this.requestBody = data.ctx.request.body;
      this.requestQuery = data.ctx.request.query;
      delete this.data.ctx;
    }
  }
}
