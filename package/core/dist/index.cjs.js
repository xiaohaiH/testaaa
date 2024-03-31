'use strict';

var vueDemi = require('vue-demi');

/** 判断是否是 2.7.* 版本, 监听生命周期需对该版本做处理 */
const IS_COMPOSITION_VERSION = vueDemi.version.slice(0, 3) === '2.7';
/** 容器注入的 key */
const provideKey = 'condition-wrapper';
function defineProvideValue(option) {
  return option;
}
function defineCommonMethod(option) {
  return option;
}

/** 封装 wrapper 组件必备的信息 */
function useWrapper(props) {
  const child = [];
  vueDemi.onBeforeUnmount(() => child.splice(0));
  /**
   * #fix 修复初始 backfill 存在值时
   * query 未保持一致的问题
   * 解决方案:
   * query 本身逻辑和作用不变
   * 新增一个对象用来缓存更改的值
   * 并在获取 query 时, 将该对象作为
   * 最后一个合并项
   */
  const changedQueryObj = {};
  /** 是否标记更新的字段, 防止卸载后的空字段占位 */
  let isLogField = false;
  let logFields = [];
  /** 提供给子条件组件的方法 */
  const wrapperInstance = defineProvideValue({
    realtime: vueDemi.ref(props.realtime),
    register(compOption) {
      child.push(compOption);
      const unregister = () => {
        isLogField = true;
        compOption.reset();
        compOption.updateWrapperQuery();
        const idx = child.indexOf(compOption);
        idx !== -1 && child.splice(idx, 1);
        props.searchAtDatumChanged && search();
        // TODO 不确定的一点, 数据源更改后是否需要重置整个数据
        // 如果需要重置, 得更新后第一次搜索事件时传递的搜索值
        isLogField = false;
        logFields.forEach(k => {
          vueDemi.del(query.value, k);
          delete changedQueryObj[k];
        });
        logFields = [];
      };
      const childInstance = vueDemi.getCurrentInstance();
      // vue2.7 实例挂载在 proxy 上, 内部逻辑取的 proxy 上的值
      // 虽然 @vue/composition-api 实例挂载在 proxy 上
      // 但是内部逻辑取的是整个 getCurrentInstance
      // @ts-expect-error vue2.7中取proxy属性
      childInstance && vueDemi.onBeforeUnmount(unregister, IS_COMPOSITION_VERSION ? childInstance.proxy : childInstance);
      return unregister;
    },
    updateQueryValue(field, value) {
      if (isLogField) logFields.push(field);
      vueDemi.set(query.value, field, value);
      changedQueryObj[field] = value;
    },
    insetSearch() {
      props.realtime && search();
    },
    search,
    removeUnreferencedField(field) {
      let sameFieldCount = 0;
      child.some(v => {
        v.getQuery().hasOwnProperty(field) && (sameFieldCount += 1);
        return sameFieldCount;
      });
      if (!sameFieldCount) {
        vueDemi.del(query.value, field);
        delete changedQueryObj[field];
      }
    }
  });
  vueDemi.provide(provideKey, wrapperInstance);
  /** 内部条件最新的值, 在没触发搜索按钮前, 不会同步到外部 */
  const query = vueDemi.ref({
    ...props.backfill
  });
  const getQuery = () => ({
    ...query.value,
    ...props.backfill,
    ...changedQueryObj
  });
  async function search() {
    const msg = await validate();
    msg ? props.toast?.(msg) : props.search?.(getQuery());
  }
  /** 重置所有条件的值 */
  function reset() {
    child.forEach(v => {
      v.reset();
      v.updateWrapperQuery();
    });
    props.reset?.(getQuery());
  }
  /** 自定义校验条件的值 */
  async function validate() {
    const r = await Promise.all(child.map(v => v.validator?.(query.value)));
    return r.find(v => v && typeof v === 'string');
  }
  return {
    child,
    wrapperInstance,
    query,
    getQuery,
    search,
    reset,
    validate
  };
}

/** 条件容器 props */
const wrapperProps = {
  /** 是否在数据发生变动后实时触发搜索事件 */
  realtime: {
    type: Boolean,
    default: undefined
  },
  /** 是否在数据源发生改变后触发一次搜索事件 */
  searchAtDatumChanged: {
    type: Boolean,
    default: undefined
  },
  /** 回填信息 */
  backfill: {
    type: Object
  },
  /** 校验失败时产生的提示 */
  toast: {
    type: Function,
    default: undefined
  }
};

