/* @flow */

import {
  no,//总是返回fasle
  noop,//返回undefined，不论传递给它的是什么参数。 可以用作默认可选的回调参数。
  identity//传什么返回什么
} from 'shared/util'

import { LIFECYCLE_HOOKS } from 'shared/constants'

export type Config = {
  // user
  optionMergeStrategies: { [key: string]: Function };
  silent: boolean;
  productionTip: boolean;
  performance: boolean;
  devtools: boolean;
  errorHandler: ?(err: Error, vm: Component, info: string) => void;
  ignoredElements: Array<string>;
  keyCodes: { [key: string]: number | Array<number> };

  // platform
  isReservedTag: (x?: string) => boolean;
  isReservedAttr: (x?: string) => boolean;
  parsePlatformTagName: (x: string) => string;
  isUnknownElement: (x?: string) => boolean;
  getTagNamespace: (x?: string) => string | void;
  mustUseProp: (tag: string, type: ?string, name: string) => boolean;

  // legacy
  _lifecycleHooks: Array<string>;
};

export default ({
  /**
   * Option merge strategies (used in core/util/options)
   * 选项合并策略
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   * 是否抑制警告。
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   * 在启动时显示生产模式提示信息?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   * 是否启用devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   * 是否记录性能
   */
  performance: false,

  /**
   * Error handler for watcher errors
   * 监视错误的错误处理程序。
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   * 忽略某些自定义元素
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   * 自定义用户关键词别名为v-on。
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   * 检查一个标签是否保留，以便它不能被注册为一个组件。这是平台依赖的，可能被覆盖。
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   * 检查是否保留了属性，以使其不能用作组件支持。这是平台依赖的，可能被覆盖。
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * 检查标签是否为未知元素。
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   * 获取元素的命名空间
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   * 解析特定平台的真实标记名。
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * 检查属性是否必须使用props绑定。
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   * 暴露遗留原因
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
}: Config)
