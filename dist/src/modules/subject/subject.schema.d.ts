import z from "zod";
export declare const getSubjectsSchema: z.ZodObject<{
    query: z.ZodObject<{
        page: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
        limit: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
        search: z.ZodOptional<z.ZodString>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const createSubjectSchema: z.ZodObject<{
    body: z.ZodObject<{
        name: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const updateSubjectSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
    body: z.ZodObject<{
        name: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export declare const subjectIdSchema: z.ZodObject<{
    params: z.ZodObject<{
        id: z.ZodString;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
//# sourceMappingURL=subject.schema.d.ts.map