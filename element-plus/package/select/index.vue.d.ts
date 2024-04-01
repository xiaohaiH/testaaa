import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 下拉框
 */
declare const _default: import("vue").DefineComponent<{
    readonly labelKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "label";
    };
    /**
     * @file 下拉框
     */
    readonly valueKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "value";
    };
    readonly filterable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(val: string, option: unknown) => boolean>;
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
        readonly labelKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "label";
        };
        /**
         * @file 下拉框
         */
        readonly valueKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: true;
        };
        readonly filterMethod: {
            readonly type: import("vue").PropType<(val: string, option: unknown) => boolean>;
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
    selectProps: import("vue").ComputedRef<Partial<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "label";
        };
        /**
         * @file 下拉框
         */
        readonly valueKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "value";
        };
        readonly filterable: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: true;
        };
        readonly clearable: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: true;
        };
        readonly filterMethod: {
            readonly type: import("vue").PropType<(val: string, option: unknown) => boolean>;
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
    getNode: typeof getNode;
    filterValue: import("vue").Ref<string>;
    customFilterMethod: (val: string) => void;
    filterSource: import("vue").ComputedRef<Record<string, any>[]>;
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
    readonly labelKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "label";
    };
    /**
     * @file 下拉框
     */
    readonly valueKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "value";
    };
    readonly filterable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly clearable: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: true;
    };
    readonly filterMethod: {
        readonly type: import("vue").PropType<(val: string, option: unknown) => boolean>;
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
    readonly valueKey: string;
    readonly clearable: boolean;
    readonly filterable: boolean;
    readonly labelKey: string;
}>;
export default _default;
