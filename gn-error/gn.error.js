"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_errors_1 = require("egg-errors");
class GNError extends egg_errors_1.EggBaseError {
    constructor(code, data) {
        super({ code: code.getValue()[0], message: code.getValue()[1] || '' });
        if (data == null) {
            return;
        }
        if (data instanceof Error) {
            this.data = {
                message: data.message,
                stack: data.stack,
            };
        }
        else {
            this.data = data;
            this.message = code.getValue()[1] || data.message || (data.e && data.e.message);
        }
        if (data.ctx) {
            data.ctx.request.header && (this.requestHeader = data.ctx.request.header);
            data.ctx.request.body && (this.requestBody = data.ctx.request.body);
            data.ctx.request.query && (this.requestQuery = data.ctx.request.query);
            delete this.data.ctx;
        }
    }
}
exports.default = GNError;
