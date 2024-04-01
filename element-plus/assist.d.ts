import { UnwrapNestedRefs } from 'vue';
import { HCondition } from './interface';
export type DefineCondition<T = HCondition.Condition> = Record<string, T>;
export declare function defineCondition<T extends DefineCondition<HCondition.Condition | false | 0 | undefined>>(config: T): UnwrapNestedRefs<T>;
