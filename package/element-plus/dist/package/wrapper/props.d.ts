import { PropType } from 'vue';
export declare const formPropKeys: string[];
/** 条件容器属性 */
export declare const wrapperProps: {
    readonly class: {
        readonly type: PropType<string | any[] | Record<string, any>>;
    };
    readonly style: {
        readonly type: PropType<string | any[] | Record<string, any>>;
    };
    /** 数据源 */
    readonly datum: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => {};
    };
    /** 重置时是否置为初始值 */
    readonly resetToInitialValue: {
        readonly type: PropType<boolean>;
    };
    /** 初始是否触发一次事件来返回当前的 query */
    readonly immediateSearch: {
        readonly type: PropType<boolean>;
    };
    /** 是否渲染搜索重置按钮 */
    readonly renderBtn: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /** 重置时触发搜索事件 */
    readonly resetTriggerSearch: {
        readonly type: PropType<boolean>;
    };
    /** 搜索按钮文字 */
    readonly searchText: {
        readonly type: PropType<string>;
        readonly default: "搜索";
    };
    /** 重置按钮文字 */
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
};
export declare const wrapperEmits: {
    /** 搜索事件 - 触发内部 query 对象更新 */
    search: (query: Record<string, any>) => boolean;
    /** query 已初始化 */
    ready: (query: Record<string, any>) => boolean;
    /** 重置事件 */
    reset: (query: Record<string, any>) => boolean;
};
