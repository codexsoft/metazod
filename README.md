# metazod

Provides typed metadata feature to zod. Library installation

```shell
npm install --save-dev @codexsoft/metazod 
```

## Usage

Put this code into some `*.d.ts` file in your project:

```ts
import {} from '@codexsoft/metazod';

declare module 'zod' {
    interface IMeta {
        test: number;
        test2: string;
    }
}
```

Now you can write some typed metadata into schema:

```ts
const a = z.string().uuid().meta({test: 1, test2: ''})
```

And read it:

```ts
const b = a.getMeta().test;
```
