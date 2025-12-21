import { type ZodObject } from "zod";
import type { Request, Response, NextFunction } from "express";
export declare const validate: (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validate.middleware.d.ts.map