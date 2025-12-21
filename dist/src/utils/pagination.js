import z from "zod";
export const paginationQuerySchema = z.object({
    page: z.coerce.number().min(1).default(1).optional(),
    limit: z.coerce.number().min(1).default(10).optional(),
});
export const getPaginationParams = (query) => {
    const { page, limit } = query;
    const skip = (page - 1) * limit;
    return { page, limit, skip };
};
export const createPaginationMeta = (totalItems, page = 0, limit = 10) => {
    const totalPages = Math.ceil(totalItems / limit);
    return {
        page,
        limit,
        totalItems,
        totalPages,
        hasPrevPage: page > 1,
        hasNextPage: page < totalPages,
    };
};
//# sourceMappingURL=pagination.js.map