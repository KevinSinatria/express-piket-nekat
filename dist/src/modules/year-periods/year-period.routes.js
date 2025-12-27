import { Router } from "express";
import { yearPeriodController } from "./year-period.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
const router = Router();
router.use(authMiddleware);
router.get("/", yearPeriodController.getCurrentYearPeriod);
export default router;
//# sourceMappingURL=year-period.routes.js.map