/**
 * 空值转为提供的默认值
 * @param {*} val 值为空时转为默认值
 * @param {*} defaultVal
 */
function emptyToValue(val, defaultVal) {
  if (Array.isArray(val)) return val.filter(Boolean).length ? val : defaultVal;
  return typeof val === 'number' ? val : val || defaultVal;
}
/**
 * 获取指定层级的父级(包括自身)
 * @param {Record<string, any>[]} data 数据源
 * @param {(item) => boolean} cb 当前数据项是否匹配
 */
function getChained(data, cb, childrenKey = 'children') {
  for (const item of data) {
    if (cb(item)) {
      return [item];
    } else if (item[childrenKey]?.length) {
      const r = getChained(item[childrenKey], cb);
      if (r.length) {
        r.unshift(item);
        return r;
      }
    }
  }
  return [];
}
/**
 * 获取渲染节点
 * @param {string | Object | Function} node 需渲染元素
 */
function getNode(node, ...args) {
  return typeof node === 'function' ? node(...args) : typeof node === 'string' ? node : vueDemi.markRaw(node);
}

/** 获取条件的初始值 */
function useInitialValue(props) {
  const setValue = vueDemi.ref();
  const a = vueDemi.computed({
    set(value) {
      setValue.value = value;
    },
    get() {
      return setValue.value === undefined ? props.defaultValue !== undefined ? typeof props.defaultValue === 'function' ? props.defaultValue(props.query, props.backfill) : props.defaultValue : undefined : setValue.value;
    }
  });
  return a;
}
/**
 * 获取当前组件的显示和隐藏状态
 */
function useDisplay(props, option) {
  const insetDisabled = vueDemi.ref(typeof props.disabled === 'boolean' ? props.disabled : false);
  const insetHide = vueDemi.ref(typeof props.hide === 'boolean' ? props.hide : false);
  const getOption = () => ({
    query: props.query,
    backfill: props.backfill,
    option
  });
  const cb = () => {
    if (typeof props.hide === 'function') {
      const currentValue = insetHide.value;
      const newValue = props.hide(getOption());
      if (currentValue !== newValue) {
        insetHide.value = props.hide(getOption());
      }
    } else if (typeof props.disabled === 'function') {
      const currentValue = insetDisabled.value;
      const newValue = props.disabled(getOption());
      if (currentValue !== newValue) {
        insetDisabled.value = props.disabled(getOption());
      }
    }
  };
  let listeners = [vueDemi.watch(() => props.query, cb, {
    immediate: true,
    deep: true
  }), vueDemi.watch(() => [props.disabled, props.hide], (val, val2) => {
    if (val[0] !== val2[0]) {
      insetDisabled.value = typeof val[0] === 'boolean' ? val[0] : false;
      typeof val[0] === 'function' && (true);
    }
    if (val[1] !== val2[1]) {
      insetHide.value = typeof val[1] === 'boolean' ? val[1] : false;
      typeof val[1] === 'function' && (true);
    }
    cb();
  })];
  vueDemi.onBeforeUnmount(() => (listeners.forEach(o => o()), listeners = []));
  return {
    insetDisabled,
    insetHide
  };
}
/**
 * 转换当前事件循环内更新标识
 * @param {boolean} initialValue 初始状态
 */
function useDisableInCurrentCycle(initialValue = true) {
  /** 是否允许改变 */
  const flag = vueDemi.ref(initialValue);
  /** 禁止改变 */
  const updateFlag = () => {
    flag.value = !initialValue;
    vueDemi.nextTick(() => {
      flag.value = initialValue;
    });
  };
  return {
    flag,
    updateFlag
  };
}

