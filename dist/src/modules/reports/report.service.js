const getStudentPermitReportData = async (prisma, query) => {
    const { start_date, end_date, status } = query;
    const startDate = new Date(start_date);
    const endDate = new Date(end_date);
    endDate.setDate(endDate.getDate() + 1); // Set to end of day
    const where = {
        created_at: {
            gte: startDate,
            lte: endDate,
        },
    };
    if (status) {
        where.status = status;
    }
    const studentPermits = await prisma.student_permits.findMany({
        where,
        include: {
            student_permit_details: {
                include: {
                    student: true,
                },
            },
            mapel_user: {
                select: {
                    fullname: true,
                    username: true,
                },
            },
            piket_user: {
                select: {
                    fullname: true,
                    username: true,
                },
            },
        },
        orderBy: {
            created_at: "desc",
        },
    });
    return studentPermits;
};
export const reportService = {
    getStudentPermitReportData,
};
//# sourceMappingURL=report.service.js.map