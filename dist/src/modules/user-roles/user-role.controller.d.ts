import type { Request, Response, NextFunction } from "express";
import type z from "zod";
import type { userRolesSchema } from "./user-role.schema.js";
type GetAllRequest = Request<z.infer<(typeof userRolesSchema)["getAllSchema"]>["params"], unknown, unknown, unknown>;
type CreateUserRoleRequest = Request<z.infer<(typeof userRolesSchema)["createSchema"]>["params"], unknown, z.infer<(typeof userRolesSchema)["createSchema"]>["body"], unknown>;
type DeleteUserRoleRequest = Request<z.infer<(typeof userRolesSchema)["idSchema"]>["params"], unknown, unknown, unknown>;
export declare const userRoleController: {
    getAll: (req: GetAllRequest, res: Response, next: NextFunction) => Promise<void>;
    create: (req: CreateUserRoleRequest, res: Response, next: NextFunction) => Promise<void>;
    deleteById: (req: DeleteUserRoleRequest, res: Response, next: NextFunction) => Promise<void>;
};
export {};
//# sourceMappingURL=user-role.controller.d.ts.map