import { Router } from "express";
import AuthRoutes from "./modules/auth/auth.routes.js";
import UsersRoutes from "./modules/users/user.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UsersRoutes);

export default router;
