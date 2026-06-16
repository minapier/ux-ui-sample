/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

function ir(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function Eo(a, e) {
  (a.prototype = Object.create(e.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = e);
}
var pt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  zi = { duration: 0.5, overwrite: !1, delay: 0 },
  ws,
  Ve,
  le,
  Et = 1e8,
  oe = 1 / Et,
  _s = Math.PI * 2,
  Pl = _s / 4,
  Ml = 0,
  Ro = Math.sqrt,
  kl = Math.cos,
  Ol = Math.sin,
  De = function (e) {
    return typeof e == "string";
  },
  xe = function (e) {
    return typeof e == "function";
  },
  sr = function (e) {
    return typeof e == "number";
  },
  wn = function (e) {
    return typeof e > "u";
  },
  jt = function (e) {
    return typeof e == "object";
  },
  dt = function (e) {
    return e !== !1;
  },
  Ss = function () {
    return typeof window < "u";
  },
  dn = function (e) {
    return xe(e) || De(e);
  },
  Ao =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Qe = Array.isArray,
  Dl = /random\([^)]+\)/g,
  El = /,\s*/g,
  wo = /(?:-?\.?\d|\.)+/gi,
  Cs = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  os = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ps = /[+-]=-?[.\d]+/,
  Rl = /[^,'"\[\]\s]+/gi,
  Al = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ce,
  qt,
  ds,
  Ms,
  Tt = {},
  xn = {},
  Lo,
  zo = function (e) {
    return (xn = oi(e, Tt)) && Ke;
  },
  Sn = function (e, r) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Fi = function (e, r) {
    return !r && console.warn(e);
  },
  Fo = function (e, r) {
    return (e && (Tt[e] = r) && xn && (xn[e] = r)) || Tt;
  },
  Ii = function () {
    return 0;
  },
  Ll = { suppressEvents: !0, isStart: !0, kill: !1 },
  pn = { suppressEvents: !0, kill: !1 },
  zl = { suppressEvents: !0 },
  ks = {},
  vr = [],
  ps = {},
  Io,
  ht = {},
  as = {},
  So = 30,
  gn = [],
  Os = "",
  Ds = function (e) {
    var r = e[0],
      t,
      i;
    if ((jt(r) || xe(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
      for (i = gn.length; i-- && !gn[i].targetTest(r); );
      t = gn[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Ls(e[i], t)))) ||
        e.splice(i, 1);
    return e;
  },
  yr = function (e) {
    return e._gsap || Ds(Rt(e))[0]._gsap;
  },
  Es = function (e, r, t) {
    return (t = e[r]) && xe(t)
      ? e[r]()
      : (wn(t) && e.getAttribute && e.getAttribute(r)) || t;
  },
  it = function (e, r) {
    return (e = e.split(",")).forEach(r) || e;
  },
  ve = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  fe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Yr = function (e, r) {
    var t = r.charAt(0),
      i = parseFloat(r.substr(2));
    return (
      (e = parseFloat(e)),
      t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    );
  },
  Fl = function (e, r) {
    for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; );
    return i < t;
  },
  vn = function () {
    var e = vr.length,
      r = vr.slice(0),
      t,
      i;
    for (ps = {}, vr.length = 0, t = 0; t < e; t++)
      (i = r[t]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Rs = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  No = function (e, r, t, i) {
    vr.length && !Ve && vn(),
      e.render(r, t, i || !!(Ve && r < 0 && Rs(e))),
      vr.length && !Ve && vn();
  },
  Bo = function (e) {
    var r = parseFloat(e);
    return (r || r === 0) && (e + "").match(Rl).length < 2
      ? r
      : De(e)
      ? e.trim()
      : e;
  },
  Yo = function (e) {
    return e;
  },
  wt = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t]);
    return e;
  },
  Il = function (e) {
    return function (r, t) {
      for (var i in t)
        i in r || (i === "duration" && e) || i === "ease" || (r[i] = t[i]);
    };
  },
  oi = function (e, r) {
    for (var t in r) e[t] = r[t];
    return e;
  },
  Co = function a(e, r) {
    for (var t in r)
      t !== "__proto__" &&
        t !== "constructor" &&
        t !== "prototype" &&
        (e[t] = jt(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
    return e;
  },
  yn = function (e, r) {
    var t = {},
      i;
    for (i in e) i in r || (t[i] = e[i]);
    return t;
  },
  Ri = function (e) {
    var r = e.parent || ce,
      t = e.keyframes ? Il(Qe(e.keyframes)) : wt;
    if (dt(e.inherit))
      for (; r; ) t(e, r.vars.defaults), (r = r.parent || r._dp);
    return e;
  },
  Nl = function (e, r) {
    for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; );
    return t < 0;
  },
  Xo = function (e, r, t, i, n) {
    t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
    var s = e[i],
      o;
    if (n) for (o = r[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((r._next = s._next), (s._next = r)) : ((r._next = e[t]), (e[t] = r)),
      r._next ? (r._next._prev = r) : (e[i] = r),
      (r._prev = s),
      (r.parent = r._dp = e),
      r
    );
  },
  Cn = function (e, r, t, i) {
    t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
    var n = r._prev,
      s = r._next;
    n ? (n._next = s) : e[t] === r && (e[t] = s),
      s ? (s._prev = n) : e[i] === r && (e[i] = n),
      (r._next = r._prev = r.parent = null);
  },
  br = function (e, r) {
    e.parent &&
      (!r || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  Fr = function (e, r) {
    if (e && (!r || r._end > e._dur || r._start < 0))
      for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
    return e;
  },
  Bl = function (e) {
    for (var r = e.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return e;
  },
  gs = function (e, r, t, i) {
    return (
      e._startAt &&
      (Ve
        ? e._startAt.revert(pn)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(r, !0, i))
    );
  },
  Yl = function a(e) {
    return !e || (e._ts && a(e.parent));
  },
  Po = function (e) {
    return e._repeat ? ai(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  ai = function (e, r) {
    var t = Math.floor((e = fe(e / r)));
    return e && t === e ? t - 1 : t;
  },
  bn = function (e, r) {
    return (
      (e - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  Pn = function (e) {
    return (e._end = fe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || oe) || 0)
    ));
  },
  Mn = function (e, r) {
    var t = e._dp;
    return (
      t &&
        t.smoothChildTiming &&
        e._ts &&
        ((e._start = fe(
          t._time -
            (e._ts > 0
              ? r / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)
        )),
        Pn(e),
        t._dirty || Fr(t, e)),
      e
    );
  },
  Vo = function (e, r) {
    var t;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < e._time && (r._dur || !r.add))) &&
        ((t = bn(e.rawTime(), r)),
        (!r._dur || Yi(0, r.totalDuration(), t) - r._tTime > oe) &&
          r.render(t, !0)),
      Fr(e, r)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (t = e; t._dp; )
          t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
      e._zTime = -oe;
    }
  },
  Ht = function (e, r, t, i) {
    return (
      r.parent && br(r),
      (r._start = fe(
        (sr(t) ? t : t || e !== ce ? Dt(e, t, r) : e._time) + r._delay
      )),
      (r._end = fe(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      Xo(e, r, "_first", "_last", e._sort ? "_start" : 0),
      ms(r) || (e._recent = r),
      i || Vo(e, r),
      e._ts < 0 && Mn(e, e._tTime),
      e
    );
  },
  Uo = function (e, r) {
    return (
      (Tt.ScrollTrigger || Sn("scrollTrigger", r)) &&
      Tt.ScrollTrigger.create(r, e)
    );
  },
  Wo = function (e, r, t, i, n) {
    if ((Is(e, r, n), !e._initted)) return 1;
    if (
      !t &&
      e._pt &&
      !Ve &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Io !== _t.frame
    )
      return vr.push(e), (e._lazy = [n, i]), 1;
  },
  Xl = function a(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
  },
  ms = function (e) {
    var r = e.data;
    return r === "isFromStart" || r === "isStart";
  },
  Vl = function (e, r, t, i) {
    var n = e.ratio,
      s =
        r < 0 ||
        (!r &&
          ((!e._start && Xl(e) && !(!e._initted && ms(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !ms(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      u,
      f,
      h;
    if (
      (o &&
        e._repeat &&
        ((l = Yi(0, e._tDur, r)),
        (f = ai(l, o)),
        e._yoyo && f & 1 && (s = 1 - s),
        f !== ai(e._tTime, o) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || Ve || i || e._zTime === oe || (!r && e._zTime))
    ) {
      if (!e._initted && Wo(e, r, i, t, l)) return;
      for (
        h = e._zTime,
          e._zTime = r || (t ? oe : 0),
          t || (t = r && !h),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      r < 0 && gs(e, r, t, !0),
        e._onUpdate && !t && bt(e, "onUpdate"),
        l && e._repeat && !t && e.parent && bt(e, "onRepeat"),
        (r >= e._tDur || r < 0) &&
          e.ratio === s &&
          (s && br(e, 1),
          !t &&
            !Ve &&
            (bt(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = r);
  },
  Ul = function (e, r, t) {
    var i;
    if (t > r)
      for (i = e._first; i && i._start <= t; ) {
        if (i.data === "isPause" && i._start > r) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= t; ) {
        if (i.data === "isPause" && i._start < r) return i;
        i = i._prev;
      }
  },
  li = function (e, r, t, i) {
    var n = e._repeat,
      s = fe(r) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : fe(s * (n + 1) + e._rDelay * n)) : s),
      o > 0 && !i && Mn(e, (e._tTime = e._tDur * o)),
      e.parent && Pn(e),
      t || Fr(e.parent, e),
      e
    );
  },
  Mo = function (e) {
    return e instanceof je ? Fr(e) : li(e, e._dur);
  },
  Wl = { _start: 0, endTime: Ii, totalDuration: Ii },
  Dt = function a(e, r, t) {
    var i = e.labels,
      n = e._recent || Wl,
      s = e.duration() >= Et ? n.endTime(!1) : e._dur,
      o,
      l,
      u;
    return De(r) && (isNaN(r) || r in i)
      ? ((l = r.charAt(0)),
        (u = r.substr(-1) === "%"),
        (o = r.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (r = r.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (u ? (o < 0 ? n : t).totalDuration() / 100 : 1))
          : o < 0
          ? (r in i || (i[r] = s), i[r])
          : ((l = parseFloat(r.charAt(o - 1) + r.substr(o + 1))),
            u && t && (l = (l / 100) * (Qe(t) ? t[0] : t).totalDuration()),
            o > 1 ? a(e, r.substr(0, o - 1), t) + l : s + l))
      : r == null
      ? s
      : +r;
  },
  Ai = function (e, r, t) {
    var i = sr(r[1]),
      n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = r[n],
      o,
      l;
    if ((i && (s.duration = r[1]), (s.parent = t), e)) {
      for (o = s, l = t; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = dt(l.vars.inherit) && l.parent);
      (s.immediateRender = dt(o.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1]);
    }
    return new Ce(r[0], s, r[n + 1]);
  },
  Tr = function (e, r) {
    return e || e === 0 ? r(e) : r;
  },
  Yi = function (e, r, t) {
    return t < e ? e : t > r ? r : t;
  },
  Ue = function (e, r) {
    return !De(e) || !(r = Al.exec(e)) ? "" : r[1];
  },
  Gl = function (e, r, t) {
    return Tr(t, function (i) {
      return Yi(e, r, i);
    });
  },
  xs = [].slice,
  Go = function (e, r) {
    return (
      e &&
      jt(e) &&
      "length" in e &&
      ((!r && !e.length) || (e.length - 1 in e && jt(e[0]))) &&
      !e.nodeType &&
      e !== qt
    );
  },
  ql = function (e, r, t) {
    return (
      t === void 0 && (t = []),
      e.forEach(function (i) {
        var n;
        return (De(i) && !r) || Go(i, 1)
          ? (n = t).push.apply(n, Rt(i))
          : t.push(i);
      }) || t
    );
  },
  Rt = function (e, r, t) {
    return le && !r && le.selector
      ? le.selector(e)
      : De(e) && !t && (ds || !ui())
      ? xs.call((r || Ms).querySelectorAll(e), 0)
      : Qe(e)
      ? ql(e, t)
      : Go(e)
      ? xs.call(e, 0)
      : e
      ? [e]
      : [];
  },
  vs = function (e) {
    return (
      (e = Rt(e)[0] || Fi("Invalid scope") || {}),
      function (r) {
        var t = e.current || e.nativeElement || e;
        return Rt(
          r,
          t.querySelectorAll
            ? t
            : t === e
            ? Fi("Invalid scope") || Ms.createElement("div")
            : e
        );
      }
    );
  },
  qo = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ho = function (e) {
    if (xe(e)) return e;
    var r = jt(e) ? e : { each: e },
      t = Ir(r.ease),
      i = r.from || 0,
      n = parseFloat(r.base) || 0,
      s = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      u = r.axis,
      f = i,
      h = i;
    return (
      De(i)
        ? (f = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((f = i[0]), (h = i[1])),
      function (d, c, p) {
        var _ = (p || r).length,
          g = s[_],
          v,
          m,
          y,
          b,
          S,
          M,
          T,
          k,
          P;
        if (!g) {
          if (((P = r.grid === "auto" ? 0 : (r.grid || [1, Et])[1]), !P)) {
            for (
              T = -Et;
              T < (T = p[P++].getBoundingClientRect().left) && P < _;

            );
            P < _ && P--;
          }
          for (
            g = s[_] = [],
              v = l ? Math.min(P, _) * f - 0.5 : i % P,
              m = P === Et ? 0 : l ? (_ * h) / P - 0.5 : (i / P) | 0,
              T = 0,
              k = Et,
              M = 0;
            M < _;
            M++
          )
            (y = (M % P) - v),
              (b = m - ((M / P) | 0)),
              (g[M] = S = u ? Math.abs(u === "y" ? b : y) : Ro(y * y + b * b)),
              S > T && (T = S),
              S < k && (k = S);
          i === "random" && qo(g),
            (g.max = T - k),
            (g.min = k),
            (g.v = _ =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (P > _
                    ? _ - 1
                    : u
                    ? u === "y"
                      ? _ / P
                      : P
                    : Math.max(P, _ / P)) ||
                0) * (i === "edges" ? -1 : 1)),
            (g.b = _ < 0 ? n - _ : n),
            (g.u = Ue(r.amount || r.each) || 0),
            (t = t && _ < 0 ? su(t) : t);
        }
        return (
          (_ = (g[d] - g.min) / g.max || 0),
          fe(g.b + (t ? t(_) : _) * g.v) + g.u
        );
      }
    );
  },
  ys = function (e) {
    var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (t) {
      var i = fe(Math.round(parseFloat(t) / e) * e * r);
      return (i - (i % 1)) / r + (sr(t) ? 0 : Ue(t));
    };
  },
  jo = function (e, r) {
    var t = Qe(e),
      i,
      n;
    return (
      !t &&
        jt(e) &&
        ((i = t = e.radius || Et),
        e.values
          ? ((e = Rt(e.values)), (n = !sr(e[0])) && (i *= i))
          : (e = ys(e.increment))),
      Tr(
        r,
        t
          ? xe(e)
            ? function (s) {
                return (n = e(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = Et,
                    f = 0,
                    h = e.length,
                    d,
                    c;
                  h--;

                )
                  n
                    ? ((d = e[h].x - o), (c = e[h].y - l), (d = d * d + c * c))
                    : (d = Math.abs(e[h] - o)),
                    d < u && ((u = d), (f = h));
                return (
                  (f = !i || u <= i ? e[f] : s),
                  n || f === s || sr(s) ? f : f + Ue(s)
                );
              }
          : ys(e)
      )
    );
  },
  Qo = function (e, r, t, i) {
    return Tr(Qe(e) ? !r : t === !0 ? !!(t = 0) : !i, function () {
      return Qe(e)
        ? e[~~(Math.random() * e.length)]
        : (t = t || 1e-5) &&
            (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) *
                t *
                i
            ) / i;
    });
  },
  Hl = function () {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t];
    return function (i) {
      return r.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  jl = function (e, r) {
    return function (t) {
      return e(parseFloat(t)) + (r || Ue(t));
    };
  },
  Ql = function (e, r, t) {
    return Zo(e, r, 0, 1, t);
  },
  Ko = function (e, r, t) {
    return Tr(t, function (i) {
      return e[~~r(i)];
    });
  },
  Kl = function a(e, r, t) {
    var i = r - e;
    return Qe(e)
      ? Ko(e, a(0, e.length), r)
      : Tr(t, function (n) {
          return ((i + ((n - e) % i)) % i) + e;
        });
  },
  Zl = function a(e, r, t) {
    var i = r - e,
      n = i * 2;
    return Qe(e)
      ? Ko(e, a(0, e.length - 1), r)
      : Tr(t, function (s) {
          return (s = (n + ((s - e) % n)) % n || 0), e + (s > i ? n - s : s);
        });
  },
  fi = function (e) {
    return e.replace(Dl, function (r) {
      var t = r.indexOf("[") + 1,
        i = r.substring(t || 7, t ? r.indexOf("]") : r.length - 1).split(El);
      return Qo(t ? i : +i[0], t ? 0 : +i[1], +i[2] || 1e-5);
    });
  },
  Zo = function (e, r, t, i, n) {
    var s = r - e,
      o = i - t;
    return Tr(n, function (l) {
      return t + (((l - e) / s) * o || 0);
    });
  },
  $l = function a(e, r, t, i) {
    var n = isNaN(e + r)
      ? 0
      : function (c) {
          return (1 - c) * e + c * r;
        };
    if (!n) {
      var s = De(e),
        o = {},
        l,
        u,
        f,
        h,
        d;
      if ((t === !0 && (i = 1) && (t = null), s))
        (e = { p: e }), (r = { p: r });
      else if (Qe(e) && !Qe(r)) {
        for (f = [], h = e.length, d = h - 2, u = 1; u < h; u++)
          f.push(a(e[u - 1], e[u]));
        h--,
          (n = function (p) {
            p *= h;
            var _ = Math.min(d, ~~p);
            return f[_](p - _);
          }),
          (t = r);
      } else i || (e = oi(Qe(e) ? [] : {}, e));
      if (!f) {
        for (l in r) zs.call(o, e, l, "get", r[l]);
        n = function (p) {
          return Ys(p, o) || (s ? e.p : e);
        };
      }
    }
    return Tr(t, n);
  },
  ko = function (e, r, t) {
    var i = e.labels,
      n = Et,
      s,
      o,
      l;
    for (s in i)
      (o = i[s] - r),
        o < 0 == !!t && o && n > (o = Math.abs(o)) && ((l = s), (n = o));
    return l;
  },
  bt = function (e, r, t) {
    var i = e.vars,
      n = i[r],
      s = le,
      o = e._ctx,
      l,
      u,
      f;
    if (n)
      return (
        (l = i[r + "Params"]),
        (u = i.callbackScope || e),
        t && vr.length && vn(),
        o && (le = o),
        (f = l ? n.apply(u, l) : n.call(u)),
        (le = s),
        f
      );
  },
  Di = function (e) {
    return (
      br(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Ve),
      e.progress() < 1 && bt(e, "onInterrupt"),
      e
    );
  },
  si,
  $o = [],
  Jo = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Ss() || e.headless)) {
        var r = e.name,
          t = xe(e),
          i =
            r && !t && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: Ii,
            render: Ys,
            add: zs,
            kill: pu,
            modifier: du,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: kn,
            aliases: {},
            register: 0,
          };
        if ((ui(), e !== i)) {
          if (ht[r]) return;
          wt(i, wt(yn(e, n), s)),
            oi(i.prototype, oi(n, yn(e, s))),
            (ht[(i.prop = r)] = i),
            e.targetTest && (gn.push(i), (ks[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        Fo(r, i), e.register && e.register(Ke, i, nt);
      } else $o.push(e);
  },
  se = 255,
  Ei = {
    aqua: [0, se, se],
    lime: [0, se, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, se],
    navy: [0, 0, 128],
    white: [se, se, se],
    olive: [128, 128, 0],
    yellow: [se, se, 0],
    orange: [se, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [se, 0, 0],
    pink: [se, 192, 203],
    cyan: [0, se, se],
    transparent: [se, se, se, 0],
  },
  ls = function (e, r, t) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? r + (t - r) * e * 6
        : e < 0.5
        ? t
        : e * 3 < 2
        ? r + (t - r) * (2 / 3 - e) * 6
        : r) *
        se +
        0.5) |
        0
    );
  },
  ea = function (e, r, t) {
    var i = e ? (sr(e) ? [e >> 16, (e >> 8) & se, e & se] : 0) : Ei.black,
      n,
      s,
      o,
      l,
      u,
      f,
      h,
      d,
      c,
      p;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ei[e]))
        i = Ei[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & se, i & se, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & se, e & se]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = p = e.match(wo)), !r))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (f = +i[2] / 100),
            (s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
            (n = f * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = ls(l + 1 / 3, n, s)),
            (i[1] = ls(l, n, s)),
            (i[2] = ls(l - 1 / 3, n, s));
        else if (~e.indexOf("="))
          return (i = e.match(Cs)), t && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(wo) || Ei.transparent;
      i = i.map(Number);
    }
    return (
      r &&
        !p &&
        ((n = i[0] / se),
        (s = i[1] / se),
        (o = i[2] / se),
        (h = Math.max(n, s, o)),
        (d = Math.min(n, s, o)),
        (f = (h + d) / 2),
        h === d
          ? (l = u = 0)
          : ((c = h - d),
            (u = f > 0.5 ? c / (2 - h - d) : c / (h + d)),
            (l =
              h === n
                ? (s - o) / c + (s < o ? 6 : 0)
                : h === s
                ? (o - n) / c + 2
                : (n - s) / c + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(f * 100 + 0.5))),
      t && i.length < 4 && (i[3] = 1),
      i
    );
  },
  ta = function (e) {
    var r = [],
      t = [],
      i = -1;
    return (
      e.split(nr).forEach(function (n) {
        var s = n.match(Br) || [];
        r.push.apply(r, s), t.push((i += s.length + 1));
      }),
      (r.c = t),
      r
    );
  },
  Oo = function (e, r, t) {
    var i = "",
      n = (e + i).match(nr),
      s = r ? "hsla(" : "rgba(",
      o = 0,
      l,
      u,
      f,
      h;
    if (!n) return e;
    if (
      ((n = n.map(function (d) {
        return (
          (d = ea(d, r, 1)) &&
          s +
            (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      t && ((f = ta(e)), (l = t.c), l.join(i) !== f.c.join(i)))
    )
      for (u = e.replace(nr, "1").split(Br), h = u.length - 1; o < h; o++)
        i +=
          u[o] +
          (~l.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : t).shift());
    if (!u)
      for (u = e.split(nr), h = u.length - 1; o < h; o++) i += u[o] + n[o];
    return i + u[h];
  },
  nr = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Ei) a += "|" + e + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  Jl = /hsl[a]?\(/,
  As = function (e) {
    var r = e.join(" "),
      t;
    if (((nr.lastIndex = 0), nr.test(r)))
      return (
        (t = Jl.test(r)),
        (e[1] = Oo(e[1], t)),
        (e[0] = Oo(e[0], t, ta(e[1]))),
        !0
      );
  },
  Ni,
  _t = (function () {
    var a = Date.now,
      e = 500,
      r = 33,
      t = a(),
      i = t,
      n = 1e3 / 240,
      s = n,
      o = [],
      l,
      u,
      f,
      h,
      d,
      c,
      p = function _(g) {
        var v = a() - i,
          m = g === !0,
          y,
          b,
          S,
          M;
        if (
          ((v > e || v < 0) && (t += v - r),
          (i += v),
          (S = i - t),
          (y = S - s),
          (y > 0 || m) &&
            ((M = ++h.frame),
            (d = S - h.time * 1e3),
            (h.time = S = S / 1e3),
            (s += y + (y >= n ? 4 : n - y)),
            (b = 1)),
          m || (l = u(_)),
          b)
        )
          for (c = 0; c < o.length; c++) o[c](S, d, M, g);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (g) {
          return d / (1e3 / (g || 60));
        },
        wake: function () {
          Lo &&
            (!ds &&
              Ss() &&
              ((qt = ds = window),
              (Ms = qt.document || {}),
              (Tt.gsap = Ke),
              (qt.gsapVersions || (qt.gsapVersions = [])).push(Ke.version),
              zo(xn || qt.GreenSockGlobals || (!qt.gsap && qt) || {}),
              $o.forEach(Jo)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && h.sleep(),
            (u =
              f ||
              function (g) {
                return setTimeout(g, (s - h.time * 1e3 + 1) | 0);
              }),
            (Ni = 1),
            p(2));
        },
        sleep: function () {
          (f ? cancelAnimationFrame : clearTimeout)(l), (Ni = 0), (u = Ii);
        },
        lagSmoothing: function (g, v) {
          (e = g || 1 / 0), (r = Math.min(v || 33, e));
        },
        fps: function (g) {
          (n = 1e3 / (g || 240)), (s = h.time * 1e3 + n);
        },
        add: function (g, v, m) {
          var y = v
            ? function (b, S, M, T) {
                g(b, S, M, T), h.remove(y);
              }
            : g;
          return h.remove(g), o[m ? "unshift" : "push"](y), ui(), y;
        },
        remove: function (g, v) {
          ~(v = o.indexOf(g)) && o.splice(v, 1) && c >= v && c--;
        },
        _listeners: o,
      }),
      h
    );
  })(),
  ui = function () {
    return !Ni && _t.wake();
  },
  Z = {},
  eu = /^[\d.\-M][\d.\-,\s]/,
  tu = /["']/g,
  ru = function (e) {
    for (
      var r = {},
        t = e.substr(1, e.length - 3).split(":"),
        i = t[0],
        n = 1,
        s = t.length,
        o,
        l,
        u;
      n < s;
      n++
    )
      (l = t[n]),
        (o = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, o)),
        (r[i] = isNaN(u) ? u.replace(tu, "").trim() : +u),
        (i = l.substr(o + 1).trim());
    return r;
  },
  iu = function (e) {
    var r = e.indexOf("(") + 1,
      t = e.indexOf(")"),
      i = e.indexOf("(", r);
    return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t);
  },
  nu = function (e) {
    var r = (e + "").split("("),
      t = Z[r[0]];
    return t && r.length > 1 && t.config
      ? t.config.apply(
          null,
          ~e.indexOf("{") ? [ru(r[1])] : iu(e).split(",").map(Bo)
        )
      : Z._CE && eu.test(e)
      ? Z._CE("", e)
      : t;
  },
  su = function (e) {
    return function (r) {
      return 1 - e(1 - r);
    };
  },
  Ir = function (e, r) {
    return (e && (xe(e) ? e : Z[e] || nu(e))) || r;
  },
  Xr = function (e, r, t, i) {
    t === void 0 &&
      (t = function (l) {
        return 1 - r(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
        });
    var n = { easeIn: r, easeOut: t, easeInOut: i },
      s;
    return (
      it(e, function (o) {
        (Z[o] = Tt[o] = n), (Z[(s = o.toLowerCase())] = t);
        for (var l in n)
          Z[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = Z[o + "." + l] = n[l];
      }),
      n
    );
  },
  ra = function (e) {
    return function (r) {
      return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2;
    };
  },
  us = function a(e, r, t) {
    var i = r >= 1 ? r : 1,
      n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      s = (n / _s) * (Math.asin(1 / i) || 0),
      o = function (f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Ol((f - s) * n) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : ra(o);
    return (
      (n = _s / n),
      (l.config = function (u, f) {
        return a(e, u, f);
      }),
      l
    );
  },
  fs = function a(e, r) {
    r === void 0 && (r = 1.70158);
    var t = function (s) {
        return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
      },
      i =
        e === "out"
          ? t
          : e === "in"
          ? function (n) {
              return 1 - t(1 - n);
            }
          : ra(t);
    return (
      (i.config = function (n) {
        return a(e, n);
      }),
      i
    );
  };
it("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, e) {
  var r = e < 5 ? e + 1 : e;
  Xr(
    a + ",Power" + (r - 1),
    e
      ? function (t) {
          return Math.pow(t, r);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, r);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(t * 2, r) / 2
        : 1 - Math.pow((1 - t) * 2, r) / 2;
    }
  );
});
Z.Linear.easeNone = Z.none = Z.Linear.easeIn;
Xr("Elastic", us("in"), us("out"), us());
(function (a, e) {
  var r = 1 / e,
    t = 2 * r,
    i = 2.5 * r,
    n = function (o) {
      return o < r
        ? a * o * o
        : o < t
        ? a * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < i
        ? a * (o -= 2.25 / e) * o + 0.9375
        : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  Xr(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Xr("Expo", function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
Xr("Circ", function (a) {
  return -(Ro(1 - a * a) - 1);
});
Xr("Sine", function (a) {
  return a === 1 ? 1 : -kl(a * Pl) + 1;
});
Xr("Back", fs("in"), fs("out"), fs());
Z.SteppedEase =
  Z.steps =
  Tt.SteppedEase =
    {
      config: function (e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
          i = e + (r ? 0 : 1),
          n = r ? 1 : 0,
          s = 1 - oe;
        return function (o) {
          return (((i * Yi(0, s, o)) | 0) + n) * t;
        };
      },
    };
zi.ease = Z["quad.out"];
it("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (a) {
  return (Os += a + "," + a + "Params,");
});
var Ls = function (e, r) {
    (this.id = Ml++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = r),
      (this.get = r ? r.get : Es),
      (this.set = r ? r.getSetter : kn);
  },
  Bi = (function () {
    function a(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        li(this, +r.duration, 1, 1),
        (this.data = r.data),
        le && ((this._ctx = le), le.data.push(this)),
        Ni || _t.wake();
    }
    var e = a.prototype;
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            li(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, i) {
        if ((ui(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Mn(this, t), !n._dp || n.parent || Vo(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            Ht(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === oe) ||
            (!this._initted && this._dur && t) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), No(this, t, i)),
          this
        );
      }),
      (e.time = function (t, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Po(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (t, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (e.progress = function (t, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) +
                Po(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (t, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * n, i)
          : this._repeat
          ? ai(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (t, i) {
        if (!arguments.length) return this._rts === -oe ? 0 : this._rts;
        if (this._rts === t) return this;
        var n =
          this.parent && this._ts ? bn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -oe ? 0 : this._rts),
          this.totalTime(
            Yi(-Math.abs(this._delay), this.totalDuration(), n),
            i !== !1
          ),
          Pn(this),
          Bl(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (ui(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== oe &&
                      (this._tTime -= oe)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = fe(t);
          var i = this.parent || this._dp;
          return (
            i &&
              (i._sort || !this.parent) &&
              Ht(i, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (dt(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var i = this.parent || this._dp;
        return i
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? bn(i.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        t === void 0 && (t = zl);
        var i = Ve;
        return (
          (Ve = t),
          Rs(this) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          this.data !== "nested" && t.kill !== !1 && this.kill(),
          (Ve = i),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : n;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Mo(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = t), Mo(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, i) {
        return this.totalTime(Dt(this, t), dt(i));
      }),
      (e.restart = function (t, i) {
        return (
          this.play().totalTime(t ? -this._delay : 0, dt(i)),
          this._dur || (this._zTime = -oe),
          this
        );
      }),
      (e.play = function (t, i) {
        return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, i) {
        return (
          t != null && this.seek(t || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, i) {
        return t != null && this.seek(t, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -oe : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -oe), this;
      }),
      (e.isActive = function () {
        var t = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !t ||
          (this._ts &&
            this._initted &&
            t.isActive() &&
            (n = t.rawTime(!0)) >= i &&
            n < this.endTime(!0) - oe)
        );
      }),
      (e.eventCallback = function (t, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[t] = i),
                n && (s[t + "Params"] = n),
                t === "onUpdate" && (this._onUpdate = i))
              : delete s[t],
            this)
          : s[t];
      }),
      (e.then = function (t) {
        var i = this,
          n = i._prom;
        return new Promise(function (s) {
          var o = xe(t) ? t : Yo,
            l = function () {
              var f = i.then;
              (i.then = null),
                n && n(),
                xe(o) && (o = o(i)) && (o.then || o === i) && (i.then = f),
                s(o),
                (i.then = f);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? l()
            : (i._prom = l);
        });
      }),
      (e.kill = function () {
        Di(this);
      }),
      a
    );
  })();
wt(Bi.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -oe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var je = (function (a) {
  Eo(e, a);
  function e(t, i) {
    var n;
    return (
      t === void 0 && (t = {}),
      (n = a.call(this, t) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!t.smoothChildTiming),
      (n.autoRemoveChildren = !!t.autoRemoveChildren),
      (n._sort = dt(t.sortChildren)),
      ce && Ht(t.parent || ce, ir(n), i),
      t.reversed && n.reverse(),
      t.paused && n.paused(!0),
      t.scrollTrigger && Uo(ir(n), t.scrollTrigger),
      n
    );
  }
  var r = e.prototype;
  return (
    (r.to = function (i, n, s) {
      return Ai(0, arguments, this), this;
    }),
    (r.from = function (i, n, s) {
      return Ai(1, arguments, this), this;
    }),
    (r.fromTo = function (i, n, s, o) {
      return Ai(2, arguments, this), this;
    }),
    (r.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Ri(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new Ce(i, n, Dt(this, s), 1),
        this
      );
    }),
    (r.call = function (i, n, s) {
      return Ht(this, Ce.delayedCall(0, i, n), s);
    }),
    (r.staggerTo = function (i, n, s, o, l, u, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = u),
        (s.onCompleteParams = f),
        (s.parent = this),
        new Ce(i, s, Dt(this, l)),
        this
      );
    }),
    (r.staggerFrom = function (i, n, s, o, l, u, f) {
      return (
        (s.runBackwards = 1),
        (Ri(s).immediateRender = dt(s.immediateRender)),
        this.staggerTo(i, n, s, o, l, u, f)
      );
    }),
    (r.staggerFromTo = function (i, n, s, o, l, u, f, h) {
      return (
        (o.startAt = s),
        (Ri(o).immediateRender = dt(o.immediateRender)),
        this.staggerTo(i, n, o, l, u, f, h)
      );
    }),
    (r.render = function (i, n, s) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = i <= 0 ? 0 : fe(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        c,
        p,
        _,
        g,
        v,
        m,
        y,
        b,
        S,
        M,
        T;
      if (
        (this !== ce && f > l && i >= 0 && (f = l), f !== this._tTime || s || h)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((f += this._time - o), (i += this._time - o)),
          (d = f),
          (b = this._start),
          (y = this._ts),
          (v = !y),
          h && (u || (o = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((M = this._yoyo),
            (g = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(g * 100 + i, n, s);
          if (
            ((d = fe(f % g)),
            f === l
              ? ((_ = this._repeat), (d = u))
              : ((S = fe(f / g)),
                (_ = ~~S),
                _ && _ === S && ((d = u), _--),
                d > u && (d = u)),
            (S = ai(this._tTime, g)),
            !o &&
              this._tTime &&
              S !== _ &&
              this._tTime - S * g - this._dur <= 0 &&
              (S = _),
            M && _ & 1 && ((d = u - d), (T = 1)),
            _ !== S && !this._lock)
          ) {
            var k = M && S & 1,
              P = k === (M && _ & 1);
            if (
              (_ < S && (k = !k),
              (o = k ? 0 : f % u ? u : f),
              (this._lock = 1),
              (this.render(o || (T ? 0 : fe(_ * g)), n, !u)._lock = 0),
              (this._tTime = f),
              !n && this.parent && bt(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !T &&
                ((this.invalidate()._lock = 1), (S = _)),
              (o && o !== this._time) ||
                v !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              P &&
                ((this._lock = 2),
                (o = k ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !T && this.invalidate()),
              (this._lock = 0),
              !this._ts && !v)
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = Ul(this, fe(o), fe(d))), m && (f -= d - (d = m._start))),
          (this._tTime = f),
          (this._time = d),
          (this._act = !!y),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && f && u && !n && !S && (bt(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (d >= o && i >= 0)
          for (c = this._first; c; ) {
            if (
              ((p = c._next), (c._act || d >= c._start) && c._ts && m !== c)
            ) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (d - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (d - c._start) * c._ts,
                  n,
                  s
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (m = 0), p && (f += this._zTime = -oe);
                break;
              }
            }
            c = p;
          }
        else {
          c = this._last;
          for (var C = i < 0 ? i : d; c; ) {
            if (((p = c._prev), (c._act || C <= c._end) && c._ts && m !== c)) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (C - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (C - c._start) * c._ts,
                  n,
                  s || (Ve && Rs(c))
                ),
                d !== this._time || (!this._ts && !v))
              ) {
                (m = 0), p && (f += this._zTime = C ? -oe : oe);
                break;
              }
            }
            c = p;
          }
        }
        if (
          m &&
          !n &&
          (this.pause(),
          (m.render(d >= o ? 0 : -oe)._zTime = d >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = b), Pn(this), this.render(i, n, s);
        this._onUpdate && !n && bt(this, "onUpdate", !0),
          ((f === l && this._tTime >= this.totalDuration()) || (!f && o)) &&
            (b === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((f === l && this._ts > 0) || (!f && this._ts < 0)) &&
                br(this, 1),
              !n &&
                !(i < 0 && !o) &&
                (f || o || !l) &&
                (bt(
                  this,
                  f === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (i, n) {
      var s = this;
      if ((sr(n) || (n = Dt(this, n, i)), !(i instanceof Bi))) {
        if (Qe(i))
          return (
            i.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (De(i)) return this.addLabel(i, n);
        if (xe(i)) i = Ce.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Ht(this, i, n) : this;
    }),
    (r.getChildren = function (i, n, s, o) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -Et);
      for (var l = [], u = this._first; u; )
        u._start >= o &&
          (u instanceof Ce
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next);
      return l;
    }),
    (r.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (r.remove = function (i) {
      return De(i)
        ? this.removeLabel(i)
        : xe(i)
        ? this.killTweensOf(i)
        : (i.parent === this && Cn(this, i),
          i === this._recent && (this._recent = this._last),
          Fr(this));
    }),
    (r.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = fe(
              _t.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          a.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (i, n) {
      return (this.labels[i] = Dt(this, n)), this;
    }),
    (r.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (r.addPause = function (i, n, s) {
      var o = Ce.delayedCall(0, n || Ii, s);
      return (
        (o.data = "isPause"), (this._hasPause = 1), Ht(this, o, Dt(this, i))
      );
    }),
    (r.removePause = function (i) {
      var n = this._first;
      for (i = Dt(this, i); n; )
        n._start === i && n.data === "isPause" && br(n), (n = n._next);
    }),
    (r.killTweensOf = function (i, n, s) {
      for (var o = this.getTweensOf(i, s), l = o.length; l--; )
        xr !== o[l] && o[l].kill(i, n);
      return this;
    }),
    (r.getTweensOf = function (i, n) {
      for (var s = [], o = Rt(i), l = this._first, u = sr(n), f; l; )
        l instanceof Ce
          ? Fl(l._targets, o) &&
            (u
              ? (!xr || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (f = l.getTweensOf(o, n)).length && s.push.apply(s, f),
          (l = l._next);
      return s;
    }),
    (r.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        o = Dt(s, i),
        l = n,
        u = l.startAt,
        f = l.onStart,
        h = l.onStartParams,
        d = l.immediateRender,
        c,
        p = Ce.to(
          s,
          wt(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                oe,
              onStart: function () {
                if ((s.pause(), !c)) {
                  var g =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== g && li(p, g, 0, 1).render(p._time, !0, !0),
                    (c = 1);
                }
                f && f.apply(p, h || []);
              },
            },
            n
          )
        );
      return d ? p.render(0) : p;
    }),
    (r.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, wt({ startAt: { time: Dt(this, i) } }, s));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (i) {
      return i === void 0 && (i = this._time), ko(this, Dt(this, i));
    }),
    (r.previousLabel = function (i) {
      return i === void 0 && (i = this._time), ko(this, Dt(this, i), 1);
    }),
    (r.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + oe);
    }),
    (r.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      var o = this._first,
        l = this.labels,
        u;
      for (i = fe(i); o; )
        o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
      if (n) for (u in l) l[u] >= s && (l[u] += i);
      return Fr(this);
    }),
    (r.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return a.prototype.invalidate.call(this, i);
    }),
    (r.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Fr(this)
      );
    }),
    (r.totalDuration = function (i) {
      var n = 0,
        s = this,
        o = s._last,
        l = Et,
        u,
        f,
        h;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (h = s.parent; o; )
          (u = o._prev),
            o._dirty && o.totalDuration(),
            (f = o._start),
            f > l && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (Ht(s, o, f - o._delay, 1)._lock = 0))
              : (l = f),
            f < 0 &&
              o._ts &&
              ((n -= f),
              ((!h && !s._dp) || (h && h.smoothChildTiming)) &&
                ((s._start += fe(f / s._ts)), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (l = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u);
        li(s, s === ce && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((ce._ts && (No(ce, bn(i, ce)), (Io = _t.frame)), _t.frame >= So)) {
        So += pt.autoSleep || 120;
        var n = ce._first;
        if ((!n || !n._ts) && pt.autoSleep && _t._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || _t.sleep();
        }
      }
    }),
    e
  );
})(Bi);
wt(je.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var ou = function (e, r, t, i, n, s, o) {
    var l = new nt(this._pt, e, r, 0, 1, Bs, null, n),
      u = 0,
      f = 0,
      h,
      d,
      c,
      p,
      _,
      g,
      v,
      m;
    for (
      l.b = t,
        l.e = i,
        t += "",
        i += "",
        (v = ~i.indexOf("random(")) && (i = fi(i)),
        s && ((m = [t, i]), s(m, e, r), (t = m[0]), (i = m[1])),
        d = t.match(os) || [];
      (h = os.exec(i));

    )
      (p = h[0]),
        (_ = i.substring(u, h.index)),
        c ? (c = (c + 1) % 5) : _.substr(-5) === "rgba(" && (c = 1),
        p !== d[f++] &&
          ((g = parseFloat(d[f - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: _ || f === 1 ? _ : ",",
            s: g,
            c: p.charAt(1) === "=" ? Yr(g, p) - g : parseFloat(p) - g,
            m: c && c < 4 ? Math.round : 0,
          }),
          (u = os.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = o),
      (Ps.test(i) || v) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  zs = function (e, r, t, i, n, s, o, l, u, f) {
    xe(i) && (i = i(n || 0, e, s));
    var h = e[r],
      d =
        t !== "get"
          ? t
          : xe(h)
          ? u
            ? e[
                r.indexOf("set") || !xe(e["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](u)
            : e[r]()
          : h,
      c = xe(h) ? (u ? cu : sa) : Ns,
      p;
    if (
      (De(i) &&
        (~i.indexOf("random(") && (i = fi(i)),
        i.charAt(1) === "=" &&
          ((p = Yr(d, i) + (Ue(d) || 0)), (p || p === 0) && (i = p))),
      !f || d !== i || bs)
    )
      return !isNaN(d * i) && i !== ""
        ? ((p = new nt(
            this._pt,
            e,
            r,
            +d || 0,
            i - (d || 0),
            typeof h == "boolean" ? _u : oa,
            0,
            c
          )),
          u && (p.fp = u),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!h && !(r in e) && Sn(r, i),
          ou.call(this, e, r, d, i, c, l || pt.stringFilter, u));
  },
  au = function (e, r, t, i, n) {
    if (
      (xe(e) && (e = Li(e, n, r, t, i)),
      !jt(e) || (e.style && e.nodeType) || Qe(e) || Ao(e))
    )
      return De(e) ? Li(e, n, r, t, i) : e;
    var s = {},
      o;
    for (o in e) s[o] = Li(e[o], n, r, t, i);
    return s;
  },
  Fs = function (e, r, t, i, n, s) {
    var o, l, u, f;
    if (
      ht[e] &&
      (o = new ht[e]()).init(
        n,
        o.rawVars ? r[e] : au(r[e], i, n, s, t),
        t,
        i,
        s
      ) !== !1 &&
      ((t._pt = l = new nt(t._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      t !== si)
    )
      for (u = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--; )
        u[o._props[f]] = l;
    return o;
  },
  xr,
  bs,
  Is = function a(e, r, t) {
    var i = e.vars,
      n = i.ease,
      s = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      f = i.runBackwards,
      h = i.yoyoEase,
      d = i.keyframes,
      c = i.autoRevert,
      p = e._dur,
      _ = e._startAt,
      g = e._targets,
      v = e.parent,
      m = v && v.data === "nested" ? v.vars.targets : g,
      y = e._overwrite === "auto" && !ws,
      b = e.timeline,
      S = i.easeReverse || h,
      M,
      T,
      k,
      P,
      C,
      z,
      O,
      V,
      I,
      N,
      F,
      R,
      q;
    if (
      (b && (!d || !n) && (n = "none"),
      (e._ease = Ir(n, zi.ease)),
      (e._rEase = S && (Ir(S) || e._ease)),
      (e._from = !b && !!i.runBackwards),
      e._from && (e.ratio = 1),
      !b || (d && !i.stagger))
    ) {
      if (
        ((V = g[0] ? yr(g[0]).harness : 0),
        (R = V && i[V.prop]),
        (M = yn(i, ks)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          r < 0 && f && o && !c ? _.render(-1, !0) : _.revert(f && p ? pn : Ll),
          (_._lazy = 0)),
        s)
      ) {
        if (
          (br(
            (e._startAt = Ce.set(
              g,
              wt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: !_ && dt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return bt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (Ve || (!o && !c)) && e._startAt.revert(pn),
          o && p && r <= 0 && t <= 0)
        ) {
          r && (e._zTime = r);
          return;
        }
      } else if (f && p && !_) {
        if (
          (r && (o = !1),
          (k = wt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !_ && dt(l),
              immediateRender: o,
              stagger: 0,
              parent: v,
            },
            M
          )),
          R && (k[V.prop] = R),
          br((e._startAt = Ce.set(g, k))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (Ve ? e._startAt.revert(pn) : e._startAt.render(-1, !0)),
          (e._zTime = r),
          !o)
        )
          a(e._startAt, oe, oe);
        else if (!r) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (p && dt(l)) || (l && !p), T = 0;
        T < g.length;
        T++
      ) {
        if (
          ((C = g[T]),
          (O = C._gsap || Ds(g)[T]._gsap),
          (e._ptLookup[T] = N = {}),
          ps[O.id] && vr.length && vn(),
          (F = m === g ? T : m.indexOf(C)),
          V &&
            (I = new V()).init(C, R || M, e, F, m) !== !1 &&
            ((e._pt = P =
              new nt(e._pt, C, I.name, 0, 1, I.render, I, 0, I.priority)),
            I._props.forEach(function (ee) {
              N[ee] = P;
            }),
            I.priority && (z = 1)),
          !V || R)
        )
          for (k in M)
            ht[k] && (I = Fs(k, M, e, F, C, m))
              ? I.priority && (z = 1)
              : (N[k] = P =
                  zs.call(e, C, k, "get", M[k], F, m, 0, i.stringFilter));
        e._op && e._op[T] && e.kill(C, e._op[T]),
          y &&
            e._pt &&
            ((xr = e),
            ce.killTweensOf(C, N, e.globalTime(r)),
            (q = !e.parent),
            (xr = 0)),
          e._pt && l && (ps[O.id] = 1);
      }
      z && Xs(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !q),
      d && r <= 0 && b.render(Et, !0, !0);
  },
  lu = function (e, r, t, i, n, s, o, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[r],
      f,
      h,
      d,
      c;
    if (!u)
      for (
        u = e._ptCache[r] = [], d = e._ptLookup, c = e._targets.length;
        c--;

      ) {
        if (((f = d[c][r]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== r && f.fp !== r; ) f = f._next;
        if (!f)
          return (
            (bs = 1),
            (e.vars[r] = "+=0"),
            Is(e, o),
            (bs = 0),
            l
              ? Fi(
                  r +
                    " not eligible for reset. Try splitting into individual properties"
                )
              : 1
          );
        u.push(f);
      }
    for (c = u.length; c--; )
      (h = u[c]),
        (f = h._pt || h),
        (f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c),
        (f.c = t - f.s),
        h.e && (h.e = ve(t) + Ue(h.e)),
        h.b && (h.b = f.s + Ue(h.b));
  },
  uu = function (e, r) {
    var t = e[0] ? yr(e[0]).harness : 0,
      i = t && t.aliases,
      n,
      s,
      o,
      l;
    if (!i) return r;
    n = oi({}, r);
    for (s in i)
      if (s in n) for (l = i[s].split(","), o = l.length; o--; ) n[l[o]] = n[s];
    return n;
  },
  fu = function (e, r, t, i) {
    var n = r.ease || i || "power1.inOut",
      s,
      o;
    if (Qe(r))
      (o = t[e] || (t[e] = [])),
        r.forEach(function (l, u) {
          return o.push({ t: (u / (r.length - 1)) * 100, v: l, e: n });
        });
    else
      for (s in r)
        (o = t[s] || (t[s] = [])),
          s === "ease" || o.push({ t: parseFloat(e), v: r[s], e: n });
  },
  Li = function (e, r, t, i, n) {
    return xe(e)
      ? e.call(r, t, i, n)
      : De(e) && ~e.indexOf("random(")
      ? fi(e)
      : e;
  },
  ia =
    Os +
    "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",
  na = {};
it(ia + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (na[a] = 1);
});
var Ce = (function (a) {
  Eo(e, a);
  function e(t, i, n, s) {
    var o;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (o = a.call(this, s ? i : Ri(i)) || this);
    var l = o.vars,
      u = l.duration,
      f = l.delay,
      h = l.immediateRender,
      d = l.stagger,
      c = l.overwrite,
      p = l.keyframes,
      _ = l.defaults,
      g = l.scrollTrigger,
      v = i.parent || ce,
      m = (Qe(t) || Ao(t) ? sr(t[0]) : "length" in i) ? [t] : Rt(t),
      y,
      b,
      S,
      M,
      T,
      k,
      P,
      C;
    if (
      ((o._targets = m.length
        ? Ds(m)
        : Fi(
            "GSAP target " + t + " not found. https://gsap.com",
            !pt.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = c),
      p || d || dn(u) || dn(f))
    ) {
      i = o.vars;
      var z = i.easeReverse || i.yoyoEase;
      if (
        ((y = o.timeline =
          new je({
            data: "nested",
            defaults: _ || {},
            targets: v && v.data === "nested" ? v.vars.targets : m,
          })),
        y.kill(),
        (y.parent = y._dp = ir(o)),
        (y._start = 0),
        d || dn(u) || dn(f))
      ) {
        if (((M = m.length), (P = d && Ho(d)), jt(d)))
          for (T in d) ~ia.indexOf(T) && (C || (C = {}), (C[T] = d[T]));
        for (b = 0; b < M; b++)
          (S = yn(i, na)),
            (S.stagger = 0),
            z && (S.easeReverse = z),
            C && oi(S, C),
            (k = m[b]),
            (S.duration = +Li(u, ir(o), b, k, m)),
            (S.delay = (+Li(f, ir(o), b, k, m) || 0) - o._delay),
            !d &&
              M === 1 &&
              S.delay &&
              ((o._delay = f = S.delay), (o._start += f), (S.delay = 0)),
            y.to(k, S, P ? P(b, k, m) : 0),
            (y._ease = Z.none);
        y.duration() ? (u = f = 0) : (o.timeline = 0);
      } else if (p) {
        Ri(wt(y.vars.defaults, { ease: "none" })),
          (y._ease = Ir(p.ease || i.ease || "none"));
        var O = 0,
          V,
          I,
          N;
        if (Qe(p))
          p.forEach(function (F) {
            return y.to(m, F, ">");
          }),
            y.duration();
        else {
          S = {};
          for (T in p)
            T === "ease" || T === "easeEach" || fu(T, p[T], S, p.easeEach);
          for (T in S)
            for (
              V = S[T].sort(function (F, R) {
                return F.t - R.t;
              }),
                O = 0,
                b = 0;
              b < V.length;
              b++
            )
              (I = V[b]),
                (N = {
                  ease: I.e,
                  duration: ((I.t - (b ? V[b - 1].t : 0)) / 100) * u,
                }),
                (N[T] = I.v),
                y.to(m, N, O),
                (O += N.duration);
          y.duration() < u && y.to({}, { duration: u - y.duration() });
        }
      }
      u || o.duration((u = y.duration()));
    } else o.timeline = 0;
    return (
      c === !0 && !ws && ((xr = ir(o)), ce.killTweensOf(m), (xr = 0)),
      Ht(v, ir(o), n),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (h ||
        (!u &&
          !p &&
          o._start === fe(v._time) &&
          dt(h) &&
          Yl(ir(o)) &&
          v.data !== "nested")) &&
        ((o._tTime = -oe), o.render(Math.max(0, -f) || 0)),
      g && Uo(ir(o), g),
      o
    );
  }
  var r = e.prototype;
  return (
    (r.render = function (i, n, s) {
      var o = this._time,
        l = this._tDur,
        u = this._dur,
        f = i < 0,
        h = i > l - oe && !f ? l : i < oe ? 0 : i,
        d,
        c,
        p,
        _,
        g,
        v,
        m,
        y;
      if (!u) Vl(this, i, n, s);
      else if (
        h !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f) ||
        this._lazy
      ) {
        if (((d = h), (y = this.timeline), this._repeat)) {
          if (((_ = u + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(_ * 100 + i, n, s);
          if (
            ((d = fe(h % _)),
            h === l
              ? ((p = this._repeat), (d = u))
              : ((g = fe(h / _)),
                (p = ~~g),
                p && p === g ? ((d = u), p--) : d > u && (d = u)),
            (v = this._yoyo && p & 1),
            v && (d = u - d),
            (g = ai(this._tTime, _)),
            d === o && !s && this._initted && p === g)
          )
            return (this._tTime = h), this;
          p !== g &&
            this.vars.repeatRefresh &&
            !v &&
            !this._lock &&
            d !== _ &&
            this._initted &&
            ((this._lock = s = 1),
            (this.render(fe(_ * p), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Wo(this, f ? i : d, s, n, h)) return (this._tTime = 0), this;
          if (o !== this._time && !(s && this.vars.repeatRefresh && p !== g))
            return this;
          if (u !== this._dur) return this.render(i, n, s);
        }
        if (this._rEase) {
          var b = d < o;
          if (b !== this._inv) {
            var S = b ? o : u - o;
            (this._inv = b),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = o),
              (this._invRecip = S ? (b ? -1 : 1) / S : 0),
              (this._invScale = b ? -this.ratio : 1 - this.ratio),
              (this._invEase = b ? this._rEase : this._ease);
          }
          this.ratio = m =
            this._invRatio +
            this._invScale *
              this._invEase((d - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(d / u);
        if (
          (this._from && (this.ratio = m = 1 - m),
          (this._tTime = h),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !o && h && !n && !g && (bt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (c = this._pt; c; ) c.r(m, c.d), (c = c._next);
        (y && y.render(i < 0 ? i : y._dur * y._ease(d / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (f && gs(this, i, n, s), bt(this, "onUpdate")),
          this._repeat &&
            p !== g &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            bt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (f && !this._onUpdate && gs(this, i, !0, !0),
            (i || !u) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              br(this, 1),
            !n &&
              !(f && !o) &&
              (h || o || v) &&
              (bt(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        a.prototype.invalidate.call(this, i)
      );
    }),
    (r.resetTo = function (i, n, s, o, l) {
      Ni || _t.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || Is(this, u),
        (f = this._ease(u / this._dur)),
        lu(this, i, n, s, o, f, u, l)
          ? this.resetTo(i, n, s, o, 1)
          : (Mn(this, 0),
            this.parent ||
              Xo(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Di(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Ve),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, xr && xr.vars.overwrite !== !0)
            ._first || Di(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            li(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? Rt(i) : o,
        u = this._ptLookup,
        f = this._pt,
        h,
        d,
        c,
        p,
        _,
        g,
        v;
      if ((!n || n === "all") && Nl(o, l))
        return n === "all" && (this._pt = 0), Di(this);
      for (
        h = this._op = this._op || [],
          n !== "all" &&
            (De(n) &&
              ((_ = {}),
              it(n, function (m) {
                return (_[m] = 1);
              }),
              (n = _)),
            (n = uu(o, n))),
          v = o.length;
        v--;

      )
        if (~l.indexOf(o[v])) {
          (d = u[v]),
            n === "all"
              ? ((h[v] = n), (p = d), (c = {}))
              : ((c = h[v] = h[v] || {}), (p = n));
          for (_ in p)
            (g = d && d[_]),
              g &&
                ((!("kill" in g.d) || g.d.kill(_) === !0) && Cn(this, g, "_pt"),
                delete d[_]),
              c !== "all" && (c[_] = 1);
        }
      return this._initted && !this._pt && f && Di(this), this;
    }),
    (e.to = function (i, n) {
      return new e(i, n, arguments[2]);
    }),
    (e.from = function (i, n) {
      return Ai(1, arguments);
    }),
    (e.delayedCall = function (i, n, s, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, n, s) {
      return Ai(2, arguments);
    }),
    (e.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n);
    }),
    (e.killTweensOf = function (i, n, s) {
      return ce.killTweensOf(i, n, s);
    }),
    e
  );
})(Bi);
wt(Ce.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
it("staggerTo,staggerFrom,staggerFromTo", function (a) {
  Ce[a] = function () {
    var e = new je(),
      r = xs.call(arguments, 0);
    return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r);
  };
});
var Ns = function (e, r, t) {
    return (e[r] = t);
  },
  sa = function (e, r, t) {
    return e[r](t);
  },
  cu = function (e, r, t, i) {
    return e[r](i.fp, t);
  },
  hu = function (e, r, t) {
    return e.setAttribute(r, t);
  },
  kn = function (e, r) {
    return xe(e[r]) ? sa : wn(e[r]) && e.setAttribute ? hu : Ns;
  },
  oa = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
  },
  _u = function (e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r);
  },
  Bs = function (e, r) {
    var t = r._pt,
      i = "";
    if (!e && r.b) i = r.b;
    else if (e === 1 && r.e) i = r.e;
    else {
      for (; t; )
        (i =
          t.p +
          (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
          i),
          (t = t._next);
      i += r.c;
    }
    r.set(r.t, r.p, i, r);
  },
  Ys = function (e, r) {
    for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
  },
  du = function (e, r, t, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(e, r, t), (n = s);
  },
  pu = function (e) {
    for (var r = this._pt, t, i; r; )
      (i = r._next),
        (r.p === e && !r.op) || r.op === e
          ? Cn(this, r, "_pt")
          : r.dep || (t = 1),
        (r = i);
    return !t;
  },
  gu = function (e, r, t, i) {
    i.mSet(e, r, i.m.call(i.tween, t, i.mt), i);
  },
  Xs = function (e) {
    for (var r = e._pt, t, i, n, s; r; ) {
      for (t = r._next, i = n; i && i.pr > r.pr; ) i = i._next;
      (r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
        (r._next = i) ? (i._prev = r) : (s = r),
        (r = t);
    }
    e._pt = n;
  },
  nt = (function () {
    function a(r, t, i, n, s, o, l, u, f) {
      (this.t = t),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = o || oa),
        (this.d = l || this),
        (this.set = u || Ns),
        (this.pr = f || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var e = a.prototype;
    return (
      (e.modifier = function (t, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = gu),
          (this.m = t),
          (this.mt = n),
          (this.tween = i);
      }),
      a
    );
  })();
it(
  Os +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",
  function (a) {
    return (ks[a] = 1);
  }
);
Tt.TweenMax = Tt.TweenLite = Ce;
Tt.TimelineLite = Tt.TimelineMax = je;
ce = new je({
  sortChildren: !1,
  defaults: zi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
pt.stringFilter = As;
var Nr = [],
  mn = {},
  mu = [],
  Do = 0,
  xu = 0,
  cs = function (e) {
    return (mn[e] || mu).map(function (r) {
      return r();
    });
  },
  Ts = function () {
    var e = Date.now(),
      r = [];
    e - Do > 2 &&
      (cs("matchMediaInit"),
      Nr.forEach(function (t) {
        var i = t.queries,
          n = t.conditions,
          s,
          o,
          l,
          u;
        for (o in i)
          (s = qt.matchMedia(i[o]).matches),
            s && (l = 1),
            s !== n[o] && ((n[o] = s), (u = 1));
        u && (t.revert(), l && r.push(t));
      }),
      cs("matchMediaRevert"),
      r.forEach(function (t) {
        return t.onMatch(t, function (i) {
          return t.add(null, i);
        });
      }),
      (Do = e),
      cs("matchMedia"));
  },
  aa = (function () {
    function a(r, t) {
      (this.selector = t && vs(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = xu++),
        r && this.add(r);
    }
    var e = a.prototype;
    return (
      (e.add = function (t, i, n) {
        xe(t) && ((n = i), (i = t), (t = xe));
        var s = this,
          o = function () {
            var u = le,
              f = s.selector,
              h;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = vs(n)),
              (le = s),
              (h = i.apply(s, arguments)),
              xe(h) && s._r.push(h),
              (le = u),
              (s.selector = f),
              (s.isReverted = !1),
              h
            );
          };
        return (
          (s.last = o),
          t === xe
            ? o(s, function (l) {
                return s.add(null, l);
              })
            : t
            ? (s[t] = o)
            : o
        );
      }),
      (e.ignore = function (t) {
        var i = le;
        (le = null), t(this), (le = i);
      }),
      (e.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof a
              ? t.push.apply(t, i.getTweens())
              : i instanceof Ce &&
                  !(i.parent && i.parent.data === "nested") &&
                  t.push(i);
          }),
          t
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (t, i) {
        var n = this;
        if (
          (t
            ? (function () {
                for (var o = n.getTweens(), l = n.data.length, u; l--; )
                  (u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (f) {
                        return o.splice(o.indexOf(f), 1);
                      }));
                for (
                  o
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, h) {
                      return h.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(t);
                    }),
                    l = n.data.length;
                  l--;

                )
                  (u = n.data[l]),
                    u instanceof je
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof Ce) && u.revert && u.revert(t);
                n._r.forEach(function (f) {
                  return f(t, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = Nr.length; s--; )
            Nr[s].id === this.id && Nr.splice(s, 1);
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      a
    );
  })(),
  vu = (function () {
    function a(r) {
      (this.contexts = []), (this.scope = r), le && le.data.push(this);
    }
    var e = a.prototype;
    return (
      (e.add = function (t, i, n) {
        jt(t) || (t = { matches: t });
        var s = new aa(0, n || this.scope),
          o = (s.conditions = {}),
          l,
          u,
          f;
        le && !s.selector && (s.selector = le.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = t);
        for (u in t)
          u === "all"
            ? (f = 1)
            : ((l = qt.matchMedia(t[u])),
              l &&
                (Nr.indexOf(s) < 0 && Nr.push(s),
                (o[u] = l.matches) && (f = 1),
                l.addListener
                  ? l.addListener(Ts)
                  : l.addEventListener("change", Ts)));
        return (
          f &&
            i(s, function (h) {
              return s.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      (e.kill = function (t) {
        this.contexts.forEach(function (i) {
          return i.kill(t, !0);
        });
      }),
      a
    );
  })(),
  Tn = {
    registerPlugin: function () {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
        r[t] = arguments[t];
      r.forEach(function (i) {
        return Jo(i);
      });
    },
    timeline: function (e) {
      return new je(e);
    },
    getTweensOf: function (e, r) {
      return ce.getTweensOf(e, r);
    },
    getProperty: function (e, r, t, i) {
      De(e) && (e = Rt(e)[0]);
      var n = yr(e || {}).get,
        s = t ? Yo : Bo;
      return (
        t === "native" && (t = ""),
        e &&
          (r
            ? s(((ht[r] && ht[r].get) || n)(e, r, t, i))
            : function (o, l, u) {
                return s(((ht[o] && ht[o].get) || n)(e, o, l, u));
              })
      );
    },
    quickSetter: function (e, r, t) {
      if (((e = Rt(e)), e.length > 1)) {
        var i = e.map(function (f) {
            return Ke.quickSetter(f, r, t);
          }),
          n = i.length;
        return function (f) {
          for (var h = n; h--; ) i[h](f);
        };
      }
      e = e[0] || {};
      var s = ht[r],
        o = yr(e),
        l = (o.harness && (o.harness.aliases || {})[r]) || r,
        u = s
          ? function (f) {
              var h = new s();
              (si._pt = 0),
                h.init(e, t ? f + t : f, si, 0, [e]),
                h.render(1, h),
                si._pt && Ys(1, si);
            }
          : o.set(e, l);
      return s
        ? u
        : function (f) {
            return u(e, l, t ? f + t : f, o, 1);
          };
    },
    quickTo: function (e, r, t) {
      var i,
        n = Ke.to(
          e,
          wt(
            ((i = {}), (i[r] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            t || {}
          )
        ),
        s = function (l, u, f) {
          return n.resetTo(r, l, u, f);
        };
      return (s.tween = n), s;
    },
    isTweening: function (e) {
      return ce.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ir(e.ease, zi.ease)), Co(zi, e || {});
    },
    config: function (e) {
      return Co(pt, e || {});
    },
    registerEffect: function (e) {
      var r = e.name,
        t = e.effect,
        i = e.plugins,
        n = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !ht[o] && !Tt[o] && Fi(r + " effect requires " + o + " plugin.")
        );
      }),
        (as[r] = function (o, l, u) {
          return t(Rt(o), wt(l || {}, n), u);
        }),
        s &&
          (je.prototype[r] = function (o, l, u) {
            return this.add(as[r](o, jt(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, r) {
      Z[e] = Ir(r);
    },
    parseEase: function (e, r) {
      return arguments.length ? Ir(e, r) : Z;
    },
    getById: function (e) {
      return ce.getById(e);
    },
    exportRoot: function (e, r) {
      e === void 0 && (e = {});
      var t = new je(e),
        i,
        n;
      for (
        t.smoothChildTiming = dt(e.smoothChildTiming),
          ce.remove(t),
          t._dp = 0,
          t._time = t._tTime = ce._time,
          i = ce._first;
        i;

      )
        (n = i._next),
          (r ||
            !(
              !i._dur &&
              i instanceof Ce &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Ht(t, i, i._start - i._delay),
          (i = n);
      return Ht(ce, t, 0), t;
    },
    context: function (e, r) {
      return e ? new aa(e, r) : le;
    },
    matchMedia: function (e) {
      return new vu(e);
    },
    matchMediaRefresh: function () {
      return (
        Nr.forEach(function (e) {
          var r = e.conditions,
            t,
            i;
          for (i in r) r[i] && ((r[i] = !1), (t = 1));
          t && e.revert();
        }) || Ts()
      );
    },
    addEventListener: function (e, r) {
      var t = mn[e] || (mn[e] = []);
      ~t.indexOf(r) || t.push(r);
    },
    removeEventListener: function (e, r) {
      var t = mn[e],
        i = t && t.indexOf(r);
      i >= 0 && t.splice(i, 1);
    },
    utils: {
      wrap: Kl,
      wrapYoyo: Zl,
      distribute: Ho,
      random: Qo,
      snap: jo,
      normalize: Ql,
      getUnit: Ue,
      clamp: Gl,
      splitColor: ea,
      toArray: Rt,
      selector: vs,
      mapRange: Zo,
      pipe: Hl,
      unitize: jl,
      interpolate: $l,
      shuffle: qo,
    },
    install: zo,
    effects: as,
    ticker: _t,
    updateRoot: je.updateRoot,
    plugins: ht,
    globalTimeline: ce,
    core: {
      PropTween: nt,
      globals: Fo,
      Tween: Ce,
      Timeline: je,
      Animation: Bi,
      getCache: yr,
      _removeLinkedListItem: Cn,
      reverting: function () {
        return Ve;
      },
      context: function (e) {
        return e && le && (le.data.push(e), (e._ctx = le)), le;
      },
      suppressOverwrites: function (e) {
        return (ws = e);
      },
    },
  };
it("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (Tn[a] = Ce[a]);
});
_t.add(je.updateRoot);
si = Tn.to({}, { duration: 0 });
var yu = function (e, r) {
    for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
      t = t._next;
    return t;
  },
  bu = function (e, r) {
    var t = e._targets,
      i,
      n,
      s;
    for (i in r)
      for (n = t.length; n--; )
        (s = e._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = yu(s, i)),
            s && s.modifier && s.modifier(r[i], e, t[n], i));
  },
  hs = function (e, r) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (o) {
          var l, u;
          if (
            (De(n) &&
              ((l = {}),
              it(n, function (f) {
                return (l[f] = 1);
              }),
              (n = l)),
            r)
          ) {
            l = {};
            for (u in n) l[u] = r(n[u]);
            n = l;
          }
          bu(o, n);
        };
      },
    };
  },
  Ke =
    Tn.registerPlugin(
      {
        name: "attr",
        init: function (e, r, t, i, n) {
          var s, o, l;
          this.tween = t;
          for (s in r)
            (l = e.getAttribute(s) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                r[s],
                i,
                n,
                0,
                0,
                s
              )),
              (o.op = s),
              (o.b = l),
              this._props.push(s);
        },
        render: function (e, r) {
          for (var t = r._pt; t; )
            Ve ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, r) {
          for (var t = r.length; t--; )
            this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
        },
      },
      hs("roundProps", ys),
      hs("modifiers"),
      hs("snap", jo)
    ) || Tn;
Ce.version = je.version = Ke.version = "3.15.0";
Lo = 1;
Ss() && ui();
var Tu = Z.Power0,
  wu = Z.Power1,
  Su = Z.Power2,
  Cu = Z.Power3,
  Pu = Z.Power4,
  Mu = Z.Linear,
  ku = Z.Quad,
  Ou = Z.Cubic,
  Du = Z.Quart,
  Eu = Z.Quint,
  Ru = Z.Strong,
  Au = Z.Elastic,
  Lu = Z.Back,
  zu = Z.SteppedEase,
  Fu = Z.Bounce,
  Iu = Z.Sine,
  Nu = Z.Expo,
  Bu = Z.Circ;
var la,
  wr,
  hi,
  Hs,
  Gr,
  Yu,
  ua,
  js,
  Xu = function () {
    return typeof window < "u";
  },
  ar = {},
  Wr = 180 / Math.PI,
  _i = Math.PI / 180,
  ci = Math.atan2,
  fa = 1e8,
  Qs = /([A-Z])/g,
  Vu = /(left|right|width|margin|padding|x)/i,
  Uu = /[\s,\(]\S/,
  Qt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Us = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
  },
  Wu = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
      r
    );
  },
  Gu = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  qu = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e === 1 ? r.e : e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  Hu = function (e, r) {
    var t = r.s + r.c * e;
    r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  xa = function (e, r) {
    return r.set(r.t, r.p, e ? r.e : r.b, r);
  },
  va = function (e, r) {
    return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
  },
  ju = function (e, r, t) {
    return (e.style[r] = t);
  },
  Qu = function (e, r, t) {
    return e.style.setProperty(r, t);
  },
  Ku = function (e, r, t) {
    return (e._gsap[r] = t);
  },
  Zu = function (e, r, t) {
    return (e._gsap.scaleX = e._gsap.scaleY = t);
  },
  $u = function (e, r, t, i, n) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = t), s.renderTransform(n, s);
  },
  Ju = function (e, r, t, i, n) {
    var s = e._gsap;
    (s[r] = t), s.renderTransform(n, s);
  },
  he = "transform",
  gt = he + "Origin",
  ef = function a(e, r) {
    var t = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (e in ar && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = Qt[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (t.tfm[o] = or(i, o));
              })
            : (this.tfm[e] = s.x ? s[e] : or(i, e)),
          e === gt && (this.tfm.zOrigin = s.zOrigin);
      else
        return Qt.transform.split(",").forEach(function (o) {
          return a.call(t, o, r);
        });
      if (this.props.indexOf(he) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(gt, r, "")),
        (e = he);
    }
    (n || r) && this.props.push(e, r, n[e]);
  },
  ya = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  tf = function () {
    var e = this.props,
      r = this.target,
      t = r.style,
      i = r._gsap,
      n,
      s;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? e[n + 1] === 2
          ? r[e[n]](e[n + 2])
          : (r[e[n]] = e[n + 2])
        : e[n + 2]
        ? (t[e[n]] = e[n + 2])
        : t.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(Qs, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (n = js()),
        (!n || !n.isStart) &&
          !t[he] &&
          (ya(t),
          i.zOrigin &&
            t[gt] &&
            ((t[gt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  ba = function (e, r) {
    var t = { target: e, props: [], revert: tf, save: ef };
    return (
      e._gsap || Ke.core.getCache(e),
      r &&
        e.style &&
        e.nodeType &&
        r.split(",").forEach(function (i) {
          return t.save(i);
        }),
      t
    );
  },
  Ta,
  Ws = function (e, r) {
    var t = wr.createElementNS
      ? wr.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : wr.createElement(e);
    return t && t.style ? t : wr.createElement(e);
  },
  St = function a(e, r, t) {
    var i = getComputedStyle(e);
    return (
      i[r] ||
      i.getPropertyValue(r.replace(Qs, "-$1").toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!t && a(e, di(r) || r, 1)) ||
      ""
    );
  },
  ca = "O,Moz,ms,Ms,Webkit".split(","),
  di = function (e, r, t) {
    var i = r || Gr,
      n = i.style,
      s = 5;
    if (e in n && !t) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(ca[s] + e in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ca[s] : "") + e;
  },
  Gs = function () {
    Xu() &&
      window.document &&
      ((la = window),
      (wr = la.document),
      (hi = wr.documentElement),
      (Gr = Ws("div") || { style: {} }),
      (Yu = Ws("div")),
      (he = di(he)),
      (gt = he + "Origin"),
      (Gr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ta = !!di("perspective")),
      (js = Ke.core.reverting),
      (Hs = 1));
  },
  ha = function (e) {
    var r = e.ownerSVGElement,
      t = Ws(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      i = e.cloneNode(!0),
      n;
    (i.style.display = "block"), t.appendChild(i), hi.appendChild(t);
    try {
      n = i.getBBox();
    } catch {}
    return t.removeChild(i), hi.removeChild(t), n;
  },
  _a = function (e, r) {
    for (var t = r.length; t--; )
      if (e.hasAttribute(r[t])) return e.getAttribute(r[t]);
  },
  wa = function (e) {
    var r, t;
    try {
      r = e.getBBox();
    } catch {
      (r = ha(e)), (t = 1);
    }
    return (
      (r && (r.width || r.height)) || t || (r = ha(e)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +_a(e, ["x", "cx", "x1"]) || 0,
            y: +_a(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  Sa = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && wa(e));
  },
  Cr = function (e, r) {
    if (r) {
      var t = e.style,
        i;
      r in ar && r !== gt && (r = he),
        t.removeProperty
          ? ((i = r.substr(0, 2)),
            (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            t.removeProperty(
              i === "--" ? r : r.replace(Qs, "-$1").toLowerCase()
            ))
          : t.removeAttribute(r);
    }
  },
  Sr = function (e, r, t, i, n, s) {
    var o = new nt(e._pt, r, t, 0, 1, s ? va : xa);
    return (e._pt = o), (o.b = i), (o.e = n), e._props.push(t), o;
  },
  da = { deg: 1, rad: 1, turn: 1 },
  rf = { grid: 1, flex: 1 },
  Pr = function a(e, r, t, i) {
    var n = parseFloat(t) || 0,
      s = (t + "").trim().substr((n + "").length) || "px",
      o = Gr.style,
      l = Vu.test(r),
      u = e.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      d = i === "px",
      c = i === "%",
      p,
      _,
      g,
      v;
    if (i === s || !n || da[i] || da[s]) return n;
    if (
      (s !== "px" && !d && (n = a(e, r, t, "px")),
      (v = e.getCTM && Sa(e)),
      (c || s === "%") && (ar[r] || ~r.indexOf("adius")))
    )
      return (
        (p = v ? e.getBBox()[l ? "width" : "height"] : e[f]),
        ve(c ? (n / p) * h : (n / 100) * p)
      );
    if (
      ((o[l ? "width" : "height"] = h + (d ? s : i)),
      (_ =
        (i !== "rem" && ~r.indexOf("adius")) ||
        (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      v && (_ = (e.ownerSVGElement || {}).parentNode),
      (!_ || _ === wr || !_.appendChild) && (_ = wr.body),
      (g = _._gsap),
      g && c && g.width && l && g.time === _t.time && !g.uncache)
    )
      return ve((n / g.width) * h);
    if (c && (r === "height" || r === "width")) {
      var m = e.style[r];
      (e.style[r] = h + i), (p = e[f]), m ? (e.style[r] = m) : Cr(e, r);
    } else
      (c || s === "%") &&
        !rf[St(_, "display")] &&
        (o.position = St(e, "position")),
        _ === e && (o.position = "static"),
        _.appendChild(Gr),
        (p = Gr[f]),
        _.removeChild(Gr),
        (o.position = "absolute");
    return (
      l && c && ((g = yr(_)), (g.time = _t.time), (g.width = _[f])),
      ve(d ? (p * n) / h : p && n ? (h / p) * n : 0)
    );
  },
  or = function (e, r, t, i) {
    var n;
    return (
      Hs || Gs(),
      r in Qt &&
        r !== "transform" &&
        ((r = Qt[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      ar[r] && r !== "transform"
        ? ((n = Ui(e, i)),
          (n =
            r !== "transformOrigin"
              ? n[r]
              : n.svg
              ? n.origin
              : Dn(St(e, gt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[r]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (On[r] && On[r](e, r, t)) ||
              St(e, r) ||
              Es(e, r) ||
              (r === "opacity" ? 1 : 0))),
      t && !~(n + "").trim().indexOf(" ") ? Pr(e, r, n, t) + t : n
    );
  },
  nf = function (e, r, t, i) {
    if (!t || t === "none") {
      var n = di(r, e, 1),
        s = n && St(e, n, 1);
      s && s !== t
        ? ((r = n), (t = s))
        : r === "borderColor" && (t = St(e, "borderTopColor"));
    }
    var o = new nt(this._pt, e.style, r, 0, 1, Bs),
      l = 0,
      u = 0,
      f,
      h,
      d,
      c,
      p,
      _,
      g,
      v,
      m,
      y,
      b,
      S;
    if (
      ((o.b = t),
      (o.e = i),
      (t += ""),
      (i += ""),
      i.substring(0, 6) === "var(--" &&
        (i = St(e, i.substring(4, i.indexOf(")")))),
      i === "auto" &&
        ((_ = e.style[r]),
        (e.style[r] = i),
        (i = St(e, r) || i),
        _ ? (e.style[r] = _) : Cr(e, r)),
      (f = [t, i]),
      As(f),
      (t = f[0]),
      (i = f[1]),
      (d = t.match(Br) || []),
      (S = i.match(Br) || []),
      S.length)
    ) {
      for (; (h = Br.exec(i)); )
        (g = h[0]),
          (m = i.substring(l, h.index)),
          p
            ? (p = (p + 1) % 5)
            : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (p = 1),
          g !== (_ = d[u++] || "") &&
            ((c = parseFloat(_) || 0),
            (b = _.substr((c + "").length)),
            g.charAt(1) === "=" && (g = Yr(c, g) + b),
            (v = parseFloat(g)),
            (y = g.substr((v + "").length)),
            (l = Br.lastIndex - y.length),
            y ||
              ((y = y || pt.units[r] || b),
              l === i.length && ((i += y), (o.e += y))),
            b !== y && (c = Pr(e, r, _, y) || 0),
            (o._pt = {
              _next: o._pt,
              p: m || u === 1 ? m : ",",
              s: c,
              c: v - c,
              m: (p && p < 4) || r === "zIndex" ? Math.round : 0,
            }));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = r === "display" && i === "none" ? va : xa;
    return Ps.test(i) && (o.e = 0), (this._pt = o), o;
  },
  pa = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  sf = function (e) {
    var r = e.split(" "),
      t = r[0],
      i = r[1] || "50%";
    return (
      (t === "top" || t === "bottom" || i === "left" || i === "right") &&
        ((e = t), (t = i), (i = e)),
      (r[0] = pa[t] || t),
      (r[1] = pa[i] || i),
      r.join(" ")
    );
  },
  of = function (e, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var t = r.t,
        i = t.style,
        n = r.u,
        s = t._gsap,
        o,
        l,
        u;
      if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (o = n[u]),
            ar[o] && ((l = 1), (o = o === "transformOrigin" ? gt : he)),
            Cr(t, o);
      l &&
        (Cr(t, he),
        s &&
          (s.svg && t.removeAttribute("transform"),
          (i.scale = i.rotate = i.translate = "none"),
          Ui(t, 1),
          (s.uncache = 1),
          ya(i)));
    }
  },
  On = {
    clearProps: function (e, r, t, i, n) {
      if (n.data !== "isFromStart") {
        var s = (e._pt = new nt(e._pt, r, t, 0, 0, of));
        return (s.u = i), (s.pr = -10), (s.tween = n), e._props.push(t), 1;
      }
    },
  },
  Vi = [1, 0, 0, 1, 0, 0],
  Ca = {},
  Pa = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  ga = function (e) {
    var r = St(e, he);
    return Pa(r) ? Vi : r.substr(7).match(Cs).map(ve);
  },
  Ks = function (e, r) {
    var t = e._gsap || yr(e),
      i = e.style,
      n = ga(e),
      s,
      o,
      l,
      u;
    return t.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? Vi : n)
      : (n === Vi &&
          !e.offsetParent &&
          e !== hi &&
          !t.svg &&
          ((l = i.display),
          (i.display = "block"),
          (s = e.parentNode),
          (!s || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (o = e.nextElementSibling), hi.appendChild(e)),
          (n = ga(e)),
          l ? (i.display = l) : Cr(e, "display"),
          u &&
            (o
              ? s.insertBefore(e, o)
              : s
              ? s.appendChild(e)
              : hi.removeChild(e))),
        r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  qs = function (e, r, t, i, n, s) {
    var o = e._gsap,
      l = n || Ks(e, !0),
      u = o.xOrigin || 0,
      f = o.yOrigin || 0,
      h = o.xOffset || 0,
      d = o.yOffset || 0,
      c = l[0],
      p = l[1],
      _ = l[2],
      g = l[3],
      v = l[4],
      m = l[5],
      y = r.split(" "),
      b = parseFloat(y[0]) || 0,
      S = parseFloat(y[1]) || 0,
      M,
      T,
      k,
      P;
    t
      ? l !== Vi &&
        (T = c * g - p * _) &&
        ((k = b * (g / T) + S * (-_ / T) + (_ * m - g * v) / T),
        (P = b * (-p / T) + S * (c / T) - (c * m - p * v) / T),
        (b = k),
        (S = P))
      : ((M = wa(e)),
        (b = M.x + (~y[0].indexOf("%") ? (b / 100) * M.width : b)),
        (S = M.y + (~(y[1] || y[0]).indexOf("%") ? (S / 100) * M.height : S))),
      i || (i !== !1 && o.smooth)
        ? ((v = b - u),
          (m = S - f),
          (o.xOffset = h + (v * c + m * _) - v),
          (o.yOffset = d + (v * p + m * g) - m))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = b),
      (o.yOrigin = S),
      (o.smooth = !!i),
      (o.origin = r),
      (o.originIsAbsolute = !!t),
      (e.style[gt] = "0px 0px"),
      s &&
        (Sr(s, o, "xOrigin", u, b),
        Sr(s, o, "yOrigin", f, S),
        Sr(s, o, "xOffset", h, o.xOffset),
        Sr(s, o, "yOffset", d, o.yOffset)),
      e.setAttribute("data-svg-origin", b + " " + S);
  },
  Ui = function (e, r) {
    var t = e._gsap || new Ls(e);
    if ("x" in t && !r && !t.uncache) return t;
    var i = e.style,
      n = t.scaleX < 0,
      s = "px",
      o = "deg",
      l = getComputedStyle(e),
      u = St(e, gt) || "0",
      f,
      h,
      d,
      c,
      p,
      _,
      g,
      v,
      m,
      y,
      b,
      S,
      M,
      T,
      k,
      P,
      C,
      z,
      O,
      V,
      I,
      N,
      F,
      R,
      q,
      ee,
      x,
      Q,
      Re,
      be,
      ie,
      _e;
    return (
      (f = h = d = _ = g = v = m = y = b = 0),
      (c = p = 1),
      (t.svg = !!(e.getCTM && Sa(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[he] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[he] !== "none" ? l[he] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (T = Ks(e, t.svg)),
      t.svg &&
        (t.uncache
          ? ((q = e.getBBox()),
            (u = t.xOrigin - q.x + "px " + (t.yOrigin - q.y) + "px"),
            (R = ""))
          : (R = !r && e.getAttribute("data-svg-origin")),
        qs(e, R || u, !!R || t.originIsAbsolute, t.smooth !== !1, T)),
      (S = t.xOrigin || 0),
      (M = t.yOrigin || 0),
      T !== Vi &&
        ((z = T[0]),
        (O = T[1]),
        (V = T[2]),
        (I = T[3]),
        (f = N = T[4]),
        (h = F = T[5]),
        T.length === 6
          ? ((c = Math.sqrt(z * z + O * O)),
            (p = Math.sqrt(I * I + V * V)),
            (_ = z || O ? ci(O, z) * Wr : 0),
            (m = V || I ? ci(V, I) * Wr + _ : 0),
            m && (p *= Math.abs(Math.cos(m * _i))),
            t.svg && ((f -= S - (S * z + M * V)), (h -= M - (S * O + M * I))))
          : ((_e = T[6]),
            (be = T[7]),
            (x = T[8]),
            (Q = T[9]),
            (Re = T[10]),
            (ie = T[11]),
            (f = T[12]),
            (h = T[13]),
            (d = T[14]),
            (k = ci(_e, Re)),
            (g = k * Wr),
            k &&
              ((P = Math.cos(-k)),
              (C = Math.sin(-k)),
              (R = N * P + x * C),
              (q = F * P + Q * C),
              (ee = _e * P + Re * C),
              (x = N * -C + x * P),
              (Q = F * -C + Q * P),
              (Re = _e * -C + Re * P),
              (ie = be * -C + ie * P),
              (N = R),
              (F = q),
              (_e = ee)),
            (k = ci(-V, Re)),
            (v = k * Wr),
            k &&
              ((P = Math.cos(-k)),
              (C = Math.sin(-k)),
              (R = z * P - x * C),
              (q = O * P - Q * C),
              (ee = V * P - Re * C),
              (ie = I * C + ie * P),
              (z = R),
              (O = q),
              (V = ee)),
            (k = ci(O, z)),
            (_ = k * Wr),
            k &&
              ((P = Math.cos(k)),
              (C = Math.sin(k)),
              (R = z * P + O * C),
              (q = N * P + F * C),
              (O = O * P - z * C),
              (F = F * P - N * C),
              (z = R),
              (N = q)),
            g &&
              Math.abs(g) + Math.abs(_) > 359.9 &&
              ((g = _ = 0), (v = 180 - v)),
            (c = ve(Math.sqrt(z * z + O * O + V * V))),
            (p = ve(Math.sqrt(F * F + _e * _e))),
            (k = ci(N, F)),
            (m = Math.abs(k) > 2e-4 ? k * Wr : 0),
            (b = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        t.svg &&
          ((R = e.getAttribute("transform")),
          (t.forceCSS = e.setAttribute("transform", "") || !Pa(St(e, he))),
          R && e.setAttribute("transform", R))),
      Math.abs(m) > 90 &&
        Math.abs(m) < 270 &&
        (n
          ? ((c *= -1), (m += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((p *= -1), (m += m <= 0 ? 180 : -180))),
      (r = r || t.uncache),
      (t.x =
        f -
        ((t.xPercent =
          f &&
          ((!r && t.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetWidth * t.xPercent) / 100
          : 0) +
        s),
      (t.y =
        h -
        ((t.yPercent =
          h &&
          ((!r && t.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * t.yPercent) / 100
          : 0) +
        s),
      (t.z = d + s),
      (t.scaleX = ve(c)),
      (t.scaleY = ve(p)),
      (t.rotation = ve(_) + o),
      (t.rotationX = ve(g) + o),
      (t.rotationY = ve(v) + o),
      (t.skewX = m + o),
      (t.skewY = y + o),
      (t.transformPerspective = b + s),
      (t.zOrigin = parseFloat(u.split(" ")[2]) || (!r && t.zOrigin) || 0) &&
        (i[gt] = Dn(u)),
      (t.xOffset = t.yOffset = 0),
      (t.force3D = pt.force3D),
      (t.renderTransform = t.svg ? lf : Ta ? Ma : af),
      (t.uncache = 0),
      t
    );
  },
  Dn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Vs = function (e, r, t) {
    var i = Ue(r);
    return ve(parseFloat(r) + parseFloat(Pr(e, "x", t + "px", i))) + i;
  },
  af = function (e, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      Ma(e, r);
  },
  Vr = "0deg",
  Xi = "0px",
  Ur = ") ",
  Ma = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      l = t.z,
      u = t.rotation,
      f = t.rotationY,
      h = t.rotationX,
      d = t.skewX,
      c = t.skewY,
      p = t.scaleX,
      _ = t.scaleY,
      g = t.transformPerspective,
      v = t.force3D,
      m = t.target,
      y = t.zOrigin,
      b = "",
      S = (v === "auto" && e && e !== 1) || v === !0;
    if (y && (h !== Vr || f !== Vr)) {
      var M = parseFloat(f) * _i,
        T = Math.sin(M),
        k = Math.cos(M),
        P;
      (M = parseFloat(h) * _i),
        (P = Math.cos(M)),
        (s = Vs(m, s, T * P * -y)),
        (o = Vs(m, o, -Math.sin(M) * -y)),
        (l = Vs(m, l, k * P * -y + y));
    }
    g !== Xi && (b += "perspective(" + g + Ur),
      (i || n) && (b += "translate(" + i + "%, " + n + "%) "),
      (S || s !== Xi || o !== Xi || l !== Xi) &&
        (b +=
          l !== Xi || S
            ? "translate3d(" + s + ", " + o + ", " + l + ") "
            : "translate(" + s + ", " + o + Ur),
      u !== Vr && (b += "rotate(" + u + Ur),
      f !== Vr && (b += "rotateY(" + f + Ur),
      h !== Vr && (b += "rotateX(" + h + Ur),
      (d !== Vr || c !== Vr) && (b += "skew(" + d + ", " + c + Ur),
      (p !== 1 || _ !== 1) && (b += "scale(" + p + ", " + _ + Ur),
      (m.style[he] = b || "translate(0, 0)");
  },
  lf = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      l = t.rotation,
      u = t.skewX,
      f = t.skewY,
      h = t.scaleX,
      d = t.scaleY,
      c = t.target,
      p = t.xOrigin,
      _ = t.yOrigin,
      g = t.xOffset,
      v = t.yOffset,
      m = t.forceCSS,
      y = parseFloat(s),
      b = parseFloat(o),
      S,
      M,
      T,
      k,
      P;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (u += f), (l += f)),
      l || u
        ? ((l *= _i),
          (u *= _i),
          (S = Math.cos(l) * h),
          (M = Math.sin(l) * h),
          (T = Math.sin(l - u) * -d),
          (k = Math.cos(l - u) * d),
          u &&
            ((f *= _i),
            (P = Math.tan(u - f)),
            (P = Math.sqrt(1 + P * P)),
            (T *= P),
            (k *= P),
            f &&
              ((P = Math.tan(f)),
              (P = Math.sqrt(1 + P * P)),
              (S *= P),
              (M *= P))),
          (S = ve(S)),
          (M = ve(M)),
          (T = ve(T)),
          (k = ve(k)))
        : ((S = h), (k = d), (M = T = 0)),
      ((y && !~(s + "").indexOf("px")) || (b && !~(o + "").indexOf("px"))) &&
        ((y = Pr(c, "x", s, "px")), (b = Pr(c, "y", o, "px"))),
      (p || _ || g || v) &&
        ((y = ve(y + p - (p * S + _ * T) + g)),
        (b = ve(b + _ - (p * M + _ * k) + v))),
      (i || n) &&
        ((P = c.getBBox()),
        (y = ve(y + (i / 100) * P.width)),
        (b = ve(b + (n / 100) * P.height))),
      (P =
        "matrix(" + S + "," + M + "," + T + "," + k + "," + y + "," + b + ")"),
      c.setAttribute("transform", P),
      m && (c.style[he] = P);
  },
  uf = function (e, r, t, i, n) {
    var s = 360,
      o = De(n),
      l = parseFloat(n) * (o && ~n.indexOf("rad") ? Wr : 1),
      u = l - i,
      f = i + u + "deg",
      h,
      d;
    return (
      o &&
        ((h = n.split("_")[1]),
        h === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        h === "cw" && u < 0
          ? (u = ((u + s * fa) % s) - ~~(u / s) * s)
          : h === "ccw" && u > 0 && (u = ((u - s * fa) % s) - ~~(u / s) * s)),
      (e._pt = d = new nt(e._pt, r, t, i, u, Wu)),
      (d.e = f),
      (d.u = "deg"),
      e._props.push(t),
      d
    );
  },
  ma = function (e, r) {
    for (var t in r) e[t] = r[t];
    return e;
  },
  ff = function (e, r, t) {
    var i = ma({}, t._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = t.style,
      o,
      l,
      u,
      f,
      h,
      d,
      c,
      p;
    i.svg
      ? ((u = t.getAttribute("transform")),
        t.setAttribute("transform", ""),
        (s[he] = r),
        (o = Ui(t, 1)),
        Cr(t, he),
        t.setAttribute("transform", u))
      : ((u = getComputedStyle(t)[he]),
        (s[he] = r),
        (o = Ui(t, 1)),
        (s[he] = u));
    for (l in ar)
      (u = i[l]),
        (f = o[l]),
        u !== f &&
          n.indexOf(l) < 0 &&
          ((c = Ue(u)),
          (p = Ue(f)),
          (h = c !== p ? Pr(t, l, u, p) : parseFloat(u)),
          (d = parseFloat(f)),
          (e._pt = new nt(e._pt, o, l, h, d - h, Us)),
          (e._pt.u = p || 0),
          e._props.push(l));
    ma(o, i);
  };
it("padding,margin,Width,Radius", function (a, e) {
  var r = "Top",
    t = "Right",
    i = "Bottom",
    n = "Left",
    s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function (o) {
      return e < 2 ? a + o : "border" + o + a;
    });
  On[e > 1 ? "border" + a : a] = function (o, l, u, f, h) {
    var d, c;
    if (arguments.length < 4)
      return (
        (d = s.map(function (p) {
          return or(o, p, u);
        })),
        (c = d.join(" ")),
        c.split(d[0]).length === 5 ? d[0] : c
      );
    (d = (f + "").split(" ")),
      (c = {}),
      s.forEach(function (p, _) {
        return (c[p] = d[_] = d[_] || d[((_ - 1) / 2) | 0]);
      }),
      o.init(l, c, h);
  };
});
var Zs = {
  name: "css",
  register: Gs,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, r, t, i, n) {
    var s = this._props,
      o = e.style,
      l = t.vars.startAt,
      u,
      f,
      h,
      d,
      c,
      p,
      _,
      g,
      v,
      m,
      y,
      b,
      S,
      M,
      T,
      k,
      P;
    Hs || Gs(),
      (this.styles = this.styles || ba(e)),
      (k = this.styles.props),
      (this.tween = t);
    for (_ in r)
      if (_ !== "autoRound" && ((f = r[_]), !(ht[_] && Fs(_, r, t, i, e, n)))) {
        if (
          ((c = typeof f),
          (p = On[_]),
          c === "function" && ((f = f.call(t, i, e, n)), (c = typeof f)),
          c === "string" && ~f.indexOf("random(") && (f = fi(f)),
          p)
        )
          p(this, e, _, f, t) && (T = 1);
        else if (_.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(_) + "").trim()),
            (f += ""),
            (nr.lastIndex = 0),
            nr.test(u) ||
              ((g = Ue(u)),
              (v = Ue(f)),
              v ? g !== v && (u = Pr(e, _, u, v) + v) : g && (f += g)),
            this.add(o, "setProperty", u, f, i, n, 0, 0, _),
            s.push(_),
            k.push(_, 0, o[_]);
        else if (c !== "undefined") {
          if (
            (l && _ in l
              ? ((u = typeof l[_] == "function" ? l[_].call(t, i, e, n) : l[_]),
                De(u) && ~u.indexOf("random(") && (u = fi(u)),
                Ue(u + "") ||
                  u === "auto" ||
                  (u += pt.units[_] || Ue(or(e, _)) || ""),
                (u + "").charAt(1) === "=" && (u = or(e, _)))
              : (u = or(e, _)),
            (d = parseFloat(u)),
            (m = c === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            m && (f = f.substr(2)),
            (h = parseFloat(f)),
            _ in Qt &&
              (_ === "autoAlpha" &&
                (d === 1 && or(e, "visibility") === "hidden" && h && (d = 0),
                k.push("visibility", 0, o.visibility),
                Sr(
                  this,
                  o,
                  "visibility",
                  d ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = Qt[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (y = _ in ar),
            y)
          ) {
            if (
              (this.styles.save(_),
              (P = f),
              c === "string" && f.substring(0, 6) === "var(--")
            ) {
              if (
                ((f = St(e, f.substring(4, f.indexOf(")")))),
                f.substring(0, 5) === "calc(")
              ) {
                var C = e.style.perspective;
                (e.style.perspective = f),
                  (f = St(e, "perspective")),
                  C ? (e.style.perspective = C) : Cr(e, "perspective");
              }
              h = parseFloat(f);
            }
            if (
              (b ||
                ((S = e._gsap),
                (S.renderTransform && !r.parseTransform) ||
                  Ui(e, r.parseTransform),
                (M = r.smoothOrigin !== !1 && S.smooth),
                (b = this._pt =
                  new nt(this._pt, o, he, 0, 1, S.renderTransform, S, 0, -1)),
                (b.dep = 1)),
              _ === "scale")
            )
              (this._pt = new nt(
                this._pt,
                S,
                "scaleY",
                S.scaleY,
                (m ? Yr(S.scaleY, m + h) : h) - S.scaleY || 0,
                Us
              )),
                (this._pt.u = 0),
                s.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              k.push(gt, 0, o[gt]),
                (f = sf(f)),
                S.svg
                  ? qs(e, f, 0, M, 0, this)
                  : ((v = parseFloat(f.split(" ")[2]) || 0),
                    v !== S.zOrigin && Sr(this, S, "zOrigin", S.zOrigin, v),
                    Sr(this, o, _, Dn(u), Dn(f)));
              continue;
            } else if (_ === "svgOrigin") {
              qs(e, f, 1, M, 0, this);
              continue;
            } else if (_ in Ca) {
              uf(this, S, _, d, m ? Yr(d, m + f) : f);
              continue;
            } else if (_ === "smoothOrigin") {
              Sr(this, S, "smooth", S.smooth, f);
              continue;
            } else if (_ === "force3D") {
              S[_] = f;
              continue;
            } else if (_ === "transform") {
              ff(this, f, e);
              continue;
            }
          } else _ in o || (_ = di(_) || _);
          if (y || ((h || h === 0) && (d || d === 0) && !Uu.test(f) && _ in o))
            (g = (u + "").substr((d + "").length)),
              h || (h = 0),
              (v = Ue(f) || (_ in pt.units ? pt.units[_] : g)),
              g !== v && (d = Pr(e, _, u, v)),
              (this._pt = new nt(
                this._pt,
                y ? S : o,
                _,
                d,
                (m ? Yr(d, m + h) : h) - d,
                !y && (v === "px" || _ === "zIndex") && r.autoRound !== !1
                  ? Hu
                  : Us
              )),
              (this._pt.u = v || 0),
              y && P !== f
                ? ((this._pt.b = u), (this._pt.e = P), (this._pt.r = qu))
                : g !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = Gu));
          else if (_ in o) nf.call(this, e, _, u, m ? m + f : f);
          else if (_ in e) this.add(e, _, u || e[_], m ? m + f : f, i, n);
          else if (_ !== "parseTransform") {
            Sn(_, f);
            continue;
          }
          y ||
            (_ in o
              ? k.push(_, 0, o[_])
              : typeof e[_] == "function"
              ? k.push(_, 2, e[_]())
              : k.push(_, 1, u || e[_])),
            s.push(_);
        }
      }
    T && Xs(this);
  },
  render: function (e, r) {
    if (r.tween._time || !js())
      for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
    else r.styles.revert();
  },
  get: or,
  aliases: Qt,
  getSetter: function (e, r, t) {
    var i = Qt[r];
    return (
      i && i.indexOf(",") < 0 && (r = i),
      r in ar && r !== gt && (e._gsap.x || or(e, "x"))
        ? t && ua === t
          ? r === "scale"
            ? Zu
            : Ku
          : (ua = t || {}) && (r === "scale" ? $u : Ju)
        : e.style && !wn(e.style[r])
        ? ju
        : ~r.indexOf("-")
        ? Qu
        : kn(e, r)
    );
  },
  core: { _removeProperty: Cr, _getMatrix: Ks },
};
Ke.utils.checkPrefix = di;
Ke.core.getStyleSaver = ba;
(function (a, e, r, t) {
  var i = it(a + "," + e + "," + r, function (n) {
    ar[n] = 1;
  });
  it(e, function (n) {
    (pt.units[n] = "deg"), (Ca[n] = 1);
  }),
    (Qt[i[13]] = a + "," + e),
    it(t, function (n) {
      var s = n.split(":");
      Qt[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
it("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (a) {
  pt.units[a] = "px";
});
Ke.registerPlugin(Zs);
var En = Ke.registerPlugin(Zs) || Ke,
  Qf = En.core.Tween;
var cf = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;
var hf = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi;
var _f = Math.PI / 180,
  Zf = 180 / Math.PI,
  Rn = Math.sin,
  An = Math.cos,
  Gi = Math.abs,
  Wi = Math.sqrt;
var df = function (e) {
  return typeof e == "number";
};
var ka = 1e5;
var Mr = function (e) {
  return Math.round(e * ka) / ka || 0;
};
var Oa = function (e) {
  return (e.closed =
    Math.abs(e[0] - e[e.length - 2]) < 0.001 &&
    Math.abs(e[1] - e[e.length - 1]) < 0.001);
};
function Da(a, e, r, t, i, n, s) {
  for (var o = a.length, l, u, f, h, d; --o > -1; )
    for (l = a[o], u = l.length, f = 0; f < u; f += 2)
      (h = l[f]),
        (d = l[f + 1]),
        (l[f] = h * e + d * t + n),
        (l[f + 1] = h * r + d * i + s);
  return (a._dirty = 1), a;
}
function pf(a, e, r, t, i, n, s, o, l) {
  if (!(a === o && e === l)) {
    (r = Gi(r)), (t = Gi(t));
    var u = (i % 360) * _f,
      f = An(u),
      h = Rn(u),
      d = Math.PI,
      c = d * 2,
      p = (a - o) / 2,
      _ = (e - l) / 2,
      g = f * p + h * _,
      v = -h * p + f * _,
      m = g * g,
      y = v * v,
      b = m / (r * r) + y / (t * t);
    b > 1 && ((r = Wi(b) * r), (t = Wi(b) * t));
    var S = r * r,
      M = t * t,
      T = (S * M - S * y - M * m) / (S * y + M * m);
    T < 0 && (T = 0);
    var k = (n === s ? -1 : 1) * Wi(T),
      P = k * ((r * v) / t),
      C = k * -((t * g) / r),
      z = (a + o) / 2,
      O = (e + l) / 2,
      V = z + (f * P - h * C),
      I = O + (h * P + f * C),
      N = (g - P) / r,
      F = (v - C) / t,
      R = (-g - P) / r,
      q = (-v - C) / t,
      ee = N * N + F * F,
      x = (F < 0 ? -1 : 1) * Math.acos(N / Wi(ee)),
      Q =
        (N * q - F * R < 0 ? -1 : 1) *
        Math.acos((N * R + F * q) / Wi(ee * (R * R + q * q)));
    isNaN(Q) && (Q = d),
      !s && Q > 0 ? (Q -= c) : s && Q < 0 && (Q += c),
      (x %= c),
      (Q %= c);
    var Re = Math.ceil(Gi(Q) / (c / 4)),
      be = [],
      ie = Q / Re,
      _e = ((4 / 3) * Rn(ie / 2)) / (1 + An(ie / 2)),
      Ae = f * r,
      de = h * r,
      Be = h * -t,
      Le = f * t,
      pe;
    for (pe = 0; pe < Re; pe++)
      (i = x + pe * ie),
        (g = An(i)),
        (v = Rn(i)),
        (N = An((i += ie))),
        (F = Rn(i)),
        be.push(g - _e * v, v + _e * g, N + _e * F, F - _e * N, N, F);
    for (pe = 0; pe < be.length; pe += 2)
      (g = be[pe]),
        (v = be[pe + 1]),
        (be[pe] = g * Ae + v * Be + V),
        (be[pe + 1] = g * de + v * Le + I);
    return (be[pe - 2] = o), (be[pe - 1] = l), be;
  }
}
function Ea(a) {
  var e =
      (a + "")
        .replace(hf, function (P) {
          var C = +P;
          return C < 1e-4 && C > -1e-4 ? 0 : C;
        })
        .match(cf) || [],
    r = [],
    t = 0,
    i = 0,
    n = 2 / 3,
    s = e.length,
    o = 0,
    l = "ERROR: malformed path: " + a,
    u,
    f,
    h,
    d,
    c,
    p,
    _,
    g,
    v,
    m,
    y,
    b,
    S,
    M,
    T,
    k = function (C, z, O, V) {
      (m = (O - C) / 3),
        (y = (V - z) / 3),
        _.push(C + m, z + y, O - m, V - y, O, V);
    };
  if (!a || !isNaN(e[0]) || isNaN(e[1])) return console.log(l), r;
  for (u = 0; u < s; u++)
    if (
      ((S = c),
      isNaN(e[u]) ? ((c = e[u].toUpperCase()), (p = c !== e[u])) : u--,
      (h = +e[u + 1]),
      (d = +e[u + 2]),
      p && ((h += t), (d += i)),
      u || ((g = h), (v = d)),
      c === "M")
    )
      _ && (_.length < 8 ? (r.length -= 1) : (o += _.length), Oa(_)),
        (t = g = h),
        (i = v = d),
        (_ = [h, d]),
        r.push(_),
        (u += 2),
        (c = "L");
    else if (c === "C")
      _ || (_ = [0, 0]),
        p || (t = i = 0),
        _.push(
          h,
          d,
          t + e[u + 3] * 1,
          i + e[u + 4] * 1,
          (t += e[u + 5] * 1),
          (i += e[u + 6] * 1)
        ),
        (u += 6);
    else if (c === "S")
      (m = t),
        (y = i),
        (S === "C" || S === "S") &&
          ((m += t - _[_.length - 4]), (y += i - _[_.length - 3])),
        p || (t = i = 0),
        _.push(m, y, h, d, (t += e[u + 3] * 1), (i += e[u + 4] * 1)),
        (u += 4);
    else if (c === "Q")
      (m = t + (h - t) * n),
        (y = i + (d - i) * n),
        p || (t = i = 0),
        (t += e[u + 3] * 1),
        (i += e[u + 4] * 1),
        _.push(m, y, t + (h - t) * n, i + (d - i) * n, t, i),
        (u += 4);
    else if (c === "T")
      (m = t - _[_.length - 4]),
        (y = i - _[_.length - 3]),
        _.push(
          t + m,
          i + y,
          h + (t + m * 1.5 - h) * n,
          d + (i + y * 1.5 - d) * n,
          (t = h),
          (i = d)
        ),
        (u += 2);
    else if (c === "H") k(t, i, (t = h), i), (u += 1);
    else if (c === "V") k(t, i, t, (i = h + (p ? i - t : 0))), (u += 1);
    else if (c === "L" || c === "Z")
      c === "Z" && ((h = g), (d = v), (_.closed = !0)),
        (c === "L" || Gi(t - h) > 0.5 || Gi(i - d) > 0.5) &&
          (k(t, i, h, d), c === "L" && (u += 2)),
        (t = h),
        (i = d);
    else if (c === "A") {
      if (
        ((M = e[u + 4]),
        (T = e[u + 5]),
        (m = e[u + 6]),
        (y = e[u + 7]),
        (f = 7),
        M.length > 1 &&
          (M.length < 3
            ? ((y = m), (m = T), f--)
            : ((y = T), (m = M.substr(2)), (f -= 2)),
          (T = M.charAt(1)),
          (M = M.charAt(0))),
        (b = pf(
          t,
          i,
          +e[u + 1],
          +e[u + 2],
          +e[u + 3],
          +M,
          +T,
          (p ? t : 0) + m * 1,
          (p ? i : 0) + y * 1
        )),
        (u += f),
        b)
      )
        for (f = 0; f < b.length; f++) _.push(b[f]);
      (t = _[_.length - 2]), (i = _[_.length - 1]);
    } else console.log(l);
  return (
    (u = _.length),
    u < 6 ? (r.pop(), (u = 0)) : Oa(_),
    (r.totalPoints = o + u),
    r
  );
}
function Ra(a) {
  df(a[0]) && (a = [a]);
  var e = "",
    r = a.length,
    t,
    i,
    n,
    s;
  for (i = 0; i < r; i++) {
    for (
      s = a[i],
        e += "M" + Mr(s[0]) + "," + Mr(s[1]) + " C",
        t = s.length,
        n = 2;
      n < t;
      n++
    )
      e +=
        Mr(s[n++]) +
        "," +
        Mr(s[n++]) +
        " " +
        Mr(s[n++]) +
        "," +
        Mr(s[n++]) +
        " " +
        Mr(s[n++]) +
        "," +
        Mr(s[n]) +
        " ";
    s.closed && (e += "z");
  }
  return e;
}
var mt,
  La,
  za = function () {
    return (
      mt ||
      (typeof window < "u" && (mt = window.gsap) && mt.registerPlugin && mt)
    );
  },
  Aa = function () {
    (mt = za()),
      mt
        ? (mt.registerEase("_CE", qr.create), (La = 1))
        : console.warn("Please gsap.registerPlugin(CustomEase)");
  },
  gf = 1e20,
  Ln = function (e) {
    return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  mf = 1,
  xf = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  vf = /[cLlsSaAhHvVtTqQ]/g,
  yf = function (e) {
    var r = e.length,
      t = gf,
      i;
    for (i = 1; i < r; i += 6) +e[i] < t && (t = +e[i]);
    return t;
  },
  bf = function (e, r, t) {
    !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1,
      n = -t,
      s = e.length,
      o = 1 / (+e[s - 2] + i),
      l =
        -r ||
        (Math.abs(+e[s - 1] - +e[1]) < 0.01 * (+e[s - 2] - +e[0])
          ? yf(e) + n
          : +e[s - 1] + n),
      u;
    for (l ? (l = 1 / l) : (l = -o), u = 0; u < s; u += 2)
      (e[u] = (+e[u] + i) * o), (e[u + 1] = (+e[u + 1] + n) * l);
  },
  Tf = function a(e, r, t, i, n, s, o, l, u, f, h) {
    var d = (e + t) / 2,
      c = (r + i) / 2,
      p = (t + n) / 2,
      _ = (i + s) / 2,
      g = (n + o) / 2,
      v = (s + l) / 2,
      m = (d + p) / 2,
      y = (c + _) / 2,
      b = (p + g) / 2,
      S = (_ + v) / 2,
      M = (m + b) / 2,
      T = (y + S) / 2,
      k = o - e,
      P = l - r,
      C = Math.abs((t - o) * P - (i - l) * k),
      z = Math.abs((n - o) * P - (s - l) * k),
      O;
    return (
      f ||
        ((f = [
          { x: e, y: r },
          { x: o, y: l },
        ]),
        (h = 1)),
      f.splice(h || f.length - 1, 0, { x: M, y: T }),
      (C + z) * (C + z) > u * (k * k + P * P) &&
        ((O = f.length),
        a(e, r, d, c, m, y, M, T, u, f, h),
        a(M, T, b, S, g, v, o, l, u, f, h + 1 + (f.length - O))),
      f
    );
  },
  qr = (function () {
    function a(r, t, i) {
      La || Aa(), (this.id = r), mf && this.setData(t, i);
    }
    var e = a.prototype;
    return (
      (e.setData = function (t, i) {
        (i = i || {}), (t = t || "0,0,1,1");
        var n = t.match(xf),
          s = 1,
          o = [],
          l = [],
          u = i.precision || 1,
          f = u <= 1,
          h,
          d,
          c,
          p,
          _,
          g,
          v,
          m,
          y;
        if (
          ((this.data = t),
          (vf.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) &&
            (n = Ea(t)[0]),
          (h = n.length),
          h === 4)
        )
          n.unshift(0, 0), n.push(1, 1), (h = 8);
        else if ((h - 2) % 6) throw "Invalid CustomEase";
        for (
          (+n[0] != 0 || +n[h - 2] != 1) && bf(n, i.height, i.originY),
            this.segment = n,
            p = 2;
          p < h;
          p += 6
        )
          (d = { x: +n[p - 2], y: +n[p - 1] }),
            (c = { x: +n[p + 4], y: +n[p + 5] }),
            o.push(d, c),
            Tf(
              d.x,
              d.y,
              +n[p],
              +n[p + 1],
              +n[p + 2],
              +n[p + 3],
              c.x,
              c.y,
              1 / (u * 2e5),
              o,
              o.length - 1
            );
        for (h = o.length, p = 0; p < h; p++)
          (v = o[p]),
            (m = o[p - 1] || v),
            (v.x > m.x || (m.y !== v.y && m.x === v.x) || v === m) && v.x <= 1
              ? ((m.cx = v.x - m.x),
                (m.cy = v.y - m.y),
                (m.n = v),
                (m.nx = v.x),
                f &&
                  p > 1 &&
                  Math.abs(m.cy / m.cx - o[p - 2].cy / o[p - 2].cx) > 2 &&
                  (f = 0),
                m.cx < s &&
                  (m.cx
                    ? (s = m.cx)
                    : ((m.cx = 0.001),
                      p === h - 1 &&
                        ((m.x -= 0.001), (s = Math.min(s, 0.001)), (f = 0)))))
              : (o.splice(p--, 1), h--);
        if (((h = (1 / s + 1) | 0), (_ = 1 / h), (g = 0), (v = o[0]), f)) {
          for (p = 0; p < h; p++)
            (y = p * _),
              v.nx < y && (v = o[++g]),
              (d = v.y + ((y - v.x) / v.cx) * v.cy),
              (l[p] = { x: y, cx: _, y: d, cy: 0, nx: 9 }),
              p && (l[p - 1].cy = d - l[p - 1].y);
          (g = o[o.length - 1]),
            (l[h - 1].cy = g.y - d),
            (l[h - 1].cx = g.x - l[l.length - 1].x);
        } else {
          for (p = 0; p < h; p++) v.nx < p * _ && (v = o[++g]), (l[p] = v);
          g < o.length - 1 && (l[p - 1] = o[o.length - 2]);
        }
        return (
          (this.ease = function (b) {
            var S = l[(b * h) | 0] || l[h - 1];
            return S.nx < b && (S = S.n), S.y + ((b - S.x) / S.cx) * S.cy;
          }),
          (this.ease.custom = this),
          this.id && mt && mt.registerEase(this.id, this.ease),
          this
        );
      }),
      (e.getSVGData = function (t) {
        return a.getSVGData(this, t);
      }),
      (a.create = function (t, i, n) {
        return new a(t, i, n).ease;
      }),
      (a.register = function (t) {
        (mt = t), Aa();
      }),
      (a.get = function (t) {
        return mt.parseEase(t);
      }),
      (a.getSVGData = function (t, i) {
        i = i || {};
        var n = i.width || 100,
          s = i.height || 100,
          o = i.x || 0,
          l = (i.y || 0) + s,
          u = mt.utils.toArray(i.path)[0],
          f,
          h,
          d,
          c,
          p,
          _,
          g,
          v,
          m,
          y;
        if (
          (i.invert && ((s = -s), (l = 0)),
          typeof t == "string" && (t = mt.parseEase(t)),
          t.custom && (t = t.custom),
          t instanceof a)
        )
          f = Ra(Da([t.segment.slice(0)], n, 0, 0, -s, o, l));
        else {
          for (
            f = [o, l],
              g = Math.max(5, (i.precision || 1) * 200),
              c = 1 / g,
              g += 2,
              v = 5 / g,
              m = Ln(o + c * n),
              y = Ln(l + t(c) * -s),
              h = (y - l) / (m - o),
              d = 2;
            d < g;
            d++
          )
            (p = Ln(o + d * c * n)),
              (_ = Ln(l + t(d * c) * -s)),
              (Math.abs((_ - y) / (p - m) - h) > v || d === g - 1) &&
                (f.push(m, y), (h = (_ - y) / (p - m))),
              (m = p),
              (y = _);
          f = "M" + f.join(",");
        }
        return u && u.setAttribute("d", f), f;
      }),
      a
    );
  })();
qr.version = "3.15.0";
qr.headless = !0;
za() && mt.registerPlugin(qr);
function Fa(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(a, t.key, t);
  }
}
function wf(a, e, r) {
  return e && Fa(a.prototype, e), r && Fa(a, r), a;
}
var We,
  In,
  Sf,
  Ct,
  kr,
  Or,
  gi,
  Na,
  Hr,
  mi,
  Ba,
  lr,
  Xt,
  Ya,
  Xa = function () {
    return (
      We ||
      (typeof window < "u" && (We = window.gsap) && We.registerPlugin && We)
    );
  },
  Va = 1,
  pi = [],
  U = [],
  Vt = [],
  Hi = Date.now,
  $s = function (e, r) {
    return r;
  },
  Cf = function () {
    var e = mi.core,
      r = e.bridge || {},
      t = e._scrollers,
      i = e._proxies;
    t.push.apply(t, U),
      i.push.apply(i, Vt),
      (U = t),
      (Vt = i),
      ($s = function (s, o) {
        return r[s](o);
      });
  },
  fr = function (e, r) {
    return ~Vt.indexOf(e) && Vt[Vt.indexOf(e) + 1][r];
  },
  ji = function (e) {
    return !!~Ba.indexOf(e);
  },
  ot = function (e, r, t, i, n) {
    return e.addEventListener(r, t, { passive: i !== !1, capture: !!n });
  },
  st = function (e, r, t, i) {
    return e.removeEventListener(r, t, !!i);
  },
  zn = "scrollLeft",
  Fn = "scrollTop",
  Js = function () {
    return (lr && lr.isPressed) || U.cache++;
  },
  Nn = function (e, r) {
    var t = function i(n) {
      if (n || n === 0) {
        Va && (Ct.history.scrollRestoration = "manual");
        var s = lr && lr.isPressed;
        (n = i.v = Math.round(n) || (lr && lr.iOS ? 1 : 0)),
          e(n),
          (i.cacheID = U.cache),
          s && $s("ss", n);
      } else
        (r || U.cache !== i.cacheID || $s("ref")) &&
          ((i.cacheID = U.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (t.offset = 0), e && t;
  },
  Ze = {
    s: zn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Nn(function (a) {
      return arguments.length
        ? Ct.scrollTo(a, Me.sc())
        : Ct.pageXOffset || kr[zn] || Or[zn] || gi[zn] || 0;
    }),
  },
  Me = {
    s: Fn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ze,
    sc: Nn(function (a) {
      return arguments.length
        ? Ct.scrollTo(Ze.sc(), a)
        : Ct.pageYOffset || kr[Fn] || Or[Fn] || gi[Fn] || 0;
    }),
  },
  at = function (e, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || We.utils.toArray)(e)[0] ||
      (typeof e == "string" && We.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  Pf = function (e, r) {
    for (var t = r.length; t--; ) if (r[t] === e || r[t].contains(e)) return !0;
    return !1;
  },
  ur = function (e, r) {
    var t = r.s,
      i = r.sc;
    ji(e) && (e = kr.scrollingElement || Or);
    var n = U.indexOf(e),
      s = i === Me.sc ? 1 : 2;
    !~n && (n = U.push(e) - 1), U[n + s] || ot(e, "scroll", Js);
    var o = U[n + s],
      l =
        o ||
        (U[n + s] =
          Nn(fr(e, t), !0) ||
          (ji(e)
            ? i
            : Nn(function (u) {
                return arguments.length ? (e[t] = u) : e[t];
              })));
    return (
      (l.target = e),
      o || (l.smooth = We.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Bn = function (e, r, t) {
    var i = e,
      n = e,
      s = Hi(),
      o = s,
      l = r || 50,
      u = Math.max(500, l * 3),
      f = function (p, _) {
        var g = Hi();
        _ || g - s > l
          ? ((n = i), (i = p), (o = s), (s = g))
          : t
          ? (i += p)
          : (i = n + ((p - n) / (g - o)) * (s - o));
      },
      h = function () {
        (n = i = t ? 0 : i), (o = s = 0);
      },
      d = function (p) {
        var _ = o,
          g = n,
          v = Hi();
        return (
          (p || p === 0) && p !== i && f(p),
          s === o || v - o > u
            ? 0
            : ((i + (t ? g : -g)) / ((t ? v : s) - _)) * 1e3
        );
      };
    return { update: f, reset: h, getVelocity: d };
  },
  qi = function (e, r) {
    return (
      r && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Ia = function (e) {
    var r = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(t) ? r : t;
  },
  Ua = function () {
    (mi = We.core.globals().ScrollTrigger), mi && mi.core && Cf();
  },
  Wa = function (e) {
    return (
      (We = e || Xa()),
      !In &&
        We &&
        typeof document < "u" &&
        document.body &&
        ((Ct = window),
        (kr = document),
        (Or = kr.documentElement),
        (gi = kr.body),
        (Ba = [Ct, kr, Or, gi]),
        (Sf = We.utils.clamp),
        (Ya = We.core.context || function () {}),
        (Hr = "onpointerenter" in gi ? "pointer" : "mouse"),
        (Na = ye.isTouch =
          Ct.matchMedia &&
          Ct.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Ct ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Xt = ye.eventTypes =
          (
            "ontouchstart" in Or
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Or
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (Va = 0);
        }, 500),
        (In = 1)),
      mi || Ua(),
      In
    );
  };
Ze.op = Me;
U.cache = 0;
var ye = (function () {
  function a(r) {
    this.init(r);
  }
  var e = a.prototype;
  return (
    (e.init = function (t) {
      In || Wa(We) || console.warn("Please gsap.registerPlugin(Observer)"),
        mi || Ua();
      var i = t.tolerance,
        n = t.dragMinimum,
        s = t.type,
        o = t.target,
        l = t.lineHeight,
        u = t.debounce,
        f = t.preventDefault,
        h = t.onStop,
        d = t.onStopDelay,
        c = t.ignore,
        p = t.wheelSpeed,
        _ = t.event,
        g = t.onDragStart,
        v = t.onDragEnd,
        m = t.onDrag,
        y = t.onPress,
        b = t.onRelease,
        S = t.onRight,
        M = t.onLeft,
        T = t.onUp,
        k = t.onDown,
        P = t.onChangeX,
        C = t.onChangeY,
        z = t.onChange,
        O = t.onToggleX,
        V = t.onToggleY,
        I = t.onHover,
        N = t.onHoverEnd,
        F = t.onMove,
        R = t.ignoreCheck,
        q = t.isNormalizer,
        ee = t.onGestureStart,
        x = t.onGestureEnd,
        Q = t.onWheel,
        Re = t.onEnable,
        be = t.onDisable,
        ie = t.onClick,
        _e = t.scrollSpeed,
        Ae = t.capture,
        de = t.allowClicks,
        Be = t.lockAxis,
        Le = t.onLockAxis;
      (this.target = o = at(o) || Or),
        (this.vars = t),
        c && (c = We.utils.toArray(c)),
        (i = i || 1e-9),
        (n = n || 0),
        (p = p || 1),
        (_e = _e || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Ct.getComputedStyle(gi).lineHeight) || 22);
      var pe,
        tt,
        rt,
        $,
        Te,
        ct,
        xt,
        w = this,
        vt = 0,
        $t = 0,
        _r = t.passive || (!f && t.passive !== !1),
        ge = ur(o, Ze),
        Jt = ur(o, Me),
        dr = ge(),
        Er = Jt(),
        ze =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          Xt[0] === "pointerdown",
        pr = ji(o),
        we = o.ownerDocument || kr,
        Ft = [0, 0, 0],
        Ot = [0, 0, 0],
        er = 0,
        Pi = function () {
          return (er = Hi());
        },
        Pe = function (L, J) {
          return (
            ((w.event = L) && c && Pf(L.target, c)) ||
            (J && ze && L.pointerType !== "touch") ||
            (R && R(L, J))
          );
        },
        cn = function () {
          w._vx.reset(), w._vy.reset(), tt.pause(), h && h(w);
        },
        tr = function () {
          var L = (w.deltaX = Ia(Ft)),
            J = (w.deltaY = Ia(Ot)),
            D = Math.abs(L) >= i,
            B = Math.abs(J) >= i;
          z && (D || B) && z(w, L, J, Ft, Ot),
            D &&
              (S && w.deltaX > 0 && S(w),
              M && w.deltaX < 0 && M(w),
              P && P(w),
              O && w.deltaX < 0 != vt < 0 && O(w),
              (vt = w.deltaX),
              (Ft[0] = Ft[1] = Ft[2] = 0)),
            B &&
              (k && w.deltaY > 0 && k(w),
              T && w.deltaY < 0 && T(w),
              C && C(w),
              V && w.deltaY < 0 != $t < 0 && V(w),
              ($t = w.deltaY),
              (Ot[0] = Ot[1] = Ot[2] = 0)),
            ($ || rt) &&
              (F && F(w),
              rt && (g && rt === 1 && g(w), m && m(w), (rt = 0)),
              ($ = !1)),
            ct && !(ct = !1) && Le && Le(w),
            Te && (Q(w), (Te = !1)),
            (pe = 0);
        },
        ri = function (L, J, D) {
          (Ft[D] += L),
            (Ot[D] += J),
            w._vx.update(L),
            w._vy.update(J),
            u ? pe || (pe = requestAnimationFrame(tr)) : tr();
        },
        ii = function (L, J) {
          Be &&
            !xt &&
            ((w.axis = xt = Math.abs(L) > Math.abs(J) ? "x" : "y"), (ct = !0)),
            xt !== "y" && ((Ft[2] += L), w._vx.update(L, !0)),
            xt !== "x" && ((Ot[2] += J), w._vy.update(J, !0)),
            u ? pe || (pe = requestAnimationFrame(tr)) : tr();
        },
        gr = function (L) {
          if (!Pe(L, 1)) {
            L = qi(L, f);
            var J = L.clientX,
              D = L.clientY,
              B = J - w.x,
              A = D - w.y,
              Y = w.isDragging;
            (w.x = J),
              (w.y = D),
              (Y ||
                ((B || A) &&
                  (Math.abs(w.startX - J) >= n ||
                    Math.abs(w.startY - D) >= n))) &&
                (rt || (rt = Y ? 2 : 1), Y || (w.isDragging = !0), ii(B, A));
          }
        },
        Rr = (w.onPress = function (X) {
          Pe(X, 1) ||
            (X && X.button) ||
            ((w.axis = xt = null),
            tt.pause(),
            (w.isPressed = !0),
            (X = qi(X)),
            (vt = $t = 0),
            (w.startX = w.x = X.clientX),
            (w.startY = w.y = X.clientY),
            w._vx.reset(),
            w._vy.reset(),
            ot(q ? o : we, Xt[1], gr, _r, !0),
            (w.deltaX = w.deltaY = 0),
            y && y(w));
        }),
        j = (w.onRelease = function (X) {
          if (!Pe(X, 1)) {
            st(q ? o : we, Xt[1], gr, !0);
            var L = !isNaN(w.y - w.startY),
              J = w.isDragging,
              D =
                J &&
                (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
              B = qi(X);
            !D &&
              L &&
              (w._vx.reset(),
              w._vy.reset(),
              f &&
                de &&
                We.delayedCall(0.08, function () {
                  if (Hi() - er > 300 && !X.defaultPrevented) {
                    if (X.target.click) X.target.click();
                    else if (we.createEvent) {
                      var A = we.createEvent("MouseEvents");
                      A.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Ct,
                        1,
                        B.screenX,
                        B.screenY,
                        B.clientX,
                        B.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        X.target.dispatchEvent(A);
                    }
                  }
                })),
              (w.isDragging = w.isGesturing = w.isPressed = !1),
              h && J && !q && tt.restart(!0),
              rt && tr(),
              v && J && v(w),
              b && b(w, D);
          }
        }),
        Ar = function (L) {
          return (
            L.touches &&
            L.touches.length > 1 &&
            (w.isGesturing = !0) &&
            ee(L, w.isDragging)
          );
        },
        It = function () {
          return (w.isGesturing = !1) || x(w);
        },
        Nt = function (L) {
          if (!Pe(L)) {
            var J = ge(),
              D = Jt();
            ri((J - dr) * _e, (D - Er) * _e, 1),
              (dr = J),
              (Er = D),
              h && tt.restart(!0);
          }
        },
        Bt = function (L) {
          if (!Pe(L)) {
            (L = qi(L, f)), Q && (Te = !0);
            var J =
              (L.deltaMode === 1 ? l : L.deltaMode === 2 ? Ct.innerHeight : 1) *
              p;
            ri(L.deltaX * J, L.deltaY * J, 0), h && !q && tt.restart(!0);
          }
        },
        Lr = function (L) {
          if (!Pe(L)) {
            var J = L.clientX,
              D = L.clientY,
              B = J - w.x,
              A = D - w.y;
            (w.x = J),
              (w.y = D),
              ($ = !0),
              h && tt.restart(!0),
              (B || A) && ii(B, A);
          }
        },
        ni = function (L) {
          (w.event = L), I(w);
        },
        rr = function (L) {
          (w.event = L), N(w);
        },
        Mi = function (L) {
          return Pe(L) || (qi(L, f) && ie(w));
        };
      (tt = w._dc = We.delayedCall(d || 0.25, cn).pause()),
        (w.deltaX = w.deltaY = 0),
        (w._vx = Bn(0, 50, !0)),
        (w._vy = Bn(0, 50, !0)),
        (w.scrollX = ge),
        (w.scrollY = Jt),
        (w.isDragging = w.isGesturing = w.isPressed = !1),
        Ya(this),
        (w.enable = function (X) {
          return (
            w.isEnabled ||
              (ot(pr ? we : o, "scroll", Js),
              s.indexOf("scroll") >= 0 && ot(pr ? we : o, "scroll", Nt, _r, Ae),
              s.indexOf("wheel") >= 0 && ot(o, "wheel", Bt, _r, Ae),
              ((s.indexOf("touch") >= 0 && Na) || s.indexOf("pointer") >= 0) &&
                (ot(o, Xt[0], Rr, _r, Ae),
                ot(we, Xt[2], j),
                ot(we, Xt[3], j),
                de && ot(o, "click", Pi, !0, !0),
                ie && ot(o, "click", Mi),
                ee && ot(we, "gesturestart", Ar),
                x && ot(we, "gestureend", It),
                I && ot(o, Hr + "enter", ni),
                N && ot(o, Hr + "leave", rr),
                F && ot(o, Hr + "move", Lr)),
              (w.isEnabled = !0),
              (w.isDragging = w.isGesturing = w.isPressed = $ = rt = !1),
              w._vx.reset(),
              w._vy.reset(),
              (dr = ge()),
              (Er = Jt()),
              X && X.type && Rr(X),
              Re && Re(w)),
            w
          );
        }),
        (w.disable = function () {
          w.isEnabled &&
            (pi.filter(function (X) {
              return X !== w && ji(X.target);
            }).length || st(pr ? we : o, "scroll", Js),
            w.isPressed &&
              (w._vx.reset(), w._vy.reset(), st(q ? o : we, Xt[1], gr, !0)),
            st(pr ? we : o, "scroll", Nt, Ae),
            st(o, "wheel", Bt, Ae),
            st(o, Xt[0], Rr, Ae),
            st(we, Xt[2], j),
            st(we, Xt[3], j),
            st(o, "click", Pi, !0),
            st(o, "click", Mi),
            st(we, "gesturestart", Ar),
            st(we, "gestureend", It),
            st(o, Hr + "enter", ni),
            st(o, Hr + "leave", rr),
            st(o, Hr + "move", Lr),
            (w.isEnabled = w.isPressed = w.isDragging = !1),
            be && be(w));
        }),
        (w.kill = w.revert =
          function () {
            w.disable();
            var X = pi.indexOf(w);
            X >= 0 && pi.splice(X, 1), lr === w && (lr = 0);
          }),
        pi.push(w),
        q && ji(o) && (lr = w),
        w.enable(_);
    }),
    wf(a, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    a
  );
})();
ye.version = "3.15.0";
ye.create = function (a) {
  return new ye(a);
};
ye.register = Wa;
ye.getAll = function () {
  return pi.slice();
};
ye.getById = function (a) {
  return pi.filter(function (e) {
    return e.vars.id === a;
  })[0];
};
Xa() && We.registerPlugin(ye);
var E,
  bi,
  H,
  re,
  kt,
  te,
  _o,
  ts,
  un,
  tn,
  Ki,
  Yn,
  $e,
  ns,
  oo,
  ut,
  Ga,
  qa,
  Ti,
  ll,
  eo,
  ul,
  lt,
  ao,
  fl,
  cl,
  Dr,
  lo,
  po,
  wi,
  go,
  rn,
  uo,
  to,
  Xn = 1,
  Je = Date.now,
  ro = Je(),
  zt = 0,
  Zi = 0,
  Ha = function (e, r, t) {
    var i = Mt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (t["_" + r + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  ja = function (e, r) {
    return r && (!Mt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  Mf = function a() {
    return Zi && requestAnimationFrame(a);
  },
  Qa = function () {
    return (ns = 1);
  },
  Ka = function () {
    return (ns = 0);
  },
  Kt = function (e) {
    return e;
  },
  $i = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  hl = function () {
    return typeof window < "u";
  },
  _l = function () {
    return E || (hl() && (E = window.gsap) && E.registerPlugin && E);
  },
  Jr = function (e) {
    return !!~_o.indexOf(e);
  },
  dl = function (e) {
    return (
      (e === "Height" ? go : H["inner" + e]) ||
      kt["client" + e] ||
      te["client" + e]
    );
  },
  pl = function (e) {
    return (
      fr(e, "getBoundingClientRect") ||
      (Jr(e)
        ? function () {
            return (es.width = H.innerWidth), (es.height = go), es;
          }
        : function () {
            return cr(e);
          })
    );
  },
  kf = function (e, r, t) {
    var i = t.d,
      n = t.d2,
      s = t.a;
    return (s = fr(e, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (r ? dl(n) : e["client" + n]) || 0;
        };
  },
  Of = function (e, r) {
    return !r || ~Vt.indexOf(e)
      ? pl(e)
      : function () {
          return es;
        };
  },
  Zt = function (e, r) {
    var t = r.s,
      i = r.d2,
      n = r.d,
      s = r.a;
    return Math.max(
      0,
      (t = "scroll" + i) && (s = fr(e, t))
        ? s() - pl(e)()[n]
        : Jr(e)
        ? (kt[t] || te[t]) - dl(i)
        : e[t] - e["offset" + i]
    );
  },
  Vn = function (e, r) {
    for (var t = 0; t < Ti.length; t += 3)
      (!r || ~r.indexOf(Ti[t + 1])) && e(Ti[t], Ti[t + 1], Ti[t + 2]);
  },
  Mt = function (e) {
    return typeof e == "string";
  },
  et = function (e) {
    return typeof e == "function";
  },
  Ji = function (e) {
    return typeof e == "number";
  },
  jr = function (e) {
    return typeof e == "object";
  },
  Qi = function (e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause();
  },
  xi = function (e, r, t) {
    if (e.enabled) {
      var i = e._ctx
        ? e._ctx.add(function () {
            return r(e, t);
          })
        : r(e, t);
      i && i.totalTime && (e.callbackAnimation = i);
    }
  },
  vi = Math.abs,
  gl = "left",
  ml = "top",
  mo = "right",
  xo = "bottom",
  Kr = "width",
  Zr = "height",
  nn = "Right",
  sn = "Left",
  on = "Top",
  an = "Bottom",
  ke = "padding",
  At = "margin",
  Ci = "Width",
  vo = "Height",
  Ee = "px",
  Lt = function (e) {
    return H.getComputedStyle(
      e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e
    );
  },
  Df = function (e) {
    var r = Lt(e).position;
    e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  Za = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t]);
    return e;
  },
  cr = function (e, r) {
    var t =
        r &&
        Lt(e)[oo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        E.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : e.scrollingElement.getBoundingClientRect();
    return t && t.progress(0).kill(), i;
  },
  rs = function (e, r) {
    var t = r.d2;
    return e["offset" + t] || e["client" + t] || 0;
  },
  xl = function (e) {
    var r = [],
      t = e.labels,
      i = e.duration(),
      n;
    for (n in t) r.push(t[n] / i);
    return r;
  },
  Ef = function (e) {
    return function (r) {
      return E.utils.snap(xl(e), r);
    };
  },
  yo = function (e) {
    var r = E.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, n) {
          return i - n;
        });
    return t
      ? function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o;
          if (!n) return r(i);
          if (n > 0) {
            for (i -= s, o = 0; o < t.length; o++) if (t[o] >= i) return t[o];
            return t[o - 1];
          } else for (o = t.length, i += s; o--; ) if (t[o] <= i) return t[o];
          return t[0];
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o = r(i);
          return !n || Math.abs(o - i) < s || o - i < 0 == n < 0
            ? o
            : r(n < 0 ? i - e : i + e);
        };
  },
  Rf = function (e) {
    return function (r, t) {
      return yo(xl(e))(r, t.direction);
    };
  },
  Un = function (e, r, t, i) {
    return t.split(",").forEach(function (n) {
      return e(r, n, i);
    });
  },
  Ne = function (e, r, t, i, n) {
    return e.addEventListener(r, t, { passive: !i, capture: !!n });
  },
  Ie = function (e, r, t, i) {
    return e.removeEventListener(r, t, !!i);
  },
  Wn = function (e, r, t) {
    (t = t && t.wheelHandler), t && (e(r, "wheel", t), e(r, "touchmove", t));
  },
  $a = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Gn = { toggleActions: "play", anticipatePin: 0 },
  is = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Kn = function (e, r) {
    if (Mt(e)) {
      var t = e.indexOf("="),
        i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf("%") > t && (i *= r / 100), (e = e.substr(0, t - 1))),
        (e =
          i +
          (e in is
            ? is[e] * r
            : ~e.indexOf("%")
            ? (parseFloat(e) * r) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  qn = function (e, r, t, i, n, s, o, l) {
    var u = n.startColor,
      f = n.endColor,
      h = n.fontSize,
      d = n.indent,
      c = n.fontWeight,
      p = re.createElement("div"),
      _ = Jr(t) || fr(t, "pinType") === "fixed",
      g = e.indexOf("scroller") !== -1,
      v = _ ? te : t.tagName === "IFRAME" ? t.contentDocument.body : t,
      m = e.indexOf("start") !== -1,
      y = m ? u : f,
      b =
        "border-color:" +
        y +
        ";font-size:" +
        h +
        ";color:" +
        y +
        ";font-weight:" +
        c +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + ((g || l) && _ ? "fixed;" : "absolute;")),
      (g || l || !_) &&
        (b += (i === Me ? mo : xo) + ":" + (s + parseFloat(d)) + "px;"),
      o &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (p._isStart = m),
      p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
      (p.style.cssText = b),
      (p.innerText = r || r === 0 ? e + "-" + r : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + i.op.d2]),
      Zn(p, 0, i, m),
      p
    );
  },
  Zn = function (e, r, t, i) {
    var n = { display: "block" },
      s = t[i ? "os2" : "p2"],
      o = t[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (n[t.a + "Percent"] = i ? -100 : 0),
      (n[t.a] = i ? "1px" : 0),
      (n["border" + s + Ci] = 1),
      (n["border" + o + Ci] = 0),
      (n[t.p] = r + "px"),
      E.set(e, n);
  },
  W = [],
  fo = {},
  fn,
  Ja = function () {
    return Je() - zt > 34 && (fn || (fn = requestAnimationFrame(hr)));
  },
  yi = function () {
    (!lt || !lt.isPressed || lt.startX > te.clientWidth) &&
      (U.cache++,
      lt ? fn || (fn = requestAnimationFrame(hr)) : hr(),
      zt || ti("scrollStart"),
      (zt = Je()));
  },
  io = function () {
    (cl = H.innerWidth), (fl = H.innerHeight);
  },
  en = function (e) {
    U.cache++,
      (e === !0 ||
        (!$e &&
          !ul &&
          !re.fullscreenElement &&
          !re.webkitFullscreenElement &&
          (!ao ||
            cl !== H.innerWidth ||
            Math.abs(H.innerHeight - fl) > H.innerHeight * 0.25))) &&
        ts.restart(!0);
  },
  ei = {},
  Af = [],
  vl = function a() {
    return Ie(G, "scrollEnd", a) || Qr(!0);
  },
  ti = function (e) {
    return (
      (ei[e] &&
        ei[e].map(function (r) {
          return r();
        })) ||
      Af
    );
  },
  Pt = [],
  yl = function (e) {
    for (var r = 0; r < Pt.length; r += 5)
      (!e || (Pt[r + 4] && Pt[r + 4].query === e)) &&
        ((Pt[r].style.cssText = Pt[r + 1]),
        Pt[r].getBBox && Pt[r].setAttribute("transform", Pt[r + 2] || ""),
        (Pt[r + 3].uncache = 1));
  },
  bl = function () {
    return U.forEach(function (e) {
      return et(e) && ++e.cacheID && (e.rec = e());
    });
  },
  bo = function (e, r) {
    var t;
    for (ut = 0; ut < W.length; ut++)
      (t = W[ut]),
        t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
    (rn = !0), r && yl(r), r || ti("revert");
  },
  Tl = function (e, r) {
    U.cache++,
      (r || !ft) &&
        U.forEach(function (t) {
          return et(t) && t.cacheID++ && (t.rec = 0);
        }),
      Mt(e) && (H.history.scrollRestoration = po = e);
  },
  ft,
  $r = 0,
  el,
  Lf = function () {
    if (el !== $r) {
      var e = (el = $r);
      requestAnimationFrame(function () {
        return e === $r && Qr(!0);
      });
    }
  },
  wl = function () {
    te.appendChild(wi),
      (go = (!lt && wi.offsetHeight) || H.innerHeight),
      te.removeChild(wi);
  },
  tl = function (e) {
    return un(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = e ? "none" : "block");
    });
  },
  Qr = function (e, r) {
    if (
      ((kt = re.documentElement),
      (te = re.body),
      (_o = [H, re, kt, te]),
      zt && !e && !rn)
    ) {
      Ne(G, "scrollEnd", vl);
      return;
    }
    wl(), (ft = G.isRefreshing = !0), rn || bl();
    var t = ti("refreshInit");
    ll && G.sort(),
      r || bo(),
      U.forEach(function (i) {
        et(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      W.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (rn = !1),
      W.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = i.pin[n];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
        }
      }),
      (uo = 1),
      tl(!0),
      W.forEach(function (i) {
        var n = Zt(i.scroller, i._dir),
          s = i.vars.end === "max" || (i._endClamp && i.end > n),
          o = i._startClamp && i.start >= n;
        (s || o) &&
          i.setPositions(
            o ? n - 1 : i.start,
            s ? Math.max(o ? n : i.start + 1, n) : i.end,
            !0
          );
      }),
      tl(!1),
      (uo = 0),
      t.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      U.forEach(function (i) {
        et(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      Tl(po, 1),
      ts.pause(),
      $r++,
      (ft = 2),
      hr(2),
      W.forEach(function (i) {
        return et(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (ft = G.isRefreshing = !1),
      ti("refresh");
  },
  co = 0,
  $n = 1,
  ln,
  hr = function (e) {
    if (e === 2 || (!ft && !rn)) {
      (G.isUpdating = !0), ln && ln.update(0);
      var r = W.length,
        t = Je(),
        i = t - ro >= 50,
        n = r && W[0].scroll();
      if (
        (($n = co > n ? -1 : 1),
        ft || (co = n),
        i &&
          (zt && !ns && t - zt > 200 && ((zt = 0), ti("scrollEnd")),
          (Ki = ro),
          (ro = t)),
        $n < 0)
      ) {
        for (ut = r; ut-- > 0; ) W[ut] && W[ut].update(0, i);
        $n = 1;
      } else for (ut = 0; ut < r; ut++) W[ut] && W[ut].update(0, i);
      G.isUpdating = !1;
    }
    fn = 0;
  },
  ho = [
    gl,
    ml,
    xo,
    mo,
    At + an,
    At + nn,
    At + on,
    At + sn,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Jn = ho.concat([
    Kr,
    Zr,
    "boxSizing",
    "max" + Ci,
    "max" + vo,
    "position",
    At,
    ke,
    ke + on,
    ke + nn,
    ke + an,
    ke + sn,
  ]),
  zf = function (e, r, t) {
    Si(t);
    var i = e._gsap;
    if (i.spacerIsNative) Si(i.spacerState);
    else if (e._gsap.swappedIn) {
      var n = r.parentNode;
      n && (n.insertBefore(e, r), n.removeChild(r));
    }
    e._gsap.swappedIn = !1;
  },
  no = function (e, r, t, i) {
    if (!e._gsap.swappedIn) {
      for (var n = ho.length, s = r.style, o = e.style, l; n--; )
        (l = ho[n]), (s[l] = t[l]);
      (s.position = t.position === "absolute" ? "absolute" : "relative"),
        t.display === "inline" && (s.display = "inline-block"),
        (o[xo] = o[mo] = "auto"),
        (s.flexBasis = t.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Kr] = rs(e, Ze) + Ee),
        (s[Zr] = rs(e, Me) + Ee),
        (s[ke] = o[At] = o[ml] = o[gl] = "0"),
        Si(i),
        (o[Kr] = o["max" + Ci] = t[Kr]),
        (o[Zr] = o["max" + vo] = t[Zr]),
        (o[ke] = t[ke]),
        e.parentNode !== r &&
          (e.parentNode.insertBefore(r, e), r.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Ff = /([A-Z])/g,
  Si = function (e) {
    if (e) {
      var r = e.t.style,
        t = e.length,
        i = 0,
        n,
        s;
      for ((e.t._gsap || E.core.getCache(e.t)).uncache = 1; i < t; i += 2)
        (s = e[i + 1]),
          (n = e[i]),
          s
            ? (r[n] = s)
            : r[n] && r.removeProperty(n.replace(Ff, "-$1").toLowerCase());
    }
  },
  Hn = function (e) {
    for (var r = Jn.length, t = e.style, i = [], n = 0; n < r; n++)
      i.push(Jn[n], t[Jn[n]]);
    return (i.t = e), i;
  },
  If = function (e, r, t) {
    for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
      (o = e[s]), i.push(o, o in r ? r[o] : e[s + 1]);
    return (i.t = e.t), i;
  },
  es = { left: 0, top: 0 },
  rl = function (e, r, t, i, n, s, o, l, u, f, h, d, c, p) {
    et(e) && (e = e(l)),
      Mt(e) &&
        e.substr(0, 3) === "max" &&
        (e = d + (e.charAt(4) === "=" ? Kn("0" + e.substr(3), t) : 0));
    var _ = c ? c.time() : 0,
      g,
      v,
      m;
    if ((c && c.seek(0), isNaN(e) || (e = +e), Ji(e)))
      c &&
        (e = E.utils.mapRange(
          c.scrollTrigger.start,
          c.scrollTrigger.end,
          0,
          d,
          e
        )),
        o && Zn(o, t, i, !0);
    else {
      et(r) && (r = r(l));
      var y = (e || "0").split(" "),
        b,
        S,
        M,
        T;
      (m = at(r, l) || te),
        (b = cr(m) || {}),
        (!b || (!b.left && !b.top)) &&
          Lt(m).display === "none" &&
          ((T = m.style.display),
          (m.style.display = "block"),
          (b = cr(m)),
          T ? (m.style.display = T) : m.style.removeProperty("display")),
        (S = Kn(y[0], b[i.d])),
        (M = Kn(y[1] || "0", t)),
        (e = b[i.p] - u[i.p] - f + S + n - M),
        o && Zn(o, M, i, t - M < 20 || (o._isStart && M > 20)),
        (t -= t - M);
    }
    if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), s)) {
      var k = e + t,
        P = s._isStart;
      (g = "scroll" + i.d2),
        Zn(
          s,
          k,
          i,
          (P && k > 20) ||
            (!P && (h ? Math.max(te[g], kt[g]) : s.parentNode[g]) <= k + 1)
        ),
        h &&
          ((u = cr(o)),
          h && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + Ee));
    }
    return (
      c &&
        m &&
        ((g = cr(m)),
        c.seek(d),
        (v = cr(m)),
        (c._caScrollDist = g[i.p] - v[i.p]),
        (e = (e / c._caScrollDist) * d)),
      c && c.seek(_),
      c ? e : Math.round(e)
    );
  },
  Nf = /(webkit|moz|length|cssText|inset)/i,
  il = function (e, r, t, i) {
    if (e.parentNode !== r) {
      var n = e.style,
        s,
        o;
      if (r === te) {
        (e._stOrig = n.cssText), (o = Lt(e));
        for (s in o)
          !+s &&
            !Nf.test(s) &&
            o[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = o[s]);
        (n.top = t), (n.left = i);
      } else n.cssText = e._stOrig;
      (E.core.getCache(e).uncache = 1), r.appendChild(e);
    }
  },
  Sl = function (e, r, t) {
    var i = r,
      n = i;
    return function (s) {
      var o = Math.round(e());
      return (
        o !== i &&
          o !== n &&
          Math.abs(o - i) > 3 &&
          Math.abs(o - n) > 3 &&
          ((s = o), t && t()),
        (n = i),
        (i = Math.round(s)),
        i
      );
    };
  },
  jn = function (e, r, t) {
    var i = {};
    (i[r.p] = "+=" + t), E.set(e, i);
  },
  nl = function (e, r) {
    var t = ur(e, r),
      i = "_scroll" + r.p2,
      n = function s(o, l, u, f, h) {
        var d = s.tween,
          c = l.onComplete,
          p = {};
        u = u || t();
        var _ = Sl(t, u, function () {
          d.kill(), (s.tween = 0);
        });
        return (
          (h = (f && h) || 0),
          (f = f || o - u),
          d && d.kill(),
          (l[i] = o),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[i] = function () {
            return _(u + f * d.ratio + h * d.ratio * d.ratio);
          }),
          (l.onUpdate = function () {
            U.cache++, s.tween && hr();
          }),
          (l.onComplete = function () {
            (s.tween = 0), c && c.call(d);
          }),
          (d = s.tween = E.to(e, l)),
          d
        );
      };
    return (
      (e[i] = t),
      (t.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      Ne(e, "wheel", t.wheelHandler),
      G.isTouch && Ne(e, "touchmove", t.wheelHandler),
      n
    );
  },
  G = (function () {
    function a(r, t) {
      bi ||
        a.register(E) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        lo(this),
        this.init(r, t);
    }
    var e = a.prototype;
    return (
      (e.init = function (t, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Zi)
        ) {
          this.update = this.refresh = this.kill = Kt;
          return;
        }
        t = Za(Mt(t) || Ji(t) || t.nodeType ? { trigger: t } : t, Gn);
        var n = t,
          s = n.onUpdate,
          o = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          f = n.onRefresh,
          h = n.scrub,
          d = n.trigger,
          c = n.pin,
          p = n.pinSpacing,
          _ = n.invalidateOnRefresh,
          g = n.anticipatePin,
          v = n.onScrubComplete,
          m = n.onSnapComplete,
          y = n.once,
          b = n.snap,
          S = n.pinReparent,
          M = n.pinSpacer,
          T = n.containerAnimation,
          k = n.fastScrollEnd,
          P = n.preventOverlaps,
          C =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? Ze
              : Me,
          z = !h && h !== 0,
          O = at(t.scroller || H),
          V = E.core.getCache(O),
          I = Jr(O),
          N =
            ("pinType" in t
              ? t.pinType
              : fr(O, "pinType") || (I && "fixed")) === "fixed",
          F = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          R = z && t.toggleActions.split(" "),
          q = "markers" in t ? t.markers : Gn.markers,
          ee = I ? 0 : parseFloat(Lt(O)["border" + C.p2 + Ci]) || 0,
          x = this,
          Q =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(x);
            },
          Re = kf(O, I, C),
          be = Of(O, I),
          ie = 0,
          _e = 0,
          Ae = 0,
          de = ur(O, C),
          Be,
          Le,
          pe,
          tt,
          rt,
          $,
          Te,
          ct,
          xt,
          w,
          vt,
          $t,
          _r,
          ge,
          Jt,
          dr,
          Er,
          ze,
          pr,
          we,
          Ft,
          Ot,
          er,
          Pi,
          Pe,
          cn,
          tr,
          ri,
          ii,
          gr,
          Rr,
          j,
          Ar,
          It,
          Nt,
          Bt,
          Lr,
          ni,
          rr;
        if (
          ((x._startClamp = x._endClamp = !1),
          (x._dir = C),
          (g *= 45),
          (x.scroller = O),
          (x.scroll = T ? T.time.bind(T) : de),
          (tt = de()),
          (x.vars = t),
          (i = i || t.animation),
          "refreshPriority" in t &&
            ((ll = 1), t.refreshPriority === -9999 && (ln = x)),
          (V.tweenScroll = V.tweenScroll || {
            top: nl(O, Me),
            left: nl(O, Ze),
          }),
          (x.tweenTo = Be = V.tweenScroll[C.p]),
          (x.scrubDuration = function (D) {
            (Ar = Ji(D) && D),
              Ar
                ? j
                  ? j.duration(D)
                  : (j = E.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Ar,
                      paused: !0,
                      onComplete: function () {
                        return v && v(x);
                      },
                    }))
                : (j && j.progress(1).kill(), (j = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !x.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (x.animation = i.pause()),
            (i.scrollTrigger = x),
            x.scrubDuration(h),
            (gr = 0),
            l || (l = i.vars.id)),
          b &&
            ((!jr(b) || b.push) && (b = { snapTo: b }),
            "scrollBehavior" in te.style &&
              E.set(I ? [te, kt] : O, { scrollBehavior: "auto" }),
            U.forEach(function (D) {
              return (
                et(D) &&
                D.target === (I ? re.scrollingElement || kt : O) &&
                (D.smooth = !1)
              );
            }),
            (pe = et(b.snapTo)
              ? b.snapTo
              : b.snapTo === "labels"
              ? Ef(i)
              : b.snapTo === "labelsDirectional"
              ? Rf(i)
              : b.directional !== !1
              ? function (D, B) {
                  return yo(b.snapTo)(D, Je() - _e < 500 ? 0 : B.direction);
                }
              : E.utils.snap(b.snapTo)),
            (It = b.duration || { min: 0.1, max: 2 }),
            (It = jr(It) ? tn(It.min, It.max) : tn(It, It)),
            (Nt = E.delayedCall(b.delay || Ar / 2 || 0.1, function () {
              var D = de(),
                B = Je() - _e < 500,
                A = Be.tween;
              if (
                (B || Math.abs(x.getVelocity()) < 10) &&
                !A &&
                !ns &&
                ie !== D
              ) {
                var Y = (D - $) / ge,
                  Fe = i && !z ? i.totalProgress() : Y,
                  K = B ? 0 : ((Fe - Rr) / (Je() - Ki)) * 1e3 || 0,
                  Se = E.utils.clamp(-Y, 1 - Y, (vi(K / 2) * K) / 0.185),
                  Ge = Y + (b.inertia === !1 ? 0 : Se),
                  me,
                  ae,
                  ne = b,
                  Yt = ne.onStart,
                  ue = ne.onInterrupt,
                  yt = ne.onComplete;
                if (
                  ((me = pe(Ge, x)),
                  Ji(me) || (me = Ge),
                  (ae = Math.max(0, Math.round($ + me * ge))),
                  D <= Te && D >= $ && ae !== D)
                ) {
                  if (A && !A._initted && A.data <= vi(ae - D)) return;
                  b.inertia === !1 && (Se = me - Y),
                    Be(
                      ae,
                      {
                        duration: It(
                          vi(
                            (Math.max(vi(Ge - Fe), vi(me - Fe)) * 0.185) /
                              K /
                              0.05 || 0
                          )
                        ),
                        ease: b.ease || "power3",
                        data: vi(ae - D),
                        onInterrupt: function () {
                          return Nt.restart(!0) && ue && xi(x, ue);
                        },
                        onComplete: function () {
                          x.update(),
                            (ie = de()),
                            i &&
                              !z &&
                              (j
                                ? j.resetTo(
                                    "totalProgress",
                                    me,
                                    i._tTime / i._tDur
                                  )
                                : i.progress(me)),
                            (gr = Rr =
                              i && !z ? i.totalProgress() : x.progress),
                            m && m(x),
                            yt && xi(x, yt);
                        },
                      },
                      D,
                      Se * ge,
                      ae - D - Se * ge
                    ),
                    Yt && xi(x, Yt, Be.tween);
                }
              } else x.isActive && ie !== D && Nt.restart(!0);
            }).pause())),
          l && (fo[l] = x),
          (d = x.trigger = at(d || (c !== !0 && c))),
          (rr = d && d._gsap && d._gsap.stRevert),
          rr && (rr = rr(x)),
          (c = c === !0 ? d : at(c)),
          Mt(o) && (o = { targets: d, className: o }),
          c &&
            (p === !1 ||
              p === At ||
              (p =
                !p &&
                c.parentNode &&
                c.parentNode.style &&
                Lt(c.parentNode).display === "flex"
                  ? !1
                  : ke),
            (x.pin = c),
            (Le = E.core.getCache(c)),
            Le.spacer
              ? (Jt = Le.pinState)
              : (M &&
                  ((M = at(M)),
                  M && !M.nodeType && (M = M.current || M.nativeElement),
                  (Le.spacerIsNative = !!M),
                  M && (Le.spacerState = Hn(M))),
                (Le.spacer = ze = M || re.createElement("div")),
                ze.classList.add("pin-spacer"),
                l && ze.classList.add("pin-spacer-" + l),
                (Le.pinState = Jt = Hn(c))),
            t.force3D !== !1 && E.set(c, { force3D: !0 }),
            (x.spacer = ze = Le.spacer),
            (ii = Lt(c)),
            (Pi = ii[p + C.os2]),
            (we = E.getProperty(c)),
            (Ft = E.quickSetter(c, C.a, Ee)),
            no(c, ze, ii),
            (Er = Hn(c))),
          q)
        ) {
          ($t = jr(q) ? Za(q, $a) : $a),
            (w = qn("scroller-start", l, O, C, $t, 0)),
            (vt = qn("scroller-end", l, O, C, $t, 0, w)),
            (pr = w["offset" + C.op.d2]);
          var Mi = at(fr(O, "content") || O);
          (ct = this.markerStart = qn("start", l, Mi, C, $t, pr, 0, T)),
            (xt = this.markerEnd = qn("end", l, Mi, C, $t, pr, 0, T)),
            T && (ni = E.quickSetter([ct, xt], C.a, Ee)),
            !N &&
              !(Vt.length && fr(O, "fixedMarkers") === !0) &&
              (Df(I ? te : O),
              E.set([w, vt], { force3D: !0 }),
              (cn = E.quickSetter(w, C.a, Ee)),
              (ri = E.quickSetter(vt, C.a, Ee)));
        }
        if (T) {
          var X = T.vars.onUpdate,
            L = T.vars.onUpdateParams;
          T.eventCallback("onUpdate", function () {
            x.update(0, 0, 1), X && X.apply(T, L || []);
          });
        }
        if (
          ((x.previous = function () {
            return W[W.indexOf(x) - 1];
          }),
          (x.next = function () {
            return W[W.indexOf(x) + 1];
          }),
          (x.revert = function (D, B) {
            if (!B) return x.kill(!0);
            var A = D !== !1 || !x.enabled,
              Y = $e;
            A !== x.isReverted &&
              (A &&
                ((Bt = Math.max(de(), x.scroll.rec || 0)),
                (Ae = x.progress),
                (Lr = i && i.progress())),
              ct &&
                [ct, xt, w, vt].forEach(function (Fe) {
                  return (Fe.style.display = A ? "none" : "block");
                }),
              A && (($e = x), x.update(A)),
              c &&
                (!S || !x.isActive) &&
                (A ? zf(c, ze, Jt) : no(c, ze, Lt(c), Pe)),
              A || x.update(A),
              ($e = Y),
              (x.isReverted = A));
          }),
          (x.refresh = function (D, B, A, Y) {
            if (!(($e || !x.enabled) && !B)) {
              if (c && D && zt) {
                Ne(a, "scrollEnd", vl);
                return;
              }
              !ft && Q && Q(x),
                ($e = x),
                Be.tween && !A && (Be.tween.kill(), (Be.tween = 0)),
                j && j.pause(),
                _ &&
                  i &&
                  (i.revert({ kill: !1 }).invalidate(),
                  i.getChildren
                    ? i.getChildren(!0, !0, !1).forEach(function (mr) {
                        return mr.vars.immediateRender && mr.render(0, !0, !0);
                      })
                    : i.vars.immediateRender && i.render(0, !0, !0)),
                x.isReverted || x.revert(!0, !0),
                (x._subPinOffset = !1);
              var Fe = Re(),
                K = be(),
                Se = T ? T.duration() : Zt(O, C),
                Ge = ge <= 0.01 || !ge,
                me = 0,
                ae = Y || 0,
                ne = jr(A) ? A.end : t.end,
                Yt = t.endTrigger || d,
                ue = jr(A)
                  ? A.start
                  : t.start || (t.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"),
                yt = (x.pinnedContainer =
                  t.pinnedContainer && at(t.pinnedContainer, x)),
                Ut = (d && Math.max(0, W.indexOf(x))) || 0,
                Ye = Ut,
                Xe,
                qe,
                zr,
                hn,
                He,
                Oe,
                Wt,
                ss,
                To,
                ki,
                Gt,
                Oi,
                _n;
              for (
                q &&
                jr(A) &&
                ((Oi = E.getProperty(w, C.p)), (_n = E.getProperty(vt, C.p)));
                Ye-- > 0;

              )
                (Oe = W[Ye]),
                  Oe.end || Oe.refresh(0, 1) || ($e = x),
                  (Wt = Oe.pin),
                  Wt &&
                    (Wt === d || Wt === c || Wt === yt) &&
                    !Oe.isReverted &&
                    (ki || (ki = []), ki.unshift(Oe), Oe.revert(!0, !0)),
                  Oe !== W[Ye] && (Ut--, Ye--);
              for (
                et(ue) && (ue = ue(x)),
                  ue = Ha(ue, "start", x),
                  $ =
                    rl(
                      ue,
                      d,
                      Fe,
                      C,
                      de(),
                      ct,
                      w,
                      x,
                      K,
                      ee,
                      N,
                      Se,
                      T,
                      x._startClamp && "_startClamp"
                    ) || (c ? -0.001 : 0),
                  et(ne) && (ne = ne(x)),
                  Mt(ne) &&
                    !ne.indexOf("+=") &&
                    (~ne.indexOf(" ")
                      ? (ne = (Mt(ue) ? ue.split(" ")[0] : "") + ne)
                      : ((me = Kn(ne.substr(2), Fe)),
                        (ne = Mt(ue)
                          ? ue
                          : (T
                              ? E.utils.mapRange(
                                  0,
                                  T.duration(),
                                  T.scrollTrigger.start,
                                  T.scrollTrigger.end,
                                  $
                                )
                              : $) + me),
                        (Yt = d))),
                  ne = Ha(ne, "end", x),
                  Te =
                    Math.max(
                      $,
                      rl(
                        ne || (Yt ? "100% 0" : Se),
                        Yt,
                        Fe,
                        C,
                        de() + me,
                        xt,
                        vt,
                        x,
                        K,
                        ee,
                        N,
                        Se,
                        T,
                        x._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  me = 0,
                  Ye = Ut;
                Ye--;

              )
                (Oe = W[Ye] || {}),
                  (Wt = Oe.pin),
                  Wt &&
                    Oe.start - Oe._pinPush <= $ &&
                    !T &&
                    Oe.end > 0 &&
                    ((Xe =
                      Oe.end -
                      (x._startClamp ? Math.max(0, Oe.start) : Oe.start)),
                    ((Wt === d && Oe.start - Oe._pinPush < $) || Wt === yt) &&
                      isNaN(ue) &&
                      (me += Xe * (1 - Oe.progress)),
                    Wt === c && (ae += Xe));
              if (
                (($ += me),
                (Te += me),
                x._startClamp && (x._startClamp += me),
                x._endClamp &&
                  !ft &&
                  ((x._endClamp = Te || -0.001), (Te = Math.min(Te, Zt(O, C)))),
                (ge = Te - $ || (($ -= 0.01) && 0.001)),
                Ge && (Ae = E.utils.clamp(0, 1, E.utils.normalize($, Te, Bt))),
                (x._pinPush = ae),
                ct &&
                  me &&
                  ((Xe = {}),
                  (Xe[C.a] = "+=" + me),
                  yt && (Xe[C.p] = "-=" + de()),
                  E.set([ct, xt], Xe)),
                c && !(uo && x.end >= Zt(O, C)))
              )
                (Xe = Lt(c)),
                  (hn = C === Me),
                  (zr = de()),
                  (Ot = parseFloat(we(C.a)) + ae),
                  !Se &&
                    Te > 1 &&
                    ((Gt = (I ? re.scrollingElement || kt : O).style),
                    (Gt = {
                      style: Gt,
                      value: Gt["overflow" + C.a.toUpperCase()],
                    }),
                    I &&
                      Lt(te)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                      (Gt.style["overflow" + C.a.toUpperCase()] = "scroll")),
                  no(c, ze, Xe),
                  (Er = Hn(c)),
                  (qe = cr(c, !0)),
                  (ss = N && ur(O, hn ? Ze : Me)()),
                  p
                    ? ((Pe = [p + C.os2, ge + ae + Ee]),
                      (Pe.t = ze),
                      (Ye = p === ke ? rs(c, C) + ge + ae : 0),
                      Ye &&
                        (Pe.push(C.d, Ye + Ee),
                        ze.style.flexBasis !== "auto" &&
                          (ze.style.flexBasis = Ye + Ee)),
                      Si(Pe),
                      yt &&
                        W.forEach(function (mr) {
                          mr.pin === yt &&
                            mr.vars.pinSpacing !== !1 &&
                            (mr._subPinOffset = !0);
                        }),
                      N && de(Bt))
                    : ((Ye = rs(c, C)),
                      Ye &&
                        ze.style.flexBasis !== "auto" &&
                        (ze.style.flexBasis = Ye + Ee)),
                  N &&
                    ((He = {
                      top: qe.top + (hn ? zr - $ : ss) + Ee,
                      left: qe.left + (hn ? ss : zr - $) + Ee,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (He[Kr] = He["max" + Ci] = Math.ceil(qe.width) + Ee),
                    (He[Zr] = He["max" + vo] = Math.ceil(qe.height) + Ee),
                    (He[At] =
                      He[At + on] =
                      He[At + nn] =
                      He[At + an] =
                      He[At + sn] =
                        "0"),
                    (He[ke] = Xe[ke]),
                    (He[ke + on] = Xe[ke + on]),
                    (He[ke + nn] = Xe[ke + nn]),
                    (He[ke + an] = Xe[ke + an]),
                    (He[ke + sn] = Xe[ke + sn]),
                    (dr = If(Jt, He, S)),
                    ft && de(0)),
                  i
                    ? ((To = i._initted),
                      eo(1),
                      i.render(i.duration(), !0, !0),
                      (er = we(C.a) - Ot + ge + ae),
                      (tr = Math.abs(ge - er) > 1),
                      N && tr && dr.splice(dr.length - 2, 2),
                      i.render(0, !0, !0),
                      To || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      eo(0))
                    : (er = ge),
                  Gt &&
                    (Gt.value
                      ? (Gt.style["overflow" + C.a.toUpperCase()] = Gt.value)
                      : Gt.style.removeProperty("overflow-" + C.a));
              else if (d && de() && !T)
                for (qe = d.parentNode; qe && qe !== te; )
                  qe._pinOffset &&
                    (($ -= qe._pinOffset), (Te -= qe._pinOffset)),
                    (qe = qe.parentNode);
              ki &&
                ki.forEach(function (mr) {
                  return mr.revert(!1, !0);
                }),
                (x.start = $),
                (x.end = Te),
                (tt = rt = ft ? Bt : de()),
                !T && !ft && (tt < Bt && de(Bt), (x.scroll.rec = 0)),
                x.revert(!1, !0),
                (_e = Je()),
                Nt && ((ie = -1), Nt.restart(!0)),
                ($e = 0),
                i &&
                  z &&
                  (i._initted || Lr) &&
                  i.progress() !== Lr &&
                  i.progress(Lr || 0, !0).render(i.time(), !0, !0),
                (Ge || Ae !== x.progress || T || _ || (i && !i._initted)) &&
                  (i &&
                    !z &&
                    (i._initted || Ae || i.vars.immediateRender !== !1) &&
                    i.totalProgress(
                      T && $ < -0.001 && !Ae ? E.utils.normalize($, Te, 0) : Ae,
                      !0
                    ),
                  (x.progress = Ge || (tt - $) / ge === Ae ? 0 : Ae)),
                c && p && (ze._pinOffset = Math.round(x.progress * er)),
                j && j.invalidate(),
                isNaN(Oi) ||
                  ((Oi -= E.getProperty(w, C.p)),
                  (_n -= E.getProperty(vt, C.p)),
                  jn(w, C, Oi),
                  jn(ct, C, Oi - (Y || 0)),
                  jn(vt, C, _n),
                  jn(xt, C, _n - (Y || 0))),
                Ge && !ft && x.update(),
                f && !ft && !_r && ((_r = !0), f(x), (_r = !1));
            }
          }),
          (x.getVelocity = function () {
            return ((de() - rt) / (Je() - Ki)) * 1e3 || 0;
          }),
          (x.endAnimation = function () {
            Qi(x.callbackAnimation),
              i &&
                (j
                  ? j.progress(1)
                  : i.paused()
                  ? z || Qi(i, x.direction < 0, 1)
                  : Qi(i, i.reversed()));
          }),
          (x.labelToScroll = function (D) {
            return (
              (i &&
                i.labels &&
                ($ || x.refresh() || $) + (i.labels[D] / i.duration()) * ge) ||
              0
            );
          }),
          (x.getTrailing = function (D) {
            var B = W.indexOf(x),
              A = x.direction > 0 ? W.slice(0, B).reverse() : W.slice(B + 1);
            return (
              Mt(D)
                ? A.filter(function (Y) {
                    return Y.vars.preventOverlaps === D;
                  })
                : A
            ).filter(function (Y) {
              return x.direction > 0 ? Y.end <= $ : Y.start >= Te;
            });
          }),
          (x.update = function (D, B, A) {
            if (!(T && !A && !D)) {
              var Y = ft === !0 ? Bt : x.scroll(),
                Fe = D ? 0 : (Y - $) / ge,
                K = Fe < 0 ? 0 : Fe > 1 ? 1 : Fe || 0,
                Se = x.progress,
                Ge,
                me,
                ae,
                ne,
                Yt,
                ue,
                yt,
                Ut;
              if (
                (B &&
                  ((rt = tt),
                  (tt = T ? de() : Y),
                  b && ((Rr = gr), (gr = i && !z ? i.totalProgress() : K))),
                g &&
                  c &&
                  !$e &&
                  !Xn &&
                  zt &&
                  (!K && $ < Y + ((Y - rt) / (Je() - Ki)) * g
                    ? (K = 1e-4)
                    : K === 1 &&
                      Te > Y + ((Y - rt) / (Je() - Ki)) * g &&
                      (K = 0.9999)),
                K !== Se && x.enabled)
              ) {
                if (
                  ((Ge = x.isActive = !!K && K < 1),
                  (me = !!Se && Se < 1),
                  (ue = Ge !== me),
                  (Yt = ue || !!K != !!Se),
                  (x.direction = K > Se ? 1 : -1),
                  (x.progress = K),
                  Yt &&
                    !$e &&
                    ((ae = K && !Se ? 0 : K === 1 ? 1 : Se === 1 ? 2 : 3),
                    z &&
                      ((ne =
                        (!ue && R[ae + 1] !== "none" && R[ae + 1]) || R[ae]),
                      (Ut =
                        i &&
                        (ne === "complete" || ne === "reset" || ne in i)))),
                  P &&
                    (ue || Ut) &&
                    (Ut || h || !i) &&
                    (et(P)
                      ? P(x)
                      : x.getTrailing(P).forEach(function (zr) {
                          return zr.endAnimation();
                        })),
                  z ||
                    (j && !$e && !Xn
                      ? (j._dp._time - j._start !== j._time &&
                          j.render(j._dp._time - j._start),
                        j.resetTo
                          ? j.resetTo("totalProgress", K, i._tTime / i._tDur)
                          : ((j.vars.totalProgress = K),
                            j.invalidate().restart()))
                      : i && i.totalProgress(K, !!($e && (_e || D)))),
                  c)
                ) {
                  if ((D && p && (ze.style[p + C.os2] = Pi), !N))
                    Ft($i(Ot + er * K));
                  else if (Yt) {
                    if (
                      ((yt = !D && K > Se && Te + 1 > Y && Y + 1 >= Zt(O, C)),
                      S)
                    )
                      if (!D && (Ge || yt)) {
                        var Ye = cr(c, !0),
                          Xe = Y - $;
                        il(
                          c,
                          te,
                          Ye.top + (C === Me ? Xe : 0) + Ee,
                          Ye.left + (C === Me ? 0 : Xe) + Ee
                        );
                      } else il(c, ze);
                    Si(Ge || yt ? dr : Er),
                      (tr && K < 1 && Ge) || Ft(Ot + (K === 1 && !yt ? er : 0));
                  }
                }
                b && !Be.tween && !$e && !Xn && Nt.restart(!0),
                  o &&
                    (ue || (y && K && (K < 1 || !to))) &&
                    un(o.targets).forEach(function (zr) {
                      return zr.classList[Ge || y ? "add" : "remove"](
                        o.className
                      );
                    }),
                  s && !z && !D && s(x),
                  Yt && !$e
                    ? (z &&
                        (Ut &&
                          (ne === "complete"
                            ? i.pause().totalProgress(1)
                            : ne === "reset"
                            ? i.restart(!0).pause()
                            : ne === "restart"
                            ? i.restart(!0)
                            : i[ne]()),
                        s && s(x)),
                      (ue || !to) &&
                        (u && ue && xi(x, u),
                        F[ae] && xi(x, F[ae]),
                        y && (K === 1 ? x.kill(!1, 1) : (F[ae] = 0)),
                        ue || ((ae = K === 1 ? 1 : 3), F[ae] && xi(x, F[ae]))),
                      k &&
                        !Ge &&
                        Math.abs(x.getVelocity()) > (Ji(k) ? k : 2500) &&
                        (Qi(x.callbackAnimation),
                        j
                          ? j.progress(1)
                          : Qi(i, ne === "reverse" ? 1 : !K, 1)))
                    : z && s && !$e && s(x);
              }
              if (ri) {
                var qe = T ? (Y / T.duration()) * (T._caScrollDist || 0) : Y;
                cn(qe + (w._isFlipped ? 1 : 0)), ri(qe);
              }
              ni && ni((-Y / T.duration()) * (T._caScrollDist || 0));
            }
          }),
          (x.enable = function (D, B) {
            x.enabled ||
              ((x.enabled = !0),
              Ne(O, "resize", en),
              I || Ne(O, "scroll", yi),
              Q && Ne(a, "refreshInit", Q),
              D !== !1 && ((x.progress = Ae = 0), (tt = rt = ie = de())),
              B !== !1 && x.refresh());
          }),
          (x.getTween = function (D) {
            return D && Be ? Be.tween : j;
          }),
          (x.setPositions = function (D, B, A, Y) {
            if (T) {
              var Fe = T.scrollTrigger,
                K = T.duration(),
                Se = Fe.end - Fe.start;
              (D = Fe.start + (Se * D) / K), (B = Fe.start + (Se * B) / K);
            }
            x.refresh(
              !1,
              !1,
              {
                start: ja(D, A && !!x._startClamp),
                end: ja(B, A && !!x._endClamp),
              },
              Y
            ),
              x.update();
          }),
          (x.adjustPinSpacing = function (D) {
            if (Pe && D) {
              var B = Pe.indexOf(C.d) + 1;
              (Pe[B] = parseFloat(Pe[B]) + D + Ee),
                (Pe[1] = parseFloat(Pe[1]) + D + Ee),
                Si(Pe);
            }
          }),
          (x.disable = function (D, B) {
            if (
              (D !== !1 && x.revert(!0, !0),
              x.enabled &&
                ((x.enabled = x.isActive = !1),
                B || (j && j.pause()),
                (Bt = 0),
                Le && (Le.uncache = 1),
                Q && Ie(a, "refreshInit", Q),
                Nt &&
                  (Nt.pause(), Be.tween && Be.tween.kill() && (Be.tween = 0)),
                !I))
            ) {
              for (var A = W.length; A--; )
                if (W[A].scroller === O && W[A] !== x) return;
              Ie(O, "resize", en), I || Ie(O, "scroll", yi);
            }
          }),
          (x.kill = function (D, B) {
            x.disable(D, B), j && !B && j.kill(), l && delete fo[l];
            var A = W.indexOf(x);
            A >= 0 && W.splice(A, 1),
              A === ut && $n > 0 && ut--,
              (A = 0),
              W.forEach(function (Y) {
                return Y.scroller === x.scroller && (A = 1);
              }),
              A || ft || (x.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                D && i.revert({ kill: !1 }),
                B || i.kill()),
              ct &&
                [ct, xt, w, vt].forEach(function (Y) {
                  return Y.parentNode && Y.parentNode.removeChild(Y);
                }),
              ln === x && (ln = 0),
              c &&
                (Le && (Le.uncache = 1),
                (A = 0),
                W.forEach(function (Y) {
                  return Y.pin === c && A++;
                }),
                A || (Le.spacer = 0)),
              t.onKill && t.onKill(x);
          }),
          W.push(x),
          x.enable(!1, !1),
          rr && rr(x),
          i && i.add && !ge)
        ) {
          var J = x.update;
          (x.update = function () {
            (x.update = J), U.cache++, $ || Te || x.refresh();
          }),
            E.delayedCall(0.01, x.update),
            (ge = 0.01),
            ($ = Te = 0);
        } else x.refresh();
        c && Lf();
      }),
      (a.register = function (t) {
        return (
          bi ||
            ((E = t || _l()), hl() && window.document && a.enable(), (bi = Zi)),
          bi
        );
      }),
      (a.defaults = function (t) {
        if (t) for (var i in t) Gn[i] = t[i];
        return Gn;
      }),
      (a.disable = function (t, i) {
        (Zi = 0),
          W.forEach(function (s) {
            return s[i ? "kill" : "disable"](t);
          }),
          Ie(H, "wheel", yi),
          Ie(re, "scroll", yi),
          clearInterval(Yn),
          Ie(re, "touchcancel", Kt),
          Ie(te, "touchstart", Kt),
          Un(Ie, re, "pointerdown,touchstart,mousedown", Qa),
          Un(Ie, re, "pointerup,touchend,mouseup", Ka),
          ts.kill(),
          Vn(Ie);
        for (var n = 0; n < U.length; n += 3)
          Wn(Ie, U[n], U[n + 1]), Wn(Ie, U[n], U[n + 2]);
      }),
      (a.enable = function () {
        if (
          ((H = window),
          (re = document),
          (kt = re.documentElement),
          (te = re.body),
          E)
        ) {
          if (
            ((un = E.utils.toArray),
            (tn = E.utils.clamp),
            (lo = E.core.context || Kt),
            (eo = E.core.suppressOverwrites || Kt),
            (po = H.history.scrollRestoration || "auto"),
            (co = H.pageYOffset || 0),
            E.core.globals("ScrollTrigger", a),
            te)
          ) {
            (Zi = 1),
              (wi = document.createElement("div")),
              (wi.style.height = "100vh"),
              (wi.style.position = "absolute"),
              wl(),
              Mf(),
              ye.register(E),
              (a.isTouch = ye.isTouch),
              (Dr =
                ye.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (ao = ye.isTouch === 1),
              Ne(H, "wheel", yi),
              (_o = [H, re, kt, te]),
              E.matchMedia
                ? ((a.matchMedia = function (f) {
                    var h = E.matchMedia(),
                      d;
                    for (d in f) h.add(d, f[d]);
                    return h;
                  }),
                  E.addEventListener("matchMediaInit", function () {
                    bl(), bo();
                  }),
                  E.addEventListener("matchMediaRevert", function () {
                    return yl();
                  }),
                  E.addEventListener("matchMedia", function () {
                    Qr(0, 1), ti("matchMedia");
                  }),
                  E.matchMedia().add("(orientation: portrait)", function () {
                    return io(), io;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              io(),
              Ne(re, "scroll", yi);
            var t = te.hasAttribute("style"),
              i = te.style,
              n = i.borderTopStyle,
              s = E.core.Animation.prototype,
              o,
              l;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = cr(te),
                Me.m = Math.round(o.top + Me.sc()) || 0,
                Ze.m = Math.round(o.left + Ze.sc()) || 0,
                n
                  ? (i.borderTopStyle = n)
                  : i.removeProperty("border-top-style"),
                t ||
                  (te.setAttribute("style", ""), te.removeAttribute("style")),
                Yn = setInterval(Ja, 250),
                E.delayedCall(0.5, function () {
                  return (Xn = 0);
                }),
                Ne(re, "touchcancel", Kt),
                Ne(te, "touchstart", Kt),
                Un(Ne, re, "pointerdown,touchstart,mousedown", Qa),
                Un(Ne, re, "pointerup,touchend,mouseup", Ka),
                oo = E.utils.checkPrefix("transform"),
                Jn.push(oo),
                bi = Je(),
                ts = E.delayedCall(0.2, Qr).pause(),
                Ti = [
                  re,
                  "visibilitychange",
                  function () {
                    var f = H.innerWidth,
                      h = H.innerHeight;
                    re.hidden
                      ? ((Ga = f), (qa = h))
                      : (Ga !== f || qa !== h) && en();
                  },
                  re,
                  "DOMContentLoaded",
                  Qr,
                  H,
                  "load",
                  Qr,
                  H,
                  "resize",
                  en,
                ],
                Vn(Ne),
                W.forEach(function (f) {
                  return f.enable(0, 1);
                }),
                l = 0;
              l < U.length;
              l += 3
            )
              Wn(Ie, U[l], U[l + 1]), Wn(Ie, U[l], U[l + 2]);
          } else if (re) {
            var u = function f() {
              a.enable(), re.removeEventListener("DOMContentLoaded", f);
            };
            re.addEventListener("DOMContentLoaded", u);
          }
        }
      }),
      (a.config = function (t) {
        "limitCallbacks" in t && (to = !!t.limitCallbacks);
        var i = t.syncInterval;
        (i && clearInterval(Yn)) || ((Yn = i) && setInterval(Ja, i)),
          "ignoreMobileResize" in t &&
            (ao = a.isTouch === 1 && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (Vn(Ie) || Vn(Ne, t.autoRefreshEvents || "none"),
            (ul = (t.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (a.scrollerProxy = function (t, i) {
        var n = at(t),
          s = U.indexOf(n),
          o = Jr(n);
        ~s && U.splice(s, o ? 6 : 2),
          i && (o ? Vt.unshift(H, i, te, i, kt, i) : Vt.unshift(n, i));
      }),
      (a.clearMatchMedia = function (t) {
        W.forEach(function (i) {
          return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0);
        });
      }),
      (a.isInViewport = function (t, i, n) {
        var s = (Mt(t) ? at(t) : t).getBoundingClientRect(),
          o = s[n ? Kr : Zr] * i || 0;
        return n
          ? s.right - o > 0 && s.left + o < H.innerWidth
          : s.bottom - o > 0 && s.top + o < H.innerHeight;
      }),
      (a.positionInViewport = function (t, i, n) {
        Mt(t) && (t = at(t));
        var s = t.getBoundingClientRect(),
          o = s[n ? Kr : Zr],
          l =
            i == null
              ? o / 2
              : i in is
              ? is[i] * o
              : ~i.indexOf("%")
              ? (parseFloat(i) * o) / 100
              : parseFloat(i) || 0;
        return n ? (s.left + l) / H.innerWidth : (s.top + l) / H.innerHeight;
      }),
      (a.killAll = function (t) {
        if (
          (W.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          t !== !0)
        ) {
          var i = ei.killAll || [];
          (ei = {}),
            i.forEach(function (n) {
              return n();
            });
        }
      }),
      a
    );
  })();
G.version = "3.15.0";
G.saveStyles = function (a) {
  return a
    ? un(a).forEach(function (e) {
        if (e && e.style) {
          var r = Pt.indexOf(e);
          r >= 0 && Pt.splice(r, 5),
            Pt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              E.core.getCache(e),
              lo()
            );
        }
      })
    : Pt;
};
G.revert = function (a, e) {
  return bo(!a, e);
};
G.create = function (a, e) {
  return new G(a, e);
};
G.refresh = function (a) {
  return a ? en(!0) : (bi || G.register()) && Qr(!0);
};
G.update = function (a) {
  return ++U.cache && hr(a === !0 ? 2 : 0);
};
G.clearScrollMemory = Tl;
G.maxScroll = function (a, e) {
  return Zt(a, e ? Ze : Me);
};
G.getScrollFunc = function (a, e) {
  return ur(at(a), e ? Ze : Me);
};
G.getById = function (a) {
  return fo[a];
};
G.getAll = function () {
  return W.filter(function (a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function () {
  return !!zt;
};
G.snapDirectional = yo;
G.addEventListener = function (a, e) {
  var r = ei[a] || (ei[a] = []);
  ~r.indexOf(e) || r.push(e);
};
G.removeEventListener = function (a, e) {
  var r = ei[a],
    t = r && r.indexOf(e);
  t >= 0 && r.splice(t, 1);
};
G.batch = function (a, e) {
  var r = [],
    t = {},
    i = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (u, f) {
      var h = [],
        d = [],
        c = E.delayedCall(i, function () {
          f(h, d), (h = []), (d = []);
        }).pause();
      return function (p) {
        h.length || c.restart(!0),
          h.push(p.trigger),
          d.push(p),
          n <= h.length && c.progress(1);
      };
    },
    o;
  for (o in e)
    t[o] =
      o.substr(0, 2) === "on" && et(e[o]) && o !== "onRefreshInit"
        ? s(o, e[o])
        : e[o];
  return (
    et(n) &&
      ((n = n()),
      Ne(G, "refresh", function () {
        return (n = e.batchMax());
      })),
    un(a).forEach(function (l) {
      var u = {};
      for (o in t) u[o] = t[o];
      (u.trigger = l), r.push(G.create(u));
    }),
    r
  );
};
var sl = function (e, r, t, i) {
    return (
      r > i ? e(i) : r < 0 && e(0),
      t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
    );
  },
  so = function a(e, r) {
    r === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (ye.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === kt && a(te, r);
  },
  Qn = { auto: 1, scroll: 1 },
  Bf = function (e) {
    var r = e.event,
      t = e.target,
      i = e.axis,
      n = (r.changedTouches ? r.changedTouches[0] : r).target,
      s = n._gsap || E.core.getCache(n),
      o = Je(),
      l;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== te &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(Qn[(l = Lt(n)).overflowY] || Qn[l.overflowX]));

      )
        n = n.parentNode;
      (s._isScroll =
        n &&
        n !== t &&
        !Jr(n) &&
        (Qn[(l = Lt(n)).overflowY] || Qn[l.overflowX])),
        (s._isScrollT = o);
    }
    (s._isScroll || i === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Cl = function (e, r, t, i) {
    return ye.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (i = i && Bf),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return t && Ne(re, ye.eventTypes[0], al, !1, !0);
      },
      onDisable: function () {
        return Ie(re, ye.eventTypes[0], al, !0);
      },
    });
  },
  Yf = /(input|label|select|textarea)/i,
  ol,
  al = function (e) {
    var r = Yf.test(e.target.tagName);
    (r || ol) && ((e._gsapAllow = !0), (ol = r));
  },
  Xf = function (e) {
    jr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var r = e,
      t = r.normalizeScrollX,
      i = r.momentum,
      n = r.allowNestedScroll,
      s = r.onRelease,
      o,
      l,
      u = at(e.target) || kt,
      f = E.core.globals().ScrollSmoother,
      h = f && f.get(),
      d =
        Dr &&
        ((e.content && at(e.content)) ||
          (h && e.content !== !1 && !h.smooth() && h.content())),
      c = ur(u, Me),
      p = ur(u, Ze),
      _ = 1,
      g =
        (ye.isTouch && H.visualViewport
          ? H.visualViewport.scale * H.visualViewport.width
          : H.outerWidth) / H.innerWidth,
      v = 0,
      m = et(i)
        ? function () {
            return i(o);
          }
        : function () {
            return i || 2.8;
          },
      y,
      b,
      S = Cl(u, e.type, !0, n),
      M = function () {
        return (b = !1);
      },
      T = Kt,
      k = Kt,
      P = function () {
        (l = Zt(u, Me)),
          (k = tn(Dr ? 1 : 0, l)),
          t && (T = tn(0, Zt(u, Ze))),
          (y = $r);
      },
      C = function () {
        (d._gsap.y = $i(parseFloat(d._gsap.y) + c.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (c.offset = c.cacheID = 0);
      },
      z = function () {
        if (b) {
          requestAnimationFrame(M);
          var q = $i(o.deltaY / 2),
            ee = k(c.v - q);
          if (d && ee !== c.v + c.offset) {
            c.offset = ee - c.v;
            var x = $i((parseFloat(d && d._gsap.y) || 0) - c.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              x +
              ", 0, 1)"),
              (d._gsap.y = x + "px"),
              (c.cacheID = U.cache),
              hr();
          }
          return !0;
        }
        c.offset && C(), (b = !0);
      },
      O,
      V,
      I,
      N,
      F = function () {
        P(),
          O.isActive() &&
            O.vars.scrollY > l &&
            (c() > l ? O.progress(1) && c(l) : O.resetTo("scrollY", l));
      };
    return (
      d && E.set(d, { y: "+=0" }),
      (e.ignoreCheck = function (R) {
        return (
          (Dr && R.type === "touchmove" && z(R)) ||
          (_ > 1.05 && R.type !== "touchstart") ||
          o.isGesturing ||
          (R.touches && R.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        b = !1;
        var R = _;
        (_ = $i(((H.visualViewport && H.visualViewport.scale) || 1) / g)),
          O.pause(),
          R !== _ && so(u, _ > 1.01 ? !0 : t ? !1 : "x"),
          (V = p()),
          (I = c()),
          P(),
          (y = $r);
      }),
      (e.onRelease = e.onGestureStart =
        function (R, q) {
          if ((c.offset && C(), !q)) N.restart(!0);
          else {
            U.cache++;
            var ee = m(),
              x,
              Q;
            t &&
              ((x = p()),
              (Q = x + (ee * 0.05 * -R.velocityX) / 0.227),
              (ee *= sl(p, x, Q, Zt(u, Ze))),
              (O.vars.scrollX = T(Q))),
              (x = c()),
              (Q = x + (ee * 0.05 * -R.velocityY) / 0.227),
              (ee *= sl(c, x, Q, Zt(u, Me))),
              (O.vars.scrollY = k(Q)),
              O.invalidate().duration(ee).play(0.01),
              ((Dr && O.vars.scrollY >= l) || x >= l - 1) &&
                E.to({}, { onUpdate: F, duration: ee });
          }
          s && s(R);
        }),
      (e.onWheel = function () {
        O._ts && O.pause(), Je() - v > 1e3 && ((y = 0), (v = Je()));
      }),
      (e.onChange = function (R, q, ee, x, Q) {
        if (
          ($r !== y && P(),
          q && t && p(T(x[2] === q ? V + (R.startX - R.x) : p() + q - x[1])),
          ee)
        ) {
          c.offset && C();
          var Re = Q[2] === ee,
            be = Re ? I + R.startY - R.y : c() + ee - Q[1],
            ie = k(be);
          Re && be !== ie && (I += ie - be), c(ie);
        }
        (ee || q) && hr();
      }),
      (e.onEnable = function () {
        so(u, t ? !1 : "x"),
          G.addEventListener("refresh", F),
          Ne(H, "resize", F),
          c.smooth &&
            ((c.target.style.scrollBehavior = "auto"),
            (c.smooth = p.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = function () {
        so(u, !0),
          Ie(H, "resize", F),
          G.removeEventListener("refresh", F),
          S.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new ye(e)),
      (o.iOS = Dr),
      Dr && !c() && c(1),
      Dr && E.ticker.add(Kt),
      (N = o._dc),
      (O = E.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Sl(c, c(), function () {
            return O.pause();
          }),
        },
        onUpdate: hr,
        onComplete: N.vars.onComplete,
      })),
      o
    );
  };
G.sort = function (a) {
  if (et(a)) return W.sort(a);
  var e = H.pageYOffset || 0;
  return (
    G.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? e + r.trigger.getBoundingClientRect().top
        : r.start + H.innerHeight);
    }),
    W.sort(
      a ||
        function (r, t) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
G.observe = function (a) {
  return new ye(a);
};
G.normalizeScroll = function (a) {
  if (typeof a > "u") return lt;
  if (a === !0 && lt) return lt.enable();
  if (a === !1) {
    lt && lt.kill(), (lt = a);
    return;
  }
  var e = a instanceof ye ? a : Xf(a);
  return lt && lt.target === e.target && lt.kill(), Jr(e.target) && (lt = e), e;
};
G.core = {
  _getVelocityProp: Bn,
  _inputObserver: Cl,
  _scrollers: U,
  _proxies: Vt,
  bridge: {
    ss: function () {
      zt || ti("scrollStart"), (zt = Je());
    },
    ref: function () {
      return $e;
    },
  },
};
_l() && E.registerPlugin(G);
typeof window < "u" &&
  ((window.gsap = En),
  (window.CustomEase = qr),
  (window.ScrollTrigger = G),
  En.registerPlugin(qr, G));
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
