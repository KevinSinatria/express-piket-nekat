import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model student_permits
 *
 */
export type student_permitsModel = runtime.Types.Result.DefaultSelection<Prisma.$student_permitsPayload>;
export type AggregateStudent_permits = {
    _count: Student_permitsCountAggregateOutputType | null;
    _avg: Student_permitsAvgAggregateOutputType | null;
    _sum: Student_permitsSumAggregateOutputType | null;
    _min: Student_permitsMinAggregateOutputType | null;
    _max: Student_permitsMaxAggregateOutputType | null;
};
export type Student_permitsAvgAggregateOutputType = {
    id: number | null;
    hours_start: number | null;
    hours_end: number | null;
    piket_user_id: number | null;
    mapel_user_id: number | null;
};
export type Student_permitsSumAggregateOutputType = {
    id: number | null;
    hours_start: number | null;
    hours_end: number | null;
    piket_user_id: number | null;
    mapel_user_id: number | null;
};
export type Student_permitsMinAggregateOutputType = {
    id: number | null;
    reason: string | null;
    hours_start: number | null;
    hours_end: number | null;
    status: $Enums.student_permit_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    student_nis: string | null;
    piket_user_id: number | null;
    mapel_user_id: number | null;
};
export type Student_permitsMaxAggregateOutputType = {
    id: number | null;
    reason: string | null;
    hours_start: number | null;
    hours_end: number | null;
    status: $Enums.student_permit_status | null;
    created_at: Date | null;
    updated_at: Date | null;
    student_nis: string | null;
    piket_user_id: number | null;
    mapel_user_id: number | null;
};
export type Student_permitsCountAggregateOutputType = {
    id: number;
    reason: number;
    hours_start: number;
    hours_end: number;
    status: number;
    created_at: number;
    updated_at: number;
    student_nis: number;
    piket_user_id: number;
    mapel_user_id: number;
    _all: number;
};
export type Student_permitsAvgAggregateInputType = {
    id?: true;
    hours_start?: true;
    hours_end?: true;
    piket_user_id?: true;
    mapel_user_id?: true;
};
export type Student_permitsSumAggregateInputType = {
    id?: true;
    hours_start?: true;
    hours_end?: true;
    piket_user_id?: true;
    mapel_user_id?: true;
};
export type Student_permitsMinAggregateInputType = {
    id?: true;
    reason?: true;
    hours_start?: true;
    hours_end?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    student_nis?: true;
    piket_user_id?: true;
    mapel_user_id?: true;
};
export type Student_permitsMaxAggregateInputType = {
    id?: true;
    reason?: true;
    hours_start?: true;
    hours_end?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    student_nis?: true;
    piket_user_id?: true;
    mapel_user_id?: true;
};
export type Student_permitsCountAggregateInputType = {
    id?: true;
    reason?: true;
    hours_start?: true;
    hours_end?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    student_nis?: true;
    piket_user_id?: true;
    mapel_user_id?: true;
    _all?: true;
};
export type Student_permitsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which student_permits to aggregate.
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permits to fetch.
     */
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.student_permitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned student_permits
    **/
    _count?: true | Student_permitsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Student_permitsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Student_permitsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Student_permitsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Student_permitsMaxAggregateInputType;
};
export type GetStudent_permitsAggregateType<T extends Student_permitsAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent_permits]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent_permits[P]> : Prisma.GetScalarType<T[P], AggregateStudent_permits[P]>;
};
export type student_permitsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.student_permitsWhereInput;
    orderBy?: Prisma.student_permitsOrderByWithAggregationInput | Prisma.student_permitsOrderByWithAggregationInput[];
    by: Prisma.Student_permitsScalarFieldEnum[] | Prisma.Student_permitsScalarFieldEnum;
    having?: Prisma.student_permitsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Student_permitsCountAggregateInputType | true;
    _avg?: Student_permitsAvgAggregateInputType;
    _sum?: Student_permitsSumAggregateInputType;
    _min?: Student_permitsMinAggregateInputType;
    _max?: Student_permitsMaxAggregateInputType;
};
export type Student_permitsGroupByOutputType = {
    id: number;
    reason: string;
    hours_start: number;
    hours_end: number | null;
    status: $Enums.student_permit_status;
    created_at: Date;
    updated_at: Date;
    student_nis: string;
    piket_user_id: number;
    mapel_user_id: number;
    _count: Student_permitsCountAggregateOutputType | null;
    _avg: Student_permitsAvgAggregateOutputType | null;
    _sum: Student_permitsSumAggregateOutputType | null;
    _min: Student_permitsMinAggregateOutputType | null;
    _max: Student_permitsMaxAggregateOutputType | null;
};
type GetStudent_permitsGroupByPayload<T extends student_permitsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Student_permitsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Student_permitsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Student_permitsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Student_permitsGroupByOutputType[P]>;
}>>;
export type student_permitsWhereInput = {
    AND?: Prisma.student_permitsWhereInput | Prisma.student_permitsWhereInput[];
    OR?: Prisma.student_permitsWhereInput[];
    NOT?: Prisma.student_permitsWhereInput | Prisma.student_permitsWhereInput[];
    id?: Prisma.IntFilter<"student_permits"> | number;
    reason?: Prisma.StringFilter<"student_permits"> | string;
    hours_start?: Prisma.IntFilter<"student_permits"> | number;
    hours_end?: Prisma.IntNullableFilter<"student_permits"> | number | null;
    status?: Prisma.Enumstudent_permit_statusFilter<"student_permits"> | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    student_nis?: Prisma.StringFilter<"student_permits"> | string;
    piket_user_id?: Prisma.IntFilter<"student_permits"> | number;
    mapel_user_id?: Prisma.IntFilter<"student_permits"> | number;
    mapel_user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    piket_user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
};
export type student_permitsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
    mapel_user?: Prisma.usersOrderByWithRelationInput;
    piket_user?: Prisma.usersOrderByWithRelationInput;
    student?: Prisma.studentsOrderByWithRelationInput;
};
export type student_permitsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.student_permitsWhereInput | Prisma.student_permitsWhereInput[];
    OR?: Prisma.student_permitsWhereInput[];
    NOT?: Prisma.student_permitsWhereInput | Prisma.student_permitsWhereInput[];
    reason?: Prisma.StringFilter<"student_permits"> | string;
    hours_start?: Prisma.IntFilter<"student_permits"> | number;
    hours_end?: Prisma.IntNullableFilter<"student_permits"> | number | null;
    status?: Prisma.Enumstudent_permit_statusFilter<"student_permits"> | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    student_nis?: Prisma.StringFilter<"student_permits"> | string;
    piket_user_id?: Prisma.IntFilter<"student_permits"> | number;
    mapel_user_id?: Prisma.IntFilter<"student_permits"> | number;
    mapel_user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    piket_user?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
}, "id">;
export type student_permitsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
    _count?: Prisma.student_permitsCountOrderByAggregateInput;
    _avg?: Prisma.student_permitsAvgOrderByAggregateInput;
    _max?: Prisma.student_permitsMaxOrderByAggregateInput;
    _min?: Prisma.student_permitsMinOrderByAggregateInput;
    _sum?: Prisma.student_permitsSumOrderByAggregateInput;
};
export type student_permitsScalarWhereWithAggregatesInput = {
    AND?: Prisma.student_permitsScalarWhereWithAggregatesInput | Prisma.student_permitsScalarWhereWithAggregatesInput[];
    OR?: Prisma.student_permitsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.student_permitsScalarWhereWithAggregatesInput | Prisma.student_permitsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"student_permits"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"student_permits"> | string;
    hours_start?: Prisma.IntWithAggregatesFilter<"student_permits"> | number;
    hours_end?: Prisma.IntNullableWithAggregatesFilter<"student_permits"> | number | null;
    status?: Prisma.Enumstudent_permit_statusWithAggregatesFilter<"student_permits"> | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"student_permits"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"student_permits"> | Date | string;
    student_nis?: Prisma.StringWithAggregatesFilter<"student_permits"> | string;
    piket_user_id?: Prisma.IntWithAggregatesFilter<"student_permits"> | number;
    mapel_user_id?: Prisma.IntWithAggregatesFilter<"student_permits"> | number;
};
export type student_permitsCreateInput = {
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    mapel_user: Prisma.usersCreateNestedOneWithoutMapel_permits_approvalInput;
    piket_user: Prisma.usersCreateNestedOneWithoutPiket_permits_createdInput;
    student: Prisma.studentsCreateNestedOneWithoutStudentPermitsInput;
};
export type student_permitsUncheckedCreateInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    piket_user_id: number;
    mapel_user_id: number;
};
export type student_permitsUpdateInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mapel_user?: Prisma.usersUpdateOneRequiredWithoutMapel_permits_approvalNestedInput;
    piket_user?: Prisma.usersUpdateOneRequiredWithoutPiket_permits_createdNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutStudentPermitsNestedInput;
};
export type student_permitsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsCreateManyInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    piket_user_id: number;
    mapel_user_id: number;
};
export type student_permitsUpdateManyMutationInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type student_permitsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Student_permitsListRelationFilter = {
    every?: Prisma.student_permitsWhereInput;
    some?: Prisma.student_permitsWhereInput;
    none?: Prisma.student_permitsWhereInput;
};
export type student_permitsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type student_permitsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
};
export type student_permitsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
};
export type student_permitsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
};
export type student_permitsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
};
export type student_permitsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hours_start?: Prisma.SortOrder;
    hours_end?: Prisma.SortOrder;
    piket_user_id?: Prisma.SortOrder;
    mapel_user_id?: Prisma.SortOrder;
};
export type student_permitsCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput> | Prisma.student_permitsCreateWithoutStudentInput[] | Prisma.student_permitsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutStudentInput | Prisma.student_permitsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.student_permitsCreateManyStudentInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput> | Prisma.student_permitsCreateWithoutStudentInput[] | Prisma.student_permitsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutStudentInput | Prisma.student_permitsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.student_permitsCreateManyStudentInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput> | Prisma.student_permitsCreateWithoutStudentInput[] | Prisma.student_permitsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutStudentInput | Prisma.student_permitsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutStudentInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.student_permitsCreateManyStudentInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutStudentInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutStudentInput | Prisma.student_permitsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type student_permitsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput> | Prisma.student_permitsCreateWithoutStudentInput[] | Prisma.student_permitsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutStudentInput | Prisma.student_permitsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutStudentInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.student_permitsCreateManyStudentInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutStudentInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutStudentInput | Prisma.student_permitsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type student_permitsCreateNestedManyWithoutMapel_userInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput> | Prisma.student_permitsCreateWithoutMapel_userInput[] | Prisma.student_permitsUncheckedCreateWithoutMapel_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutMapel_userInput | Prisma.student_permitsCreateOrConnectWithoutMapel_userInput[];
    createMany?: Prisma.student_permitsCreateManyMapel_userInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsCreateNestedManyWithoutPiket_userInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput> | Prisma.student_permitsCreateWithoutPiket_userInput[] | Prisma.student_permitsUncheckedCreateWithoutPiket_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutPiket_userInput | Prisma.student_permitsCreateOrConnectWithoutPiket_userInput[];
    createMany?: Prisma.student_permitsCreateManyPiket_userInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsUncheckedCreateNestedManyWithoutMapel_userInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput> | Prisma.student_permitsCreateWithoutMapel_userInput[] | Prisma.student_permitsUncheckedCreateWithoutMapel_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutMapel_userInput | Prisma.student_permitsCreateOrConnectWithoutMapel_userInput[];
    createMany?: Prisma.student_permitsCreateManyMapel_userInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsUncheckedCreateNestedManyWithoutPiket_userInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput> | Prisma.student_permitsCreateWithoutPiket_userInput[] | Prisma.student_permitsUncheckedCreateWithoutPiket_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutPiket_userInput | Prisma.student_permitsCreateOrConnectWithoutPiket_userInput[];
    createMany?: Prisma.student_permitsCreateManyPiket_userInputEnvelope;
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
};
export type student_permitsUpdateManyWithoutMapel_userNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput> | Prisma.student_permitsCreateWithoutMapel_userInput[] | Prisma.student_permitsUncheckedCreateWithoutMapel_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutMapel_userInput | Prisma.student_permitsCreateOrConnectWithoutMapel_userInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutMapel_userInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutMapel_userInput[];
    createMany?: Prisma.student_permitsCreateManyMapel_userInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutMapel_userInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutMapel_userInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutMapel_userInput | Prisma.student_permitsUpdateManyWithWhereWithoutMapel_userInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type student_permitsUpdateManyWithoutPiket_userNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput> | Prisma.student_permitsCreateWithoutPiket_userInput[] | Prisma.student_permitsUncheckedCreateWithoutPiket_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutPiket_userInput | Prisma.student_permitsCreateOrConnectWithoutPiket_userInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutPiket_userInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutPiket_userInput[];
    createMany?: Prisma.student_permitsCreateManyPiket_userInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutPiket_userInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutPiket_userInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutPiket_userInput | Prisma.student_permitsUpdateManyWithWhereWithoutPiket_userInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type student_permitsUncheckedUpdateManyWithoutMapel_userNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput> | Prisma.student_permitsCreateWithoutMapel_userInput[] | Prisma.student_permitsUncheckedCreateWithoutMapel_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutMapel_userInput | Prisma.student_permitsCreateOrConnectWithoutMapel_userInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutMapel_userInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutMapel_userInput[];
    createMany?: Prisma.student_permitsCreateManyMapel_userInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutMapel_userInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutMapel_userInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutMapel_userInput | Prisma.student_permitsUpdateManyWithWhereWithoutMapel_userInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type student_permitsUncheckedUpdateManyWithoutPiket_userNestedInput = {
    create?: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput> | Prisma.student_permitsCreateWithoutPiket_userInput[] | Prisma.student_permitsUncheckedCreateWithoutPiket_userInput[];
    connectOrCreate?: Prisma.student_permitsCreateOrConnectWithoutPiket_userInput | Prisma.student_permitsCreateOrConnectWithoutPiket_userInput[];
    upsert?: Prisma.student_permitsUpsertWithWhereUniqueWithoutPiket_userInput | Prisma.student_permitsUpsertWithWhereUniqueWithoutPiket_userInput[];
    createMany?: Prisma.student_permitsCreateManyPiket_userInputEnvelope;
    set?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    disconnect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    delete?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    connect?: Prisma.student_permitsWhereUniqueInput | Prisma.student_permitsWhereUniqueInput[];
    update?: Prisma.student_permitsUpdateWithWhereUniqueWithoutPiket_userInput | Prisma.student_permitsUpdateWithWhereUniqueWithoutPiket_userInput[];
    updateMany?: Prisma.student_permitsUpdateManyWithWhereWithoutPiket_userInput | Prisma.student_permitsUpdateManyWithWhereWithoutPiket_userInput[];
    deleteMany?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
};
export type Enumstudent_permit_statusFieldUpdateOperationsInput = {
    set?: $Enums.student_permit_status;
};
export type student_permitsCreateWithoutStudentInput = {
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    mapel_user: Prisma.usersCreateNestedOneWithoutMapel_permits_approvalInput;
    piket_user: Prisma.usersCreateNestedOneWithoutPiket_permits_createdInput;
};
export type student_permitsUncheckedCreateWithoutStudentInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    piket_user_id: number;
    mapel_user_id: number;
};
export type student_permitsCreateOrConnectWithoutStudentInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput>;
};
export type student_permitsCreateManyStudentInputEnvelope = {
    data: Prisma.student_permitsCreateManyStudentInput | Prisma.student_permitsCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type student_permitsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.student_permitsUpdateWithoutStudentInput, Prisma.student_permitsUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutStudentInput, Prisma.student_permitsUncheckedCreateWithoutStudentInput>;
};
export type student_permitsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateWithoutStudentInput, Prisma.student_permitsUncheckedUpdateWithoutStudentInput>;
};
export type student_permitsUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.student_permitsScalarWhereInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateManyMutationInput, Prisma.student_permitsUncheckedUpdateManyWithoutStudentInput>;
};
export type student_permitsScalarWhereInput = {
    AND?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
    OR?: Prisma.student_permitsScalarWhereInput[];
    NOT?: Prisma.student_permitsScalarWhereInput | Prisma.student_permitsScalarWhereInput[];
    id?: Prisma.IntFilter<"student_permits"> | number;
    reason?: Prisma.StringFilter<"student_permits"> | string;
    hours_start?: Prisma.IntFilter<"student_permits"> | number;
    hours_end?: Prisma.IntNullableFilter<"student_permits"> | number | null;
    status?: Prisma.Enumstudent_permit_statusFilter<"student_permits"> | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"student_permits"> | Date | string;
    student_nis?: Prisma.StringFilter<"student_permits"> | string;
    piket_user_id?: Prisma.IntFilter<"student_permits"> | number;
    mapel_user_id?: Prisma.IntFilter<"student_permits"> | number;
};
export type student_permitsCreateWithoutMapel_userInput = {
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    piket_user: Prisma.usersCreateNestedOneWithoutPiket_permits_createdInput;
    student: Prisma.studentsCreateNestedOneWithoutStudentPermitsInput;
};
export type student_permitsUncheckedCreateWithoutMapel_userInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    piket_user_id: number;
};
export type student_permitsCreateOrConnectWithoutMapel_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput>;
};
export type student_permitsCreateManyMapel_userInputEnvelope = {
    data: Prisma.student_permitsCreateManyMapel_userInput | Prisma.student_permitsCreateManyMapel_userInput[];
    skipDuplicates?: boolean;
};
export type student_permitsCreateWithoutPiket_userInput = {
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    mapel_user: Prisma.usersCreateNestedOneWithoutMapel_permits_approvalInput;
    student: Prisma.studentsCreateNestedOneWithoutStudentPermitsInput;
};
export type student_permitsUncheckedCreateWithoutPiket_userInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    mapel_user_id: number;
};
export type student_permitsCreateOrConnectWithoutPiket_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput>;
};
export type student_permitsCreateManyPiket_userInputEnvelope = {
    data: Prisma.student_permitsCreateManyPiket_userInput | Prisma.student_permitsCreateManyPiket_userInput[];
    skipDuplicates?: boolean;
};
export type student_permitsUpsertWithWhereUniqueWithoutMapel_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.student_permitsUpdateWithoutMapel_userInput, Prisma.student_permitsUncheckedUpdateWithoutMapel_userInput>;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutMapel_userInput, Prisma.student_permitsUncheckedCreateWithoutMapel_userInput>;
};
export type student_permitsUpdateWithWhereUniqueWithoutMapel_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateWithoutMapel_userInput, Prisma.student_permitsUncheckedUpdateWithoutMapel_userInput>;
};
export type student_permitsUpdateManyWithWhereWithoutMapel_userInput = {
    where: Prisma.student_permitsScalarWhereInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateManyMutationInput, Prisma.student_permitsUncheckedUpdateManyWithoutMapel_userInput>;
};
export type student_permitsUpsertWithWhereUniqueWithoutPiket_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.student_permitsUpdateWithoutPiket_userInput, Prisma.student_permitsUncheckedUpdateWithoutPiket_userInput>;
    create: Prisma.XOR<Prisma.student_permitsCreateWithoutPiket_userInput, Prisma.student_permitsUncheckedCreateWithoutPiket_userInput>;
};
export type student_permitsUpdateWithWhereUniqueWithoutPiket_userInput = {
    where: Prisma.student_permitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateWithoutPiket_userInput, Prisma.student_permitsUncheckedUpdateWithoutPiket_userInput>;
};
export type student_permitsUpdateManyWithWhereWithoutPiket_userInput = {
    where: Prisma.student_permitsScalarWhereInput;
    data: Prisma.XOR<Prisma.student_permitsUpdateManyMutationInput, Prisma.student_permitsUncheckedUpdateManyWithoutPiket_userInput>;
};
export type student_permitsCreateManyStudentInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    piket_user_id: number;
    mapel_user_id: number;
};
export type student_permitsUpdateWithoutStudentInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mapel_user?: Prisma.usersUpdateOneRequiredWithoutMapel_permits_approvalNestedInput;
    piket_user?: Prisma.usersUpdateOneRequiredWithoutPiket_permits_createdNestedInput;
};
export type student_permitsUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsCreateManyMapel_userInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    piket_user_id: number;
};
export type student_permitsCreateManyPiket_userInput = {
    id?: number;
    reason: string;
    hours_start: number;
    hours_end?: number | null;
    status?: $Enums.student_permit_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    student_nis: string;
    mapel_user_id: number;
};
export type student_permitsUpdateWithoutMapel_userInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    piket_user?: Prisma.usersUpdateOneRequiredWithoutPiket_permits_createdNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutStudentPermitsNestedInput;
};
export type student_permitsUncheckedUpdateWithoutMapel_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsUncheckedUpdateManyWithoutMapel_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    piket_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsUpdateWithoutPiket_userInput = {
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mapel_user?: Prisma.usersUpdateOneRequiredWithoutMapel_permits_approvalNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutStudentPermitsNestedInput;
};
export type student_permitsUncheckedUpdateWithoutPiket_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsUncheckedUpdateManyWithoutPiket_userInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    hours_start?: Prisma.IntFieldUpdateOperationsInput | number;
    hours_end?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.Enumstudent_permit_statusFieldUpdateOperationsInput | $Enums.student_permit_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
    mapel_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permitsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reason?: boolean;
    hours_start?: boolean;
    hours_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student_nis?: boolean;
    piket_user_id?: boolean;
    mapel_user_id?: boolean;
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permits"]>;
export type student_permitsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reason?: boolean;
    hours_start?: boolean;
    hours_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student_nis?: boolean;
    piket_user_id?: boolean;
    mapel_user_id?: boolean;
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permits"]>;
export type student_permitsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reason?: boolean;
    hours_start?: boolean;
    hours_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student_nis?: boolean;
    piket_user_id?: boolean;
    mapel_user_id?: boolean;
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permits"]>;
export type student_permitsSelectScalar = {
    id?: boolean;
    reason?: boolean;
    hours_start?: boolean;
    hours_end?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    student_nis?: boolean;
    piket_user_id?: boolean;
    mapel_user_id?: boolean;
};
export type student_permitsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reason" | "hours_start" | "hours_end" | "status" | "created_at" | "updated_at" | "student_nis" | "piket_user_id" | "mapel_user_id", ExtArgs["result"]["student_permits"]>;
export type student_permitsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type student_permitsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type student_permitsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mapel_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    piket_user?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type $student_permitsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "student_permits";
    objects: {
        mapel_user: Prisma.$usersPayload<ExtArgs>;
        piket_user: Prisma.$usersPayload<ExtArgs>;
        student: Prisma.$studentsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        reason: string;
        hours_start: number;
        hours_end: number | null;
        status: $Enums.student_permit_status;
        created_at: Date;
        updated_at: Date;
        student_nis: string;
        piket_user_id: number;
        mapel_user_id: number;
    }, ExtArgs["result"]["student_permits"]>;
    composites: {};
};
export type student_permitsGetPayload<S extends boolean | null | undefined | student_permitsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$student_permitsPayload, S>;
export type student_permitsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<student_permitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Student_permitsCountAggregateInputType | true;
};
export interface student_permitsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['student_permits'];
        meta: {
            name: 'student_permits';
        };
    };
    /**
     * Find zero or one Student_permits that matches the filter.
     * @param {student_permitsFindUniqueArgs} args - Arguments to find a Student_permits
     * @example
     * // Get one Student_permits
     * const student_permits = await prisma.student_permits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_permitsFindUniqueArgs>(args: Prisma.SelectSubset<T, student_permitsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Student_permits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_permitsFindUniqueOrThrowArgs} args - Arguments to find a Student_permits
     * @example
     * // Get one Student_permits
     * const student_permits = await prisma.student_permits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_permitsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, student_permitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student_permits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsFindFirstArgs} args - Arguments to find a Student_permits
     * @example
     * // Get one Student_permits
     * const student_permits = await prisma.student_permits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_permitsFindFirstArgs>(args?: Prisma.SelectSubset<T, student_permitsFindFirstArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student_permits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsFindFirstOrThrowArgs} args - Arguments to find a Student_permits
     * @example
     * // Get one Student_permits
     * const student_permits = await prisma.student_permits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_permitsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, student_permitsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Student_permits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_permits
     * const student_permits = await prisma.student_permits.findMany()
     *
     * // Get first 10 Student_permits
     * const student_permits = await prisma.student_permits.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const student_permitsWithIdOnly = await prisma.student_permits.findMany({ select: { id: true } })
     *
     */
    findMany<T extends student_permitsFindManyArgs>(args?: Prisma.SelectSubset<T, student_permitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Student_permits.
     * @param {student_permitsCreateArgs} args - Arguments to create a Student_permits.
     * @example
     * // Create one Student_permits
     * const Student_permits = await prisma.student_permits.create({
     *   data: {
     *     // ... data to create a Student_permits
     *   }
     * })
     *
     */
    create<T extends student_permitsCreateArgs>(args: Prisma.SelectSubset<T, student_permitsCreateArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Student_permits.
     * @param {student_permitsCreateManyArgs} args - Arguments to create many Student_permits.
     * @example
     * // Create many Student_permits
     * const student_permits = await prisma.student_permits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends student_permitsCreateManyArgs>(args?: Prisma.SelectSubset<T, student_permitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Student_permits and returns the data saved in the database.
     * @param {student_permitsCreateManyAndReturnArgs} args - Arguments to create many Student_permits.
     * @example
     * // Create many Student_permits
     * const student_permits = await prisma.student_permits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Student_permits and only return the `id`
     * const student_permitsWithIdOnly = await prisma.student_permits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends student_permitsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, student_permitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Student_permits.
     * @param {student_permitsDeleteArgs} args - Arguments to delete one Student_permits.
     * @example
     * // Delete one Student_permits
     * const Student_permits = await prisma.student_permits.delete({
     *   where: {
     *     // ... filter to delete one Student_permits
     *   }
     * })
     *
     */
    delete<T extends student_permitsDeleteArgs>(args: Prisma.SelectSubset<T, student_permitsDeleteArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Student_permits.
     * @param {student_permitsUpdateArgs} args - Arguments to update one Student_permits.
     * @example
     * // Update one Student_permits
     * const student_permits = await prisma.student_permits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends student_permitsUpdateArgs>(args: Prisma.SelectSubset<T, student_permitsUpdateArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Student_permits.
     * @param {student_permitsDeleteManyArgs} args - Arguments to filter Student_permits to delete.
     * @example
     * // Delete a few Student_permits
     * const { count } = await prisma.student_permits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends student_permitsDeleteManyArgs>(args?: Prisma.SelectSubset<T, student_permitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Student_permits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_permits
     * const student_permits = await prisma.student_permits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends student_permitsUpdateManyArgs>(args: Prisma.SelectSubset<T, student_permitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Student_permits and returns the data updated in the database.
     * @param {student_permitsUpdateManyAndReturnArgs} args - Arguments to update many Student_permits.
     * @example
     * // Update many Student_permits
     * const student_permits = await prisma.student_permits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Student_permits and only return the `id`
     * const student_permitsWithIdOnly = await prisma.student_permits.updateManyAndReturn({
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
    updateManyAndReturn<T extends student_permitsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, student_permitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Student_permits.
     * @param {student_permitsUpsertArgs} args - Arguments to update or create a Student_permits.
     * @example
     * // Update or create a Student_permits
     * const student_permits = await prisma.student_permits.upsert({
     *   create: {
     *     // ... data to create a Student_permits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_permits we want to update
     *   }
     * })
     */
    upsert<T extends student_permitsUpsertArgs>(args: Prisma.SelectSubset<T, student_permitsUpsertArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Student_permits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsCountArgs} args - Arguments to filter Student_permits to count.
     * @example
     * // Count the number of Student_permits
     * const count = await prisma.student_permits.count({
     *   where: {
     *     // ... the filter for the Student_permits we want to count
     *   }
     * })
    **/
    count<T extends student_permitsCountArgs>(args?: Prisma.Subset<T, student_permitsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Student_permitsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Student_permits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_permitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Student_permitsAggregateArgs>(args: Prisma.Subset<T, Student_permitsAggregateArgs>): Prisma.PrismaPromise<GetStudent_permitsAggregateType<T>>;
    /**
     * Group by Student_permits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permitsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends student_permitsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: student_permitsGroupByArgs['orderBy'];
    } : {
        orderBy?: student_permitsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, student_permitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_permitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student_permits model
     */
    readonly fields: student_permitsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for student_permits.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__student_permitsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mapel_user<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    piket_user<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.studentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.studentsDefaultArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the student_permits model
 */
export interface student_permitsFieldRefs {
    readonly id: Prisma.FieldRef<"student_permits", 'Int'>;
    readonly reason: Prisma.FieldRef<"student_permits", 'String'>;
    readonly hours_start: Prisma.FieldRef<"student_permits", 'Int'>;
    readonly hours_end: Prisma.FieldRef<"student_permits", 'Int'>;
    readonly status: Prisma.FieldRef<"student_permits", 'student_permit_status'>;
    readonly created_at: Prisma.FieldRef<"student_permits", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"student_permits", 'DateTime'>;
    readonly student_nis: Prisma.FieldRef<"student_permits", 'String'>;
    readonly piket_user_id: Prisma.FieldRef<"student_permits", 'Int'>;
    readonly mapel_user_id: Prisma.FieldRef<"student_permits", 'Int'>;
}
/**
 * student_permits findUnique
 */
export type student_permitsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which student_permits to fetch.
     */
    where: Prisma.student_permitsWhereUniqueInput;
};
/**
 * student_permits findUniqueOrThrow
 */
export type student_permitsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which student_permits to fetch.
     */
    where: Prisma.student_permitsWhereUniqueInput;
};
/**
 * student_permits findFirst
 */
export type student_permitsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which student_permits to fetch.
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permits to fetch.
     */
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for student_permits.
     */
    cursor?: Prisma.student_permitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of student_permits.
     */
    distinct?: Prisma.Student_permitsScalarFieldEnum | Prisma.Student_permitsScalarFieldEnum[];
};
/**
 * student_permits findFirstOrThrow
 */
export type student_permitsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which student_permits to fetch.
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permits to fetch.
     */
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for student_permits.
     */
    cursor?: Prisma.student_permitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of student_permits.
     */
    distinct?: Prisma.Student_permitsScalarFieldEnum | Prisma.Student_permitsScalarFieldEnum[];
};
/**
 * student_permits findMany
 */
export type student_permitsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which student_permits to fetch.
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permits to fetch.
     */
    orderBy?: Prisma.student_permitsOrderByWithRelationInput | Prisma.student_permitsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing student_permits.
     */
    cursor?: Prisma.student_permitsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permits.
     */
    skip?: number;
    distinct?: Prisma.Student_permitsScalarFieldEnum | Prisma.Student_permitsScalarFieldEnum[];
};
/**
 * student_permits create
 */
export type student_permitsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a student_permits.
     */
    data: Prisma.XOR<Prisma.student_permitsCreateInput, Prisma.student_permitsUncheckedCreateInput>;
};
/**
 * student_permits createMany
 */
export type student_permitsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_permits.
     */
    data: Prisma.student_permitsCreateManyInput | Prisma.student_permitsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * student_permits createManyAndReturn
 */
export type student_permitsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permits
     */
    select?: Prisma.student_permitsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permits
     */
    omit?: Prisma.student_permitsOmit<ExtArgs> | null;
    /**
     * The data used to create many student_permits.
     */
    data: Prisma.student_permitsCreateManyInput | Prisma.student_permitsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permitsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * student_permits update
 */
export type student_permitsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a student_permits.
     */
    data: Prisma.XOR<Prisma.student_permitsUpdateInput, Prisma.student_permitsUncheckedUpdateInput>;
    /**
     * Choose, which student_permits to update.
     */
    where: Prisma.student_permitsWhereUniqueInput;
};
/**
 * student_permits updateMany
 */
export type student_permitsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update student_permits.
     */
    data: Prisma.XOR<Prisma.student_permitsUpdateManyMutationInput, Prisma.student_permitsUncheckedUpdateManyInput>;
    /**
     * Filter which student_permits to update
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * Limit how many student_permits to update.
     */
    limit?: number;
};
/**
 * student_permits updateManyAndReturn
 */
export type student_permitsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permits
     */
    select?: Prisma.student_permitsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permits
     */
    omit?: Prisma.student_permitsOmit<ExtArgs> | null;
    /**
     * The data used to update student_permits.
     */
    data: Prisma.XOR<Prisma.student_permitsUpdateManyMutationInput, Prisma.student_permitsUncheckedUpdateManyInput>;
    /**
     * Filter which student_permits to update
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * Limit how many student_permits to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permitsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * student_permits upsert
 */
export type student_permitsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the student_permits to update in case it exists.
     */
    where: Prisma.student_permitsWhereUniqueInput;
    /**
     * In case the student_permits found by the `where` argument doesn't exist, create a new student_permits with this data.
     */
    create: Prisma.XOR<Prisma.student_permitsCreateInput, Prisma.student_permitsUncheckedCreateInput>;
    /**
     * In case the student_permits was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.student_permitsUpdateInput, Prisma.student_permitsUncheckedUpdateInput>;
};
/**
 * student_permits delete
 */
export type student_permitsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which student_permits to delete.
     */
    where: Prisma.student_permitsWhereUniqueInput;
};
/**
 * student_permits deleteMany
 */
export type student_permitsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which student_permits to delete
     */
    where?: Prisma.student_permitsWhereInput;
    /**
     * Limit how many student_permits to delete.
     */
    limit?: number;
};
/**
 * student_permits without action
 */
export type student_permitsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=student_permits.d.ts.map