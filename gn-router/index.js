"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMapping = exports.UseMiddleware = exports.RequestMapping = exports.GetMapping = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0QkFBMEI7QUFDMUIsK0NBQTBDO0FBRTFDLDRCQUE0QjtBQUM1QiwyQ0FPcUI7QUFDckIscURBQThDO0FBc0RyQyxxQkF0REYsb0JBQVUsQ0FzREU7QUFyRG5CLHVEQUFnRDtBQXFESSxzQkFyRDdDLHFCQUFXLENBcUQ2QztBQXBEL0QsNkRBQXNEO0FBb0RqQyx5QkFwRGQsd0JBQWMsQ0FvRGM7QUFuRG5DLDJEQUFvRDtBQW1EZix3QkFuRDlCLHVCQUFhLENBbUQ4QjtBQWpEbEQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFnQixFQUFFLEVBQUU7SUFDM0MsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUN2QixxQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQTZCLEVBQUUsRUFBRTtRQUN0RCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsZ0RBQW9DLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqSCxNQUFNLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLGFBQWEsSUFBSSxLQUFLLEtBQUssVUFBVSxJQUFJLEtBQUssS0FBSyxVQUFVLENBQUM7YUFDbEcsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7WUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQ0FBdUIsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3RSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLHFDQUF5QixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyx5Q0FBNkIsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ3RHLENBQUMsQ0FBdUIsRUFBRSxVQUE4QixFQUFFLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDMUIsVUFBVSxJQUFJLEdBQUcsQ0FBQyxVQUFVO3dCQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7d0JBQ3RDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixVQUFVLG1CQUFtQixDQUFDLENBQUM7aUJBQ2pFO3FCQUFNLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDakMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxVQUFpRCxDQUFDO29CQUM1RSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7d0JBQzlDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLG1CQUFtQixDQUFDLENBQUM7cUJBQ3ZEO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzFFO2dCQUNELE9BQU8sQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQTRDLEtBQUssV0FBVyxHQUFHLElBQUk7Z0JBQzdFLE9BQU8sSUFBSyxVQUFVLENBQUMsV0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQztZQUVGLFFBQVEsTUFBTSxFQUFFO2dCQUNkLEtBQUssNEJBQWdCLENBQUMsR0FBRztvQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRSxNQUFNO2dCQUNSLEtBQUssNEJBQWdCLENBQUMsSUFBSTtvQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNsRSxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFlLENBQUMifQ==