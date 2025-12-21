import type z from "zod";
import type { loginSchema } from "./auth.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
type loginRequest = z.infer<typeof loginSchema>["body"];
export declare const authService: {
    login: (prisma: PrismaClient, data: loginRequest) => Promise<{
        token: string;
        user: {
            id: number;
            username: string;
            fullname: string;
            roles: string[];
        };
    }>;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map