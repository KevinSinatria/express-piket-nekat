import { Router } from "express";
import { authController } from "./auth.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { loginSchema } from "./auth.schema.js";
import { validate } from "../../middlewares/validate.middleware.js";
const router = Router();
router.post("/login", validate(loginSchema), authController.login);
router.get("/me", authMiddleware, authController.getMe);
router.post("/logout", authMiddleware, authController.logout);
export default router;
//# sourceMappingURL=auth.routes.js.map