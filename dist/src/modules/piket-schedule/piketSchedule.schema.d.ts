import z from "zod";
export declare const getPiketSchedulesSchema: z.ZodObject<{
    query: z.ZodObject<{
        day: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const createPiketScheduleSchema: z.ZodObject<{
    body: z.ZodObject<{
        teacher_user_id: z.z.ZodCoercedNumber<unknown>;
        day_of_week: z.z.ZodCoercedNumber<unknown>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const updatePiketScheduleSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
    body: z.ZodObject<{
        teacher_user_id: z.z.ZodCoercedNumber<unknown>;
        day_of_week: z.z.ZodCoercedNumber<unknown>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const piketScheduleIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=piketSchedule.schema.d.ts.map