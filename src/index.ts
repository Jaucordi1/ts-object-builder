import {Builder, NextBuilderStep} from "./Builder";

export class ObjectBuilder {
    static new<T extends Record<string | number | symbol, any>>() {
        return new Builder<T, {}>({}) as unknown as NextBuilderStep<T, {}>;
    }
}
