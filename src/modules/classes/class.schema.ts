import z from "zod";

const getAllSchema = z.object({
  query: z.object({
    page: z.coerce.number().int().min(1).optional().default(1),
    limit: z.coerce.number().int().min(1).optional().default(10),
    search: z.string().optional(),
  }),
});

export const classSchema = {
  getAllSchema,
};
