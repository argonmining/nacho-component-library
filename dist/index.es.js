function Ft(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var We = { exports: {} }, d = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function Mt() {
  if (Or) return d;
  Or = 1;
  var S = Symbol.for("react.element"), l = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), le = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), ee = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), H = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), V = Symbol.iterator;
  function ne(t) {
    return t === null || typeof t != "object" ? null : (t = V && t[V] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var I = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, U = Object.assign, de = {};
  function $(t, o, p) {
    this.props = t, this.context = o, this.refs = de, this.updater = p || I;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, o, "setState");
  }, $.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function pe() {
  }
  pe.prototype = $.prototype;
  function q(t, o, p) {
    this.props = t, this.context = o, this.refs = de, this.updater = p || I;
  }
  var K = q.prototype = new pe();
  K.constructor = q, U(K, $.prototype), K.isPureReactComponent = !0;
  var F = Array.isArray, O = Object.prototype.hasOwnProperty, A = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(t, o, p) {
    var y, h = {}, w = null, E = null;
    if (o != null) for (y in o.ref !== void 0 && (E = o.ref), o.key !== void 0 && (w = "" + o.key), o) O.call(o, y) && !M.hasOwnProperty(y) && (h[y] = o[y]);
    var R = arguments.length - 2;
    if (R === 1) h.children = p;
    else if (1 < R) {
      for (var g = Array(R), P = 0; P < R; P++) g[P] = arguments[P + 2];
      h.children = g;
    }
    if (t && t.defaultProps) for (y in R = t.defaultProps, R) h[y] === void 0 && (h[y] = R[y]);
    return { $$typeof: S, type: t, key: w, ref: E, props: h, _owner: A.current };
  }
  function ve(t, o) {
    return { $$typeof: S, type: t.type, key: o, ref: t.ref, props: t.props, _owner: t._owner };
  }
  function ae(t) {
    return typeof t == "object" && t !== null && t.$$typeof === S;
  }
  function Pe(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(p) {
      return o[p];
    });
  }
  var ye = /\/+/g;
  function oe(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? Pe("" + t.key) : o.toString(36);
  }
  function G(t, o, p, y, h) {
    var w = typeof t;
    (w === "undefined" || w === "boolean") && (t = null);
    var E = !1;
    if (t === null) E = !0;
    else switch (w) {
      case "string":
      case "number":
        E = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case S:
          case l:
            E = !0;
        }
    }
    if (E) return E = t, h = h(E), t = y === "" ? "." + oe(E, 0) : y, F(h) ? (p = "", t != null && (p = t.replace(ye, "$&/") + "/"), G(h, o, p, "", function(P) {
      return P;
    })) : h != null && (ae(h) && (h = ve(h, p + (!h.key || E && E.key === h.key ? "" : ("" + h.key).replace(ye, "$&/") + "/") + t)), o.push(h)), 1;
    if (E = 0, y = y === "" ? "." : y + ":", F(t)) for (var R = 0; R < t.length; R++) {
      w = t[R];
      var g = y + oe(w, R);
      E += G(w, o, p, g, h);
    }
    else if (g = ne(t), typeof g == "function") for (t = g.call(t), R = 0; !(w = t.next()).done; ) w = w.value, g = y + oe(w, R++), E += G(w, o, p, g, h);
    else if (w === "object") throw o = String(t), Error("Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
    return E;
  }
  function D(t, o, p) {
    if (t == null) return t;
    var y = [], h = 0;
    return G(t, y, "", "", function(w) {
      return o.call(p, w, h++);
    }), y;
  }
  function L(t) {
    if (t._status === -1) {
      var o = t._result;
      o = o(), o.then(function(p) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = p);
      }, function(p) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = p);
      }), t._status === -1 && (t._status = 0, t._result = o);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var c = { current: null }, Y = { transition: null }, he = { ReactCurrentDispatcher: c, ReactCurrentBatchConfig: Y, ReactCurrentOwner: A };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return d.Children = { map: D, forEach: function(t, o, p) {
    D(t, function() {
      o.apply(this, arguments);
    }, p);
  }, count: function(t) {
    var o = 0;
    return D(t, function() {
      o++;
    }), o;
  }, toArray: function(t) {
    return D(t, function(o) {
      return o;
    }) || [];
  }, only: function(t) {
    if (!ae(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } }, d.Component = $, d.Fragment = Te, d.Profiler = le, d.PureComponent = q, d.StrictMode = z, d.Suspense = te, d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, d.act = Q, d.cloneElement = function(t, o, p) {
    if (t == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var y = U({}, t.props), h = t.key, w = t.ref, E = t._owner;
    if (o != null) {
      if (o.ref !== void 0 && (w = o.ref, E = A.current), o.key !== void 0 && (h = "" + o.key), t.type && t.type.defaultProps) var R = t.type.defaultProps;
      for (g in o) O.call(o, g) && !M.hasOwnProperty(g) && (y[g] = o[g] === void 0 && R !== void 0 ? R[g] : o[g]);
    }
    var g = arguments.length - 2;
    if (g === 1) y.children = p;
    else if (1 < g) {
      R = Array(g);
      for (var P = 0; P < g; P++) R[P] = arguments[P + 2];
      y.children = R;
    }
    return { $$typeof: S, type: t.type, key: h, ref: w, props: y, _owner: E };
  }, d.createContext = function(t) {
    return t = { $$typeof: ee, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: B, _context: t }, t.Consumer = t;
  }, d.createElement = W, d.createFactory = function(t) {
    var o = W.bind(null, t);
    return o.type = t, o;
  }, d.createRef = function() {
    return { current: null };
  }, d.forwardRef = function(t) {
    return { $$typeof: re, render: t };
  }, d.isValidElement = ae, d.lazy = function(t) {
    return { $$typeof: N, _payload: { _status: -1, _result: t }, _init: L };
  }, d.memo = function(t, o) {
    return { $$typeof: H, type: t, compare: o === void 0 ? null : o };
  }, d.startTransition = function(t) {
    var o = Y.transition;
    Y.transition = {};
    try {
      t();
    } finally {
      Y.transition = o;
    }
  }, d.unstable_act = Q, d.useCallback = function(t, o) {
    return c.current.useCallback(t, o);
  }, d.useContext = function(t) {
    return c.current.useContext(t);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(t) {
    return c.current.useDeferredValue(t);
  }, d.useEffect = function(t, o) {
    return c.current.useEffect(t, o);
  }, d.useId = function() {
    return c.current.useId();
  }, d.useImperativeHandle = function(t, o, p) {
    return c.current.useImperativeHandle(t, o, p);
  }, d.useInsertionEffect = function(t, o) {
    return c.current.useInsertionEffect(t, o);
  }, d.useLayoutEffect = function(t, o) {
    return c.current.useLayoutEffect(t, o);
  }, d.useMemo = function(t, o) {
    return c.current.useMemo(t, o);
  }, d.useReducer = function(t, o, p) {
    return c.current.useReducer(t, o, p);
  }, d.useRef = function(t) {
    return c.current.useRef(t);
  }, d.useState = function(t) {
    return c.current.useState(t);
  }, d.useSyncExternalStore = function(t, o, p) {
    return c.current.useSyncExternalStore(t, o, p);
  }, d.useTransition = function() {
    return c.current.useTransition();
  }, d.version = "18.3.1", d;
}
var fe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
fe.exports;
var Tr;
function Lt() {
  return Tr || (Tr = 1, function(S, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Te = "18.3.1", z = Symbol.for("react.element"), le = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), H = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), $ = Symbol.iterator, pe = "@@iterator";
      function q(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = $ && e[$] || e[pe];
        return typeof r == "function" ? r : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, F = {
        transition: null
      }, O = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, A = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, M = {}, W = null;
      function ve(e) {
        W = e;
      }
      M.setExtraStackFrame = function(e) {
        W = e;
      }, M.getCurrentStack = null, M.getStackAddendum = function() {
        var e = "";
        W && (e += W);
        var r = M.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var ae = !1, Pe = !1, ye = !1, oe = !1, G = !1, D = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: A
      };
      D.ReactDebugCurrentFrame = M, D.ReactCurrentActQueue = O;
      function L(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          Y("warn", e, n);
        }
      }
      function c(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          Y("error", e, n);
        }
      }
      function Y(e, r, n) {
        {
          var a = D.ReactDebugCurrentFrame, u = a.getStackAddendum();
          u !== "" && (r += "%s", n = n.concat([u]));
          var s = n.map(function(i) {
            return String(i);
          });
          s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
        }
      }
      var he = {};
      function Q(e, r) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", u = a + "." + r;
          if (he[u])
            return;
          c("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, a), he[u] = !0;
        }
      }
      var t = {
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
        enqueueForceUpdate: function(e, r, n) {
          Q(e, "forceUpdate");
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
        enqueueReplaceState: function(e, r, n, a) {
          Q(e, "replaceState");
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
        enqueueSetState: function(e, r, n, a) {
          Q(e, "setState");
        }
      }, o = Object.assign, p = {};
      Object.freeze(p);
      function y(e, r, n) {
        this.props = e, this.context = r, this.refs = p, this.updater = n || t;
      }
      y.prototype.isReactComponent = {}, y.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, y.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, w = function(e, r) {
          Object.defineProperty(y.prototype, e, {
            get: function() {
              L("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var E in h)
          h.hasOwnProperty(E) && w(E, h[E]);
      }
      function R() {
      }
      R.prototype = y.prototype;
      function g(e, r, n) {
        this.props = e, this.context = r, this.refs = p, this.updater = n || t;
      }
      var P = g.prototype = new R();
      P.constructor = g, o(P, y.prototype), P.isPureReactComponent = !0;
      function Pr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var jr = Array.isArray;
      function me(e) {
        return jr(e);
      }
      function Ar(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Dr(e) {
        try {
          return ze(e), !1;
        } catch {
          return !0;
        }
      }
      function ze(e) {
        return "" + e;
      }
      function ge(e) {
        if (Dr(e))
          return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(e)), ze(e);
      }
      function Ir(e, r, n) {
        var a = e.displayName;
        if (a)
          return a;
        var u = r.displayName || r.name || "";
        return u !== "" ? n + "(" + u + ")" : n;
      }
      function Be(e) {
        return e.displayName || "Context";
      }
      function x(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case B:
            return "Fragment";
          case le:
            return "Portal";
          case re:
            return "Profiler";
          case ee:
            return "StrictMode";
          case V:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case H:
              var r = e;
              return Be(r) + ".Consumer";
            case te:
              var n = e;
              return Be(n._context) + ".Provider";
            case N:
              return Ir(e, e.render, "ForwardRef");
            case I:
              var a = e.displayName || null;
              return a !== null ? a : x(e.type) || "Memo";
            case U: {
              var u = e, s = u._payload, i = u._init;
              try {
                return x(i(s));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ue = Object.prototype.hasOwnProperty, He = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, qe, Ke, je;
      je = {};
      function Ge(e) {
        if (ue.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Qe(e) {
        if (ue.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function $r(e, r) {
        var n = function() {
          qe || (qe = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Fr(e, r) {
        var n = function() {
          Ke || (Ke = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Mr(e) {
        if (typeof e.ref == "string" && A.current && e.__self && A.current.stateNode !== e.__self) {
          var r = x(A.current.type);
          je[r] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), je[r] = !0);
        }
      }
      var Ae = function(e, r, n, a, u, s, i) {
        var f = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: z,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: n,
          props: i,
          // Record the component responsible for creating this element.
          _owner: s
        };
        return f._store = {}, Object.defineProperty(f._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(f, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function Lr(e, r, n) {
        var a, u = {}, s = null, i = null, f = null, v = null;
        if (r != null) {
          Ge(r) && (i = r.ref, Mr(r)), Qe(r) && (ge(r.key), s = "" + r.key), f = r.__self === void 0 ? null : r.__self, v = r.__source === void 0 ? null : r.__source;
          for (a in r)
            ue.call(r, a) && !He.hasOwnProperty(a) && (u[a] = r[a]);
        }
        var m = arguments.length - 2;
        if (m === 1)
          u.children = n;
        else if (m > 1) {
          for (var _ = Array(m), b = 0; b < m; b++)
            _[b] = arguments[b + 2];
          Object.freeze && Object.freeze(_), u.children = _;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (a in C)
            u[a] === void 0 && (u[a] = C[a]);
        }
        if (s || i) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && $r(u, k), i && Fr(u, k);
        }
        return Ae(e, s, i, f, v, A.current, u);
      }
      function xr(e, r) {
        var n = Ae(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Nr(e, r, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, u = o({}, e.props), s = e.key, i = e.ref, f = e._self, v = e._source, m = e._owner;
        if (r != null) {
          Ge(r) && (i = r.ref, m = A.current), Qe(r) && (ge(r.key), s = "" + r.key);
          var _;
          e.type && e.type.defaultProps && (_ = e.type.defaultProps);
          for (a in r)
            ue.call(r, a) && !He.hasOwnProperty(a) && (r[a] === void 0 && _ !== void 0 ? u[a] = _[a] : u[a] = r[a]);
        }
        var b = arguments.length - 2;
        if (b === 1)
          u.children = n;
        else if (b > 1) {
          for (var C = Array(b), k = 0; k < b; k++)
            C[k] = arguments[k + 2];
          u.children = C;
        }
        return Ae(e.type, s, i, f, v, m, u);
      }
      function X(e) {
        return typeof e == "object" && e !== null && e.$$typeof === z;
      }
      var Xe = ".", Vr = ":";
      function Ur(e) {
        var r = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(r, function(u) {
          return n[u];
        });
        return "$" + a;
      }
      var Je = !1, Wr = /\/+/g;
      function Ze(e) {
        return e.replace(Wr, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Ur("" + e.key)) : r.toString(36);
      }
      function _e(e, r, n, a, u) {
        var s = typeof e;
        (s === "undefined" || s === "boolean") && (e = null);
        var i = !1;
        if (e === null)
          i = !0;
        else
          switch (s) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case z:
                case le:
                  i = !0;
              }
          }
        if (i) {
          var f = e, v = u(f), m = a === "" ? Xe + De(f, 0) : a;
          if (me(v)) {
            var _ = "";
            m != null && (_ = Ze(m) + "/"), _e(v, r, _, "", function($t) {
              return $t;
            });
          } else v != null && (X(v) && (v.key && (!f || f.key !== v.key) && ge(v.key), v = xr(
            v,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (v.key && (!f || f.key !== v.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ze("" + v.key) + "/"
            ) : "") + m
          )), r.push(v));
          return 1;
        }
        var b, C, k = 0, T = a === "" ? Xe : a + Vr;
        if (me(e))
          for (var Oe = 0; Oe < e.length; Oe++)
            b = e[Oe], C = T + De(b, Oe), k += _e(b, r, n, C, u);
        else {
          var Ue = q(e);
          if (typeof Ue == "function") {
            var wr = e;
            Ue === wr.entries && (Je || L("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Je = !0);
            for (var Dt = Ue.call(wr), Sr, It = 0; !(Sr = Dt.next()).done; )
              b = Sr.value, C = T + De(b, It++), k += _e(b, r, n, C, u);
          } else if (s === "object") {
            var kr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (kr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : kr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return k;
      }
      function be(e, r, n) {
        if (e == null)
          return e;
        var a = [], u = 0;
        return _e(e, a, "", "", function(s) {
          return r.call(n, s, u++);
        }), a;
      }
      function Yr(e) {
        var r = 0;
        return be(e, function() {
          r++;
        }), r;
      }
      function zr(e, r, n) {
        be(e, function() {
          r.apply(this, arguments);
        }, n);
      }
      function Br(e) {
        return be(e, function(r) {
          return r;
        }) || [];
      }
      function Hr(e) {
        if (!X(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function qr(e) {
        var r = {
          $$typeof: H,
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
        r.Provider = {
          $$typeof: te,
          _context: r
        };
        var n = !1, a = !1, u = !1;
        {
          var s = {
            $$typeof: H,
            _context: r
          };
          Object.defineProperties(s, {
            Provider: {
              get: function() {
                return a || (a = !0, c("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(i) {
                r.Provider = i;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(i) {
                r._currentValue = i;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(i) {
                r._currentValue2 = i;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(i) {
                r._threadCount = i;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, c("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(i) {
                u || (L("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), u = !0);
              }
            }
          }), r.Consumer = s;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var ie = -1, Ie = 0, er = 1, Kr = 2;
      function Gr(e) {
        if (e._status === ie) {
          var r = e._result, n = r();
          if (n.then(function(s) {
            if (e._status === Ie || e._status === ie) {
              var i = e;
              i._status = er, i._result = s;
            }
          }, function(s) {
            if (e._status === Ie || e._status === ie) {
              var i = e;
              i._status = Kr, i._result = s;
            }
          }), e._status === ie) {
            var a = e;
            a._status = Ie, a._result = n;
          }
        }
        if (e._status === er) {
          var u = e._result;
          return u === void 0 && c(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || c(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function Qr(e) {
        var r = {
          // We use these fields to store the result.
          _status: ie,
          _result: e
        }, n = {
          $$typeof: U,
          _payload: r,
          _init: Gr
        };
        {
          var a, u;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(s) {
                c("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = s, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(s) {
                c("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = s, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Xr(e) {
        e != null && e.$$typeof === I ? c("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? c("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && c("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && c("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var n;
          Object.defineProperty(r, "displayName", {
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
        return r;
      }
      var rr;
      rr = Symbol.for("react.module.reference");
      function tr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === B || e === re || G || e === ee || e === V || e === ne || oe || e === de || ae || Pe || ye || typeof e == "object" && e !== null && (e.$$typeof === U || e.$$typeof === I || e.$$typeof === te || e.$$typeof === H || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === rr || e.getModuleId !== void 0));
      }
      function Jr(e, r) {
        tr(e) || c("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: I,
          type: e,
          compare: r === void 0 ? null : r
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
      function j() {
        var e = K.current;
        return e === null && c(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function Zr(e) {
        var r = j();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? c("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && c("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function et(e) {
        var r = j();
        return r.useState(e);
      }
      function rt(e, r, n) {
        var a = j();
        return a.useReducer(e, r, n);
      }
      function tt(e) {
        var r = j();
        return r.useRef(e);
      }
      function nt(e, r) {
        var n = j();
        return n.useEffect(e, r);
      }
      function at(e, r) {
        var n = j();
        return n.useInsertionEffect(e, r);
      }
      function ot(e, r) {
        var n = j();
        return n.useLayoutEffect(e, r);
      }
      function ut(e, r) {
        var n = j();
        return n.useCallback(e, r);
      }
      function it(e, r) {
        var n = j();
        return n.useMemo(e, r);
      }
      function st(e, r, n) {
        var a = j();
        return a.useImperativeHandle(e, r, n);
      }
      function ct(e, r) {
        {
          var n = j();
          return n.useDebugValue(e, r);
        }
      }
      function ft() {
        var e = j();
        return e.useTransition();
      }
      function lt(e) {
        var r = j();
        return r.useDeferredValue(e);
      }
      function dt() {
        var e = j();
        return e.useId();
      }
      function pt(e, r, n) {
        var a = j();
        return a.useSyncExternalStore(e, r, n);
      }
      var se = 0, nr, ar, or, ur, ir, sr, cr;
      function fr() {
      }
      fr.__reactDisabledLog = !0;
      function vt() {
        {
          if (se === 0) {
            nr = console.log, ar = console.info, or = console.warn, ur = console.error, ir = console.group, sr = console.groupCollapsed, cr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: fr,
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
          se++;
        }
      }
      function yt() {
        {
          if (se--, se === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, e, {
                value: nr
              }),
              info: o({}, e, {
                value: ar
              }),
              warn: o({}, e, {
                value: or
              }),
              error: o({}, e, {
                value: ur
              }),
              group: o({}, e, {
                value: ir
              }),
              groupCollapsed: o({}, e, {
                value: sr
              }),
              groupEnd: o({}, e, {
                value: cr
              })
            });
          }
          se < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $e = D.ReactCurrentDispatcher, Fe;
      function Ee(e, r, n) {
        {
          if (Fe === void 0)
            try {
              throw Error();
            } catch (u) {
              var a = u.stack.trim().match(/\n( *(at )?)/);
              Fe = a && a[1] || "";
            }
          return `
` + Fe + e;
        }
      }
      var Me = !1, Re;
      {
        var ht = typeof WeakMap == "function" ? WeakMap : Map;
        Re = new ht();
      }
      function lr(e, r) {
        if (!e || Me)
          return "";
        {
          var n = Re.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Me = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var s;
        s = $e.current, $e.current = null, vt();
        try {
          if (r) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (T) {
                a = T;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (T) {
                a = T;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (T) {
              a = T;
            }
            e();
          }
        } catch (T) {
          if (T && a && typeof T.stack == "string") {
            for (var f = T.stack.split(`
`), v = a.stack.split(`
`), m = f.length - 1, _ = v.length - 1; m >= 1 && _ >= 0 && f[m] !== v[_]; )
              _--;
            for (; m >= 1 && _ >= 0; m--, _--)
              if (f[m] !== v[_]) {
                if (m !== 1 || _ !== 1)
                  do
                    if (m--, _--, _ < 0 || f[m] !== v[_]) {
                      var b = `
` + f[m].replace(" at new ", " at ");
                      return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, b), b;
                    }
                  while (m >= 1 && _ >= 0);
                break;
              }
          }
        } finally {
          Me = !1, $e.current = s, yt(), Error.prepareStackTrace = u;
        }
        var C = e ? e.displayName || e.name : "", k = C ? Ee(C) : "";
        return typeof e == "function" && Re.set(e, k), k;
      }
      function mt(e, r, n) {
        return lr(e, !1);
      }
      function gt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Ce(e, r, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return lr(e, gt(e));
        if (typeof e == "string")
          return Ee(e);
        switch (e) {
          case V:
            return Ee("Suspense");
          case ne:
            return Ee("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return mt(e.render);
            case I:
              return Ce(e.type, r, n);
            case U: {
              var a = e, u = a._payload, s = a._init;
              try {
                return Ce(s(u), r, n);
              } catch {
              }
            }
          }
        return "";
      }
      var dr = {}, pr = D.ReactDebugCurrentFrame;
      function we(e) {
        if (e) {
          var r = e._owner, n = Ce(e.type, e._source, r ? r.type : null);
          pr.setExtraStackFrame(n);
        } else
          pr.setExtraStackFrame(null);
      }
      function _t(e, r, n, a, u) {
        {
          var s = Function.call.bind(ue);
          for (var i in e)
            if (s(e, i)) {
              var f = void 0;
              try {
                if (typeof e[i] != "function") {
                  var v = Error((a || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw v.name = "Invariant Violation", v;
                }
                f = e[i](r, i, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (m) {
                f = m;
              }
              f && !(f instanceof Error) && (we(u), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, i, typeof f), we(null)), f instanceof Error && !(f.message in dr) && (dr[f.message] = !0, we(u), c("Failed %s type: %s", n, f.message), we(null));
            }
        }
      }
      function J(e) {
        if (e) {
          var r = e._owner, n = Ce(e.type, e._source, r ? r.type : null);
          ve(n);
        } else
          ve(null);
      }
      var Le;
      Le = !1;
      function vr() {
        if (A.current) {
          var e = x(A.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function bt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
      function Et(e) {
        return e != null ? bt(e.__source) : "";
      }
      var yr = {};
      function Rt(e) {
        var r = vr();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
      function hr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Rt(r);
          if (!yr[n]) {
            yr[n] = !0;
            var a = "";
            e && e._owner && e._owner !== A.current && (a = " It was passed a child from " + x(e._owner.type) + "."), J(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), J(null);
          }
        }
      }
      function mr(e, r) {
        if (typeof e == "object") {
          if (me(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              X(a) && hr(a, r);
            }
          else if (X(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = q(e);
            if (typeof u == "function" && u !== e.entries)
              for (var s = u.call(e), i; !(i = s.next()).done; )
                X(i.value) && hr(i.value, r);
          }
        }
      }
      function gr(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var n;
          if (typeof r == "function")
            n = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === I))
            n = r.propTypes;
          else
            return;
          if (n) {
            var a = x(r);
            _t(n, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Le) {
            Le = !0;
            var u = x(r);
            c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ct(e) {
        {
          for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a !== "children" && a !== "key") {
              J(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), J(null);
              break;
            }
          }
          e.ref !== null && (J(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
        }
      }
      function _r(e, r, n) {
        var a = tr(e);
        if (!a) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var s = Et(r);
          s ? u += s : u += vr();
          var i;
          e === null ? i = "null" : me(e) ? i = "array" : e !== void 0 && e.$$typeof === z ? (i = "<" + (x(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, c("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, u);
        }
        var f = Lr.apply(this, arguments);
        if (f == null)
          return f;
        if (a)
          for (var v = 2; v < arguments.length; v++)
            mr(arguments[v], e);
        return e === B ? Ct(f) : gr(f), f;
      }
      var br = !1;
      function wt(e) {
        var r = _r.bind(null, e);
        return r.type = e, br || (br = !0, L("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return L("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function St(e, r, n) {
        for (var a = Nr.apply(this, arguments), u = 2; u < arguments.length; u++)
          mr(arguments[u], a.type);
        return gr(a), a;
      }
      function kt(e, r) {
        var n = F.transition;
        F.transition = {};
        var a = F.transition;
        F.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (F.transition = n, n === null && a._updatedFibers) {
            var u = a._updatedFibers.size;
            u > 10 && L("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Er = !1, Se = null;
      function Ot(e) {
        if (Se === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), n = S && S[r];
            Se = n.call(S, "timers").setImmediate;
          } catch {
            Se = function(u) {
              Er === !1 && (Er = !0, typeof MessageChannel > "u" && c("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var s = new MessageChannel();
              s.port1.onmessage = u, s.port2.postMessage(void 0);
            };
          }
        return Se(e);
      }
      var Z = 0, Rr = !1;
      function Cr(e) {
        {
          var r = Z;
          Z++, O.current === null && (O.current = []);
          var n = O.isBatchingLegacy, a;
          try {
            if (O.isBatchingLegacy = !0, a = e(), !n && O.didScheduleLegacyUpdate) {
              var u = O.current;
              u !== null && (O.didScheduleLegacyUpdate = !1, Ve(u));
            }
          } catch (C) {
            throw ke(r), C;
          } finally {
            O.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var s = a, i = !1, f = {
              then: function(C, k) {
                i = !0, s.then(function(T) {
                  ke(r), Z === 0 ? xe(T, C, k) : C(T);
                }, function(T) {
                  ke(r), k(T);
                });
              }
            };
            return !Rr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (Rr = !0, c("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var v = a;
            if (ke(r), Z === 0) {
              var m = O.current;
              m !== null && (Ve(m), O.current = null);
              var _ = {
                then: function(C, k) {
                  O.current === null ? (O.current = [], xe(v, C, k)) : C(v);
                }
              };
              return _;
            } else {
              var b = {
                then: function(C, k) {
                  C(v);
                }
              };
              return b;
            }
          }
        }
      }
      function ke(e) {
        e !== Z - 1 && c("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Z = e;
      }
      function xe(e, r, n) {
        {
          var a = O.current;
          if (a !== null)
            try {
              Ve(a), Ot(function() {
                a.length === 0 ? (O.current = null, r(e)) : xe(e, r, n);
              });
            } catch (u) {
              n(u);
            }
          else
            r(e);
        }
      }
      var Ne = !1;
      function Ve(e) {
        if (!Ne) {
          Ne = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var n = e[r];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(r + 1), a;
          } finally {
            Ne = !1;
          }
        }
      }
      var Tt = _r, Pt = St, jt = wt, At = {
        map: be,
        forEach: zr,
        count: Yr,
        toArray: Br,
        only: Hr
      };
      l.Children = At, l.Component = y, l.Fragment = B, l.Profiler = re, l.PureComponent = g, l.StrictMode = ee, l.Suspense = V, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D, l.act = Cr, l.cloneElement = Pt, l.createContext = qr, l.createElement = Tt, l.createFactory = jt, l.createRef = Pr, l.forwardRef = Xr, l.isValidElement = X, l.lazy = Qr, l.memo = Jr, l.startTransition = kt, l.unstable_act = Cr, l.useCallback = ut, l.useContext = Zr, l.useDebugValue = ct, l.useDeferredValue = lt, l.useEffect = nt, l.useId = dt, l.useImperativeHandle = st, l.useInsertionEffect = at, l.useLayoutEffect = ot, l.useMemo = it, l.useReducer = rt, l.useRef = tt, l.useState = et, l.useSyncExternalStore = pt, l.useTransition = ft, l.version = Te, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fe, fe.exports)), fe.exports;
}
process.env.NODE_ENV === "production" ? We.exports = Mt() : We.exports = Lt();
var Ye = We.exports;
const ce = /* @__PURE__ */ Ft(Ye), xt = Ye.createContext({
  isDarkMode: !1,
  toggleDarkMode: () => {
  }
}), Nt = () => {
  const { isDarkMode: S, toggleDarkMode: l } = Ye.useContext(xt);
  return { isDarkMode: S, toggleDarkMode: l };
}, Vt = () => {
  const { isDarkMode: S, toggleDarkMode: l } = Nt();
  return ce.createElement(
    "div",
    { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
    ce.createElement("span", { className: "dark-mode-label" }, S ? "Dark" : "Light"),
    ce.createElement(
      "label",
      { className: "switch" },
      ce.createElement("input", { type: "checkbox", checked: S, onChange: l }),
      ce.createElement("span", { className: "slider" })
    )
  );
};
export {
  Vt as ThemeToggle
};
//# sourceMappingURL=index.es.js.map
