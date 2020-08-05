import GNBaseController from '../gn-base-controller';
import GNError, { GN_ERROR_CODE } from '../gn-error';
import AUTHORIZE_ROLE from './authorize.role';
import * as _ from 'lodash';

export default function Authorize(...authRoles: AUTHORIZE_ROLE[]) {
  const authRole = (authRoles || []).reduce((c, e) => c | e.getValue(), 0);

  return function (target, key, descriptor) {
    if (authRoles.length === 0) {
      console.warn('Please provide at least one AUTHORIZE_ROLE', target, key);
      return;
    }

    const originalFunction = descriptor.value;

    descriptor.value = async function (this: GNBaseController, ...args: any[]) {
      const { service, ctx } = this;

      const userId = _.get(ctx, 'headers.userId', _.get(ctx, 'session.user.userId'));
      if (!userId) {
        this.failure(new GNError(GN_ERROR_CODE.UNAUTHORIZED));
        return;
      }

      const role = await service.core.account.getRole(userId);

      if ((role & authRole) === 0) {
        this.failure(new GNError(GN_ERROR_CODE.UNAUTHORIZED));
        return;
      }

      return await originalFunction.apply(this, args);
    };
  };
}
