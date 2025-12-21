import type { Request, Response, NextFunction } from "express";
export declare const authController: {
    login: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    logout: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMe: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map