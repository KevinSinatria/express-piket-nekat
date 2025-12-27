import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model student_permit_details
 *
 */
export type student_permit_detailsModel = runtime.Types.Result.DefaultSelection<Prisma.$student_permit_detailsPayload>;
export type AggregateStudent_permit_details = {
    _count: Student_permit_detailsCountAggregateOutputType | null;
    _avg: Student_permit_detailsAvgAggregateOutputType | null;
    _sum: Student_permit_detailsSumAggregateOutputType | null;
    _min: Student_permit_detailsMinAggregateOutputType | null;
    _max: Student_permit_detailsMaxAggregateOutputType | null;
};
export type Student_permit_detailsAvgAggregateOutputType = {
    id: number | null;
    student_permit_id: number | null;
};
export type Student_permit_detailsSumAggregateOutputType = {
    id: number | null;
    student_permit_id: number | null;
};
export type Student_permit_detailsMinAggregateOutputType = {
    id: number | null;
    student_permit_id: number | null;
    student_nis: string | null;
};
export type Student_permit_detailsMaxAggregateOutputType = {
    id: number | null;
    student_permit_id: number | null;
    student_nis: string | null;
};
export type Student_permit_detailsCountAggregateOutputType = {
    id: number;
    student_permit_id: number;
    student_nis: number;
    _all: number;
};
export type Student_permit_detailsAvgAggregateInputType = {
    id?: true;
    student_permit_id?: true;
};
export type Student_permit_detailsSumAggregateInputType = {
    id?: true;
    student_permit_id?: true;
};
export type Student_permit_detailsMinAggregateInputType = {
    id?: true;
    student_permit_id?: true;
    student_nis?: true;
};
export type Student_permit_detailsMaxAggregateInputType = {
    id?: true;
    student_permit_id?: true;
    student_nis?: true;
};
export type Student_permit_detailsCountAggregateInputType = {
    id?: true;
    student_permit_id?: true;
    student_nis?: true;
    _all?: true;
};
export type Student_permit_detailsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which student_permit_details to aggregate.
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permit_details to fetch.
     */
    orderBy?: Prisma.student_permit_detailsOrderByWithRelationInput | Prisma.student_permit_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.student_permit_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permit_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permit_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned student_permit_details
    **/
    _count?: true | Student_permit_detailsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Student_permit_detailsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Student_permit_detailsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Student_permit_detailsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Student_permit_detailsMaxAggregateInputType;
};
export type GetStudent_permit_detailsAggregateType<T extends Student_permit_detailsAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent_permit_details]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent_permit_details[P]> : Prisma.GetScalarType<T[P], AggregateStudent_permit_details[P]>;
};
export type student_permit_detailsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.student_permit_detailsWhereInput;
    orderBy?: Prisma.student_permit_detailsOrderByWithAggregationInput | Prisma.student_permit_detailsOrderByWithAggregationInput[];
    by: Prisma.Student_permit_detailsScalarFieldEnum[] | Prisma.Student_permit_detailsScalarFieldEnum;
    having?: Prisma.student_permit_detailsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Student_permit_detailsCountAggregateInputType | true;
    _avg?: Student_permit_detailsAvgAggregateInputType;
    _sum?: Student_permit_detailsSumAggregateInputType;
    _min?: Student_permit_detailsMinAggregateInputType;
    _max?: Student_permit_detailsMaxAggregateInputType;
};
export type Student_permit_detailsGroupByOutputType = {
    id: number;
    student_permit_id: number;
    student_nis: string;
    _count: Student_permit_detailsCountAggregateOutputType | null;
    _avg: Student_permit_detailsAvgAggregateOutputType | null;
    _sum: Student_permit_detailsSumAggregateOutputType | null;
    _min: Student_permit_detailsMinAggregateOutputType | null;
    _max: Student_permit_detailsMaxAggregateOutputType | null;
};
type GetStudent_permit_detailsGroupByPayload<T extends student_permit_detailsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Student_permit_detailsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Student_permit_detailsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Student_permit_detailsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Student_permit_detailsGroupByOutputType[P]>;
}>>;
export type student_permit_detailsWhereInput = {
    AND?: Prisma.student_permit_detailsWhereInput | Prisma.student_permit_detailsWhereInput[];
    OR?: Prisma.student_permit_detailsWhereInput[];
    NOT?: Prisma.student_permit_detailsWhereInput | Prisma.student_permit_detailsWhereInput[];
    id?: Prisma.IntFilter<"student_permit_details"> | number;
    student_permit_id?: Prisma.IntFilter<"student_permit_details"> | number;
    student_nis?: Prisma.StringFilter<"student_permit_details"> | string;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
    student_permit?: Prisma.XOR<Prisma.Student_permitsScalarRelationFilter, Prisma.student_permitsWhereInput>;
};
export type student_permit_detailsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    student?: Prisma.studentsOrderByWithRelationInput;
    student_permit?: Prisma.student_permitsOrderByWithRelationInput;
};
export type student_permit_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.student_permit_detailsWhereInput | Prisma.student_permit_detailsWhereInput[];
    OR?: Prisma.student_permit_detailsWhereInput[];
    NOT?: Prisma.student_permit_detailsWhereInput | Prisma.student_permit_detailsWhereInput[];
    student_permit_id?: Prisma.IntFilter<"student_permit_details"> | number;
    student_nis?: Prisma.StringFilter<"student_permit_details"> | string;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
    student_permit?: Prisma.XOR<Prisma.Student_permitsScalarRelationFilter, Prisma.student_permitsWhereInput>;
}, "id">;
export type student_permit_detailsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
    _count?: Prisma.student_permit_detailsCountOrderByAggregateInput;
    _avg?: Prisma.student_permit_detailsAvgOrderByAggregateInput;
    _max?: Prisma.student_permit_detailsMaxOrderByAggregateInput;
    _min?: Prisma.student_permit_detailsMinOrderByAggregateInput;
    _sum?: Prisma.student_permit_detailsSumOrderByAggregateInput;
};
export type student_permit_detailsScalarWhereWithAggregatesInput = {
    AND?: Prisma.student_permit_detailsScalarWhereWithAggregatesInput | Prisma.student_permit_detailsScalarWhereWithAggregatesInput[];
    OR?: Prisma.student_permit_detailsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.student_permit_detailsScalarWhereWithAggregatesInput | Prisma.student_permit_detailsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"student_permit_details"> | number;
    student_permit_id?: Prisma.IntWithAggregatesFilter<"student_permit_details"> | number;
    student_nis?: Prisma.StringWithAggregatesFilter<"student_permit_details"> | string;
};
export type student_permit_detailsCreateInput = {
    student: Prisma.studentsCreateNestedOneWithoutStudentPermitDetailsInput;
    student_permit: Prisma.student_permitsCreateNestedOneWithoutStudent_permit_detailsInput;
};
export type student_permit_detailsUncheckedCreateInput = {
    id?: number;
    student_permit_id: number;
    student_nis: string;
};
export type student_permit_detailsUpdateInput = {
    student?: Prisma.studentsUpdateOneRequiredWithoutStudentPermitDetailsNestedInput;
    student_permit?: Prisma.student_permitsUpdateOneRequiredWithoutStudent_permit_detailsNestedInput;
};
export type student_permit_detailsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_permit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type student_permit_detailsCreateManyInput = {
    id?: number;
    student_permit_id: number;
    student_nis: string;
};
export type student_permit_detailsUpdateManyMutationInput = {};
export type student_permit_detailsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_permit_id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Student_permit_detailsListRelationFilter = {
    every?: Prisma.student_permit_detailsWhereInput;
    some?: Prisma.student_permit_detailsWhereInput;
    none?: Prisma.student_permit_detailsWhereInput;
};
export type student_permit_detailsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type student_permit_detailsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
};
export type student_permit_detailsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
};
export type student_permit_detailsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
};
export type student_permit_detailsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
    student_nis?: Prisma.SortOrder;
};
export type student_permit_detailsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    student_permit_id?: Prisma.SortOrder;
};
export type student_permit_detailsCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput> | Prisma.student_permit_detailsCreateWithoutStudentInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudentInputEnvelope;
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
};
export type student_permit_detailsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput> | Prisma.student_permit_detailsCreateWithoutStudentInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudentInputEnvelope;
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
};
export type student_permit_detailsUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput> | Prisma.student_permit_detailsCreateWithoutStudentInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudentInput | Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudentInputEnvelope;
    set?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    disconnect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    delete?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    update?: Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudentInput | Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudentInput | Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
};
export type student_permit_detailsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput> | Prisma.student_permit_detailsCreateWithoutStudentInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudentInput | Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudentInputEnvelope;
    set?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    disconnect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    delete?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    update?: Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudentInput | Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudentInput | Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
};
export type student_permit_detailsCreateNestedManyWithoutStudent_permitInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput> | Prisma.student_permit_detailsCreateWithoutStudent_permitInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudent_permitInputEnvelope;
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
};
export type student_permit_detailsUncheckedCreateNestedManyWithoutStudent_permitInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput> | Prisma.student_permit_detailsCreateWithoutStudent_permitInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudent_permitInputEnvelope;
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
};
export type student_permit_detailsUpdateManyWithoutStudent_permitNestedInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput> | Prisma.student_permit_detailsCreateWithoutStudent_permitInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput[];
    upsert?: Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudent_permitInput | Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudent_permitInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudent_permitInputEnvelope;
    set?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    disconnect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    delete?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    update?: Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudent_permitInput | Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudent_permitInput[];
    updateMany?: Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudent_permitInput | Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudent_permitInput[];
    deleteMany?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
};
export type student_permit_detailsUncheckedUpdateManyWithoutStudent_permitNestedInput = {
    create?: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput> | Prisma.student_permit_detailsCreateWithoutStudent_permitInput[] | Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput[];
    connectOrCreate?: Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput | Prisma.student_permit_detailsCreateOrConnectWithoutStudent_permitInput[];
    upsert?: Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudent_permitInput | Prisma.student_permit_detailsUpsertWithWhereUniqueWithoutStudent_permitInput[];
    createMany?: Prisma.student_permit_detailsCreateManyStudent_permitInputEnvelope;
    set?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    disconnect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    delete?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    connect?: Prisma.student_permit_detailsWhereUniqueInput | Prisma.student_permit_detailsWhereUniqueInput[];
    update?: Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudent_permitInput | Prisma.student_permit_detailsUpdateWithWhereUniqueWithoutStudent_permitInput[];
    updateMany?: Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudent_permitInput | Prisma.student_permit_detailsUpdateManyWithWhereWithoutStudent_permitInput[];
    deleteMany?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
};
export type student_permit_detailsCreateWithoutStudentInput = {
    student_permit: Prisma.student_permitsCreateNestedOneWithoutStudent_permit_detailsInput;
};
export type student_permit_detailsUncheckedCreateWithoutStudentInput = {
    id?: number;
    student_permit_id: number;
};
export type student_permit_detailsCreateOrConnectWithoutStudentInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput>;
};
export type student_permit_detailsCreateManyStudentInputEnvelope = {
    data: Prisma.student_permit_detailsCreateManyStudentInput | Prisma.student_permit_detailsCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type student_permit_detailsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.student_permit_detailsUpdateWithoutStudentInput, Prisma.student_permit_detailsUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudentInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudentInput>;
};
export type student_permit_detailsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateWithoutStudentInput, Prisma.student_permit_detailsUncheckedUpdateWithoutStudentInput>;
};
export type student_permit_detailsUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.student_permit_detailsScalarWhereInput;
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateManyMutationInput, Prisma.student_permit_detailsUncheckedUpdateManyWithoutStudentInput>;
};
export type student_permit_detailsScalarWhereInput = {
    AND?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
    OR?: Prisma.student_permit_detailsScalarWhereInput[];
    NOT?: Prisma.student_permit_detailsScalarWhereInput | Prisma.student_permit_detailsScalarWhereInput[];
    id?: Prisma.IntFilter<"student_permit_details"> | number;
    student_permit_id?: Prisma.IntFilter<"student_permit_details"> | number;
    student_nis?: Prisma.StringFilter<"student_permit_details"> | string;
};
export type student_permit_detailsCreateWithoutStudent_permitInput = {
    student: Prisma.studentsCreateNestedOneWithoutStudentPermitDetailsInput;
};
export type student_permit_detailsUncheckedCreateWithoutStudent_permitInput = {
    id?: number;
    student_nis: string;
};
export type student_permit_detailsCreateOrConnectWithoutStudent_permitInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    create: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput>;
};
export type student_permit_detailsCreateManyStudent_permitInputEnvelope = {
    data: Prisma.student_permit_detailsCreateManyStudent_permitInput | Prisma.student_permit_detailsCreateManyStudent_permitInput[];
    skipDuplicates?: boolean;
};
export type student_permit_detailsUpsertWithWhereUniqueWithoutStudent_permitInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    update: Prisma.XOR<Prisma.student_permit_detailsUpdateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedUpdateWithoutStudent_permitInput>;
    create: Prisma.XOR<Prisma.student_permit_detailsCreateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedCreateWithoutStudent_permitInput>;
};
export type student_permit_detailsUpdateWithWhereUniqueWithoutStudent_permitInput = {
    where: Prisma.student_permit_detailsWhereUniqueInput;
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateWithoutStudent_permitInput, Prisma.student_permit_detailsUncheckedUpdateWithoutStudent_permitInput>;
};
export type student_permit_detailsUpdateManyWithWhereWithoutStudent_permitInput = {
    where: Prisma.student_permit_detailsScalarWhereInput;
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateManyMutationInput, Prisma.student_permit_detailsUncheckedUpdateManyWithoutStudent_permitInput>;
};
export type student_permit_detailsCreateManyStudentInput = {
    id?: number;
    student_permit_id: number;
};
export type student_permit_detailsUpdateWithoutStudentInput = {
    student_permit?: Prisma.student_permitsUpdateOneRequiredWithoutStudent_permit_detailsNestedInput;
};
export type student_permit_detailsUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_permit_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permit_detailsUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_permit_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type student_permit_detailsCreateManyStudent_permitInput = {
    id?: number;
    student_nis: string;
};
export type student_permit_detailsUpdateWithoutStudent_permitInput = {
    student?: Prisma.studentsUpdateOneRequiredWithoutStudentPermitDetailsNestedInput;
};
export type student_permit_detailsUncheckedUpdateWithoutStudent_permitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type student_permit_detailsUncheckedUpdateManyWithoutStudent_permitInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    student_nis?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type student_permit_detailsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_permit_id?: boolean;
    student_nis?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permit_details"]>;
