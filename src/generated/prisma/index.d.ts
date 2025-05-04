
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Streamer
 * 
 */
export type Streamer = $Result.DefaultSelection<Prisma.$StreamerPayload>
/**
 * Model Week
 * 
 */
export type Week = $Result.DefaultSelection<Prisma.$WeekPayload>
/**
 * Model StreamingData
 * 
 */
export type StreamingData = $Result.DefaultSelection<Prisma.$StreamingDataPayload>
/**
 * Model Referal
 * 
 */
export type Referal = $Result.DefaultSelection<Prisma.$ReferalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Streamers
 * const streamers = await prisma.streamer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Streamers
   * const streamers = await prisma.streamer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.streamer`: Exposes CRUD operations for the **Streamer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streamers
    * const streamers = await prisma.streamer.findMany()
    * ```
    */
  get streamer(): Prisma.StreamerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.week`: Exposes CRUD operations for the **Week** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weeks
    * const weeks = await prisma.week.findMany()
    * ```
    */
  get week(): Prisma.WeekDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamingData`: Exposes CRUD operations for the **StreamingData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamingData
    * const streamingData = await prisma.streamingData.findMany()
    * ```
    */
  get streamingData(): Prisma.StreamingDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referal`: Exposes CRUD operations for the **Referal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referals
    * const referals = await prisma.referal.findMany()
    * ```
    */
  get referal(): Prisma.ReferalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Streamer: 'Streamer',
    Week: 'Week',
    StreamingData: 'StreamingData',
    Referal: 'Referal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "streamer" | "week" | "streamingData" | "referal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Streamer: {
        payload: Prisma.$StreamerPayload<ExtArgs>
        fields: Prisma.StreamerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          findFirst: {
            args: Prisma.StreamerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          findMany: {
            args: Prisma.StreamerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          create: {
            args: Prisma.StreamerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          createMany: {
            args: Prisma.StreamerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          delete: {
            args: Prisma.StreamerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          update: {
            args: Prisma.StreamerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          deleteMany: {
            args: Prisma.StreamerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>[]
          }
          upsert: {
            args: Prisma.StreamerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerPayload>
          }
          aggregate: {
            args: Prisma.StreamerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamer>
          }
          groupBy: {
            args: Prisma.StreamerGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamerGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamerCountArgs<ExtArgs>
            result: $Utils.Optional<StreamerCountAggregateOutputType> | number
          }
        }
      }
      Week: {
        payload: Prisma.$WeekPayload<ExtArgs>
        fields: Prisma.WeekFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeekFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeekFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findFirst: {
            args: Prisma.WeekFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeekFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          findMany: {
            args: Prisma.WeekFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          create: {
            args: Prisma.WeekCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          createMany: {
            args: Prisma.WeekCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeekCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          delete: {
            args: Prisma.WeekDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          update: {
            args: Prisma.WeekUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          deleteMany: {
            args: Prisma.WeekDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeekUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeekUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>[]
          }
          upsert: {
            args: Prisma.WeekUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeekPayload>
          }
          aggregate: {
            args: Prisma.WeekAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeek>
          }
          groupBy: {
            args: Prisma.WeekGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeekGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeekCountArgs<ExtArgs>
            result: $Utils.Optional<WeekCountAggregateOutputType> | number
          }
        }
      }
      StreamingData: {
        payload: Prisma.$StreamingDataPayload<ExtArgs>
        fields: Prisma.StreamingDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamingDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamingDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          findFirst: {
            args: Prisma.StreamingDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamingDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          findMany: {
            args: Prisma.StreamingDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>[]
          }
          create: {
            args: Prisma.StreamingDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          createMany: {
            args: Prisma.StreamingDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamingDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>[]
          }
          delete: {
            args: Prisma.StreamingDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          update: {
            args: Prisma.StreamingDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          deleteMany: {
            args: Prisma.StreamingDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamingDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamingDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>[]
          }
          upsert: {
            args: Prisma.StreamingDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamingDataPayload>
          }
          aggregate: {
            args: Prisma.StreamingDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamingData>
          }
          groupBy: {
            args: Prisma.StreamingDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamingDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamingDataCountArgs<ExtArgs>
            result: $Utils.Optional<StreamingDataCountAggregateOutputType> | number
          }
        }
      }
      Referal: {
        payload: Prisma.$ReferalPayload<ExtArgs>
        fields: Prisma.ReferalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          findFirst: {
            args: Prisma.ReferalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          findMany: {
            args: Prisma.ReferalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>[]
          }
          create: {
            args: Prisma.ReferalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          createMany: {
            args: Prisma.ReferalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>[]
          }
          delete: {
            args: Prisma.ReferalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          update: {
            args: Prisma.ReferalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          deleteMany: {
            args: Prisma.ReferalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>[]
          }
          upsert: {
            args: Prisma.ReferalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferalPayload>
          }
          aggregate: {
            args: Prisma.ReferalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferal>
          }
          groupBy: {
            args: Prisma.ReferalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferalCountArgs<ExtArgs>
            result: $Utils.Optional<ReferalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    streamer?: StreamerOmit
    week?: WeekOmit
    streamingData?: StreamingDataOmit
    referal?: ReferalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StreamerCountOutputType
   */

  export type StreamerCountOutputType = {
    referals: number
    referredBy: number
    streamingData: number
  }

  export type StreamerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referals?: boolean | StreamerCountOutputTypeCountReferalsArgs
    referredBy?: boolean | StreamerCountOutputTypeCountReferredByArgs
    streamingData?: boolean | StreamerCountOutputTypeCountStreamingDataArgs
  }

  // Custom InputTypes
  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerCountOutputType
     */
    select?: StreamerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeCountReferalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferalWhereInput
  }

  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeCountReferredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferalWhereInput
  }

  /**
   * StreamerCountOutputType without action
   */
  export type StreamerCountOutputTypeCountStreamingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamingDataWhereInput
  }


  /**
   * Count Type WeekCountOutputType
   */

  export type WeekCountOutputType = {
    data: number
  }

  export type WeekCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | WeekCountOutputTypeCountDataArgs
  }

  // Custom InputTypes
  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeekCountOutputType
     */
    select?: WeekCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeekCountOutputType without action
   */
  export type WeekCountOutputTypeCountDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamingDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Streamer
   */

  export type AggregateStreamer = {
    _count: StreamerCountAggregateOutputType | null
    _min: StreamerMinAggregateOutputType | null
    _max: StreamerMaxAggregateOutputType | null
  }

  export type StreamerMinAggregateOutputType = {
    id: string | null
    wahaID: string | null
    wahaName: string | null
    name: string | null
    phoneNumber: string | null
    bankAccount: string | null
    createdAt: Date | null
  }

  export type StreamerMaxAggregateOutputType = {
    id: string | null
    wahaID: string | null
    wahaName: string | null
    name: string | null
    phoneNumber: string | null
    bankAccount: string | null
    createdAt: Date | null
  }

  export type StreamerCountAggregateOutputType = {
    id: number
    wahaID: number
    wahaName: number
    name: number
    phoneNumber: number
    bankAccount: number
    createdAt: number
    _all: number
  }


  export type StreamerMinAggregateInputType = {
    id?: true
    wahaID?: true
    wahaName?: true
    name?: true
    phoneNumber?: true
    bankAccount?: true
    createdAt?: true
  }

  export type StreamerMaxAggregateInputType = {
    id?: true
    wahaID?: true
    wahaName?: true
    name?: true
    phoneNumber?: true
    bankAccount?: true
    createdAt?: true
  }

  export type StreamerCountAggregateInputType = {
    id?: true
    wahaID?: true
    wahaName?: true
    name?: true
    phoneNumber?: true
    bankAccount?: true
    createdAt?: true
    _all?: true
  }

  export type StreamerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streamer to aggregate.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streamers
    **/
    _count?: true | StreamerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamerMaxAggregateInputType
  }

  export type GetStreamerAggregateType<T extends StreamerAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamer[P]>
      : GetScalarType<T[P], AggregateStreamer[P]>
  }




  export type StreamerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamerWhereInput
    orderBy?: StreamerOrderByWithAggregationInput | StreamerOrderByWithAggregationInput[]
    by: StreamerScalarFieldEnum[] | StreamerScalarFieldEnum
    having?: StreamerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamerCountAggregateInputType | true
    _min?: StreamerMinAggregateInputType
    _max?: StreamerMaxAggregateInputType
  }

  export type StreamerGroupByOutputType = {
    id: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber: string | null
    bankAccount: string | null
    createdAt: Date
    _count: StreamerCountAggregateOutputType | null
    _min: StreamerMinAggregateOutputType | null
    _max: StreamerMaxAggregateOutputType | null
  }

  type GetStreamerGroupByPayload<T extends StreamerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamerGroupByOutputType[P]>
            : GetScalarType<T[P], StreamerGroupByOutputType[P]>
        }
      >
    >


  export type StreamerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wahaID?: boolean
    wahaName?: boolean
    name?: boolean
    phoneNumber?: boolean
    bankAccount?: boolean
    createdAt?: boolean
    referals?: boolean | Streamer$referalsArgs<ExtArgs>
    referredBy?: boolean | Streamer$referredByArgs<ExtArgs>
    streamingData?: boolean | Streamer$streamingDataArgs<ExtArgs>
    _count?: boolean | StreamerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wahaID?: boolean
    wahaName?: boolean
    name?: boolean
    phoneNumber?: boolean
    bankAccount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wahaID?: boolean
    wahaName?: boolean
    name?: boolean
    phoneNumber?: boolean
    bankAccount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["streamer"]>

  export type StreamerSelectScalar = {
    id?: boolean
    wahaID?: boolean
    wahaName?: boolean
    name?: boolean
    phoneNumber?: boolean
    bankAccount?: boolean
    createdAt?: boolean
  }

  export type StreamerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wahaID" | "wahaName" | "name" | "phoneNumber" | "bankAccount" | "createdAt", ExtArgs["result"]["streamer"]>
  export type StreamerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referals?: boolean | Streamer$referalsArgs<ExtArgs>
    referredBy?: boolean | Streamer$referredByArgs<ExtArgs>
    streamingData?: boolean | Streamer$streamingDataArgs<ExtArgs>
    _count?: boolean | StreamerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StreamerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StreamerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streamer"
    objects: {
      referals: Prisma.$ReferalPayload<ExtArgs>[]
      referredBy: Prisma.$ReferalPayload<ExtArgs>[]
      streamingData: Prisma.$StreamingDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wahaID: string
      wahaName: string
      name: string
      phoneNumber: string | null
      bankAccount: string | null
      createdAt: Date
    }, ExtArgs["result"]["streamer"]>
    composites: {}
  }

  type StreamerGetPayload<S extends boolean | null | undefined | StreamerDefaultArgs> = $Result.GetResult<Prisma.$StreamerPayload, S>

  type StreamerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamerCountAggregateInputType | true
    }

  export interface StreamerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streamer'], meta: { name: 'Streamer' } }
    /**
     * Find zero or one Streamer that matches the filter.
     * @param {StreamerFindUniqueArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamerFindUniqueArgs>(args: SelectSubset<T, StreamerFindUniqueArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Streamer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamerFindUniqueOrThrowArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamerFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streamer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindFirstArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamerFindFirstArgs>(args?: SelectSubset<T, StreamerFindFirstArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Streamer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindFirstOrThrowArgs} args - Arguments to find a Streamer
     * @example
     * // Get one Streamer
     * const streamer = await prisma.streamer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamerFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamerFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streamers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streamers
     * const streamers = await prisma.streamer.findMany()
     * 
     * // Get first 10 Streamers
     * const streamers = await prisma.streamer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamerWithIdOnly = await prisma.streamer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamerFindManyArgs>(args?: SelectSubset<T, StreamerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Streamer.
     * @param {StreamerCreateArgs} args - Arguments to create a Streamer.
     * @example
     * // Create one Streamer
     * const Streamer = await prisma.streamer.create({
     *   data: {
     *     // ... data to create a Streamer
     *   }
     * })
     * 
     */
    create<T extends StreamerCreateArgs>(args: SelectSubset<T, StreamerCreateArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streamers.
     * @param {StreamerCreateManyArgs} args - Arguments to create many Streamers.
     * @example
     * // Create many Streamers
     * const streamer = await prisma.streamer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamerCreateManyArgs>(args?: SelectSubset<T, StreamerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streamers and returns the data saved in the database.
     * @param {StreamerCreateManyAndReturnArgs} args - Arguments to create many Streamers.
     * @example
     * // Create many Streamers
     * const streamer = await prisma.streamer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streamers and only return the `id`
     * const streamerWithIdOnly = await prisma.streamer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamerCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Streamer.
     * @param {StreamerDeleteArgs} args - Arguments to delete one Streamer.
     * @example
     * // Delete one Streamer
     * const Streamer = await prisma.streamer.delete({
     *   where: {
     *     // ... filter to delete one Streamer
     *   }
     * })
     * 
     */
    delete<T extends StreamerDeleteArgs>(args: SelectSubset<T, StreamerDeleteArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Streamer.
     * @param {StreamerUpdateArgs} args - Arguments to update one Streamer.
     * @example
     * // Update one Streamer
     * const streamer = await prisma.streamer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamerUpdateArgs>(args: SelectSubset<T, StreamerUpdateArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streamers.
     * @param {StreamerDeleteManyArgs} args - Arguments to filter Streamers to delete.
     * @example
     * // Delete a few Streamers
     * const { count } = await prisma.streamer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamerDeleteManyArgs>(args?: SelectSubset<T, StreamerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streamers
     * const streamer = await prisma.streamer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamerUpdateManyArgs>(args: SelectSubset<T, StreamerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streamers and returns the data updated in the database.
     * @param {StreamerUpdateManyAndReturnArgs} args - Arguments to update many Streamers.
     * @example
     * // Update many Streamers
     * const streamer = await prisma.streamer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streamers and only return the `id`
     * const streamerWithIdOnly = await prisma.streamer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamerUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Streamer.
     * @param {StreamerUpsertArgs} args - Arguments to update or create a Streamer.
     * @example
     * // Update or create a Streamer
     * const streamer = await prisma.streamer.upsert({
     *   create: {
     *     // ... data to create a Streamer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streamer we want to update
     *   }
     * })
     */
    upsert<T extends StreamerUpsertArgs>(args: SelectSubset<T, StreamerUpsertArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streamers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerCountArgs} args - Arguments to filter Streamers to count.
     * @example
     * // Count the number of Streamers
     * const count = await prisma.streamer.count({
     *   where: {
     *     // ... the filter for the Streamers we want to count
     *   }
     * })
    **/
    count<T extends StreamerCountArgs>(
      args?: Subset<T, StreamerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamerAggregateArgs>(args: Subset<T, StreamerAggregateArgs>): Prisma.PrismaPromise<GetStreamerAggregateType<T>>

    /**
     * Group by Streamer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamerGroupByArgs['orderBy'] }
        : { orderBy?: StreamerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streamer model
   */
  readonly fields: StreamerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streamer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referals<T extends Streamer$referalsArgs<ExtArgs> = {}>(args?: Subset<T, Streamer$referalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredBy<T extends Streamer$referredByArgs<ExtArgs> = {}>(args?: Subset<T, Streamer$referredByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    streamingData<T extends Streamer$streamingDataArgs<ExtArgs> = {}>(args?: Subset<T, Streamer$streamingDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Streamer model
   */
  interface StreamerFieldRefs {
    readonly id: FieldRef<"Streamer", 'String'>
    readonly wahaID: FieldRef<"Streamer", 'String'>
    readonly wahaName: FieldRef<"Streamer", 'String'>
    readonly name: FieldRef<"Streamer", 'String'>
    readonly phoneNumber: FieldRef<"Streamer", 'String'>
    readonly bankAccount: FieldRef<"Streamer", 'String'>
    readonly createdAt: FieldRef<"Streamer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Streamer findUnique
   */
  export type StreamerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer findUniqueOrThrow
   */
  export type StreamerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer findFirst
   */
  export type StreamerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamers.
     */
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer findFirstOrThrow
   */
  export type StreamerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamer to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streamers.
     */
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer findMany
   */
  export type StreamerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter, which Streamers to fetch.
     */
    where?: StreamerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streamers to fetch.
     */
    orderBy?: StreamerOrderByWithRelationInput | StreamerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streamers.
     */
    cursor?: StreamerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streamers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streamers.
     */
    skip?: number
    distinct?: StreamerScalarFieldEnum | StreamerScalarFieldEnum[]
  }

  /**
   * Streamer create
   */
  export type StreamerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The data needed to create a Streamer.
     */
    data: XOR<StreamerCreateInput, StreamerUncheckedCreateInput>
  }

  /**
   * Streamer createMany
   */
  export type StreamerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streamers.
     */
    data: StreamerCreateManyInput | StreamerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streamer createManyAndReturn
   */
  export type StreamerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * The data used to create many Streamers.
     */
    data: StreamerCreateManyInput | StreamerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streamer update
   */
  export type StreamerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The data needed to update a Streamer.
     */
    data: XOR<StreamerUpdateInput, StreamerUncheckedUpdateInput>
    /**
     * Choose, which Streamer to update.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer updateMany
   */
  export type StreamerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streamers.
     */
    data: XOR<StreamerUpdateManyMutationInput, StreamerUncheckedUpdateManyInput>
    /**
     * Filter which Streamers to update
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to update.
     */
    limit?: number
  }

  /**
   * Streamer updateManyAndReturn
   */
  export type StreamerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * The data used to update Streamers.
     */
    data: XOR<StreamerUpdateManyMutationInput, StreamerUncheckedUpdateManyInput>
    /**
     * Filter which Streamers to update
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to update.
     */
    limit?: number
  }

  /**
   * Streamer upsert
   */
  export type StreamerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * The filter to search for the Streamer to update in case it exists.
     */
    where: StreamerWhereUniqueInput
    /**
     * In case the Streamer found by the `where` argument doesn't exist, create a new Streamer with this data.
     */
    create: XOR<StreamerCreateInput, StreamerUncheckedCreateInput>
    /**
     * In case the Streamer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamerUpdateInput, StreamerUncheckedUpdateInput>
  }

  /**
   * Streamer delete
   */
  export type StreamerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
    /**
     * Filter which Streamer to delete.
     */
    where: StreamerWhereUniqueInput
  }

  /**
   * Streamer deleteMany
   */
  export type StreamerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streamers to delete
     */
    where?: StreamerWhereInput
    /**
     * Limit how many Streamers to delete.
     */
    limit?: number
  }

  /**
   * Streamer.referals
   */
  export type Streamer$referalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    where?: ReferalWhereInput
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    cursor?: ReferalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferalScalarFieldEnum | ReferalScalarFieldEnum[]
  }

  /**
   * Streamer.referredBy
   */
  export type Streamer$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    where?: ReferalWhereInput
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    cursor?: ReferalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferalScalarFieldEnum | ReferalScalarFieldEnum[]
  }

  /**
   * Streamer.streamingData
   */
  export type Streamer$streamingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    where?: StreamingDataWhereInput
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    cursor?: StreamingDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamingDataScalarFieldEnum | StreamingDataScalarFieldEnum[]
  }

  /**
   * Streamer without action
   */
  export type StreamerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streamer
     */
    select?: StreamerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Streamer
     */
    omit?: StreamerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerInclude<ExtArgs> | null
  }


  /**
   * Model Week
   */

  export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  export type WeekMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    startDate: Date | null
    endDate: Date | null
    closed: boolean | null
    observation: string | null
  }

  export type WeekMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    startDate: Date | null
    endDate: Date | null
    closed: boolean | null
    observation: string | null
  }

  export type WeekCountAggregateOutputType = {
    id: number
    name: number
    date: number
    startDate: number
    endDate: number
    closed: number
    observation: number
    _all: number
  }


  export type WeekMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    startDate?: true
    endDate?: true
    closed?: true
    observation?: true
  }

  export type WeekMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    startDate?: true
    endDate?: true
    closed?: true
    observation?: true
  }

  export type WeekCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    startDate?: true
    endDate?: true
    closed?: true
    observation?: true
    _all?: true
  }

  export type WeekAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Week to aggregate.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weeks
    **/
    _count?: true | WeekCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeekMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeekMaxAggregateInputType
  }

  export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
        [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeek[P]>
      : GetScalarType<T[P], AggregateWeek[P]>
  }




  export type WeekGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeekWhereInput
    orderBy?: WeekOrderByWithAggregationInput | WeekOrderByWithAggregationInput[]
    by: WeekScalarFieldEnum[] | WeekScalarFieldEnum
    having?: WeekScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeekCountAggregateInputType | true
    _min?: WeekMinAggregateInputType
    _max?: WeekMaxAggregateInputType
  }

  export type WeekGroupByOutputType = {
    id: string
    name: string
    date: Date
    startDate: Date
    endDate: Date
    closed: boolean
    observation: string | null
    _count: WeekCountAggregateOutputType | null
    _min: WeekMinAggregateOutputType | null
    _max: WeekMaxAggregateOutputType | null
  }

  type GetWeekGroupByPayload<T extends WeekGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeekGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeekGroupByOutputType[P]>
            : GetScalarType<T[P], WeekGroupByOutputType[P]>
        }
      >
    >


  export type WeekSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    closed?: boolean
    observation?: boolean
    data?: boolean | Week$dataArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["week"]>

  export type WeekSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    closed?: boolean
    observation?: boolean
  }, ExtArgs["result"]["week"]>

  export type WeekSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    closed?: boolean
    observation?: boolean
  }, ExtArgs["result"]["week"]>

  export type WeekSelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    startDate?: boolean
    endDate?: boolean
    closed?: boolean
    observation?: boolean
  }

  export type WeekOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "startDate" | "endDate" | "closed" | "observation", ExtArgs["result"]["week"]>
  export type WeekInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    data?: boolean | Week$dataArgs<ExtArgs>
    _count?: boolean | WeekCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeekIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeekIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeekPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Week"
    objects: {
      data: Prisma.$StreamingDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      startDate: Date
      endDate: Date
      closed: boolean
      observation: string | null
    }, ExtArgs["result"]["week"]>
    composites: {}
  }

  type WeekGetPayload<S extends boolean | null | undefined | WeekDefaultArgs> = $Result.GetResult<Prisma.$WeekPayload, S>

  type WeekCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeekCountAggregateInputType | true
    }

  export interface WeekDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Week'], meta: { name: 'Week' } }
    /**
     * Find zero or one Week that matches the filter.
     * @param {WeekFindUniqueArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeekFindUniqueArgs>(args: SelectSubset<T, WeekFindUniqueArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Week that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeekFindUniqueOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeekFindUniqueOrThrowArgs>(args: SelectSubset<T, WeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeekFindFirstArgs>(args?: SelectSubset<T, WeekFindFirstArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Week that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindFirstOrThrowArgs} args - Arguments to find a Week
     * @example
     * // Get one Week
     * const week = await prisma.week.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeekFindFirstOrThrowArgs>(args?: SelectSubset<T, WeekFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weeks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weeks
     * const weeks = await prisma.week.findMany()
     * 
     * // Get first 10 Weeks
     * const weeks = await prisma.week.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weekWithIdOnly = await prisma.week.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeekFindManyArgs>(args?: SelectSubset<T, WeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Week.
     * @param {WeekCreateArgs} args - Arguments to create a Week.
     * @example
     * // Create one Week
     * const Week = await prisma.week.create({
     *   data: {
     *     // ... data to create a Week
     *   }
     * })
     * 
     */
    create<T extends WeekCreateArgs>(args: SelectSubset<T, WeekCreateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weeks.
     * @param {WeekCreateManyArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeekCreateManyArgs>(args?: SelectSubset<T, WeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weeks and returns the data saved in the database.
     * @param {WeekCreateManyAndReturnArgs} args - Arguments to create many Weeks.
     * @example
     * // Create many Weeks
     * const week = await prisma.week.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeekCreateManyAndReturnArgs>(args?: SelectSubset<T, WeekCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Week.
     * @param {WeekDeleteArgs} args - Arguments to delete one Week.
     * @example
     * // Delete one Week
     * const Week = await prisma.week.delete({
     *   where: {
     *     // ... filter to delete one Week
     *   }
     * })
     * 
     */
    delete<T extends WeekDeleteArgs>(args: SelectSubset<T, WeekDeleteArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Week.
     * @param {WeekUpdateArgs} args - Arguments to update one Week.
     * @example
     * // Update one Week
     * const week = await prisma.week.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeekUpdateArgs>(args: SelectSubset<T, WeekUpdateArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weeks.
     * @param {WeekDeleteManyArgs} args - Arguments to filter Weeks to delete.
     * @example
     * // Delete a few Weeks
     * const { count } = await prisma.week.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeekDeleteManyArgs>(args?: SelectSubset<T, WeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeekUpdateManyArgs>(args: SelectSubset<T, WeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weeks and returns the data updated in the database.
     * @param {WeekUpdateManyAndReturnArgs} args - Arguments to update many Weeks.
     * @example
     * // Update many Weeks
     * const week = await prisma.week.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weeks and only return the `id`
     * const weekWithIdOnly = await prisma.week.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeekUpdateManyAndReturnArgs>(args: SelectSubset<T, WeekUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Week.
     * @param {WeekUpsertArgs} args - Arguments to update or create a Week.
     * @example
     * // Update or create a Week
     * const week = await prisma.week.upsert({
     *   create: {
     *     // ... data to create a Week
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Week we want to update
     *   }
     * })
     */
    upsert<T extends WeekUpsertArgs>(args: SelectSubset<T, WeekUpsertArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weeks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekCountArgs} args - Arguments to filter Weeks to count.
     * @example
     * // Count the number of Weeks
     * const count = await prisma.week.count({
     *   where: {
     *     // ... the filter for the Weeks we want to count
     *   }
     * })
    **/
    count<T extends WeekCountArgs>(
      args?: Subset<T, WeekCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeekCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeekAggregateArgs>(args: Subset<T, WeekAggregateArgs>): Prisma.PrismaPromise<GetWeekAggregateType<T>>

    /**
     * Group by Week.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeekGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeekGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeekGroupByArgs['orderBy'] }
        : { orderBy?: WeekGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Week model
   */
  readonly fields: WeekFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Week.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeekClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    data<T extends Week$dataArgs<ExtArgs> = {}>(args?: Subset<T, Week$dataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Week model
   */
  interface WeekFieldRefs {
    readonly id: FieldRef<"Week", 'String'>
    readonly name: FieldRef<"Week", 'String'>
    readonly date: FieldRef<"Week", 'DateTime'>
    readonly startDate: FieldRef<"Week", 'DateTime'>
    readonly endDate: FieldRef<"Week", 'DateTime'>
    readonly closed: FieldRef<"Week", 'Boolean'>
    readonly observation: FieldRef<"Week", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Week findUnique
   */
  export type WeekFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findUniqueOrThrow
   */
  export type WeekFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week findFirst
   */
  export type WeekFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findFirstOrThrow
   */
  export type WeekFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Week to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weeks.
     */
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week findMany
   */
  export type WeekFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter, which Weeks to fetch.
     */
    where?: WeekWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weeks to fetch.
     */
    orderBy?: WeekOrderByWithRelationInput | WeekOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weeks.
     */
    cursor?: WeekWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weeks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weeks.
     */
    skip?: number
    distinct?: WeekScalarFieldEnum | WeekScalarFieldEnum[]
  }

  /**
   * Week create
   */
  export type WeekCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to create a Week.
     */
    data: XOR<WeekCreateInput, WeekUncheckedCreateInput>
  }

  /**
   * Week createMany
   */
  export type WeekCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Week createManyAndReturn
   */
  export type WeekCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to create many Weeks.
     */
    data: WeekCreateManyInput | WeekCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Week update
   */
  export type WeekUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The data needed to update a Week.
     */
    data: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
    /**
     * Choose, which Week to update.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week updateMany
   */
  export type WeekUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
  }

  /**
   * Week updateManyAndReturn
   */
  export type WeekUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * The data used to update Weeks.
     */
    data: XOR<WeekUpdateManyMutationInput, WeekUncheckedUpdateManyInput>
    /**
     * Filter which Weeks to update
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to update.
     */
    limit?: number
  }

  /**
   * Week upsert
   */
  export type WeekUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * The filter to search for the Week to update in case it exists.
     */
    where: WeekWhereUniqueInput
    /**
     * In case the Week found by the `where` argument doesn't exist, create a new Week with this data.
     */
    create: XOR<WeekCreateInput, WeekUncheckedCreateInput>
    /**
     * In case the Week was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeekUpdateInput, WeekUncheckedUpdateInput>
  }

  /**
   * Week delete
   */
  export type WeekDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
    /**
     * Filter which Week to delete.
     */
    where: WeekWhereUniqueInput
  }

  /**
   * Week deleteMany
   */
  export type WeekDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weeks to delete
     */
    where?: WeekWhereInput
    /**
     * Limit how many Weeks to delete.
     */
    limit?: number
  }

  /**
   * Week.data
   */
  export type Week$dataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    where?: StreamingDataWhereInput
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    cursor?: StreamingDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamingDataScalarFieldEnum | StreamingDataScalarFieldEnum[]
  }

  /**
   * Week without action
   */
  export type WeekDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Week
     */
    select?: WeekSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Week
     */
    omit?: WeekOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeekInclude<ExtArgs> | null
  }


  /**
   * Model StreamingData
   */

  export type AggregateStreamingData = {
    _count: StreamingDataCountAggregateOutputType | null
    _avg: StreamingDataAvgAggregateOutputType | null
    _sum: StreamingDataSumAggregateOutputType | null
    _min: StreamingDataMinAggregateOutputType | null
    _max: StreamingDataMaxAggregateOutputType | null
  }

  export type StreamingDataAvgAggregateOutputType = {
    baseSalaryIM: number | null
    baseSalaryRoom: number | null
    diamondsIM: number | null
    diamondsRoom: number | null
    diamondsTotal: number | null
    diamondsAndPoints: number | null
    diamondsPenalties: number | null
    diamondsComisions: number | null
    rewardOfPoints: number | null
    dailyBonusOfSuperStreamer: number | null
    roomBonus: number | null
    enchantingGodesBonus: number | null
    streamerSalary: number | null
    agencySalary: number | null
  }

  export type StreamingDataSumAggregateOutputType = {
    baseSalaryIM: number | null
    baseSalaryRoom: number | null
    diamondsIM: number | null
    diamondsRoom: number | null
    diamondsTotal: number | null
    diamondsAndPoints: number | null
    diamondsPenalties: number | null
    diamondsComisions: number | null
    rewardOfPoints: number | null
    dailyBonusOfSuperStreamer: number | null
    roomBonus: number | null
    enchantingGodesBonus: number | null
    streamerSalary: number | null
    agencySalary: number | null
  }

  export type StreamingDataMinAggregateOutputType = {
    id: string | null
    baseSalaryIM: number | null
    baseSalaryRoom: number | null
    diamondsIM: number | null
    diamondsRoom: number | null
    diamondsTotal: number | null
    diamondsAndPoints: number | null
    diamondsPenalties: number | null
    diamondsComisions: number | null
    rewardOfPoints: number | null
    dailyBonusOfSuperStreamer: number | null
    roomBonus: number | null
    enchantingGodesBonus: number | null
    streamerSalary: number | null
    agencySalary: number | null
    streamerId: string | null
    weekId: string | null
  }

  export type StreamingDataMaxAggregateOutputType = {
    id: string | null
    baseSalaryIM: number | null
    baseSalaryRoom: number | null
    diamondsIM: number | null
    diamondsRoom: number | null
    diamondsTotal: number | null
    diamondsAndPoints: number | null
    diamondsPenalties: number | null
    diamondsComisions: number | null
    rewardOfPoints: number | null
    dailyBonusOfSuperStreamer: number | null
    roomBonus: number | null
    enchantingGodesBonus: number | null
    streamerSalary: number | null
    agencySalary: number | null
    streamerId: string | null
    weekId: string | null
  }

  export type StreamingDataCountAggregateOutputType = {
    id: number
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: number
    weekId: number
    _all: number
  }


  export type StreamingDataAvgAggregateInputType = {
    baseSalaryIM?: true
    baseSalaryRoom?: true
    diamondsIM?: true
    diamondsRoom?: true
    diamondsTotal?: true
    diamondsAndPoints?: true
    diamondsPenalties?: true
    diamondsComisions?: true
    rewardOfPoints?: true
    dailyBonusOfSuperStreamer?: true
    roomBonus?: true
    enchantingGodesBonus?: true
    streamerSalary?: true
    agencySalary?: true
  }

  export type StreamingDataSumAggregateInputType = {
    baseSalaryIM?: true
    baseSalaryRoom?: true
    diamondsIM?: true
    diamondsRoom?: true
    diamondsTotal?: true
    diamondsAndPoints?: true
    diamondsPenalties?: true
    diamondsComisions?: true
    rewardOfPoints?: true
    dailyBonusOfSuperStreamer?: true
    roomBonus?: true
    enchantingGodesBonus?: true
    streamerSalary?: true
    agencySalary?: true
  }

  export type StreamingDataMinAggregateInputType = {
    id?: true
    baseSalaryIM?: true
    baseSalaryRoom?: true
    diamondsIM?: true
    diamondsRoom?: true
    diamondsTotal?: true
    diamondsAndPoints?: true
    diamondsPenalties?: true
    diamondsComisions?: true
    rewardOfPoints?: true
    dailyBonusOfSuperStreamer?: true
    roomBonus?: true
    enchantingGodesBonus?: true
    streamerSalary?: true
    agencySalary?: true
    streamerId?: true
    weekId?: true
  }

  export type StreamingDataMaxAggregateInputType = {
    id?: true
    baseSalaryIM?: true
    baseSalaryRoom?: true
    diamondsIM?: true
    diamondsRoom?: true
    diamondsTotal?: true
    diamondsAndPoints?: true
    diamondsPenalties?: true
    diamondsComisions?: true
    rewardOfPoints?: true
    dailyBonusOfSuperStreamer?: true
    roomBonus?: true
    enchantingGodesBonus?: true
    streamerSalary?: true
    agencySalary?: true
    streamerId?: true
    weekId?: true
  }

  export type StreamingDataCountAggregateInputType = {
    id?: true
    baseSalaryIM?: true
    baseSalaryRoom?: true
    diamondsIM?: true
    diamondsRoom?: true
    diamondsTotal?: true
    diamondsAndPoints?: true
    diamondsPenalties?: true
    diamondsComisions?: true
    rewardOfPoints?: true
    dailyBonusOfSuperStreamer?: true
    roomBonus?: true
    enchantingGodesBonus?: true
    streamerSalary?: true
    agencySalary?: true
    streamerId?: true
    weekId?: true
    _all?: true
  }

  export type StreamingDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamingData to aggregate.
     */
    where?: StreamingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingData to fetch.
     */
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamingData
    **/
    _count?: true | StreamingDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamingDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamingDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamingDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamingDataMaxAggregateInputType
  }

  export type GetStreamingDataAggregateType<T extends StreamingDataAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamingData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamingData[P]>
      : GetScalarType<T[P], AggregateStreamingData[P]>
  }




  export type StreamingDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamingDataWhereInput
    orderBy?: StreamingDataOrderByWithAggregationInput | StreamingDataOrderByWithAggregationInput[]
    by: StreamingDataScalarFieldEnum[] | StreamingDataScalarFieldEnum
    having?: StreamingDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamingDataCountAggregateInputType | true
    _avg?: StreamingDataAvgAggregateInputType
    _sum?: StreamingDataSumAggregateInputType
    _min?: StreamingDataMinAggregateInputType
    _max?: StreamingDataMaxAggregateInputType
  }

  export type StreamingDataGroupByOutputType = {
    id: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: string
    weekId: string
    _count: StreamingDataCountAggregateOutputType | null
    _avg: StreamingDataAvgAggregateOutputType | null
    _sum: StreamingDataSumAggregateOutputType | null
    _min: StreamingDataMinAggregateOutputType | null
    _max: StreamingDataMaxAggregateOutputType | null
  }

  type GetStreamingDataGroupByPayload<T extends StreamingDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamingDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamingDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamingDataGroupByOutputType[P]>
            : GetScalarType<T[P], StreamingDataGroupByOutputType[P]>
        }
      >
    >


  export type StreamingDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseSalaryIM?: boolean
    baseSalaryRoom?: boolean
    diamondsIM?: boolean
    diamondsRoom?: boolean
    diamondsTotal?: boolean
    diamondsAndPoints?: boolean
    diamondsPenalties?: boolean
    diamondsComisions?: boolean
    rewardOfPoints?: boolean
    dailyBonusOfSuperStreamer?: boolean
    roomBonus?: boolean
    enchantingGodesBonus?: boolean
    streamerSalary?: boolean
    agencySalary?: boolean
    streamerId?: boolean
    weekId?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamingData"]>

  export type StreamingDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseSalaryIM?: boolean
    baseSalaryRoom?: boolean
    diamondsIM?: boolean
    diamondsRoom?: boolean
    diamondsTotal?: boolean
    diamondsAndPoints?: boolean
    diamondsPenalties?: boolean
    diamondsComisions?: boolean
    rewardOfPoints?: boolean
    dailyBonusOfSuperStreamer?: boolean
    roomBonus?: boolean
    enchantingGodesBonus?: boolean
    streamerSalary?: boolean
    agencySalary?: boolean
    streamerId?: boolean
    weekId?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamingData"]>

  export type StreamingDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseSalaryIM?: boolean
    baseSalaryRoom?: boolean
    diamondsIM?: boolean
    diamondsRoom?: boolean
    diamondsTotal?: boolean
    diamondsAndPoints?: boolean
    diamondsPenalties?: boolean
    diamondsComisions?: boolean
    rewardOfPoints?: boolean
    dailyBonusOfSuperStreamer?: boolean
    roomBonus?: boolean
    enchantingGodesBonus?: boolean
    streamerSalary?: boolean
    agencySalary?: boolean
    streamerId?: boolean
    weekId?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamingData"]>

  export type StreamingDataSelectScalar = {
    id?: boolean
    baseSalaryIM?: boolean
    baseSalaryRoom?: boolean
    diamondsIM?: boolean
    diamondsRoom?: boolean
    diamondsTotal?: boolean
    diamondsAndPoints?: boolean
    diamondsPenalties?: boolean
    diamondsComisions?: boolean
    rewardOfPoints?: boolean
    dailyBonusOfSuperStreamer?: boolean
    roomBonus?: boolean
    enchantingGodesBonus?: boolean
    streamerSalary?: boolean
    agencySalary?: boolean
    streamerId?: boolean
    weekId?: boolean
  }

  export type StreamingDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseSalaryIM" | "baseSalaryRoom" | "diamondsIM" | "diamondsRoom" | "diamondsTotal" | "diamondsAndPoints" | "diamondsPenalties" | "diamondsComisions" | "rewardOfPoints" | "dailyBonusOfSuperStreamer" | "roomBonus" | "enchantingGodesBonus" | "streamerSalary" | "agencySalary" | "streamerId" | "weekId", ExtArgs["result"]["streamingData"]>
  export type StreamingDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }
  export type StreamingDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }
  export type StreamingDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    week?: boolean | WeekDefaultArgs<ExtArgs>
  }

  export type $StreamingDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamingData"
    objects: {
      streamer: Prisma.$StreamerPayload<ExtArgs>
      week: Prisma.$WeekPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      baseSalaryIM: number
      baseSalaryRoom: number
      diamondsIM: number
      diamondsRoom: number
      diamondsTotal: number
      diamondsAndPoints: number
      diamondsPenalties: number
      diamondsComisions: number
      rewardOfPoints: number
      dailyBonusOfSuperStreamer: number
      roomBonus: number
      enchantingGodesBonus: number
      streamerSalary: number
      agencySalary: number
      streamerId: string
      weekId: string
    }, ExtArgs["result"]["streamingData"]>
    composites: {}
  }

  type StreamingDataGetPayload<S extends boolean | null | undefined | StreamingDataDefaultArgs> = $Result.GetResult<Prisma.$StreamingDataPayload, S>

  type StreamingDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamingDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamingDataCountAggregateInputType | true
    }

  export interface StreamingDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamingData'], meta: { name: 'StreamingData' } }
    /**
     * Find zero or one StreamingData that matches the filter.
     * @param {StreamingDataFindUniqueArgs} args - Arguments to find a StreamingData
     * @example
     * // Get one StreamingData
     * const streamingData = await prisma.streamingData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamingDataFindUniqueArgs>(args: SelectSubset<T, StreamingDataFindUniqueArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamingData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamingDataFindUniqueOrThrowArgs} args - Arguments to find a StreamingData
     * @example
     * // Get one StreamingData
     * const streamingData = await prisma.streamingData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamingDataFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamingDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataFindFirstArgs} args - Arguments to find a StreamingData
     * @example
     * // Get one StreamingData
     * const streamingData = await prisma.streamingData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamingDataFindFirstArgs>(args?: SelectSubset<T, StreamingDataFindFirstArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamingData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataFindFirstOrThrowArgs} args - Arguments to find a StreamingData
     * @example
     * // Get one StreamingData
     * const streamingData = await prisma.streamingData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamingDataFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamingDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamingData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamingData
     * const streamingData = await prisma.streamingData.findMany()
     * 
     * // Get first 10 StreamingData
     * const streamingData = await prisma.streamingData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamingDataWithIdOnly = await prisma.streamingData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamingDataFindManyArgs>(args?: SelectSubset<T, StreamingDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamingData.
     * @param {StreamingDataCreateArgs} args - Arguments to create a StreamingData.
     * @example
     * // Create one StreamingData
     * const StreamingData = await prisma.streamingData.create({
     *   data: {
     *     // ... data to create a StreamingData
     *   }
     * })
     * 
     */
    create<T extends StreamingDataCreateArgs>(args: SelectSubset<T, StreamingDataCreateArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamingData.
     * @param {StreamingDataCreateManyArgs} args - Arguments to create many StreamingData.
     * @example
     * // Create many StreamingData
     * const streamingData = await prisma.streamingData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamingDataCreateManyArgs>(args?: SelectSubset<T, StreamingDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamingData and returns the data saved in the database.
     * @param {StreamingDataCreateManyAndReturnArgs} args - Arguments to create many StreamingData.
     * @example
     * // Create many StreamingData
     * const streamingData = await prisma.streamingData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamingData and only return the `id`
     * const streamingDataWithIdOnly = await prisma.streamingData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamingDataCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamingDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamingData.
     * @param {StreamingDataDeleteArgs} args - Arguments to delete one StreamingData.
     * @example
     * // Delete one StreamingData
     * const StreamingData = await prisma.streamingData.delete({
     *   where: {
     *     // ... filter to delete one StreamingData
     *   }
     * })
     * 
     */
    delete<T extends StreamingDataDeleteArgs>(args: SelectSubset<T, StreamingDataDeleteArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamingData.
     * @param {StreamingDataUpdateArgs} args - Arguments to update one StreamingData.
     * @example
     * // Update one StreamingData
     * const streamingData = await prisma.streamingData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamingDataUpdateArgs>(args: SelectSubset<T, StreamingDataUpdateArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamingData.
     * @param {StreamingDataDeleteManyArgs} args - Arguments to filter StreamingData to delete.
     * @example
     * // Delete a few StreamingData
     * const { count } = await prisma.streamingData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamingDataDeleteManyArgs>(args?: SelectSubset<T, StreamingDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamingData
     * const streamingData = await prisma.streamingData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamingDataUpdateManyArgs>(args: SelectSubset<T, StreamingDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamingData and returns the data updated in the database.
     * @param {StreamingDataUpdateManyAndReturnArgs} args - Arguments to update many StreamingData.
     * @example
     * // Update many StreamingData
     * const streamingData = await prisma.streamingData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamingData and only return the `id`
     * const streamingDataWithIdOnly = await prisma.streamingData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamingDataUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamingDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamingData.
     * @param {StreamingDataUpsertArgs} args - Arguments to update or create a StreamingData.
     * @example
     * // Update or create a StreamingData
     * const streamingData = await prisma.streamingData.upsert({
     *   create: {
     *     // ... data to create a StreamingData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamingData we want to update
     *   }
     * })
     */
    upsert<T extends StreamingDataUpsertArgs>(args: SelectSubset<T, StreamingDataUpsertArgs<ExtArgs>>): Prisma__StreamingDataClient<$Result.GetResult<Prisma.$StreamingDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataCountArgs} args - Arguments to filter StreamingData to count.
     * @example
     * // Count the number of StreamingData
     * const count = await prisma.streamingData.count({
     *   where: {
     *     // ... the filter for the StreamingData we want to count
     *   }
     * })
    **/
    count<T extends StreamingDataCountArgs>(
      args?: Subset<T, StreamingDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamingDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamingDataAggregateArgs>(args: Subset<T, StreamingDataAggregateArgs>): Prisma.PrismaPromise<GetStreamingDataAggregateType<T>>

    /**
     * Group by StreamingData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamingDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamingDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamingDataGroupByArgs['orderBy'] }
        : { orderBy?: StreamingDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamingDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamingDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamingData model
   */
  readonly fields: StreamingDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamingData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamingDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends StreamerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamerDefaultArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    week<T extends WeekDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeekDefaultArgs<ExtArgs>>): Prisma__WeekClient<$Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamingData model
   */
  interface StreamingDataFieldRefs {
    readonly id: FieldRef<"StreamingData", 'String'>
    readonly baseSalaryIM: FieldRef<"StreamingData", 'Float'>
    readonly baseSalaryRoom: FieldRef<"StreamingData", 'Float'>
    readonly diamondsIM: FieldRef<"StreamingData", 'Int'>
    readonly diamondsRoom: FieldRef<"StreamingData", 'Int'>
    readonly diamondsTotal: FieldRef<"StreamingData", 'Int'>
    readonly diamondsAndPoints: FieldRef<"StreamingData", 'Int'>
    readonly diamondsPenalties: FieldRef<"StreamingData", 'Int'>
    readonly diamondsComisions: FieldRef<"StreamingData", 'Float'>
    readonly rewardOfPoints: FieldRef<"StreamingData", 'Float'>
    readonly dailyBonusOfSuperStreamer: FieldRef<"StreamingData", 'Float'>
    readonly roomBonus: FieldRef<"StreamingData", 'Float'>
    readonly enchantingGodesBonus: FieldRef<"StreamingData", 'Float'>
    readonly streamerSalary: FieldRef<"StreamingData", 'Float'>
    readonly agencySalary: FieldRef<"StreamingData", 'Float'>
    readonly streamerId: FieldRef<"StreamingData", 'String'>
    readonly weekId: FieldRef<"StreamingData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StreamingData findUnique
   */
  export type StreamingDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter, which StreamingData to fetch.
     */
    where: StreamingDataWhereUniqueInput
  }

  /**
   * StreamingData findUniqueOrThrow
   */
  export type StreamingDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter, which StreamingData to fetch.
     */
    where: StreamingDataWhereUniqueInput
  }

  /**
   * StreamingData findFirst
   */
  export type StreamingDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter, which StreamingData to fetch.
     */
    where?: StreamingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingData to fetch.
     */
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingData.
     */
    cursor?: StreamingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingData.
     */
    distinct?: StreamingDataScalarFieldEnum | StreamingDataScalarFieldEnum[]
  }

  /**
   * StreamingData findFirstOrThrow
   */
  export type StreamingDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter, which StreamingData to fetch.
     */
    where?: StreamingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingData to fetch.
     */
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamingData.
     */
    cursor?: StreamingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamingData.
     */
    distinct?: StreamingDataScalarFieldEnum | StreamingDataScalarFieldEnum[]
  }

  /**
   * StreamingData findMany
   */
  export type StreamingDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter, which StreamingData to fetch.
     */
    where?: StreamingDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamingData to fetch.
     */
    orderBy?: StreamingDataOrderByWithRelationInput | StreamingDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamingData.
     */
    cursor?: StreamingDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamingData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamingData.
     */
    skip?: number
    distinct?: StreamingDataScalarFieldEnum | StreamingDataScalarFieldEnum[]
  }

  /**
   * StreamingData create
   */
  export type StreamingDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamingData.
     */
    data: XOR<StreamingDataCreateInput, StreamingDataUncheckedCreateInput>
  }

  /**
   * StreamingData createMany
   */
  export type StreamingDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamingData.
     */
    data: StreamingDataCreateManyInput | StreamingDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamingData createManyAndReturn
   */
  export type StreamingDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * The data used to create many StreamingData.
     */
    data: StreamingDataCreateManyInput | StreamingDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamingData update
   */
  export type StreamingDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamingData.
     */
    data: XOR<StreamingDataUpdateInput, StreamingDataUncheckedUpdateInput>
    /**
     * Choose, which StreamingData to update.
     */
    where: StreamingDataWhereUniqueInput
  }

  /**
   * StreamingData updateMany
   */
  export type StreamingDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamingData.
     */
    data: XOR<StreamingDataUpdateManyMutationInput, StreamingDataUncheckedUpdateManyInput>
    /**
     * Filter which StreamingData to update
     */
    where?: StreamingDataWhereInput
    /**
     * Limit how many StreamingData to update.
     */
    limit?: number
  }

  /**
   * StreamingData updateManyAndReturn
   */
  export type StreamingDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * The data used to update StreamingData.
     */
    data: XOR<StreamingDataUpdateManyMutationInput, StreamingDataUncheckedUpdateManyInput>
    /**
     * Filter which StreamingData to update
     */
    where?: StreamingDataWhereInput
    /**
     * Limit how many StreamingData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamingData upsert
   */
  export type StreamingDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamingData to update in case it exists.
     */
    where: StreamingDataWhereUniqueInput
    /**
     * In case the StreamingData found by the `where` argument doesn't exist, create a new StreamingData with this data.
     */
    create: XOR<StreamingDataCreateInput, StreamingDataUncheckedCreateInput>
    /**
     * In case the StreamingData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamingDataUpdateInput, StreamingDataUncheckedUpdateInput>
  }

  /**
   * StreamingData delete
   */
  export type StreamingDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
    /**
     * Filter which StreamingData to delete.
     */
    where: StreamingDataWhereUniqueInput
  }

  /**
   * StreamingData deleteMany
   */
  export type StreamingDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamingData to delete
     */
    where?: StreamingDataWhereInput
    /**
     * Limit how many StreamingData to delete.
     */
    limit?: number
  }

  /**
   * StreamingData without action
   */
  export type StreamingDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamingData
     */
    select?: StreamingDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamingData
     */
    omit?: StreamingDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamingDataInclude<ExtArgs> | null
  }


  /**
   * Model Referal
   */

  export type AggregateReferal = {
    _count: ReferalCountAggregateOutputType | null
    _min: ReferalMinAggregateOutputType | null
    _max: ReferalMaxAggregateOutputType | null
  }

  export type ReferalMinAggregateOutputType = {
    id: string | null
    streamerId: string | null
    referredId: string | null
    createdAt: Date | null
  }

  export type ReferalMaxAggregateOutputType = {
    id: string | null
    streamerId: string | null
    referredId: string | null
    createdAt: Date | null
  }

  export type ReferalCountAggregateOutputType = {
    id: number
    streamerId: number
    referredId: number
    createdAt: number
    _all: number
  }


  export type ReferalMinAggregateInputType = {
    id?: true
    streamerId?: true
    referredId?: true
    createdAt?: true
  }

  export type ReferalMaxAggregateInputType = {
    id?: true
    streamerId?: true
    referredId?: true
    createdAt?: true
  }

  export type ReferalCountAggregateInputType = {
    id?: true
    streamerId?: true
    referredId?: true
    createdAt?: true
    _all?: true
  }

  export type ReferalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referal to aggregate.
     */
    where?: ReferalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referals to fetch.
     */
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referals
    **/
    _count?: true | ReferalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferalMaxAggregateInputType
  }

  export type GetReferalAggregateType<T extends ReferalAggregateArgs> = {
        [P in keyof T & keyof AggregateReferal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferal[P]>
      : GetScalarType<T[P], AggregateReferal[P]>
  }




  export type ReferalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferalWhereInput
    orderBy?: ReferalOrderByWithAggregationInput | ReferalOrderByWithAggregationInput[]
    by: ReferalScalarFieldEnum[] | ReferalScalarFieldEnum
    having?: ReferalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferalCountAggregateInputType | true
    _min?: ReferalMinAggregateInputType
    _max?: ReferalMaxAggregateInputType
  }

  export type ReferalGroupByOutputType = {
    id: string
    streamerId: string
    referredId: string
    createdAt: Date
    _count: ReferalCountAggregateOutputType | null
    _min: ReferalMinAggregateOutputType | null
    _max: ReferalMaxAggregateOutputType | null
  }

  type GetReferalGroupByPayload<T extends ReferalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferalGroupByOutputType[P]>
            : GetScalarType<T[P], ReferalGroupByOutputType[P]>
        }
      >
    >


  export type ReferalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamerId?: boolean
    referredId?: boolean
    createdAt?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referal"]>

  export type ReferalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamerId?: boolean
    referredId?: boolean
    createdAt?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referal"]>

  export type ReferalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streamerId?: boolean
    referredId?: boolean
    createdAt?: boolean
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referal"]>

  export type ReferalSelectScalar = {
    id?: boolean
    streamerId?: boolean
    referredId?: boolean
    createdAt?: boolean
  }

  export type ReferalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streamerId" | "referredId" | "createdAt", ExtArgs["result"]["referal"]>
  export type ReferalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }
  export type ReferalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }
  export type ReferalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | StreamerDefaultArgs<ExtArgs>
    referred?: boolean | StreamerDefaultArgs<ExtArgs>
  }

  export type $ReferalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referal"
    objects: {
      streamer: Prisma.$StreamerPayload<ExtArgs>
      referred: Prisma.$StreamerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      streamerId: string
      referredId: string
      createdAt: Date
    }, ExtArgs["result"]["referal"]>
    composites: {}
  }

  type ReferalGetPayload<S extends boolean | null | undefined | ReferalDefaultArgs> = $Result.GetResult<Prisma.$ReferalPayload, S>

  type ReferalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferalCountAggregateInputType | true
    }

  export interface ReferalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referal'], meta: { name: 'Referal' } }
    /**
     * Find zero or one Referal that matches the filter.
     * @param {ReferalFindUniqueArgs} args - Arguments to find a Referal
     * @example
     * // Get one Referal
     * const referal = await prisma.referal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferalFindUniqueArgs>(args: SelectSubset<T, ReferalFindUniqueArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferalFindUniqueOrThrowArgs} args - Arguments to find a Referal
     * @example
     * // Get one Referal
     * const referal = await prisma.referal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferalFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalFindFirstArgs} args - Arguments to find a Referal
     * @example
     * // Get one Referal
     * const referal = await prisma.referal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferalFindFirstArgs>(args?: SelectSubset<T, ReferalFindFirstArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalFindFirstOrThrowArgs} args - Arguments to find a Referal
     * @example
     * // Get one Referal
     * const referal = await prisma.referal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferalFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referals
     * const referals = await prisma.referal.findMany()
     * 
     * // Get first 10 Referals
     * const referals = await prisma.referal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referalWithIdOnly = await prisma.referal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferalFindManyArgs>(args?: SelectSubset<T, ReferalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referal.
     * @param {ReferalCreateArgs} args - Arguments to create a Referal.
     * @example
     * // Create one Referal
     * const Referal = await prisma.referal.create({
     *   data: {
     *     // ... data to create a Referal
     *   }
     * })
     * 
     */
    create<T extends ReferalCreateArgs>(args: SelectSubset<T, ReferalCreateArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referals.
     * @param {ReferalCreateManyArgs} args - Arguments to create many Referals.
     * @example
     * // Create many Referals
     * const referal = await prisma.referal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferalCreateManyArgs>(args?: SelectSubset<T, ReferalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referals and returns the data saved in the database.
     * @param {ReferalCreateManyAndReturnArgs} args - Arguments to create many Referals.
     * @example
     * // Create many Referals
     * const referal = await prisma.referal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referals and only return the `id`
     * const referalWithIdOnly = await prisma.referal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferalCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referal.
     * @param {ReferalDeleteArgs} args - Arguments to delete one Referal.
     * @example
     * // Delete one Referal
     * const Referal = await prisma.referal.delete({
     *   where: {
     *     // ... filter to delete one Referal
     *   }
     * })
     * 
     */
    delete<T extends ReferalDeleteArgs>(args: SelectSubset<T, ReferalDeleteArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referal.
     * @param {ReferalUpdateArgs} args - Arguments to update one Referal.
     * @example
     * // Update one Referal
     * const referal = await prisma.referal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferalUpdateArgs>(args: SelectSubset<T, ReferalUpdateArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referals.
     * @param {ReferalDeleteManyArgs} args - Arguments to filter Referals to delete.
     * @example
     * // Delete a few Referals
     * const { count } = await prisma.referal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferalDeleteManyArgs>(args?: SelectSubset<T, ReferalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referals
     * const referal = await prisma.referal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferalUpdateManyArgs>(args: SelectSubset<T, ReferalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referals and returns the data updated in the database.
     * @param {ReferalUpdateManyAndReturnArgs} args - Arguments to update many Referals.
     * @example
     * // Update many Referals
     * const referal = await prisma.referal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referals and only return the `id`
     * const referalWithIdOnly = await prisma.referal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferalUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referal.
     * @param {ReferalUpsertArgs} args - Arguments to update or create a Referal.
     * @example
     * // Update or create a Referal
     * const referal = await prisma.referal.upsert({
     *   create: {
     *     // ... data to create a Referal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referal we want to update
     *   }
     * })
     */
    upsert<T extends ReferalUpsertArgs>(args: SelectSubset<T, ReferalUpsertArgs<ExtArgs>>): Prisma__ReferalClient<$Result.GetResult<Prisma.$ReferalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalCountArgs} args - Arguments to filter Referals to count.
     * @example
     * // Count the number of Referals
     * const count = await prisma.referal.count({
     *   where: {
     *     // ... the filter for the Referals we want to count
     *   }
     * })
    **/
    count<T extends ReferalCountArgs>(
      args?: Subset<T, ReferalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferalAggregateArgs>(args: Subset<T, ReferalAggregateArgs>): Prisma.PrismaPromise<GetReferalAggregateType<T>>

    /**
     * Group by Referal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferalGroupByArgs['orderBy'] }
        : { orderBy?: ReferalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referal model
   */
  readonly fields: ReferalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends StreamerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamerDefaultArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referred<T extends StreamerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamerDefaultArgs<ExtArgs>>): Prisma__StreamerClient<$Result.GetResult<Prisma.$StreamerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referal model
   */
  interface ReferalFieldRefs {
    readonly id: FieldRef<"Referal", 'String'>
    readonly streamerId: FieldRef<"Referal", 'String'>
    readonly referredId: FieldRef<"Referal", 'String'>
    readonly createdAt: FieldRef<"Referal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referal findUnique
   */
  export type ReferalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter, which Referal to fetch.
     */
    where: ReferalWhereUniqueInput
  }

  /**
   * Referal findUniqueOrThrow
   */
  export type ReferalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter, which Referal to fetch.
     */
    where: ReferalWhereUniqueInput
  }

  /**
   * Referal findFirst
   */
  export type ReferalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter, which Referal to fetch.
     */
    where?: ReferalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referals to fetch.
     */
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referals.
     */
    cursor?: ReferalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referals.
     */
    distinct?: ReferalScalarFieldEnum | ReferalScalarFieldEnum[]
  }

  /**
   * Referal findFirstOrThrow
   */
  export type ReferalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter, which Referal to fetch.
     */
    where?: ReferalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referals to fetch.
     */
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referals.
     */
    cursor?: ReferalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referals.
     */
    distinct?: ReferalScalarFieldEnum | ReferalScalarFieldEnum[]
  }

  /**
   * Referal findMany
   */
  export type ReferalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter, which Referals to fetch.
     */
    where?: ReferalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referals to fetch.
     */
    orderBy?: ReferalOrderByWithRelationInput | ReferalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referals.
     */
    cursor?: ReferalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referals.
     */
    skip?: number
    distinct?: ReferalScalarFieldEnum | ReferalScalarFieldEnum[]
  }

  /**
   * Referal create
   */
  export type ReferalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * The data needed to create a Referal.
     */
    data: XOR<ReferalCreateInput, ReferalUncheckedCreateInput>
  }

  /**
   * Referal createMany
   */
  export type ReferalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referals.
     */
    data: ReferalCreateManyInput | ReferalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referal createManyAndReturn
   */
  export type ReferalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * The data used to create many Referals.
     */
    data: ReferalCreateManyInput | ReferalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referal update
   */
  export type ReferalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * The data needed to update a Referal.
     */
    data: XOR<ReferalUpdateInput, ReferalUncheckedUpdateInput>
    /**
     * Choose, which Referal to update.
     */
    where: ReferalWhereUniqueInput
  }

  /**
   * Referal updateMany
   */
  export type ReferalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referals.
     */
    data: XOR<ReferalUpdateManyMutationInput, ReferalUncheckedUpdateManyInput>
    /**
     * Filter which Referals to update
     */
    where?: ReferalWhereInput
    /**
     * Limit how many Referals to update.
     */
    limit?: number
  }

  /**
   * Referal updateManyAndReturn
   */
  export type ReferalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * The data used to update Referals.
     */
    data: XOR<ReferalUpdateManyMutationInput, ReferalUncheckedUpdateManyInput>
    /**
     * Filter which Referals to update
     */
    where?: ReferalWhereInput
    /**
     * Limit how many Referals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referal upsert
   */
  export type ReferalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * The filter to search for the Referal to update in case it exists.
     */
    where: ReferalWhereUniqueInput
    /**
     * In case the Referal found by the `where` argument doesn't exist, create a new Referal with this data.
     */
    create: XOR<ReferalCreateInput, ReferalUncheckedCreateInput>
    /**
     * In case the Referal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferalUpdateInput, ReferalUncheckedUpdateInput>
  }

  /**
   * Referal delete
   */
  export type ReferalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
    /**
     * Filter which Referal to delete.
     */
    where: ReferalWhereUniqueInput
  }

  /**
   * Referal deleteMany
   */
  export type ReferalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referals to delete
     */
    where?: ReferalWhereInput
    /**
     * Limit how many Referals to delete.
     */
    limit?: number
  }

  /**
   * Referal without action
   */
  export type ReferalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referal
     */
    select?: ReferalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referal
     */
    omit?: ReferalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StreamerScalarFieldEnum: {
    id: 'id',
    wahaID: 'wahaID',
    wahaName: 'wahaName',
    name: 'name',
    phoneNumber: 'phoneNumber',
    bankAccount: 'bankAccount',
    createdAt: 'createdAt'
  };

  export type StreamerScalarFieldEnum = (typeof StreamerScalarFieldEnum)[keyof typeof StreamerScalarFieldEnum]


  export const WeekScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    startDate: 'startDate',
    endDate: 'endDate',
    closed: 'closed',
    observation: 'observation'
  };

  export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum]


  export const StreamingDataScalarFieldEnum: {
    id: 'id',
    baseSalaryIM: 'baseSalaryIM',
    baseSalaryRoom: 'baseSalaryRoom',
    diamondsIM: 'diamondsIM',
    diamondsRoom: 'diamondsRoom',
    diamondsTotal: 'diamondsTotal',
    diamondsAndPoints: 'diamondsAndPoints',
    diamondsPenalties: 'diamondsPenalties',
    diamondsComisions: 'diamondsComisions',
    rewardOfPoints: 'rewardOfPoints',
    dailyBonusOfSuperStreamer: 'dailyBonusOfSuperStreamer',
    roomBonus: 'roomBonus',
    enchantingGodesBonus: 'enchantingGodesBonus',
    streamerSalary: 'streamerSalary',
    agencySalary: 'agencySalary',
    streamerId: 'streamerId',
    weekId: 'weekId'
  };

  export type StreamingDataScalarFieldEnum = (typeof StreamingDataScalarFieldEnum)[keyof typeof StreamingDataScalarFieldEnum]


  export const ReferalScalarFieldEnum: {
    id: 'id',
    streamerId: 'streamerId',
    referredId: 'referredId',
    createdAt: 'createdAt'
  };

  export type ReferalScalarFieldEnum = (typeof ReferalScalarFieldEnum)[keyof typeof ReferalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StreamerWhereInput = {
    AND?: StreamerWhereInput | StreamerWhereInput[]
    OR?: StreamerWhereInput[]
    NOT?: StreamerWhereInput | StreamerWhereInput[]
    id?: StringFilter<"Streamer"> | string
    wahaID?: StringFilter<"Streamer"> | string
    wahaName?: StringFilter<"Streamer"> | string
    name?: StringFilter<"Streamer"> | string
    phoneNumber?: StringNullableFilter<"Streamer"> | string | null
    bankAccount?: StringNullableFilter<"Streamer"> | string | null
    createdAt?: DateTimeFilter<"Streamer"> | Date | string
    referals?: ReferalListRelationFilter
    referredBy?: ReferalListRelationFilter
    streamingData?: StreamingDataListRelationFilter
  }

  export type StreamerOrderByWithRelationInput = {
    id?: SortOrder
    wahaID?: SortOrder
    wahaName?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referals?: ReferalOrderByRelationAggregateInput
    referredBy?: ReferalOrderByRelationAggregateInput
    streamingData?: StreamingDataOrderByRelationAggregateInput
  }

  export type StreamerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wahaID?: string
    AND?: StreamerWhereInput | StreamerWhereInput[]
    OR?: StreamerWhereInput[]
    NOT?: StreamerWhereInput | StreamerWhereInput[]
    wahaName?: StringFilter<"Streamer"> | string
    name?: StringFilter<"Streamer"> | string
    phoneNumber?: StringNullableFilter<"Streamer"> | string | null
    bankAccount?: StringNullableFilter<"Streamer"> | string | null
    createdAt?: DateTimeFilter<"Streamer"> | Date | string
    referals?: ReferalListRelationFilter
    referredBy?: ReferalListRelationFilter
    streamingData?: StreamingDataListRelationFilter
  }, "id" | "wahaID">

  export type StreamerOrderByWithAggregationInput = {
    id?: SortOrder
    wahaID?: SortOrder
    wahaName?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StreamerCountOrderByAggregateInput
    _max?: StreamerMaxOrderByAggregateInput
    _min?: StreamerMinOrderByAggregateInput
  }

  export type StreamerScalarWhereWithAggregatesInput = {
    AND?: StreamerScalarWhereWithAggregatesInput | StreamerScalarWhereWithAggregatesInput[]
    OR?: StreamerScalarWhereWithAggregatesInput[]
    NOT?: StreamerScalarWhereWithAggregatesInput | StreamerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streamer"> | string
    wahaID?: StringWithAggregatesFilter<"Streamer"> | string
    wahaName?: StringWithAggregatesFilter<"Streamer"> | string
    name?: StringWithAggregatesFilter<"Streamer"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Streamer"> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<"Streamer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Streamer"> | Date | string
  }

  export type WeekWhereInput = {
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    id?: StringFilter<"Week"> | string
    name?: StringFilter<"Week"> | string
    date?: DateTimeFilter<"Week"> | Date | string
    startDate?: DateTimeFilter<"Week"> | Date | string
    endDate?: DateTimeFilter<"Week"> | Date | string
    closed?: BoolFilter<"Week"> | boolean
    observation?: StringNullableFilter<"Week"> | string | null
    data?: StreamingDataListRelationFilter
  }

  export type WeekOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    closed?: SortOrder
    observation?: SortOrderInput | SortOrder
    data?: StreamingDataOrderByRelationAggregateInput
  }

  export type WeekWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeekWhereInput | WeekWhereInput[]
    OR?: WeekWhereInput[]
    NOT?: WeekWhereInput | WeekWhereInput[]
    name?: StringFilter<"Week"> | string
    date?: DateTimeFilter<"Week"> | Date | string
    startDate?: DateTimeFilter<"Week"> | Date | string
    endDate?: DateTimeFilter<"Week"> | Date | string
    closed?: BoolFilter<"Week"> | boolean
    observation?: StringNullableFilter<"Week"> | string | null
    data?: StreamingDataListRelationFilter
  }, "id">

  export type WeekOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    closed?: SortOrder
    observation?: SortOrderInput | SortOrder
    _count?: WeekCountOrderByAggregateInput
    _max?: WeekMaxOrderByAggregateInput
    _min?: WeekMinOrderByAggregateInput
  }

  export type WeekScalarWhereWithAggregatesInput = {
    AND?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    OR?: WeekScalarWhereWithAggregatesInput[]
    NOT?: WeekScalarWhereWithAggregatesInput | WeekScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Week"> | string
    name?: StringWithAggregatesFilter<"Week"> | string
    date?: DateTimeWithAggregatesFilter<"Week"> | Date | string
    startDate?: DateTimeWithAggregatesFilter<"Week"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Week"> | Date | string
    closed?: BoolWithAggregatesFilter<"Week"> | boolean
    observation?: StringNullableWithAggregatesFilter<"Week"> | string | null
  }

  export type StreamingDataWhereInput = {
    AND?: StreamingDataWhereInput | StreamingDataWhereInput[]
    OR?: StreamingDataWhereInput[]
    NOT?: StreamingDataWhereInput | StreamingDataWhereInput[]
    id?: StringFilter<"StreamingData"> | string
    baseSalaryIM?: FloatFilter<"StreamingData"> | number
    baseSalaryRoom?: FloatFilter<"StreamingData"> | number
    diamondsIM?: IntFilter<"StreamingData"> | number
    diamondsRoom?: IntFilter<"StreamingData"> | number
    diamondsTotal?: IntFilter<"StreamingData"> | number
    diamondsAndPoints?: IntFilter<"StreamingData"> | number
    diamondsPenalties?: IntFilter<"StreamingData"> | number
    diamondsComisions?: FloatFilter<"StreamingData"> | number
    rewardOfPoints?: FloatFilter<"StreamingData"> | number
    dailyBonusOfSuperStreamer?: FloatFilter<"StreamingData"> | number
    roomBonus?: FloatFilter<"StreamingData"> | number
    enchantingGodesBonus?: FloatFilter<"StreamingData"> | number
    streamerSalary?: FloatFilter<"StreamingData"> | number
    agencySalary?: FloatFilter<"StreamingData"> | number
    streamerId?: StringFilter<"StreamingData"> | string
    weekId?: StringFilter<"StreamingData"> | string
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
  }

  export type StreamingDataOrderByWithRelationInput = {
    id?: SortOrder
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
    streamerId?: SortOrder
    weekId?: SortOrder
    streamer?: StreamerOrderByWithRelationInput
    week?: WeekOrderByWithRelationInput
  }

  export type StreamingDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamingDataWhereInput | StreamingDataWhereInput[]
    OR?: StreamingDataWhereInput[]
    NOT?: StreamingDataWhereInput | StreamingDataWhereInput[]
    baseSalaryIM?: FloatFilter<"StreamingData"> | number
    baseSalaryRoom?: FloatFilter<"StreamingData"> | number
    diamondsIM?: IntFilter<"StreamingData"> | number
    diamondsRoom?: IntFilter<"StreamingData"> | number
    diamondsTotal?: IntFilter<"StreamingData"> | number
    diamondsAndPoints?: IntFilter<"StreamingData"> | number
    diamondsPenalties?: IntFilter<"StreamingData"> | number
    diamondsComisions?: FloatFilter<"StreamingData"> | number
    rewardOfPoints?: FloatFilter<"StreamingData"> | number
    dailyBonusOfSuperStreamer?: FloatFilter<"StreamingData"> | number
    roomBonus?: FloatFilter<"StreamingData"> | number
    enchantingGodesBonus?: FloatFilter<"StreamingData"> | number
    streamerSalary?: FloatFilter<"StreamingData"> | number
    agencySalary?: FloatFilter<"StreamingData"> | number
    streamerId?: StringFilter<"StreamingData"> | string
    weekId?: StringFilter<"StreamingData"> | string
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
    week?: XOR<WeekScalarRelationFilter, WeekWhereInput>
  }, "id">

  export type StreamingDataOrderByWithAggregationInput = {
    id?: SortOrder
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
    streamerId?: SortOrder
    weekId?: SortOrder
    _count?: StreamingDataCountOrderByAggregateInput
    _avg?: StreamingDataAvgOrderByAggregateInput
    _max?: StreamingDataMaxOrderByAggregateInput
    _min?: StreamingDataMinOrderByAggregateInput
    _sum?: StreamingDataSumOrderByAggregateInput
  }

  export type StreamingDataScalarWhereWithAggregatesInput = {
    AND?: StreamingDataScalarWhereWithAggregatesInput | StreamingDataScalarWhereWithAggregatesInput[]
    OR?: StreamingDataScalarWhereWithAggregatesInput[]
    NOT?: StreamingDataScalarWhereWithAggregatesInput | StreamingDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamingData"> | string
    baseSalaryIM?: FloatWithAggregatesFilter<"StreamingData"> | number
    baseSalaryRoom?: FloatWithAggregatesFilter<"StreamingData"> | number
    diamondsIM?: IntWithAggregatesFilter<"StreamingData"> | number
    diamondsRoom?: IntWithAggregatesFilter<"StreamingData"> | number
    diamondsTotal?: IntWithAggregatesFilter<"StreamingData"> | number
    diamondsAndPoints?: IntWithAggregatesFilter<"StreamingData"> | number
    diamondsPenalties?: IntWithAggregatesFilter<"StreamingData"> | number
    diamondsComisions?: FloatWithAggregatesFilter<"StreamingData"> | number
    rewardOfPoints?: FloatWithAggregatesFilter<"StreamingData"> | number
    dailyBonusOfSuperStreamer?: FloatWithAggregatesFilter<"StreamingData"> | number
    roomBonus?: FloatWithAggregatesFilter<"StreamingData"> | number
    enchantingGodesBonus?: FloatWithAggregatesFilter<"StreamingData"> | number
    streamerSalary?: FloatWithAggregatesFilter<"StreamingData"> | number
    agencySalary?: FloatWithAggregatesFilter<"StreamingData"> | number
    streamerId?: StringWithAggregatesFilter<"StreamingData"> | string
    weekId?: StringWithAggregatesFilter<"StreamingData"> | string
  }

  export type ReferalWhereInput = {
    AND?: ReferalWhereInput | ReferalWhereInput[]
    OR?: ReferalWhereInput[]
    NOT?: ReferalWhereInput | ReferalWhereInput[]
    id?: StringFilter<"Referal"> | string
    streamerId?: StringFilter<"Referal"> | string
    referredId?: StringFilter<"Referal"> | string
    createdAt?: DateTimeFilter<"Referal"> | Date | string
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
    referred?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
  }

  export type ReferalOrderByWithRelationInput = {
    id?: SortOrder
    streamerId?: SortOrder
    referredId?: SortOrder
    createdAt?: SortOrder
    streamer?: StreamerOrderByWithRelationInput
    referred?: StreamerOrderByWithRelationInput
  }

  export type ReferalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferalWhereInput | ReferalWhereInput[]
    OR?: ReferalWhereInput[]
    NOT?: ReferalWhereInput | ReferalWhereInput[]
    streamerId?: StringFilter<"Referal"> | string
    referredId?: StringFilter<"Referal"> | string
    createdAt?: DateTimeFilter<"Referal"> | Date | string
    streamer?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
    referred?: XOR<StreamerScalarRelationFilter, StreamerWhereInput>
  }, "id">

  export type ReferalOrderByWithAggregationInput = {
    id?: SortOrder
    streamerId?: SortOrder
    referredId?: SortOrder
    createdAt?: SortOrder
    _count?: ReferalCountOrderByAggregateInput
    _max?: ReferalMaxOrderByAggregateInput
    _min?: ReferalMinOrderByAggregateInput
  }

  export type ReferalScalarWhereWithAggregatesInput = {
    AND?: ReferalScalarWhereWithAggregatesInput | ReferalScalarWhereWithAggregatesInput[]
    OR?: ReferalScalarWhereWithAggregatesInput[]
    NOT?: ReferalScalarWhereWithAggregatesInput | ReferalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referal"> | string
    streamerId?: StringWithAggregatesFilter<"Referal"> | string
    referredId?: StringWithAggregatesFilter<"Referal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Referal"> | Date | string
  }

  export type StreamerCreateInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalCreateNestedManyWithoutStreamerInput
    referredBy?: ReferalCreateNestedManyWithoutReferredInput
    streamingData?: StreamingDataCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUncheckedCreateInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalUncheckedCreateNestedManyWithoutStreamerInput
    referredBy?: ReferalUncheckedCreateNestedManyWithoutReferredInput
    streamingData?: StreamingDataUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUpdateManyWithoutStreamerNestedInput
    referredBy?: ReferalUpdateManyWithoutReferredNestedInput
    streamingData?: StreamingDataUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUncheckedUpdateManyWithoutStreamerNestedInput
    referredBy?: ReferalUncheckedUpdateManyWithoutReferredNestedInput
    streamingData?: StreamingDataUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerCreateManyInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
  }

  export type StreamerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeekCreateInput = {
    id?: string
    name: string
    date: Date | string
    startDate: Date | string
    endDate: Date | string
    closed?: boolean
    observation?: string | null
    data?: StreamingDataCreateNestedManyWithoutWeekInput
  }

  export type WeekUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    startDate: Date | string
    endDate: Date | string
    closed?: boolean
    observation?: string | null
    data?: StreamingDataUncheckedCreateNestedManyWithoutWeekInput
  }

  export type WeekUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StreamingDataUpdateManyWithoutWeekNestedInput
  }

  export type WeekUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    data?: StreamingDataUncheckedUpdateManyWithoutWeekNestedInput
  }

  export type WeekCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    startDate: Date | string
    endDate: Date | string
    closed?: boolean
    observation?: string | null
  }

  export type WeekUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeekUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamingDataCreateInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamer: StreamerCreateNestedOneWithoutStreamingDataInput
    week: WeekCreateNestedOneWithoutDataInput
  }

  export type StreamingDataUncheckedCreateInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: string
    weekId: string
  }

  export type StreamingDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamer?: StreamerUpdateOneRequiredWithoutStreamingDataNestedInput
    week?: WeekUpdateOneRequiredWithoutDataNestedInput
  }

  export type StreamingDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamerId?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingDataCreateManyInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: string
    weekId: string
  }

  export type StreamingDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
  }

  export type StreamingDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamerId?: StringFieldUpdateOperationsInput | string
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type ReferalCreateInput = {
    id?: string
    createdAt?: Date | string
    streamer: StreamerCreateNestedOneWithoutReferalsInput
    referred: StreamerCreateNestedOneWithoutReferredByInput
  }

  export type ReferalUncheckedCreateInput = {
    id?: string
    streamerId: string
    referredId: string
    createdAt?: Date | string
  }

  export type ReferalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streamer?: StreamerUpdateOneRequiredWithoutReferalsNestedInput
    referred?: StreamerUpdateOneRequiredWithoutReferredByNestedInput
  }

  export type ReferalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferalCreateManyInput = {
    id?: string
    streamerId: string
    referredId: string
    createdAt?: Date | string
  }

  export type ReferalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReferalListRelationFilter = {
    every?: ReferalWhereInput
    some?: ReferalWhereInput
    none?: ReferalWhereInput
  }

  export type StreamingDataListRelationFilter = {
    every?: StreamingDataWhereInput
    some?: StreamingDataWhereInput
    none?: StreamingDataWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReferalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamingDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamerCountOrderByAggregateInput = {
    id?: SortOrder
    wahaID?: SortOrder
    wahaName?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    bankAccount?: SortOrder
    createdAt?: SortOrder
  }

  export type StreamerMaxOrderByAggregateInput = {
    id?: SortOrder
    wahaID?: SortOrder
    wahaName?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    bankAccount?: SortOrder
    createdAt?: SortOrder
  }

  export type StreamerMinOrderByAggregateInput = {
    id?: SortOrder
    wahaID?: SortOrder
    wahaName?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    bankAccount?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WeekCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    closed?: SortOrder
    observation?: SortOrder
  }

  export type WeekMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    closed?: SortOrder
    observation?: SortOrder
  }

  export type WeekMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    closed?: SortOrder
    observation?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StreamerScalarRelationFilter = {
    is?: StreamerWhereInput
    isNot?: StreamerWhereInput
  }

  export type WeekScalarRelationFilter = {
    is?: WeekWhereInput
    isNot?: WeekWhereInput
  }

  export type StreamingDataCountOrderByAggregateInput = {
    id?: SortOrder
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
    streamerId?: SortOrder
    weekId?: SortOrder
  }

  export type StreamingDataAvgOrderByAggregateInput = {
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
  }

  export type StreamingDataMaxOrderByAggregateInput = {
    id?: SortOrder
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
    streamerId?: SortOrder
    weekId?: SortOrder
  }

  export type StreamingDataMinOrderByAggregateInput = {
    id?: SortOrder
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
    streamerId?: SortOrder
    weekId?: SortOrder
  }

  export type StreamingDataSumOrderByAggregateInput = {
    baseSalaryIM?: SortOrder
    baseSalaryRoom?: SortOrder
    diamondsIM?: SortOrder
    diamondsRoom?: SortOrder
    diamondsTotal?: SortOrder
    diamondsAndPoints?: SortOrder
    diamondsPenalties?: SortOrder
    diamondsComisions?: SortOrder
    rewardOfPoints?: SortOrder
    dailyBonusOfSuperStreamer?: SortOrder
    roomBonus?: SortOrder
    enchantingGodesBonus?: SortOrder
    streamerSalary?: SortOrder
    agencySalary?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ReferalCountOrderByAggregateInput = {
    id?: SortOrder
    streamerId?: SortOrder
    referredId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferalMaxOrderByAggregateInput = {
    id?: SortOrder
    streamerId?: SortOrder
    referredId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferalMinOrderByAggregateInput = {
    id?: SortOrder
    streamerId?: SortOrder
    referredId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferalCreateNestedManyWithoutStreamerInput = {
    create?: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput> | ReferalCreateWithoutStreamerInput[] | ReferalUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutStreamerInput | ReferalCreateOrConnectWithoutStreamerInput[]
    createMany?: ReferalCreateManyStreamerInputEnvelope
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
  }

  export type ReferalCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput> | ReferalCreateWithoutReferredInput[] | ReferalUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutReferredInput | ReferalCreateOrConnectWithoutReferredInput[]
    createMany?: ReferalCreateManyReferredInputEnvelope
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
  }

  export type StreamingDataCreateNestedManyWithoutStreamerInput = {
    create?: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput> | StreamingDataCreateWithoutStreamerInput[] | StreamingDataUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutStreamerInput | StreamingDataCreateOrConnectWithoutStreamerInput[]
    createMany?: StreamingDataCreateManyStreamerInputEnvelope
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
  }

  export type ReferalUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput> | ReferalCreateWithoutStreamerInput[] | ReferalUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutStreamerInput | ReferalCreateOrConnectWithoutStreamerInput[]
    createMany?: ReferalCreateManyStreamerInputEnvelope
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
  }

  export type ReferalUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput> | ReferalCreateWithoutReferredInput[] | ReferalUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutReferredInput | ReferalCreateOrConnectWithoutReferredInput[]
    createMany?: ReferalCreateManyReferredInputEnvelope
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
  }

  export type StreamingDataUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput> | StreamingDataCreateWithoutStreamerInput[] | StreamingDataUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutStreamerInput | StreamingDataCreateOrConnectWithoutStreamerInput[]
    createMany?: StreamingDataCreateManyStreamerInputEnvelope
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReferalUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput> | ReferalCreateWithoutStreamerInput[] | ReferalUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutStreamerInput | ReferalCreateOrConnectWithoutStreamerInput[]
    upsert?: ReferalUpsertWithWhereUniqueWithoutStreamerInput | ReferalUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: ReferalCreateManyStreamerInputEnvelope
    set?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    disconnect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    delete?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    update?: ReferalUpdateWithWhereUniqueWithoutStreamerInput | ReferalUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: ReferalUpdateManyWithWhereWithoutStreamerInput | ReferalUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
  }

  export type ReferalUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput> | ReferalCreateWithoutReferredInput[] | ReferalUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutReferredInput | ReferalCreateOrConnectWithoutReferredInput[]
    upsert?: ReferalUpsertWithWhereUniqueWithoutReferredInput | ReferalUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferalCreateManyReferredInputEnvelope
    set?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    disconnect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    delete?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    update?: ReferalUpdateWithWhereUniqueWithoutReferredInput | ReferalUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferalUpdateManyWithWhereWithoutReferredInput | ReferalUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
  }

  export type StreamingDataUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput> | StreamingDataCreateWithoutStreamerInput[] | StreamingDataUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutStreamerInput | StreamingDataCreateOrConnectWithoutStreamerInput[]
    upsert?: StreamingDataUpsertWithWhereUniqueWithoutStreamerInput | StreamingDataUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: StreamingDataCreateManyStreamerInputEnvelope
    set?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    disconnect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    delete?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    update?: StreamingDataUpdateWithWhereUniqueWithoutStreamerInput | StreamingDataUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: StreamingDataUpdateManyWithWhereWithoutStreamerInput | StreamingDataUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
  }

  export type ReferalUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput> | ReferalCreateWithoutStreamerInput[] | ReferalUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutStreamerInput | ReferalCreateOrConnectWithoutStreamerInput[]
    upsert?: ReferalUpsertWithWhereUniqueWithoutStreamerInput | ReferalUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: ReferalCreateManyStreamerInputEnvelope
    set?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    disconnect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    delete?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    update?: ReferalUpdateWithWhereUniqueWithoutStreamerInput | ReferalUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: ReferalUpdateManyWithWhereWithoutStreamerInput | ReferalUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
  }

  export type ReferalUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput> | ReferalCreateWithoutReferredInput[] | ReferalUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferalCreateOrConnectWithoutReferredInput | ReferalCreateOrConnectWithoutReferredInput[]
    upsert?: ReferalUpsertWithWhereUniqueWithoutReferredInput | ReferalUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferalCreateManyReferredInputEnvelope
    set?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    disconnect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    delete?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    connect?: ReferalWhereUniqueInput | ReferalWhereUniqueInput[]
    update?: ReferalUpdateWithWhereUniqueWithoutReferredInput | ReferalUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferalUpdateManyWithWhereWithoutReferredInput | ReferalUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
  }

  export type StreamingDataUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput> | StreamingDataCreateWithoutStreamerInput[] | StreamingDataUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutStreamerInput | StreamingDataCreateOrConnectWithoutStreamerInput[]
    upsert?: StreamingDataUpsertWithWhereUniqueWithoutStreamerInput | StreamingDataUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: StreamingDataCreateManyStreamerInputEnvelope
    set?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    disconnect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    delete?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    update?: StreamingDataUpdateWithWhereUniqueWithoutStreamerInput | StreamingDataUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: StreamingDataUpdateManyWithWhereWithoutStreamerInput | StreamingDataUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
  }

  export type StreamingDataCreateNestedManyWithoutWeekInput = {
    create?: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput> | StreamingDataCreateWithoutWeekInput[] | StreamingDataUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutWeekInput | StreamingDataCreateOrConnectWithoutWeekInput[]
    createMany?: StreamingDataCreateManyWeekInputEnvelope
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
  }

  export type StreamingDataUncheckedCreateNestedManyWithoutWeekInput = {
    create?: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput> | StreamingDataCreateWithoutWeekInput[] | StreamingDataUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutWeekInput | StreamingDataCreateOrConnectWithoutWeekInput[]
    createMany?: StreamingDataCreateManyWeekInputEnvelope
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StreamingDataUpdateManyWithoutWeekNestedInput = {
    create?: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput> | StreamingDataCreateWithoutWeekInput[] | StreamingDataUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutWeekInput | StreamingDataCreateOrConnectWithoutWeekInput[]
    upsert?: StreamingDataUpsertWithWhereUniqueWithoutWeekInput | StreamingDataUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: StreamingDataCreateManyWeekInputEnvelope
    set?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    disconnect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    delete?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    update?: StreamingDataUpdateWithWhereUniqueWithoutWeekInput | StreamingDataUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: StreamingDataUpdateManyWithWhereWithoutWeekInput | StreamingDataUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
  }

  export type StreamingDataUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput> | StreamingDataCreateWithoutWeekInput[] | StreamingDataUncheckedCreateWithoutWeekInput[]
    connectOrCreate?: StreamingDataCreateOrConnectWithoutWeekInput | StreamingDataCreateOrConnectWithoutWeekInput[]
    upsert?: StreamingDataUpsertWithWhereUniqueWithoutWeekInput | StreamingDataUpsertWithWhereUniqueWithoutWeekInput[]
    createMany?: StreamingDataCreateManyWeekInputEnvelope
    set?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    disconnect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    delete?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    connect?: StreamingDataWhereUniqueInput | StreamingDataWhereUniqueInput[]
    update?: StreamingDataUpdateWithWhereUniqueWithoutWeekInput | StreamingDataUpdateWithWhereUniqueWithoutWeekInput[]
    updateMany?: StreamingDataUpdateManyWithWhereWithoutWeekInput | StreamingDataUpdateManyWithWhereWithoutWeekInput[]
    deleteMany?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
  }

  export type StreamerCreateNestedOneWithoutStreamingDataInput = {
    create?: XOR<StreamerCreateWithoutStreamingDataInput, StreamerUncheckedCreateWithoutStreamingDataInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutStreamingDataInput
    connect?: StreamerWhereUniqueInput
  }

  export type WeekCreateNestedOneWithoutDataInput = {
    create?: XOR<WeekCreateWithoutDataInput, WeekUncheckedCreateWithoutDataInput>
    connectOrCreate?: WeekCreateOrConnectWithoutDataInput
    connect?: WeekWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StreamerUpdateOneRequiredWithoutStreamingDataNestedInput = {
    create?: XOR<StreamerCreateWithoutStreamingDataInput, StreamerUncheckedCreateWithoutStreamingDataInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutStreamingDataInput
    upsert?: StreamerUpsertWithoutStreamingDataInput
    connect?: StreamerWhereUniqueInput
    update?: XOR<XOR<StreamerUpdateToOneWithWhereWithoutStreamingDataInput, StreamerUpdateWithoutStreamingDataInput>, StreamerUncheckedUpdateWithoutStreamingDataInput>
  }

  export type WeekUpdateOneRequiredWithoutDataNestedInput = {
    create?: XOR<WeekCreateWithoutDataInput, WeekUncheckedCreateWithoutDataInput>
    connectOrCreate?: WeekCreateOrConnectWithoutDataInput
    upsert?: WeekUpsertWithoutDataInput
    connect?: WeekWhereUniqueInput
    update?: XOR<XOR<WeekUpdateToOneWithWhereWithoutDataInput, WeekUpdateWithoutDataInput>, WeekUncheckedUpdateWithoutDataInput>
  }

  export type StreamerCreateNestedOneWithoutReferalsInput = {
    create?: XOR<StreamerCreateWithoutReferalsInput, StreamerUncheckedCreateWithoutReferalsInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutReferalsInput
    connect?: StreamerWhereUniqueInput
  }

  export type StreamerCreateNestedOneWithoutReferredByInput = {
    create?: XOR<StreamerCreateWithoutReferredByInput, StreamerUncheckedCreateWithoutReferredByInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutReferredByInput
    connect?: StreamerWhereUniqueInput
  }

  export type StreamerUpdateOneRequiredWithoutReferalsNestedInput = {
    create?: XOR<StreamerCreateWithoutReferalsInput, StreamerUncheckedCreateWithoutReferalsInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutReferalsInput
    upsert?: StreamerUpsertWithoutReferalsInput
    connect?: StreamerWhereUniqueInput
    update?: XOR<XOR<StreamerUpdateToOneWithWhereWithoutReferalsInput, StreamerUpdateWithoutReferalsInput>, StreamerUncheckedUpdateWithoutReferalsInput>
  }

  export type StreamerUpdateOneRequiredWithoutReferredByNestedInput = {
    create?: XOR<StreamerCreateWithoutReferredByInput, StreamerUncheckedCreateWithoutReferredByInput>
    connectOrCreate?: StreamerCreateOrConnectWithoutReferredByInput
    upsert?: StreamerUpsertWithoutReferredByInput
    connect?: StreamerWhereUniqueInput
    update?: XOR<XOR<StreamerUpdateToOneWithWhereWithoutReferredByInput, StreamerUpdateWithoutReferredByInput>, StreamerUncheckedUpdateWithoutReferredByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ReferalCreateWithoutStreamerInput = {
    id?: string
    createdAt?: Date | string
    referred: StreamerCreateNestedOneWithoutReferredByInput
  }

  export type ReferalUncheckedCreateWithoutStreamerInput = {
    id?: string
    referredId: string
    createdAt?: Date | string
  }

  export type ReferalCreateOrConnectWithoutStreamerInput = {
    where: ReferalWhereUniqueInput
    create: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput>
  }

  export type ReferalCreateManyStreamerInputEnvelope = {
    data: ReferalCreateManyStreamerInput | ReferalCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type ReferalCreateWithoutReferredInput = {
    id?: string
    createdAt?: Date | string
    streamer: StreamerCreateNestedOneWithoutReferalsInput
  }

  export type ReferalUncheckedCreateWithoutReferredInput = {
    id?: string
    streamerId: string
    createdAt?: Date | string
  }

  export type ReferalCreateOrConnectWithoutReferredInput = {
    where: ReferalWhereUniqueInput
    create: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput>
  }

  export type ReferalCreateManyReferredInputEnvelope = {
    data: ReferalCreateManyReferredInput | ReferalCreateManyReferredInput[]
    skipDuplicates?: boolean
  }

  export type StreamingDataCreateWithoutStreamerInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    week: WeekCreateNestedOneWithoutDataInput
  }

  export type StreamingDataUncheckedCreateWithoutStreamerInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    weekId: string
  }

  export type StreamingDataCreateOrConnectWithoutStreamerInput = {
    where: StreamingDataWhereUniqueInput
    create: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput>
  }

  export type StreamingDataCreateManyStreamerInputEnvelope = {
    data: StreamingDataCreateManyStreamerInput | StreamingDataCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type ReferalUpsertWithWhereUniqueWithoutStreamerInput = {
    where: ReferalWhereUniqueInput
    update: XOR<ReferalUpdateWithoutStreamerInput, ReferalUncheckedUpdateWithoutStreamerInput>
    create: XOR<ReferalCreateWithoutStreamerInput, ReferalUncheckedCreateWithoutStreamerInput>
  }

  export type ReferalUpdateWithWhereUniqueWithoutStreamerInput = {
    where: ReferalWhereUniqueInput
    data: XOR<ReferalUpdateWithoutStreamerInput, ReferalUncheckedUpdateWithoutStreamerInput>
  }

  export type ReferalUpdateManyWithWhereWithoutStreamerInput = {
    where: ReferalScalarWhereInput
    data: XOR<ReferalUpdateManyMutationInput, ReferalUncheckedUpdateManyWithoutStreamerInput>
  }

  export type ReferalScalarWhereInput = {
    AND?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
    OR?: ReferalScalarWhereInput[]
    NOT?: ReferalScalarWhereInput | ReferalScalarWhereInput[]
    id?: StringFilter<"Referal"> | string
    streamerId?: StringFilter<"Referal"> | string
    referredId?: StringFilter<"Referal"> | string
    createdAt?: DateTimeFilter<"Referal"> | Date | string
  }

  export type ReferalUpsertWithWhereUniqueWithoutReferredInput = {
    where: ReferalWhereUniqueInput
    update: XOR<ReferalUpdateWithoutReferredInput, ReferalUncheckedUpdateWithoutReferredInput>
    create: XOR<ReferalCreateWithoutReferredInput, ReferalUncheckedCreateWithoutReferredInput>
  }

  export type ReferalUpdateWithWhereUniqueWithoutReferredInput = {
    where: ReferalWhereUniqueInput
    data: XOR<ReferalUpdateWithoutReferredInput, ReferalUncheckedUpdateWithoutReferredInput>
  }

  export type ReferalUpdateManyWithWhereWithoutReferredInput = {
    where: ReferalScalarWhereInput
    data: XOR<ReferalUpdateManyMutationInput, ReferalUncheckedUpdateManyWithoutReferredInput>
  }

  export type StreamingDataUpsertWithWhereUniqueWithoutStreamerInput = {
    where: StreamingDataWhereUniqueInput
    update: XOR<StreamingDataUpdateWithoutStreamerInput, StreamingDataUncheckedUpdateWithoutStreamerInput>
    create: XOR<StreamingDataCreateWithoutStreamerInput, StreamingDataUncheckedCreateWithoutStreamerInput>
  }

  export type StreamingDataUpdateWithWhereUniqueWithoutStreamerInput = {
    where: StreamingDataWhereUniqueInput
    data: XOR<StreamingDataUpdateWithoutStreamerInput, StreamingDataUncheckedUpdateWithoutStreamerInput>
  }

  export type StreamingDataUpdateManyWithWhereWithoutStreamerInput = {
    where: StreamingDataScalarWhereInput
    data: XOR<StreamingDataUpdateManyMutationInput, StreamingDataUncheckedUpdateManyWithoutStreamerInput>
  }

  export type StreamingDataScalarWhereInput = {
    AND?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
    OR?: StreamingDataScalarWhereInput[]
    NOT?: StreamingDataScalarWhereInput | StreamingDataScalarWhereInput[]
    id?: StringFilter<"StreamingData"> | string
    baseSalaryIM?: FloatFilter<"StreamingData"> | number
    baseSalaryRoom?: FloatFilter<"StreamingData"> | number
    diamondsIM?: IntFilter<"StreamingData"> | number
    diamondsRoom?: IntFilter<"StreamingData"> | number
    diamondsTotal?: IntFilter<"StreamingData"> | number
    diamondsAndPoints?: IntFilter<"StreamingData"> | number
    diamondsPenalties?: IntFilter<"StreamingData"> | number
    diamondsComisions?: FloatFilter<"StreamingData"> | number
    rewardOfPoints?: FloatFilter<"StreamingData"> | number
    dailyBonusOfSuperStreamer?: FloatFilter<"StreamingData"> | number
    roomBonus?: FloatFilter<"StreamingData"> | number
    enchantingGodesBonus?: FloatFilter<"StreamingData"> | number
    streamerSalary?: FloatFilter<"StreamingData"> | number
    agencySalary?: FloatFilter<"StreamingData"> | number
    streamerId?: StringFilter<"StreamingData"> | string
    weekId?: StringFilter<"StreamingData"> | string
  }

  export type StreamingDataCreateWithoutWeekInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamer: StreamerCreateNestedOneWithoutStreamingDataInput
  }

  export type StreamingDataUncheckedCreateWithoutWeekInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: string
  }

  export type StreamingDataCreateOrConnectWithoutWeekInput = {
    where: StreamingDataWhereUniqueInput
    create: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput>
  }

  export type StreamingDataCreateManyWeekInputEnvelope = {
    data: StreamingDataCreateManyWeekInput | StreamingDataCreateManyWeekInput[]
    skipDuplicates?: boolean
  }

  export type StreamingDataUpsertWithWhereUniqueWithoutWeekInput = {
    where: StreamingDataWhereUniqueInput
    update: XOR<StreamingDataUpdateWithoutWeekInput, StreamingDataUncheckedUpdateWithoutWeekInput>
    create: XOR<StreamingDataCreateWithoutWeekInput, StreamingDataUncheckedCreateWithoutWeekInput>
  }

  export type StreamingDataUpdateWithWhereUniqueWithoutWeekInput = {
    where: StreamingDataWhereUniqueInput
    data: XOR<StreamingDataUpdateWithoutWeekInput, StreamingDataUncheckedUpdateWithoutWeekInput>
  }

  export type StreamingDataUpdateManyWithWhereWithoutWeekInput = {
    where: StreamingDataScalarWhereInput
    data: XOR<StreamingDataUpdateManyMutationInput, StreamingDataUncheckedUpdateManyWithoutWeekInput>
  }

  export type StreamerCreateWithoutStreamingDataInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalCreateNestedManyWithoutStreamerInput
    referredBy?: ReferalCreateNestedManyWithoutReferredInput
  }

  export type StreamerUncheckedCreateWithoutStreamingDataInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalUncheckedCreateNestedManyWithoutStreamerInput
    referredBy?: ReferalUncheckedCreateNestedManyWithoutReferredInput
  }

  export type StreamerCreateOrConnectWithoutStreamingDataInput = {
    where: StreamerWhereUniqueInput
    create: XOR<StreamerCreateWithoutStreamingDataInput, StreamerUncheckedCreateWithoutStreamingDataInput>
  }

  export type WeekCreateWithoutDataInput = {
    id?: string
    name: string
    date: Date | string
    startDate: Date | string
    endDate: Date | string
    closed?: boolean
    observation?: string | null
  }

  export type WeekUncheckedCreateWithoutDataInput = {
    id?: string
    name: string
    date: Date | string
    startDate: Date | string
    endDate: Date | string
    closed?: boolean
    observation?: string | null
  }

  export type WeekCreateOrConnectWithoutDataInput = {
    where: WeekWhereUniqueInput
    create: XOR<WeekCreateWithoutDataInput, WeekUncheckedCreateWithoutDataInput>
  }

  export type StreamerUpsertWithoutStreamingDataInput = {
    update: XOR<StreamerUpdateWithoutStreamingDataInput, StreamerUncheckedUpdateWithoutStreamingDataInput>
    create: XOR<StreamerCreateWithoutStreamingDataInput, StreamerUncheckedCreateWithoutStreamingDataInput>
    where?: StreamerWhereInput
  }

  export type StreamerUpdateToOneWithWhereWithoutStreamingDataInput = {
    where?: StreamerWhereInput
    data: XOR<StreamerUpdateWithoutStreamingDataInput, StreamerUncheckedUpdateWithoutStreamingDataInput>
  }

  export type StreamerUpdateWithoutStreamingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUpdateManyWithoutStreamerNestedInput
    referredBy?: ReferalUpdateManyWithoutReferredNestedInput
  }

  export type StreamerUncheckedUpdateWithoutStreamingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUncheckedUpdateManyWithoutStreamerNestedInput
    referredBy?: ReferalUncheckedUpdateManyWithoutReferredNestedInput
  }

  export type WeekUpsertWithoutDataInput = {
    update: XOR<WeekUpdateWithoutDataInput, WeekUncheckedUpdateWithoutDataInput>
    create: XOR<WeekCreateWithoutDataInput, WeekUncheckedCreateWithoutDataInput>
    where?: WeekWhereInput
  }

  export type WeekUpdateToOneWithWhereWithoutDataInput = {
    where?: WeekWhereInput
    data: XOR<WeekUpdateWithoutDataInput, WeekUncheckedUpdateWithoutDataInput>
  }

  export type WeekUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WeekUncheckedUpdateWithoutDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    observation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamerCreateWithoutReferalsInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referredBy?: ReferalCreateNestedManyWithoutReferredInput
    streamingData?: StreamingDataCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUncheckedCreateWithoutReferalsInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referredBy?: ReferalUncheckedCreateNestedManyWithoutReferredInput
    streamingData?: StreamingDataUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type StreamerCreateOrConnectWithoutReferalsInput = {
    where: StreamerWhereUniqueInput
    create: XOR<StreamerCreateWithoutReferalsInput, StreamerUncheckedCreateWithoutReferalsInput>
  }

  export type StreamerCreateWithoutReferredByInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalCreateNestedManyWithoutStreamerInput
    streamingData?: StreamingDataCreateNestedManyWithoutStreamerInput
  }

  export type StreamerUncheckedCreateWithoutReferredByInput = {
    id?: string
    wahaID: string
    wahaName: string
    name: string
    phoneNumber?: string | null
    bankAccount?: string | null
    createdAt?: Date | string
    referals?: ReferalUncheckedCreateNestedManyWithoutStreamerInput
    streamingData?: StreamingDataUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type StreamerCreateOrConnectWithoutReferredByInput = {
    where: StreamerWhereUniqueInput
    create: XOR<StreamerCreateWithoutReferredByInput, StreamerUncheckedCreateWithoutReferredByInput>
  }

  export type StreamerUpsertWithoutReferalsInput = {
    update: XOR<StreamerUpdateWithoutReferalsInput, StreamerUncheckedUpdateWithoutReferalsInput>
    create: XOR<StreamerCreateWithoutReferalsInput, StreamerUncheckedCreateWithoutReferalsInput>
    where?: StreamerWhereInput
  }

  export type StreamerUpdateToOneWithWhereWithoutReferalsInput = {
    where?: StreamerWhereInput
    data: XOR<StreamerUpdateWithoutReferalsInput, StreamerUncheckedUpdateWithoutReferalsInput>
  }

  export type StreamerUpdateWithoutReferalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: ReferalUpdateManyWithoutReferredNestedInput
    streamingData?: StreamingDataUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateWithoutReferalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: ReferalUncheckedUpdateManyWithoutReferredNestedInput
    streamingData?: StreamingDataUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUpsertWithoutReferredByInput = {
    update: XOR<StreamerUpdateWithoutReferredByInput, StreamerUncheckedUpdateWithoutReferredByInput>
    create: XOR<StreamerCreateWithoutReferredByInput, StreamerUncheckedCreateWithoutReferredByInput>
    where?: StreamerWhereInput
  }

  export type StreamerUpdateToOneWithWhereWithoutReferredByInput = {
    where?: StreamerWhereInput
    data: XOR<StreamerUpdateWithoutReferredByInput, StreamerUncheckedUpdateWithoutReferredByInput>
  }

  export type StreamerUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUpdateManyWithoutStreamerNestedInput
    streamingData?: StreamingDataUpdateManyWithoutStreamerNestedInput
  }

  export type StreamerUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    wahaID?: StringFieldUpdateOperationsInput | string
    wahaName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referals?: ReferalUncheckedUpdateManyWithoutStreamerNestedInput
    streamingData?: StreamingDataUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type ReferalCreateManyStreamerInput = {
    id?: string
    referredId: string
    createdAt?: Date | string
  }

  export type ReferalCreateManyReferredInput = {
    id?: string
    streamerId: string
    createdAt?: Date | string
  }

  export type StreamingDataCreateManyStreamerInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    weekId: string
  }

  export type ReferalUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: StreamerUpdateOneRequiredWithoutReferredByNestedInput
  }

  export type ReferalUncheckedUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferalUncheckedUpdateManyWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferalUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streamer?: StreamerUpdateOneRequiredWithoutReferalsNestedInput
  }

  export type ReferalUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferalUncheckedUpdateManyWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    streamerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreamingDataUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    week?: WeekUpdateOneRequiredWithoutDataNestedInput
  }

  export type StreamingDataUncheckedUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingDataUncheckedUpdateManyWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    weekId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingDataCreateManyWeekInput = {
    id?: string
    baseSalaryIM: number
    baseSalaryRoom: number
    diamondsIM: number
    diamondsRoom: number
    diamondsTotal: number
    diamondsAndPoints: number
    diamondsPenalties: number
    diamondsComisions: number
    rewardOfPoints: number
    dailyBonusOfSuperStreamer: number
    roomBonus: number
    enchantingGodesBonus: number
    streamerSalary: number
    agencySalary: number
    streamerId: string
  }

  export type StreamingDataUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamer?: StreamerUpdateOneRequiredWithoutStreamingDataNestedInput
  }

  export type StreamingDataUncheckedUpdateWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamerId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamingDataUncheckedUpdateManyWithoutWeekInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseSalaryIM?: FloatFieldUpdateOperationsInput | number
    baseSalaryRoom?: FloatFieldUpdateOperationsInput | number
    diamondsIM?: IntFieldUpdateOperationsInput | number
    diamondsRoom?: IntFieldUpdateOperationsInput | number
    diamondsTotal?: IntFieldUpdateOperationsInput | number
    diamondsAndPoints?: IntFieldUpdateOperationsInput | number
    diamondsPenalties?: IntFieldUpdateOperationsInput | number
    diamondsComisions?: FloatFieldUpdateOperationsInput | number
    rewardOfPoints?: FloatFieldUpdateOperationsInput | number
    dailyBonusOfSuperStreamer?: FloatFieldUpdateOperationsInput | number
    roomBonus?: FloatFieldUpdateOperationsInput | number
    enchantingGodesBonus?: FloatFieldUpdateOperationsInput | number
    streamerSalary?: FloatFieldUpdateOperationsInput | number
    agencySalary?: FloatFieldUpdateOperationsInput | number
    streamerId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}