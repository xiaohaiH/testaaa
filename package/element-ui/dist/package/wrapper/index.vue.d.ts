import { PropType } from 'vue-demi';
import { Form as ElForm } from 'element-ui';
declare const compMap: {
    select: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        selectProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
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
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        selectProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
    input: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly realtime: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        inputProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly realtime: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        debounceChange: (value: string) => void;
        enterHandle: (ev: Event | KeyboardEvent) => void;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
        readonly realtime: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly realtime: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
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
        readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
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
            readonly realtime: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        inputProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly realtime: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
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
        }>>>>;
        debounceChange: (value: string) => void;
        enterHandle: (ev: Event | KeyboardEvent) => void;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
        readonly postfix?: string | import("vue-demi").VNode | ((...args: any[]) => import("vue-demi").VNode) | undefined;
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
    datepicker: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly valueFormat: {
                readonly type: PropType<string>;
                readonly default: "yyyy-MM-dd";
            };
            readonly beginField: {
                readonly type: PropType<string>;
            };
            readonly endField: {
                readonly type: PropType<string>;
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
        }>>>>;
        datepickerProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly valueFormat: {
                readonly type: PropType<string>;
                readonly default: "yyyy-MM-dd";
            };
            readonly beginField: {
                readonly type: PropType<string>;
            };
            readonly endField: {
                readonly type: PropType<string>;
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
        }>>>>;
        isMultiple: import("@vue/composition-api").ComputedRef<boolean>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
        readonly valueFormat: {
            readonly type: PropType<string>;
            readonly default: "yyyy-MM-dd";
        };
        readonly beginField: {
            readonly type: PropType<string>;
        };
        readonly endField: {
            readonly type: PropType<string>;
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly valueFormat: {
            readonly type: PropType<string>;
            readonly default: "yyyy-MM-dd";
        };
        readonly beginField: {
            readonly type: PropType<string>;
        };
        readonly endField: {
            readonly type: PropType<string>;
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
    }>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        readonly field: string;
        readonly query: Record<string, any>;
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueFormat: string;
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
        readonly beginField?: string | undefined;
        readonly endField?: string | undefined;
    }, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly valueFormat: {
                readonly type: PropType<string>;
                readonly default: "yyyy-MM-dd";
            };
            readonly beginField: {
                readonly type: PropType<string>;
            };
            readonly endField: {
                readonly type: PropType<string>;
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
        }>>>>;
        datepickerProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly valueFormat: {
                readonly type: PropType<string>;
                readonly default: "yyyy-MM-dd";
            };
            readonly beginField: {
                readonly type: PropType<string>;
            };
            readonly endField: {
                readonly type: PropType<string>;
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
        }>>>>;
        isMultiple: import("@vue/composition-api").ComputedRef<boolean>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
        readonly valueFormat: string;
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
        readonly beginField?: string | undefined;
        readonly endField?: string | undefined;
    }, {
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueFormat: string;
    }, true>);
    cascader: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
            readonly childrenKey: {
                readonly type: PropType<string>;
            };
            readonly emitPath: {
                readonly type: PropType<boolean>;
                readonly default: false;
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
        }>>>>;
        cascaderProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
            readonly childrenKey: {
                readonly type: PropType<string>;
            };
            readonly emitPath: {
                readonly type: PropType<boolean>;
                readonly default: false;
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
        }>>>>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: PropType<boolean>;
            readonly default: true;
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
        readonly childrenKey: {
            readonly type: PropType<string>;
        };
        readonly emitPath: {
            readonly type: PropType<boolean>;
            readonly default: false;
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: PropType<boolean>;
            readonly default: true;
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
        readonly childrenKey: {
            readonly type: PropType<string>;
        };
        readonly emitPath: {
            readonly type: PropType<boolean>;
            readonly default: false;
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
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
            readonly childrenKey: {
                readonly type: PropType<string>;
            };
            readonly emitPath: {
                readonly type: PropType<boolean>;
                readonly default: false;
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
        }>>>>;
        cascaderProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly filterable: {
                readonly type: PropType<boolean>;
                readonly default: true;
            };
            readonly clearable: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
            readonly childrenKey: {
                readonly type: PropType<string>;
            };
            readonly emitPath: {
                readonly type: PropType<boolean>;
                readonly default: false;
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
        }>>>>;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
    radio: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "radio">;
            };
            readonly cancelable: {
                readonly type: PropType<boolean>;
                readonly default: undefined;
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
        }>>>>;
        radioProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "radio">;
            };
            readonly cancelable: {
                readonly type: PropType<boolean>;
                readonly default: undefined;
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
        }>>>>;
        radioGroupRef: import("@vue/composition-api").Ref<import("element-ui").RadioGroup | undefined>;
        radioType: import("@vue/composition-api").ComputedRef<"ElRadioButton" | "ElRadio">;
        eventName: import("@vue/composition-api").ComputedRef<"click" | null>;
        customChange: (newVal: string, currentVal: string, cb: (value?: string | undefined) => void) => void;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly type: {
            readonly type: PropType<"button" | "radio">;
        };
        readonly cancelable: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly type: {
            readonly type: PropType<"button" | "radio">;
        };
        readonly cancelable: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
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
    }>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        readonly field: string;
        readonly query: Record<string, any>;
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueKey: string;
        readonly labelKey: string;
        readonly cancelable: boolean;
    } & {
        readonly backfill?: Record<string, any> | undefined;
        readonly type?: "button" | "radio" | undefined;
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
    }, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "radio">;
            };
            readonly cancelable: {
                readonly type: PropType<boolean>;
                readonly default: undefined;
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
        }>>>>;
        radioProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "radio">;
            };
            readonly cancelable: {
                readonly type: PropType<boolean>;
                readonly default: undefined;
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
        }>>>>;
        radioGroupRef: import("@vue/composition-api").Ref<import("element-ui").RadioGroup | undefined>;
        radioType: import("@vue/composition-api").ComputedRef<"ElRadioButton" | "ElRadio">;
        eventName: import("@vue/composition-api").ComputedRef<"click" | null>;
        customChange: (newVal: string, currentVal: string, cb: (value?: string | undefined) => void) => void;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
        readonly cancelable: boolean;
    } & {
        readonly backfill?: Record<string, any> | undefined;
        readonly type?: "button" | "radio" | undefined;
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
    }, {
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueKey: string;
        readonly labelKey: string;
        readonly cancelable: boolean;
    }, true>);
    checkbox: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "checkbox">;
            };
            readonly multiple: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
        }>>>>;
        checkboxProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "checkbox">;
            };
            readonly multiple: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
        }>>>>;
        checkboxGroupRef: import("@vue/composition-api").Ref<import("element-ui").CheckboxGroup | undefined>;
        checkboxType: import("@vue/composition-api").ComputedRef<"ElCheckboxButton" | "ElCheckbox">;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly type: {
            readonly type: PropType<"button" | "checkbox">;
        };
        readonly multiple: {
            readonly type: PropType<boolean>;
            readonly default: true;
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
    }, import("@vue/composition-api").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: PropType<string>;
            readonly default: "value";
        };
        readonly type: {
            readonly type: PropType<"button" | "checkbox">;
        };
        readonly multiple: {
            readonly type: PropType<boolean>;
            readonly default: true;
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
    }>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
        readonly field: string;
        readonly query: Record<string, any>;
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueKey: string;
        readonly labelKey: string;
    } & {
        readonly backfill?: Record<string, any> | undefined;
        readonly type?: "button" | "checkbox" | undefined;
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
    }, import("@vue/composition-api").ShallowUnwrapRef<{
        formItemProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "checkbox">;
            };
            readonly multiple: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
        }>>>>;
        checkboxProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
            readonly labelKey: {
                readonly type: PropType<string>;
                readonly default: "label";
            };
            readonly valueKey: {
                readonly type: PropType<string>;
                readonly default: "value";
            };
            readonly type: {
                readonly type: PropType<"button" | "checkbox">;
            };
            readonly multiple: {
                readonly type: PropType<boolean>;
                readonly default: true;
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
        }>>>>;
        checkboxGroupRef: import("@vue/composition-api").Ref<import("element-ui").CheckboxGroup | undefined>;
        checkboxType: import("@vue/composition-api").ComputedRef<"ElCheckboxButton" | "ElCheckbox">;
        getNode: typeof import("@xiaohaih/condition-core").getNode;
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
    } & {
        readonly backfill?: Record<string, any> | undefined;
        readonly type?: "button" | "checkbox" | undefined;
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
    }, {
        readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
        readonly multiple: boolean;
        readonly options: Record<string, any>[];
        readonly valueKey: string;
        readonly labelKey: string;
    }, true>);
};
/** 默认定义组件的类型 */
export type ComponentType = (typeof compMap)[keyof typeof compMap];
/**
 * 注册自定义组件
 * @param {string} name 类型
 * @param {} comp 可渲染的组件
 */
