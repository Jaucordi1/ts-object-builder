import type {ITest} from "./ITest";
import type {RequiredProps} from "../src/Builder";

export const REQUIRED_ONLY: Pick<ITest, RequiredProps<ITest>> = {
    requiredString: 'test',
    requiredNumber: 1,
    requiredBoolean: true,
    requiredUnion: 'union',
    requiredIntersection: {
        required: true,
        optional1: 'test',
    },
};

export const REQUIRED_AND_OPTIONALS: ITest = {
    ...REQUIRED_ONLY,
    optionalString: 'ok',
    optionalNumber: 2,
    optionalBoolean: false,
    optionalUnion: 'type',
    optionalIntersection: {
        required: false,
        optional2: '2',
    },
};
