"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("@hapi/joi");
const constants_1 = require("../gn-router/constants");
const http_method_1 = require("../gn-constant/http.method");
const gn_error_1 = require("../gn-error");
function ParamValidate(params) {
    return function (target, key, descriptor) {
        const originalFunction = descriptor.value;
        const schema = joi.object().keys(params).unknown(true);
        descriptor.value = async function (...args) {
            if (!schema) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNPROCESSABLE_ENTITY, 'validation schema not found'));
                return;
            }
            const method = Reflect.getMetadata(constants_1.GN_ROUTER_METHOD_METADATA, target[key]);
            const data = method === http_method_1.default.GET ? this.ctx.request.query : this.ctx.request.body;
            const { error } = schema.validate(data);
            if (error) {
                this.failure(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.UNPROCESSABLE_ENTITY, error));
            }
            return await originalFunction.apply(this, ...args);
        };
    };
}
exports.default = ParamValidate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0udmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcmFtLnZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBaUM7QUFFakMsc0RBQW1FO0FBQ25FLDREQUF3RDtBQUN4RCwwQ0FBcUQ7QUFFckQsU0FBd0IsYUFBYSxDQUFDLE1BQTBCO0lBQzlELE9BQU8sVUFBVSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVU7UUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQzFDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxXQUFtQyxHQUFHLElBQVc7WUFDdkUsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQU8sQ0FBQyx3QkFBYSxDQUFDLG9CQUFvQixFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDN0YsT0FBTzthQUNSO1lBRUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxxQ0FBeUIsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRSxNQUFNLElBQUksR0FBRyxNQUFNLEtBQUsscUJBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBRTVGLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBTyxDQUFDLHdCQUFhLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0RTtZQUVELE9BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXRCRCxnQ0FzQkMifQ==