import type { Request, Response, NextFunction } from "express";
import type z from "zod";
import type { studentPermitSchema } from "./student-permit.schema.js";
type GetAllRequest = Request<unknown, unknown, unknown, any & z.infer<typeof studentPermitSchema.getAllSchema>["query"]>;
type CreateRequest = Request<unknown, unknown, z.infer<typeof studentPermitSchema.createSchema>["body"]>;
type UpdateRequest = Request<z.infer<typeof studentPermitSchema.idSchema>["params"], unknown, z.infer<typeof studentPermitSchema.updateSchema>["body"]>;
type ProcessRequest = Request<z.infer<typeof studentPermitSchema.idSchema>["params"], unknown, z.infer<typeof studentPermitSchema.processPermitSchema>["body"]>;
type GetByIdRequest = Request<z.infer<typeof studentPermitSchema.idSchema>["params"], unknown, unknown, z.infer<typeof studentPermitSchema.idSchema>["query"]>;
type DeleteByIdRequest = Request<z.infer<typeof studentPermitSchema.idSchema>["params"]>;
export declare const studentPermitController: {
    getAll: (req: GetAllRequest, res: Response, next: NextFunction) => Promise<void>;
    create: (req: CreateRequest, res: Response, next: NextFunction) => Promise<void>;
    getById: (req: GetByIdRequest, res: Response, next: NextFunction) => Promise<void>;
    update: (req: UpdateRequest, res: Response, next: NextFunction) => Promise<void>;
    process: (req: ProcessRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteById: (req: DeleteByIdRequest, res: Response, next: NextFunction) => Promise<void>;
    getMapelPending: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPiketPending: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllNewApproved: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
export {};
//# sourceMappingURL=student-permit.controller.d.ts.map