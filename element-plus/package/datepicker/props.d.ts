import { PropType } from 'vue';
export declare const datepickerProps: {
    /** 日期格式化的类型 */
    readonly valueFormat: {
        readonly type: PropType<string>;
        readonly default: "YYYY-MM-DD";
    };
    /** 作为字符串时提交的的字段 - 起始字段 */
    readonly beginField: {
        readonly type: PropType<string>;
    };
    /** 作为字符串时提交的的字段 - 结束字段 */
    readonly endField: {
        readonly type: PropType<string>;
    };
    readonly prop: {
        type: PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | ((...args: any[]) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)>;
    };
    readonly as: {
        type: PropType<string>;
    };
    readonly fields: {
        readonly type: PropType<string[]>;
    };
    readonly backfillToValue: {
        readonly type: PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>; /** 作为字符串时提交的的字段 - 起始字段 */
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
