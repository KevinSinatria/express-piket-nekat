import { Router } from "express";
import AuthRoutes from "./modules/auth/auth.routes.js";
import UsersRoutes from "./modules/users/user.routes.js";
import SubjectRoutes from "./modules/subject/subject.routes.js";
import UserRolesRoutes from "./modules/user-roles/user-role.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UsersRoutes);
router.use("/subjects", SubjectRoutes);
router.use("/user-roles", UserRolesRoutes);

export default router;
