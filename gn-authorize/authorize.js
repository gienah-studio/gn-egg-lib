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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMENBQXFEO0FBRXJELFNBQXdCLFNBQVMsQ0FBQyxHQUFHLFNBQTJCO0lBQzlELE1BQU0sUUFBUSxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFOUQsT0FBTyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVTtRQUN4QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFFLE9BQU87U0FDUjtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUUxQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssV0FBbUMsR0FBRyxJQUFXO1lBQ3ZFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBTyxDQUFDLHdCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsT0FBTzthQUNSO1lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFeEQsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBTyxDQUFDLHdCQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsT0FBTzthQUNSO1lBRUQsT0FBTyxNQUFNLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBN0JELDRCQTZCQyJ9