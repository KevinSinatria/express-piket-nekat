import type { PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { createUserSchema, updateUserSchema } from "./user.schema.js";
type CreateUserData = z.infer<typeof createUserSchema>["body"];
export declare const userService: {
    create: (prisma: PrismaClient, data: CreateUserData) => Promise<{
        username: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        fullname: string;
        nip: string | null;
    }>;
    getAll: (prisma: PrismaClient, query: {
        search?: string;
        page?: string;
        limit?: string;
    }) => Promise<{
        data: {
            username: string;
            id: number;
            created_at: Date | null;
            updated_at: Date | null;
            fullname: string;
            nip: string | null;
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
    getById: (prisma: PrismaClient, id: string) => Promise<{
        id: number;
        username: string;
        fullname: string;
        nip: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        roles: string[];
    }>;
    update: (prisma: PrismaClient, id: string, data: z.infer<typeof updateUserSchema>["body"]) => Promise<{
        username: string;
        password: string;
        id: number;
        api_token: string | null;
        remember_token: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        fullname: string;
        nip: string | null;
    }>;
    deleteById: (prisma: PrismaClient, id: string) => Promise<{
        username: string;
        password: string;
        id: number;
        api_token: string | null;
        remember_token: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        fullname: string;
        nip: string | null;
    }>;
    getMapelUsers: (prisma: PrismaClient) => Promise<{
        username: string;
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
        fullname: string;
        nip: string | null;
    }[]>;
};
export {};
//# sourceMappingURL=user.service.d.ts.map