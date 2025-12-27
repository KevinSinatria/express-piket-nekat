import type z from "zod";
import type { classSchema } from "./class.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
import {
  createPaginationMeta,
  getPaginationParams,
} from "../../utils/pagination.js";
import type { classesWhereInput } from "../../generated/prisma/models.js";

type GetAllQuery = z.infer<typeof classSchema.getAllSchema>["query"];

const getAll = async (prisma: PrismaClient, query: GetAllQuery) => {
  const { page, limit, skip } = getPaginationParams({
    page: Number(query.page || "1"),
    limit: Number(query.limit || "10"),
  });

  const search = query.search;

  const where: classesWhereInput = search
    ? {
        OR: [
          {
            class: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  const [classes, totalItems] = await prisma.$transaction([
    prisma.classes.findMany({
      where,
      skip,
      take: limit || 10,
      orderBy: {
        class: "asc",
      },
    }),
    prisma.classes.count({
      where,
    }),
  ]);

  const meta = createPaginationMeta(totalItems, page, limit);

  return {
    data: classes,
    meta,
  };
};

export const classService = {
  getAll,
};
