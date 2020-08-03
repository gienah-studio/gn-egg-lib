"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GNEnum {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return String(this.value);
    }
    getValue() {
        return this.value;
    }
    valueOf() {
        return this.value;
    }
    isEqual(value) {
        return this.value === value;
    }
}
exports.default = GNEnum;
