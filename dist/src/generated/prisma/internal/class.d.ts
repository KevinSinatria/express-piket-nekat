import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caches
   * const caches = await prisma.cache.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caches
 * const caches = await prisma.cache.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
     * Read more in our [docs](https://pris.ly/d/raw-queries).
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.cache`: Exposes CRUD operations for the **cache** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Caches
  * const caches = await prisma.cache.findMany()
  * ```
  */
    get cache(): Prisma.cacheDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cache_locks`: Exposes CRUD operations for the **cache_locks** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cache_locks
      * const cache_locks = await prisma.cache_locks.findMany()
      * ```
      */
    get cache_locks(): Prisma.cache_locksDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.failed_jobs`: Exposes CRUD operations for the **failed_jobs** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Failed_jobs
      * const failed_jobs = await prisma.failed_jobs.findMany()
      * ```
      */
    get failed_jobs(): Prisma.failed_jobsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.job_batches`: Exposes CRUD operations for the **job_batches** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Job_batches
      * const job_batches = await prisma.job_batches.findMany()
      * ```
      */
    get job_batches(): Prisma.job_batchesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Jobs
      * const jobs = await prisma.jobs.findMany()
      * ```
      */
    get jobs(): Prisma.jobsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Password_reset_tokens
      * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
      * ```
      */
    get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.personal_access_tokens`: Exposes CRUD operations for the **personal_access_tokens** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personal_access_tokens
      * const personal_access_tokens = await prisma.personal_access_tokens.findMany()
      * ```
      */
    get personal_access_tokens(): Prisma.personal_access_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.sessions.findMany()
      * ```
      */
    get sessions(): Prisma.sessionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.classes`: Exposes CRUD operations for the **classes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Classes
      * const classes = await prisma.classes.findMany()
      * ```
      */
    get classes(): Prisma.classesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.detail_students`: Exposes CRUD operations for the **detail_students** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Detail_students
      * const detail_students = await prisma.detail_students.findMany()
      * ```
      */
    get detail_students(): Prisma.detail_studentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.students`: Exposes CRUD operations for the **students** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Students
      * const students = await prisma.students.findMany()
      * ```
      */
    get students(): Prisma.studentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.users`: Exposes CRUD operations for the **users** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Users
      * const users = await prisma.users.findMany()
      * ```
      */
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.violation_categories`: Exposes CRUD operations for the **violation_categories** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Violation_categories
      * const violation_categories = await prisma.violation_categories.findMany()
      * ```
      */
    get violation_categories(): Prisma.violation_categoriesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.violation_category`: Exposes CRUD operations for the **violation_category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Violation_categories
      * const violation_categories = await prisma.violation_category.findMany()
      * ```
      */
    get violation_category(): Prisma.violation_categoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.violation_type`: Exposes CRUD operations for the **violation_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Violation_types
      * const violation_types = await prisma.violation_type.findMany()
      * ```
      */
    get violation_type(): Prisma.violation_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.violations`: Exposes CRUD operations for the **violations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Violations
      * const violations = await prisma.violations.findMany()
      * ```
      */
    get violations(): Prisma.violationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.subjects`: Exposes CRUD operations for the **subjects** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Subjects
      * const subjects = await prisma.subjects.findMany()
      * ```
      */
    get subjects(): Prisma.subjectsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.piketSchedule`: Exposes CRUD operations for the **PiketSchedule** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PiketSchedules
      * const piketSchedules = await prisma.piketSchedule.findMany()
      * ```
      */
    get piketSchedule(): Prisma.PiketScheduleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacher_assignments`: Exposes CRUD operations for the **teacher_assignments** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Teacher_assignments
      * const teacher_assignments = await prisma.teacher_assignments.findMany()
      * ```
      */
    get teacher_assignments(): Prisma.teacher_assignmentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.student_permits`: Exposes CRUD operations for the **student_permits** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Student_permits
      * const student_permits = await prisma.student_permits.findMany()
      * ```
      */
    get student_permits(): Prisma.student_permitsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.year_period`: Exposes CRUD operations for the **year_period** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Year_periods
      * const year_periods = await prisma.year_period.findMany()
      * ```
      */
    get year_period(): Prisma.year_periodDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.roles`: Exposes CRUD operations for the **roles** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Roles
      * const roles = await prisma.roles.findMany()
      * ```
      */
    get roles(): Prisma.rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more User_roles
      * const user_roles = await prisma.user_role.findMany()
      * ```
      */
    get user_role(): Prisma.user_roleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map