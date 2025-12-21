import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type { createUserSchema, updateUserSchema, userIdSchema } from "./user.schema.js";
type CreateUserRequest = Request<unknown, unknown, z.infer<typeof createUserSchema>["body"]>;
type UpdateUserRequest = Request<z.infer<typeof updateUserSchema>["params"], unknown, z.infer<typeof updateUserSchema>["body"]>;
type GetAllUsersRequest = Request<unknown, unknown, unknown, {
    search?: string;
    page?: string;
    limit?: string;
}>;
type UserIdRequest = Request<z.infer<typeof userIdSchema>["params"]>;
export declare const userController: {
    create: (req: CreateUserRequest, res: Response, next: NextFunction) => Promise<void>;
    getAll: (req: GetAllUsersRequest, res: Response, next: NextFunction) => Promise<void>;
    getById: (req: UserIdRequest, res: Response, next: NextFunction) => Promise<void>;
    update: (req: UpdateUserRequest, res: Response, next: NextFunction) => Promise<void>;
    deleteById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMapelUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
export {};
//# sourceMappingURL=user.controller.d.ts.map