export type student_permit_detailsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_permit_id?: boolean;
    student_nis?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permit_details"]>;
export type student_permit_detailsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    student_permit_id?: boolean;
    student_nis?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student_permit_details"]>;
export type student_permit_detailsSelectScalar = {
    id?: boolean;
    student_permit_id?: boolean;
    student_nis?: boolean;
};
export type student_permit_detailsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "student_permit_id" | "student_nis", ExtArgs["result"]["student_permit_details"]>;
export type student_permit_detailsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
};
export type student_permit_detailsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
};
export type student_permit_detailsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    student_permit?: boolean | Prisma.student_permitsDefaultArgs<ExtArgs>;
};
export type $student_permit_detailsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "student_permit_details";
    objects: {
        student: Prisma.$studentsPayload<ExtArgs>;
        student_permit: Prisma.$student_permitsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        student_permit_id: number;
        student_nis: string;
    }, ExtArgs["result"]["student_permit_details"]>;
    composites: {};
};
export type student_permit_detailsGetPayload<S extends boolean | null | undefined | student_permit_detailsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload, S>;
export type student_permit_detailsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<student_permit_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Student_permit_detailsCountAggregateInputType | true;
};
export interface student_permit_detailsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['student_permit_details'];
        meta: {
            name: 'student_permit_details';
        };
    };
    /**
     * Find zero or one Student_permit_details that matches the filter.
     * @param {student_permit_detailsFindUniqueArgs} args - Arguments to find a Student_permit_details
     * @example
     * // Get one Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_permit_detailsFindUniqueArgs>(args: Prisma.SelectSubset<T, student_permit_detailsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Student_permit_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_permit_detailsFindUniqueOrThrowArgs} args - Arguments to find a Student_permit_details
     * @example
     * // Get one Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_permit_detailsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, student_permit_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student_permit_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsFindFirstArgs} args - Arguments to find a Student_permit_details
     * @example
     * // Get one Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_permit_detailsFindFirstArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsFindFirstArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Student_permit_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsFindFirstOrThrowArgs} args - Arguments to find a Student_permit_details
     * @example
     * // Get one Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_permit_detailsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Student_permit_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findMany()
     *
     * // Get first 10 Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const student_permit_detailsWithIdOnly = await prisma.student_permit_details.findMany({ select: { id: true } })
     *
     */
    findMany<T extends student_permit_detailsFindManyArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Student_permit_details.
     * @param {student_permit_detailsCreateArgs} args - Arguments to create a Student_permit_details.
     * @example
     * // Create one Student_permit_details
     * const Student_permit_details = await prisma.student_permit_details.create({
     *   data: {
     *     // ... data to create a Student_permit_details
     *   }
     * })
     *
     */
    create<T extends student_permit_detailsCreateArgs>(args: Prisma.SelectSubset<T, student_permit_detailsCreateArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Student_permit_details.
     * @param {student_permit_detailsCreateManyArgs} args - Arguments to create many Student_permit_details.
     * @example
     * // Create many Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends student_permit_detailsCreateManyArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Student_permit_details and returns the data saved in the database.
     * @param {student_permit_detailsCreateManyAndReturnArgs} args - Arguments to create many Student_permit_details.
     * @example
     * // Create many Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Student_permit_details and only return the `id`
     * const student_permit_detailsWithIdOnly = await prisma.student_permit_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends student_permit_detailsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Student_permit_details.
     * @param {student_permit_detailsDeleteArgs} args - Arguments to delete one Student_permit_details.
     * @example
     * // Delete one Student_permit_details
     * const Student_permit_details = await prisma.student_permit_details.delete({
     *   where: {
     *     // ... filter to delete one Student_permit_details
     *   }
     * })
     *
     */
    delete<T extends student_permit_detailsDeleteArgs>(args: Prisma.SelectSubset<T, student_permit_detailsDeleteArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Student_permit_details.
     * @param {student_permit_detailsUpdateArgs} args - Arguments to update one Student_permit_details.
     * @example
     * // Update one Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends student_permit_detailsUpdateArgs>(args: Prisma.SelectSubset<T, student_permit_detailsUpdateArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Student_permit_details.
     * @param {student_permit_detailsDeleteManyArgs} args - Arguments to filter Student_permit_details to delete.
     * @example
     * // Delete a few Student_permit_details
     * const { count } = await prisma.student_permit_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends student_permit_detailsDeleteManyArgs>(args?: Prisma.SelectSubset<T, student_permit_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Student_permit_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends student_permit_detailsUpdateManyArgs>(args: Prisma.SelectSubset<T, student_permit_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Student_permit_details and returns the data updated in the database.
     * @param {student_permit_detailsUpdateManyAndReturnArgs} args - Arguments to update many Student_permit_details.
     * @example
     * // Update many Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Student_permit_details and only return the `id`
     * const student_permit_detailsWithIdOnly = await prisma.student_permit_details.updateManyAndReturn({
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
    updateManyAndReturn<T extends student_permit_detailsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, student_permit_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Student_permit_details.
     * @param {student_permit_detailsUpsertArgs} args - Arguments to update or create a Student_permit_details.
     * @example
     * // Update or create a Student_permit_details
     * const student_permit_details = await prisma.student_permit_details.upsert({
     *   create: {
     *     // ... data to create a Student_permit_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_permit_details we want to update
     *   }
     * })
     */
    upsert<T extends student_permit_detailsUpsertArgs>(args: Prisma.SelectSubset<T, student_permit_detailsUpsertArgs<ExtArgs>>): Prisma.Prisma__student_permit_detailsClient<runtime.Types.Result.GetResult<Prisma.$student_permit_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Student_permit_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsCountArgs} args - Arguments to filter Student_permit_details to count.
     * @example
     * // Count the number of Student_permit_details
     * const count = await prisma.student_permit_details.count({
     *   where: {
     *     // ... the filter for the Student_permit_details we want to count
     *   }
     * })
    **/
    count<T extends student_permit_detailsCountArgs>(args?: Prisma.Subset<T, student_permit_detailsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Student_permit_detailsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Student_permit_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_permit_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Student_permit_detailsAggregateArgs>(args: Prisma.Subset<T, Student_permit_detailsAggregateArgs>): Prisma.PrismaPromise<GetStudent_permit_detailsAggregateType<T>>;
    /**
     * Group by Student_permit_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_permit_detailsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends student_permit_detailsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: student_permit_detailsGroupByArgs['orderBy'];
    } : {
        orderBy?: student_permit_detailsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, student_permit_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_permit_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student_permit_details model
     */
    readonly fields: student_permit_detailsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for student_permit_details.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__student_permit_detailsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.studentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.studentsDefaultArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student_permit<T extends Prisma.student_permitsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.student_permitsDefaultArgs<ExtArgs>>): Prisma.Prisma__student_permitsClient<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the student_permit_details model
 */
export interface student_permit_detailsFieldRefs {
    readonly id: Prisma.FieldRef<"student_permit_details", 'Int'>;
    readonly student_permit_id: Prisma.FieldRef<"student_permit_details", 'Int'>;
    readonly student_nis: Prisma.FieldRef<"student_permit_details", 'String'>;
}
/**
 * student_permit_details findUnique
 */
export type student_permit_detailsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which student_permit_details to fetch.
     */
    where: Prisma.student_permit_detailsWhereUniqueInput;
};
/**
 * student_permit_details findUniqueOrThrow
 */
export type student_permit_detailsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which student_permit_details to fetch.
     */
    where: Prisma.student_permit_detailsWhereUniqueInput;
};
/**
 * student_permit_details findFirst
 */
export type student_permit_detailsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which student_permit_details to fetch.
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permit_details to fetch.
     */
    orderBy?: Prisma.student_permit_detailsOrderByWithRelationInput | Prisma.student_permit_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for student_permit_details.
     */
    cursor?: Prisma.student_permit_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permit_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permit_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of student_permit_details.
     */
    distinct?: Prisma.Student_permit_detailsScalarFieldEnum | Prisma.Student_permit_detailsScalarFieldEnum[];
};
/**
 * student_permit_details findFirstOrThrow
 */
export type student_permit_detailsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which student_permit_details to fetch.
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permit_details to fetch.
     */
    orderBy?: Prisma.student_permit_detailsOrderByWithRelationInput | Prisma.student_permit_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for student_permit_details.
     */
    cursor?: Prisma.student_permit_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permit_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permit_details.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of student_permit_details.
     */
    distinct?: Prisma.Student_permit_detailsScalarFieldEnum | Prisma.Student_permit_detailsScalarFieldEnum[];
};
/**
 * student_permit_details findMany
 */
export type student_permit_detailsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter, which student_permit_details to fetch.
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of student_permit_details to fetch.
     */
    orderBy?: Prisma.student_permit_detailsOrderByWithRelationInput | Prisma.student_permit_detailsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing student_permit_details.
     */
    cursor?: Prisma.student_permit_detailsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` student_permit_details from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` student_permit_details.
     */
    skip?: number;
    distinct?: Prisma.Student_permit_detailsScalarFieldEnum | Prisma.Student_permit_detailsScalarFieldEnum[];
};
/**
 * student_permit_details create
 */
