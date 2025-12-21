import type { Request, Response, NextFunction } from "express";
import type { roles } from "../generated/prisma/client.js";
export declare const authMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const roleCheckMiddleware: (roles: roles["name"][]) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map