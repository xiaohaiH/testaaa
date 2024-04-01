import { version as rt, onBeforeUnmount as Q, ref as S, getCurrentInstance as it, set as ot, del as $e, provide as at, markRaw as O, computed as p, watch as P, nextTick as lt, inject as Ke, defineComponent as B, toRefs as ct, reactive as Me, onMounted as ut } from "vue-demi";
import { FormItem as w, Select as le, OptionGroup as st, Option as ft, Input as ce, DatePicker as Ve, Cascader as ue, RadioGroup as se, RadioButton as dt, Radio as ht, Checkbox as De, CheckboxGroup as _t, CheckboxButton as yt, Form as fe, Button as mt } from "element-ui";
const pt = rt.slice(0, 3) === "2.7", de = "condition-wrapper";
function gt(e) {
  const t = [];
  Q(() => t.splice(0));
  const n = {};
  let r = !1, i = [];
  const a = {
    realtime: S(e.realtime),
    register(h) {
      t.push(h);
      const f = () => {
        r = !0, h.reset(), h.updateWrapperQuery();
        const $ = t.indexOf(h);
        $ !== -1 && t.splice($, 1), e.searchAtDatumChanged && u(), r = !1, i.forEach((x) => {
          $e(s.value, x), delete n[x];
        }), i = [];
      }, v = it();
      return v && Q(f, pt ? v.proxy : v), f;
    },
    updateQueryValue(h, f) {
      r && i.push(h), ot(s.value, h, f), n[h] = f;
    },
    insetSearch() {
      e.realtime && u();
    },
    search: u,
    removeUnreferencedField(h) {
      let f = 0;
      t.some((v) => (v.getQuery().hasOwnProperty(h) && (f += 1), f)), f || ($e(s.value, h), delete n[h]);
    }
  };
  at(de, a);
  const s = S({ ...e.backfill }), l = () => ({ ...s.value, ...e.backfill, ...n });
  async function u() {
    var f, v;
    const h = await b();
    h ? (f = e.toast) == null || f.call(e, h) : (v = e.search) == null || v.call(e, l());
  }
  function _() {
    var h;
    t.forEach((f) => {
      f.reset(), f.updateWrapperQuery();
    }), (h = e.reset) == null || h.call(e, l());
  }
  async function b() {
    return (await Promise.all(t.map((f) => {
      var v;
      return (v = f.validator) == null ? void 0 : v.call(f, s.value);
    }))).find((f) => f && typeof f == "string");
  }
  return {
    child: t,
    wrapperInstance: a,
    query: s,
    getQuery: l,
    search: u,
    reset: _,
    validate: b
  };
}
const vt = {
  /** 是否在数据发生变动后实时触发搜索事件 */
  realtime: { type: Boolean, default: void 0 },
  /** 是否在数据源发生改变后触发一次搜索事件 */
  searchAtDatumChanged: { type: Boolean, default: void 0 },
  /** 回填信息 */
  backfill: { type: Object },
  /** 校验失败时产生的提示 */
  toast: { type: Function, default: void 0 }
};
function j(e, t) {
  return Array.isArray(e) ? e.filter(Boolean).length ? e : t : typeof e == "number" ? e : e || t;
}
function He(e, t, n = "children") {
  var r;
  for (const i of e) {
    if (t(i))
      return [i];
    if ((r = i[n]) != null && r.length) {
      const a = He(i[n], t);
      if (a.length)
        return a.unshift(i), a;
    }
  }
  return [];
}
function K(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? e : O(e);
}
function Ge(e) {
  const t = S();
  return p({
    set(r) {
      t.value = r;
    },
    get() {
      return t.value === void 0 ? e.defaultValue !== void 0 ? typeof e.defaultValue == "function" ? e.defaultValue(e.query, e.backfill) : e.defaultValue : void 0 : t.value;
    }
  });
}
function Qe(e, t) {
  const n = S(typeof e.disabled == "boolean" ? e.disabled : !1), r = S(typeof e.hide == "boolean" ? e.hide : !1), i = () => ({ query: e.query, backfill: e.backfill, option: t }), a = () => {
    if (typeof e.hide == "function") {
      const l = r.value, u = e.hide(i());
      l !== u && (r.value = e.hide(i()));
    } else if (typeof e.disabled == "function") {
      const l = n.value, u = e.disabled(i());
      l !== u && (n.value = e.disabled(i()));
    }
  };
  let s = [
    P(() => e.query, a, { immediate: !0, deep: !0 }),
    P(
      () => [e.disabled, e.hide],
      (l, u) => {
        l[0] !== u[0] && (n.value = typeof l[0] == "boolean" ? l[0] : !1, l[0]), l[1] !== u[1] && (r.value = typeof l[1] == "boolean" ? l[1] : !1, l[1]), a();
      }
    )
  ];
  return Q(() => (s.forEach((l) => l()), s = [])), { insetDisabled: n, insetHide: r };
}
function Z(e = !0) {
  const t = S(e);
  return { flag: t, updateFlag: () => {
    t.value = !e, lt(() => {
      t.value = e;
    });
  } };
}
function J(e) {
  return (e == null ? void 0 : e.toString()) ?? "";
}
function z(e) {
  var H;
  const t = Ke(de), n = Ge(e), r = e.backfill && ((H = e.fields) != null && H.length ? (
    // 防止回填值不存在时产生一个空数组(undefined[])
    e.fields.map((d) => e.backfill[d]).filter(Boolean)
  ) : e.backfill[e.field]), i = S(
    r || (e.defaultValue !== void 0 ? n.value : e.multiple ? [] : "").slice()
  ), a = S([]), s = p(() => a.value.length ? a.value : e.options), l = () => e.customGetQuery ? e.customGetQuery(i.value, j, e) : e.multiple && e.fields ? e.fields.reduce(
    (d, m, o) => {
      var c;
      return d[m] = j((c = i.value) == null ? void 0 : c[o], e.emptyValue), d;
    },
    {}
  ) : { [e.field]: j(i.value, e.emptyValue) }, { flag: u, updateFlag: _ } = Z(), { flag: b, updateFlag: h } = Z(), f = {
    reset() {
      var m;
      const { multiple: d } = e;
      _(), h(), i.value = e.resetToInitialValue && ((m = n.value) == null ? void 0 : m.slice()) || (d ? [] : "");
    },
    updateWrapperQuery() {
      _(), t && Object.entries(l()).forEach(([d, m]) => t.updateQueryValue(d, m));
    },
    get validator() {
      return e.validator;
    },
    getQuery: l
  };
  t == null || t.register(f);
  const { insetDisabled: v, insetHide: $ } = Qe(e, f);
  !r && e.defaultValue && f.updateWrapperQuery();
  const x = [];
  Q(() => x.forEach((d) => d())), x.push(
    P(
      () => e.field,
      (d, m) => {
        d !== m && (t == null || t.removeUnreferencedField(m)), f.updateWrapperQuery();
      }
    )
  ), x.push(
    P(
      () => [
        e.fields || e.field,
        e.fields ? e.fields.map((d) => e.query[d]).filter(Boolean) : e.query[e.field]
      ],
      // [props.field, props.query[props.field]] as const,
      ([d, m], [o]) => {
        const c = e.backfillToValue(m, d, e.query);
        d.toString() !== o.toString() || J(c) === J(i.value) || u.value && (i.value = c);
      }
    )
  ), x.push(
    P(
      () => {
        var d;
        return [
          e.fields || e.field,
          e.fields ? e.fields.map((m) => {
            var o;
            return (o = e.backfill) == null ? void 0 : o[m];
          }).filter(Boolean) : (d = e.backfill) == null ? void 0 : d[e.field]
        ];
      },
      ([d, m], [o]) => {
        const c = e.backfillToValue(m, d, e.backfill);
        d.toString() !== o.toString() || J(c) === J(i.value) || (h(), C(c));
      }
    )
  ), x.push(
    P(
      () => [
        e.depend,
        e.dependFields,
        e.dependFields && [].concat(e.dependFields).map((d) => {
          var m;
          return (m = e.query) == null ? void 0 : m[d];
        }).join(",") || ""
      ],
      ([d, m, o], [c, y, g]) => {
        b.value && o !== g && (L("depend"), !(d !== c || (m == null ? void 0 : m.toString()) !== (y == null ? void 0 : y.toString())) && (i.value === void 0 || i.value.toString() === "" || C(e.multiple ? [] : "")));
      }
    )
  ), x.push(P(() => e.getOptions, L.bind(null, "initial"), { immediate: !0 }));
  function L(d) {
    var m;
    (m = e.getOptions) == null || m.call(
      e,
      (o) => {
        const c = i.value;
        i.value = void 0, a.value = o || [], i.value = c;
      },
      e.query || {},
      {
        trigger: d,
        change: (o, c) => {
          c && (n.value = o), I(o);
        },
        search: (o, c) => {
          c && (n.value = o), C(o), t == null || t.search();
        }
      }
    );
  }
  function C(d) {
    d !== i.value && (i.value = d, f.updateWrapperQuery());
  }
  function I(d) {
    C(d), t == null || t.insetSearch();
  }
  return {
    wrapper: t,
    option: f,
    checked: i,
    getQuery: l,
    insetDisabled: v,
    insetHide: $,
    finalOption: s,
    updateCheckedValue: C,
    change: I,
    reset: f.reset
  };
}
const qe = {
  /** 提交的字段 */
  field: { type: String, required: !0 },
  /** 当前条件对象 - 实时变化 */
  query: { type: Object, required: !0 },
  /** 回填值的对象 - 非实时变化 */
  backfill: { type: Object },
  /** 禁用状态 */
  disabled: { type: [Boolean, Function] },
  /** 是否隐藏 -> 如果是函数, 需传递依赖项, 可根据依赖项动态隐藏 */
  hide: { type: [Boolean, Function] },
  /** 是否依赖其它字段 */
  depend: { type: Boolean },
  /** 依赖字段 */
  dependFields: { type: [String, Array] },
  /** 重置时是否置为初始值 */
  resetToInitialValue: { type: [Boolean] },
  /** 空置时提交的值 - 默认置为 undefined */
  emptyValue: { type: [String, Number, null, void 0] },
  /** 校验函数, 返回字符串不通过, 会触发提示 - 提交时触发 */
  validator: {
    type: [Function]
  },
  /** 自定义返回字段 */
  customGetQuery: { type: Function },
  /** 设置默认值 */
  defaultValue: {
    type: [String, Array, Function]
  }
}, W = {
  ...qe,
  /** 字段集(多选时, 每个下标对应的字段可能不一样) */
  fields: { type: [Array] },
  /** 多字段时转换成选中值 */
  backfillToValue: {
    type: Function,
    default: (e) => e
  },
  /** 是否多选 */
  multiple: { type: Boolean, default: void 0 },
  /** 数据源 */
  options: { type: Array, default: () => [] },
  /** 动态获取数据源 */
  getOptions: { type: Function }
};
function Y(e) {
  return (e == null ? void 0 : e.toString()) ?? "";
}
function bt(e) {
  var m;
  const t = Ke(de), n = Ge(e), r = S([]), i = S([]), a = p(() => i.value.length ? i.value : e.options), s = () => {
    var o;
    return !x.value && !n.value ? {} : e.customGetQuery ? e.customGetQuery(r.value, j, e) : (o = e.fields) != null && o.length ? e.fields.reduce(
      (c, y, g) => Object.assign(c, { [y]: j(r.value[g], e.emptyValue) }),
      {}
    ) : {
      [e.field]: j(
        e.emitPath ? [...r.value] : r.value.slice(-1)[0],
        e.emptyValue
      )
    };
  }, { flag: l, updateFlag: u } = Z(), { flag: _, updateFlag: b } = Z(), h = {
    reset() {
      var o;
      return u(), b(), r.value = e.resetToInitialValue && ((o = n.value) == null ? void 0 : o.slice()) || [], this;
    },
    get validator() {
      return e.validator;
    },
    updateWrapperQuery() {
      u(), t && Object.entries(s()).forEach(([o, c]) => t.updateQueryValue(o, c));
    },
    getQuery: s
  };
  t == null || t.register(h);
  const { insetDisabled: f, insetHide: v } = Qe(e, h), $ = [];
  Q(() => $.forEach((o) => o()));
  const x = S(typeof e.getOptions != "function" || !!((m = e.fields) != null && m.length));
  P(x, (o) => o && L(), { immediate: !0 });
  function L() {
    var g;
    const { backfill: o, field: c, fields: y } = e;
    if (o) {
      if (y) {
        const k = y.reduce((X, Se) => (o[Se] && X.push(o[Se]), X), []);
        if (k.length) {
          r.value = k, h.updateWrapperQuery();
          return;
        }
      } else if (o[c]) {
        r.value = d(o[c]), h.updateWrapperQuery();
        return;
      }
    }
    (g = n.value) != null && g.length && (r.value = typeof n.value == "string" ? d(n.value) : n.value.slice(), typeof n.value == "string" && (n.value = r.value.slice()), h.updateWrapperQuery());
  }
  $.push(
    P(
      () => e.fields || [e.field],
      (o, c) => {
        o.toString() !== c.toString() && t && c.forEach((y) => o.includes(y) || t.removeUnreferencedField(y)), h.updateWrapperQuery();
      }
    )
  ), $.push(
    P(
      () => {
        var o, c;
        return [
          ((o = e.fields) == null ? void 0 : o.toString()) || e.field,
          ((c = e.fields) == null ? void 0 : c.map((y) => e.query[y]).filter(Boolean)) || e.query[e.field]
        ];
      },
      ([o, c], [y, g]) => {
        o !== y || Y(c) === Y(g) || l.value && (r.value = typeof c == "string" ? d(c) : c);
      }
    )
  ), $.push(
    P(
      () => {
        var o, c;
        return (o = e.fields) != null && o.length ? e.fields.reduce((y, g) => {
          var k;
          return (k = e.backfill) != null && k[g] && y.push(e.backfill[g]), y;
        }, []) : (c = e.backfill) == null ? void 0 : c[e.field];
      },
      (o, c) => {
        if (x.value && Y(o) !== Y(c))
          if (b(), Array.isArray(o))
            I(o);
          else {
            if (!o && o !== 0) {
              r.value.length && (r.value = []);
              return;
            }
            I(d(o));
          }
      }
    )
  ), $.push(
    P(
      () => [
        e.depend,
        e.dependFields,
        e.dependFields && [].concat(e.dependFields).map((o) => {
          var c;
          return (c = e.query) == null ? void 0 : c[o];
        }).join(",") || ""
      ],
      ([o, c, y], [g, k, X]) => {
        _.value && y !== X && (C("depend"), !(o !== g || (c == null ? void 0 : c.toString()) !== (k == null ? void 0 : k.toString())) && r.value.length && I(typeof r.value == "string" ? "" : []));
      }
    )
  ), $.push(P(() => e.getOptions, C.bind(null, "initial"), { immediate: !0 }));
  function C(o) {
    var c;
    (c = e.getOptions) == null || c.call(
      e,
      (y) => {
        i.value = y || [], x.value = !0;
      },
      e.query || {},
      {
        trigger: o,
        change: (y, g) => {
          g && (n.value = y), H(y);
        },
        search: (y, g) => {
          g && (n.value = y), I(y), t == null || t.search();
        }
      }
    );
  }
  function I(o) {
    const c = Array.isArray(o) ? o : d(o);
    c.join("") !== r.value.join("") && (r.value = c, h.updateWrapperQuery());
  }
  function H(o) {
    I(o || []), t == null || t.insetSearch();
  }
  function d(o) {
    if (!o && o !== 0)
      return [];
    const { valueKey: c, childrenKey: y } = e;
    return He(a.value, (g) => g[c] === o).map((g) => g[c], y).filter(Boolean);
  }
  return {
    wrapper: t,
    option: h,
    checked: r,
    getQuery: s,
    finalOption: a,
    insetDisabled: f,
    insetHide: v,
    change: H,
    reset: h.reset
  };
}
const St = {
  ...qe,
  /** 不同层级返回不同的字段(可能存在的字段, 不传初始不会回填数据) */
  fields: { type: [Array] },
  /** 提交给后端的字段 */
  valueKey: { type: String, required: !0 },
  /** 子级键名 - 默认 children */
  childrenKey: { type: String },
  /** 是否返回选中项中所有的值(数组形式), 否只返回最后一项(基础类型) */
  emitPath: { type: [Boolean], default: !1 },
  /** 下拉选项的数据源 */
  options: { type: Array, default: () => [] },
  /** 获取数据源 */
  getOptions: { type: Function }
};
var $t = typeof global == "object" && global && global.Object === Object && global;
const xt = $t;
var Pt = typeof self == "object" && self && self.Object === Object && self, Et = xt || Pt || Function("return this")();
const he = Et;
var kt = he.Symbol;
const F = kt;
var ze = Object.prototype, Ct = ze.hasOwnProperty, It = ze.toString, G = F ? F.toStringTag : void 0;
function Ot(e) {
  var t = Ct.call(e, G), n = e[G];
  try {
    e[G] = void 0;
    var r = !0;
  } catch {
  }
  var i = It.call(e);
  return r && (t ? e[G] = n : delete e[G]), i;
}
var Ft = Object.prototype, Tt = Ft.toString;
function Bt(e) {
  return Tt.call(e);
}
var wt = "[object Null]", At = "[object Undefined]", xe = F ? F.toStringTag : void 0;
function _e(e) {
  return e == null ? e === void 0 ? At : wt : xe && xe in Object(e) ? Ot(e) : Bt(e);
}
function ye(e) {
  return e != null && typeof e == "object";
}
var Rt = "[object Symbol]";
function me(e) {
  return typeof e == "symbol" || ye(e) && _e(e) == Rt;
}
function Nt(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var jt = Array.isArray;
const U = jt;
var Kt = 1 / 0, Pe = F ? F.prototype : void 0, Ee = Pe ? Pe.toString : void 0;
function We(e) {
  if (typeof e == "string")
    return e;
  if (U(e))
    return Nt(e, We) + "";
  if (me(e))
    return Ee ? Ee.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Kt ? "-0" : t;
}
function ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Mt(e) {
  return e;
}
var Vt = "[object AsyncFunction]", Dt = "[object Function]", Ht = "[object GeneratorFunction]", Gt = "[object Proxy]";
function Qt(e) {
  if (!ee(e))
    return !1;
  var t = _e(e);
  return t == Dt || t == Ht || t == Vt || t == Gt;
}
var qt = he["__core-js_shared__"];
const ae = qt;
var ke = function() {
  var e = /[^.]+$/.exec(ae && ae.keys && ae.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zt(e) {
  return !!ke && ke in e;
}
var Wt = Function.prototype, Ut = Wt.toString;
function Lt(e) {
  if (e != null) {
    try {
      return Ut.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xt = /[\\^$.*+?()[\]{}|]/g, Jt = /^\[object .+?Constructor\]$/, Yt = Function.prototype, Zt = Object.prototype, en = Yt.toString, tn = Zt.hasOwnProperty, nn = RegExp(
  "^" + en.call(tn).replace(Xt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rn(e) {
  if (!ee(e) || zt(e))
    return !1;
  var t = Qt(e) ? nn : Jt;
  return t.test(Lt(e));
}
function on(e, t) {
  return e == null ? void 0 : e[t];
}
function pe(e, t) {
  var n = on(e, t);
  return rn(n) ? n : void 0;
}
function an(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ln = 800, cn = 16, un = Date.now;
function sn(e) {
  var t = 0, n = 0;
  return function() {
    var r = un(), i = cn - (r - n);
    if (n = r, i > 0) {
      if (++t >= ln)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function fn(e) {
  return function() {
    return e;
  };
}
var dn = function() {
  try {
    var e = pe(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const te = dn;
var hn = te ? function(e, t) {
  return te(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fn(t),
    writable: !0
  });
} : Mt;
const _n = hn;
var yn = sn(_n);
const mn = yn;
var pn = 9007199254740991, gn = /^(?:0|[1-9]\d*)$/;
function Ue(e, t) {
  var n = typeof e;
  return t = t ?? pn, !!t && (n == "number" || n != "symbol" && gn.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vn(e, t, n) {
  t == "__proto__" && te ? te(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Le(e, t) {
  return e === t || e !== e && t !== t;
}
var bn = Object.prototype, Sn = bn.hasOwnProperty;
function $n(e, t, n) {
  var r = e[t];
  (!(Sn.call(e, t) && Le(r, n)) || n === void 0 && !(t in e)) && vn(e, t, n);
}
var Ce = Math.max;
function xn(e, t, n) {
  return t = Ce(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, a = Ce(r.length - t, 0), s = Array(a); ++i < a; )
      s[i] = r[t + i];
    i = -1;
    for (var l = Array(t + 1); ++i < t; )
      l[i] = r[i];
    return l[t] = n(s), an(e, this, l);
  };
}
var Pn = 9007199254740991;
function En(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pn;
}
var kn = "[object Arguments]";
function Ie(e) {
  return ye(e) && _e(e) == kn;
}
var Xe = Object.prototype, Cn = Xe.hasOwnProperty, In = Xe.propertyIsEnumerable, On = Ie(function() {
  return arguments;
}()) ? Ie : function(e) {
  return ye(e) && Cn.call(e, "callee") && !In.call(e, "callee");
};
const Je = On;
var Fn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Tn = /^\w*$/;
function Bn(e, t) {
  if (U(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || me(e) ? !0 : Tn.test(e) || !Fn.test(e) || t != null && e in Object(t);
}
var wn = pe(Object, "create");
const q = wn;
function An() {
  this.__data__ = q ? q(null) : {}, this.size = 0;
}
function Rn(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Nn = "__lodash_hash_undefined__", jn = Object.prototype, Kn = jn.hasOwnProperty;
function Mn(e) {
  var t = this.__data__;
  if (q) {
    var n = t[e];
    return n === Nn ? void 0 : n;
  }
  return Kn.call(t, e) ? t[e] : void 0;
}
var Vn = Object.prototype, Dn = Vn.hasOwnProperty;
function Hn(e) {
  var t = this.__data__;
  return q ? t[e] !== void 0 : Dn.call(t, e);
}
var Gn = "__lodash_hash_undefined__";
function Qn(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = q && t === void 0 ? Gn : t, this;
}
function T(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
T.prototype.clear = An;
T.prototype.delete = Rn;
T.prototype.get = Mn;
T.prototype.has = Hn;
T.prototype.set = Qn;
function qn() {
  this.__data__ = [], this.size = 0;
}
function re(e, t) {
  for (var n = e.length; n--; )
    if (Le(e[n][0], t))
      return n;
  return -1;
}
var zn = Array.prototype, Wn = zn.splice;
function Un(e) {
  var t = this.__data__, n = re(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Wn.call(t, n, 1), --this.size, !0;
}
function Ln(e) {
  var t = this.__data__, n = re(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Xn(e) {
  return re(this.__data__, e) > -1;
}
function Jn(e, t) {
  var n = this.__data__, r = re(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function M(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
M.prototype.clear = qn;
M.prototype.delete = Un;
M.prototype.get = Ln;
M.prototype.has = Xn;
M.prototype.set = Jn;
var Yn = pe(he, "Map");
const Zn = Yn;
function er() {
  this.size = 0, this.__data__ = {
    hash: new T(),
    map: new (Zn || M)(),
    string: new T()
  };
}
function tr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ie(e, t) {
  var n = e.__data__;
  return tr(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function nr(e) {
  var t = ie(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rr(e) {
  return ie(this, e).get(e);
}
function ir(e) {
  return ie(this, e).has(e);
}
function or(e, t) {
  var n = ie(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function A(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
A.prototype.clear = er;
A.prototype.delete = nr;
A.prototype.get = rr;
A.prototype.has = ir;
A.prototype.set = or;
var ar = "Expected a function";
function ge(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ar);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, r);
    return n.cache = a.set(i, s) || a, s;
  };
  return n.cache = new (ge.Cache || A)(), n;
}
ge.Cache = A;
var lr = 500;
function cr(e) {
  var t = ge(e, function(r) {
    return n.size === lr && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ur = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, sr = /\\(\\)?/g, fr = cr(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ur, function(n, r, i, a) {
    t.push(i ? a.replace(sr, "$1") : r || n);
  }), t;
});
const dr = fr;
function hr(e) {
  return e == null ? "" : We(e);
}
function oe(e, t) {
  return U(e) ? e : Bn(e, t) ? [e] : dr(hr(e));
}
var _r = 1 / 0;
function ve(e) {
  if (typeof e == "string" || me(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -_r ? "-0" : t;
}
function yr(e, t) {
  t = oe(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ve(t[n++])];
  return n && n == r ? e : void 0;
}
function mr(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; )
    e[i + n] = t[n];
  return e;
}
var Oe = F ? F.isConcatSpreadable : void 0;
function pr(e) {
  return U(e) || Je(e) || !!(Oe && e && e[Oe]);
}
function Ye(e, t, n, r, i) {
  var a = -1, s = e.length;
  for (n || (n = pr), i || (i = []); ++a < s; ) {
    var l = e[a];
    t > 0 && n(l) ? t > 1 ? Ye(l, t - 1, n, r, i) : mr(i, l) : r || (i[i.length] = l);
  }
  return i;
}
function gr(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ye(e, 1) : [];
}
function vr(e) {
  return mn(xn(e, void 0, gr), e + "");
}
function br(e, t) {
  return e != null && t in Object(e);
}
function Sr(e, t, n) {
  t = oe(t, e);
  for (var r = -1, i = t.length, a = !1; ++r < i; ) {
    var s = ve(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != i ? a : (i = e == null ? 0 : e.length, !!i && En(i) && Ue(s, i) && (U(e) || Je(e)));
}
function $r(e, t) {
  return e != null && Sr(e, t, br);
}
function xr(e, t, n, r) {
  if (!ee(e))
    return e;
  t = oe(t, e);
  for (var i = -1, a = t.length, s = a - 1, l = e; l != null && ++i < a; ) {
    var u = ve(t[i]), _ = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (i != s) {
      var b = l[u];
      _ = r ? r(b, u, l) : void 0, _ === void 0 && (_ = ee(b) ? b : Ue(t[i + 1]) ? [] : {});
    }
    $n(l, u, _), l = l[u];
  }
  return e;
}
function Pr(e, t, n) {
  for (var r = -1, i = t.length, a = {}; ++r < i; ) {
    var s = t[r], l = yr(e, s);
    n(l, s) && xr(a, oe(s, e), l);
  }
  return a;
}
function Er(e, t) {
  return Pr(e, t, function(n, r) {
    return $r(e, r);
  });
}
var kr = vr(function(e, t) {
  return e == null ? {} : Er(e, t);
});
const E = kr, V = {
  /** 条件后缀(两个条件间的分隔符) */
  postfix: { type: [String, Object, Function] },
  /** 字段别名(优先级高于条件对象的 key) */
  as: { type: String }
}, R = {
  // @ts-expect-error UI.props报错
  ...w.props,
  prop: { type: [String, Array] }
}, D = Object.keys(R), Ze = { ...le.props };
delete Ze.value;
const Cr = {
  ...Ze,
  ...W,
  ...V,
  ...R,
  /** 展示的字段 */
  labelKey: { type: String, default: "label" },
  /** 提交的字段 */
  valueKey: { type: String, default: "value" },
  /** 是否可过滤 */
  filterable: { type: Boolean, default: !0 },
  /** 是否可清除 */
  clearable: { type: Boolean, default: !0 },
  /** 过滤方法 */
  filterMethod: { type: Function }
}, Ir = Object.keys(le.props), Or = B({
  inheritAttrs: !1,
  name: "HSelect",
  components: {
    ElFormItem: w,
    ElSelect: le,
    ElOptionGroup: st,
    ElOption: ft
  },
  props: Cr,
  setup(e, t) {
    const n = z(e), r = p(() => E(e, D)), i = p(() => E(e, Ir)), a = S(""), s = (u) => {
      a.value = u;
    }, l = p(() => {
      const u = a.value;
      return u ? n.finalOption.value.filter(e.filterMethod.bind(null, u)) : n.finalOption.value;
    });
    return {
      ...n,
      formItemProps: r,
      selectProps: i,
      getNode: K,
      filterValue: a,
      customFilterMethod: s,
      filterSource: l
    };
  }
});
var Fr = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--select condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElSelect", e._g(e._b({
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      "filter-method": e.filterMethod && e.customFilterMethod,
      value: e.checked
    },
    on: {
      input: e.change,
      blur: function(r) {
        return e.customFilterMethod("");
      },
      change: function(r) {
        return e.customFilterMethod("");
      }
    }
  }, "ElSelect", e.selectProps, !1), e.$listeners), [e._l(e.filterSource, function(r) {
    return [r.group && r.children ? [n("ElOptionGroup", {
      key: r[e.valueKey],
      attrs: {
        label: r[e.labelKey]
      }
    }, [e._l(r.children, function(i) {
      return [n("ElOption", {
        key: i[e.valueKey],
        attrs: {
          label: i[e.labelKey],
          value: i[e.valueKey]
        }
      })];
    })], 2)] : [n("ElOption", {
      key: r[e.valueKey],
      attrs: {
        label: r[e.labelKey],
        value: r[e.valueKey]
      }
    })]];
  })], 2), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, Tr = [];
function N(e, t, n, r, i, a, s, l) {
  var u = typeof e == "function" ? e.options : e;
  t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), a && (u._scopeId = "data-v-" + a);
  var _;
  if (s ? (_ = function(f) {
    f = f || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !f && typeof __VUE_SSR_CONTEXT__ < "u" && (f = __VUE_SSR_CONTEXT__), i && i.call(this, f), f && f._registeredComponents && f._registeredComponents.add(s);
  }, u._ssrRegister = _) : i && (_ = l ? function() {
    i.call(
      this,
      (u.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), _)
    if (u.functional) {
      u._injectStyles = _;
      var b = u.render;
      u.render = function(v, $) {
        return _.call($), b(v, $);
      };
    } else {
      var h = u.beforeCreate;
      u.beforeCreate = h ? [].concat(h, _) : [_];
    }
  return {
    exports: e,
    options: u
  };
}
const Fe = {};
var Br = /* @__PURE__ */ N(
  Or,
  Fr,
  Tr,
  !1,
  wr,
  "05cee438",
  null,
  null
);
function wr(e) {
  for (let t in Fe)
    this[t] = Fe[t];
}
const Ar = /* @__PURE__ */ function() {
  return Br.exports;
}(), et = {
  maxlength: { type: [String, Number, Boolean] },
  minlength: { type: [String, Number, Boolean] },
  placeholder: { type: [String, Number, Boolean] },
  rows: { type: [String, Number, Boolean] },
  name: { type: [String, Number, Boolean] },
  max: { type: [String, Number, Boolean] },
  min: { type: [String, Number, Boolean] },
  step: { type: [String, Number, Boolean] },
  autofocus: { type: [String, Number, Boolean] }
}, Rr = {
  // @ts-expect-error UI.props报错
  ...ce.props,
  ...W,
  ...V,
  ...R,
  ...et,
  /** 是否实时触发搜索事件(当 wrapper.realtime 为 true 时, 可将该值设为 false 并设置抖动时间) */
  realtime: { type: Boolean, default: !0 },
  /** 实时触发时防抖动的时间 */
  waitTime: { type: Number, default: 300 },
  clearable: { type: Boolean, default: !0 }
}, Nr = Object.keys(ce.props).concat(Object.keys(et)), jr = B({
  inheritAttrs: !1,
  name: "HInput",
  components: {
    ElFormItem: w,
    ElInput: ce
  },
  props: Rr,
  setup(e, t) {
    const n = z(e), r = p(() => E(e, D)), i = p(() => E(e, Nr));
    let a = 0;
    function s(u) {
      const { realtime: _, waitTime: b } = e;
      if (a && clearTimeout(a), _)
        n.change(u);
      else {
        if (n.updateCheckedValue(u), !n.wrapper)
          return;
        a = setTimeout(n.wrapper.insetSearch, b);
      }
    }
    function l(u) {
      var _;
      a && clearTimeout(a), n.checked.value = u.target.value, n.option.updateWrapperQuery(), (_ = n.wrapper) == null || _.search();
    }
    return {
      ...n,
      formItemProps: r,
      inputProps: i,
      debounceChange: s,
      enterHandle: l,
      getNode: K
    };
  }
});
var Kr = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--input condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElInput", e._g(e._b({
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      value: e.checked
    },
    on: {
      input: e.debounceChange
    },
    nativeOn: {
      keydown: function(r) {
        return "keyCode" in r && e._k(r.keyCode, "enter", 13, r.key, "Enter") ? null : e.enterHandle(r);
      }
    }
  }, "ElInput", e.inputProps, !1), e.$listeners)), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, Mr = [];
const Te = {};
var Vr = /* @__PURE__ */ N(
  jr,
  Kr,
  Mr,
  !1,
  Dr,
  "06bedfc6",
  null,
  null
);
function Dr(e) {
  for (let t in Te)
    this[t] = Te[t];
}
const Hr = /* @__PURE__ */ function() {
  return Vr.exports;
}();
function tt(e) {
  var n;
  const t = { ...e.props };
  return (n = e.mixins) == null || n.forEach((r) => Object.assign(t, tt(r))), t;
}
const nt = tt(Ve), Gr = {
  ...nt,
  ...W,
  ...V,
  ...R,
  /** 日期格式化的类型 */
  valueFormat: { type: String, default: "yyyy-MM-dd" },
  /** 作为字符串时提交的的字段 - 起始字段 */
  beginField: { type: String },
  /** 作为字符串时提交的的字段 - 结束字段 */
  endField: { type: String }
}, Qr = /range$/;
function qr(e) {
  return e ? Qr.test(e) : !1;
}
const zr = Object.keys(nt), Wr = B({
  inheritAttrs: !1,
  name: "HDatepicker",
  components: {
    ElFormItem: w,
    ElDatePicker: Ve
  },
  props: Gr,
  setup(e, t) {
    const { multiple: n, fields: r, ...i } = ct(e), a = p(
      () => (
        // @ts-ignore
        e.multiple !== void 0 ? e.multiple : qr(e.type)
      )
    ), s = p(
      () => e.fields || (a.value && e.beginField && e.endField ? [e.beginField, e.endField] : void 0)
    ), l = z(Me({ ...i, multiple: a, fields: s })), u = p(() => E(e, D)), _ = p(() => E(e, zr));
    return {
      ...l,
      formItemProps: u,
      datepickerProps: _,
      isMultiple: a,
      getNode: K
    };
  }
});
var Ur = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--datepicker ${e.isMultiple && "condition-item--datepicker-range"} condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElDatePicker", e._g(e._b({
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      value: e.checked
    },
    on: {
      input: e.change
    }
  }, "ElDatePicker", e.datepickerProps, !1), e.$listeners)), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, Lr = [];
const Be = {};
var Xr = /* @__PURE__ */ N(
  Wr,
  Ur,
  Lr,
  !1,
  Jr,
  "6eeeab5a",
  null,
  null
);
function Jr(e) {
  for (let t in Be)
    this[t] = Be[t];
}
const Yr = /* @__PURE__ */ function() {
  return Xr.exports;
}(), Zr = {
  // @ts-expect-error UI.props报错
  ...ue.props,
  ...St,
  ...V,
  ...R,
  /** 展示的字段 */
  labelKey: { type: String, default: "label" },
  /** 提交的字段 */
  valueKey: { type: String, default: "value" },
  /** 是否可过滤 */
  filterable: { type: Boolean, default: !0 },
  /** 是否可清除 */
  clearable: { type: Boolean, default: !0 }
}, ei = Object.keys(ue.props), ti = B({
  inheritAttrs: !1,
  name: "HCascader",
  components: {
    ElFormItem: w,
    ElCascader: ue
  },
  props: Zr,
  setup(e, t) {
    const n = bt(e), r = p(() => E(e, D)), i = p(() => E(e, ei));
    return {
      ...n,
      formItemProps: r,
      cascaderProps: i,
      getNode: K
    };
  }
});
var ni = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--cascader condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElCascader", e._g(e._b({
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      options: e.finalOption,
      value: e.checked
    },
    on: {
      change: e.change
    }
  }, "ElCascader", e.cascaderProps, !1), e.$listeners)), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, ri = [];
const we = {};
var ii = /* @__PURE__ */ N(
  ti,
  ni,
  ri,
  !1,
  oi,
  "cdb858b6",
  null,
  null
);
function oi(e) {
  for (let t in we)
    this[t] = we[t];
}
const ai = /* @__PURE__ */ function() {
  return ii.exports;
}(), li = {
  // @ts-expect-error UI.props报错
  ...se.props,
  // ...emits2Props(ElRadio.emits),
  ...W,
  ...V,
  ...R,
  /** 展示的字段 */
  labelKey: { type: String, default: "label" },
  /** 提交的字段 */
  valueKey: { type: String, default: "value" },
  /** 按钮类型(radio|button), 默认 radio */
  type: { type: String },
  /** 选中状态是否可以被取消 */
  cancelable: { type: Boolean, default: void 0 }
}, ci = Object.keys(se.props), ui = B({
  inheritAttrs: !1,
  name: "HRadio",
  components: {
    ElFormItem: w,
    ElRadioGroup: se,
    ElRadioButton: dt,
    ElRadio: ht
  },
  props: li,
  setup(e, t) {
    const n = z(e), r = p(() => E(e, D)), i = p(() => E(e, ci)), a = S(), s = p(() => e.type === "button" ? "ElRadioButton" : "ElRadio"), l = p(() => e.cancelable ? "click" : null);
    function u(_, b, h) {
      var f;
      h(_ === b ? "" : _), (f = a.value) == null || f.$children.forEach((v) => v.$el.blur());
    }
    return {
      ...n,
      formItemProps: r,
      radioProps: i,
      radioGroupRef: a,
      radioType: s,
      eventName: l,
      customChange: u,
      getNode: K
    };
  }
});
var si = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--radio condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElRadioGroup", e._g(e._b({
    ref: "radioGroupRef",
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      value: e.checked
    },
    on: {
      input: e.change
    }
  }, "ElRadioGroup", e.radioProps, !1), e.$listeners), [e._l(e.finalOption, function(r) {
    return [n(e.radioType, {
      key: r[e.valueKey],
      tag: "component",
      attrs: {
        label: r[e.valueKey]
      },
      nativeOn: e._d({}, [e.eventName, function(i) {
        return i.preventDefault(), e.customChange(r[e.valueKey], e.checked, e.change);
      }])
    }, [e._v(" " + e._s(r[e.labelKey]) + " ")])];
  })], 2), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, fi = [];
const Ae = {};
var di = /* @__PURE__ */ N(
  ui,
  si,
  fi,
  !1,
  hi,
  "4ebde3f4",
  null,
  null
);
function hi(e) {
  for (let t in Ae)
    this[t] = Ae[t];
}
const _i = /* @__PURE__ */ function() {
  return di.exports;
}(), be = { ...De.props };
delete be.checked;
const yi = {
  ...be,
  // ...emits2Props(ElCheckbox.emits),
  ...W,
  ...V,
  ...R,
  /** 展示的字段 */
  labelKey: { type: String, default: "label" },
  /** 提交的字段 */
  valueKey: { type: String, default: "value" },
  /** 按钮类型(checkbox|button), 默认 checkbox */
  type: { type: String },
  /** 是否多选 */
  multiple: { type: Boolean, default: !0 }
}, mi = Object.keys(be), pi = B({
  inheritAttrs: !1,
  name: "HCheckbox",
  components: {
    ElFormItem: w,
    ElCheckboxGroup: _t,
    ElCheckboxButton: yt,
    ElCheckbox: De
  },
  props: yi,
  setup(e, t) {
    const n = S(), r = p(() => e.type === "button" ? "ElCheckboxButton" : "ElCheckbox"), i = z(e), a = p(() => E(e, D)), s = p(() => E(e, mi));
    return {
      ...i,
      formItemProps: a,
      checkboxProps: s,
      checkboxGroupRef: n,
      checkboxType: r,
      getNode: K
    };
  }
});
var gi = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElFormItem", e._b({
    class: `condition-item condition-item--checkbox condition-item--${e.field} condition-item--${!!e.postfix}`,
    attrs: {
      prop: e.formItemProps.prop || e.field
    }
  }, "ElFormItem", e.formItemProps, !1), [n("ElCheckboxGroup", e._g(e._b({
    ref: "checkboxGroupRef",
    staticClass: "condition-item__content",
    attrs: {
      disabled: e.insetDisabled,
      value: e.checked
    },
    on: {
      input: e.change
    }
  }, "ElCheckboxGroup", e.checkboxProps, !1), e.$listeners), [e._l(e.finalOption, function(r) {
    return [n(e.checkboxType, {
      key: r[e.valueKey],
      tag: "component",
      attrs: {
        label: r[e.valueKey]
      }
    }, [e._v(" " + e._s(r[e.labelKey]) + " ")])];
  })], 2), e.postfix ? n("div", {
    staticClass: "condition-item__postfix"
  }, [typeof e.postfix == "string" ? [e._v(e._s(e.postfix))] : [n(e.getNode(e.postfix, e.checked), {
    tag: "component"
  })]], 2) : e._e()], 1);
}, vi = [];
const Re = {};
var bi = /* @__PURE__ */ N(
  pi,
  gi,
  vi,
  !1,
  Si,
  "16a423d1",
  null,
  null
);
function Si(e) {
  for (let t in Re)
    this[t] = Re[t];
}
const $i = /* @__PURE__ */ function() {
  return bi.exports;
}(), xi = Object.keys(fe.props), Pi = {
  // @ts-expect-error Form.props 报错
  ...fe.props,
  ...vt,
  /** 数据源 */
  datum: { type: Object, default: () => ({}) },
  /** 重置时是否置为初始值 */
  resetToInitialValue: { type: Boolean },
  /** 初始是否触发一次事件来返回当前的 query */
  immediateSearch: { type: Boolean },
  /** 是否渲染搜索重置按钮 */
  renderBtn: { type: Boolean, default: !0 },
  /** 重置时触发搜索事件 */
  resetTriggerSearch: { type: Boolean },
  /** 搜索按钮文字 */
  searchText: { type: String, default: "搜索" },
  /** 重置按钮文字 */
  resetText: { type: String, default: "重置" }
}, Ei = {
  /** 搜索事件 - 触发内部 query 对象更新 */
  search: (e) => !0,
  /** query 已初始化 */
  ready: (e) => !0,
  /** 重置事件 */
  reset: (e) => !0
}, Ne = {
  select: O(Ar),
  input: O(Hr),
  datepicker: O(Yr),
  cascader: O(ai),
  radio: O(_i),
  checkbox: O($i)
}, ne = {};
function Ai(e, t) {
  ne[e] = O(t);
}
function Ri(e) {
  delete ne[e];
}
function ki(e) {
  return e ? ne[e] || Ne[e] : { ...Ne, ...ne };
}
const Ci = B({
  name: "HWrapper",
  inheritAttrs: !1,
  components: {
    ElForm: fe,
    ElButton: mt
  },
  props: Pi,
  emits: Ei,
  setup(e, t) {
    const n = p(() => E(e, xi)), r = S(), i = t.emit.bind(t, "search"), a = t.emit.bind(t, "reset"), s = gt({ ...e, search: i, reset: a });
    function l() {
      s.reset(), s.search();
    }
    return ut(() => {
      e.immediateSearch && t.emit("ready", s.getQuery());
    }), {
      ...s,
      rootProps: n,
      formRef: r,
      getComponent: ki,
      resetAndSearch: l
    };
  }
});
var Ii = function() {
  var e = this, t = e.$createElement, n = e._self._c || t;
  return n("ElForm", e._g(e._b({
    ref: "formRef",
    attrs: {
      model: e.query
    }
  }, "ElForm", e.rootProps, !1), e.$listeners), [e._l(e.datum, function(r, i) {
    return [n(e.getComponent(r.t), e._b({
      key: i,
      tag: "component",
      attrs: {
        field: r.as || i,
        resetToInitialValue: e.resetToInitialValue,
        backfill: e.backfill,
        query: e.query
      }
    }, "component", r, !1))];
  }), e._t("btn", [e.renderBtn ? [n("ElButton", {
    attrs: {
      size: e.size
    },
    on: {
      click: e.search
    }
  }, [e._v(e._s(e.searchText))]), n("ElButton", {
    attrs: {
      size: e.size
    },
    on: {
      click: function(r) {
        e.resetTriggerSearch ? e.resetAndSearch() : e.reset();
      }
    }
  }, [e._v(" " + e._s(e.resetText) + " ")])] : e._e()], {
    search: e.search,
    reset: e.reset,
    resetAndSearch: e.resetAndSearch
  })], 2);
}, Oi = [];
const je = {};
var Fi = /* @__PURE__ */ N(
  Ci,
  Ii,
  Oi,
  !1,
  Ti,
  null,
  null,
  null
);
function Ti(e) {
  for (let t in je)
    this[t] = je[t];
}
const Ni = /* @__PURE__ */ function() {
  return Fi.exports;
}();
function ji(e) {
  return Me(e);
}
export {
  ai as HCascader,
  $i as HCheckbox,
  Yr as HDatePicker,
  Hr as HInput,
  _i as HRadio,
  Ar as HSelect,
  Ni as HWrapper,
  Zr as cascaderProps,
  yi as checkboxProps,
  V as commonProps,
  Gr as datepickerProps,
  ji as defineCondition,
  be as elCheckboxProps,
  nt as elDatepickerProps,
  et as elInputInsetField,
  D as formItemPropKeys,
  R as formItemProps,
  xi as formPropKeys,
  ki as getComponent,
  Rr as inputProps,
  de as provideKey,
  li as radioProps,
  Ai as registerComponent,
  Cr as selectProps,
  Ri as unregisterComponent,
  Ei as wrapperEmits,
  Pi as wrapperProps
};
//# sourceMappingURL=index.esm.js.map