/** 空值转字符串(去除空值不一致导致 formItem.rules 校验) */
function emptyValue2Str$1(val) {
  return val?.toString() ?? '';
}
/** 封装扁平组件必备的信息 */
function usePlain(props) {
  /** 容器注入值 */
  const wrapper = vueDemi.inject(provideKey);
  /** 初始值(重置时回填的值) */
  const initialValue = useInitialValue(props);
  /** 初始是否存在回填值 */
  const initialBackfillValue = props.backfill && (props.fields?.length ?
  // 防止回填值不存在时产生一个空数组(undefined[])
  props.fields.map(key => props.backfill[key]).filter(Boolean) : props.backfill[props.field]);
  /** 当前选中值 */
  const checked = vueDemi.ref(initialBackfillValue || (props.defaultValue !== undefined ? initialValue.value : props.multiple ? [] : ''
  // 防止数组引用导致默认值发生改变
  ).slice());
  /** 远程获取的数据源 */
  const remoteOption = vueDemi.ref([]);
  /** 渲染的数据源(远程数据源 > 本地数据源) */
  const finalOption = vueDemi.computed(() => remoteOption.value.length ? remoteOption.value : props.options);
  const getQuery = () => {
    if (props.customGetQuery) return props.customGetQuery(checked.value, emptyToValue, props);
    return props.multiple && props.fields ? props.fields.reduce((p, k, i) => (p[k] = emptyToValue(checked.value?.[i], props.emptyValue), p), {}) : {
      [props.field]: emptyToValue(checked.value, props.emptyValue)
    };
  };
  // 防止触发搜索时, query 产生变化内部重复赋值
  const {
    flag: realtimeFlag,
    updateFlag: updateRealtimeFlag
  } = useDisableInCurrentCycle();
  // 防止触发搜索时, backfill 产生变化内部重复赋值
  const {
    flag: backfillFlag,
    updateFlag: updateBackfillFlag
  } = useDisableInCurrentCycle();
  const option = defineCommonMethod({
    reset() {
      const {
        multiple
      } = props;
      updateRealtimeFlag();
      updateBackfillFlag();
      checked.value = props.resetToInitialValue && initialValue.value?.slice() || (multiple ? [] : '');
    },
    updateWrapperQuery() {
      updateRealtimeFlag();
      wrapper && Object.entries(getQuery()).forEach(([k, v]) => wrapper.updateQueryValue(k, v));
    },
    get validator() {
      return props.validator;
    },
    getQuery
  });
  wrapper?.register(option);
  const {
    insetDisabled,
    insetHide
  } = useDisplay(props, option);
  /** 不存在回填值且存在默认值时更新父级中的值 */
  if (!initialBackfillValue && props.defaultValue) {
    option.updateWrapperQuery();
  }
  const unwatchs = [];
  vueDemi.onBeforeUnmount(() => unwatchs.forEach(v => v()));
  // 提交字段发生改变时, 删除原有字段并更新最新值
  unwatchs.push(vueDemi.watch(() => props.field, (val, oldVal) => {
    val !== oldVal && wrapper?.removeUnreferencedField(oldVal);
    option.updateWrapperQuery();
  }));
  // 实时值发生变化时触发更新 - 共享同一个字段
  unwatchs.push(vueDemi.watch(() => [props.fields || props.field, props.fields ? props.fields.map(k => props.query[k]).filter(Boolean) : props.query[props.field]],
  // [props.field, props.query[props.field]] as const,
  ([_field, val], [__field]) => {
    const _val = props.backfillToValue(val, _field, props.query);
    // 仅在值发生变化时同步 忽视空值不一致的问题
    if (_field.toString() !== __field.toString() || emptyValue2Str$1(_val) === emptyValue2Str$1(checked.value)) return;
    if (!realtimeFlag.value) return;
    checked.value = _val;
  }));
  // 回填值发生变化时触发更新
  unwatchs.push(vueDemi.watch(() => [props.fields || props.field, props.fields ? props.fields.map(k => props.backfill?.[k]).filter(Boolean) : props.backfill?.[props.field]], ([_field, val], [__field]) => {
    // 存在回填值时回填, 不存在时不做改动
    const _val = props.backfillToValue(val, _field, props.backfill);
    if (_field.toString() !== __field.toString() || emptyValue2Str$1(_val) === emptyValue2Str$1(checked.value)) return;
    updateBackfillFlag();
    updateCheckedValue(_val);
  }));
  // 存在依赖项
  unwatchs.push(vueDemi.watch(() => [props.depend, props.dependFields, props.dependFields && [].concat(props.dependFields).map(k => props.query?.[k]).join(',') || ''], ([_depend, _dependFields, val], [__depend, __dependFields, oldVal]) => {
    if (!backfillFlag.value) return;
    if (val === oldVal) return;
    getOption('depend');
    // 更新依赖条件时不做改动
    if (_depend !== __depend || _dependFields?.toString() !== __dependFields?.toString()) return;
    if (checked.value === undefined || checked.value.toString() === '') return;
    updateCheckedValue(props.multiple ? [] : '');
  }));
  unwatchs.push(vueDemi.watch(() => props.getOptions, getOption.bind(null, 'initial'), {
    immediate: true
  }));
  /** 获取数据源发生变化事件 */
  function getOption(trigger) {
    props.getOptions?.(data => {
      const _checked = checked.value;
      // 重置 checked, 防止增加 option 后, select 值没更新的问题
      checked.value = undefined;
      remoteOption.value = data || [];
      checked.value = _checked;
    }, props.query || {}, {
      trigger,
      change: (value, isInitial) => {
        isInitial && (initialValue.value = value);
        change(value);
      },
      search: (value, isInitial) => {
        isInitial && (initialValue.value = value);
        updateCheckedValue(value);
        wrapper?.search();
      }
    });
  }
  /**
   * 更新选中值(父级也同步更改)
   * @param {string | string[]} value 待更改的值
   */
  function updateCheckedValue(value) {
    if (value === checked.value) return;
    checked.value = value;
    option.updateWrapperQuery();
  }
  /**
   * 更新选中值并触发内部搜索事件
   * @param {string | string[]} value 待更改的值
   */
  function change(value) {
    updateCheckedValue(value);
    wrapper?.insetSearch();
  }
  return {
    wrapper,
    option,
    checked,
    getQuery,
    insetDisabled,
    insetHide,
    finalOption,
    updateCheckedValue,
    change,
    reset: option.reset
  };
}

