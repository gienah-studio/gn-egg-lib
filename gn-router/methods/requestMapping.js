"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function RequestMapping(pathPrefix = '') {
    return targetClass => {
        Reflect.defineMetadata(constants_1.GN_ROUTER_CONTROLLER_PREFIX_METADATA, pathPrefix, targetClass);
    };
}
exports.default = RequestMapping;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdE1hcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0TWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFvRTtBQUVwRSxTQUF3QixjQUFjLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDcEQsT0FBTyxXQUFXLENBQUMsRUFBRTtRQUNuQixPQUFPLENBQUMsY0FBYyxDQUFDLGdEQUFvQyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN4RixDQUFDLENBQUM7QUFDSixDQUFDO0FBSkQsaUNBSUMifQ==