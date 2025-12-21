import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type { createSubjectSchema, updateSubjectSchema } from "./subject.schema.js";
type CreateSubjectRequest = Request<unknown, unknown, z.infer<typeof createSubjectSchema>["body"]>;
type UpdateSubjectRequest = Request<z.infer<typeof updateSubjectSchema>["params"], unknown, z.infer<typeof updateSubjectSchema>["body"]>;
type getAllSubjectsRequest = Request<unknown, unknown, unknown, {
    search?: string;
    page?: string;
    limit?: string;
}>;
export declare const createSubjectController: (req: CreateSubjectRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllSubjectsController: (req: getAllSubjectsRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getSubjectByIdController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateSubjectController: (req: UpdateSubjectRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteSubjectController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=subject.controller.d.ts.map