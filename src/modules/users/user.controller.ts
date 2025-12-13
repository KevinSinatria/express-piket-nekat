import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type {
  createUserSchema,
  getUsersSchema,
  updateUserSchema,
  userIdSchema,
} from "./user.schema.js";
import { prisma } from "../../config/prisma.js";
import { userService } from "./user.service.js";

// Tip: 'Request' di sini menggunakan tipe Zod untuk validasi
type CreateUserRequest = Request<
  unknown,
  unknown,
  z.infer<typeof createUserSchema>["body"]
>;

type UpdateUserRequest = Request<
  z.infer<typeof updateUserSchema>["params"],
  unknown,
  z.infer<typeof updateUserSchema>["body"]
>;

type GetAllUsersRequest = Request<
  unknown,
  unknown,
  unknown,
  {
    search?: string;
    page?: string;
    limit?: string;
  }
>;

type UserIdRequest = Request<z.infer<typeof userIdSchema>["params"]>;

const create = async (
  req: CreateUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await userService.create(prisma, req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (
  req: GetAllUsersRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userService.getAll(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (
  req: UserIdRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(prisma, id!);
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (
  req: UpdateUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.update(prisma, id!, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.deleteById(prisma, id!);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
};

const getMapelUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const mapelUsers = await userService.getMapelUsers(prisma);
    res.status(200).json({
      success: true,
      message: "Mapel users fetched successfully",
      data: mapelUsers,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getMapelUsers,
};
