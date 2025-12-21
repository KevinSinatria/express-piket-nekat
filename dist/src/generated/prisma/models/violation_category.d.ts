import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model violation_category
 *
 */
export type violation_categoryModel = runtime.Types.Result.DefaultSelection<Prisma.$violation_categoryPayload>;
export type AggregateViolation_category = {
    _count: Violation_categoryCountAggregateOutputType | null;
    _avg: Violation_categoryAvgAggregateOutputType | null;
    _sum: Violation_categorySumAggregateOutputType | null;
    _min: Violation_categoryMinAggregateOutputType | null;
    _max: Violation_categoryMaxAggregateOutputType | null;
};
export type Violation_categoryAvgAggregateOutputType = {
    id: number | null;
};
export type Violation_categorySumAggregateOutputType = {
    id: number | null;
};
export type Violation_categoryMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type Violation_categoryMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type Violation_categoryCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type Violation_categoryAvgAggregateInputType = {
    id?: true;
};
export type Violation_categorySumAggregateInputType = {
    id?: true;
};
export type Violation_categoryMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type Violation_categoryMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type Violation_categoryCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type Violation_categoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_category to aggregate.
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoryOrderByWithRelationInput | Prisma.violation_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.violation_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned violation_categories
    **/
    _count?: true | Violation_categoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Violation_categoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Violation_categorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Violation_categoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Violation_categoryMaxAggregateInputType;
};
export type GetViolation_categoryAggregateType<T extends Violation_categoryAggregateArgs> = {
    [P in keyof T & keyof AggregateViolation_category]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateViolation_category[P]> : Prisma.GetScalarType<T[P], AggregateViolation_category[P]>;
};
export type violation_categoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violation_categoryWhereInput;
    orderBy?: Prisma.violation_categoryOrderByWithAggregationInput | Prisma.violation_categoryOrderByWithAggregationInput[];
    by: Prisma.Violation_categoryScalarFieldEnum[] | Prisma.Violation_categoryScalarFieldEnum;
    having?: Prisma.violation_categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Violation_categoryCountAggregateInputType | true;
    _avg?: Violation_categoryAvgAggregateInputType;
    _sum?: Violation_categorySumAggregateInputType;
    _min?: Violation_categoryMinAggregateInputType;
    _max?: Violation_categoryMaxAggregateInputType;
};
export type Violation_categoryGroupByOutputType = {
    id: number;
    name: string;
    _count: Violation_categoryCountAggregateOutputType | null;
    _avg: Violation_categoryAvgAggregateOutputType | null;
    _sum: Violation_categorySumAggregateOutputType | null;
    _min: Violation_categoryMinAggregateOutputType | null;
    _max: Violation_categoryMaxAggregateOutputType | null;
};
type GetViolation_categoryGroupByPayload<T extends violation_categoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Violation_categoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Violation_categoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Violation_categoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Violation_categoryGroupByOutputType[P]>;
}>>;
export type violation_categoryWhereInput = {
    AND?: Prisma.violation_categoryWhereInput | Prisma.violation_categoryWhereInput[];
    OR?: Prisma.violation_categoryWhereInput[];
    NOT?: Prisma.violation_categoryWhereInput | Prisma.violation_categoryWhereInput[];
    id?: Prisma.IntFilter<"violation_category"> | number;
    name?: Prisma.StringFilter<"violation_category"> | string;
    violation_type?: Prisma.Violation_typeListRelationFilter;
};
export type violation_categoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    violation_type?: Prisma.violation_typeOrderByRelationAggregateInput;
};
export type violation_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.violation_categoryWhereInput | Prisma.violation_categoryWhereInput[];
    OR?: Prisma.violation_categoryWhereInput[];
    NOT?: Prisma.violation_categoryWhereInput | Prisma.violation_categoryWhereInput[];
    name?: Prisma.StringFilter<"violation_category"> | string;
    violation_type?: Prisma.Violation_typeListRelationFilter;
}, "id">;
export type violation_categoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.violation_categoryCountOrderByAggregateInput;
    _avg?: Prisma.violation_categoryAvgOrderByAggregateInput;
    _max?: Prisma.violation_categoryMaxOrderByAggregateInput;
    _min?: Prisma.violation_categoryMinOrderByAggregateInput;
    _sum?: Prisma.violation_categorySumOrderByAggregateInput;
};
export type violation_categoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.violation_categoryScalarWhereWithAggregatesInput | Prisma.violation_categoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.violation_categoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.violation_categoryScalarWhereWithAggregatesInput | Prisma.violation_categoryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"violation_category"> | number;
    name?: Prisma.StringWithAggregatesFilter<"violation_category"> | string;
};
export type violation_categoryCreateInput = {
    name: string;
    violation_type?: Prisma.violation_typeCreateNestedManyWithoutViolation_categoryInput;
};
export type violation_categoryUncheckedCreateInput = {
    id?: number;
    name: string;
    violation_type?: Prisma.violation_typeUncheckedCreateNestedManyWithoutViolation_categoryInput;
};
export type violation_categoryUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    violation_type?: Prisma.violation_typeUpdateManyWithoutViolation_categoryNestedInput;
};
export type violation_categoryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    violation_type?: Prisma.violation_typeUncheckedUpdateManyWithoutViolation_categoryNestedInput;
};
export type violation_categoryCreateManyInput = {
    id?: number;
    name: string;
};
export type violation_categoryUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violation_categoryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violation_categoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type violation_categoryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type violation_categoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type violation_categoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type violation_categorySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Violation_categoryScalarRelationFilter = {
    is?: Prisma.violation_categoryWhereInput;
    isNot?: Prisma.violation_categoryWhereInput;
};
export type violation_categoryCreateNestedOneWithoutViolation_typeInput = {
    create?: Prisma.XOR<Prisma.violation_categoryCreateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedCreateWithoutViolation_typeInput>;
    connectOrCreate?: Prisma.violation_categoryCreateOrConnectWithoutViolation_typeInput;
    connect?: Prisma.violation_categoryWhereUniqueInput;
};
export type violation_categoryUpdateOneRequiredWithoutViolation_typeNestedInput = {
    create?: Prisma.XOR<Prisma.violation_categoryCreateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedCreateWithoutViolation_typeInput>;
    connectOrCreate?: Prisma.violation_categoryCreateOrConnectWithoutViolation_typeInput;
    upsert?: Prisma.violation_categoryUpsertWithoutViolation_typeInput;
    connect?: Prisma.violation_categoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.violation_categoryUpdateToOneWithWhereWithoutViolation_typeInput, Prisma.violation_categoryUpdateWithoutViolation_typeInput>, Prisma.violation_categoryUncheckedUpdateWithoutViolation_typeInput>;
};
export type violation_categoryCreateWithoutViolation_typeInput = {
    name: string;
};
export type violation_categoryUncheckedCreateWithoutViolation_typeInput = {
    id?: number;
    name: string;
};
export type violation_categoryCreateOrConnectWithoutViolation_typeInput = {
    where: Prisma.violation_categoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.violation_categoryCreateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedCreateWithoutViolation_typeInput>;
};
export type violation_categoryUpsertWithoutViolation_typeInput = {
    update: Prisma.XOR<Prisma.violation_categoryUpdateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedUpdateWithoutViolation_typeInput>;
    create: Prisma.XOR<Prisma.violation_categoryCreateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedCreateWithoutViolation_typeInput>;
    where?: Prisma.violation_categoryWhereInput;
};
export type violation_categoryUpdateToOneWithWhereWithoutViolation_typeInput = {
    where?: Prisma.violation_categoryWhereInput;
    data: Prisma.XOR<Prisma.violation_categoryUpdateWithoutViolation_typeInput, Prisma.violation_categoryUncheckedUpdateWithoutViolation_typeInput>;
};
export type violation_categoryUpdateWithoutViolation_typeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violation_categoryUncheckedUpdateWithoutViolation_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type Violation_categoryCountOutputType
 */
