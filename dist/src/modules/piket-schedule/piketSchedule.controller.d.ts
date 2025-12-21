import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type { createPiketScheduleSchema, updatePiketScheduleSchema } from "./piketSchedule.schema.js";
type CreatePiketScheduleRequest = Request<unknown, unknown, z.infer<typeof createPiketScheduleSchema>["body"]>;
type UpdatePiketScheduleRequest = Request<z.infer<typeof updatePiketScheduleSchema>["params"], unknown, z.infer<typeof updatePiketScheduleSchema>["body"]>;
type GetPiketSchedulesRequest = Request<unknown, unknown, unknown, {
    day?: string;
}>;
export declare const createPiketScheduleController: (req: CreatePiketScheduleRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllPiketSchedulesController: (req: GetPiketSchedulesRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const getPiketScheduleByIdController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const updatePiketScheduleController: (req: UpdatePiketScheduleRequest, res: Response, next: NextFunction) => Promise<void>;
export declare const deletePiketScheduleController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=piketSchedule.controller.d.ts.map