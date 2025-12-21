import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model PiketSchedule
 *
 */
export type PiketScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$PiketSchedulePayload>;
export type AggregatePiketSchedule = {
    _count: PiketScheduleCountAggregateOutputType | null;
    _avg: PiketScheduleAvgAggregateOutputType | null;
    _sum: PiketScheduleSumAggregateOutputType | null;
    _min: PiketScheduleMinAggregateOutputType | null;
    _max: PiketScheduleMaxAggregateOutputType | null;
};
export type PiketScheduleAvgAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    day_of_week: number | null;
};
export type PiketScheduleSumAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    day_of_week: number | null;
};
export type PiketScheduleMinAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    day_of_week: number | null;
};
export type PiketScheduleMaxAggregateOutputType = {
    id: number | null;
    teacher_user_id: number | null;
    day_of_week: number | null;
};
export type PiketScheduleCountAggregateOutputType = {
    id: number;
    teacher_user_id: number;
    day_of_week: number;
    _all: number;
};
export type PiketScheduleAvgAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    day_of_week?: true;
};
export type PiketScheduleSumAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    day_of_week?: true;
};
export type PiketScheduleMinAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    day_of_week?: true;
};
export type PiketScheduleMaxAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    day_of_week?: true;
};
export type PiketScheduleCountAggregateInputType = {
    id?: true;
    teacher_user_id?: true;
    day_of_week?: true;
    _all?: true;
};
export type PiketScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PiketSchedule to aggregate.
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PiketSchedules to fetch.
     */
    orderBy?: Prisma.PiketScheduleOrderByWithRelationInput | Prisma.PiketScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PiketScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PiketSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PiketSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PiketSchedules
    **/
    _count?: true | PiketScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PiketScheduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PiketScheduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PiketScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PiketScheduleMaxAggregateInputType;
};
export type GetPiketScheduleAggregateType<T extends PiketScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregatePiketSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePiketSchedule[P]> : Prisma.GetScalarType<T[P], AggregatePiketSchedule[P]>;
};
export type PiketScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PiketScheduleWhereInput;
    orderBy?: Prisma.PiketScheduleOrderByWithAggregationInput | Prisma.PiketScheduleOrderByWithAggregationInput[];
    by: Prisma.PiketScheduleScalarFieldEnum[] | Prisma.PiketScheduleScalarFieldEnum;
    having?: Prisma.PiketScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PiketScheduleCountAggregateInputType | true;
    _avg?: PiketScheduleAvgAggregateInputType;
    _sum?: PiketScheduleSumAggregateInputType;
    _min?: PiketScheduleMinAggregateInputType;
    _max?: PiketScheduleMaxAggregateInputType;
};
export type PiketScheduleGroupByOutputType = {
    id: number;
    teacher_user_id: number;
    day_of_week: number;
    _count: PiketScheduleCountAggregateOutputType | null;
    _avg: PiketScheduleAvgAggregateOutputType | null;
    _sum: PiketScheduleSumAggregateOutputType | null;
    _min: PiketScheduleMinAggregateOutputType | null;
    _max: PiketScheduleMaxAggregateOutputType | null;
};
type GetPiketScheduleGroupByPayload<T extends PiketScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PiketScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PiketScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PiketScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PiketScheduleGroupByOutputType[P]>;
}>>;
export type PiketScheduleWhereInput = {
    AND?: Prisma.PiketScheduleWhereInput | Prisma.PiketScheduleWhereInput[];
    OR?: Prisma.PiketScheduleWhereInput[];
    NOT?: Prisma.PiketScheduleWhereInput | Prisma.PiketScheduleWhereInput[];
    id?: Prisma.IntFilter<"PiketSchedule"> | number;
    teacher_user_id?: Prisma.IntFilter<"PiketSchedule"> | number;
    day_of_week?: Prisma.IntFilter<"PiketSchedule"> | number;
    teacher?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type PiketScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    teacher?: Prisma.usersOrderByWithRelationInput;
};
export type PiketScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PiketScheduleWhereInput | Prisma.PiketScheduleWhereInput[];
    OR?: Prisma.PiketScheduleWhereInput[];
    NOT?: Prisma.PiketScheduleWhereInput | Prisma.PiketScheduleWhereInput[];
    teacher_user_id?: Prisma.IntFilter<"PiketSchedule"> | number;
    day_of_week?: Prisma.IntFilter<"PiketSchedule"> | number;
    teacher?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type PiketScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
    _count?: Prisma.PiketScheduleCountOrderByAggregateInput;
    _avg?: Prisma.PiketScheduleAvgOrderByAggregateInput;
    _max?: Prisma.PiketScheduleMaxOrderByAggregateInput;
    _min?: Prisma.PiketScheduleMinOrderByAggregateInput;
    _sum?: Prisma.PiketScheduleSumOrderByAggregateInput;
};
export type PiketScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.PiketScheduleScalarWhereWithAggregatesInput | Prisma.PiketScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.PiketScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PiketScheduleScalarWhereWithAggregatesInput | Prisma.PiketScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PiketSchedule"> | number;
    teacher_user_id?: Prisma.IntWithAggregatesFilter<"PiketSchedule"> | number;
    day_of_week?: Prisma.IntWithAggregatesFilter<"PiketSchedule"> | number;
};
export type PiketScheduleCreateInput = {
    day_of_week: number;
    teacher: Prisma.usersCreateNestedOneWithoutPiketSchedulesInput;
};
export type PiketScheduleUncheckedCreateInput = {
    id?: number;
    teacher_user_id: number;
    day_of_week: number;
};
export type PiketScheduleUpdateInput = {
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher?: Prisma.usersUpdateOneRequiredWithoutPiketSchedulesNestedInput;
};
export type PiketScheduleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleCreateManyInput = {
    id?: number;
    teacher_user_id: number;
    day_of_week: number;
};
export type PiketScheduleUpdateManyMutationInput = {
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    teacher_user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleListRelationFilter = {
    every?: Prisma.PiketScheduleWhereInput;
    some?: Prisma.PiketScheduleWhereInput;
    none?: Prisma.PiketScheduleWhereInput;
};
export type PiketScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PiketScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type PiketScheduleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type PiketScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type PiketScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type PiketScheduleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacher_user_id?: Prisma.SortOrder;
    day_of_week?: Prisma.SortOrder;
};
export type PiketScheduleCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput> | Prisma.PiketScheduleCreateWithoutTeacherInput[] | Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput | Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.PiketScheduleCreateManyTeacherInputEnvelope;
    connect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
};
export type PiketScheduleUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput> | Prisma.PiketScheduleCreateWithoutTeacherInput[] | Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput | Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.PiketScheduleCreateManyTeacherInputEnvelope;
    connect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
};
export type PiketScheduleUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput> | Prisma.PiketScheduleCreateWithoutTeacherInput[] | Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput | Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.PiketScheduleUpsertWithWhereUniqueWithoutTeacherInput | Prisma.PiketScheduleUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.PiketScheduleCreateManyTeacherInputEnvelope;
    set?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    disconnect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    delete?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    connect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    update?: Prisma.PiketScheduleUpdateWithWhereUniqueWithoutTeacherInput | Prisma.PiketScheduleUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.PiketScheduleUpdateManyWithWhereWithoutTeacherInput | Prisma.PiketScheduleUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.PiketScheduleScalarWhereInput | Prisma.PiketScheduleScalarWhereInput[];
};
export type PiketScheduleUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput> | Prisma.PiketScheduleCreateWithoutTeacherInput[] | Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput | Prisma.PiketScheduleCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.PiketScheduleUpsertWithWhereUniqueWithoutTeacherInput | Prisma.PiketScheduleUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.PiketScheduleCreateManyTeacherInputEnvelope;
    set?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    disconnect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    delete?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    connect?: Prisma.PiketScheduleWhereUniqueInput | Prisma.PiketScheduleWhereUniqueInput[];
    update?: Prisma.PiketScheduleUpdateWithWhereUniqueWithoutTeacherInput | Prisma.PiketScheduleUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.PiketScheduleUpdateManyWithWhereWithoutTeacherInput | Prisma.PiketScheduleUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.PiketScheduleScalarWhereInput | Prisma.PiketScheduleScalarWhereInput[];
};
export type PiketScheduleCreateWithoutTeacherInput = {
    day_of_week: number;
};
export type PiketScheduleUncheckedCreateWithoutTeacherInput = {
    id?: number;
    day_of_week: number;
};
export type PiketScheduleCreateOrConnectWithoutTeacherInput = {
    where: Prisma.PiketScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput>;
};
export type PiketScheduleCreateManyTeacherInputEnvelope = {
    data: Prisma.PiketScheduleCreateManyTeacherInput | Prisma.PiketScheduleCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type PiketScheduleUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.PiketScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.PiketScheduleUpdateWithoutTeacherInput, Prisma.PiketScheduleUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.PiketScheduleCreateWithoutTeacherInput, Prisma.PiketScheduleUncheckedCreateWithoutTeacherInput>;
};
export type PiketScheduleUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.PiketScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.PiketScheduleUpdateWithoutTeacherInput, Prisma.PiketScheduleUncheckedUpdateWithoutTeacherInput>;
};
export type PiketScheduleUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.PiketScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.PiketScheduleUpdateManyMutationInput, Prisma.PiketScheduleUncheckedUpdateManyWithoutTeacherInput>;
};
export type PiketScheduleScalarWhereInput = {
    AND?: Prisma.PiketScheduleScalarWhereInput | Prisma.PiketScheduleScalarWhereInput[];
    OR?: Prisma.PiketScheduleScalarWhereInput[];
    NOT?: Prisma.PiketScheduleScalarWhereInput | Prisma.PiketScheduleScalarWhereInput[];
    id?: Prisma.IntFilter<"PiketSchedule"> | number;
    teacher_user_id?: Prisma.IntFilter<"PiketSchedule"> | number;
    day_of_week?: Prisma.IntFilter<"PiketSchedule"> | number;
};
export type PiketScheduleCreateManyTeacherInput = {
    id?: number;
    day_of_week: number;
};
export type PiketScheduleUpdateWithoutTeacherInput = {
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_of_week?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PiketScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    day_of_week?: boolean;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piketSchedule"]>;
export type PiketScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    day_of_week?: boolean;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piketSchedule"]>;
export type PiketScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacher_user_id?: boolean;
    day_of_week?: boolean;
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piketSchedule"]>;
export type PiketScheduleSelectScalar = {
    id?: boolean;
    teacher_user_id?: boolean;
    day_of_week?: boolean;
};
export type PiketScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacher_user_id" | "day_of_week", ExtArgs["result"]["piketSchedule"]>;
export type PiketScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type PiketScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type PiketScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $PiketSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PiketSchedule";
    objects: {
        teacher: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        teacher_user_id: number;
        day_of_week: number;
    }, ExtArgs["result"]["piketSchedule"]>;
    composites: {};
};
export type PiketScheduleGetPayload<S extends boolean | null | undefined | PiketScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload, S>;
export type PiketScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PiketScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PiketScheduleCountAggregateInputType | true;
};
export interface PiketScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PiketSchedule'];
        meta: {
            name: 'PiketSchedule';
        };
    };
    /**
     * Find zero or one PiketSchedule that matches the filter.
     * @param {PiketScheduleFindUniqueArgs} args - Arguments to find a PiketSchedule
     * @example
     * // Get one PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiketScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, PiketScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PiketSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiketScheduleFindUniqueOrThrowArgs} args - Arguments to find a PiketSchedule
     * @example
     * // Get one PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiketScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PiketScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PiketSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleFindFirstArgs} args - Arguments to find a PiketSchedule
     * @example
     * // Get one PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiketScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, PiketScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PiketSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleFindFirstOrThrowArgs} args - Arguments to find a PiketSchedule
     * @example
     * // Get one PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiketScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PiketScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PiketSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PiketSchedules
     * const piketSchedules = await prisma.piketSchedule.findMany()
     *
     * // Get first 10 PiketSchedules
     * const piketSchedules = await prisma.piketSchedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const piketScheduleWithIdOnly = await prisma.piketSchedule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PiketScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, PiketScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PiketSchedule.
     * @param {PiketScheduleCreateArgs} args - Arguments to create a PiketSchedule.
     * @example
     * // Create one PiketSchedule
     * const PiketSchedule = await prisma.piketSchedule.create({
     *   data: {
     *     // ... data to create a PiketSchedule
     *   }
     * })
     *
     */
    create<T extends PiketScheduleCreateArgs>(args: Prisma.SelectSubset<T, PiketScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PiketSchedules.
     * @param {PiketScheduleCreateManyArgs} args - Arguments to create many PiketSchedules.
     * @example
     * // Create many PiketSchedules
     * const piketSchedule = await prisma.piketSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PiketScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, PiketScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PiketSchedules and returns the data saved in the database.
     * @param {PiketScheduleCreateManyAndReturnArgs} args - Arguments to create many PiketSchedules.
     * @example
     * // Create many PiketSchedules
     * const piketSchedule = await prisma.piketSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PiketSchedules and only return the `id`
     * const piketScheduleWithIdOnly = await prisma.piketSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PiketScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PiketScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PiketSchedule.
     * @param {PiketScheduleDeleteArgs} args - Arguments to delete one PiketSchedule.
     * @example
     * // Delete one PiketSchedule
     * const PiketSchedule = await prisma.piketSchedule.delete({
     *   where: {
     *     // ... filter to delete one PiketSchedule
     *   }
     * })
     *
     */
    delete<T extends PiketScheduleDeleteArgs>(args: Prisma.SelectSubset<T, PiketScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PiketSchedule.
     * @param {PiketScheduleUpdateArgs} args - Arguments to update one PiketSchedule.
     * @example
     * // Update one PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PiketScheduleUpdateArgs>(args: Prisma.SelectSubset<T, PiketScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PiketSchedules.
     * @param {PiketScheduleDeleteManyArgs} args - Arguments to filter PiketSchedules to delete.
     * @example
     * // Delete a few PiketSchedules
     * const { count } = await prisma.piketSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PiketScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, PiketScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PiketSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PiketSchedules
     * const piketSchedule = await prisma.piketSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PiketScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, PiketScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PiketSchedules and returns the data updated in the database.
     * @param {PiketScheduleUpdateManyAndReturnArgs} args - Arguments to update many PiketSchedules.
     * @example
     * // Update many PiketSchedules
     * const piketSchedule = await prisma.piketSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PiketSchedules and only return the `id`
     * const piketScheduleWithIdOnly = await prisma.piketSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends PiketScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PiketScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PiketSchedule.
     * @param {PiketScheduleUpsertArgs} args - Arguments to update or create a PiketSchedule.
     * @example
     * // Update or create a PiketSchedule
     * const piketSchedule = await prisma.piketSchedule.upsert({
     *   create: {
     *     // ... data to create a PiketSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PiketSchedule we want to update
     *   }
     * })
     */
    upsert<T extends PiketScheduleUpsertArgs>(args: Prisma.SelectSubset<T, PiketScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__PiketScheduleClient<runtime.Types.Result.GetResult<Prisma.$PiketSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PiketSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleCountArgs} args - Arguments to filter PiketSchedules to count.
     * @example
     * // Count the number of PiketSchedules
     * const count = await prisma.piketSchedule.count({
     *   where: {
     *     // ... the filter for the PiketSchedules we want to count
     *   }
     * })
    **/
    count<T extends PiketScheduleCountArgs>(args?: Prisma.Subset<T, PiketScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PiketScheduleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PiketSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PiketScheduleAggregateArgs>(args: Prisma.Subset<T, PiketScheduleAggregateArgs>): Prisma.PrismaPromise<GetPiketScheduleAggregateType<T>>;
    /**
     * Group by PiketSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiketScheduleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PiketScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PiketScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: PiketScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PiketScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiketScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PiketSchedule model
     */
    readonly fields: PiketScheduleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PiketSchedule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PiketScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the PiketSchedule model
 */
export interface PiketScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"PiketSchedule", 'Int'>;
    readonly teacher_user_id: Prisma.FieldRef<"PiketSchedule", 'Int'>;
    readonly day_of_week: Prisma.FieldRef<"PiketSchedule", 'Int'>;
}
/**
 * PiketSchedule findUnique
 */
export type PiketScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PiketSchedule to fetch.
     */
    where: Prisma.PiketScheduleWhereUniqueInput;
};
/**
 * PiketSchedule findUniqueOrThrow
 */
export type PiketScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PiketSchedule to fetch.
     */
    where: Prisma.PiketScheduleWhereUniqueInput;
};
/**
 * PiketSchedule findFirst
 */
