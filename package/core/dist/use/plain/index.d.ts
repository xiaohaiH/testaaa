import { ExtractPropTypes } from 'vue-demi';
import { ProvideValue } from '../constant';
import { plainProps } from './props';
/** 外部需传递的 props */
export type PlainProps = ExtractPropTypes<typeof plainProps>;
/** 封装扁平组件必备的信息 */
export declare function usePlain(props: PlainProps): {
    wrapper: ProvideValue | undefined;
    option: {
        reset(): void;
        updateWrapperQuery(): void;
        readonly validator: ((query: Record<string, any>) => any) | ((query: Record<string, any>) => Promise<any>) | undefined;
        getQuery: () => Record<string, any>;
    };
    checked: import("vue-demi").Ref<string | string[]>;
    getQuery: () => Record<string, any>;
    insetDisabled: import("vue-demi").Ref<boolean>;
    insetHide: import("vue-demi").Ref<boolean>;
    finalOption: import("vue-demi").ComputedRef<Record<string, any>[]>;
    updateCheckedValue: (value: string | string[]) => void;
    change: (value: string | string[]) => void;
    reset: () => void;
};
