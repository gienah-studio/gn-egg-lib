import { GN_ROUTER_MIDDLEWARE_METADATA, GNRouterMiddleware } from '../constants';

export default function UseMiddleware(...middlewares: GNRouterMiddleware[]) {
  return (_target, _key, descriptor) => {
    Reflect.defineMetadata(GN_ROUTER_MIDDLEWARE_METADATA, middlewares, descriptor.value);
  };
}
