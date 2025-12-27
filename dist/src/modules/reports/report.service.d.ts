import type { PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { reportSchema } from "./report.schema.js";
type GetReportQuery = z.infer<typeof reportSchema.getReportSchema>["query"];
export declare const reportService: {
    getStudentPermitReportData: (prisma: PrismaClient, query: GetReportQuery) => Promise<({
        student_permit_details: ({
            student: {
                created_at: Date | null;
                updated_at: Date | null;
                name: string;
                nis: string;
                point: number;
            };
        } & {
            id: number;
            student_nis: string;
            student_permit_id: number;
        })[];
        mapel_user: {
            username: string;
            fullname: string;
        };
        piket_user: {
            username: string;
            fullname: string;
        };
    } & {
        id: number;
        created_at: Date;
        updated_at: Date;
        status: import("../../generated/prisma/enums.js").student_permit_status;
        piket_user_id: number;
        mapel_user_id: number;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        studentsNis: string | null;
    })[]>;
};
export {};
//# sourceMappingURL=report.service.d.ts.map