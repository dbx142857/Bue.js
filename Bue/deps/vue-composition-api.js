/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? n(exports, require("vue")) : "function" == typeof define && define.amd ? define(["exports", "vue"], n) : n((e = "undefined" != typeof globalThis ? globalThis : e || self).VueCompositionAPI = {}, e.Vue) }(this, (function (e, n) {
    "use strict"; function t(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } } var r = t(n); function o(e) { return "function" == typeof e && /native code/.test(e.toString()) } var i = "undefined" != typeof Symbol && o(Symbol) && "undefined" != typeof Reflect && o(Reflect.ownKeys), u = function (e) { return e }, a = { enumerable: !0, configurable: !0, get: u, set: u }; function f(e, n, t) { var r = t.get, o = t.set; a.get = r || u, a.set = o || u, Object.defineProperty(e, n, a) } function c(e, n, t, r) { Object.defineProperty(e, n, { value: t, enumerable: !!r, writable: !0, configurable: !0 }) } function l(e, n) { return Object.hasOwnProperty.call(e, n) } function s(e) { return Array.isArray(e) } function v(e) { var n = parseFloat(String(e)); return n >= 0 && Math.floor(n) === n && isFinite(e) } function d(e) { return "[object Object]" === function (e) { return Object.prototype.toString.call(e) }(e) } function p(e) { return "function" == typeof e } function y(e, n) { r.default.util.warn(e, n) } var _ = void 0; try { var b = require("vue"); b && j(b) ? _ = b : b && "default" in b && j(b.default) && (_ = b.default) } catch (e) { } var h, g = null, m = null, w = "__composition_api_installed__"; function j(e) { return e && "function" == typeof e && "Vue" === e.name } function O() { return g } function $() { return m } function k(e) { m = e } function x(e) { return $() } function S(e, n) { void 0 === n && (n = {}); var t = e.config.silent; e.config.silent = !0; var r = new e(n); return e.config.silent = t, r } function R(e, n) { return function () { for (var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r]; return e.$scopedSlots[n] ? e.$scopedSlots[n].apply(e, t) : y("slots." + n + '() got called outside of the "render()" scope', e) } } var A = function () { return (A = Object.assign || function (e) { for (var n, t = 1, r = arguments.length; t < r; t++)for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]); return e }).apply(this, arguments) };
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */function E(e) { var n = "function" == typeof Symbol && Symbol.iterator, t = n && e[n], r = 0; if (t) return t.call(e); if (e && "number" == typeof e.length) return { next: function () { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e } } }; throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.") } function P(e, n) { var t = "function" == typeof Symbol && e[Symbol.iterator]; if (!t) return e; var r, o, i = t.call(e), u = []; try { for (; (void 0 === n || n-- > 0) && !(r = i.next()).done;)u.push(r.value) } catch (e) { o = { error: e } } finally { try { r && !r.done && (t = i.return) && t.call(i) } finally { if (o) throw o.error } } return u } function C() { for (var e = [], n = 0; n < arguments.length; n++)e = e.concat(P(arguments[n])); return e } function M(e) { return i ? Symbol.for(e) : e } var D = M("composition-api.preFlushQueue"), V = M("composition-api.postFlushQueue"), B = "composition-api.refKey", U = new WeakMap, T = new WeakMap, W = new WeakMap, z = function (e) { f(this, "value", { get: e.get, set: e.set }) }; function F(e, n) { var t = new z(e), r = Object.seal(t); return W.set(r, !0), r } function I(e) { var n; if (K(e)) return e; var t = ee(((n = {})[B] = e, n)); return F({ get: function () { return t[B] }, set: function (e) { return t[B] = e } }) } function K(e) { return e instanceof z } function q(e) { return K(e) ? e.value : e } function Q(e) { if (!d(e)) return e; var n = {}; for (var t in e) n[t] = J(e, t); return n } function J(e, n) { var t = e[n]; return K(t) ? t : F({ get: function () { return e[n] }, set: function (t) { return e[n] = t } }) } function N(e) { var n; return Boolean((null == e ? void 0 : e.__ob__) && (null === (n = e.__ob__) || void 0 === n ? void 0 : n.__raw__)) } function G(e) { var n; return Boolean((null == e ? void 0 : e.__ob__) && !(null === (n = e.__ob__) || void 0 === n ? void 0 : n.__raw__)) } function H(e) { if (!(!d(e) || N(e) || Array.isArray(e) || K(e) || function (e) { var n = O(); return n && e instanceof n }(e) || U.has(e))) { U.set(e, !0); for (var n = Object.keys(e), t = 0; t < n.length; t++)L(e, n[t]) } } function L(e, n, t) { if ("__ob__" !== n && !N(e[n])) { var r, o, i = Object.getOwnPropertyDescriptor(e, n); if (i) { if (!1 === i.configurable) return; r = i.get, o = i.set, r && !o || 2 !== arguments.length || (t = e[n]) } H(t), Object.defineProperty(e, n, { enumerable: !0, configurable: !0, get: function () { var o = r ? r.call(e) : t; return n !== B && K(o) ? o.value : o }, set: function (i) { if (!r || o) { var u = r ? r.call(e) : t; n !== B && K(u) && !K(i) ? u.value = i : o ? o.call(e, i) : t = i, H(i) } } }) } } function X(e) { var n, t = g || _; t.observable ? n = t.observable(e) : n = S(t, { data: { $$state: e } })._data.$$state; return l(n, "__ob__") || c(n, "__ob__", function (e) { void 0 === e && (e = {}); return { value: e, dep: { notify: u, depend: u, addSub: u, removeSub: u } } }(n)), n } function Y() { return X({}).__ob__ } function Z(e) { var n, t; if (!d(e) && !s(e) || N(e) || !Object.isExtensible(e)) return e; var r = X({}); H(r); var o = r.__ob__, i = function (n) { var t, i, a = e[n], f = Object.getOwnPropertyDescriptor(e, n); if (f) { if (!1 === f.configurable) return "continue"; t = f.get, i = f.set, t && !i || 2 !== u.length || (a = e[n]) } Object.defineProperty(r, n, { enumerable: !0, configurable: !0, get: function () { var n, r = t ? t.call(e) : a; return null === (n = o.dep) || void 0 === n || n.depend(), r }, set: function (n) { var r; t && !i || (i ? i.call(e, n) : a = n, null === (r = o.dep) || void 0 === r || r.notify()) } }) }, u = arguments; try { for (var a = E(Object.keys(e)), f = a.next(); !f.done; f = a.next()) { var c = f.value; i(c) } } catch (e) { n = { error: e } } finally { try { f && !f.done && (t = a.return) && t.call(a) } finally { if (n) throw n.error } } return r } function ee(e) { if (!d(e) && !s(e) || N(e) || !Object.isExtensible(e)) return e; var n = X(e); return H(n), n } function ne(e) { return function (n) { var t, r = x(((t = e)[0].toUpperCase(), t.slice(1))); r && function (e, n, t, r) { var o = n.$options, i = e.config.optionMergeStrategies[t]; o[t] = i(o[t], function (e, n) { return function () { for (var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r]; var o = $(); k(e); try { return n.apply(void 0, C(t)) } finally { k(o) } } }(n, r)) }(O(), r, e, n) } } var te, re = ne("beforeMount"), oe = ne("mounted"), ie = ne("beforeUpdate"), ue = ne("updated"), ae = ne("beforeDestroy"), fe = ne("destroyed"), ce = ne("errorCaptured"), le = ne("activated"), se = ne("deactivated"), ve = ne("serverPrefetch"); function de() { _e(this, D) } function pe() { _e(this, V) } function ye() { var e = $(); return e ? function (e) { return void 0 !== e[D] }(e) || function (e) { e[D] = [], e[V] = [], e.$on("hook:beforeUpdate", de), e.$on("hook:updated", pe) }(e) : (te || (te = S(O())), e = te), e } function _e(e, n) { for (var t = e[n], r = 0; r < t.length; r++)t[r](); t.length = 0 } function be(e, n, t) { var r = function () { e.$nextTick((function () { e[D].length && _e(e, D), e[V].length && _e(e, V) })) }; switch (t) { case "pre": r(), e[D].push(n); break; case "post": r(), e[V].push(n); break; default: !function (e, n) { if (!e) throw new Error("[vue-composition-api] " + n) }(!1, 'flush must be one of ["post", "pre", "sync"], but got ' + t) } } function he(e, n) { var t = e.teardown; e.teardown = function () { for (var r = [], o = 0; o < arguments.length; o++)r[o] = arguments[o]; t.apply(e, r), n() } } function ge(e, n, t, r) { var o, i, a = r.flush, f = "sync" === a, c = function (e) { i = function () { try { e() } catch (e) { !function (e, n, t) { if ("undefined" == typeof window || "undefined" == typeof console) throw e; console.error(e) }(e) } } }, l = function () { i && (i(), i = null) }, s = function (n) { return f || e === te ? n : function () { for (var t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r]; return be(e, (function () { n.apply(void 0, C(t)) }), a) } }; if (null === t) { var v = !1, d = function (e, n, t, r) { var o = e._watchers.length; return e.$watch(n, t, { immediate: r.immediateInvokeCallback, deep: r.deep, lazy: r.noRun, sync: r.sync, before: r.before }), e._watchers[o] }(e, (function () { if (!v) try { v = !0, n(c) } finally { v = !1 } }), u, { deep: r.deep || !1, sync: f, before: l }); he(d, l), d.lazy = !1; var _ = d.get.bind(d); return d.get = s(_), function () { d.teardown() } } var b, h = r.deep; Array.isArray(n) ? b = function () { return n.map((function (e) { return K(e) ? e.value : e() })) } : K(n) ? b = function () { return n.value } : G(n) ? (b = function () { return n }, h = !0) : p(n) ? b = n : (b = u, y("Invalid watch source: " + JSON.stringify(n) + ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.", e)); var g = function (e, n) { l(), t(e, n, c) }, m = s(g); if (r.immediate) { var w = m, j = function (e, n) { j = w, g(e, n) }; m = function (e, n) { j(e, n) } } var O = e.$watch(b, m, { immediate: r.immediate, deep: h, sync: f }), $ = e._watchers[e._watchers.length - 1]; return G($.value) && (null === (o = $.value.__ob__) || void 0 === o ? void 0 : o.dep) && h && $.value.__ob__.dep.addSub({ update: function () { $.run() } }), he($, l), function () { O() } } var me = {}; var we = {}; var je; var Oe = { set: function (e, n, t) { (e.__composition_api_state__ = e.__composition_api_state__ || {})[n] = t }, get: function (e, n) { return (e.__composition_api_state__ || {})[n] } }; function $e(e) { var n = Oe.get(e, "rawBindings") || {}; if (n && Object.keys(n).length) { for (var t = e.$refs, r = Oe.get(e, "refs") || [], o = 0; o < r.length; o++) { var i = n[f = r[o]]; !t[f] && i && K(i) && (i.value = null) } var u = Object.keys(t), a = []; for (o = 0; o < u.length; o++) { var f; i = n[f = u[o]]; t[f] && i && K(i) && (i.value = t[f], a.push(f)) } Oe.set(e, "refs", a) } } function ke(e, n) { var t = e.$options._parentVnode; if (t) { for (var r = Oe.get(e, "slots") || [], o = function (e, n) { var t; if (e) { if (e._normalized) return e._normalized; for (var r in t = {}, e) e[r] && "$" !== r[0] && (t[r] = !0) } else t = {}; for (var r in n) r in t || (t[r] = !0); return t }(t.data.scopedSlots, e.$slots), i = 0; i < r.length; i++) { o[a = r[i]] || delete n[a] } var u = Object.keys(o); for (i = 0; i < u.length; i++) { var a; n[a = u[i]] || (n[a] = R(e, a)) } Oe.set(e, "slots", u) } } function xe(e, n, t) { var r = $(); k(e); try { return n(e) } catch (e) { if (!t) throw e; t(e) } finally { k(r) } } function Se(e) { function n(e) { if (d(e) && !K(e) && !G(e) && !N(e)) { var t = O().util.defineReactive; Object.keys(e).forEach((function (r) { var o = e[r]; t(e, r, o), o && n(o) })) } } function t(e, n) { return void 0 === n && (n = new Map), n.has(e) ? n.get(e) : (n.set(e, !1), Array.isArray(e) && G(e) ? (n.set(e, !0), !0) : !(!d(e) || N(e)) && Object.keys(e).some((function (r) { return t(e[r], n) }))) } e.mixin({ beforeCreate: function () { var e = this, r = e.$options, o = r.setup, i = r.render; i && (r.render = function () { for (var n = this, t = [], r = 0; r < arguments.length; r++)t[r] = arguments[r]; return xe(e, (function () { return i.apply(n, t) })) }); if (!o) return; if ("function" != typeof o) return; var u = r.data; r.data = function () { return function (e, r) { void 0 === r && (r = {}); var o, i = e.$options.setup, u = function (e) { var n = { slots: {} }, t = ["emit"]; return ["root", "parent", "refs", "attrs", "listeners", "isServer", "ssrContext"].forEach((function (t) { var r, o, i; Array.isArray(t) ? (r = P(t, 2), o = r[0], i = r[1]) : o = i = t, i = "$" + i, f(n, o, { get: function () { return e[i] }, set: function () { y("Cannot assign to '" + o + "' because it is a read-only property", e) } }) })), t.forEach((function (t) { var r = "$" + t; f(n, t, { get: function () { return function () { for (var n = [], t = 0; t < arguments.length; t++)n[t] = arguments[t]; e[r].apply(e, n) } } }) })), n }(e); if (c(r, "__ob__", Y()), ke(e, u.slots), xe(e, (function () { o = i(r, u) })), !o) return; if (p(o)) { var a = o; return void (e.$options.render = function () { return ke(e, u.slots), xe(e, (function () { return a() })) }) } if (d(o)) { G(o) && (o = Q(o)), Oe.set(e, "rawBindings", o); var v = o; Object.keys(v).forEach((function (r) { var o, i = v[r]; K(i) || (G(i) ? s(i) && (i = I(i)) : p(i) ? i = i.bind(e) : null === (o = i) || "object" != typeof o ? i = I(i) : t(i) && n(i)), function (e, n, t) { var r = e.$options.props; n in e || r && l(r, n) || (K(t) ? f(e, n, { get: function () { return t.value }, set: function (e) { t.value = e } }) : e[n] = t) }(e, r, i) })) } }(e, e.$props), "function" == typeof u ? u.call(e, e) : u || {} } }, mounted: function () { $e(this) }, updated: function () { $e(this) } }) } function Re(e, n) { if (!e) return n; if (!n) return e; for (var t, r, o, u = i ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < u.length; a++)"__ob__" !== (t = u[a]) && (r = n[t], o = e[t], l(n, t) ? r !== o && d(r) && !K(r) && d(o) && !K(o) && Re(o, r) : n[t] = o); return n } function Ae(e) { (function (e) { return l(e, w) })(e) || (e.config.optionMergeStrategies.setup = function (e, n) { return function (t, r) { return Re("function" == typeof e ? e(t, r) || {} : void 0, "function" == typeof n ? n(t, r) || {} : void 0) } }, function (e) { g = e, Object.defineProperty(e, w, { configurable: !0, writable: !0, value: !0 }) }(e), Se(e)) } var Ee = { install: function (e) { return Ae(e) } }; "undefined" != typeof window && window.Vue && window.Vue.use(Ee), e.computed = function (e) { var n, t, r, o, i = $(); if ("function" == typeof e ? n = e : (n = e.get, t = e.set), i && !i.$isServer) { var a, f = function () { if (!h) { var e = S(O(), { computed: { value: function () { return 0 } } }), n = e._computedWatchers.value.constructor, t = e._data.__ob__.dep.constructor; h = { Watcher: n, Dep: t }, e.$destroy() } return h }(), c = f.Watcher, l = f.Dep; o = function () { return a || (a = new c(i, n, u, { lazy: !0 })), a.dirty && a.evaluate(), l.target && a.depend(), a.value }, r = function (e) { t && t(e) } } else { var s = S(O(), { computed: { $$state: { get: n, set: t } } }); i && i.$on("hook:destroyed", (function () { return s.$destroy() })), o = function () { return s.$$state }, r = function (e) { s.$$state = e } } return F({ get: o, set: r }) }, e.createApp = function (e, n) { void 0 === n && (n = void 0); var t = O(), r = void 0; return { config: t.config, use: t.use.bind(t), mixin: t.mixin.bind(t), component: t.component.bind(t), directive: t.directive.bind(t), mount: function (o, i) { return r || ((r = new t(A({ propsData: n }, e))).$mount(o, i), r) }, unmount: function () { r && (r.$destroy(), r = void 0) } } }, e.customRef = function (e) { var n = I(0); return F(e((function () { n.value }), (function () { ++n.value }))) }, e.default = Ee, e.defineComponent = function (e) { return e }, e.del = function (e, n) { if (O().util.warn, Array.isArray(e) && v(n)) e.splice(n, 1); else { var t = e.__ob__; e._isVue || t && t.vmCount || l(e, n) && (delete e[n], t && t.dep.notify()) } }, e.getCurrentInstance = $, e.h = function () { for (var e = [], n = 0; n < arguments.length; n++)e[n] = arguments[n]; var t = $(); return t ? t.$createElement.apply(t, e) : (y("`createElement()` has been called outside of render function."), je || (je = S(O()).$createElement), je.apply(je, e)) }, e.inject = function (e, n, t) { if (void 0 === t && (t = !1), !e) return n; var r = $(); if (r) { var o = function (e, n) { for (var t = n; t;) { if (t._provided && l(t._provided, e)) return t._provided[e]; t = t.$parent } return me }(e, r); return o !== me ? o : t && p(n) ? n() : n } y("inject() can only be used inside setup() or functional components.") }, e.isRaw = N, e.isReactive = G, e.isReadonly = function (e) { return W.has(e) }, e.isRef = K, e.markRaw = function (e) { if (!d(e) && !s(e) || !Object.isExtensible(e)) return e; var n = Y(); return n.__raw__ = !0, c(e, "__ob__", n), T.set(e, !0), e }, e.nextTick = function () { for (var e, n = [], t = 0; t < arguments.length; t++)n[t] = arguments[t]; return null === (e = O()) || void 0 === e ? void 0 : e.nextTick.apply(this, n) }, e.onActivated = le, e.onBeforeMount = re, e.onBeforeUnmount = ae, e.onBeforeUpdate = ie, e.onDeactivated = se, e.onErrorCaptured = ce, e.onMounted = oe, e.onServerPrefetch = ve, e.onUnmounted = fe, e.onUpdated = ue, e.provide = function (e, n) { var t = x(); if (t) { if (!t._provided) { var r = {}; Object.defineProperty(t, "_provided", { get: function () { return r }, set: function (e) { return Object.assign(r, e) } }) } t._provided[e] = n } }, e.proxyRefs = function (e) { var n, t, r; if (G(e)) return e; var o = ee(((n = {})[B] = e, n)), i = function (e) { f(o, e, { get: function () { return K(o[e]) ? o[e].value : o[e] }, set: function (n) { if (K(o[e])) return o[e].value = q(n); o[e] = q(n) } }) }; try { for (var u = E(Object.keys(e)), a = u.next(); !a.done; a = u.next()) { i(a.value) } } catch (e) { t = { error: e } } finally { try { a && !a.done && (r = u.return) && r.call(u) } finally { if (t) throw t.error } } return o }, e.reactive = ee, e.ref = I, e.set = function (e, n, t) { var r = O().util, o = (r.warn, r.defineReactive); if (s(e) && v(n)) return e.length = Math.max(e.length, n), e.splice(n, 1, t), t; if (n in e && !(n in Object.prototype)) return e[n] = t, t; var i = e.__ob__; return e._isVue || i && i.vmCount ? t : i ? (o(i.value, n, t), L(e, n, t), i.dep.notify(), t) : (e[n] = t, t) }, e.shallowReactive = Z, e.shallowReadonly = function (e) { var n, t; if (!d(e) && !s(e) || !Object.isExtensible(e)) return e; var r = {}, o = ee({}), i = o.__ob__, u = function (n) { var t, o = e[n], u = void 0, f = Object.getOwnPropertyDescriptor(e, n); if (f) { if (!1 === f.configurable) return "continue"; t = f.get, u = f.set, t && !u || 2 !== a.length || (o = e[n]) } Object.defineProperty(r, n, { enumerable: !0, configurable: !0, get: function () { var n = t ? t.call(e) : o; return i.dep.depend(), n }, set: function (e) { } }) }, a = arguments; try { for (var f = E(Object.keys(e)), c = f.next(); !c.done; c = f.next()) { var l = c.value; u(l) } } catch (e) { n = { error: e } } finally { try { c && !c.done && (t = f.return) && t.call(f) } finally { if (n) throw n.error } } return W.set(r, !0), r }, e.shallowRef = function (e) { var n; if (K(e)) return e; var t = Z(((n = {})[B] = e, n)); return F({ get: function () { return t[B] }, set: function (e) { return t[B] = e } }) }, e.toRaw = function (e) { var n, t; return N(e) || !Object.isExtensible(e) ? e : (null === (t = null === (n = e) || void 0 === n ? void 0 : n.__ob__) || void 0 === t ? void 0 : t.value) || e }, e.toRef = J, e.toRefs = Q, e.triggerRef = function (e) { K(e) && (e.value = e.value) }, e.unref = q, e.useCSSModule = function (e) { void 0 === e && (e = "$style"); var n = $(); if (!n) return we; var t = n[e]; return t || we }, e.version = "1.0.0-beta.20", e.warn = function (e) { y(e, $()) }, e.watch = function (e, n, t) { var r = null; "function" == typeof n ? r = n : (t = n, r = null); var o = function (e) { return A({ immediate: !1, deep: !1, flush: "pre" }, e) }(t); return ge(ye(), e, r, o) }, e.watchEffect = function (e, n) { var t = function (e) { return A({ immediate: !0, deep: !1, flush: "pre" }, e) }(n); return ge(ye(), e, null, t) }, Object.defineProperty(e, "__esModule", { value: !0 })
}));