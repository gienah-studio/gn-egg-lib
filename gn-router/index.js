"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const controllers_1 = require("./controllers");
const _ = require("lodash");
const constants_1 = require("./constants");
const getMapping_1 = require("./methods/getMapping");
exports.GetMapping = getMapping_1.default;
const postMapping_1 = require("./methods/postMapping");
exports.PostMapping = postMapping_1.default;
const requestMapping_1 = require("./methods/requestMapping");
exports.RequestMapping = requestMapping_1.default;
const useMiddleware_1 = require("./methods/useMiddleware");
exports.UseMiddleware = useMiddleware_1.default;
const generateRouters = (app) => {
    const { router } = app;
    controllers_1.default.forEach((controller) => {
        const controllerPrefix = Reflect.getMetadata(constants_1.GN_ROUTER_CONTROLLER_PREFIX_METADATA, controller.constructor) || '';
        Object.getOwnPropertyNames(controller)
            .filter((pName) => pName !== 'constructor' && pName !== 'pathName' && pName !== 'fullPath')
            .forEach((pName) => {
            const path = Reflect.getMetadata(constants_1.GN_ROUTER_PATH_METADATA, controller[pName]);
            const method = Reflect.getMetadata(constants_1.GN_ROUTER_METHOD_METADATA, controller[pName]);
            const middlewares = (Reflect.getMetadata(constants_1.GN_ROUTER_MIDDLEWARE_METADATA, controller[pName]) || []).reduce((c, middleware) => {
                if (_.isString(middleware)) {
                    middleware in app.middleware
                        ? c.push(app.middleware[middleware]())
                        : console.warn(`middleware: '${middleware}' cannot be found`);
                }
                else if (_.isObject(middleware)) {
                    const { name, options } = middleware;
                    if (_.isString(name) && name in app.middleware) {
                        c.push(app.middleware[name](options));
                    }
                    else {
                        console.warn(`middleware: '${name}' cannot be found`);
                    }
                }
                else {
                    console.warn(`middleware: '${JSON.stringify(middleware)}' format error`);
                }
                return c;
            }, []);
            const action = async function (...args) {
                return new controller.constructor(this)[pName](...args);
            };
            switch (method) {
                case constants_1.GN_ROUTER_METHOD.GET:
                    router.get(`${controllerPrefix}${path}`, ...middlewares, action);
                    break;
                case constants_1.GN_ROUTER_METHOD.POST:
                    router.post(`${controllerPrefix}${path}`, ...middlewares, action);
                    break;
                default:
                    break;
            }
        });
    });
};
exports.default = generateRouters;
