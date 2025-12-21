import type { Request, Response, NextFunction } from "express";
import type z from "zod";
import type { studentPermitSchema } from "./student-permit.schema.js";
import { studentPermitService } from "./student-permit.service.js";
import { prisma } from "../../config/prisma.js";

type GetAllRequest = Request<
  unknown,
  unknown,
  unknown,
  any & z.infer<typeof studentPermitSchema.getAllSchema>["query"]
>;
type CreateRequest = Request<
  unknown,
  unknown,
  z.infer<typeof studentPermitSchema.createSchema>["body"]
>;
type UpdateRequest = Request<
  z.infer<typeof studentPermitSchema.idSchema>["params"],
  unknown,
  z.infer<typeof studentPermitSchema.updateSchema>["body"]
>;
type ProcessRequest = Request<
  z.infer<typeof studentPermitSchema.idSchema>["params"],
  unknown,
  z.infer<typeof studentPermitSchema.processPermitSchema>["body"]
>;
type GetByIdRequest = Request<
  z.infer<typeof studentPermitSchema.idSchema>["params"],
  unknown,
  unknown,
  z.infer<typeof studentPermitSchema.idSchema>["query"]
>;
type DeleteByIdRequest = Request<
  z.infer<typeof studentPermitSchema.idSchema>["params"]
>;

const getAll = async (
  req: GetAllRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentPermitService.getAll(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Student permits fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (
  req: CreateRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user!;
    const result = await studentPermitService.create(prisma, req.body, id);
    res.status(201).json({
      success: true,
      message: "Student permit created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (
  req: GetByIdRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { year_period_id } = req.query;
    const result = await studentPermitService.getById(
      prisma,
      id,
      year_period_id
    );

    res.status(200).json({
      success: true,
      message: "Student permit fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (
  req: UpdateRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await studentPermitService.update(prisma, id, req.body);
    res.status(200).json({
      success: true,
      message: "Student permit updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const process = async (
  req: ProcessRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const path = req.path;
    const MAPEL_STATUS = ["PENDING_PIKET", "REJECTED"];
    const PIKET_STATUS = ["APPROVED", "REJECTED"];

    if (path.includes("mapel") && !MAPEL_STATUS.includes(req.body.status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be PENDING_PIKET or REJECTED",
      });
    } else if (
      path.includes("piket") &&
      !PIKET_STATUS.includes(req.body.status)
    ) {
      return res.status(400).json({
        success: false,
        message: "Status must be APPROVED or REJECTED",
      });
    }

    const result = await studentPermitService.process(prisma, id, req.body);
    res.status(200).json({
      success: true,
      message: "Student permit processed successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (
  req: DeleteByIdRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await studentPermitService.deleteById(prisma, id);
    res.status(200).json({
      success: true,
      message: "Student permit deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMapelPending = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user!;
    const { year_period_id } = req.query;
    const result = await studentPermitService.getMapelPending(
      prisma,
      id,
      Number(year_period_id)
    );
    res.status(200).json({
      success: true,
      message: "Mapel pending fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getPiketPending = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user!;
    const { year_period_id } = req.query;
    const result = await studentPermitService.getPiketPending(
      prisma,
      id,
      Number(year_period_id)
    );
    res.status(200).json({
      success: true,
      message: "Piket pending fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentPermitController = {
  getAll,
  create,
  getById,
  update,
  process,
  deleteById,
  getMapelPending,
  getPiketPending,
};
