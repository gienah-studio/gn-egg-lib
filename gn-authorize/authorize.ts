import GNBaseController from '../gn-base-controller';
import AUTHORIZE_ROLE from './authorize.role';
import GNError, { GN_ERROR_CODE } from '../gn-error';

export default function Authorize(...authRoles: AUTHORIZE_ROLE[]) {
  const authRole = (authRoles || []).reduce((c, e) => c | e, 0);

  return function (_target, _key, descriptor) {
    if (authRoles.length === 0) {
      console.warn('Please provide at least one AUTHORIZE_ROLE', _target, _key);
      return;
    }

    const originalFunction = descriptor.value;

    descriptor.value = async function (this: GNBaseController, ...args: any[]) {
      const { ctx, service, userId } = this;

      if (!userId) {
        this.failure(new GNError(GN_ERROR_CODE.UNAUTHORIZED));
        return;
      }

      const { role } = await service.user.getUserInfo(userId);

      if ((role & authRole) === 0) {
        this.failure(new GNError(GN_ERROR_CODE.UNAUTHORIZED));
        return;
      }

      return await originalFunction.apply(this, ...args);
    };
  };
}
