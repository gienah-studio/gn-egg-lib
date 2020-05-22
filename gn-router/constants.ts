export const GN_ROUTER_METHOD_METADATA = 'GN_ROUTER_METHOD_METADATA';
export const GN_ROUTER_PATH_METADATA = 'GN_ROUTER_PATH_METADATA';
export const GN_ROUTER_CONTROLLER_PREFIX_METADATA = 'GN_ROUTER_CONTROLLER_PREFIX_METADATA';
export const GN_ROUTER_MIDDLEWARE_METADATA = 'GN_ROUTER_MIDDLEWARE_METADATA';

export enum GN_ROUTER_METHOD {
  GET = 'GET',
  POST = 'POST',
}

export type GNRouterMiddleware =
  | string
  | {
      name: string;
      options: any;
    };
