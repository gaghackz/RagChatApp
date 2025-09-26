
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chatroom
 * 
 */
export type Chatroom = $Result.DefaultSelection<Prisma.$ChatroomPayload>
/**
 * Model Chats
 * 
 */
export type Chats = $Result.DefaultSelection<Prisma.$ChatsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatroom`: Exposes CRUD operations for the **Chatroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatrooms
    * const chatrooms = await prisma.chatroom.findMany()
    * ```
    */
  get chatroom(): Prisma.ChatroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chats`: Exposes CRUD operations for the **Chats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chats.findMany()
    * ```
    */
  get chats(): Prisma.ChatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Chatroom: 'Chatroom',
    Chats: 'Chats'
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
      modelProps: "user" | "chatroom" | "chats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chatroom: {
        payload: Prisma.$ChatroomPayload<ExtArgs>
        fields: Prisma.ChatroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          findFirst: {
            args: Prisma.ChatroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          findMany: {
            args: Prisma.ChatroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          create: {
            args: Prisma.ChatroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          createMany: {
            args: Prisma.ChatroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          delete: {
            args: Prisma.ChatroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          update: {
            args: Prisma.ChatroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          deleteMany: {
            args: Prisma.ChatroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          upsert: {
            args: Prisma.ChatroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          aggregate: {
            args: Prisma.ChatroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatroom>
          }
          groupBy: {
            args: Prisma.ChatroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatroomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatroomCountAggregateOutputType> | number
          }
        }
      }
      Chats: {
        payload: Prisma.$ChatsPayload<ExtArgs>
        fields: Prisma.ChatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          findFirst: {
            args: Prisma.ChatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          findMany: {
            args: Prisma.ChatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>[]
          }
          create: {
            args: Prisma.ChatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          createMany: {
            args: Prisma.ChatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>[]
          }
          delete: {
            args: Prisma.ChatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          update: {
            args: Prisma.ChatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          deleteMany: {
            args: Prisma.ChatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>[]
          }
          upsert: {
            args: Prisma.ChatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatsPayload>
          }
          aggregate: {
            args: Prisma.ChatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChats>
          }
          groupBy: {
            args: Prisma.ChatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatsCountArgs<ExtArgs>
            result: $Utils.Optional<ChatsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    chatroom?: ChatroomOmit
    chats?: ChatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatroom: number
    chats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | UserCountOutputTypeCountChatroomArgs
    chats?: boolean | UserCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatsWhereInput
  }


  /**
   * Count Type ChatroomCountOutputType
   */

  export type ChatroomCountOutputType = {
    chats: number
  }

  export type ChatroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | ChatroomCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomCountOutputType
     */
    select?: ChatroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    clerkId: string | null
    role: string | null
    username: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    clerkId: string | null
    role: string | null
    username: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    role: number
    username: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    username?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    username?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    role?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    clerkId: string
    role: string
    username: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    username?: boolean
    email?: boolean
    chatroom?: boolean | User$chatroomArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    role?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    role?: boolean
    username?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "role" | "username" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | User$chatroomArgs<ExtArgs>
    chats?: boolean | User$chatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatroom: Prisma.$ChatroomPayload<ExtArgs>[]
      chats: Prisma.$ChatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      clerkId: string
      role: string
      username: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends User$chatroomArgs<ExtArgs> = {}>(args?: Subset<T, User$chatroomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends User$chatsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatroom
   */
  export type User$chatroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    where?: ChatroomWhereInput
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    cursor?: ChatroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * User.chats
   */
  export type User$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    where?: ChatsWhereInput
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    cursor?: ChatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chatroom
   */

  export type AggregateChatroom = {
    _count: ChatroomCountAggregateOutputType | null
    _avg: ChatroomAvgAggregateOutputType | null
    _sum: ChatroomSumAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  export type ChatroomAvgAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type ChatroomSumAggregateOutputType = {
    id: bigint | null
    userid: bigint | null
  }

  export type ChatroomMinAggregateOutputType = {
    id: bigint | null
    userid: bigint | null
  }

  export type ChatroomMaxAggregateOutputType = {
    id: bigint | null
    userid: bigint | null
  }

  export type ChatroomCountAggregateOutputType = {
    id: number
    userid: number
    _all: number
  }


  export type ChatroomAvgAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ChatroomSumAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ChatroomMinAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ChatroomMaxAggregateInputType = {
    id?: true
    userid?: true
  }

  export type ChatroomCountAggregateInputType = {
    id?: true
    userid?: true
    _all?: true
  }

  export type ChatroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatroom to aggregate.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatrooms
    **/
    _count?: true | ChatroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatroomMaxAggregateInputType
  }

  export type GetChatroomAggregateType<T extends ChatroomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatroom[P]>
      : GetScalarType<T[P], AggregateChatroom[P]>
  }




  export type ChatroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomWhereInput
    orderBy?: ChatroomOrderByWithAggregationInput | ChatroomOrderByWithAggregationInput[]
    by: ChatroomScalarFieldEnum[] | ChatroomScalarFieldEnum
    having?: ChatroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatroomCountAggregateInputType | true
    _avg?: ChatroomAvgAggregateInputType
    _sum?: ChatroomSumAggregateInputType
    _min?: ChatroomMinAggregateInputType
    _max?: ChatroomMaxAggregateInputType
  }

  export type ChatroomGroupByOutputType = {
    id: bigint
    userid: bigint
    _count: ChatroomCountAggregateOutputType | null
    _avg: ChatroomAvgAggregateOutputType | null
    _sum: ChatroomSumAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  type GetChatroomGroupByPayload<T extends ChatroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
        }
      >
    >


  export type ChatroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    chats?: boolean | Chatroom$chatsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectScalar = {
    id?: boolean
    userid?: boolean
  }

  export type ChatroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid", ExtArgs["result"]["chatroom"]>
  export type ChatroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | Chatroom$chatsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatroom"
    objects: {
      chats: Prisma.$ChatsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userid: bigint
    }, ExtArgs["result"]["chatroom"]>
    composites: {}
  }

  type ChatroomGetPayload<S extends boolean | null | undefined | ChatroomDefaultArgs> = $Result.GetResult<Prisma.$ChatroomPayload, S>

  type ChatroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatroomCountAggregateInputType | true
    }

  export interface ChatroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatroom'], meta: { name: 'Chatroom' } }
    /**
     * Find zero or one Chatroom that matches the filter.
     * @param {ChatroomFindUniqueArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatroomFindUniqueArgs>(args: SelectSubset<T, ChatroomFindUniqueArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatroomFindUniqueOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindFirstArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatroomFindFirstArgs>(args?: SelectSubset<T, ChatroomFindFirstArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindFirstOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatrooms
     * const chatrooms = await prisma.chatroom.findMany()
     * 
     * // Get first 10 Chatrooms
     * const chatrooms = await prisma.chatroom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatroomFindManyArgs>(args?: SelectSubset<T, ChatroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatroom.
     * @param {ChatroomCreateArgs} args - Arguments to create a Chatroom.
     * @example
     * // Create one Chatroom
     * const Chatroom = await prisma.chatroom.create({
     *   data: {
     *     // ... data to create a Chatroom
     *   }
     * })
     * 
     */
    create<T extends ChatroomCreateArgs>(args: SelectSubset<T, ChatroomCreateArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatrooms.
     * @param {ChatroomCreateManyArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatroomCreateManyArgs>(args?: SelectSubset<T, ChatroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatrooms and returns the data saved in the database.
     * @param {ChatroomCreateManyAndReturnArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatrooms and only return the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatroom.
     * @param {ChatroomDeleteArgs} args - Arguments to delete one Chatroom.
     * @example
     * // Delete one Chatroom
     * const Chatroom = await prisma.chatroom.delete({
     *   where: {
     *     // ... filter to delete one Chatroom
     *   }
     * })
     * 
     */
    delete<T extends ChatroomDeleteArgs>(args: SelectSubset<T, ChatroomDeleteArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatroom.
     * @param {ChatroomUpdateArgs} args - Arguments to update one Chatroom.
     * @example
     * // Update one Chatroom
     * const chatroom = await prisma.chatroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatroomUpdateArgs>(args: SelectSubset<T, ChatroomUpdateArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatrooms.
     * @param {ChatroomDeleteManyArgs} args - Arguments to filter Chatrooms to delete.
     * @example
     * // Delete a few Chatrooms
     * const { count } = await prisma.chatroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatroomDeleteManyArgs>(args?: SelectSubset<T, ChatroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatroomUpdateManyArgs>(args: SelectSubset<T, ChatroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms and returns the data updated in the database.
     * @param {ChatroomUpdateManyAndReturnArgs} args - Arguments to update many Chatrooms.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatrooms and only return the `id`
     * const chatroomWithIdOnly = await prisma.chatroom.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatroom.
     * @param {ChatroomUpsertArgs} args - Arguments to update or create a Chatroom.
     * @example
     * // Update or create a Chatroom
     * const chatroom = await prisma.chatroom.upsert({
     *   create: {
     *     // ... data to create a Chatroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatroom we want to update
     *   }
     * })
     */
    upsert<T extends ChatroomUpsertArgs>(args: SelectSubset<T, ChatroomUpsertArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomCountArgs} args - Arguments to filter Chatrooms to count.
     * @example
     * // Count the number of Chatrooms
     * const count = await prisma.chatroom.count({
     *   where: {
     *     // ... the filter for the Chatrooms we want to count
     *   }
     * })
    **/
    count<T extends ChatroomCountArgs>(
      args?: Subset<T, ChatroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatroomAggregateArgs>(args: Subset<T, ChatroomAggregateArgs>): Prisma.PrismaPromise<GetChatroomAggregateType<T>>

    /**
     * Group by Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomGroupByArgs} args - Group by arguments.
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
      T extends ChatroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatroomGroupByArgs['orderBy'] }
        : { orderBy?: ChatroomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatroom model
   */
  readonly fields: ChatroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends Chatroom$chatsArgs<ExtArgs> = {}>(args?: Subset<T, Chatroom$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chatroom model
   */
  interface ChatroomFieldRefs {
    readonly id: FieldRef<"Chatroom", 'BigInt'>
    readonly userid: FieldRef<"Chatroom", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Chatroom findUnique
   */
  export type ChatroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom findUniqueOrThrow
   */
  export type ChatroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom findFirst
   */
  export type ChatroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom findFirstOrThrow
   */
  export type ChatroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom findMany
   */
  export type ChatroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom create
   */
  export type ChatroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatroom.
     */
    data: XOR<ChatroomCreateInput, ChatroomUncheckedCreateInput>
  }

  /**
   * Chatroom createMany
   */
  export type ChatroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomCreateManyInput | ChatroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatroom createManyAndReturn
   */
  export type ChatroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomCreateManyInput | ChatroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chatroom update
   */
  export type ChatroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatroom.
     */
    data: XOR<ChatroomUpdateInput, ChatroomUncheckedUpdateInput>
    /**
     * Choose, which Chatroom to update.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom updateMany
   */
  export type ChatroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
  }

  /**
   * Chatroom updateManyAndReturn
   */
  export type ChatroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chatroom upsert
   */
  export type ChatroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatroom to update in case it exists.
     */
    where: ChatroomWhereUniqueInput
    /**
     * In case the Chatroom found by the `where` argument doesn't exist, create a new Chatroom with this data.
     */
    create: XOR<ChatroomCreateInput, ChatroomUncheckedCreateInput>
    /**
     * In case the Chatroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatroomUpdateInput, ChatroomUncheckedUpdateInput>
  }

  /**
   * Chatroom delete
   */
  export type ChatroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter which Chatroom to delete.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom deleteMany
   */
  export type ChatroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatrooms to delete
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to delete.
     */
    limit?: number
  }

  /**
   * Chatroom.chats
   */
  export type Chatroom$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    where?: ChatsWhereInput
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    cursor?: ChatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * Chatroom without action
   */
  export type ChatroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
  }


  /**
   * Model Chats
   */

  export type AggregateChats = {
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  export type ChatsAvgAggregateOutputType = {
    id: number | null
    roomid: number | null
    userid: number | null
  }

  export type ChatsSumAggregateOutputType = {
    id: bigint | null
    roomid: bigint | null
    userid: bigint | null
  }

  export type ChatsMinAggregateOutputType = {
    id: bigint | null
    text: string | null
    roomid: bigint | null
    userid: bigint | null
    createdAt: Date | null
  }

  export type ChatsMaxAggregateOutputType = {
    id: bigint | null
    text: string | null
    roomid: bigint | null
    userid: bigint | null
    createdAt: Date | null
  }

  export type ChatsCountAggregateOutputType = {
    id: number
    text: number
    roomid: number
    userid: number
    createdAt: number
    _all: number
  }


  export type ChatsAvgAggregateInputType = {
    id?: true
    roomid?: true
    userid?: true
  }

  export type ChatsSumAggregateInputType = {
    id?: true
    roomid?: true
    userid?: true
  }

  export type ChatsMinAggregateInputType = {
    id?: true
    text?: true
    roomid?: true
    userid?: true
    createdAt?: true
  }

  export type ChatsMaxAggregateInputType = {
    id?: true
    text?: true
    roomid?: true
    userid?: true
    createdAt?: true
  }

  export type ChatsCountAggregateInputType = {
    id?: true
    text?: true
    roomid?: true
    userid?: true
    createdAt?: true
    _all?: true
  }

  export type ChatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to aggregate.
     */
    where?: ChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatsMaxAggregateInputType
  }

  export type GetChatsAggregateType<T extends ChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChats[P]>
      : GetScalarType<T[P], AggregateChats[P]>
  }




  export type ChatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatsWhereInput
    orderBy?: ChatsOrderByWithAggregationInput | ChatsOrderByWithAggregationInput[]
    by: ChatsScalarFieldEnum[] | ChatsScalarFieldEnum
    having?: ChatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatsCountAggregateInputType | true
    _avg?: ChatsAvgAggregateInputType
    _sum?: ChatsSumAggregateInputType
    _min?: ChatsMinAggregateInputType
    _max?: ChatsMaxAggregateInputType
  }

  export type ChatsGroupByOutputType = {
    id: bigint
    text: string
    roomid: bigint
    userid: bigint
    createdAt: Date
    _count: ChatsCountAggregateOutputType | null
    _avg: ChatsAvgAggregateOutputType | null
    _sum: ChatsSumAggregateOutputType | null
    _min: ChatsMinAggregateOutputType | null
    _max: ChatsMaxAggregateOutputType | null
  }

  type GetChatsGroupByPayload<T extends ChatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatsGroupByOutputType[P]>
            : GetScalarType<T[P], ChatsGroupByOutputType[P]>
        }
      >
    >


  export type ChatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    roomid?: boolean
    userid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type ChatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    roomid?: boolean
    userid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type ChatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    roomid?: boolean
    userid?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chats"]>

  export type ChatsSelectScalar = {
    id?: boolean
    text?: boolean
    roomid?: boolean
    userid?: boolean
    createdAt?: boolean
  }

  export type ChatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "roomid" | "userid" | "createdAt", ExtArgs["result"]["chats"]>
  export type ChatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }
  export type ChatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }
  export type ChatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatroomDefaultArgs<ExtArgs>
  }

  export type $ChatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$ChatroomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      text: string
      roomid: bigint
      userid: bigint
      createdAt: Date
    }, ExtArgs["result"]["chats"]>
    composites: {}
  }

  type ChatsGetPayload<S extends boolean | null | undefined | ChatsDefaultArgs> = $Result.GetResult<Prisma.$ChatsPayload, S>

  type ChatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatsCountAggregateInputType | true
    }

  export interface ChatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chats'], meta: { name: 'Chats' } }
    /**
     * Find zero or one Chats that matches the filter.
     * @param {ChatsFindUniqueArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatsFindUniqueArgs>(args: SelectSubset<T, ChatsFindUniqueArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatsFindUniqueOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatsFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsFindFirstArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatsFindFirstArgs>(args?: SelectSubset<T, ChatsFindFirstArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsFindFirstOrThrowArgs} args - Arguments to find a Chats
     * @example
     * // Get one Chats
     * const chats = await prisma.chats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatsFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chats.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatsWithIdOnly = await prisma.chats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatsFindManyArgs>(args?: SelectSubset<T, ChatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chats.
     * @param {ChatsCreateArgs} args - Arguments to create a Chats.
     * @example
     * // Create one Chats
     * const Chats = await prisma.chats.create({
     *   data: {
     *     // ... data to create a Chats
     *   }
     * })
     * 
     */
    create<T extends ChatsCreateArgs>(args: SelectSubset<T, ChatsCreateArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatsCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatsCreateManyArgs>(args?: SelectSubset<T, ChatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatsCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chats = await prisma.chats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatsCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chats.
     * @param {ChatsDeleteArgs} args - Arguments to delete one Chats.
     * @example
     * // Delete one Chats
     * const Chats = await prisma.chats.delete({
     *   where: {
     *     // ... filter to delete one Chats
     *   }
     * })
     * 
     */
    delete<T extends ChatsDeleteArgs>(args: SelectSubset<T, ChatsDeleteArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chats.
     * @param {ChatsUpdateArgs} args - Arguments to update one Chats.
     * @example
     * // Update one Chats
     * const chats = await prisma.chats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatsUpdateArgs>(args: SelectSubset<T, ChatsUpdateArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatsDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatsDeleteManyArgs>(args?: SelectSubset<T, ChatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatsUpdateManyArgs>(args: SelectSubset<T, ChatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatsUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chats = await prisma.chats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatsWithIdOnly = await prisma.chats.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatsUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chats.
     * @param {ChatsUpsertArgs} args - Arguments to update or create a Chats.
     * @example
     * // Update or create a Chats
     * const chats = await prisma.chats.upsert({
     *   create: {
     *     // ... data to create a Chats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chats we want to update
     *   }
     * })
     */
    upsert<T extends ChatsUpsertArgs>(args: SelectSubset<T, ChatsUpsertArgs<ExtArgs>>): Prisma__ChatsClient<$Result.GetResult<Prisma.$ChatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chats.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatsCountArgs>(
      args?: Subset<T, ChatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatsAggregateArgs>(args: Subset<T, ChatsAggregateArgs>): Prisma.PrismaPromise<GetChatsAggregateType<T>>

    /**
     * Group by Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatsGroupByArgs} args - Group by arguments.
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
      T extends ChatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatsGroupByArgs['orderBy'] }
        : { orderBy?: ChatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chats model
   */
  readonly fields: ChatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends ChatroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatroomDefaultArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chats model
   */
  interface ChatsFieldRefs {
    readonly id: FieldRef<"Chats", 'BigInt'>
    readonly text: FieldRef<"Chats", 'String'>
    readonly roomid: FieldRef<"Chats", 'BigInt'>
    readonly userid: FieldRef<"Chats", 'BigInt'>
    readonly createdAt: FieldRef<"Chats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chats findUnique
   */
  export type ChatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where: ChatsWhereUniqueInput
  }

  /**
   * Chats findUniqueOrThrow
   */
  export type ChatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where: ChatsWhereUniqueInput
  }

  /**
   * Chats findFirst
   */
  export type ChatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * Chats findFirstOrThrow
   */
  export type ChatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * Chats findMany
   */
  export type ChatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatsOrderByWithRelationInput | ChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatsScalarFieldEnum | ChatsScalarFieldEnum[]
  }

  /**
   * Chats create
   */
  export type ChatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * The data needed to create a Chats.
     */
    data: XOR<ChatsCreateInput, ChatsUncheckedCreateInput>
  }

  /**
   * Chats createMany
   */
  export type ChatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatsCreateManyInput | ChatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chats createManyAndReturn
   */
  export type ChatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatsCreateManyInput | ChatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chats update
   */
  export type ChatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * The data needed to update a Chats.
     */
    data: XOR<ChatsUpdateInput, ChatsUncheckedUpdateInput>
    /**
     * Choose, which Chats to update.
     */
    where: ChatsWhereUniqueInput
  }

  /**
   * Chats updateMany
   */
  export type ChatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatsUpdateManyMutationInput, ChatsUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatsWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chats updateManyAndReturn
   */
  export type ChatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatsUpdateManyMutationInput, ChatsUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatsWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chats upsert
   */
  export type ChatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * The filter to search for the Chats to update in case it exists.
     */
    where: ChatsWhereUniqueInput
    /**
     * In case the Chats found by the `where` argument doesn't exist, create a new Chats with this data.
     */
    create: XOR<ChatsCreateInput, ChatsUncheckedCreateInput>
    /**
     * In case the Chats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatsUpdateInput, ChatsUncheckedUpdateInput>
  }

  /**
   * Chats delete
   */
  export type ChatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
    /**
     * Filter which Chats to delete.
     */
    where: ChatsWhereUniqueInput
  }

  /**
   * Chats deleteMany
   */
  export type ChatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatsWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chats without action
   */
  export type ChatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chats
     */
    select?: ChatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chats
     */
    omit?: ChatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatsInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    role: 'role',
    username: 'username',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatroomScalarFieldEnum: {
    id: 'id',
    userid: 'userid'
  };

  export type ChatroomScalarFieldEnum = (typeof ChatroomScalarFieldEnum)[keyof typeof ChatroomScalarFieldEnum]


  export const ChatsScalarFieldEnum: {
    id: 'id',
    text: 'text',
    roomid: 'roomid',
    userid: 'userid',
    createdAt: 'createdAt'
  };

  export type ChatsScalarFieldEnum = (typeof ChatsScalarFieldEnum)[keyof typeof ChatsScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    clerkId?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    chatroom?: ChatroomListRelationFilter
    chats?: ChatsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    username?: SortOrder
    email?: SortOrder
    chatroom?: ChatroomOrderByRelationAggregateInput
    chats?: ChatsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    clerkId?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    chatroom?: ChatroomListRelationFilter
    chats?: ChatsListRelationFilter
  }, "id" | "clerkId" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    clerkId?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ChatroomWhereInput = {
    AND?: ChatroomWhereInput | ChatroomWhereInput[]
    OR?: ChatroomWhereInput[]
    NOT?: ChatroomWhereInput | ChatroomWhereInput[]
    id?: BigIntFilter<"Chatroom"> | bigint | number
    userid?: BigIntFilter<"Chatroom"> | bigint | number
    chats?: ChatsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatroomOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    chats?: ChatsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ChatroomWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChatroomWhereInput | ChatroomWhereInput[]
    OR?: ChatroomWhereInput[]
    NOT?: ChatroomWhereInput | ChatroomWhereInput[]
    userid?: BigIntFilter<"Chatroom"> | bigint | number
    chats?: ChatsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatroomOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    _count?: ChatroomCountOrderByAggregateInput
    _avg?: ChatroomAvgOrderByAggregateInput
    _max?: ChatroomMaxOrderByAggregateInput
    _min?: ChatroomMinOrderByAggregateInput
    _sum?: ChatroomSumOrderByAggregateInput
  }

  export type ChatroomScalarWhereWithAggregatesInput = {
    AND?: ChatroomScalarWhereWithAggregatesInput | ChatroomScalarWhereWithAggregatesInput[]
    OR?: ChatroomScalarWhereWithAggregatesInput[]
    NOT?: ChatroomScalarWhereWithAggregatesInput | ChatroomScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Chatroom"> | bigint | number
    userid?: BigIntWithAggregatesFilter<"Chatroom"> | bigint | number
  }

  export type ChatsWhereInput = {
    AND?: ChatsWhereInput | ChatsWhereInput[]
    OR?: ChatsWhereInput[]
    NOT?: ChatsWhereInput | ChatsWhereInput[]
    id?: BigIntFilter<"Chats"> | bigint | number
    text?: StringFilter<"Chats"> | string
    roomid?: BigIntFilter<"Chats"> | bigint | number
    userid?: BigIntFilter<"Chats"> | bigint | number
    createdAt?: DateTimeFilter<"Chats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
  }

  export type ChatsOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: ChatroomOrderByWithRelationInput
  }

  export type ChatsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChatsWhereInput | ChatsWhereInput[]
    OR?: ChatsWhereInput[]
    NOT?: ChatsWhereInput | ChatsWhereInput[]
    text?: StringFilter<"Chats"> | string
    roomid?: BigIntFilter<"Chats"> | bigint | number
    userid?: BigIntFilter<"Chats"> | bigint | number
    createdAt?: DateTimeFilter<"Chats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
  }, "id">

  export type ChatsOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    _count?: ChatsCountOrderByAggregateInput
    _avg?: ChatsAvgOrderByAggregateInput
    _max?: ChatsMaxOrderByAggregateInput
    _min?: ChatsMinOrderByAggregateInput
    _sum?: ChatsSumOrderByAggregateInput
  }

  export type ChatsScalarWhereWithAggregatesInput = {
    AND?: ChatsScalarWhereWithAggregatesInput | ChatsScalarWhereWithAggregatesInput[]
    OR?: ChatsScalarWhereWithAggregatesInput[]
    NOT?: ChatsScalarWhereWithAggregatesInput | ChatsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Chats"> | bigint | number
    text?: StringWithAggregatesFilter<"Chats"> | string
    roomid?: BigIntWithAggregatesFilter<"Chats"> | bigint | number
    userid?: BigIntWithAggregatesFilter<"Chats"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Chats"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chatroom?: ChatroomCreateNestedManyWithoutUserInput
    chats?: ChatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chatroom?: ChatroomUncheckedCreateNestedManyWithoutUserInput
    chats?: ChatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUpdateManyWithoutUserNestedInput
    chats?: ChatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUncheckedUpdateManyWithoutUserNestedInput
    chats?: ChatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomCreateInput = {
    id?: bigint | number
    chats?: ChatsCreateNestedManyWithoutRoomInput
    user: UserCreateNestedOneWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateInput = {
    id?: bigint | number
    userid: bigint | number
    chats?: ChatsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatroomUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chats?: ChatsUpdateManyWithoutRoomNestedInput
    user?: UserUpdateOneRequiredWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    chats?: ChatsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatroomCreateManyInput = {
    id?: bigint | number
    userid: bigint | number
  }

  export type ChatroomUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChatroomUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChatsCreateInput = {
    id?: bigint | number
    text: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
    room: ChatroomCreateNestedOneWithoutChatsInput
  }

  export type ChatsUncheckedCreateInput = {
    id?: bigint | number
    text: string
    roomid: bigint | number
    userid: bigint | number
    createdAt?: Date | string
  }

  export type ChatsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
    room?: ChatroomUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    roomid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatsCreateManyInput = {
    id?: bigint | number
    text: string
    roomid: bigint | number
    userid: bigint | number
    createdAt?: Date | string
  }

  export type ChatsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    roomid?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type ChatroomListRelationFilter = {
    every?: ChatroomWhereInput
    some?: ChatroomWhereInput
    none?: ChatroomWhereInput
  }

  export type ChatsListRelationFilter = {
    every?: ChatsWhereInput
    some?: ChatsWhereInput
    none?: ChatsWhereInput
  }

  export type ChatroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    role?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatroomCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type ChatroomAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type ChatroomMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type ChatroomMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type ChatroomSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
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

  export type ChatroomScalarRelationFilter = {
    is?: ChatroomWhereInput
    isNot?: ChatroomWhereInput
  }

  export type ChatsCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatsAvgOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
  }

  export type ChatsMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatsMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatsSumOrderByAggregateInput = {
    id?: SortOrder
    roomid?: SortOrder
    userid?: SortOrder
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

  export type ChatroomCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput> | ChatroomCreateWithoutUserInput[] | ChatroomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserInput | ChatroomCreateOrConnectWithoutUserInput[]
    createMany?: ChatroomCreateManyUserInputEnvelope
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatsCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput> | ChatsCreateWithoutUserInput[] | ChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutUserInput | ChatsCreateOrConnectWithoutUserInput[]
    createMany?: ChatsCreateManyUserInputEnvelope
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
  }

  export type ChatroomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput> | ChatroomCreateWithoutUserInput[] | ChatroomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserInput | ChatroomCreateOrConnectWithoutUserInput[]
    createMany?: ChatroomCreateManyUserInputEnvelope
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput> | ChatsCreateWithoutUserInput[] | ChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutUserInput | ChatsCreateOrConnectWithoutUserInput[]
    createMany?: ChatsCreateManyUserInputEnvelope
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ChatroomUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput> | ChatroomCreateWithoutUserInput[] | ChatroomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserInput | ChatroomCreateOrConnectWithoutUserInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutUserInput | ChatroomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatroomCreateManyUserInputEnvelope
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutUserInput | ChatroomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutUserInput | ChatroomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput> | ChatsCreateWithoutUserInput[] | ChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutUserInput | ChatsCreateOrConnectWithoutUserInput[]
    upsert?: ChatsUpsertWithWhereUniqueWithoutUserInput | ChatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatsCreateManyUserInputEnvelope
    set?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    disconnect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    delete?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    update?: ChatsUpdateWithWhereUniqueWithoutUserInput | ChatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatsUpdateManyWithWhereWithoutUserInput | ChatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
  }

  export type ChatroomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput> | ChatroomCreateWithoutUserInput[] | ChatroomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserInput | ChatroomCreateOrConnectWithoutUserInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutUserInput | ChatroomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatroomCreateManyUserInputEnvelope
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutUserInput | ChatroomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutUserInput | ChatroomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput> | ChatsCreateWithoutUserInput[] | ChatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutUserInput | ChatsCreateOrConnectWithoutUserInput[]
    upsert?: ChatsUpsertWithWhereUniqueWithoutUserInput | ChatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatsCreateManyUserInputEnvelope
    set?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    disconnect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    delete?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    update?: ChatsUpdateWithWhereUniqueWithoutUserInput | ChatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatsUpdateManyWithWhereWithoutUserInput | ChatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
  }

  export type ChatsCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput> | ChatsCreateWithoutRoomInput[] | ChatsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutRoomInput | ChatsCreateOrConnectWithoutRoomInput[]
    createMany?: ChatsCreateManyRoomInputEnvelope
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutChatroomInput = {
    create?: XOR<UserCreateWithoutChatroomInput, UserUncheckedCreateWithoutChatroomInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomInput
    connect?: UserWhereUniqueInput
  }

  export type ChatsUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput> | ChatsCreateWithoutRoomInput[] | ChatsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutRoomInput | ChatsCreateOrConnectWithoutRoomInput[]
    createMany?: ChatsCreateManyRoomInputEnvelope
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
  }

  export type ChatsUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput> | ChatsCreateWithoutRoomInput[] | ChatsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutRoomInput | ChatsCreateOrConnectWithoutRoomInput[]
    upsert?: ChatsUpsertWithWhereUniqueWithoutRoomInput | ChatsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatsCreateManyRoomInputEnvelope
    set?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    disconnect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    delete?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    update?: ChatsUpdateWithWhereUniqueWithoutRoomInput | ChatsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatsUpdateManyWithWhereWithoutRoomInput | ChatsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutChatroomNestedInput = {
    create?: XOR<UserCreateWithoutChatroomInput, UserUncheckedCreateWithoutChatroomInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatroomInput
    upsert?: UserUpsertWithoutChatroomInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatroomInput, UserUpdateWithoutChatroomInput>, UserUncheckedUpdateWithoutChatroomInput>
  }

  export type ChatsUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput> | ChatsCreateWithoutRoomInput[] | ChatsUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatsCreateOrConnectWithoutRoomInput | ChatsCreateOrConnectWithoutRoomInput[]
    upsert?: ChatsUpsertWithWhereUniqueWithoutRoomInput | ChatsUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatsCreateManyRoomInputEnvelope
    set?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    disconnect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    delete?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    connect?: ChatsWhereUniqueInput | ChatsWhereUniqueInput[]
    update?: ChatsUpdateWithWhereUniqueWithoutRoomInput | ChatsUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatsUpdateManyWithWhereWithoutRoomInput | ChatsUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatroomCreateNestedOneWithoutChatsInput = {
    create?: XOR<ChatroomCreateWithoutChatsInput, ChatroomUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutChatsInput
    connect?: ChatroomWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatsInput
    upsert?: UserUpsertWithoutChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatsInput, UserUpdateWithoutChatsInput>, UserUncheckedUpdateWithoutChatsInput>
  }

  export type ChatroomUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ChatroomCreateWithoutChatsInput, ChatroomUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutChatsInput
    upsert?: ChatroomUpsertWithoutChatsInput
    connect?: ChatroomWhereUniqueInput
    update?: XOR<XOR<ChatroomUpdateToOneWithWhereWithoutChatsInput, ChatroomUpdateWithoutChatsInput>, ChatroomUncheckedUpdateWithoutChatsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type ChatroomCreateWithoutUserInput = {
    id?: bigint | number
    chats?: ChatsCreateNestedManyWithoutRoomInput
  }

  export type ChatroomUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    chats?: ChatsUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatroomCreateOrConnectWithoutUserInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput>
  }

  export type ChatroomCreateManyUserInputEnvelope = {
    data: ChatroomCreateManyUserInput | ChatroomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatsCreateWithoutUserInput = {
    id?: bigint | number
    text: string
    createdAt?: Date | string
    room: ChatroomCreateNestedOneWithoutChatsInput
  }

  export type ChatsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    text: string
    roomid: bigint | number
    createdAt?: Date | string
  }

  export type ChatsCreateOrConnectWithoutUserInput = {
    where: ChatsWhereUniqueInput
    create: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput>
  }

  export type ChatsCreateManyUserInputEnvelope = {
    data: ChatsCreateManyUserInput | ChatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatroomUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatroomWhereUniqueInput
    update: XOR<ChatroomUpdateWithoutUserInput, ChatroomUncheckedUpdateWithoutUserInput>
    create: XOR<ChatroomCreateWithoutUserInput, ChatroomUncheckedCreateWithoutUserInput>
  }

  export type ChatroomUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatroomWhereUniqueInput
    data: XOR<ChatroomUpdateWithoutUserInput, ChatroomUncheckedUpdateWithoutUserInput>
  }

  export type ChatroomUpdateManyWithWhereWithoutUserInput = {
    where: ChatroomScalarWhereInput
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatroomScalarWhereInput = {
    AND?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
    OR?: ChatroomScalarWhereInput[]
    NOT?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
    id?: BigIntFilter<"Chatroom"> | bigint | number
    userid?: BigIntFilter<"Chatroom"> | bigint | number
  }

  export type ChatsUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatsWhereUniqueInput
    update: XOR<ChatsUpdateWithoutUserInput, ChatsUncheckedUpdateWithoutUserInput>
    create: XOR<ChatsCreateWithoutUserInput, ChatsUncheckedCreateWithoutUserInput>
  }

  export type ChatsUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatsWhereUniqueInput
    data: XOR<ChatsUpdateWithoutUserInput, ChatsUncheckedUpdateWithoutUserInput>
  }

  export type ChatsUpdateManyWithWhereWithoutUserInput = {
    where: ChatsScalarWhereInput
    data: XOR<ChatsUpdateManyMutationInput, ChatsUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatsScalarWhereInput = {
    AND?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
    OR?: ChatsScalarWhereInput[]
    NOT?: ChatsScalarWhereInput | ChatsScalarWhereInput[]
    id?: BigIntFilter<"Chats"> | bigint | number
    text?: StringFilter<"Chats"> | string
    roomid?: BigIntFilter<"Chats"> | bigint | number
    userid?: BigIntFilter<"Chats"> | bigint | number
    createdAt?: DateTimeFilter<"Chats"> | Date | string
  }

  export type ChatsCreateWithoutRoomInput = {
    id?: bigint | number
    text: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChatsInput
  }

  export type ChatsUncheckedCreateWithoutRoomInput = {
    id?: bigint | number
    text: string
    userid: bigint | number
    createdAt?: Date | string
  }

  export type ChatsCreateOrConnectWithoutRoomInput = {
    where: ChatsWhereUniqueInput
    create: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput>
  }

  export type ChatsCreateManyRoomInputEnvelope = {
    data: ChatsCreateManyRoomInput | ChatsCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutChatroomInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chats?: ChatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatroomInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chats?: ChatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatroomInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatroomInput, UserUncheckedCreateWithoutChatroomInput>
  }

  export type ChatsUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatsWhereUniqueInput
    update: XOR<ChatsUpdateWithoutRoomInput, ChatsUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatsCreateWithoutRoomInput, ChatsUncheckedCreateWithoutRoomInput>
  }

  export type ChatsUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatsWhereUniqueInput
    data: XOR<ChatsUpdateWithoutRoomInput, ChatsUncheckedUpdateWithoutRoomInput>
  }

  export type ChatsUpdateManyWithWhereWithoutRoomInput = {
    where: ChatsScalarWhereInput
    data: XOR<ChatsUpdateManyMutationInput, ChatsUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserUpsertWithoutChatroomInput = {
    update: XOR<UserUpdateWithoutChatroomInput, UserUncheckedUpdateWithoutChatroomInput>
    create: XOR<UserCreateWithoutChatroomInput, UserUncheckedCreateWithoutChatroomInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatroomInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatroomInput, UserUncheckedUpdateWithoutChatroomInput>
  }

  export type UserUpdateWithoutChatroomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chats?: ChatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatroomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chats?: ChatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatsInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chatroom?: ChatroomCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: bigint | number
    clerkId: string
    role?: string
    username: string
    email: string
    chatroom?: ChatroomUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type ChatroomCreateWithoutChatsInput = {
    id?: bigint | number
    user: UserCreateNestedOneWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateWithoutChatsInput = {
    id?: bigint | number
    userid: bigint | number
  }

  export type ChatroomCreateOrConnectWithoutChatsInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutChatsInput, ChatroomUncheckedCreateWithoutChatsInput>
  }

  export type UserUpsertWithoutChatsInput = {
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    clerkId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatroomUpsertWithoutChatsInput = {
    update: XOR<ChatroomUpdateWithoutChatsInput, ChatroomUncheckedUpdateWithoutChatsInput>
    create: XOR<ChatroomCreateWithoutChatsInput, ChatroomUncheckedCreateWithoutChatsInput>
    where?: ChatroomWhereInput
  }

  export type ChatroomUpdateToOneWithWhereWithoutChatsInput = {
    where?: ChatroomWhereInput
    data: XOR<ChatroomUpdateWithoutChatsInput, ChatroomUncheckedUpdateWithoutChatsInput>
  }

  export type ChatroomUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutChatsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChatroomCreateManyUserInput = {
    id?: bigint | number
  }

  export type ChatsCreateManyUserInput = {
    id?: bigint | number
    text: string
    roomid: bigint | number
    createdAt?: Date | string
  }

  export type ChatroomUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chats?: ChatsUpdateManyWithoutRoomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    chats?: ChatsUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatroomUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type ChatsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatroomUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    roomid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    roomid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatsCreateManyRoomInput = {
    id?: bigint | number
    text: string
    userid: bigint | number
    createdAt?: Date | string
  }

  export type ChatsUpdateWithoutRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type ChatsUncheckedUpdateWithoutRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatsUncheckedUpdateManyWithoutRoomInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    text?: StringFieldUpdateOperationsInput | string
    userid?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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