"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function UseMiddleware(...middlewares) {
    return (_target, _key, descriptor) => {
        Reflect.defineMetadata(constants_1.GN_ROUTER_MIDDLEWARE_METADATA, middlewares, descriptor.value);
    };
}
exports.default = UseMiddleware;
