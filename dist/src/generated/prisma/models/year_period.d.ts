import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model year_period
 *
 */
export type year_periodModel = runtime.Types.Result.DefaultSelection<Prisma.$year_periodPayload>;
export type AggregateYear_period = {
    _count: Year_periodCountAggregateOutputType | null;
    _avg: Year_periodAvgAggregateOutputType | null;
    _sum: Year_periodSumAggregateOutputType | null;
    _min: Year_periodMinAggregateOutputType | null;
    _max: Year_periodMaxAggregateOutputType | null;
};
export type Year_periodAvgAggregateOutputType = {
    id: number | null;
    start_year: number | null;
    end_year: number | null;
};
export type Year_periodSumAggregateOutputType = {
    id: number | null;
    start_year: number | null;
    end_year: number | null;
};
export type Year_periodMinAggregateOutputType = {
    id: number | null;
    start_year: number | null;
    end_year: number | null;
    display_name: string | null;
};
export type Year_periodMaxAggregateOutputType = {
    id: number | null;
    start_year: number | null;
    end_year: number | null;
    display_name: string | null;
};
export type Year_periodCountAggregateOutputType = {
    id: number;
    start_year: number;
    end_year: number;
    display_name: number;
    _all: number;
};
export type Year_periodAvgAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
};
export type Year_periodSumAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
};
export type Year_periodMinAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    display_name?: true;
};
export type Year_periodMaxAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    display_name?: true;
};
export type Year_periodCountAggregateInputType = {
    id?: true;
    start_year?: true;
    end_year?: true;
    display_name?: true;
    _all?: true;
};
export type Year_periodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which year_period to aggregate.
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of year_periods to fetch.
     */
    orderBy?: Prisma.year_periodOrderByWithRelationInput | Prisma.year_periodOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.year_periodWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` year_periods from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` year_periods.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned year_periods
    **/
    _count?: true | Year_periodCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Year_periodAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Year_periodSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Year_periodMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Year_periodMaxAggregateInputType;
};
export type GetYear_periodAggregateType<T extends Year_periodAggregateArgs> = {
    [P in keyof T & keyof AggregateYear_period]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateYear_period[P]> : Prisma.GetScalarType<T[P], AggregateYear_period[P]>;
};
export type year_periodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.year_periodWhereInput;
    orderBy?: Prisma.year_periodOrderByWithAggregationInput | Prisma.year_periodOrderByWithAggregationInput[];
    by: Prisma.Year_periodScalarFieldEnum[] | Prisma.Year_periodScalarFieldEnum;
    having?: Prisma.year_periodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Year_periodCountAggregateInputType | true;
    _avg?: Year_periodAvgAggregateInputType;
    _sum?: Year_periodSumAggregateInputType;
    _min?: Year_periodMinAggregateInputType;
    _max?: Year_periodMaxAggregateInputType;
};
export type Year_periodGroupByOutputType = {
    id: number;
    start_year: number;
    end_year: number;
    display_name: string;
    _count: Year_periodCountAggregateOutputType | null;
    _avg: Year_periodAvgAggregateOutputType | null;
    _sum: Year_periodSumAggregateOutputType | null;
    _min: Year_periodMinAggregateOutputType | null;
    _max: Year_periodMaxAggregateOutputType | null;
};
type GetYear_periodGroupByPayload<T extends year_periodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Year_periodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Year_periodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Year_periodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Year_periodGroupByOutputType[P]>;
}>>;
export type year_periodWhereInput = {
    AND?: Prisma.year_periodWhereInput | Prisma.year_periodWhereInput[];
    OR?: Prisma.year_periodWhereInput[];
    NOT?: Prisma.year_periodWhereInput | Prisma.year_periodWhereInput[];
    id?: Prisma.IntFilter<"year_period"> | number;
    start_year?: Prisma.IntFilter<"year_period"> | number;
    end_year?: Prisma.IntFilter<"year_period"> | number;
    display_name?: Prisma.StringFilter<"year_period"> | string;
    detail_students?: Prisma.Detail_studentsListRelationFilter;
};
export type year_periodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    detail_students?: Prisma.detail_studentsOrderByRelationAggregateInput;
};
export type year_periodWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    display_name?: string;
    AND?: Prisma.year_periodWhereInput | Prisma.year_periodWhereInput[];
    OR?: Prisma.year_periodWhereInput[];
    NOT?: Prisma.year_periodWhereInput | Prisma.year_periodWhereInput[];
    start_year?: Prisma.IntFilter<"year_period"> | number;
    end_year?: Prisma.IntFilter<"year_period"> | number;
    detail_students?: Prisma.Detail_studentsListRelationFilter;
}, "id" | "display_name">;
export type year_periodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    _count?: Prisma.year_periodCountOrderByAggregateInput;
    _avg?: Prisma.year_periodAvgOrderByAggregateInput;
    _max?: Prisma.year_periodMaxOrderByAggregateInput;
    _min?: Prisma.year_periodMinOrderByAggregateInput;
    _sum?: Prisma.year_periodSumOrderByAggregateInput;
};
export type year_periodScalarWhereWithAggregatesInput = {
    AND?: Prisma.year_periodScalarWhereWithAggregatesInput | Prisma.year_periodScalarWhereWithAggregatesInput[];
    OR?: Prisma.year_periodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.year_periodScalarWhereWithAggregatesInput | Prisma.year_periodScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"year_period"> | number;
    start_year?: Prisma.IntWithAggregatesFilter<"year_period"> | number;
    end_year?: Prisma.IntWithAggregatesFilter<"year_period"> | number;
    display_name?: Prisma.StringWithAggregatesFilter<"year_period"> | string;
};
export type year_periodCreateInput = {
    start_year?: number;
    end_year?: number;
    display_name?: string;
    detail_students?: Prisma.detail_studentsCreateNestedManyWithoutYear_periodInput;
};
export type year_periodUncheckedCreateInput = {
    id?: number;
    start_year?: number;
    end_year?: number;
    display_name?: string;
    detail_students?: Prisma.detail_studentsUncheckedCreateNestedManyWithoutYear_periodInput;
};
export type year_periodUpdateInput = {
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUpdateManyWithoutYear_periodNestedInput;
};
export type year_periodUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
    detail_students?: Prisma.detail_studentsUncheckedUpdateManyWithoutYear_periodNestedInput;
};
export type year_periodCreateManyInput = {
    id?: number;
    start_year?: number;
    end_year?: number;
    display_name?: string;
};
export type year_periodUpdateManyMutationInput = {
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type year_periodUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Year_periodScalarRelationFilter = {
    is?: Prisma.year_periodWhereInput;
    isNot?: Prisma.year_periodWhereInput;
};
export type year_periodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
};
export type year_periodAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
};
export type year_periodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
};
export type year_periodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
};
export type year_periodSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    start_year?: Prisma.SortOrder;
    end_year?: Prisma.SortOrder;
};
export type year_periodCreateNestedOneWithoutDetail_studentsInput = {
    create?: Prisma.XOR<Prisma.year_periodCreateWithoutDetail_studentsInput, Prisma.year_periodUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.year_periodCreateOrConnectWithoutDetail_studentsInput;
    connect?: Prisma.year_periodWhereUniqueInput;
};
export type year_periodUpdateOneRequiredWithoutDetail_studentsNestedInput = {
    create?: Prisma.XOR<Prisma.year_periodCreateWithoutDetail_studentsInput, Prisma.year_periodUncheckedCreateWithoutDetail_studentsInput>;
    connectOrCreate?: Prisma.year_periodCreateOrConnectWithoutDetail_studentsInput;
    upsert?: Prisma.year_periodUpsertWithoutDetail_studentsInput;
    connect?: Prisma.year_periodWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.year_periodUpdateToOneWithWhereWithoutDetail_studentsInput, Prisma.year_periodUpdateWithoutDetail_studentsInput>, Prisma.year_periodUncheckedUpdateWithoutDetail_studentsInput>;
};
export type year_periodCreateWithoutDetail_studentsInput = {
    start_year?: number;
    end_year?: number;
    display_name?: string;
};
export type year_periodUncheckedCreateWithoutDetail_studentsInput = {
    id?: number;
    start_year?: number;
    end_year?: number;
    display_name?: string;
};
export type year_periodCreateOrConnectWithoutDetail_studentsInput = {
    where: Prisma.year_periodWhereUniqueInput;
    create: Prisma.XOR<Prisma.year_periodCreateWithoutDetail_studentsInput, Prisma.year_periodUncheckedCreateWithoutDetail_studentsInput>;
};
export type year_periodUpsertWithoutDetail_studentsInput = {
    update: Prisma.XOR<Prisma.year_periodUpdateWithoutDetail_studentsInput, Prisma.year_periodUncheckedUpdateWithoutDetail_studentsInput>;
    create: Prisma.XOR<Prisma.year_periodCreateWithoutDetail_studentsInput, Prisma.year_periodUncheckedCreateWithoutDetail_studentsInput>;
    where?: Prisma.year_periodWhereInput;
};
export type year_periodUpdateToOneWithWhereWithoutDetail_studentsInput = {
    where?: Prisma.year_periodWhereInput;
    data: Prisma.XOR<Prisma.year_periodUpdateWithoutDetail_studentsInput, Prisma.year_periodUncheckedUpdateWithoutDetail_studentsInput>;
};
export type year_periodUpdateWithoutDetail_studentsInput = {
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type year_periodUncheckedUpdateWithoutDetail_studentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    start_year?: Prisma.IntFieldUpdateOperationsInput | number;
    end_year?: Prisma.IntFieldUpdateOperationsInput | number;
    display_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type Year_periodCountOutputType
 */
export type Year_periodCountOutputType = {
    detail_students: number;
};
export type Year_periodCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Year_periodCountOutputTypeCountDetail_studentsArgs;
};
/**
 * Year_periodCountOutputType without action
 */
