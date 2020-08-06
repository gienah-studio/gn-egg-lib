"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gn_error_1 = require("../gn-error");
function Authorize(...authRoles) {
    const authRole = (authRoles || []).reduce((c, e) => c | e.getValue(), 0);
    return function (target, key, descriptor) {
        if (authRoles.length === 0) {
            console.warn('please provide at least one AUTHORIZE_ROLE', target, key);
            return;
        }
        const originalFunction = descriptor.value;
        descriptor.value = async function (...args) {
            const { service, userId } = this;
            if (!userId) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNAUTHORIZED));
                return;
            }
            const role = await service.core.account.getRole(userId);
            if ((role & authRole) === 0) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNAUTHORIZED));
                return;
            }
            return await originalFunction.apply(this, args);
        };
    };
}
exports.default = Authorize;
