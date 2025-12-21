import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { createPiketScheduleSchema, getPiketSchedulesSchema, updatePiketScheduleSchema, piketScheduleIdSchema, } from "./piketSchedule.schema.js";
import { createPiketScheduleController, deletePiketScheduleController, getAllPiketSchedulesController, getPiketScheduleByIdController, updatePiketScheduleController, } from "./piketSchedule.controller.js";
import { authMiddleware, roleCheckMiddleware, } from "../../middlewares/auth.middleware.js";
const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN"]));
router.post("/", validate(createPiketScheduleSchema), createPiketScheduleController);
router.get("/", validate(getPiketSchedulesSchema), getAllPiketSchedulesController);
router.get("/:id", validate(piketScheduleIdSchema), getPiketScheduleByIdController);
router.put("/:id", validate(updatePiketScheduleSchema), updatePiketScheduleController);
router.delete("/:id", validate(piketScheduleIdSchema), deletePiketScheduleController);
export default router;
//# sourceMappingURL=piketSchedule.routes.js.map