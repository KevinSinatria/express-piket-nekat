import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model violation_type
 *
 */
export type violation_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$violation_typePayload>;
export type AggregateViolation_type = {
    _count: Violation_typeCountAggregateOutputType | null;
    _avg: Violation_typeAvgAggregateOutputType | null;
    _sum: Violation_typeSumAggregateOutputType | null;
    _min: Violation_typeMinAggregateOutputType | null;
    _max: Violation_typeMaxAggregateOutputType | null;
};
export type Violation_typeAvgAggregateOutputType = {
    id: number | null;
    point: number | null;
    category_id: number | null;
};
export type Violation_typeSumAggregateOutputType = {
    id: number | null;
    point: number | null;
    category_id: number | null;
};
export type Violation_typeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    point: number | null;
    punishment: string | null;
    category_id: number | null;
};
export type Violation_typeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    point: number | null;
    punishment: string | null;
    category_id: number | null;
};
export type Violation_typeCountAggregateOutputType = {
    id: number;
    name: number;
    point: number;
    punishment: number;
    category_id: number;
    _all: number;
};
export type Violation_typeAvgAggregateInputType = {
    id?: true;
    point?: true;
    category_id?: true;
};
export type Violation_typeSumAggregateInputType = {
    id?: true;
    point?: true;
    category_id?: true;
};
export type Violation_typeMinAggregateInputType = {
    id?: true;
    name?: true;
    point?: true;
    punishment?: true;
    category_id?: true;
};
export type Violation_typeMaxAggregateInputType = {
    id?: true;
    name?: true;
    point?: true;
    punishment?: true;
    category_id?: true;
};
export type Violation_typeCountAggregateInputType = {
    id?: true;
    name?: true;
    point?: true;
    punishment?: true;
    category_id?: true;
    _all?: true;
};
export type Violation_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_type to aggregate.
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_types to fetch.
     */
    orderBy?: Prisma.violation_typeOrderByWithRelationInput | Prisma.violation_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.violation_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned violation_types
    **/
    _count?: true | Violation_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Violation_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Violation_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Violation_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Violation_typeMaxAggregateInputType;
};
export type GetViolation_typeAggregateType<T extends Violation_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateViolation_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateViolation_type[P]> : Prisma.GetScalarType<T[P], AggregateViolation_type[P]>;
};
export type violation_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violation_typeWhereInput;
    orderBy?: Prisma.violation_typeOrderByWithAggregationInput | Prisma.violation_typeOrderByWithAggregationInput[];
    by: Prisma.Violation_typeScalarFieldEnum[] | Prisma.Violation_typeScalarFieldEnum;
    having?: Prisma.violation_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Violation_typeCountAggregateInputType | true;
    _avg?: Violation_typeAvgAggregateInputType;
    _sum?: Violation_typeSumAggregateInputType;
    _min?: Violation_typeMinAggregateInputType;
    _max?: Violation_typeMaxAggregateInputType;
};
export type Violation_typeGroupByOutputType = {
    id: number;
    name: string;
    point: number;
    punishment: string;
    category_id: number;
    _count: Violation_typeCountAggregateOutputType | null;
    _avg: Violation_typeAvgAggregateOutputType | null;
    _sum: Violation_typeSumAggregateOutputType | null;
    _min: Violation_typeMinAggregateOutputType | null;
    _max: Violation_typeMaxAggregateOutputType | null;
};
type GetViolation_typeGroupByPayload<T extends violation_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Violation_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Violation_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Violation_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Violation_typeGroupByOutputType[P]>;
}>>;
export type violation_typeWhereInput = {
    AND?: Prisma.violation_typeWhereInput | Prisma.violation_typeWhereInput[];
    OR?: Prisma.violation_typeWhereInput[];
    NOT?: Prisma.violation_typeWhereInput | Prisma.violation_typeWhereInput[];
    id?: Prisma.IntFilter<"violation_type"> | number;
    name?: Prisma.StringFilter<"violation_type"> | string;
    point?: Prisma.IntFilter<"violation_type"> | number;
    punishment?: Prisma.StringFilter<"violation_type"> | string;
    category_id?: Prisma.IntFilter<"violation_type"> | number;
    violation_category?: Prisma.XOR<Prisma.Violation_categoryScalarRelationFilter, Prisma.violation_categoryWhereInput>;
    violations?: Prisma.ViolationsListRelationFilter;
};
export type violation_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    punishment?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    violation_category?: Prisma.violation_categoryOrderByWithRelationInput;
    violations?: Prisma.violationsOrderByRelationAggregateInput;
};
export type violation_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.violation_typeWhereInput | Prisma.violation_typeWhereInput[];
    OR?: Prisma.violation_typeWhereInput[];
    NOT?: Prisma.violation_typeWhereInput | Prisma.violation_typeWhereInput[];
    name?: Prisma.StringFilter<"violation_type"> | string;
    point?: Prisma.IntFilter<"violation_type"> | number;
    punishment?: Prisma.StringFilter<"violation_type"> | string;
    category_id?: Prisma.IntFilter<"violation_type"> | number;
    violation_category?: Prisma.XOR<Prisma.Violation_categoryScalarRelationFilter, Prisma.violation_categoryWhereInput>;
    violations?: Prisma.ViolationsListRelationFilter;
}, "id">;
export type violation_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    punishment?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
    _count?: Prisma.violation_typeCountOrderByAggregateInput;
    _avg?: Prisma.violation_typeAvgOrderByAggregateInput;
    _max?: Prisma.violation_typeMaxOrderByAggregateInput;
    _min?: Prisma.violation_typeMinOrderByAggregateInput;
    _sum?: Prisma.violation_typeSumOrderByAggregateInput;
};
export type violation_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.violation_typeScalarWhereWithAggregatesInput | Prisma.violation_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.violation_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.violation_typeScalarWhereWithAggregatesInput | Prisma.violation_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"violation_type"> | number;
    name?: Prisma.StringWithAggregatesFilter<"violation_type"> | string;
    point?: Prisma.IntWithAggregatesFilter<"violation_type"> | number;
    punishment?: Prisma.StringWithAggregatesFilter<"violation_type"> | string;
    category_id?: Prisma.IntWithAggregatesFilter<"violation_type"> | number;
};
export type violation_typeCreateInput = {
    name: string;
    point: number;
    punishment: string;
    violation_category: Prisma.violation_categoryCreateNestedOneWithoutViolation_typeInput;
    violations?: Prisma.violationsCreateNestedManyWithoutViolation_typeInput;
};
export type violation_typeUncheckedCreateInput = {
    id?: number;
    name: string;
    point: number;
    punishment: string;
    category_id: number;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutViolation_typeInput;
};
export type violation_typeUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    violation_category?: Prisma.violation_categoryUpdateOneRequiredWithoutViolation_typeNestedInput;
    violations?: Prisma.violationsUpdateManyWithoutViolation_typeNestedInput;
};
export type violation_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutViolation_typeNestedInput;
};
export type violation_typeCreateManyInput = {
    id?: number;
    name: string;
    point: number;
    punishment: string;
    category_id: number;
};
export type violation_typeUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type violation_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Violation_typeListRelationFilter = {
    every?: Prisma.violation_typeWhereInput;
    some?: Prisma.violation_typeWhereInput;
    none?: Prisma.violation_typeWhereInput;
};
export type violation_typeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type violation_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    punishment?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type violation_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type violation_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    punishment?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type violation_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    punishment?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type violation_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    point?: Prisma.SortOrder;
    category_id?: Prisma.SortOrder;
};
export type Violation_typeScalarRelationFilter = {
    is?: Prisma.violation_typeWhereInput;
    isNot?: Prisma.violation_typeWhereInput;
};
export type violation_typeCreateNestedManyWithoutViolation_categoryInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput> | Prisma.violation_typeCreateWithoutViolation_categoryInput[] | Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput[];
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput | Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput[];
    createMany?: Prisma.violation_typeCreateManyViolation_categoryInputEnvelope;
    connect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
};
export type violation_typeUncheckedCreateNestedManyWithoutViolation_categoryInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput> | Prisma.violation_typeCreateWithoutViolation_categoryInput[] | Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput[];
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput | Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput[];
    createMany?: Prisma.violation_typeCreateManyViolation_categoryInputEnvelope;
    connect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
};
export type violation_typeUpdateManyWithoutViolation_categoryNestedInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput> | Prisma.violation_typeCreateWithoutViolation_categoryInput[] | Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput[];
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput | Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput[];
    upsert?: Prisma.violation_typeUpsertWithWhereUniqueWithoutViolation_categoryInput | Prisma.violation_typeUpsertWithWhereUniqueWithoutViolation_categoryInput[];
    createMany?: Prisma.violation_typeCreateManyViolation_categoryInputEnvelope;
    set?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    disconnect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    delete?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    connect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    update?: Prisma.violation_typeUpdateWithWhereUniqueWithoutViolation_categoryInput | Prisma.violation_typeUpdateWithWhereUniqueWithoutViolation_categoryInput[];
    updateMany?: Prisma.violation_typeUpdateManyWithWhereWithoutViolation_categoryInput | Prisma.violation_typeUpdateManyWithWhereWithoutViolation_categoryInput[];
    deleteMany?: Prisma.violation_typeScalarWhereInput | Prisma.violation_typeScalarWhereInput[];
};
export type violation_typeUncheckedUpdateManyWithoutViolation_categoryNestedInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput> | Prisma.violation_typeCreateWithoutViolation_categoryInput[] | Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput[];
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput | Prisma.violation_typeCreateOrConnectWithoutViolation_categoryInput[];
    upsert?: Prisma.violation_typeUpsertWithWhereUniqueWithoutViolation_categoryInput | Prisma.violation_typeUpsertWithWhereUniqueWithoutViolation_categoryInput[];
    createMany?: Prisma.violation_typeCreateManyViolation_categoryInputEnvelope;
    set?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    disconnect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    delete?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    connect?: Prisma.violation_typeWhereUniqueInput | Prisma.violation_typeWhereUniqueInput[];
    update?: Prisma.violation_typeUpdateWithWhereUniqueWithoutViolation_categoryInput | Prisma.violation_typeUpdateWithWhereUniqueWithoutViolation_categoryInput[];
    updateMany?: Prisma.violation_typeUpdateManyWithWhereWithoutViolation_categoryInput | Prisma.violation_typeUpdateManyWithWhereWithoutViolation_categoryInput[];
    deleteMany?: Prisma.violation_typeScalarWhereInput | Prisma.violation_typeScalarWhereInput[];
};
export type violation_typeCreateNestedOneWithoutViolationsInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolationsInput, Prisma.violation_typeUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolationsInput;
    connect?: Prisma.violation_typeWhereUniqueInput;
};
export type violation_typeUpdateOneRequiredWithoutViolationsNestedInput = {
    create?: Prisma.XOR<Prisma.violation_typeCreateWithoutViolationsInput, Prisma.violation_typeUncheckedCreateWithoutViolationsInput>;
    connectOrCreate?: Prisma.violation_typeCreateOrConnectWithoutViolationsInput;
    upsert?: Prisma.violation_typeUpsertWithoutViolationsInput;
    connect?: Prisma.violation_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.violation_typeUpdateToOneWithWhereWithoutViolationsInput, Prisma.violation_typeUpdateWithoutViolationsInput>, Prisma.violation_typeUncheckedUpdateWithoutViolationsInput>;
};
export type violation_typeCreateWithoutViolation_categoryInput = {
    name: string;
    point: number;
    punishment: string;
    violations?: Prisma.violationsCreateNestedManyWithoutViolation_typeInput;
};
export type violation_typeUncheckedCreateWithoutViolation_categoryInput = {
    id?: number;
    name: string;
    point: number;
    punishment: string;
    violations?: Prisma.violationsUncheckedCreateNestedManyWithoutViolation_typeInput;
};
export type violation_typeCreateOrConnectWithoutViolation_categoryInput = {
    where: Prisma.violation_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput>;
};
export type violation_typeCreateManyViolation_categoryInputEnvelope = {
    data: Prisma.violation_typeCreateManyViolation_categoryInput | Prisma.violation_typeCreateManyViolation_categoryInput[];
    skipDuplicates?: boolean;
};
export type violation_typeUpsertWithWhereUniqueWithoutViolation_categoryInput = {
    where: Prisma.violation_typeWhereUniqueInput;
    update: Prisma.XOR<Prisma.violation_typeUpdateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedUpdateWithoutViolation_categoryInput>;
    create: Prisma.XOR<Prisma.violation_typeCreateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedCreateWithoutViolation_categoryInput>;
};
export type violation_typeUpdateWithWhereUniqueWithoutViolation_categoryInput = {
    where: Prisma.violation_typeWhereUniqueInput;
    data: Prisma.XOR<Prisma.violation_typeUpdateWithoutViolation_categoryInput, Prisma.violation_typeUncheckedUpdateWithoutViolation_categoryInput>;
};
export type violation_typeUpdateManyWithWhereWithoutViolation_categoryInput = {
    where: Prisma.violation_typeScalarWhereInput;
    data: Prisma.XOR<Prisma.violation_typeUpdateManyMutationInput, Prisma.violation_typeUncheckedUpdateManyWithoutViolation_categoryInput>;
};
export type violation_typeScalarWhereInput = {
    AND?: Prisma.violation_typeScalarWhereInput | Prisma.violation_typeScalarWhereInput[];
    OR?: Prisma.violation_typeScalarWhereInput[];
    NOT?: Prisma.violation_typeScalarWhereInput | Prisma.violation_typeScalarWhereInput[];
    id?: Prisma.IntFilter<"violation_type"> | number;
    name?: Prisma.StringFilter<"violation_type"> | string;
    point?: Prisma.IntFilter<"violation_type"> | number;
    punishment?: Prisma.StringFilter<"violation_type"> | string;
    category_id?: Prisma.IntFilter<"violation_type"> | number;
};
export type violation_typeCreateWithoutViolationsInput = {
    name: string;
    point: number;
    punishment: string;
    violation_category: Prisma.violation_categoryCreateNestedOneWithoutViolation_typeInput;
};
export type violation_typeUncheckedCreateWithoutViolationsInput = {
    id?: number;
    name: string;
    point: number;
    punishment: string;
    category_id: number;
};
export type violation_typeCreateOrConnectWithoutViolationsInput = {
    where: Prisma.violation_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.violation_typeCreateWithoutViolationsInput, Prisma.violation_typeUncheckedCreateWithoutViolationsInput>;
};
export type violation_typeUpsertWithoutViolationsInput = {
    update: Prisma.XOR<Prisma.violation_typeUpdateWithoutViolationsInput, Prisma.violation_typeUncheckedUpdateWithoutViolationsInput>;
    create: Prisma.XOR<Prisma.violation_typeCreateWithoutViolationsInput, Prisma.violation_typeUncheckedCreateWithoutViolationsInput>;
    where?: Prisma.violation_typeWhereInput;
};
export type violation_typeUpdateToOneWithWhereWithoutViolationsInput = {
    where?: Prisma.violation_typeWhereInput;
    data: Prisma.XOR<Prisma.violation_typeUpdateWithoutViolationsInput, Prisma.violation_typeUncheckedUpdateWithoutViolationsInput>;
};
export type violation_typeUpdateWithoutViolationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    violation_category?: Prisma.violation_categoryUpdateOneRequiredWithoutViolation_typeNestedInput;
};
export type violation_typeUncheckedUpdateWithoutViolationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    category_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type violation_typeCreateManyViolation_categoryInput = {
    id?: number;
    name: string;
    point: number;
    punishment: string;
};
export type violation_typeUpdateWithoutViolation_categoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    violations?: Prisma.violationsUpdateManyWithoutViolation_typeNestedInput;
};
export type violation_typeUncheckedUpdateWithoutViolation_categoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
    violations?: Prisma.violationsUncheckedUpdateManyWithoutViolation_typeNestedInput;
};
export type violation_typeUncheckedUpdateManyWithoutViolation_categoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    point?: Prisma.IntFieldUpdateOperationsInput | number;
    punishment?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type Violation_typeCountOutputType
 */
