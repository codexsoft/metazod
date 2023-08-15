import z from 'zod';
declare module 'zod' {
    interface IMeta {
    }
    interface ZodTypeDef {
        meta?: IMeta;
    }
    interface ZodType {
        getMeta<T extends object = IMeta>(): T;
        meta<T extends object = IMeta>(meta: T): this;
    }
}
export declare function register(zod: typeof z): void;
