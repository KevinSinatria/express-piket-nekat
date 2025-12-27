import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { createPiketScheduleSchema, getPiketSchedulesSchema, updatePiketScheduleSchema, piketScheduleIdSchema, } from "./piketSchedule.schema.js";
import { createPiketScheduleController, deletePiketScheduleController, getAllPiketSchedulesController, getPiketScheduleByIdController, updatePiketScheduleController, } from "./piketSchedule.controller.js";
import { authMiddleware, roleCheckMiddleware, } from "../../middlewares/auth.middleware.js";
const router = Router();
router.use(authMiddleware);
router.post("/", roleCheckMiddleware(["ADMIN"]), validate(createPiketScheduleSchema), createPiketScheduleController);
router.get("/", roleCheckMiddleware(["ADMIN", "PIKET"]), validate(getPiketSchedulesSchema), getAllPiketSchedulesController);
router.get("/:id", roleCheckMiddleware(["ADMIN", "PIKET"]), validate(piketScheduleIdSchema), getPiketScheduleByIdController);
router.put("/:id", roleCheckMiddleware(["ADMIN"]), validate(updatePiketScheduleSchema), updatePiketScheduleController);
router.delete("/:id", roleCheckMiddleware(["ADMIN"]), validate(piketScheduleIdSchema), deletePiketScheduleController);
export default router;
//# sourceMappingURL=piketSchedule.routes.js.map