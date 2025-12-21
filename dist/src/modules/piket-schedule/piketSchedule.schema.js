import z from "zod";
const dayOfWeekSchema = z.coerce
    .number()
    .int()
    .min(0, "Day must be between 0 (Sunday) and 6 (Saturday)")
    .max(6, "Day must be between 0 (Sunday) and 6 (Saturday)");
export const getPiketSchedulesSchema = z.object({
    query: z.object({
        day: dayOfWeekSchema.optional(),
    }),
});
export const createPiketScheduleSchema = z.object({
    body: z.object({
        teacher_user_id: z.coerce.number().int().min(1, "Teacher ID is required"),
        day_of_week: dayOfWeekSchema,
    }),
});
export const updatePiketScheduleSchema = z.object({
    params: z.object({
        id: z.string({ message: "Piket schedule ID is required" }),
    }),
    body: z.object({
        teacher_user_id: z.coerce.number().int().min(1, "Teacher ID is required"),
        day_of_week: dayOfWeekSchema,
    }),
});
export const piketScheduleIdSchema = z.object({
    params: z.object({
        id: z.string({ message: "Piket schedule ID is required" }),
    }),
});
//# sourceMappingURL=piketSchedule.schema.js.map