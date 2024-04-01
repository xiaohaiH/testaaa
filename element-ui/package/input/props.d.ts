import type { PropType } from 'vue-demi';
/** el-input 未列出的字段 */
export declare const elInputInsetField: {
    maxlength: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    minlength: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    placeholder: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    rows: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    name: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    max: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    min: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    step: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    autofocus: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
};
export declare const inputProps: {
    /** 是否实时触发搜索事件(当 wrapper.realtime 为 true 时, 可将该值设为 false 并设置抖动时间) */
    readonly realtime: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /** 实时触发时防抖动的时间 */
    readonly waitTime: {
        readonly type: PropType<number>;
        readonly default: 300;
    };
    readonly clearable: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly maxlength: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly minlength: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly placeholder: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly rows: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly name: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly max: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly min: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly step: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
    };
    readonly autofocus: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
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