export type PiketScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PiketSchedule to fetch.
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PiketSchedules to fetch.
     */
    orderBy?: Prisma.PiketScheduleOrderByWithRelationInput | Prisma.PiketScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PiketSchedules.
     */
    cursor?: Prisma.PiketScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PiketSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PiketSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PiketSchedules.
     */
    distinct?: Prisma.PiketScheduleScalarFieldEnum | Prisma.PiketScheduleScalarFieldEnum[];
};
/**
 * PiketSchedule findFirstOrThrow
 */
export type PiketScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PiketSchedule to fetch.
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PiketSchedules to fetch.
     */
    orderBy?: Prisma.PiketScheduleOrderByWithRelationInput | Prisma.PiketScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PiketSchedules.
     */
    cursor?: Prisma.PiketScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PiketSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PiketSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PiketSchedules.
     */
    distinct?: Prisma.PiketScheduleScalarFieldEnum | Prisma.PiketScheduleScalarFieldEnum[];
};
/**
 * PiketSchedule findMany
 */
export type PiketScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which PiketSchedules to fetch.
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PiketSchedules to fetch.
     */
    orderBy?: Prisma.PiketScheduleOrderByWithRelationInput | Prisma.PiketScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PiketSchedules.
     */
    cursor?: Prisma.PiketScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PiketSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PiketSchedules.
     */
    skip?: number;
    distinct?: Prisma.PiketScheduleScalarFieldEnum | Prisma.PiketScheduleScalarFieldEnum[];
};
/**
 * PiketSchedule create
 */
