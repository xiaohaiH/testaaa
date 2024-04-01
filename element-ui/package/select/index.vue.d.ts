import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 下拉框
 */
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
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
        readonly filterMethod: {
            readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
        readonly backfillToValue: {
            readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: undefined;
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
    selectProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
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
        readonly filterMethod: {
            readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
        readonly backfillToValue: {
            readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: undefined;
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
    filterValue: import("@vue/composition-api").Ref<string>;
    customFilterMethod: (val: string) => void;
    filterSource: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): void;
        updateWrapperQuery(): void;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        getQuery: () => Record<string, any>;
    };
    checked: import("@vue/composition-api").Ref<string | string[]>;
    getQuery: () => Record<string, any>;
    insetDisabled: import("@vue/composition-api").Ref<boolean>;
    insetHide: import("@vue/composition-api").Ref<boolean>;
    finalOption: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    updateCheckedValue: (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    reset: () => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    readonly labelKey: {
        readonly type: import("@vue/composition-api").PropType<string>;
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
    readonly filterMethod: {
        readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
    readonly backfillToValue: {
        readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
    };
    readonly multiple: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: undefined;
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
    readonly filterMethod: {
        readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
    readonly backfillToValue: {
        readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
    };
    readonly multiple: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: undefined;
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
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly valueKey: string;
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
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
    readonly as?: string | undefined;
    readonly filterMethod?: ((val: string, option: unknown) => boolean) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
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
        readonly filterMethod: {
            readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
        readonly backfillToValue: {
            readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: undefined;
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
    selectProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("@vue/composition-api").PropType<string>;
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
        readonly filterMethod: {
            readonly type: import("@vue/composition-api").PropType<(val: string, option: unknown) => boolean>;
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
        readonly backfillToValue: {
            readonly type: import("@vue/composition-api").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: undefined;
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
    filterValue: import("@vue/composition-api").Ref<string>;
    customFilterMethod: (val: string) => void;
    filterSource: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): void;
        updateWrapperQuery(): void;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        getQuery: () => Record<string, any>;
    };
    checked: import("@vue/composition-api").Ref<string | string[]>;
    getQuery: () => Record<string, any>;
    insetDisabled: import("@vue/composition-api").Ref<boolean>;
    insetHide: import("@vue/composition-api").Ref<boolean>;
    finalOption: import("@vue/composition-api").ComputedRef<Record<string, any>[]>;
    updateCheckedValue: (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    reset: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    readonly field: string;
    readonly query: Record<string, any>;
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly valueKey: string;
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
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
    readonly as?: string | undefined;
    readonly filterMethod?: ((val: string, option: unknown) => boolean) | undefined;
}, {
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly valueKey: string;
    readonly labelKey: string;
    readonly filterable: boolean;
    readonly clearable: boolean;
}, true>);
export default _default;
