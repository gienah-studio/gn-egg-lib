"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const constants_1 = require("../constants");
function GetMapping(path) {
    return (target, _key, descriptor) => {
        controllers_1.default.set(target, target);
        Reflect.defineMetadata(constants_1.GN_ROUTER_PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(constants_1.GN_ROUTER_METHOD_METADATA, constants_1.GN_ROUTER_METHOD.GET, descriptor.value);
    };
}
exports.default = GetMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWFwcGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldE1hcHBpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBeUM7QUFDekMsNENBQW9HO0FBRXBHLFNBQXdCLFVBQVUsQ0FBQyxJQUFZO0lBQzdDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQ2xDLHFCQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsY0FBYyxDQUFDLG1DQUF1QixFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxxQ0FBeUIsRUFBRSw0QkFBZ0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVGLENBQUMsQ0FBQztBQUNKLENBQUM7QUFORCw2QkFNQyJ9