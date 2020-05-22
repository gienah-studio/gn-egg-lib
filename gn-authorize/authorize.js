"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_code_1 = require("../gn-constant/http.code");
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
                ctx.status = http_code_1.default.UNAUTHORIZED;
                return;
            }
            const { role } = await service.user.getUserInfo(userId);
            if ((role & authRole) === 0) {
                ctx.status = http_code_1.default.UNAUTHORIZED;
                return;
            }
            originalFunction.apply(this, ...args);
        };
    };
}
exports.default = Authorize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0RBQW9EO0FBSXBELFNBQXdCLFNBQVMsQ0FBQyxHQUFHLFNBQTJCO0lBQzlELE1BQU0sUUFBUSxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFOUQsT0FBTyxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVTtRQUN4QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFFLE9BQU87U0FDUjtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUUxQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssV0FBbUMsR0FBRyxJQUFXO1lBQ3ZFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUV0QyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxNQUFNLEdBQUcsbUJBQVksQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZDLE9BQU87YUFDUjtZQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixHQUFHLENBQUMsTUFBTSxHQUFHLG1CQUFZLENBQUMsWUFBWSxDQUFDO2dCQUN2QyxPQUFPO2FBQ1I7WUFFRCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTdCRCw0QkE2QkMifQ==