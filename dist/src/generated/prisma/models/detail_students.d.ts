import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model detail_students
 *
 */
export type detail_studentsModel = runtime.Types.Result.DefaultSelection<Prisma.$detail_studentsPayload>;
export type AggregateDetail_students = {
    _count: Detail_studentsCountAggregateOutputType | null;
    _avg: Detail_studentsAvgAggregateOutputType | null;
    _sum: Detail_studentsSumAggregateOutputType | null;
    _min: Detail_studentsMinAggregateOutputType | null;
    _max: Detail_studentsMaxAggregateOutputType | null;
};
export type Detail_studentsAvgAggregateOutputType = {
    id: number | null;
    id_class: number | null;
    id_year_period: number | null;
};
export type Detail_studentsSumAggregateOutputType = {
    id: number | null;
    id_class: number | null;
    id_year_period: number | null;
};
export type Detail_studentsMinAggregateOutputType = {
    id: number | null;
    nis: string | null;
    id_class: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    id_year_period: number | null;
};
export type Detail_studentsMaxAggregateOutputType = {
    id: number | null;
    nis: string | null;
    id_class: number | null;
    created_at: Date | null;
    updated_at: Date | null;
    id_year_period: number | null;
};
export type Detail_studentsCountAggregateOutputType = {
    id: number;
    nis: number;
    id_class: number;
    created_at: number;
    updated_at: number;
    id_year_period: number;
    _all: number;
};
export type Detail_studentsAvgAggregateInputType = {
    id?: true;
    id_class?: true;
    id_year_period?: true;
};
export type Detail_studentsSumAggregateInputType = {
    id?: true;
    id_class?: true;
    id_year_period?: true;
};
export type Detail_studentsMinAggregateInputType = {
    id?: true;
    nis?: true;
    id_class?: true;
    created_at?: true;
    updated_at?: true;
    id_year_period?: true;
};
export type Detail_studentsMaxAggregateInputType = {
    id?: true;
    nis?: true;
    id_class?: true;
    created_at?: true;
    updated_at?: true;
    id_year_period?: true;
};
export type Detail_studentsCountAggregateInputType = {
    id?: true;
    nis?: true;
    id_class?: true;
    created_at?: true;
    updated_at?: true;
    id_year_period?: true;
    _all?: true;
};
export type Detail_studentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which detail_students to aggregate.
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of detail_students to fetch.
     */
    orderBy?: Prisma.detail_studentsOrderByWithRelationInput | Prisma.detail_studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.detail_studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` detail_students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` detail_students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned detail_students
    **/
    _count?: true | Detail_studentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Detail_studentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Detail_studentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Detail_studentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Detail_studentsMaxAggregateInputType;
};
export type GetDetail_studentsAggregateType<T extends Detail_studentsAggregateArgs> = {
    [P in keyof T & keyof AggregateDetail_students]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetail_students[P]> : Prisma.GetScalarType<T[P], AggregateDetail_students[P]>;
};
export type detail_studentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detail_studentsWhereInput;
    orderBy?: Prisma.detail_studentsOrderByWithAggregationInput | Prisma.detail_studentsOrderByWithAggregationInput[];
    by: Prisma.Detail_studentsScalarFieldEnum[] | Prisma.Detail_studentsScalarFieldEnum;
    having?: Prisma.detail_studentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Detail_studentsCountAggregateInputType | true;
    _avg?: Detail_studentsAvgAggregateInputType;
    _sum?: Detail_studentsSumAggregateInputType;
    _min?: Detail_studentsMinAggregateInputType;
    _max?: Detail_studentsMaxAggregateInputType;
};
export type Detail_studentsGroupByOutputType = {
    id: number;
    nis: string;
    id_class: number;
    created_at: Date | null;
    updated_at: Date | null;
    id_year_period: number;
    _count: Detail_studentsCountAggregateOutputType | null;
    _avg: Detail_studentsAvgAggregateOutputType | null;
    _sum: Detail_studentsSumAggregateOutputType | null;
    _min: Detail_studentsMinAggregateOutputType | null;
    _max: Detail_studentsMaxAggregateOutputType | null;
};
type GetDetail_studentsGroupByPayload<T extends detail_studentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Detail_studentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Detail_studentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Detail_studentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Detail_studentsGroupByOutputType[P]>;
}>>;
export type detail_studentsWhereInput = {
    AND?: Prisma.detail_studentsWhereInput | Prisma.detail_studentsWhereInput[];
    OR?: Prisma.detail_studentsWhereInput[];
    NOT?: Prisma.detail_studentsWhereInput | Prisma.detail_studentsWhereInput[];
    id?: Prisma.IntFilter<"detail_students"> | number;
    nis?: Prisma.StringFilter<"detail_students"> | string;
    id_class?: Prisma.IntFilter<"detail_students"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    id_year_period?: Prisma.IntFilter<"detail_students"> | number;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
    classes?: Prisma.XOR<Prisma.ClassesScalarRelationFilter, Prisma.classesWhereInput>;
    year_period?: Prisma.XOR<Prisma.Year_periodScalarRelationFilter, Prisma.year_periodWhereInput>;
    violations?: Prisma.ViolationsListRelationFilter;
};
export type detail_studentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
    student?: Prisma.studentsOrderByWithRelationInput;
    classes?: Prisma.classesOrderByWithRelationInput;
    year_period?: Prisma.year_periodOrderByWithRelationInput;
    violations?: Prisma.violationsOrderByRelationAggregateInput;
};
export type detail_studentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nis_id_year_period?: Prisma.detail_studentsNisId_year_periodCompoundUniqueInput;
    AND?: Prisma.detail_studentsWhereInput | Prisma.detail_studentsWhereInput[];
    OR?: Prisma.detail_studentsWhereInput[];
    NOT?: Prisma.detail_studentsWhereInput | Prisma.detail_studentsWhereInput[];
    nis?: Prisma.StringFilter<"detail_students"> | string;
    id_class?: Prisma.IntFilter<"detail_students"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    id_year_period?: Prisma.IntFilter<"detail_students"> | number;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
    classes?: Prisma.XOR<Prisma.ClassesScalarRelationFilter, Prisma.classesWhereInput>;
    year_period?: Prisma.XOR<Prisma.Year_periodScalarRelationFilter, Prisma.year_periodWhereInput>;
    violations?: Prisma.ViolationsListRelationFilter;
}, "id" | "nis_id_year_period">;
export type detail_studentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
    _count?: Prisma.detail_studentsCountOrderByAggregateInput;
    _avg?: Prisma.detail_studentsAvgOrderByAggregateInput;
    _max?: Prisma.detail_studentsMaxOrderByAggregateInput;
    _min?: Prisma.detail_studentsMinOrderByAggregateInput;
    _sum?: Prisma.detail_studentsSumOrderByAggregateInput;
};
export type detail_studentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.detail_studentsScalarWhereWithAggregatesInput | Prisma.detail_studentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.detail_studentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.detail_studentsScalarWhereWithAggregatesInput | Prisma.detail_studentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"detail_students"> | number;
    nis?: Prisma.StringWithAggregatesFilter<"detail_students"> | string;
    id_class?: Prisma.IntWithAggregatesFilter<"detail_students"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"detail_students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"detail_students"> | Date | string | null;
    id_year_period?: Prisma.IntWithAggregatesFilter<"detail_students"> | number;
};
export type detail_studentsCreateInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    student: Prisma.studentsCreateNestedOneWithoutDetail_studentsInput;
    classes: Prisma.classesCreateNestedOneWithoutDetail_studentsInput;
    year_period?: Prisma.year_periodCreateNestedOneWithoutDetail_studentsInput;
    violations?: Prisma.violationsCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsUncheckedCreateInput = {
    id?: number;
    nis: string;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsUpdateInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student?: Prisma.studentsUpdateOneRequiredWithoutDetail_studentsNestedInput;
    classes?: Prisma.classesUpdateOneRequiredWithoutDetail_studentsNestedInput;
    year_period?: Prisma.year_periodUpdateOneRequiredWithoutDetail_studentsNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsCreateManyInput = {
    id?: number;
    nis: string;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
};
export type detail_studentsUpdateManyMutationInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type detail_studentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Detail_studentsListRelationFilter = {
    every?: Prisma.detail_studentsWhereInput;
    some?: Prisma.detail_studentsWhereInput;
    none?: Prisma.detail_studentsWhereInput;
};
export type detail_studentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type detail_studentsNisId_year_periodCompoundUniqueInput = {
    nis: string;
    id_year_period: number;
};
export type detail_studentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
};
export type detail_studentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
};
export type detail_studentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
};
export type detail_studentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nis?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
};
export type detail_studentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    id_class?: Prisma.SortOrder;
    id_year_period?: Prisma.SortOrder;
};
export type Detail_studentsScalarRelationFilter = {
    is?: Prisma.detail_studentsWhereInput;
    isNot?: Prisma.detail_studentsWhereInput;
};
export type detail_studentsCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput> | Prisma.detail_studentsCreateWithoutClassesInput[] | Prisma.detail_studentsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutClassesInput | Prisma.detail_studentsCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.detail_studentsCreateManyClassesInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUncheckedCreateNestedManyWithoutClassesInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput> | Prisma.detail_studentsCreateWithoutClassesInput[] | Prisma.detail_studentsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutClassesInput | Prisma.detail_studentsCreateOrConnectWithoutClassesInput[];
    createMany?: Prisma.detail_studentsCreateManyClassesInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput> | Prisma.detail_studentsCreateWithoutClassesInput[] | Prisma.detail_studentsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutClassesInput | Prisma.detail_studentsCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutClassesInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.detail_studentsCreateManyClassesInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutClassesInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutClassesInput | Prisma.detail_studentsUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsUncheckedUpdateManyWithoutClassesNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput> | Prisma.detail_studentsCreateWithoutClassesInput[] | Prisma.detail_studentsUncheckedCreateWithoutClassesInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutClassesInput | Prisma.detail_studentsCreateOrConnectWithoutClassesInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutClassesInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutClassesInput[];
    createMany?: Prisma.detail_studentsCreateManyClassesInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutClassesInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutClassesInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutClassesInput | Prisma.detail_studentsUpdateManyWithWhereWithoutClassesInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput> | Prisma.detail_studentsCreateWithoutStudentInput[] | Prisma.detail_studentsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutStudentInput | Prisma.detail_studentsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.detail_studentsCreateManyStudentInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput> | Prisma.detail_studentsCreateWithoutStudentInput[] | Prisma.detail_studentsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutStudentInput | Prisma.detail_studentsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.detail_studentsCreateManyStudentInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput> | Prisma.detail_studentsCreateWithoutStudentInput[] | Prisma.detail_studentsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutStudentInput | Prisma.detail_studentsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutStudentInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.detail_studentsCreateManyStudentInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutStudentInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutStudentInput | Prisma.detail_studentsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput> | Prisma.detail_studentsCreateWithoutStudentInput[] | Prisma.detail_studentsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutStudentInput | Prisma.detail_studentsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutStudentInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.detail_studentsCreateManyStudentInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutStudentInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutStudentInput | Prisma.detail_studentsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsCreateNestedOneWithoutViolationsInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutViolationsInput, Prisma.detail_studentsUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutViolationsInput;
    connect?: Prisma.detail_studentsWhereUniqueInput;
};
export type detail_studentsUpdateOneRequiredWithoutViolationsNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutViolationsInput, Prisma.detail_studentsUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutViolationsInput;
    upsert?: Prisma.detail_studentsUpsertWithoutViolationsInput;
    connect?: Prisma.detail_studentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.detail_studentsUpdateToOneWithWhereWithoutViolationsInput, Prisma.detail_studentsUpdateWithoutViolationsInput>, Prisma.detail_studentsUncheckedUpdateWithoutViolationsInput>;
};
export type detail_studentsCreateNestedManyWithoutYear_periodInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput> | Prisma.detail_studentsCreateWithoutYear_periodInput[] | Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput | Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput[];
    createMany?: Prisma.detail_studentsCreateManyYear_periodInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUncheckedCreateNestedManyWithoutYear_periodInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput> | Prisma.detail_studentsCreateWithoutYear_periodInput[] | Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput | Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput[];
    createMany?: Prisma.detail_studentsCreateManyYear_periodInputEnvelope;
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
};
export type detail_studentsUpdateManyWithoutYear_periodNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput> | Prisma.detail_studentsCreateWithoutYear_periodInput[] | Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput | Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutYear_periodInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutYear_periodInput[];
    createMany?: Prisma.detail_studentsCreateManyYear_periodInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutYear_periodInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutYear_periodInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutYear_periodInput | Prisma.detail_studentsUpdateManyWithWhereWithoutYear_periodInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsUncheckedUpdateManyWithoutYear_periodNestedInput = {
    create?: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput> | Prisma.detail_studentsCreateWithoutYear_periodInput[] | Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput[];
    connectOrCreate?: Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput | Prisma.detail_studentsCreateOrConnectWithoutYear_periodInput[];
    upsert?: Prisma.detail_studentsUpsertWithWhereUniqueWithoutYear_periodInput | Prisma.detail_studentsUpsertWithWhereUniqueWithoutYear_periodInput[];
    createMany?: Prisma.detail_studentsCreateManyYear_periodInputEnvelope;
    set?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    disconnect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    delete?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    connect?: Prisma.detail_studentsWhereUniqueInput | Prisma.detail_studentsWhereUniqueInput[];
    update?: Prisma.detail_studentsUpdateWithWhereUniqueWithoutYear_periodInput | Prisma.detail_studentsUpdateWithWhereUniqueWithoutYear_periodInput[];
    updateMany?: Prisma.detail_studentsUpdateManyWithWhereWithoutYear_periodInput | Prisma.detail_studentsUpdateManyWithWhereWithoutYear_periodInput[];
    deleteMany?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
};
export type detail_studentsCreateWithoutClassesInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    student: Prisma.studentsCreateNestedOneWithoutDetail_studentsInput;
    year_period?: Prisma.year_periodCreateNestedOneWithoutDetail_studentsInput;
    violations?: Prisma.violationsCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsUncheckedCreateWithoutClassesInput = {
    id?: number;
    nis: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsCreateOrConnectWithoutClassesInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput>;
};
export type detail_studentsCreateManyClassesInputEnvelope = {
    data: Prisma.detail_studentsCreateManyClassesInput | Prisma.detail_studentsCreateManyClassesInput[];
    skipDuplicates?: boolean;
};
export type detail_studentsUpsertWithWhereUniqueWithoutClassesInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.detail_studentsUpdateWithoutClassesInput, Prisma.detail_studentsUncheckedUpdateWithoutClassesInput>;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutClassesInput, Prisma.detail_studentsUncheckedCreateWithoutClassesInput>;
};
export type detail_studentsUpdateWithWhereUniqueWithoutClassesInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateWithoutClassesInput, Prisma.detail_studentsUncheckedUpdateWithoutClassesInput>;
};
export type detail_studentsUpdateManyWithWhereWithoutClassesInput = {
    where: Prisma.detail_studentsScalarWhereInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateManyMutationInput, Prisma.detail_studentsUncheckedUpdateManyWithoutClassesInput>;
};
export type detail_studentsScalarWhereInput = {
    AND?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
    OR?: Prisma.detail_studentsScalarWhereInput[];
    NOT?: Prisma.detail_studentsScalarWhereInput | Prisma.detail_studentsScalarWhereInput[];
    id?: Prisma.IntFilter<"detail_students"> | number;
    nis?: Prisma.StringFilter<"detail_students"> | string;
    id_class?: Prisma.IntFilter<"detail_students"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"detail_students"> | Date | string | null;
    id_year_period?: Prisma.IntFilter<"detail_students"> | number;
};
export type detail_studentsCreateWithoutStudentInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    classes: Prisma.classesCreateNestedOneWithoutDetail_studentsInput;
    year_period?: Prisma.year_periodCreateNestedOneWithoutDetail_studentsInput;
    violations?: Prisma.violationsCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsUncheckedCreateWithoutStudentInput = {
    id?: number;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsCreateOrConnectWithoutStudentInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput>;
};
export type detail_studentsCreateManyStudentInputEnvelope = {
    data: Prisma.detail_studentsCreateManyStudentInput | Prisma.detail_studentsCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type detail_studentsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.detail_studentsUpdateWithoutStudentInput, Prisma.detail_studentsUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutStudentInput, Prisma.detail_studentsUncheckedCreateWithoutStudentInput>;
};
export type detail_studentsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateWithoutStudentInput, Prisma.detail_studentsUncheckedUpdateWithoutStudentInput>;
};
export type detail_studentsUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.detail_studentsScalarWhereInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateManyMutationInput, Prisma.detail_studentsUncheckedUpdateManyWithoutStudentInput>;
};
export type detail_studentsCreateWithoutViolationsInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    student: Prisma.studentsCreateNestedOneWithoutDetail_studentsInput;
    classes: Prisma.classesCreateNestedOneWithoutDetail_studentsInput;
    year_period?: Prisma.year_periodCreateNestedOneWithoutDetail_studentsInput;
};
export type detail_studentsUncheckedCreateWithoutViolationsInput = {
    id?: number;
    nis: string;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
};
export type detail_studentsCreateOrConnectWithoutViolationsInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutViolationsInput, Prisma.detail_studentsUncheckedCreateWithoutViolationsInput>;
};
export type detail_studentsUpsertWithoutViolationsInput = {
    update: Prisma.XOR<Prisma.detail_studentsUpdateWithoutViolationsInput, Prisma.detail_studentsUncheckedUpdateWithoutViolationsInput>;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutViolationsInput, Prisma.detail_studentsUncheckedCreateWithoutViolationsInput>;
    where?: Prisma.detail_studentsWhereInput;
};
export type detail_studentsUpdateToOneWithWhereWithoutViolationsInput = {
    where?: Prisma.detail_studentsWhereInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateWithoutViolationsInput, Prisma.detail_studentsUncheckedUpdateWithoutViolationsInput>;
};
export type detail_studentsUpdateWithoutViolationsInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student?: Prisma.studentsUpdateOneRequiredWithoutDetail_studentsNestedInput;
    classes?: Prisma.classesUpdateOneRequiredWithoutDetail_studentsNestedInput;
    year_period?: Prisma.year_periodUpdateOneRequiredWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateWithoutViolationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detail_studentsCreateWithoutYear_periodInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    student: Prisma.studentsCreateNestedOneWithoutDetail_studentsInput;
    classes: Prisma.classesCreateNestedOneWithoutDetail_studentsInput;
    violations?: Prisma.violationsCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsUncheckedCreateWithoutYear_periodInput = {
    id?: number;
    nis: string;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutDetail_studentsInput;
};
export type detail_studentsCreateOrConnectWithoutYear_periodInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput>;
};
export type detail_studentsCreateManyYear_periodInputEnvelope = {
    data: Prisma.detail_studentsCreateManyYear_periodInput | Prisma.detail_studentsCreateManyYear_periodInput[];
    skipDuplicates?: boolean;
};
export type detail_studentsUpsertWithWhereUniqueWithoutYear_periodInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.detail_studentsUpdateWithoutYear_periodInput, Prisma.detail_studentsUncheckedUpdateWithoutYear_periodInput>;
    create: Prisma.XOR<Prisma.detail_studentsCreateWithoutYear_periodInput, Prisma.detail_studentsUncheckedCreateWithoutYear_periodInput>;
};
export type detail_studentsUpdateWithWhereUniqueWithoutYear_periodInput = {
    where: Prisma.detail_studentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateWithoutYear_periodInput, Prisma.detail_studentsUncheckedUpdateWithoutYear_periodInput>;
};
export type detail_studentsUpdateManyWithWhereWithoutYear_periodInput = {
    where: Prisma.detail_studentsScalarWhereInput;
    data: Prisma.XOR<Prisma.detail_studentsUpdateManyMutationInput, Prisma.detail_studentsUncheckedUpdateManyWithoutYear_periodInput>;
};
export type detail_studentsCreateManyClassesInput = {
    id?: number;
    nis: string;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
};
export type detail_studentsUpdateWithoutClassesInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student?: Prisma.studentsUpdateOneRequiredWithoutDetail_studentsNestedInput;
    year_period?: Prisma.year_periodUpdateOneRequiredWithoutDetail_studentsNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateWithoutClassesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateManyWithoutClassesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detail_studentsCreateManyStudentInput = {
    id?: number;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    id_year_period?: number;
};
export type detail_studentsUpdateWithoutStudentInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    classes?: Prisma.classesUpdateOneRequiredWithoutDetail_studentsNestedInput;
    year_period?: Prisma.year_periodUpdateOneRequiredWithoutDetail_studentsNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    id_year_period?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detail_studentsCreateManyYear_periodInput = {
    id?: number;
    nis: string;
    id_class: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type detail_studentsUpdateWithoutYear_periodInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    student?: Prisma.studentsUpdateOneRequiredWithoutDetail_studentsNestedInput;
    classes?: Prisma.classesUpdateOneRequiredWithoutDetail_studentsNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateWithoutYear_periodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutDetail_studentsNestedInput;
};
export type detail_studentsUncheckedUpdateManyWithoutYear_periodInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    id_class?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type Detail_studentsCountOutputType
 */
