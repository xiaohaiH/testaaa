### 条件组件

<!--
    &#x2611;  -> 框框√
    &#x2612;  -> 框框×
    &#x2610;  -> 框框
    &check;  -> √
    &cross;  -> ×
-->

> ---
>
> -   只负责核心逻辑, 不关心 `UI` 以及业务操作
> -   目前实现了 `wrapper`, `select`, `input`, `datepicker`, `cascader` 组件
> -   `wrapper` 是入口组件, 所有条件组件须放在该组件下
> -   条件子组件可通过 `wrapper` 注入的选项来更新最新的条件值
> -   目前支持的 UI 库
>
>     -   &#x2611; element-ui
>     -   &#x2610; element-plus
>
> -   组件实现逻辑
>     -   入口组件通过注入值来更新 query 对象, 以及获取子条件相关的信息
>     -   子组件通过父组件提供的信息来注册条件(子组件卸载时父组件会自动销毁其条件)
>
> ---

### `wrapper` 组件(容器组件)

> ---
>
> -   **`props`**
>
> | 属性名              |         类型          | 默认值 | 必填 | 描述                                    |
> | :------------------ | :-------------------: | :----: | :--: | :-------------------------------------- |
> | tag                 |   string \| object    |  div   |  否  | 显示的标签                              |
> | resetToInitialValue |        boolean        |   -    |  否  | 触发重置时是否设为初始值                |
> | datum               |         定义          |   -    |  时  | 渲染的条件, 需外部通过 `t` 渲染具体组件 |
> | backfill            |        object         |   -    |  -   | 条件需要回填需提供                      |
> | realtime            |        boolean        |   -    |  -   | 是否在条件项发生更改后立马触发搜索事件  |
> | immediateSearch     |        boolean        |   -    |  -   | 初始是否需要触发一次 `ready` 事件       |
> | toast               | (msg: string) => void |   -    |  -   | 校验时不合格时触发                      |
>
> -   **`emits`**
>
> | 事件名 |         返回值          | 描述                                                                   |
> | :----- | :---------------------: | :--------------------------------------------------------------------- |
> | ready  | (query: object) => void | 初始化事件(需设置 `immediateSearch` 为 `true`), 第一个参数是搜索值对象 |
> | search | (query: object) => void | 搜索事件, 第一个参数是搜索值对象                                       |
>
> -   **`provide`**
> -   注入键名为 `condition-wrapper`, 注入值是一个对象, 对象暴露了以下内容 👇
>     | 属性名 |类型| 返回值 | 描述 |
>     | :----- |-| :----------------------------------: | :--------------------------------------------------------------------- |
>     | realtime |Ref<boolean>| - | 当前组件是否是实时触发 |
>     | register |(config: CommonMethod)| () => void | 注册条件, 返回一个函数(unregister) |
>     | updateQueryValue |(field: string, value: any)| 返回自身对象 | 更新 query 中搜索的值, 不触发搜索事件 |
>     | insetSearch |Function| 返回自身对象 | 子组件内部值发生了变动, 由父级决定是否触发搜索事件(实时搜索时需要区分这两种方式) |
>     | search |Function| -| 直接触发搜索事件() |
>
> ---

### **子条件共有的 `props`**

