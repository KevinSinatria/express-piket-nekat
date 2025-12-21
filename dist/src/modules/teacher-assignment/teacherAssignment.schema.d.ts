import z from "zod";
export declare const getTeacherAssignmentsSchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
        limit: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
        search: z.ZodOptional<z.ZodString>;
        class_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
        subject_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const createTeacherAssignmentSchema: z.ZodObject<{
    body: z.ZodObject<{
        teacher_user_id: z.z.ZodCoercedNumber<unknown>;
        class_id: z.z.ZodCoercedNumber<unknown>;
        subject_id: z.z.ZodCoercedNumber<unknown>;
        assignment_details: z.ZodString;
        reason: z.ZodString;
        due_date: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const updateTeacherAssignmentSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
    body: z.ZodObject<{
        teacher_user_id: z.z.ZodCoercedNumber<unknown>;
        class_id: z.z.ZodCoercedNumber<unknown>;
        subject_id: z.z.ZodCoercedNumber<unknown>;
        assignment_details: z.ZodString;
        reason: z.ZodString;
        due_date: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const teacherAssignmentIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=teacherAssignment.schema.d.ts.map