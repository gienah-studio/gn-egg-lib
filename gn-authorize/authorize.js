"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gn_error_1 = require("../gn-error");
const _ = require("lodash");
function Authorize(...authRoles) {
    const authRole = (authRoles || []).reduce((c, e) => c | e.getValue(), 0);
    return function (target, key, descriptor) {
        if (authRoles.length === 0) {
            console.warn('Please provide at least one AUTHORIZE_ROLE', target, key);
            return;
        }
        const originalFunction = descriptor.value;
        descriptor.value = async function (...args) {
            const { service, ctx } = this;
            const userId = _.get(ctx, 'headers.userId', _.get(ctx, 'session.user.userId'));
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