/** 公共 props */
const commonProps = {
  /** 提交的字段 */
  field: {
    type: String,
    required: true
  },
  /** 当前条件对象 - 实时变化 */
  query: {
    type: Object,
    required: true
  },
  /** 回填值的对象 - 非实时变化 */
  backfill: {
    type: Object
  },
  /** 禁用状态 */
  disabled: {
    type: [Boolean, Function]
  },
  /** 是否隐藏 -> 如果是函数, 需传递依赖项, 可根据依赖项动态隐藏 */
  hide: {
    type: [Boolean, Function]
  },
  /** 是否依赖其它字段 */
  depend: {
    type: Boolean
  },
  /** 依赖字段 */
  dependFields: {
    type: [String, Array]
  },
  /** 重置时是否置为初始值 */
  resetToInitialValue: {
    type: [Boolean]
  },
  /** 空置时提交的值 - 默认置为 undefined */
  emptyValue: {
    type: [String, Number, null, undefined]
  },
  /** 校验函数, 返回字符串不通过, 会触发提示 - 提交时触发 */
  validator: {
    type: [Function]
  },
  /** 自定义返回字段 */
  customGetQuery: {
    type: Function
  },
  /** 设置默认值 */
  defaultValue: {
    type: [String, Array, Function]
  }
};

/** 扁平条件类 props */
const plainProps = {
  ...commonProps,
  /** 字段集(多选时, 每个下标对应的字段可能不一样) */
  fields: {
    type: [Array]
  },
  /** 多字段时转换成选中值 */
  backfillToValue: {
    type: Function,
    default: v => v
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    default: undefined
  },
  /** 数据源 */
  options: {
    type: Array,
    default: () => []
  },
  /** 动态获取数据源 */
  getOptions: {
    type: Function
  }
};

