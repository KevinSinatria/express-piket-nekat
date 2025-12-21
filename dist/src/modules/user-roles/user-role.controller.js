import { userRoleService } from "./user-role.service.js";
import { prisma } from "../../config/prisma.js";
const getAll = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const result = await userRoleService.getAll(prisma, user_id);
        res.status(200).json({
            success: true,
            message: "User roles fetched successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const create = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const result = await userRoleService.create(prisma, req.body, user_id);
        res.status(201).json({
            success: true,
            message: "User role created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteById = async (req, res, next) => {
    try {
        const result = await userRoleService.deleteById(prisma, req.params);
        res.status(200).json({
            success: true,
            message: "User role deleted successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const userRoleController = { getAll, create, deleteById };
//# sourceMappingURL=user-role.controller.js.map