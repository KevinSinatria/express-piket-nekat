import { getPaginationParams } from "../../utils/pagination.js";
const getAll = async (prisma, query) => {
    const { limit, skip } = getPaginationParams({
        page: Number(query.page || "1"),
        limit: Number(query.limit || "10"),
    });
    const search = query.search;
    const where = search
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
//# sourceMappingURL=student.service.js.map