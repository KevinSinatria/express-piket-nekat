import { Prisma } from "../../generated/prisma/client.js";
import { createPaginationMeta, getPaginationParams, } from "../../utils/pagination.js";
const validateRelations = async (prisma, data) => {
    const [teacher, kelas, subject] = await Promise.all([
        prisma.users.findUnique({ where: { id: data.teacher_user_id } }),
        prisma.classes.findUnique({ where: { id: data.class_id } }),
        prisma.subjects.findUnique({ where: { id: data.subject_id } }),
    ]);
    if (!teacher)
        throw new Error("Teacher was not found");
    if (!kelas)
        throw new Error("Class was not found");
    if (!subject)
        throw new Error("Subject was not found");
};
export const createTeacherAssignmentService = async (prisma, data) => {
    await validateRelations(prisma, data);
    const assignment = await prisma.teacher_assignments.create({
        data: {
            teacher_user_id: data.teacher_user_id,
            class_id: data.class_id,
            subject_id: data.subject_id,
            assignment_details: data.assignment_details,
            reason: data.reason,
            due_date: data.due_date ? new Date(data.due_date) : null,
        },
        include: {
            teacher: { select: { id: true, username: true, fullname: true } },
            class: { select: { id: true, class: true } },
            subject: { select: { id: true, name: true } },
        },
    });
    return {
        id: assignment.id,
        teacher: assignment.teacher,
        class: assignment.class,
        subject: assignment.subject,
        assignment_details: assignment.assignment_details,
        reason: assignment.reason,
        due_date: assignment.due_date,
        created_at: assignment.created_at,
        updated_at: assignment.updated_at,
    };
};
export const getAllTeacherAssignmentsService = async (prisma, query) => {
    const { page, limit = 10, skip, } = getPaginationParams({
        page: Number(query.page || "1"),
        limit: Number(query.limit || "10"),
    });
    const where = {};
    if (query.class_id)
        where.class_id = parseInt(query.class_id);
    if (query.subject_id)
        where.subject_id = parseInt(query.subject_id);
    const searchTerm = query.search?.trim();
    if (searchTerm) {
        where.OR = [
            {
                assignment_details: {
                    contains: searchTerm,
                    mode: Prisma.QueryMode.insensitive,
                },
            },
            { reason: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        ];
    }
    const [totalItems, assignments] = await prisma.$transaction([
        prisma.teacher_assignments.count({ where }),
        prisma.teacher_assignments.findMany({
            where,
            skip,
            take: limit,
            orderBy: { created_at: "desc" },
            include: {
                teacher: { select: { id: true, username: true, fullname: true } },
                class: { select: { id: true, class: true } },
                subject: { select: { id: true, name: true } },
            },
        }),
    ]);
    const meta = createPaginationMeta(totalItems, page, limit);
    return {
        data: assignments,
        meta,
    };
};
export const getTeacherAssignmentByIdService = async (prisma, id) => {
    const assignment = await prisma.teacher_assignments.findUniqueOrThrow({
        where: { id: parseInt(id) },
        include: {
            teacher: { select: { id: true, username: true, fullname: true } },
            class: { select: { id: true, class: true } },
            subject: { select: { id: true, name: true } },
        },
    });
    return {
        id: assignment.id,
        teacher: assignment.teacher,
        class: assignment.class,
        subject: assignment.subject,
        assignment_details: assignment.assignment_details,
        reason: assignment.reason,
        due_date: assignment.due_date,
        created_at: assignment.created_at,
        updated_at: assignment.updated_at,
    };
};
export const updateTeacherAssignmentService = async (prisma, id, data) => {
    await validateRelations(prisma, data);
    const assignment = await prisma.teacher_assignments.update({
        where: { id: parseInt(id) },
        data: {
            teacher_user_id: data.teacher_user_id,
            class_id: data.class_id,
            subject_id: data.subject_id,
            assignment_details: data.assignment_details,
            reason: data.reason,
            due_date: data.due_date ? new Date(data.due_date) : null,
        },
        include: {
            teacher: { select: { id: true, username: true, fullname: true } },
            class: { select: { id: true, class: true } },
            subject: { select: { id: true, name: true } },
        },
    });
    return {
        id: assignment.id,
        teacher: assignment.teacher,
        class: assignment.class,
        subject: assignment.subject,
        assignment_details: assignment.assignment_details,
        reason: assignment.reason,
        due_date: assignment.due_date,
        created_at: assignment.created_at,
        updated_at: assignment.updated_at,
    };
};
export const deleteTeacherAssignmentService = async (prisma, id) => {
    return await prisma.teacher_assignments.delete({
        where: { id: parseInt(id) },
    });
};
//# sourceMappingURL=teacherAssignment.service.js.map