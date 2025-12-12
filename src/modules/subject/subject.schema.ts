import z from "zod";

export const getSubjectsSchema = z.object({
    query: z.object({
        page: z.coerce.number().int().min(1).optional().default(1),
        limit: z.coerce.number().int().min(1).optional().default(10),
        search: z.string().optional(),
    }),
});

export const createSubjectSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Subject is required"),
    }),
});

export const updateSubjectSchema = z.object({
    params: z.object({
        id: z.string({ message: "User ID is required" })
    }),
    body: z.object({
        name: z.string().min(1, "Subject is required"),
    }),
});

export const subjectIdSchema = z.object({
    params: z.object({
        id: z.string({ message: "User ID is required" })
    }),
});