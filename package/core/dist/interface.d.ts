import { ExtractPropTypes, Ref, UnwrapRef } from 'vue-demi';
import { wrapperProps, plainProps, treeProps } from './use/index';
export declare namespace CoreCondition {
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
