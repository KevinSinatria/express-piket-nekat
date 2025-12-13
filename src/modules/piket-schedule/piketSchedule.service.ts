import type { PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type {
  createPiketScheduleSchema,
  getPiketSchedulesSchema,
  updatePiketScheduleSchema,
} from "./piketSchedule.schema.js";

const DAY_NAMES = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
type createPiketScheduleInput = z.infer<typeof createPiketScheduleSchema>["body"];
type updatePiketScheduleInput = z.infer<typeof updatePiketScheduleSchema>["body"];

export const createPiketScheduleService = async (
  prisma: PrismaClient,
  data: createPiketScheduleInput
) => {
  const teacher = await prisma.users.findUnique({
    where: { id: data.teacher_user_id },
    select: { id: true, username: true, fullname: true },
  });

  if (!teacher) {
    throw new Error("Teacher with that ID was not found");
  }

  const schedule = await prisma.piketSchedule.create({
    data: {
      teacher_user_id: data.teacher_user_id,
      day_of_week: data.day_of_week,
    },
    include: {
      teacher: {
        select: { id: true, username: true, fullname: true },
      },
    },
  });

  return {
    id: schedule.id,
    teacher: schedule.teacher,
    day_of_week: schedule.day_of_week,
    day_name: DAY_NAMES[schedule.day_of_week],
  };
};

export const getAllPiketSchedulesService = async (
  prisma: PrismaClient,
  query: { day?: string }
) => {
  const day = query.day ? parseInt(query.day) : undefined;

  const where = day !== undefined ? { day_of_week: day } : {};

  const schedules = await prisma.piketSchedule.findMany({
    where,
    include: {
      teacher: {
        select: { id: true, username: true, fullname: true },
      },
    },
    orderBy: { day_of_week: "asc" },
  });

  return schedules.map((s) => ({
    id: s.id,
    teacher: s.teacher,
    day_of_week: s.day_of_week,
    day_name: DAY_NAMES[s.day_of_week],
  }));
};

export const getPiketScheduleByIdService = async (
  prisma: PrismaClient,
  id: string
) => {
  const schedule = await prisma.piketSchedule.findUniqueOrThrow({
    where: { id: parseInt(id) },
    include: {
      teacher: {
        select: { id: true, username: true, fullname: true },
      },
    },
  });

  return {
    id: schedule.id,
    teacher: schedule.teacher,
    day_of_week: schedule.day_of_week,
    day_name: DAY_NAMES[schedule.day_of_week],
  };
};

export const updatePiketScheduleService = async (
  prisma: PrismaClient,
  id: string,
  data: updatePiketScheduleInput
) => {
  const teacher = await prisma.users.findUnique({
    where: { id: data.teacher_user_id },
    select: { id: true, username: true, fullname: true },
  });

  if (!teacher) {
    throw new Error("Teacher with that ID was not found");
  }

  const schedule = await prisma.piketSchedule.update({
    where: { id: parseInt(id) },
    data: {
      teacher_user_id: data.teacher_user_id,
      day_of_week: data.day_of_week,
    },
    include: {
      teacher: {
        select: { id: true, username: true, fullname: true },
      },
    },
  });

  return {
    id: schedule.id,
    teacher: schedule.teacher,
    day_of_week: schedule.day_of_week,
    day_name: DAY_NAMES[schedule.day_of_week],
  };
};

export const deletePiketScheduleService = async (
  prisma: PrismaClient,
  id: string
) => {
  return await prisma.piketSchedule.delete({
    where: { id: parseInt(id) },
  });
};