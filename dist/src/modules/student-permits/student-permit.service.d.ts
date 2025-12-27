import type z from "zod";
import type { studentPermitSchema } from "./student-permit.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
type GetAllQuery = z.infer<typeof studentPermitSchema.getAllSchema>["query"];
type CreateData = z.infer<typeof studentPermitSchema.createSchema>["body"];
type UpdateData = z.infer<typeof studentPermitSchema.updateSchema>["body"];
type IdParams = z.infer<typeof studentPermitSchema.idSchema>["params"]["id"];
type YearPeriodIdQuery = z.infer<typeof studentPermitSchema.idSchema>["query"]["year_period_id"];
type ProcessData = z.infer<typeof studentPermitSchema.processPermitSchema>["body"];
export declare const studentPermitService: {
    getAll: (prisma: PrismaClient, query: GetAllQuery) => Promise<{
        data: {
            id: number;
            students: {
                name: string;
                nis: string;
                class: string | null;
            }[];
            mapel: {
                id: number;
                username: string;
                fullname: string;
            };
            piket: {
                id: number;
                username: string;
                fullname: string;
            };
            status: import("../../generated/prisma/enums.js").student_permit_status;
            reason: string;
            hours_start: number;
            hours_end: number | null;
            created_at: Date;
            updated_at: Date;
        }[];
        meta: {
            page: number;
            limit: number;
            totalItems: number;
            totalPages: number;
            hasPrevPage: boolean;
            hasNextPage: boolean;
        };
    }>;
    create: (prisma: PrismaClient, data: CreateData, user_id: number, year_period_id: YearPeriodIdQuery) => Promise<{
        id: number;
        students: {
            name: string;
            nis: string;
            class: string | null;
        }[];
        mapel: {
            id: number;
            fullname: string;
            username: string;
        };
        piket: {
            id: number;
            fullname: string;
            username: string;
        };
        status: import("../../generated/prisma/enums.js").student_permit_status;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    getById: (prisma: PrismaClient, id: IdParams, year_period_id: YearPeriodIdQuery) => Promise<{
        id: number;
        students: {
            name: string;
            nis: string;
            class: string | null;
        }[];
        mapel: {
            id: number;
            fullname: string;
            username: string;
        };
        piket: {
            id: number;
            fullname: string;
            username: string;
        };
        status: import("../../generated/prisma/enums.js").student_permit_status;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    update: (prisma: PrismaClient, id: IdParams, data: UpdateData) => Promise<{
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
    }>;
    deleteById: (prisma: PrismaClient, id: IdParams) => Promise<{
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
    }>;
    getMapelPending: (prisma: PrismaClient, user_id: number, year_period_id: YearPeriodIdQuery) => Promise<{
        id: number;
        students: {
            name: string;
            nis: string;
            class: string | null;
        }[];
        mapel: {
            id: number;
            fullname: string;
            username: string;
        };
        piket: {
            id: number;
            fullname: string;
            username: string;
        };
        status: import("../../generated/prisma/enums.js").student_permit_status;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    getPiketPending: (prisma: PrismaClient, user_id: number, year_period_id: YearPeriodIdQuery) => Promise<{
        id: number;
        students: {
            name: string;
            nis: string;
            class: string | null;
        }[];
        mapel: {
            id: number;
            fullname: string;
            username: string;
        };
        piket: {
            id: number;
            fullname: string;
            username: string;
        };
        status: import("../../generated/prisma/enums.js").student_permit_status;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    process: (prisma: PrismaClient, id: IdParams, data: ProcessData) => Promise<{
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
    }>;
    getAllNewApproved: (prisma: PrismaClient, year_period_id: number) => Promise<{
        id: number;
        students: {
            name: string;
            nis: string;
            class: string | null;
        }[];
        mapel: {
            id: number;
            fullname: string;
            username: string;
        };
        piket: {
            id: number;
            fullname: string;
            username: string;
        };
        status: import("../../generated/prisma/enums.js").student_permit_status;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
};
export {};
//# sourceMappingURL=student-permit.service.d.ts.map