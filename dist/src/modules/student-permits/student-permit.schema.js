import z from "zod";
import { student_permit_status } from "../../generated/prisma/enums.js";
const validPermitStatus = z.enum(student_permit_status).optional();
const getAllSchema = z.object({
    query: z.object({
        // --- 1. PAGINASI & PENCARIAN STANDAR ---
        page: z.coerce.number().int().min(1).optional().default(1),
        limit: z.coerce.number().int().min(1).optional().default(10),
        // Pencarian berdasarkan nama siswa/username piket
        search: z.string().optional(),
        // --- 2. FILTER SPESIFIK ---
        status: z.array(validPermitStatus).optional(), // Memungkinkan filter multiple status (misal: [APPROVED, REJECTED])
        piket_user_id: z.coerce.number().int().optional(),
        mapel_user_id: z.coerce.number().int().optional(),
        date_start: z.string().optional(),
        date_end: z.string().optional(),
        year_period_id: z.coerce.number().int().optional(),
    }),
});
const createSchema = z.object({
    body: z.object({
        student_nis: z
            .array(z
            .string()
            .min(8, "NIS must be at least 8 characters")
            .max(20, "NIS too long"))
            .min(1, "At least one NIS is required"),
        reason: z.string().min(5, "Reason must be descriptive"),
        hours_start: z.number().int().min(1, "Start hour must be valid").max(24),
        hours_end: z
            .number()
            .int()
            .min(1, "End hour must be valid")
            .max(24)
            .optional()
            .nullable(),
        mapel_user_id: z
            .number()
            .int({ message: "Target Mapel User ID must be a valid integer" }),
    }),
});
// Hanya bisa dilakukan jika statusnya PENDING_MAPEL
const updateSchema = z.object({
    params: z.object({
        id: z.coerce.number().int({ message: "Permit ID must be a valid integer" }),
    }),
    body: z.object({
        student_nis: z.array(z
            .string()
            .min(10, "NIS must be at least 10 characters")
            .max(20, "NIS too long")),
        reason: z.string().min(5).optional(),
        hours_start: z.number().int().min(1).max(24).optional(),
        hours_end: z.number().int().min(1).max(24).optional().nullable(),
        mapel_user_id: z.number().int().optional(),
    }),
});
const processPermitSchema = z.object({
    params: z.object({
        id: z.coerce.number().int({ message: "Permit ID must be a valid integer" }),
    }),
    body: z.object({
        status: z.enum(student_permit_status),
    }),
});
const idSchema = z.object({
    params: z.object({
        id: z.string({ message: "Permit ID must be a valid integer" }),
    }),
    query: z.object({
        year_period_id: z.coerce.number().int().optional(),
    }),
});
export const studentPermitSchema = {
    createSchema,
    updateSchema,
    idSchema,
    processPermitSchema,
    getAllSchema,
};
//# sourceMappingURL=student-permit.schema.js.map