import type { PrismaClient } from "../../generated/prisma/client.js";
export declare const yearPeriodService: {
    getCurrentYearPeriod: (prisma: PrismaClient) => Promise<{
        id: number;
        start_year: number;
        end_year: number;
        display_name: string;
    }[]>;
};
//# sourceMappingURL=year-period.service.d.ts.map