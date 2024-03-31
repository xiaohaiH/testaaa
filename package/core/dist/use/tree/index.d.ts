import { ExtractPropTypes } from 'vue-demi';
import { ProvideValue } from '../constant';
import { treeProps } from './props';
/** 选中值类型 */
type ValueType = string | number | null | undefined;
/** 外部需传递的 props */
export type TreeProps = ExtractPropTypes<typeof treeProps>;
/** 封装 tree 组件必备的信息 */
export declare function useTree(props: TreeProps): {
    wrapper: ProvideValue | undefined;
    option: {
        reset(): import("../constant").CommonMethod;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        updateWrapperQuery(): void;
        getQuery: () => Record<string, any>;
    };
    checked: import("vue-demi").Ref<ValueType[]>;
    getQuery: () => Record<string, any>;
    finalOption: import("vue-demi").ComputedRef<Record<string, any>[]>;
    insetDisabled: import("vue-demi").Ref<boolean>;
    insetHide: import("vue-demi").Ref<boolean>;
    change: (values: ValueType[] | ValueType) => void;
    reset: () => import("../constant").CommonMethod;
};
export {};
