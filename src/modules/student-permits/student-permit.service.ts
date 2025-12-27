import type z from "zod";
import type { studentPermitSchema } from "./student-permit.schema.js";
import type { PrismaClient } from "../../generated/prisma/client.js";
import {
  createPaginationMeta,
  getPaginationParams,
} from "../../utils/pagination.js";
import type { student_permitsWhereInput } from "../../generated/prisma/models.js";

type GetAllQuery = z.infer<typeof studentPermitSchema.getAllSchema>["query"];
type CreateData = z.infer<typeof studentPermitSchema.createSchema>["body"];
type UpdateData = z.infer<typeof studentPermitSchema.updateSchema>["body"];
type IdParams = z.infer<typeof studentPermitSchema.idSchema>["params"]["id"];
type YearPeriodIdQuery = z.infer<
  typeof studentPermitSchema.idSchema
>["query"]["year_period_id"];
type ProcessData = z.infer<
  typeof studentPermitSchema.processPermitSchema
>["body"];

const getAll = async (prisma: PrismaClient, query: GetAllQuery) => {
  const { page, limit, skip } = getPaginationParams({
    page: Number(query.page || "1"),
    limit: Number(query.limit || "10"),
  });

  const search = query.search;
  const status = query.status;
  const piket_user_id = query.piket_user_id;
  const mapel_user_id = query.mapel_user_id;
  const date_start = query.date_start;
  const date_end = query.date_end;

  const filters: student_permitsWhereInput[] = [
    {
      student_permit_details: {
        some: {
          student: {
            detail_students: {
              some: {
                ...(query.year_period_id && {
                  id_year_period: Number(query.year_period_id),
                }),
              },
            },
          },
        },
      },
    },
  ];
  if (search) {
    filters.push({
      OR: [
        {
          student_permit_details: {
            some: {
              student_nis: {
                contains: search,
              },
            },
          },
        },
        {
          student_permit_details: {
            some: {
              student: {
                name: {
                  contains: search,
                },
              },
            },
          },
        },
        { mapel_user: { fullname: { contains: search, mode: "insensitive" } } },
        { mapel_user: { username: { contains: search, mode: "insensitive" } } },
        { piket_user: { fullname: { contains: search, mode: "insensitive" } } },
        { piket_user: { username: { contains: search, mode: "insensitive" } } },
      ],
    });
  }

  if (status && status.length > 0) {
    filters.push({ status: { in: status.map((s) => s!) } });
  }

  if (piket_user_id) {
    filters.push({ piket_user_id: piket_user_id });
  }
  if (mapel_user_id) {
    filters.push({ mapel_user_id: mapel_user_id });
  }

  if (date_start) {
    const startDate = new Date(new Date(date_start).getTime());
    filters.push({ created_at: { gte: startDate } });
  }
  if (date_end) {
    const nextDate = new Date(new Date(date_end).getTime());
    nextDate.setDate(new Date(nextDate).getDate() + 1);

    filters.push({ created_at: { lte: nextDate } });
  }

  const where: student_permitsWhereInput = {
    AND: filters,
  };

  const [totalItems, studentPermits] = await Promise.all([
    prisma.student_permits.count({ where }),
    prisma.student_permits.findMany({
      where,
      skip,
      take: limit || 10,
      orderBy: { created_at: "desc" },
      include: {
        student_permit_details: {
          include: {
            student: {
              select: {
                name: true,
                nis: true,
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
            },
          },
        },
        piket_user: { select: { username: true, fullname: true } },
        mapel_user: { select: { username: true, fullname: true } },
      },
    }),
  ]);

  const formattedData = studentPermits.map((studentPermit) => {
    return {
      id: studentPermit.id,
      students: studentPermit.student_permit_details.map((detail) => ({
        name: detail.student.name,
        nis: detail.student.nis,
        class: detail.student.detail_students[0]?.classes.class ?? null,
      })),
      mapel: {
        id: studentPermit.mapel_user_id,
        username: studentPermit.mapel_user.username,
        fullname: studentPermit.mapel_user.fullname,
      },
      piket: {
        id: studentPermit.piket_user_id,
        username: studentPermit.piket_user.username,
        fullname: studentPermit.piket_user.fullname,
      },
      status: studentPermit.status,
      reason: studentPermit.reason,
      hours_start: studentPermit.hours_start,
      hours_end: studentPermit.hours_end,
      created_at: studentPermit.created_at,
      updated_at: studentPermit.updated_at,
    };
  });

  const meta = createPaginationMeta(totalItems, page, limit);

  return {
    data: formattedData,
    meta,
  };
};

const create = async (
  prisma: PrismaClient,
  data: CreateData,
  user_id: number,
  year_period_id: YearPeriodIdQuery
) => {
  const studentPermit = await prisma.student_permits.create({
    data: {
      mapel_user_id: data.mapel_user_id,
      piket_user_id: user_id,
      status: "PENDING_MAPEL",
      reason: data.reason,
      hours_start: data.hours_start,
      hours_end: data.hours_end ?? null,
      student_permit_details: {
        createMany: {
          data: data.student_nis.map((nis) => ({
            student_nis: nis,
          })),
        },
      },
    },
    include: {
      student_permit_details: {
        include: {
          student: {
            select: {
              name: true,
              nis: true,
              detail_students: {
                where: {
                  ...(year_period_id && { id_year_period: year_period_id }),
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
          },
        },
      },
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
  });

  const formattedStudentPermit = {
    id: studentPermit.id,
    students: studentPermit.student_permit_details.map((detail) => ({
      name: detail.student.name,
      nis: detail.student.nis,
      class: detail.student.detail_students[0]?.classes.class ?? null,
    })),
    mapel: {
      id: studentPermit.mapel_user_id,
      fullname: studentPermit.mapel_user.fullname,
      username: studentPermit.mapel_user.username,
    },
    piket: {
      id: studentPermit.piket_user_id,
      fullname: studentPermit.piket_user.fullname,
      username: studentPermit.piket_user.username,
    },
    status: studentPermit.status,
    reason: studentPermit.reason,
    hours_start: studentPermit.hours_start,
    hours_end: studentPermit.hours_end,
    created_at: studentPermit.created_at,
    updated_at: studentPermit.updated_at,
  };

  return formattedStudentPermit;
};

const getById = async (
  prisma: PrismaClient,
  id: IdParams,
  year_period_id: YearPeriodIdQuery
) => {
  const studentPermit = await prisma.student_permits.findUniqueOrThrow({
    where: {
      id: parseInt(String(id)),
    },
    include: {
      student_permit_details: {
        include: {
          student: {
            select: {
              name: true,
              nis: true,
              detail_students: {
                where: {
                  ...(year_period_id && { id_year_period: year_period_id }),
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
          },
        },
      },
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
  });

  const formattedStudentPermit = {
    id: studentPermit.id,
    students: studentPermit.student_permit_details.map((detail) => ({
      name: detail.student.name,
      nis: detail.student.nis,
      class: detail.student.detail_students[0]?.classes.class ?? null,
    })),
    mapel: {
      id: studentPermit.mapel_user_id,
      fullname: studentPermit.mapel_user.fullname,
      username: studentPermit.mapel_user.username,
    },
    piket: {
      id: studentPermit.piket_user_id,
      fullname: studentPermit.piket_user.fullname,
      username: studentPermit.piket_user.username,
    },
    status: studentPermit.status,
    reason: studentPermit.reason,
    hours_start: studentPermit.hours_start,
    hours_end: studentPermit.hours_end,
    created_at: studentPermit.created_at,
    updated_at: studentPermit.updated_at,
  };

  return formattedStudentPermit;
};

const update = async (prisma: PrismaClient, id: IdParams, data: UpdateData) => {
  const studentPermit = await prisma.student_permits.update({
    where: {
      id: parseInt(String(id)),
    },
    data: {
      ...(data.mapel_user_id && { mapel_user_id: data.mapel_user_id }),
      ...(data.reason && { reason: data.reason }),
      ...(data.hours_start && { hours_start: data.hours_start }),
      ...(data.hours_end && { hours_end: data.hours_end }),
    },
  });

  await prisma.student_permit_details.deleteMany({
    where: {
      student_permit_id: Number(id),
    },
  });

  await prisma.student_permit_details.createMany({
    data: data.student_nis.map((nis) => ({
      student_permit_id: Number(id),
      student_nis: nis,
    })),
  });

  return studentPermit;
};

const deleteById = async (prisma: PrismaClient, id: IdParams) => {
  return await prisma.student_permits.update({
    where: {
      id: parseInt(String(id)),
    },
    data: {
      status: "CANCELED",
    },
  });
};

const getMapelPending = async (
  prisma: PrismaClient,
  user_id: number,
  year_period_id: YearPeriodIdQuery
) => {
  const mapelPendingStudentPermits = await prisma.student_permits.findMany({
    where: {
      AND: [
        {
          status: "PENDING_MAPEL",
        },
        {
          mapel_user_id: user_id,
        },
      ],
    },
    take: 10,
    orderBy: {
      created_at: "desc",
    },
    include: {
      student_permit_details: {
        include: {
          student: {
            select: {
              name: true,
              nis: true,
              detail_students: {
                where: {
                  ...(year_period_id && { id_year_period: year_period_id }),
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
          },
        },
      },
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
  });

  const formattedData = mapelPendingStudentPermits.map((studentPermit) => ({
    id: studentPermit.id,
    students: studentPermit.student_permit_details.map((detail) => ({
      name: detail.student.name,
      nis: detail.student.nis,
      class: detail.student.detail_students[0]?.classes.class ?? null,
    })),
    mapel: {
      id: studentPermit.mapel_user_id,
      fullname: studentPermit.mapel_user.fullname,
      username: studentPermit.mapel_user.username,
    },
    piket: {
      id: studentPermit.piket_user_id,
      fullname: studentPermit.piket_user.fullname,
      username: studentPermit.piket_user.username,
    },
    status: studentPermit.status,
    reason: studentPermit.reason,
    hours_start: studentPermit.hours_start,
    hours_end: studentPermit.hours_end,
    created_at: studentPermit.created_at,
    updated_at: studentPermit.updated_at,
  }));

  return formattedData;
};

const getPiketPending = async (
  prisma: PrismaClient,
  user_id: number,
  year_period_id: YearPeriodIdQuery
) => {
  const piketPendingStudentPermits = await prisma.student_permits.findMany({
    where: {
      status: "PENDING_PIKET",
      piket_user_id: user_id,
    },
    take: 10,
    orderBy: {
      created_at: "desc",
    },
    include: {
      student_permit_details: {
        include: {
          student: {
            select: {
              name: true,
              nis: true,
              detail_students: {
                where: {
                  ...(year_period_id && { id_year_period: year_period_id }),
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
          },
        },
      },
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
  });

  const formattedData = piketPendingStudentPermits.map((studentPermit) => ({
    id: studentPermit.id,
    students: studentPermit.student_permit_details.map((detail) => ({
      name: detail.student.name,
      nis: detail.student.nis,
      class: detail.student.detail_students[0]?.classes.class ?? null,
    })),
    mapel: {
      id: studentPermit.mapel_user_id,
      fullname: studentPermit.mapel_user.fullname,
      username: studentPermit.mapel_user.username,
    },
    piket: {
      id: studentPermit.piket_user_id,
      fullname: studentPermit.piket_user.fullname,
      username: studentPermit.piket_user.username,
    },
    status: studentPermit.status,
    reason: studentPermit.reason,
    hours_start: studentPermit.hours_start,
    hours_end: studentPermit.hours_end,
    created_at: studentPermit.created_at,
    updated_at: studentPermit.updated_at,
  }));

  return formattedData;
};

const process = async (
  prisma: PrismaClient,
  id: IdParams,
  data: ProcessData
) => {
  return await prisma.student_permits.update({
    where: {
      id: parseInt(String(id)),
    },
    data: {
      status: data.status,
    },
  });
};

const getAllNewApproved = async (
  prisma: PrismaClient,
  year_period_id: number
) => {
  const studentPermits = await prisma.student_permits.findMany({
    where: {
      status: "APPROVED",
      created_at: {
        gte: new Date(new Date().setDate(new Date().getDate() - 1)),
        lte: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      student_permit_details: {
        include: {
          student: {
            select: {
              name: true,
              nis: true,
              detail_students: {
                where: {
                  ...(year_period_id && { id_year_period: year_period_id }),
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
          },
        },
      },
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
  });

  const formattedData = studentPermits.map((studentPermit) => ({
    id: studentPermit.id,
    students: studentPermit.student_permit_details.map((detail) => ({
      name: detail.student.name,
      nis: detail.student.nis,
      class: detail.student.detail_students[0]?.classes.class ?? null,
    })),
    mapel: {
      id: studentPermit.mapel_user_id,
      fullname: studentPermit.mapel_user.fullname,
      username: studentPermit.mapel_user.username,
    },
    piket: {
      id: studentPermit.piket_user_id,
      fullname: studentPermit.piket_user.fullname,
      username: studentPermit.piket_user.username,
    },
    status: studentPermit.status,
    reason: studentPermit.reason,
    hours_start: studentPermit.hours_start,
    hours_end: studentPermit.hours_end,
    created_at: studentPermit.created_at,
    updated_at: studentPermit.updated_at,
  }));

  return formattedData;
};

export const studentPermitService = {
  getAll,
  create,
  getById,
  update,
  deleteById,
  getMapelPending,
  getPiketPending,
  process,
  getAllNewApproved,
};
