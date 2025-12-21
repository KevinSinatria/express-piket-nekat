import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model teacher_assignments
 *
 */
export type teacher_assignmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$teacher_assignmentsPayload>;
export type AggregateTeacher_assignments = {
    _count: Teacher_assignmentsCountAggregateOutputType | null;
    _avg: Teacher_assignmentsAvgAggregateOutputType | null;
    _sum: Teacher_assignmentsSumAggregateOutputType | null;
    _min: Teacher_assignmentsMinAggregateOutputType | null;
    _max: Teacher_assignmentsMaxAggregateOutputType | null;
};
export type Teacher_assignmentsAvgAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    class_id: number | null;
    subject_id: number | null;
};
export type Teacher_assignmentsSumAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    class_id: number | null;
    subject_id: number | null;
};
export type Teacher_assignmentsMinAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    class_id: number | null;
    subject_id: number | null;
    assignment_details: string | null;
    reason: string | null;
    due_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Teacher_assignmentsMaxAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    class_id: number | null;
    subject_id: number | null;
    assignment_details: string | null;
    reason: string | null;
    due_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Teacher_assignmentsCountAggregateOutputType = {
    id: number;
    teacher_user_id: number;
    class_id: number;
    subject_id: number;
    assignment_details: number;
    reason: number;
    due_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Teacher_assignmentsAvgAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    class_id?: true;
    subject_id?: true;
};
export type Teacher_assignmentsSumAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    class_id?: true;
    subject_id?: true;
};
export type Teacher_assignmentsMinAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    class_id?: true;
    subject_id?: true;
    assignment_details?: true;
    reason?: true;
    due_date?: true;
    created_at?: true;
    updated_at?: true;
};
export type Teacher_assignmentsMaxAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    class_id?: true;
    subject_id?: true;
    assignment_details?: true;
    reason?: true;
    due_date?: true;
    created_at?: true;
    updated_at?: true;
};
export type Teacher_assignmentsCountAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    class_id?: true;
    subject_id?: true;
    assignment_details?: true;
    reason?: true;
    due_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Teacher_assignmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_assignments to aggregate.
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacher_assignments to fetch.
     */
    orderBy?: Prisma.teacher_assignmentsOrderByWithRelationInput | Prisma.teacher_assignmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.teacher_assignmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacher_assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacher_assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teacher_assignments
    **/
    _count?: true | Teacher_assignmentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Teacher_assignmentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Teacher_assignmentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Teacher_assignmentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Teacher_assignmentsMaxAggregateInputType;
};
export type GetTeacher_assignmentsAggregateType<T extends Teacher_assignmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher_assignments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacher_assignments[P]> : Prisma.GetScalarType<T[P], AggregateTeacher_assignments[P]>;
};
export type teacher_assignmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.teacher_assignmentsWhereInput;
    orderBy?: Prisma.teacher_assignmentsOrderByWithAggregationInput | Prisma.teacher_assignmentsOrderByWithAggregationInput[];
    by: Prisma.Teacher_assignmentsScalarFieldEnum[] | Prisma.Teacher_assignmentsScalarFieldEnum;
    having?: Prisma.teacher_assignmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Teacher_assignmentsCountAggregateInputType | true;
    _avg?: Teacher_assignmentsAvgAggregateInputType;
    _sum?: Teacher_assignmentsSumAggregateInputType;
    _min?: Teacher_assignmentsMinAggregateInputType;
    _max?: Teacher_assignmentsMaxAggregateInputType;
};
export type Teacher_assignmentsGroupByOutputType = {
    id: number;
    teacher_user_id: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Teacher_assignmentsCountAggregateOutputType | null;
    _avg: Teacher_assignmentsAvgAggregateOutputType | null;
    _sum: Teacher_assignmentsSumAggregateOutputType | null;
    _min: Teacher_assignmentsMinAggregateOutputType | null;
    _max: Teacher_assignmentsMaxAggregateOutputType | null;
};
type GetTeacher_assignmentsGroupByPayload<T extends teacher_assignmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Teacher_assignmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Teacher_assignmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Teacher_assignmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Teacher_assignmentsGroupByOutputType[P]>;
}>>;
export type teacher_assignmentsWhereInput = {
    AND?: Prisma.teacher_assignmentsWhereInput | Prisma.teacher_assignmentsWhereInput[];
    OR?: Prisma.teacher_assignmentsWhereInput[];
    NOT?: Prisma.teacher_assignmentsWhereInput | Prisma.teacher_assignmentsWhereInput[];
    id?: Prisma.IntFilter<"teacher_assignments"> | number;
    teacher_user_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    class_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    subject_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    assignment_details?: Prisma.StringFilter<"teacher_assignments"> | string;
    reason?: Prisma.StringFilter<"teacher_assignments"> | string;
    due_date?: Prisma.DateTimeNullableFilter<"teacher_assignments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassesScalarRelationFilter, Prisma.classesWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectsScalarRelationFilter, Prisma.subjectsWhereInput>;
    teacher?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type teacher_assignmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    assignment_details?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    due_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    class?: Prisma.classesOrderByWithRelationInput;
    subject?: Prisma.subjectsOrderByWithRelationInput;
    teacher?: Prisma.usersOrderByWithRelationInput;
};
export type teacher_assignmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.teacher_assignmentsWhereInput | Prisma.teacher_assignmentsWhereInput[];
    OR?: Prisma.teacher_assignmentsWhereInput[];
    NOT?: Prisma.teacher_assignmentsWhereInput | Prisma.teacher_assignmentsWhereInput[];
    teacher_user_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    class_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    subject_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    assignment_details?: Prisma.StringFilter<"teacher_assignments"> | string;
    reason?: Prisma.StringFilter<"teacher_assignments"> | string;
    due_date?: Prisma.DateTimeNullableFilter<"teacher_assignments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
    class?: Prisma.XOR<Prisma.ClassesScalarRelationFilter, Prisma.classesWhereInput>;
    subject?: Prisma.XOR<Prisma.SubjectsScalarRelationFilter, Prisma.subjectsWhereInput>;
    teacher?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type teacher_assignmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    assignment_details?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    due_date?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.teacher_assignmentsCountOrderByAggregateInput;
    _avg?: Prisma.teacher_assignmentsAvgOrderByAggregateInput;
    _max?: Prisma.teacher_assignmentsMaxOrderByAggregateInput;
    _min?: Prisma.teacher_assignmentsMinOrderByAggregateInput;
    _sum?: Prisma.teacher_assignmentsSumOrderByAggregateInput;
};
export type teacher_assignmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.teacher_assignmentsScalarWhereWithAggregatesInput | Prisma.teacher_assignmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.teacher_assignmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.teacher_assignmentsScalarWhereWithAggregatesInput | Prisma.teacher_assignmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"teacher_assignments"> | number;
    teacher_user_id?: Prisma.IntWithAggregatesFilter<"teacher_assignments"> | number;
    class_id?: Prisma.IntWithAggregatesFilter<"teacher_assignments"> | number;
    subject_id?: Prisma.IntWithAggregatesFilter<"teacher_assignments"> | number;
    assignment_details?: Prisma.StringWithAggregatesFilter<"teacher_assignments"> | string;
    reason?: Prisma.StringWithAggregatesFilter<"teacher_assignments"> | string;
    due_date?: Prisma.DateTimeNullableWithAggregatesFilter<"teacher_assignments"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"teacher_assignments"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"teacher_assignments"> | Date | string;
};
export type teacher_assignmentsCreateInput = {
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    class: Prisma.classesCreateNestedOneWithoutTeacherAssignmentsInput;
    subject: Prisma.subjectsCreateNestedOneWithoutTeacher_assignmentsInput;
    teacher: Prisma.usersCreateNestedOneWithoutTeacher_assignmentsInput;
};
export type teacher_assignmentsUncheckedCreateInput = {
    id?: number;
    teacher_user_id: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsUpdateInput = {
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.classesUpdateOneRequiredWithoutTeacherAssignmentsNestedInput;
    subject?: Prisma.subjectsUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
    teacher?: Prisma.usersUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
};
export type teacher_assignmentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsCreateManyInput = {
    id?: number;
    teacher_user_id: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsUpdateManyMutationInput = {
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Teacher_assignmentsListRelationFilter = {
    every?: Prisma.teacher_assignmentsWhereInput;
    some?: Prisma.teacher_assignmentsWhereInput;
    none?: Prisma.teacher_assignmentsWhereInput;
};
export type teacher_assignmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type teacher_assignmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    assignment_details?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type teacher_assignmentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
};
export type teacher_assignmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    assignment_details?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type teacher_assignmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
    assignment_details?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    due_date?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type teacher_assignmentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    class_id?: Prisma.SortOrder;
    subject_id?: Prisma.SortOrder;
};
export type teacher_assignmentsCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput> | Prisma.teacher_assignmentsCreateWithoutClassInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput | Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyClassInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUncheckedCreateNestedManyWithoutClassInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput> | Prisma.teacher_assignmentsCreateWithoutClassInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput | Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyClassInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput> | Prisma.teacher_assignmentsCreateWithoutClassInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput | Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutClassInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyClassInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutClassInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutClassInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsUncheckedUpdateManyWithoutClassNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput> | Prisma.teacher_assignmentsCreateWithoutClassInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput | Prisma.teacher_assignmentsCreateOrConnectWithoutClassInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutClassInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutClassInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyClassInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutClassInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutClassInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutClassInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutClassInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput> | Prisma.teacher_assignmentsCreateWithoutTeacherInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput | Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyTeacherInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput> | Prisma.teacher_assignmentsCreateWithoutTeacherInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput | Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyTeacherInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput> | Prisma.teacher_assignmentsCreateWithoutTeacherInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput | Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutTeacherInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyTeacherInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutTeacherInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutTeacherInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput> | Prisma.teacher_assignmentsCreateWithoutTeacherInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput | Prisma.teacher_assignmentsCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutTeacherInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.teacher_assignmentsCreateManyTeacherInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutTeacherInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutTeacherInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput> | Prisma.teacher_assignmentsCreateWithoutSubjectInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput | Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.teacher_assignmentsCreateManySubjectInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput> | Prisma.teacher_assignmentsCreateWithoutSubjectInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput | Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput[];
    createMany?: Prisma.teacher_assignmentsCreateManySubjectInputEnvelope;
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
};
export type teacher_assignmentsUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput> | Prisma.teacher_assignmentsCreateWithoutSubjectInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput | Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutSubjectInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.teacher_assignmentsCreateManySubjectInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutSubjectInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutSubjectInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput> | Prisma.teacher_assignmentsCreateWithoutSubjectInput[] | Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput[];
    connectOrCreate?: Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput | Prisma.teacher_assignmentsCreateOrConnectWithoutSubjectInput[];
    upsert?: Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutSubjectInput | Prisma.teacher_assignmentsUpsertWithWhereUniqueWithoutSubjectInput[];
    createMany?: Prisma.teacher_assignmentsCreateManySubjectInputEnvelope;
    set?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    disconnect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    delete?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    connect?: Prisma.teacher_assignmentsWhereUniqueInput | Prisma.teacher_assignmentsWhereUniqueInput[];
    update?: Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutSubjectInput | Prisma.teacher_assignmentsUpdateWithWhereUniqueWithoutSubjectInput[];
    updateMany?: Prisma.teacher_assignmentsUpdateManyWithWhereWithoutSubjectInput | Prisma.teacher_assignmentsUpdateManyWithWhereWithoutSubjectInput[];
    deleteMany?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
};
export type teacher_assignmentsCreateWithoutClassInput = {
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    subject: Prisma.subjectsCreateNestedOneWithoutTeacher_assignmentsInput;
    teacher: Prisma.usersCreateNestedOneWithoutTeacher_assignmentsInput;
};
export type teacher_assignmentsUncheckedCreateWithoutClassInput = {
    id?: number;
    teacher_user_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsCreateOrConnectWithoutClassInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput>;
};
export type teacher_assignmentsCreateManyClassInputEnvelope = {
    data: Prisma.teacher_assignmentsCreateManyClassInput | Prisma.teacher_assignmentsCreateManyClassInput[];
    skipDuplicates?: boolean;
};
export type teacher_assignmentsUpsertWithWhereUniqueWithoutClassInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutClassInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutClassInput>;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutClassInput, Prisma.teacher_assignmentsUncheckedCreateWithoutClassInput>;
};
export type teacher_assignmentsUpdateWithWhereUniqueWithoutClassInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutClassInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutClassInput>;
};
export type teacher_assignmentsUpdateManyWithWhereWithoutClassInput = {
    where: Prisma.teacher_assignmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateManyMutationInput, Prisma.teacher_assignmentsUncheckedUpdateManyWithoutClassInput>;
};
export type teacher_assignmentsScalarWhereInput = {
    AND?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
    OR?: Prisma.teacher_assignmentsScalarWhereInput[];
    NOT?: Prisma.teacher_assignmentsScalarWhereInput | Prisma.teacher_assignmentsScalarWhereInput[];
    id?: Prisma.IntFilter<"teacher_assignments"> | number;
    teacher_user_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    class_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    subject_id?: Prisma.IntFilter<"teacher_assignments"> | number;
    assignment_details?: Prisma.StringFilter<"teacher_assignments"> | string;
    reason?: Prisma.StringFilter<"teacher_assignments"> | string;
    due_date?: Prisma.DateTimeNullableFilter<"teacher_assignments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"teacher_assignments"> | Date | string;
};
export type teacher_assignmentsCreateWithoutTeacherInput = {
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    class: Prisma.classesCreateNestedOneWithoutTeacherAssignmentsInput;
    subject: Prisma.subjectsCreateNestedOneWithoutTeacher_assignmentsInput;
};
export type teacher_assignmentsUncheckedCreateWithoutTeacherInput = {
    id?: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsCreateOrConnectWithoutTeacherInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput>;
};
export type teacher_assignmentsCreateManyTeacherInputEnvelope = {
    data: Prisma.teacher_assignmentsCreateManyTeacherInput | Prisma.teacher_assignmentsCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type teacher_assignmentsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedCreateWithoutTeacherInput>;
};
export type teacher_assignmentsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutTeacherInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutTeacherInput>;
};
export type teacher_assignmentsUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.teacher_assignmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateManyMutationInput, Prisma.teacher_assignmentsUncheckedUpdateManyWithoutTeacherInput>;
};
export type teacher_assignmentsCreateWithoutSubjectInput = {
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    class: Prisma.classesCreateNestedOneWithoutTeacherAssignmentsInput;
    teacher: Prisma.usersCreateNestedOneWithoutTeacher_assignmentsInput;
};
export type teacher_assignmentsUncheckedCreateWithoutSubjectInput = {
    id?: number;
    teacher_user_id: number;
    class_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsCreateOrConnectWithoutSubjectInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput>;
};
export type teacher_assignmentsCreateManySubjectInputEnvelope = {
    data: Prisma.teacher_assignmentsCreateManySubjectInput | Prisma.teacher_assignmentsCreateManySubjectInput[];
    skipDuplicates?: boolean;
};
export type teacher_assignmentsUpsertWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutSubjectInput>;
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedCreateWithoutSubjectInput>;
};
export type teacher_assignmentsUpdateWithWhereUniqueWithoutSubjectInput = {
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateWithoutSubjectInput, Prisma.teacher_assignmentsUncheckedUpdateWithoutSubjectInput>;
};
export type teacher_assignmentsUpdateManyWithWhereWithoutSubjectInput = {
    where: Prisma.teacher_assignmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateManyMutationInput, Prisma.teacher_assignmentsUncheckedUpdateManyWithoutSubjectInput>;
};
export type teacher_assignmentsCreateManyClassInput = {
    id?: number;
    teacher_user_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsUpdateWithoutClassInput = {
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    subject?: Prisma.subjectsUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
    teacher?: Prisma.usersUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
};
export type teacher_assignmentsUncheckedUpdateWithoutClassInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsUncheckedUpdateManyWithoutClassInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsCreateManyTeacherInput = {
    id?: number;
    class_id: number;
    subject_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsUpdateWithoutTeacherInput = {
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.classesUpdateOneRequiredWithoutTeacherAssignmentsNestedInput;
    subject?: Prisma.subjectsUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
};
export type teacher_assignmentsUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subject_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsCreateManySubjectInput = {
    id?: number;
    teacher_user_id: number;
    class_id: number;
    assignment_details: string;
    reason: string;
    due_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type teacher_assignmentsUpdateWithoutSubjectInput = {
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    class?: Prisma.classesUpdateOneRequiredWithoutTeacherAssignmentsNestedInput;
    teacher?: Prisma.usersUpdateOneRequiredWithoutTeacher_assignmentsNestedInput;
};
export type teacher_assignmentsUncheckedUpdateWithoutSubjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsUncheckedUpdateManyWithoutSubjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    class_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assignment_details?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    due_date?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type teacher_assignmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    class_id?: boolean;
    subject_id?: boolean;
    assignment_details?: boolean;
    reason?: boolean;
    due_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacher_assignments"]>;
export type teacher_assignmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    class_id?: boolean;
    subject_id?: boolean;
    assignment_details?: boolean;
    reason?: boolean;
    due_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacher_assignments"]>;
export type teacher_assignmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    class_id?: boolean;
    subject_id?: boolean;
    assignment_details?: boolean;
    reason?: boolean;
    due_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacher_assignments"]>;
export type teacher_assignmentsSelectScalar = {
    id?: boolean;
    teacher_user_id?: boolean;
    class_id?: boolean;
    subject_id?: boolean;
    assignment_details?: boolean;
    reason?: boolean;
    due_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type teacher_assignmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacher_user_id" | "class_id" | "subject_id" | "assignment_details" | "reason" | "due_date" | "created_at" | "updated_at", ExtArgs["result"]["teacher_assignments"]>;
export type teacher_assignmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type teacher_assignmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type teacher_assignmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    class?: boolean | Prisma.classesDefaultArgs<ExtArgs>;
    subject?: boolean | Prisma.subjectsDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $teacher_assignmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "teacher_assignments";
    objects: {
        class: Prisma.$classesPayload<ExtArgs>;
        subject: Prisma.$subjectsPayload<ExtArgs>;
        teacher: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        teacher_user_id: number;
        class_id: number;
        subject_id: number;
        assignment_details: string;
        reason: string;
        due_date: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["teacher_assignments"]>;
    composites: {};
};
export type teacher_assignmentsGetPayload<S extends boolean | null | undefined | teacher_assignmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload, S>;
export type teacher_assignmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<teacher_assignmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Teacher_assignmentsCountAggregateInputType | true;
};
export interface teacher_assignmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['teacher_assignments'];
        meta: {
            name: 'teacher_assignments';
        };
    };
    /**
     * Find zero or one Teacher_assignments that matches the filter.
     * @param {teacher_assignmentsFindUniqueArgs} args - Arguments to find a Teacher_assignments
     * @example
     * // Get one Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teacher_assignmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Teacher_assignments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teacher_assignmentsFindUniqueOrThrowArgs} args - Arguments to find a Teacher_assignments
     * @example
     * // Get one Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teacher_assignmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Teacher_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsFindFirstArgs} args - Arguments to find a Teacher_assignments
     * @example
     * // Get one Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teacher_assignmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Teacher_assignments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsFindFirstOrThrowArgs} args - Arguments to find a Teacher_assignments
     * @example
     * // Get one Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teacher_assignmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Teacher_assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findMany()
     *
     * // Get first 10 Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacher_assignmentsWithIdOnly = await prisma.teacher_assignments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends teacher_assignmentsFindManyArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Teacher_assignments.
     * @param {teacher_assignmentsCreateArgs} args - Arguments to create a Teacher_assignments.
     * @example
     * // Create one Teacher_assignments
     * const Teacher_assignments = await prisma.teacher_assignments.create({
     *   data: {
     *     // ... data to create a Teacher_assignments
     *   }
     * })
     *
     */
    create<T extends teacher_assignmentsCreateArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsCreateArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Teacher_assignments.
     * @param {teacher_assignmentsCreateManyArgs} args - Arguments to create many Teacher_assignments.
     * @example
     * // Create many Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends teacher_assignmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Teacher_assignments and returns the data saved in the database.
     * @param {teacher_assignmentsCreateManyAndReturnArgs} args - Arguments to create many Teacher_assignments.
     * @example
     * // Create many Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Teacher_assignments and only return the `id`
     * const teacher_assignmentsWithIdOnly = await prisma.teacher_assignments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends teacher_assignmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Teacher_assignments.
     * @param {teacher_assignmentsDeleteArgs} args - Arguments to delete one Teacher_assignments.
     * @example
     * // Delete one Teacher_assignments
     * const Teacher_assignments = await prisma.teacher_assignments.delete({
     *   where: {
     *     // ... filter to delete one Teacher_assignments
     *   }
     * })
     *
     */
    delete<T extends teacher_assignmentsDeleteArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Teacher_assignments.
     * @param {teacher_assignmentsUpdateArgs} args - Arguments to update one Teacher_assignments.
     * @example
     * // Update one Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends teacher_assignmentsUpdateArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Teacher_assignments.
     * @param {teacher_assignmentsDeleteManyArgs} args - Arguments to filter Teacher_assignments to delete.
     * @example
     * // Delete a few Teacher_assignments
     * const { count } = await prisma.teacher_assignments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends teacher_assignmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, teacher_assignmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Teacher_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends teacher_assignmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Teacher_assignments and returns the data updated in the database.
     * @param {teacher_assignmentsUpdateManyAndReturnArgs} args - Arguments to update many Teacher_assignments.
     * @example
     * // Update many Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Teacher_assignments and only return the `id`
     * const teacher_assignmentsWithIdOnly = await prisma.teacher_assignments.updateManyAndReturn({
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
    updateManyAndReturn<T extends teacher_assignmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Teacher_assignments.
     * @param {teacher_assignmentsUpsertArgs} args - Arguments to update or create a Teacher_assignments.
     * @example
     * // Update or create a Teacher_assignments
     * const teacher_assignments = await prisma.teacher_assignments.upsert({
     *   create: {
     *     // ... data to create a Teacher_assignments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher_assignments we want to update
     *   }
     * })
     */
    upsert<T extends teacher_assignmentsUpsertArgs>(args: Prisma.SelectSubset<T, teacher_assignmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__teacher_assignmentsClient<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Teacher_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsCountArgs} args - Arguments to filter Teacher_assignments to count.
     * @example
     * // Count the number of Teacher_assignments
     * const count = await prisma.teacher_assignments.count({
     *   where: {
     *     // ... the filter for the Teacher_assignments we want to count
     *   }
     * })
    **/
    count<T extends teacher_assignmentsCountArgs>(args?: Prisma.Subset<T, teacher_assignmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Teacher_assignmentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Teacher_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_assignmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Teacher_assignmentsAggregateArgs>(args: Prisma.Subset<T, Teacher_assignmentsAggregateArgs>): Prisma.PrismaPromise<GetTeacher_assignmentsAggregateType<T>>;
    /**
     * Group by Teacher_assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacher_assignmentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends teacher_assignmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: teacher_assignmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: teacher_assignmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, teacher_assignmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacher_assignmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacher_assignments model
     */
    readonly fields: teacher_assignmentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for teacher_assignments.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__teacher_assignmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    class<T extends Prisma.classesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.classesDefaultArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subject<T extends Prisma.subjectsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.subjectsDefaultArgs<ExtArgs>>): Prisma.Prisma__subjectsClient<runtime.Types.Result.GetResult<Prisma.$subjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the teacher_assignments model
 */
export interface teacher_assignmentsFieldRefs {
    readonly id: Prisma.FieldRef<"teacher_assignments", 'Int'>;
    readonly teacher_user_id: Prisma.FieldRef<"teacher_assignments", 'Int'>;
    readonly class_id: Prisma.FieldRef<"teacher_assignments", 'Int'>;
    readonly subject_id: Prisma.FieldRef<"teacher_assignments", 'Int'>;
    readonly assignment_details: Prisma.FieldRef<"teacher_assignments", 'String'>;
    readonly reason: Prisma.FieldRef<"teacher_assignments", 'String'>;
    readonly due_date: Prisma.FieldRef<"teacher_assignments", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"teacher_assignments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"teacher_assignments", 'DateTime'>;
}
/**
 * teacher_assignments findUnique
 */
export type teacher_assignmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which teacher_assignments to fetch.
     */
    where: Prisma.teacher_assignmentsWhereUniqueInput;
};
/**
 * teacher_assignments findUniqueOrThrow
 */
export type teacher_assignmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which teacher_assignments to fetch.
     */
    where: Prisma.teacher_assignmentsWhereUniqueInput;
};
/**
 * teacher_assignments findFirst
 */
export type teacher_assignmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which teacher_assignments to fetch.
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacher_assignments to fetch.
     */
    orderBy?: Prisma.teacher_assignmentsOrderByWithRelationInput | Prisma.teacher_assignmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teacher_assignments.
     */
    cursor?: Prisma.teacher_assignmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacher_assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacher_assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teacher_assignments.
     */
    distinct?: Prisma.Teacher_assignmentsScalarFieldEnum | Prisma.Teacher_assignmentsScalarFieldEnum[];
};
/**
 * teacher_assignments findFirstOrThrow
 */
export type teacher_assignmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which teacher_assignments to fetch.
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacher_assignments to fetch.
     */
    orderBy?: Prisma.teacher_assignmentsOrderByWithRelationInput | Prisma.teacher_assignmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teacher_assignments.
     */
    cursor?: Prisma.teacher_assignmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacher_assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacher_assignments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teacher_assignments.
     */
    distinct?: Prisma.Teacher_assignmentsScalarFieldEnum | Prisma.Teacher_assignmentsScalarFieldEnum[];
};
/**
 * teacher_assignments findMany
 */
