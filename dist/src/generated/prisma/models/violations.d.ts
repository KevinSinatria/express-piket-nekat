import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model violations
 *
 */
export type violationsModel = runtime.Types.Result.DefaultSelection<Prisma.$violationsPayload>;
export type AggregateViolations = {
    _count: ViolationsCountAggregateOutputType | null;
    _avg: ViolationsAvgAggregateOutputType | null;
    _sum: ViolationsSumAggregateOutputType | null;
    _min: ViolationsMinAggregateOutputType | null;
    _max: ViolationsMaxAggregateOutputType | null;
};
export type ViolationsAvgAggregateOutputType = {
    id: number | null;
    student_id: number | null;
    type_id: number | null;
    teacher_id: number | null;
};
export type ViolationsSumAggregateOutputType = {
    id: number | null;
    student_id: number | null;
    type_id: number | null;
    teacher_id: number | null;
};
export type ViolationsMinAggregateOutputType = {
    id: number | null;
    student_id: number | null;
    type_id: number | null;
    teacher_id: number | null;
    implemented: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    nis: string | null;
    description: string | null;
};
export type ViolationsMaxAggregateOutputType = {
    id: number | null;
    student_id: number | null;
    type_id: number | null;
    teacher_id: number | null;
    implemented: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    nis: string | null;
    description: string | null;
};
export type ViolationsCountAggregateOutputType = {
    id: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: number;
    created_at: number;
    updated_at: number;
    nis: number;
    description: number;
    _all: number;
};
export type ViolationsAvgAggregateInputType = {
    id?: true;
    student_id?: true;
    type_id?: true;
    teacher_id?: true;
};
export type ViolationsSumAggregateInputType = {
    id?: true;
    student_id?: true;
    type_id?: true;
    teacher_id?: true;
};
export type ViolationsMinAggregateInputType = {
    id?: true;
    student_id?: true;
    type_id?: true;
    teacher_id?: true;
    implemented?: true;
    created_at?: true;
    updated_at?: true;
    nis?: true;
    description?: true;
};
export type ViolationsMaxAggregateInputType = {
    id?: true;
    student_id?: true;
    type_id?: true;
    teacher_id?: true;
    implemented?: true;
    created_at?: true;
    updated_at?: true;
    nis?: true;
    description?: true;
};
export type ViolationsCountAggregateInputType = {
    id?: true;
    student_id?: true;
    type_id?: true;
    teacher_id?: true;
    implemented?: true;
    created_at?: true;
    updated_at?: true;
    nis?: true;
    description?: true;
    _all?: true;
};
export type ViolationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violations to aggregate.
     */
    where?: Prisma.violationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violations to fetch.
     */
    orderBy?: Prisma.violationsOrderByWithRelationInput | Prisma.violationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.violationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned violations
    **/
    _count?: true | ViolationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ViolationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ViolationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ViolationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ViolationsMaxAggregateInputType;
};
export type GetViolationsAggregateType<T extends ViolationsAggregateArgs> = {
    [P in keyof T & keyof AggregateViolations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateViolations[P]> : Prisma.GetScalarType<T[P], AggregateViolations[P]>;
};
export type violationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violationsWhereInput;
    orderBy?: Prisma.violationsOrderByWithAggregationInput | Prisma.violationsOrderByWithAggregationInput[];
    by: Prisma.ViolationsScalarFieldEnum[] | Prisma.ViolationsScalarFieldEnum;
    having?: Prisma.violationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ViolationsCountAggregateInputType | true;
    _avg?: ViolationsAvgAggregateInputType;
    _sum?: ViolationsSumAggregateInputType;
    _min?: ViolationsMinAggregateInputType;
    _max?: ViolationsMaxAggregateInputType;
};
export type ViolationsGroupByOutputType = {
    id: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at: Date | null;
    updated_at: Date | null;
    nis: string;
    description: string;
    _count: ViolationsCountAggregateOutputType | null;
    _avg: ViolationsAvgAggregateOutputType | null;
    _sum: ViolationsSumAggregateOutputType | null;
    _min: ViolationsMinAggregateOutputType | null;
    _max: ViolationsMaxAggregateOutputType | null;
};
type GetViolationsGroupByPayload<T extends violationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ViolationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ViolationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ViolationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ViolationsGroupByOutputType[P]>;
}>>;
export type violationsWhereInput = {
    AND?: Prisma.violationsWhereInput | Prisma.violationsWhereInput[];
    OR?: Prisma.violationsWhereInput[];
    NOT?: Prisma.violationsWhereInput | Prisma.violationsWhereInput[];
    id?: Prisma.IntFilter<"violations"> | number;
    student_id?: Prisma.IntFilter<"violations"> | number;
    type_id?: Prisma.IntFilter<"violations"> | number;
    teacher_id?: Prisma.IntFilter<"violations"> | number;
    implemented?: Prisma.BoolFilter<"violations"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    nis?: Prisma.StringFilter<"violations"> | string;
    description?: Prisma.StringFilter<"violations"> | string;
    detail_students?: Prisma.XOR<Prisma.Detail_studentsScalarRelationFilter, Prisma.detail_studentsWhereInput>;
    violation_type?: Prisma.XOR<Prisma.Violation_typeScalarRelationFilter, Prisma.violation_typeWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
};
export type violationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    implemented?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    detail_students?: Prisma.detail_studentsOrderByWithRelationInput;
    violation_type?: Prisma.violation_typeOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    student?: Prisma.studentsOrderByWithRelationInput;
};
export type violationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.violationsWhereInput | Prisma.violationsWhereInput[];
    OR?: Prisma.violationsWhereInput[];
    NOT?: Prisma.violationsWhereInput | Prisma.violationsWhereInput[];
    student_id?: Prisma.IntFilter<"violations"> | number;
    type_id?: Prisma.IntFilter<"violations"> | number;
    teacher_id?: Prisma.IntFilter<"violations"> | number;
    implemented?: Prisma.BoolFilter<"violations"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    nis?: Prisma.StringFilter<"violations"> | string;
    description?: Prisma.StringFilter<"violations"> | string;
    detail_students?: Prisma.XOR<Prisma.Detail_studentsScalarRelationFilter, Prisma.detail_studentsWhereInput>;
    violation_type?: Prisma.XOR<Prisma.Violation_typeScalarRelationFilter, Prisma.violation_typeWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
}, "id">;
export type violationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    implemented?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    _count?: Prisma.violationsCountOrderByAggregateInput;
    _avg?: Prisma.violationsAvgOrderByAggregateInput;
    _max?: Prisma.violationsMaxOrderByAggregateInput;
    _min?: Prisma.violationsMinOrderByAggregateInput;
    _sum?: Prisma.violationsSumOrderByAggregateInput;
};
export type violationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.violationsScalarWhereWithAggregatesInput | Prisma.violationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.violationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.violationsScalarWhereWithAggregatesInput | Prisma.violationsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"violations"> | number;
    student_id?: Prisma.IntWithAggregatesFilter<"violations"> | number;
    type_id?: Prisma.IntWithAggregatesFilter<"violations"> | number;
    teacher_id?: Prisma.IntWithAggregatesFilter<"violations"> | number;
    implemented?: Prisma.BoolWithAggregatesFilter<"violations"> | boolean;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"violations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"violations"> | Date | string | null;
    nis?: Prisma.StringWithAggregatesFilter<"violations"> | string;
    description?: Prisma.StringWithAggregatesFilter<"violations"> | string;
};
export type violationsCreateInput = {
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
    detail_students: Prisma.detail_studentsCreateNestedOneWithoutViolationsInput;
    violation_type: Prisma.violation_typeCreateNestedOneWithoutViolationsInput;
    users: Prisma.usersCreateNestedOneWithoutViolationsInput;
    student: Prisma.studentsCreateNestedOneWithoutViolationsInput;
};
export type violationsUncheckedCreateInput = {
    id?: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsUpdateInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateOneRequiredWithoutViolationsNestedInput;
    violation_type?: Prisma.violation_typeUpdateOneRequiredWithoutViolationsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutViolationsNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutViolationsNestedInput;
};
export type violationsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsCreateManyInput = {
    id?: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsUpdateManyMutationInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ViolationsListRelationFilter = {
    every?: Prisma.violationsWhereInput;
    some?: Prisma.violationsWhereInput;
    none?: Prisma.violationsWhereInput;
};
export type violationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type violationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    implemented?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type violationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
};
export type violationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    implemented?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type violationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
    implemented?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type violationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_id?: Prisma.SortOrder;
    type_id?: Prisma.SortOrder;
    teacher_id?: Prisma.SortOrder;
};
export type violationsCreateNestedManyWithoutDetail_studentsInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput> | Prisma.violationsCreateWithoutDetail_studentsInput[] | Prisma.violationsUncheckedCreateWithoutDetail_studentsInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutDetail_studentsInput | Prisma.violationsCreateOrConnectWithoutDetail_studentsInput[];
    createMany?: Prisma.violationsCreateManyDetail_studentsInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUncheckedCreateNestedManyWithoutDetail_studentsInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput> | Prisma.violationsCreateWithoutDetail_studentsInput[] | Prisma.violationsUncheckedCreateWithoutDetail_studentsInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutDetail_studentsInput | Prisma.violationsCreateOrConnectWithoutDetail_studentsInput[];
    createMany?: Prisma.violationsCreateManyDetail_studentsInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUpdateManyWithoutDetail_studentsNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput> | Prisma.violationsCreateWithoutDetail_studentsInput[] | Prisma.violationsUncheckedCreateWithoutDetail_studentsInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutDetail_studentsInput | Prisma.violationsCreateOrConnectWithoutDetail_studentsInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutDetail_studentsInput | Prisma.violationsUpsertWithWhereUniqueWithoutDetail_studentsInput[];
    createMany?: Prisma.violationsCreateManyDetail_studentsInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutDetail_studentsInput | Prisma.violationsUpdateWithWhereUniqueWithoutDetail_studentsInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutDetail_studentsInput | Prisma.violationsUpdateManyWithWhereWithoutDetail_studentsInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsUncheckedUpdateManyWithoutDetail_studentsNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput> | Prisma.violationsCreateWithoutDetail_studentsInput[] | Prisma.violationsUncheckedCreateWithoutDetail_studentsInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutDetail_studentsInput | Prisma.violationsCreateOrConnectWithoutDetail_studentsInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutDetail_studentsInput | Prisma.violationsUpsertWithWhereUniqueWithoutDetail_studentsInput[];
    createMany?: Prisma.violationsCreateManyDetail_studentsInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutDetail_studentsInput | Prisma.violationsUpdateWithWhereUniqueWithoutDetail_studentsInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutDetail_studentsInput | Prisma.violationsUpdateManyWithWhereWithoutDetail_studentsInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput> | Prisma.violationsCreateWithoutStudentInput[] | Prisma.violationsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutStudentInput | Prisma.violationsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.violationsCreateManyStudentInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput> | Prisma.violationsCreateWithoutStudentInput[] | Prisma.violationsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutStudentInput | Prisma.violationsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.violationsCreateManyStudentInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput> | Prisma.violationsCreateWithoutStudentInput[] | Prisma.violationsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutStudentInput | Prisma.violationsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutStudentInput | Prisma.violationsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.violationsCreateManyStudentInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutStudentInput | Prisma.violationsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutStudentInput | Prisma.violationsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput> | Prisma.violationsCreateWithoutStudentInput[] | Prisma.violationsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutStudentInput | Prisma.violationsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutStudentInput | Prisma.violationsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.violationsCreateManyStudentInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutStudentInput | Prisma.violationsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutStudentInput | Prisma.violationsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput> | Prisma.violationsCreateWithoutUsersInput[] | Prisma.violationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutUsersInput | Prisma.violationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.violationsCreateManyUsersInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput> | Prisma.violationsCreateWithoutUsersInput[] | Prisma.violationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutUsersInput | Prisma.violationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.violationsCreateManyUsersInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput> | Prisma.violationsCreateWithoutUsersInput[] | Prisma.violationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutUsersInput | Prisma.violationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.violationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.violationsCreateManyUsersInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.violationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutUsersInput | Prisma.violationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput> | Prisma.violationsCreateWithoutUsersInput[] | Prisma.violationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutUsersInput | Prisma.violationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.violationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.violationsCreateManyUsersInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.violationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutUsersInput | Prisma.violationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsCreateNestedManyWithoutViolation_typeInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput> | Prisma.violationsCreateWithoutViolation_typeInput[] | Prisma.violationsUncheckedCreateWithoutViolation_typeInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutViolation_typeInput | Prisma.violationsCreateOrConnectWithoutViolation_typeInput[];
    createMany?: Prisma.violationsCreateManyViolation_typeInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUncheckedCreateNestedManyWithoutViolation_typeInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput> | Prisma.violationsCreateWithoutViolation_typeInput[] | Prisma.violationsUncheckedCreateWithoutViolation_typeInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutViolation_typeInput | Prisma.violationsCreateOrConnectWithoutViolation_typeInput[];
    createMany?: Prisma.violationsCreateManyViolation_typeInputEnvelope;
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
};
export type violationsUpdateManyWithoutViolation_typeNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput> | Prisma.violationsCreateWithoutViolation_typeInput[] | Prisma.violationsUncheckedCreateWithoutViolation_typeInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutViolation_typeInput | Prisma.violationsCreateOrConnectWithoutViolation_typeInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutViolation_typeInput | Prisma.violationsUpsertWithWhereUniqueWithoutViolation_typeInput[];
    createMany?: Prisma.violationsCreateManyViolation_typeInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutViolation_typeInput | Prisma.violationsUpdateWithWhereUniqueWithoutViolation_typeInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutViolation_typeInput | Prisma.violationsUpdateManyWithWhereWithoutViolation_typeInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type violationsUncheckedUpdateManyWithoutViolation_typeNestedInput = {
    create?: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput> | Prisma.violationsCreateWithoutViolation_typeInput[] | Prisma.violationsUncheckedCreateWithoutViolation_typeInput[];
    connectOrCreate?: Prisma.violationsCreateOrConnectWithoutViolation_typeInput | Prisma.violationsCreateOrConnectWithoutViolation_typeInput[];
    upsert?: Prisma.violationsUpsertWithWhereUniqueWithoutViolation_typeInput | Prisma.violationsUpsertWithWhereUniqueWithoutViolation_typeInput[];
    createMany?: Prisma.violationsCreateManyViolation_typeInputEnvelope;
    set?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    disconnect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    delete?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    connect?: Prisma.violationsWhereUniqueInput | Prisma.violationsWhereUniqueInput[];
    update?: Prisma.violationsUpdateWithWhereUniqueWithoutViolation_typeInput | Prisma.violationsUpdateWithWhereUniqueWithoutViolation_typeInput[];
    updateMany?: Prisma.violationsUpdateManyWithWhereWithoutViolation_typeInput | Prisma.violationsUpdateManyWithWhereWithoutViolation_typeInput[];
    deleteMany?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type violationsCreateWithoutDetail_studentsInput = {
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
    violation_type: Prisma.violation_typeCreateNestedOneWithoutViolationsInput;
    users: Prisma.usersCreateNestedOneWithoutViolationsInput;
    student: Prisma.studentsCreateNestedOneWithoutViolationsInput;
};
export type violationsUncheckedCreateWithoutDetail_studentsInput = {
    id?: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsCreateOrConnectWithoutDetail_studentsInput = {
    where: Prisma.violationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput>;
};
export type violationsCreateManyDetail_studentsInputEnvelope = {
    data: Prisma.violationsCreateManyDetail_studentsInput | Prisma.violationsCreateManyDetail_studentsInput[];
    skipDuplicates?: boolean;
};
export type violationsUpsertWithWhereUniqueWithoutDetail_studentsInput = {
    where: Prisma.violationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.violationsUpdateWithoutDetail_studentsInput, Prisma.violationsUncheckedUpdateWithoutDetail_studentsInput>;
    create: Prisma.XOR<Prisma.violationsCreateWithoutDetail_studentsInput, Prisma.violationsUncheckedCreateWithoutDetail_studentsInput>;
};
export type violationsUpdateWithWhereUniqueWithoutDetail_studentsInput = {
    where: Prisma.violationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.violationsUpdateWithoutDetail_studentsInput, Prisma.violationsUncheckedUpdateWithoutDetail_studentsInput>;
};
export type violationsUpdateManyWithWhereWithoutDetail_studentsInput = {
    where: Prisma.violationsScalarWhereInput;
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyWithoutDetail_studentsInput>;
};
export type violationsScalarWhereInput = {
    AND?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
    OR?: Prisma.violationsScalarWhereInput[];
    NOT?: Prisma.violationsScalarWhereInput | Prisma.violationsScalarWhereInput[];
    id?: Prisma.IntFilter<"violations"> | number;
    student_id?: Prisma.IntFilter<"violations"> | number;
    type_id?: Prisma.IntFilter<"violations"> | number;
    teacher_id?: Prisma.IntFilter<"violations"> | number;
    implemented?: Prisma.BoolFilter<"violations"> | boolean;
    created_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"violations"> | Date | string | null;
    nis?: Prisma.StringFilter<"violations"> | string;
    description?: Prisma.StringFilter<"violations"> | string;
};
export type violationsCreateWithoutStudentInput = {
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
    detail_students: Prisma.detail_studentsCreateNestedOneWithoutViolationsInput;
    violation_type: Prisma.violation_typeCreateNestedOneWithoutViolationsInput;
    users: Prisma.usersCreateNestedOneWithoutViolationsInput;
};
export type violationsUncheckedCreateWithoutStudentInput = {
    id?: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
};
export type violationsCreateOrConnectWithoutStudentInput = {
    where: Prisma.violationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput>;
};
export type violationsCreateManyStudentInputEnvelope = {
    data: Prisma.violationsCreateManyStudentInput | Prisma.violationsCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type violationsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.violationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.violationsUpdateWithoutStudentInput, Prisma.violationsUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.violationsCreateWithoutStudentInput, Prisma.violationsUncheckedCreateWithoutStudentInput>;
};
export type violationsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.violationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.violationsUpdateWithoutStudentInput, Prisma.violationsUncheckedUpdateWithoutStudentInput>;
};
export type violationsUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.violationsScalarWhereInput;
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyWithoutStudentInput>;
};
export type violationsCreateWithoutUsersInput = {
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
    detail_students: Prisma.detail_studentsCreateNestedOneWithoutViolationsInput;
    violation_type: Prisma.violation_typeCreateNestedOneWithoutViolationsInput;
    student: Prisma.studentsCreateNestedOneWithoutViolationsInput;
};
export type violationsUncheckedCreateWithoutUsersInput = {
    id?: number;
    student_id: number;
    type_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsCreateOrConnectWithoutUsersInput = {
    where: Prisma.violationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput>;
};
export type violationsCreateManyUsersInputEnvelope = {
    data: Prisma.violationsCreateManyUsersInput | Prisma.violationsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type violationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.violationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.violationsUpdateWithoutUsersInput, Prisma.violationsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.violationsCreateWithoutUsersInput, Prisma.violationsUncheckedCreateWithoutUsersInput>;
};
export type violationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.violationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.violationsUpdateWithoutUsersInput, Prisma.violationsUncheckedUpdateWithoutUsersInput>;
};
export type violationsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.violationsScalarWhereInput;
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyWithoutUsersInput>;
};
export type violationsCreateWithoutViolation_typeInput = {
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
    detail_students: Prisma.detail_studentsCreateNestedOneWithoutViolationsInput;
    users: Prisma.usersCreateNestedOneWithoutViolationsInput;
    student: Prisma.studentsCreateNestedOneWithoutViolationsInput;
};
export type violationsUncheckedCreateWithoutViolation_typeInput = {
    id?: number;
    student_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsCreateOrConnectWithoutViolation_typeInput = {
    where: Prisma.violationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput>;
};
export type violationsCreateManyViolation_typeInputEnvelope = {
    data: Prisma.violationsCreateManyViolation_typeInput | Prisma.violationsCreateManyViolation_typeInput[];
    skipDuplicates?: boolean;
};
export type violationsUpsertWithWhereUniqueWithoutViolation_typeInput = {
    where: Prisma.violationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.violationsUpdateWithoutViolation_typeInput, Prisma.violationsUncheckedUpdateWithoutViolation_typeInput>;
    create: Prisma.XOR<Prisma.violationsCreateWithoutViolation_typeInput, Prisma.violationsUncheckedCreateWithoutViolation_typeInput>;
};
export type violationsUpdateWithWhereUniqueWithoutViolation_typeInput = {
    where: Prisma.violationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.violationsUpdateWithoutViolation_typeInput, Prisma.violationsUncheckedUpdateWithoutViolation_typeInput>;
};
export type violationsUpdateManyWithWhereWithoutViolation_typeInput = {
    where: Prisma.violationsScalarWhereInput;
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyWithoutViolation_typeInput>;
};
export type violationsCreateManyDetail_studentsInput = {
    id?: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsUpdateWithoutDetail_studentsInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    violation_type?: Prisma.violation_typeUpdateOneRequiredWithoutViolationsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutViolationsNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutViolationsNestedInput;
};
export type violationsUncheckedUpdateWithoutDetail_studentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsUncheckedUpdateManyWithoutDetail_studentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsCreateManyStudentInput = {
    id?: number;
    student_id: number;
    type_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    description?: string;
};
export type violationsUpdateWithoutStudentInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateOneRequiredWithoutViolationsNestedInput;
    violation_type?: Prisma.violation_typeUpdateOneRequiredWithoutViolationsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutViolationsNestedInput;
};
export type violationsUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsCreateManyUsersInput = {
    id?: number;
    student_id: number;
    type_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsUpdateWithoutUsersInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateOneRequiredWithoutViolationsNestedInput;
    violation_type?: Prisma.violation_typeUpdateOneRequiredWithoutViolationsNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutViolationsNestedInput;
};
export type violationsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsCreateManyViolation_typeInput = {
    id?: number;
    student_id: number;
    teacher_id: number;
    implemented: boolean;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    nis: string;
    description?: string;
};
export type violationsUpdateWithoutViolation_typeInput = {
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateOneRequiredWithoutViolationsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutViolationsNestedInput;
    student?: Prisma.studentsUpdateOneRequiredWithoutViolationsNestedInput;
};
export type violationsUncheckedUpdateWithoutViolation_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsUncheckedUpdateManyWithoutViolation_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_id?: Prisma.IntFieldUpdateOperationsInput | number;
    implemented?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_id?: boolean;
    type_id?: boolean;
    teacher_id?: boolean;
    implemented?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    nis?: boolean;
    description?: boolean;
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violations"]>;
export type violationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_id?: boolean;
    type_id?: boolean;
    teacher_id?: boolean;
    implemented?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    nis?: boolean;
    description?: boolean;
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violations"]>;
export type violationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_id?: boolean;
    type_id?: boolean;
    teacher_id?: boolean;
    implemented?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    nis?: boolean;
    description?: boolean;
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violations"]>;
export type violationsSelectScalar = {
    id?: boolean;
    student_id?: boolean;
    type_id?: boolean;
    teacher_id?: boolean;
    implemented?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    nis?: boolean;
    description?: boolean;
};
export type violationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "student_id" | "type_id" | "teacher_id" | "implemented" | "created_at" | "updated_at" | "nis" | "description", ExtArgs["result"]["violations"]>;
export type violationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type violationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type violationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.detail_studentsDefaultArgs<ExtArgs>;
    violation_type?: boolean | Prisma.violation_typeDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type $violationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "violations";
    objects: {
        detail_students: Prisma.$detail_studentsPayload<ExtArgs>;
        violation_type: Prisma.$violation_typePayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
        student: Prisma.$studentsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        student_id: number;
        type_id: number;
        teacher_id: number;
        implemented: boolean;
        created_at: Date | null;
        updated_at: Date | null;
        nis: string;
        description: string;
    }, ExtArgs["result"]["violations"]>;
    composites: {};
};
export type violationsGetPayload<S extends boolean | null | undefined | violationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$violationsPayload, S>;
export type violationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<violationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ViolationsCountAggregateInputType | true;
};
export interface violationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['violations'];
        meta: {
            name: 'violations';
        };
    };
    /**
     * Find zero or one Violations that matches the filter.
     * @param {violationsFindUniqueArgs} args - Arguments to find a Violations
     * @example
     * // Get one Violations
     * const violations = await prisma.violations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends violationsFindUniqueArgs>(args: Prisma.SelectSubset<T, violationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Violations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {violationsFindUniqueOrThrowArgs} args - Arguments to find a Violations
     * @example
     * // Get one Violations
     * const violations = await prisma.violations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends violationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, violationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsFindFirstArgs} args - Arguments to find a Violations
     * @example
     * // Get one Violations
     * const violations = await prisma.violations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends violationsFindFirstArgs>(args?: Prisma.SelectSubset<T, violationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsFindFirstOrThrowArgs} args - Arguments to find a Violations
     * @example
     * // Get one Violations
     * const violations = await prisma.violations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends violationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, violationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Violations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Violations
     * const violations = await prisma.violations.findMany()
     *
     * // Get first 10 Violations
     * const violations = await prisma.violations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const violationsWithIdOnly = await prisma.violations.findMany({ select: { id: true } })
     *
     */
    findMany<T extends violationsFindManyArgs>(args?: Prisma.SelectSubset<T, violationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Violations.
     * @param {violationsCreateArgs} args - Arguments to create a Violations.
     * @example
     * // Create one Violations
     * const Violations = await prisma.violations.create({
     *   data: {
     *     // ... data to create a Violations
     *   }
     * })
     *
     */
    create<T extends violationsCreateArgs>(args: Prisma.SelectSubset<T, violationsCreateArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Violations.
     * @param {violationsCreateManyArgs} args - Arguments to create many Violations.
     * @example
     * // Create many Violations
     * const violations = await prisma.violations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends violationsCreateManyArgs>(args?: Prisma.SelectSubset<T, violationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Violations and returns the data saved in the database.
     * @param {violationsCreateManyAndReturnArgs} args - Arguments to create many Violations.
     * @example
     * // Create many Violations
     * const violations = await prisma.violations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Violations and only return the `id`
     * const violationsWithIdOnly = await prisma.violations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends violationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, violationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Violations.
     * @param {violationsDeleteArgs} args - Arguments to delete one Violations.
     * @example
     * // Delete one Violations
     * const Violations = await prisma.violations.delete({
     *   where: {
     *     // ... filter to delete one Violations
     *   }
     * })
     *
     */
    delete<T extends violationsDeleteArgs>(args: Prisma.SelectSubset<T, violationsDeleteArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Violations.
     * @param {violationsUpdateArgs} args - Arguments to update one Violations.
     * @example
     * // Update one Violations
     * const violations = await prisma.violations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends violationsUpdateArgs>(args: Prisma.SelectSubset<T, violationsUpdateArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Violations.
     * @param {violationsDeleteManyArgs} args - Arguments to filter Violations to delete.
     * @example
     * // Delete a few Violations
     * const { count } = await prisma.violations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends violationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, violationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Violations
     * const violations = await prisma.violations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends violationsUpdateManyArgs>(args: Prisma.SelectSubset<T, violationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violations and returns the data updated in the database.
     * @param {violationsUpdateManyAndReturnArgs} args - Arguments to update many Violations.
     * @example
     * // Update many Violations
     * const violations = await prisma.violations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Violations and only return the `id`
     * const violationsWithIdOnly = await prisma.violations.updateManyAndReturn({
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
    updateManyAndReturn<T extends violationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, violationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Violations.
     * @param {violationsUpsertArgs} args - Arguments to update or create a Violations.
     * @example
     * // Update or create a Violations
     * const violations = await prisma.violations.upsert({
     *   create: {
     *     // ... data to create a Violations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Violations we want to update
     *   }
     * })
     */
    upsert<T extends violationsUpsertArgs>(args: Prisma.SelectSubset<T, violationsUpsertArgs<ExtArgs>>): Prisma.Prisma__violationsClient<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsCountArgs} args - Arguments to filter Violations to count.
     * @example
     * // Count the number of Violations
     * const count = await prisma.violations.count({
     *   where: {
     *     // ... the filter for the Violations we want to count
     *   }
     * })
    **/
    count<T extends violationsCountArgs>(args?: Prisma.Subset<T, violationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ViolationsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViolationsAggregateArgs>(args: Prisma.Subset<T, ViolationsAggregateArgs>): Prisma.PrismaPromise<GetViolationsAggregateType<T>>;
    /**
     * Group by Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violationsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends violationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: violationsGroupByArgs['orderBy'];
    } : {
        orderBy?: violationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, violationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the violations model
     */
    readonly fields: violationsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for violations.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__violationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detail_students<T extends Prisma.detail_studentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detail_studentsDefaultArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    violation_type<T extends Prisma.violation_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.violation_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the violations model
 */
export interface violationsFieldRefs {
    readonly id: Prisma.FieldRef<"violations", 'Int'>;
    readonly student_id: Prisma.FieldRef<"violations", 'Int'>;
    readonly type_id: Prisma.FieldRef<"violations", 'Int'>;
    readonly teacher_id: Prisma.FieldRef<"violations", 'Int'>;
    readonly implemented: Prisma.FieldRef<"violations", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"violations", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"violations", 'DateTime'>;
    readonly nis: Prisma.FieldRef<"violations", 'String'>;
    readonly description: Prisma.FieldRef<"violations", 'String'>;
}
/**
 * violations findUnique
 */
export type violationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violations to fetch.
     */
    where: Prisma.violationsWhereUniqueInput;
};
/**
 * violations findUniqueOrThrow
 */
export type violationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violations to fetch.
     */
    where: Prisma.violationsWhereUniqueInput;
};
/**
 * violations findFirst
 */
export type violationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violations to fetch.
     */
    where?: Prisma.violationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violations to fetch.
     */
    orderBy?: Prisma.violationsOrderByWithRelationInput | Prisma.violationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violations.
     */
    cursor?: Prisma.violationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violations.
     */
    distinct?: Prisma.ViolationsScalarFieldEnum | Prisma.ViolationsScalarFieldEnum[];
};
/**
 * violations findFirstOrThrow
 */
export type violationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violations to fetch.
     */
    where?: Prisma.violationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violations to fetch.
     */
    orderBy?: Prisma.violationsOrderByWithRelationInput | Prisma.violationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violations.
     */
    cursor?: Prisma.violationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violations.
     */
    distinct?: Prisma.ViolationsScalarFieldEnum | Prisma.ViolationsScalarFieldEnum[];
};
/**
 * violations findMany
 */
export type violationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violations to fetch.
     */
    where?: Prisma.violationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violations to fetch.
     */
    orderBy?: Prisma.violationsOrderByWithRelationInput | Prisma.violationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing violations.
     */
    cursor?: Prisma.violationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violations.
     */
    skip?: number;
    distinct?: Prisma.ViolationsScalarFieldEnum | Prisma.ViolationsScalarFieldEnum[];
};
/**
 * violations create
 */
export type violationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a violations.
     */
    data: Prisma.XOR<Prisma.violationsCreateInput, Prisma.violationsUncheckedCreateInput>;
};
/**
 * violations createMany
 */
export type violationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many violations.
     */
    data: Prisma.violationsCreateManyInput | Prisma.violationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violations createManyAndReturn
 */
export type violationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violations
     */
    select?: Prisma.violationsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violations
     */
    omit?: Prisma.violationsOmit<ExtArgs> | null;
    /**
     * The data used to create many violations.
     */
    data: Prisma.violationsCreateManyInput | Prisma.violationsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * violations update
 */
export type violationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a violations.
     */
    data: Prisma.XOR<Prisma.violationsUpdateInput, Prisma.violationsUncheckedUpdateInput>;
    /**
     * Choose, which violations to update.
     */
    where: Prisma.violationsWhereUniqueInput;
};
/**
 * violations updateMany
 */
export type violationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update violations.
     */
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyInput>;
    /**
     * Filter which violations to update
     */
    where?: Prisma.violationsWhereInput;
    /**
     * Limit how many violations to update.
     */
    limit?: number;
};
/**
 * violations updateManyAndReturn
 */