export type PiketScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a PiketSchedule.
     */
    data: Prisma.XOR<Prisma.PiketScheduleCreateInput, Prisma.PiketScheduleUncheckedCreateInput>;
};
/**
 * PiketSchedule createMany
 */
export type PiketScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PiketSchedules.
     */
    data: Prisma.PiketScheduleCreateManyInput | Prisma.PiketScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PiketSchedule createManyAndReturn
 */
export type PiketScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiketSchedule
     */
    select?: Prisma.PiketScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PiketSchedule
     */
    omit?: Prisma.PiketScheduleOmit<ExtArgs> | null;
    /**
     * The data used to create many PiketSchedules.
     */
    data: Prisma.PiketScheduleCreateManyInput | Prisma.PiketScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PiketScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PiketSchedule update
 */
export type PiketScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a PiketSchedule.
     */
    data: Prisma.XOR<Prisma.PiketScheduleUpdateInput, Prisma.PiketScheduleUncheckedUpdateInput>;
    /**
     * Choose, which PiketSchedule to update.
     */
    where: Prisma.PiketScheduleWhereUniqueInput;
};
/**
 * PiketSchedule updateMany
 */
export type PiketScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PiketSchedules.
     */
    data: Prisma.XOR<Prisma.PiketScheduleUpdateManyMutationInput, Prisma.PiketScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which PiketSchedules to update
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * Limit how many PiketSchedules to update.
     */
    limit?: number;
};
/**
 * PiketSchedule updateManyAndReturn
 */
