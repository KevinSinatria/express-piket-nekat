import { Router } from "express";
import AuthRoutes from "./modules/auth/auth.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);

export default router;
