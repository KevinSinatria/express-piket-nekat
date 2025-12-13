import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type {
  createTeacherAssignmentSchema,
  getTeacherAssignmentsSchema,
  updateTeacherAssignmentSchema,
} from "./teacherAssignment.schema.js";
import {
  createTeacherAssignmentService,
  deleteTeacherAssignmentService,
  getAllTeacherAssignmentsService,
  getTeacherAssignmentByIdService,
  updateTeacherAssignmentService,
} from "./teacherAssignment.service.js";
import { prisma } from "../../config/prisma.js";

type CreateTARequest = Request<
  unknown,
  unknown,
  z.infer<typeof createTeacherAssignmentSchema>["body"]
>;

type UpdateTARequest = Request<
  z.infer<typeof updateTeacherAssignmentSchema>["params"],
  unknown,
  z.infer<typeof updateTeacherAssignmentSchema>["body"]
>;

type GetTARequest = Request<
  unknown,
  unknown,
  unknown,
  {
    page?: string;
    limit?: string;
    search?: string;
    class_id?: string;
    subject_id?: string;
  }
>;

export const createTeacherAssignmentController = async (
  req: CreateTARequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const assignment = await createTeacherAssignmentService(prisma, req.body);
    res.status(201).json({
      success: true,
      message: "Teacher assignment created successfully",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTeacherAssignmentsController = async (
  req: GetTARequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllTeacherAssignmentsService(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Teacher assignments fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const getTeacherAssignmentByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const assignment = await getTeacherAssignmentByIdService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "Teacher assignment fetched successfully",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTeacherAssignmentController = async (
  req: UpdateTARequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const assignment = await updateTeacherAssignmentService(prisma, id!, req.body);
    res.status(200).json({
      success: true,
      message: "Teacher assignment updated successfully",
      data: assignment,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTeacherAssignmentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteTeacherAssignmentService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "Teacher assignment deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};