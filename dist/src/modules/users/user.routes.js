import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { createUserSchema, getUsersSchema, updateUserSchema, userIdSchema, } from "./user.schema.js";
import { authMiddleware, roleCheckMiddleware, } from "../../middlewares/auth.middleware.js";
import { userController } from "./user.controller.js";
const router = Router();
router.use(authMiddleware);
router.post("/", roleCheckMiddleware(["ADMIN"]), validate(createUserSchema), userController.create);
router.get("/", roleCheckMiddleware(["ADMIN"]), validate(getUsersSchema), userController.getAll);
router.get("/mapel", userController.getMapelUsers);
router.get("/:id", roleCheckMiddleware(["ADMIN"]), validate(userIdSchema), userController.getById);
router.put("/:id", roleCheckMiddleware(["ADMIN"]), validate(updateUserSchema), userController.update);
router.delete("/:id", roleCheckMiddleware(["ADMIN"]), validate(userIdSchema), userController.deleteById);
export default router;
//# sourceMappingURL=user.routes.js.map