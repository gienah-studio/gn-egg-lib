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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUEwQjtBQUMxQiwrQ0FBMEM7QUFFMUMsNEJBQTRCO0FBQzVCLDJDQU9xQjtBQUNyQixxREFBOEM7QUFzRHJDLHFCQXRERixvQkFBVSxDQXNERTtBQXJEbkIsdURBQWdEO0FBcURJLHNCQXJEN0MscUJBQVcsQ0FxRDZDO0FBcEQvRCw2REFBc0Q7QUFvRGpDLHlCQXBEZCx3QkFBYyxDQW9EYztBQW5EbkMsMkRBQW9EO0FBbURmLHdCQW5EOUIsdUJBQWEsQ0FtRDhCO0FBakRsRCxNQUFNLGVBQWUsR0FBRyxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUMzQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLHFCQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBNkIsRUFBRSxFQUFFO1FBQ3RELE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxnREFBb0MsRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7YUFDbkMsTUFBTSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssYUFBYSxJQUFJLEtBQUssS0FBSyxVQUFVLElBQUksS0FBSyxLQUFLLFVBQVUsQ0FBQzthQUNsRyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLG1DQUF1QixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMscUNBQXlCLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHlDQUE2QixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDdEcsQ0FBQyxDQUF1QixFQUFFLFVBQThCLEVBQUUsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMxQixVQUFVLElBQUksR0FBRyxDQUFDLFVBQVU7d0JBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQzt3QkFDdEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLFVBQVUsbUJBQW1CLENBQUMsQ0FBQztpQkFDakU7cUJBQU0sSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNqQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLFVBQWlELENBQUM7b0JBQzVFLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTt3QkFDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ3ZDO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksbUJBQW1CLENBQUMsQ0FBQztxQkFDdkQ7aUJBQ0Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDMUU7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUM7WUFDRixNQUFNLE1BQU0sR0FBNEMsS0FBSyxXQUFXLEdBQUcsSUFBSTtnQkFDN0UsT0FBTyxJQUFLLFVBQVUsQ0FBQyxXQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDO1lBRUYsUUFBUSxNQUFNLEVBQUU7Z0JBQ2QsS0FBSyw0QkFBZ0IsQ0FBQyxHQUFHO29CQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2pFLE1BQU07Z0JBQ1IsS0FBSyw0QkFBZ0IsQ0FBQyxJQUFJO29CQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsZ0JBQWdCLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xFLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQyJ9