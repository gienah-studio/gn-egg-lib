"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_code_1 = require("./error.code");
const GN_ERROR_MESSAGE = {
    [error_code_1.default.SUCCESS]: 'operation succeeded',
    [error_code_1.default.ACCOUNT_NOT_FOUND]: 'account not found',
    [error_code_1.default.RESTORE_AUTH_STATE_ERROR]: 'restore auth state failed',
    [error_code_1.default.UNPROCESSABLE_ENTITY]: 'invalid request parameters',
    [error_code_1.default.UNAUTHORIZED]: 'unauthroized'
};
exports.default = GN_ERROR_MESSAGE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yLm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBeUM7QUFFekMsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixDQUFDLG9CQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUscUJBQXFCO0lBQzlDLENBQUMsb0JBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLG1CQUFtQjtJQUN0RCxDQUFDLG9CQUFhLENBQUMsd0JBQXdCLENBQUMsRUFBRSwyQkFBMkI7SUFDckUsQ0FBQyxvQkFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsNEJBQTRCO0lBQ2xFLENBQUMsb0JBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxjQUFjO0NBQzdDLENBQUM7QUFFRixrQkFBZSxnQkFBZ0IsQ0FBQyJ9