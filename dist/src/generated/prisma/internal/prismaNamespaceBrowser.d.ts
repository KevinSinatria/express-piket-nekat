import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map