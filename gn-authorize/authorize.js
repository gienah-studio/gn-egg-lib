"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gn_error_1 = require("../gn-error");
function Authorize(...authRoles) {
    const authRole = (authRoles || []).reduce((c, e) => c | e, 0);
    return function (_target, _key, descriptor) {
        if (authRoles.length === 0) {
            console.warn('Please provide at least one AUTHORIZE_ROLE', _target, _key);
            return;
        }
        const originalFunction = descriptor.value;
        descriptor.value = async function (...args) {
            const { ctx, service, userId } = this;
            if (!userId) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNAUTHORIZED));
                return;
            }
            const { role } = await service.user.getUserInfo(userId);
            if ((role & authRole) === 0) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNAUTHORIZED));
                return;
            }
            return await originalFunction.apply(this, ...args);
        };
    };
}
exports.default = Authorize;