> ---
>
> | 属性名              |                  类型                  | 默认值 | 必填 | 描述                                                             |
> | :------------------ | :------------------------------------: | :----: | :--: | :--------------------------------------------------------------- |
> | field               |                 string                 |   -    |  是  | 提交的字段名                                                     |
> | as                  |                 string                 |   -    |  -   | 提交的字段名(优先级比 `field` 高)                                |
> | emptyValue          |        string\|null\|undefined         |   -    |  -   | 空值时提交的值                                                   |
> | resetToInitialValue |                boolean                 |   -    |  -   | 重置时是否置为初始值                                             |
> | disabled            |  boolean\|(query: object) => boolean   |   -    |  -   | 禁用, 可动态设置                                                 |
> | hide                |  boolean\|(query: object) => boolean   |   -    |  -   | 隐藏                                                             |
> | validator           | (query: object) => any \| Promise<any> |   -    |  -   | 校验函数, 返回非空字符串代表失败, 触发 wrapper 提供的 toast 函数 |
>
> -   **子组件通过父级注入的对象内的方法 `register` 来主动注册条件(子组件都需提供的信息)**
>
> | 属性名             |          类型           | 返回值   | 描述                      |
> | :----------------- | :---------------------: | :------- | ------------------------- |
> | reset              |        Function         | 返回自身 | 重置 query 中的值         |
> | updateWrapperQuery |        Function         | 返回自身 | 更新父级 query 中的值     |
> | validator          | (query: object) => void | any      | 校验自身值是否通过校验    |
> | getQuery           |      () => object       | object   | 获取组件自身的 query 参数 |
>
> ---

### `select` 组件(下拉组件)

> ---
>
> -   **`props`**
>
> | 属性名       |                        类型                        | 默认值 | 必填 | 描述                                         |
> | :----------- | :------------------------------------------------: | :----: | :--: | :------------------------------------------- |
> | valueKey     |                       string                       |   -    |  是  | 下拉选项唯一键                               |
> | labelKey     |                       string                       |   -    |  是  | 下拉项显示的值                               |
> | options      |                       Array                        |   -    |  -   | 下拉选项的数据源(可通过 getOptions 动态获取) |
> | multiple     |                      boolean                       |   -    |  -   | 多选                                         |
> | depend       |                      boolean                       |   -    |  -   | 数据源是否依赖其它字段                       |
> | dependFields |                 string \| string[]                 |   -    |  -   | 依赖的字段                                   |
> | getOptions   | (cb: (data: any[]) => void, query: object) => void |   -    |  -   | 动态获取数据源                               |
> | filterMethod |        (val: string, data: object) => void         |   -    |  -   | 自定义过滤数据的方法                         |
>
> ---

### `input` 组件(输入框组件)

> ---
>
> -   **`props`**
>
> | 属性名   |  类型   | 默认值 | 必填 | 描述                 |
> | :------- | :-----: | :----: | :--: | :------------------- |
> | realtime | boolean |   -    |  -   | 是否实时触发         |
> | waitTime | boolean |   -    |  -   | 实时触发时的防抖时间 |
>
> ---

### `datepicker` 组件(日期组件)

> ---
>
> -   **`props`**
>
> | 属性名     |  类型   | 默认值 | 必填 | 描述                                   |
> | :--------- | :-----: | :----: | :--: | :------------------------------------- |
> | range      | boolean |   -    |  -   | 是否是范围选择器                       |
> | beginField | string  |   -    |  -   | 范围选择器时提供的开始时间字段(可不填) |
> | endField   | string  |   -    |  -   | 范围选择器时提供的结束时间字段(可不填) |
>
> ---

### `cascader` 组件(级联组件)

> ---
>
> -   **`props`**
>
> | 属性名       |                         类型                          |  默认值  | 必填 | 描述                                             |
> | :----------- | :---------------------------------------------------: | :------: | :--: | :----------------------------------------------- |
> | fields       |                       string[]                        |    -     |  -   | 不同层级用不同字段时需提供                       |
> | valueKey     |                        string                         |    -     |  是  | 唯一键名                                         |
> | childrenKey  |                        string                         | children |  -   | 子级键名                                         |
> | emitPath     |                        boolean                        |    -     |  -   | 是否返回选中项, 不返回选中项的父级链(数组形式)   |
> | options      |                       object[]                        |    -     |  -   | 下拉选项的数据源, 可通过(getOptions)选项动态获取 |
> | depend       |                        boolean                        |    -     |  -   | getOptions 是否依赖了其它数据                    |
> | dependFields |                   string\|string[]                    |    -     |  -   | 依赖的字段集合                                   |
> | getOptions   | (cb: (data: object[]) => void, query: object) => void |    -     |  -   | 动态获取数据源                                   |
>
> ---
