import { Router } from "express";
import AuthRoutes from "./modules/auth/auth.routes.js";
import UsersRoutes from "./modules/users/user.routes.js";
import SubjectRoutes from "./modules/subject/subject.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UsersRoutes);
router.use("/subjects", SubjectRoutes);

export default router;
