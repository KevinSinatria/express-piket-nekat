import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { ZodError } from "zod";
export const errorHandler = (err, req, res, next) => {
    console.log("ERROR: ", err);
    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation error",
            errors: err.format(),
        });
    }
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
        return res.status(404).json({
            success: false,
            message: "Resource not found",
        });
    }
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
        const errTyped = err;
        const target = errTyped.meta?.driverAdapterError?.cause?.constraint
            ?.fields;
        let cleanName;
        console.log("target: ", target);
        if (Array.isArray(target)) {
            cleanName = target.join(", ");
        }
        else {
            const parts = target.split("_").slice(1, -1);
            cleanName = parts.join("_");
        }
        return res.status(409).json({
            success: false,
            message: `Konflik: ${cleanName} sudah ada.`,
        });
    }
    return res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};
//# sourceMappingURL=error-handler.middleware.js.map