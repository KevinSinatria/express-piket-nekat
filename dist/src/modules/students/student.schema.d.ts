import z from "zod";
export declare const studentSchema: {
    getAllSchema: z.ZodObject<{
        query: z.ZodObject<{
            year_period_id: z.ZodOptional<z.ZodString>;
            page: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            limit: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            search: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=student.schema.d.ts.map