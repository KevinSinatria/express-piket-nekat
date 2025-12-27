import z from "zod";
export declare const reportSchema: {
    getReportSchema: z.ZodObject<{
        query: z.ZodObject<{
            start_date: z.ZodString;
            end_date: z.ZodString;
            status: z.ZodOptional<z.ZodEnum<{
                readonly PENDING_MAPEL: "PENDING_MAPEL";
                readonly PENDING_PIKET: "PENDING_PIKET";
                readonly APPROVED: "APPROVED";
                readonly REJECTED: "REJECTED";
                readonly CANCELED: "CANCELED";
            }>>;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
};
//# sourceMappingURL=report.schema.d.ts.map