export type Year_periodCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Year_periodCountOutputType
     */
    select?: Prisma.Year_periodCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Year_periodCountOutputType without action
 */
export type Year_periodCountOutputTypeCountDetail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detail_studentsWhereInput;
};
export type year_periodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    display_name?: boolean;
    detail_students?: boolean | Prisma.year_period$detail_studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.Year_periodCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["year_period"]>;
export type year_periodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    display_name?: boolean;
}, ExtArgs["result"]["year_period"]>;
export type year_periodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    display_name?: boolean;
}, ExtArgs["result"]["year_period"]>;
export type year_periodSelectScalar = {
    id?: boolean;
    start_year?: boolean;
    end_year?: boolean;
    display_name?: boolean;
};
export type year_periodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "start_year" | "end_year" | "display_name", ExtArgs["result"]["year_period"]>;
export type year_periodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detail_students?: boolean | Prisma.year_period$detail_studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.Year_periodCountOutputTypeDefaultArgs<ExtArgs>;
};
export type year_periodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type year_periodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $year_periodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "year_period";
    objects: {
        detail_students: Prisma.$detail_studentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        start_year: number;
        end_year: number;
        display_name: string;
    }, ExtArgs["result"]["year_period"]>;
    composites: {};
};
export type year_periodGetPayload<S extends boolean | null | undefined | year_periodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$year_periodPayload, S>;
export type year_periodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<year_periodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Year_periodCountAggregateInputType | true;
};
export interface year_periodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['year_period'];
        meta: {
            name: 'year_period';
        };
    };
    /**
     * Find zero or one Year_period that matches the filter.
     * @param {year_periodFindUniqueArgs} args - Arguments to find a Year_period
     * @example
     * // Get one Year_period
     * const year_period = await prisma.year_period.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends year_periodFindUniqueArgs>(args: Prisma.SelectSubset<T, year_periodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Year_period that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {year_periodFindUniqueOrThrowArgs} args - Arguments to find a Year_period
     * @example
     * // Get one Year_period
     * const year_period = await prisma.year_period.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends year_periodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, year_periodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Year_period that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodFindFirstArgs} args - Arguments to find a Year_period
     * @example
     * // Get one Year_period
     * const year_period = await prisma.year_period.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends year_periodFindFirstArgs>(args?: Prisma.SelectSubset<T, year_periodFindFirstArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Year_period that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodFindFirstOrThrowArgs} args - Arguments to find a Year_period
     * @example
     * // Get one Year_period
     * const year_period = await prisma.year_period.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends year_periodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, year_periodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Year_periods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Year_periods
     * const year_periods = await prisma.year_period.findMany()
     *
     * // Get first 10 Year_periods
     * const year_periods = await prisma.year_period.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const year_periodWithIdOnly = await prisma.year_period.findMany({ select: { id: true } })
     *
     */
    findMany<T extends year_periodFindManyArgs>(args?: Prisma.SelectSubset<T, year_periodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Year_period.
     * @param {year_periodCreateArgs} args - Arguments to create a Year_period.
     * @example
     * // Create one Year_period
     * const Year_period = await prisma.year_period.create({
     *   data: {
     *     // ... data to create a Year_period
     *   }
     * })
     *
     */
    create<T extends year_periodCreateArgs>(args: Prisma.SelectSubset<T, year_periodCreateArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Year_periods.
     * @param {year_periodCreateManyArgs} args - Arguments to create many Year_periods.
     * @example
     * // Create many Year_periods
     * const year_period = await prisma.year_period.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends year_periodCreateManyArgs>(args?: Prisma.SelectSubset<T, year_periodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Year_periods and returns the data saved in the database.
     * @param {year_periodCreateManyAndReturnArgs} args - Arguments to create many Year_periods.
     * @example
     * // Create many Year_periods
     * const year_period = await prisma.year_period.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Year_periods and only return the `id`
     * const year_periodWithIdOnly = await prisma.year_period.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends year_periodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, year_periodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Year_period.
     * @param {year_periodDeleteArgs} args - Arguments to delete one Year_period.
     * @example
     * // Delete one Year_period
     * const Year_period = await prisma.year_period.delete({
     *   where: {
     *     // ... filter to delete one Year_period
     *   }
     * })
     *
     */
    delete<T extends year_periodDeleteArgs>(args: Prisma.SelectSubset<T, year_periodDeleteArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Year_period.
     * @param {year_periodUpdateArgs} args - Arguments to update one Year_period.
     * @example
     * // Update one Year_period
     * const year_period = await prisma.year_period.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends year_periodUpdateArgs>(args: Prisma.SelectSubset<T, year_periodUpdateArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Year_periods.
     * @param {year_periodDeleteManyArgs} args - Arguments to filter Year_periods to delete.
     * @example
     * // Delete a few Year_periods
     * const { count } = await prisma.year_period.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends year_periodDeleteManyArgs>(args?: Prisma.SelectSubset<T, year_periodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Year_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Year_periods
     * const year_period = await prisma.year_period.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends year_periodUpdateManyArgs>(args: Prisma.SelectSubset<T, year_periodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Year_periods and returns the data updated in the database.
     * @param {year_periodUpdateManyAndReturnArgs} args - Arguments to update many Year_periods.
     * @example
     * // Update many Year_periods
     * const year_period = await prisma.year_period.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Year_periods and only return the `id`
     * const year_periodWithIdOnly = await prisma.year_period.updateManyAndReturn({
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
    updateManyAndReturn<T extends year_periodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, year_periodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Year_period.
     * @param {year_periodUpsertArgs} args - Arguments to update or create a Year_period.
     * @example
     * // Update or create a Year_period
     * const year_period = await prisma.year_period.upsert({
     *   create: {
     *     // ... data to create a Year_period
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Year_period we want to update
     *   }
     * })
     */
    upsert<T extends year_periodUpsertArgs>(args: Prisma.SelectSubset<T, year_periodUpsertArgs<ExtArgs>>): Prisma.Prisma__year_periodClient<runtime.Types.Result.GetResult<Prisma.$year_periodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Year_periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodCountArgs} args - Arguments to filter Year_periods to count.
     * @example
     * // Count the number of Year_periods
     * const count = await prisma.year_period.count({
     *   where: {
     *     // ... the filter for the Year_periods we want to count
     *   }
     * })
    **/
    count<T extends year_periodCountArgs>(args?: Prisma.Subset<T, year_periodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Year_periodCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Year_period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Year_periodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Year_periodAggregateArgs>(args: Prisma.Subset<T, Year_periodAggregateArgs>): Prisma.PrismaPromise<GetYear_periodAggregateType<T>>;
    /**
     * Group by Year_period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {year_periodGroupByArgs} args - Group by arguments.
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
    groupBy<T extends year_periodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: year_periodGroupByArgs['orderBy'];
    } : {
        orderBy?: year_periodGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, year_periodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYear_periodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the year_period model
     */
    readonly fields: year_periodFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for year_period.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__year_periodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detail_students<T extends Prisma.year_period$detail_studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.year_period$detail_studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detail_studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the year_period model
 */
export interface year_periodFieldRefs {
    readonly id: Prisma.FieldRef<"year_period", 'Int'>;
    readonly start_year: Prisma.FieldRef<"year_period", 'Int'>;
    readonly end_year: Prisma.FieldRef<"year_period", 'Int'>;
    readonly display_name: Prisma.FieldRef<"year_period", 'String'>;
}
/**
 * year_period findUnique
 */
export type year_periodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter, which year_period to fetch.
     */
    where: Prisma.year_periodWhereUniqueInput;
};
/**
 * year_period findUniqueOrThrow
 */
export type year_periodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter, which year_period to fetch.
     */
    where: Prisma.year_periodWhereUniqueInput;
};
/**
 * year_period findFirst
 */
export type year_periodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter, which year_period to fetch.
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of year_periods to fetch.
     */
    orderBy?: Prisma.year_periodOrderByWithRelationInput | Prisma.year_periodOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for year_periods.
     */
    cursor?: Prisma.year_periodWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` year_periods from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` year_periods.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of year_periods.
     */
    distinct?: Prisma.Year_periodScalarFieldEnum | Prisma.Year_periodScalarFieldEnum[];
};
/**
 * year_period findFirstOrThrow
 */
export type year_periodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter, which year_period to fetch.
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of year_periods to fetch.
     */
    orderBy?: Prisma.year_periodOrderByWithRelationInput | Prisma.year_periodOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for year_periods.
     */
    cursor?: Prisma.year_periodWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` year_periods from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` year_periods.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of year_periods.
     */
    distinct?: Prisma.Year_periodScalarFieldEnum | Prisma.Year_periodScalarFieldEnum[];
};
/**
 * year_period findMany
 */
export type year_periodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter, which year_periods to fetch.
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of year_periods to fetch.
     */
    orderBy?: Prisma.year_periodOrderByWithRelationInput | Prisma.year_periodOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing year_periods.
     */
    cursor?: Prisma.year_periodWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` year_periods from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` year_periods.
     */
    skip?: number;
    distinct?: Prisma.Year_periodScalarFieldEnum | Prisma.Year_periodScalarFieldEnum[];
};
/**
 * year_period create
 */
export type year_periodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * The data needed to create a year_period.
     */
    data?: Prisma.XOR<Prisma.year_periodCreateInput, Prisma.year_periodUncheckedCreateInput>;
};
/**
 * year_period createMany
 */
export type year_periodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many year_periods.
     */
    data: Prisma.year_periodCreateManyInput | Prisma.year_periodCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * year_period createManyAndReturn
 */
export type year_periodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * The data used to create many year_periods.
     */
    data: Prisma.year_periodCreateManyInput | Prisma.year_periodCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * year_period update
 */
export type year_periodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * The data needed to update a year_period.
     */
    data: Prisma.XOR<Prisma.year_periodUpdateInput, Prisma.year_periodUncheckedUpdateInput>;
    /**
     * Choose, which year_period to update.
     */
    where: Prisma.year_periodWhereUniqueInput;
};
/**
 * year_period updateMany
 */
export type year_periodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update year_periods.
     */
    data: Prisma.XOR<Prisma.year_periodUpdateManyMutationInput, Prisma.year_periodUncheckedUpdateManyInput>;
    /**
     * Filter which year_periods to update
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * Limit how many year_periods to update.
     */
    limit?: number;
};
/**
 * year_period updateManyAndReturn
 */
export type year_periodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * The data used to update year_periods.
     */
    data: Prisma.XOR<Prisma.year_periodUpdateManyMutationInput, Prisma.year_periodUncheckedUpdateManyInput>;
    /**
     * Filter which year_periods to update
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * Limit how many year_periods to update.
     */
    limit?: number;
};
/**
 * year_period upsert
 */
export type year_periodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * The filter to search for the year_period to update in case it exists.
     */
    where: Prisma.year_periodWhereUniqueInput;
    /**
     * In case the year_period found by the `where` argument doesn't exist, create a new year_period with this data.
     */
    create: Prisma.XOR<Prisma.year_periodCreateInput, Prisma.year_periodUncheckedCreateInput>;
    /**
     * In case the year_period was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.year_periodUpdateInput, Prisma.year_periodUncheckedUpdateInput>;
};
/**
 * year_period delete
 */
export type year_periodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
    /**
     * Filter which year_period to delete.
     */
    where: Prisma.year_periodWhereUniqueInput;
};
/**
 * year_period deleteMany
 */
export type year_periodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which year_periods to delete
     */
    where?: Prisma.year_periodWhereInput;
    /**
     * Limit how many year_periods to delete.
     */
    limit?: number;
};
/**
 * year_period.detail_students
 */
export type year_period$detail_studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * year_period without action
 */
export type year_periodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the year_period
     */
    select?: Prisma.year_periodSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the year_period
     */
    omit?: Prisma.year_periodOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.year_periodInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=year_period.d.ts.map