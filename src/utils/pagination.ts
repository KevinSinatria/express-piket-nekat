import z from "zod";

export const paginationQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1).optional(),
  limit: z.coerce.number().min(1).default(10).optional(),
});

type PaginationParams = z.infer<typeof paginationQuerySchema>;

export const getPaginationParams = (query: PaginationParams) => {
  const { page, limit } = query;
  const skip = (page! - 1) * limit!;

  return { page, limit, skip };
};

export const createPaginationMeta = (
  totalItems: number,
  page: number = 0,
  limit: number = 10
) => {
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
