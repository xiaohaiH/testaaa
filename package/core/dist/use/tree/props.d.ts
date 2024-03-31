import { PropType } from 'vue-demi';
import { type GetOptions } from '../share';
/** 树形条件类 props */
export declare const treeProps: {
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
        readonly type: PropType<import("../share").HideOption>;
    };
    readonly hide: {
        readonly type: PropType<import("../share").HideOption>;
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
        readonly type: PropType<import("../share").GetQuery>;
    };
    readonly defaultValue: {
        readonly type: PropType<import("../share").ValueType | ((query: Record<string, any>, backfill?: Record<string, any> | undefined) => import("../share").ValueType)>;
    };
};
