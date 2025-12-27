import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type { classSchema } from "./class.schema.js";
import { classService } from "./class.service.js";
import { prisma } from "../../config/prisma.js";

type GetAllRequest = Request<unknown, unknown, unknown, any>;

const getAll = async (
  req: GetAllRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await classService.getAll(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Classes fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const classController = {
  getAll,
};
