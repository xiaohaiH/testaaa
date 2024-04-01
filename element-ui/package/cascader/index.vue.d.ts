import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 级联选择
 */
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            /**
             * @file 级联选择
             */
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly prop: {
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
        };
        readonly as: {
            type: import("@vue/composition-api").PropType<string>;
        };
        readonly fields: {
            readonly type: import("@vue/composition-api").PropType<string[]>;
        };
        readonly childrenKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
        };
        /**
         * @file 级联选择
         */
        readonly emitPath: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: false;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("@vue/composition-api").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>>>>;
    cascaderProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            /**
             * @file 级联选择
             */
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly prop: {
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
        };
        readonly as: {
            type: import("@vue/composition-api").PropType<string>;
        };
        readonly fields: {
            readonly type: import("@vue/composition-api").PropType<string[]>;
        };
        readonly childrenKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
        };
        /**
         * @file 级联选择
         */
        readonly emitPath: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: false;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("@vue/composition-api").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>>>>;
    getNode: typeof getNode;
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): import("@xiaohaih/condition-core").CommonMethod;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        updateWrapperQuery(): void;
        getQuery: () => Record<string, any>;
    };
    checked: import("@vue/composition-api").Ref<(string | number | null | undefined)[]>;
    getQuery: () => Record<string, any>;
    finalOption: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    insetDisabled: import("@vue/composition-api").Ref<boolean>;
    insetHide: import("@vue/composition-api").Ref<boolean>;
    change: (values: (string | number | null | undefined) | (string | number | null | undefined)[]) => void;
    reset: () => import("@xiaohaih/condition-core").CommonMethod;
}> & import("@vue/composition-api").Data, {}, {}, {
    readonly labelKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
        /**
         * @file 级联选择
         */
        readonly default: "label";
    };
    readonly valueKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
        readonly default: "value";
    };
    readonly filterable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly prop: {
        type: import("@vue/composition-api").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
    };
    readonly as: {
        type: import("@vue/composition-api").PropType<string>;
    };
    readonly fields: {
        readonly type: import("@vue/composition-api").PropType<string[]>;
    };
    readonly childrenKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
    };
    /**
     * @file 级联选择
     */
    readonly emitPath: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: false;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    readonly getOptions: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
    };
    readonly field: {
        readonly type: import("@vue/composition-api").PropType<string>;
        readonly required: true;
    };
    readonly query: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly backfill: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
    };
    readonly disabled: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly hide: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly depend: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
    };
    readonly dependFields: {
        readonly type: import("@vue/composition-api").PropType<string | string[]>;
    };
    readonly resetToInitialValue: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
    };
    readonly emptyValue: {
        readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
    };
    readonly validator: {
        readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    readonly customGetQuery: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    readonly labelKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
        /**
         * @file 级联选择
         */
        readonly default: "label";
    };
    readonly valueKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
        readonly default: "value";
    };
    readonly filterable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly prop: {
        type: import("@vue/composition-api").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
    };
    readonly as: {
        type: import("@vue/composition-api").PropType<string>;
    };
    readonly fields: {
        readonly type: import("@vue/composition-api").PropType<string[]>;
    };
    readonly childrenKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
    };
    /**
     * @file 级联选择
     */
    readonly emitPath: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: false;
    };
    readonly options: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    readonly getOptions: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
    };
    readonly field: {
        readonly type: import("@vue/composition-api").PropType<string>;
        readonly required: true;
    };
    readonly query: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly backfill: {
        readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
    };
    readonly disabled: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly hide: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly depend: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
    };
    readonly dependFields: {
        readonly type: import("@vue/composition-api").PropType<string | string[]>;
    };
    readonly resetToInitialValue: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
    };
    readonly emptyValue: {
        readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
    };
    readonly validator: {
        readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    readonly customGetQuery: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    readonly field: string;
    readonly query: Record<string, any>;
    readonly options: Record<string, any>[];
    readonly valueKey: string;
    readonly emitPath: boolean;
    readonly labelKey: string;
    readonly filterable: boolean;
    readonly clearable: boolean;
} & {
    readonly backfill?: Record<string, any> | undefined;
    readonly disabled?: import("@xiaohaih/condition-core").HideOption | undefined;
    readonly hide?: import("@xiaohaih/condition-core").HideOption | undefined;
    readonly depend?: boolean | undefined;
    readonly dependFields?: string | string[] | undefined;
    readonly resetToInitialValue?: boolean | undefined;
    readonly emptyValue?: string | number | null | undefined;
    readonly validator?: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
    readonly customGetQuery?: import("@xiaohaih/condition-core").GetQuery | undefined;
    readonly defaultValue?: import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType) | undefined;
    readonly fields?: string[] | undefined;
    readonly getOptions?: import("@xiaohaih/condition-core").GetOptions | undefined;
    readonly childrenKey?: string | undefined;
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
    readonly as?: string | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            /**
             * @file 级联选择
             */
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly prop: {
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
        };
        readonly as: {
            type: import("@vue/composition-api").PropType<string>;
        };
        readonly fields: {
            readonly type: import("@vue/composition-api").PropType<string[]>;
        };
        readonly childrenKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
        };
        /**
         * @file 级联选择
         */
        readonly emitPath: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: false;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("@vue/composition-api").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>>>>;
    cascaderProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            /**
             * @file 级联选择
             */
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly prop: {
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
        };
        readonly as: {
            type: import("@vue/composition-api").PropType<string>;
        };
        readonly fields: {
            readonly type: import("@vue/composition-api").PropType<string[]>;
        };
        readonly childrenKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
        };
        /**
         * @file 级联选择
         */
        readonly emitPath: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: false;
        };
        readonly options: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("@vue/composition-api").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("@vue/composition-api").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("@vue/composition-api").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("@vue/composition-api").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("@vue/composition-api").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("@vue/composition-api").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>>>>;
    getNode: typeof getNode;
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): import("@xiaohaih/condition-core").CommonMethod;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        updateWrapperQuery(): void;
        getQuery: () => Record<string, any>;
    };
    checked: import("@vue/composition-api").Ref<(string | number | null | undefined)[]>;
    getQuery: () => Record<string, any>;
    finalOption: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    insetDisabled: import("@vue/composition-api").Ref<boolean>;
    insetHide: import("@vue/composition-api").Ref<boolean>;
    change: (values: (string | number | null | undefined) | (string | number | null | undefined)[]) => void;
    reset: () => import("@xiaohaih/condition-core").CommonMethod;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    readonly field: string;
    readonly query: Record<string, any>;
    readonly options: Record<string, any>[];
    readonly valueKey: string;
    readonly emitPath: boolean;
    readonly labelKey: string;
    readonly filterable: boolean;
    readonly clearable: boolean;
} & {
    readonly backfill?: Record<string, any> | undefined;
    readonly disabled?: import("@xiaohaih/condition-core").HideOption | undefined;
    readonly hide?: import("@xiaohaih/condition-core").HideOption | undefined;
    readonly depend?: boolean | undefined;
    readonly dependFields?: string | string[] | undefined;
    readonly resetToInitialValue?: boolean | undefined;
    readonly emptyValue?: string | number | null | undefined;
    readonly validator?: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
    readonly customGetQuery?: import("@xiaohaih/condition-core").GetQuery | undefined;
    readonly defaultValue?: import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType) | undefined;
    readonly fields?: string[] | undefined;
    readonly getOptions?: import("@xiaohaih/condition-core").GetOptions | undefined;
    readonly childrenKey?: string | undefined;
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
    readonly as?: string | undefined;
}, {
    readonly options: Record<string, any>[];
    readonly valueKey: string;
    readonly emitPath: boolean;
    readonly labelKey: string;
    readonly filterable: boolean;
    readonly clearable: boolean;
}, true>);
export default _default;
