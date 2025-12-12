import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type {
  createUserSchema,
  getUsersSchema,
  updateUserSchema,
  userIdSchema,
} from "./user.schema.js";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "./user.service.js";
import { prisma } from "../../config/prisma.js";

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

export const createUserController = async (
  req: CreateUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(prisma, req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsersController = async (
  req: GetAllUsersRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getAllUsersService(prisma, req.query);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (
  req: UpdateUserRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUserService(prisma, id!, req.body);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserService(prisma, id!);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    next(error);
  }
};
