import type { PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { reportSchema } from "./report.schema.js";

type GetReportQuery = z.infer<typeof reportSchema.getReportSchema>["query"];

const getStudentPermitReportData = async (
  prisma: PrismaClient,
  query: GetReportQuery
) => {
  const { start_date, end_date, status } = query;

  const startDate = new Date(start_date);
  const endDate = new Date(end_date);
  endDate.setDate(endDate.getDate() + 1); // Set to end of day

  const where: any = {
    created_at: {
      gte: startDate,
      lte: endDate,
    },
  };

  if (status) {
    where.status = status;
  }

  const studentPermits = await prisma.student_permits.findMany({
    where,
    include: {
      student: true,
      mapel_user: {
        select: {
          fullname: true,
          username: true,
        },
      },
      piket_user: {
        select: {
          fullname: true,
          username: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });

  return studentPermits;
};

export const reportService = {
  getStudentPermitReportData,
};