export type PiketScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiketSchedule
     */
    select?: Prisma.PiketScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PiketSchedule
     */
    omit?: Prisma.PiketScheduleOmit<ExtArgs> | null;
    /**
     * The data used to update PiketSchedules.
     */
    data: Prisma.XOR<Prisma.PiketScheduleUpdateManyMutationInput, Prisma.PiketScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which PiketSchedules to update
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * Limit how many PiketSchedules to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PiketScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PiketSchedule upsert
 */
export type PiketScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the PiketSchedule to update in case it exists.
     */
    where: Prisma.PiketScheduleWhereUniqueInput;
    /**
     * In case the PiketSchedule found by the `where` argument doesn't exist, create a new PiketSchedule with this data.
     */
    create: Prisma.XOR<Prisma.PiketScheduleCreateInput, Prisma.PiketScheduleUncheckedCreateInput>;
    /**
     * In case the PiketSchedule was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PiketScheduleUpdateInput, Prisma.PiketScheduleUncheckedUpdateInput>;
};
/**
 * PiketSchedule delete
 */
export type PiketScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which PiketSchedule to delete.
     */
    where: Prisma.PiketScheduleWhereUniqueInput;
};
/**
 * PiketSchedule deleteMany
 */
export type PiketScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PiketSchedules to delete
     */
    where?: Prisma.PiketScheduleWhereInput;
    /**
     * Limit how many PiketSchedules to delete.
     */
    limit?: number;
};
/**
 * PiketSchedule without action
 */
export type PiketScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=PiketSchedule.d.ts.map