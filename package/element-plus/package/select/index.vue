<template>
    <ElFormItem
        v-if="!insetHide"
        :class="`condition-item condition-item--select condition-item--${field} condition-item--${!!postfix}`"
        v-bind="formItemProps"
        :prop="formItemProps.prop || field"
    >
        <ElSelect
            v-bind="contentProps"
            :disabled="insetDisabled"
            :model-value="(checked as string[])"
            :filter-method="filterMethod && customFilterMethod"
            class="condition-item__content"
            @update:modelValue="change"
        >
            <template v-for="item of filterSource" :key="item[valueKey]">
                <template v-if="item.group && item.children">
                    <ElOptionGroup :label="item[labelKey]">
                        <template v-for="group of item.children" :key="group[valueKey]">
                            <ElOption :label="group[labelKey]" :value="group[valueKey]"></ElOption>
                        </template>
                    </ElOptionGroup>
                </template>
                <template v-else>
                    <ElOption :label="item[labelKey]" :value="item[valueKey]"></ElOption>
                </template>
            </template>
        </ElSelect>
        <div v-if="postfix" class="condition-item__postfix">
            <template v-if="typeof postfix === 'string'">{{ postfix }}</template>
            <template v-else>
                <component :is="getNode(postfix, checked)"></component>
            </template>
        </div>
    </ElFormItem>
</template>

<script lang="ts">
import { computed, customRef, defineComponent, ref } from 'vue';
import { ElFormItem, ElSelect, ElOptionGroup, ElOption } from 'element-plus';
import { pick } from '../../utils';
import { usePlain, getNode } from '@xiaohaih/condition-core';
import { selectProps as props } from './props';
import { formItemPropKeys } from '../share';

const contentPropKeys = Object.keys(ElSelect.props);

/**
 * @file 下拉框
 */
export default defineComponent({
    inheritAttrs: false,
    name: 'HSelect',
    components: {
        ElFormItem,
        ElSelect,
        ElOptionGroup,
        ElOption,
    },
    props,
    setup(props, ctx) {
        const plain = usePlain(props);
        const formItemProps = computed(() => pick(props, formItemPropKeys));
        const contentProps = computed(() => pick(props, contentPropKeys));

        const filterValue = ref('');
        const customFilterMethod = (val: string) => {
            filterValue.value = val;
        };
        const filterSource = computed(() => {
            const val = filterValue.value;
            return val ? plain.finalOption.value.filter(props.filterMethod!.bind(null, val)) : plain.finalOption.value;
        });

        return {
            ...plain,
            formItemProps,
            contentProps,
            getNode,
            filterValue,
            customFilterMethod,
            filterSource,
        };
    },
});
</script>

<style lang="css" scoped></style>
