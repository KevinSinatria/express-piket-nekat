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

const create = async (prisma: PrismaClient, data: CreateUserData) => {
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

const getAll = async (
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
              mode: "insensitive",
            },
          },
          {
            fullname: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            nip: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
        ],
      }
    : {};

  const [totalItems, users] = await Promise.all([
    prisma.users.count({ where }),
    prisma.users.findMany({
      where,
      skip,
      take: limit || 10,
      orderBy: {
        username: "asc",
      },
      select: {
        id: true,
        username: true,
        fullname: true,
        nip: true,
        created_at: true,
        updated_at: true,
      },
    }),
  ]);

  const meta = createPaginationMeta(totalItems, page, limit);

  return {
    data: users,
    meta,
  };
};

const getById = async (prisma: PrismaClient, id: string) => {
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

const getMapelUsers = async (prisma: PrismaClient) => {
  const mapelUsers = await prisma.users.findMany({
    where: {
      user_roles: {
        some: {
          role: {
            name: {
              contains: "mapel",
              mode: "insensitive",
            },
          },
        },
      },
    },
    orderBy: {
      username: "asc",
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

  return mapelUsers;
};

const update = async (
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

const deleteById = async (prisma: PrismaClient, id: string) => {
  return await prisma.users.delete({
    where: {
      id: parseInt(id),
    },
  });
};

export const userService = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getMapelUsers,
};