export type violationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violations
     */
    select?: Prisma.violationsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violations
     */
    omit?: Prisma.violationsOmit<ExtArgs> | null;
    /**
     * The data used to update violations.
     */
    data: Prisma.XOR<Prisma.violationsUpdateManyMutationInput, Prisma.violationsUncheckedUpdateManyInput>;
    /**
     * Filter which violations to update
     */
    where?: Prisma.violationsWhereInput;
    /**
     * Limit how many violations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * violations upsert
 */
export type violationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the violations to update in case it exists.
     */
    where: Prisma.violationsWhereUniqueInput;
    /**
     * In case the violations found by the `where` argument doesn't exist, create a new violations with this data.
     */
    create: Prisma.XOR<Prisma.violationsCreateInput, Prisma.violationsUncheckedCreateInput>;
    /**
     * In case the violations was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.violationsUpdateInput, Prisma.violationsUncheckedUpdateInput>;
};
/**
 * violations delete
 */
export type violationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which violations to delete.
     */
    where: Prisma.violationsWhereUniqueInput;
};
/**
 * violations deleteMany
 */
export type violationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violations to delete
     */
    where?: Prisma.violationsWhereInput;
    /**
     * Limit how many violations to delete.
     */
    limit?: number;
};
/**
 * violations without action
 */
export type violationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=violations.d.ts.map