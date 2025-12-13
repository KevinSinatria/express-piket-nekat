import { Router } from "express";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";
import { roleController } from "./role.controller.js";

const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN"]));

router.get("/", roleController.getAll);

export default router;
