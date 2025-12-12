import type { Prisma, PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type {
  createUserSchema,
  getUsersSchema,
  updateUserSchema,
} from "./user.schema.js";
import bcrypt from "bcrypt";
import {
  createPaginationMeta,
  getPaginationParams,
} from "../../utils/pagination.js";

type CreateUserData = z.infer<typeof createUserSchema>["body"];

export const createUserService = async (
  prisma: PrismaClient,
  data: CreateUserData
) => {
  const hashedPassword = await bcrypt.hash(data.password, 12);

  const newUser = await prisma.users.create({
    data: {
      username: data.username.toLowerCase(),
      fullname: data.fullname,
      password: hashedPassword,
      ...(data.nip && { nip: data.nip }),
    },
    select: {
      id: true,
      username: true,
      fullname: true,
      nip: true,
      created_at: true,
      updated_at: true,
    },
  });

  return newUser;
};

export const getAllUsersService = async (
  prisma: PrismaClient,
  query: {
    search?: string;
    page?: string;
    limit?: string;
  }
) => {
  const {
    page,
    limit = 10,
    skip,
  } = getPaginationParams({
    page: Number(query.page || "1"),
    limit: Number(query.limit || "10"),
  });

  const searchTerm = query.search;

  const where: Prisma.usersWhereInput = searchTerm
    ? {
        OR: [
          {
            username: {
              contains: searchTerm,
            },
          },
          {
            fullname: {
              contains: searchTerm,
            },
          },
          {
            nip: {
              contains: searchTerm,
            },
          },
        ],
      }
    : {};

  const [totalItems, users] = await prisma.$transaction([
    prisma.users.count({ where }),
    prisma.users.findMany({
      where,
      skip,
      take: limit || 10,
      orderBy: {
        username: "asc",
      },
    }),
  ]);

  const meta = createPaginationMeta(totalItems, page, limit);

  return {
    data: users,
    meta,
  };
};

export const getUserByIdService = async (prisma: PrismaClient, id: string) => {
  const userData = await prisma.users.findUniqueOrThrow({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      username: true,
      fullname: true,
      nip: true,
      created_at: true,
      updated_at: true,
      user_roles: {
        select: {
          role: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  const formattedUser = {
    id: userData.id,
    username: userData.username,
    fullname: userData.fullname,
    nip: userData.nip,
    created_at: userData.created_at,
    updated_at: userData.updated_at,
    roles: userData.user_roles.map((role) => role.role.name),
  };

  return formattedUser;
};

export const updateUserService = async (
  prisma: PrismaClient,
  id: string,
  data: z.infer<typeof updateUserSchema>["body"]
) => {
  const hashedPassword = await bcrypt.hash(data.password, 12);

  return await prisma.users.update({
    where: {
      id: parseInt(id),
    },
    data: {
      username: data.username.toLowerCase(),
      fullname: data.fullname,
      password: hashedPassword,
      ...(data.nip && { nip: data.nip }),
    },
  });
};

export const deleteUserService = async (prisma: PrismaClient, id: string) => {
  return await prisma.users.delete({
    where: {
      id: parseInt(id),
    },
  });
};
