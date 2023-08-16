import z from 'zod';

declare module 'zod' {
    interface IMeta {
    }

    interface ZodTypeDef {
        meta?: IMeta;
    }

    interface ZodType {
        meta(meta: IMeta): this;
        meta(): Partial<IMeta>;
        meta<T extends {}>(): Partial<T>;
    }
}

export function register(zod: typeof z) {
    if (typeof zod.ZodType.prototype.meta !== 'undefined') {
        return;
    }

    zod.ZodType.prototype.meta = function (meta?: z.IMeta) {
        if (!meta) {
            return this._def.meta;
        }

        this._def.meta = { ...this._def.meta, ...meta };
        return this;
    };
}