export type Violation_typeCountOutputType = {
    violations: number;
};
export type Violation_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violations?: boolean | Violation_typeCountOutputTypeCountViolationsArgs;
};
/**
 * Violation_typeCountOutputType without action
 */
export type Violation_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation_typeCountOutputType
     */
    select?: Prisma.Violation_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Violation_typeCountOutputType without action
 */
export type Violation_typeCountOutputTypeCountViolationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.violationsWhereInput;
};
export type violation_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    point?: boolean;
    punishment?: boolean;
    category_id?: boolean;
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
    violations?: boolean | Prisma.violation_type$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Violation_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violation_type"]>;
export type violation_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    point?: boolean;
    punishment?: boolean;
    category_id?: boolean;
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violation_type"]>;
export type violation_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    point?: boolean;
    punishment?: boolean;
    category_id?: boolean;
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["violation_type"]>;
export type violation_typeSelectScalar = {
    id?: boolean;
    name?: boolean;
    point?: boolean;
    punishment?: boolean;
    category_id?: boolean;
};
export type violation_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "point" | "punishment" | "category_id", ExtArgs["result"]["violation_type"]>;
export type violation_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
    violations?: boolean | Prisma.violation_type$violationsArgs<ExtArgs>;
    _count?: boolean | Prisma.Violation_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type violation_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
};
export type violation_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    violation_category?: boolean | Prisma.violation_categoryDefaultArgs<ExtArgs>;
};
export type $violation_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "violation_type";
    objects: {
        violation_category: Prisma.$violation_categoryPayload<ExtArgs>;
        violations: Prisma.$violationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        point: number;
        punishment: string;
        category_id: number;
    }, ExtArgs["result"]["violation_type"]>;
    composites: {};
};
export type violation_typeGetPayload<S extends boolean | null | undefined | violation_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$violation_typePayload, S>;
export type violation_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<violation_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Violation_typeCountAggregateInputType | true;
};
export interface violation_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['violation_type'];
        meta: {
            name: 'violation_type';
        };
    };
    /**
     * Find zero or one Violation_type that matches the filter.
     * @param {violation_typeFindUniqueArgs} args - Arguments to find a Violation_type
     * @example
     * // Get one Violation_type
     * const violation_type = await prisma.violation_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends violation_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, violation_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Violation_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {violation_typeFindUniqueOrThrowArgs} args - Arguments to find a Violation_type
     * @example
     * // Get one Violation_type
     * const violation_type = await prisma.violation_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends violation_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, violation_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeFindFirstArgs} args - Arguments to find a Violation_type
     * @example
     * // Get one Violation_type
     * const violation_type = await prisma.violation_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends violation_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, violation_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Violation_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeFindFirstOrThrowArgs} args - Arguments to find a Violation_type
     * @example
     * // Get one Violation_type
     * const violation_type = await prisma.violation_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends violation_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, violation_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Violation_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Violation_types
     * const violation_types = await prisma.violation_type.findMany()
     *
     * // Get first 10 Violation_types
     * const violation_types = await prisma.violation_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const violation_typeWithIdOnly = await prisma.violation_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends violation_typeFindManyArgs>(args?: Prisma.SelectSubset<T, violation_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Violation_type.
     * @param {violation_typeCreateArgs} args - Arguments to create a Violation_type.
     * @example
     * // Create one Violation_type
     * const Violation_type = await prisma.violation_type.create({
     *   data: {
     *     // ... data to create a Violation_type
     *   }
     * })
     *
     */
    create<T extends violation_typeCreateArgs>(args: Prisma.SelectSubset<T, violation_typeCreateArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Violation_types.
     * @param {violation_typeCreateManyArgs} args - Arguments to create many Violation_types.
     * @example
     * // Create many Violation_types
     * const violation_type = await prisma.violation_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends violation_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, violation_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Violation_types and returns the data saved in the database.
     * @param {violation_typeCreateManyAndReturnArgs} args - Arguments to create many Violation_types.
     * @example
     * // Create many Violation_types
     * const violation_type = await prisma.violation_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Violation_types and only return the `id`
     * const violation_typeWithIdOnly = await prisma.violation_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends violation_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, violation_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Violation_type.
     * @param {violation_typeDeleteArgs} args - Arguments to delete one Violation_type.
     * @example
     * // Delete one Violation_type
     * const Violation_type = await prisma.violation_type.delete({
     *   where: {
     *     // ... filter to delete one Violation_type
     *   }
     * })
     *
     */
    delete<T extends violation_typeDeleteArgs>(args: Prisma.SelectSubset<T, violation_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Violation_type.
     * @param {violation_typeUpdateArgs} args - Arguments to update one Violation_type.
     * @example
     * // Update one Violation_type
     * const violation_type = await prisma.violation_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends violation_typeUpdateArgs>(args: Prisma.SelectSubset<T, violation_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Violation_types.
     * @param {violation_typeDeleteManyArgs} args - Arguments to filter Violation_types to delete.
     * @example
     * // Delete a few Violation_types
     * const { count } = await prisma.violation_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends violation_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, violation_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Violation_types
     * const violation_type = await prisma.violation_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends violation_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, violation_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Violation_types and returns the data updated in the database.
     * @param {violation_typeUpdateManyAndReturnArgs} args - Arguments to update many Violation_types.
     * @example
     * // Update many Violation_types
     * const violation_type = await prisma.violation_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Violation_types and only return the `id`
     * const violation_typeWithIdOnly = await prisma.violation_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends violation_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, violation_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Violation_type.
     * @param {violation_typeUpsertArgs} args - Arguments to update or create a Violation_type.
     * @example
     * // Update or create a Violation_type
     * const violation_type = await prisma.violation_type.upsert({
     *   create: {
     *     // ... data to create a Violation_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Violation_type we want to update
     *   }
     * })
     */
    upsert<T extends violation_typeUpsertArgs>(args: Prisma.SelectSubset<T, violation_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__violation_typeClient<runtime.Types.Result.GetResult<Prisma.$violation_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Violation_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeCountArgs} args - Arguments to filter Violation_types to count.
     * @example
     * // Count the number of Violation_types
     * const count = await prisma.violation_type.count({
     *   where: {
     *     // ... the filter for the Violation_types we want to count
     *   }
     * })
    **/
    count<T extends violation_typeCountArgs>(args?: Prisma.Subset<T, violation_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Violation_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Violation_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Violation_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Violation_typeAggregateArgs>(args: Prisma.Subset<T, Violation_typeAggregateArgs>): Prisma.PrismaPromise<GetViolation_typeAggregateType<T>>;
    /**
     * Group by Violation_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {violation_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends violation_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: violation_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: violation_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, violation_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolation_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the violation_type model
     */
    readonly fields: violation_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for violation_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__violation_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    violation_category<T extends Prisma.violation_categoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.violation_categoryDefaultArgs<ExtArgs>>): Prisma.Prisma__violation_categoryClient<runtime.Types.Result.GetResult<Prisma.$violation_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    violations<T extends Prisma.violation_type$violationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.violation_type$violationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$violationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the violation_type model
 */
export interface violation_typeFieldRefs {
    readonly id: Prisma.FieldRef<"violation_type", 'Int'>;
    readonly name: Prisma.FieldRef<"violation_type", 'String'>;
    readonly point: Prisma.FieldRef<"violation_type", 'Int'>;
    readonly punishment: Prisma.FieldRef<"violation_type", 'String'>;
    readonly category_id: Prisma.FieldRef<"violation_type", 'Int'>;
}
/**
 * violation_type findUnique
 */
export type violation_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violation_type to fetch.
     */
    where: Prisma.violation_typeWhereUniqueInput;
};
/**
 * violation_type findUniqueOrThrow
 */
export type violation_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violation_type to fetch.
     */
    where: Prisma.violation_typeWhereUniqueInput;
};
/**
 * violation_type findFirst
 */
export type violation_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violation_type to fetch.
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_types to fetch.
     */
    orderBy?: Prisma.violation_typeOrderByWithRelationInput | Prisma.violation_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_types.
     */
    cursor?: Prisma.violation_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violation_types.
     */
    distinct?: Prisma.Violation_typeScalarFieldEnum | Prisma.Violation_typeScalarFieldEnum[];
};
/**
 * violation_type findFirstOrThrow
 */
