import { Router } from "express";
import { authMiddleware, roleCheckMiddleware, } from "../../middlewares/auth.middleware.js";
import { studentPermitController } from "./student-permit.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { studentPermitSchema } from "./student-permit.schema.js";
const router = Router();
router.use(authMiddleware);
router.post("/", roleCheckMiddleware(["ADMIN", "PIKET"]), validate(studentPermitSchema.createSchema), studentPermitController.create);
router.get("/", roleCheckMiddleware(["ADMIN", "PIKET"]), studentPermitController.getAll);
router.get("/mapel/pending", roleCheckMiddleware(["ADMIN", "MAPEL"]), studentPermitController.getMapelPending);
router.get("/piket/ready-to-approve", roleCheckMiddleware(["ADMIN", "PIKET"]), studentPermitController.getPiketPending);
router.get("/:id", studentPermitController.getById);
router.put("/:id", roleCheckMiddleware(["ADMIN", "PIKET"]), studentPermitController.update);
router.delete("/:id", roleCheckMiddleware(["ADMIN", "PIKET"]), studentPermitController.deleteById);
router.patch("/:id/process/mapel", roleCheckMiddleware(["ADMIN", "MAPEL"]), validate(studentPermitSchema.processPermitSchema), studentPermitController.process);
router.patch("/:id/process/piket", roleCheckMiddleware(["ADMIN", "PIKET"]), validate(studentPermitSchema.processPermitSchema), studentPermitController.process);
router.get("/new-approved", roleCheckMiddleware(["SATPAM"]), studentPermitController.getAllNewApproved);
export default router;
//# sourceMappingURL=student-permit.routes.js.map