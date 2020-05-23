import * as joi from '@hapi/joi';
import GNBaseController from '../gn-base-controller';
import { GN_ROUTER_METHOD_METADATA } from '../gn-router/constants';
import GN_HTTP_METHOD from '../gn-constant/http.method';
import GNError, { GN_ERROR_CODE } from '../gn-error';

export default function ParamValidate(params: joi.SchemaMap<any>) {
  return function (target, key, descriptor) {
    const originalFunction = descriptor.value;
    const schema = joi.object().keys(params).unknown(true);

    descriptor.value = async function (this: GNBaseController, ...args: any[]) {
      if (!schema) {
        this.failure(new GNError(GN_ERROR_CODE.UNPROCESSABLE_ENTITY, 'validation schema not found'));
        return;
      }

      const method = Reflect.getMetadata(GN_ROUTER_METHOD_METADATA, target[key]);
      const data = method === GN_HTTP_METHOD.GET ? this.ctx.request.query : this.ctx.request.body;

      const { error } = schema.validate(data);
      if (error) {
        this.failure(new GNError(GN_ERROR_CODE.UNPROCESSABLE_ENTITY, error));
      }

      return await originalFunction.apply(this, ...args);
    };
  };
}
