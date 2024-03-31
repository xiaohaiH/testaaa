import type { PropType } from 'vue-demi';
export declare const selectProps: {
    /** 展示的字段 */
    readonly labelKey: {
        readonly type: PropType<string>;
        readonly default: "label";
    };
    /** 提交的字段 */
    readonly valueKey: {
        readonly type: PropType<string>;
        readonly default: "value";
    };
    /** 是否可过滤 */
    readonly filterable: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /** 是否可清除 */
    readonly clearable: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /** 过滤方法 */
    readonly filterMethod: {
        readonly type: PropType<(val: string, option: unknown) => boolean>;
    };
    readonly prop: {
        type: PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: PropType<string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode)>;
    };
    readonly as: {
        type: PropType<string>;
    };
    readonly fields: {
        readonly type: PropType<string[]>;
    };
    readonly backfillToValue: {
        readonly type: PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
    };
    readonly multiple: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    readonly getOptions: {
        readonly type: PropType<import("@xiaohaih/condition-core").GetOptions>;
    };
    readonly field: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    readonly query: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly backfill: {
        readonly type: PropType<Record<string, any>>;
    };
    readonly disabled: {
        readonly type: PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly hide: {
        readonly type: PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly depend: {
        readonly type: PropType<boolean>;
    };
    readonly dependFields: {
        readonly type: PropType<string | string[]>;
    };
    readonly resetToInitialValue: {
        readonly type: PropType<boolean>;
    };
    readonly emptyValue: {
        readonly type: PropType<string | number | null | undefined>;
    };
    readonly validator: {
        readonly type: PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    readonly customGetQuery: {
        readonly type: PropType<import("@xiaohaih/condition-core").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
    };
};
