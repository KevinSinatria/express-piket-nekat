import { createPiketScheduleService, deletePiketScheduleService, getAllPiketSchedulesService, getPiketScheduleByIdService, updatePiketScheduleService, } from "./piketSchedule.service.js";
import { prisma } from "../../config/prisma.js";
export const createPiketScheduleController = async (req, res, next) => {
    try {
        const schedule = await createPiketScheduleService(prisma, req.body);
        res.status(201).json({
            success: true,
            message: "Piket schedule created successfully",
            data: schedule,
        });
    }
    catch (error) {
        next(error);
    }
};
export const getAllPiketSchedulesController = async (req, res, next) => {
    try {
        const schedules = await getAllPiketSchedulesService(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Piket schedules fetched successfully",
            data: schedules,
        });
    }
    catch (error) {
        next(error);
    }
};
export const getPiketScheduleByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const schedule = await getPiketScheduleByIdService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Piket shedule fetched successfully",
            data: schedule,
        });
    }
    catch (error) {
        next(error);
    }
};
export const updatePiketScheduleController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const schedule = await updatePiketScheduleService(prisma, id, req.body);
        res.status(200).json({
            success: true,
            message: "Piket schedule updated successfully",
            data: schedule,
        });
    }
    catch (error) {
        next(error);
    }
};
export const deletePiketScheduleController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await deletePiketScheduleService(prisma, id);
        res.status(200).json({
            success: true,
            message: "Piket schedule deleted successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=piketSchedule.controller.js.map