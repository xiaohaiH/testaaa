import { type PropType } from 'vue-demi';
import { type CommonMethod } from './constant';
import { type emptyToValue as EmptyToValue } from '../utils/index';
/** 隐藏元素 */
export type HideOption = boolean | ((query: {
    /** 实时 query */
    query: Record<string, any>;
    /** 回填值 query */
    backfill?: Record<string, any>;
    /** 当前组件暴露给父级的选项 */
    option: CommonMethod;
}) => any);
/** 获取远程数据源 */
export interface GetOptions {
    (
    /** 数据执行后的回调 */
    cb: (data: Record<string, any>[]) => void, 
    /** 当前 query 对象 */
    query: Record<string, any>, 
    /** 额外的配置项 */
    option: TriggerOption): any;
}
/** 条件值可能的类型 */
export type ValueType = string | string[];
/** 改变当前条件值触发方式 */
export interface TriggerOption {
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
export type GetQuery = (value: any | any[], emptyToValue: typeof EmptyToValue, props: Record<string, any>) => Record<string, any>;
/** 公共 props */
export declare const commonProps: {
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
        readonly type: PropType<ValueType | ((query: Record<string, any>, backfill?: Record<string, any>) => ValueType)>;
    };
};