export type teacher_assignmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which teacher_assignments to fetch.
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teacher_assignments to fetch.
     */
    orderBy?: Prisma.teacher_assignmentsOrderByWithRelationInput | Prisma.teacher_assignmentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teacher_assignments.
     */
    cursor?: Prisma.teacher_assignmentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teacher_assignments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teacher_assignments.
     */
    skip?: number;
    distinct?: Prisma.Teacher_assignmentsScalarFieldEnum | Prisma.Teacher_assignmentsScalarFieldEnum[];
};
/**
 * teacher_assignments create
 */
export type teacher_assignmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a teacher_assignments.
     */
    data: Prisma.XOR<Prisma.teacher_assignmentsCreateInput, Prisma.teacher_assignmentsUncheckedCreateInput>;
};
/**
 * teacher_assignments createMany
 */
export type teacher_assignmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many teacher_assignments.
     */
    data: Prisma.teacher_assignmentsCreateManyInput | Prisma.teacher_assignmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * teacher_assignments createManyAndReturn
 */
export type teacher_assignmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_assignments
     */
    select?: Prisma.teacher_assignmentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the teacher_assignments
     */
    omit?: Prisma.teacher_assignmentsOmit<ExtArgs> | null;
    /**
     * The data used to create many teacher_assignments.
     */
    data: Prisma.teacher_assignmentsCreateManyInput | Prisma.teacher_assignmentsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.teacher_assignmentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * teacher_assignments update
 */
