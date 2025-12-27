import { createPaginationMeta, getPaginationParams, } from "../../utils/pagination.js";
const getAll = async (prisma, query) => {
    const { page, limit, skip } = getPaginationParams({
        page: Number(query.page || "1"),
        limit: Number(query.limit || "10"),
    });
    const search = query.search;
    const where = search
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
//# sourceMappingURL=class.service.js.map