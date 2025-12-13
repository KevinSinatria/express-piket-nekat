import type z from "zod";
import type { PrismaClient } from "../../generated/prisma/client.js";
import type { studentSchema } from "./student.schema.js";
import { getPaginationParams } from "../../utils/pagination.js";
import type { studentsWhereInput } from "../../generated/prisma/models.js";

type GetAllQuery = z.infer<typeof studentSchema.getAllSchema>["query"];

const getAll = async (prisma: PrismaClient, query: GetAllQuery) => {
  const { limit, skip } = getPaginationParams({
    page: Number(query.page || "1"),
    limit: Number(query.limit || "10"),
  });

  const search = query.search;

  const where: studentsWhereInput = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { nis: { contains: search, mode: "insensitive" } },
        ],
      }
    : {};

  const students = await prisma.students.findMany({
    take: limit || 10,
    skip: skip || 0,
    where,
    orderBy: {
      name: "asc",
    },
    select: {
      nis: true,
      name: true,
      detail_students: {
        where: {
          ...(query.year_period_id && {
            id_year_period: Number(query.year_period_id),
          }),
        },
        select: {
          classes: {
            select: {
              class: true,
            },
          },
        },
      },
    },
  });

  const formattedData = students.map((student) => ({
    nis: student.nis,
    name: student.name,
    class: student.detail_students[0]?.classes.class ?? null,
  }));

  return formattedData;
};

export const studentService = {
  getAll,
};
