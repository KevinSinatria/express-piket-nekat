import { Router } from "express";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { reportController } from "./report.controller.js";
import { reportSchema } from "./report.schema.js";

const router = Router();

router.use(authMiddleware);
router.use(roleCheckMiddleware(["ADMIN", "PIKET"]));

router.get(
  "/student-permits",
  validate(reportSchema.getReportSchema),
  reportController.getStudentPermits
);

router.get(
  "/student-permits/export",
  validate(reportSchema.getReportSchema),
  reportController.exportStudentPermits
);

export default router;
