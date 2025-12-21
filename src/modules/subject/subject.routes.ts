import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createSubjectSchema,
  getSubjectsSchema,
  subjectIdSchema,
  updateSubjectSchema,
} from "./subject.schema.js";
import {
  createSubjectController,
  getAllSubjectsController,
  getSubjectByIdController,
  updateSubjectController,
  deleteSubjectController,
} from "./subject.controller.js";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware);

router.post(
  "/",
  roleCheckMiddleware(["ADMIN"]),
  validate(createSubjectSchema),
  createSubjectController
);
router.get(
  "/",
  roleCheckMiddleware(["ADMIN", "MAPEL"]),
  validate(getSubjectsSchema),
  getAllSubjectsController
);
router.get(
  "/:id",
  roleCheckMiddleware(["ADMIN", "MAPEL"]),
  validate(subjectIdSchema),
  getSubjectByIdController
);
router.put(
  "/:id",
  roleCheckMiddleware(["ADMIN"]),
  validate(updateSubjectSchema),
  updateSubjectController
);
router.delete(
  "/:id",
  roleCheckMiddleware(["ADMIN"]),
  validate(subjectIdSchema),
  deleteSubjectController
);

export default router;
