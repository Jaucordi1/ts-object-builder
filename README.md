#  TypeScript (type-safe) Object Builder
### A TypeScript library that gives you programmatic interface to build any desired specific object

---
## Install
```shell
# npm
npm install --save ts-object-builder
```

## Use

```typescript
import {ObjectBuilder} from "ts-object-builder";

interface MyObject {
    name: string;
    age?: number;
    quantity: number;
    having: boolean;
}

const myObject = ObjectBuilder
    .new<MyObject>()
    .with('name', 'Object name')
    .with('quantity', 1)
    .with('having', true)
    // .with('age', 10)
    .build();
```

## Dev
You need a `.npmrc` file containing following keys _(replace values between {})_
```.npmrc
registry=https://registry.npmjs.org/
@{USERNAME}:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken={AUTH_TOKEN}
```