export type violation_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violation_type to fetch.
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_types to fetch.
     */
    orderBy?: Prisma.violation_typeOrderByWithRelationInput | Prisma.violation_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for violation_types.
     */
    cursor?: Prisma.violation_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of violation_types.
     */
    distinct?: Prisma.Violation_typeScalarFieldEnum | Prisma.Violation_typeScalarFieldEnum[];
};
/**
 * violation_type findMany
 */
export type violation_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which violation_types to fetch.
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of violation_types to fetch.
     */
    orderBy?: Prisma.violation_typeOrderByWithRelationInput | Prisma.violation_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing violation_types.
     */
    cursor?: Prisma.violation_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` violation_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` violation_types.
     */
    skip?: number;
    distinct?: Prisma.Violation_typeScalarFieldEnum | Prisma.Violation_typeScalarFieldEnum[];
};
/**
 * violation_type create
 */
export type violation_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a violation_type.
     */
    data: Prisma.XOR<Prisma.violation_typeCreateInput, Prisma.violation_typeUncheckedCreateInput>;
};
/**
 * violation_type createMany
 */
export type violation_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many violation_types.
     */
    data: Prisma.violation_typeCreateManyInput | Prisma.violation_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * violation_type createManyAndReturn
 */
export type violation_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_type
     */
    select?: Prisma.violation_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_type
     */
    omit?: Prisma.violation_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many violation_types.
     */
    data: Prisma.violation_typeCreateManyInput | Prisma.violation_typeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_typeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * violation_type update
 */
