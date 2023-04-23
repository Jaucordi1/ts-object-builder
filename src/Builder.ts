// Object props union types
// export type ObjectProps<T extends Record<string | number, any>> = Exclude<keyof T, symbol>;
export type RequiredProps<T extends Record<string | number | symbol, any>> = Exclude<{
    [K in keyof T]-?: {} extends Record<K, T[K]> ? never : K;
}[keyof T], undefined>;
export type OptionalProps<T extends Record<string | number | symbol, any>> = Exclude<{
    [K in keyof T]-?: {} extends Record<K, T[K]> ? K : never;
}[keyof T], undefined>;

// Objects props difference union types
export type RemainingProps<T extends Record<string | number | symbol, any>, S extends Partial<T>> = keyof Omit<T, keyof S>;
export type RemainingRequiredProps<T extends Record<string | number | symbol, any>, S extends Partial<T>> = Exclude<RemainingProps<T, S>, OptionalProps<T>>;
export type RemainingOptionalProps<T extends Record<string | number | symbol, any>, S extends Partial<T>> = Exclude<RemainingProps<T, S>, RequiredProps<T>>;

// Union type of the next missing props accepted (required first, then optionals)
export type NextBuilderProps<T extends Record<string | number | symbol, any>, S extends Partial<T>> = RemainingRequiredProps<T, S> extends never
    ? RemainingOptionalProps<T, S> extends never
        ? never
        : RemainingOptionalProps<T, S>
    : RemainingRequiredProps<T, S>;

// Builder's interface for given state (S)
export type NextBuilderStep<T extends Record<string | number | symbol, any>, S extends Partial<T>> = NextBuilderProps<T, S> extends never
    ? IBuild<T>
    : NextBuilderProps<T, S> extends RequiredProps<T>
        ? IWith<T, S>
        : NextBuilderProps<T, S> extends OptionalProps<T>
            ? IWith<T, S> & IBuild<T>
            : never;

/**
 * Interface for showing a `build` method when available
 */
export interface IBuild<T extends Record<string | number | symbol, any>> {
    build(): T;
}

/**
 * Interface for showing a smart `with` method for adding missing keys when available
 */
export interface IWith<T extends Record<string | number | symbol, any>, S extends Partial<T>> {
    with<K extends NextBuilderProps<T, S>, V extends T[K]>(
        key: K,
        value: V
    ): NextBuilderStep<T, S & Required<Record<K, V>>>;
}

/**
 * Effective Builder class implementing `with` & `build` methods
 */
export class Builder<T extends Record<string | number | symbol, any>, S extends Partial<T>> implements IWith<T, S>, IBuild<T> {
    private readonly _target: Partial<T>;
    constructor(base: S) {
        this._target = base;
    }

    with<K extends NextBuilderProps<T, S>, V extends T[K]>(
        key: K,
        value: V
    ): NextBuilderStep<T, S & Required<Record<K, V>>> {
        return Object.assign(this, {_target: {...this._target, [key]: value}});
    }

    build(): T {
        return this._target as T;
    }
}
