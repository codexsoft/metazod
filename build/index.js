"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(zod) {
    if (typeof zod.ZodType.prototype.meta !== 'undefined') {
        return;
    }
    zod.ZodType.prototype.meta = function (meta) {
        if (!meta) {
            return this._def.meta;
        }
        this._def.meta = Object.assign(Object.assign({}, this._def.meta), meta);
        return this;
    };
}
exports.register = register;
