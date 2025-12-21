import type z from "zod";
import type { PrismaClient } from "../../generated/prisma/client.js";
import type { studentSchema } from "./student.schema.js";
type GetAllQuery = z.infer<typeof studentSchema.getAllSchema>["query"];
export declare const studentService: {
    getAll: (prisma: PrismaClient, query: GetAllQuery) => Promise<{
        nis: string;
        name: string;
        class: string | null;
    }[]>;
};
export {};
//# sourceMappingURL=student.service.d.ts.map