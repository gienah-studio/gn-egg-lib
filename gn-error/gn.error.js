"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_errors_1 = require("egg-errors");
const error_message_1 = require("./error.message");
class GNError extends egg_errors_1.EggBaseError {
    constructor(code, data) {
        super({ message: error_message_1.default[code], code });
        if (data == null) {
            return;
        }
        if (data instanceof Error) {
            this.data = {
                message: data.message,
                stack: data.stack,
            };
        }
        else {
            this.data = data;
            this.message = error_message_1.default[code] || data.message || (data.e && data.e.message);
        }
        if (data.ctx) {
            data.ctx.request.header && (this.requestHeader = data.ctx.request.header);
            data.ctx.request.body && (this.requestBody = data.ctx.request.body);
            data.ctx.request.query && (this.requestQuery = data.ctx.request.query);
            delete this.data.ctx;
        }
    }
}
exports.default = GNError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ24uZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnbi5lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RDtBQUN4RCxtREFBK0M7QUFFL0MsTUFBcUIsT0FBUSxTQUFRLHlCQUEwQjtJQUM3RCxZQUFZLElBQUksRUFBRSxJQUFVO1FBQzFCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksWUFBWSxLQUFLLEVBQUU7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRztnQkFDVixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzthQUNsQixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsdUJBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyRjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDdEI7SUFDSCxDQUFDO0NBQ0Y7QUF4QkQsMEJBd0JDIn0=