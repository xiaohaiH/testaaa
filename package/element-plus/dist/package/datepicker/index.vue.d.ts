import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 日期选择
 */
declare const _default: import("vue").DefineComponent<{
    readonly valueFormat: {
        readonly type: import("vue").PropType<string>;
        readonly default: "YYYY-MM-DD";
    };
    readonly beginField: {
        readonly type: import("vue").PropType<string>;
    };
    readonly endField: {
        readonly type: import("vue").PropType<string>;
    };
    readonly prop: {
        type: import("vue").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | ((...args: any[]) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)>;
    };
    readonly as: {
        type: import("vue").PropType<string>;
    };
    readonly fields: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly backfillToValue: {
        readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
    };
    readonly multiple: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    readonly getOptions: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetOptions>;
    };
    readonly field: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly query: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly backfill: {
        readonly type: import("vue").PropType<Record<string, any>>;
    };
    readonly disabled: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly hide: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly depend: {
        readonly type: import("vue").PropType<boolean>;
    };
    readonly dependFields: {
        readonly type: import("vue").PropType<string | string[]>;
    };
    readonly resetToInitialValue: {
        readonly type: import("vue").PropType<boolean>;
    };
    readonly emptyValue: {
        readonly type: import("vue").PropType<string | number | null | undefined>;
    };
    readonly validator: {
        readonly type: import("vue").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    readonly customGetQuery: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
    };
}, {
    formItemProps: import("vue").ComputedRef<Partial<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly valueFormat: {
            readonly type: import("vue").PropType<string>;
            readonly default: "YYYY-MM-DD";
        };
        readonly beginField: {
            readonly type: import("vue").PropType<string>;
        };
        readonly endField: {
            readonly type: import("vue").PropType<string>;
        };
        readonly prop: {
            type: import("vue").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | ((...args: any[]) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>)>;
        };
        readonly as: {
            type: import("vue").PropType<string>;
        };
        readonly fields: {
            readonly type: import("vue").PropType<string[]>;
        };
        readonly backfillToValue: {
            readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: undefined;
        };
        readonly options: {
            readonly type: import("vue").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("vue").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("vue").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("vue").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("vue").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("vue").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("vue").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("vue").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>> & {}>>>>;
    datepickerProps: import("vue").ComputedRef<Partial<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly valueFormat: {
            readonly type: import("vue").PropType<string>;
            readonly default: "YYYY-MM-DD";
        };
        readonly beginField: {
            readonly type: import("vue").PropType<string>;
        };
        readonly endField: {
            readonly type: import("vue").PropType<string>;
        };
        readonly prop: {
            type: import("vue").PropType<string | (string | number)[]>;
        };
        readonly postfix: {
            type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | ((...args: any[]) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>)>;
        };
        readonly as: {
            type: import("vue").PropType<string>;
        };
        readonly fields: {
            readonly type: import("vue").PropType<string[]>;
        };
        readonly backfillToValue: {
            readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
        };
        readonly multiple: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: undefined;
        };
        readonly options: {
            readonly type: import("vue").PropType<Record<string, any>[]>;
            readonly default: () => never[];
        };
        readonly getOptions: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetOptions>;
        };
        readonly field: {
            readonly type: import("vue").PropType<string>;
            readonly required: true;
        };
        readonly query: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly required: true;
        };
        readonly backfill: {
            readonly type: import("vue").PropType<Record<string, any>>;
        };
        readonly disabled: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly hide: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
        };
        readonly depend: {
            readonly type: import("vue").PropType<boolean>;
        };
        readonly dependFields: {
            readonly type: import("vue").PropType<string | string[]>;
        };
        readonly resetToInitialValue: {
            readonly type: import("vue").PropType<boolean>;
        };
        readonly emptyValue: {
            readonly type: import("vue").PropType<string | number | null | undefined>;
        };
        readonly validator: {
            readonly type: import("vue").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
        };
        readonly customGetQuery: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetQuery>;
        };
        readonly defaultValue: {
            readonly type: import("vue").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
        };
    }>> & {}>>>>;
    isMultiple: import("vue").ComputedRef<boolean>;
    getNode: typeof getNode;
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): void;
        updateWrapperQuery(): void;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        getQuery: () => Record<string, any>;
    };
    checked: import("vue").Ref<string | string[]>;
    getQuery: () => Record<string, any>;
    insetDisabled: import("vue").Ref<boolean>;
    insetHide: import("vue").Ref<boolean>;
    finalOption: import("vue").ComputedRef<Record<string, any>[]>;
    updateCheckedValue: (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    reset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly valueFormat: {
        readonly type: import("vue").PropType<string>;
        readonly default: "YYYY-MM-DD";
    };
    readonly beginField: {
        readonly type: import("vue").PropType<string>;
    };
    readonly endField: {
        readonly type: import("vue").PropType<string>;
    };
    readonly prop: {
        type: import("vue").PropType<string | (string | number)[]>;
    };
    readonly postfix: {
        type: import("vue").PropType<string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | ((...args: any[]) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>)>;
    };
    readonly as: {
        type: import("vue").PropType<string>;
    };
    readonly fields: {
        readonly type: import("vue").PropType<string[]>;
    };
    readonly backfillToValue: {
        readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
    };
    readonly multiple: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: import("vue").PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    readonly getOptions: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetOptions>;
    };
    readonly field: {
        readonly type: import("vue").PropType<string>;
        readonly required: true;
    };
    readonly query: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly required: true;
    };
    readonly backfill: {
        readonly type: import("vue").PropType<Record<string, any>>;
    };
    readonly disabled: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly hide: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").HideOption>;
    };
    readonly depend: {
        readonly type: import("vue").PropType<boolean>;
    };
    readonly dependFields: {
        readonly type: import("vue").PropType<string | string[]>;
    };
    readonly resetToInitialValue: {
        readonly type: import("vue").PropType<boolean>;
    };
    readonly emptyValue: {
        readonly type: import("vue").PropType<string | number | null | undefined>;
    };
    readonly validator: {
        readonly type: import("vue").PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    readonly customGetQuery: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<import("@xiaohaih/condition-core").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("@xiaohaih/condition-core").ValueType)>;
    };
}>>, {
    readonly backfillToValue: (values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[];
    readonly multiple: boolean;
    readonly options: Record<string, any>[];
    readonly valueFormat: string;
}>;
export default _default;
