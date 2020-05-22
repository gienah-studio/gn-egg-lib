"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function UseMiddleware(...middlewares) {
    return (_target, _key, descriptor) => {
        Reflect.defineMetadata(constants_1.GN_ROUTER_MIDDLEWARE_METADATA, middlewares, descriptor.value);
    };
}
exports.default = UseMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZU1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUY7QUFFakYsU0FBd0IsYUFBYSxDQUFDLEdBQUcsV0FBaUM7SUFDeEUsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDbkMsT0FBTyxDQUFDLGNBQWMsQ0FBQyx5Q0FBNkIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFKRCxnQ0FJQyJ9