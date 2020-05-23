"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("@hapi/joi");
const constants_1 = require("../gn-router/constants");
const http_method_1 = require("../gn-constant/http.method");
const gn_error_1 = require("../gn-error");
function ParamValidate(params) {
    return function (target, key, descriptor) {
        const originalFunction = descriptor.value;
        const schema = joi.object().keys(params).unknown(true);
        descriptor.value = async function (...args) {
            if (!schema) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNPROCESSABLE_ENTITY, 'validation schema not found'));
                return;
            }
            const method = Reflect.getMetadata(constants_1.GN_ROUTER_METHOD_METADATA, target[key]);
            const data = method === http_method_1.default.GET ? this.ctx.request.query : this.ctx.request.body;
            const { error } = schema.validate(data);
            if (error) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNPROCESSABLE_ENTITY, error));
            }
            return await originalFunction.apply(this, ...args);
        };
    };
}
exports.default = ParamValidate;
