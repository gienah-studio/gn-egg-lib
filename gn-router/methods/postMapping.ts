import controllers from '../controllers';
import { GN_ROUTER_PATH_METADATA, GN_ROUTER_METHOD_METADATA, GN_ROUTER_METHOD } from '../constants';

export default function PostMapping(path: string) {
  return (target, _key, descriptor) => {
    controllers.set(target, target);
    Reflect.defineMetadata(GN_ROUTER_PATH_METADATA, path, descriptor.value);
    Reflect.defineMetadata(GN_ROUTER_METHOD_METADATA, GN_ROUTER_METHOD.POST, descriptor.value);
  };
}
