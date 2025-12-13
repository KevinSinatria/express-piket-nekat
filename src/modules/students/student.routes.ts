import { Router } from "express";
import { studentController } from "./student.controller.js";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN", "PIKET"]));

router.get("/", studentController.getAll);

export default router;
