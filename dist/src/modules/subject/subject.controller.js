import { createSubjectService, getAllSubjectsService, getSubjectByIdService, updateSubjectService, deleteSubjectService, } from "./subject.service.js";
import { prisma } from "../../config/prisma.js";
export const createSubjectController = async (req, res, next) => {
    try {
        const newSubject = await createSubjectService(prisma, req.body);
        res.status(201).json({
            success: true,
            message: "the subject has been successfully created",
            data: newSubject
        });
    }
    catch (error) {
        next(error);
    }
};
export const getAllSubjectsController = async (req, res, next) => {
    try {
        const result = await getAllSubjectsService(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Subjects fetched successfully",
            ...result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const getSubjectByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const subject = await getSubjectByIdService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Subject fetched successfully",
            data: subject,
        });
    }
    catch (error) {
        next(error);
    }
};
export const updateSubjectController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedSubject = await updateSubjectService(prisma, id, req.body);
        res.status(200).json({
            success: true,
            message: "Subject updated successfully",
            data: updatedSubject,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deleteSubjectController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSubject = await deleteSubjectService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Subject deleted successfully",
            data: deletedSubject,
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=subject.controller.js.map