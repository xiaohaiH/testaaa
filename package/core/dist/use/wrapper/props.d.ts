import { PropType } from 'vue-demi';
/** 条件容器 props */
export declare const wrapperProps: {
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
