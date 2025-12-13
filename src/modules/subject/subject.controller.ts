import type { NextFunction, Request, Response } from "express";
import type z from "zod";
import type {
    createSubjectSchema,
    getSubjectsSchema,
    updateSubjectSchema,
} from "./subject.schema.js";
import {
    createSubjectService,
    getAllSubjectsService,
    getSubjectByIdService,
    updateSubjectService,
    deleteSubjectService,
} from "./subject.service.js";
import { prisma } from "../../config/prisma.js";

type CreateSubjectRequest = Request<
    unknown,
    unknown,
    z.infer<typeof createSubjectSchema>["body"]
>;

type UpdateSubjectRequest = Request<
    z.infer<typeof updateSubjectSchema>["params"],
    unknown,
    z.infer<typeof updateSubjectSchema>["body"]
>;

type getAllSubjectsRequest = Request<
    unknown,
    unknown,
    unknown,
    {
        search?: string;
        page?: string;
        limit?: string;
    }
>;

export const createSubjectController = async (
    req: CreateSubjectRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const newSubject = await createSubjectService(prisma, req.body);
        res.status(201).json({
            success: true,
            message: "the subject has been successfully created",
            data: newSubject
        })
    } catch (error) {
        next(error);
    }
};

export const getAllSubjectsController = async (
    req: getAllSubjectsRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const result = await getAllSubjectsService(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Subjects fetched successfully",
            ...result,
        });
    } catch (error) {
        next(error);
    }
};

export const getSubjectByIdController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const subject = await getSubjectByIdService(prisma, id!);
        res.status(200).json({
            success: true,
            message: "Subject fetched successfully",
            data: subject,
        });
    } catch (error) {
        next(error);
    }
};

export const updateSubjectController = async (
    req: UpdateSubjectRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const updatedSubject = await updateSubjectService(prisma, id!, req.body);
        res.status(200).json({
            success: true,
            message: "Subject updated successfully",
            data: updatedSubject,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteSubjectController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { id } = req.params;
        const deletedSubject = await deleteSubjectService(prisma, id!);
        res.status(200).json({
            success: true,
            message: "Subject deleted successfully",
            data: deletedSubject,
        });
    } catch (error) {
        next(error);
    }
}