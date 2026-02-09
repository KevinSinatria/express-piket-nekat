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
const adminAndPiketOnly = roleCheckMiddleware(["ADMIN", "PIKET"]);
const adminOnly = roleCheckMiddleware(["ADMIN"]);

router.get(
  "/student-permits",
  adminAndPiketOnly,
  validate(reportSchema.getStudentPermitReportSchema),
  reportController.getStudentPermits,
);

router.get(
  "/student-permits/export",
  adminAndPiketOnly,
  validate(reportSchema.getStudentPermitReportSchema),
  reportController.exportStudentPermits,
);

router.get("/teachers", adminOnly, reportController.getTeacherReportData);

router.get(
  "/teachers/export",
  adminOnly,
  reportController.exportTeacherReportData,
);

export default router;
