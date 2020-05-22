import { GN_ROUTER_CONTROLLER_PREFIX_METADATA } from '../constants';

export default function RequestMapping(pathPrefix = ''): ClassDecorator {
  return targetClass => {
    Reflect.defineMetadata(GN_ROUTER_CONTROLLER_PREFIX_METADATA, pathPrefix, targetClass);
  };
}