export type Violation_categoryCountOutputType = {
    violation_type: number;
};
export type Violation_categoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violation_type?: boolean | Violation_categoryCountOutputTypeCountViolation_typeArgs;
};
/**
 * Violation_categoryCountOutputType without action
 */
export type Violation_categoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation_categoryCountOutputType
     */
    select?: Prisma.Violation_categoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Violation_categoryCountOutputType without action
 */
export type Violation_categoryCountOutputTypeCountViolation_typeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violation_typeWhereInput;
};
export type violation_categorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    violation_type?: boolean | Prisma.violation_category$violation_typeArgs<ExtArgs>;
    _count?: boolean | Prisma.Violation_categoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violation_category"]>;
export type violation_categorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["violation_category"]>;
export type violation_categorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
}, ExtArgs["result"]["violation_category"]>;
export type violation_categorySelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type violation_categoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["violation_category"]>;
export type violation_categoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violation_type?: boolean | Prisma.violation_category$violation_typeArgs<ExtArgs>;
    _count?: boolean | Prisma.Violation_categoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type violation_categoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type violation_categoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $violation_categoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "violation_category";
    objects: {
        violation_type: Prisma.$violation_typePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["violation_category"]>;
    composites: {};
};
export type violation_categoryGetPayload<S extends boolean | null | undefined | violation_categoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload, S>;
export type violation_categoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<violation_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Violation_categoryCountAggregateInputType | true;
};
export interface violation_categoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['violation_category'];
        meta: {
            name: 'violation_category';
        };
    };
    /**
     * Find zero or one Violation_category that matches the filter.
     * @param {violation_categoryFindUniqueArgs} args - Arguments to find a Violation_category
     * @example
     * // Get one Violation_category
     * const violation_category = await prisma.violation_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends violation_categoryFindUniqueArgs>(args: Prisma.SelectSubset<T, violation_categoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Violation_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {violation_categoryFindUniqueOrThrowArgs} args - Arguments to find a Violation_category
     * @example
     * // Get one Violation_category
     * const violation_category = await prisma.violation_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends violation_categoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, violation_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryFindFirstArgs} args - Arguments to find a Violation_category
     * @example
     * // Get one Violation_category
     * const violation_category = await prisma.violation_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends violation_categoryFindFirstArgs>(args?: Prisma.SelectSubset<T, violation_categoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryFindFirstOrThrowArgs} args - Arguments to find a Violation_category
     * @example
     * // Get one Violation_category
     * const violation_category = await prisma.violation_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends violation_categoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, violation_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Violation_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Violation_categories
     * const violation_categories = await prisma.violation_category.findMany()
     *
     * // Get first 10 Violation_categories
     * const violation_categories = await prisma.violation_category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const violation_categoryWithIdOnly = await prisma.violation_category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends violation_categoryFindManyArgs>(args?: Prisma.SelectSubset<T, violation_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Violation_category.
     * @param {violation_categoryCreateArgs} args - Arguments to create a Violation_category.
     * @example
     * // Create one Violation_category
     * const Violation_category = await prisma.violation_category.create({
     *   data: {
     *     // ... data to create a Violation_category
     *   }
     * })
     *
     */
    create<T extends violation_categoryCreateArgs>(args: Prisma.SelectSubset<T, violation_categoryCreateArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Violation_categories.
     * @param {violation_categoryCreateManyArgs} args - Arguments to create many Violation_categories.
     * @example
     * // Create many Violation_categories
     * const violation_category = await prisma.violation_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends violation_categoryCreateManyArgs>(args?: Prisma.SelectSubset<T, violation_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Violation_categories and returns the data saved in the database.
     * @param {violation_categoryCreateManyAndReturnArgs} args - Arguments to create many Violation_categories.
     * @example
     * // Create many Violation_categories
     * const violation_category = await prisma.violation_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Violation_categories and only return the `id`
     * const violation_categoryWithIdOnly = await prisma.violation_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends violation_categoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, violation_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Violation_category.
     * @param {violation_categoryDeleteArgs} args - Arguments to delete one Violation_category.
     * @example
     * // Delete one Violation_category
     * const Violation_category = await prisma.violation_category.delete({
     *   where: {
     *     // ... filter to delete one Violation_category
     *   }
     * })
     *
     */
    delete<T extends violation_categoryDeleteArgs>(args: Prisma.SelectSubset<T, violation_categoryDeleteArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Violation_category.
     * @param {violation_categoryUpdateArgs} args - Arguments to update one Violation_category.
     * @example
     * // Update one Violation_category
     * const violation_category = await prisma.violation_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends violation_categoryUpdateArgs>(args: Prisma.SelectSubset<T, violation_categoryUpdateArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Violation_categories.
     * @param {violation_categoryDeleteManyArgs} args - Arguments to filter Violation_categories to delete.
     * @example
     * // Delete a few Violation_categories
     * const { count } = await prisma.violation_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends violation_categoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, violation_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Violation_categories
     * const violation_category = await prisma.violation_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends violation_categoryUpdateManyArgs>(args: Prisma.SelectSubset<T, violation_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_categories and returns the data updated in the database.
     * @param {violation_categoryUpdateManyAndReturnArgs} args - Arguments to update many Violation_categories.
     * @example
     * // Update many Violation_categories
     * const violation_category = await prisma.violation_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Violation_categories and only return the `id`
     * const violation_categoryWithIdOnly = await prisma.violation_category.updateManyAndReturn({
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
    updateManyAndReturn<T extends violation_categoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, violation_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Violation_category.
     * @param {violation_categoryUpsertArgs} args - Arguments to update or create a Violation_category.
     * @example
     * // Update or create a Violation_category
     * const violation_category = await prisma.violation_category.upsert({
     *   create: {
     *     // ... data to create a Violation_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Violation_category we want to update
     *   }
     * })
     */
    upsert<T extends violation_categoryUpsertArgs>(args: Prisma.SelectSubset<T, violation_categoryUpsertArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryCountArgs} args - Arguments to filter Violation_categories to count.
     * @example
     * // Count the number of Violation_categories
     * const count = await prisma.violation_category.count({
     *   where: {
     *     // ... the filter for the Violation_categories we want to count
     *   }
     * })
    **/
    count<T extends violation_categoryCountArgs>(args?: Prisma.Subset<T, violation_categoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Violation_categoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Violation_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Violation_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Violation_categoryAggregateArgs>(args: Prisma.Subset<T, Violation_categoryAggregateArgs>): Prisma.PrismaPromise<GetViolation_categoryAggregateType<T>>;
    /**
     * Group by Violation_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends violation_categoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: violation_categoryGroupByArgs['orderBy'];
    } : {
        orderBy?: violation_categoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, violation_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolation_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the violation_category model
     */
    readonly fields: violation_categoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for violation_category.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__violation_categoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    violation_type<T extends Prisma.violation_category$violation_typeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.violation_category$violation_typeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the violation_category model
 */
export interface violation_categoryFieldRefs {
    readonly id: Prisma.FieldRef<"violation_category", 'Int'>;
    readonly name: Prisma.FieldRef<"violation_category", 'String'>;
}
/**
 * violation_category findUnique
 */
export type violation_categoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which violation_category to fetch.
     */
    where: Prisma.violation_categoryWhereUniqueInput;
};
/**
 * violation_category findUniqueOrThrow
 */
export type violation_categoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which violation_category to fetch.
     */
    where: Prisma.violation_categoryWhereUniqueInput;
};
/**
 * violation_category findFirst
 */
export type violation_categoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which violation_category to fetch.
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoryOrderByWithRelationInput | Prisma.violation_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_categories.
     */
    cursor?: Prisma.violation_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violation_categories.
     */
    distinct?: Prisma.Violation_categoryScalarFieldEnum | Prisma.Violation_categoryScalarFieldEnum[];
};
/**
 * violation_category findFirstOrThrow
 */
export type violation_categoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which violation_category to fetch.
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoryOrderByWithRelationInput | Prisma.violation_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_categories.
     */
    cursor?: Prisma.violation_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violation_categories.
     */
    distinct?: Prisma.Violation_categoryScalarFieldEnum | Prisma.Violation_categoryScalarFieldEnum[];
};
/**
 * violation_category findMany
 */
export type violation_categoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoryOrderByWithRelationInput | Prisma.violation_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing violation_categories.
     */
    cursor?: Prisma.violation_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_categories.
     */
    skip?: number;
    distinct?: Prisma.Violation_categoryScalarFieldEnum | Prisma.Violation_categoryScalarFieldEnum[];
};
/**
 * violation_category create
 */
export type violation_categoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a violation_category.
     */
    data: Prisma.XOR<Prisma.violation_categoryCreateInput, Prisma.violation_categoryUncheckedCreateInput>;
};
/**
 * violation_category createMany
 */
export type violation_categoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many violation_categories.
     */
    data: Prisma.violation_categoryCreateManyInput | Prisma.violation_categoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violation_category createManyAndReturn
 */
export type violation_categoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * The data used to create many violation_categories.
     */
    data: Prisma.violation_categoryCreateManyInput | Prisma.violation_categoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violation_category update
 */
export type violation_categoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a violation_category.
     */
    data: Prisma.XOR<Prisma.violation_categoryUpdateInput, Prisma.violation_categoryUncheckedUpdateInput>;
    /**
     * Choose, which violation_category to update.
     */
    where: Prisma.violation_categoryWhereUniqueInput;
};
/**
 * violation_category updateMany
 */
export type violation_categoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update violation_categories.
     */
    data: Prisma.XOR<Prisma.violation_categoryUpdateManyMutationInput, Prisma.violation_categoryUncheckedUpdateManyInput>;
    /**
     * Filter which violation_categories to update
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * Limit how many violation_categories to update.
     */
    limit?: number;
};
/**
 * violation_category updateManyAndReturn
 */
