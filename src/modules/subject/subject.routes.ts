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
import { authMiddleware, roleCheckMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN"]));

router.post("/", validate(createSubjectSchema), createSubjectController);
router.get("/", validate(getSubjectsSchema), getAllSubjectsController);
router.get("/:id", validate(subjectIdSchema), getSubjectByIdController);
router.put("/:id", validate(updateSubjectSchema), updateSubjectController);
router.delete("/:id", validate(subjectIdSchema), deleteSubjectController);

export default router;