import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 级联选择
 */
declare const _default: import("vue").DefineComponent<{
    readonly labelKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "label";
    };
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
    readonly childrenKey: {
        readonly type: import("vue").PropType<string>;
    };
    readonly emitPath: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
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
        readonly childrenKey: {
            readonly type: import("vue").PropType<string>;
        };
        readonly emitPath: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: false;
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
    cascaderProps: import("vue").ComputedRef<Partial<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "label";
        };
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
        readonly childrenKey: {
            readonly type: import("vue").PropType<string>;
        };
        readonly emitPath: {
            readonly type: import("vue").PropType<boolean>;
            readonly default: false;
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
    wrapper: import("@xiaohaih/condition-core").ProvideValue | undefined;
    option: {
        reset(): import("@xiaohaih/condition-core").CommonMethod;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        updateWrapperQuery(): void;
        getQuery: () => Record<string, any>;
    };
    checked: import("vue").Ref<(string | number | null | undefined)[]>;
    getQuery: () => Record<string, any>;
    finalOption: import("vue").ComputedRef<Record<string, any>[]>;
    insetDisabled: import("vue").Ref<boolean>;
    insetHide: import("vue").Ref<boolean>;
    change: (values: (string | number | null | undefined) | (string | number | null | undefined)[]) => void;
    reset: () => import("@xiaohaih/condition-core").CommonMethod;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly labelKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "label";
    };
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
    readonly childrenKey: {
        readonly type: import("vue").PropType<string>;
    };
    readonly emitPath: {
        readonly type: import("vue").PropType<boolean>;
        readonly default: false;
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
    readonly options: Record<string, any>[];
    readonly valueKey: string;
    readonly emitPath: boolean;
    readonly clearable: boolean;
    readonly filterable: boolean;
    readonly labelKey: string;
}>;
export default _default;
