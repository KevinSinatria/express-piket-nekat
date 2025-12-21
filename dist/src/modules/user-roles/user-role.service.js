const getAll = async (prisma, user_id) => {
    const userRoles = await prisma.user_role.findMany({
        where: {
            user_id: parseInt(user_id),
        },
        select: {
            role: true,
        },
    });
    const formattedUserRoles = userRoles.map((userRole) => userRole.role);
    return formattedUserRoles;
};
const create = async (prisma, data, user_id) => {
    return await prisma.user_role.create({
        data: {
            user_id: parseInt(user_id),
            role_id: parseInt(String(data.role_id)),
        },
    });
};
const deleteById = async (prisma, params) => {
    return await prisma.user_role.deleteMany({
        where: {
            user_id: parseInt(params.user_id),
            role_id: parseInt(params.role_id),
        },
    });
};
export const userRoleService = { getAll, create, deleteById };
//# sourceMappingURL=user-role.service.js.map