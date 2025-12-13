import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type {
  createPiketScheduleSchema,
  getPiketSchedulesSchema,
  updatePiketScheduleSchema,
} from "./piketSchedule.schema.js";
import {
  createPiketScheduleService,
  deletePiketScheduleService,
  getAllPiketSchedulesService,
  getPiketScheduleByIdService,
  updatePiketScheduleService,
} from "./piketSchedule.service.js";
import { prisma } from "../../config/prisma.js";

type CreatePiketScheduleRequest = Request<
  unknown,
  unknown,
  z.infer<typeof createPiketScheduleSchema>["body"]
>;

type UpdatePiketScheduleRequest = Request<
  z.infer<typeof updatePiketScheduleSchema>["params"],
  unknown,
  z.infer<typeof updatePiketScheduleSchema>["body"]
>;

type GetPiketSchedulesRequest = Request<
  unknown,
  unknown,
  unknown,
  { day?: string }
>;

export const createPiketScheduleController = async (
  req: CreatePiketScheduleRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const schedule = await createPiketScheduleService(prisma, req.body);
    res.status(201).json({
      success: true,
      message: "Piket schedule created successfully",
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllPiketSchedulesController = async (
  req: GetPiketSchedulesRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const schedules = await getAllPiketSchedulesService(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Piket schedules fetched successfully",
      data: schedules,
    });
  } catch (error) {
    next(error);
  }
};

export const getPiketScheduleByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const schedule = await getPiketScheduleByIdService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "Piket shedule fetched successfully",
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePiketScheduleController = async (
  req: UpdatePiketScheduleRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const schedule = await updatePiketScheduleService(prisma, id!, req.body);
    res.status(200).json({
      success: true,
      message: "Piket schedule updated successfully",
      data: schedule,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePiketScheduleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deletePiketScheduleService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "Piket schedule deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};