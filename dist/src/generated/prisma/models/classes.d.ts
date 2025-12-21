import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model classes
 *
 */
export type classesModel = runtime.Types.Result.DefaultSelection<Prisma.$classesPayload>;
export type AggregateClasses = {
    _count: ClassesCountAggregateOutputType | null;
    _avg: ClassesAvgAggregateOutputType | null;
    _sum: ClassesSumAggregateOutputType | null;
    _min: ClassesMinAggregateOutputType | null;
    _max: ClassesMaxAggregateOutputType | null;
};
export type ClassesAvgAggregateOutputType = {
    id: number | null;
};
export type ClassesSumAggregateOutputType = {
    id: number | null;
};
export type ClassesMinAggregateOutputType = {
    id: number | null;
    class: string | null;
};
export type ClassesMaxAggregateOutputType = {
    id: number | null;
    class: string | null;
};
export type ClassesCountAggregateOutputType = {
    id: number;
    class: number;
    _all: number;
};
export type ClassesAvgAggregateInputType = {
    id?: true;
};
export type ClassesSumAggregateInputType = {
    id?: true;
};
export type ClassesMinAggregateInputType = {
    id?: true;
    class?: true;
};
export type ClassesMaxAggregateInputType = {
    id?: true;
    class?: true;
};
export type ClassesCountAggregateInputType = {
    id?: true;
    class?: true;
    _all?: true;
};
export type ClassesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which classes to aggregate.
     */
    where?: Prisma.classesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of classes to fetch.
     */
    orderBy?: Prisma.classesOrderByWithRelationInput | Prisma.classesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.classesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` classes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` classes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned classes
    **/
    _count?: true | ClassesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ClassesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ClassesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClassesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClassesMaxAggregateInputType;
};
export type GetClassesAggregateType<T extends ClassesAggregateArgs> = {
    [P in keyof T & keyof AggregateClasses]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClasses[P]> : Prisma.GetScalarType<T[P], AggregateClasses[P]>;
};
export type classesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.classesWhereInput;
    orderBy?: Prisma.classesOrderByWithAggregationInput | Prisma.classesOrderByWithAggregationInput[];
    by: Prisma.ClassesScalarFieldEnum[] | Prisma.ClassesScalarFieldEnum;
    having?: Prisma.classesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClassesCountAggregateInputType | true;
    _avg?: ClassesAvgAggregateInputType;
    _sum?: ClassesSumAggregateInputType;
    _min?: ClassesMinAggregateInputType;
    _max?: ClassesMaxAggregateInputType;
};
export type ClassesGroupByOutputType = {
    id: number;
    class: string;
    _count: ClassesCountAggregateOutputType | null;
    _avg: ClassesAvgAggregateOutputType | null;
    _sum: ClassesSumAggregateOutputType | null;
    _min: ClassesMinAggregateOutputType | null;
    _max: ClassesMaxAggregateOutputType | null;
};
type GetClassesGroupByPayload<T extends classesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClassesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClassesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClassesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClassesGroupByOutputType[P]>;
}>>;
export type classesWhereInput = {
    AND?: Prisma.classesWhereInput | Prisma.classesWhereInput[];
    OR?: Prisma.classesWhereInput[];
    NOT?: Prisma.classesWhereInput | Prisma.classesWhereInput[];
    id?: Prisma.IntFilter<"classes"> | number;
    class?: Prisma.StringFilter<"classes"> | string;
    detail_students?: Prisma.Detail_studentsListRelationFilter;
    teacherAssignments?: Prisma.Teacher_assignmentsListRelationFilter;
};
export type classesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    detail_students?: Prisma.detail_studentsOrderByRelationAggregateInput;
    teacherAssignments?: Prisma.teacher_assignmentsOrderByRelationAggregateInput;
};
export type classesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    class?: string;
    AND?: Prisma.classesWhereInput | Prisma.classesWhereInput[];
    OR?: Prisma.classesWhereInput[];
    NOT?: Prisma.classesWhereInput | Prisma.classesWhereInput[];
    detail_students?: Prisma.Detail_studentsListRelationFilter;
    teacherAssignments?: Prisma.Teacher_assignmentsListRelationFilter;
}, "id" | "class">;
export type classesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
    _count?: Prisma.classesCountOrderByAggregateInput;
    _avg?: Prisma.classesAvgOrderByAggregateInput;
    _max?: Prisma.classesMaxOrderByAggregateInput;
    _min?: Prisma.classesMinOrderByAggregateInput;
    _sum?: Prisma.classesSumOrderByAggregateInput;
};
export type classesScalarWhereWithAggregatesInput = {
    AND?: Prisma.classesScalarWhereWithAggregatesInput | Prisma.classesScalarWhereWithAggregatesInput[];
    OR?: Prisma.classesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.classesScalarWhereWithAggregatesInput | Prisma.classesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"classes"> | number;
    class?: Prisma.StringWithAggregatesFilter<"classes"> | string;
};
export type classesCreateInput = {
    class: string;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutClassesInput;
    teacherAssignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutClassInput;
};
export type classesUncheckedCreateInput = {
    id?: number;
    class: string;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutClassesInput;
    teacherAssignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutClassInput;
};
export type classesUpdateInput = {
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutClassesNestedInput;
    teacherAssignments?: Prisma.teacher_assignmentsUpdateManyWithoutClassNestedInput;
};
export type classesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutClassesNestedInput;
    teacherAssignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutClassNestedInput;
};
export type classesCreateManyInput = {
    id?: number;
    class: string;
};
export type classesUpdateManyMutationInput = {
    class?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type classesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type classesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
};
export type classesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type classesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
};
export type classesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    class?: Prisma.SortOrder;
};
export type classesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ClassesScalarRelationFilter = {
    is?: Prisma.classesWhereInput;
    isNot?: Prisma.classesWhereInput;
};
export type classesCreateNestedOneWithoutDetail_studentsInput = {
    create?: Prisma.XOR<Prisma.classesCreateWithoutDetail_studentsInput, Prisma.classesUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.classesCreateOrConnectWithoutDetail_studentsInput;
    connect?: Prisma.classesWhereUniqueInput;
};
export type classesUpdateOneRequiredWithoutDetail_studentsNestedInput = {
    create?: Prisma.XOR<Prisma.classesCreateWithoutDetail_studentsInput, Prisma.classesUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.classesCreateOrConnectWithoutDetail_studentsInput;
    upsert?: Prisma.classesUpsertWithoutDetail_studentsInput;
    connect?: Prisma.classesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.classesUpdateToOneWithWhereWithoutDetail_studentsInput, Prisma.classesUpdateWithoutDetail_studentsInput>, Prisma.classesUncheckedUpdateWithoutDetail_studentsInput>;
};
export type classesCreateNestedOneWithoutTeacherAssignmentsInput = {
    create?: Prisma.XOR<Prisma.classesCreateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedCreateWithoutTeacherAssignmentsInput>;
    connectOrCreate?: Prisma.classesCreateOrConnectWithoutTeacherAssignmentsInput;
    connect?: Prisma.classesWhereUniqueInput;
};
export type classesUpdateOneRequiredWithoutTeacherAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.classesCreateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedCreateWithoutTeacherAssignmentsInput>;
    connectOrCreate?: Prisma.classesCreateOrConnectWithoutTeacherAssignmentsInput;
    upsert?: Prisma.classesUpsertWithoutTeacherAssignmentsInput;
    connect?: Prisma.classesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.classesUpdateToOneWithWhereWithoutTeacherAssignmentsInput, Prisma.classesUpdateWithoutTeacherAssignmentsInput>, Prisma.classesUncheckedUpdateWithoutTeacherAssignmentsInput>;
};
export type classesCreateWithoutDetail_studentsInput = {
    class: string;
    teacherAssignments?: Prisma.teacher_assignmentsCreateNestedManyWithoutClassInput;
};
export type classesUncheckedCreateWithoutDetail_studentsInput = {
    id?: number;
    class: string;
    teacherAssignments?: Prisma.teacher_assignmentsUncheckedCreateNestedManyWithoutClassInput;
};
export type classesCreateOrConnectWithoutDetail_studentsInput = {
    where: Prisma.classesWhereUniqueInput;
    create: Prisma.XOR<Prisma.classesCreateWithoutDetail_studentsInput, Prisma.classesUncheckedCreateWithoutDetail_studentsInput>;
};
export type classesUpsertWithoutDetail_studentsInput = {
    update: Prisma.XOR<Prisma.classesUpdateWithoutDetail_studentsInput, Prisma.classesUncheckedUpdateWithoutDetail_studentsInput>;
    create: Prisma.XOR<Prisma.classesCreateWithoutDetail_studentsInput, Prisma.classesUncheckedCreateWithoutDetail_studentsInput>;
    where?: Prisma.classesWhereInput;
};
export type classesUpdateToOneWithWhereWithoutDetail_studentsInput = {
    where?: Prisma.classesWhereInput;
    data: Prisma.XOR<Prisma.classesUpdateWithoutDetail_studentsInput, Prisma.classesUncheckedUpdateWithoutDetail_studentsInput>;
};
export type classesUpdateWithoutDetail_studentsInput = {
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherAssignments?: Prisma.teacher_assignmentsUpdateManyWithoutClassNestedInput;
};
export type classesUncheckedUpdateWithoutDetail_studentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherAssignments?: Prisma.teacher_assignmentsUncheckedUpdateManyWithoutClassNestedInput;
};
export type classesCreateWithoutTeacherAssignmentsInput = {
    class: string;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutClassesInput;
};
export type classesUncheckedCreateWithoutTeacherAssignmentsInput = {
    id?: number;
    class: string;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutClassesInput;
};
export type classesCreateOrConnectWithoutTeacherAssignmentsInput = {
    where: Prisma.classesWhereUniqueInput;
    create: Prisma.XOR<Prisma.classesCreateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedCreateWithoutTeacherAssignmentsInput>;
};
export type classesUpsertWithoutTeacherAssignmentsInput = {
    update: Prisma.XOR<Prisma.classesUpdateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedUpdateWithoutTeacherAssignmentsInput>;
    create: Prisma.XOR<Prisma.classesCreateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedCreateWithoutTeacherAssignmentsInput>;
    where?: Prisma.classesWhereInput;
};
export type classesUpdateToOneWithWhereWithoutTeacherAssignmentsInput = {
    where?: Prisma.classesWhereInput;
    data: Prisma.XOR<Prisma.classesUpdateWithoutTeacherAssignmentsInput, Prisma.classesUncheckedUpdateWithoutTeacherAssignmentsInput>;
};
export type classesUpdateWithoutTeacherAssignmentsInput = {
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutClassesNestedInput;
};
export type classesUncheckedUpdateWithoutTeacherAssignmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    class?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutClassesNestedInput;
};
/**
 * Count Type ClassesCountOutputType
 */
