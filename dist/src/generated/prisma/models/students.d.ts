import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model students
 *
 */
export type studentsModel = runtime.Types.Result.DefaultSelection<Prisma.$studentsPayload>;
export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null;
    _avg: StudentsAvgAggregateOutputType | null;
    _sum: StudentsSumAggregateOutputType | null;
    _min: StudentsMinAggregateOutputType | null;
    _max: StudentsMaxAggregateOutputType | null;
};
export type StudentsAvgAggregateOutputType = {
    point: number | null;
};
export type StudentsSumAggregateOutputType = {
    point: number | null;
};
export type StudentsMinAggregateOutputType = {
    nis: string | null;
    name: string | null;
    point: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentsMaxAggregateOutputType = {
    nis: string | null;
    name: string | null;
    point: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StudentsCountAggregateOutputType = {
    nis: number;
    name: number;
    point: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type StudentsAvgAggregateInputType = {
    point?: true;
};
export type StudentsSumAggregateInputType = {
    point?: true;
};
export type StudentsMinAggregateInputType = {
    nis?: true;
    name?: true;
    point?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentsMaxAggregateInputType = {
    nis?: true;
    name?: true;
    point?: true;
    created_at?: true;
    updated_at?: true;
};
export type StudentsCountAggregateInputType = {
    nis?: true;
    name?: true;
    point?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type StudentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which students to aggregate.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
    **/
    _count?: true | StudentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StudentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StudentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType;
};
export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
    [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudents[P]> : Prisma.GetScalarType<T[P], AggregateStudents[P]>;
};
export type studentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.studentsWhereInput;
    orderBy?: Prisma.studentsOrderByWithAggregationInput | Prisma.studentsOrderByWithAggregationInput[];
    by: Prisma.StudentsScalarFieldEnum[] | Prisma.StudentsScalarFieldEnum;
    having?: Prisma.studentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentsCountAggregateInputType | true;
    _avg?: StudentsAvgAggregateInputType;
    _sum?: StudentsSumAggregateInputType;
    _min?: StudentsMinAggregateInputType;
    _max?: StudentsMaxAggregateInputType;
};
export type StudentsGroupByOutputType = {
    nis: string;
    name: string;
    point: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: StudentsCountAggregateOutputType | null;
    _avg: StudentsAvgAggregateOutputType | null;
    _sum: StudentsSumAggregateOutputType | null;
    _min: StudentsMinAggregateOutputType | null;
    _max: StudentsMaxAggregateOutputType | null;
};
type GetStudentsGroupByPayload<T extends studentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentsGroupByOutputType[P]>;
}>>;
export type studentsWhereInput = {
    AND?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    OR?: Prisma.studentsWhereInput[];
    NOT?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    nis?: Prisma.StringFilter<"students"> | string;
    name?: Prisma.StringFilter<"students"> | string;
    point?: Prisma.IntFilter<"students"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"students"> | Date | string | null;
    detail_students?: Prisma.Detail_studentsListRelationFilter;
    studentPermits?: Prisma.Student_permitsListRelationFilter;
    violations?: Prisma.ViolationsListRelationFilter;
};
export type studentsOrderByWithRelationInput = {
    nis?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    detail_students?: Prisma.detail_studentsOrderByRelationAggregateInput;
    studentPermits?: Prisma.student_permitsOrderByRelationAggregateInput;
    violations?: Prisma.violationsOrderByRelationAggregateInput;
};
export type studentsWhereUniqueInput = Prisma.AtLeast<{
    nis?: string;
    AND?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    OR?: Prisma.studentsWhereInput[];
    NOT?: Prisma.studentsWhereInput | Prisma.studentsWhereInput[];
    name?: Prisma.StringFilter<"students"> | string;
    point?: Prisma.IntFilter<"students"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"students"> | Date | string | null;
    detail_students?: Prisma.Detail_studentsListRelationFilter;
    studentPermits?: Prisma.Student_permitsListRelationFilter;
    violations?: Prisma.ViolationsListRelationFilter;
}, "nis">;
export type studentsOrderByWithAggregationInput = {
    nis?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.studentsCountOrderByAggregateInput;
    _avg?: Prisma.studentsAvgOrderByAggregateInput;
    _max?: Prisma.studentsMaxOrderByAggregateInput;
    _min?: Prisma.studentsMinOrderByAggregateInput;
    _sum?: Prisma.studentsSumOrderByAggregateInput;
};
export type studentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.studentsScalarWhereWithAggregatesInput | Prisma.studentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.studentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.studentsScalarWhereWithAggregatesInput | Prisma.studentsScalarWhereWithAggregatesInput[];
    nis?: Prisma.StringWithAggregatesFilter<"students"> | string;
    name?: Prisma.StringWithAggregatesFilter<"students"> | string;
    point?: Prisma.IntWithAggregatesFilter<"students"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"students"> | Date | string | null;
};
export type studentsCreateInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutStudentInput;
    studentPermits?: Prisma.student_permitsCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsCreateNestedManyWithoutStudentInput;
};
export type studentsUncheckedCreateInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutStudentInput;
    studentPermits?: Prisma.student_permitsUncheckedCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutStudentInput;
};
export type studentsUpdateInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutStudentNestedInput;
    studentPermits?: Prisma.student_permitsUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutStudentNestedInput;
};
export type studentsUncheckedUpdateInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutStudentNestedInput;
    studentPermits?: Prisma.student_permitsUncheckedUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutStudentNestedInput;
};
export type studentsCreateManyInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type studentsUpdateManyMutationInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type studentsUncheckedUpdateManyInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type StudentsScalarRelationFilter = {
    is?: Prisma.studentsWhereInput;
    isNot?: Prisma.studentsWhereInput;
};
export type studentsCountOrderByAggregateInput = {
    nis?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type studentsAvgOrderByAggregateInput = {
    point?: Prisma.SortOrder;
};
export type studentsMaxOrderByAggregateInput = {
    nis?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type studentsMinOrderByAggregateInput = {
    nis?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type studentsSumOrderByAggregateInput = {
    point?: Prisma.SortOrder;
};
export type studentsCreateNestedOneWithoutDetail_studentsInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutDetail_studentsInput, Prisma.studentsUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutDetail_studentsInput;
    connect?: Prisma.studentsWhereUniqueInput;
};
export type studentsUpdateOneRequiredWithoutDetail_studentsNestedInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutDetail_studentsInput, Prisma.studentsUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutDetail_studentsInput;
    upsert?: Prisma.studentsUpsertWithoutDetail_studentsInput;
    connect?: Prisma.studentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.studentsUpdateToOneWithWhereWithoutDetail_studentsInput, Prisma.studentsUpdateWithoutDetail_studentsInput>, Prisma.studentsUncheckedUpdateWithoutDetail_studentsInput>;
};
export type studentsCreateNestedOneWithoutViolationsInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutViolationsInput, Prisma.studentsUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutViolationsInput;
    connect?: Prisma.studentsWhereUniqueInput;
};
export type studentsUpdateOneRequiredWithoutViolationsNestedInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutViolationsInput, Prisma.studentsUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutViolationsInput;
    upsert?: Prisma.studentsUpsertWithoutViolationsInput;
    connect?: Prisma.studentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.studentsUpdateToOneWithWhereWithoutViolationsInput, Prisma.studentsUpdateWithoutViolationsInput>, Prisma.studentsUncheckedUpdateWithoutViolationsInput>;
};
export type studentsCreateNestedOneWithoutStudentPermitsInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutStudentPermitsInput, Prisma.studentsUncheckedCreateWithoutStudentPermitsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutStudentPermitsInput;
    connect?: Prisma.studentsWhereUniqueInput;
};
export type studentsUpdateOneRequiredWithoutStudentPermitsNestedInput = {
    create?: Prisma.XOR<Prisma.studentsCreateWithoutStudentPermitsInput, Prisma.studentsUncheckedCreateWithoutStudentPermitsInput>;
    connectOrCreate?: Prisma.studentsCreateOrConnectWithoutStudentPermitsInput;
    upsert?: Prisma.studentsUpsertWithoutStudentPermitsInput;
    connect?: Prisma.studentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.studentsUpdateToOneWithWhereWithoutStudentPermitsInput, Prisma.studentsUpdateWithoutStudentPermitsInput>, Prisma.studentsUncheckedUpdateWithoutStudentPermitsInput>;
};
export type studentsCreateWithoutDetail_studentsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    studentPermits?: Prisma.student_permitsCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsCreateNestedManyWithoutStudentInput;
};
export type studentsUncheckedCreateWithoutDetail_studentsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    studentPermits?: Prisma.student_permitsUncheckedCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutStudentInput;
};
export type studentsCreateOrConnectWithoutDetail_studentsInput = {
    where: Prisma.studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.studentsCreateWithoutDetail_studentsInput, Prisma.studentsUncheckedCreateWithoutDetail_studentsInput>;
};
export type studentsUpsertWithoutDetail_studentsInput = {
    update: Prisma.XOR<Prisma.studentsUpdateWithoutDetail_studentsInput, Prisma.studentsUncheckedUpdateWithoutDetail_studentsInput>;
    create: Prisma.XOR<Prisma.studentsCreateWithoutDetail_studentsInput, Prisma.studentsUncheckedCreateWithoutDetail_studentsInput>;
    where?: Prisma.studentsWhereInput;
};
export type studentsUpdateToOneWithWhereWithoutDetail_studentsInput = {
    where?: Prisma.studentsWhereInput;
    data: Prisma.XOR<Prisma.studentsUpdateWithoutDetail_studentsInput, Prisma.studentsUncheckedUpdateWithoutDetail_studentsInput>;
};
export type studentsUpdateWithoutDetail_studentsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    studentPermits?: Prisma.student_permitsUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutStudentNestedInput;
};
export type studentsUncheckedUpdateWithoutDetail_studentsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    studentPermits?: Prisma.student_permitsUncheckedUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutStudentNestedInput;
};
export type studentsCreateWithoutViolationsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutStudentInput;
    studentPermits?: Prisma.student_permitsCreateNestedManyWithoutStudentInput;
};
export type studentsUncheckedCreateWithoutViolationsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutStudentInput;
    studentPermits?: Prisma.student_permitsUncheckedCreateNestedManyWithoutStudentInput;
};
export type studentsCreateOrConnectWithoutViolationsInput = {
    where: Prisma.studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.studentsCreateWithoutViolationsInput, Prisma.studentsUncheckedCreateWithoutViolationsInput>;
};
export type studentsUpsertWithoutViolationsInput = {
    update: Prisma.XOR<Prisma.studentsUpdateWithoutViolationsInput, Prisma.studentsUncheckedUpdateWithoutViolationsInput>;
    create: Prisma.XOR<Prisma.studentsCreateWithoutViolationsInput, Prisma.studentsUncheckedCreateWithoutViolationsInput>;
    where?: Prisma.studentsWhereInput;
};
export type studentsUpdateToOneWithWhereWithoutViolationsInput = {
    where?: Prisma.studentsWhereInput;
    data: Prisma.XOR<Prisma.studentsUpdateWithoutViolationsInput, Prisma.studentsUncheckedUpdateWithoutViolationsInput>;
};
export type studentsUpdateWithoutViolationsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutStudentNestedInput;
    studentPermits?: Prisma.student_permitsUpdateManyWithoutStudentNestedInput;
};
export type studentsUncheckedUpdateWithoutViolationsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutStudentNestedInput;
    studentPermits?: Prisma.student_permitsUncheckedUpdateManyWithoutStudentNestedInput;
};
export type studentsCreateWithoutStudentPermitsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsCreateNestedManyWithoutStudentInput;
};
export type studentsUncheckedCreateWithoutStudentPermitsInput = {
    nis: string;
    name: string;
    point?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutStudentInput;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutStudentInput;
};
export type studentsCreateOrConnectWithoutStudentPermitsInput = {
    where: Prisma.studentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.studentsCreateWithoutStudentPermitsInput, Prisma.studentsUncheckedCreateWithoutStudentPermitsInput>;
};
export type studentsUpsertWithoutStudentPermitsInput = {
    update: Prisma.XOR<Prisma.studentsUpdateWithoutStudentPermitsInput, Prisma.studentsUncheckedUpdateWithoutStudentPermitsInput>;
    create: Prisma.XOR<Prisma.studentsCreateWithoutStudentPermitsInput, Prisma.studentsUncheckedCreateWithoutStudentPermitsInput>;
    where?: Prisma.studentsWhereInput;
};
export type studentsUpdateToOneWithWhereWithoutStudentPermitsInput = {
    where?: Prisma.studentsWhereInput;
    data: Prisma.XOR<Prisma.studentsUpdateWithoutStudentPermitsInput, Prisma.studentsUncheckedUpdateWithoutStudentPermitsInput>;
};
export type studentsUpdateWithoutStudentPermitsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutStudentNestedInput;
};
export type studentsUncheckedUpdateWithoutStudentPermitsInput = {
    nis?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutStudentNestedInput;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutStudentNestedInput;
};
/**
 * Count Type StudentsCountOutputType
 */
