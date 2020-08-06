"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gn_enum_1 = require("../gn-enum");
class GN_AUTHORIZE_ROLE extends gn_enum_1.default {
}
exports.default = GN_AUTHORIZE_ROLE;
GN_AUTHORIZE_ROLE.ADMIN_USER = new GN_AUTHORIZE_ROLE(1);
GN_AUTHORIZE_ROLE.NORMAL_USER = new GN_AUTHORIZE_ROLE(1 << 1);
