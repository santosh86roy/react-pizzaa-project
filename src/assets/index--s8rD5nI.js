function qv(e, t) {
    for (var r = 0; r < t.length; r++) {
        const n = t[r];
        if (typeof n != "string" && !Array.isArray(n)) {
            for (const o in n)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(n, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => n[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = r(o);
        fetch(o.href, i)
    }
})();
var Zt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Yu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Xv(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var o = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), r
}
var o0 = {
        exports: {}
    },
    il = {},
    i0 = {
        exports: {}
    },
    ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ri = Symbol.for("react.element"),
    Zv = Symbol.for("react.portal"),
    Jv = Symbol.for("react.fragment"),
    eb = Symbol.for("react.strict_mode"),
    tb = Symbol.for("react.profiler"),
    rb = Symbol.for("react.provider"),
    nb = Symbol.for("react.context"),
    ob = Symbol.for("react.forward_ref"),
    ib = Symbol.for("react.suspense"),
    ab = Symbol.for("react.memo"),
    lb = Symbol.for("react.lazy"),
    Cd = Symbol.iterator;

function sb(e) {
    return e === null || typeof e != "object" ? null : (e = Cd && e[Cd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var a0 = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    l0 = Object.assign,
    s0 = {};

function eo(e, t, r) {
    this.props = e, this.context = t, this.refs = s0, this.updater = r || a0
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
eo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function u0() {}
u0.prototype = eo.prototype;

function qu(e, t, r) {
    this.props = e, this.context = t, this.refs = s0, this.updater = r || a0
}
var Xu = qu.prototype = new u0;
Xu.constructor = qu;
l0(Xu, eo.prototype);
Xu.isPureReactComponent = !0;
var Od = Array.isArray,
    c0 = Object.prototype.hasOwnProperty,
    Zu = {
        current: null
    },
    d0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function f0(e, t, r) {
    var n, o = {},
        i = null,
        a = null;
    if (t != null)
        for (n in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t) c0.call(t, n) && !d0.hasOwnProperty(n) && (o[n] = t[n]);
    var l = arguments.length - 2;
    if (l === 1) o.children = r;
    else if (1 < l) {
        for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
        o.children = s
    }
    if (e && e.defaultProps)
        for (n in l = e.defaultProps, l) o[n] === void 0 && (o[n] = l[n]);
    return {
        $$typeof: ri,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: Zu.current
    }
}

function ub(e, t) {
    return {
        $$typeof: ri,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ju(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ri
}

function cb(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(r) {
        return t[r]
    })
}
var Td = /\/+/g;

function Hl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? cb("" + e.key) : t.toString(36)
}

function qi(e, t, r, n, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null) a = !0;
    else switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ri:
                case Zv:
                    a = !0
            }
    }
    if (a) return a = e, o = o(a), e = n === "" ? "." + Hl(a, 0) : n, Od(o) ? (r = "", e != null && (r = e.replace(Td, "$&/") + "/"), qi(o, t, r, "", function(u) {
        return u
    })) : o != null && (Ju(o) && (o = ub(o, r + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(Td, "$&/") + "/") + e)), t.push(o)), 1;
    if (a = 0, n = n === "" ? "." : n + ":", Od(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var s = n + Hl(i, l);
            a += qi(i, t, r, s, o)
        } else if (s = sb(e), typeof s == "function")
            for (e = s.call(e), l = 0; !(i = e.next()).done;) i = i.value, s = n + Hl(i, l++), a += qi(i, t, r, s, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}

function ki(e, t, r) {
    if (e == null) return e;
    var n = [],
        o = 0;
    return qi(e, n, "", "", function(i) {
        return t.call(r, i, o++)
    }), n
}

function db(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r)
        }, function(r) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var rt = {
        current: null
    },
    Xi = {
        transition: null
    },
    fb = {
        ReactCurrentDispatcher: rt,
        ReactCurrentBatchConfig: Xi,
        ReactCurrentOwner: Zu
    };
ue.Children = {
    map: ki,
    forEach: function(e, t, r) {
        ki(e, function() {
            t.apply(this, arguments)
        }, r)
    },
    count: function(e) {
        var t = 0;
        return ki(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ki(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ju(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ue.Component = eo;
ue.Fragment = Jv;
ue.Profiler = tb;
ue.PureComponent = qu;
ue.StrictMode = eb;
ue.Suspense = ib;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fb;
ue.cloneElement = function(e, t, r) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var n = l0({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, a = Zu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (s in t) c0.call(t, s) && !d0.hasOwnProperty(s) && (n[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) n.children = r;
    else if (1 < s) {
        l = Array(s);
        for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
        n.children = l
    }
    return {
        $$typeof: ri,
        type: e.type,
        key: o,
        ref: i,
        props: n,
        _owner: a
    }
};
ue.createContext = function(e) {
    return e = {
        $$typeof: nb,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: rb,
        _context: e
    }, e.Consumer = e
};
ue.createElement = f0;
ue.createFactory = function(e) {
    var t = f0.bind(null, e);
    return t.type = e, t
};
ue.createRef = function() {
    return {
        current: null
    }
};
ue.forwardRef = function(e) {
    return {
        $$typeof: ob,
        render: e
    }
};
ue.isValidElement = Ju;
ue.lazy = function(e) {
    return {
        $$typeof: lb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: db
    }
};
ue.memo = function(e, t) {
    return {
        $$typeof: ab,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ue.startTransition = function(e) {
    var t = Xi.transition;
    Xi.transition = {};
    try {
        e()
    } finally {
        Xi.transition = t
    }
};
ue.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
ue.useCallback = function(e, t) {
    return rt.current.useCallback(e, t)
};
ue.useContext = function(e) {
    return rt.current.useContext(e)
};
ue.useDebugValue = function() {};
ue.useDeferredValue = function(e) {
    return rt.current.useDeferredValue(e)
};
ue.useEffect = function(e, t) {
    return rt.current.useEffect(e, t)
};
ue.useId = function() {
    return rt.current.useId()
};
ue.useImperativeHandle = function(e, t, r) {
    return rt.current.useImperativeHandle(e, t, r)
};
ue.useInsertionEffect = function(e, t) {
    return rt.current.useInsertionEffect(e, t)
};
ue.useLayoutEffect = function(e, t) {
    return rt.current.useLayoutEffect(e, t)
};
ue.useMemo = function(e, t) {
    return rt.current.useMemo(e, t)
};
ue.useReducer = function(e, t, r) {
    return rt.current.useReducer(e, t, r)
};
ue.useRef = function(e) {
    return rt.current.useRef(e)
};
ue.useState = function(e) {
    return rt.current.useState(e)
};
ue.useSyncExternalStore = function(e, t, r) {
    return rt.current.useSyncExternalStore(e, t, r)
};
ue.useTransition = function() {
    return rt.current.useTransition()
};
ue.version = "18.2.0";
i0.exports = ue;
var w = i0.exports;
const De = Yu(w),
    p0 = qv({
        __proto__: null,
        default: De
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pb = w,
    gb = Symbol.for("react.element"),
    hb = Symbol.for("react.fragment"),
    mb = Object.prototype.hasOwnProperty,
    yb = pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    vb = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function g0(e, t, r) {
    var n, o = {},
        i = null,
        a = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (a = t.ref);
    for (n in t) mb.call(t, n) && !vb.hasOwnProperty(n) && (o[n] = t[n]);
    if (e && e.defaultProps)
        for (n in t = e.defaultProps, t) o[n] === void 0 && (o[n] = t[n]);
    return {
        $$typeof: gb,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: yb.current
    }
}
il.Fragment = hb;
il.jsx = g0;
il.jsxs = g0;
o0.exports = il;
var g = o0.exports,
    As = {},
    h0 = {
        exports: {}
    },
    mt = {},
    m0 = {
        exports: {}
    },
    y0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, A) {
        var F = N.length;
        N.push(A);
        e: for (; 0 < F;) {
            var $ = F - 1 >>> 1,
                B = N[$];
            if (0 < o(B, A)) N[$] = A, N[F] = B, F = $;
            else break e
        }
    }

    function r(N) {
        return N.length === 0 ? null : N[0]
    }

    function n(N) {
        if (N.length === 0) return null;
        var A = N[0],
            F = N.pop();
        if (F !== A) {
            N[0] = F;
            e: for (var $ = 0, B = N.length, Q = B >>> 1; $ < Q;) {
                var G = 2 * ($ + 1) - 1,
                    K = N[G],
                    re = G + 1,
                    ee = N[re];
                if (0 > o(K, F)) re < B && 0 > o(ee, K) ? (N[$] = ee, N[re] = F, $ = re) : (N[$] = K, N[G] = F, $ = G);
                else if (re < B && 0 > o(ee, F)) N[$] = ee, N[re] = F, $ = re;
                else break e
            }
        }
        return A
    }

    function o(N, A) {
        var F = N.sortIndex - A.sortIndex;
        return F !== 0 ? F : N.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date,
            l = a.now();
        e.unstable_now = function() {
            return a.now() - l
        }
    }
    var s = [],
        u = [],
        d = 1,
        c = null,
        f = 3,
        h = !1,
        m = !1,
        v = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function b(N) {
        for (var A = r(u); A !== null;) {
            if (A.callback === null) n(u);
            else if (A.startTime <= N) n(u), A.sortIndex = A.expirationTime, t(s, A);
            else break;
            A = r(u)
        }
    }

    function x(N) {
        if (v = !1, b(N), !m)
            if (r(s) !== null) m = !0, I(k);
            else {
                var A = r(u);
                A !== null && D(x, A.startTime - N)
            }
    }

    function k(N, A) {
        m = !1, v && (v = !1, y(L), L = -1), h = !0;
        var F = f;
        try {
            for (b(A), c = r(s); c !== null && (!(c.expirationTime > A) || N && !_());) {
                var $ = c.callback;
                if (typeof $ == "function") {
                    c.callback = null, f = c.priorityLevel;
                    var B = $(c.expirationTime <= A);
                    A = e.unstable_now(), typeof B == "function" ? c.callback = B : c === r(s) && n(s), b(A)
                } else n(s);
                c = r(s)
            }
            if (c !== null) var Q = !0;
            else {
                var G = r(u);
                G !== null && D(x, G.startTime - A), Q = !1
            }
            return Q
        } finally {
            c = null, f = F, h = !1
        }
    }
    var E = !1,
        R = null,
        L = -1,
        j = 5,
        T = -1;

    function _() {
        return !(e.unstable_now() - T < j)
    }

    function O() {
        if (R !== null) {
            var N = e.unstable_now();
            T = N;
            var A = !0;
            try {
                A = R(!0, N)
            } finally {
                A ? P() : (E = !1, R = null)
            }
        } else E = !1
    }
    var P;
    if (typeof p == "function") P = function() {
        p(O)
    };
    else if (typeof MessageChannel < "u") {
        var C = new MessageChannel,
            M = C.port2;
        C.port1.onmessage = O, P = function() {
            M.postMessage(null)
        }
    } else P = function() {
        S(O, 0)
    };

    function I(N) {
        R = N, E || (E = !0, P())
    }

    function D(N, A) {
        L = S(function() {
            N(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        m || h || (m = !0, I(k))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return r(s)
    }, e.unstable_next = function(N) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = f
        }
        var F = f;
        f = A;
        try {
            return N()
        } finally {
            f = F
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, A) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var F = f;
        f = N;
        try {
            return A()
        } finally {
            f = F
        }
    }, e.unstable_scheduleCallback = function(N, A, F) {
        var $ = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? $ + F : $) : F = $, N) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return B = F + B, N = {
            id: d++,
            callback: A,
            priorityLevel: N,
            startTime: F,
            expirationTime: B,
            sortIndex: -1
        }, F > $ ? (N.sortIndex = F, t(u, N), r(s) === null && N === r(u) && (v ? (y(L), L = -1) : v = !0, D(x, F - $))) : (N.sortIndex = B, t(s, N), m || h || (m = !0, I(k))), N
    }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(N) {
        var A = f;
        return function() {
            var F = f;
            f = A;
            try {
                return N.apply(this, arguments)
            } finally {
                f = F
            }
        }
    }
})(y0);
m0.exports = y0;
var bb = m0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var v0 = w,
    gt = bb;

function H(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var b0 = new Set,
    zo = {};

function dn(e, t) {
    Fn(e, t), Fn(e + "Capture", t)
}

function Fn(e, t) {
    for (zo[e] = t, e = 0; e < t.length; e++) b0.add(t[e])
}
var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ds = Object.prototype.hasOwnProperty,
    xb = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    jd = {},
    Pd = {};

function wb(e) {
    return Ds.call(Pd, e) ? !0 : Ds.call(jd, e) ? !1 : xb.test(e) ? Pd[e] = !0 : (jd[e] = !0, !1)
}

function kb(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return n ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Sb(e, t, r, n) {
    if (t === null || typeof t > "u" || kb(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null) switch (r.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function nt(e, t, r, n, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = n, this.attributeNamespace = o, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ue[e] = new nt(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ue[t] = new nt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ue[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ue[e] = new nt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ue[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ue[e] = new nt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ue[e] = new nt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ue[e] = new nt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ue[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ec = /[\-:]([a-z])/g;

function tc(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ec, tc);
    Ue[t] = new nt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ec, tc);
    Ue[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ec, tc);
    Ue[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ue[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ue.xlinkHref = new nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ue[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function rc(e, t, r, n) {
    var o = Ue.hasOwnProperty(t) ? Ue[t] : null;
    (o !== null ? o.type !== 0 : n || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Sb(t, r, o, n) && (r = null), n || o === null ? wb(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : o.mustUseProperty ? e[o.propertyName] = r === null ? o.type === 3 ? !1 : "" : r : (t = o.attributeName, n = o.attributeNamespace, r === null ? e.removeAttribute(t) : (o = o.type, r = o === 3 || o === 4 && r === !0 ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
}
var sr = v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Si = Symbol.for("react.element"),
    yn = Symbol.for("react.portal"),
    vn = Symbol.for("react.fragment"),
    nc = Symbol.for("react.strict_mode"),
    Fs = Symbol.for("react.profiler"),
    x0 = Symbol.for("react.provider"),
    w0 = Symbol.for("react.context"),
    oc = Symbol.for("react.forward_ref"),
    Hs = Symbol.for("react.suspense"),
    $s = Symbol.for("react.suspense_list"),
    ic = Symbol.for("react.memo"),
    yr = Symbol.for("react.lazy"),
    k0 = Symbol.for("react.offscreen"),
    Nd = Symbol.iterator;

function uo(e) {
    return e === null || typeof e != "object" ? null : (e = Nd && e[Nd] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Oe = Object.assign,
    $l;

function xo(e) {
    if ($l === void 0) try {
        throw Error()
    } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        $l = t && t[1] || ""
    }
    return `
` + $l + e
}
var Bl = !1;

function Wl(e, t) {
    if (!e || Bl) return "";
    Bl = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var n = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    n = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                n = u
            }
            e()
        }
    } catch (u) {
        if (u && n && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = n.stack.split(`
`), a = o.length - 1, l = i.length - 1; 1 <= a && 0 <= l && o[a] !== i[l];) l--;
            for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                    if (a !== 1 || l !== 1)
                        do
                            if (a--, l--, 0 > l || o[a] !== i[l]) {
                                var s = `
` + o[a].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= a && 0 <= l);
                    break
                }
        }
    } finally {
        Bl = !1, Error.prepareStackTrace = r
    }
    return (e = e ? e.displayName || e.name : "") ? xo(e) : ""
}

function Eb(e) {
    switch (e.tag) {
        case 5:
            return xo(e.type);
        case 16:
            return xo("Lazy");
        case 13:
            return xo("Suspense");
        case 19:
            return xo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Wl(e.type, !1), e;
        case 11:
            return e = Wl(e.type.render, !1), e;
        case 1:
            return e = Wl(e.type, !0), e;
        default:
            return ""
    }
}

function Bs(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case vn:
            return "Fragment";
        case yn:
            return "Portal";
        case Fs:
            return "Profiler";
        case nc:
            return "StrictMode";
        case Hs:
            return "Suspense";
        case $s:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case w0:
            return (e.displayName || "Context") + ".Consumer";
        case x0:
            return (e._context.displayName || "Context") + ".Provider";
        case oc:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ic:
            return t = e.displayName || null, t !== null ? t : Bs(e.type) || "Memo";
        case yr:
            t = e._payload, e = e._init;
            try {
                return Bs(e(t))
            } catch {}
    }
    return null
}

function Cb(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Bs(t);
        case 8:
            return t === nc ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function zr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function S0(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ob(e) {
    var t = S0(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
        var o = r.get,
            i = r.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                n = "" + a, i.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: r.enumerable
        }), {
            getValue: function() {
                return n
            },
            setValue: function(a) {
                n = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ei(e) {
    e._valueTracker || (e._valueTracker = Ob(e))
}

function E0(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
        n = "";
    return e && (n = S0(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== r ? (t.setValue(e), !0) : !1
}

function da(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ws(e, t) {
    var r = t.checked;
    return Oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ? ? e._wrapperState.initialChecked
    })
}

function _d(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
    r = zr(t.value != null ? t.value : r), e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function C0(e, t) {
    t = t.checked, t != null && rc(e, "checked", t, !1)
}

function Us(e, t) {
    C0(e, t);
    var r = zr(t.value),
        n = t.type;
    if (r != null) n === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vs(e, t.type, r) : t.hasOwnProperty("defaultValue") && Vs(e, t.type, zr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Md(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (!(n !== "submit" && n !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r)
}

function Vs(e, t, r) {
    (t !== "number" || da(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
}
var wo = Array.isArray;

function Nn(e, t, r, n) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
        for (r = 0; r < e.length; r++) o = t.hasOwnProperty("$" + e[r].value), e[r].selected !== o && (e[r].selected = o), o && n && (e[r].defaultSelected = !0)
    } else {
        for (r = "" + zr(r), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === r) {
                e[o].selected = !0, n && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Qs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
    return Oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Rd(e, t) {
    var r = t.value;
    if (r == null) {
        if (r = t.children, t = t.defaultValue, r != null) {
            if (t != null) throw Error(H(92));
            if (wo(r)) {
                if (1 < r.length) throw Error(H(93));
                r = r[0]
            }
            t = r
        }
        t == null && (t = ""), r = t
    }
    e._wrapperState = {
        initialValue: zr(r)
    }
}

function O0(e, t) {
    var r = zr(t.value),
        n = zr(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n)
}

function Ld(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function T0(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Gs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? T0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ci, j0 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, n, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, r, n, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ci = Ci || document.createElement("div"), Ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ci.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Io(e, t) {
    if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
            r.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Eo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Tb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Eo).forEach(function(e) {
    Tb.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Eo[t] = Eo[e]
    })
});

function P0(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Eo.hasOwnProperty(e) && Eo[e] ? ("" + t).trim() : t + "px"
}

function N0(e, t) {
    e = e.style;
    for (var r in t)
        if (t.hasOwnProperty(r)) {
            var n = r.indexOf("--") === 0,
                o = P0(r, t[r], n);
            r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : e[r] = o
        }
}
var jb = Oe({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ks(e, t) {
    if (t) {
        if (jb[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(H(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(H(62))
    }
}

function Ys(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var qs = null;

function ac(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Xs = null,
    _n = null,
    Mn = null;

function zd(e) {
    if (e = ii(e)) {
        if (typeof Xs != "function") throw Error(H(280));
        var t = e.stateNode;
        t && (t = cl(t), Xs(e.stateNode, e.type, t))
    }
}

function _0(e) {
    _n ? Mn ? Mn.push(e) : Mn = [e] : _n = e
}

function M0() {
    if (_n) {
        var e = _n,
            t = Mn;
        if (Mn = _n = null, zd(e), t)
            for (e = 0; e < t.length; e++) zd(t[e])
    }
}

function R0(e, t) {
    return e(t)
}

function L0() {}
var Ul = !1;

function z0(e, t, r) {
    if (Ul) return e(t, r);
    Ul = !0;
    try {
        return R0(e, t, r)
    } finally {
        Ul = !1, (_n !== null || Mn !== null) && (L0(), M0())
    }
}

function Ao(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = cl(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(H(231, t, typeof r));
    return r
}
var Zs = !1;
if (rr) try {
    var co = {};
    Object.defineProperty(co, "passive", {
        get: function() {
            Zs = !0
        }
    }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co)
} catch {
    Zs = !1
}

function Pb(e, t, r, n, o, i, a, l, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(r, u)
    } catch (d) {
        this.onError(d)
    }
}
var Co = !1,
    fa = null,
    pa = !1,
    Js = null,
    Nb = {
        onError: function(e) {
            Co = !0, fa = e
        }
    };

function _b(e, t, r, n, o, i, a, l, s) {
    Co = !1, fa = null, Pb.apply(Nb, arguments)
}

function Mb(e, t, r, n, o, i, a, l, s) {
    if (_b.apply(this, arguments), Co) {
        if (Co) {
            var u = fa;
            Co = !1, fa = null
        } else throw Error(H(198));
        pa || (pa = !0, Js = u)
    }
}

function fn(e) {
    var t = e,
        r = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (r = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? r : null
}

function I0(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Id(e) {
    if (fn(e) !== e) throw Error(H(188))
}

function Rb(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fn(e), t === null) throw Error(H(188));
        return t !== e ? null : e
    }
    for (var r = e, n = t;;) {
        var o = r.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (n = o.return, n !== null) {
                r = n;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === r) return Id(o), e;
                if (i === n) return Id(o), t;
                i = i.sibling
            }
            throw Error(H(188))
        }
        if (r.return !== n.return) r = o, n = i;
        else {
            for (var a = !1, l = o.child; l;) {
                if (l === r) {
                    a = !0, r = o, n = i;
                    break
                }
                if (l === n) {
                    a = !0, n = o, r = i;
                    break
                }
                l = l.sibling
            }
            if (!a) {
                for (l = i.child; l;) {
                    if (l === r) {
                        a = !0, r = i, n = o;
                        break
                    }
                    if (l === n) {
                        a = !0, n = i, r = o;
                        break
                    }
                    l = l.sibling
                }
                if (!a) throw Error(H(189))
            }
        }
        if (r.alternate !== n) throw Error(H(190))
    }
    if (r.tag !== 3) throw Error(H(188));
    return r.stateNode.current === r ? e : t
}

function A0(e) {
    return e = Rb(e), e !== null ? D0(e) : null
}

function D0(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = D0(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var F0 = gt.unstable_scheduleCallback,
    Ad = gt.unstable_cancelCallback,
    Lb = gt.unstable_shouldYield,
    zb = gt.unstable_requestPaint,
    Ne = gt.unstable_now,
    Ib = gt.unstable_getCurrentPriorityLevel,
    lc = gt.unstable_ImmediatePriority,
    H0 = gt.unstable_UserBlockingPriority,
    ga = gt.unstable_NormalPriority,
    Ab = gt.unstable_LowPriority,
    $0 = gt.unstable_IdlePriority,
    al = null,
    Wt = null;

function Db(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == "function") try {
        Wt.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Pt = Math.clz32 ? Math.clz32 : $b,
    Fb = Math.log,
    Hb = Math.LN2;

function $b(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Fb(e) / Hb | 0) | 0
}
var Oi = 64,
    Ti = 4194304;

function ko(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ha(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = r & 268435455;
    if (a !== 0) {
        var l = a & ~o;
        l !== 0 ? n = ko(l) : (i &= a, i !== 0 && (n = ko(i)))
    } else a = r & ~o, a !== 0 ? n = ko(a) : i !== 0 && (n = ko(i));
    if (n === 0) return 0;
    if (t !== 0 && t !== n && !(t & o) && (o = n & -n, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (n & 4 && (n |= r & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= n; 0 < t;) r = 31 - Pt(t), o = 1 << r, n |= e[r], t &= ~o;
    return n
}

function Bb(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Wb(e, t) {
    for (var r = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var a = 31 - Pt(i),
            l = 1 << a,
            s = o[a];
        s === -1 ? (!(l & r) || l & n) && (o[a] = Bb(l, t)) : s <= t && (e.expiredLanes |= l), i &= ~l
    }
}

function eu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function B0() {
    var e = Oi;
    return Oi <<= 1, !(Oi & 4194240) && (Oi = 64), e
}

function Vl(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t
}

function ni(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Pt(t), e[t] = r
}

function Ub(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r;) {
        var o = 31 - Pt(r),
            i = 1 << o;
        t[o] = 0, n[o] = -1, e[o] = -1, r &= ~i
    }
}

function sc(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r;) {
        var n = 31 - Pt(r),
            o = 1 << n;
        o & t | e[n] & t && (e[n] |= t), r &= ~o
    }
}
var de = 0;

function W0(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var U0, uc, V0, Q0, G0, tu = !1,
    ji = [],
    Cr = null,
    Or = null,
    Tr = null,
    Do = new Map,
    Fo = new Map,
    xr = [],
    Vb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Dd(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Cr = null;
            break;
        case "dragenter":
        case "dragleave":
            Or = null;
            break;
        case "mouseover":
        case "mouseout":
            Tr = null;
            break;
        case "pointerover":
        case "pointerout":
            Do.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Fo.delete(t.pointerId)
    }
}

function fo(e, t, r, n, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = ii(t), t !== null && uc(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Qb(e, t, r, n, o) {
    switch (t) {
        case "focusin":
            return Cr = fo(Cr, e, t, r, n, o), !0;
        case "dragenter":
            return Or = fo(Or, e, t, r, n, o), !0;
        case "mouseover":
            return Tr = fo(Tr, e, t, r, n, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Do.set(i, fo(Do.get(i) || null, e, t, r, n, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Fo.set(i, fo(Fo.get(i) || null, e, t, r, n, o)), !0
    }
    return !1
}

function K0(e) {
    var t = Gr(e.target);
    if (t !== null) {
        var r = fn(t);
        if (r !== null) {
            if (t = r.tag, t === 13) {
                if (t = I0(r), t !== null) {
                    e.blockedOn = t, G0(e.priority, function() {
                        V0(r)
                    });
                    return
                }
            } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Zi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var r = ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
            r = e.nativeEvent;
            var n = new r.constructor(r.type, r);
            qs = n, r.target.dispatchEvent(n), qs = null
        } else return t = ii(r), t !== null && uc(t), e.blockedOn = r, !1;
        t.shift()
    }
    return !0
}

function Fd(e, t, r) {
    Zi(e) && r.delete(t)
}

function Gb() {
    tu = !1, Cr !== null && Zi(Cr) && (Cr = null), Or !== null && Zi(Or) && (Or = null), Tr !== null && Zi(Tr) && (Tr = null), Do.forEach(Fd), Fo.forEach(Fd)
}

function po(e, t) {
    e.blockedOn === t && (e.blockedOn = null, tu || (tu = !0, gt.unstable_scheduleCallback(gt.unstable_NormalPriority, Gb)))
}

function Ho(e) {
    function t(o) {
        return po(o, e)
    }
    if (0 < ji.length) {
        po(ji[0], e);
        for (var r = 1; r < ji.length; r++) {
            var n = ji[r];
            n.blockedOn === e && (n.blockedOn = null)
        }
    }
    for (Cr !== null && po(Cr, e), Or !== null && po(Or, e), Tr !== null && po(Tr, e), Do.forEach(t), Fo.forEach(t), r = 0; r < xr.length; r++) n = xr[r], n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < xr.length && (r = xr[0], r.blockedOn === null);) K0(r), r.blockedOn === null && xr.shift()
}
var Rn = sr.ReactCurrentBatchConfig,
    ma = !0;

function Kb(e, t, r, n) {
    var o = de,
        i = Rn.transition;
    Rn.transition = null;
    try {
        de = 1, cc(e, t, r, n)
    } finally {
        de = o, Rn.transition = i
    }
}

function Yb(e, t, r, n) {
    var o = de,
        i = Rn.transition;
    Rn.transition = null;
    try {
        de = 4, cc(e, t, r, n)
    } finally {
        de = o, Rn.transition = i
    }
}

function cc(e, t, r, n) {
    if (ma) {
        var o = ru(e, t, r, n);
        if (o === null) ts(e, t, n, ya, r), Dd(e, n);
        else if (Qb(o, e, t, r, n)) n.stopPropagation();
        else if (Dd(e, n), t & 4 && -1 < Vb.indexOf(e)) {
            for (; o !== null;) {
                var i = ii(o);
                if (i !== null && U0(i), i = ru(e, t, r, n), i === null && ts(e, t, n, ya, r), i === o) break;
                o = i
            }
            o !== null && n.stopPropagation()
        } else ts(e, t, n, null, r)
    }
}
var ya = null;

function ru(e, t, r, n) {
    if (ya = null, e = ac(n), e = Gr(e), e !== null)
        if (t = fn(e), t === null) e = null;
        else if (r = t.tag, r === 13) {
        if (e = I0(t), e !== null) return e;
        e = null
    } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return ya = e, null
}

function Y0(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ib()) {
                case lc:
                    return 1;
                case H0:
                    return 4;
                case ga:
                case Ab:
                    return 16;
                case $0:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Sr = null,
    dc = null,
    Ji = null;

function q0() {
    if (Ji) return Ji;
    var e, t = dc,
        r = t.length,
        n, o = "value" in Sr ? Sr.value : Sr.textContent,
        i = o.length;
    for (e = 0; e < r && t[e] === o[e]; e++);
    var a = r - e;
    for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
    return Ji = o.slice(e, 1 < n ? 1 - n : void 0)
}

function ea(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Pi() {
    return !0
}

function Hd() {
    return !1
}

function yt(e) {
    function t(r, n, o, i, a) {
        this._reactName = r, this._targetInst = o, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (r = e[l], this[l] = r ? r(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pi : Hd, this.isPropagationStopped = Hd, this
    }
    return Oe(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Pi)
        },
        stopPropagation: function() {
            var r = this.nativeEvent;
            r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Pi)
        },
        persist: function() {},
        isPersistent: Pi
    }), t
}
var to = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    fc = yt(to),
    oi = Oe({}, to, {
        view: 0,
        detail: 0
    }),
    qb = yt(oi),
    Ql, Gl, go, ll = Oe({}, oi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: pc,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== go && (go && e.type === "mousemove" ? (Ql = e.screenX - go.screenX, Gl = e.screenY - go.screenY) : Gl = Ql = 0, go = e), Ql)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Gl
        }
    }),
    $d = yt(ll),
    Xb = Oe({}, ll, {
        dataTransfer: 0
    }),
    Zb = yt(Xb),
    Jb = Oe({}, oi, {
        relatedTarget: 0
    }),
    Kl = yt(Jb),
    e1 = Oe({}, to, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    t1 = yt(e1),
    r1 = Oe({}, to, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    n1 = yt(r1),
    o1 = Oe({}, to, {
        data: 0
    }),
    Bd = yt(o1),
    i1 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    a1 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    l1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function s1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = l1[e]) ? !!t[e] : !1
}

function pc() {
    return s1
}
var u1 = Oe({}, oi, {
        key: function(e) {
            if (e.key) {
                var t = i1[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? a1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: pc,
        charCode: function(e) {
            return e.type === "keypress" ? ea(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    c1 = yt(u1),
    d1 = Oe({}, ll, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Wd = yt(d1),
    f1 = Oe({}, oi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: pc
    }),
    p1 = yt(f1),
    g1 = Oe({}, to, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    h1 = yt(g1),
    m1 = Oe({}, ll, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    y1 = yt(m1),
    v1 = [9, 13, 27, 32],
    gc = rr && "CompositionEvent" in window,
    Oo = null;
rr && "documentMode" in document && (Oo = document.documentMode);
var b1 = rr && "TextEvent" in window && !Oo,
    X0 = rr && (!gc || Oo && 8 < Oo && 11 >= Oo),
    Ud = " ",
    Vd = !1;

function Z0(e, t) {
    switch (e) {
        case "keyup":
            return v1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function J0(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var bn = !1;

function x1(e, t) {
    switch (e) {
        case "compositionend":
            return J0(t);
        case "keypress":
            return t.which !== 32 ? null : (Vd = !0, Ud);
        case "textInput":
            return e = t.data, e === Ud && Vd ? null : e;
        default:
            return null
    }
}

function w1(e, t) {
    if (bn) return e === "compositionend" || !gc && Z0(e, t) ? (e = q0(), Ji = dc = Sr = null, bn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return X0 && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var k1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Qd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!k1[e.type] : t === "textarea"
}

function eg(e, t, r, n) {
    _0(n), t = va(t, "onChange"), 0 < t.length && (r = new fc("onChange", "change", null, r, n), e.push({
        event: r,
        listeners: t
    }))
}
var To = null,
    $o = null;

function S1(e) {
    dg(e, 0)
}

function sl(e) {
    var t = kn(e);
    if (E0(t)) return e
}

function E1(e, t) {
    if (e === "change") return t
}
var tg = !1;
if (rr) {
    var Yl;
    if (rr) {
        var ql = "oninput" in document;
        if (!ql) {
            var Gd = document.createElement("div");
            Gd.setAttribute("oninput", "return;"), ql = typeof Gd.oninput == "function"
        }
        Yl = ql
    } else Yl = !1;
    tg = Yl && (!document.documentMode || 9 < document.documentMode)
}

function Kd() {
    To && (To.detachEvent("onpropertychange", rg), $o = To = null)
}

function rg(e) {
    if (e.propertyName === "value" && sl($o)) {
        var t = [];
        eg(t, $o, e, ac(e)), z0(S1, t)
    }
}

function C1(e, t, r) {
    e === "focusin" ? (Kd(), To = t, $o = r, To.attachEvent("onpropertychange", rg)) : e === "focusout" && Kd()
}

function O1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return sl($o)
}

function T1(e, t) {
    if (e === "click") return sl(t)
}

function j1(e, t) {
    if (e === "input" || e === "change") return sl(t)
}

function P1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var _t = typeof Object.is == "function" ? Object.is : P1;

function Bo(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e),
        n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
        var o = r[n];
        if (!Ds.call(t, o) || !_t(e[o], t[o])) return !1
    }
    return !0
}

function Yd(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function qd(e, t) {
    var r = Yd(e);
    e = 0;
    for (var n; r;) {
        if (r.nodeType === 3) {
            if (n = e + r.textContent.length, e <= t && n >= t) return {
                node: r,
                offset: t - e
            };
            e = n
        }
        e: {
            for (; r;) {
                if (r.nextSibling) {
                    r = r.nextSibling;
                    break e
                }
                r = r.parentNode
            }
            r = void 0
        }
        r = Yd(r)
    }
}

function ng(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ng(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function og() {
    for (var e = window, t = da(); t instanceof e.HTMLIFrameElement;) {
        try {
            var r = typeof t.contentWindow.location.href == "string"
        } catch {
            r = !1
        }
        if (r) e = t.contentWindow;
        else break;
        t = da(e.document)
    }
    return t
}

function hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function N1(e) {
    var t = og(),
        r = e.focusedElem,
        n = e.selectionRange;
    if (t !== r && r && r.ownerDocument && ng(r.ownerDocument.documentElement, r)) {
        if (n !== null && hc(r)) {
            if (t = n.start, e = n.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
            else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = r.textContent.length,
                    i = Math.min(n.start, o);
                n = n.end === void 0 ? i : Math.min(n.end, o), !e.extend && i > n && (o = n, n = i, i = o), o = qd(r, i);
                var a = qd(r, n);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
        }
        for (t = [], e = r; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var _1 = rr && "documentMode" in document && 11 >= document.documentMode,
    xn = null,
    nu = null,
    jo = null,
    ou = !1;

function Xd(e, t, r) {
    var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ou || xn == null || xn !== da(n) || (n = xn, "selectionStart" in n && hc(n) ? n = {
        start: n.selectionStart,
        end: n.selectionEnd
    } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
    }), jo && Bo(jo, n) || (jo = n, n = va(nu, "onSelect"), 0 < n.length && (t = new fc("onSelect", "select", null, t, r), e.push({
        event: t,
        listeners: n
    }), t.target = xn)))
}

function Ni(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
}
var wn = {
        animationend: Ni("Animation", "AnimationEnd"),
        animationiteration: Ni("Animation", "AnimationIteration"),
        animationstart: Ni("Animation", "AnimationStart"),
        transitionend: Ni("Transition", "TransitionEnd")
    },
    Xl = {},
    ig = {};
rr && (ig = document.createElement("div").style, "AnimationEvent" in window || (delete wn.animationend.animation, delete wn.animationiteration.animation, delete wn.animationstart.animation), "TransitionEvent" in window || delete wn.transitionend.transition);

function ul(e) {
    if (Xl[e]) return Xl[e];
    if (!wn[e]) return e;
    var t = wn[e],
        r;
    for (r in t)
        if (t.hasOwnProperty(r) && r in ig) return Xl[e] = t[r];
    return e
}
var ag = ul("animationend"),
    lg = ul("animationiteration"),
    sg = ul("animationstart"),
    ug = ul("transitionend"),
    cg = new Map,
    Zd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Dr(e, t) {
    cg.set(e, t), dn(t, [e])
}
for (var Zl = 0; Zl < Zd.length; Zl++) {
    var Jl = Zd[Zl],
        M1 = Jl.toLowerCase(),
        R1 = Jl[0].toUpperCase() + Jl.slice(1);
    Dr(M1, "on" + R1)
}
Dr(ag, "onAnimationEnd");
Dr(lg, "onAnimationIteration");
Dr(sg, "onAnimationStart");
Dr("dblclick", "onDoubleClick");
Dr("focusin", "onFocus");
Dr("focusout", "onBlur");
Dr(ug, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var So = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    L1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(So));

function Jd(e, t, r) {
    var n = e.type || "unknown-event";
    e.currentTarget = r, Mb(n, t, void 0, e), e.currentTarget = null
}

function dg(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
        var n = e[r],
            o = n.event;
        n = n.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var a = n.length - 1; 0 <= a; a--) {
                    var l = n[a],
                        s = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, s !== i && o.isPropagationStopped()) break e;
                    Jd(o, l, u), i = s
                } else
                    for (a = 0; a < n.length; a++) {
                        if (l = n[a], s = l.instance, u = l.currentTarget, l = l.listener, s !== i && o.isPropagationStopped()) break e;
                        Jd(o, l, u), i = s
                    }
        }
    }
    if (pa) throw e = Js, pa = !1, Js = null, e
}

function he(e, t) {
    var r = t[uu];
    r === void 0 && (r = t[uu] = new Set);
    var n = e + "__bubble";
    r.has(n) || (fg(t, e, 2, !1), r.add(n))
}

function es(e, t, r) {
    var n = 0;
    t && (n |= 4), fg(r, e, n, t)
}
var _i = "_reactListening" + Math.random().toString(36).slice(2);

function Wo(e) {
    if (!e[_i]) {
        e[_i] = !0, b0.forEach(function(r) {
            r !== "selectionchange" && (L1.has(r) || es(r, !1, e), es(r, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_i] || (t[_i] = !0, es("selectionchange", !1, t))
    }
}

function fg(e, t, r, n) {
    switch (Y0(t)) {
        case 1:
            var o = Kb;
            break;
        case 4:
            o = Yb;
            break;
        default:
            o = cc
    }
    r = o.bind(null, t, r, e), o = void 0, !Zs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, r, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, r, !0) : o !== void 0 ? e.addEventListener(t, r, {
        passive: o
    }) : e.addEventListener(t, r, !1)
}

function ts(e, t, r, n, o) {
    var i = n;
    if (!(t & 1) && !(t & 2) && n !== null) e: for (;;) {
        if (n === null) return;
        var a = n.tag;
        if (a === 3 || a === 4) {
            var l = n.stateNode.containerInfo;
            if (l === o || l.nodeType === 8 && l.parentNode === o) break;
            if (a === 4)
                for (a = n.return; a !== null;) {
                    var s = a.tag;
                    if ((s === 3 || s === 4) && (s = a.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
                    a = a.return
                }
            for (; l !== null;) {
                if (a = Gr(l), a === null) return;
                if (s = a.tag, s === 5 || s === 6) {
                    n = i = a;
                    continue e
                }
                l = l.parentNode
            }
        }
        n = n.return
    }
    z0(function() {
        var u = i,
            d = ac(r),
            c = [];
        e: {
            var f = cg.get(e);
            if (f !== void 0) {
                var h = fc,
                    m = e;
                switch (e) {
                    case "keypress":
                        if (ea(r) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = c1;
                        break;
                    case "focusin":
                        m = "focus", h = Kl;
                        break;
                    case "focusout":
                        m = "blur", h = Kl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Kl;
                        break;
                    case "click":
                        if (r.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = $d;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = Zb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = p1;
                        break;
                    case ag:
                    case lg:
                    case sg:
                        h = t1;
                        break;
                    case ug:
                        h = h1;
                        break;
                    case "scroll":
                        h = qb;
                        break;
                    case "wheel":
                        h = y1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = n1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Wd
                }
                var v = (t & 4) !== 0,
                    S = !v && e === "scroll",
                    y = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var p = u, b; p !== null;) {
                    b = p;
                    var x = b.stateNode;
                    if (b.tag === 5 && x !== null && (b = x, y !== null && (x = Ao(p, y), x != null && v.push(Uo(p, x, b)))), S) break;
                    p = p.return
                }
                0 < v.length && (f = new h(f, m, null, r, d), c.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && r !== qs && (m = r.relatedTarget || r.fromElement) && (Gr(m) || m[nr])) break e;
                if ((h || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (m = r.relatedTarget || r.toElement, h = u, m = m ? Gr(m) : null, m !== null && (S = fn(m), m !== S || m.tag !== 5 && m.tag !== 6) && (m = null)) : (h = null, m = u), h !== m)) {
                    if (v = $d, x = "onMouseLeave", y = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Wd, x = "onPointerLeave", y = "onPointerEnter", p = "pointer"), S = h == null ? f : kn(h), b = m == null ? f : kn(m), f = new v(x, p + "leave", h, r, d), f.target = S, f.relatedTarget = b, x = null, Gr(d) === u && (v = new v(y, p + "enter", m, r, d), v.target = b, v.relatedTarget = S, x = v), S = x, h && m) t: {
                        for (v = h, y = m, p = 0, b = v; b; b = hn(b)) p++;
                        for (b = 0, x = y; x; x = hn(x)) b++;
                        for (; 0 < p - b;) v = hn(v),
                        p--;
                        for (; 0 < b - p;) y = hn(y),
                        b--;
                        for (; p--;) {
                            if (v === y || y !== null && v === y.alternate) break t;
                            v = hn(v), y = hn(y)
                        }
                        v = null
                    }
                    else v = null;
                    h !== null && ef(c, f, h, v, !1), m !== null && S !== null && ef(c, S, m, v, !0)
                }
            }
            e: {
                if (f = u ? kn(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var k = E1;
                else if (Qd(f))
                    if (tg) k = j1;
                    else {
                        k = O1;
                        var E = C1
                    }
                else(h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = T1);
                if (k && (k = k(e, u))) {
                    eg(c, k, r, d);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Vs(f, "number", f.value)
            }
            switch (E = u ? kn(u) : window, e) {
                case "focusin":
                    (Qd(E) || E.contentEditable === "true") && (xn = E, nu = u, jo = null);
                    break;
                case "focusout":
                    jo = nu = xn = null;
                    break;
                case "mousedown":
                    ou = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ou = !1, Xd(c, r, d);
                    break;
                case "selectionchange":
                    if (_1) break;
                case "keydown":
                case "keyup":
                    Xd(c, r, d)
            }
            var R;
            if (gc) e: {
                switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                }
                L = void 0
            }
            else bn ? Z0(e, r) && (L = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (L = "onCompositionStart");L && (X0 && r.locale !== "ko" && (bn || L !== "onCompositionStart" ? L === "onCompositionEnd" && bn && (R = q0()) : (Sr = d, dc = "value" in Sr ? Sr.value : Sr.textContent, bn = !0)), E = va(u, L), 0 < E.length && (L = new Bd(L, e, null, r, d), c.push({
                event: L,
                listeners: E
            }), R ? L.data = R : (R = J0(r), R !== null && (L.data = R)))),
            (R = b1 ? x1(e, r) : w1(e, r)) && (u = va(u, "onBeforeInput"), 0 < u.length && (d = new Bd("onBeforeInput", "beforeinput", null, r, d), c.push({
                event: d,
                listeners: u
            }), d.data = R))
        }
        dg(c, t)
    })
}

function Uo(e, t, r) {
    return {
        instance: e,
        listener: t,
        currentTarget: r
    }
}

function va(e, t) {
    for (var r = t + "Capture", n = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Ao(e, r), i != null && n.unshift(Uo(e, i, o)), i = Ao(e, t), i != null && n.push(Uo(e, i, o))), e = e.return
    }
    return n
}

function hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ef(e, t, r, n, o) {
    for (var i = t._reactName, a = []; r !== null && r !== n;) {
        var l = r,
            s = l.alternate,
            u = l.stateNode;
        if (s !== null && s === n) break;
        l.tag === 5 && u !== null && (l = u, o ? (s = Ao(r, i), s != null && a.unshift(Uo(r, s, l))) : o || (s = Ao(r, i), s != null && a.push(Uo(r, s, l)))), r = r.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var z1 = /\r\n?/g,
    I1 = /\u0000|\uFFFD/g;

function tf(e) {
    return (typeof e == "string" ? e : "" + e).replace(z1, `
`).replace(I1, "")
}

function Mi(e, t, r) {
    if (t = tf(t), tf(e) !== t && r) throw Error(H(425))
}

function ba() {}
var iu = null,
    au = null;

function lu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var su = typeof setTimeout == "function" ? setTimeout : void 0,
    A1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rf = typeof Promise == "function" ? Promise : void 0,
    D1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof rf < "u" ? function(e) {
        return rf.resolve(null).then(e).catch(F1)
    } : su;

function F1(e) {
    setTimeout(function() {
        throw e
    })
}

function rs(e, t) {
    var r = t,
        n = 0;
    do {
        var o = r.nextSibling;
        if (e.removeChild(r), o && o.nodeType === 8)
            if (r = o.data, r === "/$") {
                if (n === 0) {
                    e.removeChild(o), Ho(t);
                    return
                }
                n--
            } else r !== "$" && r !== "$?" && r !== "$!" || n++;
        r = o
    } while (r);
    Ho(t)
}

function jr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function nf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var r = e.data;
            if (r === "$" || r === "$!" || r === "$?") {
                if (t === 0) return e;
                t--
            } else r === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ro = Math.random().toString(36).slice(2),
    Ht = "__reactFiber$" + ro,
    Vo = "__reactProps$" + ro,
    nr = "__reactContainer$" + ro,
    uu = "__reactEvents$" + ro,
    H1 = "__reactListeners$" + ro,
    $1 = "__reactHandles$" + ro;

function Gr(e) {
    var t = e[Ht];
    if (t) return t;
    for (var r = e.parentNode; r;) {
        if (t = r[nr] || r[Ht]) {
            if (r = t.alternate, t.child !== null || r !== null && r.child !== null)
                for (e = nf(e); e !== null;) {
                    if (r = e[Ht]) return r;
                    e = nf(e)
                }
            return t
        }
        e = r, r = e.parentNode
    }
    return null
}

function ii(e) {
    return e = e[Ht] || e[nr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(H(33))
}

function cl(e) {
    return e[Vo] || null
}
var cu = [],
    Sn = -1;

function Fr(e) {
    return {
        current: e
    }
}

function ye(e) {
    0 > Sn || (e.current = cu[Sn], cu[Sn] = null, Sn--)
}

function pe(e, t) {
    Sn++, cu[Sn] = e.current, e.current = t
}
var Ir = {},
    qe = Fr(Ir),
    lt = Fr(!1),
    tn = Ir;

function Hn(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Ir;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in r) o[i] = t[i];
    return n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function st(e) {
    return e = e.childContextTypes, e != null
}

function xa() {
    ye(lt), ye(qe)
}

function of (e, t, r) {
    if (qe.current !== Ir) throw Error(H(168));
    pe(qe, t), pe(lt, r)
}

function pg(e, t, r) {
    var n = e.stateNode;
    if (t = t.childContextTypes, typeof n.getChildContext != "function") return r;
    n = n.getChildContext();
    for (var o in n)
        if (!(o in t)) throw Error(H(108, Cb(e) || "Unknown", o));
    return Oe({}, r, n)
}

function wa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir, tn = qe.current, pe(qe, e), pe(lt, lt.current), !0
}

function af(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(H(169));
    r ? (e = pg(e, t, tn), n.__reactInternalMemoizedMergedChildContext = e, ye(lt), ye(qe), pe(qe, e)) : ye(lt), pe(lt, r)
}
var Xt = null,
    dl = !1,
    ns = !1;

function gg(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}

function B1(e) {
    dl = !0, gg(e)
}

function Hr() {
    if (!ns && Xt !== null) {
        ns = !0;
        var e = 0,
            t = de;
        try {
            var r = Xt;
            for (de = 1; e < r.length; e++) {
                var n = r[e];
                do n = n(!0); while (n !== null)
            }
            Xt = null, dl = !1
        } catch (o) {
            throw Xt !== null && (Xt = Xt.slice(e + 1)), F0(lc, Hr), o
        } finally {
            de = t, ns = !1
        }
    }
    return null
}
var En = [],
    Cn = 0,
    ka = null,
    Sa = 0,
    vt = [],
    bt = 0,
    rn = null,
    Jt = 1,
    er = "";

function Wr(e, t) {
    En[Cn++] = Sa, En[Cn++] = ka, ka = e, Sa = t
}

function hg(e, t, r) {
    vt[bt++] = Jt, vt[bt++] = er, vt[bt++] = rn, rn = e;
    var n = Jt;
    e = er;
    var o = 32 - Pt(n) - 1;
    n &= ~(1 << o), r += 1;
    var i = 32 - Pt(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (n & (1 << a) - 1).toString(32), n >>= a, o -= a, Jt = 1 << 32 - Pt(t) + o | r << o | n, er = i + e
    } else Jt = 1 << i | r << o | n, er = e
}

function mc(e) {
    e.return !== null && (Wr(e, 1), hg(e, 1, 0))
}

function yc(e) {
    for (; e === ka;) ka = En[--Cn], En[Cn] = null, Sa = En[--Cn], En[Cn] = null;
    for (; e === rn;) rn = vt[--bt], vt[bt] = null, er = vt[--bt], vt[bt] = null, Jt = vt[--bt], vt[bt] = null
}
var pt = null,
    ft = null,
    xe = !1,
    jt = null;

function mg(e, t) {
    var r = xt(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r)
}

function lf(e, t) {
    switch (e.tag) {
        case 5:
            var r = e.type;
            return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pt = e, ft = jr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pt = e, ft = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (r = rn !== null ? {
                id: Jt,
                overflow: er
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824
            }, r = xt(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, pt = e, ft = null, !0) : !1;
        default:
            return !1
    }
}

function du(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function fu(e) {
    if (xe) {
        var t = ft;
        if (t) {
            var r = t;
            if (!lf(e, t)) {
                if (du(e)) throw Error(H(418));
                t = jr(r.nextSibling);
                var n = pt;
                t && lf(e, t) ? mg(n, r) : (e.flags = e.flags & -4097 | 2, xe = !1, pt = e)
            }
        } else {
            if (du(e)) throw Error(H(418));
            e.flags = e.flags & -4097 | 2, xe = !1, pt = e
        }
    }
}

function sf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    pt = e
}

function Ri(e) {
    if (e !== pt) return !1;
    if (!xe) return sf(e), xe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !lu(e.type, e.memoizedProps)), t && (t = ft)) {
        if (du(e)) throw yg(), Error(H(418));
        for (; t;) mg(e, t), t = jr(t.nextSibling)
    }
    if (sf(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var r = e.data;
                    if (r === "/$") {
                        if (t === 0) {
                            ft = jr(e.nextSibling);
                            break e
                        }
                        t--
                    } else r !== "$" && r !== "$!" && r !== "$?" || t++
                }
                e = e.nextSibling
            }
            ft = null
        }
    } else ft = pt ? jr(e.stateNode.nextSibling) : null;
    return !0
}

function yg() {
    for (var e = ft; e;) e = jr(e.nextSibling)
}

function $n() {
    ft = pt = null, xe = !1
}

function vc(e) {
    jt === null ? jt = [e] : jt.push(e)
}
var W1 = sr.ReactCurrentBatchConfig;

function Ot(e, t) {
    if (e && e.defaultProps) {
        t = Oe({}, t), e = e.defaultProps;
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    return t
}
var Ea = Fr(null),
    Ca = null,
    On = null,
    bc = null;

function xc() {
    bc = On = Ca = null
}

function wc(e) {
    var t = Ea.current;
    ye(Ea), e._currentValue = t
}

function pu(e, t, r) {
    for (; e !== null;) {
        var n = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
        e = e.return
    }
}

function Ln(e, t) {
    Ca = e, bc = On = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (at = !0), e.firstContext = null)
}

function kt(e) {
    var t = e._currentValue;
    if (bc !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, On === null) {
            if (Ca === null) throw Error(H(308));
            On = e, Ca.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else On = On.next = e;
    return t
}
var Kr = null;

function kc(e) {
    Kr === null ? Kr = [e] : Kr.push(e)
}

function vg(e, t, r, n) {
    var o = t.interleaved;
    return o === null ? (r.next = r, kc(t)) : (r.next = o.next, o.next = r), t.interleaved = r, or(e, n)
}

function or(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null
}
var vr = !1;

function Sc(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function bg(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function tr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Pr(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, ce & 2) {
        var o = n.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, or(e, r)
    }
    return o = n.interleaved, o === null ? (t.next = t, kc(n)) : (t.next = o.next, o.next = t), n.interleaved = t, or(e, r)
}

function ta(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, sc(e, r)
    }
}

function uf(e, t) {
    var r = e.updateQueue,
        n = e.alternate;
    if (n !== null && (n = n.updateQueue, r === n)) {
        var o = null,
            i = null;
        if (r = r.firstBaseUpdate, r !== null) {
            do {
                var a = {
                    eventTime: r.eventTime,
                    lane: r.lane,
                    tag: r.tag,
                    payload: r.payload,
                    callback: r.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a, r = r.next
            } while (r !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        r = {
            baseState: n.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: n.shared,
            effects: n.effects
        }, e.updateQueue = r;
        return
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
}

function Oa(e, t, r, n) {
    var o = e.updateQueue;
    vr = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var s = l,
            u = s.next;
        s.next = null, a === null ? i = u : a.next = u, a = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== a && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = s))
    }
    if (i !== null) {
        var c = o.baseState;
        a = 0, d = u = s = null, l = i;
        do {
            var f = l.lane,
                h = l.eventTime;
            if ((n & f) === f) {
                d !== null && (d = d.next = {
                    eventTime: h,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var m = e,
                        v = l;
                    switch (f = t, h = r, v.tag) {
                        case 1:
                            if (m = v.payload, typeof m == "function") {
                                c = m.call(h, c, f);
                                break e
                            }
                            c = m;
                            break e;
                        case 3:
                            m.flags = m.flags & -65537 | 128;
                        case 0:
                            if (m = v.payload, f = typeof m == "function" ? m.call(h, c, f) : m, f == null) break e;
                            c = Oe({}, c, f);
                            break e;
                        case 2:
                            vr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [l] : f.push(l))
            } else h = {
                eventTime: h,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, d === null ? (u = d = h, s = c) : d = d.next = h, a |= f;
            if (l = l.next, l === null) {
                if (l = o.shared.pending, l === null) break;
                f = l, l = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        } while (!0);
        if (d === null && (s = c), o.baseState = s, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
            o = t;
            do a |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        on |= a, e.lanes = a, e.memoizedState = c
    }
}

function cf(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var n = e[t],
                o = n.callback;
            if (o !== null) {
                if (n.callback = null, n = r, typeof o != "function") throw Error(H(191, o));
                o.call(n)
            }
        }
}
var xg = new v0.Component().refs;

function gu(e, t, r, n) {
    t = e.memoizedState, r = r(n, t), r = r == null ? t : Oe({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r)
}
var fl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fn(e) === e : !1
    },
    enqueueSetState: function(e, t, r) {
        e = e._reactInternals;
        var n = tt(),
            o = _r(e),
            i = tr(n, o);
        i.payload = t, r != null && (i.callback = r), t = Pr(e, i, o), t !== null && (Nt(t, e, o, n), ta(t, e, o))
    },
    enqueueReplaceState: function(e, t, r) {
        e = e._reactInternals;
        var n = tt(),
            o = _r(e),
            i = tr(n, o);
        i.tag = 1, i.payload = t, r != null && (i.callback = r), t = Pr(e, i, o), t !== null && (Nt(t, e, o, n), ta(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var r = tt(),
            n = _r(e),
            o = tr(r, n);
        o.tag = 2, t != null && (o.callback = t), t = Pr(e, o, n), t !== null && (Nt(t, e, n, r), ta(t, e, n))
    }
};

function df(e, t, r, n, o, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, a) : t.prototype && t.prototype.isPureReactComponent ? !Bo(r, n) || !Bo(o, i) : !0
}

function wg(e, t, r) {
    var n = !1,
        o = Ir,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = kt(i) : (o = st(t) ? tn : qe.current, n = t.contextTypes, i = (n = n != null) ? Hn(e, o) : Ir), t = new t(r, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, n && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ff(e, t, r, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && fl.enqueueReplaceState(t, t.state, null)
}

function hu(e, t, r, n) {
    var o = e.stateNode;
    o.props = r, o.state = e.memoizedState, o.refs = xg, Sc(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = kt(i) : (i = st(t) ? tn : qe.current, o.context = Hn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (gu(e, t, i, r), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && fl.enqueueReplaceState(o, o.state, null), Oa(e, r, o, n), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function ho(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (r._owner) {
            if (r = r._owner, r) {
                if (r.tag !== 1) throw Error(H(309));
                var n = r.stateNode
            }
            if (!n) throw Error(H(147, e));
            var o = n,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var l = o.refs;
                l === xg && (l = o.refs = {}), a === null ? delete l[i] : l[i] = a
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(H(284));
        if (!r._owner) throw Error(H(290, e))
    }
    return e
}

function Li(e, t) {
    throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function pf(e) {
    var t = e._init;
    return t(e._payload)
}

function kg(e) {
    function t(y, p) {
        if (e) {
            var b = y.deletions;
            b === null ? (y.deletions = [p], y.flags |= 16) : b.push(p)
        }
    }

    function r(y, p) {
        if (!e) return null;
        for (; p !== null;) t(y, p), p = p.sibling;
        return null
    }

    function n(y, p) {
        for (y = new Map; p !== null;) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
        return y
    }

    function o(y, p) {
        return y = Mr(y, p), y.index = 0, y.sibling = null, y
    }

    function i(y, p, b) {
        return y.index = b, e ? (b = y.alternate, b !== null ? (b = b.index, b < p ? (y.flags |= 2, p) : b) : (y.flags |= 2, p)) : (y.flags |= 1048576, p)
    }

    function a(y) {
        return e && y.alternate === null && (y.flags |= 2), y
    }

    function l(y, p, b, x) {
        return p === null || p.tag !== 6 ? (p = cs(b, y.mode, x), p.return = y, p) : (p = o(p, b), p.return = y, p)
    }

    function s(y, p, b, x) {
        var k = b.type;
        return k === vn ? d(y, p, b.props.children, x, b.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === yr && pf(k) === p.type) ? (x = o(p, b.props), x.ref = ho(y, p, b), x.return = y, x) : (x = la(b.type, b.key, b.props, null, y.mode, x), x.ref = ho(y, p, b), x.return = y, x)
    }

    function u(y, p, b, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== b.containerInfo || p.stateNode.implementation !== b.implementation ? (p = ds(b, y.mode, x), p.return = y, p) : (p = o(p, b.children || []), p.return = y, p)
    }

    function d(y, p, b, x, k) {
        return p === null || p.tag !== 7 ? (p = Zr(b, y.mode, x, k), p.return = y, p) : (p = o(p, b), p.return = y, p)
    }

    function c(y, p, b) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = cs("" + p, y.mode, b), p.return = y, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Si:
                    return b = la(p.type, p.key, p.props, null, y.mode, b), b.ref = ho(y, null, p), b.return = y, b;
                case yn:
                    return p = ds(p, y.mode, b), p.return = y, p;
                case yr:
                    var x = p._init;
                    return c(y, x(p._payload), b)
            }
            if (wo(p) || uo(p)) return p = Zr(p, y.mode, b, null), p.return = y, p;
            Li(y, p)
        }
        return null
    }

    function f(y, p, b, x) {
        var k = p !== null ? p.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number") return k !== null ? null : l(y, p, "" + b, x);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Si:
                    return b.key === k ? s(y, p, b, x) : null;
                case yn:
                    return b.key === k ? u(y, p, b, x) : null;
                case yr:
                    return k = b._init, f(y, p, k(b._payload), x)
            }
            if (wo(b) || uo(b)) return k !== null ? null : d(y, p, b, x, null);
            Li(y, b)
        }
        return null
    }

    function h(y, p, b, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return y = y.get(b) || null, l(p, y, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Si:
                    return y = y.get(x.key === null ? b : x.key) || null, s(p, y, x, k);
                case yn:
                    return y = y.get(x.key === null ? b : x.key) || null, u(p, y, x, k);
                case yr:
                    var E = x._init;
                    return h(y, p, b, E(x._payload), k)
            }
            if (wo(x) || uo(x)) return y = y.get(b) || null, d(p, y, x, k, null);
            Li(p, x)
        }
        return null
    }

    function m(y, p, b, x) {
        for (var k = null, E = null, R = p, L = p = 0, j = null; R !== null && L < b.length; L++) {
            R.index > L ? (j = R, R = null) : j = R.sibling;
            var T = f(y, R, b[L], x);
            if (T === null) {
                R === null && (R = j);
                break
            }
            e && R && T.alternate === null && t(y, R), p = i(T, p, L), E === null ? k = T : E.sibling = T, E = T, R = j
        }
        if (L === b.length) return r(y, R), xe && Wr(y, L), k;
        if (R === null) {
            for (; L < b.length; L++) R = c(y, b[L], x), R !== null && (p = i(R, p, L), E === null ? k = R : E.sibling = R, E = R);
            return xe && Wr(y, L), k
        }
        for (R = n(y, R); L < b.length; L++) j = h(R, y, L, b[L], x), j !== null && (e && j.alternate !== null && R.delete(j.key === null ? L : j.key), p = i(j, p, L), E === null ? k = j : E.sibling = j, E = j);
        return e && R.forEach(function(_) {
            return t(y, _)
        }), xe && Wr(y, L), k
    }

    function v(y, p, b, x) {
        var k = uo(b);
        if (typeof k != "function") throw Error(H(150));
        if (b = k.call(b), b == null) throw Error(H(151));
        for (var E = k = null, R = p, L = p = 0, j = null, T = b.next(); R !== null && !T.done; L++, T = b.next()) {
            R.index > L ? (j = R, R = null) : j = R.sibling;
            var _ = f(y, R, T.value, x);
            if (_ === null) {
                R === null && (R = j);
                break
            }
            e && R && _.alternate === null && t(y, R), p = i(_, p, L), E === null ? k = _ : E.sibling = _, E = _, R = j
        }
        if (T.done) return r(y, R), xe && Wr(y, L), k;
        if (R === null) {
            for (; !T.done; L++, T = b.next()) T = c(y, T.value, x), T !== null && (p = i(T, p, L), E === null ? k = T : E.sibling = T, E = T);
            return xe && Wr(y, L), k
        }
        for (R = n(y, R); !T.done; L++, T = b.next()) T = h(R, y, L, T.value, x), T !== null && (e && T.alternate !== null && R.delete(T.key === null ? L : T.key), p = i(T, p, L), E === null ? k = T : E.sibling = T, E = T);
        return e && R.forEach(function(O) {
            return t(y, O)
        }), xe && Wr(y, L), k
    }

    function S(y, p, b, x) {
        if (typeof b == "object" && b !== null && b.type === vn && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
                case Si:
                    e: {
                        for (var k = b.key, E = p; E !== null;) {
                            if (E.key === k) {
                                if (k = b.type, k === vn) {
                                    if (E.tag === 7) {
                                        r(y, E.sibling), p = o(E, b.props.children), p.return = y, y = p;
                                        break e
                                    }
                                } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === yr && pf(k) === E.type) {
                                    r(y, E.sibling), p = o(E, b.props), p.ref = ho(y, E, b), p.return = y, y = p;
                                    break e
                                }
                                r(y, E);
                                break
                            } else t(y, E);
                            E = E.sibling
                        }
                        b.type === vn ? (p = Zr(b.props.children, y.mode, x, b.key), p.return = y, y = p) : (x = la(b.type, b.key, b.props, null, y.mode, x), x.ref = ho(y, p, b), x.return = y, y = x)
                    }
                    return a(y);
                case yn:
                    e: {
                        for (E = b.key; p !== null;) {
                            if (p.key === E)
                                if (p.tag === 4 && p.stateNode.containerInfo === b.containerInfo && p.stateNode.implementation === b.implementation) {
                                    r(y, p.sibling), p = o(p, b.children || []), p.return = y, y = p;
                                    break e
                                } else {
                                    r(y, p);
                                    break
                                }
                            else t(y, p);
                            p = p.sibling
                        }
                        p = ds(b, y.mode, x),
                        p.return = y,
                        y = p
                    }
                    return a(y);
                case yr:
                    return E = b._init, S(y, p, E(b._payload), x)
            }
            if (wo(b)) return m(y, p, b, x);
            if (uo(b)) return v(y, p, b, x);
            Li(y, b)
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, p !== null && p.tag === 6 ? (r(y, p.sibling), p = o(p, b), p.return = y, y = p) : (r(y, p), p = cs(b, y.mode, x), p.return = y, y = p), a(y)) : r(y, p)
    }
    return S
}
var Bn = kg(!0),
    Sg = kg(!1),
    ai = {},
    Ut = Fr(ai),
    Qo = Fr(ai),
    Go = Fr(ai);

function Yr(e) {
    if (e === ai) throw Error(H(174));
    return e
}

function Ec(e, t) {
    switch (pe(Go, t), pe(Qo, e), pe(Ut, ai), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Gs(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Gs(t, e)
    }
    ye(Ut), pe(Ut, t)
}

function Wn() {
    ye(Ut), ye(Qo), ye(Go)
}

function Eg(e) {
    Yr(Go.current);
    var t = Yr(Ut.current),
        r = Gs(t, e.type);
    t !== r && (pe(Qo, e), pe(Ut, r))
}

function Cc(e) {
    Qo.current === e && (ye(Ut), ye(Qo))
}
var Ee = Fr(0);

function Ta(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var r = t.memoizedState;
            if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var os = [];

function Oc() {
    for (var e = 0; e < os.length; e++) os[e]._workInProgressVersionPrimary = null;
    os.length = 0
}
var ra = sr.ReactCurrentDispatcher,
    is = sr.ReactCurrentBatchConfig,
    nn = 0,
    Ce = null,
    ze = null,
    Ae = null,
    ja = !1,
    Po = !1,
    Ko = 0,
    U1 = 0;

function Qe() {
    throw Error(H(321))
}

function Tc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
        if (!_t(e[r], t[r])) return !1;
    return !0
}

function jc(e, t, r, n, o, i) {
    if (nn = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ra.current = e === null || e.memoizedState === null ? K1 : Y1, e = r(n, o), Po) {
        i = 0;
        do {
            if (Po = !1, Ko = 0, 25 <= i) throw Error(H(301));
            i += 1, Ae = ze = null, t.updateQueue = null, ra.current = q1, e = r(n, o)
        } while (Po)
    }
    if (ra.current = Pa, t = ze !== null && ze.next !== null, nn = 0, Ae = ze = Ce = null, ja = !1, t) throw Error(H(300));
    return e
}

function Pc() {
    var e = Ko !== 0;
    return Ko = 0, e
}

function Dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ae === null ? Ce.memoizedState = Ae = e : Ae = Ae.next = e, Ae
}

function St() {
    if (ze === null) {
        var e = Ce.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ze.next;
    var t = Ae === null ? Ce.memoizedState : Ae.next;
    if (t !== null) Ae = t, ze = e;
    else {
        if (e === null) throw Error(H(310));
        ze = e, e = {
            memoizedState: ze.memoizedState,
            baseState: ze.baseState,
            baseQueue: ze.baseQueue,
            queue: ze.queue,
            next: null
        }, Ae === null ? Ce.memoizedState = Ae = e : Ae = Ae.next = e
    }
    return Ae
}

function Yo(e, t) {
    return typeof t == "function" ? t(e) : t
}

function as(e) {
    var t = St(),
        r = t.queue;
    if (r === null) throw Error(H(311));
    r.lastRenderedReducer = e;
    var n = ze,
        o = n.baseQueue,
        i = r.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next, i.next = a
        }
        n.baseQueue = o = i, r.pending = null
    }
    if (o !== null) {
        i = o.next, n = n.baseState;
        var l = a = null,
            s = null,
            u = i;
        do {
            var d = u.lane;
            if ((nn & d) === d) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), n = u.hasEagerState ? u.eagerState : e(n, u.action);
            else {
                var c = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (l = s = c, a = n) : s = s.next = c, Ce.lanes |= d, on |= d
            }
            u = u.next
        } while (u !== null && u !== i);
        s === null ? a = n : s.next = l, _t(n, t.memoizedState) || (at = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = s, r.lastRenderedState = n
    }
    if (e = r.interleaved, e !== null) {
        o = e;
        do i = o.lane, Ce.lanes |= i, on |= i, o = o.next; while (o !== e)
    } else o === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch]
}

function ls(e) {
    var t = St(),
        r = t.queue;
    if (r === null) throw Error(H(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
        o = r.pending,
        i = t.memoizedState;
    if (o !== null) {
        r.pending = null;
        var a = o = o.next;
        do i = e(i, a.action), a = a.next; while (a !== o);
        _t(i, t.memoizedState) || (at = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), r.lastRenderedState = i
    }
    return [i, n]
}

function Cg() {}

function Og(e, t) {
    var r = Ce,
        n = St(),
        o = t(),
        i = !_t(n.memoizedState, o);
    if (i && (n.memoizedState = o, at = !0), n = n.queue, Nc(Pg.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || Ae !== null && Ae.memoizedState.tag & 1) {
        if (r.flags |= 2048, qo(9, jg.bind(null, r, n, o, t), void 0, null), Fe === null) throw Error(H(349));
        nn & 30 || Tg(r, t, o)
    }
    return o
}

function Tg(e, t, r) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: r
    }, t = Ce.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Ce.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e))
}

function jg(e, t, r, n) {
    t.value = r, t.getSnapshot = n, Ng(t) && _g(e)
}

function Pg(e, t, r) {
    return r(function() {
        Ng(t) && _g(e)
    })
}

function Ng(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !_t(e, r)
    } catch {
        return !0
    }
}

function _g(e) {
    var t = or(e, 1);
    t !== null && Nt(t, e, 1, -1)
}

function gf(e) {
    var t = Dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yo,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = G1.bind(null, Ce, e), [t.memoizedState, e]
}

function qo(e, t, r, n) {
    return e = {
        tag: e,
        create: t,
        destroy: r,
        deps: n,
        next: null
    }, t = Ce.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e)), e
}

function Mg() {
    return St().memoizedState
}

function na(e, t, r, n) {
    var o = Dt();
    Ce.flags |= e, o.memoizedState = qo(1 | t, r, void 0, n === void 0 ? null : n)
}

function pl(e, t, r, n) {
    var o = St();
    n = n === void 0 ? null : n;
    var i = void 0;
    if (ze !== null) {
        var a = ze.memoizedState;
        if (i = a.destroy, n !== null && Tc(n, a.deps)) {
            o.memoizedState = qo(t, r, i, n);
            return
        }
    }
    Ce.flags |= e, o.memoizedState = qo(1 | t, r, i, n)
}

function hf(e, t) {
    return na(8390656, 8, e, t)
}

function Nc(e, t) {
    return pl(2048, 8, e, t)
}

function Rg(e, t) {
    return pl(4, 2, e, t)
}

function Lg(e, t) {
    return pl(4, 4, e, t)
}

function zg(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ig(e, t, r) {
    return r = r != null ? r.concat([e]) : null, pl(4, 4, zg.bind(null, t, e), r)
}

function _c() {}

function Ag(e, t) {
    var r = St();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Tc(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
}

function Dg(e, t) {
    var r = St();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Tc(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
}

function Fg(e, t, r) {
    return nn & 21 ? (_t(r, t) || (r = B0(), Ce.lanes |= r, on |= r, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, at = !0), e.memoizedState = r)
}

function V1(e, t) {
    var r = de;
    de = r !== 0 && 4 > r ? r : 4, e(!0);
    var n = is.transition;
    is.transition = {};
    try {
        e(!1), t()
    } finally {
        de = r, is.transition = n
    }
}

function Hg() {
    return St().memoizedState
}

function Q1(e, t, r) {
    var n = _r(e);
    if (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, $g(e)) Bg(t, r);
    else if (r = vg(e, t, r, n), r !== null) {
        var o = tt();
        Nt(r, e, n, o), Wg(r, t, n)
    }
}

function G1(e, t, r) {
    var n = _r(e),
        o = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if ($g(e)) Bg(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var a = t.lastRenderedState,
                l = i(a, r);
            if (o.hasEagerState = !0, o.eagerState = l, _t(l, a)) {
                var s = t.interleaved;
                s === null ? (o.next = o, kc(t)) : (o.next = s.next, s.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        r = vg(e, t, o, n), r !== null && (o = tt(), Nt(r, e, n, o), Wg(r, t, n))
    }
}

function $g(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce
}

function Bg(e, t) {
    Po = ja = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
}

function Wg(e, t, r) {
    if (r & 4194240) {
        var n = t.lanes;
        n &= e.pendingLanes, r |= n, t.lanes = r, sc(e, r)
    }
}
var Pa = {
        readContext: kt,
        useCallback: Qe,
        useContext: Qe,
        useEffect: Qe,
        useImperativeHandle: Qe,
        useInsertionEffect: Qe,
        useLayoutEffect: Qe,
        useMemo: Qe,
        useReducer: Qe,
        useRef: Qe,
        useState: Qe,
        useDebugValue: Qe,
        useDeferredValue: Qe,
        useTransition: Qe,
        useMutableSource: Qe,
        useSyncExternalStore: Qe,
        useId: Qe,
        unstable_isNewReconciler: !1
    },
    K1 = {
        readContext: kt,
        useCallback: function(e, t) {
            return Dt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: kt,
        useEffect: hf,
        useImperativeHandle: function(e, t, r) {
            return r = r != null ? r.concat([e]) : null, na(4194308, 4, zg.bind(null, t, e), r)
        },
        useLayoutEffect: function(e, t) {
            return na(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return na(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var r = Dt();
            return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e
        },
        useReducer: function(e, t, r) {
            var n = Dt();
            return t = r !== void 0 ? r(t) : t, n.memoizedState = n.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, n.queue = e, e = e.dispatch = Q1.bind(null, Ce, e), [n.memoizedState, e]
        },
        useRef: function(e) {
            var t = Dt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: gf,
        useDebugValue: _c,
        useDeferredValue: function(e) {
            return Dt().memoizedState = e
        },
        useTransition: function() {
            var e = gf(!1),
                t = e[0];
            return e = V1.bind(null, e[1]), Dt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, r) {
            var n = Ce,
                o = Dt();
            if (xe) {
                if (r === void 0) throw Error(H(407));
                r = r()
            } else {
                if (r = t(), Fe === null) throw Error(H(349));
                nn & 30 || Tg(n, t, r)
            }
            o.memoizedState = r;
            var i = {
                value: r,
                getSnapshot: t
            };
            return o.queue = i, hf(Pg.bind(null, n, i, e), [e]), n.flags |= 2048, qo(9, jg.bind(null, n, i, r, t), void 0, null), r
        },
        useId: function() {
            var e = Dt(),
                t = Fe.identifierPrefix;
            if (xe) {
                var r = er,
                    n = Jt;
                r = (n & ~(1 << 32 - Pt(n) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = Ko++, 0 < r && (t += "H" + r.toString(32)), t += ":"
            } else r = U1++, t = ":" + t + "r" + r.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Y1 = {
        readContext: kt,
        useCallback: Ag,
        useContext: kt,
        useEffect: Nc,
        useImperativeHandle: Ig,
        useInsertionEffect: Rg,
        useLayoutEffect: Lg,
        useMemo: Dg,
        useReducer: as,
        useRef: Mg,
        useState: function() {
            return as(Yo)
        },
        useDebugValue: _c,
        useDeferredValue: function(e) {
            var t = St();
            return Fg(t, ze.memoizedState, e)
        },
        useTransition: function() {
            var e = as(Yo)[0],
                t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: Cg,
        useSyncExternalStore: Og,
        useId: Hg,
        unstable_isNewReconciler: !1
    },
    q1 = {
        readContext: kt,
        useCallback: Ag,
        useContext: kt,
        useEffect: Nc,
        useImperativeHandle: Ig,
        useInsertionEffect: Rg,
        useLayoutEffect: Lg,
        useMemo: Dg,
        useReducer: ls,
        useRef: Mg,
        useState: function() {
            return ls(Yo)
        },
        useDebugValue: _c,
        useDeferredValue: function(e) {
            var t = St();
            return ze === null ? t.memoizedState = e : Fg(t, ze.memoizedState, e)
        },
        useTransition: function() {
            var e = ls(Yo)[0],
                t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: Cg,
        useSyncExternalStore: Og,
        useId: Hg,
        unstable_isNewReconciler: !1
    };

function Un(e, t) {
    try {
        var r = "",
            n = t;
        do r += Eb(n), n = n.return; while (n);
        var o = r
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function ss(e, t, r) {
    return {
        value: e,
        source: null,
        stack: r ? ? null,
        digest: t ? ? null
    }
}

function mu(e, t) {
    try {
        console.error(t.value)
    } catch (r) {
        setTimeout(function() {
            throw r
        })
    }
}
var X1 = typeof WeakMap == "function" ? WeakMap : Map;

function Ug(e, t, r) {
    r = tr(-1, r), r.tag = 3, r.payload = {
        element: null
    };
    var n = t.value;
    return r.callback = function() {
        _a || (_a = !0, Ou = n), mu(e, t)
    }, r
}

function Vg(e, t, r) {
    r = tr(-1, r), r.tag = 3;
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
        var o = t.value;
        r.payload = function() {
            return n(o)
        }, r.callback = function() {
            mu(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (r.callback = function() {
        mu(e, t), typeof n != "function" && (Nr === null ? Nr = new Set([this]) : Nr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), r
}

function mf(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
        n = e.pingCache = new X1;
        var o = new Set;
        n.set(t, o)
    } else o = n.get(t), o === void 0 && (o = new Set, n.set(t, o));
    o.has(r) || (o.add(r), e = dx.bind(null, e, t, r), t.then(e, e))
}

function yf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function vf(e, t, r, n, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = tr(-1, 1), t.tag = 2, Pr(r, t, 1))), r.lanes |= 1), e)
}
var Z1 = sr.ReactCurrentOwner,
    at = !1;

function Je(e, t, r, n) {
    t.child = e === null ? Sg(t, null, r, n) : Bn(t, e.child, r, n)
}

function bf(e, t, r, n, o) {
    r = r.render;
    var i = t.ref;
    return Ln(t, o), n = jc(e, t, r, n, i, o), r = Pc(), e !== null && !at ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ir(e, t, o)) : (xe && r && mc(t), t.flags |= 1, Je(e, t, n, o), t.child)
}

function xf(e, t, r, n, o) {
    if (e === null) {
        var i = r.type;
        return typeof i == "function" && !Fc(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = i, Qg(e, t, i, n, o)) : (e = la(r.type, null, n, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var a = i.memoizedProps;
        if (r = r.compare, r = r !== null ? r : Bo, r(a, n) && e.ref === t.ref) return ir(e, t, o)
    }
    return t.flags |= 1, e = Mr(i, n), e.ref = t.ref, e.return = t, t.child = e
}

function Qg(e, t, r, n, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Bo(i, n) && e.ref === t.ref)
            if (at = !1, t.pendingProps = n = i, (e.lanes & o) !== 0) e.flags & 131072 && (at = !0);
            else return t.lanes = e.lanes, ir(e, t, o)
    }
    return yu(e, t, r, n, o)
}

function Gg(e, t, r) {
    var n = t.pendingProps,
        o = n.children,
        i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, pe(jn, dt), dt |= r;
        else {
            if (!(r & 1073741824)) return e = i !== null ? i.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, pe(jn, dt), dt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, n = i !== null ? i.baseLanes : r, pe(jn, dt), dt |= n
        }
    else i !== null ? (n = i.baseLanes | r, t.memoizedState = null) : n = r, pe(jn, dt), dt |= n;
    return Je(e, t, o, r), t.child
}

function Kg(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152)
}

function yu(e, t, r, n, o) {
    var i = st(r) ? tn : qe.current;
    return i = Hn(t, i), Ln(t, o), r = jc(e, t, r, n, i, o), n = Pc(), e !== null && !at ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ir(e, t, o)) : (xe && n && mc(t), t.flags |= 1, Je(e, t, r, o), t.child)
}

function wf(e, t, r, n, o) {
    if (st(r)) {
        var i = !0;
        wa(t)
    } else i = !1;
    if (Ln(t, o), t.stateNode === null) oa(e, t), wg(t, r, n), hu(t, r, n, o), n = !0;
    else if (e === null) {
        var a = t.stateNode,
            l = t.memoizedProps;
        a.props = l;
        var s = a.context,
            u = r.contextType;
        typeof u == "object" && u !== null ? u = kt(u) : (u = st(r) ? tn : qe.current, u = Hn(t, u));
        var d = r.getDerivedStateFromProps,
            c = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== n || s !== u) && ff(t, a, n, u), vr = !1;
        var f = t.memoizedState;
        a.state = f, Oa(t, n, a, o), s = t.memoizedState, l !== n || f !== s || lt.current || vr ? (typeof d == "function" && (gu(t, r, d, n), s = t.memoizedState), (l = vr || df(t, r, l, n, f, s, u)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = s), a.props = n, a.state = s, a.context = u, n = l) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), n = !1)
    } else {
        a = t.stateNode, bg(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Ot(t.type, l), a.props = u, c = t.pendingProps, f = a.context, s = r.contextType, typeof s == "object" && s !== null ? s = kt(s) : (s = st(r) ? tn : qe.current, s = Hn(t, s));
        var h = r.getDerivedStateFromProps;
        (d = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (l !== c || f !== s) && ff(t, a, n, s), vr = !1, f = t.memoizedState, a.state = f, Oa(t, n, a, o);
        var m = t.memoizedState;
        l !== c || f !== m || lt.current || vr ? (typeof h == "function" && (gu(t, r, h, n), m = t.memoizedState), (u = vr || df(t, r, u, n, f, m, s) || !1) ? (d || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(n, m, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(n, m, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = m), a.props = n, a.state = m, a.context = s, n = u) : (typeof a.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1)
    }
    return vu(e, t, r, n, i, o)
}

function vu(e, t, r, n, o, i) {
    Kg(e, t);
    var a = (t.flags & 128) !== 0;
    if (!n && !a) return o && af(t, r, !1), ir(e, t, i);
    n = t.stateNode, Z1.current = t;
    var l = a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return t.flags |= 1, e !== null && a ? (t.child = Bn(t, e.child, null, i), t.child = Bn(t, null, l, i)) : Je(e, t, l, i), t.memoizedState = n.state, o && af(t, r, !0), t.child
}

function Yg(e) {
    var t = e.stateNode;
    t.pendingContext ? of (e, t.pendingContext, t.pendingContext !== t.context) : t.context && of (e, t.context, !1), Ec(e, t.containerInfo)
}

function kf(e, t, r, n, o) {
    return $n(), vc(o), t.flags |= 256, Je(e, t, r, n), t.child
}
var bu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function xu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function qg(e, t, r) {
    var n = t.pendingProps,
        o = Ee.current,
        i = !1,
        a = (t.flags & 128) !== 0,
        l;
    if ((l = a) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), pe(Ee, o & 1), e === null) return fu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = n.children, e = n.fallback, i ? (n = t.mode, i = t.child, a = {
        mode: "hidden",
        children: a
    }, !(n & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = ml(a, n, 0, null), e = Zr(e, n, r, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = xu(r), t.memoizedState = bu, e) : Mc(t, a));
    if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return J1(e, t, a, n, l, o, r);
    if (i) {
        i = n.fallback, a = t.mode, o = e.child, l = o.sibling;
        var s = {
            mode: "hidden",
            children: n.children
        };
        return !(a & 1) && t.child !== o ? (n = t.child, n.childLanes = 0, n.pendingProps = s, t.deletions = null) : (n = Mr(o, s), n.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Mr(l, i) : (i = Zr(i, a, r, null), i.flags |= 2), i.return = t, n.return = t, n.sibling = i, t.child = n, n = i, i = t.child, a = e.child.memoizedState, a = a === null ? xu(r) : {
            baseLanes: a.baseLanes | r,
            cachePool: null,
            transitions: a.transitions
        }, i.memoizedState = a, i.childLanes = e.childLanes & ~r, t.memoizedState = bu, n
    }
    return i = e.child, e = i.sibling, n = Mr(i, {
        mode: "visible",
        children: n.children
    }), !(t.mode & 1) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n, t.memoizedState = null, n
}

function Mc(e, t) {
    return t = ml({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function zi(e, t, r, n) {
    return n !== null && vc(n), Bn(t, e.child, null, r), e = Mc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function J1(e, t, r, n, o, i, a) {
    if (r) return t.flags & 256 ? (t.flags &= -257, n = ss(Error(H(422))), zi(e, t, a, n)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = n.fallback, o = t.mode, n = ml({
        mode: "visible",
        children: n.children
    }, o, 0, null), i = Zr(i, o, a, null), i.flags |= 2, n.return = t, i.return = t, n.sibling = i, t.child = n, t.mode & 1 && Bn(t, e.child, null, a), t.child.memoizedState = xu(a), t.memoizedState = bu, i);
    if (!(t.mode & 1)) return zi(e, t, a, null);
    if (o.data === "$!") {
        if (n = o.nextSibling && o.nextSibling.dataset, n) var l = n.dgst;
        return n = l, i = Error(H(419)), n = ss(i, n, void 0), zi(e, t, a, n)
    }
    if (l = (a & e.childLanes) !== 0, at || l) {
        if (n = Fe, n !== null) {
            switch (a & -a) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (n.suspendedLanes | a) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, or(e, o), Nt(n, e, o, -1))
        }
        return Dc(), n = ss(Error(H(421))), zi(e, t, a, n)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, ft = jr(o.nextSibling), pt = t, xe = !0, jt = null, e !== null && (vt[bt++] = Jt, vt[bt++] = er, vt[bt++] = rn, Jt = e.id, er = e.overflow, rn = t), t = Mc(t, n.children), t.flags |= 4096, t)
}

function Sf(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), pu(e.return, t, r)
}

function us(e, t, r, n, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = r, i.tailMode = o)
}

function Xg(e, t, r) {
    var n = t.pendingProps,
        o = n.revealOrder,
        i = n.tail;
    if (Je(e, t, n.children, r), n = Ee.current, n & 2) n = n & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Sf(e, r, t);
            else if (e.tag === 19) Sf(e, r, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        n &= 1
    }
    if (pe(Ee, n), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (r = t.child, o = null; r !== null;) e = r.alternate, e !== null && Ta(e) === null && (o = r), r = r.sibling;
            r = o, r === null ? (o = t.child, t.child = null) : (o = r.sibling, r.sibling = null), us(t, !1, o, r, i);
            break;
        case "backwards":
            for (r = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Ta(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = r, r = o, o = e
            }
            us(t, !0, r, null, i);
            break;
        case "together":
            us(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function oa(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ir(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(r & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(H(153));
    if (t.child !== null) {
        for (e = t.child, r = Mr(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null;) e = e.sibling, r = r.sibling = Mr(e, e.pendingProps), r.return = t;
        r.sibling = null
    }
    return t.child
}

function ex(e, t, r) {
    switch (t.tag) {
        case 3:
            Yg(t), $n();
            break;
        case 5:
            Eg(t);
            break;
        case 1:
            st(t.type) && wa(t);
            break;
        case 4:
            Ec(t, t.stateNode.containerInfo);
            break;
        case 10:
            var n = t.type._context,
                o = t.memoizedProps.value;
            pe(Ea, n._currentValue), n._currentValue = o;
            break;
        case 13:
            if (n = t.memoizedState, n !== null) return n.dehydrated !== null ? (pe(Ee, Ee.current & 1), t.flags |= 128, null) : r & t.child.childLanes ? qg(e, t, r) : (pe(Ee, Ee.current & 1), e = ir(e, t, r), e !== null ? e.sibling : null);
            pe(Ee, Ee.current & 1);
            break;
        case 19:
            if (n = (r & t.childLanes) !== 0, e.flags & 128) {
                if (n) return Xg(e, t, r);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), pe(Ee, Ee.current), n) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Gg(e, t, r)
    }
    return ir(e, t, r)
}
var Zg, wu, Jg, eh;
Zg = function(e, t) {
    for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
            r.child.return = r, r = r.child;
            continue
        }
        if (r === t) break;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t) return;
            r = r.return
        }
        r.sibling.return = r.return, r = r.sibling
    }
};
wu = function() {};
Jg = function(e, t, r, n) {
    var o = e.memoizedProps;
    if (o !== n) {
        e = t.stateNode, Yr(Ut.current);
        var i = null;
        switch (r) {
            case "input":
                o = Ws(e, o), n = Ws(e, n), i = [];
                break;
            case "select":
                o = Oe({}, o, {
                    value: void 0
                }), n = Oe({}, n, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Qs(e, o), n = Qs(e, n), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof n.onClick == "function" && (e.onclick = ba)
        }
        Ks(r, n);
        var a;
        r = null;
        for (u in o)
            if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (a in l) l.hasOwnProperty(a) && (r || (r = {}), r[a] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (zo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in n) {
            var s = n[u];
            if (l = o != null ? o[u] : void 0, n.hasOwnProperty(u) && s !== l && (s != null || l != null))
                if (u === "style")
                    if (l) {
                        for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (r || (r = {}), r[a] = "");
                        for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (r || (r = {}), r[a] = s[a])
                    } else r || (i || (i = []), i.push(u, r)), r = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, s != null && l !== s && (i = i || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (zo.hasOwnProperty(u) ? (s != null && u === "onScroll" && he("scroll", e), i || l === s || (i = [])) : (i = i || []).push(u, s))
        }
        r && (i = i || []).push("style", r);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
eh = function(e, t, r, n) {
    r !== n && (t.flags |= 4)
};

function mo(e, t) {
    if (!xe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var r = null; t !== null;) t.alternate !== null && (r = t), t = t.sibling;
            r === null ? e.tail = null : r.sibling = null;
            break;
        case "collapsed":
            r = e.tail;
            for (var n = null; r !== null;) r.alternate !== null && (n = r), r = r.sibling;
            n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null
    }
}

function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
    if (t)
        for (var o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags & 14680064, n |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) r |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= n, e.childLanes = r, t
}

function tx(e, t, r) {
    var n = t.pendingProps;
    switch (yc(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ge(t), null;
        case 1:
            return st(t.type) && xa(), Ge(t), null;
        case 3:
            return n = t.stateNode, Wn(), ye(lt), ye(qe), Oc(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ri(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, jt !== null && (Pu(jt), jt = null))), wu(e, t), Ge(t), null;
        case 5:
            Cc(t);
            var o = Yr(Go.current);
            if (r = t.type, e !== null && t.stateNode != null) Jg(e, t, r, n, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!n) {
                    if (t.stateNode === null) throw Error(H(166));
                    return Ge(t), null
                }
                if (e = Yr(Ut.current), Ri(t)) {
                    n = t.stateNode, r = t.type;
                    var i = t.memoizedProps;
                    switch (n[Ht] = t, n[Vo] = i, e = (t.mode & 1) !== 0, r) {
                        case "dialog":
                            he("cancel", n), he("close", n);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            he("load", n);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < So.length; o++) he(So[o], n);
                            break;
                        case "source":
                            he("error", n);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            he("error", n), he("load", n);
                            break;
                        case "details":
                            he("toggle", n);
                            break;
                        case "input":
                            _d(n, i), he("invalid", n);
                            break;
                        case "select":
                            n._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, he("invalid", n);
                            break;
                        case "textarea":
                            Rd(n, i), he("invalid", n)
                    }
                    Ks(r, i), o = null;
                    for (var a in i)
                        if (i.hasOwnProperty(a)) {
                            var l = i[a];
                            a === "children" ? typeof l == "string" ? n.textContent !== l && (i.suppressHydrationWarning !== !0 && Mi(n.textContent, l, e), o = ["children", l]) : typeof l == "number" && n.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Mi(n.textContent, l, e), o = ["children", "" + l]) : zo.hasOwnProperty(a) && l != null && a === "onScroll" && he("scroll", n)
                        }
                    switch (r) {
                        case "input":
                            Ei(n), Md(n, i, !0);
                            break;
                        case "textarea":
                            Ei(n), Ld(n);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (n.onclick = ba)
                    }
                    n = o, t.updateQueue = n, n !== null && (t.flags |= 4)
                } else {
                    a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = T0(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof n.is == "string" ? e = a.createElement(r, {
                        is: n.is
                    }) : (e = a.createElement(r), r === "select" && (a = e, n.multiple ? a.multiple = !0 : n.size && (a.size = n.size))) : e = a.createElementNS(e, r), e[Ht] = t, e[Vo] = n, Zg(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (a = Ys(r, n), r) {
                            case "dialog":
                                he("cancel", e), he("close", e), o = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                he("load", e), o = n;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < So.length; o++) he(So[o], e);
                                o = n;
                                break;
                            case "source":
                                he("error", e), o = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                he("error", e), he("load", e), o = n;
                                break;
                            case "details":
                                he("toggle", e), o = n;
                                break;
                            case "input":
                                _d(e, n), o = Ws(e, n), he("invalid", e);
                                break;
                            case "option":
                                o = n;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!n.multiple
                                }, o = Oe({}, n, {
                                    value: void 0
                                }), he("invalid", e);
                                break;
                            case "textarea":
                                Rd(e, n), o = Qs(e, n), he("invalid", e);
                                break;
                            default:
                                o = n
                        }
                        Ks(r, o),
                        l = o;
                        for (i in l)
                            if (l.hasOwnProperty(i)) {
                                var s = l[i];
                                i === "style" ? N0(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && j0(e, s)) : i === "children" ? typeof s == "string" ? (r !== "textarea" || s !== "") && Io(e, s) : typeof s == "number" && Io(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (zo.hasOwnProperty(i) ? s != null && i === "onScroll" && he("scroll", e) : s != null && rc(e, i, s, a))
                            }
                        switch (r) {
                            case "input":
                                Ei(e), Md(e, n, !1);
                                break;
                            case "textarea":
                                Ei(e), Ld(e);
                                break;
                            case "option":
                                n.value != null && e.setAttribute("value", "" + zr(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple, i = n.value, i != null ? Nn(e, !!n.multiple, i, !1) : n.defaultValue != null && Nn(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = ba)
                        }
                        switch (r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                n = !!n.autoFocus;
                                break e;
                            case "img":
                                n = !0;
                                break e;
                            default:
                                n = !1
                        }
                    }
                    n && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Ge(t), null;
        case 6:
            if (e && t.stateNode != null) eh(e, t, e.memoizedProps, n);
            else {
                if (typeof n != "string" && t.stateNode === null) throw Error(H(166));
                if (r = Yr(Go.current), Yr(Ut.current), Ri(t)) {
                    if (n = t.stateNode, r = t.memoizedProps, n[Ht] = t, (i = n.nodeValue !== r) && (e = pt, e !== null)) switch (e.tag) {
                        case 3:
                            Mi(n.nodeValue, r, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Mi(n.nodeValue, r, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[Ht] = t, t.stateNode = n
            }
            return Ge(t), null;
        case 13:
            if (ye(Ee), n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (xe && ft !== null && t.mode & 1 && !(t.flags & 128)) yg(), $n(), t.flags |= 98560, i = !1;
                else if (i = Ri(t), n !== null && n.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(H(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
                        i[Ht] = t
                    } else $n(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Ge(t), i = !1
                } else jt !== null && (Pu(jt), jt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = r, t) : (n = n !== null, n !== (e !== null && e.memoizedState !== null) && n && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ee.current & 1 ? Ie === 0 && (Ie = 3) : Dc())), t.updateQueue !== null && (t.flags |= 4), Ge(t), null);
        case 4:
            return Wn(), wu(e, t), e === null && Wo(t.stateNode.containerInfo), Ge(t), null;
        case 10:
            return wc(t.type._context), Ge(t), null;
        case 17:
            return st(t.type) && xa(), Ge(t), null;
        case 19:
            if (ye(Ee), i = t.memoizedState, i === null) return Ge(t), null;
            if (n = (t.flags & 128) !== 0, a = i.rendering, a === null)
                if (n) mo(i, !1);
                else {
                    if (Ie !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (a = Ta(e), a !== null) {
                                for (t.flags |= 128, mo(i, !1), n = a.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), t.subtreeFlags = 0, n = r, r = t.child; r !== null;) i = r, e = n, i.flags &= 14680066, a = i.alternate, a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), r = r.sibling;
                                return pe(Ee, Ee.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && Ne() > Vn && (t.flags |= 128, n = !0, mo(i, !1), t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = Ta(a), e !== null) {
                        if (t.flags |= 128, n = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), mo(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !xe) return Ge(t), null
                    } else 2 * Ne() - i.renderingStartTime > Vn && r !== 1073741824 && (t.flags |= 128, n = !0, mo(i, !1), t.lanes = 4194304);
                i.isBackwards ? (a.sibling = t.child, t.child = a) : (r = i.last, r !== null ? r.sibling = a : t.child = a, i.last = a)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ne(), t.sibling = null, r = Ee.current, pe(Ee, n ? r & 1 | 2 : r & 1), t) : (Ge(t), null);
        case 22:
        case 23:
            return Ac(), n = t.memoizedState !== null, e !== null && e.memoizedState !== null !== n && (t.flags |= 8192), n && t.mode & 1 ? dt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(H(156, t.tag))
}

function rx(e, t) {
    switch (yc(t), t.tag) {
        case 1:
            return st(t.type) && xa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Wn(), ye(lt), ye(qe), Oc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Cc(t), null;
        case 13:
            if (ye(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(H(340));
                $n()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ye(Ee), null;
        case 4:
            return Wn(), null;
        case 10:
            return wc(t.type._context), null;
        case 22:
        case 23:
            return Ac(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ii = !1,
    Ye = !1,
    nx = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;

function Tn(e, t) {
    var r = e.ref;
    if (r !== null)
        if (typeof r == "function") try {
            r(null)
        } catch (n) {
            Pe(e, t, n)
        } else r.current = null
}

function ku(e, t, r) {
    try {
        r()
    } catch (n) {
        Pe(e, t, n)
    }
}
var Ef = !1;

function ox(e, t) {
    if (iu = ma, e = og(), hc(e)) {
        if ("selectionStart" in e) var r = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            r = (r = e.ownerDocument) && r.defaultView || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
                r = n.anchorNode;
                var o = n.anchorOffset,
                    i = n.focusNode;
                n = n.focusOffset;
                try {
                    r.nodeType, i.nodeType
                } catch {
                    r = null;
                    break e
                }
                var a = 0,
                    l = -1,
                    s = -1,
                    u = 0,
                    d = 0,
                    c = e,
                    f = null;
                t: for (;;) {
                    for (var h; c !== r || o !== 0 && c.nodeType !== 3 || (l = a + o), c !== i || n !== 0 && c.nodeType !== 3 || (s = a + n), c.nodeType === 3 && (a += c.nodeValue.length), (h = c.firstChild) !== null;) f = c, c = h;
                    for (;;) {
                        if (c === e) break t;
                        if (f === r && ++u === o && (l = a), f === i && ++d === n && (s = a), (h = c.nextSibling) !== null) break;
                        c = f, f = c.parentNode
                    }
                    c = h
                }
                r = l === -1 || s === -1 ? null : {
                    start: l,
                    end: s
                }
            } else r = null
        }
        r = r || {
            start: 0,
            end: 0
        }
    } else r = null;
    for (au = {
            focusedElem: e,
            selectionRange: r
        }, ma = !1, V = t; V !== null;)
        if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
        else
            for (; V !== null;) {
                t = V;
                try {
                    var m = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var v = m.memoizedProps,
                                    S = m.memoizedState,
                                    y = t.stateNode,
                                    p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ot(t.type, v), S);
                                y.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var b = t.stateNode.containerInfo;
                            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(H(163))
                    }
                } catch (x) {
                    Pe(t, t.return, x)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, V = e;
                    break
                }
                V = t.return
            }
    return m = Ef, Ef = !1, m
}

function No(e, t, r) {
    var n = t.updateQueue;
    if (n = n !== null ? n.lastEffect : null, n !== null) {
        var o = n = n.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && ku(t, r, i)
            }
            o = o.next
        } while (o !== n)
    }
}

function gl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var r = t = t.next;
        do {
            if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n()
            }
            r = r.next
        } while (r !== t)
    }
}

function Su(e) {
    var t = e.ref;
    if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
            case 5:
                e = r;
                break;
            default:
                e = r
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function th(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, th(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ht], delete t[Vo], delete t[uu], delete t[H1], delete t[$1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function rh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Cf(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || rh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Eu(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = ba));
    else if (n !== 4 && (e = e.child, e !== null))
        for (Eu(e, t, r), e = e.sibling; e !== null;) Eu(e, t, r), e = e.sibling
}

function Cu(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && (e = e.child, e !== null))
        for (Cu(e, t, r), e = e.sibling; e !== null;) Cu(e, t, r), e = e.sibling
}
var $e = null,
    Tt = !1;

function fr(e, t, r) {
    for (r = r.child; r !== null;) nh(e, t, r), r = r.sibling
}

function nh(e, t, r) {
    if (Wt && typeof Wt.onCommitFiberUnmount == "function") try {
        Wt.onCommitFiberUnmount(al, r)
    } catch {}
    switch (r.tag) {
        case 5:
            Ye || Tn(r, t);
        case 6:
            var n = $e,
                o = Tt;
            $e = null, fr(e, t, r), $e = n, Tt = o, $e !== null && (Tt ? (e = $e, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : $e.removeChild(r.stateNode));
            break;
        case 18:
            $e !== null && (Tt ? (e = $e, r = r.stateNode, e.nodeType === 8 ? rs(e.parentNode, r) : e.nodeType === 1 && rs(e, r), Ho(e)) : rs($e, r.stateNode));
            break;
        case 4:
            n = $e, o = Tt, $e = r.stateNode.containerInfo, Tt = !0, fr(e, t, r), $e = n, Tt = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ye && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
                o = n = n.next;
                do {
                    var i = o,
                        a = i.destroy;
                    i = i.tag, a !== void 0 && (i & 2 || i & 4) && ku(r, t, a), o = o.next
                } while (o !== n)
            }
            fr(e, t, r);
            break;
        case 1:
            if (!Ye && (Tn(r, t), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
                n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount()
            } catch (l) {
                Pe(r, t, l)
            }
            fr(e, t, r);
            break;
        case 21:
            fr(e, t, r);
            break;
        case 22:
            r.mode & 1 ? (Ye = (n = Ye) || r.memoizedState !== null, fr(e, t, r), Ye = n) : fr(e, t, r);
            break;
        default:
            fr(e, t, r)
    }
}

function Of(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new nx), t.forEach(function(n) {
            var o = px.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(o, o))
        })
    }
}

function Ct(e, t) {
    var r = t.deletions;
    if (r !== null)
        for (var n = 0; n < r.length; n++) {
            var o = r[n];
            try {
                var i = e,
                    a = t,
                    l = a;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            $e = l.stateNode, Tt = !1;
                            break e;
                        case 3:
                            $e = l.stateNode.containerInfo, Tt = !0;
                            break e;
                        case 4:
                            $e = l.stateNode.containerInfo, Tt = !0;
                            break e
                    }
                    l = l.return
                }
                if ($e === null) throw Error(H(160));
                nh(i, a, o), $e = null, Tt = !1;
                var s = o.alternate;
                s !== null && (s.return = null), o.return = null
            } catch (u) {
                Pe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) oh(t, e), t = t.sibling
}

function oh(e, t) {
    var r = e.alternate,
        n = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ct(t, e), At(e), n & 4) {
                try {
                    No(3, e, e.return), gl(3, e)
                } catch (v) {
                    Pe(e, e.return, v)
                }
                try {
                    No(5, e, e.return)
                } catch (v) {
                    Pe(e, e.return, v)
                }
            }
            break;
        case 1:
            Ct(t, e), At(e), n & 512 && r !== null && Tn(r, r.return);
            break;
        case 5:
            if (Ct(t, e), At(e), n & 512 && r !== null && Tn(r, r.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Io(o, "")
                } catch (v) {
                    Pe(e, e.return, v)
                }
            }
            if (n & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    a = r !== null ? r.memoizedProps : i,
                    l = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    l === "input" && i.type === "radio" && i.name != null && C0(o, i), Ys(l, a);
                    var u = Ys(l, i);
                    for (a = 0; a < s.length; a += 2) {
                        var d = s[a],
                            c = s[a + 1];
                        d === "style" ? N0(o, c) : d === "dangerouslySetInnerHTML" ? j0(o, c) : d === "children" ? Io(o, c) : rc(o, d, c, u)
                    }
                    switch (l) {
                        case "input":
                            Us(o, i);
                            break;
                        case "textarea":
                            O0(o, i);
                            break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var h = i.value;
                            h != null ? Nn(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? Nn(o, !!i.multiple, i.defaultValue, !0) : Nn(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Vo] = i
                } catch (v) {
                    Pe(e, e.return, v)
                }
            }
            break;
        case 6:
            if (Ct(t, e), At(e), n & 4) {
                if (e.stateNode === null) throw Error(H(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (v) {
                    Pe(e, e.return, v)
                }
            }
            break;
        case 3:
            if (Ct(t, e), At(e), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
                Ho(t.containerInfo)
            } catch (v) {
                Pe(e, e.return, v)
            }
            break;
        case 4:
            Ct(t, e), At(e);
            break;
        case 13:
            Ct(t, e), At(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (zc = Ne())), n & 4 && Of(e);
            break;
        case 22:
            if (d = r !== null && r.memoizedState !== null, e.mode & 1 ? (Ye = (u = Ye) || d, Ct(t, e), Ye = u) : Ct(t, e), At(e), n & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (V = e, d = e.child; d !== null;) {
                        for (c = V = d; V !== null;) {
                            switch (f = V, h = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    No(4, f, f.return);
                                    break;
                                case 1:
                                    Tn(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        n = f, r = f.return;
                                        try {
                                            t = n, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                        } catch (v) {
                                            Pe(n, r, v)
                                        }
                                    }
                                    break;
                                case 5:
                                    Tn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        jf(c);
                                        continue
                                    }
                            }
                            h !== null ? (h.return = f, V = h) : jf(c)
                        }
                        d = d.sibling
                    }
                e: for (d = null, c = e;;) {
                    if (c.tag === 5) {
                        if (d === null) {
                            d = c;
                            try {
                                o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, s = c.memoizedProps.style, a = s != null && s.hasOwnProperty("display") ? s.display : null, l.style.display = P0("display", a))
                            } catch (v) {
                                Pe(e, e.return, v)
                            }
                        }
                    } else if (c.tag === 6) {
                        if (d === null) try {
                            c.stateNode.nodeValue = u ? "" : c.memoizedProps
                        } catch (v) {
                            Pe(e, e.return, v)
                        }
                    } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                        c.child.return = c, c = c.child;
                        continue
                    }
                    if (c === e) break e;
                    for (; c.sibling === null;) {
                        if (c.return === null || c.return === e) break e;
                        d === c && (d = null), c = c.return
                    }
                    d === c && (d = null), c.sibling.return = c.return, c = c.sibling
                }
            }
            break;
        case 19:
            Ct(t, e), At(e), n & 4 && Of(e);
            break;
        case 21:
            break;
        default:
            Ct(t, e), At(e)
    }
}

function At(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var r = e.return; r !== null;) {
                    if (rh(r)) {
                        var n = r;
                        break e
                    }
                    r = r.return
                }
                throw Error(H(160))
            }
            switch (n.tag) {
                case 5:
                    var o = n.stateNode;
                    n.flags & 32 && (Io(o, ""), n.flags &= -33);
                    var i = Cf(e);
                    Cu(e, i, o);
                    break;
                case 3:
                case 4:
                    var a = n.stateNode.containerInfo,
                        l = Cf(e);
                    Eu(e, l, a);
                    break;
                default:
                    throw Error(H(161))
            }
        }
        catch (s) {
            Pe(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ix(e, t, r) {
    V = e, ih(e)
}

function ih(e, t, r) {
    for (var n = (e.mode & 1) !== 0; V !== null;) {
        var o = V,
            i = o.child;
        if (o.tag === 22 && n) {
            var a = o.memoizedState !== null || Ii;
            if (!a) {
                var l = o.alternate,
                    s = l !== null && l.memoizedState !== null || Ye;
                l = Ii;
                var u = Ye;
                if (Ii = a, (Ye = s) && !u)
                    for (V = o; V !== null;) a = V, s = a.child, a.tag === 22 && a.memoizedState !== null ? Pf(o) : s !== null ? (s.return = a, V = s) : Pf(o);
                for (; i !== null;) V = i, ih(i), i = i.sibling;
                V = o, Ii = l, Ye = u
            }
            Tf(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, V = i) : Tf(e)
    }
}

function Tf(e) {
    for (; V !== null;) {
        var t = V;
        if (t.flags & 8772) {
            var r = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ye || gl(5, t);
                        break;
                    case 1:
                        var n = t.stateNode;
                        if (t.flags & 4 && !Ye)
                            if (r === null) n.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? r.memoizedProps : Ot(t.type, r.memoizedProps);
                                n.componentDidUpdate(o, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && cf(t, i, n);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (r = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    r = t.child.stateNode;
                                    break;
                                case 1:
                                    r = t.child.stateNode
                            }
                            cf(t, a, r)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (r === null && t.flags & 4) {
                            r = l;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && r.focus();
                                    break;
                                case "img":
                                    s.src && (r.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var c = d.dehydrated;
                                    c !== null && Ho(c)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(H(163))
                }
                Ye || t.flags & 512 && Su(t)
            } catch (f) {
                Pe(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (r = t.sibling, r !== null) {
            r.return = t.return, V = r;
            break
        }
        V = t.return
    }
}

function jf(e) {
    for (; V !== null;) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var r = t.sibling;
        if (r !== null) {
            r.return = t.return, V = r;
            break
        }
        V = t.return
    }
}

function Pf(e) {
    for (; V !== null;) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var r = t.return;
                    try {
                        gl(4, t)
                    } catch (s) {
                        Pe(t, r, s)
                    }
                    break;
                case 1:
                    var n = t.stateNode;
                    if (typeof n.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            n.componentDidMount()
                        } catch (s) {
                            Pe(t, o, s)
                        }
                    }
                    var i = t.return;
                    try {
                        Su(t)
                    } catch (s) {
                        Pe(t, i, s)
                    }
                    break;
                case 5:
                    var a = t.return;
                    try {
                        Su(t)
                    } catch (s) {
                        Pe(t, a, s)
                    }
            }
        } catch (s) {
            Pe(t, t.return, s)
        }
        if (t === e) {
            V = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, V = l;
            break
        }
        V = t.return
    }
}
var ax = Math.ceil,
    Na = sr.ReactCurrentDispatcher,
    Rc = sr.ReactCurrentOwner,
    wt = sr.ReactCurrentBatchConfig,
    ce = 0,
    Fe = null,
    Me = null,
    We = 0,
    dt = 0,
    jn = Fr(0),
    Ie = 0,
    Xo = null,
    on = 0,
    hl = 0,
    Lc = 0,
    _o = null,
    it = null,
    zc = 0,
    Vn = 1 / 0,
    Yt = null,
    _a = !1,
    Ou = null,
    Nr = null,
    Ai = !1,
    Er = null,
    Ma = 0,
    Mo = 0,
    Tu = null,
    ia = -1,
    aa = 0;

function tt() {
    return ce & 6 ? Ne() : ia !== -1 ? ia : ia = Ne()
}

function _r(e) {
    return e.mode & 1 ? ce & 2 && We !== 0 ? We & -We : W1.transition !== null ? (aa === 0 && (aa = B0()), aa) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Y0(e.type)), e) : 1
}

function Nt(e, t, r, n) {
    if (50 < Mo) throw Mo = 0, Tu = null, Error(H(185));
    ni(e, r, n), (!(ce & 2) || e !== Fe) && (e === Fe && (!(ce & 2) && (hl |= r), Ie === 4 && wr(e, We)), ut(e, n), r === 1 && ce === 0 && !(t.mode & 1) && (Vn = Ne() + 500, dl && Hr()))
}

function ut(e, t) {
    var r = e.callbackNode;
    Wb(e, t);
    var n = ha(e, e === Fe ? We : 0);
    if (n === 0) r !== null && Ad(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = n & -n, e.callbackPriority !== t) {
        if (r != null && Ad(r), t === 1) e.tag === 0 ? B1(Nf.bind(null, e)) : gg(Nf.bind(null, e)), D1(function() {
            !(ce & 6) && Hr()
        }), r = null;
        else {
            switch (W0(n)) {
                case 1:
                    r = lc;
                    break;
                case 4:
                    r = H0;
                    break;
                case 16:
                    r = ga;
                    break;
                case 536870912:
                    r = $0;
                    break;
                default:
                    r = ga
            }
            r = ph(r, ah.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = r
    }
}

function ah(e, t) {
    if (ia = -1, aa = 0, ce & 6) throw Error(H(327));
    var r = e.callbackNode;
    if (zn() && e.callbackNode !== r) return null;
    var n = ha(e, e === Fe ? We : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = Ra(e, n);
    else {
        t = n;
        var o = ce;
        ce |= 2;
        var i = sh();
        (Fe !== e || We !== t) && (Yt = null, Vn = Ne() + 500, Xr(e, t));
        do try {
            ux();
            break
        } catch (l) {
            lh(e, l)
        }
        while (!0);
        xc(), Na.current = i, ce = o, Me !== null ? t = 0 : (Fe = null, We = 0, t = Ie)
    }
    if (t !== 0) {
        if (t === 2 && (o = eu(e), o !== 0 && (n = o, t = ju(e, o))), t === 1) throw r = Xo, Xr(e, 0), wr(e, n), ut(e, Ne()), r;
        if (t === 6) wr(e, n);
        else {
            if (o = e.current.alternate, !(n & 30) && !lx(o) && (t = Ra(e, n), t === 2 && (i = eu(e), i !== 0 && (n = i, t = ju(e, i))), t === 1)) throw r = Xo, Xr(e, 0), wr(e, n), ut(e, Ne()), r;
            switch (e.finishedWork = o, e.finishedLanes = n, t) {
                case 0:
                case 1:
                    throw Error(H(345));
                case 2:
                    Ur(e, it, Yt);
                    break;
                case 3:
                    if (wr(e, n), (n & 130023424) === n && (t = zc + 500 - Ne(), 10 < t)) {
                        if (ha(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & n) !== n) {
                            tt(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = su(Ur.bind(null, e, it, Yt), t);
                        break
                    }
                    Ur(e, it, Yt);
                    break;
                case 4:
                    if (wr(e, n), (n & 4194240) === n) break;
                    for (t = e.eventTimes, o = -1; 0 < n;) {
                        var a = 31 - Pt(n);
                        i = 1 << a, a = t[a], a > o && (o = a), n &= ~i
                    }
                    if (n = o, n = Ne() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * ax(n / 1960)) - n, 10 < n) {
                        e.timeoutHandle = su(Ur.bind(null, e, it, Yt), n);
                        break
                    }
                    Ur(e, it, Yt);
                    break;
                case 5:
                    Ur(e, it, Yt);
                    break;
                default:
                    throw Error(H(329))
            }
        }
    }
    return ut(e, Ne()), e.callbackNode === r ? ah.bind(null, e) : null
}

function ju(e, t) {
    var r = _o;
    return e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256), e = Ra(e, t), e !== 2 && (t = it, it = r, t !== null && Pu(t)), e
}

function Pu(e) {
    it === null ? it = e : it.push.apply(it, e)
}

function lx(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var r = t.updateQueue;
            if (r !== null && (r = r.stores, r !== null))
                for (var n = 0; n < r.length; n++) {
                    var o = r[n],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!_t(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function wr(e, t) {
    for (t &= ~Lc, t &= ~hl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var r = 31 - Pt(t),
            n = 1 << r;
        e[r] = -1, t &= ~n
    }
}

function Nf(e) {
    if (ce & 6) throw Error(H(327));
    zn();
    var t = ha(e, 0);
    if (!(t & 1)) return ut(e, Ne()), null;
    var r = Ra(e, t);
    if (e.tag !== 0 && r === 2) {
        var n = eu(e);
        n !== 0 && (t = n, r = ju(e, n))
    }
    if (r === 1) throw r = Xo, Xr(e, 0), wr(e, t), ut(e, Ne()), r;
    if (r === 6) throw Error(H(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ur(e, it, Yt), ut(e, Ne()), null
}

function Ic(e, t) {
    var r = ce;
    ce |= 1;
    try {
        return e(t)
    } finally {
        ce = r, ce === 0 && (Vn = Ne() + 500, dl && Hr())
    }
}

function an(e) {
    Er !== null && Er.tag === 0 && !(ce & 6) && zn();
    var t = ce;
    ce |= 1;
    var r = wt.transition,
        n = de;
    try {
        if (wt.transition = null, de = 1, e) return e()
    } finally {
        de = n, wt.transition = r, ce = t, !(ce & 6) && Hr()
    }
}

function Ac() {
    dt = jn.current, ye(jn)
}

function Xr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, A1(r)), Me !== null)
        for (r = Me.return; r !== null;) {
            var n = r;
            switch (yc(n), n.tag) {
                case 1:
                    n = n.type.childContextTypes, n != null && xa();
                    break;
                case 3:
                    Wn(), ye(lt), ye(qe), Oc();
                    break;
                case 5:
                    Cc(n);
                    break;
                case 4:
                    Wn();
                    break;
                case 13:
                    ye(Ee);
                    break;
                case 19:
                    ye(Ee);
                    break;
                case 10:
                    wc(n.type._context);
                    break;
                case 22:
                case 23:
                    Ac()
            }
            r = r.return
        }
    if (Fe = e, Me = e = Mr(e.current, null), We = dt = t, Ie = 0, Xo = null, Lc = hl = on = 0, it = _o = null, Kr !== null) {
        for (t = 0; t < Kr.length; t++)
            if (r = Kr[t], n = r.interleaved, n !== null) {
                r.interleaved = null;
                var o = n.next,
                    i = r.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o, n.next = a
                }
                r.pending = n
            }
        Kr = null
    }
    return e
}

function lh(e, t) {
    do {
        var r = Me;
        try {
            if (xc(), ra.current = Pa, ja) {
                for (var n = Ce.memoizedState; n !== null;) {
                    var o = n.queue;
                    o !== null && (o.pending = null), n = n.next
                }
                ja = !1
            }
            if (nn = 0, Ae = ze = Ce = null, Po = !1, Ko = 0, Rc.current = null, r === null || r.return === null) {
                Ie = 1, Xo = t, Me = null;
                break
            }
            e: {
                var i = e,
                    a = r.return,
                    l = r,
                    s = t;
                if (t = We, l.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        d = l,
                        c = d.tag;
                    if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                        var f = d.alternate;
                        f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var h = yf(a);
                    if (h !== null) {
                        h.flags &= -257, vf(h, a, l, i, t), h.mode & 1 && mf(i, u, t), t = h, s = u;
                        var m = t.updateQueue;
                        if (m === null) {
                            var v = new Set;
                            v.add(s), t.updateQueue = v
                        } else m.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            mf(i, u, t), Dc();
                            break e
                        }
                        s = Error(H(426))
                    }
                } else if (xe && l.mode & 1) {
                    var S = yf(a);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), vf(S, a, l, i, t), vc(Un(s, l));
                        break e
                    }
                }
                i = s = Un(s, l),
                Ie !== 4 && (Ie = 2),
                _o === null ? _o = [i] : _o.push(i),
                i = a;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var y = Ug(i, s, t);
                            uf(i, y);
                            break e;
                        case 1:
                            l = s;
                            var p = i.type,
                                b = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Nr === null || !Nr.has(b)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var x = Vg(i, l, t);
                                uf(i, x);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            ch(r)
        } catch (k) {
            t = k, Me === r && r !== null && (Me = r = r.return);
            continue
        }
        break
    } while (!0)
}

function sh() {
    var e = Na.current;
    return Na.current = Pa, e === null ? Pa : e
}

function Dc() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4), Fe === null || !(on & 268435455) && !(hl & 268435455) || wr(Fe, We)
}

function Ra(e, t) {
    var r = ce;
    ce |= 2;
    var n = sh();
    (Fe !== e || We !== t) && (Yt = null, Xr(e, t));
    do try {
        sx();
        break
    } catch (o) {
        lh(e, o)
    }
    while (!0);
    if (xc(), ce = r, Na.current = n, Me !== null) throw Error(H(261));
    return Fe = null, We = 0, Ie
}

function sx() {
    for (; Me !== null;) uh(Me)
}

function ux() {
    for (; Me !== null && !Lb();) uh(Me)
}

function uh(e) {
    var t = fh(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? ch(e) : Me = t, Rc.current = null
}

function ch(e) {
    var t = e;
    do {
        var r = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (r = rx(r, t), r !== null) {
                r.flags &= 32767, Me = r;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ie = 6, Me = null;
                return
            }
        } else if (r = tx(r, t, dt), r !== null) {
            Me = r;
            return
        }
        if (t = t.sibling, t !== null) {
            Me = t;
            return
        }
        Me = t = e
    } while (t !== null);
    Ie === 0 && (Ie = 5)
}

function Ur(e, t, r) {
    var n = de,
        o = wt.transition;
    try {
        wt.transition = null, de = 1, cx(e, t, r, n)
    } finally {
        wt.transition = o, de = n
    }
    return null
}

function cx(e, t, r, n) {
    do zn(); while (Er !== null);
    if (ce & 6) throw Error(H(327));
    r = e.finishedWork;
    var o = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(H(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = r.lanes | r.childLanes;
    if (Ub(e, i), e === Fe && (Me = Fe = null, We = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Ai || (Ai = !0, ph(ga, function() {
            return zn(), null
        })), i = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || i) {
        i = wt.transition, wt.transition = null;
        var a = de;
        de = 1;
        var l = ce;
        ce |= 4, Rc.current = null, ox(e, r), oh(r, e), N1(au), ma = !!iu, au = iu = null, e.current = r, ix(r), zb(), ce = l, de = a, wt.transition = i
    } else e.current = r;
    if (Ai && (Ai = !1, Er = e, Ma = o), i = e.pendingLanes, i === 0 && (Nr = null), Db(r.stateNode), ut(e, Ne()), t !== null)
        for (n = e.onRecoverableError, r = 0; r < t.length; r++) o = t[r], n(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (_a) throw _a = !1, e = Ou, Ou = null, e;
    return Ma & 1 && e.tag !== 0 && zn(), i = e.pendingLanes, i & 1 ? e === Tu ? Mo++ : (Mo = 0, Tu = e) : Mo = 0, Hr(), null
}

function zn() {
    if (Er !== null) {
        var e = W0(Ma),
            t = wt.transition,
            r = de;
        try {
            if (wt.transition = null, de = 16 > e ? 16 : e, Er === null) var n = !1;
            else {
                if (e = Er, Er = null, Ma = 0, ce & 6) throw Error(H(331));
                var o = ce;
                for (ce |= 4, V = e.current; V !== null;) {
                    var i = V,
                        a = i.child;
                    if (V.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var s = 0; s < l.length; s++) {
                                var u = l[s];
                                for (V = u; V !== null;) {
                                    var d = V;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            No(8, d, i)
                                    }
                                    var c = d.child;
                                    if (c !== null) c.return = d, V = c;
                                    else
                                        for (; V !== null;) {
                                            d = V;
                                            var f = d.sibling,
                                                h = d.return;
                                            if (th(d), d === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h, V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var m = i.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null, v = S
                                    } while (v !== null)
                                }
                            }
                            V = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && a !== null) a.return = i, V = a;
                    else e: for (; V !== null;) {
                        if (i = V, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                No(9, i, i.return)
                        }
                        var y = i.sibling;
                        if (y !== null) {
                            y.return = i.return, V = y;
                            break e
                        }
                        V = i.return
                    }
                }
                var p = e.current;
                for (V = p; V !== null;) {
                    a = V;
                    var b = a.child;
                    if (a.subtreeFlags & 2064 && b !== null) b.return = a, V = b;
                    else e: for (a = p; V !== null;) {
                        if (l = V, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gl(9, l)
                            }
                        } catch (k) {
                            Pe(l, l.return, k)
                        }
                        if (l === a) {
                            V = null;
                            break e
                        }
                        var x = l.sibling;
                        if (x !== null) {
                            x.return = l.return, V = x;
                            break e
                        }
                        V = l.return
                    }
                }
                if (ce = o, Hr(), Wt && typeof Wt.onPostCommitFiberRoot == "function") try {
                    Wt.onPostCommitFiberRoot(al, e)
                } catch {}
                n = !0
            }
            return n
        } finally {
            de = r, wt.transition = t
        }
    }
    return !1
}

function _f(e, t, r) {
    t = Un(r, t), t = Ug(e, t, 1), e = Pr(e, t, 1), t = tt(), e !== null && (ni(e, 1, t), ut(e, t))
}

function Pe(e, t, r) {
    if (e.tag === 3) _f(e, e, r);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                _f(t, e, r);
                break
            } else if (t.tag === 1) {
                var n = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nr === null || !Nr.has(n))) {
                    e = Un(r, e), e = Vg(t, e, 1), t = Pr(t, e, 1), e = tt(), t !== null && (ni(t, 1, e), ut(t, e));
                    break
                }
            }
            t = t.return
        }
}

function dx(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t), t = tt(), e.pingedLanes |= e.suspendedLanes & r, Fe === e && (We & r) === r && (Ie === 4 || Ie === 3 && (We & 130023424) === We && 500 > Ne() - zc ? Xr(e, 0) : Lc |= r), ut(e, t)
}

function dh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ti, Ti <<= 1, !(Ti & 130023424) && (Ti = 4194304)) : t = 1);
    var r = tt();
    e = or(e, t), e !== null && (ni(e, t, r), ut(e, r))
}

function fx(e) {
    var t = e.memoizedState,
        r = 0;
    t !== null && (r = t.retryLane), dh(e, r)
}

function px(e, t) {
    var r = 0;
    switch (e.tag) {
        case 13:
            var n = e.stateNode,
                o = e.memoizedState;
            o !== null && (r = o.retryLane);
            break;
        case 19:
            n = e.stateNode;
            break;
        default:
            throw Error(H(314))
    }
    n !== null && n.delete(t), dh(e, r)
}
var fh;
fh = function(e, t, r) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || lt.current) at = !0;
        else {
            if (!(e.lanes & r) && !(t.flags & 128)) return at = !1, ex(e, t, r);
            at = !!(e.flags & 131072)
        }
    else at = !1, xe && t.flags & 1048576 && hg(t, Sa, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var n = t.type;
            oa(e, t), e = t.pendingProps;
            var o = Hn(t, qe.current);
            Ln(t, r), o = jc(null, t, n, e, o, r);
            var i = Pc();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, st(n) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Sc(t), o.updater = fl, t.stateNode = o, o._reactInternals = t, hu(t, n, e, r), t = vu(null, t, n, !0, i, r)) : (t.tag = 0, xe && i && mc(t), Je(null, t, o, r), t = t.child), t;
        case 16:
            n = t.elementType;
            e: {
                switch (oa(e, t), e = t.pendingProps, o = n._init, n = o(n._payload), t.type = n, o = t.tag = hx(n), e = Ot(n, e), o) {
                    case 0:
                        t = yu(null, t, n, e, r);
                        break e;
                    case 1:
                        t = wf(null, t, n, e, r);
                        break e;
                    case 11:
                        t = bf(null, t, n, e, r);
                        break e;
                    case 14:
                        t = xf(null, t, n, Ot(n.type, e), r);
                        break e
                }
                throw Error(H(306, n, ""))
            }
            return t;
        case 0:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ot(n, o), yu(e, t, n, o, r);
        case 1:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ot(n, o), wf(e, t, n, o, r);
        case 3:
            e: {
                if (Yg(t), e === null) throw Error(H(387));n = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                bg(e, t),
                Oa(t, n, null, r);
                var a = t.memoizedState;
                if (n = a.element, i.isDehydrated)
                    if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: a.cache,
                            pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                            transitions: a.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Un(Error(H(423)), t), t = kf(e, t, n, r, o);
                        break e
                    } else if (n !== o) {
                    o = Un(Error(H(424)), t), t = kf(e, t, n, r, o);
                    break e
                } else
                    for (ft = jr(t.stateNode.containerInfo.firstChild), pt = t, xe = !0, jt = null, r = Sg(t, null, n, r), t.child = r; r;) r.flags = r.flags & -3 | 4096, r = r.sibling;
                else {
                    if ($n(), n === o) {
                        t = ir(e, t, r);
                        break e
                    }
                    Je(e, t, n, r)
                }
                t = t.child
            }
            return t;
        case 5:
            return Eg(t), e === null && fu(t), n = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, lu(n, o) ? a = null : i !== null && lu(n, i) && (t.flags |= 32), Kg(e, t), Je(e, t, a, r), t.child;
        case 6:
            return e === null && fu(t), null;
        case 13:
            return qg(e, t, r);
        case 4:
            return Ec(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Bn(t, null, n, r) : Je(e, t, n, r), t.child;
        case 11:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ot(n, o), bf(e, t, n, o, r);
        case 7:
            return Je(e, t, t.pendingProps, r), t.child;
        case 8:
            return Je(e, t, t.pendingProps.children, r), t.child;
        case 12:
            return Je(e, t, t.pendingProps.children, r), t.child;
        case 10:
            e: {
                if (n = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, pe(Ea, n._currentValue), n._currentValue = a, i !== null)
                    if (_t(i.value, a)) {
                        if (i.children === o.children && !lt.current) {
                            t = ir(e, t, r);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var l = i.dependencies;
                            if (l !== null) {
                                a = i.child;
                                for (var s = l.firstContext; s !== null;) {
                                    if (s.context === n) {
                                        if (i.tag === 1) {
                                            s = tr(-1, r & -r), s.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s
                                            }
                                        }
                                        i.lanes |= r, s = i.alternate, s !== null && (s.lanes |= r), pu(i.return, r, t), l.lanes |= r;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (a = i.return, a === null) throw Error(H(341));
                                a.lanes |= r, l = a.alternate, l !== null && (l.lanes |= r), pu(a, r, t), a = i.sibling
                            } else a = i.child;
                            if (a !== null) a.return = i;
                            else
                                for (a = i; a !== null;) {
                                    if (a === t) {
                                        a = null;
                                        break
                                    }
                                    if (i = a.sibling, i !== null) {
                                        i.return = a.return, a = i;
                                        break
                                    }
                                    a = a.return
                                }
                            i = a
                        }
                Je(e, t, o.children, r),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, n = t.pendingProps.children, Ln(t, r), o = kt(o), n = n(o), t.flags |= 1, Je(e, t, n, r), t.child;
        case 14:
            return n = t.type, o = Ot(n, t.pendingProps), o = Ot(n.type, o), xf(e, t, n, o, r);
        case 15:
            return Qg(e, t, t.type, t.pendingProps, r);
        case 17:
            return n = t.type, o = t.pendingProps, o = t.elementType === n ? o : Ot(n, o), oa(e, t), t.tag = 1, st(n) ? (e = !0, wa(t)) : e = !1, Ln(t, r), wg(t, n, o), hu(t, n, o, r), vu(null, t, n, !0, e, r);
        case 19:
            return Xg(e, t, r);
        case 22:
            return Gg(e, t, r)
    }
    throw Error(H(156, t.tag))
};

function ph(e, t) {
    return F0(e, t)
}

function gx(e, t, r, n) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function xt(e, t, r, n) {
    return new gx(e, t, r, n)
}

function Fc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function hx(e) {
    if (typeof e == "function") return Fc(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === oc) return 11;
        if (e === ic) return 14
    }
    return 2
}

function Mr(e, t) {
    var r = e.alternate;
    return r === null ? (r = xt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
}

function la(e, t, r, n, o, i) {
    var a = 2;
    if (n = e, typeof e == "function") Fc(e) && (a = 1);
    else if (typeof e == "string") a = 5;
    else e: switch (e) {
        case vn:
            return Zr(r.children, o, i, t);
        case nc:
            a = 8, o |= 8;
            break;
        case Fs:
            return e = xt(12, r, t, o | 2), e.elementType = Fs, e.lanes = i, e;
        case Hs:
            return e = xt(13, r, t, o), e.elementType = Hs, e.lanes = i, e;
        case $s:
            return e = xt(19, r, t, o), e.elementType = $s, e.lanes = i, e;
        case k0:
            return ml(r, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case x0:
                    a = 10;
                    break e;
                case w0:
                    a = 9;
                    break e;
                case oc:
                    a = 11;
                    break e;
                case ic:
                    a = 14;
                    break e;
                case yr:
                    a = 16, n = null;
                    break e
            }
            throw Error(H(130, e == null ? e : typeof e, ""))
    }
    return t = xt(a, r, t, o), t.elementType = e, t.type = n, t.lanes = i, t
}

function Zr(e, t, r, n) {
    return e = xt(7, e, n, t), e.lanes = r, e
}

function ml(e, t, r, n) {
    return e = xt(22, e, n, t), e.elementType = k0, e.lanes = r, e.stateNode = {
        isHidden: !1
    }, e
}

function cs(e, t, r) {
    return e = xt(6, e, null, t), e.lanes = r, e
}

function ds(e, t, r) {
    return t = xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function mx(e, t, r, n, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = n, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Hc(e, t, r, n, o, i, a, l, s) {
    return e = new mx(e, t, r, l, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = xt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Sc(i), e
}

function yx(e, t, r) {
    var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: yn,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r
    }
}

function gh(e) {
    if (!e) return Ir;
    e = e._reactInternals;
    e: {
        if (fn(e) !== e || e.tag !== 1) throw Error(H(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (st(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(H(171))
    }
    if (e.tag === 1) {
        var r = e.type;
        if (st(r)) return pg(e, r, t)
    }
    return t
}

function hh(e, t, r, n, o, i, a, l, s) {
    return e = Hc(r, n, !0, e, o, i, a, l, s), e.context = gh(null), r = e.current, n = tt(), o = _r(r), i = tr(n, o), i.callback = t ? ? null, Pr(r, i, o), e.current.lanes = o, ni(e, o, n), ut(e, n), e
}

function yl(e, t, r, n) {
    var o = t.current,
        i = tt(),
        a = _r(o);
    return r = gh(r), t.context === null ? t.context = r : t.pendingContext = r, t = tr(i, a), t.payload = {
        element: e
    }, n = n === void 0 ? null : n, n !== null && (t.callback = n), e = Pr(o, t, a), e !== null && (Nt(e, o, a, i), ta(e, o, a)), a
}

function La(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Mf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t
    }
}

function $c(e, t) {
    Mf(e, t), (e = e.alternate) && Mf(e, t)
}

function vx() {
    return null
}
var mh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Bc(e) {
    this._internalRoot = e
}
vl.prototype.render = Bc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(H(409));
    yl(e, t, null, null)
};
vl.prototype.unmount = Bc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        an(function() {
            yl(null, e, null, null)
        }), t[nr] = null
    }
};

function vl(e) {
    this._internalRoot = e
}
vl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Q0();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var r = 0; r < xr.length && t !== 0 && t < xr[r].priority; r++);
        xr.splice(r, 0, e), r === 0 && K0(e)
    }
};

function Wc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function bl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Rf() {}

function bx(e, t, r, n, o) {
    if (o) {
        if (typeof n == "function") {
            var i = n;
            n = function() {
                var u = La(a);
                i.call(u)
            }
        }
        var a = hh(t, n, e, 0, null, !1, !1, "", Rf);
        return e._reactRootContainer = a, e[nr] = a.current, Wo(e.nodeType === 8 ? e.parentNode : e), an(), a
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof n == "function") {
        var l = n;
        n = function() {
            var u = La(s);
            l.call(u)
        }
    }
    var s = Hc(e, 0, !1, null, null, !1, !1, "", Rf);
    return e._reactRootContainer = s, e[nr] = s.current, Wo(e.nodeType === 8 ? e.parentNode : e), an(function() {
        yl(t, s, r, n)
    }), s
}

function xl(e, t, r, n, o) {
    var i = r._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var s = La(a);
                l.call(s)
            }
        }
        yl(t, a, e, o)
    } else a = bx(r, t, e, o, n);
    return La(a)
}
U0 = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var r = ko(t.pendingLanes);
                r !== 0 && (sc(t, r | 1), ut(t, Ne()), !(ce & 6) && (Vn = Ne() + 500, Hr()))
            }
            break;
        case 13:
            an(function() {
                var n = or(e, 1);
                if (n !== null) {
                    var o = tt();
                    Nt(n, e, 1, o)
                }
            }), $c(e, 1)
    }
};
uc = function(e) {
    if (e.tag === 13) {
        var t = or(e, 134217728);
        if (t !== null) {
            var r = tt();
            Nt(t, e, 134217728, r)
        }
        $c(e, 134217728)
    }
};
V0 = function(e) {
    if (e.tag === 13) {
        var t = _r(e),
            r = or(e, t);
        if (r !== null) {
            var n = tt();
            Nt(r, e, t, n)
        }
        $c(e, t)
    }
};
Q0 = function() {
    return de
};
G0 = function(e, t) {
    var r = de;
    try {
        return de = e, t()
    } finally {
        de = r
    }
};
Xs = function(e, t, r) {
    switch (t) {
        case "input":
            if (Us(e, r), t = r.name, r.type === "radio" && t != null) {
                for (r = e; r.parentNode;) r = r.parentNode;
                for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                        var o = cl(n);
                        if (!o) throw Error(H(90));
                        E0(n), Us(n, o)
                    }
                }
            }
            break;
        case "textarea":
            O0(e, r);
            break;
        case "select":
            t = r.value, t != null && Nn(e, !!r.multiple, t, !1)
    }
};
R0 = Ic;
L0 = an;
var xx = {
        usingClientEntryPoint: !1,
        Events: [ii, kn, cl, _0, M0, Ic]
    },
    yo = {
        findFiberByHostInstance: Gr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    wx = {
        bundleType: yo.bundleType,
        version: yo.version,
        rendererPackageName: yo.rendererPackageName,
        rendererConfig: yo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: sr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = A0(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: yo.findFiberByHostInstance || vx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Di.isDisabled && Di.supportsFiber) try {
        al = Di.inject(wx), Wt = Di
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
mt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wc(t)) throw Error(H(200));
    return yx(e, t, null, r)
};
mt.createRoot = function(e, t) {
    if (!Wc(e)) throw Error(H(299));
    var r = !1,
        n = "",
        o = mh;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Hc(e, 1, !1, null, null, r, !1, n, o), e[nr] = t.current, Wo(e.nodeType === 8 ? e.parentNode : e), new Bc(t)
};
mt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
    return e = A0(t), e = e === null ? null : e.stateNode, e
};
mt.flushSync = function(e) {
    return an(e)
};
mt.hydrate = function(e, t, r) {
    if (!bl(t)) throw Error(H(200));
    return xl(null, e, t, !0, r)
};
mt.hydrateRoot = function(e, t, r) {
    if (!Wc(e)) throw Error(H(405));
    var n = r != null && r.hydratedSources || null,
        o = !1,
        i = "",
        a = mh;
    if (r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (a = r.onRecoverableError)), t = hh(t, null, e, 1, r ? ? null, o, !1, i, a), e[nr] = t.current, Wo(e), n)
        for (e = 0; e < n.length; e++) r = n[e], o = r._getVersion, o = o(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, o] : t.mutableSourceEagerHydrationData.push(r, o);
    return new vl(t)
};
mt.render = function(e, t, r) {
    if (!bl(t)) throw Error(H(200));
    return xl(null, e, t, !1, r)
};
mt.unmountComponentAtNode = function(e) {
    if (!bl(e)) throw Error(H(40));
    return e._reactRootContainer ? (an(function() {
        xl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[nr] = null
        })
    }), !0) : !1
};
mt.unstable_batchedUpdates = Ic;
mt.unstable_renderSubtreeIntoContainer = function(e, t, r, n) {
    if (!bl(r)) throw Error(H(200));
    if (e == null || e._reactInternals === void 0) throw Error(H(38));
    return xl(e, t, r, !1, n)
};
mt.version = "18.2.0-next-9e3b772b8-20220608";

function yh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh)
    } catch (e) {
        console.error(e)
    }
}
yh(), h0.exports = mt;
var wl = h0.exports,
    Lf = wl;
As.createRoot = Lf.createRoot, As.hydrateRoot = Lf.hydrateRoot;
const kx = "/assets/banner4-uCkEY5Ar.jpg";
var vh = {
    exports: {}
};
(function(e, t) {
    (function(r, n) {
        e.exports = n()
    })(Zt, function() {
        return function(r) {
            function n(i) {
                if (o[i]) return o[i].exports;
                var a = o[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return r[i].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
            }
            var o = {};
            return n.m = r, n.c = o, n.p = "dist/", n(0)
        }([function(r, n, o) {
            function i(C) {
                return C && C.__esModule ? C : {
                    default: C
                }
            }
            var a = Object.assign || function(C) {
                    for (var M = 1; M < arguments.length; M++) {
                        var I = arguments[M];
                        for (var D in I) Object.prototype.hasOwnProperty.call(I, D) && (C[D] = I[D])
                    }
                    return C
                },
                l = o(1),
                s = (i(l), o(6)),
                u = i(s),
                d = o(7),
                c = i(d),
                f = o(8),
                h = i(f),
                m = o(9),
                v = i(m),
                S = o(10),
                y = i(S),
                p = o(11),
                b = i(p),
                x = o(14),
                k = i(x),
                E = [],
                R = !1,
                L = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                j = function() {
                    var C = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    if (C && (R = !0), R) return E = (0, b.default)(E, L), (0, y.default)(E, L.once), E
                },
                T = function() {
                    E = (0, k.default)(), j()
                },
                _ = function() {
                    E.forEach(function(C, M) {
                        C.node.removeAttribute("data-aos"), C.node.removeAttribute("data-aos-easing"), C.node.removeAttribute("data-aos-duration"), C.node.removeAttribute("data-aos-delay")
                    })
                },
                O = function(C) {
                    return C === !0 || C === "mobile" && v.default.mobile() || C === "phone" && v.default.phone() || C === "tablet" && v.default.tablet() || typeof C == "function" && C() === !0
                },
                P = function(C) {
                    L = a(L, C), E = (0, k.default)();
                    var M = document.all && !window.atob;
                    return O(L.disable) || M ? _() : (L.disableMutationObserver || h.default.isSupported() || (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `), L.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", L.easing), document.querySelector("body").setAttribute("data-aos-duration", L.duration), document.querySelector("body").setAttribute("data-aos-delay", L.delay), L.startEvent === "DOMContentLoaded" && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : L.startEvent === "load" ? window.addEventListener(L.startEvent, function() {
                        j(!0)
                    }) : document.addEventListener(L.startEvent, function() {
                        j(!0)
                    }), window.addEventListener("resize", (0, c.default)(j, L.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(j, L.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                        (0, y.default)(E, L.once)
                    }, L.throttleDelay)), L.disableMutationObserver || h.default.ready("[data-aos]", T), E)
                };
            r.exports = {
                init: P,
                refresh: j,
                refreshHard: T
            }
        }, function(r, n) {}, , , , , function(r, n) {
            (function(o) {
                function i(O, P, C) {
                    function M(X) {
                        var ae = G,
                            He = K;
                        return G = K = void 0, Te = X, ee = O.apply(He, ae)
                    }

                    function I(X) {
                        return Te = X, q = setTimeout(A, P), Re ? M(X) : ee
                    }

                    function D(X) {
                        var ae = X - ie,
                            He = X - Te,
                            Rt = P - ae;
                        return J ? T(Rt, re - He) : Rt
                    }

                    function N(X) {
                        var ae = X - ie,
                            He = X - Te;
                        return ie === void 0 || ae >= P || ae < 0 || J && He >= re
                    }

                    function A() {
                        var X = _();
                        return N(X) ? F(X) : void(q = setTimeout(A, D(X)))
                    }

                    function F(X) {
                        return q = void 0, oe && G ? M(X) : (G = K = void 0, ee)
                    }

                    function $() {
                        q !== void 0 && clearTimeout(q), Te = 0, G = ie = K = q = void 0
                    }

                    function B() {
                        return q === void 0 ? ee : F(_())
                    }

                    function Q() {
                        var X = _(),
                            ae = N(X);
                        if (G = arguments, K = this, ie = X, ae) {
                            if (q === void 0) return I(ie);
                            if (J) return q = setTimeout(A, P), M(ie)
                        }
                        return q === void 0 && (q = setTimeout(A, P)), ee
                    }
                    var G, K, re, ee, q, ie, Te = 0,
                        Re = !1,
                        J = !1,
                        oe = !0;
                    if (typeof O != "function") throw new TypeError(f);
                    return P = d(P) || 0, l(C) && (Re = !!C.leading, J = "maxWait" in C, re = J ? j(d(C.maxWait) || 0, P) : re, oe = "trailing" in C ? !!C.trailing : oe), Q.cancel = $, Q.flush = B, Q
                }

                function a(O, P, C) {
                    var M = !0,
                        I = !0;
                    if (typeof O != "function") throw new TypeError(f);
                    return l(C) && (M = "leading" in C ? !!C.leading : M, I = "trailing" in C ? !!C.trailing : I), i(O, P, {
                        leading: M,
                        maxWait: P,
                        trailing: I
                    })
                }

                function l(O) {
                    var P = typeof O > "u" ? "undefined" : c(O);
                    return !!O && (P == "object" || P == "function")
                }

                function s(O) {
                    return !!O && (typeof O > "u" ? "undefined" : c(O)) == "object"
                }

                function u(O) {
                    return (typeof O > "u" ? "undefined" : c(O)) == "symbol" || s(O) && L.call(O) == m
                }

                function d(O) {
                    if (typeof O == "number") return O;
                    if (u(O)) return h;
                    if (l(O)) {
                        var P = typeof O.valueOf == "function" ? O.valueOf() : O;
                        O = l(P) ? P + "" : P
                    }
                    if (typeof O != "string") return O === 0 ? O : +O;
                    O = O.replace(v, "");
                    var C = y.test(O);
                    return C || p.test(O) ? b(O.slice(2), C ? 2 : 8) : S.test(O) ? h : +O
                }
                var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(O) {
                        return typeof O
                    } : function(O) {
                        return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                    },
                    f = "Expected a function",
                    h = NaN,
                    m = "[object Symbol]",
                    v = /^\s+|\s+$/g,
                    S = /^[-+]0x[0-9a-f]+$/i,
                    y = /^0b[01]+$/i,
                    p = /^0o[0-7]+$/i,
                    b = parseInt,
                    x = (typeof o > "u" ? "undefined" : c(o)) == "object" && o && o.Object === Object && o,
                    k = (typeof self > "u" ? "undefined" : c(self)) == "object" && self && self.Object === Object && self,
                    E = x || k || Function("return this")(),
                    R = Object.prototype,
                    L = R.toString,
                    j = Math.max,
                    T = Math.min,
                    _ = function() {
                        return E.Date.now()
                    };
                r.exports = a
            }).call(n, function() {
                return this
            }())
        }, function(r, n) {
            (function(o) {
                function i(_, O, P) {
                    function C(oe) {
                        var X = Q,
                            ae = G;
                        return Q = G = void 0, ie = oe, re = _.apply(ae, X)
                    }

                    function M(oe) {
                        return ie = oe, ee = setTimeout(N, O), Te ? C(oe) : re
                    }

                    function I(oe) {
                        var X = oe - q,
                            ae = oe - ie,
                            He = O - X;
                        return Re ? j(He, K - ae) : He
                    }

                    function D(oe) {
                        var X = oe - q,
                            ae = oe - ie;
                        return q === void 0 || X >= O || X < 0 || Re && ae >= K
                    }

                    function N() {
                        var oe = T();
                        return D(oe) ? A(oe) : void(ee = setTimeout(N, I(oe)))
                    }

                    function A(oe) {
                        return ee = void 0, J && Q ? C(oe) : (Q = G = void 0, re)
                    }

                    function F() {
                        ee !== void 0 && clearTimeout(ee), ie = 0, Q = q = G = ee = void 0
                    }

                    function $() {
                        return ee === void 0 ? re : A(T())
                    }

                    function B() {
                        var oe = T(),
                            X = D(oe);
                        if (Q = arguments, G = this, q = oe, X) {
                            if (ee === void 0) return M(q);
                            if (Re) return ee = setTimeout(N, O), C(q)
                        }
                        return ee === void 0 && (ee = setTimeout(N, O)), re
                    }
                    var Q, G, K, re, ee, q, ie = 0,
                        Te = !1,
                        Re = !1,
                        J = !0;
                    if (typeof _ != "function") throw new TypeError(c);
                    return O = u(O) || 0, a(P) && (Te = !!P.leading, Re = "maxWait" in P, K = Re ? L(u(P.maxWait) || 0, O) : K, J = "trailing" in P ? !!P.trailing : J), B.cancel = F, B.flush = $, B
                }

                function a(_) {
                    var O = typeof _ > "u" ? "undefined" : d(_);
                    return !!_ && (O == "object" || O == "function")
                }

                function l(_) {
                    return !!_ && (typeof _ > "u" ? "undefined" : d(_)) == "object"
                }

                function s(_) {
                    return (typeof _ > "u" ? "undefined" : d(_)) == "symbol" || l(_) && R.call(_) == h
                }

                function u(_) {
                    if (typeof _ == "number") return _;
                    if (s(_)) return f;
                    if (a(_)) {
                        var O = typeof _.valueOf == "function" ? _.valueOf() : _;
                        _ = a(O) ? O + "" : O
                    }
                    if (typeof _ != "string") return _ === 0 ? _ : +_;
                    _ = _.replace(m, "");
                    var P = S.test(_);
                    return P || y.test(_) ? p(_.slice(2), P ? 2 : 8) : v.test(_) ? f : +_
                }
                var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
                        return typeof _
                    } : function(_) {
                        return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _
                    },
                    c = "Expected a function",
                    f = NaN,
                    h = "[object Symbol]",
                    m = /^\s+|\s+$/g,
                    v = /^[-+]0x[0-9a-f]+$/i,
                    S = /^0b[01]+$/i,
                    y = /^0o[0-7]+$/i,
                    p = parseInt,
                    b = (typeof o > "u" ? "undefined" : d(o)) == "object" && o && o.Object === Object && o,
                    x = (typeof self > "u" ? "undefined" : d(self)) == "object" && self && self.Object === Object && self,
                    k = b || x || Function("return this")(),
                    E = Object.prototype,
                    R = E.toString,
                    L = Math.max,
                    j = Math.min,
                    T = function() {
                        return k.Date.now()
                    };
                r.exports = i
            }).call(n, function() {
                return this
            }())
        }, function(r, n) {
            function o(d) {
                var c = void 0,
                    f = void 0;
                for (c = 0; c < d.length; c += 1)
                    if (f = d[c], f.dataset && f.dataset.aos || f.children && o(f.children)) return !0;
                return !1
            }

            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function a() {
                return !!i()
            }

            function l(d, c) {
                var f = window.document,
                    h = i(),
                    m = new h(s);
                u = c, m.observe(f.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }

            function s(d) {
                d && d.forEach(function(c) {
                    var f = Array.prototype.slice.call(c.addedNodes),
                        h = Array.prototype.slice.call(c.removedNodes),
                        m = f.concat(h);
                    if (o(m)) return u()
                })
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = function() {};
            n.default = {
                isSupported: a,
                ready: l
            }
        }, function(r, n) {
            function o(f, h) {
                if (!(f instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = function() {
                    function f(h, m) {
                        for (var v = 0; v < m.length; v++) {
                            var S = m[v];
                            S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(h, S.key, S)
                        }
                    }
                    return function(h, m, v) {
                        return m && f(h.prototype, m), v && f(h, v), h
                    }
                }(),
                l = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                d = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                c = function() {
                    function f() {
                        o(this, f)
                    }
                    return a(f, [{
                        key: "phone",
                        value: function() {
                            var h = i();
                            return !(!l.test(h) && !s.test(h.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var h = i();
                            return !(!u.test(h) && !d.test(h.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), f
                }();
            n.default = new c
        }, function(r, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = function(a, l, s) {
                    var u = a.node.getAttribute("data-aos-once");
                    l > a.position ? a.node.classList.add("aos-animate") : typeof u < "u" && (u === "false" || !s && u !== "true") && a.node.classList.remove("aos-animate")
                },
                i = function(a, l) {
                    var s = window.pageYOffset,
                        u = window.innerHeight;
                    a.forEach(function(d, c) {
                        o(d, u + s, l)
                    })
                };
            n.default = i
        }, function(r, n, o) {
            function i(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = o(12),
                l = i(a),
                s = function(u, d) {
                    return u.forEach(function(c, f) {
                        c.node.classList.add("aos-init"), c.position = (0, l.default)(c.node, d.offset)
                    }), u
                };
            n.default = s
        }, function(r, n, o) {
            function i(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = o(13),
                l = i(a),
                s = function(u, d) {
                    var c = 0,
                        f = 0,
                        h = window.innerHeight,
                        m = {
                            offset: u.getAttribute("data-aos-offset"),
                            anchor: u.getAttribute("data-aos-anchor"),
                            anchorPlacement: u.getAttribute("data-aos-anchor-placement")
                        };
                    switch (m.offset && !isNaN(m.offset) && (f = parseInt(m.offset)), m.anchor && document.querySelectorAll(m.anchor) && (u = document.querySelectorAll(m.anchor)[0]), c = (0, l.default)(u).top, m.anchorPlacement) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            c += u.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            c += u.offsetHeight;
                            break;
                        case "top-center":
                            c += h / 2;
                            break;
                        case "bottom-center":
                            c += h / 2 + u.offsetHeight;
                            break;
                        case "center-center":
                            c += h / 2 + u.offsetHeight / 2;
                            break;
                        case "top-top":
                            c += h;
                            break;
                        case "bottom-top":
                            c += u.offsetHeight + h;
                            break;
                        case "center-top":
                            c += u.offsetHeight / 2 + h
                    }
                    return m.anchorPlacement || m.offset || isNaN(d) || (f = d), c + f
                };
            n.default = s
        }, function(r, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = function(i) {
                for (var a = 0, l = 0; i && !isNaN(i.offsetLeft) && !isNaN(i.offsetTop);) a += i.offsetLeft - (i.tagName != "BODY" ? i.scrollLeft : 0), l += i.offsetTop - (i.tagName != "BODY" ? i.scrollTop : 0), i = i.offsetParent;
                return {
                    top: l,
                    left: a
                }
            };
            n.default = o
        }, function(r, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = function(i) {
                return i = i || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(i, function(a) {
                    return {
                        node: a
                    }
                })
            };
            n.default = o
        }])
    })
})(vh);
var Sx = vh.exports;
const pn = Yu(Sx),
    Ex = () => (w.useEffect(() => {
        pn.init({
            offset: 200,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100
        })
    }, []), g.jsxs("section", {
        id: "hero",
        className: "w-full lg:px-20 px-10 lg:py-20 py-10 h-[600px] bg-cover bg-center flex flex-col justify-center items-start gap-8",
        style: {
            backgroundImage: `url(${kx})`
        },
        children: [g.jsxs("h1", {
            "data-aos": "zoom-in",
            className: "text-6xl text-white font-bold",
            children: ["Life is a combination ", g.jsx("br", {}), "of Pizza & Magic"]
        }), g.jsxs("p", {
            "data-aos": "zoom-in",
            className: "text-xl text-white font-lg",
            children: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. ", g.jsx("br", {}), "Deserunt, est ducimus. At fugiat a deserunt ", g.jsx("br", {}), "ullam id provident minima ipsum."]
        }), g.jsx("button", {
            "data-aos": "flip-up",
            className: "bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black",
            children: "ORDER NOW"
        })]
    })),
    bh = w.createContext(),
    Cx = ({
        children: e
    }) => {
        const [t, r] = w.useState(!1), n = () => {
            r(!t)
        };
        return g.jsx(bh.Provider, {
            value: {
                darkMode: t,
                toggleDarkMode: n
            },
            children: e
        })
    },
    gn = () => {
        const e = w.useContext(bh);
        if (!e) throw new Error("useDarkMode must be used within a DarkModeProvider");
        return e
    },
    Ox = "/assets/icon1-Ck495ZKi.png",
    Tx = "/assets/icon2-ChW5pyxo.png",
    jx = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADn1JREFUeF7tnXmQHFUdx7+/7snBTk82hJBMbxLDYSjkEENQIJkZNkg4RKVADlEKREuwpNACRIKghEIORY6iVAoEAeNRCCpQCBjBbLaHnCRgyWEI4UqYmU0hJJmezYbs9M96k9mw10wf090zPdPvv91573e876ffdL9+7w0hLIHsgbc6J07cq9j/sMHGjzrSvWudJkFOG4bt6tcDQvzxxeISgD8L4ENmY4FTCEIA6qejI8/DxB+w4RiCEABHMtSnUQXxa4IgBKA+Wtr2aiK+YwhCAGxL4X8Di+I7giAEwH89bXm0Kb5tCEIAbMnhb2WH4tuCIATAX00te6tRfMsQhABYlsS/ii6JbwmCEAD/dLXkyWXxTSEIAbAkiz+VPBK/KgQhAP5oa+rFY/ErQhACYCqN9xV8En9UCEIAvNe3qgefxR8BQQhAnQHIJKKXE9FtdQjjfQn8+RCAOvT8YJcMUDah3EGE7/seCtHTIQC+9/roDrOp6C1gusrHcNb190sLQgB87HEzVz5CUBJ/xortH4QAmKni8+c+QLBHfJFaCIBPAudOnBqNL+kpWHHnIQRDxA8BsKKGC3UGHvUISMe1/OVWTHoAwQjxQwCsKFFjneHP+QS6ow4QjCp+CECN4po1rzTJYweCTCJ6MxEtNPNV5fOK4ocA1NCrZk3NZvh8gqCq+CEAZio6/NxM/AGzHkNgKn4IgEOBqzWzKr7HEFgSPwTAZQDsiu8RBJbFDwFwEQCn4rsMgS3xQwBcAqBW8V2CwLb4IQAuAOCW+DVC4Ej8EIAaAXBbfLsQiFfJPano93ZIYx7av2vrVifphO8CnPQaAK/EtwuBw/D3NAsBcNCDXovvJwQhADYB8Et8vyAIAbABgN/i+wFBCIBFAOolvtcQhABYAOCdRPveY6n4LIAjLVT3pgrRC1zIH9exFr1uOggBMOnNel/55fBe7O+XThBr+NwUP5wHaHHxQwCqANDsV/7H9xZujylNYK9VxA9HgFFgbSXxQwCGAdBq4ocADAKgFcUPASgD0KriBwaAbFJ5HMBhAMkAFwHoBOQN4F0CbyaS1hvF4r93jul9ef8u9Nm5D22USZ4+SV7g9JWunXyH1w3ERFA2qSwF0Gkh0V0ErAZjKcn01JRl+VUEGJXatbr4QRsBvmwBgCFViPCeYeBRKYL74l36y4M/bAjxQWv6ZPnEelz5gZoHyCVjixl8nl0ABtcn4HmD6TY1nX/83UR7e93n9htA/OCMAAnllyBcUgsAg9q+AkDcR3zaJXsOzNT/yg/UCJBJRm8i0NUOeroRmzhewOlFMoG4CcwlY1cz+CYvOsBnmw0lfmC+AjLJ6HkEur4slnjMmwxg32AdcNE4w/6weyOfrwGX3DEgZeeNnw6SDyGSDifwXAbmA2h3yYWLZhpT/MCMAFaV4LMgb+mJHW0wnwvgnPIoYbW5R/UaV/ymA2CwgjwHY3qiyhnMEEevzfZIXROzjS1+UwMwWJlMInoygW4Fielkv0rji98yAIhEuRORnKFcDMaN3t8nBEP8lgJg4LrPzBv/CZIivwNwnEdjQcM96lXLMxDzAG4LVYZAvBuIuWs7OFf+QN4tB8CWzmi8WKR/AfiUu+IjUFd+SwIQij8S+ZYZAULxRx/vWgKAUPzKX3ZND8CmY/eaJkfkpQTMsvCdn7d+Yxi8G77R8vccgMzc8TMRicyRDMxmohkAx8svc3bHQxDLuLLM2MzgNxnSGurNv+jGJkib4q83qLhAYvmPABJVH50IL+2QIvPruZLHAsyWqrgOwMuHYOykydFOYjodgFjG1WEpkqGV+gGsBPHjsiQ/NqVr+xt2bdgc9l+PGMb8fZ/vzeRS7fszF18CMKGKz1fjmn54tfWGduOtV33XACh1eL90AUl8KTOmuZzQWjDfFd9R+BOtxS4rtnPJ2GkMfhRAxKT++ohhHC/EH6iXSyqXMnBXtXYMOr1Dyz9mJZZGrlMzAJs795ouF6UbAPo6gDHeJstvA9L18Xh+MT1SWtZVteRSyjnM+H0VCEaILwyWpo2LihgFDq3ogKGpaT1lFkOjf+4YAPELGLyjIN60XQGgzedEX4OES9RlulguXh2CpPJVBhaPAsGo4g8Yy6bavgCW/m5i/lBV0181i6GRP3cEQE8qNtdgFp16QB2TYwbu3ylHrjS7GcuNhKCq+KVRoHQGn7KOGZ+pnCPdrmp5cQEEttgCQLxjz7Ypiwild+xyg2S9sVjkM6cvL4ghu2IZBMHG4d/5lRrlEtFzmUg8FVQqm+KaPpNKvASzWAZg07ETJkUixl8s7tDxuzd2MPPFHemCGJWqQBA7TTaKawbf8FWrL55o9tlHeW/IY+uwBsTSMfH09lV+J+yWP0sA9MxtP9CQik+CcLBbjj2wI0bthaqW/7mbtrMp5VdgfLeiTcL1are+yE2fftoyBeC9VNtsiaV/AtjHz8Cc+iLGT+Np/cdO2w9vl5kXS5DEWhV73aqme7W2wK00qvBbxcWW1IRZRcPQQJjqeSRuOiC+Uu0u/MINk+VHwverrCLaqSt6+6ynsdMNf37bqDgCZDpjk6mIFwCe6XdQLvhjBp/foRXEHEDNpbw9veLmVIOMI6d1975Ys6M6GBgVALG8OpdTxDPwSXWIyS2XfQaMedO03nW1GswmYleB+JaKdpgvUNMFscwscGVUALIpZREY1wUum5EBvzFu3JijJj374bZacskmJ5wKGE9WskGEG+Pd+rW1+KhX2xEAlG/6xGONx9O6/qRMjHviaf07tXgTbzRJjrxd2QYtVrX8+bX4qFfbIQCI7Va5pLIawJx6BeSBXzFJM1/V9GVObZdvBD+qshexS9V0sS0tcGUIANlE9HwQPRS4LMwDfiUe14+w8gKpkqlsUvkfgEkVPl+nanogL5o9AIhp3lxbbENA7/rNESD+htpdcAx3NqlsAPDJ0RwxsKFD0w8yD6LxauwBoImv/nKv89txuTCLuiAWm9gu2aSyHkAFkekdVcvvZ9toAzT4GICkIh6X6rSJ0p+eYODMDk0X7zNsl2xSEauSDqzQcKOq6aOODrYd+dygBECuUzmMi/iPz77r4e45VdNPcOI4l4p+jQ1pBpPRTkwTIFGMmCfw7t1FW1VNP9OJ3Xq3KQGQTUZ/BtAP6x2MD/4ZcuQAtWtrlUc6H6JoIBdlABSxT67y8qcGCrjWUBh8WYdWuLNWO83Snnav6ZM3+ZjQawC6xMBDjLFMpfX6Ylj2520jY6ma1o/3Md+GdkWZpPIVAsTqWU8LA8tliX4wdVl+xXBHYqIlW4xdSGCxd18c/uRl+UhX9AlBfXvndsdQJhG9mYgWum14qD1+IN5buNhsSXe2c+J+KPY/5cHO3WHpSUer2nYx49nyhXIp5a/MEJs4PCr0TDye/6LVWbgyBEIc70YCxiVqWv+1RwkHyqz4CniJgCM8irqvKBdnTe/asdmO/UxCuYgI99hpY69u8Ffz2su3cm3KJpUsALFfz4PCD6ha4Zt2De+ellZyVebe7Zoc9o2EP6tpXRwj1/JFAFDwcGPHWaqmO7rBzCaUh0E42yOF0qqmJz2yHSizAgAxN+7JGv9ikWebrdev1FveHhDNq1WtcHSglPIoWAGAOHt3nBf2mXBIR7cunvttl2xCuQ4Ej5Zb0xpVy3/OdlBN2EAAsNWrc/OIeUE8XRA/umy75JLKvQx823ZDSw14laoVjrFUtckrCQAqvueuNXcGburQ9Guc2MkkldctnurhxPwTqqaf5qRhs7WhbELpBsGrG6JNfbJ+kN1f8sqklBQxHC/hMhOJgN/ENf0is3qt8DllU9H7wWT7Uc1y5zAWqWl94Kx/02a79+NFNYC8/I7+iarpN5gG0wIVKJuMXQmwq/vphvWbwcDZVhZilPYj9MR+C2ZPV9gS05fi6XzFZd4toPueFMU9gNjXJt7OeVmKTFhUiOq3VnoJUz6+9V4/NqPIMqtTugpioqnlC2XmoI3alA8BjPWhN95lZrHffpkUoc1clNoIxgFMdAqYxcycJ4+jQ/Pit1StUM+DLXzoZusudi8IScWeAvMp1psFtyYBd8Y1/bLgZuBu5GUAoheA6UF3TTeoNcZ8Na17/ZXXoMmPDKsEwAcn7N2+c+euHn+G4Lr2TSYu6zOdLg2va+QeOd+zLDyTVB4joKknR5hxbUdaF6uOwlLugT0A9BwXXWAYtKSJe2anNJZnTn2uIEa6sAwHQPydSyppBuY1ae/crWp65bN+mjRps7SGbA7NpKInEtM/zBoF8PO8LPNB4bN/hZvAwf/OJJXnCZgbQJErhkyga+Javhl+e9h1WUYcEJGZ13YUSdJKrxaJuJ6BucH1/f367BkrsMO8auvVGPWImFwydrvYQdME3bELkjFPXda7pgly8SSFUQHYcArGxQrKyurn5HoSj9tGw7d+Jj1a7Zi4g6nI4qygaj+c4LZgrtkjYMlUWT81nPSp3qVVTwrNJKMnEUi8NjX70QXXhHPFEOO/fZHIsWaniLviK+BGTI+KzSZiF4L4PgBSQHJ9XyrKx0xdvm1jQOKta5imAIjoyjt17g4ABBkiPjneXWiFwy5cAccSACUIUsoZxPgDgPGueHbfyEapKJ8UXvn2OtYyACUIdp+c/bDDXwKzF5mN2kT4205D/tbM9DaxsCUsNnrAFgDCbm6uMoUj9GCDLCDpA+OKcKevDcWHVbUNwED7bKq0iEQcyT7ZufuaWj5BLF8WT297syYrLd7YMQCi397qnDhxvLFrIZgu9XCD6TCJeBUD13VohWZ8aeU7jjUBsGc0SCr7ln5WhSAOZfZiq3kR4GfEiBMu53KXEVcAGAhJrOvPZqMLiHAOQOK3BtQawhWbVleC8Cj145H4cn1LDbbCphV6wFUAhvvYfQAlHcXEs4n5QDDNBJVGCHEUfTsAIbIOQJznv4mADQx6gyWsKLTlV4cHOXnP7f8BSotLXvkpiuoAAAAASUVORK5CYII=",
    Px = "/assets/icon4-aRQttQe_.png",
    Nx = "/assets/faq4-BmJx93zU.jpg",
    _x = () => {
        w.useEffect(() => {
            pn.init({
                offset: 200,
                duration: 800,
                easing: "ease-in-sine",
                delay: 100
            })
        }, []);
        const {
            darkMode: e,
            toggleDarkMode: t
        } = gn();
        return g.jsxs(g.Fragment, {
            children: [g.jsxs("section", {
                id: "about",
                className: `${e?"dark bg-black":"light bg-white"} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10`,
                children: [g.jsxs("div", {
                    "data-aos": "zoom-in",
                    "data-aos-delay": "200",
                    className: " border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer",
                    children: [g.jsx("img", {
                        src: Ox,
                        alt: "",
                        className: "w-[80px] h-80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("h1", {
                        className: " text-black dark:text-white text-2xl font-lg text-center",
                        children: "ABOUT US"
                    })]
                }), g.jsxs("div", {
                    "data-aos": "zoom-in",
                    "data-aos-delay": "400",
                    className: "border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer",
                    children: [g.jsx("img", {
                        src: Tx,
                        alt: "",
                        className: "w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("h1", {
                        className: " text-black dark:text-white text-2xl font-lg",
                        children: "ORGANIC"
                    })]
                }), g.jsxs("div", {
                    "data-aos": "zoom-in",
                    "data-aos-delay": "600",
                    className: " border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer",
                    children: [g.jsx("img", {
                        src: jx,
                        alt: "",
                        className: "w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("h1", {
                        className: " text-black dark:text-white text-2xl font-lg",
                        children: "PIZZA"
                    })]
                }), g.jsxs("div", {
                    "data-aos": "zoom-in",
                    "data-aos-delay": "800",
                    className: " border-[4px] border-orange-600 dark:border-orange-400 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer",
                    children: [g.jsx("img", {
                        src: Px,
                        alt: "",
                        className: "w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("h1", {
                        className: " text-black text-2xl dark:text-white font-lg",
                        children: "PASTA"
                    })]
                })]
            }), g.jsxs("section", {
                className: `${e?"dark bg-black":"light bg-white"} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`,
                children: [g.jsx("div", {
                    children: g.jsx("img", {
                        "data-aos": "zoom-in",
                        src: Nx,
                        alt: "",
                        className: "lg:w-[800px] lg:h-[600px] rounded-xl"
                    })
                }), g.jsxs("div", {
                    className: "flex flex-col justify-center items-center gap-8",
                    children: [g.jsx("h1", {
                        "data-aos": "zoom-in",
                        className: "text-2xl text-black dark:text-white font-semibold text-center",
                        children: "WELCOME TO"
                    }), g.jsx("h1", {
                        "data-aos": "zoom-in",
                        className: "text-6xl text-black dark:text-white font-bold text-center",
                        children: "Pizzazz Pies"
                    }), g.jsx("p", {
                        "data-aos": "zoom-in",
                        className: "text-xl text-slate-800 dark:text-slate-100 text-center",
                        children: "We are specialized in authentic Neapolitan pizza, baked hot and fast in a brick oven to achieve a not-too-thick, not-to-thin chewy, smoky crust, made from a recipe that’s been handed down through five generations of pizzaioli (pizza makers). "
                    }), g.jsx("button", {
                        "data-aos": "flip-up",
                        className: "bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
                        children: "ORDER NOW"
                    })]
                })]
            })]
        })
    },
    Mx = "/assets/cheese-Dfw_eXxV.jpg",
    Rx = "/assets/delicious-fxLjy1wE.jpg",
    Lx = "/assets/peproni-D3XyLGNg.jpg",
    zx = "/assets/rustica-BZqNCaHC.jpg",
    Ix = "/assets/tomato-0pyFDcgy.jpg",
    Ax = "/assets/vege-DScus31V.jpg",
    xh = [{
        image: Mx,
        title: "Cheese Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$1.48"
    }, {
        image: Rx,
        title: "Delicious Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$7.01"
    }, {
        image: Lx,
        title: "Peproni Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$3.23"
    }, {
        image: zx,
        title: "Rustica Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$1.98"
    }, {
        image: Ix,
        title: "Tomato Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$4.78"
    }, {
        image: Ax,
        title: "Vege Pizza",
        para: "Get our Manhattan Classic Cheese Pizza with your choice of sauce and crust.",
        price: "$2.12"
    }],
    Dx = () => {
        const {
            darkMode: e,
            toggleDarkMode: t
        } = gn();
        return w.useEffect(() => {
            pn.init({
                offset: 200,
                duration: 800,
                easing: "ease-in-sine",
                delay: 100
            })
        }, []), g.jsxs("section", {
            className: `${e?"dark bg-black":"light bg-black"} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center gap-14`,
            children: [g.jsx("h1", {
                "data-aos": "zoom-in",
                className: "text-white text-6xl font-bold text-center",
                children: "Our Best Sellers"
            }), g.jsx("div", {
                "data-aos": "slide-up",
                className: "grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6",
                children: xh.map((r, n) => g.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 p-8 flex flex-col justify-center items-center gap-4 rounded-lg",
                    children: [g.jsx("img", {
                        src: r.image,
                        alt: "",
                        className: "rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("h1", {
                        className: "text-black text-center text-2xl font-bold dark:text-white",
                        children: r.title
                    }), g.jsx("h1", {
                        className: "text-orange-600 font-bold text-3xl",
                        children: r.price
                    }), g.jsx("p", {
                        className: "text-lg text-slate-800 dark:text-white text-center",
                        children: r.para
                    }), g.jsx("button", {
                        className: "bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
                        children: "ORDER NOW"
                    })]
                }, n))
            })]
        })
    };
var wh = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    zf = De.createContext && De.createContext(wh),
    Rr = function() {
        return Rr = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
                t = arguments[r];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, Rr.apply(this, arguments)
    },
    Fx = function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    };

function kh(e) {
    return e && e.map(function(t, r) {
        return De.createElement(t.tag, Rr({
            key: r
        }, t.attr), kh(t.child))
    })
}

function Mt(e) {
    return function(t) {
        return De.createElement(Hx, Rr({
            attr: Rr({}, e.attr)
        }, t), kh(e.child))
    }
}

function Hx(e) {
    var t = function(r) {
        var n = e.attr,
            o = e.size,
            i = e.title,
            a = Fx(e, ["attr", "size", "title"]),
            l = o || r.size || "1em",
            s;
        return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), De.createElement("svg", Rr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, n, a, {
            className: s,
            style: Rr(Rr({
                color: e.color || r.color
            }, r.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && De.createElement("title", null, i), e.children)
    };
    return zf !== void 0 ? De.createElement(zf.Consumer, null, function(r) {
        return t(r)
    }) : t(wh)
}

function Sh(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                clipRule: "evenodd"
            }
        }]
    })(e)
}

function $x(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                clipRule: "evenodd"
            }
        }]
    })(e)
}

function Bx(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                clipRule: "evenodd"
            }
        }]
    })(e)
}

function Wx(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            }
        }]
    })(e)
}

function Ux(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                fillRule: "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                clipRule: "evenodd"
            }
        }]
    })(e)
}

function Eh(e) {
    return Mt({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19 9l-7 7-7-7"
            }
        }]
    })(e)
}

function Vx(e) {
    return Mt({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 19l-7-7 7-7"
            }
        }]
    })(e)
}

function Ch(e) {
    return Mt({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M9 5l7 7-7 7"
            }
        }]
    })(e)
}

function Qx(e) {
    return Mt({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M5 15l7-7 7 7"
            }
        }]
    })(e)
}

function Gx(e) {
    return Mt({
        tag: "svg",
        attr: {
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "2",
            stroke: "currentColor",
            "aria-hidden": "true"
        },
        child: [{
            tag: "path",
            attr: {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6 18L18 6M6 6l12 12"
            }
        }]
    })(e)
}
const Uc = "-";

function Kx(e) {
    const t = qx(e),
        {
            conflictingClassGroups: r,
            conflictingClassGroupModifiers: n
        } = e;

    function o(a) {
        const l = a.split(Uc);
        return l[0] === "" && l.length !== 1 && l.shift(), Oh(l, t) || Yx(a)
    }

    function i(a, l) {
        const s = r[a] || [];
        return l && n[a] ? [...s, ...n[a]] : s
    }
    return {
        getClassGroupId: o,
        getConflictingClassGroupIds: i
    }
}

function Oh(e, t) {
    var a;
    if (e.length === 0) return t.classGroupId;
    const r = e[0],
        n = t.nextPart.get(r),
        o = n ? Oh(e.slice(1), n) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Uc);
    return (a = t.validators.find(({
        validator: l
    }) => l(i))) == null ? void 0 : a.classGroupId
}
const If = /^\[(.+)\]$/;

function Yx(e) {
    if (If.test(e)) {
        const t = If.exec(e)[1],
            r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (r) return "arbitrary.." + r
    }
}

function qx(e) {
    const {
        theme: t,
        prefix: r
    } = e, n = {
        nextPart: new Map,
        validators: []
    };
    return Zx(Object.entries(e.classGroups), r).forEach(([i, a]) => {
        Nu(a, n, i, t)
    }), n
}

function Nu(e, t, r, n) {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Af(t, o);
            i.classGroupId = r;
            return
        }
        if (typeof o == "function") {
            if (Xx(o)) {
                Nu(o(n), t, r, n);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: r
            });
            return
        }
        Object.entries(o).forEach(([i, a]) => {
            Nu(a, Af(t, i), r, n)
        })
    })
}

function Af(e, t) {
    let r = e;
    return t.split(Uc).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }), r = r.nextPart.get(n)
    }), r
}

function Xx(e) {
    return e.isThemeGetter
}

function Zx(e, t) {
    return t ? e.map(([r, n]) => {
        const o = n.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, l]) => [t + a, l])) : i);
        return [r, o]
    }) : e
}

function Jx(e) {
    if (e < 1) return {
        get: () => {},
        set: () => {}
    };
    let t = 0,
        r = new Map,
        n = new Map;

    function o(i, a) {
        r.set(i, a), t++, t > e && (t = 0, n = r, r = new Map)
    }
    return {
        get(i) {
            let a = r.get(i);
            if (a !== void 0) return a;
            if ((a = n.get(i)) !== void 0) return o(i, a), a
        },
        set(i, a) {
            r.has(i) ? r.set(i, a) : o(i, a)
        }
    }
}
const Th = "!";

function ew(e) {
    const t = e.separator,
        r = t.length === 1,
        n = t[0],
        o = t.length;
    return function(a) {
        const l = [];
        let s = 0,
            u = 0,
            d;
        for (let v = 0; v < a.length; v++) {
            let S = a[v];
            if (s === 0) {
                if (S === n && (r || a.slice(v, v + o) === t)) {
                    l.push(a.slice(u, v)), u = v + o;
                    continue
                }
                if (S === "/") {
                    d = v;
                    continue
                }
            }
            S === "[" ? s++ : S === "]" && s--
        }
        const c = l.length === 0 ? a : a.substring(u),
            f = c.startsWith(Th),
            h = f ? c.substring(1) : c,
            m = d && d > u ? d - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: f,
            baseClassName: h,
            maybePostfixModifierPosition: m
        }
    }
}

function tw(e) {
    if (e.length <= 1) return e;
    const t = [];
    let r = [];
    return e.forEach(n => {
        n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n)
    }), t.push(...r.sort()), t
}

function rw(e) {
    return {
        cache: Jx(e.cacheSize),
        splitModifiers: ew(e),
        ...Kx(e)
    }
}
const nw = /\s+/;

function ow(e, t) {
    const {
        splitModifiers: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: o
    } = t, i = new Set;
    return e.trim().split(nw).map(a => {
        const {
            modifiers: l,
            hasImportantModifier: s,
            baseClassName: u,
            maybePostfixModifierPosition: d
        } = r(a);
        let c = n(d ? u.substring(0, d) : u),
            f = !!d;
        if (!c) {
            if (!d) return {
                isTailwindClass: !1,
                originalClassName: a
            };
            if (c = n(u), !c) return {
                isTailwindClass: !1,
                originalClassName: a
            };
            f = !1
        }
        const h = tw(l).join(":");
        return {
            isTailwindClass: !0,
            modifierId: s ? h + Th : h,
            classGroupId: c,
            originalClassName: a,
            hasPostfixModifier: f
        }
    }).reverse().filter(a => {
        if (!a.isTailwindClass) return !0;
        const {
            modifierId: l,
            classGroupId: s,
            hasPostfixModifier: u
        } = a, d = l + s;
        return i.has(d) ? !1 : (i.add(d), o(s, u).forEach(c => i.add(l + c)), !0)
    }).reverse().map(a => a.originalClassName).join(" ")
}

function iw() {
    let e = 0,
        t, r, n = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (r = jh(t)) && (n && (n += " "), n += r);
    return n
}

function jh(e) {
    if (typeof e == "string") return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++) e[n] && (t = jh(e[n])) && (r && (r += " "), r += t);
    return r
}

function aw(e, ...t) {
    let r, n, o, i = a;

    function a(s) {
        const u = t.reduce((d, c) => c(d), e());
        return r = rw(u), n = r.cache.get, o = r.cache.set, i = l, l(s)
    }

    function l(s) {
        const u = n(s);
        if (u) return u;
        const d = ow(s, r);
        return o(s, d), d
    }
    return function() {
        return i(iw.apply(null, arguments))
    }
}

function ge(e) {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0, t
}
const Ph = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    lw = /^\d+\/\d+$/,
    sw = new Set(["px", "full", "screen"]),
    uw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    cw = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    dw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    fw = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    pw = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function Kt(e) {
    return qr(e) || sw.has(e) || lw.test(e)
}

function pr(e) {
    return no(e, "length", ww)
}

function qr(e) {
    return !!e && !Number.isNaN(Number(e))
}

function Fi(e) {
    return no(e, "number", qr)
}

function vo(e) {
    return !!e && Number.isInteger(Number(e))
}

function gw(e) {
    return e.endsWith("%") && qr(e.slice(0, -1))
}

function ne(e) {
    return Ph.test(e)
}

function gr(e) {
    return uw.test(e)
}
const hw = new Set(["length", "size", "percentage"]);

function mw(e) {
    return no(e, hw, Nh)
}

function yw(e) {
    return no(e, "position", Nh)
}
const vw = new Set(["image", "url"]);

function bw(e) {
    return no(e, vw, Sw)
}

function xw(e) {
    return no(e, "", kw)
}

function bo() {
    return !0
}

function no(e, t, r) {
    const n = Ph.exec(e);
    return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1
}

function ww(e) {
    return cw.test(e) && !dw.test(e)
}

function Nh() {
    return !1
}

function kw(e) {
    return fw.test(e)
}

function Sw(e) {
    return pw.test(e)
}

function Ew() {
    const e = ge("colors"),
        t = ge("spacing"),
        r = ge("blur"),
        n = ge("brightness"),
        o = ge("borderColor"),
        i = ge("borderRadius"),
        a = ge("borderSpacing"),
        l = ge("borderWidth"),
        s = ge("contrast"),
        u = ge("grayscale"),
        d = ge("hueRotate"),
        c = ge("invert"),
        f = ge("gap"),
        h = ge("gradientColorStops"),
        m = ge("gradientColorStopPositions"),
        v = ge("inset"),
        S = ge("margin"),
        y = ge("opacity"),
        p = ge("padding"),
        b = ge("saturate"),
        x = ge("scale"),
        k = ge("sepia"),
        E = ge("skew"),
        R = ge("space"),
        L = ge("translate"),
        j = () => ["auto", "contain", "none"],
        T = () => ["auto", "hidden", "clip", "visible", "scroll"],
        _ = () => ["auto", ne, t],
        O = () => [ne, t],
        P = () => ["", Kt, pr],
        C = () => ["auto", qr, ne],
        M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
        I = () => ["solid", "dashed", "dotted", "double", "none"],
        D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
        N = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
        A = () => ["", "0", ne],
        F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
        $ = () => [qr, Fi],
        B = () => [qr, ne];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [bo],
            spacing: [Kt, pr],
            blur: ["none", "", gr, ne],
            brightness: $(),
            borderColor: [e],
            borderRadius: ["none", "", "full", gr, ne],
            borderSpacing: O(),
            borderWidth: P(),
            contrast: $(),
            grayscale: A(),
            hueRotate: B(),
            invert: A(),
            gap: O(),
            gradientColorStops: [e],
            gradientColorStopPositions: [gw, pr],
            inset: _(),
            margin: _(),
            opacity: $(),
            padding: O(),
            saturate: $(),
            scale: $(),
            sepia: A(),
            skew: B(),
            space: O(),
            translate: O()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", ne]
            }],
            container: ["container"],
            columns: [{
                columns: [gr]
            }],
            "break-after": [{
                "break-after": F()
            }],
            "break-before": [{
                "break-before": F()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...M(), ne]
            }],
            overflow: [{
                overflow: T()
            }],
            "overflow-x": [{
                "overflow-x": T()
            }],
            "overflow-y": [{
                "overflow-y": T()
            }],
            overscroll: [{
                overscroll: j()
            }],
            "overscroll-x": [{
                "overscroll-x": j()
            }],
            "overscroll-y": [{
                "overscroll-y": j()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", vo, ne]
            }],
            basis: [{
                basis: _()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", ne]
            }],
            grow: [{
                grow: A()
            }],
            shrink: [{
                shrink: A()
            }],
            order: [{
                order: ["first", "last", "none", vo, ne]
            }],
            "grid-cols": [{
                "grid-cols": [bo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", vo, ne]
                }, ne]
            }],
            "col-start": [{
                "col-start": C()
            }],
            "col-end": [{
                "col-end": C()
            }],
            "grid-rows": [{
                "grid-rows": [bo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [vo, ne]
                }, ne]
            }],
            "row-start": [{
                "row-start": C()
            }],
            "row-end": [{
                "row-end": C()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", ne]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", ne]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal", ...N()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...N(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...N(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [R]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [R]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ne, t]
            }],
            "min-w": [{
                "min-w": [ne, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [ne, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [gr]
                }, gr]
            }],
            h: [{
                h: [ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [ne, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [ne, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", gr, pr]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fi]
            }],
            "font-family": [{
                font: [bo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ne]
            }],
            "line-clamp": [{
                "line-clamp": ["none", qr, Fi]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Kt, ne]
            }],
            "list-image": [{
                "list-image": ["none", ne]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", ne]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [y]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [y]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...I(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Kt, pr]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Kt, ne]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: O()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", ne]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [y]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...M(), yw]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", mw]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, bw]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [m]
            }],
            "gradient-via-pos": [{
                via: [m]
            }],
            "gradient-to-pos": [{
                to: [m]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [y]
            }],
            "border-style": [{
                border: [...I(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [y]
            }],
            "divide-style": [{
                divide: I()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...I()]
            }],
            "outline-offset": [{
                "outline-offset": [Kt, ne]
            }],
            "outline-w": [{
                outline: [Kt, pr]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: P()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [y]
            }],
            "ring-offset-w": [{
                "ring-offset": [Kt, pr]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", gr, xw]
            }],
            "shadow-color": [{
                shadow: [bo]
            }],
            opacity: [{
                opacity: [y]
            }],
            "mix-blend": [{
                "mix-blend": D()
            }],
            "bg-blend": [{
                "bg-blend": D()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [r]
            }],
            brightness: [{
                brightness: [n]
            }],
            contrast: [{
                contrast: [s]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", gr, ne]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [c]
            }],
            saturate: [{
                saturate: [b]
            }],
            sepia: [{
                sepia: [k]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [r]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [n]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [s]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [c]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [y]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [b]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ne]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", ne]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", ne]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [x]
            }],
            "scale-x": [{
                "scale-x": [x]
            }],
            "scale-y": [{
                "scale-y": [x]
            }],
            rotate: [{
                rotate: [vo, ne]
            }],
            "translate-x": [{
                "translate-x": [L]
            }],
            "translate-y": [{
                "translate-y": [L]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ne]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": O()
            }],
            "scroll-mx": [{
                "scroll-mx": O()
            }],
            "scroll-my": [{
                "scroll-my": O()
            }],
            "scroll-ms": [{
                "scroll-ms": O()
            }],
            "scroll-me": [{
                "scroll-me": O()
            }],
            "scroll-mt": [{
                "scroll-mt": O()
            }],
            "scroll-mr": [{
                "scroll-mr": O()
            }],
            "scroll-mb": [{
                "scroll-mb": O()
            }],
            "scroll-ml": [{
                "scroll-ml": O()
            }],
            "scroll-p": [{
                "scroll-p": O()
            }],
            "scroll-px": [{
                "scroll-px": O()
            }],
            "scroll-py": [{
                "scroll-py": O()
            }],
            "scroll-ps": [{
                "scroll-ps": O()
            }],
            "scroll-pe": [{
                "scroll-pe": O()
            }],
            "scroll-pt": [{
                "scroll-pt": O()
            }],
            "scroll-pr": [{
                "scroll-pr": O()
            }],
            "scroll-pb": [{
                "scroll-pb": O()
            }],
            "scroll-pl": [{
                "scroll-pl": O()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", ne]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Kt, pr, Fi]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const z = aw(Ew);

function Vr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object
}

function Zo(e) {
    if (!Vr(e)) return e;
    const t = {};
    for (const r in e) t[r] = Zo(e[r]);
    return t
}

function U(e, t) {
    if (Vr(t) && Object.keys(t).length === 0) return Zo({ ...e,
        ...t
    });
    const r = { ...e,
        ...t
    };
    if (Vr(t) && Vr(e))
        for (const n in t) Vr(t[n]) && n in e && Vr(e[n]) ? r[n] = U(e[n], t[n]) : r[n] = Vr(t[n]) ? Zo(t[n]) : t[n];
    return r
}
const Cw = {
        root: {
            base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
            flush: {
                off: "rounded-lg border",
                on: "border-b"
            }
        },
        content: {
            base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
        },
        title: {
            arrow: {
                base: "h-6 w-6 shrink-0",
                open: {
                    off: "",
                    on: "rotate-180"
                }
            },
            base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
            flush: {
                off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
                on: "bg-transparent dark:bg-transparent"
            },
            heading: "",
            open: {
                off: "",
                on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
            }
        }
    },
    Ow = {
        base: "flex flex-col gap-2 p-4 text-sm",
        borderAccent: "border-t-4",
        closeButton: {
            base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
            icon: "w-5 h-5",
            color: {
                info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
                failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
                green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
                yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
                blue: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
                pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
                lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
                dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
                indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
                purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
                teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
                light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
            }
        },
        color: {
            info: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
            gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
            failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
            success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
            warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
            red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
            green: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
            yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
            blue: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
            cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
            pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
            lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
            dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
            indigo: "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
            purple: "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
            teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
            light: "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200"
        },
        icon: "mr-3 inline h-5 w-5 flex-shrink-0",
        rounded: "rounded-lg",
        wrapper: "flex items-center"
    },
    Tw = {
        root: {
            base: "flex justify-center items-center space-x-4 rounded",
            bordered: "p-1 ring-2",
            rounded: "rounded-full",
            color: {
                dark: "ring-gray-800 dark:ring-gray-800",
                failure: "ring-red-500 dark:ring-red-700",
                gray: "ring-gray-500 dark:ring-gray-400",
                info: "ring-cyan-400 dark:ring-cyan-800",
                light: "ring-gray-300 dark:ring-gray-500",
                purple: "ring-purple-500 dark:ring-purple-600",
                success: "ring-green-500 dark:ring-green-500",
                warning: "ring-yellow-300 dark:ring-yellow-500",
                pink: "ring-pink-500 dark:ring-pink-500"
            },
            img: {
                base: "rounded",
                off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
                on: "",
                placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1"
            },
            size: {
                xs: "w-6 h-6",
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-20 h-20",
                xl: "w-36 h-36"
            },
            stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
            statusPosition: {
                "bottom-left": "-bottom-1 -left-1",
                "bottom-center": "-bottom-1 center",
                "bottom-right": "-bottom-1 -right-1",
                "top-left": "-top-1 -left-1",
                "top-center": "-top-1 center",
                "top-right": "-top-1 -right-1",
                "center-right": "center -right-1",
                center: "center center",
                "center-left": "center -left-1"
            },
            status: {
                away: "bg-yellow-400",
                base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
                busy: "bg-red-400",
                offline: "bg-gray-400",
                online: "bg-green-400"
            },
            initials: {
                text: "font-medium text-gray-600 dark:text-gray-300",
                base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600"
            }
        },
        group: {
            base: "flex -space-x-4"
        },
        groupCounter: {
            base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
        }
    },
    jw = {
        root: {
            base: "flex h-fit items-center gap-1 font-semibold",
            color: {
                info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
                failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
                indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
                purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
                pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
                blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
                dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
                light: "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
                green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
                lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
                red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
                teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
                yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
            },
            href: "group",
            size: {
                xs: "p-1 text-xs",
                sm: "p-1.5 text-sm"
            }
        },
        icon: {
            off: "rounded px-2 py-0.5",
            on: "rounded-full p-1.5",
            size: {
                xs: "w-3 h-3",
                sm: "w-3.5 h-3.5"
            }
        }
    },
    Pw = {
        root: {
            base: "text-xl italic font-semibold text-gray-900 dark:text-white"
        }
    },
    Nw = {
        root: {
            base: "",
            list: "flex items-center"
        },
        item: {
            base: "group flex items-center",
            chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
            href: {
                off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
                on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            },
            icon: "mr-2 h-4 w-4"
        }
    },
    _w = {
        base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
        fullSized: "w-full",
        color: {
            dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
            failure: "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
            gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
            info: "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
            light: "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
            purple: "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
            success: "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
            warning: "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
            blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
            cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
            green: "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
            indigo: "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
            lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
            pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
            red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
            teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
            yellow: "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"
        },
        disabled: "cursor-not-allowed opacity-50",
        isProcessing: "cursor-wait",
        spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
        spinnerLeftPosition: {
            xs: "left-2",
            sm: "left-3",
            md: "left-4",
            lg: "left-5",
            xl: "left-6"
        },
        gradient: {
            cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
            failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
            info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
            lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
            pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
            purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
            success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
            teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
        },
        gradientDuoTone: {
            cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
            greenToBlue: "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
            pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
            purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
            purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
            redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
            tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
        },
        inner: {
            base: "flex items-stretch items-center transition-all duration-200",
            position: {
                none: "",
                start: "rounded-r-none",
                middle: "rounded-none",
                end: "rounded-l-none"
            },
            outline: "border border-transparent",
            isProcessingPadding: {
                xs: "pl-8",
                sm: "pl-10",
                md: "pl-12",
                lg: "pl-16",
                xl: "pl-20"
            }
        },
        label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
        outline: {
            color: {
                gray: "border border-gray-900 dark:border-white",
                default: "border-0",
                light: ""
            },
            off: "",
            on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
            pill: {
                off: "rounded-md",
                on: "rounded-full"
            }
        },
        pill: {
            off: "rounded-lg",
            on: "rounded-full"
        },
        size: {
            xs: "text-xs px-2 py-1",
            sm: "text-sm px-3 py-1.5",
            md: "text-sm px-4 py-2",
            lg: "text-base px-5 py-2.5",
            xl: "text-base px-6 py-3"
        }
    },
    Mw = {
        base: "inline-flex",
        position: {
            none: "focus:ring-2",
            start: "rounded-r-none",
            middle: "rounded-none border-l-0 pl-0",
            end: "rounded-l-none border-l-0 pl-0"
        }
    },
    Rw = {
        root: {
            base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
            children: "flex h-full flex-col justify-center gap-4 p-6",
            horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row"
            },
            href: "hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        img: {
            base: "",
            horizontal: {
                off: "rounded-t-lg",
                on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    },
    Lw = {
        root: {
            base: "relative h-full w-full",
            leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
            rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
        },
        indicators: {
            active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800"
            },
            base: "h-3 w-3 rounded-full",
            wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
        },
        item: {
            base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
            wrapper: {
                off: "w-full flex-shrink-0 transform cursor-default snap-center",
                on: "w-full flex-shrink-0 transform cursor-grab snap-center"
            }
        },
        control: {
            base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
            icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
        },
        scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
            snap: "snap-x"
        }
    },
    zw = {
        root: {
            base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
            color: {
                default: "focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600",
                dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
                failure: "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
                gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                info: "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
                light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
                purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
                success: "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
                warning: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
                blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
                cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
                green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
                indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
                lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
                pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
                red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
                teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
                yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
            }
        }
    },
    Iw = {
        root: {
            base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
            icon: "h-5 w-5"
        }
    },
    Aw = {
        root: {
            base: "relative"
        },
        popup: {
            root: {
                base: "absolute top-10 z-50 block pt-2",
                inline: "relative top-0 z-auto",
                inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
            },
            header: {
                base: "",
                title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
                selectors: {
                    base: "flex justify-between mb-2",
                    button: {
                        base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                        prev: "",
                        next: "",
                        view: ""
                    }
                }
            },
            view: {
                base: "p-1"
            },
            footer: {
                base: "flex mt-2 space-x-2",
                button: {
                    base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                    today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
                    clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                }
            }
        },
        views: {
            days: {
                header: {
                    base: "grid grid-cols-7 mb-1",
                    title: "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
                },
                items: {
                    base: "grid w-64 grid-cols-7",
                    item: {
                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                        disabled: "text-gray-500"
                    }
                }
            },
            months: {
                items: {
                    base: "grid w-64 grid-cols-4",
                    item: {
                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                        disabled: "text-gray-500"
                    }
                }
            },
            years: {
                items: {
                    base: "grid w-64 grid-cols-4",
                    item: {
                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                        disabled: "text-gray-500"
                    }
                }
            },
            decades: {
                items: {
                    base: "grid w-64 grid-cols-4",
                    item: {
                        base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                        selected: "bg-cyan-700 text-white hover:bg-cyan-600",
                        disabled: "text-gray-500"
                    }
                }
            }
        }
    },
    Dw = {
        arrowIcon: "ml-2 h-4 w-4",
        content: "py-1 focus:outline-none",
        floating: {
            animation: "transition-opacity",
            arrow: {
                base: "absolute z-10 h-2 w-2 rotate-45",
                style: {
                    dark: "bg-gray-900 dark:bg-gray-700",
                    light: "bg-white",
                    auto: "bg-white dark:bg-gray-700"
                },
                placement: "-4px"
            },
            base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
            content: "py-1 text-sm text-gray-700 dark:text-gray-200",
            divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
            header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
            hidden: "invisible opacity-0",
            item: {
                container: "",
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
                icon: "mr-2 h-4 w-4"
            },
            style: {
                dark: "bg-gray-900 text-white dark:bg-gray-700",
                light: "border border-gray-200 bg-white text-gray-900",
                auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
            },
            target: "w-fit"
        },
        inlineWrapper: "flex items-center"
    },
    Fw = {
        root: {
            base: "flex"
        },
        field: {
            base: "relative w-full",
            input: {
                base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                    sm: "sm:text-xs",
                    md: "text-sm",
                    lg: "sm:text-md"
                },
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                }
            }
        }
    },
    Hw = {
        input: {
            default: {
                filled: {
                    sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
                    md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                },
                outlined: {
                    sm: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
                    md: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                },
                standard: {
                    sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                    md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                }
            },
            success: {
                filled: {
                    sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                    md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                },
                outlined: {
                    sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                    md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                },
                standard: {
                    sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
                    md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                }
            },
            error: {
                filled: {
                    sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
                    md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
                },
                outlined: {
                    sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                },
                standard: {
                    sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
                }
            }
        },
        label: {
            default: {
                filled: {
                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-gray-500  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                },
                outlined: {
                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                },
                standard: {
                    sm: "absolute text-xs text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    md: "absolute text-sm text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
            },
            success: {
                filled: {
                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
                },
                outlined: {
                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
                },
                standard: {
                    sm: "absolute text-xs text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    md: "absolute text-sm text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
            },
            error: {
                filled: {
                    sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
                    md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
                },
                outlined: {
                    sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
                    md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
                },
                standard: {
                    sm: "absolute text-xs text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    md: "absolute text-sm text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
            }
        },
        helperText: {
            default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
            success: "mt-2 text-xs text-green-600 dark:text-green-400",
            error: "mt-2 text-xs text-red-600 dark:text-red-400"
        }
    },
    $w = {
        root: {
            base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
            container: "w-full p-6",
            bgDark: "bg-gray-800"
        },
        groupLink: {
            base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
            link: {
                base: "last:mr-0 md:mr-6 me-4",
                href: "hover:underline"
            },
            col: "flex-col space-y-4"
        },
        icon: {
            base: "text-gray-500 dark:hover:text-white",
            size: "h-5 w-5"
        },
        title: {
            base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
        },
        divider: {
            base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        },
        copyright: {
            base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
            href: "ml-1 hover:underline",
            span: "ml-1"
        },
        brand: {
            base: "mb-4 flex items-center sm:mb-0",
            img: "mr-3 h-8",
            span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
        }
    },
    Bw = {
        root: {
            base: "mt-2 text-sm",
            colors: {
                gray: "text-gray-500 dark:text-gray-400",
                info: "text-cyan-700 dark:text-cyan-800",
                success: "text-green-600 dark:text-green-500",
                failure: "text-red-600 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600"
            }
        }
    },
    Ww = {
        root: {
            base: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
            icon: "inline-block"
        }
    },
    Uw = {
        root: {
            base: "text-sm font-medium",
            disabled: "opacity-50",
            colors: {
                default: "text-gray-900 dark:text-white",
                info: "text-cyan-500 dark:text-cyan-600",
                failure: "text-red-700 dark:text-red-500",
                warning: "text-yellow-500 dark:text-yellow-600",
                success: "text-green-700 dark:text-green-500"
            }
        }
    },
    Vw = {
        root: {
            base: "space-y-1 text-gray-500 list-inside dark:text-gray-400",
            ordered: {
                off: "list-disc",
                on: "list-decimal"
            },
            horizontal: "flex flex-wrap items-center space-x-4 space-y-0 justify-center list-none",
            unstyled: "list-none",
            nested: "ps-5 mt-2"
        }
    },
    Qw = {
        root: {
            base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left"
        },
        item: {
            base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
            link: {
                base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
                active: {
                    off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
                    on: "bg-cyan-700 text-white dark:bg-gray-800"
                },
                disabled: {
                    off: "",
                    on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed"
                },
                href: {
                    off: "",
                    on: ""
                },
                icon: "mr-2 h-4 w-4 fill-current"
            }
        }
    },
    Gw = {
        root: {
            base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
            show: {
                on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
                off: "hidden"
            },
            sizes: {
                sm: "max-w-sm",
                md: "max-w-md",
                lg: "max-w-lg",
                xl: "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl"
            },
            positions: {
                "top-left": "items-start justify-start",
                "top-center": "items-start justify-center",
                "top-right": "items-start justify-end",
                "center-left": "items-center justify-start",
                center: "items-center justify-center",
                "center-right": "items-center justify-end",
                "bottom-right": "items-end justify-end",
                "bottom-center": "items-end justify-center",
                "bottom-left": "items-end justify-start"
            }
        },
        content: {
            base: "relative h-full w-full p-4 md:h-auto",
            inner: "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
        },
        body: {
            base: "p-6 flex-1 overflow-auto",
            popup: "pt-0"
        },
        header: {
            base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
            popup: "p-2 border-b-0",
            title: "text-xl font-medium text-gray-900 dark:text-white",
            close: {
                base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
                icon: "h-5 w-5"
            }
        },
        footer: {
            base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
            popup: "border-t"
        }
    },
    Kw = {
        root: {
            base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
            rounded: {
                on: "rounded",
                off: ""
            },
            bordered: {
                on: "border",
                off: ""
            },
            inner: {
                base: "mx-auto flex flex-wrap items-center justify-between",
                fluid: {
                    on: "",
                    off: "container"
                }
            }
        },
        brand: {
            base: "flex items-center"
        },
        collapse: {
            base: "w-full md:block md:w-auto",
            list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
            hidden: {
                on: "hidden",
                off: ""
            }
        },
        link: {
            base: "block py-2 pr-4 pl-3 md:p-0",
            active: {
                on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
                off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            },
            disabled: {
                on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
                off: ""
            }
        },
        toggle: {
            base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
            icon: "h-6 w-6 shrink-0"
        }
    },
    Yw = {
        base: "",
        layout: {
            table: {
                base: "text-sm text-gray-700 dark:text-gray-400",
                span: "font-semibold text-gray-900 dark:text-white"
            }
        },
        pages: {
            base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
            showIcon: "inline-flex",
            previous: {
                base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                icon: "h-5 w-5"
            },
            next: {
                base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                icon: "h-5 w-5"
            },
            selector: {
                base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
                active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                disabled: "opacity-50 cursor-normal"
            }
        }
    },
    qw = {
        base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        label: "mb-1 flex justify-between font-medium dark:text-white",
        bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
        color: {
            dark: "bg-gray-600 dark:bg-gray-300",
            blue: "bg-blue-600",
            red: "bg-red-600 dark:bg-red-500",
            green: "bg-green-600 dark:bg-green-500",
            yellow: "bg-yellow-400",
            indigo: "bg-indigo-600 dark:bg-indigo-500",
            purple: "bg-purple-600 dark:bg-purple-500",
            cyan: "bg-cyan-600",
            gray: "bg-gray-500",
            lime: "bg-lime-600",
            pink: "bg-pink-500",
            teal: "bg-teal-600"
        },
        size: {
            sm: "h-1.5",
            md: "h-2.5",
            lg: "h-4",
            xl: "h-6"
        }
    },
    Xw = {
        root: {
            base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600"
        }
    },
    Zw = {
        root: {
            base: "flex"
        },
        field: {
            base: "relative w-full",
            input: {
                base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
                sizes: {
                    sm: "h-1 range-sm",
                    md: "h-2",
                    lg: "h-3 range-lg"
                }
            }
        }
    },
    Jw = {
        root: {
            base: "flex items-center"
        },
        star: {
            empty: "text-gray-300 dark:text-gray-500",
            filled: "text-yellow-400",
            sizes: {
                sm: "w-5 h-5",
                md: "w-7 h-7",
                lg: "w-10 h-10"
            }
        }
    },
    ek = {
        base: "flex items-center",
        label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
        progress: {
            base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
            fill: "h-5 rounded bg-yellow-400",
            label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
        }
    },
    tk = {
        base: "flex",
        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
        field: {
            base: "relative w-full",
            icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
            },
            select: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                withIcon: {
                    on: "pl-10",
                    off: ""
                },
                withAddon: {
                    on: "rounded-r-lg",
                    off: "rounded-lg"
                },
                withShadow: {
                    on: "shadow-sm dark:shadow-sm-light",
                    off: ""
                },
                sizes: {
                    sm: "p-2 sm:text-xs",
                    md: "p-2.5 text-sm",
                    lg: "sm:text-md p-4"
                },
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                }
            }
        }
    },
    rk = {
        root: {
            base: "h-full",
            collapsed: {
                on: "w-16",
                off: "w-64"
            },
            inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800"
        },
        collapse: {
            button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
            icon: {
                base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                open: {
                    off: "",
                    on: "text-gray-900"
                }
            },
            label: {
                base: "ml-3 flex-1 whitespace-nowrap text-left",
                icon: {
                    base: "h-6 w-6 transition ease-in-out delay-0",
                    open: {
                        on: "rotate-180",
                        off: ""
                    }
                }
            },
            list: "space-y-2 py-2"
        },
        cta: {
            base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
            color: {
                blue: "bg-cyan-50 dark:bg-cyan-900",
                dark: "bg-dark-50 dark:bg-dark-900",
                failure: "bg-red-50 dark:bg-red-900",
                gray: "bg-alternative-50 dark:bg-alternative-900",
                green: "bg-green-50 dark:bg-green-900",
                light: "bg-light-50 dark:bg-light-900",
                red: "bg-red-50 dark:bg-red-900",
                purple: "bg-purple-50 dark:bg-purple-900",
                success: "bg-green-50 dark:bg-green-900",
                yellow: "bg-yellow-50 dark:bg-yellow-900",
                warning: "bg-yellow-50 dark:bg-yellow-900"
            }
        },
        item: {
            base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
            active: "bg-gray-100 dark:bg-gray-700",
            collapsed: {
                insideCollapse: "group w-full pl-8 transition duration-75",
                noIcon: "font-bold"
            },
            content: {
                base: "px-3 flex-1 whitespace-nowrap"
            },
            icon: {
                base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
                active: "text-gray-700 dark:text-gray-100"
            },
            label: "",
            listItem: ""
        },
        items: {
            base: ""
        },
        itemGroup: {
            base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
        },
        logo: {
            base: "mb-5 flex items-center pl-2.5",
            collapsed: {
                on: "hidden",
                off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            },
            img: "mr-3 h-6 sm:h-7"
        }
    },
    nk = {
        base: "inline animate-spin text-gray-200",
        color: {
            failure: "fill-red-600",
            gray: "fill-gray-600",
            info: "fill-cyan-600",
            pink: "fill-pink-600",
            purple: "fill-purple-600",
            success: "fill-green-500",
            warning: "fill-yellow-400"
        },
        light: {
            off: {
                base: "dark:text-gray-600",
                color: {
                    failure: "",
                    gray: "dark:fill-gray-300",
                    info: "",
                    pink: "",
                    purple: "",
                    success: "",
                    warning: ""
                }
            },
            on: {
                base: "",
                color: {
                    failure: "",
                    gray: "",
                    info: "",
                    pink: "",
                    purple: "",
                    success: "",
                    warning: ""
                }
            }
        },
        size: {
            xs: "w-3 h-3",
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8",
            xl: "w-10 h-10"
        }
    },
    ok = {
        root: {
            base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
            shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
            wrapper: "relative"
        },
        body: {
            base: "group/body",
            cell: {
                base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
            }
        },
        head: {
            base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
            cell: {
                base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3"
            }
        },
        row: {
            base: "group/row",
            hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
            striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        }
    },
    ik = {
        base: "flex flex-col gap-2",
        tablist: {
            base: "flex text-center",
            styles: {
                default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
                underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
                pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
                fullWidth: "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
            },
            tabitem: {
                base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
                styles: {
                    default: {
                        base: "rounded-t-lg",
                        active: {
                            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
                        }
                    },
                    underline: {
                        base: "rounded-t-lg",
                        active: {
                            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                        }
                    },
                    pills: {
                        base: "",
                        active: {
                            on: "rounded-lg bg-cyan-600 text-white",
                            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                        }
                    },
                    fullWidth: {
                        base: "ml-0 first:ml-0 w-full rounded-none flex",
                        active: {
                            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
                            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
                        }
                    }
                },
                icon: "mr-2 h-5 w-5"
            }
        },
        tabitemcontainer: {
            base: "",
            styles: {
                default: "",
                underline: "",
                pills: "",
                fullWidth: ""
            }
        },
        tabpanel: "py-3"
    },
    ak = {
        base: "flex",
        addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
        field: {
            base: "relative w-full",
            icon: {
                base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
            },
            rightIcon: {
                base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
                svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
            },
            input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
                sizes: {
                    sm: "p-2 sm:text-xs",
                    md: "p-2.5 text-sm",
                    lg: "sm:text-md p-4"
                },
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
                    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
                    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
                    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
                },
                withRightIcon: {
                    on: "pr-10",
                    off: ""
                },
                withIcon: {
                    on: "pl-10",
                    off: ""
                },
                withAddon: {
                    on: "rounded-r-lg",
                    off: "rounded-lg"
                },
                withShadow: {
                    on: "shadow-sm dark:shadow-sm-light",
                    off: ""
                }
            }
        }
    },
    lk = {
        base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
            failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
            warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
            success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        withShadow: {
            on: "shadow-sm dark:shadow-sm-light",
            off: ""
        }
    },
    sk = {
        root: {
            direction: {
                horizontal: "items-base sm:flex",
                vertical: "relative border-l border-gray-200 dark:border-gray-700"
            }
        },
        item: {
            root: {
                horizontal: "relative mb-6 sm:mb-0",
                vertical: "mb-10 ml-6"
            },
            content: {
                root: {
                    base: "mt-3 sm:pr-8"
                },
                body: {
                    base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
                },
                time: {
                    base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                },
                title: {
                    base: "text-lg font-semibold text-gray-900 dark:text-white"
                }
            },
            point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
                marker: {
                    base: {
                        horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
                        vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
                    },
                    icon: {
                        base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
                        wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
                    }
                },
                vertical: ""
            }
        }
    },
    uk = {
        root: {
            base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
            closed: "opacity-0 ease-out"
        },
        toggle: {
            base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
            icon: "h-5 w-5 shrink-0"
        }
    },
    ck = {
        root: {
            base: "group relative flex items-center rounded-lg focus:outline-none",
            active: {
                on: "cursor-pointer",
                off: "cursor-not-allowed opacity-50"
            },
            label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        },
        toggle: {
            base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
            checked: {
                on: "after:translate-x-full after:border-white",
                off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
                color: {
                    blue: " bg-cyan-700 border-cyan-700",
                    dark: "bg-dark-700 border-dark-900",
                    failure: "bg-red-700 border-red-900",
                    gray: "bg-gray-500 border-gray-600",
                    green: "bg-green-600 border-green-700",
                    light: "bg-light-700 border-light-900",
                    red: "bg-red-700 border-red-900",
                    purple: "bg-purple-700 border-purple-900",
                    success: "bg-green-500 border-green-500",
                    yellow: "bg-yellow-400 border-yellow-400",
                    warning: "bg-yellow-600 border-yellow-600",
                    cyan: "bg-cyan-500 border-cyan-500",
                    lime: "bg-lime-400 border-lime-400",
                    indigo: "bg-indigo-400 border-indigo-400",
                    teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
                    info: "bg-cyan-600 border-cyan-600",
                    pink: "bg-pink-600 border-pink-600"
                }
            },
            sizes: {
                sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
                md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
                lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
            }
        }
    },
    dk = {
        target: "w-fit",
        animation: "transition-opacity",
        arrow: {
            base: "absolute z-10 h-2 w-2 rotate-45",
            style: {
                dark: "bg-gray-900 dark:bg-gray-700",
                light: "bg-white",
                auto: "bg-white dark:bg-gray-700"
            },
            placement: "-4px"
        },
        base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
        hidden: "invisible opacity-0",
        style: {
            dark: "bg-gray-900 text-white dark:bg-gray-700",
            light: "border border-gray-200 bg-white text-gray-900",
            auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
        },
        content: "relative z-20"
    },
    fk = {
        accordion: Cw,
        alert: Ow,
        avatar: Tw,
        badge: jw,
        blockquote: Pw,
        breadcrumb: Nw,
        button: _w,
        buttonGroup: Mw,
        card: Rw,
        carousel: Lw,
        checkbox: zw,
        datepicker: Aw,
        darkThemeToggle: Iw,
        dropdown: Dw,
        fileInput: Fw,
        floatingLabel: Hw,
        footer: $w,
        helperText: Bw,
        kbd: Ww,
        label: Uw,
        listGroup: Qw,
        list: Vw,
        modal: Gw,
        navbar: Kw,
        pagination: Yw,
        progress: qw,
        radio: Xw,
        rangeSlider: Zw,
        rating: Jw,
        ratingAdvanced: ek,
        select: tk,
        textInput: ak,
        textarea: lk,
        toggleSwitch: ck,
        sidebar: rk,
        spinner: nk,
        table: ok,
        tabs: ik,
        timeline: sk,
        toast: uk,
        tooltip: dk
    },
    pk = {
        theme: Zo(fk)
    };

function Z() {
    return Zo(pk.theme)
}
const _h = w.createContext(void 0);

function Mh() {
    const e = w.useContext(_h);
    if (!e) throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
    return e
}
const Rh = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            isOpen: o
        } = Mh(), i = U(Z().accordion.content, r);
        return g.jsx("div", {
            className: z(i.base, t),
            "data-testid": "flowbite-accordion-content",
            hidden: !o,
            ...n,
            children: e
        })
    },
    Lh = ({
        children: e,
        ...t
    }) => {
        const {
            alwaysOpen: r
        } = t, [n, o] = w.useState(t.isOpen), i = r ? { ...t,
            isOpen: n,
            setOpen: () => o(!n)
        } : t;
        return g.jsx(_h.Provider, {
            value: i,
            children: e
        })
    },
    zh = ({
        as: e = "h2",
        children: t,
        className: r,
        theme: n = {},
        ...o
    }) => {
        const {
            arrowIcon: i,
            flush: a,
            isOpen: l,
            setOpen: s
        } = Mh(), u = () => typeof s < "u" && s(), d = U(Z().accordion.title, n);
        return g.jsxs("button", {
            className: z(d.base, d.flush[a ? "on" : "off"], d.open[l ? "on" : "off"], r),
            onClick: u,
            type: "button",
            ...o,
            children: [g.jsx(e, {
                className: d.heading,
                "data-testid": "flowbite-accordion-heading",
                children: t
            }), i && g.jsx(i, {
                "aria-hidden": !0,
                className: z(d.arrow.base, d.arrow.open[l ? "on" : "off"]),
                "data-testid": "flowbite-accordion-arrow"
            })]
        })
    },
    Ih = ({
        alwaysOpen: e = !1,
        arrowIcon: t = Sh,
        children: r,
        flush: n = !1,
        collapseAll: o = !1,
        className: i,
        theme: a = {},
        ...l
    }) => {
        const [s, u] = w.useState(o ? -1 : 0), d = w.useMemo(() => w.Children.map(r, (f, h) => w.cloneElement(f, {
            alwaysOpen: e,
            arrowIcon: t,
            flush: n,
            isOpen: s === h,
            setOpen: () => u(s === h ? -1 : h)
        })), [e, t, r, n, s]), c = U(Z().accordion.root, a);
        return g.jsx("div", {
            className: z(c.base, c.flush[n ? "on" : "off"], i),
            "data-testid": "flowbite-accordion",
            ...l,
            children: d
        })
    };
Ih.displayName = "Accordion";
Lh.displayName = "Accordion.Panel";
zh.displayName = "Accordion.Title";
Rh.displayName = "Accordion.Content";
const Le = Object.assign(Ih, {
        Panel: Lh,
        Title: zh,
        Content: Rh
    }),
    Ah = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const o = U(Z().avatar.group, r);
        return g.jsx("div", {
            "data-testid": "avatar-group-element",
            className: z(o.base, t),
            ...n,
            children: e
        })
    };
Ah.displayName = "Avatar.Group";
const Dh = ({
    className: e,
    href: t,
    theme: r = {},
    total: n,
    ...o
}) => {
    const i = U(Z().avatar.groupCounter, r);
    return g.jsxs("a", {
        href: t,
        className: z(i.base, e),
        ...o,
        children: ["+", n]
    })
};
Dh.displayName = "Avatar.GroupCounter";
const Fh = ({
    alt: e = "",
    bordered: t = !1,
    children: r,
    className: n,
    color: o = "light",
    img: i,
    placeholderInitials: a = "",
    rounded: l = !1,
    size: s = "md",
    stacked: u = !1,
    status: d,
    statusPosition: c = "top-left",
    theme: f = {},
    ...h
}) => {
    const m = U(Z().avatar, f),
        v = z(m.root.img.base, t && m.root.bordered, t && m.root.color[o], l && m.root.rounded, u && m.root.stacked, m.root.img.on, m.root.size[s]),
        S = {
            className: z(v, m.root.img.on),
            "data-testid": "flowbite-avatar-img"
        };
    return g.jsxs("div", {
        className: z(m.root.base, n),
        "data-testid": "flowbite-avatar",
        ...h,
        children: [g.jsxs("div", {
            className: "relative",
            children: [i ? typeof i == "string" ? g.jsx("img", {
                alt: e,
                src: i,
                ...S
            }) : i({
                alt: e,
                ...S
            }) : a ? g.jsx("div", {
                className: z(m.root.img.off, m.root.initials.base, u && m.root.stacked, t && m.root.bordered, t && m.root.color[o], m.root.size[s], l && m.root.rounded),
                "data-testid": "flowbite-avatar-initials-placeholder",
                children: g.jsx("span", {
                    className: z(m.root.initials.text),
                    "data-testid": "flowbite-avatar-initials-placeholder-text",
                    children: a
                })
            }) : g.jsx("div", {
                className: z(v, m.root.img.off),
                "data-testid": "flowbite-avatar-img",
                children: g.jsx("svg", {
                    className: m.root.img.placeholder,
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: g.jsx("path", {
                        fillRule: "evenodd",
                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                        clipRule: "evenodd"
                    })
                })
            }), d && g.jsx("span", {
                "data-testid": "flowbite-avatar-status",
                className: z(m.root.status.base, m.root.status[d], m.root.statusPosition[c])
            })]
        }), r && g.jsx("div", {
            children: r
        })]
    })
};
Fh.displayName = "Avatar";
Object.assign(Fh, {
    Group: Ah,
    Counter: Dh
});
const Hh = ({
    children: e,
    color: t = "info",
    href: r,
    icon: n,
    size: o = "xs",
    className: i,
    theme: a = {},
    ...l
}) => {
    const s = U(Z().badge, a),
        u = () => g.jsxs("span", {
            className: z(s.root.base, s.root.color[t], s.root.size[o], s.icon[n ? "on" : "off"], i),
            "data-testid": "flowbite-badge",
            ...l,
            children: [n && g.jsx(n, {
                "aria-hidden": !0,
                className: s.icon.size[o],
                "data-testid": "flowbite-badge-icon"
            }), e && g.jsx("span", {
                children: e
            })]
        });
    return r ? g.jsx("a", {
        className: s.root.href,
        href: r,
        children: g.jsx(u, {})
    }) : g.jsx(u, {})
};
Hh.displayName = "Badge";
const $h = w.forwardRef,
    Bh = ({
        className: e,
        color: t = "info",
        light: r,
        size: n = "md",
        theme: o = {},
        ...i
    }) => {
        const a = U(Z().spinner, o);
        return g.jsx("span", {
            role: "status",
            ...i,
            children: g.jsxs("svg", {
                fill: "none",
                viewBox: "0 0 100 101",
                className: z(a.base, a.color[t], a.light[r ? "on" : "off"].base, a.light[r ? "on" : "off"].color[t], a.size[n], e),
                children: [g.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor"
                }), g.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill"
                })]
            })
        })
    };
Bh.displayName = "Spinner";
const gk = ({
        children: e,
        as: t,
        href: r,
        type: n = "button",
        ...o
    }, i) => {
        const a = t || (r ? "a" : "button");
        return w.createElement(a, {
            ref: i,
            href: r,
            type: n,
            ...o
        }, e)
    },
    Wh = $h(gk),
    Uh = ({
        children: e,
        className: t,
        outline: r,
        pill: n,
        theme: o = {},
        ...i
    }) => {
        const a = w.useMemo(() => w.Children.map(e, (s, u) => w.cloneElement(s, {
                outline: r,
                pill: n,
                positionInGroup: u === 0 ? "start" : u === e.length - 1 ? "end" : "middle"
            })), [e, r, n]),
            l = U(Z().buttonGroup, o);
        return g.jsx("div", {
            className: z(l.base, t),
            role: "group",
            ...i,
            children: a
        })
    };
Uh.displayName = "Button.Group";
const Vh = ({
    children: e,
    className: t,
    color: r = "info",
    disabled: n,
    fullSized: o,
    isProcessing: i = !1,
    processingLabel: a = "Loading...",
    processingSpinner: l,
    gradientDuoTone: s,
    gradientMonochrome: u,
    label: d,
    outline: c = !1,
    pill: f = !1,
    positionInGroup: h = "none",
    size: m = "md",
    theme: v = {},
    ...S
}, y) => {
    const {
        buttonGroup: p,
        button: b
    } = Z(), x = U(b, v), k = S;
    return g.jsx(Wh, {
        ref: y,
        disabled: n,
        className: z(x.base, n && x.disabled, !s && !u && x.color[r], s && !u && x.gradientDuoTone[s], !s && u && x.gradient[u], c && (x.outline.color[r] ? ? x.outline.color.default), x.pill[f ? "on" : "off"], o && x.fullSized, p.position[h], t),
        ...k,
        children: g.jsx("span", {
            className: z(x.inner.base, x.outline[c ? "on" : "off"], x.outline.pill[c && f ? "on" : "off"], x.size[m], c && !x.outline.color[r] && x.inner.outline, i && x.isProcessing, i && x.inner.isProcessingPadding[m], x.inner.position[h]),
            children: g.jsxs(g.Fragment, {
                children: [i && g.jsx("span", {
                    className: z(x.spinnerSlot, x.spinnerLeftPosition[m]),
                    children: l || g.jsx(Bh, {
                        size: m
                    })
                }), typeof e < "u" ? e : g.jsx("span", {
                    "data-testid": "flowbite-button-label",
                    className: z(x.label),
                    children: i ? a : d
                })]
            })
        })
    })
};
Vh.displayName = "Button";
const hk = $h(Vh),
    Qh = Object.assign(hk, {
        Group: Uh
    }),
    Gh = ({
        children: e,
        ...t
    }) => {
        const r = n => {
            const i = n.target.closest('[role="banner"]');
            i == null || i.remove()
        };
        return g.jsx(Qh, {
            onClick: r,
            ...t,
            children: e
        })
    };
Gh.displayName = "Banner.CollapseButton";
const Kh = ({
    children: e,
    ...t
}) => g.jsx("div", {
    "data-testid": "flowbite-banner",
    role: "banner",
    tabIndex: -1,
    ...t,
    children: e
});
Kh.displayName = "Banner";
Object.assign(Kh, {
    CollapseButton: Gh
});
const Yh = w.forwardRef(({
    children: e,
    className: t,
    href: r,
    icon: n,
    theme: o = {},
    ...i
}, a) => {
    const l = typeof r < "u",
        s = l ? "a" : "span",
        u = U(Z().breadcrumb.item, o);
    return g.jsxs("li", {
        className: z(u.base, t),
        ...i,
        children: [g.jsx(Ch, {
            "aria-hidden": !0,
            className: u.chevron,
            "data-testid": "flowbite-breadcrumb-separator"
        }), g.jsxs(s, {
            ref: a,
            className: u.href[l ? "on" : "off"],
            "data-testid": "flowbite-breadcrumb-item",
            href: r,
            children: [n && g.jsx(n, {
                "aria-hidden": !0,
                className: u.icon
            }), e]
        })]
    })
});
Yh.displayName = "Breadcrumb.Item";
const qh = ({
    children: e,
    className: t,
    theme: r = {},
    ...n
}) => {
    const o = U(Z().breadcrumb.root, r);
    return g.jsx("nav", {
        "aria-label": "Breadcrumb",
        className: z(o.base, t),
        ...n,
        children: g.jsx("ol", {
            className: o.list,
            children: e
        })
    })
};
qh.displayName = "Breadcrumb";
Object.assign(qh, {
    Item: Yh
});
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
***************************************************************************** */
var Xh = function(e, t) {
        return (Xh = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, n) {
                r.__proto__ = n
            } || function(r, n) {
                for (var o in n) n.hasOwnProperty(o) && (r[o] = n[o])
            })(e, t)
    },
    mk, Hi, yk = (function(e) {
        /*!
          Copyright (c) 2017 Jed Watson.
          Licensed under the MIT License (MIT), see
          http://jedwatson.github.io/classnames
        */
        (function() {
            var t = {}.hasOwnProperty;

            function r() {
                for (var n = [], o = 0; o < arguments.length; o++) {
                    var i = arguments[o];
                    if (i) {
                        var a = typeof i;
                        if (a === "string" || a === "number") n.push(i);
                        else if (Array.isArray(i) && i.length) {
                            var l = r.apply(null, i);
                            l && n.push(l)
                        } else if (a === "object")
                            for (var s in i) t.call(i, s) && i[s] && n.push(s)
                    }
                }
                return n.join(" ")
            }
            e.exports ? (r.default = r, e.exports = r) : window.classNames = r
        })()
    }(Hi = {
        path: mk,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(t == null && Hi.path)
        }
    }, Hi.exports), Hi.exports);

function _u(e, t, r) {
    var n, o, i, a, l;

    function s() {
        var d = Date.now() - a;
        d < t && d >= 0 ? n = setTimeout(s, t - d) : (n = null, r || (l = e.apply(i, o), i = o = null))
    }
    t == null && (t = 100);
    var u = function() {
        i = this, o = arguments, a = Date.now();
        var d = r && !n;
        return n || (n = setTimeout(s, t)), d && (l = e.apply(i, o), i = o = null), l
    };
    return u.clear = function() {
        n && (clearTimeout(n), n = null)
    }, u.flush = function() {
        n && (l = e.apply(i, o), i = o = null, clearTimeout(n), n = null)
    }, u
}
_u.debounce = _u;
var vk = _u;
(function(e, t) {
    t === void 0 && (t = {});
    var r = t.insertAt;
    if (e && typeof document < "u") {
        var n = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
    }
})(`.indiana-scroll-container {
  overflow: auto; }
  .indiana-scroll-container--dragging {
    scroll-behavior: auto !important; }
    .indiana-scroll-container--dragging > * {
      pointer-events: none;
      cursor: -webkit-grab;
      cursor: grab; }
  .indiana-scroll-container--hide-scrollbars {
    overflow: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; }
    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {
      display: none !important;
      height: 0 !important;
      width: 0 !important;
      background: transparent !important;
      -webkit-appearance: none !important; }
  .indiana-scroll-container--native-scroll {
    overflow: auto; }

.indiana-dragging {
  cursor: -webkit-grab;
  cursor: grab; }
`);
var fs, bk = (fs = "indiana-scroll-container", function(e, t) {
    if (!e) return fs;
    var r;
    typeof e == "string" ? r = e : t = e;
    var n = fs;
    return r && (n += "__" + r), n + (t ? Object.keys(t).reduce(function(o, i) {
        var a = t[i];
        return a && (o += " " + (typeof a == "boolean" ? n + "--" + i : n + "--" + i + "_" + a)), o
    }, "") : "")
});
(function(e) {
    function t(r) {
        var n = e.call(this, r) || this;
        return n.onEndScroll = function() {
            n.scrolling = !1, !n.pressed && n.started && n.processEnd()
        }, n.onScroll = function(o) {
            var i = n.container.current;
            i.scrollLeft === n.scrollLeft && i.scrollTop === n.scrollTop || (n.scrolling = !0, n.processScroll(o), n.onEndScroll())
        }, n.onTouchStart = function(o) {
            var i = n.props.nativeMobileScroll;
            if (n.isDraggable(o.target))
                if (n.internal = !0, i && n.scrolling) n.pressed = !0;
                else {
                    var a = o.touches[0];
                    n.processClick(o, a.clientX, a.clientY), !i && n.props.stopPropagation && o.stopPropagation()
                }
        }, n.onTouchEnd = function(o) {
            var i = n.props.nativeMobileScroll;
            n.pressed && (!n.started || n.scrolling && i ? n.pressed = !1 : n.processEnd(), n.forceUpdate())
        }, n.onTouchMove = function(o) {
            var i = n.props.nativeMobileScroll;
            if (n.pressed && (!i || !n.isMobile)) {
                var a = o.touches[0];
                a && n.processMove(o, a.clientX, a.clientY), o.preventDefault(), n.props.stopPropagation && o.stopPropagation()
            }
        }, n.onMouseDown = function(o) {
            n.isDraggable(o.target) && n.isScrollable() && (n.internal = !0, n.props.buttons.indexOf(o.button) !== -1 && (n.processClick(o, o.clientX, o.clientY), o.preventDefault(), n.props.stopPropagation && o.stopPropagation()))
        }, n.onMouseMove = function(o) {
            n.pressed && (n.processMove(o, o.clientX, o.clientY), o.preventDefault(), n.props.stopPropagation && o.stopPropagation())
        }, n.onMouseUp = function(o) {
            n.pressed && (n.started ? n.processEnd() : (n.internal = !1, n.pressed = !1, n.forceUpdate(), n.props.onClick && n.props.onClick(o)), o.preventDefault(), n.props.stopPropagation && o.stopPropagation())
        }, n.container = De.createRef(), n.onEndScroll = vk(n.onEndScroll, 300), n.scrolling = !1, n.started = !1, n.pressed = !1, n.internal = !1, n.getRef = n.getRef.bind(n), n
    }
    return function(r, n) {
        function o() {
            this.constructor = r
        }
        Xh(r, n), r.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o)
    }(t, e), t.prototype.componentDidMount = function() {
        var r = this.props.nativeMobileScroll,
            n = this.container.current;
        window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), window.addEventListener("touchend", this.onTouchEnd), n.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), n.addEventListener("mousedown", this.onMouseDown, {
            passive: !1
        }), r && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate())
    }, t.prototype.componentWillUnmount = function() {
        window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd)
    }, t.prototype.getElement = function() {
        return this.container.current
    }, t.prototype.isMobileDevice = function() {
        return window.orientation !== void 0 || navigator.userAgent.indexOf("IEMobile") !== -1
    }, t.prototype.isDraggable = function(r) {
        var n = this.props.ignoreElements;
        if (n) {
            var o = r.closest(n);
            return o === null || o.contains(this.getElement())
        }
        return !0
    }, t.prototype.isScrollable = function() {
        var r = this.container.current;
        return r && (r.scrollWidth > r.clientWidth || r.scrollHeight > r.clientHeight)
    }, t.prototype.processClick = function(r, n, o) {
        var i = this.container.current;
        this.scrollLeft = i.scrollLeft, this.scrollTop = i.scrollTop, this.clientX = n, this.clientY = o, this.pressed = !0
    }, t.prototype.processStart = function(r) {
        r === void 0 && (r = !0);
        var n = this.props.onStartScroll;
        this.started = !0, r && document.body.classList.add("indiana-dragging"), n && n({
            external: !this.internal
        }), this.forceUpdate()
    }, t.prototype.processScroll = function(r) {
        if (this.started) {
            var n = this.props.onScroll;
            n && n({
                external: !this.internal
            })
        } else this.processStart(!1)
    }, t.prototype.processMove = function(r, n, o) {
        var i = this.props,
            a = i.horizontal,
            l = i.vertical,
            s = i.activationDistance,
            u = i.onScroll,
            d = this.container.current;
        this.started ? (a && (d.scrollLeft -= n - this.clientX), l && (d.scrollTop -= o - this.clientY), u && u({
            external: !this.internal
        }), this.clientX = n, this.clientY = o, this.scrollLeft = d.scrollLeft, this.scrollTop = d.scrollTop) : (a && Math.abs(n - this.clientX) > s || l && Math.abs(o - this.clientY) > s) && (this.clientX = n, this.clientY = o, this.processStart())
    }, t.prototype.processEnd = function() {
        var r = this.props.onEndScroll;
        this.container.current && r && r({
            external: !this.internal
        }), this.pressed = !1, this.started = !1, this.scrolling = !1, this.internal = !1, document.body.classList.remove("indiana-dragging"), this.forceUpdate()
    }, t.prototype.getRef = function(r) {
        [this.container, this.props.innerRef].forEach(function(n) {
            n && (typeof n == "function" ? n(r) : n.current = r)
        })
    }, t.prototype.render = function() {
        var r = this.props,
            n = r.children,
            o = r.draggingClassName,
            i = r.className,
            a = r.style,
            l = r.hideScrollbars,
            s = r.component;
        return De.createElement(s, {
            className: yk(i, this.pressed && o, bk({
                dragging: this.pressed,
                "hide-scrollbars": l,
                "native-scroll": this.isMobile
            })),
            style: a,
            ref: this.getRef,
            onScroll: this.onScroll
        }, n)
    }, t.defaultProps = {
        nativeMobileScroll: !0,
        hideScrollbars: !0,
        activationDistance: 10,
        vertical: !0,
        horizontal: !0,
        stopPropagation: !1,
        style: {},
        component: "div",
        buttons: [0]
    }, t
})(w.PureComponent);
const xk = w.forwardRef(({
    className: e,
    color: t = "default",
    theme: r = {},
    ...n
}, o) => {
    const i = U(Z().checkbox, r);
    return g.jsx("input", {
        ref: o,
        type: "checkbox",
        className: z(i.root.base, i.root.color[t], e),
        ...n
    })
});
xk.displayName = "Checkbox";
const li = ({
    children: e,
    className: t,
    color: r = "default",
    theme: n = {},
    value: o,
    ...i
}) => {
    const a = U(Z().helperText, n);
    return g.jsx("p", {
        className: z(a.root.base, a.root.colors[r], t),
        ...i,
        children: o ? ? e ? ? ""
    })
};
li.displayName = "HelperText";
const wk = w.forwardRef(({
    addon: e,
    className: t,
    color: r = "gray",
    helperText: n,
    icon: o,
    rightIcon: i,
    shadow: a,
    sizing: l = "md",
    theme: s = {},
    ...u
}, d) => {
    const c = U(Z().textInput, s);
    return g.jsxs(g.Fragment, {
        children: [g.jsxs("div", {
            className: z(c.base, t),
            children: [e && g.jsx("span", {
                className: c.addon,
                children: e
            }), g.jsxs("div", {
                className: c.field.base,
                children: [o && g.jsx("div", {
                    className: c.field.icon.base,
                    children: g.jsx(o, {
                        className: c.field.icon.svg
                    })
                }), i && g.jsx("div", {
                    "data-testid": "right-icon",
                    className: c.field.rightIcon.base,
                    children: g.jsx(i, {
                        className: c.field.rightIcon.svg
                    })
                }), g.jsx("input", {
                    className: z(c.field.input.base, c.field.input.colors[r], c.field.input.sizes[l], c.field.input.withIcon[o ? "on" : "off"], c.field.input.withRightIcon[i ? "on" : "off"], c.field.input.withAddon[e ? "on" : "off"], c.field.input.withShadow[a ? "on" : "off"]),
                    ...u,
                    ref: d
                })]
            })]
        }), n && g.jsx(li, {
            color: r,
            children: n
        })]
    })
});
wk.displayName = "TextInput";
w.createContext(void 0);
var Df;
(function(e) {
    e[e.Days = 0] = "Days", e[e.Months = 1] = "Months", e[e.Years = 2] = "Years", e[e.Decades = 3] = "Decades"
})(Df || (Df = {}));
var Ff;
(function(e) {
    e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday"
})(Ff || (Ff = {}));

function ar(e) {
    return Zh(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function ct(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function ur(e) {
    var t;
    return (t = (Zh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Zh(e) {
    return e instanceof Node || e instanceof ct(e).Node
}

function me(e) {
    return e instanceof Element || e instanceof ct(e).Element
}

function Ve(e) {
    return e instanceof HTMLElement || e instanceof ct(e).HTMLElement
}

function Mu(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot
}

function si(e) {
    const {
        overflow: t,
        overflowX: r,
        overflowY: n,
        display: o
    } = ht(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
}

function kk(e) {
    return ["table", "td", "th"].includes(ar(e))
}

function Vc(e) {
    const t = Qc(),
        r = ht(e);
    return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(n => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (r.contain || "").includes(n))
}

function Sk(e) {
    let t = ln(e);
    for (; Ve(t) && !Qn(t);) {
        if (Vc(t)) return t;
        t = ln(t)
    }
    return null
}

function Qc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Qn(e) {
    return ["html", "body", "#document"].includes(ar(e))
}

function ht(e) {
    return ct(e).getComputedStyle(e)
}

function kl(e) {
    return me(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function ln(e) {
    if (ar(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Mu(e) && e.host || ur(e);
    return Mu(t) ? t.host : t
}

function Jh(e) {
    const t = ln(e);
    return Qn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ve(t) && si(t) ? t : Jh(t)
}

function Lr(e, t, r) {
    var n;
    t === void 0 && (t = []), r === void 0 && (r = !0);
    const o = Jh(e),
        i = o === ((n = e.ownerDocument) == null ? void 0 : n.body),
        a = ct(o);
    return i ? t.concat(a, a.visualViewport || [], si(o) ? o : [], a.frameElement && r ? Lr(a.frameElement) : []) : t.concat(o, Lr(o, [], r))
}

function $t(e) {
    let t = e.activeElement;
    for (;
        ((r = t) == null || (r = r.shadowRoot) == null ? void 0 : r.activeElement) != null;) {
        var r;
        t = t.shadowRoot.activeElement
    }
    return t
}

function _e(e, t) {
    if (!e || !t) return !1;
    const r = t.getRootNode == null ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && Mu(r)) {
        let n = t;
        for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
        }
    }
    return !1
}

function Gc() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function em() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: r,
            version: n
        } = t;
        return r + "/" + n
    }).join(" ") : navigator.userAgent
}

function tm(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : Ru() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function Kc(e) {
    return Ek() ? !1 : !Ru() && e.width === 0 && e.height === 0 || Ru() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch"
}

function Yc() {
    return /apple/i.test(navigator.vendor)
}

function Ru() {
    const e = /android/i;
    return e.test(Gc()) || e.test(em())
}

function rm() {
    return Gc().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
}

function Ek() {
    return em().includes("jsdom/")
}

function za(e, t) {
    const r = ["mouse", "pen"];
    return t || r.push("", void 0), r.includes(e)
}

function Ck(e) {
    return "nativeEvent" in e
}

function Ok(e) {
    return e.matches("html,body")
}

function et(e) {
    return (e == null ? void 0 : e.ownerDocument) || document
}

function ps(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const r = e;
    return r.target != null && t.contains(r.target)
}

function kr(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const Tk = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function qc(e) {
    return Ve(e) && e.matches(Tk)
}

function Be(e) {
    e.preventDefault(), e.stopPropagation()
}

function nm(e) {
    return e ? e.getAttribute("role") === "combobox" && qc(e) : !1
}
const jk = ["top", "right", "bottom", "left"],
    Hf = ["start", "end"],
    $f = jk.reduce((e, t) => e.concat(t, t + "-" + Hf[0], t + "-" + Hf[1]), []),
    Gn = Math.min,
    Jr = Math.max,
    Ia = Math.round,
    Pn = Math.floor,
    Ar = e => ({
        x: e,
        y: e
    }),
    Pk = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Nk = {
        start: "end",
        end: "start"
    };

function Lu(e, t, r) {
    return Jr(e, Gn(t, r))
}

function oo(e, t) {
    return typeof e == "function" ? e(t) : e
}

function lr(e) {
    return e.split("-")[0]
}

function Vt(e) {
    return e.split("-")[1]
}

function om(e) {
    return e === "x" ? "y" : "x"
}

function Xc(e) {
    return e === "y" ? "height" : "width"
}

function Sl(e) {
    return ["top", "bottom"].includes(lr(e)) ? "y" : "x"
}

function Zc(e) {
    return om(Sl(e))
}

function im(e, t, r) {
    r === void 0 && (r = !1);
    const n = Vt(e),
        o = Zc(e),
        i = Xc(o);
    let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (a = Da(a)), [a, Da(a)]
}

function _k(e) {
    const t = Da(e);
    return [Aa(e), t, Aa(t)]
}

function Aa(e) {
    return e.replace(/start|end/g, t => Nk[t])
}

function Mk(e, t, r) {
    const n = ["left", "right"],
        o = ["right", "left"],
        i = ["top", "bottom"],
        a = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return r ? t ? o : n : t ? n : o;
        case "left":
        case "right":
            return t ? i : a;
        default:
            return []
    }
}

function Rk(e, t, r, n) {
    const o = Vt(e);
    let i = Mk(lr(e), r === "start", n);
    return o && (i = i.map(a => a + "-" + o), t && (i = i.concat(i.map(Aa)))), i
}

function Da(e) {
    return e.replace(/left|right|bottom|top/g, t => Pk[t])
}

function Lk(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function am(e) {
    return typeof e != "number" ? Lk(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Fa(e) {
    return { ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}

function Bf(e, t, r) {
    let {
        reference: n,
        floating: o
    } = e;
    const i = Sl(t),
        a = Zc(t),
        l = Xc(a),
        s = lr(t),
        u = i === "y",
        d = n.x + n.width / 2 - o.width / 2,
        c = n.y + n.height / 2 - o.height / 2,
        f = n[l] / 2 - o[l] / 2;
    let h;
    switch (s) {
        case "top":
            h = {
                x: d,
                y: n.y - o.height
            };
            break;
        case "bottom":
            h = {
                x: d,
                y: n.y + n.height
            };
            break;
        case "right":
            h = {
                x: n.x + n.width,
                y: c
            };
            break;
        case "left":
            h = {
                x: n.x - o.width,
                y: c
            };
            break;
        default:
            h = {
                x: n.x,
                y: n.y
            }
    }
    switch (Vt(t)) {
        case "start":
            h[a] -= f * (r && u ? -1 : 1);
            break;
        case "end":
            h[a] += f * (r && u ? -1 : 1);
            break
    }
    return h
}
const zk = async (e, t, r) => {
    const {
        placement: n = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: a
    } = r, l = i.filter(Boolean), s = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: c
        } = Bf(u, n, s),
        f = n,
        h = {},
        m = 0;
    for (let v = 0; v < l.length; v++) {
        const {
            name: S,
            fn: y
        } = l[v], {
            x: p,
            y: b,
            data: x,
            reset: k
        } = await y({
            x: d,
            y: c,
            initialPlacement: n,
            placement: f,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = p ? ? d, c = b ? ? c, h = { ...h,
            [S]: { ...h[S],
                ...x
            }
        }, k && m <= 50 && (m++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (u = k.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : k.rects), {
            x: d,
            y: c
        } = Bf(u, f, s)), v = -1)
    }
    return {
        x: d,
        y: c,
        placement: f,
        strategy: o,
        middlewareData: h
    }
};
async function Jc(e, t) {
    var r;
    t === void 0 && (t = {});
    const {
        x: n,
        y: o,
        platform: i,
        rects: a,
        elements: l,
        strategy: s
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: c = "floating",
        altBoundary: f = !1,
        padding: h = 0
    } = oo(t, e), m = am(h), S = l[f ? c === "floating" ? "reference" : "floating" : c], y = Fa(await i.getClippingRect({
        element: (r = await (i.isElement == null ? void 0 : i.isElement(S))) == null || r ? S : S.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: s
    })), p = c === "floating" ? { ...a.floating,
        x: n,
        y: o
    } : a.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), x = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, k = Fa(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: b,
        strategy: s
    }) : p);
    return {
        top: (y.top - k.top + m.top) / x.y,
        bottom: (k.bottom - y.bottom + m.bottom) / x.y,
        left: (y.left - k.left + m.left) / x.x,
        right: (k.right - y.right + m.right) / x.x
    }
}
const Ik = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {
            x: r,
            y: n,
            placement: o,
            rects: i,
            platform: a,
            elements: l,
            middlewareData: s
        } = t, {
            element: u,
            padding: d = 0
        } = oo(e, t) || {};
        if (u == null) return {};
        const c = am(d),
            f = {
                x: r,
                y: n
            },
            h = Zc(o),
            m = Xc(h),
            v = await a.getDimensions(u),
            S = h === "y",
            y = S ? "top" : "left",
            p = S ? "bottom" : "right",
            b = S ? "clientHeight" : "clientWidth",
            x = i.reference[m] + i.reference[h] - f[h] - i.floating[m],
            k = f[h] - i.reference[h],
            E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
        let R = E ? E[b] : 0;
        (!R || !await (a.isElement == null ? void 0 : a.isElement(E))) && (R = l.floating[b] || i.floating[m]);
        const L = x / 2 - k / 2,
            j = R / 2 - v[m] / 2 - 1,
            T = Gn(c[y], j),
            _ = Gn(c[p], j),
            O = T,
            P = R - v[m] - _,
            C = R / 2 - v[m] / 2 + L,
            M = Lu(O, C, P),
            I = !s.arrow && Vt(o) != null && C !== M && i.reference[m] / 2 - (C < O ? T : _) - v[m] / 2 < 0,
            D = I ? C < O ? C - O : C - P : 0;
        return {
            [h]: f[h] + D,
            data: {
                [h]: M,
                centerOffset: C - M - D,
                ...I && {
                    alignmentOffset: D
                }
            },
            reset: I
        }
    }
});

function Ak(e, t, r) {
    return (e ? [...r.filter(o => Vt(o) === e), ...r.filter(o => Vt(o) !== e)] : r.filter(o => lr(o) === o)).filter(o => e ? Vt(o) === e || (t ? Aa(o) !== o : !1) : !0)
}
const Dk = function(e) {
        return e === void 0 && (e = {}), {
            name: "autoPlacement",
            options: e,
            async fn(t) {
                var r, n, o;
                const {
                    rects: i,
                    middlewareData: a,
                    placement: l,
                    platform: s,
                    elements: u
                } = t, {
                    crossAxis: d = !1,
                    alignment: c,
                    allowedPlacements: f = $f,
                    autoAlignment: h = !0,
                    ...m
                } = oo(e, t), v = c !== void 0 || f === $f ? Ak(c || null, h, f) : f, S = await Jc(t, m), y = ((r = a.autoPlacement) == null ? void 0 : r.index) || 0, p = v[y];
                if (p == null) return {};
                const b = im(p, i, await (s.isRTL == null ? void 0 : s.isRTL(u.floating)));
                if (l !== p) return {
                    reset: {
                        placement: v[0]
                    }
                };
                const x = [S[lr(p)], S[b[0]], S[b[1]]],
                    k = [...((n = a.autoPlacement) == null ? void 0 : n.overflows) || [], {
                        placement: p,
                        overflows: x
                    }],
                    E = v[y + 1];
                if (E) return {
                    data: {
                        index: y + 1,
                        overflows: k
                    },
                    reset: {
                        placement: E
                    }
                };
                const R = k.map(T => {
                        const _ = Vt(T.placement);
                        return [T.placement, _ && d ? T.overflows.slice(0, 2).reduce((O, P) => O + P, 0) : T.overflows[0], T.overflows]
                    }).sort((T, _) => T[1] - _[1]),
                    j = ((o = R.filter(T => T[2].slice(0, Vt(T[0]) ? 2 : 3).every(_ => _ <= 0))[0]) == null ? void 0 : o[0]) || R[0][0];
                return j !== l ? {
                    data: {
                        index: y + 1,
                        overflows: k
                    },
                    reset: {
                        placement: j
                    }
                } : {}
            }
        }
    },
    Fk = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var r, n;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: a,
                    initialPlacement: l,
                    platform: s,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: c = !0,
                    fallbackPlacements: f,
                    fallbackStrategy: h = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: v = !0,
                    ...S
                } = oo(e, t);
                if ((r = i.arrow) != null && r.alignmentOffset) return {};
                const y = lr(o),
                    p = lr(l) === l,
                    b = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
                    x = f || (p || !v ? [Da(l)] : _k(l));
                !f && m !== "none" && x.push(...Rk(l, v, m, b));
                const k = [l, ...x],
                    E = await Jc(t, S),
                    R = [];
                let L = ((n = i.flip) == null ? void 0 : n.overflows) || [];
                if (d && R.push(E[y]), c) {
                    const O = im(o, a, b);
                    R.push(E[O[0]], E[O[1]])
                }
                if (L = [...L, {
                        placement: o,
                        overflows: R
                    }], !R.every(O => O <= 0)) {
                    var j, T;
                    const O = (((j = i.flip) == null ? void 0 : j.index) || 0) + 1,
                        P = k[O];
                    if (P) return {
                        data: {
                            index: O,
                            overflows: L
                        },
                        reset: {
                            placement: P
                        }
                    };
                    let C = (T = L.filter(M => M.overflows[0] <= 0).sort((M, I) => M.overflows[1] - I.overflows[1])[0]) == null ? void 0 : T.placement;
                    if (!C) switch (h) {
                        case "bestFit":
                            {
                                var _;
                                const M = (_ = L.map(I => [I.placement, I.overflows.filter(D => D > 0).reduce((D, N) => D + N, 0)]).sort((I, D) => I[1] - D[1])[0]) == null ? void 0 : _[0];M && (C = M);
                                break
                            }
                        case "initialPlacement":
                            C = l;
                            break
                    }
                    if (o !== C) return {
                        reset: {
                            placement: C
                        }
                    }
                }
                return {}
            }
        }
    };
async function Hk(e, t) {
    const {
        placement: r,
        platform: n,
        elements: o
    } = e, i = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = lr(r), l = Vt(r), s = Sl(r) === "y", u = ["left", "top"].includes(a) ? -1 : 1, d = i && s ? -1 : 1, c = oo(t, e);
    let {
        mainAxis: f,
        crossAxis: h,
        alignmentAxis: m
    } = typeof c == "number" ? {
        mainAxis: c,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...c
    };
    return l && typeof m == "number" && (h = l === "end" ? m * -1 : m), s ? {
        x: h * d,
        y: f * u
    } : {
        x: f * u,
        y: h * d
    }
}
const $k = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var r, n;
                const {
                    x: o,
                    y: i,
                    placement: a,
                    middlewareData: l
                } = t, s = await Hk(t, e);
                return a === ((r = l.offset) == null ? void 0 : r.placement) && (n = l.arrow) != null && n.alignmentOffset ? {} : {
                    x: o + s.x,
                    y: i + s.y,
                    data: { ...s,
                        placement: a
                    }
                }
            }
        }
    },
    Bk = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: r,
                    y: n,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: a = !1,
                    limiter: l = {
                        fn: S => {
                            let {
                                x: y,
                                y: p
                            } = S;
                            return {
                                x: y,
                                y: p
                            }
                        }
                    },
                    ...s
                } = oo(e, t), u = {
                    x: r,
                    y: n
                }, d = await Jc(t, s), c = Sl(lr(o)), f = om(c);
                let h = u[f],
                    m = u[c];
                if (i) {
                    const S = f === "y" ? "top" : "left",
                        y = f === "y" ? "bottom" : "right",
                        p = h + d[S],
                        b = h - d[y];
                    h = Lu(p, h, b)
                }
                if (a) {
                    const S = c === "y" ? "top" : "left",
                        y = c === "y" ? "bottom" : "right",
                        p = m + d[S],
                        b = m - d[y];
                    m = Lu(p, m, b)
                }
                const v = l.fn({ ...t,
                    [f]: h,
                    [c]: m
                });
                return { ...v,
                    data: {
                        x: v.x - r,
                        y: v.y - n
                    }
                }
            }
        }
    };

function lm(e) {
    const t = ht(e);
    let r = parseFloat(t.width) || 0,
        n = parseFloat(t.height) || 0;
    const o = Ve(e),
        i = o ? e.offsetWidth : r,
        a = o ? e.offsetHeight : n,
        l = Ia(r) !== i || Ia(n) !== a;
    return l && (r = i, n = a), {
        width: r,
        height: n,
        $: l
    }
}

function ed(e) {
    return me(e) ? e : e.contextElement
}

function In(e) {
    const t = ed(e);
    if (!Ve(t)) return Ar(1);
    const r = t.getBoundingClientRect(),
        {
            width: n,
            height: o,
            $: i
        } = lm(t);
    let a = (i ? Ia(r.width) : r.width) / n,
        l = (i ? Ia(r.height) : r.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1), (!l || !Number.isFinite(l)) && (l = 1), {
        x: a,
        y: l
    }
}
const Wk = Ar(0);

function sm(e) {
    const t = ct(e);
    return !Qc() || !t.visualViewport ? Wk : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function Uk(e, t, r) {
    return t === void 0 && (t = !1), !r || t && r !== ct(e) ? !1 : t
}

function sn(e, t, r, n) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const o = e.getBoundingClientRect(),
        i = ed(e);
    let a = Ar(1);
    t && (n ? me(n) && (a = In(n)) : a = In(e));
    const l = Uk(i, r, n) ? sm(i) : Ar(0);
    let s = (o.left + l.x) / a.x,
        u = (o.top + l.y) / a.y,
        d = o.width / a.x,
        c = o.height / a.y;
    if (i) {
        const f = ct(i),
            h = n && me(n) ? ct(n) : n;
        let m = f,
            v = m.frameElement;
        for (; v && n && h !== m;) {
            const S = In(v),
                y = v.getBoundingClientRect(),
                p = ht(v),
                b = y.left + (v.clientLeft + parseFloat(p.paddingLeft)) * S.x,
                x = y.top + (v.clientTop + parseFloat(p.paddingTop)) * S.y;
            s *= S.x, u *= S.y, d *= S.x, c *= S.y, s += b, u += x, m = ct(v), v = m.frameElement
        }
    }
    return Fa({
        width: d,
        height: c,
        x: s,
        y: u
    })
}
const Vk = [":popover-open", ":modal"];

function um(e) {
    return Vk.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Qk(e) {
    let {
        elements: t,
        rect: r,
        offsetParent: n,
        strategy: o
    } = e;
    const i = o === "fixed",
        a = ur(n),
        l = t ? um(t.floating) : !1;
    if (n === a || l && i) return r;
    let s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = Ar(1);
    const d = Ar(0),
        c = Ve(n);
    if ((c || !c && !i) && ((ar(n) !== "body" || si(a)) && (s = kl(n)), Ve(n))) {
        const f = sn(n);
        u = In(n), d.x = f.x + n.clientLeft, d.y = f.y + n.clientTop
    }
    return {
        width: r.width * u.x,
        height: r.height * u.y,
        x: r.x * u.x - s.scrollLeft * u.x + d.x,
        y: r.y * u.y - s.scrollTop * u.y + d.y
    }
}

function Gk(e) {
    return Array.from(e.getClientRects())
}

function cm(e) {
    return sn(ur(e)).left + kl(e).scrollLeft
}

function Kk(e) {
    const t = ur(e),
        r = kl(e),
        n = e.ownerDocument.body,
        o = Jr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
        i = Jr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
    let a = -r.scrollLeft + cm(e);
    const l = -r.scrollTop;
    return ht(n).direction === "rtl" && (a += Jr(t.clientWidth, n.clientWidth) - o), {
        width: o,
        height: i,
        x: a,
        y: l
    }
}

function Yk(e, t) {
    const r = ct(e),
        n = ur(e),
        o = r.visualViewport;
    let i = n.clientWidth,
        a = n.clientHeight,
        l = 0,
        s = 0;
    if (o) {
        i = o.width, a = o.height;
        const u = Qc();
        (!u || u && t === "fixed") && (l = o.offsetLeft, s = o.offsetTop)
    }
    return {
        width: i,
        height: a,
        x: l,
        y: s
    }
}

function qk(e, t) {
    const r = sn(e, !0, t === "fixed"),
        n = r.top + e.clientTop,
        o = r.left + e.clientLeft,
        i = Ve(e) ? In(e) : Ar(1),
        a = e.clientWidth * i.x,
        l = e.clientHeight * i.y,
        s = o * i.x,
        u = n * i.y;
    return {
        width: a,
        height: l,
        x: s,
        y: u
    }
}

function Wf(e, t, r) {
    let n;
    if (t === "viewport") n = Yk(e, r);
    else if (t === "document") n = Kk(ur(e));
    else if (me(t)) n = qk(t, r);
    else {
        const o = sm(e);
        n = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return Fa(n)
}

function dm(e, t) {
    const r = ln(e);
    return r === t || !me(r) || Qn(r) ? !1 : ht(r).position === "fixed" || dm(r, t)
}

function Xk(e, t) {
    const r = t.get(e);
    if (r) return r;
    let n = Lr(e, [], !1).filter(l => me(l) && ar(l) !== "body"),
        o = null;
    const i = ht(e).position === "fixed";
    let a = i ? ln(e) : e;
    for (; me(a) && !Qn(a);) {
        const l = ht(a),
            s = Vc(a);
        !s && l.position === "fixed" && (o = null), (i ? !s && !o : !s && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || si(a) && !s && dm(e, a)) ? n = n.filter(d => d !== a) : o = l, a = ln(a)
    }
    return t.set(e, n), n
}

function Zk(e) {
    let {
        element: t,
        boundary: r,
        rootBoundary: n,
        strategy: o
    } = e;
    const a = [...r === "clippingAncestors" ? Xk(t, this._c) : [].concat(r), n],
        l = a[0],
        s = a.reduce((u, d) => {
            const c = Wf(t, d, o);
            return u.top = Jr(c.top, u.top), u.right = Gn(c.right, u.right), u.bottom = Gn(c.bottom, u.bottom), u.left = Jr(c.left, u.left), u
        }, Wf(t, l, o));
    return {
        width: s.right - s.left,
        height: s.bottom - s.top,
        x: s.left,
        y: s.top
    }
}

function Jk(e) {
    const {
        width: t,
        height: r
    } = lm(e);
    return {
        width: t,
        height: r
    }
}

function e2(e, t, r) {
    const n = Ve(t),
        o = ur(t),
        i = r === "fixed",
        a = sn(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const s = Ar(0);
    if (n || !n && !i)
        if ((ar(t) !== "body" || si(o)) && (l = kl(t)), n) {
            const c = sn(t, !0, i, t);
            s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop
        } else o && (s.x = cm(o));
    const u = a.left + l.scrollLeft - s.x,
        d = a.top + l.scrollTop - s.y;
    return {
        x: u,
        y: d,
        width: a.width,
        height: a.height
    }
}

function Uf(e, t) {
    return !Ve(e) || ht(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function fm(e, t) {
    const r = ct(e);
    if (!Ve(e) || um(e)) return r;
    let n = Uf(e, t);
    for (; n && kk(n) && ht(n).position === "static";) n = Uf(n, t);
    return n && (ar(n) === "html" || ar(n) === "body" && ht(n).position === "static" && !Vc(n)) ? r : n || Sk(e) || r
}
const t2 = async function(e) {
    const t = this.getOffsetParent || fm,
        r = this.getDimensions;
    return {
        reference: e2(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            ...await r(e.floating)
        }
    }
};

function r2(e) {
    return ht(e).direction === "rtl"
}
const n2 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Qk,
    getDocumentElement: ur,
    getClippingRect: Zk,
    getOffsetParent: fm,
    getElementRects: t2,
    getClientRects: Gk,
    getDimensions: Jk,
    getScale: In,
    isElement: me,
    isRTL: r2
};

function o2(e, t) {
    let r = null,
        n;
    const o = ur(e);

    function i() {
        var l;
        clearTimeout(n), (l = r) == null || l.disconnect(), r = null
    }

    function a(l, s) {
        l === void 0 && (l = !1), s === void 0 && (s = 1), i();
        const {
            left: u,
            top: d,
            width: c,
            height: f
        } = e.getBoundingClientRect();
        if (l || t(), !c || !f) return;
        const h = Pn(d),
            m = Pn(o.clientWidth - (u + c)),
            v = Pn(o.clientHeight - (d + f)),
            S = Pn(u),
            p = {
                rootMargin: -h + "px " + -m + "px " + -v + "px " + -S + "px",
                threshold: Jr(0, Gn(1, s)) || 1
            };
        let b = !0;

        function x(k) {
            const E = k[0].intersectionRatio;
            if (E !== s) {
                if (!b) return a();
                E ? a(!1, E) : n = setTimeout(() => {
                    a(!1, 1e-7)
                }, 100)
            }
            b = !1
        }
        try {
            r = new IntersectionObserver(x, { ...p,
                root: o.ownerDocument
            })
        } catch {
            r = new IntersectionObserver(x, p)
        }
        r.observe(e)
    }
    return a(!0), i
}

function pm(e, t, r, n) {
    n === void 0 && (n = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: l = typeof IntersectionObserver == "function",
        animationFrame: s = !1
    } = n, u = ed(e), d = o || i ? [...u ? Lr(u) : [], ...Lr(t)] : [];
    d.forEach(y => {
        o && y.addEventListener("scroll", r, {
            passive: !0
        }), i && y.addEventListener("resize", r)
    });
    const c = u && l ? o2(u, r) : null;
    let f = -1,
        h = null;
    a && (h = new ResizeObserver(y => {
        let [p] = y;
        p && p.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            var b;
            (b = h) == null || b.observe(t)
        })), r()
    }), u && !s && h.observe(u), h.observe(t));
    let m, v = s ? sn(e) : null;
    s && S();

    function S() {
        const y = sn(e);
        v && (y.x !== v.x || y.y !== v.y || y.width !== v.width || y.height !== v.height) && r(), v = y, m = requestAnimationFrame(S)
    }
    return r(), () => {
        var y;
        d.forEach(p => {
            o && p.removeEventListener("scroll", r), i && p.removeEventListener("resize", r)
        }), c == null || c(), (y = h) == null || y.disconnect(), h = null, s && cancelAnimationFrame(m)
    }
}
const i2 = Dk,
    a2 = Bk,
    l2 = Fk,
    Vf = Ik,
    s2 = (e, t, r) => {
        const n = new Map,
            o = {
                platform: n2,
                ...r
            },
            i = { ...o.platform,
                _c: n
            };
        return zk(e, t, { ...o,
            platform: i
        })
    },
    u2 = e => {
        function t(r) {
            return {}.hasOwnProperty.call(r, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(r) {
                const {
                    element: n,
                    padding: o
                } = typeof e == "function" ? e(r) : e;
                return n && t(n) ? n.current != null ? Vf({
                    element: n.current,
                    padding: o
                }).fn(r) : {} : n ? Vf({
                    element: n,
                    padding: o
                }).fn(r) : {}
            }
        }
    };
var sa = typeof document < "u" ? w.useLayoutEffect : w.useEffect;

function Ha(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let r, n, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (r = e.length, r !== t.length) return !1;
            for (n = r; n-- !== 0;)
                if (!Ha(e[n], t[n])) return !1;
            return !0
        }
        if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
        for (n = r; n-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[n])) return !1;
        for (n = r; n-- !== 0;) {
            const i = o[n];
            if (!(i === "_owner" && e.$$typeof) && !Ha(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function gm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Qf(e, t) {
    const r = gm(e);
    return Math.round(t * r) / r
}

function Gf(e) {
    const t = w.useRef(e);
    return sa(() => {
        t.current = e
    }), t
}

function c2(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: r = "absolute",
        middleware: n = [],
        platform: o,
        elements: {
            reference: i,
            floating: a
        } = {},
        transform: l = !0,
        whileElementsMounted: s,
        open: u
    } = e, [d, c] = w.useState({
        x: 0,
        y: 0,
        strategy: r,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [f, h] = w.useState(n);
    Ha(f, n) || h(n);
    const [m, v] = w.useState(null), [S, y] = w.useState(null), p = w.useCallback(D => {
        D !== E.current && (E.current = D, v(D))
    }, []), b = w.useCallback(D => {
        D !== R.current && (R.current = D, y(D))
    }, []), x = i || m, k = a || S, E = w.useRef(null), R = w.useRef(null), L = w.useRef(d), j = s != null, T = Gf(s), _ = Gf(o), O = w.useCallback(() => {
        if (!E.current || !R.current) return;
        const D = {
            placement: t,
            strategy: r,
            middleware: f
        };
        _.current && (D.platform = _.current), s2(E.current, R.current, D).then(N => {
            const A = { ...N,
                isPositioned: !0
            };
            P.current && !Ha(L.current, A) && (L.current = A, wl.flushSync(() => {
                c(A)
            }))
        })
    }, [f, t, r, _]);
    sa(() => {
        u === !1 && L.current.isPositioned && (L.current.isPositioned = !1, c(D => ({ ...D,
            isPositioned: !1
        })))
    }, [u]);
    const P = w.useRef(!1);
    sa(() => (P.current = !0, () => {
        P.current = !1
    }), []), sa(() => {
        if (x && (E.current = x), k && (R.current = k), x && k) {
            if (T.current) return T.current(x, k, O);
            O()
        }
    }, [x, k, O, T, j]);
    const C = w.useMemo(() => ({
            reference: E,
            floating: R,
            setReference: p,
            setFloating: b
        }), [p, b]),
        M = w.useMemo(() => ({
            reference: x,
            floating: k
        }), [x, k]),
        I = w.useMemo(() => {
            const D = {
                position: r,
                left: 0,
                top: 0
            };
            if (!M.floating) return D;
            const N = Qf(M.floating, d.x),
                A = Qf(M.floating, d.y);
            return l ? { ...D,
                transform: "translate(" + N + "px, " + A + "px)",
                ...gm(M.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: r,
                left: N,
                top: A
            }
        }, [r, l, M.floating, d.x, d.y]);
    return w.useMemo(() => ({ ...d,
        update: O,
        refs: C,
        elements: M,
        floatingStyles: I
    }), [d, O, C, M, I])
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var d2 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    zu = d2.join(","),
    hm = typeof Element > "u",
    Jo = hm ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    $a = !hm && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    Ba = function e(t, r) {
        var n;
        r === void 0 && (r = !0);
        var o = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"),
            i = o === "" || o === "true",
            a = i || r && t && e(t.parentNode);
        return a
    },
    f2 = function(t) {
        var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
        return n === "" || n === "true"
    },
    p2 = function(t, r, n) {
        if (Ba(t)) return [];
        var o = Array.prototype.slice.apply(t.querySelectorAll(zu));
        return r && Jo.call(t, zu) && o.unshift(t), o = o.filter(n), o
    },
    g2 = function e(t, r, n) {
        for (var o = [], i = Array.from(t); i.length;) {
            var a = i.shift();
            if (!Ba(a, !1))
                if (a.tagName === "SLOT") {
                    var l = a.assignedElements(),
                        s = l.length ? l : a.children,
                        u = e(s, !0, n);
                    n.flatten ? o.push.apply(o, u) : o.push({
                        scopeParent: a,
                        candidates: u
                    })
                } else {
                    var d = Jo.call(a, zu);
                    d && n.filter(a) && (r || !t.includes(a)) && o.push(a);
                    var c = a.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(a),
                        f = !Ba(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(a));
                    if (c && f) {
                        var h = e(c === !0 ? a.children : c.children, !0, n);
                        n.flatten ? o.push.apply(o, h) : o.push({
                            scopeParent: a,
                            candidates: h
                        })
                    } else i.unshift.apply(i, a.children)
                }
        }
        return o
    },
    mm = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    ym = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || f2(t)) && !mm(t) ? 0 : t.tabIndex
    },
    h2 = function(t, r) {
        var n = ym(t);
        return n < 0 && r && !mm(t) ? 0 : n
    },
    m2 = function(t, r) {
        return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex
    },
    vm = function(t) {
        return t.tagName === "INPUT"
    },
    y2 = function(t) {
        return vm(t) && t.type === "hidden"
    },
    v2 = function(t) {
        var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
            return n.tagName === "SUMMARY"
        });
        return r
    },
    b2 = function(t, r) {
        for (var n = 0; n < t.length; n++)
            if (t[n].checked && t[n].form === r) return t[n]
    },
    x2 = function(t) {
        if (!t.name) return !0;
        var r = t.form || $a(t),
            n = function(l) {
                return r.querySelectorAll('input[type="radio"][name="' + l + '"]')
            },
            o;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = n(window.CSS.escape(t.name));
        else try {
            o = n(t.name)
        } catch (a) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", a.message), !1
        }
        var i = b2(o, t.form);
        return !i || i === t
    },
    w2 = function(t) {
        return vm(t) && t.type === "radio"
    },
    k2 = function(t) {
        return w2(t) && !x2(t)
    },
    S2 = function(t) {
        var r, n = t && $a(t),
            o = (r = n) === null || r === void 0 ? void 0 : r.host,
            i = !1;
        if (n && n !== t) {
            var a, l, s;
            for (i = !!((a = o) !== null && a !== void 0 && (l = a.ownerDocument) !== null && l !== void 0 && l.contains(o) || t != null && (s = t.ownerDocument) !== null && s !== void 0 && s.contains(t)); !i && o;) {
                var u, d, c;
                n = $a(o), o = (u = n) === null || u === void 0 ? void 0 : u.host, i = !!((d = o) !== null && d !== void 0 && (c = d.ownerDocument) !== null && c !== void 0 && c.contains(o))
            }
        }
        return i
    },
    Kf = function(t) {
        var r = t.getBoundingClientRect(),
            n = r.width,
            o = r.height;
        return n === 0 && o === 0
    },
    E2 = function(t, r) {
        var n = r.displayCheck,
            o = r.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var i = Jo.call(t, "details>summary:first-of-type"),
            a = i ? t.parentElement : t;
        if (Jo.call(a, "details:not([open]) *")) return !0;
        if (!n || n === "full" || n === "legacy-full") {
            if (typeof o == "function") {
                for (var l = t; t;) {
                    var s = t.parentElement,
                        u = $a(t);
                    if (s && !s.shadowRoot && o(s) === !0) return Kf(t);
                    t.assignedSlot ? t = t.assignedSlot : !s && u !== t.ownerDocument ? t = u.host : t = s
                }
                t = l
            }
            if (S2(t)) return !t.getClientRects().length;
            if (n !== "legacy-full") return !0
        } else if (n === "non-zero-area") return Kf(t);
        return !1
    },
    C2 = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var r = t.parentElement; r;) {
                if (r.tagName === "FIELDSET" && r.disabled) {
                    for (var n = 0; n < r.children.length; n++) {
                        var o = r.children.item(n);
                        if (o.tagName === "LEGEND") return Jo.call(r, "fieldset[disabled] *") ? !0 : !o.contains(t)
                    }
                    return !0
                }
                r = r.parentElement
            }
        return !1
    },
    O2 = function(t, r) {
        return !(r.disabled || Ba(r) || y2(r) || E2(r, t) || v2(r) || C2(r))
    },
    Yf = function(t, r) {
        return !(k2(r) || ym(r) < 0 || !O2(t, r))
    },
    T2 = function(t) {
        var r = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(r) || r >= 0)
    },
    j2 = function e(t) {
        var r = [],
            n = [];
        return t.forEach(function(o, i) {
            var a = !!o.scopeParent,
                l = a ? o.scopeParent : o,
                s = h2(l, a),
                u = a ? e(o.candidates) : l;
            s === 0 ? a ? r.push.apply(r, u) : r.push(l) : n.push({
                documentOrder: i,
                tabIndex: s,
                item: o,
                isScope: a,
                content: u
            })
        }), n.sort(m2).reduce(function(o, i) {
            return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o
        }, []).concat(r)
    },
    td = function(t, r) {
        r = r || {};
        var n;
        return r.getShadowRoot ? n = g2([t], r.includeContainer, {
            filter: Yf.bind(null, r),
            flatten: !1,
            getShadowRoot: r.getShadowRoot,
            shadowRootFilter: T2
        }) : n = p2(t, r.includeContainer, Yf.bind(null, r)), j2(n)
    };

function P2(e) {
    return w.useMemo(() => e.every(t => t == null) ? null : t => {
        e.forEach(r => {
            typeof r == "function" ? r(t) : r != null && (r.current = t)
        })
    }, e)
}
const N2 = p0.useInsertionEffect,
    _2 = N2 || (e => e());

function Bt(e) {
    const t = w.useRef(() => {});
    return _2(() => {
        t.current = e
    }), w.useCallback(function() {
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...n)
    }, [])
}
const rd = "ArrowUp",
    ui = "ArrowDown",
    Kn = "ArrowLeft",
    io = "ArrowRight";

function $i(e, t, r) {
    return Math.floor(e / t) !== r
}

function Ro(e, t) {
    return t < 0 || t >= e.current.length
}

function gs(e, t) {
    return Ke(e, {
        disabledIndices: t
    })
}

function qf(e, t) {
    return Ke(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Ke(e, t) {
    let {
        startingIndex: r = -1,
        decrement: n = !1,
        disabledIndices: o,
        amount: i = 1
    } = t === void 0 ? {} : t;
    const a = e.current,
        l = o ? u => o.includes(u) : u => {
            const d = a[u];
            return d == null || d.hasAttribute("disabled") || d.getAttribute("aria-disabled") === "true"
        };
    let s = r;
    do s += n ? -i : i; while (s >= 0 && s <= a.length - 1 && l(s));
    return s
}

function M2(e, t) {
    let {
        event: r,
        orientation: n,
        loop: o,
        cols: i,
        disabledIndices: a,
        minIndex: l,
        maxIndex: s,
        prevIndex: u,
        stopEvent: d = !1
    } = t, c = u;
    if (r.key === rd) {
        if (d && Be(r), u === -1) c = s;
        else if (c = Ke(e, {
                startingIndex: c,
                amount: i,
                decrement: !0,
                disabledIndices: a
            }), o && (u - i < l || c < 0)) {
            const f = u % i,
                h = s % i,
                m = s - (h - f);
            h === f ? c = s : c = h > f ? m : m - i
        }
        Ro(e, c) && (c = u)
    }
    if (r.key === ui && (d && Be(r), u === -1 ? c = l : (c = Ke(e, {
            startingIndex: u,
            amount: i,
            disabledIndices: a
        }), o && u + i > s && (c = Ke(e, {
            startingIndex: u % i - i,
            amount: i,
            disabledIndices: a
        }))), Ro(e, c) && (c = u)), n === "both") {
        const f = Pn(u / i);
        r.key === io && (d && Be(r), u % i !== i - 1 ? (c = Ke(e, {
            startingIndex: u,
            disabledIndices: a
        }), o && $i(c, i, f) && (c = Ke(e, {
            startingIndex: u - u % i - 1,
            disabledIndices: a
        }))) : o && (c = Ke(e, {
            startingIndex: u - u % i - 1,
            disabledIndices: a
        })), $i(c, i, f) && (c = u)), r.key === Kn && (d && Be(r), u % i !== 0 ? (c = Ke(e, {
            startingIndex: u,
            disabledIndices: a,
            decrement: !0
        }), o && $i(c, i, f) && (c = Ke(e, {
            startingIndex: u + (i - u % i),
            decrement: !0,
            disabledIndices: a
        }))) : o && (c = Ke(e, {
            startingIndex: u + (i - u % i),
            decrement: !0,
            disabledIndices: a
        })), $i(c, i, f) && (c = u));
        const h = Pn(s / i) === f;
        Ro(e, c) && (o && h ? c = r.key === Kn ? s : Ke(e, {
            startingIndex: u - u % i - 1,
            disabledIndices: a
        }) : c = u)
    }
    return c
}

function R2(e, t, r) {
    const n = [];
    let o = 0;
    return e.forEach((i, a) => {
        let {
            width: l,
            height: s
        } = i, u = !1;
        for (r && (o = 0); !u;) {
            const d = [];
            for (let c = 0; c < l; c++)
                for (let f = 0; f < s; f++) d.push(o + c + f * t);
            o % t + l <= t && d.every(c => n[c] == null) ? (d.forEach(c => {
                n[c] = a
            }), u = !0) : o++
        }
    }), [...n]
}

function L2(e, t, r, n, o) {
    if (e === -1) return -1;
    const i = r.indexOf(e);
    switch (o) {
        case "tl":
            return i;
        case "tr":
            return i + t[e].width - 1;
        case "bl":
            return i + (t[e].height - 1) * n;
        case "br":
            return r.lastIndexOf(e)
    }
}

function z2(e, t) {
    return t.flatMap((r, n) => e.includes(r) ? [n] : [])
}
let Xf = 0;

function qt(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: r = !1,
        cancelPrevious: n = !0,
        sync: o = !1
    } = t;
    n && cancelAnimationFrame(Xf);
    const i = () => e == null ? void 0 : e.focus({
        preventScroll: r
    });
    o ? i() : Xf = requestAnimationFrame(i)
}
var fe = typeof document < "u" ? w.useLayoutEffect : w.useEffect;

function I2(e, t) {
    const r = e.compareDocumentPosition(t);
    return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
}

function A2(e, t) {
    if (e.size !== t.size) return !1;
    for (const [r, n] of e.entries())
        if (n !== t.get(r)) return !1;
    return !0
}
const bm = w.createContext({
    register: () => {},
    unregister: () => {},
    map: new Map,
    elementsRef: {
        current: []
    }
});

function D2(e) {
    let {
        children: t,
        elementsRef: r,
        labelsRef: n
    } = e;
    const [o, i] = w.useState(() => new Map), a = w.useCallback(s => {
        i(u => new Map(u).set(s, null))
    }, []), l = w.useCallback(s => {
        i(u => {
            const d = new Map(u);
            return d.delete(s), d
        })
    }, []);
    return fe(() => {
        const s = new Map(o);
        Array.from(s.keys()).sort(I2).forEach((d, c) => {
            s.set(d, c)
        }), A2(o, s) || i(s)
    }, [o]), w.createElement(bm.Provider, {
        value: w.useMemo(() => ({
            register: a,
            unregister: l,
            map: o,
            elementsRef: r,
            labelsRef: n
        }), [a, l, o, r, n])
    }, t)
}

function F2(e) {
    let {
        label: t
    } = e === void 0 ? {} : e;
    const [r, n] = w.useState(null), o = w.useRef(null), {
        register: i,
        unregister: a,
        map: l,
        elementsRef: s,
        labelsRef: u
    } = w.useContext(bm), d = w.useCallback(c => {
        if (o.current = c, r !== null && (s.current[r] = c, u)) {
            var f;
            const h = t !== void 0;
            u.current[r] = h ? t : (f = c == null ? void 0 : c.textContent) != null ? f : null
        }
    }, [r, s, u, t]);
    return fe(() => {
        const c = o.current;
        if (c) return i(c), () => {
            a(c)
        }
    }, [i, a]), fe(() => {
        const c = o.current ? l.get(o.current) : null;
        c != null && n(c)
    }, [l]), w.useMemo(() => ({
        ref: d,
        index: r ? ? -1
    }), [r, d])
}

function ei() {
    return ei = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, ei.apply(this, arguments)
}
let hs = !1,
    H2 = 0;
const Zf = () => "floating-ui-" + H2++;

function $2() {
    const [e, t] = w.useState(() => hs ? Zf() : void 0);
    return fe(() => {
        e == null && t(Zf())
    }, []), w.useEffect(() => {
        hs || (hs = !0)
    }, []), e
}
const B2 = p0.useId,
    El = B2 || $2;

function W2() {
    const e = new Map;
    return {
        emit(t, r) {
            var n;
            (n = e.get(t)) == null || n.forEach(o => o(r))
        },
        on(t, r) {
            e.set(t, [...e.get(t) || [], r])
        },
        off(t, r) {
            var n;
            e.set(t, ((n = e.get(t)) == null ? void 0 : n.filter(o => o !== r)) || [])
        }
    }
}
const U2 = w.createContext(null),
    V2 = w.createContext(null),
    Cl = () => {
        var e;
        return ((e = w.useContext(U2)) == null ? void 0 : e.id) || null
    },
    ci = () => w.useContext(V2);

function un(e) {
    return "data-floating-ui-" + e
}

function Qt(e) {
    const t = w.useRef(e);
    return fe(() => {
        t.current = e
    }), t
}
const Jf = un("safe-polygon");

function ms(e, t, r) {
    return r && !za(r) ? 0 : typeof e == "number" ? e : e == null ? void 0 : e[t]
}

function Q2(e, t) {
    t === void 0 && (t = {});
    const {
        open: r,
        onOpenChange: n,
        dataRef: o,
        events: i,
        elements: {
            domReference: a,
            floating: l
        },
        refs: s
    } = e, {
        enabled: u = !0,
        delay: d = 0,
        handleClose: c = null,
        mouseOnly: f = !1,
        restMs: h = 0,
        move: m = !0
    } = t, v = ci(), S = Cl(), y = Qt(c), p = Qt(d), b = w.useRef(), x = w.useRef(), k = w.useRef(), E = w.useRef(), R = w.useRef(!0), L = w.useRef(!1), j = w.useRef(() => {}), T = w.useCallback(() => {
        var C;
        const M = (C = o.current.openEvent) == null ? void 0 : C.type;
        return (M == null ? void 0 : M.includes("mouse")) && M !== "mousedown"
    }, [o]);
    w.useEffect(() => {
        if (!u) return;

        function C(M) {
            let {
                open: I
            } = M;
            I || (clearTimeout(x.current), clearTimeout(E.current), R.current = !0)
        }
        return i.on("openchange", C), () => {
            i.off("openchange", C)
        }
    }, [u, i]), w.useEffect(() => {
        if (!u || !y.current || !r) return;

        function C(I) {
            T() && n(!1, I, "hover")
        }
        const M = et(l).documentElement;
        return M.addEventListener("mouseleave", C), () => {
            M.removeEventListener("mouseleave", C)
        }
    }, [l, r, n, u, y, T]);
    const _ = w.useCallback(function(C, M, I) {
            M === void 0 && (M = !0), I === void 0 && (I = "hover");
            const D = ms(p.current, "close", b.current);
            D && !k.current ? (clearTimeout(x.current), x.current = setTimeout(() => n(!1, C, I), D)) : M && (clearTimeout(x.current), n(!1, C, I))
        }, [p, n]),
        O = w.useCallback(() => {
            j.current(), k.current = void 0
        }, []),
        P = w.useCallback(() => {
            if (L.current) {
                const C = et(s.floating.current).body;
                C.style.pointerEvents = "", C.removeAttribute(Jf), L.current = !1
            }
        }, [s]);
    return w.useEffect(() => {
        if (!u) return;

        function C() {
            return o.current.openEvent ? ["click", "mousedown"].includes(o.current.openEvent.type) : !1
        }

        function M(N) {
            if (clearTimeout(x.current), R.current = !1, f && !za(b.current) || h > 0 && ms(p.current, "open") === 0) return;
            const A = ms(p.current, "open", b.current);
            A ? x.current = setTimeout(() => {
                n(!0, N, "hover")
            }, A) : n(!0, N, "hover")
        }

        function I(N) {
            if (C()) return;
            j.current();
            const A = et(l);
            if (clearTimeout(E.current), y.current) {
                r || clearTimeout(x.current), k.current = y.current({ ...e,
                    tree: v,
                    x: N.clientX,
                    y: N.clientY,
                    onClose() {
                        P(), O(), _(N, !0, "safe-polygon")
                    }
                });
                const $ = k.current;
                A.addEventListener("mousemove", $), j.current = () => {
                    A.removeEventListener("mousemove", $)
                };
                return
            }(b.current === "touch" ? !_e(l, N.relatedTarget) : !0) && _(N)
        }

        function D(N) {
            C() || y.current == null || y.current({ ...e,
                tree: v,
                x: N.clientX,
                y: N.clientY,
                onClose() {
                    P(), O(), _(N)
                }
            })(N)
        }
        if (me(a)) {
            const N = a;
            return r && N.addEventListener("mouseleave", D), l == null || l.addEventListener("mouseleave", D), m && N.addEventListener("mousemove", M, {
                once: !0
            }), N.addEventListener("mouseenter", M), N.addEventListener("mouseleave", I), () => {
                r && N.removeEventListener("mouseleave", D), l == null || l.removeEventListener("mouseleave", D), m && N.removeEventListener("mousemove", M), N.removeEventListener("mouseenter", M), N.removeEventListener("mouseleave", I)
            }
        }
    }, [a, l, u, e, f, h, m, _, O, P, n, r, v, p, y, o]), fe(() => {
        var C;
        if (u && r && (C = y.current) != null && C.__options.blockPointerEvents && T()) {
            const I = et(l).body;
            if (I.setAttribute(Jf, ""), I.style.pointerEvents = "none", L.current = !0, me(a) && l) {
                var M;
                const D = a,
                    N = v == null || (M = v.nodesRef.current.find(A => A.id === S)) == null || (M = M.context) == null ? void 0 : M.elements.floating;
                return N && (N.style.pointerEvents = ""), D.style.pointerEvents = "auto", l.style.pointerEvents = "auto", () => {
                    D.style.pointerEvents = "", l.style.pointerEvents = ""
                }
            }
        }
    }, [u, r, S, l, a, v, y, T]), fe(() => {
        r || (b.current = void 0, O(), P())
    }, [r, O, P]), w.useEffect(() => () => {
        O(), clearTimeout(x.current), clearTimeout(E.current), P()
    }, [u, a, O, P]), w.useMemo(() => {
        if (!u) return {};

        function C(M) {
            b.current = M.pointerType
        }
        return {
            reference: {
                onPointerDown: C,
                onPointerEnter: C,
                onMouseMove(M) {
                    r || h === 0 || (clearTimeout(E.current), E.current = setTimeout(() => {
                        R.current || n(!0, M.nativeEvent, "hover")
                    }, h))
                }
            },
            floating: {
                onMouseEnter() {
                    clearTimeout(x.current)
                },
                onMouseLeave(M) {
                    _(M.nativeEvent, !1)
                }
            }
        }
    }, [u, h, r, n, _])
}

function G2(e, t) {
    var r;
    let n = [],
        o = (r = e.find(i => i.id === t)) == null ? void 0 : r.parentId;
    for (; o;) {
        const i = e.find(a => a.id === o);
        o = i == null ? void 0 : i.parentId, i && (n = n.concat(i))
    }
    return n
}

function en(e, t) {
    let r = e.filter(o => {
            var i;
            return o.parentId === t && ((i = o.context) == null ? void 0 : i.open)
        }),
        n = r;
    for (; n.length;) n = e.filter(o => {
        var i;
        return (i = n) == null ? void 0 : i.some(a => {
            var l;
            return o.parentId === a.id && ((l = o.context) == null ? void 0 : l.open)
        })
    }), r = r.concat(n);
    return r
}

function K2(e, t) {
    let r, n = -1;

    function o(i, a) {
        a > n && (r = i, n = a), en(e, i).forEach(s => {
            o(s.id, a + 1)
        })
    }
    return o(t, 0), e.find(i => i.id === r)
}
let mn = new WeakMap,
    Bi = new WeakSet,
    Wi = {},
    ys = 0;
const Y2 = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
    xm = e => e && (e.host || xm(e.parentNode)),
    q2 = (e, t) => t.map(r => {
        if (e.contains(r)) return r;
        const n = xm(r);
        return e.contains(n) ? n : null
    }).filter(r => r != null);

function X2(e, t, r, n) {
    const o = "data-floating-ui-inert",
        i = n ? "inert" : r ? "aria-hidden" : null,
        a = q2(t, e),
        l = new Set,
        s = new Set(a),
        u = [];
    Wi[o] || (Wi[o] = new WeakMap);
    const d = Wi[o];
    a.forEach(c), f(t), l.clear();

    function c(h) {
        !h || l.has(h) || (l.add(h), h.parentNode && c(h.parentNode))
    }

    function f(h) {
        !h || s.has(h) || Array.prototype.forEach.call(h.children, m => {
            if (l.has(m)) f(m);
            else {
                const v = i ? m.getAttribute(i) : null,
                    S = v !== null && v !== "false",
                    y = (mn.get(m) || 0) + 1,
                    p = (d.get(m) || 0) + 1;
                mn.set(m, y), d.set(m, p), u.push(m), y === 1 && S && Bi.add(m), p === 1 && m.setAttribute(o, ""), !S && i && m.setAttribute(i, "true")
            }
        })
    }
    return ys++, () => {
        u.forEach(h => {
            const m = (mn.get(h) || 0) - 1,
                v = (d.get(h) || 0) - 1;
            mn.set(h, m), d.set(h, v), m || (!Bi.has(h) && i && h.removeAttribute(i), Bi.delete(h)), v || h.removeAttribute(o)
        }), ys--, ys || (mn = new WeakMap, mn = new WeakMap, Bi = new WeakSet, Wi = {})
    }
}

function ep(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    const n = et(e[0]).body;
    return X2(e.concat(Array.from(n.querySelectorAll("[aria-live]"))), n, t, r)
}
const nd = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function wm(e, t) {
    const r = td(e, nd());
    t === "prev" && r.reverse();
    const n = r.indexOf($t(et(e)));
    return r.slice(n + 1)[0]
}

function km() {
    return wm(document.body, "next")
}

function Sm() {
    return wm(document.body, "prev")
}

function Lo(e, t) {
    const r = t || e.currentTarget,
        n = e.relatedTarget;
    return !n || !_e(r, n)
}

function Z2(e) {
    td(e, nd()).forEach(r => {
        r.dataset.tabindex = r.getAttribute("tabindex") || "", r.setAttribute("tabindex", "-1")
    })
}

function J2(e) {
    e.querySelectorAll("[data-tabindex]").forEach(r => {
        const n = r.dataset.tabindex;
        delete r.dataset.tabindex, n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex")
    })
}
const od = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
};
let eS;

function tp(e) {
    e.key === "Tab" && (e.target, clearTimeout(eS))
}
const Wa = w.forwardRef(function(t, r) {
        const [n, o] = w.useState();
        fe(() => (Yc() && o("button"), document.addEventListener("keydown", tp), () => {
            document.removeEventListener("keydown", tp)
        }), []);
        const i = {
            ref: r,
            tabIndex: 0,
            role: n,
            "aria-hidden": n ? void 0 : !0,
            [un("focus-guard")]: "",
            style: od
        };
        return w.createElement("span", ei({}, t, i))
    }),
    Em = w.createContext(null),
    rp = un("portal");

function tS(e) {
    let {
        id: t,
        root: r
    } = e === void 0 ? {} : e;
    const [n, o] = w.useState(null), i = El(), a = Cm(), l = w.useRef(null);
    return fe(() => () => {
        n == null || n.remove(), queueMicrotask(() => {
            l.current = null
        })
    }, [n]), fe(() => {
        if (l.current) return;
        const s = t ? document.getElementById(t) : null;
        if (!s) return;
        const u = document.createElement("div");
        u.id = i, u.setAttribute(rp, ""), s.appendChild(u), l.current = u, o(u)
    }, [t, i]), fe(() => {
        if (l.current) return;
        let s = r || (a == null ? void 0 : a.portalNode);
        s && !me(s) && (s = s.current), s = s || document.body;
        let u = null;
        t && (u = document.createElement("div"), u.id = t, s.appendChild(u));
        const d = document.createElement("div");
        d.id = i, d.setAttribute(rp, ""), s = u || s, s.appendChild(d), l.current = d, o(d)
    }, [t, r, i, a]), n
}

function rS(e) {
    let {
        children: t,
        id: r,
        root: n = null,
        preserveTabOrder: o = !0
    } = e;
    const i = tS({
            id: r,
            root: n
        }),
        [a, l] = w.useState(null),
        s = w.useRef(null),
        u = w.useRef(null),
        d = w.useRef(null),
        c = w.useRef(null),
        f = !!a && !a.modal && a.open && o && !!(n || i);
    return w.useEffect(() => {
        if (!i || !o || a != null && a.modal) return;

        function h(m) {
            i && Lo(m) && (m.type === "focusin" ? J2 : Z2)(i)
        }
        return i.addEventListener("focusin", h, !0), i.addEventListener("focusout", h, !0), () => {
            i.removeEventListener("focusin", h, !0), i.removeEventListener("focusout", h, !0)
        }
    }, [i, o, a == null ? void 0 : a.modal]), w.createElement(Em.Provider, {
        value: w.useMemo(() => ({
            preserveTabOrder: o,
            beforeOutsideRef: s,
            afterOutsideRef: u,
            beforeInsideRef: d,
            afterInsideRef: c,
            portalNode: i,
            setFocusManagerState: l
        }), [o, i])
    }, f && i && w.createElement(Wa, {
        "data-type": "outside",
        ref: s,
        onFocus: h => {
            if (Lo(h, i)) {
                var m;
                (m = d.current) == null || m.focus()
            } else {
                const v = Sm() || (a == null ? void 0 : a.refs.domReference.current);
                v == null || v.focus()
            }
        }
    }), f && i && w.createElement("span", {
        "aria-owns": i.id,
        style: od
    }), i && wl.createPortal(t, i), f && i && w.createElement(Wa, {
        "data-type": "outside",
        ref: u,
        onFocus: h => {
            if (Lo(h, i)) {
                var m;
                (m = c.current) == null || m.focus()
            } else {
                const v = km() || (a == null ? void 0 : a.refs.domReference.current);
                v == null || v.focus(), a != null && a.closeOnFocusOut && (a == null || a.onOpenChange(!1, h.nativeEvent))
            }
        }
    }))
}
const Cm = () => w.useContext(Em),
    np = 20;
let Qr = [];

function vs(e) {
    Qr = Qr.filter(t => t.isConnected), e && ar(e) !== "body" && (Qr.push(e), Qr.length > np && (Qr = Qr.slice(-np)))
}

function op() {
    return Qr.slice().reverse().find(e => e.isConnected)
}
const nS = w.forwardRef(function(t, r) {
    return w.createElement("button", ei({}, t, {
        type: "button",
        ref: r,
        tabIndex: -1,
        style: od
    }))
});

function Om(e) {
    const {
        context: t,
        children: r,
        disabled: n = !1,
        order: o = ["content"],
        guards: i = !0,
        initialFocus: a = 0,
        returnFocus: l = !0,
        modal: s = !0,
        visuallyHiddenDismiss: u = !1,
        closeOnFocusOut: d = !0
    } = e, {
        open: c,
        refs: f,
        nodeId: h,
        onOpenChange: m,
        events: v,
        dataRef: S,
        elements: {
            domReference: y,
            floating: p
        }
    } = t, b = typeof a == "number" && a < 0, x = nm(y) && b, k = Y2() ? i : !0, E = Qt(o), R = Qt(a), L = Qt(l), j = ci(), T = Cm(), _ = w.useRef(null), O = w.useRef(null), P = w.useRef(!1), C = w.useRef(!1), M = T != null, I = w.useCallback(function(F) {
        return F === void 0 && (F = p), F ? td(F, nd()) : []
    }, [p]), D = w.useCallback(F => {
        const $ = I(F);
        return E.current.map(B => y && B === "reference" ? y : p && B === "floating" ? p : $).filter(Boolean).flat()
    }, [y, p, E, I]);
    w.useEffect(() => {
        if (n || !s) return;

        function F(B) {
            if (B.key === "Tab") {
                _e(p, $t(et(p))) && I().length === 0 && !x && Be(B);
                const Q = D(),
                    G = kr(B);
                E.current[0] === "reference" && G === y && (Be(B), B.shiftKey ? qt(Q[Q.length - 1]) : qt(Q[1])), E.current[1] === "floating" && G === p && B.shiftKey && (Be(B), qt(Q[0]))
            }
        }
        const $ = et(p);
        return $.addEventListener("keydown", F), () => {
            $.removeEventListener("keydown", F)
        }
    }, [n, y, p, s, E, x, I, D]), w.useEffect(() => {
        if (n || !d) return;

        function F() {
            C.current = !0, setTimeout(() => {
                C.current = !1
            })
        }

        function $(B) {
            const Q = B.relatedTarget;
            queueMicrotask(() => {
                const G = !(_e(y, Q) || _e(p, Q) || _e(Q, p) || _e(T == null ? void 0 : T.portalNode, Q) || Q != null && Q.hasAttribute(un("focus-guard")) || j && (en(j.nodesRef.current, h).find(K => {
                    var re, ee;
                    return _e((re = K.context) == null ? void 0 : re.elements.floating, Q) || _e((ee = K.context) == null ? void 0 : ee.elements.domReference, Q)
                }) || G2(j.nodesRef.current, h).find(K => {
                    var re, ee;
                    return ((re = K.context) == null ? void 0 : re.elements.floating) === Q || ((ee = K.context) == null ? void 0 : ee.elements.domReference) === Q
                })));
                Q && G && !C.current && Q !== op() && (P.current = !0, m(!1, B))
            })
        }
        if (p && Ve(y)) return y.addEventListener("focusout", $), y.addEventListener("pointerdown", F), !s && p.addEventListener("focusout", $), () => {
            y.removeEventListener("focusout", $), y.removeEventListener("pointerdown", F), !s && p.removeEventListener("focusout", $)
        }
    }, [n, y, p, s, h, j, T, m, d]), w.useEffect(() => {
        var F;
        if (n) return;
        const $ = Array.from((T == null || (F = T.portalNode) == null ? void 0 : F.querySelectorAll("[" + un("portal") + "]")) || []);
        if (p) {
            const B = [p, ...$, _.current, O.current, E.current.includes("reference") || x ? y : null].filter(G => G != null),
                Q = s || x ? ep(B, k, !k) : ep(B);
            return () => {
                Q()
            }
        }
    }, [n, y, p, s, E, T, x, k]), fe(() => {
        if (n || !p) return;
        const F = et(p),
            $ = $t(F);
        queueMicrotask(() => {
            const B = D(p),
                Q = R.current,
                G = (typeof Q == "number" ? B[Q] : Q.current) || p,
                K = _e(p, $);
            !b && !K && c && qt(G, {
                preventScroll: G === p
            })
        })
    }, [n, c, p, b, D, R]), fe(() => {
        if (n || !p) return;
        let F = !1;
        const $ = et(p),
            B = $t($),
            Q = S.current;
        vs(B);

        function G(K) {
            let {
                reason: re,
                event: ee,
                nested: q
            } = K;
            re === "escape-key" && f.domReference.current && vs(f.domReference.current), re === "hover" && ee.type === "mouseleave" && (P.current = !0), re === "outside-press" && (q ? (P.current = !1, F = !0) : P.current = !(tm(ee) || Kc(ee)))
        }
        return v.on("openchange", G), () => {
            v.off("openchange", G);
            const K = $t($),
                re = _e(p, K) || j && en(j.nodesRef.current, h).some(ie => {
                    var Te;
                    return _e((Te = ie.context) == null ? void 0 : Te.elements.floating, K)
                });
            (re || Q.openEvent && ["click", "mousedown"].includes(Q.openEvent.type)) && f.domReference.current && vs(f.domReference.current);
            const q = op();
            L.current && !P.current && Ve(q) && (!(q !== K && K !== $.body) || re) && qt(q, {
                cancelPrevious: !1,
                preventScroll: F
            })
        }
    }, [n, p, L, S, f, v, j, h]), fe(() => {
        if (!(n || !T)) return T.setFocusManagerState({
            modal: s,
            closeOnFocusOut: d,
            open: c,
            onOpenChange: m,
            refs: f
        }), () => {
            T.setFocusManagerState(null)
        }
    }, [n, T, s, c, m, f, d]), fe(() => {
        if (n || !p || typeof MutationObserver != "function" || b) return;
        const F = () => {
            const B = p.getAttribute("tabindex");
            E.current.includes("floating") || $t(et(p)) !== f.domReference.current && I().length === 0 ? B !== "0" && p.setAttribute("tabindex", "0") : B !== "-1" && p.setAttribute("tabindex", "-1")
        };
        F();
        const $ = new MutationObserver(F);
        return $.observe(p, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }), () => {
            $.disconnect()
        }
    }, [n, p, f, E, I, b]);

    function N(F) {
        return n || !u || !s ? null : w.createElement(nS, {
            ref: F === "start" ? _ : O,
            onClick: $ => m(!1, $.nativeEvent)
        }, typeof u == "string" ? u : "Dismiss")
    }
    const A = !n && k && (M || s);
    return w.createElement(w.Fragment, null, A && w.createElement(Wa, {
        "data-type": "inside",
        ref: T == null ? void 0 : T.beforeInsideRef,
        onFocus: F => {
            if (s) {
                const B = D();
                qt(o[0] === "reference" ? B[0] : B[B.length - 1])
            } else if (T != null && T.preserveTabOrder && T.portalNode)
                if (P.current = !1, Lo(F, T.portalNode)) {
                    const B = km() || y;
                    B == null || B.focus()
                } else {
                    var $;
                    ($ = T.beforeOutsideRef.current) == null || $.focus()
                }
        }
    }), !x && N("start"), r, N("end"), A && w.createElement(Wa, {
        "data-type": "inside",
        ref: T == null ? void 0 : T.afterInsideRef,
        onFocus: F => {
            if (s) qt(D()[0]);
            else if (T != null && T.preserveTabOrder && T.portalNode)
                if (d && (P.current = !0), Lo(F, T.portalNode)) {
                    const B = Sm() || y;
                    B == null || B.focus()
                } else {
                    var $;
                    ($ = T.afterOutsideRef.current) == null || $.focus()
                }
        }
    }))
}
const bs = new Set,
    oS = w.forwardRef(function(t, r) {
        let {
            lockScroll: n = !1,
            ...o
        } = t;
        const i = El();
        return fe(() => {
            if (!n) return;
            bs.add(i);
            const a = /iP(hone|ad|od)|iOS/.test(Gc()),
                l = document.body.style,
                u = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                d = window.innerWidth - document.documentElement.clientWidth,
                c = l.left ? parseFloat(l.left) : window.pageXOffset,
                f = l.top ? parseFloat(l.top) : window.pageYOffset;
            if (l.overflow = "hidden", d && (l[u] = d + "px"), a) {
                var h, m;
                const v = ((h = window.visualViewport) == null ? void 0 : h.offsetLeft) || 0,
                    S = ((m = window.visualViewport) == null ? void 0 : m.offsetTop) || 0;
                Object.assign(l, {
                    position: "fixed",
                    top: -(f - Math.floor(S)) + "px",
                    left: -(c - Math.floor(v)) + "px",
                    right: "0"
                })
            }
            return () => {
                bs.delete(i), bs.size === 0 && (Object.assign(l, {
                    overflow: "",
                    [u]: ""
                }), a && (Object.assign(l, {
                    position: "",
                    top: "",
                    left: "",
                    right: ""
                }), window.scrollTo(c, f)))
            }
        }, [i, n]), w.createElement("div", ei({
            ref: r
        }, o, {
            style: {
                position: "fixed",
                overflow: "auto",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...o.style
            }
        }))
    });

function ip(e) {
    return Ve(e.target) && e.target.tagName === "BUTTON"
}

function ap(e) {
    return qc(e)
}

function Tm(e, t) {
    t === void 0 && (t = {});
    const {
        open: r,
        onOpenChange: n,
        dataRef: o,
        elements: {
            domReference: i
        }
    } = e, {
        enabled: a = !0,
        event: l = "click",
        toggle: s = !0,
        ignoreMouse: u = !1,
        keyboardHandlers: d = !0
    } = t, c = w.useRef(), f = w.useRef(!1);
    return w.useMemo(() => a ? {
        reference: {
            onPointerDown(h) {
                c.current = h.pointerType
            },
            onMouseDown(h) {
                h.button === 0 && (za(c.current, !0) && u || l !== "click" && (r && s && (!o.current.openEvent || o.current.openEvent.type === "mousedown") ? n(!1, h.nativeEvent, "click") : (h.preventDefault(), n(!0, h.nativeEvent, "click"))))
            },
            onClick(h) {
                if (l === "mousedown" && c.current) {
                    c.current = void 0;
                    return
                }
                za(c.current, !0) && u || (r && s && (!o.current.openEvent || o.current.openEvent.type === "click") ? n(!1, h.nativeEvent, "click") : n(!0, h.nativeEvent, "click"))
            },
            onKeyDown(h) {
                c.current = void 0, !(h.defaultPrevented || !d || ip(h)) && (h.key === " " && !ap(i) && (h.preventDefault(), f.current = !0), h.key === "Enter" && n(!(r && s), h.nativeEvent, "click"))
            },
            onKeyUp(h) {
                h.defaultPrevented || !d || ip(h) || ap(i) || h.key === " " && f.current && (f.current = !1, n(!(r && s), h.nativeEvent, "click"))
            }
        }
    } : {}, [a, o, l, u, d, i, s, r, n])
}
const iS = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    aS = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    lp = e => {
        var t, r;
        return {
            escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
            outsidePress: typeof e == "boolean" ? e : (r = e == null ? void 0 : e.outsidePress) != null ? r : !0
        }
    };

function jm(e, t) {
    t === void 0 && (t = {});
    const {
        open: r,
        onOpenChange: n,
        nodeId: o,
        elements: {
            reference: i,
            domReference: a,
            floating: l
        },
        dataRef: s
    } = e, {
        enabled: u = !0,
        escapeKey: d = !0,
        outsidePress: c = !0,
        outsidePressEvent: f = "pointerdown",
        referencePress: h = !1,
        referencePressEvent: m = "pointerdown",
        ancestorScroll: v = !1,
        bubbles: S,
        capture: y
    } = t, p = ci(), b = Bt(typeof c == "function" ? c : () => !1), x = typeof c == "function" ? b : c, k = w.useRef(!1), E = w.useRef(!1), {
        escapeKey: R,
        outsidePress: L
    } = lp(S), {
        escapeKey: j,
        outsidePress: T
    } = lp(y), _ = Bt(M => {
        if (!r || !u || !d || M.key !== "Escape") return;
        const I = p ? en(p.nodesRef.current, o) : [];
        if (!R && (M.stopPropagation(), I.length > 0)) {
            let D = !0;
            if (I.forEach(N => {
                    var A;
                    if ((A = N.context) != null && A.open && !N.context.dataRef.current.__escapeKeyBubbles) {
                        D = !1;
                        return
                    }
                }), !D) return
        }
        n(!1, Ck(M) ? M.nativeEvent : M, "escape-key")
    }), O = Bt(M => {
        var I;
        const D = () => {
            var N;
            _(M), (N = kr(M)) == null || N.removeEventListener("keydown", D)
        };
        (I = kr(M)) == null || I.addEventListener("keydown", D)
    }), P = Bt(M => {
        const I = k.current;
        k.current = !1;
        const D = E.current;
        if (E.current = !1, f === "click" && D || I || typeof x == "function" && !x(M)) return;
        const N = kr(M),
            A = "[" + un("inert") + "]",
            F = et(l).querySelectorAll(A);
        let $ = me(N) ? N : null;
        for (; $ && !Qn($);) {
            const G = ln($);
            if (Qn(G) || !me(G)) break;
            $ = G
        }
        if (F.length && me(N) && !Ok(N) && !_e(N, l) && Array.from(F).every(G => !_e($, G))) return;
        if (Ve(N) && l) {
            const G = N.clientWidth > 0 && N.scrollWidth > N.clientWidth,
                K = N.clientHeight > 0 && N.scrollHeight > N.clientHeight;
            let re = K && M.offsetX > N.clientWidth;
            if (K && ht(N).direction === "rtl" && (re = M.offsetX <= N.offsetWidth - N.clientWidth), re || G && M.offsetY > N.clientHeight) return
        }
        const B = p && en(p.nodesRef.current, o).some(G => {
            var K;
            return ps(M, (K = G.context) == null ? void 0 : K.elements.floating)
        });
        if (ps(M, l) || ps(M, a) || B) return;
        const Q = p ? en(p.nodesRef.current, o) : [];
        if (Q.length > 0) {
            let G = !0;
            if (Q.forEach(K => {
                    var re;
                    if ((re = K.context) != null && re.open && !K.context.dataRef.current.__outsidePressBubbles) {
                        G = !1;
                        return
                    }
                }), !G) return
        }
        n(!1, M, "outside-press")
    }), C = Bt(M => {
        var I;
        const D = () => {
            var N;
            P(M), (N = kr(M)) == null || N.removeEventListener(f, D)
        };
        (I = kr(M)) == null || I.addEventListener(f, D)
    });
    return w.useEffect(() => {
        if (!r || !u) return;
        s.current.__escapeKeyBubbles = R, s.current.__outsidePressBubbles = L;

        function M(N) {
            n(!1, N, "ancestor-scroll")
        }
        const I = et(l);
        d && I.addEventListener("keydown", j ? O : _, j), x && I.addEventListener(f, T ? C : P, T);
        let D = [];
        return v && (me(a) && (D = Lr(a)), me(l) && (D = D.concat(Lr(l))), !me(i) && i && i.contextElement && (D = D.concat(Lr(i.contextElement)))), D = D.filter(N => {
            var A;
            return N !== ((A = I.defaultView) == null ? void 0 : A.visualViewport)
        }), D.forEach(N => {
            N.addEventListener("scroll", M, {
                passive: !0
            })
        }), () => {
            d && I.removeEventListener("keydown", j ? O : _, j), x && I.removeEventListener(f, T ? C : P, T), D.forEach(N => {
                N.removeEventListener("scroll", M)
            })
        }
    }, [s, l, a, i, d, x, f, r, n, v, u, R, L, _, j, O, P, T, C]), w.useEffect(() => {
        k.current = !1
    }, [x, f]), w.useMemo(() => u ? {
        reference: {
            onKeyDown: _,
            [iS[m]]: M => {
                h && n(!1, M.nativeEvent, "reference-press")
            }
        },
        floating: {
            onKeyDown: _,
            onMouseDown() {
                E.current = !0
            },
            onMouseUp() {
                E.current = !0
            },
            [aS[f]]: () => {
                k.current = !0
            }
        }
    } : {}, [u, h, f, m, n, _])
}

function Pm(e) {
    var t;
    e === void 0 && (e = {});
    const {
        open: r = !1,
        onOpenChange: n,
        nodeId: o
    } = e, [i, a] = w.useState(null), l = ((t = e.elements) == null ? void 0 : t.reference) || i, s = c2(e), u = ci(), d = Cl() != null, c = Bt((k, E, R) => {
        k && (h.current.openEvent = E), m.emit("openchange", {
            open: k,
            event: E,
            reason: R,
            nested: d
        }), n == null || n(k, E, R)
    }), f = w.useRef(null), h = w.useRef({}), m = w.useState(() => W2())[0], v = El(), S = w.useCallback(k => {
        const E = me(k) ? {
            getBoundingClientRect: () => k.getBoundingClientRect(),
            contextElement: k
        } : k;
        s.refs.setReference(E)
    }, [s.refs]), y = w.useCallback(k => {
        (me(k) || k === null) && (f.current = k, a(k)), (me(s.refs.reference.current) || s.refs.reference.current === null || k !== null && !me(k)) && s.refs.setReference(k)
    }, [s.refs]), p = w.useMemo(() => ({ ...s.refs,
        setReference: y,
        setPositionReference: S,
        domReference: f
    }), [s.refs, y, S]), b = w.useMemo(() => ({ ...s.elements,
        domReference: l
    }), [s.elements, l]), x = w.useMemo(() => ({ ...s,
        refs: p,
        elements: b,
        dataRef: h,
        nodeId: o,
        floatingId: v,
        events: m,
        open: r,
        onOpenChange: c
    }), [s, o, v, m, r, c, p, b]);
    return fe(() => {
        const k = u == null ? void 0 : u.nodesRef.current.find(E => E.id === o);
        k && (k.context = x)
    }), w.useMemo(() => ({ ...s,
        context: x,
        refs: p,
        elements: b
    }), [s, p, b, x])
}

function lS(e, t) {
    t === void 0 && (t = {});
    const {
        open: r,
        onOpenChange: n,
        events: o,
        refs: i,
        elements: {
            domReference: a
        }
    } = e, {
        enabled: l = !0,
        visibleOnly: s = !0
    } = t, u = w.useRef(!1), d = w.useRef(), c = w.useRef(!0);
    return w.useEffect(() => {
        if (!l) return;
        const f = ct(a);

        function h() {
            !r && Ve(a) && a === $t(et(a)) && (u.current = !0)
        }

        function m() {
            c.current = !0
        }
        return f.addEventListener("blur", h), f.addEventListener("keydown", m, !0), () => {
            f.removeEventListener("blur", h), f.removeEventListener("keydown", m, !0)
        }
    }, [a, r, l]), w.useEffect(() => {
        if (!l) return;

        function f(h) {
            let {
                reason: m
            } = h;
            (m === "reference-press" || m === "escape-key") && (u.current = !0)
        }
        return o.on("openchange", f), () => {
            o.off("openchange", f)
        }
    }, [o, l]), w.useEffect(() => () => {
        clearTimeout(d.current)
    }, []), w.useMemo(() => l ? {
        reference: {
            onPointerDown(f) {
                Kc(f.nativeEvent) || (c.current = !1)
            },
            onMouseLeave() {
                u.current = !1
            },
            onFocus(f) {
                if (u.current) return;
                const h = kr(f.nativeEvent);
                if (s && me(h)) try {
                    if (Yc() && rm()) throw Error();
                    if (!h.matches(":focus-visible")) return
                } catch {
                    if (!c.current && !qc(h)) return
                }
                n(!0, f.nativeEvent, "focus")
            },
            onBlur(f) {
                u.current = !1;
                const h = f.relatedTarget,
                    m = me(h) && h.hasAttribute(un("focus-guard")) && h.getAttribute("data-type") === "outside";
                d.current = window.setTimeout(() => {
                    const v = $t(a ? a.ownerDocument : document);
                    !h && v === a || _e(i.floating.current, v) || _e(a, v) || m || n(!1, f.nativeEvent, "focus")
                })
            }
        }
    } : {}, [l, s, a, i, n])
}
const sp = "active",
    up = "selected";

function xs(e, t, r) {
    const n = new Map,
        o = r === "item";
    let i = e;
    if (o && e) {
        const {
            [sp]: a, [up]: l, ...s
        } = e;
        i = s
    }
    return { ...r === "floating" && {
            tabIndex: -1
        },
        ...i,
        ...t.map(a => {
            const l = a ? a[r] : null;
            return typeof l == "function" ? e ? l(e) : null : l
        }).concat(e).reduce((a, l) => (l && Object.entries(l).forEach(s => {
            let [u, d] = s;
            if (!(o && [sp, up].includes(u)))
                if (u.indexOf("on") === 0) {
                    if (n.has(u) || n.set(u, []), typeof d == "function") {
                        var c;
                        (c = n.get(u)) == null || c.push(d), a[u] = function() {
                            for (var f, h = arguments.length, m = new Array(h), v = 0; v < h; v++) m[v] = arguments[v];
                            return (f = n.get(u)) == null ? void 0 : f.map(S => S(...m)).find(S => S !== void 0)
                        }
                    }
                } else a[u] = d
        }), a), {})
    }
}

function Nm(e) {
    e === void 0 && (e = []);
    const t = e,
        r = w.useCallback(i => xs(i, e, "reference"), t),
        n = w.useCallback(i => xs(i, e, "floating"), t),
        o = w.useCallback(i => xs(i, e, "item"), e.map(i => i == null ? void 0 : i.item));
    return w.useMemo(() => ({
        getReferenceProps: r,
        getFloatingProps: n,
        getItemProps: o
    }), [r, n, o])
}
let cp = !1;

function Ol(e, t, r) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return r;
        default:
            return t || r
    }
}

function dp(e, t) {
    return Ol(t, e === rd || e === ui, e === Kn || e === io)
}

function ws(e, t, r) {
    return Ol(t, e === ui, r ? e === Kn : e === io) || e === "Enter" || e === " " || e === ""
}

function sS(e, t, r) {
    return Ol(t, r ? e === Kn : e === io, e === ui)
}

function fp(e, t, r) {
    return Ol(t, r ? e === io : e === Kn, e === rd)
}

function uS(e, t) {
    const {
        open: r,
        onOpenChange: n,
        refs: o,
        elements: {
            domReference: i,
            floating: a
        }
    } = e, {
        listRef: l,
        activeIndex: s,
        onNavigate: u = () => {},
        enabled: d = !0,
        selectedIndex: c = null,
        allowEscape: f = !1,
        loop: h = !1,
        nested: m = !1,
        rtl: v = !1,
        virtual: S = !1,
        focusItemOnOpen: y = "auto",
        focusItemOnHover: p = !0,
        openOnArrowKeyDown: b = !0,
        disabledIndices: x = void 0,
        orientation: k = "vertical",
        cols: E = 1,
        scrollItemIntoView: R = !0,
        virtualItemRef: L,
        itemSizes: j,
        dense: T = !1
    } = t, _ = Cl(), O = ci(), P = Bt(u), C = w.useRef(y), M = w.useRef(c ? ? -1), I = w.useRef(null), D = w.useRef(!0), N = w.useRef(P), A = w.useRef(!!a), F = w.useRef(!1), $ = w.useRef(!1), B = Qt(x), Q = Qt(r), G = Qt(R), [K, re] = w.useState(), [ee, q] = w.useState(), ie = Bt(function(J, oe, X) {
        X === void 0 && (X = !1);
        const ae = J.current[oe.current];
        ae && (S ? (re(ae.id), O == null || O.events.emit("virtualfocus", ae), L && (L.current = ae)) : qt(ae, {
            preventScroll: !0,
            sync: rm() && Yc() ? cp || F.current : !1
        }), requestAnimationFrame(() => {
            const He = G.current;
            He && ae && (X || !D.current) && (ae.scrollIntoView == null || ae.scrollIntoView(typeof He == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : He))
        }))
    });
    fe(() => {
        document.createElement("div").focus({
            get preventScroll() {
                return cp = !0, !1
            }
        })
    }, []), fe(() => {
        d && (r && a ? C.current && c != null && ($.current = !0, M.current = c, P(c)) : A.current && (M.current = -1, N.current(null)))
    }, [d, r, a, c, P]), fe(() => {
        if (d && r && a)
            if (s == null) {
                if (F.current = !1, c != null) return;
                if (A.current && (M.current = -1, ie(l, M)), !A.current && C.current && (I.current != null || C.current === !0 && I.current == null)) {
                    let J = 0;
                    const oe = () => {
                        l.current[0] == null ? (J < 2 && (J ? requestAnimationFrame : queueMicrotask)(oe), J++) : (M.current = I.current == null || ws(I.current, k, v) || m ? gs(l, B.current) : qf(l, B.current), I.current = null, P(M.current))
                    };
                    oe()
                }
            } else Ro(l, s) || (M.current = s, ie(l, M, $.current), $.current = !1)
    }, [d, r, a, s, c, m, l, k, v, P, ie, B]), fe(() => {
        var J;
        if (!d || a || !O || S || !A.current) return;
        const oe = O.nodesRef.current,
            X = (J = oe.find(Rt => Rt.id === _)) == null || (J = J.context) == null ? void 0 : J.elements.floating,
            ae = $t(et(a)),
            He = oe.some(Rt => Rt.context && _e(Rt.context.elements.floating, ae));
        X && !He && D.current && X.focus({
            preventScroll: !0
        })
    }, [d, a, O, _, S]), fe(() => {
        if (!d || !O || !S || _) return;

        function J(oe) {
            q(oe.id), L && (L.current = oe)
        }
        return O.events.on("virtualfocus", J), () => {
            O.events.off("virtualfocus", J)
        }
    }, [d, O, S, _, L]), fe(() => {
        N.current = P, A.current = !!a
    }), fe(() => {
        r || (I.current = null)
    }, [r]);
    const Te = s != null,
        Re = w.useMemo(() => {
            function J(X) {
                if (!r) return;
                const ae = l.current.indexOf(X);
                ae !== -1 && P(ae)
            }
            return {
                onFocus(X) {
                    let {
                        currentTarget: ae
                    } = X;
                    J(ae)
                },
                onClick: X => {
                    let {
                        currentTarget: ae
                    } = X;
                    return ae.focus({
                        preventScroll: !0
                    })
                },
                ...p && {
                    onMouseMove(X) {
                        let {
                            currentTarget: ae
                        } = X;
                        J(ae)
                    },
                    onPointerLeave(X) {
                        let {
                            pointerType: ae
                        } = X;
                        !D.current || ae === "touch" || (M.current = -1, ie(l, M), P(null), S || qt(o.floating.current, {
                            preventScroll: !0
                        }))
                    }
                }
            }
        }, [r, o, ie, p, l, P, S]);
    return w.useMemo(() => {
        if (!d) return {};
        const J = B.current;

        function oe(te) {
            if (D.current = !1, F.current = !0, !Q.current && te.currentTarget === o.floating.current) return;
            if (m && fp(te.key, k, v)) {
                Be(te), n(!1, te.nativeEvent, "list-navigation"), Ve(i) && !S && i.focus();
                return
            }
            const Et = M.current,
                Lt = gs(l, J),
                cr = qf(l, J);
            if (te.key === "Home" && (Be(te), M.current = Lt, P(M.current)), te.key === "End" && (Be(te), M.current = cr, P(M.current)), E > 1) {
                const $r = j || Array.from({
                        length: l.current.length
                    }, () => ({
                        width: 1,
                        height: 1
                    })),
                    dr = R2($r, E, T),
                    bi = dr.findIndex(zt => zt != null && !(J != null && J.includes(zt))),
                    xi = dr.reduce((zt, so, It) => so != null && !(J != null && J.includes(so)) ? It : zt, -1);
                if (M.current = dr[M2({
                        current: dr.map(zt => zt != null ? l.current[zt] : null)
                    }, {
                        event: te,
                        orientation: k,
                        loop: h,
                        cols: E,
                        disabledIndices: z2([...J || [], void 0], dr),
                        minIndex: bi,
                        maxIndex: xi,
                        prevIndex: L2(M.current, $r, dr, E, te.key === ui ? "bl" : te.key === io ? "tr" : "tl"),
                        stopEvent: !0
                    })], P(M.current), k === "both") return
            }
            if (dp(te.key, k)) {
                if (Be(te), r && !S && $t(te.currentTarget.ownerDocument) === te.currentTarget) {
                    M.current = ws(te.key, k, v) ? Lt : cr, P(M.current);
                    return
                }
                ws(te.key, k, v) ? h ? M.current = Et >= cr ? f && Et !== l.current.length ? -1 : Lt : Ke(l, {
                    startingIndex: Et,
                    disabledIndices: J
                }) : M.current = Math.min(cr, Ke(l, {
                    startingIndex: Et,
                    disabledIndices: J
                })) : h ? M.current = Et <= Lt ? f && Et !== -1 ? l.current.length : cr : Ke(l, {
                    startingIndex: Et,
                    decrement: !0,
                    disabledIndices: J
                }) : M.current = Math.max(Lt, Ke(l, {
                    startingIndex: Et,
                    decrement: !0,
                    disabledIndices: J
                })), Ro(l, M.current) ? P(null) : P(M.current)
            }
        }

        function X(te) {
            y === "auto" && tm(te.nativeEvent) && (C.current = !0)
        }

        function ae(te) {
            C.current = y, y === "auto" && Kc(te.nativeEvent) && (C.current = !0)
        }
        const He = S && r && Te && {
                "aria-activedescendant": ee || K
            },
            Rt = l.current.find(te => (te == null ? void 0 : te.id) === K);
        return {
            reference: { ...He,
                onKeyDown(te) {
                    D.current = !1;
                    const Et = te.key.indexOf("Arrow") === 0,
                        Lt = sS(te.key, k, v),
                        cr = fp(te.key, k, v),
                        $r = dp(te.key, k),
                        dr = (m ? Lt : $r) || te.key === "Enter" || te.key.trim() === "";
                    if (S && r) {
                        const so = O == null ? void 0 : O.nodesRef.current.find(wi => wi.parentId == null),
                            It = O && so ? K2(O.nodesRef.current, so.id) : null;
                        if (Et && It && L) {
                            const wi = new KeyboardEvent("keydown", {
                                key: te.key,
                                bubbles: !0
                            });
                            if (Lt || cr) {
                                var bi, xi;
                                const Yv = ((bi = It.context) == null ? void 0 : bi.elements.domReference) === te.currentTarget,
                                    Ed = cr && !Yv ? (xi = It.context) == null ? void 0 : xi.elements.domReference : Lt ? Rt : null;
                                Ed && (Be(te), Ed.dispatchEvent(wi), q(void 0))
                            }
                            if ($r && It.context && It.context.open && It.parentId && te.currentTarget !== It.context.elements.domReference) {
                                var zt;
                                Be(te), (zt = It.context.elements.domReference) == null || zt.dispatchEvent(wi);
                                return
                            }
                        }
                        return oe(te)
                    }
                    if (!(!r && !b && Et)) {
                        if (dr && (I.current = m && $r ? null : te.key), m) {
                            Lt && (Be(te), r ? (M.current = gs(l, J), P(M.current)) : n(!0, te.nativeEvent, "list-navigation"));
                            return
                        }
                        $r && (c != null && (M.current = c), Be(te), !r && b ? n(!0, te.nativeEvent, "list-navigation") : oe(te), r && P(M.current))
                    }
                },
                onFocus() {
                    r && P(null)
                },
                onPointerDown: ae,
                onMouseDown: X,
                onClick: X
            },
            floating: {
                "aria-orientation": k === "both" ? void 0 : k,
                ...!nm(i) && He,
                onKeyDown: oe,
                onPointerMove() {
                    D.current = !0
                }
            },
            item: Re
        }
    }, [i, o, K, ee, B, Q, l, d, k, v, S, r, Te, m, c, b, f, E, h, y, P, n, Re, O, L, j, T])
}
const cS = new Map([
    ["select", "listbox"],
    ["combobox", "listbox"],
    ["label", !1]
]);

function _m(e, t) {
    var r;
    t === void 0 && (t = {});
    const {
        open: n,
        floatingId: o
    } = e, {
        enabled: i = !0,
        role: a = "dialog"
    } = t, l = (r = cS.get(a)) != null ? r : a, s = El(), d = Cl() != null;
    return w.useMemo(() => {
        if (!i) return {};
        const c = {
            id: o,
            ...l && {
                role: l
            }
        };
        return l === "tooltip" || a === "label" ? {
            reference: {
                ["aria-" + (a === "label" ? "labelledby" : "describedby")]: n ? o : void 0
            },
            floating: c
        } : {
            reference: {
                "aria-expanded": n ? "true" : "false",
                "aria-haspopup": l === "alertdialog" ? "dialog" : l,
                "aria-controls": n ? o : void 0,
                ...l === "listbox" && {
                    role: "combobox"
                },
                ...l === "menu" && {
                    id: s
                },
                ...l === "menu" && d && {
                    role: "menuitem"
                },
                ...a === "select" && {
                    "aria-autocomplete": "none"
                },
                ...a === "combobox" && {
                    "aria-autocomplete": "list"
                }
            },
            floating: { ...c,
                ...l === "menu" && {
                    "aria-labelledby": s
                }
            },
            item(f) {
                let {
                    active: h,
                    selected: m
                } = f;
                const v = {
                    role: "option",
                    ...h && {
                        id: o + "-option"
                    }
                };
                switch (a) {
                    case "select":
                        return { ...v,
                            "aria-selected": h && m
                        };
                    case "combobox":
                        return { ...v,
                            ...h && {
                                "aria-selected": !0
                            }
                        }
                }
                return {}
            }
        }
    }, [i, a, l, n, o, s, d])
}

function dS(e, t) {
    var r;
    const {
        open: n,
        dataRef: o
    } = e, {
        listRef: i,
        activeIndex: a,
        onMatch: l,
        onTypingChange: s,
        enabled: u = !0,
        findMatch: d = null,
        resetMs: c = 750,
        ignoreKeys: f = [],
        selectedIndex: h = null
    } = t, m = w.useRef(), v = w.useRef(""), S = w.useRef((r = h ? ? a) != null ? r : -1), y = w.useRef(null), p = Bt(l), b = Bt(s), x = Qt(d), k = Qt(f);
    return fe(() => {
        n && (clearTimeout(m.current), y.current = null, v.current = "")
    }, [n]), fe(() => {
        if (n && v.current === "") {
            var E;
            S.current = (E = h ? ? a) != null ? E : -1
        }
    }, [n, h, a]), w.useMemo(() => {
        if (!u) return {};

        function E(j) {
            j ? o.current.typing || (o.current.typing = j, b(j)) : o.current.typing && (o.current.typing = j, b(j))
        }

        function R(j, T, _) {
            const O = x.current ? x.current(T, _) : T.find(P => (P == null ? void 0 : P.toLocaleLowerCase().indexOf(_.toLocaleLowerCase())) === 0);
            return O ? j.indexOf(O) : -1
        }

        function L(j) {
            const T = i.current;
            if (v.current.length > 0 && v.current[0] !== " " && (R(T, T, v.current) === -1 ? E(!1) : j.key === " " && Be(j)), T == null || k.current.includes(j.key) || j.key.length !== 1 || j.ctrlKey || j.metaKey || j.altKey) return;
            n && j.key !== " " && (Be(j), E(!0)), T.every(C => {
                var M, I;
                return C ? ((M = C[0]) == null ? void 0 : M.toLocaleLowerCase()) !== ((I = C[1]) == null ? void 0 : I.toLocaleLowerCase()) : !0
            }) && v.current === j.key && (v.current = "", S.current = y.current), v.current += j.key, clearTimeout(m.current), m.current = setTimeout(() => {
                v.current = "", S.current = y.current, E(!1)
            }, c);
            const O = S.current,
                P = R(T, [...T.slice((O || 0) + 1), ...T.slice(0, (O || 0) + 1)], v.current);
            P !== -1 ? (p(P), y.current = P) : j.key !== " " && (v.current = "", E(!1))
        }
        return {
            reference: {
                onKeyDown: L
            },
            floating: {
                onKeyDown: L,
                onKeyUp(j) {
                    j.key === " " && E(!1)
                }
            }
        }
    }, [u, n, o, i, c, k, x, p, b])
}

function pp(e, t) {
    const [r, n] = e;
    let o = !1;
    const i = t.length;
    for (let a = 0, l = i - 1; a < i; l = a++) {
        const [s, u] = t[a] || [0, 0], [d, c] = t[l] || [0, 0];
        u >= n != c >= n && r <= (d - s) * (n - u) / (c - u) + s && (o = !o)
    }
    return o
}

function fS(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
}

function pS(e) {
    e === void 0 && (e = {});
    const {
        buffer: t = .5,
        blockPointerEvents: r = !1,
        requireIntent: n = !0
    } = e;
    let o, i = !1,
        a = null,
        l = null,
        s = performance.now();

    function u(c, f) {
        const h = performance.now(),
            m = h - s;
        if (a === null || l === null || m === 0) return a = c, l = f, s = h, null;
        const v = c - a,
            S = f - l,
            p = Math.sqrt(v * v + S * S) / m;
        return a = c, l = f, s = h, p
    }
    const d = c => {
        let {
            x: f,
            y: h,
            placement: m,
            elements: v,
            onClose: S,
            nodeId: y,
            tree: p
        } = c;
        return function(x) {
            function k() {
                clearTimeout(o), S()
            }
            if (clearTimeout(o), !v.domReference || !v.floating || m == null || f == null || h == null) return;
            const {
                clientX: E,
                clientY: R
            } = x, L = [E, R], j = kr(x), T = x.type === "mouseleave", _ = _e(v.floating, j), O = _e(v.domReference, j), P = v.domReference.getBoundingClientRect(), C = v.floating.getBoundingClientRect(), M = m.split("-")[0], I = f > C.right - C.width / 2, D = h > C.bottom - C.height / 2, N = fS(L, P), A = C.width > P.width, F = C.height > P.height, $ = (A ? P : C).left, B = (A ? P : C).right, Q = (F ? P : C).top, G = (F ? P : C).bottom;
            if (_ && (i = !0, !T)) return;
            if (O && (i = !1), O && !T) {
                i = !0;
                return
            }
            if (T && me(x.relatedTarget) && _e(v.floating, x.relatedTarget) || p && en(p.nodesRef.current, y).some(ee => {
                    let {
                        context: q
                    } = ee;
                    return q == null ? void 0 : q.open
                })) return;
            if (M === "top" && h >= P.bottom - 1 || M === "bottom" && h <= P.top + 1 || M === "left" && f >= P.right - 1 || M === "right" && f <= P.left + 1) return k();
            let K = [];
            switch (M) {
                case "top":
                    K = [
                        [$, P.top + 1],
                        [$, C.bottom - 1],
                        [B, C.bottom - 1],
                        [B, P.top + 1]
                    ];
                    break;
                case "bottom":
                    K = [
                        [$, C.top + 1],
                        [$, P.bottom - 1],
                        [B, P.bottom - 1],
                        [B, C.top + 1]
                    ];
                    break;
                case "left":
                    K = [
                        [C.right - 1, G],
                        [C.right - 1, Q],
                        [P.left + 1, Q],
                        [P.left + 1, G]
                    ];
                    break;
                case "right":
                    K = [
                        [P.right - 1, G],
                        [P.right - 1, Q],
                        [C.left + 1, Q],
                        [C.left + 1, G]
                    ];
                    break
            }

            function re(ee) {
                let [q, ie] = ee;
                switch (M) {
                    case "top":
                        {
                            const Te = [A ? q + t / 2 : I ? q + t * 4 : q - t * 4, ie + t + 1],
                                Re = [A ? q - t / 2 : I ? q + t * 4 : q - t * 4, ie + t + 1],
                                J = [
                                    [C.left, I || A ? C.bottom - t : C.top],
                                    [C.right, I ? A ? C.bottom - t : C.top : C.bottom - t]
                                ];
                            return [Te, Re, ...J]
                        }
                    case "bottom":
                        {
                            const Te = [A ? q + t / 2 : I ? q + t * 4 : q - t * 4, ie - t],
                                Re = [A ? q - t / 2 : I ? q + t * 4 : q - t * 4, ie - t],
                                J = [
                                    [C.left, I || A ? C.top + t : C.bottom],
                                    [C.right, I ? A ? C.top + t : C.bottom : C.top + t]
                                ];
                            return [Te, Re, ...J]
                        }
                    case "left":
                        {
                            const Te = [q + t + 1, F ? ie + t / 2 : D ? ie + t * 4 : ie - t * 4],
                                Re = [q + t + 1, F ? ie - t / 2 : D ? ie + t * 4 : ie - t * 4];
                            return [...[
                                [D || F ? C.right - t : C.left, C.top],
                                [D ? F ? C.right - t : C.left : C.right - t, C.bottom]
                            ], Te, Re]
                        }
                    case "right":
                        {
                            const Te = [q - t, F ? ie + t / 2 : D ? ie + t * 4 : ie - t * 4],
                                Re = [q - t, F ? ie - t / 2 : D ? ie + t * 4 : ie - t * 4],
                                J = [
                                    [D || F ? C.left + t : C.right, C.top],
                                    [D ? F ? C.left + t : C.right : C.left + t, C.bottom]
                                ];
                            return [Te, Re, ...J]
                        }
                }
            }
            if (!pp([E, R], K)) {
                if (i && !N) return k();
                if (!T && n) {
                    const ee = u(x.clientX, x.clientY);
                    if (ee !== null && ee < .1) return k()
                }
                pp([E, R], re([f, h])) ? !i && n && (o = window.setTimeout(k, 40)) : k()
            }
        }
    };
    return d.__options = {
        blockPointerEvents: r
    }, d
}
const gS = ({
        arrowRef: e,
        placement: t
    }) => {
        const r = [];
        return r.push($k(8)), r.push(t === "auto" ? i2() : l2()), r.push(a2({
            padding: 8
        })), e != null && e.current && r.push(u2({
            element: e.current
        })), r
    },
    hS = ({
        placement: e
    }) => e === "auto" ? void 0 : e,
    mS = ({
        placement: e
    }) => ({
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    })[e.split("-")[0]],
    Mm = ({
        open: e,
        arrowRef: t,
        placement: r = "top",
        setOpen: n
    }) => Pm({
        placement: hS({
            placement: r
        }),
        open: e,
        onOpenChange: n,
        whileElementsMounted: pm,
        middleware: gS({
            placement: r,
            arrowRef: t
        })
    }),
    Rm = ({
        context: e,
        trigger: t,
        role: r = "tooltip",
        interactions: n = []
    }) => Nm([Tm(e, {
        enabled: t === "click"
    }), Q2(e, {
        enabled: t === "hover",
        handleClose: pS()
    }), jm(e), _m(e, {
        role: r
    }), ...n]),
    Lm = w.createContext(void 0);

function id() {
    const e = w.useContext(Lm);
    if (!e) throw new Error("useDropdownContext should be used within the DropdownContext provider!");
    return e
}
const ad = ({
        className: e,
        theme: t = {},
        ...r
    }) => {
        const {
            theme: n
        } = id(), o = t.divider ? ? n.floating.divider;
        return g.jsx("div", {
            className: z(o, e),
            ...r
        })
    },
    zm = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = id(), i = r.header ? ? o.floating.header;
        return g.jsxs(g.Fragment, {
            children: [g.jsx("div", {
                className: z(i, t),
                ...n,
                children: e
            }), g.jsx(ad, {})]
        })
    },
    yS = ({
        children: e,
        className: t,
        icon: r,
        onClick: n,
        theme: o = {},
        ...i
    }) => {
        const {
            ref: a,
            index: l
        } = F2({
            label: typeof e == "string" ? e : void 0
        }), {
            theme: s,
            activeIndex: u,
            dismissOnClick: d,
            getItemProps: c,
            handleSelect: f
        } = id(), h = u === l, m = U(s.floating.item, o), v = i;
        return g.jsx("li", {
            role: "menuitem",
            className: m.container,
            children: g.jsxs(Wh, {
                ref: a,
                className: z(m.base, t),
                ...v,
                ...c({
                    onClick: () => {
                        n && n(), d && f(null)
                    }
                }),
                tabIndex: h ? 0 : -1,
                children: [r && g.jsx(r, {
                    className: m.icon
                }), e]
            })
        })
    },
    vS = {
        top: Qx,
        right: Ch,
        bottom: Eh,
        left: Vx
    },
    bS = ({
        refs: e,
        children: t,
        inline: r,
        theme: n,
        disabled: o,
        setButtonWidth: i,
        getReferenceProps: a,
        renderTrigger: l,
        ...s
    }) => {
        const u = e.reference,
            d = a();
        if (w.useEffect(() => {
                u.current && (i == null || i(u.current.clientWidth))
            }, [u, i]), l) {
            const c = l(n);
            return w.cloneElement(c, {
                ref: e.setReference,
                disabled: o,
                ...d,
                ...c.props
            })
        }
        return r ? g.jsx("button", {
            type: "button",
            ref: e.setReference,
            className: n == null ? void 0 : n.inlineWrapper,
            disabled: o,
            ...d,
            children: t
        }) : g.jsx(Qh, { ...s,
            disabled: o,
            type: "button",
            ref: e.setReference,
            ...d,
            children: t
        })
    },
    Im = ({
        children: e,
        className: t,
        dismissOnClick: r = !0,
        theme: n = {},
        renderTrigger: o,
        ...i
    }) => {
        const [a, l] = w.useState(!1), [s, u] = w.useState(null), [d, c] = w.useState(null), [f, h] = w.useState(void 0), m = w.useRef([]), v = w.useRef([]), S = U(Z().dropdown, n), y = i, p = i["data-testid"] || "flowbite-dropdown-target", {
            placement: b = i.inline ? "bottom-start" : "bottom",
            trigger: x = "click",
            label: k,
            inline: E,
            arrowIcon: R = !0,
            ...L
        } = y, j = w.useCallback(F => {
            c(F), l(!1)
        }, []), T = w.useCallback(F => {
            a ? u(F) : j(F)
        }, [a, j]), {
            context: _,
            floatingStyles: O,
            refs: P
        } = Mm({
            open: a,
            setOpen: l,
            placement: b
        }), C = uS(_, {
            listRef: m,
            activeIndex: s,
            selectedIndex: d,
            onNavigate: u
        }), M = dS(_, {
            listRef: v,
            activeIndex: s,
            selectedIndex: d,
            onMatch: T
        }), {
            getReferenceProps: I,
            getFloatingProps: D,
            getItemProps: N
        } = Rm({
            context: _,
            role: "menu",
            trigger: x,
            interactions: [C, M]
        }), A = w.useMemo(() => {
            const [F] = b.split("-");
            return vS[F] ? ? Eh
        }, [b]);
        return g.jsxs(Lm.Provider, {
            value: {
                theme: S,
                activeIndex: s,
                dismissOnClick: r,
                getItemProps: N,
                handleSelect: j
            },
            children: [g.jsxs(bS, { ...L,
                refs: P,
                inline: E,
                theme: S,
                "data-testid": p,
                className: z(S.floating.target, L.className),
                setButtonWidth: h,
                getReferenceProps: I,
                renderTrigger: o,
                children: [k, R && g.jsx(A, {
                    className: S.arrowIcon
                })]
            }), a && g.jsx(Om, {
                context: _,
                modal: !1,
                children: g.jsx("div", {
                    ref: P.setFloating,
                    style: { ...O,
                        minWidth: f
                    },
                    "data-testid": "flowbite-dropdown",
                    "aria-expanded": a,
                    ...D({
                        className: z(S.floating.base, S.floating.animation, "duration-100", !a && S.floating.hidden, S.floating.style.auto, t)
                    }),
                    children: g.jsx(D2, {
                        elementsRef: m,
                        labelsRef: v,
                        children: g.jsx("ul", {
                            className: S.content,
                            tabIndex: -1,
                            children: e
                        })
                    })
                })
            })]
        })
    };
Im.displayName = "Dropdown";
zm.displayName = "Dropdown.Header";
ad.displayName = "Dropdown.Divider";
Object.assign(Im, {
    Item: yS,
    Header: zm,
    Divider: ad
});
const xS = w.forwardRef(({
    className: e,
    color: t = "gray",
    helperText: r,
    sizing: n = "md",
    theme: o = {},
    ...i
}, a) => {
    const l = U(Z().fileInput, o);
    return g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: z(l.root.base, e),
            children: g.jsx("div", {
                className: l.field.base,
                children: g.jsx("input", {
                    className: z(l.field.input.base, l.field.input.colors[t], l.field.input.sizes[n]),
                    ...i,
                    type: "file",
                    ref: a
                })
            })
        }), r && g.jsx(li, {
            color: t,
            children: r
        })]
    })
});
xS.displayName = "FileInput";
const wS = w.forwardRef(({
    label: e,
    helperText: t,
    color: r = "default",
    sizing: n = "md",
    variant: o,
    disabled: i = !1,
    theme: a = {},
    className: l,
    ...s
}, u) => {
    const d = w.useId(),
        c = U(Z().floatingLabel, a);
    return g.jsxs("div", {
        children: [g.jsxs("div", {
            className: z("relative", o === "standard" ? "z-0" : ""),
            children: [g.jsx("input", {
                type: "text",
                id: s.id ? s.id : "floatingLabel" + d,
                "aria-describedby": "outlined_success_help",
                className: z(c.input[r][o][n], l),
                placeholder: " ",
                "data-testid": "floating-label",
                disabled: i,
                ...s,
                ref: u
            }), g.jsx("label", {
                htmlFor: s.id ? s.id : "floatingLabel" + d,
                className: z(c.label[r][o][n], l),
                children: e
            })]
        }), g.jsx("p", {
            id: "outlined_helper_text" + d,
            className: z(c.helperText[r], l),
            children: t
        })]
    })
});
wS.displayName = "FloatingLabel";
const Am = ({
        alt: e,
        className: t,
        children: r,
        href: n,
        name: o,
        src: i,
        theme: a = {},
        ...l
    }) => {
        const s = U(Z().footer.brand, a);
        return g.jsx("div", {
            children: n ? g.jsxs("a", {
                "data-testid": "flowbite-footer-brand",
                href: n,
                className: z(s.base, t),
                ...l,
                children: [g.jsx("img", {
                    alt: e,
                    src: i,
                    className: s.img
                }), g.jsx("span", {
                    "data-testid": "flowbite-footer-brand-span",
                    className: s.span,
                    children: o
                }), r]
            }) : g.jsx("img", {
                alt: e,
                "data-testid": "flowbite-footer-brand",
                src: i,
                className: z(s.img, t),
                ...l
            })
        })
    },
    Dm = ({
        by: e,
        className: t,
        href: r,
        theme: n = {},
        year: o,
        ...i
    }) => {
        const a = U(Z().footer.copyright, n);
        return g.jsxs("div", {
            "data-testid": "flowbite-footer-copyright",
            className: z(a.base, t),
            ...i,
            children: ["© ", o, r ? g.jsx("a", {
                href: r,
                className: a.href,
                children: e
            }) : g.jsx("span", {
                "data-testid": "flowbite-footer-copyright-span",
                className: a.span,
                children: e
            })]
        })
    },
    Fm = ({
        className: e,
        theme: t = {},
        ...r
    }) => {
        const n = U(Z().footer.divider, t);
        return g.jsx("hr", {
            "data-testid": "footer-divider",
            className: z(n.base, e),
            ...r
        })
    },
    Hm = ({
        ariaLabel: e,
        className: t,
        href: r,
        icon: n,
        theme: o = {},
        ...i
    }) => {
        const a = U(Z().footer.icon, o);
        return g.jsx("div", {
            children: r ? g.jsx("a", {
                "aria-label": e,
                "data-testid": "flowbite-footer-icon",
                href: r,
                className: z(a.base, t),
                ...i,
                children: g.jsx(n, {
                    className: a.size
                })
            }) : g.jsx(n, {
                "data-testid": "flowbite-footer-icon",
                className: a.size,
                ...i
            })
        })
    },
    $m = ({
        as: e = "a",
        children: t,
        className: r,
        href: n,
        theme: o = {},
        ...i
    }) => {
        const a = U(Z().footer.groupLink.link, o);
        return g.jsx("li", {
            className: z(a.base, r),
            children: g.jsx(e, {
                href: n,
                className: a.href,
                ...i,
                children: t
            })
        })
    },
    Bm = ({
        children: e,
        className: t,
        col: r = !1,
        theme: n = {},
        ...o
    }) => {
        const i = U(Z().footer.groupLink, n);
        return g.jsx("ul", {
            "data-testid": "footer-groupLink",
            className: z(i.base, r && i.col, t),
            ...o,
            children: e
        })
    },
    Wm = ({
        as: e = "h2",
        className: t,
        theme: r = {},
        title: n,
        ...o
    }) => {
        const i = U(Z().footer.title, r);
        return g.jsx(e, {
            "data-testid": "flowbite-footer-title",
            className: z(i.base, t),
            ...o,
            children: n
        })
    },
    Um = ({
        bgDark: e = !1,
        children: t,
        className: r,
        container: n = !1,
        theme: o = {},
        ...i
    }) => {
        const a = U(Z().footer, o);
        return g.jsx("footer", {
            "data-testid": "flowbite-footer",
            className: z(a.root.base, e && a.root.bgDark, n && a.root.container, r),
            ...i,
            children: t
        })
    };
Um.displayName = "Footer";
Dm.displayName = "Footer.Copyright";
$m.displayName = "Footer.Link";
Am.displayName = "Footer.Brand";
Bm.displayName = "Footer.LinkGroup";
Hm.displayName = "Footer.Icon";
Wm.displayName = "Footer.Title";
Fm.displayName = "Footer.Divider";
Object.assign(Um, {
    Copyright: Dm,
    Link: $m,
    LinkGroup: Bm,
    Brand: Am,
    Icon: Hm,
    Title: Wm,
    Divider: Fm
});
const Vm = ({
        children: e,
        className: t,
        theme: r = {}
    }) => {
        const n = U(Z().listGroup.item, r);
        return g.jsx("li", {
            className: z(n.base, t),
            children: e
        })
    },
    Qm = ({
        children: e,
        className: t,
        unstyled: r,
        nested: n,
        ordered: o,
        horizontal: i,
        theme: a = {},
        ...l
    }) => {
        const s = U(Z().list, a),
            u = o ? "ol" : "ul";
        return g.jsx(u, {
            className: z(s.root.base, s.root.ordered[o ? "on" : "off"], r && s.root.unstyled, n && s.root.nested, i && s.root.horizontal, t),
            ...l,
            children: e
        })
    };
Qm.displayName = "List";
Vm.displayName = "List.Item";
Object.assign(Qm, {
    Item: Vm
});
const Gm = ({
        active: e,
        children: t,
        className: r,
        href: n,
        icon: o,
        onClick: i,
        theme: a = {},
        disabled: l,
        ...s
    }) => {
        const u = U(Z().listGroup.item, a),
            d = typeof n < "u",
            c = d ? "a" : "button";
        return g.jsx("li", {
            className: z(u.base, r),
            children: g.jsxs(c, {
                href: n,
                onClick: i,
                type: d ? void 0 : "button",
                disabled: l,
                className: z(u.link.active[e ? "on" : "off"], u.link.disabled[l ? "on" : "off"], u.link.base, u.link.href[d ? "on" : "off"]),
                ...s,
                children: [o && g.jsx(o, {
                    "aria-hidden": !0,
                    "data-testid": "flowbite-list-group-item-icon",
                    className: u.link.icon
                }), t]
            })
        })
    },
    Km = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const o = U(Z().listGroup, r);
        return g.jsx("ul", {
            className: z(o.root.base, t),
            ...n,
            children: e
        })
    };
Km.displayName = "ListGroup";
Gm.displayName = "ListGroup.Item";
Object.assign(Km, {
    Item: Gm
});
const Ym = w.createContext(void 0);

function ld() {
    const e = w.useContext(Ym);
    if (!e) throw new Error("useModalContext should be used within the ModalContext provider!");
    return e
}
const qm = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            popup: i
        } = ld(), a = U(o.body, r);
        return g.jsx("div", {
            className: z(a.base, i && [a.popup], t),
            ...n,
            children: e
        })
    },
    Xm = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            popup: i
        } = ld(), a = U(o.footer, r);
        return g.jsx("div", {
            className: z(a.base, !i && a.popup, t),
            ...n,
            children: e
        })
    },
    Zm = ({
        as: e = "h3",
        children: t,
        className: r,
        theme: n = {},
        id: o,
        ...i
    }) => {
        const a = w.useId(),
            l = o || a,
            {
                theme: s,
                popup: u,
                onClose: d,
                setHeaderId: c
            } = ld(),
            f = U(s.header, n);
        return w.useLayoutEffect(() => (c(l), () => c(void 0)), [l, c]), g.jsxs("div", {
            className: z(f.base, u && f.popup, r),
            ...i,
            children: [g.jsx(e, {
                id: l,
                className: f.title,
                children: t
            }), g.jsx("button", {
                "aria-label": "Close",
                className: f.close.base,
                type: "button",
                onClick: d,
                children: g.jsx(Gx, {
                    "aria-hidden": !0,
                    className: f.close.icon
                })
            })]
        })
    },
    Jm = w.forwardRef(({
        children: e,
        className: t,
        dismissible: r = !1,
        onClose: n,
        popup: o,
        position: i = "center",
        root: a,
        show: l,
        size: s = "2xl",
        theme: u = {},
        initialFocus: d,
        ...c
    }, f) => {
        const [h, m] = w.useState(void 0), v = U(Z().modal, u), {
            context: S
        } = Pm({
            open: l,
            onOpenChange: () => n && n()
        }), y = P2([S.refs.setFloating, f]), p = Tm(S), b = jm(S, {
            outsidePressEvent: "mousedown",
            enabled: r
        }), x = _m(S), {
            getFloatingProps: k
        } = Nm([p, b, x]);
        return l ? g.jsx(Ym.Provider, {
            value: {
                theme: v,
                popup: o,
                onClose: n,
                setHeaderId: m
            },
            children: g.jsx(rS, {
                root: a,
                children: g.jsx(oS, {
                    lockScroll: !0,
                    "data-testid": "modal-overlay",
                    className: z(v.root.base, v.root.positions[i], l ? v.root.show.on : v.root.show.off, t),
                    ...c,
                    children: g.jsx(Om, {
                        context: S,
                        initialFocus: d,
                        children: g.jsx("div", {
                            ref: y,
                            ...k(c),
                            "aria-labelledby": h,
                            className: z(v.content.base, v.root.sizes[s]),
                            children: g.jsx("div", {
                                className: v.content.inner,
                                children: e
                            })
                        })
                    })
                })
            })
        }) : null
    });
Jm.displayName = "Modal";
Zm.displayName = "Modal.Header";
qm.displayName = "Modal.Body";
Xm.displayName = "Modal.Footer";
Object.assign(Jm, {
    Header: Zm,
    Body: qm,
    Footer: Xm
});
const ey = w.createContext(void 0);

function Tl() {
    const e = w.useContext(ey);
    if (!e) throw new Error("useNavBarContext should be used within the NavbarContext provider!");
    return e
}
const ty = ({
        as: e = "a",
        children: t,
        className: r,
        theme: n = {},
        ...o
    }) => {
        const {
            theme: i
        } = Tl(), a = U(i.brand, n);
        return g.jsx(e, {
            className: z(a.base, r),
            ...o,
            children: t
        })
    },
    ry = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            isOpen: i
        } = Tl(), a = U(o.collapse, r);
        return g.jsx("div", {
            "data-testid": "flowbite-navbar-collapse",
            className: z(a.base, a.hidden[i ? "off" : "on"], t),
            ...n,
            children: g.jsx("ul", {
                className: a.list,
                children: e
            })
        })
    },
    ny = ({
        active: e,
        as: t = "a",
        disabled: r,
        children: n,
        className: o,
        theme: i = {},
        ...a
    }) => {
        const {
            theme: l
        } = Tl(), s = U(l.link, i);
        return g.jsx("li", {
            children: g.jsx(t, {
                className: z(s.base, e && s.active.on, !e && !r && s.active.off, s.disabled[r ? "on" : "off"], o),
                ...a,
                children: n
            })
        })
    };

function kS(e) {
    return Mt({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            }
        }]
    })(e)
}
const oy = ({
        barIcon: e = kS,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            isOpen: i,
            setIsOpen: a
        } = Tl(), l = U(o.toggle, r), s = () => {
            a(!i)
        };
        return g.jsxs("button", {
            "data-testid": "flowbite-navbar-toggle",
            onClick: s,
            className: z(l.base, t),
            ...n,
            children: [g.jsx("span", {
                className: "sr-only",
                children: "Open main menu"
            }), g.jsx(e, {
                "aria-hidden": !0,
                className: l.icon
            })]
        })
    },
    iy = ({
        border: e,
        children: t,
        className: r,
        fluid: n = !1,
        menuOpen: o,
        rounded: i,
        theme: a = {},
        ...l
    }) => {
        const [s, u] = w.useState(o), d = U(Z().navbar, a);
        return g.jsx(ey.Provider, {
            value: {
                theme: d,
                isOpen: s,
                setIsOpen: u
            },
            children: g.jsx("nav", {
                className: z(d.root.base, d.root.bordered[e ? "on" : "off"], d.root.rounded[i ? "on" : "off"], r),
                ...l,
                children: g.jsx("div", {
                    className: z(d.root.inner.base, d.root.inner.fluid[n ? "on" : "off"]),
                    children: t
                })
            })
        })
    };
iy.displayName = "Navbar";
ty.displayName = "Navbar.Brand";
ry.displayName = "Navbar.Collapse";
ny.displayName = "Navbar.Link";
oy.displayName = "Navbar.Toggle";
Object.assign(iy, {
    Brand: ty,
    Collapse: ry,
    Link: ny,
    Toggle: oy
});
const sd = ({
    active: e,
    children: t,
    className: r,
    onClick: n,
    theme: o = {},
    ...i
}) => {
    const a = U(Z().pagination, o);
    return g.jsx("button", {
        type: "button",
        className: z(e && a.pages.selector.active, r),
        onClick: n,
        ...i,
        children: t
    })
};
sd.displayName = "Pagination.Button";
const Iu = ({
    children: e,
    className: t,
    onClick: r,
    theme: n = {},
    disabled: o = !1,
    ...i
}) => {
    const a = U(Z().pagination, n);
    return g.jsx("button", {
        type: "button",
        className: z(o && a.pages.selector.disabled, t),
        disabled: o,
        onClick: r,
        ...i,
        children: e
    })
};
Iu.displayName = "Pagination.Navigation";
const SS = (e, t) => e >= t ? [] : [...Array(t - e + 1).keys()].map(r => r + e),
    ay = ({
        className: e,
        currentPage: t,
        layout: r = "pagination",
        nextLabel: n = "Next",
        onPageChange: o,
        previousLabel: i = "Previous",
        renderPaginationButton: a = c => g.jsx(sd, { ...c
        }),
        showIcons: l = !1,
        theme: s = {},
        totalPages: u,
        ...d
    }) => {
        const c = U(Z().pagination, s),
            f = Math.min(Math.max(r === "pagination" ? t + 2 : t + 4, 5), u),
            h = Math.max(1, f - 4),
            m = () => {
                o(Math.min(t + 1, u))
            },
            v = () => {
                o(Math.max(t - 1, 1))
            };
        return g.jsxs("nav", {
            className: z(c.base, e),
            ...d,
            children: [r === "table" && g.jsxs("div", {
                className: c.layout.table.base,
                children: ["Showing ", g.jsx("span", {
                    className: c.layout.table.span,
                    children: h
                }), " to ", g.jsx("span", {
                    className: c.layout.table.span,
                    children: f
                }), " of ", g.jsx("span", {
                    className: c.layout.table.span,
                    children: u
                }), " Entries"]
            }), g.jsxs("ul", {
                className: c.pages.base,
                children: [g.jsx("li", {
                    children: g.jsxs(Iu, {
                        className: z(c.pages.previous.base, l && c.pages.showIcon),
                        onClick: v,
                        disabled: t === 1,
                        children: [l && g.jsx($x, {
                            "aria-hidden": !0,
                            className: c.pages.previous.icon
                        }), i]
                    })
                }), r === "pagination" && SS(h, f).map(S => g.jsx("li", {
                    "aria-current": S === t ? "page" : void 0,
                    children: a({
                        className: z(c.pages.selector.base, t === S && c.pages.selector.active),
                        active: S === t,
                        onClick: () => o(S),
                        children: S
                    })
                }, S)), g.jsx("li", {
                    children: g.jsxs(Iu, {
                        className: z(c.pages.next.base, l && c.pages.showIcon),
                        onClick: m,
                        disabled: t === u,
                        children: [n, l && g.jsx(Bx, {
                            "aria-hidden": !0,
                            className: c.pages.next.icon
                        })]
                    })
                })]
            })]
        })
    };
ay.displayName = "Pagination";
Object.assign(ay, {
    Button: sd
});
const ES = w.forwardRef(({
    className: e,
    theme: t = {},
    ...r
}, n) => {
    const o = U(Z().radio, t);
    return g.jsx("input", {
        ref: n,
        type: "radio",
        className: z(o.root.base, e),
        ...r
    })
});
ES.displayName = "Radio";
const CS = w.forwardRef(({
    className: e,
    sizing: t = "md",
    theme: r = {},
    ...n
}, o) => {
    const i = U(Z().rangeSlider, r);
    return g.jsx(g.Fragment, {
        children: g.jsx("div", {
            "data-testid": "flowbite-range-slider",
            className: z(i.root.base, e),
            children: g.jsx("div", {
                className: i.field.base,
                children: g.jsx("input", {
                    ref: o,
                    type: "range",
                    className: z(i.field.input.base, i.field.input.sizes[t]),
                    ...n
                })
            })
        })
    })
});
CS.displayName = "RangeSlider";
const ly = ({
        children: e,
        className: t,
        percentFilled: r = 0,
        theme: n = {},
        ...o
    }) => {
        const i = U(Z().ratingAdvanced, n);
        return g.jsxs("div", {
            className: z(i.base, t),
            ...o,
            children: [g.jsx("span", {
                className: i.label,
                children: e
            }), g.jsx("div", {
                className: i.progress.base,
                children: g.jsx("div", {
                    className: i.progress.fill,
                    "data-testid": "flowbite-rating-fill",
                    style: {
                        width: `${r}%`
                    }
                })
            }), g.jsx("span", {
                className: i.progress.label,
                children: `${r}%`
            })]
        })
    },
    sy = w.createContext(void 0);

function OS() {
    const e = w.useContext(sy);
    if (!e) throw new Error("useRatingContext should be used within the RatingContext provider!");
    return e
}
const uy = ({
        className: e,
        filled: t = !0,
        starIcon: r = Wx,
        theme: n = {},
        ...o
    }) => {
        const {
            theme: i,
            size: a = "sm"
        } = OS(), l = U(i.star, n);
        return g.jsx(r, {
            "data-testid": "flowbite-rating-star",
            className: z(l.sizes[a], l[t ? "filled" : "empty"], e),
            ...o
        })
    },
    cy = ({
        children: e,
        className: t,
        size: r = "sm",
        theme: n = {},
        ...o
    }) => {
        const i = U(Z().rating, n);
        return g.jsx(sy.Provider, {
            value: {
                theme: i,
                size: r
            },
            children: g.jsx("div", {
                className: z(i.root.base, t),
                ...o,
                children: e
            })
        })
    };
cy.displayName = "Rating";
uy.displayName = "Rating.Star";
ly.displayName = "Rating.Advanced";
Object.assign(cy, {
    Star: uy,
    Advanced: ly
});
const TS = w.forwardRef(({
    addon: e,
    children: t,
    className: r,
    color: n = "gray",
    helperText: o,
    icon: i,
    shadow: a,
    sizing: l = "md",
    theme: s = {},
    ...u
}, d) => {
    const c = U(Z().select, s);
    return g.jsxs("div", {
        className: z(c.base, r),
        children: [e && g.jsx("span", {
            className: c.addon,
            children: e
        }), g.jsxs("div", {
            className: c.field.base,
            children: [i && g.jsx("div", {
                className: c.field.icon.base,
                children: g.jsx(i, {
                    className: c.field.icon.svg
                })
            }), g.jsx("select", {
                className: z(c.field.select.base, c.field.select.colors[n], c.field.select.sizes[l], c.field.select.withIcon[i ? "on" : "off"], c.field.select.withAddon[e ? "on" : "off"], c.field.select.withShadow[a ? "on" : "off"]),
                ...u,
                ref: d,
                children: t
            }), o && g.jsx(li, {
                color: n,
                children: o
            })]
        })]
    })
});
TS.displayName = "Select";
const dy = w.createContext(void 0);

function ao() {
    const e = w.useContext(dy);
    if (!e) throw new Error("useSidebarContext should be used within the SidebarContext provider!");
    return e
}
const fy = ({
    children: e,
    color: t = "info",
    className: r,
    theme: n = {},
    ...o
}) => {
    const {
        theme: i,
        isCollapsed: a
    } = ao(), l = U(i.cta, n);
    return g.jsx("div", {
        "data-testid": "sidebar-cta",
        hidden: a,
        className: z(l.base, l.color[t], r),
        ...o,
        children: e
    })
};
fy.displayName = "Sidebar.CTA";
const jS = ({
        animation: e = "duration-300",
        arrow: t = !0,
        children: r,
        className: n,
        content: o,
        placement: i = "top",
        style: a = "dark",
        theme: l,
        trigger: s = "hover",
        minWidth: u,
        ...d
    }) => {
        const c = w.useRef(null),
            [f, h] = w.useState(!1),
            m = Mm({
                open: f,
                placement: i,
                arrowRef: c,
                setOpen: h
            }),
            {
                context: v,
                middlewareData: {
                    arrow: {
                        x: S,
                        y
                    } = {}
                },
                refs: p,
                strategy: b,
                update: x,
                x: k,
                y: E
            } = m,
            R = lS(v),
            {
                getFloatingProps: L,
                getReferenceProps: j
            } = Rm({
                context: v,
                role: "tooltip",
                trigger: s,
                interactions: [R]
            });
        return w.useEffect(() => {
            if (p.reference.current && p.floating.current && f) return pm(p.reference.current, p.floating.current, x)
        }, [f, p.floating, p.reference, x]), g.jsxs(g.Fragment, {
            children: [g.jsx("div", {
                ref: p.setReference,
                className: l.target,
                "data-testid": "flowbite-tooltip-target",
                ...j(),
                children: r
            }), g.jsxs("div", {
                ref: p.setFloating,
                "data-testid": "flowbite-tooltip",
                ...L({
                    className: z(l.base, e && `${l.animation} ${e}`, !f && l.hidden, l.style[a], n),
                    style: {
                        position: b,
                        top: E ? ? " ",
                        left: k ? ? " ",
                        minWidth: u
                    },
                    ...d
                }),
                children: [g.jsx("div", {
                    className: l.content,
                    children: o
                }), t && g.jsx("div", {
                    className: z(l.arrow.base, a === "dark" && l.arrow.style.dark, a === "light" && l.arrow.style.light, a === "auto" && l.arrow.style.auto),
                    "data-testid": "flowbite-tooltip-arrow",
                    ref: c,
                    style: {
                        top: y ? ? " ",
                        left: S ? ? " ",
                        right: " ",
                        bottom: " ",
                        [mS({
                            placement: m.placement
                        })]: l.arrow.placement
                    },
                    children: " "
                })]
            })]
        })
    },
    ud = ({
        animation: e = "duration-300",
        arrow: t = !0,
        children: r,
        className: n,
        content: o,
        placement: i = "top",
        style: a = "dark",
        theme: l = {},
        trigger: s = "hover",
        ...u
    }) => {
        const d = U(Z().tooltip, l);
        return g.jsx(jS, {
            animation: e,
            arrow: t,
            content: o,
            placement: i,
            style: a,
            theme: d,
            trigger: s,
            className: n,
            ...u,
            children: r
        })
    };
ud.displayName = "Tooltip";
const cd = w.createContext(void 0);

function PS() {
    const e = w.useContext(cd);
    if (!e) throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
    return e
}
const py = ({
    children: e,
    className: t,
    icon: r,
    label: n,
    chevronIcon: o = Sh,
    renderChevronIcon: i,
    open: a = !1,
    theme: l = {},
    ...s
}) => {
    const u = w.useId(),
        [d, c] = w.useState(a),
        {
            theme: f,
            isCollapsed: h
        } = ao(),
        m = U(f.collapse, l);
    w.useEffect(() => c(a), [a]);
    const v = ({
        children: S
    }) => g.jsx("li", {
        children: h && !d ? g.jsx(ud, {
            content: n,
            placement: "right",
            children: S
        }) : S
    });
    return g.jsxs(v, {
        children: [g.jsxs("button", {
            id: `flowbite-sidebar-collapse-${u}`,
            onClick: () => c(!d),
            title: n,
            type: "button",
            className: z(m.button, t),
            ...s,
            children: [r && g.jsx(r, {
                "aria-hidden": !0,
                "data-testid": "flowbite-sidebar-collapse-icon",
                className: z(m.icon.base, m.icon.open[d ? "on" : "off"])
            }), h ? g.jsx("span", {
                className: "sr-only",
                children: n
            }) : g.jsxs(g.Fragment, {
                children: [g.jsx("span", {
                    "data-testid": "flowbite-sidebar-collapse-label",
                    className: m.label.base,
                    children: n
                }), i ? i(m, d) : g.jsx(o, {
                    "aria-hidden": !0,
                    className: z(m.label.icon.base, m.label.icon.open[d ? "on" : "off"])
                })]
            })]
        }), g.jsx("ul", {
            "aria-labelledby": `flowbite-sidebar-collapse-${u}`,
            hidden: !d,
            className: m.list,
            children: g.jsx(cd.Provider, {
                value: {
                    isInsideCollapse: !0
                },
                children: e
            })
        })]
    })
};
py.displayName = "Sidebar.Collapse";
const NS = ({
        id: e,
        theme: t,
        isCollapsed: r,
        tooltipChildren: n,
        children: o,
        ...i
    }) => g.jsx("li", { ...i,
        children: r ? g.jsx(ud, {
            content: g.jsx(gy, {
                id: e,
                theme: t,
                children: n
            }),
            placement: "right",
            children: o
        }) : o
    }),
    gy = ({
        id: e,
        theme: t,
        children: r
    }) => g.jsx("span", {
        "data-testid": "flowbite-sidebar-item-content",
        id: `flowbite-sidebar-item-${e}`,
        className: z(t.content.base),
        children: r
    }),
    hy = w.forwardRef(({
        active: e,
        as: t = "a",
        children: r,
        className: n,
        icon: o,
        label: i,
        labelColor: a = "info",
        theme: l = {},
        ...s
    }, u) => {
        var v, S, y, p;
        const d = w.useId(),
            {
                theme: c,
                isCollapsed: f
            } = ao(),
            {
                isInsideCollapse: h
            } = PS(),
            m = U(c.item, l);
        return g.jsx(NS, {
            theme: m,
            className: m.listItem,
            id: d,
            isCollapsed: f,
            tooltipChildren: r,
            children: g.jsxs(t, {
                "aria-labelledby": `flowbite-sidebar-item-${d}`,
                ref: u,
                className: z(m.base, e && m.active, !f && h && ((v = m.collapsed) == null ? void 0 : v.insideCollapse), n),
                ...s,
                children: [o && g.jsx(o, {
                    "aria-hidden": !0,
                    "data-testid": "flowbite-sidebar-item-icon",
                    className: z((S = m.icon) == null ? void 0 : S.base, e && ((y = m.icon) == null ? void 0 : y.active))
                }), f && !o && g.jsx("span", {
                    className: (p = m.collapsed) == null ? void 0 : p.noIcon,
                    children: r.charAt(0).toLocaleUpperCase() ? ? "?"
                }), !f && g.jsx(gy, {
                    id: d,
                    theme: m,
                    children: r
                }), !f && i && g.jsx(Hh, {
                    color: a,
                    "data-testid": "flowbite-sidebar-label",
                    hidden: f,
                    className: m.label,
                    children: i
                })]
            })
        })
    });
hy.displayName = "Sidebar.Item";
const my = ({
    children: e,
    className: t,
    theme: r = {},
    ...n
}) => {
    const {
        theme: o
    } = ao(), i = U(o.itemGroup, r);
    return g.jsx("ul", {
        "data-testid": "flowbite-sidebar-item-group",
        className: z(i.base, t),
        ...n,
        children: g.jsx(cd.Provider, {
            value: {
                isInsideCollapse: !1
            },
            children: e
        })
    })
};
my.displayName = "Sidebar.ItemGroup";
const yy = ({
    children: e,
    className: t,
    theme: r = {},
    ...n
}) => {
    const {
        theme: o
    } = ao(), i = U(o.items, r);
    return g.jsx("div", {
        className: z(i.base, t),
        "data-testid": "flowbite-sidebar-items",
        ...n,
        children: e
    })
};
yy.displayName = "Sidebar.Items";
const vy = ({
    children: e,
    className: t,
    href: r,
    img: n,
    imgAlt: o = "",
    theme: i = {},
    ...a
}) => {
    const l = w.useId(),
        {
            theme: s,
            isCollapsed: u
        } = ao(),
        d = U(s.logo, i);
    return g.jsxs("a", {
        "aria-labelledby": `flowbite-sidebar-logo-${l}`,
        href: r,
        className: z(d.base, t),
        ...a,
        children: [g.jsx("img", {
            alt: o,
            src: n,
            className: d.img
        }), g.jsx("span", {
            className: d.collapsed[u ? "on" : "off"],
            id: `flowbite-sidebar-logo-${l}`,
            children: e
        })]
    })
};
vy.displayName = "Sidebar.Logo";
const by = ({
    children: e,
    as: t = "nav",
    collapseBehavior: r = "collapse",
    collapsed: n = !1,
    theme: o = {},
    className: i,
    ...a
}) => {
    const l = U(Z().sidebar, o);
    return g.jsx(dy.Provider, {
        value: {
            theme: l,
            isCollapsed: n
        },
        children: g.jsx(t, {
            "aria-label": "Sidebar",
            hidden: n && r === "hide",
            className: z(l.root.base, l.root.collapsed[n ? "on" : "off"], i),
            ...a,
            children: g.jsx("div", {
                className: l.root.inner,
                children: e
            })
        })
    })
};
by.displayName = "Sidebar";
Object.assign(by, {
    Collapse: py,
    CTA: fy,
    Item: hy,
    Items: yy,
    ItemGroup: my,
    Logo: vy
});
const xy = w.createContext(void 0);

function _S() {
    const e = w.useContext(xy);
    if (!e) throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
    return e
}
const wy = w.createContext(void 0);

function dd() {
    const e = w.useContext(wy);
    if (!e) throw new Error("useTableContext should be used within the TableContext provider!");
    return e
}
const ky = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = dd(), i = U(o.body, r);
        return g.jsx(xy.Provider, {
            value: {
                theme: i
            },
            children: g.jsx("tbody", {
                className: z(i.base, t),
                ...n,
                children: e
            })
        })
    },
    Sy = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = _S(), i = U(o.cell, r);
        return g.jsx("td", {
            className: z(i.base, t),
            ...n,
            children: e
        })
    },
    Ey = w.createContext(void 0);

function MS() {
    const e = w.useContext(Ey);
    if (!e) throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
    return e
}
const Cy = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = dd(), i = U(o.head, r);
        return g.jsx(Ey.Provider, {
            value: {
                theme: i
            },
            children: g.jsx("thead", {
                className: z(i.base, t),
                ...n,
                children: g.jsx("tr", {
                    children: e
                })
            })
        })
    },
    Oy = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = MS(), i = U(o.cell, r);
        return g.jsx("th", {
            className: z(i.base, t),
            ...n,
            children: e
        })
    },
    Ty = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            hoverable: i,
            striped: a
        } = dd(), l = U(o.row, r);
        return g.jsx("tr", {
            "data-testid": "table-row-element",
            className: z(l.base, a && l.striped, i && l.hovered, t),
            ...n,
            children: e
        })
    },
    jy = ({
        children: e,
        className: t,
        striped: r,
        hoverable: n,
        theme: o = {},
        ...i
    }) => {
        const a = U(Z().table, o);
        return g.jsx("div", {
            "data-testid": "table-element",
            className: z(a.root.wrapper),
            children: g.jsxs(wy.Provider, {
                value: {
                    theme: a,
                    striped: r,
                    hoverable: n
                },
                children: [g.jsx("div", {
                    className: z(a.root.shadow, t)
                }), g.jsx("table", {
                    className: z(a.root.base, t),
                    ...i,
                    children: e
                })]
            })
        })
    };
jy.displayName = "Table";
Cy.displayName = "Table.Head";
ky.displayName = "Table.Body";
Ty.displayName = "Table.Row";
Sy.displayName = "Table.Cell";
Oy.displayName = "Table.HeadCell";
Object.assign(jy, {
    Head: Cy,
    Body: ky,
    Row: Ty,
    Cell: Sy,
    HeadCell: Oy
});
const Py = ({
    children: e,
    className: t
}) => g.jsx("div", {
    className: t,
    children: e
});
Py.displayName = "Tabs.Item";
const Ny = w.forwardRef(({
    children: e,
    className: t,
    onActiveTabChange: r,
    style: n = "default",
    theme: o = {},
    ...i
}, a) => {
    const l = U(Z().tabs, o),
        s = w.useId(),
        u = w.useMemo(() => w.Children.map(w.Children.toArray(e), ({
            props: x
        }) => x), [e]),
        d = w.useRef([]),
        [c, f] = w.useState(Math.max(0, u.findIndex(x => x.active))),
        [h, m] = w.useState(-1),
        v = x => {
            f(x), r && r(x)
        },
        S = ({
            target: x
        }) => {
            v(x), m(x)
        },
        y = ({
            event: x,
            target: k
        }) => {
            x.key === "ArrowLeft" && m(Math.max(0, h - 1)), x.key === "ArrowRight" && m(Math.min(u.length - 1, h + 1)), x.key === "Enter" && (v(k), m(k))
        },
        p = l.tablist.tabitem.styles[n],
        b = l.tabitemcontainer.styles[n];
    return w.useEffect(() => {
        var x;
        (x = d.current[h]) == null || x.focus()
    }, [h]), w.useImperativeHandle(a, () => ({
        setActiveTab: v
    })), g.jsxs("div", {
        className: z(l.base, t),
        children: [g.jsx("div", {
            "aria-label": "Tabs",
            role: "tablist",
            className: z(l.tablist.base, l.tablist.styles[n], t),
            ...i,
            children: u.map((x, k) => g.jsxs("button", {
                type: "button",
                "aria-controls": `${s}-tabpanel-${k}`,
                "aria-selected": k === c,
                className: z(l.tablist.tabitem.base, p.base, k === c && p.active.on, k !== c && !x.disabled && p.active.off),
                disabled: x.disabled,
                id: `${s}-tab-${k}`,
                onClick: () => S({
                    target: k
                }),
                onKeyDown: E => y({
                    event: E,
                    target: k
                }),
                ref: E => d.current[k] = E,
                role: "tab",
                tabIndex: k === h ? 0 : -1,
                style: {
                    zIndex: k === h ? 2 : 1
                },
                children: [x.icon && g.jsx(x.icon, {
                    className: l.tablist.tabitem.icon
                }), x.title]
            }, k))
        }), g.jsx("div", {
            className: z(l.tabitemcontainer.base, b),
            children: u.map((x, k) => g.jsx("div", {
                "aria-labelledby": `${s}-tab-${k}`,
                className: l.tabpanel,
                hidden: k !== c,
                id: `${s}-tabpanel-${k}`,
                role: "tabpanel",
                tabIndex: 0,
                children: x.children
            }, k))
        })]
    })
});
Ny.displayName = "Tabs";
Object.assign(Ny, {
    Item: Py
});
const RS = w.forwardRef(({
    className: e,
    color: t = "gray",
    helperText: r,
    shadow: n,
    theme: o = {},
    ...i
}, a) => {
    const l = U(Z().textarea, o);
    return g.jsxs(g.Fragment, {
        children: [g.jsx("textarea", {
            ref: a,
            className: z(l.base, l.colors[t], l.withShadow[n ? "on" : "off"], e),
            ...i
        }), r && g.jsx(li, {
            color: t,
            children: r
        })]
    })
});
RS.displayName = "Textarea";
const _y = w.createContext(void 0);

function fd() {
    const e = w.useContext(_y);
    if (!e) throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
    return e
}
const My = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = fd(), i = U(o.body, r);
        return g.jsx("div", {
            className: z(i.base, t),
            ...n,
            children: e
        })
    },
    Ry = w.createContext(void 0);

function pd() {
    const e = w.useContext(Ry);
    if (!e) throw new Error("useTimelineContext should be used within the TimelineContext provider!");
    return e
}
const Ly = w.createContext(void 0);

function zy() {
    const e = w.useContext(Ly);
    if (!e) throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
    return e
}
const Iy = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            horizontal: o
        } = pd(), {
            theme: i
        } = zy(), a = U(i.content, r);
        return g.jsx(_y.Provider, {
            value: {
                theme: a
            },
            children: g.jsx("div", {
                "data-testid": "timeline-content",
                className: z(o && a.root.base, t),
                ...n,
                children: e
            })
        })
    },
    Ay = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o,
            horizontal: i
        } = pd(), a = U(o.item, r);
        return g.jsx(Ly.Provider, {
            value: {
                theme: a
            },
            children: g.jsx("li", {
                "data-testid": "timeline-item",
                className: z(i && a.root.horizontal, !i && a.root.vertical, t),
                ...n,
                children: e
            })
        })
    },
    Dy = ({
        children: e,
        className: t,
        icon: r,
        theme: n = {},
        ...o
    }) => {
        const {
            horizontal: i
        } = pd(), {
            theme: a
        } = zy(), l = U(a.point, n);
        return g.jsxs("div", {
            "data-testid": "timeline-point",
            className: z(i && l.horizontal, !i && l.vertical, t),
            ...o,
            children: [e, r ? g.jsx("span", {
                className: z(l.marker.icon.wrapper),
                children: g.jsx(r, {
                    "aria-hidden": !0,
                    className: z(l.marker.icon.base)
                })
            }) : g.jsx("div", {
                className: z(i && l.marker.base.horizontal, !i && l.marker.base.vertical)
            }), i && g.jsx("div", {
                className: z(l.line)
            })]
        })
    },
    Fy = ({
        children: e,
        className: t,
        theme: r = {},
        ...n
    }) => {
        const {
            theme: o
        } = fd(), i = U(o.time, r);
        return g.jsx("time", {
            className: z(i.base, t),
            ...n,
            children: e
        })
    },
    Hy = ({
        as: e = "h3",
        children: t,
        className: r,
        theme: n = {},
        ...o
    }) => {
        const {
            theme: i
        } = fd(), a = U(i.title, n);
        return g.jsx(e, {
            className: z(a.base, r),
            ...o,
            children: t
        })
    },
    $y = ({
        children: e,
        className: t,
        horizontal: r,
        theme: n = {},
        ...o
    }) => {
        const i = U(Z().timeline, n);
        return g.jsx(Ry.Provider, {
            value: {
                theme: i,
                horizontal: r
            },
            children: g.jsx("ol", {
                "data-testid": "timeline-component",
                className: z(r && i.root.direction.horizontal, !r && i.root.direction.vertical, t),
                ...o,
                children: e
            })
        })
    };
$y.displayName = "Timeline";
Ay.displayName = "Timeline.Item";
Dy.displayName = "Timeline.Point";
Iy.displayName = "Timeline.Content";
Fy.displayName = "Timeline.Time";
Hy.displayName = "Timeline.Title";
My.displayName = "Timeline.Body";
Object.assign($y, {
    Item: Ay,
    Point: Dy,
    Content: Iy,
    Time: Fy,
    Title: Hy,
    Body: My
});
const By = w.createContext(void 0);

function LS() {
    const e = w.useContext(By);
    if (!e) throw new Error("useToastContext should be used within the ToastContext provider!");
    return e
}
const Wy = ({
        className: e,
        onClick: t,
        theme: r = {},
        xIcon: n = Ux,
        onDismiss: o,
        ...i
    }) => {
        const {
            theme: a,
            duration: l,
            isClosed: s,
            isRemoved: u,
            setIsClosed: d,
            setIsRemoved: c
        } = LS(), f = U(a.toggle, r), h = m => {
            if (t && t(m), o) {
                o();
                return
            }
            d(!s), setTimeout(() => c(!u), l)
        };
        return g.jsx("button", {
            "aria-label": "Close",
            onClick: h,
            type: "button",
            className: z(f.base, e),
            ...i,
            children: g.jsx(n, {
                "aria-hidden": !0,
                className: f.icon
            })
        })
    },
    zS = {
        75: "duration-75",
        100: "duration-100",
        150: "duration-150",
        200: "duration-200",
        300: "duration-300",
        500: "duration-500",
        700: "duration-700",
        1e3: "duration-1000"
    },
    Uy = ({
        children: e,
        className: t,
        duration: r = 300,
        theme: n = {},
        ...o
    }) => {
        const [i, a] = w.useState(!1), [l, s] = w.useState(!1), u = U(Z().toast, n);
        return l ? null : g.jsx(By.Provider, {
            value: {
                theme: u,
                duration: r,
                isClosed: i,
                isRemoved: l,
                setIsClosed: a,
                setIsRemoved: s
            },
            children: g.jsx("div", {
                "data-testid": "flowbite-toast",
                role: "alert",
                className: z(u.root.base, zS[r], i && u.root.closed, t),
                ...o,
                children: e
            })
        })
    };
Uy.displayName = "Toast";
Wy.displayName = "Toast.Toggle";
Object.assign(Uy, {
    Toggle: Wy
});
const IS = "/assets/faq1-PDifZ0Ym.jpg",
    AS = "/assets/faq2-CznYXDVP.jpg",
    DS = "/assets/faq3-Bm9NxWkZ.jpg",
    FS = "/assets/faq4-BmJx93zU.jpg",
    HS = () => {
        w.useEffect(() => {
            pn.init({
                offset: 200,
                duration: 800,
                easing: "ease-in-sine",
                delay: 100
            })
        }, []);
        const {
            darkMode: e,
            toggleDarkMode: t
        } = gn();
        return g.jsxs("section", {
            id: "faq",
            className: `${e?"dark bg-black":"light bg-white"} w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-14`,
            children: [g.jsxs("div", {
                id: "left",
                className: "flex flex-col justify-center items-center gap-12",
                children: [g.jsx("h1", {
                    "data-aos": "zoom-in",
                    className: "text-6xl text-black font-bold text-center dark:text-white",
                    children: "Frequently Asked Questions"
                }), g.jsx("div", {
                    "data-aos": "slide-up",
                    className: "w-full",
                    children: g.jsxs(Le, {
                        className: "flex flex-col justify-center items-center gap-2",
                        children: [g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "What are your opening hours?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: "We're open seven days a week! Our operating hours are from 11:00 AM to 10:00 PM, Monday through Sunday."
                                })
                            })]
                        }), g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "Do you offer delivery services?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: "Yes, we provide delivery within a 5-mile radius. There's a $3 delivery fee, and orders over $30 qualify for free delivery."
                                })
                            })]
                        }), g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "Can I place an order online?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: "We accept all major credit cards, cash upon delivery, and popular online payment platforms like PayPal."
                                })
                            })]
                        }), g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "Do you have gluten-free or vegan pizza options?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: "Yes, we offer both gluten-free crust and vegan cheese options. You can customize your pizza to suit your dietary preferences."
                                })
                            })]
                        }), g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "How can I customize my pizza?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: "You can fully customize your pizza by choosing from a variety of crusts, sauces, cheeses, and toppings. Create the perfect pizza for your taste!"
                                })
                            })]
                        }), g.jsxs(Le.Panel, {
                            children: [g.jsx(Le.Title, {
                                className: "border-none text-black text-lg",
                                children: "Are there any current promotions or discounts?"
                            }), g.jsx(Le.Content, {
                                children: g.jsx("p", {
                                    className: "mb-2 text-gray-500 dark:text-gray-400",
                                    children: 'Check out our "Specials" page on the website for the latest promotions and discounts. We also have exclusive deals for our newsletter subscribers.'
                                })
                            })]
                        })]
                    })
                }), g.jsx("button", {
                    "data-aos": "flip-up",
                    className: "bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
                    children: "CONTACT US"
                })]
            }), g.jsxs("div", {
                id: "right",
                className: "grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4",
                children: [g.jsx("img", {
                    "data-aos": "zoom-in",
                    src: IS,
                    alt: "",
                    className: "w-[400px] h-[400px] rounded-xl"
                }), g.jsx("img", {
                    "data-aos": "zoom-in",
                    src: AS,
                    alt: "",
                    className: "w-[400px] h-[400px] rounded-xl"
                }), g.jsx("img", {
                    "data-aos": "zoom-in",
                    src: DS,
                    alt: "",
                    className: "w-[400px] h-[400px] rounded-xl"
                }), g.jsx("img", {
                    "data-aos": "zoom-in",
                    src: FS,
                    alt: "",
                    className: "w-[400px] h-[400px] rounded-xl"
                })]
            })]
        })
    },
    $S = "/assets/contact1-DA9MydCi.jpg";
var Vy = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    gp = De.createContext && De.createContext(Vy),
    BS = ["attr", "size", "title"];

function WS(e, t) {
    if (e == null) return {};
    var r = US(e, t),
        n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function US(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}

function Ua() {
    return Ua = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Ua.apply(this, arguments)
}

function hp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Va(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? hp(Object(r), !0).forEach(function(n) {
            VS(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function VS(e, t, r) {
    return t = QS(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function QS(e) {
    var t = GS(e, "string");
    return typeof t == "symbol" ? t : String(t)
}

function GS(e, t) {
    if (typeof e != "object" || e === null) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Qy(e) {
    return e && e.map((t, r) => De.createElement(t.tag, Va({
        key: r
    }, t.attr), Qy(t.child)))
}

function Xe(e) {
    return t => De.createElement(KS, Ua({
        attr: Va({}, e.attr)
    }, t), Qy(e.child))
}

function KS(e) {
    var t = r => {
        var {
            attr: n,
            size: o,
            title: i
        } = e, a = WS(e, BS), l = o || r.size || "1em", s;
        return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), De.createElement("svg", Ua({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, n, a, {
            className: s,
            style: Va(Va({
                color: e.color || r.color
            }, r.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && De.createElement("title", null, i), e.children)
    };
    return gp !== void 0 ? De.createElement(gp.Consumer, null, r => t(r)) : t(Vy)
}

function YS(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            },
            child: []
        }]
    })(e)
}

function qS(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            },
            child: []
        }]
    })(e)
}

function XS(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 384 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            },
            child: []
        }]
    })(e)
}

function ZS(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
            },
            child: []
        }]
    })(e)
}

function JS(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 320 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            },
            child: []
        }]
    })(e)
}

function e4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(e)
}

function t4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            },
            child: []
        }]
    })(e)
}

function r4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            },
            child: []
        }]
    })(e)
}

function n4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
            },
            child: []
        }]
    })(e)
}

function o4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            },
            child: []
        }]
    })(e)
}

function i4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
            },
            child: []
        }]
    })(e)
}

function a4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
            },
            child: []
        }]
    })(e)
}

function l4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            },
            child: []
        }]
    })(e)
}

function s4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 576 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
            },
            child: []
        }]
    })(e)
}

function u4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
            },
            child: []
        }]
    })(e)
}
const c4 = () => {
    w.useEffect(() => {
        pn.init({
            offset: 200,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100
        })
    }, []);
    const {
        darkMode: e,
        toggleDarkMode: t
    } = gn();
    return g.jsx("section", {
        id: "contact",
        className: `${e?"dark bg-slate-900":"light bg-black"} w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center bg-cover bg-center`,
        style: {
            backgroundImage: `url(${$S})`
        },
        children: g.jsxs("div", {
            className: "lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10",
            children: [g.jsxs("div", {
                "data-aos": "zoom-in",
                "data-aos-delay": "200",
                className: "bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500",
                children: [g.jsx("div", {
                    id: "icon-box",
                    className: "p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300",
                    children: g.jsx(qS, {
                        className: "w-[35px] h-[35px]"
                    })
                }), g.jsx("h1", {
                    className: "text-2xl text-black dark:text-white font-bold",
                    children: "REACH US"
                }), g.jsx("p", {
                    className: "text-center text-lg dark:text-white text-slate-800",
                    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, assumenda?"
                }), g.jsx("button", {
                    className: "bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold",
                    children: "OPEN MAP"
                })]
            }), g.jsxs("div", {
                "data-aos": "zoom-in",
                "data-aos-delay": "400",
                className: "bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500",
                children: [g.jsx("div", {
                    id: "icon-box",
                    className: "p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300",
                    children: g.jsx(ZS, {
                        className: "w-[35px] h-[35px]"
                    })
                }), g.jsx("h1", {
                    className: "text-2xl text-black dark:text-white font-bold",
                    children: "EMAIL US"
                }), g.jsx("p", {
                    className: "text-center text-lg text-slate-800 dark:text-white",
                    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, assumenda?"
                }), g.jsx("button", {
                    className: "bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold",
                    children: "demo@gmail.com"
                })]
            }), g.jsxs("div", {
                "data-aos": "zoom-in",
                "data-aos-delay": "600",
                className: "bg-white dark:bg-gray-800 p-8 rounded-xl flex flex-col jusitfy-center items-center gap-4 border-l-[10px] border-orange-500",
                children: [g.jsx("div", {
                    id: "icon-box",
                    className: "p-5 rounded-full bg-black hover:bg-orange-500 dark:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300",
                    children: g.jsx(a4, {
                        className: "w-[35px] h-[35px]"
                    })
                }), g.jsx("h1", {
                    className: "text-2xl text-black dark:text-white font-bold",
                    children: "CALL US"
                }), g.jsx("p", {
                    className: "text-center text-lg text-slate-800 dark:text-white",
                    children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, assumenda?"
                }), g.jsx("button", {
                    className: "bg-orange-500 hover:bg-black text-white rounded-full px-6 py-3 font-bold",
                    children: "+91 890 879 9087"
                })]
            })]
        })
    })
};

function d4(e) {
    return Xe({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z"
            },
            child: []
        }]
    })(e)
}
var je = {},
    gd = {},
    di = {},
    fi = {},
    Gy = "Expected a function",
    mp = NaN,
    f4 = "[object Symbol]",
    p4 = /^\s+|\s+$/g,
    g4 = /^[-+]0x[0-9a-f]+$/i,
    h4 = /^0b[01]+$/i,
    m4 = /^0o[0-7]+$/i,
    y4 = parseInt,
    v4 = typeof Zt == "object" && Zt && Zt.Object === Object && Zt,
    b4 = typeof self == "object" && self && self.Object === Object && self,
    x4 = v4 || b4 || Function("return this")(),
    w4 = Object.prototype,
    k4 = w4.toString,
    S4 = Math.max,
    E4 = Math.min,
    ks = function() {
        return x4.Date.now()
    };

function C4(e, t, r) {
    var n, o, i, a, l, s, u = 0,
        d = !1,
        c = !1,
        f = !0;
    if (typeof e != "function") throw new TypeError(Gy);
    t = yp(t) || 0, Qa(r) && (d = !!r.leading, c = "maxWait" in r, i = c ? S4(yp(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);

    function h(E) {
        var R = n,
            L = o;
        return n = o = void 0, u = E, a = e.apply(L, R), a
    }

    function m(E) {
        return u = E, l = setTimeout(y, t), d ? h(E) : a
    }

    function v(E) {
        var R = E - s,
            L = E - u,
            j = t - R;
        return c ? E4(j, i - L) : j
    }

    function S(E) {
        var R = E - s,
            L = E - u;
        return s === void 0 || R >= t || R < 0 || c && L >= i
    }

    function y() {
        var E = ks();
        if (S(E)) return p(E);
        l = setTimeout(y, v(E))
    }

    function p(E) {
        return l = void 0, f && n ? h(E) : (n = o = void 0, a)
    }

    function b() {
        l !== void 0 && clearTimeout(l), u = 0, n = s = o = l = void 0
    }

    function x() {
        return l === void 0 ? a : p(ks())
    }

    function k() {
        var E = ks(),
            R = S(E);
        if (n = arguments, o = this, s = E, R) {
            if (l === void 0) return m(s);
            if (c) return l = setTimeout(y, t), h(s)
        }
        return l === void 0 && (l = setTimeout(y, t)), a
    }
    return k.cancel = b, k.flush = x, k
}

function O4(e, t, r) {
    var n = !0,
        o = !0;
    if (typeof e != "function") throw new TypeError(Gy);
    return Qa(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), C4(e, t, {
        leading: n,
        maxWait: t,
        trailing: o
    })
}

function Qa(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}

function T4(e) {
    return !!e && typeof e == "object"
}

function j4(e) {
    return typeof e == "symbol" || T4(e) && k4.call(e) == f4
}

function yp(e) {
    if (typeof e == "number") return e;
    if (j4(e)) return mp;
    if (Qa(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Qa(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(p4, "");
    var r = h4.test(e);
    return r || m4.test(e) ? y4(e.slice(2), r ? 2 : 8) : g4.test(e) ? mp : +e
}
var P4 = O4,
    pi = {};
Object.defineProperty(pi, "__esModule", {
    value: !0
});
pi.addPassiveEventListener = function(t, r, n) {
    var o = n.name;
    o || (o = r, console.warn("Listener must be a named function.")), ua.has(r) || ua.set(r, new Set);
    var i = ua.get(r);
    if (!i.has(o)) {
        var a = function() {
            var l = !1;
            try {
                var s = Object.defineProperty({}, "passive", {
                    get: function() {
                        l = !0
                    }
                });
                window.addEventListener("test", null, s)
            } catch {}
            return l
        }();
        t.addEventListener(r, n, a ? {
            passive: !0
        } : !1), i.add(o)
    }
};
pi.removePassiveEventListener = function(t, r, n) {
    t.removeEventListener(r, n), ua.get(r).delete(n.name || r)
};
var ua = new Map;
Object.defineProperty(fi, "__esModule", {
    value: !0
});
var N4 = P4,
    _4 = R4(N4),
    M4 = pi;

function R4(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var L4 = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
        return (0, _4.default)(t, r)
    },
    ke = {
        spyCallbacks: [],
        spySetState: [],
        scrollSpyContainers: [],
        mount: function(t, r) {
            if (t) {
                var n = L4(function(o) {
                    ke.scrollHandler(t)
                }, r);
                ke.scrollSpyContainers.push(t), (0, M4.addPassiveEventListener)(t, "scroll", n)
            }
        },
        isMounted: function(t) {
            return ke.scrollSpyContainers.indexOf(t) !== -1
        },
        currentPositionX: function(t) {
            if (t === document) {
                var r = window.pageYOffset !== void 0,
                    n = (document.compatMode || "") === "CSS1Compat";
                return r ? window.pageXOffset : n ? document.documentElement.scrollLeft : document.body.scrollLeft
            } else return t.scrollLeft
        },
        currentPositionY: function(t) {
            if (t === document) {
                var r = window.pageXOffset !== void 0,
                    n = (document.compatMode || "") === "CSS1Compat";
                return r ? window.pageYOffset : n ? document.documentElement.scrollTop : document.body.scrollTop
            } else return t.scrollTop
        },
        scrollHandler: function(t) {
            var r = ke.scrollSpyContainers[ke.scrollSpyContainers.indexOf(t)].spyCallbacks || [];
            r.forEach(function(n) {
                return n(ke.currentPositionX(t), ke.currentPositionY(t))
            })
        },
        addStateHandler: function(t) {
            ke.spySetState.push(t)
        },
        addSpyHandler: function(t, r) {
            var n = ke.scrollSpyContainers[ke.scrollSpyContainers.indexOf(r)];
            n.spyCallbacks || (n.spyCallbacks = []), n.spyCallbacks.push(t), t(ke.currentPositionX(r), ke.currentPositionY(r))
        },
        updateStates: function() {
            ke.spySetState.forEach(function(t) {
                return t()
            })
        },
        unmount: function(t, r) {
            ke.scrollSpyContainers.forEach(function(n) {
                return n.spyCallbacks && n.spyCallbacks.length && n.spyCallbacks.indexOf(r) > -1 && n.spyCallbacks.splice(n.spyCallbacks.indexOf(r), 1)
            }), ke.spySetState && ke.spySetState.length && ke.spySetState.indexOf(t) > -1 && ke.spySetState.splice(ke.spySetState.indexOf(t), 1), document.removeEventListener("scroll", ke.scrollHandler)
        },
        update: function() {
            return ke.scrollSpyContainers.forEach(function(t) {
                return ke.scrollHandler(t)
            })
        }
    };
fi.default = ke;
var lo = {},
    gi = {};
Object.defineProperty(gi, "__esModule", {
    value: !0
});
var z4 = function(t, r) {
        var n = t.indexOf("#") === 0 ? t.substring(1) : t,
            o = n ? "#" + n : "",
            i = window && window.location,
            a = o ? i.pathname + i.search + o : i.pathname + i.search;
        r ? history.pushState(history.state, "", a) : history.replaceState(history.state, "", a)
    },
    I4 = function() {
        return window.location.hash.replace(/^#/, "")
    },
    A4 = function(t) {
        return function(r) {
            return t.contains ? t != r && t.contains(r) : !!(t.compareDocumentPosition(r) & 16)
        }
    },
    D4 = function(t) {
        return getComputedStyle(t).position !== "static"
    },
    Ss = function(t, r) {
        for (var n = t.offsetTop, o = t.offsetParent; o && !r(o);) n += o.offsetTop, o = o.offsetParent;
        return {
            offsetTop: n,
            offsetParent: o
        }
    },
    F4 = function(t, r, n) {
        if (n) return t === document ? r.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(t).position !== "static" ? r.offsetLeft : r.offsetLeft - t.offsetLeft;
        if (t === document) return r.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
        if (D4(t)) {
            if (r.offsetParent !== t) {
                var o = function(d) {
                        return d === t || d === document
                    },
                    i = Ss(r, o),
                    a = i.offsetTop,
                    l = i.offsetParent;
                if (l !== t) throw new Error("Seems containerElement is not an ancestor of the Element");
                return a
            }
            return r.offsetTop
        }
        if (r.offsetParent === t.offsetParent) return r.offsetTop - t.offsetTop;
        var s = function(d) {
            return d === document
        };
        return Ss(r, s).offsetTop - Ss(t, s).offsetTop
    };
gi.default = {
    updateHash: z4,
    getHash: I4,
    filterElementInContainer: A4,
    scrollOffset: F4
};
var jl = {},
    hd = {};
Object.defineProperty(hd, "__esModule", {
    value: !0
});
hd.default = {
    defaultEasing: function(t) {
        return t < .5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2
    },
    linear: function(t) {
        return t
    },
    easeInQuad: function(t) {
        return t * t
    },
    easeOutQuad: function(t) {
        return t * (2 - t)
    },
    easeInOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    easeInCubic: function(t) {
        return t * t * t
    },
    easeOutCubic: function(t) {
        return --t * t * t + 1
    },
    easeInOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    easeInQuart: function(t) {
        return t * t * t * t
    },
    easeOutQuart: function(t) {
        return 1 - --t * t * t * t
    },
    easeInOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    easeInQuint: function(t) {
        return t * t * t * t * t
    },
    easeOutQuint: function(t) {
        return 1 + --t * t * t * t * t
    },
    easeInOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
};
var md = {};
Object.defineProperty(md, "__esModule", {
    value: !0
});
var H4 = pi,
    $4 = ["mousedown", "mousewheel", "touchmove", "keydown"];
md.default = {
    subscribe: function(t) {
        return typeof document < "u" && $4.forEach(function(r) {
            return (0, H4.addPassiveEventListener)(document, r, t)
        })
    }
};
var hi = {};
Object.defineProperty(hi, "__esModule", {
    value: !0
});
var Au = {
    registered: {},
    scrollEvent: {
        register: function(t, r) {
            Au.registered[t] = r
        },
        remove: function(t) {
            Au.registered[t] = null
        }
    }
};
hi.default = Au;
Object.defineProperty(jl, "__esModule", {
    value: !0
});
var B4 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    W4 = gi;
Pl(W4);
var U4 = hd,
    vp = Pl(U4),
    V4 = md,
    Q4 = Pl(V4),
    G4 = hi,
    Ft = Pl(G4);

function Pl(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Ky = function(t) {
        return vp.default[t.smooth] || vp.default.defaultEasing
    },
    K4 = function(t) {
        return typeof t == "function" ? t : function() {
            return t
        }
    },
    Y4 = function() {
        if (typeof window < "u") return window.requestAnimationFrame || window.webkitRequestAnimationFrame
    },
    Du = function() {
        return Y4() || function(e, t, r) {
            window.setTimeout(e, r || 1e3 / 60, new Date().getTime())
        }
    }(),
    Yy = function() {
        return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null
        }
    },
    qy = function(t) {
        var r = t.data.containerElement;
        if (r && r !== document && r !== document.body) return r.scrollLeft;
        var n = window.pageXOffset !== void 0,
            o = (document.compatMode || "") === "CSS1Compat";
        return n ? window.pageXOffset : o ? document.documentElement.scrollLeft : document.body.scrollLeft
    },
    Xy = function(t) {
        var r = t.data.containerElement;
        if (r && r !== document && r !== document.body) return r.scrollTop;
        var n = window.pageXOffset !== void 0,
            o = (document.compatMode || "") === "CSS1Compat";
        return n ? window.pageYOffset : o ? document.documentElement.scrollTop : document.body.scrollTop
    },
    q4 = function(t) {
        var r = t.data.containerElement;
        if (r && r !== document && r !== document.body) return r.scrollWidth - r.offsetWidth;
        var n = document.body,
            o = document.documentElement;
        return Math.max(n.scrollWidth, n.offsetWidth, o.clientWidth, o.scrollWidth, o.offsetWidth)
    },
    X4 = function(t) {
        var r = t.data.containerElement;
        if (r && r !== document && r !== document.body) return r.scrollHeight - r.offsetHeight;
        var n = document.body,
            o = document.documentElement;
        return Math.max(n.scrollHeight, n.offsetHeight, o.clientHeight, o.scrollHeight, o.offsetHeight)
    },
    Z4 = function e(t, r, n) {
        var o = r.data;
        if (!r.ignoreCancelEvents && o.cancel) {
            Ft.default.registered.end && Ft.default.registered.end(o.to, o.target, o.currentPositionY);
            return
        }
        if (o.delta = Math.round(o.targetPosition - o.startPosition), o.start === null && (o.start = n), o.progress = n - o.start, o.percent = o.progress >= o.duration ? 1 : t(o.progress / o.duration), o.currentPosition = o.startPosition + Math.ceil(o.delta * o.percent), o.containerElement && o.containerElement !== document && o.containerElement !== document.body ? r.horizontal ? o.containerElement.scrollLeft = o.currentPosition : o.containerElement.scrollTop = o.currentPosition : r.horizontal ? window.scrollTo(o.currentPosition, 0) : window.scrollTo(0, o.currentPosition), o.percent < 1) {
            var i = e.bind(null, t, r);
            Du.call(window, i);
            return
        }
        Ft.default.registered.end && Ft.default.registered.end(o.to, o.target, o.currentPosition)
    },
    yd = function(t) {
        t.data.containerElement = t ? t.containerId ? document.getElementById(t.containerId) : t.container && t.container.nodeType ? t.container : document : null
    },
    mi = function(t, r, n, o) {
        r.data = r.data || Yy(), window.clearTimeout(r.data.delayTimeout);
        var i = function() {
            r.data.cancel = !0
        };
        if (Q4.default.subscribe(i), yd(r), r.data.start = null, r.data.cancel = !1, r.data.startPosition = r.horizontal ? qy(r) : Xy(r), r.data.targetPosition = r.absolute ? t : t + r.data.startPosition, r.data.startPosition === r.data.targetPosition) {
            Ft.default.registered.end && Ft.default.registered.end(r.data.to, r.data.target, r.data.currentPosition);
            return
        }
        r.data.delta = Math.round(r.data.targetPosition - r.data.startPosition), r.data.duration = K4(r.duration)(r.data.delta), r.data.duration = isNaN(parseFloat(r.data.duration)) ? 1e3 : parseFloat(r.data.duration), r.data.to = n, r.data.target = o;
        var a = Ky(r),
            l = Z4.bind(null, a, r);
        if (r && r.delay > 0) {
            r.data.delayTimeout = window.setTimeout(function() {
                Ft.default.registered.begin && Ft.default.registered.begin(r.data.to, r.data.target), Du.call(window, l)
            }, r.delay);
            return
        }
        Ft.default.registered.begin && Ft.default.registered.begin(r.data.to, r.data.target), Du.call(window, l)
    },
    Nl = function(t) {
        return t = B4({}, t), t.data = t.data || Yy(), t.absolute = !0, t
    },
    J4 = function(t) {
        mi(0, Nl(t))
    },
    e5 = function(t, r) {
        mi(t, Nl(r))
    },
    t5 = function(t) {
        t = Nl(t), yd(t), mi(t.horizontal ? q4(t) : X4(t), t)
    },
    r5 = function(t, r) {
        r = Nl(r), yd(r);
        var n = r.horizontal ? qy(r) : Xy(r);
        mi(t + n, r)
    };
jl.default = {
    animateTopScroll: mi,
    getAnimationType: Ky,
    scrollToTop: J4,
    scrollToBottom: t5,
    scrollTo: e5,
    scrollMore: r5
};
Object.defineProperty(lo, "__esModule", {
    value: !0
});
var n5 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    o5 = gi,
    i5 = vd(o5),
    a5 = jl,
    l5 = vd(a5),
    s5 = hi,
    Ui = vd(s5);

function vd(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Vi = {},
    bp = void 0;
lo.default = {
    unmount: function() {
        Vi = {}
    },
    register: function(t, r) {
        Vi[t] = r
    },
    unregister: function(t) {
        delete Vi[t]
    },
    get: function(t) {
        return Vi[t] || document.getElementById(t) || document.getElementsByName(t)[0] || document.getElementsByClassName(t)[0]
    },
    setActiveLink: function(t) {
        return bp = t
    },
    getActiveLink: function() {
        return bp
    },
    scrollTo: function(t, r) {
        var n = this.get(t);
        if (!n) {
            console.warn("target Element not found");
            return
        }
        r = n5({}, r, {
            absolute: !1
        });
        var o = r.containerId,
            i = r.container,
            a = void 0;
        o ? a = document.getElementById(o) : i && i.nodeType ? a = i : a = document, r.absolute = !0;
        var l = r.horizontal,
            s = i5.default.scrollOffset(a, n, l) + (r.offset || 0);
        if (!r.smooth) {
            Ui.default.registered.begin && Ui.default.registered.begin(t, n), a === document ? r.horizontal ? window.scrollTo(s, 0) : window.scrollTo(0, s) : a.scrollTop = s, Ui.default.registered.end && Ui.default.registered.end(t, n);
            return
        }
        l5.default.animateTopScroll(s, r, t, n)
    }
};
var Zy = {
        exports: {}
    },
    u5 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    c5 = u5,
    d5 = c5;

function Jy() {}

function ev() {}
ev.resetWarningCache = Jy;
var f5 = function() {
    function e(n, o, i, a, l, s) {
        if (s !== d5) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: ev,
        resetWarningCache: Jy
    };
    return r.PropTypes = r, r
};
Zy.exports = f5();
var _l = Zy.exports,
    Ml = {};
Object.defineProperty(Ml, "__esModule", {
    value: !0
});
var p5 = gi,
    Es = g5(p5);

function g5(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var h5 = {
    mountFlag: !1,
    initialized: !1,
    scroller: null,
    containers: {},
    mount: function(t) {
        this.scroller = t, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0
    },
    mapContainer: function(t, r) {
        this.containers[t] = r
    },
    isMounted: function() {
        return this.mountFlag
    },
    isInitialized: function() {
        return this.initialized
    },
    initStateFromHash: function() {
        var t = this,
            r = this.getHash();
        r ? window.setTimeout(function() {
            t.scrollTo(r, !0), t.initialized = !0
        }, 10) : this.initialized = !0
    },
    scrollTo: function(t, r) {
        var n = this.scroller,
            o = n.get(t);
        if (o && (r || t !== n.getActiveLink())) {
            var i = this.containers[t] || document;
            n.scrollTo(t, {
                container: i
            })
        }
    },
    getHash: function() {
        return Es.default.getHash()
    },
    changeHash: function(t, r) {
        this.isInitialized() && Es.default.getHash() !== t && Es.default.updateHash(t, r)
    },
    handleHashChange: function() {
        this.scrollTo(this.getHash())
    },
    unmount: function() {
        this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange)
    }
};
Ml.default = h5;
Object.defineProperty(di, "__esModule", {
    value: !0
});
var Qi = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    m5 = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    y5 = w,
    xp = yi(y5),
    v5 = fi,
    Gi = yi(v5),
    b5 = lo,
    x5 = yi(b5),
    w5 = _l,
    ve = yi(w5),
    k5 = Ml,
    hr = yi(k5);

function yi(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function S5(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function E5(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function C5(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var wp = {
    to: ve.default.string.isRequired,
    containerId: ve.default.string,
    container: ve.default.object,
    activeClass: ve.default.string,
    activeStyle: ve.default.object,
    spy: ve.default.bool,
    horizontal: ve.default.bool,
    smooth: ve.default.oneOfType([ve.default.bool, ve.default.string]),
    offset: ve.default.number,
    delay: ve.default.number,
    isDynamic: ve.default.bool,
    onClick: ve.default.func,
    duration: ve.default.oneOfType([ve.default.number, ve.default.func]),
    absolute: ve.default.bool,
    onSetActive: ve.default.func,
    onSetInactive: ve.default.func,
    ignoreCancelEvents: ve.default.bool,
    hashSpy: ve.default.bool,
    saveHashHistory: ve.default.bool,
    spyThrottle: ve.default.number
};
di.default = function(e, t) {
    var r = t || x5.default,
        n = function(i) {
            C5(a, i);

            function a(l) {
                S5(this, a);
                var s = E5(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, l));
                return o.call(s), s.state = {
                    active: !1
                }, s
            }
            return m5(a, [{
                key: "getScrollSpyContainer",
                value: function() {
                    var s = this.props.containerId,
                        u = this.props.container;
                    return s && !u ? document.getElementById(s) : u && u.nodeType ? u : document
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.spy || this.props.hashSpy) {
                        var s = this.getScrollSpyContainer();
                        Gi.default.isMounted(s) || Gi.default.mount(s, this.props.spyThrottle), this.props.hashSpy && (hr.default.isMounted() || hr.default.mount(r), hr.default.mapContainer(this.props.to, s)), Gi.default.addSpyHandler(this.spyHandler, s), this.setState({
                            container: s
                        })
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    Gi.default.unmount(this.stateHandler, this.spyHandler)
                }
            }, {
                key: "render",
                value: function() {
                    var s = "";
                    this.state && this.state.active ? s = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : s = this.props.className;
                    var u = {};
                    this.state && this.state.active ? u = Qi({}, this.props.style, this.props.activeStyle) : u = Qi({}, this.props.style);
                    var d = Qi({}, this.props);
                    for (var c in wp) d.hasOwnProperty(c) && delete d[c];
                    return d.className = s, d.style = u, d.onClick = this.handleClick, xp.default.createElement(e, d)
                }
            }]), a
        }(xp.default.PureComponent),
        o = function() {
            var a = this;
            this.scrollTo = function(l, s) {
                r.scrollTo(l, Qi({}, a.state, s))
            }, this.handleClick = function(l) {
                a.props.onClick && a.props.onClick(l), l.stopPropagation && l.stopPropagation(), l.preventDefault && l.preventDefault(), a.scrollTo(a.props.to, a.props)
            }, this.spyHandler = function(l, s) {
                var u = a.getScrollSpyContainer();
                if (!(hr.default.isMounted() && !hr.default.isInitialized())) {
                    var d = a.props.horizontal,
                        c = a.props.to,
                        f = null,
                        h = void 0,
                        m = void 0;
                    if (d) {
                        var v = 0,
                            S = 0,
                            y = 0;
                        if (u.getBoundingClientRect) {
                            var p = u.getBoundingClientRect();
                            y = p.left
                        }
                        if (!f || a.props.isDynamic) {
                            if (f = r.get(c), !f) return;
                            var b = f.getBoundingClientRect();
                            v = b.left - y + l, S = v + b.width
                        }
                        var x = l - a.props.offset;
                        h = x >= Math.floor(v) && x < Math.floor(S), m = x < Math.floor(v) || x >= Math.floor(S)
                    } else {
                        var k = 0,
                            E = 0,
                            R = 0;
                        if (u.getBoundingClientRect) {
                            var L = u.getBoundingClientRect();
                            R = L.top
                        }
                        if (!f || a.props.isDynamic) {
                            if (f = r.get(c), !f) return;
                            var j = f.getBoundingClientRect();
                            k = j.top - R + s, E = k + j.height
                        }
                        var T = s - a.props.offset;
                        h = T >= Math.floor(k) && T < Math.floor(E), m = T < Math.floor(k) || T >= Math.floor(E)
                    }
                    var _ = r.getActiveLink();
                    if (m) {
                        if (c === _ && r.setActiveLink(void 0), a.props.hashSpy && hr.default.getHash() === c) {
                            var O = a.props.saveHashHistory,
                                P = O === void 0 ? !1 : O;
                            hr.default.changeHash("", P)
                        }
                        a.props.spy && a.state.active && (a.setState({
                            active: !1
                        }), a.props.onSetInactive && a.props.onSetInactive(c, f))
                    }
                    if (h && (_ !== c || a.state.active === !1)) {
                        r.setActiveLink(c);
                        var C = a.props.saveHashHistory,
                            M = C === void 0 ? !1 : C;
                        a.props.hashSpy && hr.default.changeHash(c, M), a.props.spy && (a.setState({
                            active: !0
                        }), a.props.onSetActive && a.props.onSetActive(c, f))
                    }
                }
            }
        };
    return n.propTypes = wp, n.defaultProps = {
        offset: 0
    }, n
};
Object.defineProperty(gd, "__esModule", {
    value: !0
});
var O5 = w,
    kp = tv(O5),
    T5 = di,
    j5 = tv(T5);

function tv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function P5(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Sp(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function N5(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var _5 = function(e) {
    N5(t, e);

    function t() {
        var r, n, o, i;
        P5(this, t);
        for (var a = arguments.length, l = Array(a), s = 0; s < a; s++) l[s] = arguments[s];
        return i = (n = (o = Sp(this, (r = t.__proto__ || Object.getPrototypeOf(t)).call.apply(r, [this].concat(l))), o), o.render = function() {
            return kp.default.createElement("a", o.props, o.props.children)
        }, n), Sp(o, i)
    }
    return t
}(kp.default.Component);
gd.default = (0, j5.default)(_5);
var bd = {};
Object.defineProperty(bd, "__esModule", {
    value: !0
});
var M5 = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    R5 = w,
    Ep = rv(R5),
    L5 = di,
    z5 = rv(L5);

function rv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function I5(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function A5(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function D5(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var F5 = function(e) {
    D5(t, e);

    function t() {
        return I5(this, t), A5(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return M5(t, [{
        key: "render",
        value: function() {
            return Ep.default.createElement("button", this.props, this.props.children)
        }
    }]), t
}(Ep.default.Component);
bd.default = (0, z5.default)(F5);
var xd = {},
    Rl = {};
Object.defineProperty(Rl, "__esModule", {
    value: !0
});
var H5 = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    $5 = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    B5 = w,
    Cp = Ll(B5),
    W5 = wl;
Ll(W5);
var U5 = lo,
    Op = Ll(U5),
    V5 = _l,
    Tp = Ll(V5);

function Ll(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Q5(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function G5(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function K5(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
Rl.default = function(e) {
    var t = function(r) {
        K5(n, r);

        function n(o) {
            Q5(this, n);
            var i = G5(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o));
            return i.childBindings = {
                domNode: null
            }, i
        }
        return $5(n, [{
            key: "componentDidMount",
            value: function() {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name)
            }
        }, {
            key: "componentDidUpdate",
            value: function(i) {
                this.props.name !== i.name && this.registerElems(this.props.name)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                if (typeof window > "u") return !1;
                Op.default.unregister(this.props.name)
            }
        }, {
            key: "registerElems",
            value: function(i) {
                Op.default.register(i, this.childBindings.domNode)
            }
        }, {
            key: "render",
            value: function() {
                return Cp.default.createElement(e, H5({}, this.props, {
                    parentBindings: this.childBindings
                }))
            }
        }]), n
    }(Cp.default.Component);
    return t.propTypes = {
        name: Tp.default.string,
        id: Tp.default.string
    }, t
};
Object.defineProperty(xd, "__esModule", {
    value: !0
});
var jp = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    Y5 = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }(),
    q5 = w,
    Pp = wd(q5),
    X5 = Rl,
    Z5 = wd(X5),
    J5 = _l,
    Np = wd(J5);

function wd(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function e3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function t3(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function r3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var nv = function(e) {
    r3(t, e);

    function t() {
        return e3(this, t), t3(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    }
    return Y5(t, [{
        key: "render",
        value: function() {
            var n = this,
                o = jp({}, this.props);
            return delete o.name, o.parentBindings && delete o.parentBindings, Pp.default.createElement("div", jp({}, o, {
                ref: function(a) {
                    n.props.parentBindings.domNode = a
                }
            }), this.props.children)
        }
    }]), t
}(Pp.default.Component);
nv.propTypes = {
    name: Np.default.string,
    id: Np.default.string
};
xd.default = (0, Z5.default)(nv);
var Cs = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    },
    _p = function() {
        function e(t, r) {
            for (var n = 0; n < r.length; n++) {
                var o = r[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();

function Mp(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Rp(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}

function Lp(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var Ki = w,
    Br = fi,
    Os = lo,
    Se = _l,
    mr = Ml,
    zp = {
        to: Se.string.isRequired,
        containerId: Se.string,
        container: Se.object,
        activeClass: Se.string,
        spy: Se.bool,
        smooth: Se.oneOfType([Se.bool, Se.string]),
        offset: Se.number,
        delay: Se.number,
        isDynamic: Se.bool,
        onClick: Se.func,
        duration: Se.oneOfType([Se.number, Se.func]),
        absolute: Se.bool,
        onSetActive: Se.func,
        onSetInactive: Se.func,
        ignoreCancelEvents: Se.bool,
        hashSpy: Se.bool,
        spyThrottle: Se.number
    },
    n3 = {
        Scroll: function(t, r) {
            console.warn("Helpers.Scroll is deprecated since v1.7.0");
            var n = r || Os,
                o = function(a) {
                    Lp(l, a);

                    function l(s) {
                        Mp(this, l);
                        var u = Rp(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, s));
                        return i.call(u), u.state = {
                            active: !1
                        }, u
                    }
                    return _p(l, [{
                        key: "getScrollSpyContainer",
                        value: function() {
                            var u = this.props.containerId,
                                d = this.props.container;
                            return u ? document.getElementById(u) : d && d.nodeType ? d : document
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            if (this.props.spy || this.props.hashSpy) {
                                var u = this.getScrollSpyContainer();
                                Br.isMounted(u) || Br.mount(u, this.props.spyThrottle), this.props.hashSpy && (mr.isMounted() || mr.mount(n), mr.mapContainer(this.props.to, u)), this.props.spy && Br.addStateHandler(this.stateHandler), Br.addSpyHandler(this.spyHandler, u), this.setState({
                                    container: u
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            Br.unmount(this.stateHandler, this.spyHandler)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var u = "";
                            this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
                            var d = Cs({}, this.props);
                            for (var c in zp) d.hasOwnProperty(c) && delete d[c];
                            return d.className = u, d.onClick = this.handleClick, Ki.createElement(t, d)
                        }
                    }]), l
                }(Ki.Component),
                i = function() {
                    var l = this;
                    this.scrollTo = function(s, u) {
                        n.scrollTo(s, Cs({}, l.state, u))
                    }, this.handleClick = function(s) {
                        l.props.onClick && l.props.onClick(s), s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault(), l.scrollTo(l.props.to, l.props)
                    }, this.stateHandler = function() {
                        n.getActiveLink() !== l.props.to && (l.state !== null && l.state.active && l.props.onSetInactive && l.props.onSetInactive(), l.setState({
                            active: !1
                        }))
                    }, this.spyHandler = function(s) {
                        var u = l.getScrollSpyContainer();
                        if (!(mr.isMounted() && !mr.isInitialized())) {
                            var d = l.props.to,
                                c = null,
                                f = 0,
                                h = 0,
                                m = 0;
                            if (u.getBoundingClientRect) {
                                var v = u.getBoundingClientRect();
                                m = v.top
                            }
                            if (!c || l.props.isDynamic) {
                                if (c = n.get(d), !c) return;
                                var S = c.getBoundingClientRect();
                                f = S.top - m + s, h = f + S.height
                            }
                            var y = s - l.props.offset,
                                p = y >= Math.floor(f) && y < Math.floor(h),
                                b = y < Math.floor(f) || y >= Math.floor(h),
                                x = n.getActiveLink();
                            if (b) return d === x && n.setActiveLink(void 0), l.props.hashSpy && mr.getHash() === d && mr.changeHash(), l.props.spy && l.state.active && (l.setState({
                                active: !1
                            }), l.props.onSetInactive && l.props.onSetInactive()), Br.updateStates();
                            if (p && x !== d) return n.setActiveLink(d), l.props.hashSpy && mr.changeHash(d), l.props.spy && (l.setState({
                                active: !0
                            }), l.props.onSetActive && l.props.onSetActive(d)), Br.updateStates()
                        }
                    }
                };
            return o.propTypes = zp, o.defaultProps = {
                offset: 0
            }, o
        },
        Element: function(t) {
            console.warn("Helpers.Element is deprecated since v1.7.0");
            var r = function(n) {
                Lp(o, n);

                function o(i) {
                    Mp(this, o);
                    var a = Rp(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, i));
                    return a.childBindings = {
                        domNode: null
                    }, a
                }
                return _p(o, [{
                    key: "componentDidMount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(a) {
                        this.props.name !== a.name && this.registerElems(this.props.name)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (typeof window > "u") return !1;
                        Os.unregister(this.props.name)
                    }
                }, {
                    key: "registerElems",
                    value: function(a) {
                        Os.register(a, this.childBindings.domNode)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Ki.createElement(t, Cs({}, this.props, {
                            parentBindings: this.childBindings
                        }))
                    }
                }]), o
            }(Ki.Component);
            return r.propTypes = {
                name: Se.string,
                id: Se.string
            }, r
        }
    },
    o3 = n3;
Object.defineProperty(je, "__esModule", {
    value: !0
});
je.Helpers = je.ScrollElement = je.ScrollLink = je.animateScroll = je.scrollSpy = je.Events = je.scroller = je.Element = je.Button = Ga = je.Link = void 0;
var i3 = gd,
    ov = Gt(i3),
    a3 = bd,
    iv = Gt(a3),
    l3 = xd,
    av = Gt(l3),
    s3 = lo,
    lv = Gt(s3),
    u3 = hi,
    sv = Gt(u3),
    c3 = fi,
    uv = Gt(c3),
    d3 = jl,
    cv = Gt(d3),
    f3 = di,
    dv = Gt(f3),
    p3 = Rl,
    fv = Gt(p3),
    g3 = o3,
    pv = Gt(g3);

function Gt(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
var Ga = je.Link = ov.default;
je.Button = iv.default;
je.Element = av.default;
je.scroller = lv.default;
je.Events = sv.default;
je.scrollSpy = uv.default;
je.animateScroll = cv.default;
je.ScrollLink = dv.default;
je.ScrollElement = fv.default;
je.Helpers = pv.default;
je.default = {
    Link: ov.default,
    Button: iv.default,
    Element: av.default,
    scroller: lv.default,
    Events: sv.default,
    scrollSpy: uv.default,
    animateScroll: cv.default,
    ScrollLink: dv.default,
    ScrollElement: fv.default,
    Helpers: pv.default
};
const h3 = () => {
        w.useEffect(() => {
            pn.init({
                offset: 200,
                duration: 800,
                easing: "ease-in-sine",
                delay: 100
            })
        }, []);
        const [e, t] = w.useState(!1), {
            darkMode: r,
            toggleDarkMode: n
        } = gn(), o = () => {
            t(!e)
        }, i = () => {
            t(!1)
        }, a = [{
            link: "Home",
            path: "home"
        }, {
            link: "About",
            path: "about"
        }, {
            link: "Pizzas",
            path: "pizza"
        }, {
            link: "Faq",
            path: "faq"
        }, {
            link: "Contact",
            path: "contact"
        }];
        return g.jsxs("nav", {
            className: `${r?"dark bg-gray-800":"light bg-black"} w-full flex justify-between items-center gap-1 lg:px-16 px-6 py-6 sticky top-0 z-50`,
            children: [g.jsxs("h1", {
                className: "text-white font-bold lg:text-5xl text-3xl",
                children: ["Pizzazz ", g.jsx("span", {
                    className: "italic text-orange-500",
                    children: "Pies"
                })]
            }), g.jsx("ul", {
                className: "lg:flex justify-center items-center gap-10 hidden",
                children: a.map(({
                    link: l,
                    path: s
                }) => g.jsx(Ga, {
                    className: "text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 dark:hover:bg-white dark:hover:text-black hover:text-white dark:text-white",
                    to: s,
                    spy: !0,
                    offset: -100,
                    smooth: !0,
                    children: l
                }, s))
            }), g.jsxs("div", {
                id: "header-icons",
                className: "lg:flex hidden justify-center items-center gap-8 text-white",
                children: [g.jsx(l4, {
                    className: "w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer"
                }), g.jsx(d4, {
                    className: "w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer"
                }), g.jsx(o4, {
                    className: "w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer"
                }), g.jsxs("div", {
                    className: "relative",
                    children: [g.jsx(s4, {
                        className: "w-[22px] h-[22px] transform hover:scale-125 transition-transform duration-300 cursor-pointer"
                    }), g.jsx("div", {
                        className: "bg-orange-500 dark:bg-white dark:text-black px-3 py-1 text-white rounded-full absolute -top-[28px] -right-[20px] text-sm font-bold",
                        children: "2"
                    })]
                })]
            }), g.jsx("div", {
                className: "flex justify-center items-center lg:hidden mt-3",
                onClick: o,
                children: g.jsx("div", {
                    children: e ? g.jsx(XS, {
                        className: "text-white text-3xl cursor-pointer"
                    }) : g.jsx(YS, {
                        className: "text-white text-3xl cursor-pointer"
                    })
                })
            }), g.jsx("div", {
                className: `${e?"flex":"hidden"} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`,
                onClick: i,
                children: g.jsx("ul", {
                    className: "flex flex-col justify-center items-center gap-2 w-full",
                    children: a.map(({
                        link: l,
                        path: s
                    }) => g.jsx(Ga, {
                        className: "text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full text-center",
                        to: s,
                        spy: !0,
                        offset: -100,
                        smooth: !0,
                        children: l
                    }, s))
                })
            })]
        })
    },
    m3 = () => {
        const {
            darkMode: e,
            toggleDarkMode: t
        } = gn();
        return g.jsxs(g.Fragment, {
            children: [g.jsxs("section", {
                className: `${e?"dark bg-gray-900":"light bg-black"} w-full h-fit lg:px-20 px-10 py-10 flex flex-col justify-center items-center gap-6`,
                children: [g.jsxs("h1", {
                    className: "text-white font-bold text-5xl",
                    children: ["Pizzazz ", g.jsx("span", {
                        className: "italic text-orange-500",
                        children: "Pies"
                    })]
                }), g.jsx("p", {
                    className: "text-xl text-slate-100 text-center",
                    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, itaque!"
                }), g.jsxs("div", {
                    id: "social-icons",
                    className: "flex justify-center items-center gap-4",
                    children: [g.jsx("div", {
                        id: "icon-box",
                        className: "p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300",
                        children: g.jsx(JS, {
                            className: "w-[25px] h-[25px]"
                        })
                    }), g.jsx("div", {
                        id: "icon-box",
                        className: "p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300",
                        children: g.jsx(e4, {
                            className: "w-[25px] h-[25px]"
                        })
                    }), g.jsx("div", {
                        id: "icon-box",
                        className: "p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300",
                        children: g.jsx(t4, {
                            className: "w-[25px] h-[25px]"
                        })
                    }), g.jsx("div", {
                        id: "icon-box",
                        className: "p-3 rounded-full bg-orange-500 hover:bg-white text-white hover:text-black cursor-pointer transform hover:scale-105 transition-transform duration-300",
                        children: g.jsx(r4, {
                            className: "w-[25px] h-[25px]"
                        })
                    })]
                })]
            }), g.jsx("div", {
                children: g.jsx("button", {
                    onClick: t,
                    className: "flex items-center p-4 rounded-full bg-orange-500 fixed lg:bottom-6 left-6 bottom-6",
                    children: e ? g.jsx(i4, {
                        size: 30,
                        className: "text-black"
                    }) : g.jsx(u4, {
                        size: 30,
                        className: "text-black"
                    })
                })
            }), g.jsx("div", {
                id: "icon-box",
                className: "bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6",
                children: g.jsx(Ga, {
                    to: "hero",
                    spy: !0,
                    offset: -100,
                    smooth: !0,
                    children: g.jsx(n4, {
                        className: "w-[35px] h-[35px]"
                    })
                })
            })]
        })
    };
var gv = {},
    hv = {},
    zl = {},
    mv = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = {
        animating: !1,
        autoplaying: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        dragging: !1,
        edgeDragged: !1,
        initialized: !1,
        lazyLoadedList: [],
        listHeight: null,
        listWidth: null,
        scrolling: !1,
        slideCount: null,
        slideHeight: null,
        slideWidth: null,
        swipeLeft: null,
        swiped: !1,
        swiping: !1,
        touchObject: {
            startX: 0,
            startY: 0,
            curX: 0,
            curY: 0
        },
        trackStyle: {},
        trackWidth: 0,
        targetSlide: 0
    };
    e.default = t
})(mv);
var y3 = "Expected a function",
    Ip = NaN,
    v3 = "[object Symbol]",
    b3 = /^\s+|\s+$/g,
    x3 = /^[-+]0x[0-9a-f]+$/i,
    w3 = /^0b[01]+$/i,
    k3 = /^0o[0-7]+$/i,
    S3 = parseInt,
    E3 = typeof Zt == "object" && Zt && Zt.Object === Object && Zt,
    C3 = typeof self == "object" && self && self.Object === Object && self,
    O3 = E3 || C3 || Function("return this")(),
    T3 = Object.prototype,
    j3 = T3.toString,
    P3 = Math.max,
    N3 = Math.min,
    Ts = function() {
        return O3.Date.now()
    };

function _3(e, t, r) {
    var n, o, i, a, l, s, u = 0,
        d = !1,
        c = !1,
        f = !0;
    if (typeof e != "function") throw new TypeError(y3);
    t = Ap(t) || 0, Fu(r) && (d = !!r.leading, c = "maxWait" in r, i = c ? P3(Ap(r.maxWait) || 0, t) : i, f = "trailing" in r ? !!r.trailing : f);

    function h(E) {
        var R = n,
            L = o;
        return n = o = void 0, u = E, a = e.apply(L, R), a
    }

    function m(E) {
        return u = E, l = setTimeout(y, t), d ? h(E) : a
    }

    function v(E) {
        var R = E - s,
            L = E - u,
            j = t - R;
        return c ? N3(j, i - L) : j
    }

    function S(E) {
        var R = E - s,
            L = E - u;
        return s === void 0 || R >= t || R < 0 || c && L >= i
    }

    function y() {
        var E = Ts();
        if (S(E)) return p(E);
        l = setTimeout(y, v(E))
    }

    function p(E) {
        return l = void 0, f && n ? h(E) : (n = o = void 0, a)
    }

    function b() {
        l !== void 0 && clearTimeout(l), u = 0, n = s = o = l = void 0
    }

    function x() {
        return l === void 0 ? a : p(Ts())
    }

    function k() {
        var E = Ts(),
            R = S(E);
        if (n = arguments, o = this, s = E, R) {
            if (l === void 0) return m(s);
            if (c) return l = setTimeout(y, t), h(s)
        }
        return l === void 0 && (l = setTimeout(y, t)), a
    }
    return k.cancel = b, k.flush = x, k
}

function Fu(e) {
    var t = typeof e;
    return !!e && (t == "object" || t == "function")
}

function M3(e) {
    return !!e && typeof e == "object"
}

function R3(e) {
    return typeof e == "symbol" || M3(e) && j3.call(e) == v3
}

function Ap(e) {
    if (typeof e == "number") return e;
    if (R3(e)) return Ip;
    if (Fu(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Fu(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = e.replace(b3, "");
    var r = w3.test(e);
    return r || k3.test(e) ? S3(e.slice(2), r ? 2 : 8) : x3.test(e) ? Ip : +e
}
var L3 = _3,
    yv = {
        exports: {}
    };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function r() {
            for (var i = "", a = 0; a < arguments.length; a++) {
                var l = arguments[a];
                l && (i = o(i, n(l)))
            }
            return i
        }

        function n(i) {
            if (typeof i == "string" || typeof i == "number") return i;
            if (typeof i != "object") return "";
            if (Array.isArray(i)) return r.apply(null, i);
            if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]")) return i.toString();
            var a = "";
            for (var l in i) t.call(i, l) && i[l] && (a = o(a, l));
            return a
        }

        function o(i, a) {
            return a ? i ? i + " " + a : i + a : i
        }
        e.exports ? (r.default = r, e.exports = r) : window.classNames = r
    })()
})(yv);
var Il = yv.exports,
    W = {},
    kd = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(w);

    function r(o) {
        return o && o.__esModule ? o : {
            default: o
        }
    }
    var n = {
        accessibility: !0,
        adaptiveHeight: !1,
        afterChange: null,
        appendDots: function(i) {
            return t.default.createElement("ul", {
                style: {
                    display: "block"
                }
            }, i)
        },
        arrows: !0,
        autoplay: !1,
        autoplaySpeed: 3e3,
        beforeChange: null,
        centerMode: !1,
        centerPadding: "50px",
        className: "",
        cssEase: "ease",
        customPaging: function(i) {
            return t.default.createElement("button", null, i + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: null,
        nextArrow: null,
        onEdge: null,
        onInit: null,
        onLazyLoadError: null,
        onReInit: null,
        pauseOnDotsHover: !1,
        pauseOnFocus: !1,
        pauseOnHover: !0,
        prevArrow: null,
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "div",
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 500,
        swipe: !0,
        swipeEvent: null,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        waitForAnimate: !0,
        asNavFor: null
    };
    e.default = n
})(kd);
Object.defineProperty(W, "__esModule", {
    value: !0
});
W.checkSpecKeys = W.checkNavigable = W.changeSlide = W.canUseDOM = W.canGoNext = void 0;
W.clamp = bv;
W.extractObject = void 0;
W.filterSettings = Y3;
W.validSettings = W.swipeStart = W.swipeMove = W.swipeEnd = W.slidesOnRight = W.slidesOnLeft = W.slideHandler = W.siblingDirection = W.safePreventDefault = W.lazyStartIndex = W.lazySlidesOnRight = W.lazySlidesOnLeft = W.lazyEndIndex = W.keyHandler = W.initializedState = W.getWidth = W.getTrackLeft = W.getTrackCSS = W.getTrackAnimateCSS = W.getTotalSlides = W.getSwipeDirection = W.getSlideCount = W.getRequiredLazySlides = W.getPreClones = W.getPostClones = W.getOnDemandLazySlides = W.getNavigableIndexes = W.getHeight = void 0;
var z3 = vv(w),
    I3 = vv(kd);

function vv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function ti(e) {
    "@babel/helpers - typeof";
    return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ti(e)
}

function Dp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function be(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Dp(Object(r), !0).forEach(function(n) {
            A3(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function A3(e, t, r) {
    return t = D3(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function D3(e) {
    var t = F3(e, "string");
    return ti(t) == "symbol" ? t : String(t)
}

function F3(e, t) {
    if (ti(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (ti(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function bv(e, t, r) {
    return Math.max(t, Math.min(e, r))
}
var An = W.safePreventDefault = function(t) {
        var r = ["onTouchStart", "onTouchMove", "onWheel"];
        r.includes(t._reactName) || t.preventDefault()
    },
    xv = W.getOnDemandLazySlides = function(t) {
        for (var r = [], n = wv(t), o = kv(t), i = n; i < o; i++) t.lazyLoadedList.indexOf(i) < 0 && r.push(i);
        return r
    };
W.getRequiredLazySlides = function(t) {
    for (var r = [], n = wv(t), o = kv(t), i = n; i < o; i++) r.push(i);
    return r
};
var wv = W.lazyStartIndex = function(t) {
        return t.currentSlide - H3(t)
    },
    kv = W.lazyEndIndex = function(t) {
        return t.currentSlide + $3(t)
    },
    H3 = W.lazySlidesOnLeft = function(t) {
        return t.centerMode ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0) : 0
    },
    $3 = W.lazySlidesOnRight = function(t) {
        return t.centerMode ? Math.floor((t.slidesToShow - 1) / 2) + 1 + (parseInt(t.centerPadding) > 0 ? 1 : 0) : t.slidesToShow
    },
    Hu = W.getWidth = function(t) {
        return t && t.offsetWidth || 0
    },
    Sv = W.getHeight = function(t) {
        return t && t.offsetHeight || 0
    },
    Ev = W.getSwipeDirection = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
            n, o, i, a;
        return n = t.startX - t.curX, o = t.startY - t.curY, i = Math.atan2(o, n), a = Math.round(i * 180 / Math.PI), a < 0 && (a = 360 - Math.abs(a)), a <= 45 && a >= 0 || a <= 360 && a >= 315 ? "left" : a >= 135 && a <= 225 ? "right" : r === !0 ? a >= 35 && a <= 135 ? "up" : "down" : "vertical"
    },
    Cv = W.canGoNext = function(t) {
        var r = !0;
        return t.infinite || (t.centerMode && t.currentSlide >= t.slideCount - 1 || t.slideCount <= t.slidesToShow || t.currentSlide >= t.slideCount - t.slidesToShow) && (r = !1), r
    };
W.extractObject = function(t, r) {
    var n = {};
    return r.forEach(function(o) {
        return n[o] = t[o]
    }), n
};
W.initializedState = function(t) {
    var r = z3.default.Children.count(t.children),
        n = t.listRef,
        o = Math.ceil(Hu(n)),
        i = t.trackRef && t.trackRef.node,
        a = Math.ceil(Hu(i)),
        l;
    if (t.vertical) l = o;
    else {
        var s = t.centerMode && parseInt(t.centerPadding) * 2;
        typeof t.centerPadding == "string" && t.centerPadding.slice(-1) === "%" && (s *= o / 100), l = Math.ceil((o - s) / t.slidesToShow)
    }
    var u = n && Sv(n.querySelector('[data-index="0"]')),
        d = u * t.slidesToShow,
        c = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
    t.rtl && t.currentSlide === void 0 && (c = r - 1 - t.initialSlide);
    var f = t.lazyLoadedList || [],
        h = xv(be(be({}, t), {}, {
            currentSlide: c,
            lazyLoadedList: f
        }));
    f = f.concat(h);
    var m = {
        slideCount: r,
        slideWidth: l,
        listWidth: o,
        trackWidth: a,
        currentSlide: c,
        slideHeight: u,
        listHeight: d,
        lazyLoadedList: f
    };
    return t.autoplaying === null && t.autoplay && (m.autoplaying = "playing"), m
};
W.slideHandler = function(t) {
    var r = t.waitForAnimate,
        n = t.animating,
        o = t.fade,
        i = t.infinite,
        a = t.index,
        l = t.slideCount,
        s = t.lazyLoad,
        u = t.currentSlide,
        d = t.centerMode,
        c = t.slidesToScroll,
        f = t.slidesToShow,
        h = t.useCSS,
        m = t.lazyLoadedList;
    if (r && n) return {};
    var v = a,
        S, y, p, b = {},
        x = {},
        k = i ? a : bv(a, 0, l - 1);
    if (o) {
        if (!i && (a < 0 || a >= l)) return {};
        a < 0 ? v = a + l : a >= l && (v = a - l), s && m.indexOf(v) < 0 && (m = m.concat(v)), b = {
            animating: !0,
            currentSlide: v,
            lazyLoadedList: m,
            targetSlide: v
        }, x = {
            animating: !1,
            targetSlide: v
        }
    } else S = v, v < 0 ? (S = v + l, i ? l % c !== 0 && (S = l - l % c) : S = 0) : !Cv(t) && v > u ? v = S = u : d && v >= l ? (v = i ? l : l - 1, S = i ? 0 : l - 1) : v >= l && (S = v - l, i ? l % c !== 0 && (S = 0) : S = l - f), !i && v + f >= l && (S = l - f), y = Ya(be(be({}, t), {}, {
        slideIndex: v
    })), p = Ya(be(be({}, t), {}, {
        slideIndex: S
    })), i || (y === p && (v = S), y = p), s && (m = m.concat(xv(be(be({}, t), {}, {
        currentSlide: v
    })))), h ? (b = {
        animating: !0,
        currentSlide: S,
        trackStyle: Ov(be(be({}, t), {}, {
            left: y
        })),
        lazyLoadedList: m,
        targetSlide: k
    }, x = {
        animating: !1,
        currentSlide: S,
        trackStyle: Ka(be(be({}, t), {}, {
            left: p
        })),
        swipeLeft: null,
        targetSlide: k
    }) : b = {
        currentSlide: S,
        trackStyle: Ka(be(be({}, t), {}, {
            left: p
        })),
        lazyLoadedList: m,
        targetSlide: k
    };
    return {
        state: b,
        nextState: x
    }
};
W.changeSlide = function(t, r) {
    var n, o, i, a, l, s = t.slidesToScroll,
        u = t.slidesToShow,
        d = t.slideCount,
        c = t.currentSlide,
        f = t.targetSlide,
        h = t.lazyLoad,
        m = t.infinite;
    if (a = d % s !== 0, n = a ? 0 : (d - c) % s, r.message === "previous") i = n === 0 ? s : u - n, l = c - i, h && !m && (o = c - i, l = o === -1 ? d - 1 : o), m || (l = f - s);
    else if (r.message === "next") i = n === 0 ? s : n, l = c + i, h && !m && (l = (c + s) % d + n), m || (l = f + s);
    else if (r.message === "dots") l = r.index * r.slidesToScroll;
    else if (r.message === "children") {
        if (l = r.index, m) {
            var v = V3(be(be({}, t), {}, {
                targetSlide: l
            }));
            l > r.currentSlide && v === "left" ? l = l - d : l < r.currentSlide && v === "right" && (l = l + d)
        }
    } else r.message === "index" && (l = Number(r.index));
    return l
};
W.keyHandler = function(t, r, n) {
    return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !r ? "" : t.keyCode === 37 ? n ? "next" : "previous" : t.keyCode === 39 ? n ? "previous" : "next" : ""
};
W.swipeStart = function(t, r, n) {
    return t.target.tagName === "IMG" && An(t), !r || !n && t.type.indexOf("mouse") !== -1 ? "" : {
        dragging: !0,
        touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY
        }
    }
};
W.swipeMove = function(t, r) {
    var n = r.scrolling,
        o = r.animating,
        i = r.vertical,
        a = r.swipeToSlide,
        l = r.verticalSwiping,
        s = r.rtl,
        u = r.currentSlide,
        d = r.edgeFriction,
        c = r.edgeDragged,
        f = r.onEdge,
        h = r.swiped,
        m = r.swiping,
        v = r.slideCount,
        S = r.slidesToScroll,
        y = r.infinite,
        p = r.touchObject,
        b = r.swipeEvent,
        x = r.listHeight,
        k = r.listWidth;
    if (!n) {
        if (o) return An(t);
        i && a && l && An(t);
        var E, R = {},
            L = Ya(r);
        p.curX = t.touches ? t.touches[0].pageX : t.clientX, p.curY = t.touches ? t.touches[0].pageY : t.clientY, p.swipeLength = Math.round(Math.sqrt(Math.pow(p.curX - p.startX, 2)));
        var j = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
        if (!l && !m && j > 10) return {
            scrolling: !0
        };
        l && (p.swipeLength = j);
        var T = (s ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
        l && (T = p.curY > p.startY ? 1 : -1);
        var _ = Math.ceil(v / S),
            O = Ev(r.touchObject, l),
            P = p.swipeLength;
        return y || (u === 0 && (O === "right" || O === "down") || u + 1 >= _ && (O === "left" || O === "up") || !Cv(r) && (O === "left" || O === "up")) && (P = p.swipeLength * d, c === !1 && f && (f(O), R.edgeDragged = !0)), !h && b && (b(O), R.swiped = !0), i ? E = L + P * (x / k) * T : s ? E = L - P * T : E = L + P * T, l && (E = L + P * T), R = be(be({}, R), {}, {
            touchObject: p,
            swipeLeft: E,
            trackStyle: Ka(be(be({}, r), {}, {
                left: E
            }))
        }), Math.abs(p.curX - p.startX) < Math.abs(p.curY - p.startY) * .8 || p.swipeLength > 10 && (R.swiping = !0, An(t)), R
    }
};
W.swipeEnd = function(t, r) {
    var n = r.dragging,
        o = r.swipe,
        i = r.touchObject,
        a = r.listWidth,
        l = r.touchThreshold,
        s = r.verticalSwiping,
        u = r.listHeight,
        d = r.swipeToSlide,
        c = r.scrolling,
        f = r.onSwipe,
        h = r.targetSlide,
        m = r.currentSlide,
        v = r.infinite;
    if (!n) return o && An(t), {};
    var S = s ? u / l : a / l,
        y = Ev(i, s),
        p = {
            dragging: !1,
            edgeDragged: !1,
            scrolling: !1,
            swiping: !1,
            swiped: !1,
            swipeLeft: null,
            touchObject: {}
        };
    if (c || !i.swipeLength) return p;
    if (i.swipeLength > S) {
        An(t), f && f(y);
        var b, x, k = v ? m : h;
        switch (y) {
            case "left":
            case "up":
                x = k + Hp(r), b = d ? Fp(r, x) : x, p.currentDirection = 0;
                break;
            case "right":
            case "down":
                x = k - Hp(r), b = d ? Fp(r, x) : x, p.currentDirection = 1;
                break;
            default:
                b = k
        }
        p.triggerSlideHandler = b
    } else {
        var E = Ya(r);
        p.trackStyle = Ov(be(be({}, r), {}, {
            left: E
        }))
    }
    return p
};
var B3 = W.getNavigableIndexes = function(t) {
        for (var r = t.infinite ? t.slideCount * 2 : t.slideCount, n = t.infinite ? t.slidesToShow * -1 : 0, o = t.infinite ? t.slidesToShow * -1 : 0, i = []; n < r;) i.push(n), n = o + t.slidesToScroll, o += Math.min(t.slidesToScroll, t.slidesToShow);
        return i
    },
    Fp = W.checkNavigable = function(t, r) {
        var n = B3(t),
            o = 0;
        if (r > n[n.length - 1]) r = n[n.length - 1];
        else
            for (var i in n) {
                if (r < n[i]) {
                    r = o;
                    break
                }
                o = n[i]
            }
        return r
    },
    Hp = W.getSlideCount = function(t) {
        var r = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
        if (t.swipeToSlide) {
            var n, o = t.listRef,
                i = o.querySelectorAll && o.querySelectorAll(".slick-slide") || [];
            if (Array.from(i).every(function(s) {
                    if (t.vertical) {
                        if (s.offsetTop + Sv(s) / 2 > t.swipeLeft * -1) return n = s, !1
                    } else if (s.offsetLeft - r + Hu(s) / 2 > t.swipeLeft * -1) return n = s, !1;
                    return !0
                }), !n) return 0;
            var a = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
                l = Math.abs(n.dataset.index - a) || 1;
            return l
        } else return t.slidesToScroll
    },
    Sd = W.checkSpecKeys = function(t, r) {
        return r.reduce(function(n, o) {
            return n && t.hasOwnProperty(o)
        }, !0) ? null : console.error("Keys Missing:", t)
    },
    Ka = W.getTrackCSS = function(t) {
        Sd(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
        var r, n, o = t.slideCount + 2 * t.slidesToShow;
        t.vertical ? n = o * t.slideHeight : r = U3(t) * t.slideWidth;
        var i = {
            opacity: 1,
            transition: "",
            WebkitTransition: ""
        };
        if (t.useTransform) {
            var a = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)",
                l = t.vertical ? "translate3d(0px, " + t.left + "px, 0px)" : "translate3d(" + t.left + "px, 0px, 0px)",
                s = t.vertical ? "translateY(" + t.left + "px)" : "translateX(" + t.left + "px)";
            i = be(be({}, i), {}, {
                WebkitTransform: a,
                transform: l,
                msTransform: s
            })
        } else t.vertical ? i.top = t.left : i.left = t.left;
        return t.fade && (i = {
            opacity: 1
        }), r && (i.width = r), n && (i.height = n), window && !window.addEventListener && window.attachEvent && (t.vertical ? i.marginTop = t.left + "px" : i.marginLeft = t.left + "px"), i
    },
    Ov = W.getTrackAnimateCSS = function(t) {
        Sd(t, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
        var r = Ka(t);
        return t.useTransform ? (r.WebkitTransition = "-webkit-transform " + t.speed + "ms " + t.cssEase, r.transition = "transform " + t.speed + "ms " + t.cssEase) : t.vertical ? r.transition = "top " + t.speed + "ms " + t.cssEase : r.transition = "left " + t.speed + "ms " + t.cssEase, r
    },
    Ya = W.getTrackLeft = function(t) {
        if (t.unslick) return 0;
        Sd(t, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
        var r = t.slideIndex,
            n = t.trackRef,
            o = t.infinite,
            i = t.centerMode,
            a = t.slideCount,
            l = t.slidesToShow,
            s = t.slidesToScroll,
            u = t.slideWidth,
            d = t.listWidth,
            c = t.variableWidth,
            f = t.slideHeight,
            h = t.fade,
            m = t.vertical,
            v = 0,
            S, y, p = 0;
        if (h || t.slideCount === 1) return 0;
        var b = 0;
        if (o ? (b = -ca(t), a % s !== 0 && r + s > a && (b = -(r > a ? l - (r - a) : a % s)), i && (b += parseInt(l / 2))) : (a % s !== 0 && r + s > a && (b = l - a % s), i && (b = parseInt(l / 2))), v = b * u, p = b * f, m ? S = r * f * -1 + p : S = r * u * -1 + v, c === !0) {
            var x, k = n && n.node;
            if (x = r + ca(t), y = k && k.childNodes[x], S = y ? y.offsetLeft * -1 : 0, i === !0) {
                x = o ? r + ca(t) : r, y = k && k.children[x], S = 0;
                for (var E = 0; E < x; E++) S -= k && k.children[E] && k.children[E].offsetWidth;
                S -= parseInt(t.centerPadding), S += y && (d - y.offsetWidth) / 2
            }
        }
        return S
    },
    ca = W.getPreClones = function(t) {
        return t.unslick || !t.infinite ? 0 : t.variableWidth ? t.slideCount : t.slidesToShow + (t.centerMode ? 1 : 0)
    },
    W3 = W.getPostClones = function(t) {
        return t.unslick || !t.infinite ? 0 : t.slideCount
    },
    U3 = W.getTotalSlides = function(t) {
        return t.slideCount === 1 ? 1 : ca(t) + t.slideCount + W3(t)
    },
    V3 = W.siblingDirection = function(t) {
        return t.targetSlide > t.currentSlide ? t.targetSlide > t.currentSlide + Q3(t) ? "left" : "right" : t.targetSlide < t.currentSlide - G3(t) ? "right" : "left"
    },
    Q3 = W.slidesOnRight = function(t) {
        var r = t.slidesToShow,
            n = t.centerMode,
            o = t.rtl,
            i = t.centerPadding;
        if (n) {
            var a = (r - 1) / 2 + 1;
            return parseInt(i) > 0 && (a += 1), o && r % 2 === 0 && (a += 1), a
        }
        return o ? 0 : r - 1
    },
    G3 = W.slidesOnLeft = function(t) {
        var r = t.slidesToShow,
            n = t.centerMode,
            o = t.rtl,
            i = t.centerPadding;
        if (n) {
            var a = (r - 1) / 2 + 1;
            return parseInt(i) > 0 && (a += 1), !o && r % 2 === 0 && (a += 1), a
        }
        return o ? r - 1 : 0
    };
W.canUseDOM = function() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
};
var K3 = W.validSettings = Object.keys(I3.default);

function Y3(e) {
    return K3.reduce(function(t, r) {
        return e.hasOwnProperty(r) && (t[r] = e[r]), t
    }, {})
}
var Al = {};
Object.defineProperty(Al, "__esModule", {
    value: !0
});
Al.Track = void 0;
var br = Tv(w),
    js = Tv(Il),
    Ps = W;

function Tv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Yn(e) {
    "@babel/helpers - typeof";
    return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Yn(e)
}

function $u() {
    return $u = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, $u.apply(this, arguments)
}

function q3(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function $p(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Pv(n.key), n)
    }
}

function X3(e, t, r) {
    return t && $p(e.prototype, t), r && $p(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Z3(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Bu(e, t)
}

function Bu(e, t) {
    return Bu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Bu(e, t)
}

function J3(e) {
    var t = jv();
    return function() {
        var n = qa(e),
            o;
        if (t) {
            var i = qa(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return eE(this, o)
    }
}

function eE(e, t) {
    if (t && (Yn(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Wu(e)
}

function Wu(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function jv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (jv = function() {
        return !!e
    })()
}

function qa(e) {
    return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, qa(e)
}

function Bp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ot(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bp(Object(r), !0).forEach(function(n) {
            Uu(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Uu(e, t, r) {
    return t = Pv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Pv(e) {
    var t = tE(e, "string");
    return Yn(t) == "symbol" ? t : String(t)
}

function tE(e, t) {
    if (Yn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Yn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
var Ns = function(t) {
        var r, n, o, i, a;
        t.rtl ? a = t.slideCount - 1 - t.index : a = t.index, o = a < 0 || a >= t.slideCount, t.centerMode ? (i = Math.floor(t.slidesToShow / 2), n = (a - t.currentSlide) % t.slideCount === 0, a > t.currentSlide - i - 1 && a <= t.currentSlide + i && (r = !0)) : r = t.currentSlide <= a && a < t.currentSlide + t.slidesToShow;
        var l;
        t.targetSlide < 0 ? l = t.targetSlide + t.slideCount : t.targetSlide >= t.slideCount ? l = t.targetSlide - t.slideCount : l = t.targetSlide;
        var s = a === l;
        return {
            "slick-slide": !0,
            "slick-active": r,
            "slick-center": n,
            "slick-cloned": o,
            "slick-current": s
        }
    },
    rE = function(t) {
        var r = {};
        return (t.variableWidth === void 0 || t.variableWidth === !1) && (r.width = t.slideWidth), t.fade && (r.position = "relative", t.vertical ? r.top = -t.index * parseInt(t.slideHeight) : r.left = -t.index * parseInt(t.slideWidth), r.opacity = t.currentSlide === t.index ? 1 : 0, r.zIndex = t.currentSlide === t.index ? 999 : 998, t.useCSS && (r.transition = "opacity " + t.speed + "ms " + t.cssEase + ", visibility " + t.speed + "ms " + t.cssEase)), r
    },
    _s = function(t, r) {
        return t.key || r
    },
    nE = function(t) {
        var r, n = [],
            o = [],
            i = [],
            a = br.default.Children.count(t.children),
            l = (0, Ps.lazyStartIndex)(t),
            s = (0, Ps.lazyEndIndex)(t);
        return br.default.Children.forEach(t.children, function(u, d) {
            var c, f = {
                message: "children",
                index: d,
                slidesToScroll: t.slidesToScroll,
                currentSlide: t.currentSlide
            };
            !t.lazyLoad || t.lazyLoad && t.lazyLoadedList.indexOf(d) >= 0 ? c = u : c = br.default.createElement("div", null);
            var h = rE(ot(ot({}, t), {}, {
                    index: d
                })),
                m = c.props.className || "",
                v = Ns(ot(ot({}, t), {}, {
                    index: d
                }));
            if (n.push(br.default.cloneElement(c, {
                    key: "original" + _s(c, d),
                    "data-index": d,
                    className: (0, js.default)(v, m),
                    tabIndex: "-1",
                    "aria-hidden": !v["slick-active"],
                    style: ot(ot({
                        outline: "none"
                    }, c.props.style || {}), h),
                    onClick: function(p) {
                        c.props && c.props.onClick && c.props.onClick(p), t.focusOnSelect && t.focusOnSelect(f)
                    }
                })), t.infinite && t.fade === !1) {
                var S = a - d;
                S <= (0, Ps.getPreClones)(t) && (r = -S, r >= l && (c = u), v = Ns(ot(ot({}, t), {}, {
                    index: r
                })), o.push(br.default.cloneElement(c, {
                    key: "precloned" + _s(c, r),
                    "data-index": r,
                    tabIndex: "-1",
                    className: (0, js.default)(v, m),
                    "aria-hidden": !v["slick-active"],
                    style: ot(ot({}, c.props.style || {}), h),
                    onClick: function(p) {
                        c.props && c.props.onClick && c.props.onClick(p), t.focusOnSelect && t.focusOnSelect(f)
                    }
                }))), r = a + d, r < s && (c = u), v = Ns(ot(ot({}, t), {}, {
                    index: r
                })), i.push(br.default.cloneElement(c, {
                    key: "postcloned" + _s(c, r),
                    "data-index": r,
                    tabIndex: "-1",
                    className: (0, js.default)(v, m),
                    "aria-hidden": !v["slick-active"],
                    style: ot(ot({}, c.props.style || {}), h),
                    onClick: function(p) {
                        c.props && c.props.onClick && c.props.onClick(p), t.focusOnSelect && t.focusOnSelect(f)
                    }
                }))
            }
        }), t.rtl ? o.concat(n, i).reverse() : o.concat(n, i)
    };
Al.Track = function(e) {
    Z3(r, e);
    var t = J3(r);

    function r() {
        var n;
        q3(this, r);
        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
        return n = t.call.apply(t, [this].concat(i)), Uu(Wu(n), "node", null), Uu(Wu(n), "handleRef", function(l) {
            n.node = l
        }), n
    }
    return X3(r, [{
        key: "render",
        value: function() {
            var o = nE(this.props),
                i = this.props,
                a = i.onMouseEnter,
                l = i.onMouseOver,
                s = i.onMouseLeave,
                u = {
                    onMouseEnter: a,
                    onMouseOver: l,
                    onMouseLeave: s
                };
            return br.default.createElement("div", $u({
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle
            }, u), o)
        }
    }]), r
}(br.default.PureComponent);
var Dl = {};

function qn(e) {
    "@babel/helpers - typeof";
    return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, qn(e)
}
Object.defineProperty(Dl, "__esModule", {
    value: !0
});
Dl.Dots = void 0;
var Yi = Nv(w),
    oE = Nv(Il),
    Wp = W;

function Nv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Up(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function iE(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Up(Object(r), !0).forEach(function(n) {
            aE(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Up(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function aE(e, t, r) {
    return t = _v(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function lE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Vp(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _v(n.key), n)
    }
}

function sE(e, t, r) {
    return t && Vp(e.prototype, t), r && Vp(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function _v(e) {
    var t = uE(e, "string");
    return qn(t) == "symbol" ? t : String(t)
}

function uE(e, t) {
    if (qn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (qn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function cE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Vu(e, t)
}

function Vu(e, t) {
    return Vu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Vu(e, t)
}

function dE(e) {
    var t = Mv();
    return function() {
        var n = Xa(e),
            o;
        if (t) {
            var i = Xa(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return fE(this, o)
    }
}

function fE(e, t) {
    if (t && (qn(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return pE(e)
}

function pE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Mv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Mv = function() {
        return !!e
    })()
}

function Xa(e) {
    return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Xa(e)
}
var gE = function(t) {
    var r;
    return t.infinite ? r = Math.ceil(t.slideCount / t.slidesToScroll) : r = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1, r
};
Dl.Dots = function(e) {
    cE(r, e);
    var t = dE(r);

    function r() {
        return lE(this, r), t.apply(this, arguments)
    }
    return sE(r, [{
        key: "clickHandler",
        value: function(o, i) {
            i.preventDefault(), this.props.clickHandler(o)
        }
    }, {
        key: "render",
        value: function() {
            for (var o = this.props, i = o.onMouseEnter, a = o.onMouseOver, l = o.onMouseLeave, s = o.infinite, u = o.slidesToScroll, d = o.slidesToShow, c = o.slideCount, f = o.currentSlide, h = gE({
                    slideCount: c,
                    slidesToScroll: u,
                    slidesToShow: d,
                    infinite: s
                }), m = {
                    onMouseEnter: i,
                    onMouseOver: a,
                    onMouseLeave: l
                }, v = [], S = 0; S < h; S++) {
                var y = (S + 1) * u - 1,
                    p = s ? y : (0, Wp.clamp)(y, 0, c - 1),
                    b = p - (u - 1),
                    x = s ? b : (0, Wp.clamp)(b, 0, c - 1),
                    k = (0, oE.default)({
                        "slick-active": s ? f >= x && f <= p : f === x
                    }),
                    E = {
                        message: "dots",
                        index: S,
                        slidesToScroll: u,
                        currentSlide: f
                    },
                    R = this.clickHandler.bind(this, E);
                v = v.concat(Yi.default.createElement("li", {
                    key: S,
                    className: k
                }, Yi.default.cloneElement(this.props.customPaging(S), {
                    onClick: R
                })))
            }
            return Yi.default.cloneElement(this.props.appendDots(v), iE({
                className: this.props.dotsClass
            }, m))
        }
    }]), r
}(Yi.default.PureComponent);
var Xn = {};

function Zn(e) {
    "@babel/helpers - typeof";
    return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Zn(e)
}
Object.defineProperty(Xn, "__esModule", {
    value: !0
});
Xn.PrevArrow = Xn.NextArrow = void 0;
var Dn = Lv(w),
    Rv = Lv(Il),
    hE = W;

function Lv(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Za() {
    return Za = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Za.apply(this, arguments)
}

function Qp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ja(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Qp(Object(r), !0).forEach(function(n) {
            mE(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function mE(e, t, r) {
    return t = Av(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function zv(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Gp(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Av(n.key), n)
    }
}

function Iv(e, t, r) {
    return t && Gp(e.prototype, t), r && Gp(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Av(e) {
    var t = yE(e, "string");
    return Zn(t) == "symbol" ? t : String(t)
}

function yE(e, t) {
    if (Zn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (Zn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Dv(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Qu(e, t)
}

function Qu(e, t) {
    return Qu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Qu(e, t)
}

function Fv(e) {
    var t = Hv();
    return function() {
        var n = el(e),
            o;
        if (t) {
            var i = el(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return vE(this, o)
    }
}

function vE(e, t) {
    if (t && (Zn(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return bE(e)
}

function bE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Hv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Hv = function() {
        return !!e
    })()
}

function el(e) {
    return el = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, el(e)
}
Xn.PrevArrow = function(e) {
    Dv(r, e);
    var t = Fv(r);

    function r() {
        return zv(this, r), t.apply(this, arguments)
    }
    return Iv(r, [{
        key: "clickHandler",
        value: function(o, i) {
            i && i.preventDefault(), this.props.clickHandler(o, i)
        }
    }, {
        key: "render",
        value: function() {
            var o = {
                    "slick-arrow": !0,
                    "slick-prev": !0
                },
                i = this.clickHandler.bind(this, {
                    message: "previous"
                });
            !this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow) && (o["slick-disabled"] = !0, i = null);
            var a = {
                    key: "0",
                    "data-role": "none",
                    className: (0, Rv.default)(o),
                    style: {
                        display: "block"
                    },
                    onClick: i
                },
                l = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                },
                s;
            return this.props.prevArrow ? s = Dn.default.cloneElement(this.props.prevArrow, Ja(Ja({}, a), l)) : s = Dn.default.createElement("button", Za({
                key: "0",
                type: "button"
            }, a), " ", "Previous"), s
        }
    }]), r
}(Dn.default.PureComponent);
Xn.NextArrow = function(e) {
    Dv(r, e);
    var t = Fv(r);

    function r() {
        return zv(this, r), t.apply(this, arguments)
    }
    return Iv(r, [{
        key: "clickHandler",
        value: function(o, i) {
            i && i.preventDefault(), this.props.clickHandler(o, i)
        }
    }, {
        key: "render",
        value: function() {
            var o = {
                    "slick-arrow": !0,
                    "slick-next": !0
                },
                i = this.clickHandler.bind(this, {
                    message: "next"
                });
            (0, hE.canGoNext)(this.props) || (o["slick-disabled"] = !0, i = null);
            var a = {
                    key: "1",
                    "data-role": "none",
                    className: (0, Rv.default)(o),
                    style: {
                        display: "block"
                    },
                    onClick: i
                },
                l = {
                    currentSlide: this.props.currentSlide,
                    slideCount: this.props.slideCount
                },
                s;
            return this.props.nextArrow ? s = Dn.default.cloneElement(this.props.nextArrow, Ja(Ja({}, a), l)) : s = Dn.default.createElement("button", Za({
                key: "1",
                type: "button"
            }, a), " ", "Next"), s
        }
    }]), r
}(Dn.default.PureComponent);
var $v = function() {
        if (typeof Map < "u") return Map;

        function e(t, r) {
            var n = -1;
            return t.some(function(o, i) {
                return o[0] === r ? (n = i, !0) : !1
            }), n
        }
        return function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(r) {
                var n = e(this.__entries__, r),
                    o = this.__entries__[n];
                return o && o[1]
            }, t.prototype.set = function(r, n) {
                var o = e(this.__entries__, r);
                ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n])
            }, t.prototype.delete = function(r) {
                var n = this.__entries__,
                    o = e(n, r);
                ~o && n.splice(o, 1)
            }, t.prototype.has = function(r) {
                return !!~e(this.__entries__, r)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(r, n) {
                n === void 0 && (n = null);
                for (var o = 0, i = this.__entries__; o < i.length; o++) {
                    var a = i[o];
                    r.call(n, a[1], a[0])
                }
            }, t
        }()
    }(),
    Gu = typeof window < "u" && typeof document < "u" && window.document === document,
    tl = function() {
        return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")()
    }(),
    xE = function() {
        return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(tl) : function(e) {
            return setTimeout(function() {
                return e(Date.now())
            }, 1e3 / 60)
        }
    }(),
    wE = 2;

function kE(e, t) {
    var r = !1,
        n = !1,
        o = 0;

    function i() {
        r && (r = !1, e()), n && l()
    }

    function a() {
        xE(i)
    }

    function l() {
        var s = Date.now();
        if (r) {
            if (s - o < wE) return;
            n = !0
        } else r = !0, n = !1, setTimeout(a, t);
        o = s
    }
    return l
}
var SE = 20,
    EE = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    CE = typeof MutationObserver < "u",
    OE = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = kE(this.refresh.bind(this), SE)
        }
        return e.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(t) {
            var r = this.observers_,
                n = r.indexOf(t);
            ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            var t = this.updateObservers_();
            t && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(r) {
                return r.gatherActive(), r.hasActive()
            });
            return t.forEach(function(r) {
                return r.broadcastActive()
            }), t.length > 0
        }, e.prototype.connect_ = function() {
            !Gu || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), CE ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            !Gu || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(t) {
            var r = t.propertyName,
                n = r === void 0 ? "" : r,
                o = EE.some(function(i) {
                    return !!~n.indexOf(i)
                });
            o && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Bv = function(e, t) {
        for (var r = 0, n = Object.keys(t); r < n.length; r++) {
            var o = n[r];
            Object.defineProperty(e, o, {
                value: t[o],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    Jn = function(e) {
        var t = e && e.ownerDocument && e.ownerDocument.defaultView;
        return t || tl
    },
    Wv = Fl(0, 0, 0, 0);

function rl(e) {
    return parseFloat(e) || 0
}

function Kp(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return t.reduce(function(n, o) {
        var i = e["border-" + o + "-width"];
        return n + rl(i)
    }, 0)
}

function TE(e) {
    for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
        var i = o[n],
            a = e["padding-" + i];
        r[i] = rl(a)
    }
    return r
}

function jE(e) {
    var t = e.getBBox();
    return Fl(0, 0, t.width, t.height)
}

function PE(e) {
    var t = e.clientWidth,
        r = e.clientHeight;
    if (!t && !r) return Wv;
    var n = Jn(e).getComputedStyle(e),
        o = TE(n),
        i = o.left + o.right,
        a = o.top + o.bottom,
        l = rl(n.width),
        s = rl(n.height);
    if (n.boxSizing === "border-box" && (Math.round(l + i) !== t && (l -= Kp(n, "left", "right") + i), Math.round(s + a) !== r && (s -= Kp(n, "top", "bottom") + a)), !_E(e)) {
        var u = Math.round(l + i) - t,
            d = Math.round(s + a) - r;
        Math.abs(u) !== 1 && (l -= u), Math.abs(d) !== 1 && (s -= d)
    }
    return Fl(o.left, o.top, l, s)
}
var NE = function() {
    return typeof SVGGraphicsElement < "u" ? function(e) {
        return e instanceof Jn(e).SVGGraphicsElement
    } : function(e) {
        return e instanceof Jn(e).SVGElement && typeof e.getBBox == "function"
    }
}();

function _E(e) {
    return e === Jn(e).document.documentElement
}

function ME(e) {
    return Gu ? NE(e) ? jE(e) : PE(e) : Wv
}

function RE(e) {
    var t = e.x,
        r = e.y,
        n = e.width,
        o = e.height,
        i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
        a = Object.create(i.prototype);
    return Bv(a, {
        x: t,
        y: r,
        width: n,
        height: o,
        top: r,
        right: t + n,
        bottom: o + r,
        left: t
    }), a
}

function Fl(e, t, r, n) {
    return {
        x: e,
        y: t,
        width: r,
        height: n
    }
}
var LE = function() {
        function e(t) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Fl(0, 0, 0, 0), this.target = t
        }
        return e.prototype.isActive = function() {
            var t = ME(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, e
    }(),
    zE = function() {
        function e(t, r) {
            var n = RE(r);
            Bv(this, {
                target: t,
                contentRect: n
            })
        }
        return e
    }(),
    IE = function() {
        function e(t, r, n) {
            if (this.activeObservations_ = [], this.observations_ = new $v, typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof Jn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var r = this.observations_;
                r.has(t) || (r.set(t, new LE(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(t instanceof Jn(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var r = this.observations_;
                r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(), this.observations_.forEach(function(r) {
                r.isActive() && t.activeObservations_.push(r)
            })
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    r = this.activeObservations_.map(function(n) {
                        return new zE(n.target, n.broadcastRect())
                    });
                this.callback_.call(t, r, t), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    Uv = typeof WeakMap < "u" ? new WeakMap : new $v,
    Vv = function() {
        function e(t) {
            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var r = OE.getInstance(),
                n = new IE(t, r, this);
            Uv.set(this, n)
        }
        return e
    }();
["observe", "unobserve", "disconnect"].forEach(function(e) {
    Vv.prototype[e] = function() {
        var t;
        return (t = Uv.get(this))[e].apply(t, arguments)
    }
});
var AE = function() {
    return typeof tl.ResizeObserver < "u" ? tl.ResizeObserver : Vv
}();
const DE = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: AE
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    FE = Xv(DE);
Object.defineProperty(zl, "__esModule", {
    value: !0
});
zl.InnerSlider = void 0;
var Ze = vi(w),
    HE = vi(mv),
    $E = vi(L3),
    BE = vi(Il),
    we = W,
    WE = Al,
    UE = Dl,
    Yp = Xn,
    VE = vi(FE);

function vi(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function cn(e) {
    "@babel/helpers - typeof";
    return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, cn(e)
}

function nl() {
    return nl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, nl.apply(this, arguments)
}

function QE(e, t) {
    if (e == null) return {};
    var r = GE(e, t),
        n, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++) n = i[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}

function GE(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        o, i;
    for (i = 0; i < n.length; i++) o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
    return r
}

function qp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? qp(Object(r), !0).forEach(function(n) {
            se(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function KE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Xp(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Gv(n.key), n)
    }
}

function YE(e, t, r) {
    return t && Xp(e.prototype, t), r && Xp(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function qE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && Ku(e, t)
}

function Ku(e, t) {
    return Ku = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
        return n.__proto__ = o, n
    }, Ku(e, t)
}

function XE(e) {
    var t = Qv();
    return function() {
        var n = ol(e),
            o;
        if (t) {
            var i = ol(this).constructor;
            o = Reflect.construct(n, arguments, i)
        } else o = n.apply(this, arguments);
        return ZE(this, o)
    }
}

function ZE(e, t) {
    if (t && (cn(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return le(e)
}

function le(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Qv() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Qv = function() {
        return !!e
    })()
}

function ol(e) {
    return ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ol(e)
}

function se(e, t, r) {
    return t = Gv(t), t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Gv(e) {
    var t = JE(e, "string");
    return cn(t) == "symbol" ? t : String(t)
}

function JE(e, t) {
    if (cn(e) != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (cn(n) != "object") return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
zl.InnerSlider = function(e) {
    qE(r, e);
    var t = XE(r);

    function r(n) {
        var o;
        KE(this, r), o = t.call(this, n), se(le(o), "listRefHandler", function(a) {
            return o.list = a
        }), se(le(o), "trackRefHandler", function(a) {
            return o.track = a
        }), se(le(o), "adaptHeight", function() {
            if (o.props.adaptiveHeight && o.list) {
                var a = o.list.querySelector('[data-index="'.concat(o.state.currentSlide, '"]'));
                o.list.style.height = (0, we.getHeight)(a) + "px"
            }
        }), se(le(o), "componentDidMount", function() {
            if (o.props.onInit && o.props.onInit(), o.props.lazyLoad) {
                var a = (0, we.getOnDemandLazySlides)(Y(Y({}, o.props), o.state));
                a.length > 0 && (o.setState(function(s) {
                    return {
                        lazyLoadedList: s.lazyLoadedList.concat(a)
                    }
                }), o.props.onLazyLoad && o.props.onLazyLoad(a))
            }
            var l = Y({
                listRef: o.list,
                trackRef: o.track
            }, o.props);
            o.updateState(l, !0, function() {
                o.adaptHeight(), o.props.autoplay && o.autoPlay("update")
            }), o.props.lazyLoad === "progressive" && (o.lazyLoadTimer = setInterval(o.progressiveLazyLoad, 1e3)), o.ro = new VE.default(function() {
                o.state.animating ? (o.onWindowResized(!1), o.callbackTimers.push(setTimeout(function() {
                    return o.onWindowResized()
                }, o.props.speed))) : o.onWindowResized()
            }), o.ro.observe(o.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(s) {
                s.onfocus = o.props.pauseOnFocus ? o.onSlideFocus : null, s.onblur = o.props.pauseOnFocus ? o.onSlideBlur : null
            }), window.addEventListener ? window.addEventListener("resize", o.onWindowResized) : window.attachEvent("onresize", o.onWindowResized)
        }), se(le(o), "componentWillUnmount", function() {
            o.animationEndCallback && clearTimeout(o.animationEndCallback), o.lazyLoadTimer && clearInterval(o.lazyLoadTimer), o.callbackTimers.length && (o.callbackTimers.forEach(function(a) {
                return clearTimeout(a)
            }), o.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", o.onWindowResized) : window.detachEvent("onresize", o.onWindowResized), o.autoplayTimer && clearInterval(o.autoplayTimer), o.ro.disconnect()
        }), se(le(o), "componentDidUpdate", function(a) {
            if (o.checkImagesLoad(), o.props.onReInit && o.props.onReInit(), o.props.lazyLoad) {
                var l = (0, we.getOnDemandLazySlides)(Y(Y({}, o.props), o.state));
                l.length > 0 && (o.setState(function(d) {
                    return {
                        lazyLoadedList: d.lazyLoadedList.concat(l)
                    }
                }), o.props.onLazyLoad && o.props.onLazyLoad(l))
            }
            o.adaptHeight();
            var s = Y(Y({
                    listRef: o.list,
                    trackRef: o.track
                }, o.props), o.state),
                u = o.didPropsChange(a);
            u && o.updateState(s, u, function() {
                o.state.currentSlide >= Ze.default.Children.count(o.props.children) && o.changeSlide({
                    message: "index",
                    index: Ze.default.Children.count(o.props.children) - o.props.slidesToShow,
                    currentSlide: o.state.currentSlide
                }), o.props.autoplay ? o.autoPlay("update") : o.pause("paused")
            })
        }), se(le(o), "onWindowResized", function(a) {
            o.debouncedResize && o.debouncedResize.cancel(), o.debouncedResize = (0, $E.default)(function() {
                return o.resizeWindow(a)
            }, 50), o.debouncedResize()
        }), se(le(o), "resizeWindow", function() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
                l = !!(o.track && o.track.node);
            if (l) {
                var s = Y(Y({
                    listRef: o.list,
                    trackRef: o.track
                }, o.props), o.state);
                o.updateState(s, a, function() {
                    o.props.autoplay ? o.autoPlay("update") : o.pause("paused")
                }), o.setState({
                    animating: !1
                }), clearTimeout(o.animationEndCallback), delete o.animationEndCallback
            }
        }), se(le(o), "updateState", function(a, l, s) {
            var u = (0, we.initializedState)(a);
            a = Y(Y(Y({}, a), u), {}, {
                slideIndex: u.currentSlide
            });
            var d = (0, we.getTrackLeft)(a);
            a = Y(Y({}, a), {}, {
                left: d
            });
            var c = (0, we.getTrackCSS)(a);
            (l || Ze.default.Children.count(o.props.children) !== Ze.default.Children.count(a.children)) && (u.trackStyle = c), o.setState(u, s)
        }), se(le(o), "ssrInit", function() {
            if (o.props.variableWidth) {
                var a = 0,
                    l = 0,
                    s = [],
                    u = (0, we.getPreClones)(Y(Y(Y({}, o.props), o.state), {}, {
                        slideCount: o.props.children.length
                    })),
                    d = (0, we.getPostClones)(Y(Y(Y({}, o.props), o.state), {}, {
                        slideCount: o.props.children.length
                    }));
                o.props.children.forEach(function(R) {
                    s.push(R.props.style.width), a += R.props.style.width
                });
                for (var c = 0; c < u; c++) l += s[s.length - 1 - c], a += s[s.length - 1 - c];
                for (var f = 0; f < d; f++) a += s[f];
                for (var h = 0; h < o.state.currentSlide; h++) l += s[h];
                var m = {
                    width: a + "px",
                    left: -l + "px"
                };
                if (o.props.centerMode) {
                    var v = "".concat(s[o.state.currentSlide], "px");
                    m.left = "calc(".concat(m.left, " + (100% - ").concat(v, ") / 2 ) ")
                }
                return {
                    trackStyle: m
                }
            }
            var S = Ze.default.Children.count(o.props.children),
                y = Y(Y(Y({}, o.props), o.state), {}, {
                    slideCount: S
                }),
                p = (0, we.getPreClones)(y) + (0, we.getPostClones)(y) + S,
                b = 100 / o.props.slidesToShow * p,
                x = 100 / p,
                k = -x * ((0, we.getPreClones)(y) + o.state.currentSlide) * b / 100;
            o.props.centerMode && (k += (100 - x * b / 100) / 2);
            var E = {
                width: b + "%",
                left: k + "%"
            };
            return {
                slideWidth: x + "%",
                trackStyle: E
            }
        }), se(le(o), "checkImagesLoad", function() {
            var a = o.list && o.list.querySelectorAll && o.list.querySelectorAll(".slick-slide img") || [],
                l = a.length,
                s = 0;
            Array.prototype.forEach.call(a, function(u) {
                var d = function() {
                    return ++s && s >= l && o.onWindowResized()
                };
                if (!u.onclick) u.onclick = function() {
                    return u.parentNode.focus()
                };
                else {
                    var c = u.onclick;
                    u.onclick = function(f) {
                        c(f), u.parentNode.focus()
                    }
                }
                u.onload || (o.props.lazyLoad ? u.onload = function() {
                    o.adaptHeight(), o.callbackTimers.push(setTimeout(o.onWindowResized, o.props.speed))
                } : (u.onload = d, u.onerror = function() {
                    d(), o.props.onLazyLoadError && o.props.onLazyLoadError()
                }))
            })
        }), se(le(o), "progressiveLazyLoad", function() {
            for (var a = [], l = Y(Y({}, o.props), o.state), s = o.state.currentSlide; s < o.state.slideCount + (0, we.getPostClones)(l); s++)
                if (o.state.lazyLoadedList.indexOf(s) < 0) {
                    a.push(s);
                    break
                }
            for (var u = o.state.currentSlide - 1; u >= -(0, we.getPreClones)(l); u--)
                if (o.state.lazyLoadedList.indexOf(u) < 0) {
                    a.push(u);
                    break
                }
            a.length > 0 ? (o.setState(function(d) {
                return {
                    lazyLoadedList: d.lazyLoadedList.concat(a)
                }
            }), o.props.onLazyLoad && o.props.onLazyLoad(a)) : o.lazyLoadTimer && (clearInterval(o.lazyLoadTimer), delete o.lazyLoadTimer)
        }), se(le(o), "slideHandler", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                s = o.props,
                u = s.asNavFor,
                d = s.beforeChange,
                c = s.onLazyLoad,
                f = s.speed,
                h = s.afterChange,
                m = o.state.currentSlide,
                v = (0, we.slideHandler)(Y(Y(Y({
                    index: a
                }, o.props), o.state), {}, {
                    trackRef: o.track,
                    useCSS: o.props.useCSS && !l
                })),
                S = v.state,
                y = v.nextState;
            if (S) {
                d && d(m, S.currentSlide);
                var p = S.lazyLoadedList.filter(function(b) {
                    return o.state.lazyLoadedList.indexOf(b) < 0
                });
                c && p.length > 0 && c(p), !o.props.waitForAnimate && o.animationEndCallback && (clearTimeout(o.animationEndCallback), h && h(m), delete o.animationEndCallback), o.setState(S, function() {
                    u && o.asNavForIndex !== a && (o.asNavForIndex = a, u.innerSlider.slideHandler(a)), y && (o.animationEndCallback = setTimeout(function() {
                        var b = y.animating,
                            x = QE(y, ["animating"]);
                        o.setState(x, function() {
                            o.callbackTimers.push(setTimeout(function() {
                                return o.setState({
                                    animating: b
                                })
                            }, 10)), h && h(S.currentSlide), delete o.animationEndCallback
                        })
                    }, f))
                })
            }
        }), se(le(o), "changeSlide", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                s = Y(Y({}, o.props), o.state),
                u = (0, we.changeSlide)(s, a);
            if (!(u !== 0 && !u) && (l === !0 ? o.slideHandler(u, l) : o.slideHandler(u), o.props.autoplay && o.autoPlay("update"), o.props.focusOnSelect)) {
                var d = o.list.querySelectorAll(".slick-current");
                d[0] && d[0].focus()
            }
        }), se(le(o), "clickHandler", function(a) {
            o.clickable === !1 && (a.stopPropagation(), a.preventDefault()), o.clickable = !0
        }), se(le(o), "keyHandler", function(a) {
            var l = (0, we.keyHandler)(a, o.props.accessibility, o.props.rtl);
            l !== "" && o.changeSlide({
                message: l
            })
        }), se(le(o), "selectHandler", function(a) {
            o.changeSlide(a)
        }), se(le(o), "disableBodyScroll", function() {
            var a = function(s) {
                s = s || window.event, s.preventDefault && s.preventDefault(), s.returnValue = !1
            };
            window.ontouchmove = a
        }), se(le(o), "enableBodyScroll", function() {
            window.ontouchmove = null
        }), se(le(o), "swipeStart", function(a) {
            o.props.verticalSwiping && o.disableBodyScroll();
            var l = (0, we.swipeStart)(a, o.props.swipe, o.props.draggable);
            l !== "" && o.setState(l)
        }), se(le(o), "swipeMove", function(a) {
            var l = (0, we.swipeMove)(a, Y(Y(Y({}, o.props), o.state), {}, {
                trackRef: o.track,
                listRef: o.list,
                slideIndex: o.state.currentSlide
            }));
            l && (l.swiping && (o.clickable = !1), o.setState(l))
        }), se(le(o), "swipeEnd", function(a) {
            var l = (0, we.swipeEnd)(a, Y(Y(Y({}, o.props), o.state), {}, {
                trackRef: o.track,
                listRef: o.list,
                slideIndex: o.state.currentSlide
            }));
            if (l) {
                var s = l.triggerSlideHandler;
                delete l.triggerSlideHandler, o.setState(l), s !== void 0 && (o.slideHandler(s), o.props.verticalSwiping && o.enableBodyScroll())
            }
        }), se(le(o), "touchEnd", function(a) {
            o.swipeEnd(a), o.clickable = !0
        }), se(le(o), "slickPrev", function() {
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "previous"
                })
            }, 0))
        }), se(le(o), "slickNext", function() {
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "next"
                })
            }, 0))
        }), se(le(o), "slickGoTo", function(a) {
            var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            if (a = Number(a), isNaN(a)) return "";
            o.callbackTimers.push(setTimeout(function() {
                return o.changeSlide({
                    message: "index",
                    index: a,
                    currentSlide: o.state.currentSlide
                }, l)
            }, 0))
        }), se(le(o), "play", function() {
            var a;
            if (o.props.rtl) a = o.state.currentSlide - o.props.slidesToScroll;
            else if ((0, we.canGoNext)(Y(Y({}, o.props), o.state))) a = o.state.currentSlide + o.props.slidesToScroll;
            else return !1;
            o.slideHandler(a)
        }), se(le(o), "autoPlay", function(a) {
            o.autoplayTimer && clearInterval(o.autoplayTimer);
            var l = o.state.autoplaying;
            if (a === "update") {
                if (l === "hovered" || l === "focused" || l === "paused") return
            } else if (a === "leave") {
                if (l === "paused" || l === "focused") return
            } else if (a === "blur" && (l === "paused" || l === "hovered")) return;
            o.autoplayTimer = setInterval(o.play, o.props.autoplaySpeed + 50), o.setState({
                autoplaying: "playing"
            })
        }), se(le(o), "pause", function(a) {
            o.autoplayTimer && (clearInterval(o.autoplayTimer), o.autoplayTimer = null);
            var l = o.state.autoplaying;
            a === "paused" ? o.setState({
                autoplaying: "paused"
            }) : a === "focused" ? (l === "hovered" || l === "playing") && o.setState({
                autoplaying: "focused"
            }) : l === "playing" && o.setState({
                autoplaying: "hovered"
            })
        }), se(le(o), "onDotsOver", function() {
            return o.props.autoplay && o.pause("hovered")
        }), se(le(o), "onDotsLeave", function() {
            return o.props.autoplay && o.state.autoplaying === "hovered" && o.autoPlay("leave")
        }), se(le(o), "onTrackOver", function() {
            return o.props.autoplay && o.pause("hovered")
        }), se(le(o), "onTrackLeave", function() {
            return o.props.autoplay && o.state.autoplaying === "hovered" && o.autoPlay("leave")
        }), se(le(o), "onSlideFocus", function() {
            return o.props.autoplay && o.pause("focused")
        }), se(le(o), "onSlideBlur", function() {
            return o.props.autoplay && o.state.autoplaying === "focused" && o.autoPlay("blur")
        }), se(le(o), "render", function() {
            var a = (0, BE.default)("slick-slider", o.props.className, {
                    "slick-vertical": o.props.vertical,
                    "slick-initialized": !0
                }),
                l = Y(Y({}, o.props), o.state),
                s = (0, we.extractObject)(l, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                u = o.props.pauseOnHover;
            s = Y(Y({}, s), {}, {
                onMouseEnter: u ? o.onTrackOver : null,
                onMouseLeave: u ? o.onTrackLeave : null,
                onMouseOver: u ? o.onTrackOver : null,
                focusOnSelect: o.props.focusOnSelect && o.clickable ? o.selectHandler : null
            });
            var d;
            if (o.props.dots === !0 && o.state.slideCount >= o.props.slidesToShow) {
                var c = (0, we.extractObject)(l, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                    f = o.props.pauseOnDotsHover;
                c = Y(Y({}, c), {}, {
                    clickHandler: o.changeSlide,
                    onMouseEnter: f ? o.onDotsLeave : null,
                    onMouseOver: f ? o.onDotsOver : null,
                    onMouseLeave: f ? o.onDotsLeave : null
                }), d = Ze.default.createElement(UE.Dots, c)
            }
            var h, m, v = (0, we.extractObject)(l, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
            v.clickHandler = o.changeSlide, o.props.arrows && (h = Ze.default.createElement(Yp.PrevArrow, v), m = Ze.default.createElement(Yp.NextArrow, v));
            var S = null;
            o.props.vertical && (S = {
                height: o.state.listHeight
            });
            var y = null;
            o.props.vertical === !1 ? o.props.centerMode === !0 && (y = {
                padding: "0px " + o.props.centerPadding
            }) : o.props.centerMode === !0 && (y = {
                padding: o.props.centerPadding + " 0px"
            });
            var p = Y(Y({}, S), y),
                b = o.props.touchMove,
                x = {
                    className: "slick-list",
                    style: p,
                    onClick: o.clickHandler,
                    onMouseDown: b ? o.swipeStart : null,
                    onMouseMove: o.state.dragging && b ? o.swipeMove : null,
                    onMouseUp: b ? o.swipeEnd : null,
                    onMouseLeave: o.state.dragging && b ? o.swipeEnd : null,
                    onTouchStart: b ? o.swipeStart : null,
                    onTouchMove: o.state.dragging && b ? o.swipeMove : null,
                    onTouchEnd: b ? o.touchEnd : null,
                    onTouchCancel: o.state.dragging && b ? o.swipeEnd : null,
                    onKeyDown: o.props.accessibility ? o.keyHandler : null
                },
                k = {
                    className: a,
                    dir: "ltr",
                    style: o.props.style
                };
            return o.props.unslick && (x = {
                className: "slick-list"
            }, k = {
                className: a
            }), Ze.default.createElement("div", k, o.props.unslick ? "" : h, Ze.default.createElement("div", nl({
                ref: o.listRefHandler
            }, x), Ze.default.createElement(WE.Track, nl({
                ref: o.trackRefHandler
            }, s), o.props.children)), o.props.unslick ? "" : m, o.props.unslick ? "" : d)
        }), o.list = null, o.track = null, o.state = Y(Y({}, HE.default), {}, {
            currentSlide: o.props.initialSlide,
            targetSlide: o.props.initialSlide ? o.props.initialSlide : 0,
            slideCount: Ze.default.Children.count(o.props.children)
        }), o.callbackTimers = [], o.clickable = !0, o.debouncedResize = null;
        var i = o.ssrInit();
        return o.state = Y(Y({}, o.state), i), o
    }
    return YE(r, [{
        key: "didPropsChange",
        value: function(o) {
            for (var i = !1, a = 0, l = Object.keys(this.props); a < l.length; a++) {
                var s = l[a];
                if (!o.hasOwnProperty(s)) {
                    i = !0;
                    break
                }
                if (!(cn(o[s]) === "object" || typeof o[s] == "function" || isNaN(o[s])) && o[s] !== this.props[s]) {
                    i = !0;
                    break
                }
            }
            return i || Ze.default.Children.count(this.props.children) !== Ze.default.Children.count(o.children)
        }
    }]), r
}(Ze.default.Component);
var eC = function(e) {
        return e.replace(/[A-Z]/g, function(t) {
            return "-" + t.toLowerCase()
        }).toLowerCase()
    },
    tC = eC,
    rC = tC,
    nC = function(e) {
        var t = /[height|width]$/;
        return t.test(e)
    },
    Zp = function(e) {
        var t = "",
            r = Object.keys(e);
        return r.forEach(function(n, o) {
            var i = e[n];
            n = rC(n), nC(n) && typeof i == "number" && (i = i + "px"), i === !0 ? t += n : i === !1 ? t += "not " + n : t += "(" + n + ": " + i + ")", o < r.length - 1 && (t += " and ")
        }), t
    },
    oC = function(e) {
        var t = "";
        return typeof e == "string" ? e : e instanceof Array ? (e.forEach(function(r, n) {
            t += Zp(r), n < e.length - 1 && (t += ", ")
        }), t) : Zp(e)
    },
    iC = oC,
    Ms, Jp;

function aC() {
    if (Jp) return Ms;
    Jp = 1;

    function e(t) {
        this.options = t, !t.deferSetup && this.setup()
    }
    return e.prototype = {
        constructor: e,
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(t) {
            return this.options === t || this.options.match === t
        }
    }, Ms = e, Ms
}
var Rs, e0;

function Kv() {
    if (e0) return Rs;
    e0 = 1;

    function e(n, o) {
        var i = 0,
            a = n.length,
            l;
        for (i; i < a && (l = o(n[i], i), l !== !1); i++);
    }

    function t(n) {
        return Object.prototype.toString.apply(n) === "[object Array]"
    }

    function r(n) {
        return typeof n == "function"
    }
    return Rs = {
        isFunction: r,
        isArray: t,
        each: e
    }, Rs
}
var Ls, t0;

function lC() {
    if (t0) return Ls;
    t0 = 1;
    var e = aC(),
        t = Kv().each;

    function r(n, o) {
        this.query = n, this.isUnconditional = o, this.handlers = [], this.mql = window.matchMedia(n);
        var i = this;
        this.listener = function(a) {
            i.mql = a.currentTarget || a, i.assess()
        }, this.mql.addListener(this.listener)
    }
    return r.prototype = {
        constuctor: r,
        addHandler: function(n) {
            var o = new e(n);
            this.handlers.push(o), this.matches() && o.on()
        },
        removeHandler: function(n) {
            var o = this.handlers;
            t(o, function(i, a) {
                if (i.equals(n)) return i.destroy(), !o.splice(a, 1)
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            t(this.handlers, function(n) {
                n.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var n = this.matches() ? "on" : "off";
            t(this.handlers, function(o) {
                o[n]()
            })
        }
    }, Ls = r, Ls
}
var zs, r0;

function sC() {
    if (r0) return zs;
    r0 = 1;
    var e = lC(),
        t = Kv(),
        r = t.each,
        n = t.isFunction,
        o = t.isArray;

    function i() {
        if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
    }
    return i.prototype = {
        constructor: i,
        register: function(a, l, s) {
            var u = this.queries,
                d = s && this.browserIsIncapable;
            return u[a] || (u[a] = new e(a, d)), n(l) && (l = {
                match: l
            }), o(l) || (l = [l]), r(l, function(c) {
                n(c) && (c = {
                    match: c
                }), u[a].addHandler(c)
            }), this
        },
        unregister: function(a, l) {
            var s = this.queries[a];
            return s && (l ? s.removeHandler(l) : (s.clear(), delete this.queries[a])), this
        }
    }, zs = i, zs
}
var Is, n0;

function uC() {
    if (n0) return Is;
    n0 = 1;
    var e = sC();
    return Is = new e, Is
}(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = a(w),
        r = zl,
        n = a(iC),
        o = a(kd),
        i = W;

    function a(j) {
        return j && j.__esModule ? j : {
            default: j
        }
    }

    function l(j) {
        "@babel/helpers - typeof";
        return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(T) {
            return typeof T
        } : function(T) {
            return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
        }, l(j)
    }

    function s() {
        return s = Object.assign ? Object.assign.bind() : function(j) {
            for (var T = 1; T < arguments.length; T++) {
                var _ = arguments[T];
                for (var O in _) Object.prototype.hasOwnProperty.call(_, O) && (j[O] = _[O])
            }
            return j
        }, s.apply(this, arguments)
    }

    function u(j, T) {
        var _ = Object.keys(j);
        if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(j);
            T && (O = O.filter(function(P) {
                return Object.getOwnPropertyDescriptor(j, P).enumerable
            })), _.push.apply(_, O)
        }
        return _
    }

    function d(j) {
        for (var T = 1; T < arguments.length; T++) {
            var _ = arguments[T] != null ? arguments[T] : {};
            T % 2 ? u(Object(_), !0).forEach(function(O) {
                k(j, O, _[O])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(j, Object.getOwnPropertyDescriptors(_)) : u(Object(_)).forEach(function(O) {
                Object.defineProperty(j, O, Object.getOwnPropertyDescriptor(_, O))
            })
        }
        return j
    }

    function c(j, T) {
        if (!(j instanceof T)) throw new TypeError("Cannot call a class as a function")
    }

    function f(j, T) {
        for (var _ = 0; _ < T.length; _++) {
            var O = T[_];
            O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(j, E(O.key), O)
        }
    }

    function h(j, T, _) {
        return T && f(j.prototype, T), _ && f(j, _), Object.defineProperty(j, "prototype", {
            writable: !1
        }), j
    }

    function m(j, T) {
        if (typeof T != "function" && T !== null) throw new TypeError("Super expression must either be null or a function");
        j.prototype = Object.create(T && T.prototype, {
            constructor: {
                value: j,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(j, "prototype", {
            writable: !1
        }), T && v(j, T)
    }

    function v(j, T) {
        return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, P) {
            return O.__proto__ = P, O
        }, v(j, T)
    }

    function S(j) {
        var T = b();
        return function() {
            var O = x(j),
                P;
            if (T) {
                var C = x(this).constructor;
                P = Reflect.construct(O, arguments, C)
            } else P = O.apply(this, arguments);
            return y(this, P)
        }
    }

    function y(j, T) {
        if (T && (l(T) === "object" || typeof T == "function")) return T;
        if (T !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return p(j)
    }

    function p(j) {
        if (j === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return j
    }

    function b() {
        try {
            var j = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
        } catch {}
        return (b = function() {
            return !!j
        })()
    }

    function x(j) {
        return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(_) {
            return _.__proto__ || Object.getPrototypeOf(_)
        }, x(j)
    }

    function k(j, T, _) {
        return T = E(T), T in j ? Object.defineProperty(j, T, {
            value: _,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : j[T] = _, j
    }

    function E(j) {
        var T = R(j, "string");
        return l(T) == "symbol" ? T : String(T)
    }

    function R(j, T) {
        if (l(j) != "object" || !j) return j;
        var _ = j[Symbol.toPrimitive];
        if (_ !== void 0) {
            var O = _.call(j, T || "default");
            if (l(O) != "object") return O;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (T === "string" ? String : Number)(j)
    }
    var L = (0, i.canUseDOM)() && uC();
    e.default = function(j) {
        m(_, j);
        var T = S(_);

        function _(O) {
            var P;
            return c(this, _), P = T.call(this, O), k(p(P), "innerSliderRefHandler", function(C) {
                return P.innerSlider = C
            }), k(p(P), "slickPrev", function() {
                return P.innerSlider.slickPrev()
            }), k(p(P), "slickNext", function() {
                return P.innerSlider.slickNext()
            }), k(p(P), "slickGoTo", function(C) {
                var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                return P.innerSlider.slickGoTo(C, M)
            }), k(p(P), "slickPause", function() {
                return P.innerSlider.pause("paused")
            }), k(p(P), "slickPlay", function() {
                return P.innerSlider.autoPlay("play")
            }), P.state = {
                breakpoint: null
            }, P._responsiveMediaHandlers = [], P
        }
        return h(_, [{
            key: "media",
            value: function(P, C) {
                L.register(P, C), this._responsiveMediaHandlers.push({
                    query: P,
                    handler: C
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var P = this;
                if (this.props.responsive) {
                    var C = this.props.responsive.map(function(I) {
                        return I.breakpoint
                    });
                    C.sort(function(I, D) {
                        return I - D
                    }), C.forEach(function(I, D) {
                        var N;
                        D === 0 ? N = (0, n.default)({
                            minWidth: 0,
                            maxWidth: I
                        }) : N = (0, n.default)({
                            minWidth: C[D - 1] + 1,
                            maxWidth: I
                        }), (0, i.canUseDOM)() && P.media(N, function() {
                            P.setState({
                                breakpoint: I
                            })
                        })
                    });
                    var M = (0, n.default)({
                        minWidth: C.slice(-1)[0]
                    });
                    (0, i.canUseDOM)() && this.media(M, function() {
                        P.setState({
                            breakpoint: null
                        })
                    })
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._responsiveMediaHandlers.forEach(function(P) {
                    L.unregister(P.query, P.handler)
                })
            }
        }, {
            key: "render",
            value: function() {
                var P = this,
                    C, M;
                this.state.breakpoint ? (M = this.props.responsive.filter(function(K) {
                    return K.breakpoint === P.state.breakpoint
                }), C = M[0].settings === "unslick" ? "unslick" : d(d(d({}, o.default), this.props), M[0].settings)) : C = d(d({}, o.default), this.props), C.centerMode && (C.slidesToScroll > 1, C.slidesToScroll = 1), C.fade && (C.slidesToShow > 1, C.slidesToScroll > 1, C.slidesToShow = 1, C.slidesToScroll = 1);
                var I = t.default.Children.toArray(this.props.children);
                I = I.filter(function(K) {
                    return typeof K == "string" ? !!K.trim() : !!K
                }), C.variableWidth && (C.rows > 1 || C.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), C.variableWidth = !1);
                for (var D = [], N = null, A = 0; A < I.length; A += C.rows * C.slidesPerRow) {
                    for (var F = [], $ = A; $ < A + C.rows * C.slidesPerRow; $ += C.slidesPerRow) {
                        for (var B = [], Q = $; Q < $ + C.slidesPerRow && (C.variableWidth && I[Q].props.style && (N = I[Q].props.style.width), !(Q >= I.length)); Q += 1) B.push(t.default.cloneElement(I[Q], {
                            key: 100 * A + 10 * $ + Q,
                            tabIndex: -1,
                            style: {
                                width: "".concat(100 / C.slidesPerRow, "%"),
                                display: "inline-block"
                            }
                        }));
                        F.push(t.default.createElement("div", {
                            key: 10 * A + $
                        }, B))
                    }
                    C.variableWidth ? D.push(t.default.createElement("div", {
                        key: A,
                        style: {
                            width: N
                        }
                    }, F)) : D.push(t.default.createElement("div", {
                        key: A
                    }, F))
                }
                if (C === "unslick") {
                    var G = "regular slider " + (this.props.className || "");
                    return t.default.createElement("div", {
                        className: G
                    }, I)
                } else D.length <= C.slidesToShow && !C.infinite && (C.unslick = !0);
                return t.default.createElement(r.InnerSlider, s({
                    style: this.props.style,
                    ref: this.innerSliderRefHandler
                }, (0, i.filterSettings)(C)), D)
            }
        }]), _
    }(t.default.Component)
})(hv);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = r(hv);

    function r(n) {
        return n && n.__esModule ? n : {
            default: n
        }
    }
    e.default = t.default
})(gv);
const cC = Yu(gv),
    dC = () => {
        w.useEffect(() => {
            pn.init({
                offset: 200,
                duration: 800,
                easing: "ease-in-sine",
                delay: 100
            })
        }, []);
        const {
            darkMode: e,
            toggleDarkMode: t
        } = gn();
        var r = {
            dots: !1,
            infinite: !0,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: !0,
                    dots: !1,
                    arrows: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: !0,
                    arrows: !1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                }
            }]
        };
        return g.jsxs("section", {
            id: "pizza",
            className: `${e?"dark bg-black":"light bg-white"} h-fit w-full lg:px-20 px-3 lg:py-20 py-10 flex flex-col justify-center items-center gap-6`,
            children: [g.jsx("h1", {
                "data-aos": "zoom-in",
                className: "text-6xl text-black dark:text-white font-bold text-center",
                children: "Top Rated"
            }), g.jsxs("p", {
                "data-aos": "zoom-in",
                className: "text-xl text-black dark:text-slate-100 text-center",
                children: ["Stop by and find out what all the buzz is about. Order your favorites today", g.jsx("br", {}), "or visit our restaurant to create your ideal pizza! "]
            }), g.jsx("div", {
                "data-aos": "slide-up",
                className: "lg:w-[90%] w-full",
                children: g.jsx(cC, { ...r,
                    children: xh.map((n, o) => g.jsxs("div", {
                        id: "product-box",
                        className: "bg-black dark:bg-gray-800 p-8 flex-col justify-center items-center gap-4 rounded-lg",
                        children: [g.jsx("img", {
                            src: n.image,
                            alt: "",
                            className: "rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        }), g.jsx("h1", {
                            className: "text-white text-center text-2xl font-bold dark:text-white",
                            children: n.title
                        }), g.jsx("h1", {
                            className: "text-orange-600 font-bold text-3xl",
                            children: n.price
                        }), g.jsx("p", {
                            className: "text-lg text-white dark:text-white text-center",
                            children: n.para
                        }), g.jsx("button", {
                            className: "bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black",
                            children: "ORDER NOW"
                        })]
                    }, o))
                })
            })]
        })
    },
    fC = () => g.jsx(g.Fragment, {
        children: g.jsxs(Cx, {
            children: [g.jsx(h3, {}), g.jsx(Ex, {}), g.jsx(_x, {}), g.jsx(dC, {}), g.jsx(Dx, {}), g.jsx(HS, {}), g.jsx(c4, {}), g.jsx(m3, {})]
        })
    });
As.createRoot(document.getElementById("root")).render(g.jsx(De.StrictMode, {
    children: g.jsx(fC, {})
}));