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
export declare function register(zod: typeof z): void;
