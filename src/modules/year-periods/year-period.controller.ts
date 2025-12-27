import type { NextFunction, Request, Response } from "express";
import { yearPeriodService } from "./year-period.service.js";
import { prisma } from "../../config/prisma.js";

const getCurrentYearPeriod = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const yearPeriod = await yearPeriodService.getCurrentYearPeriod(prisma);
    res.status(200).json({
      success: true,
      message: "Year period fetched successfully",
      data: yearPeriod,
    });
  } catch (error) {
    next(error);
  }
};

export const yearPeriodController = {
  getCurrentYearPeriod,
};
