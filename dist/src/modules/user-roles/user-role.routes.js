import { Router } from "express";
import { userRoleController } from "./user-role.controller.js";
import { authMiddleware, roleCheckMiddleware, } from "../../middlewares/auth.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { userRolesSchema } from "./user-role.schema.js";
const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN"]));
router.get("/:user_id", validate(userRolesSchema.getAllSchema), userRoleController.getAll);
router.post("/:user_id", validate(userRolesSchema.createSchema), userRoleController.create);
router.delete("/:user_id/:role_id", validate(userRolesSchema.idSchema), userRoleController.deleteById);
export default router;
//# sourceMappingURL=user-role.routes.js.map