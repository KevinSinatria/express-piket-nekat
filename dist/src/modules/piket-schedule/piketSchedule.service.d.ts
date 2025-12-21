import type { PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { createPiketScheduleSchema, updatePiketScheduleSchema } from "./piketSchedule.schema.js";
type createPiketScheduleInput = z.infer<typeof createPiketScheduleSchema>["body"];
type updatePiketScheduleInput = z.infer<typeof updatePiketScheduleSchema>["body"];
export declare const createPiketScheduleService: (prisma: PrismaClient, data: createPiketScheduleInput) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    day_of_week: number;
    day_name: string | undefined;
}>;
export declare const getAllPiketSchedulesService: (prisma: PrismaClient, query: {
    day?: string;
}) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    day_of_week: number;
    day_name: string | undefined;
}[]>;
export declare const getPiketScheduleByIdService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    day_of_week: number;
    day_name: string | undefined;
}>;
export declare const updatePiketScheduleService: (prisma: PrismaClient, id: string, data: updatePiketScheduleInput) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    day_of_week: number;
    day_name: string | undefined;
}>;
export declare const deletePiketScheduleService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    day_of_week: number;
    teacher_user_id: number;
}>;
export {};
//# sourceMappingURL=piketSchedule.service.d.ts.map