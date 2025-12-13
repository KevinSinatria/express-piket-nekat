import type { Request, Response, NextFunction } from "express";
import { roleService } from "./role.service.js";
import { prisma } from "../../config/prisma.js";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await roleService.getAll(prisma);
    res.status(200).json({
      success: true,
      message: "User roles fetched successfully",
      data: roles,
    });
  } catch (error) {
    next(error);
  }
};

export const roleController = { getAll };