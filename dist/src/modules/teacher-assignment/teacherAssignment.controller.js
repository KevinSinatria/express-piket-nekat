import { createTeacherAssignmentService, deleteTeacherAssignmentService, getAllTeacherAssignmentsService, getTeacherAssignmentByIdService, updateTeacherAssignmentService, } from "./teacherAssignment.service.js";
import { prisma } from "../../config/prisma.js";
export const createTeacherAssignmentController = async (req, res, next) => {
    try {
        const assignment = await createTeacherAssignmentService(prisma, req.body);
        res.status(201).json({
            success: true,
            message: "Teacher assignment created successfully",
            data: assignment,
        });
    }
    catch (error) {
        next(error);
    }
};
export const getAllTeacherAssignmentsController = async (req, res, next) => {
    try {
        const result = await getAllTeacherAssignmentsService(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Teacher assignments fetched successfully",
            ...result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const getTeacherAssignmentByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assignment = await getTeacherAssignmentByIdService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Teacher assignment fetched successfully",
            data: assignment,
        });
    }
    catch (error) {
        next(error);
    }
};
export const updateTeacherAssignmentController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const assignment = await updateTeacherAssignmentService(prisma, id, req.body);
        res.status(200).json({
            success: true,
            message: "Teacher assignment updated successfully",
            data: assignment,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deleteTeacherAssignmentController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deleteTeacherAssignmentService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Teacher assignment deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=teacherAssignment.controller.js.map