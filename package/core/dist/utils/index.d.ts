import { VNode } from 'vue-demi';
/**
 * 空值转为提供的默认值
 * @param {*} val 值为空时转为默认值
 * @param {*} defaultVal
 */
export declare function emptyToValue<T extends unknown>(val: any, defaultVal: T): any;
/**
 * 获取指定层级的父级(包括自身)
 * @param {Record<string, any>[]} data 数据源
 * @param {(item) => boolean} cb 当前数据项是否匹配
 */
export declare function getChained<T extends Record<string, any>>(data: T[], cb: (item: T) => boolean, childrenKey?: string): T[];
/**
 * 获取渲染节点
 * @param {string | Object | Function} node 需渲染元素
 */
export declare function getNode(node: string | ((...args: any[]) => VNode) | VNode, ...args: any[]): string | VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>;
