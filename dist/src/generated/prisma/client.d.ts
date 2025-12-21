import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model cache
 *
 */
export type cache = Prisma.cacheModel;
/**
 * Model cache_locks
 *
 */
export type cache_locks = Prisma.cache_locksModel;
/**
 * Model failed_jobs
 *
 */
export type failed_jobs = Prisma.failed_jobsModel;
/**
 * Model job_batches
 *
 */
export type job_batches = Prisma.job_batchesModel;
/**
 * Model jobs
 *
 */
export type jobs = Prisma.jobsModel;
/**
 * Model password_reset_tokens
 *
 */
export type password_reset_tokens = Prisma.password_reset_tokensModel;
/**
 * Model personal_access_tokens
 *
 */
export type personal_access_tokens = Prisma.personal_access_tokensModel;
/**
 * Model sessions
 *
 */
export type sessions = Prisma.sessionsModel;
/**
 * Model classes
 *
 */
export type classes = Prisma.classesModel;
/**
 * Model detail_students
 *
 */
export type detail_students = Prisma.detail_studentsModel;
/**
 * Model students
 *
 */
export type students = Prisma.studentsModel;
/**
 * Model users
 *
 */
export type users = Prisma.usersModel;
/**
 * Model violation_categories
 *
 */
export type violation_categories = Prisma.violation_categoriesModel;
/**
 * Model violation_category
 *
 */
export type violation_category = Prisma.violation_categoryModel;
/**
 * Model violation_type
 *
 */
export type violation_type = Prisma.violation_typeModel;
/**
 * Model violations
 *
 */
export type violations = Prisma.violationsModel;
/**
 * Model subjects
 *
 */
export type subjects = Prisma.subjectsModel;
/**
 * Model PiketSchedule
 *
 */
export type PiketSchedule = Prisma.PiketScheduleModel;
/**
 * Model teacher_assignments
 *
 */
export type teacher_assignments = Prisma.teacher_assignmentsModel;
/**
 * Model student_permits
 *
 */
export type student_permits = Prisma.student_permitsModel;
/**
 * Model year_period
 *
 */
export type year_period = Prisma.year_periodModel;
/**
 * Model roles
 *
 */
export type roles = Prisma.rolesModel;
/**
 * Model user_role
 *
 */
export type user_role = Prisma.user_roleModel;
//# sourceMappingURL=client.d.ts.map