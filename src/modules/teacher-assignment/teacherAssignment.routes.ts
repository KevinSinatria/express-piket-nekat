// modules/teacher-assignment/teacherAssignment.routes.ts
import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createTeacherAssignmentSchema,
  getTeacherAssignmentsSchema,
  updateTeacherAssignmentSchema,
  teacherAssignmentIdSchema,
} from "./teacherAssignment.schema.js";
import {
  createTeacherAssignmentController,
  deleteTeacherAssignmentController,
  getAllTeacherAssignmentsController,
  getTeacherAssignmentByIdController,
  updateTeacherAssignmentController,
} from "./teacherAssignment.controller.js";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  roleCheckMiddleware(["piket", "mapel", "admin"]),
  validate(getTeacherAssignmentsSchema),
  getAllTeacherAssignmentsController,
);

router.get(
  "/:id",
  roleCheckMiddleware(["piket", "mapel", "admin"]),
  validate(teacherAssignmentIdSchema),
  getTeacherAssignmentByIdController,
);

const mapelAndAdminOnly = roleCheckMiddleware(["mapel", "admin"]);

router.post(
  "/",
  mapelAndAdminOnly,
  validate(createTeacherAssignmentSchema),
  createTeacherAssignmentController,
);
router.put(
  "/:id",
  mapelAndAdminOnly,
  validate(updateTeacherAssignmentSchema),
  updateTeacherAssignmentController,
);
router.delete(
  "/:id",
  roleCheckMiddleware(["mapel", "admin", "piket"]),
  validate(teacherAssignmentIdSchema),
  deleteTeacherAssignmentController,
);

export default router;