export type violation_categoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * The data used to update violation_categories.
     */
    data: Prisma.XOR<Prisma.violation_categoryUpdateManyMutationInput, Prisma.violation_categoryUncheckedUpdateManyInput>;
    /**
     * Filter which violation_categories to update
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * Limit how many violation_categories to update.
     */
    limit?: number;
};
/**
 * violation_category upsert
 */
export type violation_categoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the violation_category to update in case it exists.
     */
    where: Prisma.violation_categoryWhereUniqueInput;
    /**
     * In case the violation_category found by the `where` argument doesn't exist, create a new violation_category with this data.
     */
    create: Prisma.XOR<Prisma.violation_categoryCreateInput, Prisma.violation_categoryUncheckedCreateInput>;
    /**
     * In case the violation_category was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.violation_categoryUpdateInput, Prisma.violation_categoryUncheckedUpdateInput>;
};
/**
 * violation_category delete
 */
export type violation_categoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
    /**
     * Filter which violation_category to delete.
     */
    where: Prisma.violation_categoryWhereUniqueInput;
};
/**
 * violation_category deleteMany
 */
export type violation_categoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_categories to delete
     */
    where?: Prisma.violation_categoryWhereInput;
    /**
     * Limit how many violation_categories to delete.
     */
    limit?: number;
};
/**
 * violation_category.violation_type
 */
export type violation_category$violation_typeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_type
     */
    select?: Prisma.violation_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_type
     */
    omit?: Prisma.violation_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_typeInclude<ExtArgs> | null;
    where?: Prisma.violation_typeWhereInput;
    orderBy?: Prisma.violation_typeOrderByWithRelationInput | Prisma.violation_typeOrderByWithRelationInput[];
    cursor?: Prisma.violation_typeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Violation_typeScalarFieldEnum | Prisma.Violation_typeScalarFieldEnum[];
};
/**
 * violation_category without action
 */
export type violation_categoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_category
     */
    select?: Prisma.violation_categorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_category
     */
    omit?: Prisma.violation_categoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_categoryInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=violation_category.d.ts.map