export type violation_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a violation_type.
     */
    data: Prisma.XOR<Prisma.violation_typeUpdateInput, Prisma.violation_typeUncheckedUpdateInput>;
    /**
     * Choose, which violation_type to update.
     */
    where: Prisma.violation_typeWhereUniqueInput;
};
/**
 * violation_type updateMany
 */
export type violation_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update violation_types.
     */
    data: Prisma.XOR<Prisma.violation_typeUpdateManyMutationInput, Prisma.violation_typeUncheckedUpdateManyInput>;
    /**
     * Filter which violation_types to update
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * Limit how many violation_types to update.
     */
    limit?: number;
};
/**
 * violation_type updateManyAndReturn
 */
export type violation_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the violation_type
     */
    select?: Prisma.violation_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the violation_type
     */
    omit?: Prisma.violation_typeOmit<ExtArgs> | null;
    /**
     * The data used to update violation_types.
     */
    data: Prisma.XOR<Prisma.violation_typeUpdateManyMutationInput, Prisma.violation_typeUncheckedUpdateManyInput>;
    /**
     * Filter which violation_types to update
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * Limit how many violation_types to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.violation_typeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * violation_type upsert
 */
export type violation_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the violation_type to update in case it exists.
     */
    where: Prisma.violation_typeWhereUniqueInput;
    /**
     * In case the violation_type found by the `where` argument doesn't exist, create a new violation_type with this data.
     */
    create: Prisma.XOR<Prisma.violation_typeCreateInput, Prisma.violation_typeUncheckedCreateInput>;
    /**
     * In case the violation_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.violation_typeUpdateInput, Prisma.violation_typeUncheckedUpdateInput>;
};
/**
 * violation_type delete
 */
export type violation_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which violation_type to delete.
     */
    where: Prisma.violation_typeWhereUniqueInput;
};
/**
 * violation_type deleteMany
 */
export type violation_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which violation_types to delete
     */
    where?: Prisma.violation_typeWhereInput;
    /**
     * Limit how many violation_types to delete.
     */
    limit?: number;
};
/**
 * violation_type.violations
 */
export type violation_type$violationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * violation_type without action
 */
export type violation_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=violation_type.d.ts.map