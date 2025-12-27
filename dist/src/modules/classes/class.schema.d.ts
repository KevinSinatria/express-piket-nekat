import z from "zod";
export declare const classSchema: {
    getAllSchema: z.ZodObject<{
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            limit: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            search: z.ZodOptional<z.ZodString>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=class.schema.d.ts.map