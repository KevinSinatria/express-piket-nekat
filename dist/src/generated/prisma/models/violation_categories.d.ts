import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model violation_categories
 *
 */
export type violation_categoriesModel = runtime.Types.Result.DefaultSelection<Prisma.$violation_categoriesPayload>;
export type AggregateViolation_categories = {
    _count: Violation_categoriesCountAggregateOutputType | null;
    _avg: Violation_categoriesAvgAggregateOutputType | null;
    _sum: Violation_categoriesSumAggregateOutputType | null;
    _min: Violation_categoriesMinAggregateOutputType | null;
    _max: Violation_categoriesMaxAggregateOutputType | null;
};
export type Violation_categoriesAvgAggregateOutputType = {
    id: number | null;
};
export type Violation_categoriesSumAggregateOutputType = {
    id: number | null;
};
export type Violation_categoriesMinAggregateOutputType = {
    id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Violation_categoriesMaxAggregateOutputType = {
    id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Violation_categoriesCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Violation_categoriesAvgAggregateInputType = {
    id?: true;
};
export type Violation_categoriesSumAggregateInputType = {
    id?: true;
};
export type Violation_categoriesMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Violation_categoriesMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
};
export type Violation_categoriesCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Violation_categoriesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_categories to aggregate.
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoriesOrderByWithRelationInput | Prisma.violation_categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.violation_categoriesWhereUniqueInput;
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
    _count?: true | Violation_categoriesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Violation_categoriesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Violation_categoriesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Violation_categoriesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Violation_categoriesMaxAggregateInputType;
};
export type GetViolation_categoriesAggregateType<T extends Violation_categoriesAggregateArgs> = {
    [P in keyof T & keyof AggregateViolation_categories]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateViolation_categories[P]> : Prisma.GetScalarType<T[P], AggregateViolation_categories[P]>;
};
export type violation_categoriesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violation_categoriesWhereInput;
    orderBy?: Prisma.violation_categoriesOrderByWithAggregationInput | Prisma.violation_categoriesOrderByWithAggregationInput[];
    by: Prisma.Violation_categoriesScalarFieldEnum[] | Prisma.Violation_categoriesScalarFieldEnum;
    having?: Prisma.violation_categoriesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Violation_categoriesCountAggregateInputType | true;
    _avg?: Violation_categoriesAvgAggregateInputType;
    _sum?: Violation_categoriesSumAggregateInputType;
    _min?: Violation_categoriesMinAggregateInputType;
    _max?: Violation_categoriesMaxAggregateInputType;
};
export type Violation_categoriesGroupByOutputType = {
    id: number;
    created_at: Date | null;
    updated_at: Date | null;
    _count: Violation_categoriesCountAggregateOutputType | null;
    _avg: Violation_categoriesAvgAggregateOutputType | null;
    _sum: Violation_categoriesSumAggregateOutputType | null;
    _min: Violation_categoriesMinAggregateOutputType | null;
    _max: Violation_categoriesMaxAggregateOutputType | null;
};
type GetViolation_categoriesGroupByPayload<T extends violation_categoriesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Violation_categoriesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Violation_categoriesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Violation_categoriesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Violation_categoriesGroupByOutputType[P]>;
}>>;
export type violation_categoriesWhereInput = {
    AND?: Prisma.violation_categoriesWhereInput | Prisma.violation_categoriesWhereInput[];
    OR?: Prisma.violation_categoriesWhereInput[];
    NOT?: Prisma.violation_categoriesWhereInput | Prisma.violation_categoriesWhereInput[];
    id?: Prisma.IntFilter<"violation_categories"> | number;
    created_at?: Prisma.DateTimeNullableFilter<"violation_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"violation_categories"> | Date | string | null;
};
export type violation_categoriesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type violation_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.violation_categoriesWhereInput | Prisma.violation_categoriesWhereInput[];
    OR?: Prisma.violation_categoriesWhereInput[];
    NOT?: Prisma.violation_categoriesWhereInput | Prisma.violation_categoriesWhereInput[];
    created_at?: Prisma.DateTimeNullableFilter<"violation_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"violation_categories"> | Date | string | null;
}, "id">;
export type violation_categoriesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.violation_categoriesCountOrderByAggregateInput;
    _avg?: Prisma.violation_categoriesAvgOrderByAggregateInput;
    _max?: Prisma.violation_categoriesMaxOrderByAggregateInput;
    _min?: Prisma.violation_categoriesMinOrderByAggregateInput;
    _sum?: Prisma.violation_categoriesSumOrderByAggregateInput;
};
export type violation_categoriesScalarWhereWithAggregatesInput = {
    AND?: Prisma.violation_categoriesScalarWhereWithAggregatesInput | Prisma.violation_categoriesScalarWhereWithAggregatesInput[];
    OR?: Prisma.violation_categoriesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.violation_categoriesScalarWhereWithAggregatesInput | Prisma.violation_categoriesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"violation_categories"> | number;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"violation_categories"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"violation_categories"> | Date | string | null;
};
export type violation_categoriesCreateInput = {
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type violation_categoriesUncheckedCreateInput = {
    id?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type violation_categoriesUpdateInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type violation_categoriesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type violation_categoriesCreateManyInput = {
    id?: number;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type violation_categoriesUpdateManyMutationInput = {
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type violation_categoriesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type violation_categoriesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type violation_categoriesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type violation_categoriesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type violation_categoriesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type violation_categoriesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type violation_categoriesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["violation_categories"]>;
export type violation_categoriesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["violation_categories"]>;
export type violation_categoriesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["violation_categories"]>;
export type violation_categoriesSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type violation_categoriesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "created_at" | "updated_at", ExtArgs["result"]["violation_categories"]>;
export type $violation_categoriesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "violation_categories";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["violation_categories"]>;
    composites: {};
};
export type violation_categoriesGetPayload<S extends boolean | null | undefined | violation_categoriesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload, S>;
export type violation_categoriesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<violation_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Violation_categoriesCountAggregateInputType | true;
};
export interface violation_categoriesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['violation_categories'];
        meta: {
            name: 'violation_categories';
        };
    };
    /**
     * Find zero or one Violation_categories that matches the filter.
     * @param {violation_categoriesFindUniqueArgs} args - Arguments to find a Violation_categories
     * @example
     * // Get one Violation_categories
     * const violation_categories = await prisma.violation_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends violation_categoriesFindUniqueArgs>(args: Prisma.SelectSubset<T, violation_categoriesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Violation_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {violation_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Violation_categories
     * @example
     * // Get one Violation_categories
     * const violation_categories = await prisma.violation_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends violation_categoriesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, violation_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesFindFirstArgs} args - Arguments to find a Violation_categories
     * @example
     * // Get one Violation_categories
     * const violation_categories = await prisma.violation_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends violation_categoriesFindFirstArgs>(args?: Prisma.SelectSubset<T, violation_categoriesFindFirstArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesFindFirstOrThrowArgs} args - Arguments to find a Violation_categories
     * @example
     * // Get one Violation_categories
     * const violation_categories = await prisma.violation_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends violation_categoriesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, violation_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Violation_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Violation_categories
     * const violation_categories = await prisma.violation_categories.findMany()
     *
     * // Get first 10 Violation_categories
     * const violation_categories = await prisma.violation_categories.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const violation_categoriesWithIdOnly = await prisma.violation_categories.findMany({ select: { id: true } })
     *
     */
    findMany<T extends violation_categoriesFindManyArgs>(args?: Prisma.SelectSubset<T, violation_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Violation_categories.
     * @param {violation_categoriesCreateArgs} args - Arguments to create a Violation_categories.
     * @example
     * // Create one Violation_categories
     * const Violation_categories = await prisma.violation_categories.create({
     *   data: {
     *     // ... data to create a Violation_categories
     *   }
     * })
     *
     */
    create<T extends violation_categoriesCreateArgs>(args: Prisma.SelectSubset<T, violation_categoriesCreateArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Violation_categories.
     * @param {violation_categoriesCreateManyArgs} args - Arguments to create many Violation_categories.
     * @example
     * // Create many Violation_categories
     * const violation_categories = await prisma.violation_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends violation_categoriesCreateManyArgs>(args?: Prisma.SelectSubset<T, violation_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Violation_categories and returns the data saved in the database.
     * @param {violation_categoriesCreateManyAndReturnArgs} args - Arguments to create many Violation_categories.
     * @example
     * // Create many Violation_categories
     * const violation_categories = await prisma.violation_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Violation_categories and only return the `id`
     * const violation_categoriesWithIdOnly = await prisma.violation_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends violation_categoriesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, violation_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Violation_categories.
     * @param {violation_categoriesDeleteArgs} args - Arguments to delete one Violation_categories.
     * @example
     * // Delete one Violation_categories
     * const Violation_categories = await prisma.violation_categories.delete({
     *   where: {
     *     // ... filter to delete one Violation_categories
     *   }
     * })
     *
     */
    delete<T extends violation_categoriesDeleteArgs>(args: Prisma.SelectSubset<T, violation_categoriesDeleteArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Violation_categories.
     * @param {violation_categoriesUpdateArgs} args - Arguments to update one Violation_categories.
     * @example
     * // Update one Violation_categories
     * const violation_categories = await prisma.violation_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends violation_categoriesUpdateArgs>(args: Prisma.SelectSubset<T, violation_categoriesUpdateArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Violation_categories.
     * @param {violation_categoriesDeleteManyArgs} args - Arguments to filter Violation_categories to delete.
     * @example
     * // Delete a few Violation_categories
     * const { count } = await prisma.violation_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends violation_categoriesDeleteManyArgs>(args?: Prisma.SelectSubset<T, violation_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Violation_categories
     * const violation_categories = await prisma.violation_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends violation_categoriesUpdateManyArgs>(args: Prisma.SelectSubset<T, violation_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_categories and returns the data updated in the database.
     * @param {violation_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Violation_categories.
     * @example
     * // Update many Violation_categories
     * const violation_categories = await prisma.violation_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Violation_categories and only return the `id`
     * const violation_categoriesWithIdOnly = await prisma.violation_categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends violation_categoriesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, violation_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Violation_categories.
     * @param {violation_categoriesUpsertArgs} args - Arguments to update or create a Violation_categories.
     * @example
     * // Update or create a Violation_categories
     * const violation_categories = await prisma.violation_categories.upsert({
     *   create: {
     *     // ... data to create a Violation_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Violation_categories we want to update
     *   }
     * })
     */
    upsert<T extends violation_categoriesUpsertArgs>(args: Prisma.SelectSubset<T, violation_categoriesUpsertArgs<ExtArgs>>): Prisma.Prisma__violation_categoriesClient<runtime.Types.Result.GetResult<Prisma.$violation_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesCountArgs} args - Arguments to filter Violation_categories to count.
     * @example
     * // Count the number of Violation_categories
     * const count = await prisma.violation_categories.count({
     *   where: {
     *     // ... the filter for the Violation_categories we want to count
     *   }
     * })
    **/
    count<T extends violation_categoriesCountArgs>(args?: Prisma.Subset<T, violation_categoriesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Violation_categoriesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Violation_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Violation_categoriesAggregateArgs>(args: Prisma.Subset<T, Violation_categoriesAggregateArgs>): Prisma.PrismaPromise<GetViolation_categoriesAggregateType<T>>;
    /**
     * Group by Violation_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_categoriesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends violation_categoriesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: violation_categoriesGroupByArgs['orderBy'];
    } : {
        orderBy?: violation_categoriesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, violation_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolation_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the violation_categories model
     */
    readonly fields: violation_categoriesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for violation_categories.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__violation_categoriesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the violation_categories model
 */
export interface violation_categoriesFieldRefs {
    readonly id: Prisma.FieldRef<"violation_categories", 'Int'>;
    readonly created_at: Prisma.FieldRef<"violation_categories", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"violation_categories", 'DateTime'>;
}
/**
 * violation_categories findUnique
 */
export type violation_categoriesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where: Prisma.violation_categoriesWhereUniqueInput;
};
/**
 * violation_categories findUniqueOrThrow
 */
export type violation_categoriesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where: Prisma.violation_categoriesWhereUniqueInput;
};
/**
 * violation_categories findFirst
 */
export type violation_categoriesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoriesOrderByWithRelationInput | Prisma.violation_categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_categories.
     */
    cursor?: Prisma.violation_categoriesWhereUniqueInput;
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
    distinct?: Prisma.Violation_categoriesScalarFieldEnum | Prisma.Violation_categoriesScalarFieldEnum[];
};
/**
 * violation_categories findFirstOrThrow
 */
export type violation_categoriesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoriesOrderByWithRelationInput | Prisma.violation_categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_categories.
     */
    cursor?: Prisma.violation_categoriesWhereUniqueInput;
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
    distinct?: Prisma.Violation_categoriesScalarFieldEnum | Prisma.Violation_categoriesScalarFieldEnum[];
};
/**
 * violation_categories findMany
 */
export type violation_categoriesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter, which violation_categories to fetch.
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_categories to fetch.
     */
    orderBy?: Prisma.violation_categoriesOrderByWithRelationInput | Prisma.violation_categoriesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing violation_categories.
     */
    cursor?: Prisma.violation_categoriesWhereUniqueInput;
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
    distinct?: Prisma.Violation_categoriesScalarFieldEnum | Prisma.Violation_categoriesScalarFieldEnum[];
};
/**
 * violation_categories create
 */
export type violation_categoriesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * The data needed to create a violation_categories.
     */
    data?: Prisma.XOR<Prisma.violation_categoriesCreateInput, Prisma.violation_categoriesUncheckedCreateInput>;
};
/**
 * violation_categories createMany
 */
export type violation_categoriesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many violation_categories.
     */
    data: Prisma.violation_categoriesCreateManyInput | Prisma.violation_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violation_categories createManyAndReturn
 */
export type violation_categoriesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * The data used to create many violation_categories.
     */
    data: Prisma.violation_categoriesCreateManyInput | Prisma.violation_categoriesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violation_categories update
 */
export type violation_categoriesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * The data needed to update a violation_categories.
     */
    data: Prisma.XOR<Prisma.violation_categoriesUpdateInput, Prisma.violation_categoriesUncheckedUpdateInput>;
    /**
     * Choose, which violation_categories to update.
     */
    where: Prisma.violation_categoriesWhereUniqueInput;
};
/**
 * violation_categories updateMany
 */
export type violation_categoriesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update violation_categories.
     */
    data: Prisma.XOR<Prisma.violation_categoriesUpdateManyMutationInput, Prisma.violation_categoriesUncheckedUpdateManyInput>;
    /**
     * Filter which violation_categories to update
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * Limit how many violation_categories to update.
     */
    limit?: number;
};
/**
 * violation_categories updateManyAndReturn
 */
export type violation_categoriesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * The data used to update violation_categories.
     */
    data: Prisma.XOR<Prisma.violation_categoriesUpdateManyMutationInput, Prisma.violation_categoriesUncheckedUpdateManyInput>;
    /**
     * Filter which violation_categories to update
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * Limit how many violation_categories to update.
     */
    limit?: number;
};
/**
 * violation_categories upsert
 */
export type violation_categoriesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * The filter to search for the violation_categories to update in case it exists.
     */
    where: Prisma.violation_categoriesWhereUniqueInput;
    /**
     * In case the violation_categories found by the `where` argument doesn't exist, create a new violation_categories with this data.
     */
    create: Prisma.XOR<Prisma.violation_categoriesCreateInput, Prisma.violation_categoriesUncheckedCreateInput>;
    /**
     * In case the violation_categories was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.violation_categoriesUpdateInput, Prisma.violation_categoriesUncheckedUpdateInput>;
};
/**
 * violation_categories delete
 */
export type violation_categoriesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
    /**
     * Filter which violation_categories to delete.
     */
    where: Prisma.violation_categoriesWhereUniqueInput;
};
/**
 * violation_categories deleteMany
 */
export type violation_categoriesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_categories to delete
     */
    where?: Prisma.violation_categoriesWhereInput;
    /**
     * Limit how many violation_categories to delete.
     */
    limit?: number;
};
/**
 * violation_categories without action
 */
export type violation_categoriesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_categories
     */
    select?: Prisma.violation_categoriesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_categories
     */
    omit?: Prisma.violation_categoriesOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=violation_categories.d.ts.map