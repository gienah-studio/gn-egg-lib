"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_errors_1 = require("egg-errors");
const error_message_1 = require("./error.message");
class GNError extends egg_errors_1.EggBaseError {
    constructor(code, data) {
        super({ message: error_message_1.default[code], code });
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
            this.message = error_message_1.default[code] || data.message || (data.e && data.e.message);
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
