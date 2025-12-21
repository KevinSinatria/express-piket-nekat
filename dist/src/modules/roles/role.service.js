const getAll = async (prisma) => {
    const roles = await prisma.roles.findMany();
    return roles;
};
export const roleService = { getAll };
//# sourceMappingURL=role.service.js.map