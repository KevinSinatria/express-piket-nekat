import { Router } from "express";
import AuthRoutes from "./modules/auth/auth.routes.js";
import UsersRoutes from "./modules/users/user.routes.js";
import UserRolesRoutes from "./modules/user-roles/user-role.routes.js";
import StudentPermitsRoutes from "./modules/student-permits/student-permit.routes.js";
import RolesRoutes from "./modules/roles/role.routes.js";
import StudentsRoutes from "./modules/students/student.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UsersRoutes);
router.use("/user-roles", UserRolesRoutes);
router.use("/student-permits", StudentPermitsRoutes);
router.use("/roles", RolesRoutes);
router.use("/students", StudentsRoutes);

export default router;
