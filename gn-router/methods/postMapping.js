"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const constants_1 = require("../constants");
function PostMapping(path) {
    return (target, _key, descriptor) => {
        controllers_1.default.set(target, target);
        Reflect.defineMetadata(constants_1.GN_ROUTER_PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(constants_1.GN_ROUTER_METHOD_METADATA, constants_1.GN_ROUTER_METHOD.POST, descriptor.value);
    };
}
exports.default = PostMapping;
