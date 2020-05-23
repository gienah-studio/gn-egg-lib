"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const constants_1 = require("../constants");
function PostMapping(path) {
    return (target, _key, descriptor) => {
        controllers_1.default.set(target, target);
        Reflect.defineMetadata(constants_1.GN_ROUTER_PATH_METADATA, path, descriptor.value);
        Reflect.defineMetadata(constants_1.GN_ROUTER_METHOD_METADATA, constants_1.GN_ROUTER_METHOD.POST, descriptor.value);
    };
}
exports.default = PostMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdE1hcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0TWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUF5QztBQUN6Qyw0Q0FBb0c7QUFFcEcsU0FBd0IsV0FBVyxDQUFDLElBQVk7SUFDOUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUU7UUFDbEMscUJBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsbUNBQXVCLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsY0FBYyxDQUFDLHFDQUF5QixFQUFFLDRCQUFnQixDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQU5ELDhCQU1DIn0=