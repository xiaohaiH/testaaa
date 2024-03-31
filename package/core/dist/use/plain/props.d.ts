import { PropType } from 'vue-demi';
import { type GetOptions } from '../share';
/** 扁平条件类 props */
export declare const plainProps: {
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