export type Detail_studentsCountOutputType = {
    violations: number;
};
export type Detail_studentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violations?: boolean | Detail_studentsCountOutputTypeCountViolationsArgs;
};
/**
 * Detail_studentsCountOutputType without action
 */
export type Detail_studentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detail_studentsCountOutputType
     */
    select?: Prisma.Detail_studentsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Detail_studentsCountOutputType without action
 */
export type Detail_studentsCountOutputTypeCountViolationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violationsWhereInput;
};
export type detail_studentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nis?: boolean;
    id_class?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    id_year_period?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
    violations?: boolean | Prisma.detail_students$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Detail_studentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detail_students"]>;
export type detail_studentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nis?: boolean;
    id_class?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    id_year_period?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detail_students"]>;
export type detail_studentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nis?: boolean;
    id_class?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    id_year_period?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detail_students"]>;
export type detail_studentsSelectScalar = {
    id?: boolean;
    nis?: boolean;
    id_class?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    id_year_period?: boolean;
};
export type detail_studentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nis" | "id_class" | "created_at" | "updated_at" | "id_year_period", ExtArgs["result"]["detail_students"]>;
export type detail_studentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
    violations?: boolean | Prisma.detail_students$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Detail_studentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type detail_studentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
};
export type detail_studentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
    classes?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    year_period?: boolean | Prisma.year_periodDefaultArgs<ExtArgs>;
};
export type $detail_studentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "detail_students";
    objects: {
        student: Prisma.$studentsPayload<ExtArgs>;
        classes: Prisma.$classesPayload<ExtArgs>;
        year_period: Prisma.$year_periodPayload<ExtArgs>;
        violations: Prisma.$violationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nis: string;
        id_class: number;
        created_at: Date | null;
        updated_at: Date | null;
        id_year_period: number;
    }, ExtArgs["result"]["detail_students"]>;
    composites: {};
};
export type detail_studentsGetPayload<S extends boolean | null | undefined | detail_studentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload, S>;
export type detail_studentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<detail_studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Detail_studentsCountAggregateInputType | true;
};
export interface detail_studentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['detail_students'];
        meta: {
            name: 'detail_students';
        };
    };
    /**
     * Find zero or one Detail_students that matches the filter.
     * @param {detail_studentsFindUniqueArgs} args - Arguments to find a Detail_students
     * @example
     * // Get one Detail_students
     * const detail_students = await prisma.detail_students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_studentsFindUniqueArgs>(args: Prisma.SelectSubset<T, detail_studentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Detail_students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_studentsFindUniqueOrThrowArgs} args - Arguments to find a Detail_students
     * @example
     * // Get one Detail_students
     * const detail_students = await prisma.detail_students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_studentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, detail_studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Detail_students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsFindFirstArgs} args - Arguments to find a Detail_students
     * @example
     * // Get one Detail_students
     * const detail_students = await prisma.detail_students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_studentsFindFirstArgs>(args?: Prisma.SelectSubset<T, detail_studentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Detail_students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsFindFirstOrThrowArgs} args - Arguments to find a Detail_students
     * @example
     * // Get one Detail_students
     * const detail_students = await prisma.detail_students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_studentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, detail_studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Detail_students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_students
     * const detail_students = await prisma.detail_students.findMany()
     *
     * // Get first 10 Detail_students
     * const detail_students = await prisma.detail_students.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const detail_studentsWithIdOnly = await prisma.detail_students.findMany({ select: { id: true } })
     *
     */
    findMany<T extends detail_studentsFindManyArgs>(args?: Prisma.SelectSubset<T, detail_studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Detail_students.
     * @param {detail_studentsCreateArgs} args - Arguments to create a Detail_students.
     * @example
     * // Create one Detail_students
     * const Detail_students = await prisma.detail_students.create({
     *   data: {
     *     // ... data to create a Detail_students
     *   }
     * })
     *
     */
    create<T extends detail_studentsCreateArgs>(args: Prisma.SelectSubset<T, detail_studentsCreateArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Detail_students.
     * @param {detail_studentsCreateManyArgs} args - Arguments to create many Detail_students.
     * @example
     * // Create many Detail_students
     * const detail_students = await prisma.detail_students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends detail_studentsCreateManyArgs>(args?: Prisma.SelectSubset<T, detail_studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Detail_students and returns the data saved in the database.
     * @param {detail_studentsCreateManyAndReturnArgs} args - Arguments to create many Detail_students.
     * @example
     * // Create many Detail_students
     * const detail_students = await prisma.detail_students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Detail_students and only return the `id`
     * const detail_studentsWithIdOnly = await prisma.detail_students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends detail_studentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, detail_studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Detail_students.
     * @param {detail_studentsDeleteArgs} args - Arguments to delete one Detail_students.
     * @example
     * // Delete one Detail_students
     * const Detail_students = await prisma.detail_students.delete({
     *   where: {
     *     // ... filter to delete one Detail_students
     *   }
     * })
     *
     */
    delete<T extends detail_studentsDeleteArgs>(args: Prisma.SelectSubset<T, detail_studentsDeleteArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Detail_students.
     * @param {detail_studentsUpdateArgs} args - Arguments to update one Detail_students.
     * @example
     * // Update one Detail_students
     * const detail_students = await prisma.detail_students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends detail_studentsUpdateArgs>(args: Prisma.SelectSubset<T, detail_studentsUpdateArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Detail_students.
     * @param {detail_studentsDeleteManyArgs} args - Arguments to filter Detail_students to delete.
     * @example
     * // Delete a few Detail_students
     * const { count } = await prisma.detail_students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends detail_studentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, detail_studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Detail_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_students
     * const detail_students = await prisma.detail_students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends detail_studentsUpdateManyArgs>(args: Prisma.SelectSubset<T, detail_studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Detail_students and returns the data updated in the database.
     * @param {detail_studentsUpdateManyAndReturnArgs} args - Arguments to update many Detail_students.
     * @example
     * // Update many Detail_students
     * const detail_students = await prisma.detail_students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Detail_students and only return the `id`
     * const detail_studentsWithIdOnly = await prisma.detail_students.updateManyAndReturn({
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
    updateManyAndReturn<T extends detail_studentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, detail_studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Detail_students.
     * @param {detail_studentsUpsertArgs} args - Arguments to update or create a Detail_students.
     * @example
     * // Update or create a Detail_students
     * const detail_students = await prisma.detail_students.upsert({
     *   create: {
     *     // ... data to create a Detail_students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_students we want to update
     *   }
     * })
     */
    upsert<T extends detail_studentsUpsertArgs>(args: Prisma.SelectSubset<T, detail_studentsUpsertArgs<ExtArgs>>): Prisma.Prisma__detail_studentsClient<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Detail_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsCountArgs} args - Arguments to filter Detail_students to count.
     * @example
     * // Count the number of Detail_students
     * const count = await prisma.detail_students.count({
     *   where: {
     *     // ... the filter for the Detail_students we want to count
     *   }
     * })
    **/
    count<T extends detail_studentsCountArgs>(args?: Prisma.Subset<T, detail_studentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Detail_studentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Detail_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_studentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Detail_studentsAggregateArgs>(args: Prisma.Subset<T, Detail_studentsAggregateArgs>): Prisma.PrismaPromise<GetDetail_studentsAggregateType<T>>;
    /**
     * Group by Detail_students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_studentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends detail_studentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: detail_studentsGroupByArgs['orderBy'];
    } : {
        orderBy?: detail_studentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, detail_studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_studentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the detail_students model
     */
    readonly fields: detail_studentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for detail_students.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__detail_studentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.studentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.studentsDefaultArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    classes<T extends Prisma.classesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.classesDefaultArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    year_period<T extends Prisma.year_periodDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.year_periodDefaultArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    violations<T extends Prisma.detail_students$violationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detail_students$violationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the detail_students model
 */
export interface detail_studentsFieldRefs {
    readonly id: Prisma.FieldRef<"detail_students", 'Int'>;
    readonly nis: Prisma.FieldRef<"detail_students", 'String'>;
    readonly id_class: Prisma.FieldRef<"detail_students", 'Int'>;
    readonly created_at: Prisma.FieldRef<"detail_students", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"detail_students", 'DateTime'>;
    readonly id_year_period: Prisma.FieldRef<"detail_students", 'Int'>;
}
/**
 * detail_students findUnique
 */
export type detail_studentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter, which detail_students to fetch.
     */
    where: Prisma.detail_studentsWhereUniqueInput;
};
/**
 * detail_students findUniqueOrThrow
 */
export type detail_studentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter, which detail_students to fetch.
     */
    where: Prisma.detail_studentsWhereUniqueInput;
};
/**
 * detail_students findFirst
 */
export type detail_studentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter, which detail_students to fetch.
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of detail_students to fetch.
     */
    orderBy?: Prisma.detail_studentsOrderByWithRelationInput | Prisma.detail_studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for detail_students.
     */
    cursor?: Prisma.detail_studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` detail_students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` detail_students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of detail_students.
     */
    distinct?: Prisma.Detail_studentsScalarFieldEnum | Prisma.Detail_studentsScalarFieldEnum[];
};
/**
 * detail_students findFirstOrThrow
 */
export type detail_studentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter, which detail_students to fetch.
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of detail_students to fetch.
     */
    orderBy?: Prisma.detail_studentsOrderByWithRelationInput | Prisma.detail_studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for detail_students.
     */
    cursor?: Prisma.detail_studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` detail_students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` detail_students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of detail_students.
     */
    distinct?: Prisma.Detail_studentsScalarFieldEnum | Prisma.Detail_studentsScalarFieldEnum[];
};
/**
 * detail_students findMany
 */
export type detail_studentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter, which detail_students to fetch.
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of detail_students to fetch.
     */
    orderBy?: Prisma.detail_studentsOrderByWithRelationInput | Prisma.detail_studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing detail_students.
     */
    cursor?: Prisma.detail_studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` detail_students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` detail_students.
     */
    skip?: number;
    distinct?: Prisma.Detail_studentsScalarFieldEnum | Prisma.Detail_studentsScalarFieldEnum[];
};
/**
 * detail_students create
 */
export type detail_studentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a detail_students.
     */
    data: Prisma.XOR<Prisma.detail_studentsCreateInput, Prisma.detail_studentsUncheckedCreateInput>;
};
/**
 * detail_students createMany
 */
export type detail_studentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_students.
     */
    data: Prisma.detail_studentsCreateManyInput | Prisma.detail_studentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * detail_students createManyAndReturn
 */
export type detail_studentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * The data used to create many detail_students.
     */
    data: Prisma.detail_studentsCreateManyInput | Prisma.detail_studentsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * detail_students update
 */
export type detail_studentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a detail_students.
     */
    data: Prisma.XOR<Prisma.detail_studentsUpdateInput, Prisma.detail_studentsUncheckedUpdateInput>;
    /**
     * Choose, which detail_students to update.
     */
    where: Prisma.detail_studentsWhereUniqueInput;
};
/**
 * detail_students updateMany
 */
export type detail_studentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_students.
     */
    data: Prisma.XOR<Prisma.detail_studentsUpdateManyMutationInput, Prisma.detail_studentsUncheckedUpdateManyInput>;
    /**
     * Filter which detail_students to update
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * Limit how many detail_students to update.
     */
    limit?: number;
};
/**
 * detail_students updateManyAndReturn
 */
