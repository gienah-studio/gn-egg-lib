"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sleep = milliseconds => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
};
exports.default = sleep;
