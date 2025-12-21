import { prisma } from "../../config/prisma.js";
import { userService } from "./user.service.js";
const create = async (req, res, next) => {
    try {
        const newUser = await userService.create(prisma, req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    }
    catch (error) {
        next(error);
    }
};
const getAll = async (req, res, next) => {
    try {
        const result = await userService.getAll(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Users fetched successfully",
            ...result,
        });
    }
    catch (error) {
        next(error);
    }
};
const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getById(prisma, id);
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: user,
        });
    }
    catch (error) {
        next(error);
    }
};
const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedUser = await userService.update(prisma, id, req.body);
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser = await userService.deleteById(prisma, id);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: deletedUser,
        });
    }
    catch (error) {
        next(error);
    }
};
const getMapelUsers = async (req, res, next) => {
    try {
        const mapelUsers = await userService.getMapelUsers(prisma);
        res.status(200).json({
            success: true,
            message: "Mapel users fetched successfully",
            data: mapelUsers,
        });
    }
    catch (error) {
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
//# sourceMappingURL=user.controller.js.map