export type detail_studentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * The data used to update detail_students.
     */
    data: Prisma.XOR<Prisma.detail_studentsUpdateManyMutationInput, Prisma.detail_studentsUncheckedUpdateManyInput>;
    /**
     * Filter which detail_students to update
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * Limit how many detail_students to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * detail_students upsert
 */
export type detail_studentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the detail_students to update in case it exists.
     */
    where: Prisma.detail_studentsWhereUniqueInput;
    /**
     * In case the detail_students found by the `where` argument doesn't exist, create a new detail_students with this data.
     */
    create: Prisma.XOR<Prisma.detail_studentsCreateInput, Prisma.detail_studentsUncheckedCreateInput>;
    /**
     * In case the detail_students was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.detail_studentsUpdateInput, Prisma.detail_studentsUncheckedUpdateInput>;
};
/**
 * detail_students delete
 */
export type detail_studentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
    /**
     * Filter which detail_students to delete.
     */
    where: Prisma.detail_studentsWhereUniqueInput;
};
/**
 * detail_students deleteMany
 */
export type detail_studentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which detail_students to delete
     */
    where?: Prisma.detail_studentsWhereInput;
    /**
     * Limit how many detail_students to delete.
     */
    limit?: number;
};
/**
 * detail_students.violations
 */
export type detail_students$violationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * detail_students without action
 */
export type detail_studentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_students
     */
    select?: Prisma.detail_studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the detail_students
     */
    omit?: Prisma.detail_studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.detail_studentsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=detail_students.d.ts.map