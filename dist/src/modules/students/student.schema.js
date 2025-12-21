import z from "zod";
const getAllSchema = z.object({
    query: z.object({
        year_period_id: z.string().optional(),
        page: z.coerce.number().int().min(1).optional().default(1),
        limit: z.coerce.number().int().min(1).optional().default(10),
        search: z.string().optional(),
    }),
});
export const studentSchema = {
    getAllSchema,
};
//# sourceMappingURL=student.schema.js.map