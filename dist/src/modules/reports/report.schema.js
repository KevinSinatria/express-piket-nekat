import z from "zod";
import { student_permit_status } from "../../generated/prisma/enums.js";
const getReportSchema = z.object({
    query: z.object({
        start_date: z.string().min(1, "Start date is required"),
        end_date: z.string().min(1, "End date is required"),
        status: z.enum(student_permit_status).optional(),
    }),
});
export const reportSchema = {
    getReportSchema,
};
//# sourceMappingURL=report.schema.js.map