export type ClassesCountOutputType = {
    detail_students: number;
    teacherAssignments: number;
};
export type ClassesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | ClassesCountOutputTypeCountDetail_studentsArgs;
    teacherAssignments?: boolean | ClassesCountOutputTypeCountTeacherAssignmentsArgs;
};
/**
 * ClassesCountOutputType without action
 */
export type ClassesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassesCountOutputType
     */
    select?: Prisma.ClassesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ClassesCountOutputType without action
 */
export type ClassesCountOutputTypeCountDetail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detail_studentsWhereInput;
};
/**
 * ClassesCountOutputType without action
 */
export type ClassesCountOutputTypeCountTeacherAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.teacher_assignmentsWhereInput;
};
export type classesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    class?: boolean;
    detail_students?: boolean | Prisma.classes$detail_studentsArgs<ExtArgs>;
    teacherAssignments?: boolean | Prisma.classes$teacherAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["classes"]>;
export type classesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    class?: boolean;
}, ExtArgs["result"]["classes"]>;
export type classesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    class?: boolean;
}, ExtArgs["result"]["classes"]>;
export type classesSelectScalar = {
    id?: boolean;
    class?: boolean;
};
export type classesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "class", ExtArgs["result"]["classes"]>;
export type classesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.classes$detail_studentsArgs<ExtArgs>;
    teacherAssignments?: boolean | Prisma.classes$teacherAssignmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ClassesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type classesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type classesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $classesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "classes";
    objects: {
        detail_students: Prisma.$detail_studentsPayload<ExtArgs>[];
        teacherAssignments: Prisma.$teacher_assignmentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        class: string;
    }, ExtArgs["result"]["classes"]>;
    composites: {};
};
export type classesGetPayload<S extends boolean | null | undefined | classesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$classesPayload, S>;
export type classesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<classesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClassesCountAggregateInputType | true;
};
export interface classesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['classes'];
        meta: {
            name: 'classes';
        };
    };
    /**
     * Find zero or one Classes that matches the filter.
     * @param {classesFindUniqueArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classesFindUniqueArgs>(args: Prisma.SelectSubset<T, classesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Classes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classesFindUniqueOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, classesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classesFindFirstArgs>(args?: Prisma.SelectSubset<T, classesFindFirstArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Classes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindFirstOrThrowArgs} args - Arguments to find a Classes
     * @example
     * // Get one Classes
     * const classes = await prisma.classes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, classesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.classes.findMany()
     *
     * // Get first 10 Classes
     * const classes = await prisma.classes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const classesWithIdOnly = await prisma.classes.findMany({ select: { id: true } })
     *
     */
    findMany<T extends classesFindManyArgs>(args?: Prisma.SelectSubset<T, classesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Classes.
     * @param {classesCreateArgs} args - Arguments to create a Classes.
     * @example
     * // Create one Classes
     * const Classes = await prisma.classes.create({
     *   data: {
     *     // ... data to create a Classes
     *   }
     * })
     *
     */
    create<T extends classesCreateArgs>(args: Prisma.SelectSubset<T, classesCreateArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Classes.
     * @param {classesCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends classesCreateManyArgs>(args?: Prisma.SelectSubset<T, classesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Classes and returns the data saved in the database.
     * @param {classesCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const classes = await prisma.classes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends classesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, classesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Classes.
     * @param {classesDeleteArgs} args - Arguments to delete one Classes.
     * @example
     * // Delete one Classes
     * const Classes = await prisma.classes.delete({
     *   where: {
     *     // ... filter to delete one Classes
     *   }
     * })
     *
     */
    delete<T extends classesDeleteArgs>(args: Prisma.SelectSubset<T, classesDeleteArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Classes.
     * @param {classesUpdateArgs} args - Arguments to update one Classes.
     * @example
     * // Update one Classes
     * const classes = await prisma.classes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends classesUpdateArgs>(args: Prisma.SelectSubset<T, classesUpdateArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Classes.
     * @param {classesDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.classes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends classesDeleteManyArgs>(args?: Prisma.SelectSubset<T, classesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends classesUpdateManyArgs>(args: Prisma.SelectSubset<T, classesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {classesUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const classes = await prisma.classes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Classes and only return the `id`
     * const classesWithIdOnly = await prisma.classes.updateManyAndReturn({
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
    updateManyAndReturn<T extends classesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, classesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Classes.
     * @param {classesUpsertArgs} args - Arguments to update or create a Classes.
     * @example
     * // Update or create a Classes
     * const classes = await prisma.classes.upsert({
     *   create: {
     *     // ... data to create a Classes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classes we want to update
     *   }
     * })
     */
    upsert<T extends classesUpsertArgs>(args: Prisma.SelectSubset<T, classesUpsertArgs<ExtArgs>>): Prisma.Prisma__classesClient<runtime.Types.Result.GetResult<Prisma.$classesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.classes.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends classesCountArgs>(args?: Prisma.Subset<T, classesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClassesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassesAggregateArgs>(args: Prisma.Subset<T, ClassesAggregateArgs>): Prisma.PrismaPromise<GetClassesAggregateType<T>>;
    /**
     * Group by Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends classesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: classesGroupByArgs['orderBy'];
    } : {
        orderBy?: classesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, classesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the classes model
     */
    readonly fields: classesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for classes.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__classesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detail_students<T extends Prisma.classes$detail_studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.classes$detail_studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    teacherAssignments<T extends Prisma.classes$teacherAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.classes$teacherAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$teacher_assignmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the classes model
 */
export interface classesFieldRefs {
    readonly id: Prisma.FieldRef<"classes", 'Int'>;
    readonly class: Prisma.FieldRef<"classes", 'String'>;
}
/**
 * classes findUnique
 */
export type classesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter, which classes to fetch.
     */
    where: Prisma.classesWhereUniqueInput;
};
/**
 * classes findUniqueOrThrow
 */
export type classesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter, which classes to fetch.
     */
    where: Prisma.classesWhereUniqueInput;
};
/**
 * classes findFirst
 */
export type classesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter, which classes to fetch.
     */
    where?: Prisma.classesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of classes to fetch.
     */
    orderBy?: Prisma.classesOrderByWithRelationInput | Prisma.classesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for classes.
     */
    cursor?: Prisma.classesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` classes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` classes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of classes.
     */
    distinct?: Prisma.ClassesScalarFieldEnum | Prisma.ClassesScalarFieldEnum[];
};
/**
 * classes findFirstOrThrow
 */
export type classesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter, which classes to fetch.
     */
    where?: Prisma.classesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of classes to fetch.
     */
    orderBy?: Prisma.classesOrderByWithRelationInput | Prisma.classesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for classes.
     */
    cursor?: Prisma.classesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` classes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` classes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of classes.
     */
    distinct?: Prisma.ClassesScalarFieldEnum | Prisma.ClassesScalarFieldEnum[];
};
/**
 * classes findMany
 */
export type classesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter, which classes to fetch.
     */
    where?: Prisma.classesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of classes to fetch.
     */
    orderBy?: Prisma.classesOrderByWithRelationInput | Prisma.classesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing classes.
     */
    cursor?: Prisma.classesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` classes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` classes.
     */
    skip?: number;
    distinct?: Prisma.ClassesScalarFieldEnum | Prisma.ClassesScalarFieldEnum[];
};
/**
 * classes create
 */
export type classesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * The data needed to create a classes.
     */
    data: Prisma.XOR<Prisma.classesCreateInput, Prisma.classesUncheckedCreateInput>;
};
/**
 * classes createMany
 */
export type classesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many classes.
     */
    data: Prisma.classesCreateManyInput | Prisma.classesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * classes createManyAndReturn
 */
export type classesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * The data used to create many classes.
     */
    data: Prisma.classesCreateManyInput | Prisma.classesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * classes update
 */
export type classesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * The data needed to update a classes.
     */
    data: Prisma.XOR<Prisma.classesUpdateInput, Prisma.classesUncheckedUpdateInput>;
    /**
     * Choose, which classes to update.
     */
    where: Prisma.classesWhereUniqueInput;
};
/**
 * classes updateMany
 */
export type classesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update classes.
     */
    data: Prisma.XOR<Prisma.classesUpdateManyMutationInput, Prisma.classesUncheckedUpdateManyInput>;
    /**
     * Filter which classes to update
     */
    where?: Prisma.classesWhereInput;
    /**
     * Limit how many classes to update.
     */
    limit?: number;
};
/**
 * classes updateManyAndReturn
 */
export type classesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * The data used to update classes.
     */
    data: Prisma.XOR<Prisma.classesUpdateManyMutationInput, Prisma.classesUncheckedUpdateManyInput>;
    /**
     * Filter which classes to update
     */
    where?: Prisma.classesWhereInput;
    /**
     * Limit how many classes to update.
     */
    limit?: number;
};
/**
 * classes upsert
 */
export type classesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * The filter to search for the classes to update in case it exists.
     */
    where: Prisma.classesWhereUniqueInput;
    /**
     * In case the classes found by the `where` argument doesn't exist, create a new classes with this data.
     */
    create: Prisma.XOR<Prisma.classesCreateInput, Prisma.classesUncheckedCreateInput>;
    /**
     * In case the classes was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.classesUpdateInput, Prisma.classesUncheckedUpdateInput>;
};
/**
 * classes delete
 */
export type classesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
    /**
     * Filter which classes to delete.
     */
    where: Prisma.classesWhereUniqueInput;
};
/**
 * classes deleteMany
 */
export type classesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which classes to delete
     */
    where?: Prisma.classesWhereInput;
    /**
     * Limit how many classes to delete.
     */
    limit?: number;
};
/**
 * classes.detail_students
 */
export type classes$detail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * classes.teacherAssignments
 */
export type classes$teacherAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * classes without action
 */
export type classesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classes
     */
    select?: Prisma.classesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the classes
     */
    omit?: Prisma.classesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.classesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=classes.d.ts.map