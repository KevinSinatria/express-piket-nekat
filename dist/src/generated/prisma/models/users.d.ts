import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model users
 *
 */
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersAvgAggregateOutputType = {
    id: number | null;
};
export type UsersSumAggregateOutputType = {
    id: number | null;
};
export type UsersMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    api_token: string | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    fullname: string | null;
    nip: string | null;
};
export type UsersMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    password: string | null;
    api_token: string | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    fullname: string | null;
    nip: string | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    api_token: number;
    remember_token: number;
    created_at: number;
    updated_at: number;
    fullname: number;
    nip: number;
    _all: number;
};
export type UsersAvgAggregateInputType = {
    id?: true;
};
export type UsersSumAggregateInputType = {
    id?: true;
};
export type UsersMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    api_token?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    fullname?: true;
    nip?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    api_token?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    fullname?: true;
    nip?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    api_token?: true;
    remember_token?: true;
    created_at?: true;
    updated_at?: true;
    fullname?: true;
    nip?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _avg?: UsersAvgAggregateInputType;
    _sum?: UsersSumAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: number;
    username: string;
    password: string;
    api_token: string | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    fullname: string;
    nip: string | null;
    _count: UsersCountAggregateOutputType | null;
    _avg: UsersAvgAggregateOutputType | null;
    _sum: UsersSumAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.IntFilter<"users"> | number;
    username?: Prisma.StringFilter<"users"> | string;
    password?: Prisma.StringFilter<"users"> | string;
    api_token?: Prisma.StringNullableFilter<"users"> | string | null;
    remember_token?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    fullname?: Prisma.StringFilter<"users"> | string;
    nip?: Prisma.StringNullableFilter<"users"> | string | null;
    piketSchedules?: Prisma.PiketScheduleListRelationFilter;
    mapel_permits_approval?: Prisma.Student_permitsListRelationFilter;
    piket_permits_created?: Prisma.Student_permitsListRelationFilter;
    teacher_assignments?: Prisma.Teacher_assignmentsListRelationFilter;
    user_roles?: Prisma.User_roleListRelationFilter;
    violations?: Prisma.ViolationsListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    api_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    remember_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullname?: Prisma.SortOrder;
    nip?: Prisma.SortOrderInput | Prisma.SortOrder;
    piketSchedules?: Prisma.PiketScheduleOrderByRelationAggregateInput;
    mapel_permits_approval?: Prisma.student_permitsOrderByRelationAggregateInput;
    piket_permits_created?: Prisma.student_permitsOrderByRelationAggregateInput;
    teacher_assignments?: Prisma.teacher_assignmentsOrderByRelationAggregateInput;
    user_roles?: Prisma.user_roleOrderByRelationAggregateInput;
    violations?: Prisma.violationsOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    api_token?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password?: Prisma.StringFilter<"users"> | string;
    remember_token?: Prisma.StringNullableFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"users"> | Date | string | null;
    fullname?: Prisma.StringFilter<"users"> | string;
    nip?: Prisma.StringNullableFilter<"users"> | string | null;
    piketSchedules?: Prisma.PiketScheduleListRelationFilter;
    mapel_permits_approval?: Prisma.Student_permitsListRelationFilter;
    piket_permits_created?: Prisma.Student_permitsListRelationFilter;
    teacher_assignments?: Prisma.Teacher_assignmentsListRelationFilter;
    user_roles?: Prisma.User_roleListRelationFilter;
    violations?: Prisma.ViolationsListRelationFilter;
}, "id" | "username" | "api_token">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    api_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    remember_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    fullname?: Prisma.SortOrder;
    nip?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _avg?: Prisma.usersAvgOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
    _sum?: Prisma.usersSumOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"users"> | number;
    username?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password?: Prisma.StringWithAggregatesFilter<"users"> | string;
    api_token?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    remember_token?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null;
    fullname?: Prisma.StringWithAggregatesFilter<"users"> | string;
    nip?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
};
export type usersCreateInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
};
export type usersUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    api_token?: Prisma.SortOrder;
    remember_token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    fullname?: Prisma.SortOrder;
    nip?: Prisma.SortOrder;
};
export type usersAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    api_token?: Prisma.SortOrder;
    remember_token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    fullname?: Prisma.SortOrder;
    nip?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    api_token?: Prisma.SortOrder;
    remember_token?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    fullname?: Prisma.SortOrder;
    nip?: Prisma.SortOrder;
};
export type usersSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersCreateNestedOneWithoutViolationsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutViolationsInput, Prisma.usersUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutViolationsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutViolationsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutViolationsInput, Prisma.usersUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutViolationsInput;
    upsert?: Prisma.usersUpsertWithoutViolationsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutViolationsInput, Prisma.usersUpdateWithoutViolationsInput>, Prisma.usersUncheckedUpdateWithoutViolationsInput>;
};
export type usersCreateNestedOneWithoutPiketSchedulesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPiketSchedulesInput, Prisma.usersUncheckedCreateWithoutPiketSchedulesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPiketSchedulesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutPiketSchedulesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPiketSchedulesInput, Prisma.usersUncheckedCreateWithoutPiketSchedulesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPiketSchedulesInput;
    upsert?: Prisma.usersUpsertWithoutPiketSchedulesInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutPiketSchedulesInput, Prisma.usersUpdateWithoutPiketSchedulesInput>, Prisma.usersUncheckedUpdateWithoutPiketSchedulesInput>;
};
export type usersCreateNestedOneWithoutTeacher_assignmentsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedCreateWithoutTeacher_assignmentsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTeacher_assignmentsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutTeacher_assignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedCreateWithoutTeacher_assignmentsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutTeacher_assignmentsInput;
    upsert?: Prisma.usersUpsertWithoutTeacher_assignmentsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutTeacher_assignmentsInput, Prisma.usersUpdateWithoutTeacher_assignmentsInput>, Prisma.usersUncheckedUpdateWithoutTeacher_assignmentsInput>;
};
export type usersCreateNestedOneWithoutMapel_permits_approvalInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedCreateWithoutMapel_permits_approvalInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMapel_permits_approvalInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersCreateNestedOneWithoutPiket_permits_createdInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPiket_permits_createdInput, Prisma.usersUncheckedCreateWithoutPiket_permits_createdInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPiket_permits_createdInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutMapel_permits_approvalNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedCreateWithoutMapel_permits_approvalInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMapel_permits_approvalInput;
    upsert?: Prisma.usersUpsertWithoutMapel_permits_approvalInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutMapel_permits_approvalInput, Prisma.usersUpdateWithoutMapel_permits_approvalInput>, Prisma.usersUncheckedUpdateWithoutMapel_permits_approvalInput>;
};
export type usersUpdateOneRequiredWithoutPiket_permits_createdNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutPiket_permits_createdInput, Prisma.usersUncheckedCreateWithoutPiket_permits_createdInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutPiket_permits_createdInput;
    upsert?: Prisma.usersUpsertWithoutPiket_permits_createdInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutPiket_permits_createdInput, Prisma.usersUpdateWithoutPiket_permits_createdInput>, Prisma.usersUncheckedUpdateWithoutPiket_permits_createdInput>;
};
export type usersCreateNestedOneWithoutUser_rolesInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutUser_rolesNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutUser_rolesInput;
    upsert?: Prisma.usersUpsertWithoutUser_rolesInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutUser_rolesInput, Prisma.usersUpdateWithoutUser_rolesInput>, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersCreateWithoutViolationsInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
};
export type usersUncheckedCreateWithoutViolationsInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
};
export type usersCreateOrConnectWithoutViolationsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutViolationsInput, Prisma.usersUncheckedCreateWithoutViolationsInput>;
};
export type usersUpsertWithoutViolationsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutViolationsInput, Prisma.usersUncheckedUpdateWithoutViolationsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutViolationsInput, Prisma.usersUncheckedCreateWithoutViolationsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutViolationsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutViolationsInput, Prisma.usersUncheckedUpdateWithoutViolationsInput>;
};
export type usersUpdateWithoutViolationsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
};
export type usersUncheckedUpdateWithoutViolationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
};
export type usersCreateWithoutPiketSchedulesInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutPiketSchedulesInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutPiketSchedulesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutPiketSchedulesInput, Prisma.usersUncheckedCreateWithoutPiketSchedulesInput>;
};
export type usersUpsertWithoutPiketSchedulesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutPiketSchedulesInput, Prisma.usersUncheckedUpdateWithoutPiketSchedulesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutPiketSchedulesInput, Prisma.usersUncheckedCreateWithoutPiketSchedulesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutPiketSchedulesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutPiketSchedulesInput, Prisma.usersUncheckedUpdateWithoutPiketSchedulesInput>;
};
export type usersUpdateWithoutPiketSchedulesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutPiketSchedulesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutTeacher_assignmentsInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutTeacher_assignmentsInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutTeacher_assignmentsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedCreateWithoutTeacher_assignmentsInput>;
};
export type usersUpsertWithoutTeacher_assignmentsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedUpdateWithoutTeacher_assignmentsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedCreateWithoutTeacher_assignmentsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutTeacher_assignmentsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutTeacher_assignmentsInput, Prisma.usersUncheckedUpdateWithoutTeacher_assignmentsInput>;
};
export type usersUpdateWithoutTeacher_assignmentsInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutTeacher_assignmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutMapel_permits_approvalInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutMapel_permits_approvalInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutMapel_permits_approvalInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedCreateWithoutMapel_permits_approvalInput>;
};
export type usersCreateWithoutPiket_permits_createdInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutPiket_permits_createdInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    user_roles?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutPiket_permits_createdInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutPiket_permits_createdInput, Prisma.usersUncheckedCreateWithoutPiket_permits_createdInput>;
};
export type usersUpsertWithoutMapel_permits_approvalInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedUpdateWithoutMapel_permits_approvalInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedCreateWithoutMapel_permits_approvalInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutMapel_permits_approvalInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutMapel_permits_approvalInput, Prisma.usersUncheckedUpdateWithoutMapel_permits_approvalInput>;
};
export type usersUpdateWithoutMapel_permits_approvalInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutMapel_permits_approvalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersUpsertWithoutPiket_permits_createdInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutPiket_permits_createdInput, Prisma.usersUncheckedUpdateWithoutPiket_permits_createdInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutPiket_permits_createdInput, Prisma.usersUncheckedCreateWithoutPiket_permits_createdInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutPiket_permits_createdInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutPiket_permits_createdInput, Prisma.usersUncheckedUpdateWithoutPiket_permits_createdInput>;
};
export type usersUpdateWithoutPiket_permits_createdInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutPiket_permits_createdInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    user_roles?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutUser_rolesInput = {
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutTeacherInput;
    violations?: Prisma.violationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutUser_rolesInput = {
    id?: number;
    username: string;
    password: string;
    api_token?: string | null;
    remember_token?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    fullname?: string;
    nip?: string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedCreateNestedManyWithoutMapel_userInput;
    piket_permits_created?: Prisma.student_permitsUncheckedCreateNestedManyWithoutPiket_userInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutUser_rolesInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
};
export type usersUpsertWithoutUser_rolesInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutUser_rolesInput, Prisma.usersUncheckedCreateWithoutUser_rolesInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutUser_rolesInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutUser_rolesInput, Prisma.usersUncheckedUpdateWithoutUser_rolesInput>;
};
export type usersUpdateWithoutUser_rolesInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUpdateManyWithoutTeacherNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutUser_rolesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    api_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    remember_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fullname?: Prisma.StringFieldUpdateOperationsInput | string;
    nip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    piketSchedules?: Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput;
    mapel_permits_approval?: Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput;
    piket_permits_created?: Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput;
    teacher_assignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutUsersNestedInput;
};
/**
 * Count Type UsersCountOutputType
 */