export type student_permit_detailsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * The data needed to create a student_permit_details.
     */
    data: Prisma.XOR<Prisma.student_permit_detailsCreateInput, Prisma.student_permit_detailsUncheckedCreateInput>;
};
/**
 * student_permit_details createMany
 */
export type student_permit_detailsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_permit_details.
     */
    data: Prisma.student_permit_detailsCreateManyInput | Prisma.student_permit_detailsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * student_permit_details createManyAndReturn
 */
export type student_permit_detailsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * The data used to create many student_permit_details.
     */
    data: Prisma.student_permit_detailsCreateManyInput | Prisma.student_permit_detailsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * student_permit_details update
 */
export type student_permit_detailsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * The data needed to update a student_permit_details.
     */
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateInput, Prisma.student_permit_detailsUncheckedUpdateInput>;
    /**
     * Choose, which student_permit_details to update.
     */
    where: Prisma.student_permit_detailsWhereUniqueInput;
};
/**
 * student_permit_details updateMany
 */
export type student_permit_detailsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update student_permit_details.
     */
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateManyMutationInput, Prisma.student_permit_detailsUncheckedUpdateManyInput>;
    /**
     * Filter which student_permit_details to update
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * Limit how many student_permit_details to update.
     */
    limit?: number;
};
/**
 * student_permit_details updateManyAndReturn
 */
