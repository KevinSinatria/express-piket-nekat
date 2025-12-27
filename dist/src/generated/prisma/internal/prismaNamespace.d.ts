import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.1.0
 * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly cache: "cache";
    readonly cache_locks: "cache_locks";
    readonly failed_jobs: "failed_jobs";
    readonly job_batches: "job_batches";
    readonly jobs: "jobs";
    readonly password_reset_tokens: "password_reset_tokens";
    readonly personal_access_tokens: "personal_access_tokens";
    readonly sessions: "sessions";
    readonly classes: "classes";
    readonly detail_students: "detail_students";
    readonly students: "students";
    readonly users: "users";
    readonly violation_categories: "violation_categories";
    readonly violation_category: "violation_category";
    readonly violation_type: "violation_type";
    readonly violations: "violations";
    readonly subjects: "subjects";
    readonly PiketSchedule: "PiketSchedule";
    readonly teacher_assignments: "teacher_assignments";
    readonly student_permits: "student_permits";
    readonly student_permit_details: "student_permit_details";
    readonly year_period: "year_period";
    readonly roles: "roles";
    readonly user_role: "user_role";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "cache" | "cache_locks" | "failed_jobs" | "job_batches" | "jobs" | "password_reset_tokens" | "personal_access_tokens" | "sessions" | "classes" | "detail_students" | "students" | "users" | "violation_categories" | "violation_category" | "violation_type" | "violations" | "subjects" | "piketSchedule" | "teacher_assignments" | "student_permits" | "student_permit_details" | "year_period" | "roles" | "user_role";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        cache: {
            payload: Prisma.$cachePayload<ExtArgs>;
            fields: Prisma.cacheFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cacheFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cacheFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                findFirst: {
                    args: Prisma.cacheFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cacheFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                findMany: {
                    args: Prisma.cacheFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>[];
                };
                create: {
                    args: Prisma.cacheCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                createMany: {
                    args: Prisma.cacheCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cacheCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>[];
                };
                delete: {
                    args: Prisma.cacheDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                update: {
                    args: Prisma.cacheUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                deleteMany: {
                    args: Prisma.cacheDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cacheUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cacheUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>[];
                };
                upsert: {
                    args: Prisma.cacheUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cachePayload>;
                };
                aggregate: {
                    args: Prisma.CacheAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCache>;
                };
                groupBy: {
                    args: Prisma.cacheGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CacheGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cacheCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CacheCountAggregateOutputType> | number;
                };
            };
        };
        cache_locks: {
            payload: Prisma.$cache_locksPayload<ExtArgs>;
            fields: Prisma.cache_locksFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cache_locksFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cache_locksFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                findFirst: {
                    args: Prisma.cache_locksFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cache_locksFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                findMany: {
                    args: Prisma.cache_locksFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>[];
                };
                create: {
                    args: Prisma.cache_locksCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                createMany: {
                    args: Prisma.cache_locksCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cache_locksCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>[];
                };
                delete: {
                    args: Prisma.cache_locksDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                update: {
                    args: Prisma.cache_locksUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                deleteMany: {
                    args: Prisma.cache_locksDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cache_locksUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cache_locksUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>[];
                };
                upsert: {
                    args: Prisma.cache_locksUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cache_locksPayload>;
                };
                aggregate: {
                    args: Prisma.Cache_locksAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCache_locks>;
                };
                groupBy: {
                    args: Prisma.cache_locksGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cache_locksGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cache_locksCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Cache_locksCountAggregateOutputType> | number;
                };
            };
        };
        failed_jobs: {
            payload: Prisma.$failed_jobsPayload<ExtArgs>;
            fields: Prisma.failed_jobsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.failed_jobsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.failed_jobsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findFirst: {
                    args: Prisma.failed_jobsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.failed_jobsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                findMany: {
                    args: Prisma.failed_jobsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                create: {
                    args: Prisma.failed_jobsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                createMany: {
                    args: Prisma.failed_jobsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.failed_jobsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                delete: {
                    args: Prisma.failed_jobsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                update: {
                    args: Prisma.failed_jobsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                deleteMany: {
                    args: Prisma.failed_jobsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.failed_jobsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.failed_jobsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>[];
                };
                upsert: {
                    args: Prisma.failed_jobsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$failed_jobsPayload>;
                };
                aggregate: {
                    args: Prisma.Failed_jobsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFailed_jobs>;
                };
                groupBy: {
                    args: Prisma.failed_jobsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.failed_jobsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Failed_jobsCountAggregateOutputType> | number;
                };
            };
        };
        job_batches: {
            payload: Prisma.$job_batchesPayload<ExtArgs>;
            fields: Prisma.job_batchesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.job_batchesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.job_batchesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                findFirst: {
                    args: Prisma.job_batchesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.job_batchesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                findMany: {
                    args: Prisma.job_batchesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>[];
                };
                create: {
                    args: Prisma.job_batchesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                createMany: {
                    args: Prisma.job_batchesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.job_batchesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>[];
                };
                delete: {
                    args: Prisma.job_batchesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                update: {
                    args: Prisma.job_batchesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                deleteMany: {
                    args: Prisma.job_batchesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.job_batchesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.job_batchesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>[];
                };
                upsert: {
                    args: Prisma.job_batchesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$job_batchesPayload>;
                };
                aggregate: {
                    args: Prisma.Job_batchesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJob_batches>;
                };
                groupBy: {
                    args: Prisma.job_batchesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Job_batchesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.job_batchesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Job_batchesCountAggregateOutputType> | number;
                };
            };
        };
        jobs: {
            payload: Prisma.$jobsPayload<ExtArgs>;
            fields: Prisma.jobsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.jobsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                findFirst: {
                    args: Prisma.jobsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                findMany: {
                    args: Prisma.jobsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>[];
                };
                create: {
                    args: Prisma.jobsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                createMany: {
                    args: Prisma.jobsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.jobsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>[];
                };
                delete: {
                    args: Prisma.jobsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                update: {
                    args: Prisma.jobsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                deleteMany: {
                    args: Prisma.jobsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.jobsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.jobsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>[];
                };
                upsert: {
                    args: Prisma.jobsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$jobsPayload>;
                };
                aggregate: {
                    args: Prisma.JobsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJobs>;
                };
                groupBy: {
                    args: Prisma.jobsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.jobsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JobsCountAggregateOutputType> | number;
                };
            };
        };
        password_reset_tokens: {
            payload: Prisma.$password_reset_tokensPayload<ExtArgs>;
            fields: Prisma.password_reset_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                findMany: {
                    args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[];
                };
                create: {
                    args: Prisma.password_reset_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                createMany: {
                    args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.password_reset_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[];
                };
                delete: {
                    args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                update: {
                    args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.password_reset_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePassword_reset_tokens>;
                };
                groupBy: {
                    args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Password_reset_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.password_reset_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Password_reset_tokensCountAggregateOutputType> | number;
                };
            };
        };
        personal_access_tokens: {
            payload: Prisma.$personal_access_tokensPayload<ExtArgs>;
            fields: Prisma.personal_access_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personal_access_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.personal_access_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personal_access_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                findMany: {
                    args: Prisma.personal_access_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                create: {
                    args: Prisma.personal_access_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                createMany: {
                    args: Prisma.personal_access_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.personal_access_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                delete: {
                    args: Prisma.personal_access_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                update: {
                    args: Prisma.personal_access_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.personal_access_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personal_access_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.personal_access_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.personal_access_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Personal_access_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonal_access_tokens>;
                };
                groupBy: {
                    args: Prisma.personal_access_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personal_access_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Personal_access_tokensCountAggregateOutputType> | number;
                };
            };
        };
        sessions: {
            payload: Prisma.$sessionsPayload<ExtArgs>;
            fields: Prisma.sessionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sessionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findFirst: {
                    args: Prisma.sessionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                findMany: {
                    args: Prisma.sessionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                create: {
                    args: Prisma.sessionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                createMany: {
                    args: Prisma.sessionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                delete: {
                    args: Prisma.sessionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                update: {
                    args: Prisma.sessionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                deleteMany: {
                    args: Prisma.sessionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sessionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>[];
                };
                upsert: {
                    args: Prisma.sessionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sessionsPayload>;
                };
                aggregate: {
                    args: Prisma.SessionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSessions>;
                };
                groupBy: {
                    args: Prisma.sessionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sessionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionsCountAggregateOutputType> | number;
                };
            };
        };
        classes: {
            payload: Prisma.$classesPayload<ExtArgs>;
            fields: Prisma.classesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.classesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.classesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                findFirst: {
                    args: Prisma.classesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.classesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                findMany: {
                    args: Prisma.classesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                create: {
                    args: Prisma.classesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                createMany: {
                    args: Prisma.classesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.classesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                delete: {
                    args: Prisma.classesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                update: {
                    args: Prisma.classesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                deleteMany: {
                    args: Prisma.classesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.classesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.classesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>[];
                };
                upsert: {
                    args: Prisma.classesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$classesPayload>;
                };
                aggregate: {
                    args: Prisma.ClassesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClasses>;
                };
                groupBy: {
                    args: Prisma.classesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.classesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClassesCountAggregateOutputType> | number;
                };
            };
        };
        detail_students: {
            payload: Prisma.$detail_studentsPayload<ExtArgs>;
            fields: Prisma.detail_studentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.detail_studentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.detail_studentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                findFirst: {
                    args: Prisma.detail_studentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.detail_studentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                findMany: {
                    args: Prisma.detail_studentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>[];
                };
                create: {
                    args: Prisma.detail_studentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                createMany: {
                    args: Prisma.detail_studentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.detail_studentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>[];
                };
                delete: {
                    args: Prisma.detail_studentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                update: {
                    args: Prisma.detail_studentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                deleteMany: {
                    args: Prisma.detail_studentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.detail_studentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.detail_studentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>[];
                };
                upsert: {
                    args: Prisma.detail_studentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detail_studentsPayload>;
                };
                aggregate: {
                    args: Prisma.Detail_studentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetail_students>;
                };
                groupBy: {
                    args: Prisma.detail_studentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detail_studentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.detail_studentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detail_studentsCountAggregateOutputType> | number;
                };
            };
        };
        students: {
            payload: Prisma.$studentsPayload<ExtArgs>;
            fields: Prisma.studentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.studentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.studentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                findFirst: {
                    args: Prisma.studentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.studentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                findMany: {
                    args: Prisma.studentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>[];
                };
                create: {
                    args: Prisma.studentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                createMany: {
                    args: Prisma.studentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.studentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>[];
                };
                delete: {
                    args: Prisma.studentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                update: {
                    args: Prisma.studentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                deleteMany: {
                    args: Prisma.studentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.studentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.studentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>[];
                };
                upsert: {
                    args: Prisma.studentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$studentsPayload>;
                };
                aggregate: {
                    args: Prisma.StudentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudents>;
                };
                groupBy: {
                    args: Prisma.studentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.studentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        violation_categories: {
            payload: Prisma.$violation_categoriesPayload<ExtArgs>;
            fields: Prisma.violation_categoriesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.violation_categoriesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.violation_categoriesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                findFirst: {
                    args: Prisma.violation_categoriesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.violation_categoriesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                findMany: {
                    args: Prisma.violation_categoriesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>[];
                };
                create: {
                    args: Prisma.violation_categoriesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                createMany: {
                    args: Prisma.violation_categoriesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.violation_categoriesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>[];
                };
                delete: {
                    args: Prisma.violation_categoriesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                update: {
                    args: Prisma.violation_categoriesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                deleteMany: {
                    args: Prisma.violation_categoriesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.violation_categoriesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.violation_categoriesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>[];
                };
                upsert: {
                    args: Prisma.violation_categoriesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoriesPayload>;
                };
                aggregate: {
                    args: Prisma.Violation_categoriesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateViolation_categories>;
                };
                groupBy: {
                    args: Prisma.violation_categoriesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_categoriesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.violation_categoriesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_categoriesCountAggregateOutputType> | number;
                };
            };
        };
        violation_category: {
            payload: Prisma.$violation_categoryPayload<ExtArgs>;
            fields: Prisma.violation_categoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.violation_categoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.violation_categoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                findFirst: {
                    args: Prisma.violation_categoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.violation_categoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                findMany: {
                    args: Prisma.violation_categoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>[];
                };
                create: {
                    args: Prisma.violation_categoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                createMany: {
                    args: Prisma.violation_categoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.violation_categoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>[];
                };
                delete: {
                    args: Prisma.violation_categoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                update: {
                    args: Prisma.violation_categoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                deleteMany: {
                    args: Prisma.violation_categoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.violation_categoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.violation_categoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>[];
                };
                upsert: {
                    args: Prisma.violation_categoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_categoryPayload>;
                };
                aggregate: {
                    args: Prisma.Violation_categoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateViolation_category>;
                };
                groupBy: {
                    args: Prisma.violation_categoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_categoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.violation_categoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_categoryCountAggregateOutputType> | number;
                };
            };
        };
        violation_type: {
            payload: Prisma.$violation_typePayload<ExtArgs>;
            fields: Prisma.violation_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.violation_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.violation_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                findFirst: {
                    args: Prisma.violation_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.violation_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                findMany: {
                    args: Prisma.violation_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>[];
                };
                create: {
                    args: Prisma.violation_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                createMany: {
                    args: Prisma.violation_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.violation_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>[];
                };
                delete: {
                    args: Prisma.violation_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                update: {
                    args: Prisma.violation_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                deleteMany: {
                    args: Prisma.violation_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.violation_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.violation_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>[];
                };
                upsert: {
                    args: Prisma.violation_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violation_typePayload>;
                };
                aggregate: {
                    args: Prisma.Violation_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateViolation_type>;
                };
                groupBy: {
                    args: Prisma.violation_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.violation_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Violation_typeCountAggregateOutputType> | number;
                };
            };
        };
        violations: {
            payload: Prisma.$violationsPayload<ExtArgs>;
            fields: Prisma.violationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.violationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.violationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                findFirst: {
                    args: Prisma.violationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.violationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                findMany: {
                    args: Prisma.violationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>[];
                };
                create: {
                    args: Prisma.violationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                createMany: {
                    args: Prisma.violationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.violationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>[];
                };
                delete: {
                    args: Prisma.violationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                update: {
                    args: Prisma.violationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                deleteMany: {
                    args: Prisma.violationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.violationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.violationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>[];
                };
                upsert: {
                    args: Prisma.violationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$violationsPayload>;
                };
                aggregate: {
                    args: Prisma.ViolationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateViolations>;
                };
                groupBy: {
                    args: Prisma.violationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ViolationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.violationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ViolationsCountAggregateOutputType> | number;
                };
            };
        };
        subjects: {
            payload: Prisma.$subjectsPayload<ExtArgs>;
            fields: Prisma.subjectsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subjectsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subjectsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                findFirst: {
                    args: Prisma.subjectsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subjectsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                findMany: {
                    args: Prisma.subjectsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>[];
                };
                create: {
                    args: Prisma.subjectsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                createMany: {
                    args: Prisma.subjectsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subjectsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>[];
                };
                delete: {
                    args: Prisma.subjectsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                update: {
                    args: Prisma.subjectsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                deleteMany: {
                    args: Prisma.subjectsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subjectsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subjectsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>[];
                };
                upsert: {
                    args: Prisma.subjectsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subjectsPayload>;
                };
                aggregate: {
                    args: Prisma.SubjectsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubjects>;
                };
                groupBy: {
                    args: Prisma.subjectsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subjectsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubjectsCountAggregateOutputType> | number;
                };
            };
        };
        PiketSchedule: {
            payload: Prisma.$PiketSchedulePayload<ExtArgs>;
            fields: Prisma.PiketScheduleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PiketScheduleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PiketScheduleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                findFirst: {
                    args: Prisma.PiketScheduleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PiketScheduleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                findMany: {
                    args: Prisma.PiketScheduleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>[];
                };
                create: {
                    args: Prisma.PiketScheduleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                createMany: {
                    args: Prisma.PiketScheduleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PiketScheduleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>[];
                };
                delete: {
                    args: Prisma.PiketScheduleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                update: {
                    args: Prisma.PiketScheduleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                deleteMany: {
                    args: Prisma.PiketScheduleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PiketScheduleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PiketScheduleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>[];
                };
                upsert: {
                    args: Prisma.PiketScheduleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PiketSchedulePayload>;
                };
                aggregate: {
                    args: Prisma.PiketScheduleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePiketSchedule>;
                };
                groupBy: {
                    args: Prisma.PiketScheduleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PiketScheduleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PiketScheduleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PiketScheduleCountAggregateOutputType> | number;
                };
            };
        };
        teacher_assignments: {
            payload: Prisma.$teacher_assignmentsPayload<ExtArgs>;
            fields: Prisma.teacher_assignmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.teacher_assignmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.teacher_assignmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                findFirst: {
                    args: Prisma.teacher_assignmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.teacher_assignmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                findMany: {
                    args: Prisma.teacher_assignmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>[];
                };
                create: {
                    args: Prisma.teacher_assignmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                createMany: {
                    args: Prisma.teacher_assignmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.teacher_assignmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>[];
                };
                delete: {
                    args: Prisma.teacher_assignmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                update: {
                    args: Prisma.teacher_assignmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.teacher_assignmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.teacher_assignmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.teacher_assignmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>[];
                };
                upsert: {
                    args: Prisma.teacher_assignmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$teacher_assignmentsPayload>;
                };
                aggregate: {
                    args: Prisma.Teacher_assignmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTeacher_assignments>;
                };
                groupBy: {
                    args: Prisma.teacher_assignmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Teacher_assignmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.teacher_assignmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Teacher_assignmentsCountAggregateOutputType> | number;
                };
            };
        };
        student_permits: {
            payload: Prisma.$student_permitsPayload<ExtArgs>;
            fields: Prisma.student_permitsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.student_permitsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.student_permitsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                findFirst: {
                    args: Prisma.student_permitsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.student_permitsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                findMany: {
                    args: Prisma.student_permitsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>[];
                };
                create: {
                    args: Prisma.student_permitsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                createMany: {
                    args: Prisma.student_permitsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.student_permitsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>[];
                };
                delete: {
                    args: Prisma.student_permitsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                update: {
                    args: Prisma.student_permitsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                deleteMany: {
                    args: Prisma.student_permitsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.student_permitsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.student_permitsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>[];
                };
                upsert: {
                    args: Prisma.student_permitsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permitsPayload>;
                };
                aggregate: {
                    args: Prisma.Student_permitsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent_permits>;
                };
                groupBy: {
                    args: Prisma.student_permitsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Student_permitsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.student_permitsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Student_permitsCountAggregateOutputType> | number;
                };
            };
        };
        student_permit_details: {
            payload: Prisma.$student_permit_detailsPayload<ExtArgs>;
            fields: Prisma.student_permit_detailsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.student_permit_detailsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.student_permit_detailsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                findFirst: {
                    args: Prisma.student_permit_detailsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.student_permit_detailsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                findMany: {
                    args: Prisma.student_permit_detailsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>[];
                };
                create: {
                    args: Prisma.student_permit_detailsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                createMany: {
                    args: Prisma.student_permit_detailsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.student_permit_detailsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>[];
                };
                delete: {
                    args: Prisma.student_permit_detailsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                update: {
                    args: Prisma.student_permit_detailsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                deleteMany: {
                    args: Prisma.student_permit_detailsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.student_permit_detailsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.student_permit_detailsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>[];
                };
                upsert: {
                    args: Prisma.student_permit_detailsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$student_permit_detailsPayload>;
                };
                aggregate: {
                    args: Prisma.Student_permit_detailsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent_permit_details>;
                };
                groupBy: {
                    args: Prisma.student_permit_detailsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Student_permit_detailsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.student_permit_detailsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Student_permit_detailsCountAggregateOutputType> | number;
                };
            };
        };
        year_period: {
            payload: Prisma.$year_periodPayload<ExtArgs>;
            fields: Prisma.year_periodFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.year_periodFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.year_periodFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                findFirst: {
                    args: Prisma.year_periodFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.year_periodFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                findMany: {
                    args: Prisma.year_periodFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>[];
                };
                create: {
                    args: Prisma.year_periodCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                createMany: {
                    args: Prisma.year_periodCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.year_periodCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>[];
                };
                delete: {
                    args: Prisma.year_periodDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                update: {
                    args: Prisma.year_periodUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                deleteMany: {
                    args: Prisma.year_periodDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.year_periodUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.year_periodUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>[];
                };
                upsert: {
                    args: Prisma.year_periodUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$year_periodPayload>;
                };
                aggregate: {
                    args: Prisma.Year_periodAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateYear_period>;
                };
                groupBy: {
                    args: Prisma.year_periodGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Year_periodGroupByOutputType>[];
                };
                count: {
                    args: Prisma.year_periodCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Year_periodCountAggregateOutputType> | number;
                };
            };
        };
        roles: {
            payload: Prisma.$rolesPayload<ExtArgs>;
            fields: Prisma.rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findFirst: {
                    args: Prisma.rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                findMany: {
                    args: Prisma.rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                create: {
                    args: Prisma.rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                createMany: {
                    args: Prisma.rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                delete: {
                    args: Prisma.rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                update: {
                    args: Prisma.rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>[];
                };
                upsert: {
                    args: Prisma.rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolesPayload>;
                };
                aggregate: {
                    args: Prisma.RolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRoles>;
                };
                groupBy: {
                    args: Prisma.rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolesCountAggregateOutputType> | number;
                };
            };
        };
        user_role: {
            payload: Prisma.$user_rolePayload<ExtArgs>;
            fields: Prisma.user_roleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_roleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                findFirst: {
                    args: Prisma.user_roleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                findMany: {
                    args: Prisma.user_roleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>[];
                };
                create: {
                    args: Prisma.user_roleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                createMany: {
                    args: Prisma.user_roleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_roleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>[];
                };
                delete: {
                    args: Prisma.user_roleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                update: {
                    args: Prisma.user_roleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                deleteMany: {
                    args: Prisma.user_roleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_roleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_roleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>[];
                };
                upsert: {
                    args: Prisma.user_roleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_rolePayload>;
                };
                aggregate: {
                    args: Prisma.User_roleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_role>;
                };
                groupBy: {
                    args: Prisma.user_roleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_roleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_roleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_roleCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CacheScalarFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly expiration: "expiration";
};
export type CacheScalarFieldEnum = (typeof CacheScalarFieldEnum)[keyof typeof CacheScalarFieldEnum];
export declare const Cache_locksScalarFieldEnum: {
    readonly key: "key";
    readonly owner: "owner";
    readonly expiration: "expiration";
};
export type Cache_locksScalarFieldEnum = (typeof Cache_locksScalarFieldEnum)[keyof typeof Cache_locksScalarFieldEnum];
export declare const Failed_jobsScalarFieldEnum: {
    readonly id: "id";
    readonly uuid: "uuid";
    readonly connection: "connection";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly exception: "exception";
    readonly failed_at: "failed_at";
};
export type Failed_jobsScalarFieldEnum = (typeof Failed_jobsScalarFieldEnum)[keyof typeof Failed_jobsScalarFieldEnum];
export declare const Job_batchesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly total_jobs: "total_jobs";
    readonly pending_jobs: "pending_jobs";
    readonly failed_jobs: "failed_jobs";
    readonly failed_job_ids: "failed_job_ids";
    readonly options: "options";
    readonly cancelled_at: "cancelled_at";
    readonly created_at: "created_at";
    readonly finished_at: "finished_at";
};
export type Job_batchesScalarFieldEnum = (typeof Job_batchesScalarFieldEnum)[keyof typeof Job_batchesScalarFieldEnum];
export declare const JobsScalarFieldEnum: {
    readonly id: "id";
    readonly queue: "queue";
    readonly payload: "payload";
    readonly attempts: "attempts";
    readonly reserved_at: "reserved_at";
    readonly available_at: "available_at";
    readonly created_at: "created_at";
};
export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum];
export declare const Password_reset_tokensScalarFieldEnum: {
    readonly email: "email";
    readonly token: "token";
    readonly created_at: "created_at";
};
export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum];
export declare const Personal_access_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly tokenable_type: "tokenable_type";
    readonly tokenable_id: "tokenable_id";
    readonly name: "name";
    readonly token: "token";
    readonly abilities: "abilities";
    readonly last_used_at: "last_used_at";
    readonly expires_at: "expires_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Personal_access_tokensScalarFieldEnum = (typeof Personal_access_tokensScalarFieldEnum)[keyof typeof Personal_access_tokensScalarFieldEnum];
export declare const SessionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly payload: "payload";
    readonly last_activity: "last_activity";
};
export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum];
export declare const ClassesScalarFieldEnum: {
    readonly id: "id";
    readonly class: "class";
};
export type ClassesScalarFieldEnum = (typeof ClassesScalarFieldEnum)[keyof typeof ClassesScalarFieldEnum];
export declare const Detail_studentsScalarFieldEnum: {
    readonly id: "id";
    readonly nis: "nis";
    readonly id_class: "id_class";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly id_year_period: "id_year_period";
};
export type Detail_studentsScalarFieldEnum = (typeof Detail_studentsScalarFieldEnum)[keyof typeof Detail_studentsScalarFieldEnum];
export declare const StudentsScalarFieldEnum: {
    readonly nis: "nis";
    readonly name: "name";
    readonly point: "point";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly api_token: "api_token";
    readonly remember_token: "remember_token";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly fullname: "fullname";
    readonly nip: "nip";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const Violation_categoriesScalarFieldEnum: {
    readonly id: "id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Violation_categoriesScalarFieldEnum = (typeof Violation_categoriesScalarFieldEnum)[keyof typeof Violation_categoriesScalarFieldEnum];
export declare const Violation_categoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type Violation_categoryScalarFieldEnum = (typeof Violation_categoryScalarFieldEnum)[keyof typeof Violation_categoryScalarFieldEnum];
export declare const Violation_typeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly point: "point";
    readonly punishment: "punishment";
    readonly category_id: "category_id";
};
export type Violation_typeScalarFieldEnum = (typeof Violation_typeScalarFieldEnum)[keyof typeof Violation_typeScalarFieldEnum];
export declare const ViolationsScalarFieldEnum: {
    readonly id: "id";
    readonly student_id: "student_id";
    readonly type_id: "type_id";
    readonly teacher_id: "teacher_id";
    readonly implemented: "implemented";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly nis: "nis";
    readonly description: "description";
};
export type ViolationsScalarFieldEnum = (typeof ViolationsScalarFieldEnum)[keyof typeof ViolationsScalarFieldEnum];
export declare const SubjectsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SubjectsScalarFieldEnum = (typeof SubjectsScalarFieldEnum)[keyof typeof SubjectsScalarFieldEnum];
export declare const PiketScheduleScalarFieldEnum: {
    readonly id: "id";
    readonly teacher_user_id: "teacher_user_id";
    readonly day_of_week: "day_of_week";
};
export type PiketScheduleScalarFieldEnum = (typeof PiketScheduleScalarFieldEnum)[keyof typeof PiketScheduleScalarFieldEnum];
export declare const Teacher_assignmentsScalarFieldEnum: {
    readonly id: "id";
    readonly teacher_user_id: "teacher_user_id";
    readonly class_id: "class_id";
    readonly subject_id: "subject_id";
    readonly assignment_details: "assignment_details";
    readonly reason: "reason";
    readonly due_date: "due_date";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Teacher_assignmentsScalarFieldEnum = (typeof Teacher_assignmentsScalarFieldEnum)[keyof typeof Teacher_assignmentsScalarFieldEnum];
export declare const Student_permitsScalarFieldEnum: {
    readonly id: "id";
    readonly reason: "reason";
    readonly hours_start: "hours_start";
    readonly hours_end: "hours_end";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly piket_user_id: "piket_user_id";
    readonly mapel_user_id: "mapel_user_id";
    readonly studentsNis: "studentsNis";
};
export type Student_permitsScalarFieldEnum = (typeof Student_permitsScalarFieldEnum)[keyof typeof Student_permitsScalarFieldEnum];
export declare const Student_permit_detailsScalarFieldEnum: {
    readonly id: "id";
    readonly student_permit_id: "student_permit_id";
    readonly student_nis: "student_nis";
};
export type Student_permit_detailsScalarFieldEnum = (typeof Student_permit_detailsScalarFieldEnum)[keyof typeof Student_permit_detailsScalarFieldEnum];
export declare const Year_periodScalarFieldEnum: {
    readonly id: "id";
    readonly start_year: "start_year";
    readonly end_year: "end_year";
    readonly display_name: "display_name";
};
export type Year_periodScalarFieldEnum = (typeof Year_periodScalarFieldEnum)[keyof typeof Year_periodScalarFieldEnum];
export declare const RolesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum];
export declare const User_roleScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly role_id: "role_id";
};
export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'student_permit_status'
 */
export type Enumstudent_permit_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'student_permit_status'>;
/**
 * Reference to a field of type 'student_permit_status[]'
 */
export type ListEnumstudent_permit_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'student_permit_status[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    cache?: Prisma.cacheOmit;
    cache_locks?: Prisma.cache_locksOmit;
    failed_jobs?: Prisma.failed_jobsOmit;
    job_batches?: Prisma.job_batchesOmit;
    jobs?: Prisma.jobsOmit;
    password_reset_tokens?: Prisma.password_reset_tokensOmit;
    personal_access_tokens?: Prisma.personal_access_tokensOmit;
    sessions?: Prisma.sessionsOmit;
    classes?: Prisma.classesOmit;
    detail_students?: Prisma.detail_studentsOmit;
    students?: Prisma.studentsOmit;
    users?: Prisma.usersOmit;
    violation_categories?: Prisma.violation_categoriesOmit;
    violation_category?: Prisma.violation_categoryOmit;
    violation_type?: Prisma.violation_typeOmit;
    violations?: Prisma.violationsOmit;
    subjects?: Prisma.subjectsOmit;
    piketSchedule?: Prisma.PiketScheduleOmit;
    teacher_assignments?: Prisma.teacher_assignmentsOmit;
    student_permits?: Prisma.student_permitsOmit;
    student_permit_details?: Prisma.student_permit_detailsOmit;
    year_period?: Prisma.year_periodOmit;
    roles?: Prisma.rolesOmit;
    user_role?: Prisma.user_roleOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map