export type UsersCountOutputType = {
    piketSchedules: number;
    mapel_permits_approval: number;
    piket_permits_created: number;
    teacher_assignments: number;
    user_roles: number;
    violations: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    piketSchedules?: boolean | UsersCountOutputTypeCountPiketSchedulesArgs;
    mapel_permits_approval?: boolean | UsersCountOutputTypeCountMapel_permits_approvalArgs;
    piket_permits_created?: boolean | UsersCountOutputTypeCountPiket_permits_createdArgs;
    teacher_assignments?: boolean | UsersCountOutputTypeCountTeacher_assignmentsArgs;
    user_roles?: boolean | UsersCountOutputTypeCountUser_rolesArgs;
    violations?: boolean | UsersCountOutputTypeCountViolationsArgs;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountPiketSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PiketScheduleWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountMapel_permits_approvalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.student_permitsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountPiket_permits_createdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.student_permitsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountTeacher_assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.teacher_assignmentsWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountUser_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
};
/**
 * UsersCountOutputType without action
 */
export type UsersCountOutputTypeCountViolationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violationsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    api_token?: boolean;
    remember_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    fullname?: boolean;
    nip?: boolean;
    piketSchedules?: boolean | Prisma.users$piketSchedulesArgs<ExtArgs>;
    mapel_permits_approval?: boolean | Prisma.users$mapel_permits_approvalArgs<ExtArgs>;
    piket_permits_created?: boolean | Prisma.users$piket_permits_createdArgs<ExtArgs>;
    teacher_assignments?: boolean | Prisma.users$teacher_assignmentsArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    violations?: boolean | Prisma.users$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    api_token?: boolean;
    remember_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    fullname?: boolean;
    nip?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    api_token?: boolean;
    remember_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    fullname?: boolean;
    nip?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    api_token?: boolean;
    remember_token?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    fullname?: boolean;
    nip?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password" | "api_token" | "remember_token" | "created_at" | "updated_at" | "fullname" | "nip", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    piketSchedules?: boolean | Prisma.users$piketSchedulesArgs<ExtArgs>;
    mapel_permits_approval?: boolean | Prisma.users$mapel_permits_approvalArgs<ExtArgs>;
    piket_permits_created?: boolean | Prisma.users$piket_permits_createdArgs<ExtArgs>;
    teacher_assignments?: boolean | Prisma.users$teacher_assignmentsArgs<ExtArgs>;
    user_roles?: boolean | Prisma.users$user_rolesArgs<ExtArgs>;
    violations?: boolean | Prisma.users$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        piketSchedules: Prisma.$PiketSchedulePayload<ExtArgs>[];
        mapel_permits_approval: Prisma.$student_permitsPayload<ExtArgs>[];
        piket_permits_created: Prisma.$student_permitsPayload<ExtArgs>[];
        teacher_assignments: Prisma.$teacher_assignmentsPayload<ExtArgs>[];
        user_roles: Prisma.$user_rolePayload<ExtArgs>[];
        violations: Prisma.$violationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        password: string;
        api_token: string | null;
        remember_token: string | null;
        created_at: Date | null;
        updated_at: Date | null;
        fullname: string;
        nip: string | null;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for users.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    piketSchedules<T extends Prisma.users$piketSchedulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$piketSchedulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mapel_permits_approval<T extends Prisma.users$mapel_permits_approvalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$mapel_permits_approvalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    piket_permits_created<T extends Prisma.users$piket_permits_createdArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$piket_permits_createdArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teacher_assignments<T extends Prisma.users$teacher_assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$teacher_assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_roles<T extends Prisma.users$user_rolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$user_rolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    violations<T extends Prisma.users$violationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$violationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the users model
 */
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'Int'>;
    readonly username: Prisma.FieldRef<"users", 'String'>;
    readonly password: Prisma.FieldRef<"users", 'String'>;
    readonly api_token: Prisma.FieldRef<"users", 'String'>;
    readonly remember_token: Prisma.FieldRef<"users", 'String'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly fullname: Prisma.FieldRef<"users", 'String'>;
    readonly nip: Prisma.FieldRef<"users", 'String'>;
}
/**
 * users findUnique
 */
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findUniqueOrThrow
 */
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users findFirst
 */
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findFirstOrThrow
 */
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users findMany
 */
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.usersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: Prisma.usersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
/**
 * users create
 */
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to create a users.
     */
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
/**
 * users createMany
 */
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users createManyAndReturn
 */
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to create many users.
     */
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * users update
 */
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The data needed to update a users.
     */
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    /**
     * Choose, which users to update.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users updateMany
 */
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users updateManyAndReturn
 */
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * users upsert
 */
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: Prisma.usersWhereUniqueInput;
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
/**
 * users delete
 */
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
    /**
     * Filter which users to delete.
     */
    where: Prisma.usersWhereUniqueInput;
};
/**
 * users deleteMany
 */
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: Prisma.usersWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
};
/**
 * users.piketSchedules
 */
