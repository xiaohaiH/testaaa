import { getNode } from '@xiaohaih/condition-core';
/**
 * @file 复选框
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
    readonly type: {
        readonly type: import("vue").PropType<"button" | "checkbox">;
    };
    readonly multiple: {
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
    readonly backfillToValue: {
        readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
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
        readonly type: {
            readonly type: import("vue").PropType<"button" | "checkbox">;
        };
        readonly multiple: {
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
        readonly backfillToValue: {
            readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
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
    checkboxProps: import("vue").ComputedRef<Partial<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly labelKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "label";
        };
        readonly valueKey: {
            readonly type: import("vue").PropType<string>;
            readonly default: "value";
        };
        readonly type: {
            readonly type: import("vue").PropType<"button" | "checkbox">;
        };
        readonly multiple: {
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
        readonly backfillToValue: {
            readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
            readonly default: (v: any) => any;
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
    checkboxGroupRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly modelValue: import("element-plus").CheckboxGroupValueType;
            readonly disabled: boolean;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tag: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "validateEvent" | "modelValue" | "tag">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "change", val: import("element-plus").CheckboxValueType[]) => void) & ((event: "update:modelValue", val: import("element-plus").CheckboxGroupValueType) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
                readonly disabled: BooleanConstructor;
                readonly min: NumberConstructor;
                readonly max: NumberConstructor;
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly label: StringConstructor;
                readonly fill: StringConstructor;
                readonly textColor: StringConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            }>> & {
                onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
                "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
            }>>;
            emit: ((event: "update:modelValue", val: import("element-plus").CheckboxGroupValueType) => void) & ((event: "change", val: import("element-plus").CheckboxValueType[]) => void);
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string | undefined) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            formItem: import("element-plus").FormItemContext | undefined;
            groupId: import("vue").Ref<string | undefined>;
            isLabeledByFormItem: import("vue").ComputedRef<boolean>;
            changeEvent: (value: import("element-plus").CheckboxGroupValueType) => Promise<void>;
            modelValue: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (val: import("element-plus").CheckboxGroupValueType) => boolean;
            change: (val: import("element-plus").CheckboxValueType[]) => boolean;
        }, string, {
            readonly modelValue: import("element-plus").CheckboxGroupValueType;
            readonly disabled: boolean;
            readonly validateEvent: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly tag: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
        readonly disabled: BooleanConstructor;
        readonly min: NumberConstructor;
        readonly max: NumberConstructor;
        readonly size: {
            readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly label: StringConstructor;
        readonly fill: StringConstructor;
        readonly textColor: StringConstructor;
        readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
        readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
    }>> & {
        onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
        "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly modelValue: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType) | ((new (...args: any[]) => import("element-plus").CheckboxGroupValueType) | (() => import("element-plus").CheckboxGroupValueType))[], unknown, unknown, () => never[], boolean>;
            readonly disabled: BooleanConstructor;
            readonly min: NumberConstructor;
            readonly max: NumberConstructor;
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly label: StringConstructor;
            readonly fill: StringConstructor;
            readonly textColor: StringConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly validateEvent: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        }>> & {
            onChange?: ((val: import("element-plus").CheckboxValueType[]) => any) | undefined;
            "onUpdate:modelValue"?: ((val: import("element-plus").CheckboxGroupValueType) => any) | undefined;
        }>>;
        emit: ((event: "update:modelValue", val: import("element-plus").CheckboxGroupValueType) => void) & ((event: "change", val: import("element-plus").CheckboxValueType[]) => void);
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string | undefined) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        formItem: import("element-plus").FormItemContext | undefined;
        groupId: import("vue").Ref<string | undefined>;
        isLabeledByFormItem: import("vue").ComputedRef<boolean>;
        changeEvent: (value: import("element-plus").CheckboxGroupValueType) => Promise<void>;
        modelValue: import("vue").WritableComputedRef<import("element-plus").CheckboxGroupValueType>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    checkboxType: import("vue").ComputedRef<"ElCheckboxButton" | "ElCheckbox">;
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
    readonly labelKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "label";
    };
    readonly valueKey: {
        readonly type: import("vue").PropType<string>;
        readonly default: "value";
    };
    readonly type: {
        readonly type: import("vue").PropType<"button" | "checkbox">;
    };
    readonly multiple: {
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
    readonly backfillToValue: {
        readonly type: import("vue").PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any> | undefined) => string | string[]>;
        readonly default: (v: any) => any;
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
    readonly labelKey: string;
}>;
export default _default;
