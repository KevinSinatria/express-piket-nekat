import { classService } from "./class.service.js";
import { prisma } from "../../config/prisma.js";
const getAll = async (req, res, next) => {
    try {
        const result = await classService.getAll(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Classes fetched successfully",
            ...result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const classController = {
    getAll,
};
//# sourceMappingURL=class.controller.js.map