export type student_permit_detailsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * The data used to update student_permit_details.
     */
    data: Prisma.XOR<Prisma.student_permit_detailsUpdateManyMutationInput, Prisma.student_permit_detailsUncheckedUpdateManyInput>;
    /**
     * Filter which student_permit_details to update
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * Limit how many student_permit_details to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * student_permit_details upsert
 */
export type student_permit_detailsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * The filter to search for the student_permit_details to update in case it exists.
     */
    where: Prisma.student_permit_detailsWhereUniqueInput;
    /**
     * In case the student_permit_details found by the `where` argument doesn't exist, create a new student_permit_details with this data.
     */
    create: Prisma.XOR<Prisma.student_permit_detailsCreateInput, Prisma.student_permit_detailsUncheckedCreateInput>;
    /**
     * In case the student_permit_details was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.student_permit_detailsUpdateInput, Prisma.student_permit_detailsUncheckedUpdateInput>;
};
/**
 * student_permit_details delete
 */
export type student_permit_detailsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
    /**
     * Filter which student_permit_details to delete.
     */
    where: Prisma.student_permit_detailsWhereUniqueInput;
};
/**
 * student_permit_details deleteMany
 */
export type student_permit_detailsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which student_permit_details to delete
     */
    where?: Prisma.student_permit_detailsWhereInput;
    /**
     * Limit how many student_permit_details to delete.
     */
    limit?: number;
};
/**
 * student_permit_details without action
 */
export type student_permit_detailsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_permit_details
     */
    select?: Prisma.student_permit_detailsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the student_permit_details
     */
    omit?: Prisma.student_permit_detailsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.student_permit_detailsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=student_permit_details.d.ts.map