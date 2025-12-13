import { Prisma, type PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type {
    createSubjectSchema,
    getSubjectsSchema,
    updateSubjectSchema,
} from "./subject.schema.js";
import {
    createPaginationMeta,
    getPaginationParams
} from "../../utils/pagination.js";

type CreateSubjectInput = z.infer<typeof createSubjectSchema>["body"];
type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>["body"];

export const createSubjectService = async (
    prisma: PrismaClient,
    data: CreateSubjectInput,
) => {
    return await prisma.subjects.create({
        data: {
            name: data.name.trim(),
        },
        select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
        }
    });
};

export const getAllSubjectsService = async (
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
    } = getPaginationParams ({
        page: Number(query.page || "1"),
        limit: Number(query.limit || "10"),
    });

    const searchTerm = query.search?.trim();

    const where: Prisma.subjectsWhereInput = searchTerm 
    ? {
        name: {
            contains: searchTerm,
            mode: Prisma.QueryMode.insensitive,
        },
    } : {};

    const [totalItems, subjects] = await prisma.$transaction([
        prisma.subjects.count({ where }),
        prisma.subjects.findMany({
            where,
            skip,
            take: limit,
            orderBy: { name: "asc" },
        }),
    ]);

    const meta = createPaginationMeta(totalItems, page, limit);

    return {
        data: subjects,
        meta,
    };
};

export const getSubjectByIdService = async (
    prisma: PrismaClient,
    id: string,
) => {
    return await prisma.subjects.findUniqueOrThrow({
        where: {
            id: parseInt(id),
        },
    });
};

export const updateSubjectService = async (
    prisma: PrismaClient,
    id: string,
    data: UpdateSubjectInput,
) => {
    return await prisma.subjects.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: data.name.trim(),
        },
        select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
        },
    });
};

export const deleteSubjectService = async (
    prisma: PrismaClient,
    id: string,
) => {
    return await prisma.subjects.delete({
        where: {
            id: parseInt(id),
        },
        select: {
            id: true,
            name: true,
            created_at: true,
            updated_at: true,
        },
    });
};