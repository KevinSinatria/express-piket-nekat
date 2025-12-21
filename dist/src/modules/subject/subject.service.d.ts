import { type PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { createSubjectSchema, updateSubjectSchema } from "./subject.schema.js";
type CreateSubjectInput = z.infer<typeof createSubjectSchema>["body"];
type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>["body"];
export declare const createSubjectService: (prisma: PrismaClient, data: CreateSubjectInput) => Promise<{
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
}>;
export declare const getAllSubjectsService: (prisma: PrismaClient, query: {
    search?: string;
    page?: string;
    limit?: string;
}) => Promise<{
    data: {
        id: number;
        created_at: Date;
        updated_at: Date;
        name: string;
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
export declare const getSubjectByIdService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
}>;
export declare const updateSubjectService: (prisma: PrismaClient, id: string, data: UpdateSubjectInput) => Promise<{
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
}>;
export declare const deleteSubjectService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
}>;
export {};
//# sourceMappingURL=subject.service.d.ts.map