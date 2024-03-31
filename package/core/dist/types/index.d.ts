import * as vue_demi from 'vue-demi';
import { Ref, PropType, ExtractPropTypes, VNode, UnwrapRef } from 'vue-demi';

/** 判断是否是 2.7.* 版本, 监听生命周期需对该版本做处理 */
declare const IS_COMPOSITION_VERSION: boolean;
/** 容器注入的 key */
declare const provideKey = "condition-wrapper";
/** 容器注入值的类型 */
interface ProvideValue {
    /**
     * 是否实时触发
     */
    realtime: Ref<boolean | undefined>;
    /**
     * 子组件需主动注册组件, 否则不会生效
     * @param {CommonMethod} config 提供父组件校验, 重置等方法
     *
     * @returns {() => void} 取消注册 - 默认会自动取消, 如果是异步任务内注册, 需自己手动取消
     */
    register(config: CommonMethod): () => void;
    /**
     * 子组件通知父级更新 query 中的值 - 静默修改, 不触发搜索事件
     * @param {string} field 更新的字段
     * @param {*} value 更新的值
     */
    updateQueryValue(field: string, value: any): void;
    /**
     * 子组件内部值发生了变动, 由父级决定是否触发搜索事件(实时搜索时需要区分这两种方式)
     */
    insetSearch(): void;
    /**
     * 提供给组件内部的直接触发到外部的搜索事件
     */
    search(): Promise<string | void>;
    /** 删除内部无引用的字段 */
    removeUnreferencedField(field: string): void;
}
declare function defineProvideValue<T extends ProvideValue>(option: T): T;
/** 子组件需暴露出来的公共属性 */
interface CommonMethod {
    /** 重置 */
    reset(): void;
    /** 更新父级中 query 的值 */
    updateWrapperQuery(): void;
    /** 校验方法 */
    validator?(query: Record<string, string>): Promise<any> | any;
    /** 获取该组件拼接的参数 */
    getQuery(): Record<string, any>;
}
declare function defineCommonMethod<T extends CommonMethod>(option: T): T;

/** 条件容器 props */
declare const wrapperProps: {
    /** 是否在数据发生变动后实时触发搜索事件 */
    readonly realtime: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /** 是否在数据源发生改变后触发一次搜索事件 */
    readonly searchAtDatumChanged: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /** 回填信息 */
    readonly backfill: {
        readonly type: PropType<Record<string, any>>;
    };
    /** 校验失败时产生的提示 */
    readonly toast: {
        readonly type: PropType<(msg: string) => void>;
        readonly default: undefined;
    };
};

/** 外部需传递的 props */
type WrapperProps = ExtractPropTypes<typeof wrapperProps> & {
    /** 触发搜索事件 */
    search?: (params: Record<string, any>) => void;
    /** 触发重置事件 */
    reset?: (params: Record<string, any>) => void;
};
/** 封装 wrapper 组件必备的信息 */
declare function useWrapper(props: WrapperProps): {
    child: CommonMethod[];
    wrapperInstance: {
        realtime: vue_demi.Ref<boolean | undefined>;
        register(compOption: CommonMethod): () => void;
        updateQueryValue(field: string, value: any): void;
        insetSearch(): void;
        search: () => Promise<void>;
        removeUnreferencedField(field: string): void;
    };
    query: vue_demi.Ref<Record<string, string>>;
    getQuery: () => {
        [x: string]: any;
    };
    search: () => Promise<void>;
    reset: () => void;
    validate: () => Promise<string>;
};

/**
 * 空值转为提供的默认值
 * @param {*} val 值为空时转为默认值
 * @param {*} defaultVal
 */
declare function emptyToValue<T extends unknown>(val: any, defaultVal: T): any;
/**
 * 获取指定层级的父级(包括自身)
 * @param {Record<string, any>[]} data 数据源
 * @param {(item) => boolean} cb 当前数据项是否匹配
 */
declare function getChained<T extends Record<string, any>>(data: T[], cb: (item: T) => boolean, childrenKey?: string): T[];
/**
 * 获取渲染节点
 * @param {string | Object | Function} node 需渲染元素
 */
declare function getNode(node: string | ((...args: any[]) => VNode) | VNode, ...args: any[]): string | VNode<vue_demi.RendererNode, vue_demi.RendererElement, {
    [key: string]: any;
}>;