export type StudentsCountOutputType = {
    detail_students: number;
    studentPermits: number;
    violations: number;
};
export type StudentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | StudentsCountOutputTypeCountDetail_studentsArgs;
    studentPermits?: boolean | StudentsCountOutputTypeCountStudentPermitsArgs;
    violations?: boolean | StudentsCountOutputTypeCountViolationsArgs;
};
/**
 * StudentsCountOutputType without action
 */
export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: Prisma.StudentsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StudentsCountOutputType without action
 */
export type StudentsCountOutputTypeCountDetail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detail_studentsWhereInput;
};
/**
 * StudentsCountOutputType without action
 */
export type StudentsCountOutputTypeCountStudentPermitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.student_permitsWhereInput;
};
/**
 * StudentsCountOutputType without action
 */
export type StudentsCountOutputTypeCountViolationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violationsWhereInput;
};
export type studentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nis?: boolean;
    name?: boolean;
    point?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    detail_students?: boolean | Prisma.students$detail_studentsArgs<ExtArgs>;
    studentPermits?: boolean | Prisma.students$studentPermitsArgs<ExtArgs>;
    violations?: boolean | Prisma.students$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["students"]>;
export type studentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nis?: boolean;
    name?: boolean;
    point?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["students"]>;
export type studentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    nis?: boolean;
    name?: boolean;
    point?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["students"]>;
