import {REQUIRED_AND_OPTIONALS, REQUIRED_ONLY} from './dataset';
import {RequiredProps} from "../src/Builder";
import {ITest} from "./ITest";
import {ObjectBuilder} from "../src/index";

describe('Builder', function () {
    test('Required props', function () {
        const requiredProps = Object.keys(REQUIRED_ONLY) as RequiredProps<ITest>[];
        expect(requiredProps).toContain('requiredString');
        expect(requiredProps).toContain('requiredNumber');
        expect(requiredProps).toContain('requiredBoolean');
        expect(requiredProps).toContain('requiredUnion');
        expect(requiredProps).toContain('requiredIntersection');
        expect(requiredProps).not.toContain('optionalString');
        expect(requiredProps).not.toContain('optionalNumber');
        expect(requiredProps).not.toContain('optionalBoolean');
        expect(requiredProps).not.toContain('optionalUnion');
        expect(requiredProps).not.toContain('optionalIntersection');

        expect(
            ObjectBuilder
                .new<ITest>()
                .with('requiredString', REQUIRED_ONLY.requiredString)
                .with('requiredNumber', REQUIRED_ONLY.requiredNumber)
                .with('requiredBoolean', REQUIRED_ONLY.requiredBoolean)
                .with('requiredUnion', REQUIRED_ONLY.requiredUnion)
                .with('requiredIntersection', REQUIRED_ONLY.requiredIntersection)
                .with('optionalString', undefined)
                .with('optionalNumber', undefined)
                .with('optionalBoolean', undefined)
                .with('optionalUnion', undefined)
                .with('optionalIntersection', undefined)
                .build()
        ).toEqual(REQUIRED_ONLY);
    });
    test('All props', function () {
        const allProps = Object.keys(REQUIRED_AND_OPTIONALS) as (keyof ITest)[];
        expect(allProps).toContain('requiredString');
        expect(allProps).toContain('requiredNumber');
        expect(allProps).toContain('requiredBoolean');
        expect(allProps).toContain('requiredUnion');
        expect(allProps).toContain('requiredIntersection');
        expect(allProps).toContain('optionalString');
        expect(allProps).toContain('optionalNumber');
        expect(allProps).toContain('optionalBoolean');
        expect(allProps).toContain('optionalUnion');
        expect(allProps).toContain('optionalIntersection');

        expect(
            ObjectBuilder
                .new<ITest>()
                .with('requiredString', REQUIRED_AND_OPTIONALS.requiredString)
                .with('requiredNumber', REQUIRED_AND_OPTIONALS.requiredNumber)
                .with('requiredBoolean', REQUIRED_AND_OPTIONALS.requiredBoolean)
                .with('requiredUnion', REQUIRED_AND_OPTIONALS.requiredUnion)
                .with('requiredIntersection', REQUIRED_AND_OPTIONALS.requiredIntersection)
                .with('optionalString', REQUIRED_AND_OPTIONALS.optionalString)
                .with('optionalNumber', REQUIRED_AND_OPTIONALS.optionalNumber)
                .with('optionalBoolean', REQUIRED_AND_OPTIONALS.optionalBoolean)
                .with('optionalUnion', REQUIRED_AND_OPTIONALS.optionalUnion)
                .with('optionalIntersection', REQUIRED_AND_OPTIONALS.optionalIntersection)
                .build()
        ).toEqual(REQUIRED_AND_OPTIONALS);
    });
});
