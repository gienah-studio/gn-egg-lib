import 'reflect-metadata';
import controllerMap from './controllers';
import { Controller, Context, Application } from 'egg';
import * as _ from 'lodash';
import {
  GN_ROUTER_PATH_METADATA,
  GN_ROUTER_METHOD_METADATA,
  GN_ROUTER_METHOD,
  GN_ROUTER_CONTROLLER_PREFIX_METADATA,
  GN_ROUTER_MIDDLEWARE_METADATA,
  GNRouterMiddleware,
} from './constants';
import GetMapping from './methods/getMapping';
import PostMapping from './methods/postMapping';
import RequestMapping from './methods/requestMapping';
import UseMiddleware from './methods/useMiddleware';

const generateRouters = (app: Application) => {
  const { router } = app;
  controllerMap.forEach((controller: typeof Controller) => {
    const controllerPrefix = Reflect.getMetadata(GN_ROUTER_CONTROLLER_PREFIX_METADATA, controller.constructor) || '';
    Object.getOwnPropertyNames(controller)
      .filter((pName: string) => pName !== 'constructor' && pName !== 'pathName' && pName !== 'fullPath')
      .forEach((pName: string) => {
        const path = Reflect.getMetadata(GN_ROUTER_PATH_METADATA, controller[pName]);
        const method = Reflect.getMetadata(GN_ROUTER_METHOD_METADATA, controller[pName]);
        const middlewares = (Reflect.getMetadata(GN_ROUTER_MIDDLEWARE_METADATA, controller[pName]) || []).reduce(
          (c: GNRouterMiddleware[], middleware: GNRouterMiddleware) => {
            if (_.isString(middleware)) {
              middleware in app.middleware
                ? c.push(app.middleware[middleware]())
                : console.warn(`middleware: '${middleware}' cannot be found`);
            } else if (_.isObject(middleware)) {
              const { name, options } = middleware as Exclude<GNRouterMiddleware, string>;
              if (_.isString(name) && name in app.middleware) {
                c.push(app.middleware[name](options));
              } else {
                console.warn(`middleware: '${name}' cannot be found`);
              }
            } else {
              console.warn(`middleware: '${JSON.stringify(middleware)}' format error`);
            }
            return c;
          },
          []
        );
        const action: (this: Context, ...args: any[]) => void = async function (...args) {
          return new (controller.constructor as any)(this)[pName](...args);
        };

        switch (method) {
          case GN_ROUTER_METHOD.GET:
            router.get(`${controllerPrefix}${path}`, ...middlewares, action);
            break;
          case GN_ROUTER_METHOD.POST:
            router.post(`${controllerPrefix}${path}`, ...middlewares, action);
            break;
          default:
            break;
        }
      });
  });
};

export default generateRouters;

export { GetMapping, RequestMapping, UseMiddleware, PostMapping };
