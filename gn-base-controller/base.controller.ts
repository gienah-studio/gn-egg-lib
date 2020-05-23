import { Controller } from 'egg';
import _ = require('lodash');
import GNError, { GN_ERROR_CODE } from '../gn-error';

export default class GNBaseController extends Controller {
  get userId() {
    return _.get(this.ctx, 'request.header.userid');
  }

  success(data) {
    const responseBody: any = {
      code: GN_ERROR_CODE.SUCCESS,
    };
    if (data !== undefined) {
      responseBody.data = data;
    }
    this.ctx.body = responseBody;
  }

  failure(e) {
    if (e instanceof GNError) {
      this.ctx.throw(e);
    } else {
      this.ctx.throw(
        new GNError(GN_ERROR_CODE.INTERNAL_SERVER_ERROR, e)
      );
    }
  }
}