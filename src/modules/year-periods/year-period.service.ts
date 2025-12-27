import type { PrismaClient } from "../../generated/prisma/client.js";

const getCurrentYearPeriod = async (prisma: PrismaClient) => {
  const yearPeriod = await prisma.year_period.findMany({
    where: {
      AND: [
        {
          OR: [
            {
              start_year: {
                lt: new Date().getFullYear(),
              },
            },
            {
              start_year: {
                equals: new Date().getFullYear(),
              },
            },
            {
              start_year: {
                lt: new Date().getFullYear() + 4,
              },
            },
          ],
        },
        {
          start_year: {
            gte: new Date().getFullYear() - 4,
          },
        },
      ],
    },
    select: {
      id: true,
      start_year: true,
      end_year: true,
      display_name: true,
    },
  });

  return yearPeriod;
};

export const yearPeriodService = {
  getCurrentYearPeriod,
};
