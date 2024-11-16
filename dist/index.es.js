function Nr(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Ye = { exports: {} }, p = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function Ur() {
  if (Ot) return p;
  Ot = 1;
  var d = Symbol.for("react.element"), i = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), J = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), B = Symbol.iterator;
  function ie(r) {
    return r === null || typeof r != "object" ? null : (r = B && r[B] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var x = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, ve = {};
  function N(r, o, v) {
    this.props = r, this.context = o, this.refs = ve, this.updater = v || x;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(r, o) {
    if (typeof r != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, o, "setState");
  }, N.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function ye() {
  }
  ye.prototype = N.prototype;
  function X(r, o, v) {
    this.props = r, this.context = o, this.refs = ve, this.updater = v || x;
  }
  var Z = X.prototype = new ye();
  Z.constructor = X, q(Z, N.prototype), Z.isPureReactComponent = !0;
  var U = Array.isArray, j = Object.prototype.hasOwnProperty, $ = { current: null }, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(r, o, v) {
    var h, m = {}, S = null, R = null;
    if (o != null) for (h in o.ref !== void 0 && (R = o.ref), o.key !== void 0 && (S = "" + o.key), o) j.call(o, h) && !V.hasOwnProperty(h) && (m[h] = o[h]);
    var w = arguments.length - 2;
    if (w === 1) m.children = v;
    else if (1 < w) {
      for (var _ = Array(w), D = 0; D < w; D++) _[D] = arguments[D + 2];
      m.children = _;
    }
    if (r && r.defaultProps) for (h in w = r.defaultProps, w) m[h] === void 0 && (m[h] = w[h]);
    return { $$typeof: d, type: r, key: S, ref: R, props: m, _owner: $.current };
  }
  function he(r, o) {
    return { $$typeof: d, type: r.type, key: o, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function se(r) {
    return typeof r == "object" && r !== null && r.$$typeof === d;
  }
  function je(r) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(v) {
      return o[v];
    });
  }
  var me = /\/+/g;
  function ce(r, o) {
    return typeof r == "object" && r !== null && r.key != null ? je("" + r.key) : o.toString(36);
  }
  function ee(r, o, v, h, m) {
    var S = typeof r;
    (S === "undefined" || S === "boolean") && (r = null);
    var R = !1;
    if (r === null) R = !0;
    else switch (S) {
      case "string":
      case "number":
        R = !0;
        break;
      case "object":
        switch (r.$$typeof) {
          case d:
          case i:
            R = !0;
        }
    }
    if (R) return R = r, m = m(R), r = h === "" ? "." + ce(R, 0) : h, U(m) ? (v = "", r != null && (v = r.replace(me, "$&/") + "/"), ee(m, o, v, "", function(D) {
      return D;
    })) : m != null && (se(m) && (m = he(m, v + (!m.key || R && R.key === m.key ? "" : ("" + m.key).replace(me, "$&/") + "/") + r)), o.push(m)), 1;
    if (R = 0, h = h === "" ? "." : h + ":", U(r)) for (var w = 0; w < r.length; w++) {
      S = r[w];
      var _ = h + ce(S, w);
      R += ee(S, o, v, _, m);
    }
    else if (_ = ie(r), typeof _ == "function") for (r = _.call(r), w = 0; !(S = r.next()).done; ) S = S.value, _ = h + ce(S, w++), R += ee(S, o, v, _, m);
    else if (S === "object") throw o = String(r), Error("Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
    return R;
  }
  function L(r, o, v) {
    if (r == null) return r;
    var h = [], m = 0;
    return ee(r, h, "", "", function(S) {
      return o.call(v, S, m++);
    }), h;
  }
  function W(r) {
    if (r._status === -1) {
      var o = r._result;
      o = o(), o.then(function(v) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = v);
      }, function(v) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = v);
      }), r._status === -1 && (r._status = 0, r._result = o);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var f = { current: null }, K = { transition: null }, ge = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: K, ReactCurrentOwner: $ };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return p.Children = { map: L, forEach: function(r, o, v) {
    L(r, function() {
      o.apply(this, arguments);
    }, v);
  }, count: function(r) {
    var o = 0;
    return L(r, function() {
      o++;
    }), o;
  }, toArray: function(r) {
    return L(r, function(o) {
      return o;
    }) || [];
  }, only: function(r) {
    if (!se(r)) throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, p.Component = N, p.Fragment = k, p.Profiler = P, p.PureComponent = X, p.StrictMode = O, p.Suspense = ue, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, p.act = te, p.cloneElement = function(r, o, v) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var h = q({}, r.props), m = r.key, S = r.ref, R = r._owner;
    if (o != null) {
      if (o.ref !== void 0 && (S = o.ref, R = $.current), o.key !== void 0 && (m = "" + o.key), r.type && r.type.defaultProps) var w = r.type.defaultProps;
      for (_ in o) j.call(o, _) && !V.hasOwnProperty(_) && (h[_] = o[_] === void 0 && w !== void 0 ? w[_] : o[_]);
    }
    var _ = arguments.length - 2;
    if (_ === 1) h.children = v;
    else if (1 < _) {
      w = Array(_);
      for (var D = 0; D < _; D++) w[D] = arguments[D + 2];
      h.children = w;
    }
    return { $$typeof: d, type: r.type, key: m, ref: S, props: h, _owner: R };
  }, p.createContext = function(r) {
    return r = { $$typeof: J, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: M, _context: r }, r.Consumer = r;
  }, p.createElement = H, p.createFactory = function(r) {
    var o = H.bind(null, r);
    return o.type = r, o;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: oe, render: r };
  }, p.isValidElement = se, p.lazy = function(r) {
    return { $$typeof: z, _payload: { _status: -1, _result: r }, _init: W };
  }, p.memo = function(r, o) {
    return { $$typeof: Q, type: r, compare: o === void 0 ? null : o };
  }, p.startTransition = function(r) {
    var o = K.transition;
    K.transition = {};
    try {
      r();
    } finally {
      K.transition = o;
    }
  }, p.unstable_act = te, p.useCallback = function(r, o) {
    return f.current.useCallback(r, o);
  }, p.useContext = function(r) {
    return f.current.useContext(r);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(r) {
    return f.current.useDeferredValue(r);
  }, p.useEffect = function(r, o) {
    return f.current.useEffect(r, o);
  }, p.useId = function() {
    return f.current.useId();
  }, p.useImperativeHandle = function(r, o, v) {
    return f.current.useImperativeHandle(r, o, v);
  }, p.useInsertionEffect = function(r, o) {
    return f.current.useInsertionEffect(r, o);
  }, p.useLayoutEffect = function(r, o) {
    return f.current.useLayoutEffect(r, o);
  }, p.useMemo = function(r, o) {
    return f.current.useMemo(r, o);
  }, p.useReducer = function(r, o, v) {
    return f.current.useReducer(r, o, v);
  }, p.useRef = function(r) {
    return f.current.useRef(r);
  }, p.useState = function(r) {
    return f.current.useState(r);
  }, p.useSyncExternalStore = function(r, o, v) {
    return f.current.useSyncExternalStore(r, o, v);
  }, p.useTransition = function() {
    return f.current.useTransition();
  }, p.version = "18.3.1", p;
}
var pe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pe.exports;
var Tt;
function Vr() {
  return Tt || (Tt = 1, function(d, i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var k = "18.3.1", O = Symbol.for("react.element"), P = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ue = Symbol.for("react.provider"), Q = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), N = Symbol.iterator, ye = "@@iterator";
      function X(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = N && e[N] || e[ye];
        return typeof t == "function" ? t : null;
      }
      var Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, U = {
        transition: null
      }, j = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, $ = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, V = {}, H = null;
      function he(e) {
        H = e;
      }
      V.setExtraStackFrame = function(e) {
        H = e;
      }, V.getCurrentStack = null, V.getStackAddendum = function() {
        var e = "";
        H && (e += H);
        var t = V.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var se = !1, je = !1, me = !1, ce = !1, ee = !1, L = {
        ReactCurrentDispatcher: Z,
        ReactCurrentBatchConfig: U,
        ReactCurrentOwner: $
      };
      L.ReactDebugCurrentFrame = V, L.ReactCurrentActQueue = j;
      function W(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          K("warn", e, n);
        }
      }
      function f(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          K("error", e, n);
        }
      }
      function K(e, t, n) {
        {
          var a = L.ReactDebugCurrentFrame, u = a.getStackAddendum();
          u !== "" && (t += "%s", n = n.concat([u]));
          var c = n.map(function(s) {
            return String(s);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var ge = {};
      function te(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", u = a + "." + t;
          if (ge[u])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), ge[u] = !0;
        }
      }
      var r = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          te(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, a) {
          te(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, a) {
          te(e, "setState");
        }
      }, o = Object.assign, v = {};
      Object.freeze(v);
      function h(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || r;
      }
      h.prototype.isReactComponent = {}, h.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, h.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var m = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, S = function(e, t) {
          Object.defineProperty(h.prototype, e, {
            get: function() {
              W("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var R in m)
          m.hasOwnProperty(R) && S(R, m[R]);
      }
      function w() {
      }
      w.prototype = h.prototype;
      function _(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || r;
      }
      var D = _.prototype = new w();
      D.constructor = _, o(D, h.prototype), D.isPureReactComponent = !0;
      function It() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Mt = Array.isArray;
      function _e(e) {
        return Mt(e);
      }
      function $t(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Lt(e) {
        try {
          return ze(e), !1;
        } catch {
          return !0;
        }
      }
      function ze(e) {
        return "" + e;
      }
      function be(e) {
        if (Lt(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(e)), ze(e);
      }
      function Ft(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var u = t.displayName || t.name || "";
        return u !== "" ? n + "(" + u + ")" : n;
      }
      function Be(e) {
        return e.displayName || "Context";
      }
      function Y(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case M:
            return "Fragment";
          case P:
            return "Portal";
          case oe:
            return "Profiler";
          case J:
            return "StrictMode";
          case B:
            return "Suspense";
          case ie:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Q:
              var t = e;
              return Be(t) + ".Consumer";
            case ue:
              var n = e;
              return Be(n._context) + ".Provider";
            case z:
              return Ft(e, e.render, "ForwardRef");
            case x:
              var a = e.displayName || null;
              return a !== null ? a : Y(e.type) || "Memo";
            case q: {
              var u = e, c = u._payload, s = u._init;
              try {
                return Y(s(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fe = Object.prototype.hasOwnProperty, qe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, He, Ke, Ae;
      Ae = {};
      function Ge(e) {
        if (fe.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (fe.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function xt(e, t) {
        var n = function() {
          He || (He = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Nt(e, t) {
        var n = function() {
          Ke || (Ke = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Ut(e) {
        if (typeof e.ref == "string" && $.current && e.__self && $.current.stateNode !== e.__self) {
          var t = Y($.current.type);
          Ae[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Ae[t] = !0);
        }
      }
      var De = function(e, t, n, a, u, c, s) {
        var l = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: O,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: s,
          // Record the component responsible for creating this element.
          _owner: c
        };
        return l._store = {}, Object.defineProperty(l._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(l, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(l, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
      };
      function Vt(e, t, n) {
        var a, u = {}, c = null, s = null, l = null, y = null;
        if (t != null) {
          Ge(t) && (s = t.ref, Ut(t)), Je(t) && (be(t.key), c = "" + t.key), l = t.__self === void 0 ? null : t.__self, y = t.__source === void 0 ? null : t.__source;
          for (a in t)
            fe.call(t, a) && !qe.hasOwnProperty(a) && (u[a] = t[a]);
        }
        var g = arguments.length - 2;
        if (g === 1)
          u.children = n;
        else if (g > 1) {
          for (var b = Array(g), E = 0; E < g; E++)
            b[E] = arguments[E + 2];
          Object.freeze && Object.freeze(b), u.children = b;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (a in C)
            u[a] === void 0 && (u[a] = C[a]);
        }
        if (c || s) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && xt(u, T), s && Nt(u, T);
        }
        return De(e, c, s, l, y, $.current, u);
      }
      function Wt(e, t) {
        var n = De(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Yt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, u = o({}, e.props), c = e.key, s = e.ref, l = e._self, y = e._source, g = e._owner;
        if (t != null) {
          Ge(t) && (s = t.ref, g = $.current), Je(t) && (be(t.key), c = "" + t.key);
          var b;
          e.type && e.type.defaultProps && (b = e.type.defaultProps);
          for (a in t)
            fe.call(t, a) && !qe.hasOwnProperty(a) && (t[a] === void 0 && b !== void 0 ? u[a] = b[a] : u[a] = t[a]);
        }
        var E = arguments.length - 2;
        if (E === 1)
          u.children = n;
        else if (E > 1) {
          for (var C = Array(E), T = 0; T < E; T++)
            C[T] = arguments[T + 2];
          u.children = C;
        }
        return De(e.type, c, s, l, y, g, u);
      }
      function re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === O;
      }
      var Qe = ".", zt = ":";
      function Bt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(u) {
          return n[u];
        });
        return "$" + a;
      }
      var Xe = !1, qt = /\/+/g;
      function Ze(e) {
        return e.replace(qt, "$&/");
      }
      function Ie(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (be(e.key), Bt("" + e.key)) : t.toString(36);
      }
      function Ee(e, t, n, a, u) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var s = !1;
        if (e === null)
          s = !0;
        else
          switch (c) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case O:
                case P:
                  s = !0;
              }
          }
        if (s) {
          var l = e, y = u(l), g = a === "" ? Qe + Ie(l, 0) : a;
          if (_e(y)) {
            var b = "";
            g != null && (b = Ze(g) + "/"), Ee(y, t, b, "", function(xr) {
              return xr;
            });
          } else y != null && (re(y) && (y.key && (!l || l.key !== y.key) && be(y.key), y = Wt(
            y,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (y.key && (!l || l.key !== y.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ze("" + y.key) + "/"
            ) : "") + g
          )), t.push(y));
          return 1;
        }
        var E, C, T = 0, A = a === "" ? Qe : a + zt;
        if (_e(e))
          for (var Pe = 0; Pe < e.length; Pe++)
            E = e[Pe], C = A + Ie(E, Pe), T += Ee(E, t, n, C, u);
        else {
          var We = X(e);
          if (typeof We == "function") {
            var Ct = e;
            We === Ct.entries && (Xe || W("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xe = !0);
            for (var Lr = We.call(Ct), St, Fr = 0; !(St = Lr.next()).done; )
              E = St.value, C = A + Ie(E, Fr++), T += Ee(E, t, n, C, u);
          } else if (c === "object") {
            var kt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (kt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : kt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return T;
      }
      function Re(e, t, n) {
        if (e == null)
          return e;
        var a = [], u = 0;
        return Ee(e, a, "", "", function(c) {
          return t.call(n, c, u++);
        }), a;
      }
      function Ht(e) {
        var t = 0;
        return Re(e, function() {
          t++;
        }), t;
      }
      function Kt(e, t, n) {
        Re(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Gt(e) {
        return Re(e, function(t) {
          return t;
        }) || [];
      }
      function Jt(e) {
        if (!re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Qt(e) {
        var t = {
          $$typeof: Q,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: ue,
          _context: t
        };
        var n = !1, a = !1, u = !1;
        {
          var c = {
            $$typeof: Q,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(s) {
                t.Provider = s;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(s) {
                t._currentValue = s;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(s) {
                t._currentValue2 = s;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(s) {
                t._threadCount = s;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(s) {
                u || (W("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", s), u = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var le = -1, Me = 0, et = 1, Xt = 2;
      function Zt(e) {
        if (e._status === le) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === Me || e._status === le) {
              var s = e;
              s._status = et, s._result = c;
            }
          }, function(c) {
            if (e._status === Me || e._status === le) {
              var s = e;
              s._status = Xt, s._result = c;
            }
          }), e._status === le) {
            var a = e;
            a._status = Me, a._result = n;
          }
        }
        if (e._status === et) {
          var u = e._result;
          return u === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function er(e) {
        var t = {
          // We use these fields to store the result.
          _status: le,
          _result: e
        }, n = {
          $$typeof: q,
          _payload: t,
          _init: Zt
        };
        {
          var a, u;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function tr(e) {
        e != null && e.$$typeof === x ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: z,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      var tt;
      tt = Symbol.for("react.module.reference");
      function rt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === M || e === oe || ee || e === J || e === B || e === ie || ce || e === ve || se || je || me || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === x || e.$$typeof === ue || e.$$typeof === Q || e.$$typeof === z || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === tt || e.getModuleId !== void 0));
      }
      function rr(e, t) {
        rt(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: x,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(u) {
              a = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return n;
      }
      function I() {
        var e = Z.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function nr(e) {
        var t = I();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function ar(e) {
        var t = I();
        return t.useState(e);
      }
      function or(e, t, n) {
        var a = I();
        return a.useReducer(e, t, n);
      }
      function ur(e) {
        var t = I();
        return t.useRef(e);
      }
      function ir(e, t) {
        var n = I();
        return n.useEffect(e, t);
      }
      function sr(e, t) {
        var n = I();
        return n.useInsertionEffect(e, t);
      }
      function cr(e, t) {
        var n = I();
        return n.useLayoutEffect(e, t);
      }
      function fr(e, t) {
        var n = I();
        return n.useCallback(e, t);
      }
      function lr(e, t) {
        var n = I();
        return n.useMemo(e, t);
      }
      function dr(e, t, n) {
        var a = I();
        return a.useImperativeHandle(e, t, n);
      }
      function pr(e, t) {
        {
          var n = I();
          return n.useDebugValue(e, t);
        }
      }
      function vr() {
        var e = I();
        return e.useTransition();
      }
      function yr(e) {
        var t = I();
        return t.useDeferredValue(e);
      }
      function hr() {
        var e = I();
        return e.useId();
      }
      function mr(e, t, n) {
        var a = I();
        return a.useSyncExternalStore(e, t, n);
      }
      var de = 0, nt, at, ot, ut, it, st, ct;
      function ft() {
      }
      ft.__reactDisabledLog = !0;
      function gr() {
        {
          if (de === 0) {
            nt = console.log, at = console.info, ot = console.warn, ut = console.error, it = console.group, st = console.groupCollapsed, ct = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ft,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          de++;
        }
      }
      function _r() {
        {
          if (de--, de === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, e, {
                value: nt
              }),
              info: o({}, e, {
                value: at
              }),
              warn: o({}, e, {
                value: ot
              }),
              error: o({}, e, {
                value: ut
              }),
              group: o({}, e, {
                value: it
              }),
              groupCollapsed: o({}, e, {
                value: st
              }),
              groupEnd: o({}, e, {
                value: ct
              })
            });
          }
          de < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $e = L.ReactCurrentDispatcher, Le;
      function we(e, t, n) {
        {
          if (Le === void 0)
            try {
              throw Error();
            } catch (u) {
              var a = u.stack.trim().match(/\n( *(at )?)/);
              Le = a && a[1] || "";
            }
          return `
` + Le + e;
        }
      }
      var Fe = !1, Ce;
      {
        var br = typeof WeakMap == "function" ? WeakMap : Map;
        Ce = new br();
      }
      function lt(e, t) {
        if (!e || Fe)
          return "";
        {
          var n = Ce.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Fe = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = $e.current, $e.current = null, gr();
        try {
          if (t) {
            var s = function() {
              throw Error();
            };
            if (Object.defineProperty(s.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(s, []);
              } catch (A) {
                a = A;
              }
              Reflect.construct(e, [], s);
            } else {
              try {
                s.call();
              } catch (A) {
                a = A;
              }
              e.call(s.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (A) {
              a = A;
            }
            e();
          }
        } catch (A) {
          if (A && a && typeof A.stack == "string") {
            for (var l = A.stack.split(`
`), y = a.stack.split(`
`), g = l.length - 1, b = y.length - 1; g >= 1 && b >= 0 && l[g] !== y[b]; )
              b--;
            for (; g >= 1 && b >= 0; g--, b--)
              if (l[g] !== y[b]) {
                if (g !== 1 || b !== 1)
                  do
                    if (g--, b--, b < 0 || l[g] !== y[b]) {
                      var E = `
` + l[g].replace(" at new ", " at ");
                      return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && Ce.set(e, E), E;
                    }
                  while (g >= 1 && b >= 0);
                break;
              }
          }
        } finally {
          Fe = !1, $e.current = c, _r(), Error.prepareStackTrace = u;
        }
        var C = e ? e.displayName || e.name : "", T = C ? we(C) : "";
        return typeof e == "function" && Ce.set(e, T), T;
      }
      function Er(e, t, n) {
        return lt(e, !1);
      }
      function Rr(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Se(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return lt(e, Rr(e));
        if (typeof e == "string")
          return we(e);
        switch (e) {
          case B:
            return we("Suspense");
          case ie:
            return we("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case z:
              return Er(e.render);
            case x:
              return Se(e.type, t, n);
            case q: {
              var a = e, u = a._payload, c = a._init;
              try {
                return Se(c(u), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var dt = {}, pt = L.ReactDebugCurrentFrame;
      function ke(e) {
        if (e) {
          var t = e._owner, n = Se(e.type, e._source, t ? t.type : null);
          pt.setExtraStackFrame(n);
        } else
          pt.setExtraStackFrame(null);
      }
      function wr(e, t, n, a, u) {
        {
          var c = Function.call.bind(fe);
          for (var s in e)
            if (c(e, s)) {
              var l = void 0;
              try {
                if (typeof e[s] != "function") {
                  var y = Error((a || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw y.name = "Invariant Violation", y;
                }
                l = e[s](t, s, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (g) {
                l = g;
              }
              l && !(l instanceof Error) && (ke(u), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, s, typeof l), ke(null)), l instanceof Error && !(l.message in dt) && (dt[l.message] = !0, ke(u), f("Failed %s type: %s", n, l.message), ke(null));
            }
        }
      }
      function ne(e) {
        if (e) {
          var t = e._owner, n = Se(e.type, e._source, t ? t.type : null);
          he(n);
        } else
          he(null);
      }
      var xe;
      xe = !1;
      function vt() {
        if ($.current) {
          var e = Y($.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Cr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Sr(e) {
        return e != null ? Cr(e.__source) : "";
      }
      var yt = {};
      function kr(e) {
        var t = vt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function ht(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = kr(t);
          if (!yt[n]) {
            yt[n] = !0;
            var a = "";
            e && e._owner && e._owner !== $.current && (a = " It was passed a child from " + Y(e._owner.type) + "."), ne(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ne(null);
          }
        }
      }
      function mt(e, t) {
        if (typeof e == "object") {
          if (_e(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              re(a) && ht(a, t);
            }
          else if (re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = X(e);
            if (typeof u == "function" && u !== e.entries)
              for (var c = u.call(e), s; !(s = c.next()).done; )
                re(s.value) && ht(s.value, t);
          }
        }
      }
      function gt(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === x))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = Y(t);
            wr(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !xe) {
            xe = !0;
            var u = Y(t);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Or(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              ne(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ne(null);
              break;
            }
          }
          e.ref !== null && (ne(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
        }
      }
      function _t(e, t, n) {
        var a = rt(e);
        if (!a) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = Sr(t);
          c ? u += c : u += vt();
          var s;
          e === null ? s = "null" : _e(e) ? s = "array" : e !== void 0 && e.$$typeof === O ? (s = "<" + (Y(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, u);
        }
        var l = Vt.apply(this, arguments);
        if (l == null)
          return l;
        if (a)
          for (var y = 2; y < arguments.length; y++)
            mt(arguments[y], e);
        return e === M ? Or(l) : gt(l), l;
      }
      var bt = !1;
      function Tr(e) {
        var t = _t.bind(null, e);
        return t.type = e, bt || (bt = !0, W("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return W("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Pr(e, t, n) {
        for (var a = Yt.apply(this, arguments), u = 2; u < arguments.length; u++)
          mt(arguments[u], a.type);
        return gt(a), a;
      }
      function jr(e, t) {
        var n = U.transition;
        U.transition = {};
        var a = U.transition;
        U.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (U.transition = n, n === null && a._updatedFibers) {
            var u = a._updatedFibers.size;
            u > 10 && W("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Et = !1, Oe = null;
      function Ar(e) {
        if (Oe === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = d && d[t];
            Oe = n.call(d, "timers").setImmediate;
          } catch {
            Oe = function(u) {
              Et === !1 && (Et = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = u, c.port2.postMessage(void 0);
            };
          }
        return Oe(e);
      }
      var ae = 0, Rt = !1;
      function wt(e) {
        {
          var t = ae;
          ae++, j.current === null && (j.current = []);
          var n = j.isBatchingLegacy, a;
          try {
            if (j.isBatchingLegacy = !0, a = e(), !n && j.didScheduleLegacyUpdate) {
              var u = j.current;
              u !== null && (j.didScheduleLegacyUpdate = !1, Ve(u));
            }
          } catch (C) {
            throw Te(t), C;
          } finally {
            j.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, s = !1, l = {
              then: function(C, T) {
                s = !0, c.then(function(A) {
                  Te(t), ae === 0 ? Ne(A, C, T) : C(A);
                }, function(A) {
                  Te(t), T(A);
                });
              }
            };
            return !Rt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              s || (Rt = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), l;
          } else {
            var y = a;
            if (Te(t), ae === 0) {
              var g = j.current;
              g !== null && (Ve(g), j.current = null);
              var b = {
                then: function(C, T) {
                  j.current === null ? (j.current = [], Ne(y, C, T)) : C(y);
                }
              };
              return b;
            } else {
              var E = {
                then: function(C, T) {
                  C(y);
                }
              };
              return E;
            }
          }
        }
      }
      function Te(e) {
        e !== ae - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ae = e;
      }
      function Ne(e, t, n) {
        {
          var a = j.current;
          if (a !== null)
            try {
              Ve(a), Ar(function() {
                a.length === 0 ? (j.current = null, t(e)) : Ne(e, t, n);
              });
            } catch (u) {
              n(u);
            }
          else
            t(e);
        }
      }
      var Ue = !1;
      function Ve(e) {
        if (!Ue) {
          Ue = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(t + 1), a;
          } finally {
            Ue = !1;
          }
        }
      }
      var Dr = _t, Ir = Pr, Mr = Tr, $r = {
        map: Re,
        forEach: Kt,
        count: Ht,
        toArray: Gt,
        only: Jt
      };
      i.Children = $r, i.Component = h, i.Fragment = M, i.Profiler = oe, i.PureComponent = _, i.StrictMode = J, i.Suspense = B, i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, i.act = wt, i.cloneElement = Ir, i.createContext = Qt, i.createElement = Dr, i.createFactory = Mr, i.createRef = It, i.forwardRef = tr, i.isValidElement = re, i.lazy = er, i.memo = rr, i.startTransition = jr, i.unstable_act = wt, i.useCallback = fr, i.useContext = nr, i.useDebugValue = pr, i.useDeferredValue = yr, i.useEffect = ir, i.useId = hr, i.useImperativeHandle = dr, i.useInsertionEffect = sr, i.useLayoutEffect = cr, i.useMemo = lr, i.useReducer = or, i.useRef = ur, i.useState = ar, i.useSyncExternalStore = mr, i.useTransition = vr, i.version = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pe, pe.exports)), pe.exports;
}
process.env.NODE_ENV === "production" ? Ye.exports = Ur() : Ye.exports = Vr();
var F = Ye.exports;
const G = /* @__PURE__ */ Nr(F), Pt = (d) => d == null || localStorage.getItem(d) === null ? null : JSON.parse(localStorage.getItem(d)), Wr = (d, i) => {
  i == null && localStorage.removeItem(d), localStorage.setItem(d, JSON.stringify(i));
}, jt = F.createContext({
  isDarkMode: !1,
  toggleDarkMode: () => {
  }
}), zr = ({ children: d }) => {
  const [i, k] = F.useState(Pt("darkMode") ?? !1);
  F.useEffect(() => {
    if (Pt("darkMode") === null) {
      const P = window.matchMedia("(prefers-color-scheme: dark)").matches;
      k(P);
    }
  }, []), F.useEffect(() => {
    i ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [i]);
  const O = () => {
    k((P) => (Wr("darkMode", !P), !P));
  };
  return G.createElement(jt.Provider, { value: { isDarkMode: i, toggleDarkMode: O } }, d);
}, Yr = () => {
  const { isDarkMode: d, toggleDarkMode: i } = F.useContext(jt);
  return { isDarkMode: d, toggleDarkMode: i };
}, Br = () => {
  const { isDarkMode: d, toggleDarkMode: i } = Yr();
  return G.createElement(
    "div",
    { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
    G.createElement("span", { className: "dark-mode-label" }, d ? "Dark" : "Light"),
    G.createElement(
      "label",
      { className: "switch" },
      G.createElement("input", { type: "checkbox", checked: d, onChange: i }),
      G.createElement("span", { className: "slider" })
    )
  );
}, At = F.createContext({
  isMobile: !1
}), qr = ({ children: d }) => {
  const [i, k] = F.useState(window.innerWidth <= 768);
  return F.useEffect(() => {
    const O = () => {
      k(window.innerWidth <= 768);
    };
    return window.addEventListener("resize", O), () => window.removeEventListener("resize", O);
  }, []), G.createElement(At.Provider, { value: { isMobile: i } }, d);
}, Hr = () => {
  const { isMobile: d } = F.useContext(At);
  return { isMobile: d };
}, Kr = async (d) => {
  const i = await fetch(d, {
    method: "GET"
  });
  if (i.status !== 200)
    throw Error("fetching failed");
  try {
    return await i.json();
  } catch {
    return i;
  }
}, Gr = async ({ method: d, url: i, body: k, params: O }) => {
  const P = await fetch(O ? Dt(i, O) : i, {
    method: d,
    // check if needed
    body: typeof k == "string" ? k : JSON.stringify(k)
  });
  if (P.status !== 200)
    throw Error("fetching failed");
  try {
    return await P.json();
  } catch {
    return P;
  }
}, Jr = async ({ method: d, url: i, body: k, params: O, headers: P }) => {
  const M = await fetch(O ? Dt(i, O) : i, {
    method: d,
    // check if needed
    body: typeof k == "string" ? k : JSON.stringify(k),
    headers: P
  });
  if (M.status !== 200)
    throw Error("fetching failed");
  try {
    return await M.json();
  } catch {
    return M;
  }
}, Dt = (d, i) => {
  let k = d;
  return Object.entries(i).map(([O, P], M) => {
    M === 0 ? k += `?${O}=${P}` : k += `&${O}=${P}`;
  }), k;
};
export {
  zr as DarkModeProvider,
  qr as MobileProvider,
  Br as ThemeToggle,
  Pt as getLocalStorageItem,
  Jr as sendHeadRequest,
  Gr as sendRequest,
  Wr as setLocalStorageItem,
  Kr as simpleRequest,
  Yr as useDarkMode,
  Hr as useMobile
};
//# sourceMappingURL=index.es.js.map
