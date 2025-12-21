import type { Request, Response, NextFunction } from "express";
import type z from "zod";
import type { studentSchema } from "./student.schema.js";
type GetAllRequest = Request<unknown, unknown, unknown, z.infer<typeof studentSchema.getAllSchema>["query"]>;
export declare const studentController: {
    getAll: (req: GetAllRequest, res: Response, next: NextFunction) => Promise<void>;
};
export {};
//# sourceMappingURL=student.controller.d.ts.map