/** 空值转字符串(去除空值不一致导致 formItem.rules 校验) */
function emptyValue2Str(val) {
  return val?.toString() ?? '';
}
/** 封装 tree 组件必备的信息 */
function useTree(props) {
  /** 容器注入值 */
  const wrapper = vueDemi.inject(provideKey);
  /** 初始值(重置时回填的值) */
  const initialValue = useInitialValue(props);
  /** 当前选中值 */
  const checked = vueDemi.ref([]);
  /** 远程获取的数据源 */
  const remoteOption = vueDemi.ref([]);
  /** 渲染的数据源(远程数据源 > 本地数据源) */
  const finalOption = vueDemi.computed(() => remoteOption.value.length ? remoteOption.value : props.options);
  /** 获取当前条件所拥有的值 */
  const getQuery = () => {
    // 未初始化且不存在默认值时不返回查询值
    if (!sourceIsInit.value && !initialValue.value) return {};
    if (props.customGetQuery) return props.customGetQuery(checked.value, emptyToValue, props);
    return props.fields?.length ? props.fields.reduce((p, v, i) => Object.assign(p, {
      [v]: emptyToValue(checked.value[i], props.emptyValue)
    }), {}) : {
      [props.field]: emptyToValue(props.emitPath ? [...checked.value] : checked.value.slice(-1)[0], props.emptyValue)
    };
  };
  // 防止触发搜索时, query 产生变化内部重复赋值
  const {
    flag: realtimeFlag,
    updateFlag: updateRealtimeFlag
  } = useDisableInCurrentCycle();
  // 防止触发搜索时, `backfill` 产生变化内部重复赋值
  const {
    flag: backfillFlag,
    updateFlag: updateBackfillFlag
  } = useDisableInCurrentCycle();
  /** 需暴露给父级操作 */
  const option = defineCommonMethod({
    reset() {
      updateRealtimeFlag();
      updateBackfillFlag();
      checked.value = props.resetToInitialValue && initialValue.value?.slice() || [];
      return this;
    },
    get validator() {
      return props.validator;
    },
    updateWrapperQuery() {
      updateRealtimeFlag();
      wrapper && Object.entries(getQuery()).forEach(([k, v]) => wrapper.updateQueryValue(k, v));
    },
    getQuery
  });
  wrapper?.register(option);
  const {
    insetDisabled,
    insetHide
  } = useDisplay(props, option);
  const unwatchs = [];
  vueDemi.onBeforeUnmount(() => unwatchs.forEach(v => v()));
  const sourceIsInit = vueDemi.ref(typeof props.getOptions !== 'function' || !!props.fields?.length);
  vueDemi.watch(sourceIsInit, val => val && initCheckedInfo(), {
    immediate: true
  });
  /** 设置初次选中的值以及初始值 */
  function initCheckedInfo() {
    const {
      backfill: BACKFILL,
      field: FIELD,
      fields: FIELDS
    } = props;
    if (BACKFILL) {
      // 存在回填值且回填值中对应字段为真
      // 则设置回填值并不处理后续逻辑
      if (FIELDS) {
        const r = FIELDS.reduce((p, v) => {
          BACKFILL[v] && p.push(BACKFILL[v]);
          return p;
        }, []);
        if (r.length) {
          checked.value = r;
          option.updateWrapperQuery();
          return;
        }
      } else if (BACKFILL[FIELD]) {
        checked.value = insideGetChained(BACKFILL[FIELD]);
        option.updateWrapperQuery();
        return;
      }
    }
    // 不存在回填值, 看是否存在初始值
    // 存在设置默认值
    if (initialValue.value?.length) {
      checked.value = typeof initialValue.value === 'string' ? insideGetChained(initialValue.value) : initialValue.value.slice();
      typeof initialValue.value === 'string' && (initialValue.value = checked.value.slice());
      option.updateWrapperQuery();
    }
  }
  // 提交字段发生改变时, 删除原有字段并更新最新值
  unwatchs.push(vueDemi.watch(() => props.fields || [props.field], (val, oldVal) => {
    val.toString() !== oldVal.toString() && wrapper && oldVal.forEach(o => val.includes(o) || wrapper.removeUnreferencedField(o));
    option.updateWrapperQuery();
  }));
  // 实时值发生变化时触发更新 - 共享同一个字段
  unwatchs.push(vueDemi.watch(() => [props.fields?.toString() || props.field, props.fields?.map(v => props.query[v]).filter(Boolean) || props.query[props.field]], ([_field, val], [__field, oldVal]) => {
    // 仅在值发生变化时同步
    if (_field !== __field || emptyValue2Str(val) === emptyValue2Str(oldVal)) return;
    if (!realtimeFlag.value) return;
    checked.value = typeof val === 'string' ? insideGetChained(val) : val;
  }));
  // 回填值发生变化时触发更新
  unwatchs.push(vueDemi.watch(() => props.fields?.length ? props.fields.reduce((p, k) => {
    props.backfill?.[k] && p.push(props.backfill[k]);
    return p;
  }, []) : props.backfill?.[props.field], (value, oldVal) => {
    if (!sourceIsInit.value) return;
    if (emptyValue2Str(value) === emptyValue2Str(oldVal)) return;
    updateBackfillFlag();
    if (Array.isArray(value)) {
      updateCheckedValue(value);
    } else {
      if (!value && value !== 0) {
        checked.value.length && (checked.value = []);
        return;
      }
      updateCheckedValue(insideGetChained(value));
    }
  }));
  // 存在依赖项
  unwatchs.push(vueDemi.watch(() => [props.depend, props.dependFields, props.dependFields && [].concat(props.dependFields).map(k => props.query?.[k]).join(',') || ''], ([_depend, _dependFields, val], [__depend, __dependFields, oldVal]) => {
    if (!backfillFlag.value) return;
    if (val === oldVal) return;
    getOption('depend');
    // 更新依赖条件时不做改动
    if (_depend !== __depend || _dependFields?.toString() !== __dependFields?.toString()) return;
    if (!checked.value.length) return;
    updateCheckedValue(typeof checked.value === 'string' ? '' : []);
  }));
  unwatchs.push(vueDemi.watch(() => props.getOptions, getOption.bind(null, 'initial'), {
    immediate: true
  }));
  /** 获取数据源发生变化事件 */
  function getOption(trigger) {
    props.getOptions?.(data => {
      remoteOption.value = data || [];
      sourceIsInit.value = true;
    }, props.query || {}, {
      trigger,
      change: (value, isInitial) => {
        isInitial && (initialValue.value = value);
        change(value);
      },
      search: (value, isInitial) => {
        isInitial && (initialValue.value = value);
        updateCheckedValue(value);
        wrapper?.search();
      }
    });
  }
  /**
   * 更新选中值(父级也同步更改)
   * @param {ValueType | ValueType[]} values 待更改的值
   */
  function updateCheckedValue(values) {
    const _checked = Array.isArray(values) ? values : insideGetChained(values);
    if (_checked.join('') === checked.value.join('')) return;
    checked.value = _checked;
    option.updateWrapperQuery();
  }
  /**
   * change 事件
   * @param {Array} values 待更改的值
   */
  function change(values) {
    updateCheckedValue(values || []);
    wrapper?.insetSearch();
  }
  /**
   * 根据提供的值获取其祖先(包括自身)
   */
  function insideGetChained(val) {
    if (!val && val !== 0) return [];
    const {
      valueKey,
      childrenKey
    } = props;
    return getChained(finalOption.value, item => item[valueKey] === val).map(v => v[valueKey], childrenKey).filter(Boolean);
  }
  return {
    wrapper,
    option,
    checked,
    getQuery,
    finalOption,
    insetDisabled,
    insetHide,
    change,
    reset: option.reset
  };
}