export type users$piketSchedulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiketSchedule
     */
    select?: Prisma.PiketScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PiketSchedule
     */
    omit?: Prisma.PiketScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PiketScheduleInclude<ExtArgs> | null;
    where?: Prisma.PiketScheduleWhereInput;
    orderBy?: Prisma.PiketScheduleOrderByWithRelationInput | Prisma.PiketScheduleOrderByWithRelationInput[];
    cursor?: Prisma.PiketScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PiketScheduleScalarFieldEnum | Prisma.PiketScheduleScalarFieldEnum[];
};
/**
 * users.mapel_permits_approval
 */
export type users$mapel_permits_approvalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permits
     */
    select?: Prisma.student_permitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permits
     */
    omit?: Prisma.student_permitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permitsInclude<ExtArgs> | null;
    where?: Prisma.student_permitsWhereInput;
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    cursor?: Prisma.student_permitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Student_permitsScalarFieldEnum | Prisma.Student_permitsScalarFieldEnum[];
};
/**
 * users.piket_permits_created
 */
export type users$piket_permits_createdArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permits
     */
    select?: Prisma.student_permitsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permits
     */
    omit?: Prisma.student_permitsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permitsInclude<ExtArgs> | null;
    where?: Prisma.student_permitsWhereInput;
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    cursor?: Prisma.student_permitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Student_permitsScalarFieldEnum | Prisma.Student_permitsScalarFieldEnum[];
};
/**
 * users.teacher_assignments
 */