/** 隐藏元素 */
type HideOption = boolean | ((query: {
    /** 实时 query */
    query: Record<string, any>;
    /** 回填值 query */
    backfill?: Record<string, any>;
    /** 当前组件暴露给父级的选项 */
    option: CommonMethod;
}) => any);
/** 获取远程数据源 */
interface GetOptions {
    (
    /** 数据执行后的回调 */
    cb: (data: Record<string, any>[]) => void, 
    /** 当前 query 对象 */
    query: Record<string, any>, 
    /** 额外的配置项 */
    option: TriggerOption): any;
}
/** 条件值可能的类型 */
type ValueType$1 = string | string[];
/** 改变当前条件值触发方式 */
interface TriggerOption {
    /**
     * 触发来源
     * @enum {('initial'|'depend')} initial(初始化), depend(依赖项改变)
     */
    trigger: string;
    /**
     * 仅改变内部的值, 不触发搜索事件
     * @param {*} value 需改变的值
     * @param {boolean} [updateInitialValue] 是否将该值作为初始值(重置时使用)
     */
    change(value: any, updateInitialValue?: boolean): void;
    /**
     * 触发搜索事件
     * @param {*} value 需改变的值
     * @param {boolean} [updateInitialValue] 是否将该值作为初始值(重置时使用)
     */
    search(value: any, updateInitialValue?: boolean): void;
}
/** 自定义返回字段 */
type GetQuery = (value: any | any[], emptyToValue: typeof emptyToValue, props: Record<string, any>) => Record<string, any>;
/** 公共 props */
declare const commonProps: {
    /** 提交的字段 */
    readonly field: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    /** 当前条件对象 - 实时变化 */
    readonly query: {
        readonly type: PropType<Record<string, any>>;
        readonly required: true;
    };
    /** 回填值的对象 - 非实时变化 */
    readonly backfill: {
        readonly type: PropType<Record<string, any>>;
    };
    /** 禁用状态 */
    readonly disabled: {
        readonly type: PropType<HideOption>;
    };
    /** 是否隐藏 -> 如果是函数, 需传递依赖项, 可根据依赖项动态隐藏 */
    readonly hide: {
        readonly type: PropType<HideOption>;
    };
    /** 是否依赖其它字段 */
    readonly depend: {
        readonly type: PropType<boolean>;
    };
    /** 依赖字段 */
    readonly dependFields: {
        readonly type: PropType<string | string[]>;
    };
    /** 重置时是否置为初始值 */
    readonly resetToInitialValue: {
        readonly type: PropType<boolean>;
    };
    /** 空置时提交的值 - 默认置为 undefined */
    readonly emptyValue: {
        readonly type: PropType<string | number | null | undefined>;
    };
    /** 校验函数, 返回字符串不通过, 会触发提示 - 提交时触发 */
    readonly validator: {
        readonly type: PropType<((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>)>;
    };
    /** 自定义返回字段 */
    readonly customGetQuery: {
        readonly type: PropType<GetQuery>;
    };
    /** 设置默认值 */
    readonly defaultValue: {
        readonly type: PropType<ValueType$1 | ((query: Record<string, any>, backfill?: Record<string, any>) => ValueType$1)>;
    };
};

/** 扁平条件类 props */
declare const plainProps: {
    /** 字段集(多选时, 每个下标对应的字段可能不一样) */
    readonly fields: {
        readonly type: PropType<string[]>;
    };
    /** 多字段时转换成选中值 */
    readonly backfillToValue: {
        readonly type: PropType<(values: string | string[], fields: string | string[], backfill?: Record<string, any>) => string | string[]>;
        readonly default: (v: any) => any;
    };
    /** 是否多选 */
    readonly multiple: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /** 数据源 */
    readonly options: {
        readonly type: PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    /** 动态获取数据源 */
    readonly getOptions: {
        readonly type: PropType<GetOptions>;
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
        readonly type: PropType<HideOption>;
    };
    readonly hide: {
        readonly type: PropType<HideOption>;
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
        readonly type: PropType<GetQuery>;
    };
    readonly defaultValue: {
        readonly type: PropType<ValueType$1 | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => ValueType$1)>;
    };
};

/** 外部需传递的 props */
type PlainProps = ExtractPropTypes<typeof plainProps>;
/** 封装扁平组件必备的信息 */
declare function usePlain(props: PlainProps): {
    wrapper: ProvideValue | undefined;
    option: {
        reset(): void;
        updateWrapperQuery(): void;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        getQuery: () => Record<string, any>;
    };
    checked: vue_demi.Ref<string | string[]>;
    getQuery: () => Record<string, any>;
    insetDisabled: vue_demi.Ref<boolean>;
    insetHide: vue_demi.Ref<boolean>;
    finalOption: vue_demi.ComputedRef<Record<string, any>[]>;
    updateCheckedValue: (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    reset: () => void;
};

/** 树形条件类 props */
declare const treeProps: {
    /** 不同层级返回不同的字段(可能存在的字段, 不传初始不会回填数据) */
    readonly fields: {
        readonly type: PropType<string[]>;
    };
    /** 提交给后端的字段 */
    readonly valueKey: {
        readonly type: PropType<string>;
        readonly required: true;
    };
    /** 子级键名 - 默认 children */
    readonly childrenKey: {
        readonly type: PropType<string>;
    };
    /** 是否返回选中项中所有的值(数组形式), 否只返回最后一项(基础类型) */
    readonly emitPath: {
        readonly type: PropType<boolean>;
        readonly default: false;
    };
    /** 下拉选项的数据源 */
    readonly options: {
        readonly type: PropType<Record<string, any>[]>;
        readonly default: () => never[];
    };
    /** 获取数据源 */
    readonly getOptions: {
        readonly type: PropType<GetOptions>;
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
        readonly type: PropType<HideOption>;
    };
    readonly hide: {
        readonly type: PropType<HideOption>;
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
        readonly type: PropType<GetQuery>;
    };
    readonly defaultValue: {
        readonly type: PropType<ValueType$1 | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => ValueType$1)>;
    };
};

/** 选中值类型 */
type ValueType = string | number | null | undefined;
/** 外部需传递的 props */
type TreeProps = ExtractPropTypes<typeof treeProps>;
/** 封装 tree 组件必备的信息 */
declare function useTree(props: TreeProps): {
    wrapper: ProvideValue | undefined;
    option: {
        reset(): CommonMethod;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        updateWrapperQuery(): void;
        getQuery: () => Record<string, any>;
    };
    checked: vue_demi.Ref<ValueType[]>;
    getQuery: () => Record<string, any>;
    finalOption: vue_demi.ComputedRef<Record<string, any>[]>;
    insetDisabled: vue_demi.Ref<boolean>;
    insetHide: vue_demi.Ref<boolean>;
    change: (values: ValueType[] | ValueType) => void;
    reset: () => CommonMethod;
};

declare namespace CoreCondition {
    type BuiltInField = 'field' | 'query';
    /** 将值改为原始值或引用值 */
    type MaybeRef<T> = T | Ref<T>;
    /** 将整个集合改为原始值或引用值 */
    type DeepMaybeRef<T> = T extends Ref<infer V> ? MaybeRef<V> : T extends (...args: any) => any ? MaybeRef<T> : T extends Array<any> | Record<string, any> ? {
        [K in keyof T]: DeepMaybeRef<T[K]>;
    } : MaybeRef<T>;
    /** 获取实际值(去除 ref 引用) */
    type ToRaw<T> = UnwrapRef<T>;
    interface WrapperProps extends Omit<ExtractPropTypes<OmitDefaultKey<typeof wrapperProps>>, BuiltInField> {
    }
    interface PlainProps extends Omit<ExtractPropTypes<OmitDefaultKey<typeof plainProps>>, BuiltInField> {
    }
    interface TreeProps extends Omit<ExtractPropTypes<OmitDefaultKey<typeof treeProps>>, BuiltInField> {
    }
    type OmitDefaultKey<T> = T extends Record<string | symbol, any> ? {
        [K in keyof T]: T[K] extends {
            default: any;
        } ? Omit<T[K], 'default'> : T[K];
    } : T;
}

export { CommonMethod, CoreCondition, GetOptions, GetQuery, HideOption, IS_COMPOSITION_VERSION, PlainProps, ProvideValue, TreeProps, TriggerOption, ValueType$1 as ValueType, WrapperProps, commonProps, defineCommonMethod, defineProvideValue, emptyToValue, getChained, getNode, plainProps, provideKey, treeProps, usePlain, useTree, useWrapper, wrapperProps };
