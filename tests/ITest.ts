type UnionToIntersection<T> =
    (T extends any ? (x: T) => any : never) extends
        (x: infer R) => any ? R : never

type UnionType = 'union' | 'type' | 'string'
type Intersection = {
    required: boolean;
} & (
    {
        optional1?: string;
    } | {
        optional2?: string;
    }
)

export interface ITest {
    requiredString: string;
    requiredNumber: number;
    requiredBoolean: boolean;
    requiredUnion: UnionType;
    requiredIntersection: UnionToIntersection<Intersection>;
    optionalString?: string;
    optionalNumber?: number;
    optionalBoolean?: boolean;
    optionalUnion?: UnionType;
    optionalIntersection?: UnionToIntersection<Intersection>;
}