export type users$teacher_assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_assignments
     */
    select?: Prisma.teacher_assignmentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the teacher_assignments
     */
    omit?: Prisma.teacher_assignmentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.teacher_assignmentsInclude<ExtArgs> | null;
    where?: Prisma.teacher_assignmentsWhereInput;
    orderBy?: Prisma.teacher_assignmentsOrderByWithRelationInput | Prisma.teacher_assignmentsOrderByWithRelationInput[];
    cursor?: Prisma.teacher_assignmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Teacher_assignmentsScalarFieldEnum | Prisma.Teacher_assignmentsScalarFieldEnum[];
};
/**
 * users.user_roles
 */
export type users$user_rolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_role
     */
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithRelationInput | Prisma.user_roleOrderByWithRelationInput[];
    cursor?: Prisma.user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_roleScalarFieldEnum | Prisma.User_roleScalarFieldEnum[];
};
/**
 * users.violations
 */
export type users$violationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violations
     */
    select?: Prisma.violationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violations
     */
    omit?: Prisma.violationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violationsInclude<ExtArgs> | null;
    where?: Prisma.violationsWhereInput;
    orderBy?: Prisma.violationsOrderByWithRelationInput | Prisma.violationsOrderByWithRelationInput[];
    cursor?: Prisma.violationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ViolationsScalarFieldEnum | Prisma.ViolationsScalarFieldEnum[];
};
/**
 * users without action
 */
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: Prisma.usersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the users
     */
    omit?: Prisma.usersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usersInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=users.d.ts.map