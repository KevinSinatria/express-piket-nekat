import type z from "zod";
import type { classSchema } from "./class.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
type GetAllQuery = z.infer<typeof classSchema.getAllSchema>["query"];
export declare const classService: {
    getAll: (prisma: PrismaClient, query: GetAllQuery) => Promise<{
        data: {
            id: number;
            class: string;
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
};
export {};
//# sourceMappingURL=class.service.d.ts.map