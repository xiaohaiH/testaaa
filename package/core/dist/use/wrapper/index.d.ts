import { ExtractPropTypes } from 'vue-demi';
import { CommonMethod } from '../constant';
import { wrapperProps } from './props';
/** 外部需传递的 props */
export type WrapperProps = ExtractPropTypes<typeof wrapperProps> & {
    /** 触发搜索事件 */
    search?: (params: Record<string, any>) => void;
    /** 触发重置事件 */
    reset?: (params: Record<string, any>) => void;
};
/** 封装 wrapper 组件必备的信息 */
export declare function useWrapper(props: WrapperProps): {
    child: CommonMethod[];
    wrapperInstance: {
        realtime: import("vue-demi").Ref<boolean | undefined>;
        register(compOption: CommonMethod): () => void;
        updateQueryValue(field: string, value: any): void;
        insetSearch(): void;
        search: () => Promise<void>;
        removeUnreferencedField(field: string): void;
    };
    query: import("vue-demi").Ref<Record<string, string>>;
    getQuery: () => {
        [x: string]: any;
    };
    search: () => Promise<void>;
    reset: () => void;
    validate: () => Promise<string>;
};
