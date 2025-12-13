import { prisma } from "../../config/prisma.js";
import type { Request, Response, NextFunction } from "express";
import { studentService } from "./student.service.js";
import type z from "zod";
import type { studentSchema } from "./student.schema.js";

type GetAllRequest = Request<
  unknown,
  unknown,
  unknown,
  z.infer<typeof studentSchema.getAllSchema>["query"]
>;

const getAll = async (
  req: GetAllRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentService.getAll(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = { getAll };
