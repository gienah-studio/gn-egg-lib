import GN_HTTP_CODE from '../gn-constant/http.code';
import GNBaseController from '../gn-base-controller';
import AUTHORIZE_ROLE from './authorize.role';

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
        ctx.status = GN_HTTP_CODE.UNAUTHORIZED;
        return;
      }

      const { role } = await service.user.getUserInfo(userId);

      if ((role & authRole) === 0) {
        ctx.status = GN_HTTP_CODE.UNAUTHORIZED;
        return;
      }

      originalFunction.apply(this, ...args);
    };
  };
}
