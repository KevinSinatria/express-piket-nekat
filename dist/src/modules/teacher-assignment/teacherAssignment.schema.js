import z from "zod";
export const getTeacherAssignmentsSchema = z.object({
    query: z.object({
        page: z.coerce.number().int().min(1).optional().default(1),
        limit: z.coerce.number().int().min(1).optional().default(10),
        search: z.string().optional(),
        class_id: z.coerce.number().int().optional(),
        subject_id: z.coerce.number().int().optional(),
    }),
});
export const createTeacherAssignmentSchema = z.object({
    body: z.object({
        teacher_user_id: z.coerce.number().int().min(1, "Teacher ID is required"),
        class_id: z.coerce.number().int().min(1, "Class ID is required"),
        subject_id: z.coerce.number().int().min(1, "Subject ID is required"),
        assignment_details: z.string().min(1, "Assignment details is required"),
        reason: z.string().min(1, "Reason is required"),
        due_date: z.string().datetime().optional(),
    }),
});
export const updateTeacherAssignmentSchema = z.object({
    params: z.object({
        id: z.string({ message: "Assignment ID is required" }),
    }),
    body: z.object({
        teacher_user_id: z.coerce.number().int().min(1, "Teacher ID is required"),
        class_id: z.coerce.number().int().min(1, "Class ID is required"),
        subject_id: z.coerce.number().int().min(1, "Subject ID id required"),
        assignment_details: z.string().min(1, "Assignment details is required"),
        reason: z.string().min(1, "Reason is required"),
        due_date: z.string().datetime().optional(),
    }),
});
export const teacherAssignmentIdSchema = z.object({
    params: z.object({
        id: z.string({ message: "Assignment ID is required" }),
    }),
});
//# sourceMappingURL=teacherAssignment.schema.js.map