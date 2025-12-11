import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERROR: ", err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: err.format(),
    });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    return res.status(404).json({
      success: false,
      message: "Resource not found",
    });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
    const target = err.meta.driverAdapterError.cause.constraint.index as
      | string
      | string[];
    let cleanName: string;

    if (Array.isArray(target)) {
      cleanName = target.join(", ");
    } else {
      const parts = target.split("_").slice(1, -1);
      cleanName = parts.join("_");
    }

    return res.status(409).json({
      success: false,
      message: `Konflik: ${cleanName} sudah ada.`,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
