"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const _ = require("lodash");
const gn_error_1 = require("../gn-error");
class GNBaseController extends egg_1.Controller {
    get userId() {
        return _.get(this.ctx, 'request.header.userid');
    }
    success(data) {
        const responseBody = {
            code: gn_error_1.GN_ERROR_CODE.SUCCESS,
        };
        if (data !== undefined) {
            responseBody.data = data;
        }
        this.ctx.body = responseBody;
    }
    failure(e) {
        if (e instanceof gn_error_1.default) {
            this.ctx.throw(e);
        }
        else {
            this.ctx.throw(new gn_error_1.default(gn_error_1.GN_ERROR_CODE.INTERNAL_SERVER_ERROR, e));
        }
    }
}
exports.default = GNBaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQWlDO0FBQ2pDLDRCQUE2QjtBQUM3QiwwQ0FBcUQ7QUFFckQsTUFBcUIsZ0JBQWlCLFNBQVEsZ0JBQVU7SUFDdEQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUk7UUFDVixNQUFNLFlBQVksR0FBUTtZQUN4QixJQUFJLEVBQUUsd0JBQWEsQ0FBQyxPQUFPO1NBQzVCLENBQUM7UUFDRixJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDL0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLFlBQVksa0JBQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ1osSUFBSSxrQkFBTyxDQUFDLHdCQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQ3BELENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRjtBQXhCRCxtQ0F3QkMifQ==