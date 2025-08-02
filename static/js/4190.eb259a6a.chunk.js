"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [4190],
  {
    5330: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return h;
        },
      });
      var r = n(37762),
        i = n(72791),
        o = n(14077);
      var a = n(86566),
        s = n(44414),
        u = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        d = function (t, e, n) {
          return e in t
            ? u(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        v = { position: "left", spacing: "md" },
        h = (0, i.forwardRef)(function (t, e) {
          var n = (0, o.N4)("Group", v, t),
            u = n.className,
            h = n.position,
            p = n.align,
            m = n.children,
            y = n.noWrap,
            g = n.grow,
            x = n.spacing,
            b = n.unstyled,
            w = n.variant,
            P = (function (t, e) {
              var n = {};
              for (var i in t)
                c.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
              if (null != t && l) {
                var o,
                  a = (0, r.Z)(l(t));
                try {
                  for (a.s(); !(o = a.n()).done; )
                    (i = o.value),
                      e.indexOf(i) < 0 && f.call(t, i) && (n[i] = t[i]);
                } catch (s) {
                  a.e(s);
                } finally {
                  a.f();
                }
              }
              return n;
            })(n, [
              "className",
              "position",
              "align",
              "children",
              "noWrap",
              "grow",
              "spacing",
              "unstyled",
              "variant",
            ]),
            k = (function (t) {
              return i.Children.toArray(t).filter(Boolean);
            })(m),
            E = (0, a.Z)(
              {
                align: p,
                grow: g,
                noWrap: y,
                spacing: x,
                position: h,
                count: k.length,
              },
              { unstyled: b, name: "Group", variant: w }
            ),
            C = E.classes,
            S = E.cx;
          return i.createElement(
            s.x,
            (function (t, e) {
              for (var n in e || (e = {})) c.call(e, n) && d(t, n, e[n]);
              if (l) {
                var i,
                  o = (0, r.Z)(l(e));
                try {
                  for (o.s(); !(i = o.n()).done; )
                    (n = i.value), f.call(e, n) && d(t, n, e[n]);
                } catch (a) {
                  o.e(a);
                } finally {
                  o.f();
                }
              }
              return t;
            })({ className: S(C.root, u), ref: e }, P),
            k
          );
        });
      h.displayName = "@mantine/core/Group";
    },
    86566: function (t, e, n) {
      n.d(e, {
        H: function () {
          return a;
        },
      });
      var r = n(97581),
        i = n(47653),
        o = n(25431),
        a = {
          left: "flex-start",
          center: "center",
          right: "flex-end",
          apart: "space-between",
        },
        s = (0, r.k)(function (t, e) {
          var n = e.spacing,
            r = e.position,
            s = e.noWrap,
            u = e.grow,
            l = e.align,
            c = e.count;
          return {
            root: {
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: l || "center",
              flexWrap: s ? "nowrap" : "wrap",
              justifyContent: a[r],
              gap: (0, i.a)({ size: n, sizes: t.spacing }),
              "& > *": {
                boxSizing: "border-box",
                maxWidth: u
                  ? "calc("
                      .concat(100 / c, "% - (")
                      .concat(
                        (0, o.h)((0, i.a)({ size: n, sizes: t.spacing })),
                        " - "
                      )
                      .concat((0, i.a)({ size: n, sizes: t.spacing }), " / ")
                      .concat(c, "))")
                  : void 0,
                flexGrow: u ? 1 : 0,
              },
            },
          };
        });
      e.Z = s;
    },
    94969: function (t, e, n) {
      n.d(e, {
        t: function () {
          return Tt;
        },
      });
      var r = n(37762),
        i = n(72791),
        o = n(14077),
        a = n(47653),
        s = n(93433),
        u = n(29439),
        l = n(44150);
      function c(t, e) {
        var n = e - t + 1;
        return Array.from({ length: n }, function (e, n) {
          return n + t;
        });
      }
      var f = "dots";
      function d(t) {
        var e = t.total,
          n = t.siblings,
          r = void 0 === n ? 1 : n,
          o = t.boundaries,
          a = void 0 === o ? 1 : o,
          d = t.page,
          v = t.initialPage,
          h = void 0 === v ? 1 : v,
          p = t.onChange,
          m = Math.max(Math.trunc(e), 0),
          y = (0, l.C)({
            value: d,
            onChange: p,
            defaultValue: h,
            finalValue: h,
          }),
          g = (0, u.Z)(y, 2),
          x = g[0],
          b = g[1],
          w = function (t) {
            b(t <= 0 ? 1 : t > m ? m : t);
          };
        return {
          range: (0, i.useMemo)(
            function () {
              if (2 * r + 3 + 2 * a >= m) return c(1, m);
              var t = Math.max(x - r, a),
                e = Math.min(x + r, m - a),
                n = t > a + 2,
                i = e < m - (a + 1);
              if (!n && i) {
                var o = 2 * r + a + 2;
                return [].concat(
                  (0, s.Z)(c(1, o)),
                  [f],
                  (0, s.Z)(c(m - (a - 1), m))
                );
              }
              if (n && !i) {
                var u = a + 1 + 2 * r;
                return [].concat((0, s.Z)(c(1, a)), [f], (0, s.Z)(c(m - u, m)));
              }
              return [].concat(
                (0, s.Z)(c(1, a)),
                [f],
                (0, s.Z)(c(t, e)),
                [f],
                (0, s.Z)(c(m - a + 1, m))
              );
            },
            [m, r, x]
          ),
          active: x,
          setPage: w,
          next: function () {
            return w(x + 1);
          },
          previous: function () {
            return w(x - 1);
          },
          first: function () {
            return w(1);
          },
          last: function () {
            return w(m);
          },
        };
      }
      function v(t, e) {
        return function (n) {
          null == t || t(n), null == e || e(n);
        };
      }
      var h = (0, n(97195).R)(
          "Pagination.Root component was not found in tree"
        ),
        p = (0, u.Z)(h, 2),
        m = p[0],
        y = p[1],
        g = { siblings: 1, boundaries: 1 };
      function x(t) {
        var e = (0, o.N4)("PaginationRoot", g, t),
          n = e.total,
          r = e.value,
          a = e.defaultValue,
          s = e.onChange,
          u = e.disabled,
          l = e.children,
          c = e.siblings,
          f = e.boundaries,
          h = e.color,
          p = e.radius,
          y = e.onNextPage,
          x = e.onPreviousPage,
          b = e.onFirstPage,
          w = e.onLastPage,
          P = e.getItemProps,
          k = e.classNames,
          E = e.styles,
          C = e.unstyled,
          S = e.variant,
          T = e.size,
          A = d({
            page: r,
            initialPage: a,
            onChange: s,
            total: n,
            siblings: c,
            boundaries: f,
          }),
          Z = A.range,
          M = A.setPage,
          V = A.next,
          D = A.previous,
          R = A.active,
          L = A.first,
          O = A.last,
          j = v(y, V),
          B = v(x, D),
          F = v(b, L),
          I = v(w, O);
        return i.createElement(
          m,
          {
            value: {
              total: n,
              range: Z,
              active: R,
              disabled: u,
              color: h,
              radius: p,
              getItemProps: P,
              onChange: M,
              onNext: j,
              onPrevious: B,
              onFirst: F,
              onLast: I,
              stylesApi: {
                name: "Pagination",
                classNames: k,
                styles: E,
                unstyled: C,
                variant: S,
                size: T,
              },
            },
          },
          l
        );
      }
      var b = n(25431),
        w = n(97581),
        P = {
          xs: (0, b.h)(22),
          sm: (0, b.h)(26),
          md: (0, b.h)(32),
          lg: (0, b.h)(38),
          xl: (0, b.h)(44),
        },
        k = (0, w.k)(function (t, e, n) {
          var r = e.color,
            i = e.radius,
            o = e.withPadding,
            s = n.size,
            u = t.fn.variant({ color: r, variant: "filled" });
          return {
            control: {
              cursor: "pointer",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: ""
                .concat((0, b.h)(1), " solid ")
                .concat(
                  "dark" === t.colorScheme ? t.colors.dark[4] : t.colors.gray[4]
                ),
              color: "dark" === t.colorScheme ? t.colors.dark[0] : t.black,
              height: (0, a.a)({ size: s, sizes: P }),
              minWidth: (0, a.a)({ size: s, sizes: P }),
              padding: o
                ? "0 calc(".concat(
                    (0, a.a)({ size: s, sizes: t.spacing }),
                    " / 2)"
                  )
                : void 0,
              fontSize: (0, a.a)({ size: s, sizes: t.fontSizes }),
              borderRadius: t.fn.radius(i),
              lineHeight: 1,
              backgroundColor:
                "dark" === t.colorScheme ? t.colors.dark[6] : t.white,
              "&:not([data-disabled])": t.fn.hover({
                backgroundColor:
                  "dark" === t.colorScheme
                    ? t.colors.dark[5]
                    : t.colors.gray[0],
              }),
              "&:active:not([data-disabled])": t.activeStyles,
              "&[data-disabled]": { opacity: 0.4, cursor: "not-allowed" },
              "&[data-active]": {
                borderColor: "transparent",
                color: u.color,
                backgroundColor: u.background,
                "&:not([data-disabled])": t.fn.hover({
                  backgroundColor: u.hover,
                }),
              },
            },
          };
        }),
        E = n(36005),
        C = Object.defineProperty,
        S = Object.defineProperties,
        T = Object.getOwnPropertyDescriptors,
        A = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        V = function (t, e, n) {
          return e in t
            ? C(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        D = { withPadding: !0 },
        R = (0, i.forwardRef)(function (t, e) {
          var n,
            a,
            s = (0, o.N4)("PaginationControl", D, t),
            u = s.active,
            l = s.className,
            c = s.disabled,
            f = s.withPadding,
            d = (function (t, e) {
              var n = {};
              for (var i in t)
                Z.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
              if (null != t && A) {
                var o,
                  a = (0, r.Z)(A(t));
                try {
                  for (a.s(); !(o = a.n()).done; )
                    (i = o.value),
                      e.indexOf(i) < 0 && M.call(t, i) && (n[i] = t[i]);
                } catch (s) {
                  a.e(s);
                } finally {
                  a.f();
                }
              }
              return n;
            })(s, ["active", "className", "disabled", "withPadding"]),
            v = y(),
            h = k(
              { color: v.color, radius: v.radius, withPadding: f },
              v.stylesApi
            ),
            p = h.classes,
            m = h.cx;
          return i.createElement(
            E.k,
            ((n = (function (t, e) {
              for (var n in e || (e = {})) Z.call(e, n) && V(t, n, e[n]);
              if (A) {
                var i,
                  o = (0, r.Z)(A(e));
                try {
                  for (o.s(); !(i = o.n()).done; )
                    (n = i.value), M.call(e, n) && V(t, n, e[n]);
                } catch (a) {
                  o.e(a);
                } finally {
                  o.f();
                }
              }
              return t;
            })({}, d)),
            (a = {
              disabled: c,
              "data-active": u || void 0,
              "data-disabled": c || void 0,
              ref: e,
              className: m(p.control, l),
            }),
            S(n, T(a)))
          );
        });
      R.displayName = "@mantine/core/PaginationControl";
      var L = Object.defineProperty,
        O = Object.defineProperties,
        j = Object.getOwnPropertyDescriptors,
        B = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        I = Object.prototype.propertyIsEnumerable,
        N = function (t, e, n) {
          return e in t
            ? L(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        z = function (t, e) {
          for (var n in e || (e = {})) F.call(e, n) && N(t, n, e[n]);
          if (B) {
            var i,
              o = (0, r.Z)(B(e));
            try {
              for (o.s(); !(i = o.n()).done; ) {
                n = i.value;
                I.call(e, n) && N(t, n, e[n]);
              }
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
          }
          return t;
        },
        U = function (t, e) {
          return O(t, j(e));
        };
      function W(t) {
        return "calc(".concat((0, a.a)({ size: t, sizes: P }), " / 2)");
      }
      function H(t) {
        var e = t,
          n = e.size,
          o = (e.children, e.path),
          a = (function (t, e) {
            var n = {};
            for (var i in t) F.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
            if (null != t && B) {
              var o,
                a = (0, r.Z)(B(t));
              try {
                for (a.s(); !(o = a.n()).done; )
                  (i = o.value),
                    e.indexOf(i) < 0 && I.call(t, i) && (n[i] = t[i]);
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
            }
            return n;
          })(e, ["size", "children", "path"]);
        return i.createElement(
          "svg",
          z(
            {
              width: n,
              height: n,
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            a
          ),
          i.createElement("path", { d: o, fill: "currentColor" })
        );
      }
      var Y = (0, w.k)(function (t, e, n) {
          var r = n.size;
          return {
            dots: {
              height: (0, a.a)({ size: r, sizes: P }),
              minWidth: (0, a.a)({ size: r, sizes: P }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            },
          };
        }),
        X = n(44414),
        G = Object.defineProperty,
        q = Object.getOwnPropertySymbols,
        K = Object.prototype.hasOwnProperty,
        $ = Object.prototype.propertyIsEnumerable,
        _ = function (t, e, n) {
          return e in t
            ? G(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        J = {
          icon: function (t) {
            return i.createElement(
              H,
              U(z({}, t), {
                path: "M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z",
              })
            );
          },
        },
        Q = (0, i.forwardRef)(function (t, e) {
          var n = (0, o.N4)("PaginationDots", J, t),
            a = n.className,
            s = n.icon,
            u = (function (t, e) {
              var n = {};
              for (var i in t)
                K.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
              if (null != t && q) {
                var o,
                  a = (0, r.Z)(q(t));
                try {
                  for (a.s(); !(o = a.n()).done; )
                    (i = o.value),
                      e.indexOf(i) < 0 && $.call(t, i) && (n[i] = t[i]);
                } catch (s) {
                  a.e(s);
                } finally {
                  a.f();
                }
              }
              return n;
            })(n, ["className", "icon"]),
            l = y(),
            c = Y(null, l.stylesApi),
            f = c.classes,
            d = c.cx;
          return i.createElement(
            X.x,
            (function (t, e) {
              for (var n in e || (e = {})) K.call(e, n) && _(t, n, e[n]);
              if (q) {
                var i,
                  o = (0, r.Z)(q(e));
                try {
                  for (o.s(); !(i = o.n()).done; )
                    (n = i.value), $.call(e, n) && _(t, n, e[n]);
                } catch (a) {
                  o.e(a);
                } finally {
                  o.f();
                }
              }
              return t;
            })({ ref: e, className: d(f.dots, a) }, u),
            i.createElement(s, { size: W(l.stylesApi.size) })
          );
        });
      Q.displayName = "@mantine/core/PaginationDots";
      var tt = Object.defineProperty,
        et = Object.getOwnPropertySymbols,
        nt = Object.prototype.hasOwnProperty,
        rt = Object.prototype.propertyIsEnumerable,
        it = function (t, e, n) {
          return e in t
            ? tt(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        ot = function (t, e) {
          for (var n in e || (e = {})) nt.call(e, n) && it(t, n, e[n]);
          if (et) {
            var i,
              o = (0, r.Z)(et(e));
            try {
              for (o.s(); !(i = o.n()).done; ) {
                n = i.value;
                rt.call(e, n) && it(t, n, e[n]);
              }
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
          }
          return t;
        };
      function at(t) {
        var e = t.dotsIcon,
          n = y(),
          r = n.range.map(function (t, r) {
            var o;
            return "dots" === t
              ? i.createElement(Q, { icon: e, key: r })
              : i.createElement(
                  R,
                  ot(
                    {
                      key: r,
                      active: t === n.active,
                      "aria-current": t === n.active ? "page" : void 0,
                      onClick: function () {
                        return n.onChange(t);
                      },
                      disabled: n.disabled,
                    },
                    null == (o = n.getItemProps) ? void 0 : o.call(n, t)
                  ),
                  t
                );
          });
        return i.createElement(i.Fragment, null, r);
      }
      at.displayName = "@mantine/core/PaginationItems";
      var st = n(69249),
        ut = Object.defineProperty,
        lt = Object.getOwnPropertySymbols,
        ct = Object.prototype.hasOwnProperty,
        ft = Object.prototype.propertyIsEnumerable,
        dt = function (t, e, n) {
          return e in t
            ? ut(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        };
      function vt(t) {
        var e = t.icon,
          n = t.name,
          a = t.action,
          s = t.type,
          u = { icon: e },
          l = (0, i.forwardRef)(function (t, e) {
            var l = (0, o.N4)(n, u, t),
              c = l.icon,
              f = (function (t, e) {
                var n = {};
                for (var i in t)
                  ct.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                if (null != t && lt) {
                  var o,
                    a = (0, r.Z)(lt(t));
                  try {
                    for (a.s(); !(o = a.n()).done; )
                      (i = o.value),
                        e.indexOf(i) < 0 && ft.call(t, i) && (n[i] = t[i]);
                  } catch (s) {
                    a.e(s);
                  } finally {
                    a.f();
                  }
                }
                return n;
              })(l, ["icon"]),
              d = y(),
              v = "next" === s ? d.active === d.total : 1 === d.active;
            return i.createElement(
              R,
              (function (t, e) {
                for (var n in e || (e = {})) ct.call(e, n) && dt(t, n, e[n]);
                if (lt) {
                  var i,
                    o = (0, r.Z)(lt(e));
                  try {
                    for (o.s(); !(i = o.n()).done; )
                      (n = i.value), ft.call(e, n) && dt(t, n, e[n]);
                  } catch (a) {
                    o.e(a);
                  } finally {
                    o.f();
                  }
                }
                return t;
              })(
                {
                  disabled: d.disabled || v,
                  ref: e,
                  onClick: d[a],
                  withPadding: !1,
                },
                f
              ),
              i.createElement(c, { size: W(d.stylesApi.size) })
            );
          });
        return (l.displayName = "@mantine/core/".concat(n)), (0, st.F)(l);
      }
      var ht = vt({
          icon: function (t) {
            return i.createElement(
              H,
              U(z({}, t), {
                path: "M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z",
              })
            );
          },
          name: "PaginationNext",
          action: "onNext",
          type: "next",
        }),
        pt = vt({
          icon: function (t) {
            return i.createElement(
              H,
              U(z({}, t), {
                path: "M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z",
              })
            );
          },
          name: "PaginationPrevious",
          action: "onPrevious",
          type: "previous",
        }),
        mt = vt({
          icon: function (t) {
            return i.createElement(
              H,
              U(z({}, t), {
                path: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
              })
            );
          },
          name: "PaginationFirst",
          action: "onFirst",
          type: "previous",
        }),
        yt = vt({
          icon: function (t) {
            return i.createElement(
              H,
              U(z({}, t), {
                path: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
              })
            );
          },
          name: "PaginationLast",
          action: "onLast",
          type: "next",
        }),
        gt = n(5330),
        xt = Object.defineProperty,
        bt = Object.getOwnPropertySymbols,
        wt = Object.prototype.hasOwnProperty,
        Pt = Object.prototype.propertyIsEnumerable,
        kt = function (t, e, n) {
          return e in t
            ? xt(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n);
        },
        Et = function (t, e) {
          for (var n in e || (e = {})) wt.call(e, n) && kt(t, n, e[n]);
          if (bt) {
            var i,
              o = (0, r.Z)(bt(e));
            try {
              for (o.s(); !(i = o.n()).done; ) {
                n = i.value;
                Pt.call(e, n) && kt(t, n, e[n]);
              }
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
          }
          return t;
        },
        Ct = function (t, e) {
          var n = {};
          for (var i in t) wt.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
          if (null != t && bt) {
            var o,
              a = (0, r.Z)(bt(t));
            try {
              for (a.s(); !(o = a.n()).done; ) {
                i = o.value;
                e.indexOf(i) < 0 && Pt.call(t, i) && (n[i] = t[i]);
              }
            } catch (s) {
              a.e(s);
            } finally {
              a.f();
            }
          }
          return n;
        },
        St = { withControls: !0, siblings: 1, boundaries: 1 };
      function Tt(t) {
        var e = (0, o.N4)("Pagination", St, t),
          n = e.withEdges,
          r = e.withControls,
          s = e.classNames,
          u = e.styles,
          l = e.unstyled,
          c = e.variant,
          f = e.size,
          d = e.total,
          v = e.value,
          h = e.defaultValue,
          p = e.onChange,
          m = e.disabled,
          y = e.siblings,
          g = e.boundaries,
          b = e.color,
          w = e.radius,
          P = e.onNextPage,
          k = e.onPreviousPage,
          E = e.onFirstPage,
          C = e.onLastPage,
          S = e.getItemProps,
          T = e.getControlProps,
          A = e.spacing,
          Z = e.nextIcon,
          M = e.previousIcon,
          V = e.lastIcon,
          D = e.firstIcon,
          R = e.dotsIcon,
          L = Ct(e, [
            "withEdges",
            "withControls",
            "classNames",
            "styles",
            "unstyled",
            "variant",
            "size",
            "total",
            "value",
            "defaultValue",
            "onChange",
            "disabled",
            "siblings",
            "boundaries",
            "color",
            "radius",
            "onNextPage",
            "onPreviousPage",
            "onFirstPage",
            "onLastPage",
            "getItemProps",
            "getControlProps",
            "spacing",
            "nextIcon",
            "previousIcon",
            "lastIcon",
            "firstIcon",
            "dotsIcon",
          ]),
          O = (0, o.rZ)();
        return d <= 0
          ? null
          : i.createElement(
              x,
              {
                classNames: s,
                styles: u,
                unstyled: l,
                variant: c,
                size: f,
                total: d,
                value: v,
                defaultValue: h,
                onChange: p,
                disabled: m,
                siblings: y,
                boundaries: g,
                color: b,
                radius: w,
                onNextPage: P,
                onPreviousPage: k,
                onFirstPage: E,
                onLastPage: C,
                getItemProps: S,
              },
              i.createElement(
                gt.Z,
                Et(
                  {
                    spacing:
                      A ||
                      "calc(".concat(
                        (0, a.a)({ size: f, sizes: O.spacing }),
                        " / 2)"
                      ),
                  },
                  L
                ),
                n &&
                  i.createElement(
                    mt,
                    Et({ icon: D }, null == T ? void 0 : T("first"))
                  ),
                r &&
                  i.createElement(
                    pt,
                    Et({ icon: M }, null == T ? void 0 : T("previous"))
                  ),
                i.createElement(at, { dotsIcon: R }),
                r &&
                  i.createElement(
                    ht,
                    Et({ icon: Z }, null == T ? void 0 : T("next"))
                  ),
                n &&
                  i.createElement(
                    yt,
                    Et({ icon: V }, null == T ? void 0 : T("last"))
                  )
              )
            );
      }
      (Tt.displayName = "@mantine/core/Pagination"),
        (Tt.Root = x),
        (Tt.Items = at),
        (Tt.Control = R),
        (Tt.Dots = Q),
        (Tt.Next = ht),
        (Tt.Previous = pt),
        (Tt.Last = yt),
        (Tt.First = mt);
    },
    47976: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return Du;
        },
      });
      var r = n(72791),
        i = n(54164),
        o = n(29439),
        a = n(15671),
        s = n(43144);
      function u(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function l(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var c = (function () {
        function t() {
          (0, a.Z)(this, t), (this.subscriptions = []);
        }
        return (
          (0, s.Z)(t, [
            {
              key: "add",
              value: function (t) {
                var e = this;
                return (
                  u(this.subscriptions, t),
                  function () {
                    return l(e.subscriptions, t);
                  }
                );
              },
            },
            {
              key: "notify",
              value: function (t, e, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](t, e, n);
                  else
                    for (var i = 0; i < r; i++) {
                      var o = this.subscriptions[i];
                      o && o(t, e, n);
                    }
              },
            },
            {
              key: "getSize",
              value: function () {
                return this.subscriptions.length;
              },
            },
            {
              key: "clear",
              value: function () {
                this.subscriptions.length = 0;
              },
            },
          ]),
          t
        );
      })();
      function f(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      var d = function (t) {
          return t;
        },
        v = (function () {
          function t() {
            (0, a.Z)(this, t), (this.order = []), (this.scheduled = new Set());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "add",
                value: function (t) {
                  if (!this.scheduled.has(t))
                    return this.scheduled.add(t), this.order.push(t), !0;
                },
              },
              {
                key: "remove",
                value: function (t) {
                  var e = this.order.indexOf(t);
                  -1 !== e &&
                    (this.order.splice(e, 1), this.scheduled.delete(t));
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.order.length = 0), this.scheduled.clear();
                },
              },
            ]),
            t
          );
        })();
      var h = [
        "prepare",
        "read",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var p = (function (t, e) {
          var n = !1,
            r = !0,
            i = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = h.reduce(function (t, e) {
              return (
                (t[e] = (function (t) {
                  var e = new v(),
                    n = new v(),
                    r = 0,
                    i = !1,
                    o = !1,
                    a = new WeakSet(),
                    s = {
                      schedule: function (t) {
                        var o =
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2] &&
                            i,
                          s = o ? e : n;
                        return (
                          arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1] &&
                            a.add(t),
                          s.add(t) && o && i && (r = e.order.length),
                          t
                        );
                      },
                      cancel: function (t) {
                        n.remove(t), a.delete(t);
                      },
                      process: function (u) {
                        if (i) o = !0;
                        else {
                          i = !0;
                          var l = [n, e];
                          if (
                            ((e = l[0]),
                            (n = l[1]).clear(),
                            (r = e.order.length))
                          )
                            for (var c = 0; c < r; c++) {
                              var f = e.order[c];
                              f(u), a.has(f) && (s.schedule(f), t());
                            }
                          (i = !1), o && ((o = !1), s.process(u));
                        }
                      },
                    };
                  return s;
                })(function () {
                  return (n = !0);
                })),
                t
              );
            }, {}),
            a = function (t) {
              return o[t].process(i);
            },
            s = function o() {
              var s = performance.now();
              (n = !1),
                (i.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(s - i.timestamp, 40), 1)),
                (i.timestamp = s),
                (i.isProcessing = !0),
                h.forEach(a),
                (i.isProcessing = !1),
                n && e && ((r = !1), t(o));
            },
            u = h.reduce(function (e, a) {
              var u = o[a];
              return (
                (e[a] = function (e) {
                  var o =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    a =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  return (
                    n || ((n = !0), (r = !0), i.isProcessing || t(s)),
                    u.schedule(e, o, a)
                  );
                }),
                e
              );
            }, {});
          return {
            schedule: u,
            cancel: function (t) {
              return h.forEach(function (e) {
                return o[e].cancel(t);
              });
            },
            state: i,
            steps: o,
          };
        })(
          "undefined" !== typeof requestAnimationFrame
            ? requestAnimationFrame
            : d,
          !0
        ),
        m = p.schedule,
        y = p.cancel,
        g = p.state,
        x = p.steps,
        b = { current: void 0 },
        w = (function () {
          function t(e) {
            var n,
              r = this,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            (0, a.Z)(this, t),
              (this.version = "10.16.12"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (t) {
                var e =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (r.prev = r.current), (r.current = t);
                var n = g.delta,
                  i = g.timestamp;
                r.lastUpdated !== i &&
                  ((r.timeDelta = n),
                  (r.lastUpdated = i),
                  m.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current &&
                    r.events.change &&
                    r.events.change.notify(r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()),
                  e &&
                    r.events.renderRequest &&
                    r.events.renderRequest.notify(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return m.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.events.velocityChange &&
                    r.events.velocityChange.notify(r.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n)))),
              (this.owner = i.owner);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "onChange",
                value: function (t) {
                  return this.on("change", t);
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  var n = this;
                  this.events[t] || (this.events[t] = new c());
                  var r = this.events[t].add(e);
                  return "change" === t
                    ? function () {
                        r(),
                          m.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var t in this.events) this.events[t].clear();
                },
              },
              {
                key: "attach",
                value: function (t, e) {
                  (this.passiveEffect = t), (this.stopPassiveEffect = e);
                },
              },
              {
                key: "set",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  e && this.passiveEffect
                    ? this.passiveEffect(t, this.updateAndNotify)
                    : this.updateAndNotify(t, e);
                },
              },
              {
                key: "setWithVelocity",
                value: function (t, e, n) {
                  this.set(e), (this.prev = t), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (t) {
                  this.updateAndNotify(t),
                    (this.prev = t),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return b.current && b.current.push(this), this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? f(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (t) {
                  var e = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (e.hasAnimated = !0),
                        (e.animation = t(n)),
                        e.events.animationStart &&
                          e.events.animationStart.notify();
                    }).then(function () {
                      e.events.animationComplete &&
                        e.events.animationComplete.notify(),
                        e.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  delete this.animation;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            t
          );
        })();
      function P(t, e) {
        return new w(t, e);
      }
      var k = (0, r.createContext)({
        transformPagePoint: function (t) {
          return t;
        },
        isStatic: !1,
        reducedMotion: "never",
      });
      function E(t) {
        var e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      function C(t) {
        var e = E(function () {
          return P(t);
        });
        if ((0, r.useContext)(k).isStatic) {
          var n = (0, r.useState)(t),
            i = (0, o.Z)(n, 2)[1];
          (0, r.useEffect)(function () {
            return e.on("change", i);
          }, []);
        }
        return e;
      }
      var S = "undefined" !== typeof document,
        T = { current: null },
        A = { current: !1 };
      function Z() {
        if (((A.current = !0), S))
          if (window.matchMedia) {
            var t = window.matchMedia("(prefers-reduced-motion)"),
              e = function () {
                return (T.current = t.matches);
              };
            t.addListener(e), e();
          } else T.current = !1;
      }
      function M() {
        !A.current && Z();
        var t = (0, r.useState)(T.current);
        return (0, o.Z)(t, 1)[0];
      }
      var V = n(1413),
        D = n(93433),
        R = d,
        L = d;
      var O = function (t) {
          return Math.round(1e5 * t) / 1e5;
        },
        j = /(-)?([\d]*\.?[\d])+/g,
        B =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        F =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function I(t) {
        return "string" === typeof t;
      }
      var N = function (t, e, n) {
          return Math.min(Math.max(n, t), e);
        },
        z = {
          test: function (t) {
            return "number" === typeof t;
          },
          parse: parseFloat,
          transform: function (t) {
            return t;
          },
        },
        U = (0, V.Z)(
          (0, V.Z)({}, z),
          {},
          {
            transform: function (t) {
              return N(0, 1, t);
            },
          }
        ),
        W = (0, V.Z)((0, V.Z)({}, z), {}, { default: 1 }),
        H = n(4942),
        Y = function (t, e) {
          return function (n) {
            return Boolean(
              (I(n) && F.test(n) && n.startsWith(t)) ||
                (e && Object.prototype.hasOwnProperty.call(n, e))
            );
          };
        },
        X = function (t, e, n) {
          return function (r) {
            var i;
            if (!I(r)) return r;
            var a = r.match(j),
              s = (0, o.Z)(a, 4),
              u = s[0],
              l = s[1],
              c = s[2],
              f = s[3];
            return (
              (i = {}),
              (0, H.Z)(i, t, parseFloat(u)),
              (0, H.Z)(i, e, parseFloat(l)),
              (0, H.Z)(i, n, parseFloat(c)),
              (0, H.Z)(i, "alpha", void 0 !== f ? parseFloat(f) : 1),
              i
            );
          };
        },
        G = (0, V.Z)(
          (0, V.Z)({}, z),
          {},
          {
            transform: function (t) {
              return Math.round(
                (function (t) {
                  return N(0, 255, t);
                })(t)
              );
            },
          }
        ),
        q = {
          test: Y("rgb", "red"),
          parse: X("red", "green", "blue"),
          transform: function (t) {
            var e = t.red,
              n = t.green,
              r = t.blue,
              i = t.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "rgba(" +
              G.transform(e) +
              ", " +
              G.transform(n) +
              ", " +
              G.transform(r) +
              ", " +
              O(U.transform(o)) +
              ")"
            );
          },
        };
      var K = {
          test: Y("#"),
          parse: function (t) {
            var e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (n = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (i = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (n = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (i = t.substring(4, 5)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: q.transform,
        },
        $ = function (t) {
          return {
            test: function (e) {
              return I(e) && e.endsWith(t) && 1 === e.split(" ").length;
            },
            parse: parseFloat,
            transform: function (e) {
              return "".concat(e).concat(t);
            },
          };
        },
        _ = $("deg"),
        J = $("%"),
        Q = $("px"),
        tt = $("vh"),
        et = $("vw"),
        nt = (0, V.Z)(
          (0, V.Z)({}, J),
          {},
          {
            parse: function (t) {
              return J.parse(t) / 100;
            },
            transform: function (t) {
              return J.transform(100 * t);
            },
          }
        ),
        rt = {
          test: Y("hsl", "hue"),
          parse: X("hue", "saturation", "lightness"),
          transform: function (t) {
            var e = t.hue,
              n = t.saturation,
              r = t.lightness,
              i = t.alpha,
              o = void 0 === i ? 1 : i;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              J.transform(O(n)) +
              ", " +
              J.transform(O(r)) +
              ", " +
              O(U.transform(o)) +
              ")"
            );
          },
        },
        it = {
          test: function (t) {
            return q.test(t) || K.test(t) || rt.test(t);
          },
          parse: function (t) {
            return q.test(t)
              ? q.parse(t)
              : rt.test(t)
              ? rt.parse(t)
              : K.parse(t);
          },
          transform: function (t) {
            return I(t)
              ? t
              : t.hasOwnProperty("red")
              ? q.transform(t)
              : rt.transform(t);
          },
        },
        ot = function (t, e, n) {
          return -n * t + n * e + t;
        };
      function at(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      var st = function (t, e, n) {
          var r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r));
        },
        ut = [K, q, rt];
      function lt(t) {
        var e,
          n =
            ((e = t),
            ut.find(function (t) {
              return t.test(e);
            }));
        L(
          Boolean(n),
          "'".concat(
            t,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        var r = n.parse(t);
        return (
          n === rt &&
            (r = (function (t) {
              var e = t.hue,
                n = t.saturation,
                r = t.lightness,
                i = t.alpha;
              (e /= 360), (r /= 100);
              var o = 0,
                a = 0,
                s = 0;
              if ((n /= 100)) {
                var u = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  l = 2 * r - u;
                (o = at(l, u, e + 1 / 3)),
                  (a = at(l, u, e)),
                  (s = at(l, u, e - 1 / 3));
              } else o = a = s = r;
              return {
                red: Math.round(255 * o),
                green: Math.round(255 * a),
                blue: Math.round(255 * s),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      var ct = function (t, e) {
          var n = lt(t),
            r = lt(e),
            i = (0, V.Z)({}, n);
          return function (t) {
            return (
              (i.red = st(n.red, r.red, t)),
              (i.green = st(n.green, r.green, t)),
              (i.blue = st(n.blue, r.blue, t)),
              (i.alpha = ot(n.alpha, r.alpha, t)),
              q.transform(i)
            );
          };
        },
        ft = function (t, e) {
          return function (n) {
            return e(t(n));
          };
        },
        dt = function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return e.reduce(ft);
        },
        vt = function (t) {
          return function (e) {
            return "string" === typeof e && e.startsWith(t);
          };
        },
        ht = vt("--"),
        pt = vt("var(--");
      var mt = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: d,
        },
        yt = { regex: B, countKey: "Colors", token: "${c}", parse: it.parse },
        gt = { regex: j, countKey: "Numbers", token: "${n}", parse: z.parse };
      function xt(t, e) {
        var n,
          r = e.regex,
          i = e.countKey,
          o = e.token,
          a = e.parse,
          s = t.tokenised.match(r);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(r, o)),
          (n = t.values).push.apply(n, (0, D.Z)(s.map(a))));
      }
      function bt(t) {
        var e = t.toString(),
          n = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return n.value.includes("var(--") && xt(n, mt), xt(n, yt), xt(n, gt), n;
      }
      function wt(t) {
        return bt(t).values;
      }
      function Pt(t) {
        var e = bt(t),
          n = e.values,
          r = e.numColors,
          i = e.numVars,
          o = e.tokenised,
          a = n.length;
        return function (t) {
          for (var e = o, n = 0; n < a; n++)
            e =
              n < i
                ? e.replace(mt.token, t[n])
                : n < i + r
                ? e.replace(yt.token, it.transform(t[n]))
                : e.replace(gt.token, O(t[n]));
          return e;
        };
      }
      var kt = function (t) {
        return "number" === typeof t ? 0 : t;
      };
      var Et = {
          test: function (t) {
            var e, n;
            return (
              isNaN(t) &&
              I(t) &&
              ((null === (e = t.match(j)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (n = t.match(B)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: wt,
          createTransformer: Pt,
          getAnimatableNone: function (t) {
            var e = wt(t);
            return Pt(t)(e.map(kt));
          },
        },
        Ct = function (t, e) {
          return function (n) {
            return "".concat(n > 0 ? e : t);
          };
        };
      function St(t, e) {
        return "number" === typeof t
          ? function (n) {
              return ot(t, e, n);
            }
          : it.test(t)
          ? ct(t, e)
          : t.startsWith("var(")
          ? Ct(t, e)
          : Zt(t, e);
      }
      var Tt = function (t, e) {
          var n = (0, D.Z)(t),
            r = n.length,
            i = t.map(function (t, n) {
              return St(t, e[n]);
            });
          return function (t) {
            for (var e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        At = function (t, e) {
          var n = (0, V.Z)((0, V.Z)({}, t), e),
            r = {};
          for (var i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = St(t[i], e[i]));
          return function (t) {
            for (var e in r) n[e] = r[e](t);
            return n;
          };
        },
        Zt = function (t, e) {
          var n = Et.createTransformer(e),
            r = bt(t),
            i = bt(e);
          return r.numVars === i.numVars &&
            r.numColors === i.numColors &&
            r.numNumbers >= i.numNumbers
            ? dt(Tt(r.values, i.values), n)
            : (R(
                !0,
                "Complex values '"
                  .concat(t, "' and '")
                  .concat(
                    e,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              Ct(t, e));
        },
        Mt = function (t, e, n) {
          var r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        Vt = function (t, e) {
          return function (n) {
            return ot(t, e, n);
          };
        };
      function Dt(t, e, n) {
        for (
          var r,
            i = [],
            o =
              n ||
              ("number" === typeof (r = t[0])
                ? Vt
                : "string" === typeof r
                ? it.test(r)
                  ? ct
                  : Zt
                : Array.isArray(r)
                ? Tt
                : "object" === typeof r
                ? At
                : Vt),
            a = t.length - 1,
            s = 0;
          s < a;
          s++
        ) {
          var u = o(t[s], t[s + 1]);
          if (e) {
            var l = Array.isArray(e) ? e[s] || d : e;
            u = dt(l, u);
          }
          i.push(u);
        }
        return i;
      }
      function Rt(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          i = void 0 === r || r,
          o = n.ease,
          a = n.mixer,
          s = t.length;
        if (
          (L(
            s === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === s)
        )
          return function () {
            return e[0];
          };
        t[0] > t[s - 1] &&
          ((t = (0, D.Z)(t).reverse()), (e = (0, D.Z)(e).reverse()));
        var u = Dt(e, o, a),
          l = u.length,
          c = function (e) {
            var n = 0;
            if (l > 1) for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            var r = Mt(t[n], t[n + 1], e);
            return u[n](r);
          };
        return i
          ? function (e) {
              return c(N(t[0], t[s - 1], e));
            }
          : c;
      }
      var Lt = function (t) {
        return (function (t) {
          return "object" === typeof t && t.mix;
        })(t)
          ? t.mix
          : void 0;
      };
      var Ot = S ? r.useLayoutEffect : r.useEffect;
      function jt(t, e) {
        var n = C(e()),
          r = function () {
            return n.set(e());
          };
        return (
          r(),
          Ot(function () {
            var e = function () {
                return m.update(r, !1, !0);
              },
              n = t.map(function (t) {
                return t.on("change", e);
              });
            return function () {
              n.forEach(function (t) {
                return t();
              }),
                y(r);
            };
          }),
          n
        );
      }
      function Bt(t, e, n, r) {
        if ("function" === typeof t)
          return (function (t) {
            (b.current = []), t();
            var e = jt(b.current, t);
            return (b.current = void 0), e;
          })(t);
        var i =
          "function" === typeof e
            ? e
            : (function () {
                var t = !Array.isArray(
                    arguments.length <= 0 ? void 0 : arguments[0]
                  ),
                  e = t ? 0 : -1,
                  n =
                    0 + e < 0 || arguments.length <= 0 + e
                      ? void 0
                      : arguments[0 + e],
                  r =
                    2 + e < 0 || arguments.length <= 2 + e
                      ? void 0
                      : arguments[2 + e],
                  i =
                    3 + e < 0 || arguments.length <= 3 + e
                      ? void 0
                      : arguments[3 + e],
                  o = Rt(
                    1 + e < 0 || arguments.length <= 1 + e
                      ? void 0
                      : arguments[1 + e],
                    r,
                    (0, V.Z)({ mixer: Lt(r[0]) }, i)
                  );
                return t ? o(n) : o;
              })(e, n, r);
        return Array.isArray(t)
          ? Ft(t, i)
          : Ft([t], function (t) {
              var e = (0, o.Z)(t, 1)[0];
              return i(e);
            });
      }
      function Ft(t, e) {
        var n = E(function () {
          return [];
        });
        return jt(t, function () {
          n.length = 0;
          for (var r = t.length, i = 0; i < r; i++) n[i] = t[i].get();
          return e(n);
        });
      }
      function It(t, e, n) {
        var r;
        if ("string" === typeof t) {
          var i = document;
          e &&
            (L(Boolean(e.current), "Scope provided, but no element detected."),
            (i = e.current)),
            n
              ? ((null !== (r = n[t]) && void 0 !== r) ||
                  (n[t] = i.querySelectorAll(t)),
                (t = n[t]))
              : (t = i.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
      var Nt = new WeakMap();
      function zt(t) {
        var e;
        return function () {
          return void 0 === e && (e = t()), e;
        };
      }
      var Ut = zt(function () {
          return void 0 !== window.ScrollTimeline;
        }),
        Wt = (function () {
          function t(e) {
            (0, a.Z)(this, t), (this.animations = e.filter(Boolean));
          }
          return (
            (0, s.Z)(t, [
              {
                key: "then",
                value: function (t, e) {
                  return Promise.all(this.animations).then(t).catch(e);
                },
              },
              {
                key: "getAll",
                value: function (t) {
                  return this.animations[0][t];
                },
              },
              {
                key: "setAll",
                value: function (t, e) {
                  for (var n = 0; n < this.animations.length; n++)
                    this.animations[n][t] = e;
                },
              },
              {
                key: "attachTimeline",
                value: function (t) {
                  var e = this,
                    n = this.animations.map(function (e) {
                      if (!Ut() || !e.attachTimeline)
                        return (
                          e.pause(),
                          (function (t, e) {
                            var n,
                              r = function () {
                                var r = e.currentTime,
                                  i = (null === r ? 0 : r.value) / 100;
                                n !== i && t(i), (n = i);
                              };
                            return (
                              m.update(r, !0),
                              function () {
                                return y(r);
                              }
                            );
                          })(function (t) {
                            e.time = e.duration * t;
                          }, t)
                        );
                      e.attachTimeline(t);
                    });
                  return function () {
                    n.forEach(function (t, n) {
                      t && t(), e.animations[n].stop();
                    });
                  };
                },
              },
              {
                key: "time",
                get: function () {
                  return this.getAll("time");
                },
                set: function (t) {
                  this.setAll("time", t);
                },
              },
              {
                key: "speed",
                get: function () {
                  return this.getAll("speed");
                },
                set: function (t) {
                  this.setAll("speed", t);
                },
              },
              {
                key: "duration",
                get: function () {
                  for (var t = 0, e = 0; e < this.animations.length; e++)
                    t = Math.max(t, this.animations[e].duration);
                  return t;
                },
              },
              {
                key: "runAll",
                value: function (t) {
                  this.animations.forEach(function (e) {
                    return e[t]();
                  });
                },
              },
              {
                key: "play",
                value: function () {
                  this.runAll("play");
                },
              },
              {
                key: "pause",
                value: function () {
                  this.runAll("pause");
                },
              },
              {
                key: "stop",
                value: function () {
                  this.runAll("stop");
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.runAll("cancel");
                },
              },
              {
                key: "complete",
                value: function () {
                  this.runAll("complete");
                },
              },
            ]),
            t
          );
        })();
      var Ht = n(45987),
        Yt = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        Xt = new Set(Yt),
        Gt = function (t) {
          return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        },
        qt = "data-" + Gt("framerAppearId"),
        Kt = function (t) {
          return 1e3 * t;
        },
        $t = function (t) {
          return t / 1e3;
        },
        _t = !1,
        Jt = function (t) {
          return Array.isArray(t) && "number" === typeof t[0];
        };
      function Qt(t) {
        return Boolean(
          !t ||
            ("string" === typeof t && ee[t]) ||
            Jt(t) ||
            (Array.isArray(t) && t.every(Qt))
        );
      }
      var te = function (t) {
          var e = (0, o.Z)(t, 4),
            n = e[0],
            r = e[1],
            i = e[2],
            a = e[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(i, ", ")
            .concat(a, ")");
        },
        ee = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: te([0, 0.65, 0.55, 1]),
          circOut: te([0.55, 0, 1, 0.45]),
          backIn: te([0.31, 0.01, 0.66, -0.59]),
          backOut: te([0.33, 1.53, 0.69, 0.99]),
        };
      function ne(t) {
        if (t) return Jt(t) ? te(t) : Array.isArray(t) ? t.map(ne) : ee[t];
      }
      var re = function (t, e, n) {
          return (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        },
        ie = 1e-7,
        oe = 12;
      function ae(t, e, n, r) {
        if (t === e && n === r) return d;
        var i = function (e) {
          return (function (t, e, n, r, i) {
            var o,
              a,
              s = 0;
            do {
              (o = re((a = e + (n - e) / 2), r, i) - t) > 0 ? (n = a) : (e = a);
            } while (Math.abs(o) > ie && ++s < oe);
            return a;
          })(e, 0, 1, t, n);
        };
        return function (t) {
          return 0 === t || 1 === t ? t : re(i(t), e, r);
        };
      }
      var se = ae(0.42, 0, 1, 1),
        ue = ae(0, 0, 0.58, 1),
        le = ae(0.42, 0, 0.58, 1),
        ce = function (t) {
          return Array.isArray(t) && "number" !== typeof t[0];
        },
        fe = function (t) {
          return function (e) {
            return e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
          };
        },
        de = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        ve = function (t) {
          return 1 - Math.sin(Math.acos(t));
        },
        he = de(ve),
        pe = fe(he),
        me = ae(0.33, 1.53, 0.69, 0.99),
        ye = de(me),
        ge = fe(ye),
        xe = {
          linear: d,
          easeIn: se,
          easeInOut: le,
          easeOut: ue,
          circIn: ve,
          circInOut: pe,
          circOut: he,
          backIn: ye,
          backInOut: ge,
          backOut: me,
          anticipate: function (t) {
            return (t *= 2) < 1
              ? 0.5 * ye(t)
              : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
          },
        },
        be = function (t) {
          if (Array.isArray(t)) {
            L(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var e = (0, o.Z)(t, 4);
            return ae(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? (L(void 0 !== xe[t], "Invalid easing type '".concat(t, "'")),
              xe[t])
            : t;
        };
      function we(t, e) {
        for (var n = t[t.length - 1], r = 1; r <= e; r++) {
          var i = Mt(0, e, r);
          t.push(ot(n, 1, i));
        }
      }
      function Pe(t) {
        var e = [0];
        return we(e, t.length - 1), e;
      }
      function ke(t) {
        var e,
          n,
          r = t.duration,
          i = void 0 === r ? 300 : r,
          o = t.keyframes,
          a = t.times,
          s = t.ease,
          u = void 0 === s ? "easeInOut" : s,
          l = ce(u) ? u.map(be) : be(u),
          c = { done: !1, value: o[0] },
          f = (function (t, e) {
            return t.map(function (t) {
              return t * e;
            });
          })(a && a.length === o.length ? a : Pe(o), i),
          d = Rt(f, o, {
            ease: Array.isArray(l)
              ? l
              : ((e = o),
                (n = l),
                e
                  .map(function () {
                    return n || le;
                  })
                  .splice(0, e.length - 1)),
          });
        return {
          calculatedDuration: i,
          next: function (t) {
            return (c.value = d(t)), (c.done = t >= i), c;
          },
        };
      }
      var Ee = 5;
      function Ce(t, e, n) {
        var r = Math.max(e - Ee, 0);
        return f(n - t(r), e - r);
      }
      var Se = 0.001,
        Te = 0.01,
        Ae = 10,
        Ze = 0.05,
        Me = 1;
      function Ve(t) {
        var e,
          n,
          r = t.duration,
          i = void 0 === r ? 800 : r,
          o = t.bounce,
          a = void 0 === o ? 0.25 : o,
          s = t.velocity,
          u = void 0 === s ? 0 : s,
          l = t.mass,
          c = void 0 === l ? 1 : l;
        R(i <= Kt(Ae), "Spring duration must be 10 seconds or less");
        var f = 1 - a;
        (f = N(Ze, Me, f)),
          (i = N(Te, Ae, $t(i))),
          f < 1
            ? ((e = function (t) {
                var e = t * f,
                  n = e * i,
                  r = e - u,
                  o = Re(t, f),
                  a = Math.exp(-n);
                return Se - (r / o) * a;
              }),
              (n = function (t) {
                var n = t * f * i,
                  r = n * u + u,
                  o = Math.pow(f, 2) * Math.pow(t, 2) * i,
                  a = Math.exp(-n),
                  s = Re(Math.pow(t, 2), f);
                return ((-e(t) + Se > 0 ? -1 : 1) * ((r - o) * a)) / s;
              }))
            : ((e = function (t) {
                return Math.exp(-t * i) * ((t - u) * i + 1) - Se;
              }),
              (n = function (t) {
                return Math.exp(-t * i) * (i * i * (u - t));
              }));
        var d = (function (t, e, n) {
          for (var r = n, i = 1; i < De; i++) r -= t(r) / e(r);
          return r;
        })(e, n, 5 / i);
        if (((i = Kt(i)), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: i };
        var v = Math.pow(d, 2) * c;
        return { stiffness: v, damping: 2 * f * Math.sqrt(c * v), duration: i };
      }
      var De = 12;
      function Re(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      var Le = ["keyframes", "restDelta", "restSpeed"],
        Oe = ["duration", "bounce"],
        je = ["stiffness", "damping", "mass"];
      function Be(t, e) {
        return e.some(function (e) {
          return void 0 !== t[e];
        });
      }
      function Fe(t) {
        var e,
          n = t.keyframes,
          r = t.restDelta,
          i = t.restSpeed,
          o = (0, Ht.Z)(t, Le),
          a = n[0],
          s = n[n.length - 1],
          u = { done: !1, value: a },
          l = (function (t) {
            var e = (0, V.Z)(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!Be(t, je) && Be(t, Oe)) {
              var n = Ve(t);
              (e = (0, V.Z)(
                (0, V.Z)((0, V.Z)({}, e), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return e;
          })(o),
          c = l.stiffness,
          f = l.damping,
          d = l.mass,
          v = l.velocity,
          h = l.duration,
          p = l.isResolvedFromDuration,
          m = v ? -$t(v) : 0,
          y = f / (2 * Math.sqrt(c * d)),
          g = s - a,
          x = $t(Math.sqrt(c / d)),
          b = Math.abs(g) < 5;
        if ((i || (i = b ? 0.01 : 2), r || (r = b ? 0.005 : 0.5), y < 1)) {
          var w = Re(x, y);
          e = function (t) {
            var e = Math.exp(-y * x * t);
            return (
              s -
              e *
                (((m + y * x * g) / w) * Math.sin(w * t) + g * Math.cos(w * t))
            );
          };
        } else if (1 === y)
          e = function (t) {
            return s - Math.exp(-x * t) * (g + (m + x * g) * t);
          };
        else {
          var P = x * Math.sqrt(y * y - 1);
          e = function (t) {
            var e = Math.exp(-y * x * t),
              n = Math.min(P * t, 300);
            return (
              s -
              (e * ((m + y * x * g) * Math.sinh(n) + P * g * Math.cosh(n))) / P
            );
          };
        }
        return {
          calculatedDuration: (p && h) || null,
          next: function (t) {
            var n = e(t);
            if (p) u.done = t >= h;
            else {
              var o = m;
              0 !== t && (o = y < 1 ? Ce(e, t, n) : 0);
              var a = Math.abs(o) <= i,
                l = Math.abs(s - n) <= r;
              u.done = a && l;
            }
            return (u.value = u.done ? s : n), u;
          },
        };
      }
      function Ie(t) {
        var e = t.keyframes,
          n = t.velocity,
          r = void 0 === n ? 0 : n,
          i = t.power,
          o = void 0 === i ? 0.8 : i,
          a = t.timeConstant,
          s = void 0 === a ? 325 : a,
          u = t.bounceDamping,
          l = void 0 === u ? 10 : u,
          c = t.bounceStiffness,
          f = void 0 === c ? 500 : c,
          d = t.modifyTarget,
          v = t.min,
          h = t.max,
          p = t.restDelta,
          m = void 0 === p ? 0.5 : p,
          y = t.restSpeed,
          g = e[0],
          x = { done: !1, value: g },
          b = function (t) {
            return void 0 === v
              ? h
              : void 0 === h || Math.abs(v - t) < Math.abs(h - t)
              ? v
              : h;
          },
          w = o * r,
          P = g + w,
          k = void 0 === d ? P : d(P);
        k !== P && (w = k - g);
        var E,
          C,
          S = function (t) {
            return -w * Math.exp(-t / s);
          },
          T = function (t) {
            return k + S(t);
          },
          A = function (t) {
            var e = S(t),
              n = T(t);
            (x.done = Math.abs(e) <= m), (x.value = x.done ? k : n);
          },
          Z = function (t) {
            var e;
            ((e = x.value),
            (void 0 !== v && e < v) || (void 0 !== h && e > h)) &&
              ((E = t),
              (C = Fe({
                keyframes: [x.value, b(x.value)],
                velocity: Ce(T, t, x.value),
                damping: l,
                stiffness: f,
                restDelta: m,
                restSpeed: y,
              })));
          };
        return (
          Z(0),
          {
            calculatedDuration: null,
            next: function (t) {
              var e = !1;
              return (
                C || void 0 !== E || ((e = !0), A(t), Z(t)),
                void 0 !== E && t > E ? C.next(t - E) : (!e && A(t), x)
              );
            },
          }
        );
      }
      var Ne = function (t) {
          var e = function (e) {
            var n = e.timestamp;
            return t(n);
          };
          return {
            start: function () {
              return m.update(e, !0);
            },
            stop: function () {
              return y(e);
            },
            now: function () {
              return g.isProcessing ? g.timestamp : performance.now();
            },
          };
        },
        ze = 2e4;
      function Ue(t) {
        for (var e = 0, n = t.next(e); !n.done && e < ze; )
          (e += 50), (n = t.next(e));
        return e >= ze ? 1 / 0 : e;
      }
      var We = [
          "autoplay",
          "delay",
          "driver",
          "keyframes",
          "type",
          "repeat",
          "repeatDelay",
          "repeatType",
          "onPlay",
          "onStop",
          "onComplete",
          "onUpdate",
        ],
        He = { decay: Ie, inertia: Ie, tween: ke, keyframes: ke, spring: Fe };
      function Ye(t) {
        var e,
          n,
          r,
          i = t.autoplay,
          o = void 0 === i || i,
          a = t.delay,
          s = void 0 === a ? 0 : a,
          u = t.driver,
          l = void 0 === u ? Ne : u,
          c = t.keyframes,
          f = t.type,
          d = void 0 === f ? "keyframes" : f,
          v = t.repeat,
          h = void 0 === v ? 0 : v,
          p = t.repeatDelay,
          m = void 0 === p ? 0 : p,
          y = t.repeatType,
          g = void 0 === y ? "loop" : y,
          x = t.onPlay,
          b = t.onStop,
          w = t.onComplete,
          P = t.onUpdate,
          k = (0, Ht.Z)(t, We),
          E = 1,
          C = !1,
          S = function () {
            n = new Promise(function (t) {
              e = t;
            });
          };
        S();
        var T,
          A = He[d] || ke;
        A !== ke &&
          "number" !== typeof c[0] &&
          ((T = Rt([0, 100], c, { clamp: !1 })), (c = [0, 100]));
        var Z,
          M = A((0, V.Z)((0, V.Z)({}, k), {}, { keyframes: c }));
        "mirror" === g &&
          (Z = A(
            (0, V.Z)(
              (0, V.Z)({}, k),
              {},
              { keyframes: (0, D.Z)(c).reverse(), velocity: -(k.velocity || 0) }
            )
          ));
        var R = "idle",
          L = null,
          O = null,
          j = null;
        null === M.calculatedDuration && h && (M.calculatedDuration = Ue(M));
        var B = M.calculatedDuration,
          F = 1 / 0,
          I = 1 / 0;
        null !== B && (I = (F = B + m) * (h + 1) - m);
        var z = 0,
          U = function (t) {
            if (null !== O) {
              E > 0 && (O = Math.min(O, t)),
                E < 0 && (O = Math.min(t - I / E, O));
              var e =
                  (z = null !== L ? L : Math.round(t - O) * E) -
                  s * (E >= 0 ? 1 : -1),
                n = E >= 0 ? e < 0 : e > I;
              (z = Math.max(e, 0)), "finished" === R && null === L && (z = I);
              var r = z,
                i = M;
              if (h) {
                var o = z / F,
                  a = Math.floor(o),
                  u = o % 1;
                !u && o >= 1 && (u = 1),
                  1 === u && a--,
                  (a = Math.min(a, h + 1));
                var l = Boolean(a % 2);
                l &&
                  ("reverse" === g
                    ? ((u = 1 - u), m && (u -= m / F))
                    : "mirror" === g && (i = Z));
                var f = N(0, 1, u);
                z > I && (f = "reverse" === g && l ? 1 : 0), (r = f * F);
              }
              var d = n ? { done: !1, value: c[0] } : i.next(r);
              T && (d.value = T(d.value));
              var v = d.done;
              n || null === B || (v = E >= 0 ? z >= I : z <= 0);
              var p =
                null === L && ("finished" === R || ("running" === R && v));
              return P && P(d.value), p && Y(), d;
            }
          },
          W = function () {
            r && r.stop(), (r = void 0);
          },
          H = function () {
            (R = "idle"), W(), e(), S(), (O = j = null);
          },
          Y = function () {
            (R = "finished"), w && w(), W(), e();
          },
          X = function () {
            if (!C) {
              r || (r = l(U));
              var t = r.now();
              x && x(),
                null !== L ? (O = t - L) : (O && "finished" !== R) || (O = t),
                "finished" === R && S(),
                (j = O),
                (L = null),
                (R = "running"),
                r.start();
            }
          };
        o && X();
        var G = {
          then: function (t, e) {
            return n.then(t, e);
          },
          get time() {
            return $t(z);
          },
          set time(t) {
            (t = Kt(t)),
              (z = t),
              null === L && r && 0 !== E ? (O = r.now() - t / E) : (L = t);
          },
          get duration() {
            var t =
              null === M.calculatedDuration ? Ue(M) : M.calculatedDuration;
            return $t(t);
          },
          get speed() {
            return E;
          },
          set speed(t) {
            t !== E && r && ((E = t), (G.time = $t(z)));
          },
          get state() {
            return R;
          },
          play: X,
          pause: function () {
            (R = "paused"), (L = z);
          },
          stop: function () {
            (C = !0), "idle" !== R && ((R = "idle"), b && b(), H());
          },
          cancel: function () {
            null !== j && U(j), H();
          },
          complete: function () {
            R = "finished";
          },
          sample: function (t) {
            return (O = 0), U(t);
          },
        };
        return G;
      }
      var Xe = ["onUpdate", "onComplete"],
        Ge = zt(function () {
          return Object.hasOwnProperty.call(Element.prototype, "animate");
        }),
        qe = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]);
      function Ke(t, e, n) {
        n.onUpdate;
        var r = n.onComplete,
          i = (0, Ht.Z)(n, Xe);
        if (
          !(
            Ge() &&
            qe.has(e) &&
            !i.repeatDelay &&
            "mirror" !== i.repeatType &&
            0 !== i.damping &&
            "inertia" !== i.type
          )
        )
          return !1;
        var o,
          a,
          s = !1,
          u = function () {
            a = new Promise(function (t) {
              o = t;
            });
          };
        u();
        var l = i.keyframes,
          c = i.duration,
          f = void 0 === c ? 300 : c,
          v = i.ease,
          h = i.times;
        if (
          (function (t, e) {
            return (
              "spring" === e.type || "backgroundColor" === t || !Qt(e.ease)
            );
          })(e, i)
        ) {
          for (
            var p = Ye((0, V.Z)((0, V.Z)({}, i), {}, { repeat: 0, delay: 0 })),
              x = { done: !1, value: l[0] },
              b = [],
              w = 0;
            !x.done && w < 2e4;

          )
            (x = p.sample(w)), b.push(x.value), (w += 10);
          (h = void 0), (l = b), (f = w - 10), (v = "linear");
        }
        var P = (function (t, e, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = r.delay,
            o = void 0 === i ? 0 : i,
            a = r.duration,
            s = r.repeat,
            u = void 0 === s ? 0 : s,
            l = r.repeatType,
            c = void 0 === l ? "loop" : l,
            f = r.ease,
            d = r.times,
            v = (0, H.Z)({}, e, n);
          d && (v.offset = d);
          var h = ne(f);
          return (
            Array.isArray(h) && (v.easing = h),
            t.animate(v, {
              delay: o,
              duration: a,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: u + 1,
              direction: "reverse" === c ? "alternate" : "normal",
            })
          );
        })(
          t.owner.current,
          e,
          l,
          (0, V.Z)((0, V.Z)({}, i), {}, { duration: f, ease: v, times: h })
        );
        i.syncStart &&
          (P.startTime = g.isProcessing
            ? g.timestamp
            : document.timeline
            ? document.timeline.currentTime
            : performance.now());
        var k = function () {
            return P.cancel();
          },
          E = function () {
            m.update(k), o(), u();
          };
        return (
          (P.onfinish = function () {
            t.set(
              (function (t, e) {
                var n = e.repeat,
                  r = e.repeatType;
                return t[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : t.length - 1
                ];
              })(l, i)
            ),
              r && r(),
              E();
          }),
          {
            then: function (t, e) {
              return a.then(t, e);
            },
            attachTimeline: function (t) {
              return (P.timeline = t), (P.onfinish = null), d;
            },
            get time() {
              return $t(P.currentTime || 0);
            },
            set time(t) {
              P.currentTime = Kt(t);
            },
            get speed() {
              return P.playbackRate;
            },
            set speed(t) {
              P.playbackRate = t;
            },
            get duration() {
              return $t(f);
            },
            play: function () {
              s || (P.play(), y(k));
            },
            pause: function () {
              return P.pause();
            },
            stop: function () {
              if (((s = !0), "idle" !== P.playState)) {
                var e = P.currentTime;
                if (e) {
                  var n = Ye((0, V.Z)((0, V.Z)({}, i), {}, { autoplay: !1 }));
                  t.setWithVelocity(
                    n.sample(e - 10).value,
                    n.sample(e).value,
                    10
                  );
                }
                E();
              }
            },
            complete: function () {
              return P.finish();
            },
            cancel: E,
          }
        );
      }
      var $e = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        _e = { type: "keyframes", duration: 0.8 },
        Je = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Qe = function (t, e) {
          var n = e.keyframes;
          return n.length > 2
            ? _e
            : Xt.has(t)
            ? t.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : $e
            : Je;
        },
        tn = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !(
                "string" !== typeof e ||
                (!Et.test(e) && "0" !== e) ||
                e.startsWith("url(")
              ))
          );
        },
        en = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function nn(t) {
        var e = t.slice(0, -1).split("("),
          n = (0, o.Z)(e, 2),
          r = n[0],
          i = n[1];
        if ("drop-shadow" === r) return t;
        var a = i.match(j) || [],
          s = (0, o.Z)(a, 1)[0];
        if (!s) return t;
        var u = i.replace(s, ""),
          l = en.has(r) ? 1 : 0;
        return s !== i && (l *= 100), r + "(" + l + u + ")";
      }
      var rn = /([a-z-]*)\(.*?\)/g,
        on = (0, V.Z)(
          (0, V.Z)({}, Et),
          {},
          {
            getAnimatableNone: function (t) {
              var e = t.match(rn);
              return e ? e.map(nn).join(" ") : t;
            },
          }
        ),
        an = (0, V.Z)((0, V.Z)({}, z), {}, { transform: Math.round }),
        sn = {
          borderWidth: Q,
          borderTopWidth: Q,
          borderRightWidth: Q,
          borderBottomWidth: Q,
          borderLeftWidth: Q,
          borderRadius: Q,
          radius: Q,
          borderTopLeftRadius: Q,
          borderTopRightRadius: Q,
          borderBottomRightRadius: Q,
          borderBottomLeftRadius: Q,
          width: Q,
          maxWidth: Q,
          height: Q,
          maxHeight: Q,
          size: Q,
          top: Q,
          right: Q,
          bottom: Q,
          left: Q,
          padding: Q,
          paddingTop: Q,
          paddingRight: Q,
          paddingBottom: Q,
          paddingLeft: Q,
          margin: Q,
          marginTop: Q,
          marginRight: Q,
          marginBottom: Q,
          marginLeft: Q,
          rotate: _,
          rotateX: _,
          rotateY: _,
          rotateZ: _,
          scale: W,
          scaleX: W,
          scaleY: W,
          scaleZ: W,
          skew: _,
          skewX: _,
          skewY: _,
          distance: Q,
          translateX: Q,
          translateY: Q,
          translateZ: Q,
          x: Q,
          y: Q,
          z: Q,
          perspective: Q,
          transformPerspective: Q,
          opacity: U,
          originX: nt,
          originY: nt,
          originZ: Q,
          zIndex: an,
          fillOpacity: U,
          strokeOpacity: U,
          numOctaves: an,
        },
        un = (0, V.Z)(
          (0, V.Z)({}, sn),
          {},
          {
            color: it,
            backgroundColor: it,
            outlineColor: it,
            fill: it,
            stroke: it,
            borderColor: it,
            borderTopColor: it,
            borderRightColor: it,
            borderBottomColor: it,
            borderLeftColor: it,
            filter: on,
            WebkitFilter: on,
          }
        ),
        ln = function (t) {
          return un[t];
        };
      function cn(t, e) {
        var n = ln(t);
        return (
          n !== on && (n = Et),
          n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
        );
      }
      var fn = function (t) {
        return /^0[^.\s]+$/.test(t);
      };
      function dn(t) {
        return "number" === typeof t
          ? 0 === t
          : null !== t
          ? "none" === t || "0" === t || fn(t)
          : void 0;
      }
      var vn = [
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
      ];
      function hn(t, e) {
        return t[e] || t.default || t;
      }
      var pn = function (t, e, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return function (i) {
            var o = hn(r, t) || {},
              a = o.delay || r.delay || 0,
              s = r.elapsed,
              u = void 0 === s ? 0 : s;
            u -= Kt(a);
            var l = (function (t, e, n, r) {
                var i,
                  o = tn(e, n);
                i = Array.isArray(n) ? (0, D.Z)(n) : [null, n];
                for (
                  var a = void 0 !== r.from ? r.from : t.get(),
                    s = void 0,
                    u = [],
                    l = 0;
                  l < i.length;
                  l++
                )
                  null === i[l] && (i[l] = 0 === l ? a : i[l - 1]),
                    dn(i[l]) && u.push(l),
                    "string" === typeof i[l] &&
                      "none" !== i[l] &&
                      "0" !== i[l] &&
                      (s = i[l]);
                if (o && u.length && s)
                  for (var c = 0; c < u.length; c++) i[u[c]] = cn(e, s);
                return i;
              })(e, t, n, o),
              c = l[0],
              f = l[l.length - 1],
              v = tn(t, c),
              h = tn(t, f);
            R(
              v === h,
              "You are trying to animate "
                .concat(t, ' from "')
                .concat(c, '" to "')
                .concat(f, '". ')
                .concat(
                  c,
                  " is not an animatable value - to enable this animation set "
                )
                .concat(c, " to a value animatable to ")
                .concat(f, " via the `style` property.")
            );
            var p = (0, V.Z)(
              (0, V.Z)(
                { keyframes: l, velocity: e.getVelocity(), ease: "easeOut" },
                o
              ),
              {},
              {
                delay: -u,
                onUpdate: function (t) {
                  e.set(t), o.onUpdate && o.onUpdate(t);
                },
                onComplete: function () {
                  i(), o.onComplete && o.onComplete();
                },
              }
            );
            if (
              ((function (t) {
                t.when,
                  t.delay,
                  t.delayChildren,
                  t.staggerChildren,
                  t.staggerDirection,
                  t.repeat,
                  t.repeatType,
                  t.repeatDelay,
                  t.from,
                  t.elapsed;
                var e = (0, Ht.Z)(t, vn);
                return !!Object.keys(e).length;
              })(o) || (p = (0, V.Z)((0, V.Z)({}, p), Qe(t, p))),
              p.duration && (p.duration = Kt(p.duration)),
              p.repeatDelay && (p.repeatDelay = Kt(p.repeatDelay)),
              !v || !h || _t || !1 === o.type)
            )
              return (function (t) {
                var e = t.keyframes,
                  n = t.delay,
                  r = t.onUpdate,
                  i = t.onComplete,
                  o = function () {
                    return (
                      r && r(e[e.length - 1]),
                      i && i(),
                      {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: d,
                        pause: d,
                        stop: d,
                        then: function (t) {
                          return t(), Promise.resolve();
                        },
                        cancel: d,
                        complete: d,
                      }
                    );
                  };
                return n
                  ? Ye({
                      keyframes: [0, 1],
                      duration: 0,
                      delay: n,
                      onComplete: o,
                    })
                  : o();
              })(_t ? (0, V.Z)((0, V.Z)({}, p), {}, { delay: 0 }) : p);
            if (
              e.owner &&
              e.owner.current instanceof HTMLElement &&
              !e.owner.getProps().onUpdate
            ) {
              var m = Ke(e, t, p);
              if (m) return m;
            }
            return Ye(p);
          };
        },
        mn = function (t) {
          return Boolean(t && t.getVelocity);
        };
      function yn(t) {
        return Boolean(mn(t) && t.add);
      }
      var gn = function (t) {
          return /^\-?\d*\.?\d+$/.test(t);
        },
        xn = function (t) {
          return Array.isArray(t);
        },
        bn = function (t) {
          return Boolean(t && "object" === typeof t && t.mix && t.toValue);
        },
        wn = function (t) {
          return xn(t) ? t[t.length - 1] || 0 : t;
        },
        Pn = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        kn = [
          z,
          Q,
          J,
          _,
          et,
          tt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        En = function (t) {
          return kn.find(Pn(t));
        },
        Cn = [].concat((0, D.Z)(kn), [it, Et]);
      function Sn(t, e, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e && (e = t.variants && t.variants[e]),
          "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function Tn(t, e, n) {
        var r = t.getProps();
        return Sn(
          r,
          e,
          void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.values.forEach(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.values.forEach(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      var An = ["transitionEnd", "transition"];
      function Zn(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, P(n));
      }
      function Mn(t, e) {
        var n = Tn(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd,
          o = void 0 === i ? {} : i,
          a = (r.transition, (0, Ht.Z)(r, An));
        for (var s in (a = (0, V.Z)((0, V.Z)({}, a), o))) {
          Zn(t, s, wn(a[s]));
        }
      }
      function Vn(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      var Dn = ["transition", "transitionEnd"];
      function Rn(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.delay,
          i = void 0 === r ? 0 : r,
          o = n.transitionOverride,
          a = n.type,
          s = t.makeTargetAnimatable(e),
          u = s.transition,
          l = void 0 === u ? t.getDefaultTransition() : u,
          c = s.transitionEnd,
          f = (0, Ht.Z)(s, Dn),
          d = t.getValue("willChange");
        o && (l = o);
        var v = [],
          h = a && t.animationState && t.animationState.getState()[a],
          p = function (e) {
            var n = t.getValue(e),
              r = f[e];
            if (
              !n ||
              void 0 === r ||
              (h &&
                (function (t, e) {
                  var n = t.protectedKeys,
                    r = t.needsAnimating,
                    i = n.hasOwnProperty(e) && !0 !== r[e];
                  return (r[e] = !1), i;
                })(h, e))
            )
              return "continue";
            var o = (0, V.Z)({ delay: i, elapsed: 0 }, hn(l || {}, e)),
              a = !0;
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var s = t.getProps()[qt];
              s &&
                ((a = !1),
                (o.elapsed = window.HandoffAppearAnimations(s, e, n, m)),
                (o.syncStart = !0));
            }
            var u = a && r === n.get();
            if (
              ("spring" === o.type &&
                (n.getVelocity() || o.velocity) &&
                (u = !1),
              n.animation && (u = !1),
              u)
            )
              return "continue";
            n.start(
              pn(e, n, r, t.shouldReduceMotion && Xt.has(e) ? { type: !1 } : o)
            );
            var c = n.animation;
            yn(d) &&
              (d.add(e),
              c.then(function () {
                return d.remove(e);
              })),
              v.push(c);
          };
        for (var y in f) p(y);
        return (
          c &&
            Promise.all(v).then(function () {
              c && Mn(t, c);
            }),
          v
        );
      }
      function Ln(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
      var On = n(11752),
        jn = n(61120),
        Bn = n(60136),
        Fn = n(29388),
        In = {};
      function Nn(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          Xt.has(t) ||
          t.startsWith("origin") ||
          ((n || void 0 !== r) && (!!In[t] || "opacity" === t))
        );
      }
      function zn(t, e) {
        var n = t.style,
          r = {};
        for (var i in n)
          (mn(n[i]) || (e.style && mn(e.style[i])) || Nn(i, t)) &&
            (r[i] = n[i]);
        return r;
      }
      function Un(t, e) {
        var n = zn(t, e);
        for (var r in t) {
          if (mn(t[r]) || mn(e[r]))
            n[
              -1 !== Yt.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r];
        }
        return n;
      }
      var Wn = n(36459),
        Hn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Yn = 4;
      function Xn(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        L(
          n <= Yn,
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          )
        );
        var r = (function (t) {
            var e = Hn.exec(t);
            if (!e) return [,];
            var n = (0, o.Z)(e, 3);
            return [n[1], n[2]];
          })(t),
          i = (0, o.Z)(r, 2),
          a = i[0],
          s = i[1];
        if (a) {
          var u = window.getComputedStyle(e).getPropertyValue(a);
          if (u) {
            var l = u.trim();
            return gn(l) ? parseFloat(l) : l;
          }
          return pt(s) ? Xn(s, e, n + 1) : s;
        }
      }
      var Gn = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        qn = function (t) {
          return Gn.has(t);
        },
        Kn = function (t) {
          return t === z || t === Q;
        },
        $n = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        _n = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return $n(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? $n(a[1], t) : 0;
          };
        },
        Jn = new Set(["x", "y", "z"]),
        Qn = Yt.filter(function (t) {
          return !Jn.has(t);
        });
      var tr = {
        width: function (t, e) {
          var n = t.x,
            r = e.paddingLeft,
            i = void 0 === r ? "0" : r,
            o = e.paddingRight,
            a = void 0 === o ? "0" : o;
          return n.max - n.min - parseFloat(i) - parseFloat(a);
        },
        height: function (t, e) {
          var n = t.y,
            r = e.paddingTop,
            i = void 0 === r ? "0" : r,
            o = e.paddingBottom,
            a = void 0 === o ? "0" : o;
          return n.max - n.min - parseFloat(i) - parseFloat(a);
        },
        top: function (t, e) {
          var n = e.top;
          return parseFloat(n);
        },
        left: function (t, e) {
          var n = e.left;
          return parseFloat(n);
        },
        bottom: function (t, e) {
          var n = t.y,
            r = e.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right: function (t, e) {
          var n = t.x,
            r = e.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: _n(4, 13),
        y: _n(5, 14),
      };
      (tr.translateX = tr.x), (tr.translateY = tr.y);
      var er = function (t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        (e = (0, V.Z)({}, e)), (r = (0, V.Z)({}, r));
        var i = Object.keys(e).filter(qn),
          a = [],
          s = !1,
          u = [];
        if (
          (i.forEach(function (i) {
            var o = t.getValue(i);
            if (t.hasValue(i)) {
              var l,
                c = n[i],
                f = En(c),
                d = e[i];
              if (xn(d)) {
                var v = d.length,
                  h = null === d[0] ? 1 : 0;
                (c = d[h]), (f = En(c));
                for (var p = h; p < v && null !== d[p]; p++)
                  l
                    ? L(
                        En(d[p]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = En(d[p])),
                      L(
                        l === f || (Kn(f) && Kn(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = En(d);
              if (f !== l)
                if (Kn(f) && Kn(l)) {
                  var m = o.get();
                  "string" === typeof m && o.set(parseFloat(m)),
                    "string" === typeof d
                      ? (e[i] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === Q &&
                        (e[i] = d.map(parseFloat));
                } else
                  (null === f || void 0 === f ? void 0 : f.transform) &&
                  (null === l || void 0 === l ? void 0 : l.transform) &&
                  (0 === c || 0 === d)
                    ? 0 === c
                      ? o.set(l.transform(c))
                      : (e[i] = f.transform(d))
                    : (s ||
                        ((a = (function (t) {
                          var e = [];
                          return (
                            Qn.forEach(function (n) {
                              var r = t.getValue(n);
                              void 0 !== r &&
                                (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (s = !0)),
                      u.push(i),
                      (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                      o.jump(d));
            }
          }),
          u.length)
        ) {
          var l = u.indexOf("height") >= 0 ? window.pageYOffset : null,
            c = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.current,
                o = getComputedStyle(i),
                a = o.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = tr[t](r, o);
                }),
                e.render();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  r && r.jump(s[n]), (t[n] = tr[n](u, o));
                }),
                t
              );
            })(e, t, u);
          return (
            a.length &&
              a.forEach(function (e) {
                var n = (0, o.Z)(e, 2),
                  r = n[0],
                  i = n[1];
                t.getValue(r).set(i);
              }),
            t.render(),
            S && null !== l && window.scrollTo({ top: l }),
            { target: c, transitionEnd: r }
          );
        }
        return { target: e, transitionEnd: r };
      };
      function nr(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(qn);
        })(e)
          ? er(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var rr = function (t, e, n, r) {
          var i = (function (t, e, n) {
            var r = Object.assign({}, ((0, Wn.Z)(e), e)),
              i = t.current;
            if (!(i instanceof Element)) return { target: r, transitionEnd: n };
            for (var o in (n && (n = (0, V.Z)({}, n)),
            t.values.forEach(function (t) {
              var e = t.get();
              if (pt(e)) {
                var n = Xn(e, i);
                n && t.set(n);
              }
            }),
            r)) {
              var a = r[o];
              if (pt(a)) {
                var s = Xn(a, i);
                s && ((r[o] = s), n || (n = {}), void 0 === n[o] && (n[o] = a));
              }
            }
            return { target: r, transitionEnd: n };
          })(t, e, r);
          return nr(t, (e = i.target), n, (r = i.transitionEnd));
        },
        ir = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        or = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function ar(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function sr(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function ur(t) {
        return "string" === typeof t || Array.isArray(t);
      }
      var lr = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        cr = ["initial"].concat(lr);
      function fr(t) {
        return (
          sr(t.animate) ||
          cr.some(function (e) {
            return ur(t[e]);
          })
        );
      }
      function dr(t) {
        return Boolean(fr(t) || t.variants);
      }
      var vr = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        hr = {},
        pr = function (t) {
          hr[t] = {
            isEnabled: function (e) {
              return vr[t].some(function (t) {
                return !!e[t];
              });
            },
          };
        };
      for (var mr in vr) pr(mr);
      var yr = ["willChange"],
        gr = ["children"],
        xr = Object.keys(hr),
        br = xr.length,
        wr = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        Pr = cr.length,
        kr = (function () {
          function t(e) {
            var n = this,
              r = e.parent,
              i = e.props,
              o = e.presenceContext,
              s = e.reducedMotionConfig,
              u = e.visualState,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            (0, a.Z)(this, t),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return m.render(n.render, !1, !0);
              });
            var c = u.latestValues,
              f = u.renderState;
            (this.latestValues = c),
              (this.baseTarget = (0, V.Z)({}, c)),
              (this.initialValues = i.initial ? (0, V.Z)({}, c) : {}),
              (this.renderState = f),
              (this.parent = r),
              (this.props = i),
              (this.presenceContext = o),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = s),
              (this.options = l),
              (this.isControllingVariants = fr(i)),
              (this.isVariantNode = dr(i)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var d = this.scrapeMotionValuesFromProps(i, {}),
              v = d.willChange,
              h = (0, Ht.Z)(d, yr);
            for (var p in h) {
              var y = h[p];
              void 0 !== c[p] && mn(y) && (y.set(c[p], !1), yn(v) && v.add(p));
            }
          }
          return (
            (0, s.Z)(t, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (t, e) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (t) {
                  var e = this;
                  (this.current = t),
                    Nt.set(t, this),
                    this.projection &&
                      !this.projection.instance &&
                      this.projection.mount(t),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        this.parent.addVariantChild(this)),
                    this.values.forEach(function (t, n) {
                      return e.bindToMotionValue(n, t);
                    }),
                    A.current || Z(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || T.current)),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext);
                },
              },
              {
                key: "unmount",
                value: function () {
                  for (var t in (Nt.delete(this.current),
                  this.projection && this.projection.unmount(),
                  y(this.notifyUpdate),
                  y(this.render),
                  this.valueSubscriptions.forEach(function (t) {
                    return t();
                  }),
                  this.removeFromVariantTree && this.removeFromVariantTree(),
                  this.parent && this.parent.children.delete(this),
                  this.events))
                    this.events[t].clear();
                  for (var e in this.features) this.features[e].unmount();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (t, e) {
                  var n = this,
                    r = Xt.has(t),
                    i = e.on("change", function (e) {
                      (n.latestValues[t] = e),
                        n.props.onUpdate && m.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    o = e.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(t, function () {
                    i(), o();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (t) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === t.type
                    ? this.sortInstanceNodePosition(this.current, t.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (t, e, n, r) {
                  for (
                    var i,
                      o,
                      a = this,
                      s = (t.children, (0, Ht.Z)(t, gr)),
                      u = 0;
                    u < br;
                    u++
                  ) {
                    var l = xr[u],
                      c = hr[l],
                      f = c.isEnabled,
                      d = c.Feature,
                      v = c.ProjectionNode,
                      h = c.MeasureLayout;
                    v && (i = v),
                      f(s) &&
                        (!this.features[l] &&
                          d &&
                          (this.features[l] = new d(this)),
                        h && (o = h));
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var p = s.layoutId,
                      m = s.layout,
                      y = s.drag,
                      g = s.dragConstraints,
                      x = s.layoutScroll,
                      b = s.layoutRoot;
                    this.projection.setOptions({
                      layoutId: p,
                      layout: m,
                      alwaysMeasureLayout: Boolean(y) || (g && ar(g)),
                      visualElement: this,
                      scheduleRender: function () {
                        return a.scheduleRender();
                      },
                      animationType: "string" === typeof m ? m : "both",
                      initialPromotionConfig: r,
                      layoutScroll: x,
                      layoutRoot: b,
                    });
                  }
                  return o;
                },
              },
              {
                key: "updateFeatures",
                value: function () {
                  for (var t in this.features) {
                    var e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
                  }
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : or();
                },
              },
              {
                key: "getStaticValue",
                value: function (t) {
                  return this.latestValues[t];
                },
              },
              {
                key: "setStaticValue",
                value: function (t, e) {
                  this.latestValues[t] = e;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    t,
                    this.props,
                    e
                  );
                },
              },
              {
                key: "update",
                value: function (t, e) {
                  (t.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.prevProps = this.props),
                    (this.props = t),
                    (this.prevPresenceContext = this.presenceContext),
                    (this.presenceContext = e);
                  for (var n = 0; n < wr.length; n++) {
                    var r = wr[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var i = t["on" + r];
                    i && (this.propEventSubscriptions[r] = this.on(r, i));
                  }
                  (this.prevMotionValues = (function (t, e, n) {
                    var r = e.willChange;
                    for (var i in e) {
                      var o = e[i],
                        a = n[i];
                      if (mn(o)) t.addValue(i, o), yn(r) && r.add(i);
                      else if (mn(a))
                        t.addValue(i, P(o, { owner: t })), yn(r) && r.remove(i);
                      else if (a !== o)
                        if (t.hasValue(i)) {
                          var s = t.getValue(i);
                          !s.hasAnimated && s.set(o);
                        } else {
                          var u = t.getStaticValue(i);
                          t.addValue(i, P(void 0 !== u ? u : o, { owner: t }));
                        }
                    }
                    for (var l in n) void 0 === e[l] && t.removeValue(l);
                    return e;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(t, this.prevProps),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (t) {
                  return this.props.variants ? this.props.variants[t] : void 0;
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  return this.isVariantNode
                    ? this
                    : this.parent
                    ? this.parent.getClosestVariantNode()
                    : void 0;
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                    return this.parent
                      ? this.parent.getVariantContext()
                      : void 0;
                  if (!this.isControllingVariants) {
                    var t =
                      (this.parent && this.parent.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (t.initial = this.props.initial),
                      t
                    );
                  }
                  for (var e = {}, n = 0; n < Pr; n++) {
                    var r = cr[n],
                      i = this.props[r];
                    (ur(i) || !1 === i) && (e[r] = i);
                  }
                  return e;
                },
              },
              {
                key: "addVariantChild",
                value: function (t) {
                  var e = this.getClosestVariantNode();
                  if (e)
                    return (
                      e.variantChildren && e.variantChildren.add(t),
                      function () {
                        return e.variantChildren.delete(t);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (t, e) {
                  e !== this.values.get(t) &&
                    (this.removeValue(t), this.bindToMotionValue(t, e)),
                    this.values.set(t, e),
                    (this.latestValues[t] = e.get());
                },
              },
              {
                key: "removeValue",
                value: function (t) {
                  this.values.delete(t);
                  var e = this.valueSubscriptions.get(t);
                  e && (e(), this.valueSubscriptions.delete(t)),
                    delete this.latestValues[t],
                    this.removeValueFromRenderState(t, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (t) {
                  return this.values.has(t);
                },
              },
              {
                key: "getValue",
                value: function (t, e) {
                  if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                  var n = this.values.get(t);
                  return (
                    void 0 === n &&
                      void 0 !== e &&
                      ((n = P(e, { owner: this })), this.addValue(t, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (t) {
                  var e;
                  return void 0 === this.latestValues[t] && this.current
                    ? null !==
                        (e = this.getBaseTargetFromProps(this.props, t)) &&
                      void 0 !== e
                      ? e
                      : this.readValueFromInstance(
                          this.current,
                          t,
                          this.options
                        )
                    : this.latestValues[t];
                },
              },
              {
                key: "setBaseTarget",
                value: function (t, e) {
                  this.baseTarget[t] = e;
                },
              },
              {
                key: "getBaseTarget",
                value: function (t) {
                  var e,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (e = Sn(this.props, n)) || void 0 === e
                          ? void 0
                          : e[t]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var i = this.getBaseTargetFromProps(this.props, t);
                  return void 0 === i || mn(i)
                    ? void 0 !== this.initialValues[t] && void 0 === r
                      ? void 0
                      : this.baseTarget[t]
                    : i;
                },
              },
              {
                key: "on",
                value: function (t, e) {
                  return (
                    this.events[t] || (this.events[t] = new c()),
                    this.events[t].add(e)
                  );
                },
              },
              {
                key: "notify",
                value: function (t) {
                  if (this.events[t]) {
                    for (
                      var e,
                        n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        i = 1;
                      i < n;
                      i++
                    )
                      r[i - 1] = arguments[i];
                    (e = this.events[t]).notify.apply(e, r);
                  }
                },
              },
            ]),
            t
          );
        })(),
        Er = ["transition", "transitionEnd"],
        Cr = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            return (0, a.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, s.Z)(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (t, e) {
                  return 2 & t.compareDocumentPosition(e) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (t, e) {
                  return t.style ? t.style[e] : void 0;
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (t, e) {
                  var n = e.vars,
                    r = e.style;
                  delete n[t], delete r[t];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (t, e, n) {
                  var r = t.transition,
                    i = t.transitionEnd,
                    o = (0, Ht.Z)(t, Er),
                    a = e.transformValues,
                    s = (function (t, e, n) {
                      var r = {};
                      for (var i in t) {
                        var o = Vn(i, e);
                        if (void 0 !== o) r[i] = o;
                        else {
                          var a = n.getValue(i);
                          a && (r[i] = a.get());
                        }
                      }
                      return r;
                    })(o, r || {}, this);
                  if (
                    (a && (i && (i = a(i)), o && (o = a(o)), s && (s = a(s))),
                    n)
                  ) {
                    !(function (t, e, n) {
                      var r,
                        i,
                        o,
                        a = Object.keys(e).filter(function (e) {
                          return !t.hasValue(e);
                        }),
                        s = a.length;
                      if (s)
                        for (var u = 0; u < s; u++) {
                          var l = a[u],
                            c = e[l],
                            f = null;
                          Array.isArray(c) && (f = c[0]),
                            null === f &&
                              (f =
                                null !==
                                  (i =
                                    null !== (r = n[l]) && void 0 !== r
                                      ? r
                                      : t.readValue(l)) && void 0 !== i
                                  ? i
                                  : e[l]),
                            void 0 !== f &&
                              null !== f &&
                              ("string" === typeof f && (gn(f) || fn(f))
                                ? (f = parseFloat(f))
                                : ((o = f),
                                  !Cn.find(Pn(o)) &&
                                    Et.test(c) &&
                                    (f = cn(l, c))),
                              t.addValue(l, P(f, { owner: t })),
                              void 0 === n[l] && (n[l] = f),
                              null !== f && t.setBaseTarget(l, f));
                        }
                    })(this, o, s);
                    var u = rr(this, o, s, i);
                    (i = u.transitionEnd), (o = u.target);
                  }
                  return (0, V.Z)({ transition: r, transitionEnd: i }, o);
                },
              },
            ]),
            n
          );
        })(kr),
        Sr = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        Tr = Yt.length;
      var Ar = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function Zr(t, e, n, r) {
        var i = t.style,
          o = t.vars,
          a = t.transform,
          s = t.transformOrigin,
          u = !1,
          l = !1,
          c = !0;
        for (var f in e) {
          var d = e[f];
          if (ht(f)) o[f] = d;
          else {
            var v = sn[f],
              h = Ar(d, v);
            if (Xt.has(f)) {
              if (((u = !0), (a[f] = h), !c)) continue;
              d !== (v.default || 0) && (c = !1);
            } else f.startsWith("origin") ? ((l = !0), (s[f] = h)) : (i[f] = h);
          }
        }
        if (
          (e.transform ||
            (u || r
              ? (i.transform = (function (t, e, n, r) {
                  for (
                    var i = e.enableHardwareAcceleration,
                      o = void 0 === i || i,
                      a = e.allowTransformNone,
                      s = void 0 === a || a,
                      u = "",
                      l = 0;
                    l < Tr;
                    l++
                  ) {
                    var c = Yt[l];
                    if (void 0 !== t[c]) {
                      var f = Sr[c] || c;
                      u += "".concat(f, "(").concat(t[c], ") ");
                    }
                  }
                  return (
                    o && !t.z && (u += "translateZ(0)"),
                    (u = u.trim()),
                    r ? (u = r(t, n ? "" : u)) : s && n && (u = "none"),
                    u
                  );
                })(t.transform, n, c, r))
              : i.transform && (i.transform = "none")),
          l)
        ) {
          var p = s.originX,
            m = void 0 === p ? "50%" : p,
            y = s.originY,
            g = void 0 === y ? "50%" : y,
            x = s.originZ,
            b = void 0 === x ? 0 : x;
          i.transformOrigin = "".concat(m, " ").concat(g, " ").concat(b);
        }
      }
      function Mr(t, e, n) {
        return "string" === typeof t ? t : Q.transform(e + n * t);
      }
      var Vr = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Dr = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Rr = [
        "attrX",
        "attrY",
        "attrScale",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Lr(t, e, n, r, i) {
        var o = e.attrX,
          a = e.attrY,
          s = e.attrScale,
          u = e.originX,
          l = e.originY,
          c = e.pathLength,
          f = e.pathSpacing,
          d = void 0 === f ? 1 : f,
          v = e.pathOffset,
          h = void 0 === v ? 0 : v;
        if ((Zr(t, (0, Ht.Z)(e, Rr), n, i), r))
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        else {
          (t.attrs = t.style), (t.style = {});
          var p = t.attrs,
            m = t.style,
            y = t.dimensions;
          p.transform && (y && (m.transform = p.transform), delete p.transform),
            y &&
              (void 0 !== u || void 0 !== l || m.transform) &&
              (m.transformOrigin = (function (t, e, n) {
                var r = Mr(e, t.x, t.width),
                  i = Mr(n, t.y, t.height);
                return "".concat(r, " ").concat(i);
              })(y, void 0 !== u ? u : 0.5, void 0 !== l ? l : 0.5)),
            void 0 !== o && (p.x = o),
            void 0 !== a && (p.y = a),
            void 0 !== s && (p.scale = s),
            void 0 !== c &&
              (function (t, e) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                t.pathLength = 1;
                var o = i ? Vr : Dr;
                t[o.offset] = Q.transform(-r);
                var a = Q.transform(e),
                  s = Q.transform(n);
                t[o.array] = "".concat(a, " ").concat(s);
              })(p, c, d, h, !1);
        }
      }
      var Or = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function jr(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      function Br(t, e, n, r) {
        for (var i in (jr(t, e, void 0, r), e.attrs))
          t.setAttribute(Or.has(i) ? i : Gt(i), e.attrs[i]);
      }
      var Fr = function (t) {
          return "string" === typeof t && "svg" === t.toLowerCase();
        },
        Ir = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n),
              ((t = e.apply(this, arguments)).isSVGTag = !1),
              t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (t, e) {
                  return t[e];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (t, e) {
                  if (Xt.has(e)) {
                    var n = ln(e);
                    return (n && n.default) || 0;
                  }
                  return (e = Or.has(e) ? e : Gt(e)), t.getAttribute(e);
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return or();
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (t, e) {
                  return Un(t, e);
                },
              },
              {
                key: "build",
                value: function (t, e, n, r) {
                  Lr(t, e, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (t, e, n, r) {
                  Br(t, e, 0, r);
                },
              },
              {
                key: "mount",
                value: function (t) {
                  (this.isSVGTag = Fr(t.tagName)),
                    (0, On.Z)((0, jn.Z)(n.prototype), "mount", this).call(
                      this,
                      t
                    );
                },
              },
            ]),
            n
          );
        })(Cr);
      function Nr(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function zr(t) {
        return void 0 === t || 1 === t;
      }
      function Ur(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !zr(e) || !zr(n) || !zr(r);
      }
      function Wr(t) {
        return Ur(t) || Hr(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function Hr(t) {
        return Yr(t.x) || Yr(t.y);
      }
      function Yr(t) {
        return t && "0%" !== t;
      }
      function Xr(t, e, n) {
        return n + e * (t - n);
      }
      function Gr(t, e, n, r, i) {
        return void 0 !== i && (t = Xr(t, i, r)), Xr(t, n, r) + e;
      }
      function qr(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = arguments.length > 4 ? arguments[4] : void 0;
        (t.min = Gr(t.min, e, n, r, i)), (t.max = Gr(t.max, e, n, r, i));
      }
      function Kr(t, e) {
        var n = e.x,
          r = e.y;
        qr(t.x, n.translate, n.scale, n.originPoint),
          qr(t.y, r.translate, r.scale, r.originPoint);
      }
      function $r(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function _r(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function Jr(t, e, n) {
        var r = (0, o.Z)(n, 3),
          i = r[0],
          a = r[1],
          s = r[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = ot(t.min, t.max, u);
        qr(t, e[i], e[a], l, e.scale);
      }
      var Qr = ["x", "scaleX", "originX"],
        ti = ["y", "scaleY", "originY"];
      function ei(t, e) {
        Jr(t.x, e, Qr), Jr(t.y, e, ti);
      }
      function ni(t, e) {
        return Nr(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var ri = (function (t) {
        (0, Bn.Z)(n, t);
        var e = (0, Fn.Z)(n);
        function n() {
          return (0, a.Z)(this, n), e.apply(this, arguments);
        }
        return (
          (0, s.Z)(n, [
            {
              key: "readValueFromInstance",
              value: function (t, e) {
                if (Xt.has(e)) {
                  var n = ln(e);
                  return (n && n.default) || 0;
                }
                var r,
                  i = ((r = t), window.getComputedStyle(r)),
                  o = (ht(e) ? i.getPropertyValue(e) : i[e]) || 0;
                return "string" === typeof o ? o.trim() : o;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (t, e) {
                return ni(t, e.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (t, e, n, r) {
                Zr(t, e, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (t, e) {
                return zn(t, e);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var t = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var e = this.props.children;
                mn(e) &&
                  (this.childSubscription = e.on("change", function (e) {
                    t.current && (t.current.textContent = "".concat(e));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (t, e, n, r) {
                jr(t, e, n, r);
              },
            },
          ]),
          n
        );
      })(Cr);
      function ii(t) {
        var e = {
            presenceContext: null,
            props: {},
            visualState: {
              renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {},
              },
              latestValues: {},
            },
          },
          n = Ln(t)
            ? new Ir(e, { enableHardwareAcceleration: !1 })
            : new ri(e, { enableHardwareAcceleration: !0 });
        n.mount(t), Nt.set(t, n);
      }
      function oi(t, e, n) {
        var r = mn(t) ? t : P(t);
        return r.start(pn("", r, e, n)), r.animation;
      }
      function ai(t, e, n, r) {
        var i;
        return "number" === typeof e
          ? e
          : e.startsWith("-") || e.startsWith("+")
          ? Math.max(0, t + parseFloat(e))
          : "<" === e
          ? n
          : null !== (i = r.get(e)) && void 0 !== i
          ? i
          : t;
      }
      var si = function (t, e, n) {
        var r = e - t;
        return ((((n - t) % r) + r) % r) + t;
      };
      function ui(t, e) {
        return ce(t) ? t[si(0, t.length, e)] : t;
      }
      function li(t, e, n, r, i, o) {
        !(function (t, e, n) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.at > e && i.at < n && (l(t, i), r--);
          }
        })(t, i, o);
        for (var a = 0; a < e.length; a++)
          t.push({ value: e[a], at: ot(i, o, r[a]), easing: ui(n, a) });
      }
      function ci(t, e) {
        return t.at === e.at
          ? null === t.value
            ? 1
            : null === e.value
            ? -1
            : 0
          : t.at - e.at;
      }
      var fi = ["defaultTransition"],
        di = ["delay", "times", "type"],
        vi = "easeInOut";
      function hi(t) {
        for (
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.defaultTransition,
            r = void 0 === n ? {} : n,
            i = (0, Ht.Z)(e, fi),
            a = arguments.length > 2 ? arguments[2] : void 0,
            s = r.duration || 0.3,
            u = new Map(),
            l = new Map(),
            c = {},
            f = new Map(),
            d = 0,
            v = 0,
            h = 0,
            p = function () {
              var e = t[m];
              if ("string" === typeof e) return f.set(e, v), "continue";
              if (!Array.isArray(e))
                return f.set(e.name, ai(v, e.at, d, f)), "continue";
              var n = (0, o.Z)(e, 3),
                i = n[0],
                u = n[1],
                p = n[2],
                y = void 0 === p ? {} : p;
              void 0 !== y.at && (v = ai(v, y.at, d, f));
              var g = 0,
                x = function (t, e, n) {
                  var i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : 0,
                    a = (function (t) {
                      return Array.isArray(t) ? t : [t];
                    })(t),
                    u = e.delay,
                    l = void 0 === u ? 0 : u,
                    c = e.times,
                    f = void 0 === c ? Pe(a) : c,
                    d = e.type,
                    p = void 0 === d ? "keyframes" : d,
                    m = (0, Ht.Z)(e, di),
                    y = e.ease,
                    x = void 0 === y ? r.ease || "easeOut" : y,
                    b = e.duration,
                    w = "function" === typeof l ? l(i, o) : l,
                    P = a.length;
                  if (P <= 2 && "spring" === p) {
                    var k = 100;
                    if (2 === P && xi(a)) {
                      var E = a[1] - a[0];
                      k = Math.abs(E);
                    }
                    var C = (0, V.Z)({}, m);
                    void 0 !== b && (C.duration = Kt(b));
                    var S = (function (t) {
                      var e =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 100,
                        n = Fe((0, V.Z)({ keyframes: [0, e] }, t)),
                        r = Math.min(Ue(n), ze);
                      return {
                        type: "keyframes",
                        ease: function (t) {
                          return n.next(r * t).value / e;
                        },
                        duration: $t(r),
                      };
                    })(C, k);
                    (x = S.ease), (b = S.duration);
                  }
                  (null !== b && void 0 !== b) || (b = s);
                  var T = v + w,
                    A = T + b;
                  1 === f.length && 0 === f[0] && (f[1] = 1);
                  var Z = f.length - a.length;
                  Z > 0 && we(f, Z),
                    1 === a.length && a.unshift(null),
                    li(n, a, x, f, T, A),
                    (g = Math.max(w + b, g)),
                    (h = Math.max(A, h));
                };
              if (mn(i)) {
                x(u, y, mi("default", pi(i, l)));
              } else {
                for (var b = It(i, a, c), w = b.length, P = 0; P < w; P++) {
                  var k = pi(b[P], l);
                  for (var E in u) x(u[E], yi(y, E), mi(E, k), P, w);
                }
                (d = v), (v += g);
              }
            },
            m = 0;
          m < t.length;
          m++
        )
          p();
        return (
          l.forEach(function (t, e) {
            for (var n in t) {
              var o = t[n];
              o.sort(ci);
              for (var a = [], s = [], l = [], c = 0; c < o.length; c++) {
                var f = o[c],
                  d = f.at,
                  v = f.value,
                  p = f.easing;
                a.push(v), s.push(Mt(0, h, d)), l.push(p || "easeOut");
              }
              0 !== s[0] && (s.unshift(0), a.unshift(a[0]), l.unshift(vi)),
                1 !== s[s.length - 1] && (s.push(1), a.push(null)),
                u.has(e) || u.set(e, { keyframes: {}, transition: {} });
              var m = u.get(e);
              (m.keyframes[n] = a),
                (m.transition[n] = (0, V.Z)(
                  (0, V.Z)({}, r),
                  {},
                  { duration: h, ease: l, times: s },
                  i
                ));
            }
          }),
          u
        );
      }
      function pi(t, e) {
        return !e.has(t) && e.set(t, {}), e.get(t);
      }
      function mi(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      function yi(t, e) {
        return t[e] ? (0, V.Z)((0, V.Z)({}, t), t[e]) : (0, V.Z)({}, t);
      }
      var gi = function (t) {
          return "number" === typeof t;
        },
        xi = function (t) {
          return t.every(gi);
        };
      function bi(t, e, n, r) {
        var i = It(t, r),
          o = i.length;
        L(Boolean(o), "No valid element provided.");
        for (var a = [], s = 0; s < o; s++) {
          var u = i[s];
          Nt.has(u) || ii(u);
          var l = Nt.get(u),
            c = (0, V.Z)({}, n);
          "function" === typeof c.delay && (c.delay = c.delay(s, o)),
            a.push.apply(
              a,
              (0, D.Z)(
                Rn(l, (0, V.Z)((0, V.Z)({}, e), {}, { transition: c }), {})
              )
            );
        }
        return new Wt(a);
      }
      var wi,
        Pi = function (t, e, n) {
          var r, i;
          return (
            (i = t),
            (r =
              Array.isArray(i) && Array.isArray(i[0])
                ? (function (t, e, n) {
                    var r = [];
                    return (
                      hi(t, e, n).forEach(function (t, e) {
                        var n,
                          i = t.keyframes,
                          o = t.transition;
                        (n = mn(e) ? oi(e, i.default, o.default) : bi(e, i, o)),
                          r.push(n);
                      }),
                      new Wt(r)
                    );
                  })(t, e, wi)
                : (function (t) {
                    return "object" === typeof t && !Array.isArray(t);
                  })(e)
                ? bi(t, e, n, wi)
                : oi(t, e, n)),
            wi && wi.animations.push(r),
            r
          );
        },
        ki = (0, r.createContext)({}),
        Ei = (0, r.createContext)(null),
        Ci = (0, r.createContext)({ strict: !1 });
      function Si(t) {
        var e = (function (t, e) {
            if (fr(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || ur(n) ? n : void 0,
                animate: ur(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, r.useContext)(ki)),
          n = e.initial,
          i = e.animate;
        return (0, r.useMemo)(
          function () {
            return { initial: n, animate: i };
          },
          [Ti(n), Ti(i)]
        );
      }
      function Ti(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var Ai = (0, r.createContext)({}),
        Zi = (0, r.createContext)({}),
        Mi = Symbol.for("motionComponentSymbol");
      function Vi(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          i = t.useRender,
          o = t.useVisualState,
          a = t.Component;
        e &&
          (function (t) {
            for (var e in t) hr[e] = (0, V.Z)((0, V.Z)({}, hr[e]), t[e]);
          })(e);
        var s = (0, r.forwardRef)(function (t, s) {
          var u,
            l = (0, V.Z)(
              (0, V.Z)((0, V.Z)({}, (0, r.useContext)(k)), t),
              {},
              { layoutId: Di(t) }
            ),
            c = l.isStatic,
            f = Si(t),
            d = o(t, c);
          if (!c && S) {
            f.visualElement = (function (t, e, n, i) {
              var o = (0, r.useContext)(ki).visualElement,
                a = (0, r.useContext)(Ci),
                s = (0, r.useContext)(Ei),
                u = (0, r.useContext)(k).reducedMotion,
                l = (0, r.useRef)();
              (i = i || a.renderer),
                !l.current &&
                  i &&
                  (l.current = i(t, {
                    visualState: e,
                    parent: o,
                    props: n,
                    presenceContext: s,
                    blockInitialAnimation: !!s && !1 === s.initial,
                    reducedMotionConfig: u,
                  }));
              var c = l.current;
              (0, r.useInsertionEffect)(function () {
                c && c.update(n, s);
              });
              var f = (0, r.useRef)(Boolean(n[qt]));
              return (
                Ot(function () {
                  c &&
                    (c.render(),
                    f.current &&
                      c.animationState &&
                      c.animationState.animateChanges());
                }),
                (0, r.useEffect)(function () {
                  c &&
                    (c.updateFeatures(),
                    !f.current &&
                      c.animationState &&
                      c.animationState.animateChanges(),
                    f.current &&
                      ((window.HandoffAppearAnimations = !1),
                      (f.current = !1)));
                }),
                c
              );
            })(a, d, l, n);
            var v = (0, r.useContext)(Zi),
              h = (0, r.useContext)(Ci).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(l, h, e, v));
          }
          return r.createElement(
            ki.Provider,
            { value: f },
            u && f.visualElement
              ? r.createElement(
                  u,
                  (0, V.Z)({ visualElement: f.visualElement }, l)
                )
              : null,
            i(
              a,
              t,
              (function (t, e, n) {
                return (0, r.useCallback)(
                  function (r) {
                    r && t.mount && t.mount(r),
                      e && (r ? e.mount(r) : e.unmount()),
                      n &&
                        ("function" === typeof n
                          ? n(r)
                          : ar(n) && (n.current = r));
                  },
                  [e]
                );
              })(d, f.visualElement, s),
              d,
              c,
              f.visualElement
            )
          );
        });
        return (s[Mi] = a), s;
      }
      function Di(t) {
        var e = t.layoutId,
          n = (0, r.useContext)(Ai).id;
        return n && void 0 !== e ? n + "-" + e : e;
      }
      function Ri(t) {
        function e(e) {
          return Vi(
            t(
              e,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var Li = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Oi(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(Li.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      var ji = function () {
        return { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      };
      function Bi(t, e, n) {
        for (var r in e) mn(e[r]) || Nn(r, n) || (t[r] = e[r]);
      }
      function Fi(t, e, n) {
        var i = {};
        return (
          Bi(i, t.style || {}, t),
          Object.assign(
            i,
            (function (t, e, n) {
              var i = t.transformTemplate;
              return (0, r.useMemo)(
                function () {
                  var t = ji();
                  return (
                    Zr(t, e, { enableHardwareAcceleration: !n }, i),
                    Object.assign({}, t.vars, t.style)
                  );
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues ? t.transformValues(i) : i
        );
      }
      function Ii(t, e, n) {
        var r = {},
          i = Fi(t, e, n);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (r.tabIndex = 0),
          (r.style = i),
          r
        );
      }
      var Ni = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function zi(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          Ni.has(t)
        );
      }
      var Ui,
        Wi = function (t) {
          return !zi(t);
        };
      try {
        (Ui = require("@emotion/is-prop-valid").default) &&
          (Wi = function (t) {
            return t.startsWith("on") ? !zi(t) : Ui(t);
          });
      } catch (Ru) {}
      var Hi = function () {
        return (0, V.Z)((0, V.Z)({}, ji()), {}, { attrs: {} });
      };
      function Yi(t, e, n, i) {
        var o = (0, r.useMemo)(
          function () {
            var n = Hi();
            return (
              Lr(
                n,
                e,
                { enableHardwareAcceleration: !1 },
                Fr(i),
                t.transformTemplate
              ),
              (0, V.Z)(
                (0, V.Z)({}, n.attrs),
                {},
                { style: (0, V.Z)({}, n.style) }
              )
            );
          },
          [e]
        );
        if (t.style) {
          var a = {};
          Bi(a, t.style, t), (o.style = (0, V.Z)((0, V.Z)({}, a), o.style));
        }
        return o;
      }
      function Xi() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (e, n, i, o, a) {
          var s = o.latestValues,
            u = (Oi(e) ? Yi : Ii)(n, s, a, e),
            l = (function (t, e, n) {
              var r = {};
              for (var i in t)
                ("values" === i && "object" === typeof t.values) ||
                  ((Wi(i) ||
                    (!0 === n && zi(i)) ||
                    (!e && !zi(i)) ||
                    (t.draggable && i.startsWith("onDrag"))) &&
                    (r[i] = t[i]));
              return r;
            })(n, "string" === typeof e, t),
            c = (0, V.Z)((0, V.Z)((0, V.Z)({}, l), u), {}, { ref: i }),
            f = n.children,
            d = (0, r.useMemo)(
              function () {
                return mn(f) ? f.get() : f;
              },
              [f]
            );
          return (0, r.createElement)(
            e,
            (0, V.Z)((0, V.Z)({}, c), {}, { children: d })
          );
        };
      }
      function Gi(t) {
        var e = mn(t) ? t.get() : t;
        return bn(e) ? e.toValue() : e;
      }
      var qi = ["transitionEnd", "transition"];
      var Ki = function (t) {
        return function (e, n) {
          var i = (0, r.useContext)(ki),
            o = (0, r.useContext)(Ei),
            a = function () {
              return (function (t, e, n, r) {
                var i = t.scrapeMotionValuesFromProps,
                  o = t.createRenderState,
                  a = t.onMount,
                  s = { latestValues: $i(e, n, r, i), renderState: o() };
                return (
                  a &&
                    (s.mount = function (t) {
                      return a(e, t, s);
                    }),
                  s
                );
              })(t, e, i, o);
            };
          return n ? a() : E(a);
        };
      };
      function $i(t, e, n, r) {
        var i = {},
          o = r(t, {});
        for (var a in o) i[a] = Gi(o[a]);
        var s = t.initial,
          u = t.animate,
          l = fr(t),
          c = dr(t);
        e &&
          c &&
          !l &&
          !1 !== t.inherit &&
          (void 0 === s && (s = e.initial), void 0 === u && (u = e.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === s) ? u : s;
        d &&
          "boolean" !== typeof d &&
          !sr(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (e) {
            var n = Sn(t, e);
            if (n) {
              var r = n.transitionEnd,
                o = (n.transition, (0, Ht.Z)(n, qi));
              for (var a in o) {
                var s = o[a];
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                null !== s && (i[a] = s);
              }
              for (var u in r) i[u] = r[u];
            }
          });
        return i;
      }
      var _i = {
          useVisualState: Ki({
            scrapeMotionValuesFromProps: Un,
            createRenderState: Hi,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              m.read(function () {
                try {
                  r.dimensions =
                    "function" === typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                m.render(function () {
                  Lr(
                    r,
                    i,
                    { enableHardwareAcceleration: !1 },
                    Fr(e.tagName),
                    t.transformTemplate
                  ),
                    Br(e, r);
                });
            },
          }),
        },
        Ji = {
          useVisualState: Ki({
            scrapeMotionValuesFromProps: zn,
            createRenderState: ji,
          }),
        };
      function Qi(t, e, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n);
          }
        );
      }
      var to = function (t) {
        return "mouse" === t.pointerType
          ? "number" !== typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      };
      function eo(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      var no = function (t) {
        return function (e) {
          return to(e) && t(e, eo(e));
        };
      };
      function ro(t, e, n, r) {
        return Qi(t, e, no(n), r);
      }
      function io(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var oo = io("dragHorizontal"),
        ao = io("dragVertical");
      function so(t) {
        var e = !1;
        if ("y" === t) e = ao();
        else if ("x" === t) e = oo();
        else {
          var n = oo(),
            r = ao();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function uo() {
        var t = so(!0);
        return !t || (t(), !1);
      }
      var lo = (function () {
        function t(e) {
          (0, a.Z)(this, t), (this.isMounted = !1), (this.node = e);
        }
        return (0, s.Z)(t, [{ key: "update", value: function () {} }]), t;
      })();
      function co(t, e) {
        var n = "pointer" + (e ? "enter" : "leave"),
          r = "onHover" + (e ? "Start" : "End");
        return ro(
          t.current,
          n,
          function (n, i) {
            if ("touch" !== n.type && !uo()) {
              var o = t.getProps();
              t.animationState &&
                o.whileHover &&
                t.animationState.setActive("whileHover", e),
                o[r] &&
                  m.update(function () {
                    return o[r](n, i);
                  });
            }
          },
          { passive: !t.getProps()[r] }
        );
      }
      var fo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            return (0, a.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, s.Z)(n, [
              {
                key: "mount",
                value: function () {
                  this.unmount = dt(co(this.node, !0), co(this.node, !1));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(lo),
        vo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n),
              ((t = e.apply(this, arguments)).isActive = !1),
              t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "onFocus",
                value: function () {
                  var t = !1;
                  try {
                    t = this.node.current.matches(":focus-visible");
                  } catch (e) {
                    t = !0;
                  }
                  t &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                },
              },
              {
                key: "onBlur",
                value: function () {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                },
              },
              {
                key: "mount",
                value: function () {
                  var t = this;
                  this.unmount = dt(
                    Qi(this.node.current, "focus", function () {
                      return t.onFocus();
                    }),
                    Qi(this.node.current, "blur", function () {
                      return t.onBlur();
                    })
                  );
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(lo),
        ho = function t(e, n) {
          return !!n && (e === n || t(e, n.parentElement));
        };
      function po(t, e) {
        if (e) {
          var n = new PointerEvent("pointer" + t);
          e(n, eo(n));
        }
      }
      var mo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n),
              ((t = e.apply(this, arguments)).removeStartListeners = d),
              (t.removeEndListeners = d),
              (t.removeAccessibleListeners = d),
              (t.startPointerPress = function (e, n) {
                if ((t.removeEndListeners(), !t.isPressing)) {
                  var r = t.node.getProps(),
                    i = ro(
                      window,
                      "pointerup",
                      function (e, n) {
                        if (t.checkPressEnd()) {
                          var r = t.node.getProps(),
                            i = r.onTap,
                            o = r.onTapCancel;
                          m.update(function () {
                            ho(t.node.current, e.target)
                              ? i && i(e, n)
                              : o && o(e, n);
                          });
                        }
                      },
                      { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    o = ro(
                      window,
                      "pointercancel",
                      function (e, n) {
                        return t.cancelPress(e, n);
                      },
                      { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                  (t.removeEndListeners = dt(i, o)), t.startPress(e, n);
                }
              }),
              (t.startAccessiblePress = function () {
                var e = Qi(t.node.current, "keydown", function (e) {
                    if ("Enter" === e.key && !t.isPressing) {
                      t.removeEndListeners(),
                        (t.removeEndListeners = Qi(
                          t.node.current,
                          "keyup",
                          function (e) {
                            "Enter" === e.key &&
                              t.checkPressEnd() &&
                              po("up", function (e, n) {
                                var r = t.node.getProps().onTap;
                                r &&
                                  m.update(function () {
                                    return r(e, n);
                                  });
                              });
                          }
                        )),
                        po("down", function (e, n) {
                          t.startPress(e, n);
                        });
                    }
                  }),
                  n = Qi(t.node.current, "blur", function () {
                    t.isPressing &&
                      po("cancel", function (e, n) {
                        return t.cancelPress(e, n);
                      });
                  });
                t.removeAccessibleListeners = dt(e, n);
              }),
              t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "startPress",
                value: function (t, e) {
                  this.isPressing = !0;
                  var n = this.node.getProps(),
                    r = n.onTapStart;
                  n.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !0),
                    r &&
                      m.update(function () {
                        return r(t, e);
                      });
                },
              },
              {
                key: "checkPressEnd",
                value: function () {
                  return (
                    this.removeEndListeners(),
                    (this.isPressing = !1),
                    this.node.getProps().whileTap &&
                      this.node.animationState &&
                      this.node.animationState.setActive("whileTap", !1),
                    !uo()
                  );
                },
              },
              {
                key: "cancelPress",
                value: function (t, e) {
                  if (this.checkPressEnd()) {
                    var n = this.node.getProps().onTapCancel;
                    n &&
                      m.update(function () {
                        return n(t, e);
                      });
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var t = this.node.getProps(),
                    e = ro(
                      this.node.current,
                      "pointerdown",
                      this.startPointerPress,
                      { passive: !(t.onTapStart || t.onPointerStart) }
                    ),
                    n = Qi(
                      this.node.current,
                      "focus",
                      this.startAccessiblePress
                    );
                  this.removeStartListeners = dt(e, n);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeStartListeners(),
                    this.removeEndListeners(),
                    this.removeAccessibleListeners();
                },
              },
            ]),
            n
          );
        })(lo),
        yo = ["root"],
        go = new WeakMap(),
        xo = new WeakMap(),
        bo = function (t) {
          var e = go.get(t.target);
          e && e(t);
        },
        wo = function (t) {
          t.forEach(bo);
        };
      function Po(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = (0, Ht.Z)(t, yo),
            r = e || document;
          xo.has(r) || xo.set(r, {});
          var i = xo.get(r),
            o = JSON.stringify(n);
          return (
            i[o] ||
              (i[o] = new IntersectionObserver(wo, (0, V.Z)({ root: e }, n))),
            i[o]
          );
        })(e);
        return (
          go.set(t, n),
          r.observe(t),
          function () {
            go.delete(t), r.unobserve(t);
          }
        );
      }
      var ko = { some: 0, all: 1 },
        Eo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n),
              ((t = e.apply(this, arguments)).hasEnteredView = !1),
              (t.isInView = !1),
              t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "startObserver",
                value: function () {
                  var t = this;
                  this.unmount();
                  var e = this.node.getProps().viewport,
                    n = void 0 === e ? {} : e,
                    r = n.root,
                    i = n.margin,
                    o = n.amount,
                    a = void 0 === o ? "some" : o,
                    s = n.once,
                    u = {
                      root: r ? r.current : void 0,
                      rootMargin: i,
                      threshold: "number" === typeof a ? a : ko[a],
                    };
                  return Po(this.node.current, u, function (e) {
                    var n = e.isIntersecting;
                    if (
                      t.isInView !== n &&
                      ((t.isInView = n), !s || n || !t.hasEnteredView)
                    ) {
                      n && (t.hasEnteredView = !0),
                        t.node.animationState &&
                          t.node.animationState.setActive("whileInView", n);
                      var r = t.node.getProps(),
                        i = r.onViewportEnter,
                        o = r.onViewportLeave,
                        a = n ? i : o;
                      a && a(e);
                    }
                  });
                },
              },
              {
                key: "mount",
                value: function () {
                  this.startObserver();
                },
              },
              {
                key: "update",
                value: function () {
                  if ("undefined" !== typeof IntersectionObserver) {
                    var t = this.node,
                      e = t.props,
                      n = t.prevProps,
                      r = ["amount", "margin", "root"].some(
                        (function (t) {
                          var e = t.viewport,
                            n = void 0 === e ? {} : e,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            i = r.viewport,
                            o = void 0 === i ? {} : i;
                          return function (t) {
                            return n[t] !== o[t];
                          };
                        })(e, n)
                      );
                    r && this.startObserver();
                  }
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(lo);
      var Co = {
        inView: { Feature: Eo },
        tap: { Feature: mo },
        focus: { Feature: vo },
        hover: { Feature: fo },
      };
      function So(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function To(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Tn(t, e, n.custom),
          i = (r || {}).transition,
          a = void 0 === i ? t.getDefaultTransition() || {} : i;
        n.transitionOverride && (a = n.transitionOverride);
        var s = r
            ? function () {
                return Promise.all(Rn(t, r, n));
              }
            : function () {
                return Promise.resolve();
              },
          u =
            t.variantChildren && t.variantChildren.size
              ? function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    i = a,
                    o = i.delayChildren,
                    s = void 0 === o ? 0 : o,
                    u = i.staggerChildren,
                    l = i.staggerDirection;
                  return (function (t, e) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      i =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      o = arguments.length > 5 ? arguments[5] : void 0,
                      a = [],
                      s = (t.variantChildren.size - 1) * r,
                      u =
                        1 === i
                          ? function () {
                              return (
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) * r
                              );
                            }
                          : function () {
                              return (
                                s -
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) *
                                  r
                              );
                            };
                    return (
                      Array.from(t.variantChildren)
                        .sort(Ao)
                        .forEach(function (t, r) {
                          t.notify("AnimationStart", e),
                            a.push(
                              To(
                                t,
                                e,
                                (0, V.Z)(
                                  (0, V.Z)({}, o),
                                  {},
                                  { delay: n + u(r) }
                                )
                              ).then(function () {
                                return t.notify("AnimationComplete", e);
                              })
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, s + r, u, l, n);
                }
              : function () {
                  return Promise.resolve();
                },
          l = a.when;
        if (l) {
          var c = "beforeChildren" === l ? [s, u] : [u, s],
            f = (0, o.Z)(c, 2),
            d = f[0],
            v = f[1];
          return d().then(function () {
            return v();
          });
        }
        return Promise.all([s(), u(n.delay)]);
      }
      function Ao(t, e) {
        return t.sortNodePosition(e);
      }
      var Zo = ["transition", "transitionEnd"],
        Mo = (0, D.Z)(lr).reverse(),
        Vo = lr.length;
      function Do(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((t.notify("AnimationStart", e), Array.isArray(e))) {
                  var i = e.map(function (e) {
                    return To(t, e, r);
                  });
                  n = Promise.all(i);
                } else if ("string" === typeof e) n = To(t, e, r);
                else {
                  var o = "function" === typeof e ? Tn(t, e, r.custom) : e;
                  n = Promise.all(Rn(t, o, r));
                }
                return n.then(function () {
                  return t.notify("AnimationComplete", e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function Ro(t) {
        var e = Do(t),
          n = {
            animate: Lo(!0),
            whileInView: Lo(),
            whileHover: Lo(),
            whileTap: Lo(),
            whileDrag: Lo(),
            whileFocus: Lo(),
            exit: Lo(),
          },
          r = !0,
          i = function (e, n) {
            var r = Tn(t, n);
            if (r) {
              r.transition;
              var i = r.transitionEnd,
                o = (0, Ht.Z)(r, Zo);
              e = (0, V.Z)((0, V.Z)((0, V.Z)({}, e), o), i);
            }
            return e;
          };
        function o(o, a) {
          for (
            var s = t.getProps(),
              u = t.getVariantContext(!0) || {},
              l = [],
              c = new Set(),
              f = {},
              d = 1 / 0,
              v = function () {
                var e = Mo[h],
                  v = n[e],
                  p = void 0 !== s[e] ? s[e] : u[e],
                  m = ur(p),
                  y = e === a ? v.isActive : null;
                !1 === y && (d = h);
                var g = p === u[e] && p !== s[e] && m;
                if (
                  (g && r && t.manuallyAnimateOnMount && (g = !1),
                  (v.protectedKeys = (0, V.Z)({}, f)),
                  (!v.isActive && null === y) ||
                    (!p && !v.prevProp) ||
                    sr(p) ||
                    "boolean" === typeof p)
                )
                  return "continue";
                var x = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (Array.isArray(e)) return !So(e, t);
                    return !1;
                  })(v.prevProp, p),
                  b = x || (e === a && v.isActive && !g && m) || (h > d && m),
                  w = Array.isArray(p) ? p : [p],
                  P = w.reduce(i, {});
                !1 === y && (P = {});
                var k = v.prevResolvedValues,
                  E = void 0 === k ? {} : k,
                  C = (0, V.Z)((0, V.Z)({}, E), P),
                  S = function (t) {
                    (b = !0), c.delete(t), (v.needsAnimating[t] = !0);
                  };
                for (var T in C) {
                  var A = P[T],
                    Z = E[T];
                  f.hasOwnProperty(T) ||
                    (A !== Z
                      ? xn(A) && xn(Z)
                        ? !So(A, Z) || x
                          ? S(T)
                          : (v.protectedKeys[T] = !0)
                        : void 0 !== A
                        ? S(T)
                        : c.add(T)
                      : void 0 !== A && c.has(T)
                      ? S(T)
                      : (v.protectedKeys[T] = !0));
                }
                (v.prevProp = p),
                  (v.prevResolvedValues = P),
                  v.isActive && (f = (0, V.Z)((0, V.Z)({}, f), P)),
                  r && t.blockInitialAnimation && (b = !1),
                  b &&
                    !g &&
                    l.push.apply(
                      l,
                      (0, D.Z)(
                        w.map(function (t) {
                          return {
                            animation: t,
                            options: (0, V.Z)({ type: e }, o),
                          };
                        })
                      )
                    );
              },
              h = 0;
            h < Vo;
            h++
          )
            v();
          if (c.size) {
            var p = {};
            c.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (p[e] = n);
            }),
              l.push({ animation: p });
          }
          var m = Boolean(l.length);
          return (
            r && !1 === s.initial && !t.manuallyAnimateOnMount && (m = !1),
            (r = !1),
            m ? e(l) : Promise.resolve()
          );
        }
        return {
          animateChanges: o,
          setActive: function (e, r, i) {
            var a;
            if (n[e].isActive === r) return Promise.resolve();
            null === (a = t.variantChildren) ||
              void 0 === a ||
              a.forEach(function (t) {
                var n;
                return null === (n = t.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(e, r);
              }),
              (n[e].isActive = r);
            var s = o(i, e);
            for (var u in n) n[u].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Lo() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Oo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n(t) {
            var r;
            return (
              (0, a.Z)(this, n),
              (r = e.call(this, t)),
              t.animationState || (t.animationState = Ro(t)),
              r
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "updateAnimationControlsSubscription",
                value: function () {
                  var t = this.node.getProps().animate;
                  this.unmount(),
                    sr(t) && (this.unmount = t.subscribe(this.node));
                },
              },
              {
                key: "mount",
                value: function () {
                  this.updateAnimationControlsSubscription();
                },
              },
              {
                key: "update",
                value: function () {
                  this.node.getProps().animate !==
                    (this.node.prevProps || {}).animate &&
                    this.updateAnimationControlsSubscription();
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(lo),
        jo = 0,
        Bo = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n), ((t = e.apply(this, arguments)).id = jo++), t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "update",
                value: function () {
                  var t = this;
                  if (this.node.presenceContext) {
                    var e = this.node.presenceContext,
                      n = e.isPresent,
                      r = e.onExitComplete,
                      i = e.custom,
                      o = (this.node.prevPresenceContext || {}).isPresent;
                    if (this.node.animationState && n !== o) {
                      var a = this.node.animationState.setActive("exit", !n, {
                        custom:
                          null !== i && void 0 !== i
                            ? i
                            : this.node.getProps().custom,
                      });
                      r &&
                        !n &&
                        a.then(function () {
                          return r(t.id);
                        });
                    }
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var t = (this.node.presenceContext || {}).register;
                  t && (this.unmount = t(this.id));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(lo),
        Fo = { animation: { Feature: Oo }, exit: { Feature: Bo } },
        Io = function (t, e) {
          return Math.abs(t - e);
        };
      var No = (function () {
        function t(e, n) {
          var r = this,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = i.transformPagePoint,
            s = i.contextWindow;
          if (
            ((0, a.Z)(this, t),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var t = Wo(r.lastMoveEventInfo, r.history),
                  e = null !== r.startEvent,
                  n =
                    (function (t, e) {
                      var n = Io(t.x, e.x),
                        r = Io(t.y, e.y);
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                    })(t.offset, { x: 0, y: 0 }) >= 3;
                if (e || n) {
                  var i = t.point,
                    o = g.timestamp;
                  r.history.push(
                    (0, V.Z)((0, V.Z)({}, i), {}, { timestamp: o })
                  );
                  var a = r.handlers,
                    s = a.onStart,
                    u = a.onMove;
                  e ||
                    (s && s(r.lastMoveEvent, t),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, t);
                }
              }
            }),
            (this.handlePointerMove = function (t, e) {
              (r.lastMoveEvent = t),
                (r.lastMoveEventInfo = zo(e, r.transformPagePoint)),
                m.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (t, e) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  i = n.onEnd,
                  o = n.onSessionEnd,
                  a = Wo(
                    "pointercancel" === t.type
                      ? r.lastMoveEventInfo
                      : zo(e, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && i && i(t, a), o && o(t, a);
              }
            }),
            to(e))
          ) {
            (this.handlers = n),
              (this.transformPagePoint = o),
              (this.contextWindow = s || window);
            var u = zo(eo(e), this.transformPagePoint),
              l = u.point,
              c = g.timestamp;
            this.history = [(0, V.Z)((0, V.Z)({}, l), {}, { timestamp: c })];
            var f = n.onSessionStart;
            f && f(e, Wo(u, this.history)),
              (this.removeListeners = dt(
                ro(this.contextWindow, "pointermove", this.handlePointerMove),
                ro(this.contextWindow, "pointerup", this.handlePointerUp),
                ro(this.contextWindow, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (0, s.Z)(t, [
            {
              key: "updateHandlers",
              value: function (t) {
                this.handlers = t;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  y(this.updatePoint);
              },
            },
          ]),
          t
        );
      })();
      function zo(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function Uo(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Wo(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: Uo(n, Yo(e)),
          offset: Uo(n, Ho(e)),
          velocity: Xo(e, 0.1),
        };
      }
      function Ho(t) {
        return t[0];
      }
      function Yo(t) {
        return t[t.length - 1];
      }
      function Xo(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = Yo(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Kt(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = $t(i.timestamp - r.timestamp);
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function Go(t) {
        return t.max - t.min;
      }
      function qo(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(t - e) <= n;
      }
      function Ko(t, e, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (t.origin = r),
          (t.originPoint = ot(e.min, e.max, t.origin)),
          (t.scale = Go(n) / Go(e)),
          (qo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = ot(n.min, n.max, t.origin) - t.originPoint),
          (qo(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function $o(t, e, n, r) {
        Ko(t.x, e.x, n.x, r ? r.originX : void 0),
          Ko(t.y, e.y, n.y, r ? r.originY : void 0);
      }
      function _o(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Go(e));
      }
      function Jo(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + Go(e));
      }
      function Qo(t, e, n) {
        Jo(t.x, e.x, n.x), Jo(t.y, e.y, n.y);
      }
      function ta(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function ea(t, e) {
        var n = e.min - t.min,
          r = e.max - t.max;
        if (e.max - e.min < t.max - t.min) {
          var i = [r, n];
          (n = i[0]), (r = i[1]);
        }
        return { min: n, max: r };
      }
      var na = 0.35;
      function ra(t, e, n) {
        return { min: ia(t, e), max: ia(t, n) };
      }
      function ia(t, e) {
        return "number" === typeof t ? t : t[e] || 0;
      }
      function oa(t) {
        return [t("x"), t("y")];
      }
      var aa = function (t) {
          var e = t.current;
          return e ? e.ownerDocument.defaultView : null;
        },
        sa = new WeakMap(),
        ua = (function () {
          function t(e) {
            (0, a.Z)(this, t),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = or()),
              (this.visualElement = e);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "start",
                value: function (t) {
                  var e = this,
                    n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).snapToCursor,
                    r = void 0 !== n && n,
                    i = this.visualElement.presenceContext;
                  if (!i || !1 !== i.isPresent) {
                    this.panSession = new No(
                      t,
                      {
                        onSessionStart: function (t) {
                          e.stopAnimation(),
                            r && e.snapToCursor(eo(t, "page").point);
                        },
                        onStart: function (t, n) {
                          var r = e.getProps(),
                            i = r.drag,
                            o = r.dragPropagation,
                            a = r.onDragStart;
                          if (
                            !i ||
                            o ||
                            (e.openGlobalLock && e.openGlobalLock(),
                            (e.openGlobalLock = so(i)),
                            e.openGlobalLock)
                          ) {
                            (e.isDragging = !0),
                              (e.currentDirection = null),
                              e.resolveConstraints(),
                              e.visualElement.projection &&
                                ((e.visualElement.projection.isAnimationBlocked =
                                  !0),
                                (e.visualElement.projection.target = void 0)),
                              oa(function (t) {
                                var n = e.getAxisMotionValue(t).get() || 0;
                                if (J.test(n)) {
                                  var r = e.visualElement.projection;
                                  if (r && r.layout) {
                                    var i = r.layout.layoutBox[t];
                                    if (i) n = Go(i) * (parseFloat(n) / 100);
                                  }
                                }
                                e.originPoint[t] = n;
                              }),
                              a &&
                                m.update(
                                  function () {
                                    return a(t, n);
                                  },
                                  !1,
                                  !0
                                );
                            var s = e.visualElement.animationState;
                            s && s.setActive("whileDrag", !0);
                          }
                        },
                        onMove: function (t, n) {
                          var r = e.getProps(),
                            i = r.dragPropagation,
                            o = r.dragDirectionLock,
                            a = r.onDirectionLock,
                            s = r.onDrag;
                          if (i || e.openGlobalLock) {
                            var u = n.offset;
                            if (o && null === e.currentDirection)
                              return (
                                (e.currentDirection = (function (t) {
                                  var e =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 10,
                                    n = null;
                                  Math.abs(t.y) > e
                                    ? (n = "y")
                                    : Math.abs(t.x) > e && (n = "x");
                                  return n;
                                })(u)),
                                void (
                                  null !== e.currentDirection &&
                                  a &&
                                  a(e.currentDirection)
                                )
                              );
                            e.updateAxis("x", n.point, u),
                              e.updateAxis("y", n.point, u),
                              e.visualElement.render(),
                              s && s(t, n);
                          }
                        },
                        onSessionEnd: function (t, n) {
                          return e.stop(t, n);
                        },
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                        contextWindow: aa(this.visualElement),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (t, e) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = e.velocity;
                    this.startAnimation(r);
                    var i = this.getProps().onDragEnd;
                    i &&
                      m.update(function () {
                        return i(t, e);
                      });
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.isDragging = !1;
                  var t = this.visualElement,
                    e = t.projection,
                    n = t.animationState;
                  e && (e.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    n && n.setActive("whileDrag", !1);
                },
              },
              {
                key: "updateAxis",
                value: function (t, e, n) {
                  var r = this.getProps().drag;
                  if (n && la(t, r, this.currentDirection)) {
                    var i = this.getAxisMotionValue(t),
                      o = this.originPoint[t] + n[t];
                    this.constraints &&
                      this.constraints[t] &&
                      (o = (function (t, e, n) {
                        var r = e.min,
                          i = e.max;
                        return (
                          void 0 !== r && t < r
                            ? (t = n ? ot(r, t, n.min) : Math.max(t, r))
                            : void 0 !== i &&
                              t > i &&
                              (t = n ? ot(i, t, n.max) : Math.min(t, i)),
                          t
                        );
                      })(o, this.constraints[t], this.elastic[t])),
                      i.set(o);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var t,
                    e = this,
                    n = this.getProps(),
                    r = n.dragConstraints,
                    i = n.dragElastic,
                    o =
                      this.visualElement.projection &&
                      !this.visualElement.projection.layout
                        ? this.visualElement.projection.measure(!1)
                        : null === (t = this.visualElement.projection) ||
                          void 0 === t
                        ? void 0
                        : t.layout,
                    a = this.constraints;
                  r && ar(r)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!r || !o) &&
                        (function (t, e) {
                          var n = e.top,
                            r = e.left,
                            i = e.bottom,
                            o = e.right;
                          return { x: ta(t.x, r, o), y: ta(t.y, n, i) };
                        })(o.layoutBox, r)),
                    (this.elastic = (function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : na;
                      return (
                        !1 === t ? (t = 0) : !0 === t && (t = na),
                        { x: ra(t, "left", "right"), y: ra(t, "top", "bottom") }
                      );
                    })(i)),
                    a !== this.constraints &&
                      o &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      oa(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (t, e) {
                            var n = {};
                            return (
                              void 0 !== e.min && (n.min = e.min - t.min),
                              void 0 !== e.max && (n.max = e.max - t.min),
                              n
                            );
                          })(o.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var t = this.getProps(),
                    e = t.dragConstraints,
                    n = t.onMeasureDragConstraints;
                  if (!e || !ar(e)) return !1;
                  var r = e.current;
                  L(
                    null !== r,
                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                  );
                  var i = this.visualElement.projection;
                  if (!i || !i.layout) return !1;
                  var o = (function (t, e, n) {
                      var r = ni(t, n),
                        i = e.scroll;
                      return i && (_r(r.x, i.offset.x), _r(r.y, i.offset.y)), r;
                    })(r, i.root, this.visualElement.getTransformPagePoint()),
                    a = (function (t, e) {
                      return { x: ea(t.x, e.x), y: ea(t.y, e.y) };
                    })(i.layout.layoutBox, o);
                  if (n) {
                    var s = n(
                      (function (t) {
                        var e = t.x,
                          n = t.y;
                        return {
                          top: n.min,
                          right: e.max,
                          bottom: n.max,
                          left: e.min,
                        };
                      })(a)
                    );
                    (this.hasMutatedConstraints = !!s), s && (a = Nr(s));
                  }
                  return a;
                },
              },
              {
                key: "startAnimation",
                value: function (t) {
                  var e = this,
                    n = this.getProps(),
                    r = n.drag,
                    i = n.dragMomentum,
                    o = n.dragElastic,
                    a = n.dragTransition,
                    s = n.dragSnapToOrigin,
                    u = n.onDragTransitionEnd,
                    l = this.constraints || {},
                    c = oa(function (n) {
                      if (la(n, r, e.currentDirection)) {
                        var u = (l && l[n]) || {};
                        s && (u = { min: 0, max: 0 });
                        var c = o ? 200 : 1e6,
                          f = o ? 40 : 1e7,
                          d = (0, V.Z)(
                            (0, V.Z)(
                              {
                                type: "inertia",
                                velocity: i ? t[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              a
                            ),
                            u
                          );
                        return e.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(u);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (t, e) {
                  var n = this.getAxisMotionValue(t);
                  return n.start(pn(t, n, 0, e));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var t = this;
                  oa(function (e) {
                    return t.getAxisMotionValue(e).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (t) {
                  var e = "_drag" + t.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[e];
                  return (
                    r ||
                    this.visualElement.getValue(
                      t,
                      (n.initial ? n.initial[t] : void 0) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (t) {
                  var e = this;
                  oa(function (n) {
                    if (la(n, e.getProps().drag, e.currentDirection)) {
                      var r = e.visualElement.projection,
                        i = e.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var o = r.layout.layoutBox[n],
                          a = o.min,
                          s = o.max;
                        i.set(t[n] - ot(a, s, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var t = this;
                  if (this.visualElement.current) {
                    var e = this.getProps(),
                      n = e.drag,
                      r = e.dragConstraints,
                      i = this.visualElement.projection;
                    if (ar(r) && i && this.constraints) {
                      this.stopAnimation();
                      var o = { x: 0, y: 0 };
                      oa(function (e) {
                        var n = t.getAxisMotionValue(e);
                        if (n) {
                          var r = n.get();
                          o[e] = (function (t, e) {
                            var n = 0.5,
                              r = Go(t),
                              i = Go(e);
                            return (
                              i > r
                                ? (n = Mt(e.min, e.max - r, t.min))
                                : r > i && (n = Mt(t.min, t.max - i, e.min)),
                              N(0, 1, n)
                            );
                          })({ min: r, max: r }, t.constraints[e]);
                        }
                      });
                      var a = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = a
                        ? a({}, "")
                        : "none"),
                        i.root && i.root.updateScroll(),
                        i.updateLayout(),
                        this.resolveConstraints(),
                        oa(function (e) {
                          if (la(e, n, null)) {
                            var r = t.getAxisMotionValue(e),
                              i = t.constraints[e],
                              a = i.min,
                              s = i.max;
                            r.set(ot(a, s, o[e]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var t = this;
                  if (this.visualElement.current) {
                    sa.set(this.visualElement, this);
                    var e = ro(
                        this.visualElement.current,
                        "pointerdown",
                        function (e) {
                          var n = t.getProps(),
                            r = n.drag,
                            i = n.dragListener;
                          r && (void 0 === i || i) && t.start(e);
                        }
                      ),
                      n = function () {
                        ar(t.getProps().dragConstraints) &&
                          (t.constraints = t.resolveRefConstraints());
                      },
                      r = this.visualElement.projection,
                      i = r.addEventListener("measure", n);
                    r &&
                      !r.layout &&
                      (r.root && r.root.updateScroll(), r.updateLayout()),
                      n();
                    var o = Qi(window, "resize", function () {
                        return t.scalePositionWithinConstraints();
                      }),
                      a = r.addEventListener("didUpdate", function (e) {
                        var n = e.delta,
                          r = e.hasLayoutChanged;
                        t.isDragging &&
                          r &&
                          (oa(function (e) {
                            var r = t.getAxisMotionValue(e);
                            r &&
                              ((t.originPoint[e] += n[e].translate),
                              r.set(r.get() + n[e].translate));
                          }),
                          t.visualElement.render());
                      });
                    return function () {
                      o(), e(), i(), a && a();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var t = this.visualElement.getProps(),
                    e = t.drag,
                    n = void 0 !== e && e,
                    r = t.dragDirectionLock,
                    i = void 0 !== r && r,
                    o = t.dragPropagation,
                    a = void 0 !== o && o,
                    s = t.dragConstraints,
                    u = void 0 !== s && s,
                    l = t.dragElastic,
                    c = void 0 === l ? na : l,
                    f = t.dragMomentum,
                    d = void 0 === f || f;
                  return (0, V.Z)(
                    (0, V.Z)({}, t),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: i,
                      dragPropagation: a,
                      dragConstraints: u,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            t
          );
        })();
      function la(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var ca = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n(t) {
            var r;
            return (
              (0, a.Z)(this, n),
              ((r = e.call(this, t)).removeGroupControls = d),
              (r.removeListeners = d),
              (r.controls = new ua(t)),
              r
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "mount",
                value: function () {
                  var t = this.node.getProps().dragControls;
                  t && (this.removeGroupControls = t.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || d);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeGroupControls(), this.removeListeners();
                },
              },
            ]),
            n
          );
        })(lo),
        fa = function (t) {
          return function (e, n) {
            t &&
              m.update(function () {
                return t(e, n);
              });
          };
        },
        da = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            var t;
            return (
              (0, a.Z)(this, n),
              ((t = e.apply(this, arguments)).removePointerDownListener = d),
              t
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "onPointerDown",
                value: function (t) {
                  this.session = new No(t, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: aa(this.node),
                  });
                },
              },
              {
                key: "createPanHandlers",
                value: function () {
                  var t = this,
                    e = this.node.getProps(),
                    n = e.onPanSessionStart,
                    r = e.onPanStart,
                    i = e.onPan,
                    o = e.onPanEnd;
                  return {
                    onSessionStart: fa(n),
                    onStart: fa(r),
                    onMove: i,
                    onEnd: function (e, n) {
                      delete t.session,
                        o &&
                          m.update(function () {
                            return o(e, n);
                          });
                    },
                  };
                },
              },
              {
                key: "mount",
                value: function () {
                  var t = this;
                  this.removePointerDownListener = ro(
                    this.node.current,
                    "pointerdown",
                    function (e) {
                      return t.onPointerDown(e);
                    }
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                },
              },
            ]),
            n
          );
        })(lo);
      var va = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ha(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var pa = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!Q.test(t)) return t;
              t = parseFloat(t);
            }
            var n = ha(t, e.target.x),
              r = ha(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        ma = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = Et.parse(t);
            if (o.length > 5) return i;
            var a = Et.createTransformer(t),
              s = "number" !== typeof o[0] ? 1 : 0,
              u = r.x.scale * n.x,
              l = r.y.scale * n.y;
            (o[0 + s] /= u), (o[1 + s] /= l);
            var c = ot(u, l, 0.5);
            return (
              "number" === typeof o[2 + s] && (o[2 + s] /= c),
              "number" === typeof o[3 + s] && (o[3 + s] /= c),
              a(o)
            );
          },
        },
        ya = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            return (0, a.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, s.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var t,
                    e = this,
                    n = this.props,
                    r = n.visualElement,
                    i = n.layoutGroup,
                    o = n.switchLayoutGroup,
                    a = n.layoutId,
                    s = r.projection;
                  (t = xa),
                    Object.assign(In, t),
                    s &&
                      (i.group && i.group.add(s),
                      o && o.register && a && o.register(s),
                      s.root.didUpdate(),
                      s.addEventListener("animationComplete", function () {
                        e.safeToRemove();
                      }),
                      s.setOptions(
                        (0, V.Z)(
                          (0, V.Z)({}, s.options),
                          {},
                          {
                            onExitComplete: function () {
                              return e.safeToRemove();
                            },
                          }
                        )
                      )),
                    (va.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (t) {
                  var e = this,
                    n = this.props,
                    r = n.layoutDependency,
                    i = n.visualElement,
                    o = n.drag,
                    a = n.isPresent,
                    s = i.projection;
                  return s
                    ? ((s.isPresent = a),
                      o || t.layoutDependency !== r || void 0 === r
                        ? s.willUpdate()
                        : this.safeToRemove(),
                      t.isPresent !== a &&
                        (a
                          ? s.promote()
                          : s.relegate() ||
                            m.postRender(function () {
                              var t = s.getStack();
                              (t && t.members.length) || e.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var t = this,
                    e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    queueMicrotask(function () {
                      !e.currentAnimation && e.isLead() && t.safeToRemove();
                    }));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var t = this.props,
                    e = t.visualElement,
                    n = t.layoutGroup,
                    r = t.switchLayoutGroup,
                    i = e.projection;
                  i &&
                    (i.scheduleCheckAfterUnmount(),
                    n && n.group && n.group.remove(i),
                    r && r.deregister && r.deregister(i));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var t = this.props.safeToRemove;
                  t && t();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(r.Component);
      function ga(t) {
        var e = (function () {
            var t = (0, r.useContext)(Ei);
            if (null === t) return [!0, null];
            var e = t.isPresent,
              n = t.onExitComplete,
              i = t.register,
              o = (0, r.useId)();
            return (
              (0, r.useEffect)(function () {
                return i(o);
              }, []),
              !e && n
                ? [
                    !1,
                    function () {
                      return n && n(o);
                    },
                  ]
                : [!0]
            );
          })(),
          n = (0, o.Z)(e, 2),
          i = n[0],
          a = n[1],
          s = (0, r.useContext)(Ai);
        return r.createElement(
          ya,
          (0, V.Z)(
            (0, V.Z)({}, t),
            {},
            {
              layoutGroup: s,
              switchLayoutGroup: (0, r.useContext)(Zi),
              isPresent: i,
              safeToRemove: a,
            }
          )
        );
      }
      var xa = {
          borderRadius: (0, V.Z)(
            (0, V.Z)({}, pa),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: pa,
          borderTopRightRadius: pa,
          borderBottomLeftRadius: pa,
          borderBottomRightRadius: pa,
          boxShadow: ma,
        },
        ba = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        wa = ba.length,
        Pa = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        ka = function (t) {
          return "number" === typeof t || Q.test(t);
        };
      function Ea(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      var Ca = Ta(0, 0.5, he),
        Sa = Ta(0.5, 0.95, d);
      function Ta(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(Mt(t, e, r));
        };
      }
      function Aa(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function Za(t, e) {
        Aa(t.x, e.x), Aa(t.y, e.y);
      }
      function Ma(t, e, n, r, i) {
        return (
          (t = Xr((t -= e), 1 / n, r)), void 0 !== i && (t = Xr(t, 1 / i, r)), t
        );
      }
      function Va(t, e, n, r, i) {
        var a = (0, o.Z)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        !(function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            i = arguments.length > 4 ? arguments[4] : void 0,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : t,
            a =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : t;
          if (
            (J.test(e) &&
              ((e = parseFloat(e)), (e = ot(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = ot(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = Ma(t.min, e, n, s, i)),
              (t.max = Ma(t.max, e, n, s, i));
          }
        })(t, e[s], e[u], e[l], e.scale, r, i);
      }
      var Da = ["x", "scaleX", "originX"],
        Ra = ["y", "scaleY", "originY"];
      function La(t, e, n, r) {
        Va(t.x, e, Da, n ? n.x : void 0, r ? r.x : void 0),
          Va(t.y, e, Ra, n ? n.y : void 0, r ? r.y : void 0);
      }
      function Oa(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ja(t) {
        return Oa(t.x) && Oa(t.y);
      }
      function Ba(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function Fa(t) {
        return Go(t.x) / Go(t.y);
      }
      var Ia = (function () {
        function t() {
          (0, a.Z)(this, t), (this.members = []);
        }
        return (
          (0, s.Z)(t, [
            {
              key: "add",
              value: function (t) {
                u(this.members, t), t.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (t) {
                if (
                  (l(this.members, t),
                  t === this.prevLead && (this.prevLead = void 0),
                  t === this.lead)
                ) {
                  var e = this.members[this.members.length - 1];
                  e && this.promote(e);
                }
              },
            },
            {
              key: "relegate",
              value: function (t) {
                var e,
                  n = this.members.findIndex(function (e) {
                    return t === e;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var i = this.members[r];
                  if (!1 !== i.isPresent) {
                    e = i;
                    break;
                  }
                }
                return !!e && (this.promote(e), !0);
              },
            },
            {
              key: "promote",
              value: function (t, e) {
                var n = this.lead;
                t !== n &&
                  ((this.prevLead = n),
                  (this.lead = t),
                  t.show(),
                  n &&
                    (n.instance && n.scheduleRender(),
                    t.scheduleRender(),
                    (t.resumeFrom = n),
                    e && (t.resumeFrom.preserveOpacity = !0),
                    n.snapshot &&
                      ((t.snapshot = n.snapshot),
                      (t.snapshot.latestValues =
                        n.animationValues || n.latestValues)),
                    t.root && t.root.isUpdating && (t.isLayoutDirty = !0),
                    !1 === t.options.crossfade && n.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (t) {
                  var e = t.options,
                    n = t.resumingFrom;
                  e.onExitComplete && e.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete();
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (t) {
                  t.instance && t.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          t
        );
      })();
      function Na(t, e, n) {
        var r = "",
          i = t.x.translate / e.x,
          o = t.y.translate / e.y;
        if (
          ((i || o) &&
            (r = "translate3d(".concat(i, "px, ").concat(o, "px, 0) ")),
          (1 === e.x && 1 === e.y) ||
            (r += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")),
          n)
        ) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (r += "rotate(".concat(a, "deg) ")),
            s && (r += "rotateX(".concat(s, "deg) ")),
            u && (r += "rotateY(".concat(u, "deg) "));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return (
          (1 === l && 1 === c) ||
            (r += "scale(".concat(l, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var za = function (t, e) {
          return t.depth - e.depth;
        },
        Ua = (function () {
          function t() {
            (0, a.Z)(this, t), (this.children = []), (this.isDirty = !1);
          }
          return (
            (0, s.Z)(t, [
              {
                key: "add",
                value: function (t) {
                  u(this.children, t), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (t) {
                  l(this.children, t), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (t) {
                  this.isDirty && this.children.sort(za),
                    (this.isDirty = !1),
                    this.children.forEach(t);
                },
              },
            ]),
            t
          );
        })();
      var Wa = ["", "X", "Y", "Z"],
        Ha = { visibility: "hidden" },
        Ya = 0,
        Xa = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function Ga(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          i = t.checkIsScrollRoot,
          o = t.resetTransform;
        return (function () {
          function t() {
            var e = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            (0, a.Z)(this, t),
              (this.id = Ya++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = function () {
                e.isUpdating && ((e.isUpdating = !1), e.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                var t;
                (e.projectionUpdateScheduled = !1),
                  (Xa.totalNodes =
                    Xa.resolvedTargetDeltas =
                    Xa.recalculatedProjection =
                      0),
                  e.nodes.forEach($a),
                  e.nodes.forEach(rs),
                  e.nodes.forEach(is),
                  e.nodes.forEach(_a),
                  (t = Xa),
                  window.MotionDebug && window.MotionDebug.record(t);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = r),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat((0, D.Z)(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ua());
          }
          return (
            (0, s.Z)(t, [
              {
                key: "addEventListener",
                value: function (t, e) {
                  return (
                    this.eventHandlers.has(t) ||
                      this.eventHandlers.set(t, new c()),
                    this.eventHandlers.get(t).add(e)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (t) {
                  for (
                    var e = this.eventHandlers.get(t),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    r[i - 1] = arguments[i];
                  e && e.notify.apply(e, r);
                },
              },
              {
                key: "hasListeners",
                value: function (t) {
                  return this.eventHandlers.has(t);
                },
              },
              {
                key: "mount",
                value: function (t) {
                  var n = this,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.root.hasTreeAnimated;
                  if (!this.instance) {
                    (this.isSVG = Ln(t)), (this.instance = t);
                    var i = this.options,
                      o = i.layoutId,
                      a = i.layout,
                      s = i.visualElement;
                    if (
                      (s && !s.current && s.mount(t),
                      this.root.nodes.add(this),
                      this.parent && this.parent.children.add(this),
                      r && (a || o) && (this.isLayoutDirty = !0),
                      e)
                    ) {
                      var u,
                        l = function () {
                          return (n.root.updateBlockedByResize = !1);
                        };
                      e(t, function () {
                        (n.root.updateBlockedByResize = !0),
                          u && u(),
                          (u = (function (t, e) {
                            var n = performance.now(),
                              r = function r(i) {
                                var o = i.timestamp - n;
                                o >= e && (y(r), t(o - e));
                              };
                            return (
                              m.read(r, !0),
                              function () {
                                return y(r);
                              }
                            );
                          })(l, 250)),
                          va.hasAnimatedSinceResize &&
                            ((va.hasAnimatedSinceResize = !1),
                            n.nodes.forEach(ns));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        s &&
                        (o || a) &&
                        this.addEventListener("didUpdate", function (t) {
                          var e = t.delta,
                            r = t.hasLayoutChanged,
                            i = t.hasRelativeTargetChanged,
                            o = t.layout;
                          if (n.isTreeAnimationBlocked())
                            return (
                              (n.target = void 0),
                              void (n.relativeTarget = void 0)
                            );
                          var a =
                              n.options.transition ||
                              s.getDefaultTransition() ||
                              cs,
                            u = s.getProps(),
                            l = u.onLayoutAnimationStart,
                            c = u.onLayoutAnimationComplete,
                            f = !n.targetLayout || !Ba(n.targetLayout, o) || i,
                            d = !r && i;
                          if (
                            n.options.layoutRoot ||
                            (n.resumeFrom && n.resumeFrom.instance) ||
                            d ||
                            (r && (f || !n.currentAnimation))
                          ) {
                            n.resumeFrom &&
                              ((n.resumingFrom = n.resumeFrom),
                              (n.resumingFrom.resumingFrom = void 0)),
                              n.setAnimationOrigin(e, d);
                            var v = (0, V.Z)(
                              (0, V.Z)({}, hn(a, "layout")),
                              {},
                              { onPlay: l, onComplete: c }
                            );
                            (s.shouldReduceMotion || n.options.layoutRoot) &&
                              ((v.delay = 0), (v.type = !1)),
                              n.startAnimation(v);
                          } else r || ns(n), n.isLead() && n.options.onExitComplete && n.options.onExitComplete();
                          n.targetLayout = o;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                  var t = this.getStack();
                  t && t.remove(this),
                    this.parent && this.parent.children.delete(this),
                    (this.instance = void 0),
                    y(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  return (
                    this.isAnimationBlocked ||
                    (this.parent && this.parent.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(os),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var t = this.options.visualElement;
                  return t && t.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    ((this.root.hasTreeAnimated = !0),
                    this.root.isUpdateBlocked())
                  )
                    this.options.onExitComplete &&
                      this.options.onExitComplete();
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var e = 0; e < this.path.length; e++) {
                      var n = this.path[e];
                      (n.shouldResetTransform = !0),
                        n.updateScroll("snapshot"),
                        n.options.layoutRoot && n.willUpdate(!1);
                    }
                    var r = this.options,
                      i = r.layoutId,
                      o = r.layout;
                    if (void 0 !== i || o) {
                      var a = this.getTransformTemplate();
                      (this.prevTransformTemplateValue = a
                        ? a(this.latestValues, "")
                        : void 0),
                        this.updateSnapshot(),
                        t && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  if (((this.updateScheduled = !1), this.isUpdateBlocked()))
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(Qa)
                    );
                  this.isUpdating || this.nodes.forEach(ts),
                    (this.isUpdating = !1),
                    this.nodes.forEach(es),
                    this.nodes.forEach(qa),
                    this.nodes.forEach(Ka),
                    this.clearAllSnapshots();
                  var t = performance.now();
                  (g.delta = N(0, 1e3 / 60, t - g.timestamp)),
                    (g.timestamp = t),
                    (g.isProcessing = !0),
                    x.update.process(g),
                    x.preRender.process(g),
                    x.render.process(g),
                    (g.isProcessing = !1);
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  var t = this;
                  this.updateScheduled ||
                    ((this.updateScheduled = !0),
                    queueMicrotask(function () {
                      return t.update();
                    }));
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(Ja), this.sharedNodes.forEach(as);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  this.projectionUpdateScheduled ||
                    ((this.projectionUpdateScheduled = !0),
                    m.preRender(this.updateProjection, !1, !0));
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var t = this;
                  m.postRender(function () {
                    t.isLayoutDirty
                      ? t.root.didUpdate()
                      : t.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll();
                      }
                    var e = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = or()),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox);
                    var n = this.options.visualElement;
                    n &&
                      n.notify(
                        "LayoutMeasure",
                        this.layout.layoutBox,
                        e ? e.layoutBox : void 0
                      );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    e = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === t &&
                    (e = !1),
                    e &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: i(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  if (o) {
                    var t = this.isLayoutDirty || this.shouldResetTransform,
                      e = this.projectionDelta && !ja(this.projectionDelta),
                      n = this.getTransformTemplate(),
                      r = n ? n(this.latestValues, "") : void 0,
                      i = r !== this.prevTransformTemplateValue;
                    t &&
                      (e || Wr(this.latestValues) || i) &&
                      (o(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var t,
                    e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    n = this.measurePageBox(),
                    r = this.removeElementScroll(n);
                  return (
                    e && (r = this.removeTransform(r)),
                    vs((t = r).x),
                    vs(t.y),
                    {
                      animationId: this.root.animationId,
                      measuredBox: n,
                      layoutBox: r,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var t = this.options.visualElement;
                  if (!t) return or();
                  var e = t.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (_r(e.x, n.offset.x), _r(e.y, n.offset.y)), e;
                },
              },
              {
                key: "removeElementScroll",
                value: function (t) {
                  var e = or();
                  Za(e, t);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      i = r.scroll,
                      o = r.options;
                    if (r !== this.root && i && o.layoutScroll) {
                      if (i.isRoot) {
                        Za(e, t);
                        var a = this.root.scroll;
                        a && (_r(e.x, -a.offset.x), _r(e.y, -a.offset.y));
                      }
                      _r(e.x, i.offset.x), _r(e.y, i.offset.y);
                    }
                  }
                  return e;
                },
              },
              {
                key: "applyTransform",
                value: function (t) {
                  var e =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = or();
                  Za(n, t);
                  for (var r = 0; r < this.path.length; r++) {
                    var i = this.path[r];
                    !e &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      ei(n, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                      Wr(i.latestValues) && ei(n, i.latestValues);
                  }
                  return Wr(this.latestValues) && ei(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (t) {
                  var e = or();
                  Za(e, t);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n];
                    if (r.instance && Wr(r.latestValues)) {
                      Ur(r.latestValues) && r.updateSnapshot();
                      var i = or();
                      Za(i, r.measurePageBox()),
                        La(
                          e,
                          r.latestValues,
                          r.snapshot ? r.snapshot.layoutBox : void 0,
                          i
                        );
                    }
                  }
                  return Wr(this.latestValues) && La(e, this.latestValues), e;
                },
              },
              {
                key: "setTargetDelta",
                value: function (t) {
                  (this.targetDelta = t),
                    this.root.scheduleUpdateProjection(),
                    (this.isProjectionDirty = !0);
                },
              },
              {
                key: "setOptions",
                value: function (t) {
                  this.options = (0, V.Z)(
                    (0, V.Z)((0, V.Z)({}, this.options), t),
                    {},
                    { crossfade: void 0 === t.crossfade || t.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "forceRelativeParentToResolveTarget",
                value: function () {
                  this.relativeParent &&
                    this.relativeParent.resolvedRelativeTargetAt !==
                      g.timestamp &&
                    this.relativeParent.resolveTargetDelta(!0);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var t,
                    e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    n = this.getLead();
                  this.isProjectionDirty ||
                    (this.isProjectionDirty = n.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = n.isTransformDirty),
                    this.isSharedProjectionDirty ||
                      (this.isSharedProjectionDirty =
                        n.isSharedProjectionDirty);
                  var r = Boolean(this.resumingFrom) || this !== n;
                  if (
                    !!(
                      e ||
                      (r && this.isSharedProjectionDirty) ||
                      this.isProjectionDirty ||
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.isProjectionDirty) ||
                      this.attemptToResolveRelativeTarget
                    )
                  ) {
                    var i = this.options,
                      o = i.layout,
                      a = i.layoutId;
                    if (this.layout && (o || a)) {
                      if (
                        ((this.resolvedRelativeTargetAt = g.timestamp),
                        !this.targetDelta && !this.relativeTarget)
                      ) {
                        var s = this.getClosestProjectingParent();
                        s && s.layout && 1 !== this.animationProgress
                          ? ((this.relativeParent = s),
                            this.forceRelativeParentToResolveTarget(),
                            (this.relativeTarget = or()),
                            (this.relativeTargetOrigin = or()),
                            Qo(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              s.layout.layoutBox
                            ),
                            Za(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      if (this.relativeTarget || this.targetDelta) {
                        var u, l, c;
                        if (
                          (this.target ||
                            ((this.target = or()),
                            (this.targetWithTransforms = or())),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.relativeParent &&
                          this.relativeParent.target
                            ? (this.forceRelativeParentToResolveTarget(),
                              (u = this.target),
                              (l = this.relativeTarget),
                              (c = this.relativeParent.target),
                              _o(u.x, l.x, c.x),
                              _o(u.y, l.y, c.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : Za(this.target, this.layout.layoutBox),
                              Kr(this.target, this.targetDelta))
                            : Za(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var f = this.getClosestProjectingParent();
                          f &&
                          Boolean(f.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !f.options.layoutScroll &&
                          f.target &&
                          1 !== this.animationProgress
                            ? ((this.relativeParent = f),
                              this.forceRelativeParentToResolveTarget(),
                              (this.relativeTarget = or()),
                              (this.relativeTargetOrigin = or()),
                              Qo(
                                this.relativeTargetOrigin,
                                this.target,
                                f.target
                              ),
                              Za(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                        Xa.resolvedTargetDeltas++;
                      }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !Ur(this.parent.latestValues) &&
                    !Hr(this.parent.latestValues)
                  )
                    return this.parent.isProjecting()
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "isProjecting",
                value: function () {
                  return Boolean(
                    (this.relativeTarget ||
                      this.targetDelta ||
                      this.options.layoutRoot) &&
                      this.layout
                  );
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var t,
                    e = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== e,
                    r = !0;
                  if (
                    ((this.isProjectionDirty ||
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.isProjectionDirty)) &&
                      (r = !1),
                    n &&
                      (this.isSharedProjectionDirty || this.isTransformDirty) &&
                      (r = !1),
                    this.resolvedRelativeTargetAt === g.timestamp && (r = !1),
                    !r)
                  ) {
                    var i = this.options,
                      o = i.layout,
                      a = i.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (this.parent && this.parent.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (o || a))
                    ) {
                      Za(this.layoutCorrected, this.layout.layoutBox);
                      var s = this.treeScale.x,
                        u = this.treeScale.y;
                      !(function (t, e, n) {
                        var r =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          i = n.length;
                        if (i) {
                          var o, a;
                          e.x = e.y = 1;
                          for (var s = 0; s < i; s++) {
                            a = (o = n[s]).projectionDelta;
                            var u = o.instance;
                            (u && u.style && "contents" === u.style.display) ||
                              (r &&
                                o.options.layoutScroll &&
                                o.scroll &&
                                o !== o.root &&
                                ei(t, {
                                  x: -o.scroll.offset.x,
                                  y: -o.scroll.offset.y,
                                }),
                              a &&
                                ((e.x *= a.x.scale),
                                (e.y *= a.y.scale),
                                Kr(t, a)),
                              r && Wr(o.latestValues) && ei(t, o.latestValues));
                          }
                          (e.x = $r(e.x)), (e.y = $r(e.y));
                        }
                      })(this.layoutCorrected, this.treeScale, this.path, n),
                        !e.layout ||
                          e.target ||
                          (1 === this.treeScale.x && 1 === this.treeScale.y) ||
                          (e.target = e.layout.layoutBox);
                      var l = e.target;
                      if (l) {
                        this.projectionDelta ||
                          ((this.projectionDelta = ir()),
                          (this.projectionDeltaWithTransform = ir()));
                        var c = this.projectionTransform;
                        $o(
                          this.projectionDelta,
                          this.layoutCorrected,
                          l,
                          this.latestValues
                        ),
                          (this.projectionTransform = Na(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === c &&
                            this.treeScale.x === s &&
                            this.treeScale.y === u) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", l)),
                          Xa.recalculatedProjection++;
                      } else
                        this.projectionTransform &&
                          ((this.projectionDelta = ir()),
                          (this.projectionTransform = "none"),
                          this.scheduleRender());
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    (this.options.scheduleRender &&
                      this.options.scheduleRender(),
                    t)
                  ) {
                    var e = this.getStack();
                    e && e.scheduleRender();
                  }
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (t) {
                  var e = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.snapshot,
                    i = r ? r.latestValues : {},
                    o = (0, V.Z)({}, this.latestValues),
                    a = ir();
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !n);
                  var s,
                    u = or(),
                    l =
                      (r ? r.source : void 0) !==
                      (this.layout ? this.layout.source : void 0),
                    c = this.getStack(),
                    f = !c || c.members.length <= 1,
                    d = Boolean(
                      l &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(ls)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (n) {
                      var r,
                        c,
                        v,
                        h,
                        p,
                        m,
                        y = n / 1e3;
                      ss(a.x, t.x, y),
                        ss(a.y, t.y, y),
                        e.setTargetDelta(a),
                        e.relativeTarget &&
                          e.relativeTargetOrigin &&
                          e.layout &&
                          e.relativeParent &&
                          e.relativeParent.layout &&
                          (Qo(
                            u,
                            e.layout.layoutBox,
                            e.relativeParent.layout.layoutBox
                          ),
                          (v = e.relativeTarget),
                          (h = e.relativeTargetOrigin),
                          (p = u),
                          (m = y),
                          us(v.x, h.x, p.x, m),
                          us(v.y, h.y, p.y, m),
                          s &&
                            ((r = e.relativeTarget),
                            (c = s),
                            r.x.min === c.x.min &&
                              r.x.max === c.x.max &&
                              r.y.min === c.y.min &&
                              r.y.max === c.y.max) &&
                            (e.isProjectionDirty = !1),
                          s || (s = or()),
                          Za(s, e.relativeTarget)),
                        l &&
                          ((e.animationValues = o),
                          (function (t, e, n, r, i, o) {
                            i
                              ? ((t.opacity = ot(
                                  0,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  Ca(r)
                                )),
                                (t.opacityExit = ot(
                                  void 0 !== e.opacity ? e.opacity : 1,
                                  0,
                                  Sa(r)
                                )))
                              : o &&
                                (t.opacity = ot(
                                  void 0 !== e.opacity ? e.opacity : 1,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  r
                                ));
                            for (var a = 0; a < wa; a++) {
                              var s = "border".concat(ba[a], "Radius"),
                                u = Ea(e, s),
                                l = Ea(n, s);
                              (void 0 === u && void 0 === l) ||
                                (u || (u = 0),
                                l || (l = 0),
                                0 === u || 0 === l || ka(u) === ka(l)
                                  ? ((t[s] = Math.max(ot(Pa(u), Pa(l), r), 0)),
                                    (J.test(l) || J.test(u)) && (t[s] += "%"))
                                  : (t[s] = l));
                            }
                            (e.rotate || n.rotate) &&
                              (t.rotate = ot(e.rotate || 0, n.rotate || 0, r));
                          })(o, i, e.latestValues, y, d, f)),
                        e.root.scheduleUpdateProjection(),
                        e.scheduleRender(),
                        (e.animationProgress = y);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (t) {
                  var e = this;
                  this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom &&
                      this.resumingFrom.currentAnimation &&
                      this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation &&
                      (y(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = m.update(function () {
                      (va.hasAnimatedSinceResize = !0),
                        (e.currentAnimation = oi(
                          0,
                          1e3,
                          (0, V.Z)(
                            (0, V.Z)({}, t),
                            {},
                            {
                              onUpdate: function (n) {
                                e.mixTargetDelta(n),
                                  t.onUpdate && t.onUpdate(n);
                              },
                              onComplete: function () {
                                t.onComplete && t.onComplete(),
                                  e.completeAnimation();
                              },
                            }
                          )
                        )),
                        e.resumingFrom &&
                          (e.resumingFrom.currentAnimation =
                            e.currentAnimation),
                        (e.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
                  var t = this.getStack();
                  t && t.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  this.currentAnimation &&
                    (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var t = this.getLead(),
                    e = t.targetWithTransforms,
                    n = t.target,
                    r = t.layout,
                    i = t.latestValues;
                  if (e && n && r) {
                    if (
                      this !== t &&
                      this.layout &&
                      r &&
                      hs(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || or();
                      var o = Go(this.layout.layoutBox.x);
                      (n.x.min = t.target.x.min), (n.x.max = n.x.min + o);
                      var a = Go(this.layout.layoutBox.y);
                      (n.y.min = t.target.y.min), (n.y.max = n.y.min + a);
                    }
                    Za(e, n),
                      ei(e, i),
                      $o(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        e,
                        i
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (t, e) {
                  this.sharedNodes.has(t) || this.sharedNodes.set(t, new Ia()),
                    this.sharedNodes.get(t).add(e);
                  var n = e.options.initialPromotionConfig;
                  e.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity:
                      n && n.shouldPreserveFollowOpacity
                        ? n.shouldPreserveFollowOpacity(e)
                        : void 0,
                  });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var t = this.getStack();
                  return !t || t.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var t;
                  return (
                    (this.options.layoutId &&
                      (null === (t = this.getStack()) || void 0 === t
                        ? void 0
                        : t.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var t;
                  return this.options.layoutId
                    ? null === (t = this.getStack()) || void 0 === t
                      ? void 0
                      : t.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var t = this.options.layoutId;
                  if (t) return this.root.sharedNodes.get(t);
                },
              },
              {
                key: "promote",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.needsReset,
                    n = t.transition,
                    r = t.preserveFollowOpacity,
                    i = this.getStack();
                  i && i.promote(this, r),
                    e &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var t = this.getStack();
                  return !!t && t.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var t = this.options.visualElement;
                  if (t) {
                    var e = !1,
                      n = t.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (e = !0),
                      e)
                    ) {
                      for (var r = {}, i = 0; i < Wa.length; i++) {
                        var o = "rotate" + Wa[i];
                        n[o] && ((r[o] = n[o]), t.setStaticValue(o, 0));
                      }
                      for (var a in (t.render(), r)) t.setStaticValue(a, r[a]);
                      t.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function (t) {
                  var e, n;
                  if (this.instance && !this.isSVG) {
                    if (!this.isVisible) return Ha;
                    var r = { visibility: "" },
                      i = this.getTransformTemplate();
                    if (this.needsReset)
                      return (
                        (this.needsReset = !1),
                        (r.opacity = ""),
                        (r.pointerEvents =
                          Gi(
                            null === t || void 0 === t
                              ? void 0
                              : t.pointerEvents
                          ) || ""),
                        (r.transform = i ? i(this.latestValues, "") : "none"),
                        r
                      );
                    var o = this.getLead();
                    if (!this.projectionDelta || !this.layout || !o.target) {
                      var a = {};
                      return (
                        this.options.layoutId &&
                          ((a.opacity =
                            void 0 !== this.latestValues.opacity
                              ? this.latestValues.opacity
                              : 1),
                          (a.pointerEvents =
                            Gi(
                              null === t || void 0 === t
                                ? void 0
                                : t.pointerEvents
                            ) || "")),
                        this.hasProjected &&
                          !Wr(this.latestValues) &&
                          ((a.transform = i ? i({}, "") : "none"),
                          (this.hasProjected = !1)),
                        a
                      );
                    }
                    var s = o.animationValues || o.latestValues;
                    this.applyTransformsToTarget(),
                      (r.transform = Na(
                        this.projectionDeltaWithTransform,
                        this.treeScale,
                        s
                      )),
                      i && (r.transform = i(s, r.transform));
                    var u = this.projectionDelta,
                      l = u.x,
                      c = u.y;
                    for (var f in ((r.transformOrigin = ""
                      .concat(100 * l.origin, "% ")
                      .concat(100 * c.origin, "% 0")),
                    o.animationValues
                      ? (r.opacity =
                          o === this
                            ? null !==
                                (n =
                                  null !== (e = s.opacity) && void 0 !== e
                                    ? e
                                    : this.latestValues.opacity) && void 0 !== n
                              ? n
                              : 1
                            : this.preserveOpacity
                            ? this.latestValues.opacity
                            : s.opacityExit)
                      : (r.opacity =
                          o === this
                            ? void 0 !== s.opacity
                              ? s.opacity
                              : ""
                            : void 0 !== s.opacityExit
                            ? s.opacityExit
                            : 0),
                    In))
                      if (void 0 !== s[f]) {
                        var d = In[f],
                          v = d.correct,
                          h = d.applyTo,
                          p = "none" === r.transform ? s[f] : v(s[f], o);
                        if (h)
                          for (var m = h.length, y = 0; y < m; y++) r[h[y]] = p;
                        else r[f] = p;
                      }
                    return (
                      this.options.layoutId &&
                        (r.pointerEvents =
                          o === this
                            ? Gi(
                                null === t || void 0 === t
                                  ? void 0
                                  : t.pointerEvents
                              ) || ""
                            : "none"),
                      r
                    );
                  }
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (t) {
                    var e;
                    return null === (e = t.currentAnimation) || void 0 === e
                      ? void 0
                      : e.stop();
                  }),
                    this.root.nodes.forEach(Qa),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            t
          );
        })();
      }
      function qa(t) {
        t.updateLayout();
      }
      function Ka(t) {
        var e,
          n =
            (null === (e = t.resumeFrom) || void 0 === e
              ? void 0
              : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
          var r = t.layout,
            i = r.layoutBox,
            o = r.measuredBox,
            a = t.options.animationType,
            s = n.source !== t.layout.source;
          "size" === a
            ? oa(function (t) {
                var e = s ? n.measuredBox[t] : n.layoutBox[t],
                  r = Go(e);
                (e.min = i[t].min), (e.max = e.min + r);
              })
            : hs(a, n.layoutBox, i) &&
              oa(function (e) {
                var r = s ? n.measuredBox[e] : n.layoutBox[e],
                  o = Go(i[e]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[e].max = t.relativeTarget[e].min + o));
              });
          var u = ir();
          $o(u, i, n.layoutBox);
          var l = ir();
          s
            ? $o(l, t.applyTransform(o, !0), n.measuredBox)
            : $o(l, i, n.layoutBox);
          var c = !ja(u),
            f = !1;
          if (!t.resumeFrom) {
            var d = t.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              var v = d.snapshot,
                h = d.layout;
              if (v && h) {
                var p = or();
                Qo(p, n.layoutBox, v.layoutBox);
                var m = or();
                Qo(m, i, h.layoutBox),
                  Ba(p, m) || (f = !0),
                  d.options.layoutRoot &&
                    ((t.relativeTarget = m),
                    (t.relativeTargetOrigin = p),
                    (t.relativeParent = d));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: n,
            delta: l,
            layoutDelta: u,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: f,
          });
        } else if (t.isLead()) {
          var y = t.options.onExitComplete;
          y && y();
        }
        t.options.transition = void 0;
      }
      function $a(t) {
        Xa.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = Boolean(
                t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function _a(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function Ja(t) {
        t.clearSnapshot();
      }
      function Qa(t) {
        t.clearMeasurements();
      }
      function ts(t) {
        t.isLayoutDirty = !1;
      }
      function es(t) {
        var e = t.options.visualElement;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ns(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rs(t) {
        t.resolveTargetDelta();
      }
      function is(t) {
        t.calcProjection();
      }
      function os(t) {
        t.resetRotation();
      }
      function as(t) {
        t.removeLeadSnapshot();
      }
      function ss(t, e, n) {
        (t.translate = ot(e.translate, 0, n)),
          (t.scale = ot(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function us(t, e, n, r) {
        (t.min = ot(e.min, n.min, r)), (t.max = ot(e.max, n.max, r));
      }
      function ls(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var cs = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        fs = function (t) {
          return (
            "undefined" !== typeof navigator &&
            navigator.userAgent.toLowerCase().includes(t)
          );
        },
        ds = fs("applewebkit/") && !fs("chrome/") ? Math.round : d;
      function vs(t) {
        (t.min = ds(t.min)), (t.max = ds(t.max));
      }
      function hs(t, e, n) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !qo(Fa(e), Fa(n), 0.2))
        );
      }
      var ps = Ga({
          attachResizeListener: function (t, e) {
            return Qi(t, "resize", e);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        ms = { current: void 0 },
        ys = Ga({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!ms.current) {
              var t = new ps({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ms.current = t);
            }
            return ms.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: function (t) {
            return Boolean("fixed" === window.getComputedStyle(t).position);
          },
        }),
        gs = {
          pan: { Feature: da },
          drag: { Feature: ca, ProjectionNode: ys, MeasureLayout: ga },
        },
        xs = function (t, e) {
          return Oi(t)
            ? new Ir(e, { enableHardwareAcceleration: !1 })
            : new ri(e, { enableHardwareAcceleration: !0 });
        },
        bs = { layout: { ProjectionNode: ys, MeasureLayout: ga } },
        ws = (0, V.Z)((0, V.Z)((0, V.Z)((0, V.Z)({}, Fo), Co), gs), bs),
        Ps = Ri(function (t, e) {
          return (function (t, e, n, r) {
            var i = e.forwardMotionProps,
              o = void 0 !== i && i,
              a = Oi(t) ? _i : Ji;
            return (0,
            V.Z)((0, V.Z)({}, a), {}, { preloadedFeatures: n, useRender: Xi(o), createVisualElement: r, Component: t });
          })(t, e, ws, xs);
        });
      function ks() {
        var t = (0, r.useRef)(!1);
        return (
          Ot(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var Es = n(37762),
        Cs = (function (t) {
          (0, Bn.Z)(n, t);
          var e = (0, Fn.Z)(n);
          function n() {
            return (0, a.Z)(this, n), e.apply(this, arguments);
          }
          return (
            (0, s.Z)(n, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function (t) {
                  var e = this.props.childRef.current;
                  if (e && t.isPresent && !this.props.isPresent) {
                    var n = this.props.sizeRef.current;
                    (n.height = e.offsetHeight || 0),
                      (n.width = e.offsetWidth || 0),
                      (n.top = e.offsetTop),
                      (n.left = e.offsetLeft);
                  }
                  return null;
                },
              },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r.Component);
      function Ss(t) {
        var e = t.children,
          n = t.isPresent,
          i = (0, r.useId)(),
          o = (0, r.useRef)(null),
          a = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(
            function () {
              var t = a.current,
                e = t.width,
                r = t.height,
                s = t.top,
                u = t.left;
              if (!n && o.current && e && r) {
                o.current.dataset.motionPopId = i;
                var l = document.createElement("style");
                return (
                  document.head.appendChild(l),
                  l.sheet &&
                    l.sheet.insertRule(
                      '\n          [data-motion-pop-id="'
                        .concat(
                          i,
                          '"] {\n            position: absolute !important;\n            width: '
                        )
                        .concat(e, "px !important;\n            height: ")
                        .concat(r, "px !important;\n            top: ")
                        .concat(s, "px !important;\n            left: ")
                        .concat(u, "px !important;\n          }\n        ")
                    ),
                  function () {
                    document.head.removeChild(l);
                  }
                );
              }
            },
            [n]
          ),
          r.createElement(
            Cs,
            { isPresent: n, childRef: o, sizeRef: a },
            r.cloneElement(e, { ref: o })
          )
        );
      }
      var Ts = function (t) {
        var e = t.children,
          n = t.initial,
          i = t.isPresent,
          o = t.onExitComplete,
          a = t.custom,
          s = t.presenceAffectsLayout,
          u = t.mode,
          l = E(As),
          c = (0, r.useId)(),
          f = (0, r.useMemo)(
            function () {
              return {
                id: c,
                initial: n,
                isPresent: i,
                custom: a,
                onExitComplete: function (t) {
                  l.set(t, !0);
                  var e,
                    n = (0, Es.Z)(l.values());
                  try {
                    for (n.s(); !(e = n.n()).done; ) {
                      if (!e.value) return;
                    }
                  } catch (r) {
                    n.e(r);
                  } finally {
                    n.f();
                  }
                  o && o();
                },
                register: function (t) {
                  return (
                    l.set(t, !1),
                    function () {
                      return l.delete(t);
                    }
                  );
                },
              };
            },
            s ? void 0 : [i]
          );
        return (
          (0, r.useMemo)(
            function () {
              l.forEach(function (t, e) {
                return l.set(e, !1);
              });
            },
            [i]
          ),
          r.useEffect(
            function () {
              !i && !l.size && o && o();
            },
            [i]
          ),
          "popLayout" === u && (e = r.createElement(Ss, { isPresent: i }, e)),
          r.createElement(Ei.Provider, { value: f }, e)
        );
      };
      function As() {
        return new Map();
      }
      var Zs = function (t) {
        return t.key || "";
      };
      var Ms = function (t) {
          var e = t.children,
            n = t.custom,
            i = t.initial,
            a = void 0 === i || i,
            s = t.onExitComplete,
            u = t.exitBeforeEnter,
            l = t.presenceAffectsLayout,
            c = void 0 === l || l,
            f = t.mode,
            d = void 0 === f ? "sync" : f;
          L(!u, "Replace exitBeforeEnter with mode='wait'");
          var v,
            h =
              (0, r.useContext)(Ai).forceRender ||
              (function () {
                var t = ks(),
                  e = (0, r.useState)(0),
                  n = (0, o.Z)(e, 2),
                  i = n[0],
                  a = n[1],
                  s = (0, r.useCallback)(
                    function () {
                      t.current && a(i + 1);
                    },
                    [i]
                  );
                return [
                  (0, r.useCallback)(
                    function () {
                      return m.postRender(s);
                    },
                    [s]
                  ),
                  i,
                ];
              })()[0],
            p = ks(),
            y = (function (t) {
              var e = [];
              return (
                r.Children.forEach(t, function (t) {
                  (0, r.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(e),
            g = y,
            x = (0, r.useRef)(new Map()).current,
            b = (0, r.useRef)(g),
            w = (0, r.useRef)(new Map()).current,
            P = (0, r.useRef)(!0);
          if (
            (Ot(function () {
              (P.current = !1),
                (function (t, e) {
                  t.forEach(function (t) {
                    var n = Zs(t);
                    e.set(n, t);
                  });
                })(y, w),
                (b.current = g);
            }),
            (v = function () {
              (P.current = !0), w.clear(), x.clear();
            }),
            (0, r.useEffect)(function () {
              return function () {
                return v();
              };
            }, []),
            P.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              g.map(function (t) {
                return r.createElement(
                  Ts,
                  {
                    key: Zs(t),
                    isPresent: !0,
                    initial: !!a && void 0,
                    presenceAffectsLayout: c,
                    mode: d,
                  },
                  t
                );
              })
            );
          g = (0, D.Z)(g);
          for (
            var k = b.current.map(Zs), E = y.map(Zs), C = k.length, S = 0;
            S < C;
            S++
          ) {
            var T = k[S];
            -1 !== E.indexOf(T) || x.has(T) || x.set(T, void 0);
          }
          return (
            "wait" === d && x.size && (g = []),
            x.forEach(function (t, e) {
              if (-1 === E.indexOf(e)) {
                var i = w.get(e);
                if (i) {
                  var o = k.indexOf(e),
                    a = t;
                  if (!a) {
                    (a = r.createElement(
                      Ts,
                      {
                        key: Zs(i),
                        isPresent: !1,
                        onExitComplete: function () {
                          x.delete(e);
                          var t = Array.from(w.keys()).filter(function (t) {
                            return !E.includes(t);
                          });
                          if (
                            (t.forEach(function (t) {
                              return w.delete(t);
                            }),
                            (b.current = y.filter(function (n) {
                              var r = Zs(n);
                              return r === e || t.includes(r);
                            })),
                            !x.size)
                          ) {
                            if (!1 === p.current) return;
                            h(), s && s();
                          }
                        },
                        custom: n,
                        presenceAffectsLayout: c,
                        mode: d,
                      },
                      i
                    )),
                      x.set(e, a);
                  }
                  g.splice(o, 0, a);
                }
              }
            }),
            (g = g.map(function (t) {
              var e = t.key;
              return x.has(e)
                ? t
                : r.createElement(
                    Ts,
                    {
                      key: Zs(t),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: d,
                    },
                    t
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              x.size
                ? g
                : g.map(function (t) {
                    return (0, r.cloneElement)(t);
                  })
            )
          );
        },
        Vs = "undefined" !== typeof window ? r.useLayoutEffect : function () {};
      new Map();
      function Ds() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return function () {
          for (var t = 0, n = e; t < n.length; t++) {
            var r = n[t];
            "function" === typeof r && r.apply(void 0, arguments);
          }
        };
      }
      new Set(["id"]),
        new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]);
      var Rs = new Map(),
        Ls = new Set();
      function Os() {
        if ("undefined" !== typeof window) {
          var t = function t(e) {
            var n = Rs.get(e.target);
            if (
              n &&
              (n.delete(e.propertyName),
              0 === n.size &&
                (e.target.removeEventListener("transitioncancel", t),
                Rs.delete(e.target)),
              0 === Rs.size)
            ) {
              var r,
                i = (0, Es.Z)(Ls);
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  (0, r.value)();
                }
              } catch (o) {
                i.e(o);
              } finally {
                i.f();
              }
              Ls.clear();
            }
          };
          document.body.addEventListener("transitionrun", function (e) {
            var n = Rs.get(e.target);
            n ||
              ((n = new Set()),
              Rs.set(e.target, n),
              e.target.addEventListener("transitioncancel", t)),
              n.add(e.propertyName);
          }),
            document.body.addEventListener("transitionend", t);
        }
      }
      "undefined" !== typeof document &&
        ("loading" !== document.readyState
          ? Os()
          : document.addEventListener("DOMContentLoaded", Os));
      function js(t) {
        for (Bs(t) && (t = t.parentElement); t && !Bs(t); ) t = t.parentElement;
        return t || document.scrollingElement || document.documentElement;
      }
      function Bs(t) {
        var e = window.getComputedStyle(t);
        return /(auto|scroll)/.test(e.overflow + e.overflowX + e.overflowY);
      }
      "undefined" !== typeof window && window.visualViewport;
      new Map();
      function Fs(t) {
        var e;
        return (
          "undefined" !== typeof window &&
          null != window.navigator &&
          t.test(
            (null === (e = window.navigator.userAgentData) || void 0 === e
              ? void 0
              : e.platform) || window.navigator.platform
          )
        );
      }
      function Is() {
        return Fs(/^Mac/i);
      }
      function Ns() {
        return (
          Fs(/^iPhone/i) ||
          Fs(/^iPad/i) ||
          (Is() && navigator.maxTouchPoints > 1)
        );
      }
      function zs() {
        return (
          (zs = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
          zs.apply(this, arguments)
        );
      }
      function Us(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = {},
          o = Object.keys(t);
        for (r = 0; r < o.length; r++)
          (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      }
      var Ws = "calc(100% - env(safe-area-inset-top) - 34px)",
        Hs = "undefined" === typeof window,
        Ys = { ease: "easeOut", duration: 0.2 },
        Xs = { ease: "linear", duration: 0.01 };
      function Gs(t, e) {
        for (var n = t[0], r = Math.abs(t[0] - e), i = 1; i < t.length; i++) {
          var o = Math.abs(t[i] - e);
          o < r && ((n = t[i]), (r = o));
        }
        return n;
      }
      function qs(t) {
        var e = document.querySelector("body"),
          n = document.getElementById(t);
        n &&
          (n.style.removeProperty("border-top-right-radius"),
          n.style.removeProperty("border-top-left-radius"),
          n.style.removeProperty("transform"),
          n.addEventListener("transitionend", function t() {
            n.style.removeProperty("overflow"),
              n.style.removeProperty("will-change"),
              n.style.removeProperty("transition"),
              e.style.removeProperty("background-color"),
              n.removeEventListener("transitionend", t);
          }));
      }
      function Ks(t) {
        var e = t.snapTo,
          n = t.sheetHeight;
        return (
          e < 0 &&
            console.warn(
              "Snap point is out of bounds. Sheet height is " +
                n +
                " but snap point is " +
                (n + Math.abs(e)) +
                "."
            ),
          Math.max(Math.round(e), 0)
        );
      }
      function $s(t) {
        return function (e) {
          t.forEach(function (t) {
            "function" === typeof t ? t(e) : t && (t.current = e);
          });
        };
      }
      var _s = Hs ? r.useEffect : r.useLayoutEffect;
      function Js(t, e) {
        var n = Qs(t);
        (0, r.useEffect)(
          function () {
            e && !n && t
              ? (function (t) {
                  var e = document.querySelector("body"),
                    n = document.querySelector("#" + t);
                  if (n) {
                    var r = window.innerHeight,
                      i = (r - 24) / r;
                    (e.style.backgroundColor = "#000"),
                      (n.style.overflow = "hidden"),
                      (n.style.willChange = "transform"),
                      (n.style.transition =
                        "transform 200ms ease-in-out, border-radius 200ms linear"),
                      (n.style.transform =
                        "translateY(calc(env(safe-area-inset-top) + 12px)) scale(" +
                        i +
                        ")"),
                      (n.style.borderTopRightRadius = "10px"),
                      (n.style.borderTopLeftRadius = "10px");
                  }
                })(e)
              : e && !t && n && qs(e);
          },
          [t, n]
        ),
          (0, r.useEffect)(
            function () {
              return function () {
                e && t && qs(e);
              };
            },
            [t]
          );
      }
      function Qs(t) {
        var e = (0, r.useRef)();
        return (
          (0, r.useEffect)(function () {
            e.current = t;
          }),
          e.current
        );
      }
      function tu(t) {
        var e = (0, r.useRef)();
        return (
          _s(function () {
            e.current = t;
          }),
          (0, r.useCallback)(function () {
            for (
              var t = e.current, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
            return null == t ? void 0 : t.apply(void 0, r);
          }, [])
        );
      }
      var eu = { bottom: 0, top: 0, left: 0, right: 0 };
      function nu() {
        return {
          constraintsRef: (0, r.useRef)(null),
          onMeasureDragConstraints: (0, r.useCallback)(function () {
            return eu;
          }, []),
        };
      }
      var ru = (0, r.createContext)(void 0),
        iu = function () {
          var t = (0, r.useContext)(ru);
          if (!t) throw Error("Sheet context error");
          return t;
        },
        ou = (0, r.createContext)(void 0);
      function au(t) {
        var e = t.children,
          n = iu(),
          i = (0, r.useState)(!!n.disableDrag),
          o = i[0],
          a = i[1];
        return (0, r.createElement)(
          ou.Provider,
          {
            value: {
              disableDrag: o,
              setDragEnabled: function () {
                n.disableDrag || a(!1);
              },
              setDragDisabled: function () {
                o || a(!0);
              },
            },
          },
          e
        );
      }
      var su,
        uu = function () {
          var t = (0, r.useContext)(ou);
          if (!t) throw Error("Sheet scroller context error");
          return t;
        },
        lu = "undefined" !== typeof window && window.visualViewport,
        cu = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        fu = 0;
      function du(t) {
        void 0 === t && (t = {});
        var e = t.isDisabled;
        Vs(
          function () {
            if (!e)
              return (
                1 === ++fu &&
                  (su = Ns()
                    ? (function () {
                        var t,
                          e = 0,
                          n = function (n) {
                            ((t = js(n.target)) === document.documentElement &&
                              t === document.body) ||
                              (e = n.changedTouches[0].pageY);
                          },
                          r = function (n) {
                            if (
                              t !== document.documentElement &&
                              t !== document.body
                            ) {
                              var r = n.changedTouches[0].pageY,
                                i = t.scrollTop,
                                o = t.scrollHeight - t.clientHeight;
                              0 !== o &&
                                (((i <= 0 && r > e) || (i >= o && r < e)) &&
                                  n.preventDefault(),
                                (e = r));
                            } else n.preventDefault();
                          },
                          i = function (t) {
                            var e = t.target;
                            mu(e) &&
                              e !== document.activeElement &&
                              (t.preventDefault(),
                              (e.style.transform = "translateY(-2000px)"),
                              e.focus(),
                              requestAnimationFrame(function () {
                                e.style.transform = "";
                              }));
                          },
                          o = function (t) {
                            var e = t.target;
                            mu(e) &&
                              ((e.style.transform = "translateY(-2000px)"),
                              requestAnimationFrame(function () {
                                (e.style.transform = ""),
                                  lu &&
                                    (lu.height < window.innerHeight
                                      ? requestAnimationFrame(function () {
                                          pu(e);
                                        })
                                      : lu.addEventListener(
                                          "resize",
                                          function () {
                                            return pu(e);
                                          },
                                          { once: !0 }
                                        ));
                              }));
                          },
                          a = function () {
                            window.scrollTo(0, 0);
                          },
                          s = window.pageXOffset,
                          u = window.pageYOffset,
                          l = Ds(
                            vu(
                              document.documentElement,
                              "paddingRight",
                              window.innerWidth -
                                document.documentElement.clientWidth +
                                "px"
                            ),
                            vu(document.documentElement, "overflow", "hidden"),
                            vu(document.body, "marginTop", "-" + u + "px")
                          );
                        window.scrollTo(0, 0);
                        var c = Ds(
                          hu(document, "touchstart", n, {
                            passive: !1,
                            capture: !0,
                          }),
                          hu(document, "touchmove", r, {
                            passive: !1,
                            capture: !0,
                          }),
                          hu(document, "touchend", i, {
                            passive: !1,
                            capture: !0,
                          }),
                          hu(document, "focus", o, !0),
                          hu(window, "scroll", a)
                        );
                        return function () {
                          l(), c(), window.scrollTo(s, u);
                        };
                      })()
                    : Ds(
                        vu(
                          document.documentElement,
                          "paddingRight",
                          window.innerWidth -
                            document.documentElement.clientWidth +
                            "px"
                        ),
                        vu(document.documentElement, "overflow", "hidden")
                      )),
                function () {
                  0 === --fu && su();
                }
              );
          },
          [e]
        );
      }
      function vu(t, e, n) {
        var r = t.style[e];
        return (
          (t.style[e] = n),
          function () {
            t.style[e] = r;
          }
        );
      }
      function hu(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            t.removeEventListener(e, n, r);
          }
        );
      }
      function pu(t) {
        for (
          var e = document.scrollingElement || document.documentElement;
          t && t !== e;

        ) {
          var n = js(t);
          if (
            n !== document.documentElement &&
            n !== document.body &&
            n !== t
          ) {
            var r = n.getBoundingClientRect().top,
              i = t.getBoundingClientRect().top;
            i > r + t.clientHeight && (n.scrollTop += i - r);
          }
          t = n.parentElement;
        }
      }
      function mu(t) {
        return (
          (t instanceof HTMLInputElement && !cu.has(t.type)) ||
          t instanceof HTMLTextAreaElement ||
          (t instanceof HTMLElement && t.isContentEditable)
        );
      }
      var yu = {
          wrapper: {
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            pointerEvents: "none",
          },
          backdrop: {
            zIndex: 1,
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            touchAction: "none",
            border: "none",
          },
          container: {
            zIndex: 2,
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "#fff",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
          },
          headerWrapper: { width: "100%" },
          header: {
            height: "40px",
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          indicator: {
            width: "18px",
            height: "4px",
            borderRadius: "99px",
            backgroundColor: "#ddd",
          },
          content: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "0px",
            position: "relative",
          },
          scroller: { height: "100%", overflowY: "auto" },
        },
        gu = [
          "onOpenStart",
          "onOpenEnd",
          "onClose",
          "onCloseStart",
          "onCloseEnd",
          "onSnap",
          "children",
          "disableScrollLocking",
          "isOpen",
          "snapPoints",
          "rootId",
          "mountPoint",
          "style",
          "detent",
          "initialSnap",
          "disableDrag",
          "prefersReducedMotion",
          "tweenConfig",
        ],
        xu = (0, r.forwardRef)(function (t, e) {
          var n = t.onOpenStart,
            o = t.onOpenEnd,
            a = t.onClose,
            s = t.onCloseStart,
            u = t.onCloseEnd,
            l = t.onSnap,
            c = t.children,
            f = t.disableScrollLocking,
            d = void 0 !== f && f,
            v = t.isOpen,
            h = t.snapPoints,
            p = t.rootId,
            m = t.mountPoint,
            y = t.style,
            g = t.detent,
            x = void 0 === g ? "full-height" : g,
            b = t.initialSnap,
            w = void 0 === b ? 0 : b,
            P = t.disableDrag,
            k = void 0 !== P && P,
            E = t.prefersReducedMotion,
            S = void 0 !== E && E,
            T = t.tweenConfig,
            A = void 0 === T ? Ys : T,
            Z = Us(t, gu),
            V = (0, r.useRef)(null),
            D = C(0),
            R = (function () {
              var t = (0, r.useState)(0),
                e = t[0],
                n = t[1];
              return (
                _s(function () {
                  var t = function () {
                    return n(window.innerHeight);
                  };
                  return (
                    window.addEventListener("resize", t),
                    t(),
                    function () {
                      return window.removeEventListener("resize", t);
                    }
                  );
                }, []),
                e
              );
            })(),
            L = M(),
            O = Boolean(S || L),
            j = zs({ type: "tween" }, O ? Xs : A),
            B = C(0),
            F = Bt(B, function (t) {
              return t >= R ? -1 : 9999999;
            }),
            I = Bt(B, function (t) {
              return t >= R ? "hidden" : "visible";
            }),
            N = (0, r.useRef)({
              onOpenStart: n,
              onOpenEnd: o,
              onCloseStart: s,
              onCloseEnd: u,
            });
          _s(function () {
            N.current = {
              onOpenStart: n,
              onOpenEnd: o,
              onCloseStart: s,
              onCloseEnd: u,
            };
          }),
            h &&
              ((h = h.map(function (t) {
                return t > 0 && t <= 1 ? Math.round(t * R) : t < 0 ? R + t : t;
              })),
              console.assert(
                (function (t) {
                  for (var e = 0; e < t.length; e++)
                    if (t[e + 1] > t[e]) return !1;
                  return !0;
                })(h) || 0 === R,
                "Snap points need to be in descending order got: [" + h + "]"
              ));
          var z = tu(function (t, e) {
              var n = e.delta,
                r = B.getVelocity();
              r > 0 && D.set(10),
                r < 0 && D.set(-10),
                B.set(Math.max(B.get() + n.y, 0));
            }),
            U = tu(function (t, e) {
              if (e.velocity.y > 500) a();
              else {
                var n = V.current.getBoundingClientRect().height,
                  r = B.get(),
                  i = 0;
                if (h) {
                  var o = h.map(function (t) {
                    return n - Math.min(t, n);
                  });
                  "content-height" !== x || o.includes(0) || o.unshift(0),
                    (i = Gs(o, r));
                } else r / n > 0.6 && (i = n);
                if (
                  ((i = Ks({ snapTo: i, sheetHeight: n })), Pi(B, i, j), h && l)
                ) {
                  var s = Math.abs(Math.round(h[0] - i)),
                    u = h.indexOf(Gs(h, s));
                  l(u);
                }
                i >= Math.round(n) && a();
              }
              D.set(0);
            });
          (0, r.useEffect)(
            function () {
              if (h && l) {
                var t = v ? w : h.length - 1;
                l(t);
              }
            },
            [v]
          ),
            (0, r.useImperativeHandle)(e, function () {
              return {
                y: B,
                snapTo: function (t) {
                  var e = V.current;
                  if (h && void 0 !== h[t] && null !== e) {
                    var n = e.getBoundingClientRect().height,
                      r = Ks({ snapTo: n - h[t], sheetHeight: n });
                    Pi(B, r, j), l && l(t), r >= n && a();
                  }
                },
              };
            }),
            Js(v, p),
            du({ isDisabled: !0 === d || !v });
          var W = (0, r.useMemo)(
              function () {
                return k
                  ? void 0
                  : {
                      drag: "y",
                      dragElastic: 0,
                      dragMomentum: !1,
                      dragPropagation: !1,
                      onDrag: z,
                      onDragEnd: U,
                    };
              },
              [k]
            ),
            H = {
              y: B,
              sheetRef: V,
              isOpen: v,
              initialSnap: w,
              snapPoints: h,
              detent: x,
              indicatorRotation: D,
              callbacks: N,
              dragProps: W,
              windowHeight: R,
              animationOptions: j,
              reduceMotion: O,
              disableDrag: k,
            },
            Y = (0, r.createElement)(
              ru.Provider,
              { value: H },
              (0, r.createElement)(
                Ps.div,
                Object.assign({}, Z, {
                  ref: e,
                  style: zs({}, yu.wrapper, { zIndex: F, visibility: I }, y),
                }),
                (0, r.createElement)(
                  Ms,
                  null,
                  v
                    ? (0, r.createElement)(
                        au,
                        null,
                        r.Children.map(c, function (t, e) {
                          return (0,
                          r.cloneElement)(t, { key: "sheet-child-" + e });
                        })
                      )
                    : null
                )
              )
            );
          return Hs ? Y : (0, i.createPortal)(Y, null != m ? m : document.body);
        }),
        bu = ["children", "style", "className"],
        wu = (0, r.forwardRef)(function (t, e) {
          var n = t.children,
            i = t.style,
            o = void 0 === i ? {} : i,
            a = t.className,
            s = void 0 === a ? "" : a,
            u = Us(t, bu),
            l = iu(),
            c = l.y,
            f = l.isOpen,
            d = l.callbacks,
            v = l.snapPoints,
            h = l.initialSnap,
            p = void 0 === h ? 0 : h,
            m = l.sheetRef,
            y = l.windowHeight,
            g = l.detent,
            x = l.animationOptions,
            b = l.reduceMotion,
            w = (function (t, e) {
              var n = Qs(t),
                i = (0, r.useRef)(!1),
                o = (0, r.useCallback)(
                  function () {
                    i.current
                      ? (null == e.current.onCloseEnd || e.current.onCloseEnd(),
                        (i.current = !1))
                      : (null == e.current.onOpenEnd || e.current.onOpenEnd(),
                        (i.current = !0));
                  },
                  [t, n]
                );
              return (
                (0, r.useEffect)(
                  function () {
                    !n && t
                      ? null == e.current.onOpenStart || e.current.onOpenStart()
                      : !t &&
                        n &&
                        (null == e.current.onCloseStart ||
                          e.current.onCloseStart());
                  },
                  [t, n]
                ),
                { handleAnimationComplete: o }
              );
            })(f, d),
            P = w.handleAnimationComplete,
            k = v ? v[0] - v[p] : 0,
            E = v ? v[0] : null,
            C = null !== E ? "min(" + E + "px, " + Ws + ")" : Ws;
          return (0,
          r.createElement)(Ps.div, Object.assign({}, u, { ref: $s([m, e]), className: "react-modal-sheet-container " + s, style: zs({}, yu.container, o, "full-height" === g && { height: C }, "content-height" === g && { maxHeight: C }, { y: c }), initial: !b && { y: y }, animate: { y: k, transition: x }, exit: { y: y, transition: x }, onAnimationComplete: P }), n);
        }),
        Pu = ["children", "style", "disableDrag", "className"],
        ku = (0, r.forwardRef)(function (t, e) {
          var n = t.children,
            i = t.style,
            o = t.disableDrag,
            a = t.className,
            s = void 0 === a ? "" : a,
            u = Us(t, Pu),
            l = iu(),
            c = uu(),
            f = nu(),
            d = f.constraintsRef,
            v = f.onMeasureDragConstraints,
            h = o || c.disableDrag ? void 0 : l.dragProps;
          return (0,
          r.createElement)(Ps.div, Object.assign({}, u, { ref: $s([e, d]), className: "react-modal-sheet-content " + s, style: zs({}, yu.content, i) }, h, { dragConstraints: d, onMeasureDragConstraints: v }), n);
        }),
        Eu = ["children", "style", "disableDrag"],
        Cu = (0, r.forwardRef)(function (t, e) {
          var n = t.children,
            i = t.style,
            o = t.disableDrag,
            a = Us(t, Eu),
            s = iu(),
            u = s.indicatorRotation,
            l = s.dragProps,
            c = nu(),
            f = c.constraintsRef,
            d = c.onMeasureDragConstraints,
            v = o ? void 0 : l,
            h = Bt(u, function (t) {
              return "translateX(2px) rotate(" + t + "deg)";
            }),
            p = Bt(u, function (t) {
              return "translateX(-2px) rotate(" + -1 * t + "deg)";
            });
          return (0,
          r.createElement)(Ps.div, Object.assign({}, a, { ref: $s([e, f]), style: zs({}, yu.headerWrapper, i) }, v, { dragConstraints: f, onMeasureDragConstraints: d }), n || (0, r.createElement)("div", { className: "react-modal-sheet-header", style: yu.header }, (0, r.createElement)(Ps.span, { className: "react-modal-sheet-drag-indicator", style: zs({}, yu.indicator, { transform: h }) }), (0, r.createElement)(Ps.span, { className: "react-modal-sheet-drag-indicator", style: zs({}, yu.indicator, { transform: p }) })));
        }),
        Su = ["style", "className"],
        Tu = function (t) {
          return !!t.onClick || !!t.onTap;
        },
        Au = (0, r.forwardRef)(function (t, e) {
          var n = t.style,
            i = void 0 === n ? {} : n,
            o = t.className,
            a = void 0 === o ? "" : o,
            s = Us(t, Su),
            u = Tu(s) ? Ps.button : Ps.div,
            l = Tu(s) ? "auto" : "none";
          return (0,
          r.createElement)(u, Object.assign({}, s, { ref: e, className: "react-modal-sheet-backdrop " + a, style: zs({}, yu.backdrop, i, { pointerEvents: l }), initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }));
        }),
        Zu = ["draggableAt", "children", "style", "className"],
        Mu = (0, r.forwardRef)(function (t, e) {
          var n = t.draggableAt,
            i = void 0 === n ? "top" : n,
            o = t.children,
            a = t.style,
            s = t.className,
            u = void 0 === s ? "" : s,
            l = Us(t, Zu),
            c = uu();
          function f(t) {
            var e = t.scrollTop,
              n = t.scrollHeight,
              r = t.clientHeight;
            if (n > r) {
              var o = e <= 0,
                a = n - e === r;
              ("top" === i && o) ||
              ("bottom" === i && a) ||
              ("both" === i && (o || a))
                ? c.setDragEnabled()
                : c.setDragDisabled();
            }
          }
          var d =
            "undefined" !== typeof window &&
            ("ontouchstart" in window || navigator.maxTouchPoints > 0)
              ? {
                  onScroll: function (t) {
                    f(t.currentTarget);
                  },
                  onTouchStart: function (t) {
                    f(t.currentTarget);
                  },
                }
              : void 0;
          return (0,
          r.createElement)("div", Object.assign({}, l, { ref: e, className: "react-modal-sheet-scroller " + u, style: zs({}, yu.scroller, a) }, d), o);
        }),
        Vu = xu;
      (Vu.Container = wu),
        (Vu.Header = Cu),
        (Vu.Content = ku),
        (Vu.Backdrop = Au),
        (Vu.Scroller = Mu);
      var Du = Vu;
    },
  },
]);
//# sourceMappingURL=4190.eb259a6a.chunk.js.map
