import { Prisma } from "../../generated/prisma/client.js";
import { createPaginationMeta, getPaginationParams } from "../../utils/pagination.js";
export const createSubjectService = async (prisma, data) => {
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
export const getAllSubjectsService = async (prisma, query) => {
    const { page, limit = 10, skip, } = getPaginationParams({
        page: Number(query.page || "1"),
        limit: Number(query.limit || "10"),
    });
    const searchTerm = query.search?.trim();
    const where = searchTerm
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
export const getSubjectByIdService = async (prisma, id) => {
    return await prisma.subjects.findUniqueOrThrow({
        where: {
            id: parseInt(id),
        },
    });
};
export const updateSubjectService = async (prisma, id, data) => {
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
export const deleteSubjectService = async (prisma, id) => {
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
//# sourceMappingURL=subject.service.js.map