export type studentsSelectScalar = {
    nis?: boolean;
    name?: boolean;
    point?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type studentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"nis" | "name" | "point" | "created_at" | "updated_at", ExtArgs["result"]["students"]>;
export type studentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.students$detail_studentsArgs<ExtArgs>;
    studentPermits?: boolean | Prisma.students$studentPermitsArgs<ExtArgs>;
    violations?: boolean | Prisma.students$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type studentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type studentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $studentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "students";
    objects: {
        detail_students: Prisma.$detail_studentsPayload<ExtArgs>[];
        studentPermits: Prisma.$student_permitsPayload<ExtArgs>[];
        violations: Prisma.$violationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        nis: string;
        name: string;
        point: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["students"]>;
    composites: {};
};
export type studentsGetPayload<S extends boolean | null | undefined | studentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$studentsPayload, S>;
export type studentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<studentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentsCountAggregateInputType | true;
};
export interface studentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['students'];
        meta: {
            name: 'students';
        };
    };
    /**
     * Find zero or one Students that matches the filter.
     * @param {studentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentsFindUniqueArgs>(args: Prisma.SelectSubset<T, studentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, studentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentsFindFirstArgs>(args?: Prisma.SelectSubset<T, studentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, studentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     *
     * // Only select the `nis`
     * const studentsWithNisOnly = await prisma.students.findMany({ select: { nis: true } })
     *
     */
    findMany<T extends studentsFindManyArgs>(args?: Prisma.SelectSubset<T, studentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Students.
     * @param {studentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     *
     */
    create<T extends studentsCreateArgs>(args: Prisma.SelectSubset<T, studentsCreateArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Students.
     * @param {studentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends studentsCreateManyArgs>(args?: Prisma.SelectSubset<T, studentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Students and only return the `nis`
     * const studentsWithNisOnly = await prisma.students.createManyAndReturn({
     *   select: { nis: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends studentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, studentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Students.
     * @param {studentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     *
     */
    delete<T extends studentsDeleteArgs>(args: Prisma.SelectSubset<T, studentsDeleteArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Students.
     * @param {studentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends studentsUpdateArgs>(args: Prisma.SelectSubset<T, studentsUpdateArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Students.
     * @param {studentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends studentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, studentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends studentsUpdateManyArgs>(args: Prisma.SelectSubset<T, studentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Students and only return the `nis`
     * const studentsWithNisOnly = await prisma.students.updateManyAndReturn({
     *   select: { nis: true },
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
    updateManyAndReturn<T extends studentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, studentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Students.
     * @param {studentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends studentsUpsertArgs>(args: Prisma.SelectSubset<T, studentsUpsertArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentsCountArgs>(args?: Prisma.Subset<T, studentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Prisma.Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>;
    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends studentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: studentsGroupByArgs['orderBy'];
    } : {
        orderBy?: studentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, studentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the students model
     */
    readonly fields: studentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for students.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__studentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detail_students<T extends Prisma.students$detail_studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.students$detail_studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    studentPermits<T extends Prisma.students$studentPermitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.students$studentPermitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$student_permitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    violations<T extends Prisma.students$violationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.students$violationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the students model
 */
export interface studentsFieldRefs {
    readonly nis: Prisma.FieldRef<"students", 'String'>;
    readonly name: Prisma.FieldRef<"students", 'String'>;
    readonly point: Prisma.FieldRef<"students", 'Int'>;
    readonly created_at: Prisma.FieldRef<"students", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"students", 'DateTime'>;
}
/**
 * students findUnique
 */
export type studentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students findUniqueOrThrow
 */
export type studentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students findFirst
 */
export type studentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students findFirstOrThrow
 */
export type studentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students findMany
 */
export type studentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: Prisma.studentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: Prisma.studentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
/**
 * students create
 */
export type studentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a students.
     */
    data: Prisma.XOR<Prisma.studentsCreateInput, Prisma.studentsUncheckedCreateInput>;
};
/**
 * students createMany
 */
export type studentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: Prisma.studentsCreateManyInput | Prisma.studentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * students createManyAndReturn
 */
export type studentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data used to create many students.
     */
    data: Prisma.studentsCreateManyInput | Prisma.studentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * students update
 */
export type studentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateInput, Prisma.studentsUncheckedUpdateInput>;
    /**
     * Choose, which students to update.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students updateMany
 */
export type studentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateManyMutationInput, Prisma.studentsUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to update.
     */
    limit?: number;
};
/**
 * students updateManyAndReturn
 */
export type studentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * The data used to update students.
     */
    data: Prisma.XOR<Prisma.studentsUpdateManyMutationInput, Prisma.studentsUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to update.
     */
    limit?: number;
};
/**
 * students upsert
 */
export type studentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the students to update in case it exists.
     */
    where: Prisma.studentsWhereUniqueInput;
    /**
     * In case the students found by the `where` argument doesn't exist, create a new students with this data.
     */
    create: Prisma.XOR<Prisma.studentsCreateInput, Prisma.studentsUncheckedCreateInput>;
    /**
     * In case the students was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.studentsUpdateInput, Prisma.studentsUncheckedUpdateInput>;
};
/**
 * students delete
 */
export type studentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
    /**
     * Filter which students to delete.
     */
    where: Prisma.studentsWhereUniqueInput;
};
/**
 * students deleteMany
 */
export type studentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: Prisma.studentsWhereInput;
    /**
     * Limit how many students to delete.
     */
    limit?: number;
};
/**
 * students.detail_students
 */
export type students$detail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.detail_studentsWhereInput;
    orderBy?: Prisma.detail_studentsOrderByWithRelationInput | Prisma.detail_studentsOrderByWithRelationInput[];
    cursor?: Prisma.detail_studentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detail_studentsScalarFieldEnum | Prisma.Detail_studentsScalarFieldEnum[];
};
/**
 * students.studentPermits
 */
export type students$studentPermitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * students.violations
 */
export type students$violationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * students without action
 */
export type studentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the students
     */
    select?: Prisma.studentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the students
     */
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.studentsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=students.d.ts.map