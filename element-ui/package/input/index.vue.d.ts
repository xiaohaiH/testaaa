import { VNode } from 'vue-demi';
import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 输入框
 */
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        /**
         * 节流
         * @param {string} value: 输入值
         */
        readonly realtime: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly waitTime: {
            readonly type: import("@vue/composition-api").PropType<number>;
            readonly default: 300;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
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
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    inputProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        /**
         * 节流
         * @param {string} value: 输入值
         */
        readonly realtime: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly waitTime: {
            readonly type: import("@vue/composition-api").PropType<number>;
            readonly default: 300;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
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
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    debounceChange: (value: string) => void;
    enterHandle: (ev: Event | KeyboardEvent) => void;
    getNode: typeof getNode;
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
    /**
     * 节流
     * @param {string} value: 输入值
     */
    readonly realtime: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly waitTime: {
        readonly type: import("@vue/composition-api").PropType<number>;
        readonly default: 300;
    };
    readonly clearable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
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
        type: import("@vue/composition-api").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    /**
     * 节流
     * @param {string} value: 输入值
     */
    readonly realtime: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
        readonly default: true;
    };
    readonly waitTime: {
        readonly type: import("@vue/composition-api").PropType<number>;
        readonly default: 300;
    };
    readonly clearable: {
        readonly type: import("@vue/composition-api").PropType<boolean>;
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
        type: import("@vue/composition-api").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    readonly realtime: boolean;
    readonly field: string;
    readonly query: Record<string, any>;
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly clearable: boolean;
    readonly waitTime: number;
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
    readonly name?: string | number | boolean | undefined;
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | VNode | ((...args: any[]) => VNode) | undefined;
    readonly as?: string | undefined;
    readonly maxlength?: string | number | boolean | undefined;
    readonly minlength?: string | number | boolean | undefined;
    readonly placeholder?: string | number | boolean | undefined;
    readonly rows?: string | number | boolean | undefined;
    readonly max?: string | number | boolean | undefined;
    readonly min?: string | number | boolean | undefined;
    readonly step?: string | number | boolean | undefined;
    readonly autofocus?: string | number | boolean | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        /**
         * 节流
         * @param {string} value: 输入值
         */
        readonly realtime: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly waitTime: {
            readonly type: import("@vue/composition-api").PropType<number>;
            readonly default: 300;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
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
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    inputProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        /**
         * 节流
         * @param {string} value: 输入值
         */
        readonly realtime: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
            readonly default: true;
        };
        readonly waitTime: {
            readonly type: import("@vue/composition-api").PropType<number>;
            readonly default: 300;
        };
        readonly clearable: {
            readonly type: import("@vue/composition-api").PropType<boolean>;
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
            type: import("@vue/composition-api").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("@vue/composition-api").PropType<string | VNode | ((...args: any[]) => VNode)>;
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
    debounceChange: (value: string) => void;
    enterHandle: (ev: Event | KeyboardEvent) => void;
    getNode: typeof getNode;
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
    readonly realtime: boolean;
    readonly field: string;
    readonly query: Record<string, any>;
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly clearable: boolean;
    readonly waitTime: number;
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
    readonly name?: string | number | boolean | undefined;
    readonly prop?: string | (string | number)[] | undefined;
    readonly postfix?: string | VNode | ((...args: any[]) => VNode) | undefined;
    readonly as?: string | undefined;
    readonly maxlength?: string | number | boolean | undefined;
    readonly minlength?: string | number | boolean | undefined;
    readonly placeholder?: string | number | boolean | undefined;
    readonly rows?: string | number | boolean | undefined;
    readonly max?: string | number | boolean | undefined;
    readonly min?: string | number | boolean | undefined;
    readonly step?: string | number | boolean | undefined;
    readonly autofocus?: string | number | boolean | undefined;
}, {
    readonly realtime: boolean;
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly clearable: boolean;
    readonly waitTime: number;
}, true>);
export default _default;
