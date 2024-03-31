import { ExtractPropTypes } from 'vue-demi';
import { CommonMethod } from './constant';
import { commonProps } from './share';
/** 获取条件的初始值 */
export declare function useInitialValue<T extends ExtractPropTypes<Readonly<typeof commonProps>>>(props: T): import("vue-demi").WritableComputedRef<any>;
/**
 * 获取当前组件的显示和隐藏状态
 */
export declare function useDisplay<T extends ExtractPropTypes<Readonly<typeof commonProps>>>(props: T, option: CommonMethod): {
    insetDisabled: import("vue-demi").Ref<boolean>;
    insetHide: import("vue-demi").Ref<boolean>;
};
/**
 * 转换当前事件循环内更新标识
 * @param {boolean} initialValue 初始状态
 */
export declare function useDisableInCurrentCycle(initialValue?: boolean): {
    flag: import("vue-demi").Ref<boolean>;
    updateFlag: () => void;
};
