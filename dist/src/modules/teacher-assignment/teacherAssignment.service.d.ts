import { type PrismaClient } from "../../generated/prisma/client.js";
import type z from "zod";
import type { createTeacherAssignmentSchema, updateTeacherAssignmentSchema } from "./teacherAssignment.schema.js";
type createTeacherAssignmentInput = z.infer<typeof createTeacherAssignmentSchema>["body"];
type updateTeacherAssignmentInput = z.infer<typeof updateTeacherAssignmentSchema>["body"];
export declare const createTeacherAssignmentService: (prisma: PrismaClient, data: createTeacherAssignmentInput) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    class: {
        id: number;
        class: string;
    };
    subject: {
        id: number;
        name: string;
    };
    assignment_details: string;
    reason: string;
    due_date: Date | null;
    created_at: Date;
    updated_at: Date;
}>;
export declare const getAllTeacherAssignmentsService: (prisma: PrismaClient, query: {
    page?: string;
    limit?: string;
    search?: string;
    class_id?: string;
    subject_id?: string;
}) => Promise<{
    data: ({
        class: {
            id: number;
            class: string;
        };
        teacher: {
            username: string;
            id: number;
            fullname: string;
        };
        subject: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        created_at: Date;
        updated_at: Date;
        reason: string;
        teacher_user_id: number;
        class_id: number;
        subject_id: number;
        assignment_details: string;
        due_date: Date | null;
    })[];
    meta: {
        page: number;
        limit: number;
        totalItems: number;
        totalPages: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    };
}>;
export declare const getTeacherAssignmentByIdService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    class: {
        id: number;
        class: string;
    };
    subject: {
        id: number;
        name: string;
    };
    assignment_details: string;
    reason: string;
    due_date: Date | null;
    created_at: Date;
    updated_at: Date;
}>;
export declare const updateTeacherAssignmentService: (prisma: PrismaClient, id: string, data: updateTeacherAssignmentInput) => Promise<{
    id: number;
    teacher: {
        username: string;
        id: number;
        fullname: string;
    };
    class: {
        id: number;
        class: string;
    };
    subject: {
        id: number;
        name: string;
    };
    assignment_details: string;
    reason: string;
    due_date: Date | null;
    created_at: Date;
    updated_at: Date;
}>;
export declare const deleteTeacherAssignmentService: (prisma: PrismaClient, id: string) => Promise<{
    id: number;
    created_at: Date;
    updated_at: Date;
    reason: string;
    teacher_user_id: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    due_date: Date | null;
}>;
export {};
//# sourceMappingURL=teacherAssignment.service.d.ts.map