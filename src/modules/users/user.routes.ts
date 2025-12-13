import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import {
  createUserSchema,
  getUsersSchema,
  updateUserSchema,
  userIdSchema,
} from "./user.schema.js";
import {
  createUserController,
  deleteUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
} from "./user.controller.js";
import {
  authMiddleware,
  roleCheckMiddleware,
} from "../../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware, roleCheckMiddleware(["ADMIN"]));

router.post("/", validate(createUserSchema), createUserController);
router.get("/", validate(getUsersSchema), getAllUsersController);
router.get("/:id", validate(userIdSchema), getUserByIdController);
router.put("/:id", validate(updateUserSchema), updateUserController);
router.delete("/:id", validate(userIdSchema), deleteUserController);

export default router;
