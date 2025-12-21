import z from "zod";
export declare const paginationQuerySchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodDefault<z.z.ZodCoercedNumber<unknown>>>;
    limit: z.ZodOptional<z.ZodDefault<z.z.ZodCoercedNumber<unknown>>>;
}, z.z.core.$strip>;
type PaginationParams = z.infer<typeof paginationQuerySchema>;
export declare const getPaginationParams: (query: PaginationParams) => {
    page: number | undefined;
    limit: number | undefined;
    skip: number;
};
export declare const createPaginationMeta: (totalItems: number, page?: number, limit?: number) => {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
};
export {};
//# sourceMappingURL=pagination.d.ts.map