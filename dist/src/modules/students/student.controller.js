import { prisma } from "../../config/prisma.js";
import { studentService } from "./student.service.js";
const getAll = async (req, res, next) => {
    try {
        const result = await studentService.getAll(prisma, req.query);
        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
export const studentController = { getAll };
//# sourceMappingURL=student.controller.js.map