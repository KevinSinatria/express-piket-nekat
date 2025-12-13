import type { Request, Response, NextFunction } from "express";
import type z from "zod";
import type { userRolesSchema } from "./user-role.schema.js";
import { userRoleService } from "./user-role.service.js";
import { prisma } from "../../config/prisma.js";

type GetAllRequest = Request<
  z.infer<(typeof userRolesSchema)["getAllSchema"]>["params"],
  unknown,
  unknown,
  unknown
>;

type CreateUserRoleRequest = Request<
  z.infer<(typeof userRolesSchema)["createSchema"]>["params"],
  unknown,
  z.infer<(typeof userRolesSchema)["createSchema"]>["body"],
  unknown
>;

type DeleteUserRoleRequest = Request<
  z.infer<(typeof userRolesSchema)["idSchema"]>["params"],
  unknown,
  unknown,
  unknown
>;

const getAll = async (
  req: GetAllRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    const result = await userRoleService.getAll(prisma, user_id);
    res.status(200).json({
      success: true,
      message: "User roles fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const create = async (
  req: CreateUserRoleRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user_id } = req.params;
    const result = await userRoleService.create(prisma, req.body, user_id);
    res.status(201).json({
      success: true,
      message: "User role created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (
  req: DeleteUserRoleRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userRoleService.deleteById(prisma, req.params);
    res.status(200).json({
      success: true,
      message: "User role deleted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userRoleController = { getAll, create, deleteById };