/** 树形条件类 props */
const treeProps = {
  ...commonProps,
  /** 不同层级返回不同的字段(可能存在的字段, 不传初始不会回填数据) */
  fields: {
    type: [Array]
  },
  /** 提交给后端的字段 */
  valueKey: {
    type: String,
    required: true
  },
  /** 子级键名 - 默认 children */
  childrenKey: {
    type: String
  },
  /** 是否返回选中项中所有的值(数组形式), 否只返回最后一项(基础类型) */
  emitPath: {
    type: [Boolean],
    default: false
  },
  /** 下拉选项的数据源 */
  options: {
    type: Array,
    default: () => []
  },
  /** 获取数据源 */
  getOptions: {
    type: Function
  }
};

exports.IS_COMPOSITION_VERSION = IS_COMPOSITION_VERSION;
exports.commonProps = commonProps;
exports.defineCommonMethod = defineCommonMethod;
exports.defineProvideValue = defineProvideValue;
exports.emptyToValue = emptyToValue;
exports.getChained = getChained;
exports.getNode = getNode;
exports.plainProps = plainProps;
exports.provideKey = provideKey;
exports.treeProps = treeProps;
exports.usePlain = usePlain;
exports.useTree = useTree;
exports.useWrapper = useWrapper;
exports.wrapperProps = wrapperProps;
//# sourceMappingURL=index.cjs.js.map
