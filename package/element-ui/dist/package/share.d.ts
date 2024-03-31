import type { PropType, VNode } from 'vue-demi';
/** 公共属性 */
export declare const commonProps: {
    /** 条件后缀(两个条件间的分隔符) */
    postfix: {
        type: PropType<string | VNode | ((...args: any[]) => VNode)>;
    };
    /** 字段别名(优先级高于条件对象的 key) */
    as: {
        type: PropType<string>;
    };
};
export declare const formItemProps: {
    prop: {
        type: PropType<string | (string | number)[]>;
    };
};
export declare const formItemPropKeys: string[];
