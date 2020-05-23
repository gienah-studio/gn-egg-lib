"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function RequestMapping(pathPrefix = '') {
    return targetClass => {
        Reflect.defineMetadata(constants_1.GN_ROUTER_CONTROLLER_PREFIX_METADATA, pathPrefix, targetClass);
    };
}
exports.default = RequestMapping;
