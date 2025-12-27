import { Router } from "express";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";
import { classController } from "./class.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { classSchema } from "./class.schema.js";

const router = Router();
router.use(authMiddleware);

router.get(
  "/",
  roleCheckMiddleware(["ADMIN", "PIKET", "MAPEL"]),
  validate(classSchema.getAllSchema),
  classController.getAll
);

export default router;