export type teacher_assignmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a teacher_assignments.
     */
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateInput, Prisma.teacher_assignmentsUncheckedUpdateInput>;
    /**
     * Choose, which teacher_assignments to update.
     */
    where: Prisma.teacher_assignmentsWhereUniqueInput;
};
/**
 * teacher_assignments updateMany
 */
export type teacher_assignmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update teacher_assignments.
     */
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateManyMutationInput, Prisma.teacher_assignmentsUncheckedUpdateManyInput>;
    /**
     * Filter which teacher_assignments to update
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * Limit how many teacher_assignments to update.
     */
    limit?: number;
};
/**
 * teacher_assignments updateManyAndReturn
 */
export type teacher_assignmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher_assignments
     */
    select?: Prisma.teacher_assignmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the teacher_assignments
     */
    omit?: Prisma.teacher_assignmentsOmit<ExtArgs> | null;
    /**
     * The data used to update teacher_assignments.
     */
    data: Prisma.XOR<Prisma.teacher_assignmentsUpdateManyMutationInput, Prisma.teacher_assignmentsUncheckedUpdateManyInput>;
    /**
     * Filter which teacher_assignments to update
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * Limit how many teacher_assignments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.teacher_assignmentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * teacher_assignments upsert
 */
export type teacher_assignmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the teacher_assignments to update in case it exists.
     */
    where: Prisma.teacher_assignmentsWhereUniqueInput;
    /**
     * In case the teacher_assignments found by the `where` argument doesn't exist, create a new teacher_assignments with this data.
     */
    create: Prisma.XOR<Prisma.teacher_assignmentsCreateInput, Prisma.teacher_assignmentsUncheckedCreateInput>;
    /**
     * In case the teacher_assignments was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.teacher_assignmentsUpdateInput, Prisma.teacher_assignmentsUncheckedUpdateInput>;
};
/**
 * teacher_assignments delete
 */
export type teacher_assignmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which teacher_assignments to delete.
     */
    where: Prisma.teacher_assignmentsWhereUniqueInput;
};
/**
 * teacher_assignments deleteMany
 */
export type teacher_assignmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which teacher_assignments to delete
     */
    where?: Prisma.teacher_assignmentsWhereInput;
    /**
     * Limit how many teacher_assignments to delete.
     */
    limit?: number;
};
/**
 * teacher_assignments without action
 */
export type teacher_assignmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=teacher_assignments.d.ts.map