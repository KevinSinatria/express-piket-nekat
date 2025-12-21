import z from "zod";
export declare const studentPermitSchema: {
    createSchema: z.ZodObject<{
        body: z.ZodObject<{
            student_nis: z.ZodString;
            reason: z.ZodString;
            hours_start: z.ZodNumber;
            hours_end: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mapel_user_id: z.ZodNumber;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    updateSchema: z.ZodObject<{
        params: z.ZodObject<{
            id: z.z.ZodCoercedNumber<unknown>;
        }, z.z.core.$strip>;
        body: z.ZodObject<{
            student_nis: z.ZodOptional<z.ZodString>;
            reason: z.ZodOptional<z.ZodString>;
            hours_start: z.ZodOptional<z.ZodNumber>;
            hours_end: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            mapel_user_id: z.ZodOptional<z.ZodNumber>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    idSchema: z.ZodObject<{
        params: z.ZodObject<{
            id: z.ZodString;
        }, z.z.core.$strip>;
        query: z.ZodObject<{
            year_period_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    processPermitSchema: z.ZodObject<{
        params: z.ZodObject<{
            id: z.z.ZodCoercedNumber<unknown>;
        }, z.z.core.$strip>;
        body: z.ZodObject<{
            status: z.ZodEnum<{
                readonly PENDING_MAPEL: "PENDING_MAPEL";
                readonly PENDING_PIKET: "PENDING_PIKET";
                readonly APPROVED: "APPROVED";
                readonly REJECTED: "REJECTED";
                readonly CANCELED: "CANCELED";
            }>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
    getAllSchema: z.ZodObject<{
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            limit: z.ZodDefault<z.ZodOptional<z.z.ZodCoercedNumber<unknown>>>;
            search: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodArray<z.ZodOptional<z.ZodEnum<{
                readonly PENDING_MAPEL: "PENDING_MAPEL";
                readonly PENDING_PIKET: "PENDING_PIKET";
                readonly APPROVED: "APPROVED";
                readonly REJECTED: "REJECTED";
                readonly CANCELED: "CANCELED";
            }>>>>;
            piket_user_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
            mapel_user_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
            date_start: z.ZodOptional<z.ZodString>;
            date_end: z.ZodOptional<z.ZodString>;
            year_period_id: z.ZodOptional<z.z.ZodCoercedNumber<unknown>>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=student-permit.schema.d.ts.map