export declare function registerComponent(name: string, comp: any): void;
/**
 * 删除自定义组件
 * @param {string} name 定义的类型
 */
export declare function unregisterComponent(name: string): void;
/**
 * 获取指定组件
 * @param {string} name? 组件类型
 */
export declare function getComponent(): Record<string, ComponentType>;
export declare function getComponent(name: string): ComponentType | undefined;
/**
 * @file 条件容器
 */
declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    rootProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly datum: {
            readonly type: PropType<Record<string, any>>;
            readonly default: () => {};
        };
        readonly resetToInitialValue: {
            readonly type: PropType<boolean>;
        };
        readonly immediateSearch: {
            readonly type: PropType<boolean>;
        };
        readonly renderBtn: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly resetTriggerSearch: {
            readonly type: PropType<boolean>;
        };
        readonly searchText: {
            readonly type: PropType<string>;
            readonly default: "搜索";
        };
        readonly resetText: {
            readonly type: PropType<string>;
            readonly default: "重置";
        };
        readonly realtime: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly searchAtDatumChanged: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly backfill: {
            readonly type: PropType<Record<string, any>>;
        };
        readonly toast: {
            readonly type: PropType<(msg: string) => void>;
            readonly default: undefined;
        };
    }>>>>;
    formRef: import("@vue/composition-api").Ref<ElForm | undefined>;
    getComponent: typeof getComponent;
    resetAndSearch: () => void;
    child: import("@xiaohaih/condition-core").CommonMethod[];
    wrapperInstance: {
        realtime: import("@vue/composition-api").Ref<boolean>;
        register(compOption: import("@xiaohaih/condition-core").CommonMethod): () => void;
        updateQueryValue(field: string, value: any): void;
        insetSearch(): void;
        search: () => Promise<void>;
        removeUnreferencedField(field: string): void;
    };
    query: import("@vue/composition-api").Ref<{
        [x: string]: string;
    }>;
    getQuery: () => {
        [x: string]: any;
    };
    search: () => Promise<void>;
    reset: () => void;
    validate: () => Promise<string>;
}> & import("@vue/composition-api").Data, {}, {}, {
    readonly datum: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly resetToInitialValue: {
        readonly type: PropType<boolean>;
    };
    readonly immediateSearch: {
        readonly type: PropType<boolean>;
    };
    readonly renderBtn: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly resetTriggerSearch: {
        readonly type: PropType<boolean>;
    };
    readonly searchText: {
        readonly type: PropType<string>;
        readonly default: "搜索";
    };
    readonly resetText: {
        readonly type: PropType<string>;
        readonly default: "重置";
    };
    readonly realtime: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly searchAtDatumChanged: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly backfill: {
        readonly type: PropType<Record<string, any>>;
    };
    readonly toast: {
        readonly type: PropType<(msg: string) => void>;
        readonly default: undefined;
    };
}, import("@vue/composition-api").ExtractPropTypes<{
    readonly datum: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    readonly resetToInitialValue: {
        readonly type: PropType<boolean>;
    };
    readonly immediateSearch: {
        readonly type: PropType<boolean>;
    };
    readonly renderBtn: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly resetTriggerSearch: {
        readonly type: PropType<boolean>;
    };
    readonly searchText: {
        readonly type: PropType<string>;
        readonly default: "搜索";
    };
    readonly resetText: {
        readonly type: PropType<string>;
        readonly default: "重置";
    };
    readonly realtime: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly searchAtDatumChanged: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly backfill: {
        readonly type: PropType<Record<string, any>>;
    };
    readonly toast: {
        readonly type: PropType<(msg: string) => void>;
        readonly default: undefined;
    };
}>> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    readonly realtime: boolean;
    readonly searchAtDatumChanged: boolean;
    readonly toast: (msg: string) => void;
    readonly datum: Record<string, any>;
    readonly renderBtn: boolean;
    readonly searchText: string;
    readonly resetText: string;
} & {
    readonly backfill?: Record<string, any> | undefined;
    readonly resetToInitialValue?: boolean | undefined;
    readonly immediateSearch?: boolean | undefined;
    readonly resetTriggerSearch?: boolean | undefined;
} & {
    onReset?: ((query: Record<string, any>) => any) | undefined;
    onSearch?: ((query: Record<string, any>) => any) | undefined;
    onReady?: ((query: Record<string, any>) => any) | undefined;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    rootProps: import("@vue/composition-api").ComputedRef<Partial<Readonly<import("@vue/composition-api").ExtractPropTypes<{
        readonly datum: {
            readonly type: PropType<Record<string, any>>;
            readonly default: () => {};
        };
        readonly resetToInitialValue: {
            readonly type: PropType<boolean>;
        };
        readonly immediateSearch: {
            readonly type: PropType<boolean>;
        };
        readonly renderBtn: {
            readonly type: PropType<boolean>;
            readonly default: true;
        };
        readonly resetTriggerSearch: {
            readonly type: PropType<boolean>;
        };
        readonly searchText: {
            readonly type: PropType<string>;
            readonly default: "搜索";
        };
        readonly resetText: {
            readonly type: PropType<string>;
            readonly default: "重置";
        };
        readonly realtime: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly searchAtDatumChanged: {
            readonly type: PropType<boolean>;
            readonly default: undefined;
        };
        readonly backfill: {
            readonly type: PropType<Record<string, any>>;
        };
        readonly toast: {
            readonly type: PropType<(msg: string) => void>;
            readonly default: undefined;
        };
    }>>>>;
    formRef: import("@vue/composition-api").Ref<ElForm | undefined>;
    getComponent: typeof getComponent;
    resetAndSearch: () => void;
    child: import("@xiaohaih/condition-core").CommonMethod[];
    wrapperInstance: {
        realtime: import("@vue/composition-api").Ref<boolean>;
        register(compOption: import("@xiaohaih/condition-core").CommonMethod): () => void;
        updateQueryValue(field: string, value: any): void;
        insetSearch(): void;
        search: () => Promise<void>;
        removeUnreferencedField(field: string): void;
    };
    query: import("@vue/composition-api").Ref<{
        [x: string]: string;
    }>;
    getQuery: () => {
        [x: string]: any;
    };
    search: () => Promise<void>;
    reset: () => void;
    validate: () => Promise<string>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {
    search: (query: Record<string, any>) => boolean;
    ready: (query: Record<string, any>) => boolean;
    reset: (query: Record<string, any>) => boolean;
}, {
    readonly realtime: boolean;
    readonly searchAtDatumChanged: boolean;
    readonly toast: (msg: string) => void;
    readonly datum: Record<string, any>;
    readonly renderBtn: boolean;
    readonly searchText: string;
    readonly resetText: string;
} & {
    readonly backfill?: Record<string, any> | undefined;
    readonly resetToInitialValue?: boolean | undefined;
    readonly immediateSearch?: boolean | undefined;
    readonly resetTriggerSearch?: boolean | undefined;
} & {
    onReset?: ((query: Record<string, any>) => any) | undefined;
    onSearch?: ((query: Record<string, any>) => any) | undefined;
    onReady?: ((query: Record<string, any>) => any) | undefined;
}, {
    readonly realtime: boolean;
    readonly searchAtDatumChanged: boolean;
    readonly toast: (msg: string) => void;
    readonly datum: Record<string, any>;
    readonly renderBtn: boolean;
    readonly searchText: string;
    readonly resetText: string;
}, true>);
export default _default;
