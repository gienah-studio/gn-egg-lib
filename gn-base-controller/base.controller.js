"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const _ = require("lodash");
const gn_error_1 = require("../gn-error");
class GNBaseController extends egg_1.Controller {
    get userId() {
        return _.get(this.ctx, 'session.user.userId') || _.get(this.ctx, 'request.header.userid');
    }
    success(data) {
        const responseBody = {
            code: gn_error_1.GN_ERROR_CODE.SUCCESS.getValue()[0],
        };
        if (data !== undefined) {
            responseBody.data = data;
        }
        this.ctx.body = responseBody;
    }
    failure(e) {
        if (e instanceof gn_error_1.default) {
            this.ctx.throw(e);
        }
        else {
            this.ctx.throw(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.INTERNAL_SERVER_ERROR, e));
        }
    }
}
exports.default = GNBaseController;
