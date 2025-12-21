import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type { createTeacherAssignmentSchema, updateTeacherAssignmentSchema } from "./teacherAssignment.schema.js";
type CreateTARequest = Request<unknown, unknown, z.infer<typeof createTeacherAssignmentSchema>["body"]>;
type UpdateTARequest = Request<z.infer<typeof updateTeacherAssignmentSchema>["params"], unknown, z.infer<typeof updateTeacherAssignmentSchema>["body"]>;
type GetTARequest = Request<unknown, unknown, unknown, {
    page?: string;
    limit?: string;
    search?: string;
    class_id?: string;
    subject_id?: string;
}>;
export declare const createTeacherAssignmentController: (req: CreateTARequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllTeacherAssignmentsController: (req: GetTARequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getTeacherAssignmentByIdController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updateTeacherAssignmentController: (req: UpdateTARequest, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteTeacherAssignmentController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=teacherAssignment.controller.d.ts.map