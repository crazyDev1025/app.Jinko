"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [1610],
  {
    1610: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return te;
          },
        });
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d = n(74165),
        p = n(15861),
        h = n(29439),
        f = n(30168),
        u = n(72791),
        g = n(26088),
        x = n(47976),
        m = n(57689),
        C = n(93539),
        w = n(91580),
        v = n(42164),
        j = n(98296),
        y = n(94969),
        k = n(69655),
        b = n(24805),
        Z = n(38062),
        F = n(76601),
        M = n(95099),
        L = n(37623),
        z = function (e, t) {
          var n;
          void 0 === t && (t = {});
          var i = t.defaultPageSize,
            r = void 0 === i ? 10 : i,
            o = t.defaultCurrent,
            a = void 0 === o ? 1 : o,
            s = (0, F._T)(t, ["defaultPageSize", "defaultCurrent"]),
            l = (0, L.Z)(
              e,
              (0, F.pi)(
                {
                  defaultParams: [{ current: a, pageSize: r }],
                  refreshDepsAction: function () {
                    C(1);
                  },
                },
                s
              )
            ),
            c = l.params[0] || {},
            d = c.current,
            p = void 0 === d ? 1 : d,
            h = c.pageSize,
            f = void 0 === h ? r : h,
            g = (null === (n = l.data) || void 0 === n ? void 0 : n.total) || 0,
            x = (0, u.useMemo)(
              function () {
                return Math.ceil(g / f);
              },
              [f, g]
            ),
            m = function (e, t) {
              var n = e <= 0 ? 1 : e,
                i = t <= 0 ? 1 : t,
                r = Math.ceil(g / i);
              n > r && (n = Math.max(1, r));
              var o = (0, F.CR)(l.params || []),
                a = o[0],
                s = void 0 === a ? {} : a,
                c = o.slice(1);
              l.run.apply(
                l,
                (0, F.ev)(
                  [(0, F.pi)((0, F.pi)({}, s), { current: n, pageSize: i })],
                  (0, F.CR)(c),
                  !1
                )
              );
            },
            C = function (e) {
              m(e, f);
            };
          return (0, F.pi)((0, F.pi)({}, l), {
            pagination: {
              current: p,
              pageSize: f,
              total: g,
              totalPage: x,
              onChange: (0, M.Z)(m),
              changeCurrent: (0, M.Z)(C),
              changePageSize: (0, M.Z)(function (e) {
                m(p, e);
              }),
            },
          });
        },
        H = n(65370),
        V = (n(57631), n(80184)),
        S = u.createContext({
          username: "",
          setUsername: function (e) {
            return null;
          },
        }),
        P = n(56666),
        E = n(50888),
        _ = n(27498),
        B = n(46553),
        T = n(29672),
        R = n(938),
        W = n(45987),
        I = ["active", "onChange", "children"],
        U = g.Z.li(
          i ||
            (i = (0, f.Z)([
              "\nmargin-bottom:0px;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\npadding:0px 10px;\ncursor:pointer;\n// gap:5px;\nheight:100%;\nbackground-color:transparent;\n",
            ]))
        ),
        D = function (e) {
          var t = e.active,
            n = e.children;
          return 1 === n.length || void 0 === n.length
            ? (0, V.jsx)(V.Fragment, { children: n })
            : (0, V.jsx)(V.Fragment, { children: n[t] });
        },
        O = function (e) {
          var t = e.active,
            n = e.onChange,
            i = e.children;
          (0, W.Z)(e, I);
          return 1 === i.length || void 0 === i.length
            ? (0, V.jsx)(V.Fragment, {
                children: (0, V.jsxs)(U, {
                  children: [
                    i.props.children,
                    (0, V.jsx)("div", {
                      style: {
                        borderBottom: "3px solid var(--primaryColor)",
                        width: "50%",
                      },
                    }),
                  ],
                }),
              })
            : (0, V.jsx)(V.Fragment, {
                children: i.map(function (e, i) {
                  return (0, V.jsxs)(U, {
                    onClick: function () {
                      return n(i);
                    },
                    children: [
                      e.props.children,
                      (0, V.jsx)("div", {
                        style: {
                          borderBottom:
                            i === t
                              ? "3px solid var(--primaryColor)"
                              : "1px solid transparent",
                          width: "50%",
                        },
                      }),
                    ],
                  });
                }),
              });
        },
        A = n(75366),
        Y = ["active", "onChange", "children"],
        G =
          (g.Z.li(
            r ||
              (r = (0, f.Z)([
                "\nmargin-bottom:0px;\ndisplay:flex;\nflex-direction:column;\nalign-items:start;\npadding:0px 10px;\ncursor:pointer;\n// gap:5px;\nheight:100%;\n",
              ]))
          ),
          (0, g.Z)(A.ZP)(
            o ||
              (o = (0, f.Z)([
                "\nborder-radius: ",
                ";\nbackground: ",
                "!important;\npadding:3px 8px!important;\n// height:32px;\n// min-width:110px;\n:hover {\n    cursor: pointer;\n  }\n:disabled {\n  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;\n  animation-name: none;\n}\n",
              ])),
            function (e) {
              return e.borderradius;
            },
            function (e) {
              return e.bg;
            }
          ),
          (0, g.Z)(v.k)(a || (a = (0, f.Z)(["\n  cursor:pointer;\n"])))),
        J = (0, g.Z)(v.k)(
          s ||
            (s = (0, f.Z)([
              "\n width: 233px;\n height: 116px;\n background: black;\n position: absolute;\n top: 25px;\n z-index:201;\n right: 0px;\n padding: 10px;\n box-shadow: 0px 0px 15px 0px rgba(52, 70, 233, 0.25);\nborder: 1px solid #777E90;\n",
            ]))
        ),
        N = function (e) {
          var t = e.active,
            n = e.children;
          (0, C.Z)();
          return 1 === n.length || void 0 === n.length
            ? (0, V.jsx)(V.Fragment, { children: n })
            : (0, V.jsx)(V.Fragment, { children: n[t] });
        },
        q = function (e) {
          var t = e.active,
            n = e.onChange,
            i = e.children,
            r = ((0, W.Z)(e, Y), (0, C.Z)()),
            o = u.useState(!1),
            a = (0, h.Z)(o, 2),
            s = a[0],
            l = a[1];
          return (0, V.jsxs)(v.k, {
            direction: "column",
            style: { position: "relative", width: "100%" },
            children: [
              (0, V.jsxs)(G, {
                align: "center",
                style: { placeContent: "space-between", width: "100%" },
                children: [
                  (0, V.jsx)("div", {}),
                  (0, V.jsxs)(v.k, {
                    gap: "10px",
                    align: "center",
                    onClick: function () {
                      l(!s);
                    },
                    children: [
                      (0, V.jsx)(E.tP, {
                        size: "clamp(0.85rem,2vw,0.875rem)",
                        color: "white",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily3)",
                          textTransform: "capitalize",
                          lineHeight: "clamp(0.9rem,2vw,0.938rem)",
                        },
                        children: "".concat(
                          r.formatMessage({
                            id: "filter-by",
                            defaultMessage: "Filter By",
                          })
                        ),
                      }),
                      (0, V.jsx)("svg", {
                        width: "8",
                        height: "12",
                        viewBox: "0 0 8 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, V.jsx)("path", {
                          d: "M8.00078 4.8H0.800781L4.40078 0L8.00078 4.8ZM0.800781 7.2H8.00078L4.40078 12L0.800781 7.2Z",
                          fill: "#E5FF00",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              s &&
                (0, V.jsx)(J, {
                  direction: "column",
                  isShow: s,
                  children: i.map(function (e, i) {
                    return (0, V.jsxs)(v.k, {
                      role: "button",
                      align: "center",
                      onClick: function () {
                        n(i), l(!s);
                      },
                      style: {
                        padding: "12px",
                        cursor: "pointer",
                        justifyContent: "space-between",
                        minHeight: "48px",
                      },
                      children: [
                        (0, V.jsx)(E.tP, {
                          size: "clamp(0.85rem,2vw,0.875rem)",
                          color: i === t ? "#E5FF00" : "##444A50",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily3)",
                            textTransform: "capitalize",
                            lineHeight: "clamp(0.9rem,2vw,0.938rem)",
                          },
                          children:
                            e.props.children.props.children.props.children,
                        }),
                        i === t &&
                          (0, V.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, V.jsx)("path", {
                              d: "M20.5 6.41L8.5 18.41L3 12.91L4.41 11.5L8.5 15.58L19.09 5L20.5 6.41Z",
                              fill: "#E5FF00",
                            }),
                          }),
                      ],
                    });
                  }),
                }),
            ],
          });
        },
        Q = g.Z.ul(
          l ||
            (l = (0, f.Z)([
              "\n  position: relative;\n  display:flex;\n  background:transparent;\n  margin:0px;\n  z-index: 200;\n  flex-direction: row;\n  justify-content: flex-start;\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    width:100%;\n    height:fit-content;\n    gap:10px;\n    padding:0px;\n  }\n",
            ]))
        ),
        $ = g.Z.img(
          c ||
            (c = (0, f.Z)([
              "\nheight: 70px;\nmin-width: 115px; \nmax-width: 115px;\nborder-radius: 4px; \nobject-fit: contain;\nbackground-color: black;\n",
            ]))
        ),
        K = "open",
        X = "close";
      function ee(e, t) {
        switch (t.type) {
          case K:
            return { isVisible: !0, job: t.payload };
          case X:
            return { isVisible: !1, job: null };
          default:
            return e;
        }
      }
      var te = function () {
        var e,
          t,
          n = (0, C.Z)(),
          i = (0, m.s0)(),
          r = (0, H.q)(),
          o = r.tokenValidity,
          a = r.content,
          s = (0, B.xp)().onGetVideoWithoutSubtitle,
          l = (0, T.r)().onGetVideoSubtitle,
          c = (0, k.zn)().notify,
          f = (0, b.useMediaQuery)({ query: "(max-width: 992px)" }),
          g = (0, P.$)().currentLanguage.locale,
          F = (0, R.Z)().onGetTranslation,
          M = (0, u.useContext)(S),
          L = (M.username, M.setUsername, (0, u.useState)(!0)),
          W = (0, h.Z)(L, 2),
          I = W[0],
          U = W[1],
          A = (0, u.useState)(0),
          Y = (0, h.Z)(A, 2),
          G = Y[0],
          J = Y[1],
          K = (0, u.useState)(0),
          X = (0, h.Z)(K, 2),
          te = X[0],
          ne = X[1],
          ie = (0, u.useRef)(null),
          re = u.useRef(),
          oe = (0, u.useReducer)(ee, { isVisible: !1, job: null }),
          ae = (0, h.Z)(oe, 2),
          se = ae[0],
          le = ae[1],
          ce = (0, u.useState)(!1),
          de = (0, h.Z)(ce, 2),
          pe =
            (de[0], de[1], (0, u.useReducer)(ee, { isVisible: !1, job: null })),
          he = (0, h.Z)(pe, 2),
          fe = he[0],
          ue = he[1],
          ge = (0, u.useReducer)(ee, { isVisible: !1, job: null }),
          xe = (0, h.Z)(ge, 2),
          me = xe[0],
          Ce = xe[1],
          we = z(
            function (e) {
              var t = e.current,
                n = e.pageSize;
              return s(a.token, "", t, n).then(function (e) {
                if (e.error || e.data.error) throw new Error(e.data.message);
                return { list: e.data.data.jobs, total: e.data.max_page };
              });
            },
            {
              defaultPageSize: 10,
              defaultCurrent: 1,
              ready: !!a && !!a.token && 0 === te,
              onBefore: function () {
                U(!0);
              },
              onFinally: function () {
                U(!1);
              },
              onError: function (e) {
                c(F(e.message), "error");
              },
            }
          ),
          ve = z(
            function (e) {
              var t = e.current,
                n = e.pageSize;
              return l(a.token, "", t, n).then(function (e) {
                if (e.error || e.data.error) throw new Error(e.data.message);
                return { list: e.data.data.jobs, total: e.data.max_page };
              });
            },
            {
              defaultPageSize: 10,
              defaultCurrent: 1,
              ready: !!a && !!a.token && 1 === te,
              onBefore: function () {
                U(!0);
              },
              onFinally: function () {
                U(!1);
              },
              onError: function (e) {
                c(F(e.message), "error");
              },
            }
          ),
          je = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e() {
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          i("/editor");
                        } catch (t) {
                          c(F(t.message), "error");
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          ye = function (e, t) {
            t.stopPropagation(), le({ type: "open", payload: e });
          },
          ke = function () {
            le({ type: "close", payload: null });
          },
          be = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e(t) {
                var n;
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        null !== (n = t.metadata.params) &&
                        void 0 !== n &&
                        n.input_subtitle_url
                          ? i("/player/1/".concat(t.id))
                          : i("/player/0/".concat(t.id));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          Ze = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e() {
                var t, n, i, r;
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch(se.job.result[0]);
                      case 2:
                        return (t = e.sent), (e.next = 5), t.blob();
                      case 5:
                        (n = e.sent),
                          (i = window.URL.createObjectURL(n)),
                          ((r = document.createElement("a")).href = i),
                          (r.download = "".concat(
                            se.job.metadata.title,
                            ".mp4"
                          )),
                          r.click(),
                          window.URL.revokeObjectURL(i);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Fe = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e() {
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          0 === te
                            ? we.run({
                                current: we.pagination.current,
                                pageSize: we.pagination.pageSize,
                              })
                            : 1 === te &&
                              ve.run({
                                current: ve.pagination.current,
                                pageSize: ve.pagination.pageSize,
                              }),
                            ue({ type: "close", payload: null });
                        } catch (t) {
                          c(F(t.message), "error"),
                            ue({ type: "close", payload: null });
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Me = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e() {
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          ie.current.play(),
                            0 === te
                              ? we.run({
                                  current: we.pagination.current,
                                  pageSize: we.pagination.pageSize,
                                })
                              : 1 === te &&
                                ve.run({
                                  current: ve.pagination.current,
                                  pageSize: ve.pagination.pageSize,
                                });
                        } catch (t) {
                          c(F(t.message), "error");
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Le = (function () {
            var e = (0, p.Z)(
              (0, d.Z)().mark(function e() {
                return (0, d.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        try {
                          0 === te
                            ? we.run({
                                current: we.pagination.current,
                                pageSize: we.pagination.pageSize,
                              })
                            : 1 === te &&
                              ve.run({
                                current: ve.pagination.current,
                                pageSize: ve.pagination.pageSize,
                              }),
                            Ce({ type: "close", payload: null });
                        } catch (t) {
                          c(F(t.message), "error"),
                            Ce({ type: "close", payload: null });
                        }
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, u.useEffect)(
            function () {
              !1 === o && i("/dashboard");
            },
            [o, i, a]
          ),
          (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(_.vW, {
                show: fe.isVisible,
                onClose: function () {
                  ue({ type: "close", payload: null });
                },
                onSave: Fe,
                jobInfo: fe.job,
              }),
              (0, V.jsx)(_.Oj, {
                show: me.isVisible,
                onClose: function () {
                  Ce({ type: "close", payload: null });
                },
                onSave: Le,
                jobInfo: me.job,
              }),
              (0, V.jsxs)("div", {
                id: "opentalker-container",
                style: { height: "100%", display: "contents" },
                children: [
                  (0, V.jsx)(w.W, {
                    style: {
                      paddingBottom: "14px",
                      overflow: "hidden",
                      height: "100%",
                    },
                    children: (0, V.jsxs)(v.k, {
                      direction: "column",
                      gap: "20px",
                      style: { height: "100%", overflow: "hidden" },
                      children: [
                        (0, V.jsx)(v.k, {
                          justify: "space-between",
                          style: { width: "100%" },
                          children: (0, V.jsx)(j.z, {
                            variant: "iconWithTransparentBg",
                            onClick: function () {
                              i("/dashboard");
                            },
                            children: (0, V.jsxs)("svg", {
                              width: "34",
                              height: "34",
                              viewBox: "0 0 34 34",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, V.jsx)("path", {
                                  d: "M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z",
                                  fill: "url(#paint0_linear_4322_13710)",
                                }),
                                (0, V.jsx)("path", {
                                  d: "M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z",
                                  fill: "black",
                                  stroke: "black",
                                  strokeWidth: "0.5",
                                }),
                                (0, V.jsx)("path", {
                                  d: "M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z",
                                  fill: "black",
                                  stroke: "black",
                                  strokeWidth: "0.5",
                                }),
                                (0, V.jsx)("defs", {
                                  children: (0, V.jsxs)("linearGradient", {
                                    id: "paint0_linear_4322_13710",
                                    x1: "17",
                                    y1: "0",
                                    x2: "17",
                                    y2: "34",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [
                                      (0, V.jsx)("stop", {
                                        stopColor: "#E5FF00",
                                      }),
                                      (0, V.jsx)("stop", {
                                        offset: "0.546875",
                                        stopColor: "#E5FF00",
                                      }),
                                      (0, V.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E5FF00",
                                      }),
                                      (0, V.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#E5FF00",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, V.jsx)(v.k, {
                          style: { height: "120px" },
                          p: "5px",
                          children: (0, V.jsx)(j.z, {
                            variant: "studioVideoList",
                            onClick: function () {
                              je();
                            },
                            styles: function () {
                              return {
                                root: { padding: "25px" },
                                label: { justifyContent: "center" },
                              };
                            },
                            children: (0, V.jsxs)(v.k, {
                              gap: "20px",
                              children: [
                                (0, V.jsxs)("svg", {
                                  width: "60",
                                  height: "60",
                                  viewBox: "0 0 60 60",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, V.jsxs)("g", {
                                      clipPath: "url(#clip0_4463_12743)",
                                      children: [
                                        (0, V.jsx)("circle", {
                                          cx: "30",
                                          cy: "30",
                                          r: "30",
                                          fill: "#E5FF00",
                                        }),
                                        (0, V.jsx)("path", {
                                          d: "M22.9258 30.0002C22.9258 29.7184 23.0377 29.4481 23.237 29.2489C23.4362 29.0496 23.7065 28.9377 23.9883 28.9377H28.9367V23.9893C28.9367 23.7075 29.0486 23.4372 29.2479 23.238C29.4472 23.0387 29.7174 22.9268 29.9992 22.9268C30.281 22.9268 30.5512 23.0387 30.7505 23.238C30.9498 23.4372 31.0617 23.7075 31.0617 23.9893V28.9377H36.0101C36.2919 28.9377 36.5622 29.0496 36.7614 29.2489C36.9607 29.4481 37.0726 29.7184 37.0726 30.0002C37.0726 30.282 36.9607 30.5522 36.7614 30.7515C36.5622 30.9507 36.2919 31.0627 36.0101 31.0627H31.0617V36.0111C31.0617 36.2929 30.9498 36.5631 30.7505 36.7624C30.5512 36.9616 30.281 37.0736 29.9992 37.0736C29.7174 37.0736 29.4472 36.9616 29.2479 36.7624C29.0486 36.5631 28.9367 36.2929 28.9367 36.0111V31.0627H23.9883C23.7065 31.0627 23.4362 30.9507 23.237 30.7515C23.0377 30.5522 22.9258 30.282 22.9258 30.0002Z",
                                          fill: "black",
                                        }),
                                        (0, V.jsx)("path", {
                                          fillRule: "evenodd",
                                          clipRule: "evenodd",
                                          d: "M23.3655 18.3393C27.7748 17.8505 32.2247 17.8505 36.634 18.3393C39.2222 18.6283 41.3118 20.6668 41.615 23.2693C42.1392 27.7417 42.1392 32.2594 41.615 36.7318C41.3104 39.3343 39.2208 41.3714 36.634 41.6618C32.2247 42.1507 27.7748 42.1507 23.3655 41.6618C20.7772 41.3714 18.6877 39.3343 18.3845 36.7318C17.8614 32.2596 17.8614 27.7415 18.3845 23.2693C18.6877 20.6668 20.7787 18.6283 23.3655 18.3393ZM36.3988 20.4501C32.1458 19.9787 27.8537 19.9787 23.6007 20.4501C22.8133 20.5374 22.0784 20.8877 21.5147 21.4442C20.951 22.0007 20.5914 22.731 20.4939 23.5172C19.9901 27.8252 19.9901 32.1773 20.4939 36.4853C20.5917 37.2712 20.9514 38.0012 21.5151 38.5575C22.0788 39.1137 22.8135 39.4637 23.6007 39.551C27.8181 40.0213 32.1814 40.0213 36.3988 39.551C37.1857 39.4634 37.9201 39.1133 38.4835 38.5571C39.0469 38.0008 39.4065 37.271 39.5042 36.4853C40.008 32.1773 40.008 27.8252 39.5042 23.5172C39.4062 22.7318 39.0465 22.0023 38.4831 21.4463C37.9197 20.8904 37.1855 20.5404 36.3988 20.4529V20.4501Z",
                                          fill: "black",
                                        }),
                                      ],
                                    }),
                                    (0, V.jsx)("defs", {
                                      children: (0, V.jsx)("clipPath", {
                                        id: "clip0_4463_12743",
                                        children: (0, V.jsx)("rect", {
                                          width: "60",
                                          height: "60",
                                          fill: "white",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, V.jsxs)(v.k, {
                                  direction: "column",
                                  align: "start",
                                  justify: "center",
                                  gap: "4px",
                                  children: [
                                    (0, V.jsx)(E.tP, {
                                      size: "clamp(1.3rem,2vw,1.4rem)",
                                      color: "white",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        whiteSpace: "nowrap",
                                        lineHeight: "clamp(1rem,2vw,1rem)",
                                      },
                                      children: n.formatMessage({
                                        id: "generate-reel",
                                        defaultMessage: "Generate Reel",
                                      }),
                                    }),
                                    (0, V.jsx)(E.tP, {
                                      size: "clamp(1rem,2vw,1rem)",
                                      color: "white",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        whiteSpace: "nowrap",
                                        lineHeight: "clamp(1rem,2vw,1rem)",
                                      },
                                      children: f
                                        ? n.formatMessage({
                                            id: "tap-to-create-your-video",
                                            defaultMessage:
                                              "Tap to create your video",
                                          })
                                        : n.formatMessage({
                                            id: "tap-to-create-your-personalized",
                                            defaultMessage:
                                              "Tap to create your personalized AI-powered video",
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, V.jsxs)(v.k, {
                          direction: "column",
                          gap: "5px",
                          style: { height: "100%", overflow: "hidden" },
                          children: [
                            (0, V.jsx)(Q, {
                              children: (0, V.jsx)(O, {
                                active: G,
                                onChange: function (e) {
                                  return J(e);
                                },
                                children: (0, V.jsx)(V.Fragment, {
                                  children: (0, V.jsxs)(v.k, {
                                    gap: "5px",
                                    align: "center",
                                    children: [
                                      (0, V.jsx)(E.tP, {
                                        size: "clamp(1rem,2vw,1.125rem)",
                                        color: "white",
                                        weight: "bold",
                                        css: {
                                          fontFamily: "var(--fontFamily3)",
                                          textTransform: "capitalize",
                                        },
                                        children: "".concat(
                                          n.formatMessage({
                                            id: "your-video",
                                            defaultMessage: "Your Video",
                                          })
                                        ),
                                      }),
                                      (0, V.jsx)(j.z, {
                                        variant: "iconWithTransparentBg",
                                        onClick: function () {
                                          Me();
                                        },
                                        children: (0, V.jsx)(Z.J5, {
                                          ref: ie,
                                          src: "../../lotties/your-video-loader.json",
                                          className: "player",
                                          style: {
                                            height: "24px",
                                            width: "24px",
                                          },
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            (0, V.jsx)(D, {
                              active: G,
                              children: (0, V.jsxs)(v.k, {
                                direction: "column",
                                gap: "10px",
                                style: { height: "100%", overflow: "hidden" },
                                children: [
                                  (0, V.jsx)(v.k, {
                                    style: {
                                      width: "100%",
                                      padding: "0px 10px",
                                    },
                                    children: (0, V.jsxs)(q, {
                                      active: te,
                                      onChange: function (e) {
                                        ne(e);
                                      },
                                      children: [
                                        (0, V.jsx)(V.Fragment, {
                                          children: (0, V.jsx)(v.k, {
                                            gap: "5px",
                                            align: "center",
                                            children: (0, V.jsx)(E.tP, {
                                              size: "clamp(0.85rem,2vw,0.875rem)",
                                              color: "white",
                                              weight: "bold",
                                              css: {
                                                fontFamily:
                                                  "var(--fontFamily3)",
                                                textTransform: "capitalize",
                                              },
                                              children: "".concat(
                                                n.formatMessage({
                                                  id: "without-captions",
                                                  defaultMessage:
                                                    "Without Captions",
                                                })
                                              ),
                                            }),
                                          }),
                                        }),
                                        (0, V.jsx)(V.Fragment, {
                                          children: (0, V.jsx)(v.k, {
                                            gap: "5px",
                                            children: (0, V.jsx)(E.tP, {
                                              size: "clamp(0.85rem,2vw,0.875rem)",
                                              color: "white",
                                              weight: "bold",
                                              css: {
                                                fontFamily:
                                                  "var(--fontFamily3)",
                                                textTransform: "capitalize",
                                              },
                                              children: "".concat(
                                                n.formatMessage({
                                                  id: "with-captions",
                                                  defaultMessage:
                                                    "With Captions",
                                                })
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, V.jsxs)(N, {
                                    active: te,
                                    children: [
                                      (0, V.jsx)(v.k, {
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                          overflowY: "auto",
                                        },
                                        children: I
                                          ? (0, V.jsx)(v.k, {
                                              gap: "5px",
                                              direction: "column",
                                              align: "center",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                                justifyContent: "center",
                                              },
                                              children: (0, V.jsx)(Z.J5, {
                                                src: "./lotties/loading-icon.json",
                                                className: "player",
                                                loop: !0,
                                                autoplay: !0,
                                                style: {
                                                  height: "250px",
                                                  width: "250px",
                                                },
                                              }),
                                            })
                                          : (0, V.jsx)(v.k, {
                                              direction: "column",
                                              gap: "5px",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                                overflowY: "hidden",
                                                padding: "5px 10px",
                                              },
                                              children:
                                                (null === (e = we.data) ||
                                                void 0 === e
                                                  ? void 0
                                                  : e.list.length) > 0
                                                  ? (0, V.jsxs)(V.Fragment, {
                                                      children: [
                                                        (0, V.jsx)(v.k, {
                                                          direction: "column",
                                                          gap: "5px",
                                                          style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            overflowY: "scroll",
                                                            padding: "5px",
                                                          },
                                                          children:
                                                            we.data.list.map(
                                                              function (e, t) {
                                                                var i;
                                                                return (0,
                                                                V.jsxs)(
                                                                  j.z,
                                                                  {
                                                                    variant:
                                                                      "studioVideoList",
                                                                    role: "button",
                                                                    onClick:
                                                                      function () {
                                                                        be(e);
                                                                      },
                                                                    disabled:
                                                                      e.is_failed ||
                                                                      "pending" ===
                                                                        e.status,
                                                                    children: [
                                                                      (0,
                                                                      V.jsx)(
                                                                        $,
                                                                        {
                                                                          src:
                                                                            null ===
                                                                              (i =
                                                                                e
                                                                                  .metadata
                                                                                  .params) ||
                                                                            void 0 ===
                                                                              i
                                                                              ? void 0
                                                                              : i.input_image,
                                                                          alt: "video ".concat(
                                                                            t
                                                                          ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      V.jsxs)(
                                                                        v.k,
                                                                        {
                                                                          direction:
                                                                            "row",
                                                                          justify:
                                                                            "space-between",
                                                                          style:
                                                                            {
                                                                              width:
                                                                                "100%",
                                                                              overflow:
                                                                                "hidden",
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              V.jsxs)(
                                                                                v.k,
                                                                                {
                                                                                  direction:
                                                                                    "column",
                                                                                  gap: "5px",
                                                                                  style:
                                                                                    {
                                                                                      textAlign:
                                                                                        "start",
                                                                                      textAlignLast:
                                                                                        "start",
                                                                                      overflow:
                                                                                        "hidden",
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      V.jsxs)(
                                                                                        v.k,
                                                                                        {
                                                                                          gap: "5px",
                                                                                          style:
                                                                                            {
                                                                                              alignItems:
                                                                                                "center",
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              (0,
                                                                                              V.jsx)(
                                                                                                E.tP,
                                                                                                {
                                                                                                  size: "clamp(1rem,2vw,1.125rem)",
                                                                                                  color:
                                                                                                    "#ffffff",
                                                                                                  weight:
                                                                                                    "bold",
                                                                                                  css: {
                                                                                                    fontFamily:
                                                                                                      "var(--fontFamily3)",
                                                                                                    textTransform:
                                                                                                      "capitalize",
                                                                                                    lineHeight:
                                                                                                      "clamp(1rem,2vw,1.125rem)",
                                                                                                    overflow:
                                                                                                      "hidden",
                                                                                                    textOverflow:
                                                                                                      "ellipsis",
                                                                                                  },
                                                                                                  children:
                                                                                                    e
                                                                                                      .metadata
                                                                                                      .title ||
                                                                                                    ""
                                                                                                      .concat(
                                                                                                        n.formatMessage(
                                                                                                          {
                                                                                                            id: "video",
                                                                                                            defaultMessage:
                                                                                                              "Video",
                                                                                                          }
                                                                                                        ),
                                                                                                        " "
                                                                                                      )
                                                                                                      .concat(
                                                                                                        t +
                                                                                                          1
                                                                                                      ),
                                                                                                }
                                                                                              ),
                                                                                              e.is_failed
                                                                                                ? (0,
                                                                                                  V.jsx)(
                                                                                                    E.tP,
                                                                                                    {
                                                                                                      size: "clamp(0.75rem,2vw,0.8rem)",
                                                                                                      color:
                                                                                                        "red",
                                                                                                      weight:
                                                                                                        "bold",
                                                                                                      css: {
                                                                                                        border:
                                                                                                          "2px solid red",
                                                                                                        borderRadius:
                                                                                                          "5px",
                                                                                                        padding:
                                                                                                          "3px",
                                                                                                        fontFamily:
                                                                                                          "var(--fontFamily3)",
                                                                                                        textTransform:
                                                                                                          "uppercase",
                                                                                                        lineHeight:
                                                                                                          "clamp(0.75rem,2vw,0.8rem)",
                                                                                                      },
                                                                                                      children:
                                                                                                        "".concat(
                                                                                                          n.formatMessage(
                                                                                                            {
                                                                                                              id: "failed",
                                                                                                              defaultMessage:
                                                                                                                "Failed",
                                                                                                            }
                                                                                                          )
                                                                                                        ),
                                                                                                    }
                                                                                                  )
                                                                                                : "",
                                                                                              "pending" ===
                                                                                              e.status
                                                                                                ? (0,
                                                                                                  V.jsx)(
                                                                                                    E.tP,
                                                                                                    {
                                                                                                      size: "clamp(0.75rem,2vw,0.8rem)",
                                                                                                      color:
                                                                                                        "#ffffff",
                                                                                                      weight:
                                                                                                        "bold",
                                                                                                      css: {
                                                                                                        border:
                                                                                                          "2px solid #ffffff",
                                                                                                        borderRadius:
                                                                                                          "5px",
                                                                                                        padding:
                                                                                                          "3px",
                                                                                                        fontFamily:
                                                                                                          "var(--fontFamily3)",
                                                                                                        textTransform:
                                                                                                          "uppercase",
                                                                                                        lineHeight:
                                                                                                          "clamp(0.75rem,2vw,0.8rem)",
                                                                                                      },
                                                                                                      children:
                                                                                                        "".concat(
                                                                                                          n.formatMessage(
                                                                                                            {
                                                                                                              id: "processing",
                                                                                                              defaultMessage:
                                                                                                                "Processing",
                                                                                                            }
                                                                                                          )
                                                                                                        ),
                                                                                                    }
                                                                                                  )
                                                                                                : "",
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      V.jsx)(
                                                                                        E.tP,
                                                                                        {
                                                                                          size: "clamp(0.75rem,2vw,0.8rem)",
                                                                                          color:
                                                                                            "#ffffff",
                                                                                          weight:
                                                                                            "bold",
                                                                                          css: {
                                                                                            fontFamily:
                                                                                              "var(--fontFamily3)",
                                                                                            textTransform:
                                                                                              "capitalize",
                                                                                            lineHeight:
                                                                                              "clamp(0.75rem,2vw,0.8rem)",
                                                                                          },
                                                                                          children:
                                                                                            new Date(
                                                                                              1e3 *
                                                                                                parseInt(
                                                                                                  e.created_at
                                                                                                )
                                                                                            ).toLocaleDateString(
                                                                                              g,
                                                                                              {
                                                                                                year: "numeric",
                                                                                                month:
                                                                                                  "numeric",
                                                                                                day: "numeric",
                                                                                                hour: "numeric",
                                                                                                minute:
                                                                                                  "numeric",
                                                                                              }
                                                                                            ),
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              V.jsx)(
                                                                                j.z,
                                                                                {
                                                                                  variant:
                                                                                    "iconWithTransparentBg",
                                                                                  disabled:
                                                                                    e.is_failed,
                                                                                  onClick:
                                                                                    function (
                                                                                      t
                                                                                    ) {
                                                                                      return ye(
                                                                                        e,
                                                                                        t
                                                                                      );
                                                                                    },
                                                                                  children:
                                                                                    (0,
                                                                                    V.jsxs)(
                                                                                      "svg",
                                                                                      {
                                                                                        width:
                                                                                          "4",
                                                                                        height:
                                                                                          "14",
                                                                                        viewBox:
                                                                                          "0 0 4 14",
                                                                                        fill: "none",
                                                                                        xmlns:
                                                                                          "http://www.w3.org/2000/svg",
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            V.jsx)(
                                                                                              "path",
                                                                                              {
                                                                                                d: "M2 2.25C2.41421 2.25 2.75 1.91421 2.75 1.5C2.75 1.08579 2.41421 0.75 2 0.75C1.58579 0.75 1.25 1.08579 1.25 1.5C1.25 1.91421 1.58579 2.25 2 2.25Z",
                                                                                                stroke:
                                                                                                  "#E5FF00",
                                                                                                strokeWidth:
                                                                                                  "1.5",
                                                                                                strokeLinecap:
                                                                                                  "round",
                                                                                                strokeLinejoin:
                                                                                                  "round",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            V.jsx)(
                                                                                              "path",
                                                                                              {
                                                                                                d: "M2 7.75C2.41421 7.75 2.75 7.41421 2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75Z",
                                                                                                stroke:
                                                                                                  "#E5FF00",
                                                                                                strokeWidth:
                                                                                                  "1.5",
                                                                                                strokeLinecap:
                                                                                                  "round",
                                                                                                strokeLinejoin:
                                                                                                  "round",
                                                                                              }
                                                                                            ),
                                                                                            (0,
                                                                                            V.jsx)(
                                                                                              "path",
                                                                                              {
                                                                                                d: "M2 13.25C2.41421 13.25 2.75 12.9142 2.75 12.5C2.75 12.0858 2.41421 11.75 2 11.75C1.58579 11.75 1.25 12.0858 1.25 12.5C1.25 12.9142 1.58579 13.25 2 13.25Z",
                                                                                                stroke:
                                                                                                  "#E5FF00",
                                                                                                strokeWidth:
                                                                                                  "1.5",
                                                                                                strokeLinecap:
                                                                                                  "round",
                                                                                                strokeLinejoin:
                                                                                                  "round",
                                                                                              }
                                                                                            ),
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  e.id
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                        (0, V.jsx)(y.t, {
                                                          position: "center",
                                                          total:
                                                            we.pagination.total,
                                                          value:
                                                            we.pagination
                                                              .current,
                                                          onChange: function (
                                                            e
                                                          ) {
                                                            we.run({
                                                              current: e,
                                                              pageSize:
                                                                we.pagination
                                                                  .pageSize,
                                                            });
                                                          },
                                                          styles: function (e) {
                                                            return {
                                                              control: {
                                                                "&[data-active]":
                                                                  {
                                                                    backgroundImage:
                                                                      e.fn.gradient(
                                                                        {
                                                                          from: "#E5FF00",
                                                                          to: "#E5FF00",
                                                                        }
                                                                      ),
                                                                    color:
                                                                      "#000",
                                                                    border: 0,
                                                                  },
                                                                fontFamily:
                                                                  "var(--fontFamily1)",
                                                                fontWeight:
                                                                  "bold",
                                                              },
                                                            };
                                                          },
                                                        }),
                                                      ],
                                                    })
                                                  : (0, V.jsxs)(v.k, {
                                                      direction: "column",
                                                      align: "center",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                        justifyContent:
                                                          "center",
                                                      },
                                                      children: [
                                                        (0, V.jsx)("img", {
                                                          alt: "not-found",
                                                          src: "/images/opentalker/not-found.svg",
                                                          style: {
                                                            width: "150px",
                                                            height: "150px",
                                                          },
                                                        }),
                                                        (0, V.jsx)(E.tP, {
                                                          size: "clamp(1.5rem,2vw,1.6rem)",
                                                          color: "#777E90",
                                                          weight: "bold",
                                                          css: {
                                                            fontFamily:
                                                              "var(--fontFamily3)",
                                                            fontStyle: "normal",
                                                            lineHeight:
                                                              "clamp(1.5rem,2vw,1.6rem)",
                                                          },
                                                          children: "".concat(
                                                            n.formatMessage({
                                                              id: "oops-its-empty-here",
                                                              defaultMessage:
                                                                "Oops, it's empty here!",
                                                            })
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                      }),
                                      (0, V.jsx)(v.k, {
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                          overflowY: "auto",
                                        },
                                        children: I
                                          ? (0, V.jsx)(v.k, {
                                              direction: "column",
                                              align: "center",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                                justifyContent: "center",
                                              },
                                              children: (0, V.jsx)(Z.J5, {
                                                src: "./lotties/loading-icon.json",
                                                className: "player",
                                                loop: !0,
                                                autoplay: !0,
                                                style: {
                                                  height: "250px",
                                                  width: "250px",
                                                },
                                              }),
                                            })
                                          : (0, V.jsx)(v.k, {
                                              direction: "column",
                                              gap: "5px",
                                              style: {
                                                width: "100%",
                                                height: "100%",
                                                overflowY: "scroll",
                                                padding: "0px 5px 0px 0px",
                                              },
                                              children:
                                                (null === (t = ve.data) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.list.length) > 0
                                                  ? (0, V.jsxs)(V.Fragment, {
                                                      children: [
                                                        (0, V.jsx)(v.k, {
                                                          direction: "column",
                                                          gap: "5px",
                                                          style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            overflowY: "scroll",
                                                            padding: "5px",
                                                          },
                                                          children:
                                                            ve.data.list.map(
                                                              function (e, t) {
                                                                return (0,
                                                                V.jsxs)(j.z, {
                                                                  variant:
                                                                    "studioVideoList",
                                                                  role: "button",
                                                                  onClick:
                                                                    function () {
                                                                      be(e);
                                                                    },
                                                                  disabled:
                                                                    e.is_failed,
                                                                  children: [
                                                                    (0, V.jsx)(
                                                                      $,
                                                                      {
                                                                        src: e
                                                                          .metadata
                                                                          .studio_params
                                                                          .params
                                                                          .input_image,
                                                                        alt: "video ".concat(
                                                                          t
                                                                        ),
                                                                      }
                                                                    ),
                                                                    (0, V.jsxs)(
                                                                      v.k,
                                                                      {
                                                                        direction:
                                                                          "row",
                                                                        justify:
                                                                          "space-between",
                                                                        style: {
                                                                          width:
                                                                            "100%",
                                                                          overflow:
                                                                            "hidden",
                                                                        },
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            V.jsxs)(
                                                                              v.k,
                                                                              {
                                                                                direction:
                                                                                  "column",
                                                                                gap: "5px",
                                                                                style:
                                                                                  {
                                                                                    textAlign:
                                                                                      "start",
                                                                                    textAlignLast:
                                                                                      "start",
                                                                                    overflow:
                                                                                      "hidden",
                                                                                  },
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    V.jsxs)(
                                                                                      v.k,
                                                                                      {
                                                                                        gap: "5px",
                                                                                        style:
                                                                                          {
                                                                                            alignItems:
                                                                                              "center",
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            V.jsx)(
                                                                                              E.tP,
                                                                                              {
                                                                                                size: "clamp(1rem,2vw,1.125rem)",
                                                                                                color:
                                                                                                  "#ffffff",
                                                                                                weight:
                                                                                                  "bold",
                                                                                                css: {
                                                                                                  fontFamily:
                                                                                                    "var(--fontFamily3)",
                                                                                                  textTransform:
                                                                                                    "capitalize",
                                                                                                  lineHeight:
                                                                                                    "clamp(1rem,2vw,1.125rem)",
                                                                                                  overflow:
                                                                                                    "hidden",
                                                                                                  textOverflow:
                                                                                                    "ellipsis",
                                                                                                },
                                                                                                children:
                                                                                                  e
                                                                                                    .metadata
                                                                                                    .title ||
                                                                                                  ""
                                                                                                    .concat(
                                                                                                      n.formatMessage(
                                                                                                        {
                                                                                                          id: "video",
                                                                                                          defaultMessage:
                                                                                                            "Video",
                                                                                                        }
                                                                                                      ),
                                                                                                      " "
                                                                                                    )
                                                                                                    .concat(
                                                                                                      t +
                                                                                                        1
                                                                                                    ),
                                                                                              }
                                                                                            ),
                                                                                            e.is_failed
                                                                                              ? (0,
                                                                                                V.jsx)(
                                                                                                  E.tP,
                                                                                                  {
                                                                                                    size: "clamp(0.75rem,2vw,0.8rem)",
                                                                                                    color:
                                                                                                      "red",
                                                                                                    weight:
                                                                                                      "bold",
                                                                                                    css: {
                                                                                                      border:
                                                                                                        "2px solid red",
                                                                                                      borderRadius:
                                                                                                        "5px",
                                                                                                      padding:
                                                                                                        "3px",
                                                                                                      fontFamily:
                                                                                                        "var(--fontFamily3)",
                                                                                                      textTransform:
                                                                                                        "uppercase",
                                                                                                      lineHeight:
                                                                                                        "clamp(0.75rem,2vw,0.8rem)",
                                                                                                    },
                                                                                                    children:
                                                                                                      "".concat(
                                                                                                        n.formatMessage(
                                                                                                          {
                                                                                                            id: "failed",
                                                                                                            defaultMessage:
                                                                                                              "Failed",
                                                                                                          }
                                                                                                        )
                                                                                                      ),
                                                                                                  }
                                                                                                )
                                                                                              : "",
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    V.jsx)(
                                                                                      E.tP,
                                                                                      {
                                                                                        size: "clamp(0.75rem,2vw,0.8rem)",
                                                                                        color:
                                                                                          "#ffffff",
                                                                                        weight:
                                                                                          "bold",
                                                                                        css: {
                                                                                          fontFamily:
                                                                                            "var(--fontFamily3)",
                                                                                          textTransform:
                                                                                            "capitalize",
                                                                                          lineHeight:
                                                                                            "clamp(0.75rem,2vw,0.8rem)",
                                                                                        },
                                                                                        children:
                                                                                          new Date(
                                                                                            1e3 *
                                                                                              parseInt(
                                                                                                e.created_at
                                                                                              )
                                                                                          ).toLocaleDateString(
                                                                                            g,
                                                                                            {
                                                                                              year: "numeric",
                                                                                              month:
                                                                                                "numeric",
                                                                                              day: "numeric",
                                                                                              hour: "numeric",
                                                                                              minute:
                                                                                                "numeric",
                                                                                            }
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            V.jsx)(
                                                                              j.z,
                                                                              {
                                                                                variant:
                                                                                  "iconWithTransparentBg",
                                                                                disabled:
                                                                                  e.is_failed,
                                                                                onClick:
                                                                                  function (
                                                                                    t
                                                                                  ) {
                                                                                    return ye(
                                                                                      e,
                                                                                      t
                                                                                    );
                                                                                  },
                                                                                children:
                                                                                  (0,
                                                                                  V.jsxs)(
                                                                                    "svg",
                                                                                    {
                                                                                      width:
                                                                                        "4",
                                                                                      height:
                                                                                        "14",
                                                                                      viewBox:
                                                                                        "0 0 4 14",
                                                                                      fill: "none",
                                                                                      xmlns:
                                                                                        "http://www.w3.org/2000/svg",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          V.jsx)(
                                                                                            "path",
                                                                                            {
                                                                                              d: "M2 2.25C2.41421 2.25 2.75 1.91421 2.75 1.5C2.75 1.08579 2.41421 0.75 2 0.75C1.58579 0.75 1.25 1.08579 1.25 1.5C1.25 1.91421 1.58579 2.25 2 2.25Z",
                                                                                              stroke:
                                                                                                "#E5FF00",
                                                                                              strokeWidth:
                                                                                                "1.5",
                                                                                              strokeLinecap:
                                                                                                "round",
                                                                                              strokeLinejoin:
                                                                                                "round",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          V.jsx)(
                                                                                            "path",
                                                                                            {
                                                                                              d: "M2 7.75C2.41421 7.75 2.75 7.41421 2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75Z",
                                                                                              stroke:
                                                                                                "#E5FF00",
                                                                                              strokeWidth:
                                                                                                "1.5",
                                                                                              strokeLinecap:
                                                                                                "round",
                                                                                              strokeLinejoin:
                                                                                                "round",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          V.jsx)(
                                                                                            "path",
                                                                                            {
                                                                                              d: "M2 13.25C2.41421 13.25 2.75 12.9142 2.75 12.5C2.75 12.0858 2.41421 11.75 2 11.75C1.58579 11.75 1.25 12.0858 1.25 12.5C1.25 12.9142 1.58579 13.25 2 13.25Z",
                                                                                              stroke:
                                                                                                "#E5FF00",
                                                                                              strokeWidth:
                                                                                                "1.5",
                                                                                              strokeLinecap:
                                                                                                "round",
                                                                                              strokeLinejoin:
                                                                                                "round",
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                  ],
                                                                });
                                                              }
                                                            ),
                                                        }),
                                                        (0, V.jsx)(y.t, {
                                                          position: "center",
                                                          total:
                                                            ve.pagination.total,
                                                          value:
                                                            ve.pagination
                                                              .current,
                                                          onChange: function (
                                                            e
                                                          ) {
                                                            ve.run({
                                                              current: e,
                                                              pageSize:
                                                                ve.pagination
                                                                  .pageSize,
                                                            });
                                                          },
                                                          styles: function (e) {
                                                            return {
                                                              control: {
                                                                "&[data-active]":
                                                                  {
                                                                    backgroundImage:
                                                                      e.fn.gradient(
                                                                        {
                                                                          from: "#E5FF00",
                                                                          to: "#E5FF00",
                                                                        }
                                                                      ),
                                                                    color:
                                                                      "#000",
                                                                    border: 0,
                                                                  },
                                                                fontFamily:
                                                                  "var(--fontFamily1)",
                                                                fontWeight:
                                                                  "bold",
                                                              },
                                                            };
                                                          },
                                                        }),
                                                      ],
                                                    })
                                                  : (0, V.jsxs)(v.k, {
                                                      direction: "column",
                                                      align: "center",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                        justifyContent:
                                                          "center",
                                                      },
                                                      children: [
                                                        (0, V.jsx)("img", {
                                                          alt: "not-found",
                                                          src: "/images/opentalker/not-found.svg",
                                                          style: {
                                                            width: "150px",
                                                            height: "150px",
                                                          },
                                                        }),
                                                        (0, V.jsx)(E.tP, {
                                                          size: "clamp(1.5rem,2vw,1.6rem)",
                                                          color: "#777E90",
                                                          weight: "bold",
                                                          css: {
                                                            fontFamily:
                                                              "var(--fontFamily3)",
                                                            fontStyle: "normal",
                                                            lineHeight:
                                                              "clamp(1.5rem,2vw,1.6rem)",
                                                          },
                                                          children: "".concat(
                                                            n.formatMessage({
                                                              id: "oops-its-empty-here",
                                                              defaultMessage:
                                                                "Oops, it's empty here!",
                                                            })
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, V.jsxs)(x.Z, {
                    isOpen: se.isVisible,
                    onClose: ke,
                    ref: re,
                    detent: "content-height",
                    children: [
                      (0, V.jsxs)(x.Z.Container, {
                        style: {
                          background: "#000000",
                          borderTop: "2px solid #777E90",
                          borderRight: "2px solid #777E90",
                          borderLeft: "2px solid #777E90",
                        },
                        children: [
                          (0, V.jsx)(x.Z.Header, {}),
                          (0, V.jsx)(x.Z.Content, {
                            children: (0, V.jsxs)(v.k, {
                              direction: "column",
                              children: [
                                (0, V.jsx)(j.z, {
                                  variant: "studioPopUp",
                                  leftIcon: (0, V.jsxs)("svg", {
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 30 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, V.jsx)("path", {
                                        d: "M15 22.5C21.9037 22.5 27.5 15 27.5 15C27.5 15 21.9037 7.5 15 7.5C8.09625 7.5 2.5 15 2.5 15C2.5 15 8.09625 22.5 15 22.5Z",
                                        stroke: "#ffffff",
                                        strokeWidth: "2",
                                        strokeLinejoin: "round",
                                      }),
                                      (0, V.jsx)("path", {
                                        d: "M15 18.125C15.8288 18.125 16.6237 17.7958 17.2097 17.2097C17.7958 16.6237 18.125 15.8288 18.125 15C18.125 14.1712 17.7958 13.3763 17.2097 12.7903C16.6237 12.2042 15.8288 11.875 15 11.875C14.1712 11.875 13.3763 12.2042 12.7903 12.7903C12.2042 13.3763 11.875 14.1712 11.875 15C11.875 15.8288 12.2042 16.6237 12.7903 17.2097C13.3763 17.7958 14.1712 18.125 15 18.125Z",
                                        stroke: "#ffffff",
                                        strokeWidth: "2",
                                        strokeLinejoin: "round",
                                      }),
                                    ],
                                  }),
                                  onClick: function () {
                                    return be(se.job);
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "preview",
                                      defaultMessage: "Preview",
                                    })
                                  ),
                                }),
                                (0, V.jsx)(j.z, {
                                  variant: "studioPopUp",
                                  leftIcon: (0, V.jsxs)("svg", {
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 30 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, V.jsx)("path", {
                                        d: "M22.8495 25.9996H7.18816C6.75157 25.9818 6.32277 25.8782 5.92632 25.6948C5.52986 25.5113 5.17351 25.2516 4.87767 24.9305C4.58183 24.6094 4.3523 24.2332 4.20221 23.8234C4.05213 23.4136 3.98443 22.9783 4.003 22.5424V18.771C4.003 18.5209 4.10248 18.2811 4.27956 18.1043C4.45663 17.9275 4.6968 17.8281 4.94722 17.8281C5.19764 17.8281 5.4378 17.9275 5.61488 18.1043C5.79195 18.2811 5.89143 18.5209 5.89143 18.771V22.5424C5.85893 22.9157 5.97156 23.2871 6.20596 23.5797C6.44036 23.8723 6.77855 24.0636 7.15039 24.1138H22.8495C23.2214 24.0636 23.5596 23.8723 23.794 23.5797C24.0284 23.2871 24.141 22.9157 24.1085 22.5424V18.771C24.1085 18.5209 24.208 18.2811 24.385 18.1043C24.5621 17.9275 24.8023 17.8281 25.0527 17.8281C25.3031 17.8281 25.5433 17.9275 25.7204 18.1043C25.8974 18.2811 25.9969 18.5209 25.9969 18.771V22.5424C26.0346 23.4166 25.7251 24.2703 25.1357 24.9177C24.5462 25.5652 23.7246 25.954 22.8495 25.9996Z",
                                        fill: "#ffffff",
                                      }),
                                      (0, V.jsx)("path", {
                                        d: "M15.0185 19.715C14.8944 19.7156 14.7715 19.6914 14.6569 19.6439C14.5423 19.5964 14.4384 19.5266 14.3512 19.4384L9.31543 14.4098C9.14864 14.2311 9.05784 13.9947 9.06216 13.7504C9.06647 13.5062 9.16557 13.2731 9.33857 13.1004C9.51156 12.9276 9.74495 12.8287 9.98957 12.8244C10.2342 12.8201 10.4709 12.9107 10.6499 13.0773L15.0185 17.4396L19.3871 13.0773C19.566 12.9107 19.8028 12.8201 20.0474 12.8244C20.292 12.8287 20.5254 12.9276 20.6984 13.1004C20.8714 13.2731 20.9705 13.5062 20.9748 13.7504C20.9791 13.9947 20.8883 14.2311 20.7215 14.4098L15.6857 19.4384C15.5986 19.5266 15.4946 19.5964 15.3801 19.6439C15.2655 19.6914 15.1425 19.7156 15.0185 19.715Z",
                                        fill: "#ffffff",
                                      }),
                                      (0, V.jsx)("path", {
                                        d: "M15.0194 19.7143C14.77 19.711 14.5317 19.6106 14.3554 19.4345C14.179 19.2584 14.0785 19.0205 14.0752 18.7714V4.94286C14.0752 4.6928 14.1747 4.45298 14.3517 4.27616C14.5288 4.09934 14.769 4 15.0194 4C15.2698 4 15.51 4.09934 15.6871 4.27616C15.8641 4.45298 15.9636 4.6928 15.9636 4.94286V18.7714C15.9604 19.0205 15.8598 19.2584 15.6835 19.4345C15.5071 19.6106 15.2688 19.711 15.0194 19.7143Z",
                                        fill: "#ffffff",
                                      }),
                                    ],
                                  }),
                                  onClick: Ze,
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "download",
                                      defaultMessage: "Download",
                                    })
                                  ),
                                }),
                                (0, V.jsx)(j.z, {
                                  variant: "studioPopUp",
                                  leftIcon: (0, V.jsx)("svg", {
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 30 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, V.jsx)("path", {
                                      d: "M5.28572 23.8824C4.65714 23.8824 4.11886 23.6633 3.67086 23.2252C3.22286 22.7871 2.99924 22.261 3 21.6471V8.2353C3 7.62059 3.224 7.09418 3.672 6.65606C4.12 6.21794 4.65791 5.99926 5.28572 6L7.57143 10.4706H11L8.71429 6H11L13.2857 10.4706H16.7143L14.4286 6H16.7143L19 10.4706H22.4286L20.1429 6H23.5714C24.2 6 24.7383 6.21906 25.1863 6.65718C25.6343 7.0953 25.8579 7.62134 25.8571 8.2353V12.7059H5.28572V21.6471H14.4286V23.8824H5.28572ZM16.7143 25V21.5632L23.0286 15.4162C23.2 15.2485 23.3905 15.1275 23.6 15.0529C23.8095 14.9784 24.019 14.9412 24.2286 14.9412C24.4571 14.9412 24.6762 14.9833 24.8857 15.0675C25.0952 15.1517 25.2857 15.2772 25.4571 15.4441L26.5143 16.4779C26.6667 16.6456 26.7859 16.8319 26.872 17.0368C26.9581 17.2417 27.0008 17.4466 27 17.6515C27 17.8564 26.9619 18.0661 26.8857 18.2807C26.8095 18.4953 26.6857 18.686 26.5143 18.8529L20.2286 25H16.7143ZM18.4286 23.3235H19.5143L22.9714 19.9147L22.4571 19.3838L21.9143 18.8809L18.4286 22.2618V23.3235ZM22.4571 19.3838L21.9143 18.8809L22.9714 19.9147L22.4571 19.3838Z",
                                      fill: "#ffffff",
                                    }),
                                  }),
                                  onClick: function () {
                                    ue({ type: "open", payload: se.job }),
                                      le({ type: "close", payload: null });
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "update-title",
                                      defaultMessage: "Update Title",
                                    })
                                  ),
                                }),
                                (0, V.jsx)(j.z, {
                                  variant: "studioPopUp",
                                  leftIcon: (0, V.jsxs)("svg", {
                                    width: "30",
                                    height: "30",
                                    viewBox: "0 0 30 30",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                      (0, V.jsx)("path", {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M11.7857 8.125V6.0625H18.2143V8.125H11.7857ZM9.64286 8.125V5.375C9.64286 5.01033 9.79337 4.66059 10.0613 4.40273C10.3292 4.14487 10.6925 4 11.0714 4H18.9286C19.3075 4 19.6708 4.14487 19.9387 4.40273C20.2066 4.66059 20.3571 5.01033 20.3571 5.375V8.125H23.9286C24.2127 8.125 24.4853 8.23365 24.6862 8.42705C24.8871 8.62044 25 8.88275 25 9.15625C25 9.42975 24.8871 9.69206 24.6862 9.88545C24.4853 10.0789 24.2127 10.1875 23.9286 10.1875H23.4071L22.3457 23.4604C22.2906 24.1512 21.9666 24.7966 21.4385 25.2675C20.9104 25.7383 20.217 26 19.4971 26H10.5029C9.78297 26 9.08963 25.7383 8.56149 25.2675C8.03336 24.7966 7.70936 24.1512 7.65429 23.4604L6.59286 10.1875H6.07143C5.78727 10.1875 5.51475 10.0789 5.31381 9.88545C5.11288 9.69206 5 9.42975 5 9.15625C5 8.88275 5.11288 8.62044 5.31381 8.42705C5.51475 8.23365 5.78727 8.125 6.07143 8.125H9.64286ZM8.74286 10.1875H21.2571L20.2086 23.3022C20.1949 23.4749 20.114 23.6362 19.9821 23.754C19.8503 23.8718 19.677 23.9373 19.4971 23.9375H10.5029C10.323 23.9373 10.1497 23.8718 10.0179 23.754C9.88596 23.6362 9.8051 23.4749 9.79143 23.3022L8.74286 10.1875Z",
                                        fill: "#ffffff",
                                      }),
                                      (0, V.jsx)("path", {
                                        d: "M13.0597 12.4801C12.901 12.3328 12.6858 12.25 12.4614 12.25C12.237 12.25 12.0218 12.3328 11.8631 12.4801C11.7044 12.6275 11.6152 12.8273 11.6152 13.0357V20.8929C11.6152 21.1012 11.7044 21.3011 11.8631 21.4484C12.0218 21.5958 12.237 21.6786 12.4614 21.6786C12.6858 21.6786 12.901 21.5958 13.0597 21.4484C13.2184 21.3011 13.3075 21.1012 13.3075 20.8929V13.0357C13.3075 12.8273 13.2184 12.6275 13.0597 12.4801Z",
                                        fill: "#ffffff",
                                      }),
                                      (0, V.jsx)("path", {
                                        d: "M18.1366 12.4801C18.2953 12.6275 18.3845 12.8273 18.3845 13.0357V20.8929C18.3845 21.1012 18.2953 21.3011 18.1366 21.4484C17.9779 21.5958 17.7627 21.6786 17.5383 21.6786C17.3139 21.6786 17.0987 21.5958 16.94 21.4484C16.7813 21.3011 16.6922 21.1012 16.6922 20.8929V13.0357C16.6922 12.8273 16.7813 12.6275 16.94 12.4801C17.0987 12.3328 17.3139 12.25 17.5383 12.25C17.7627 12.25 17.9779 12.3328 18.1366 12.4801Z",
                                        fill: "#ffffff",
                                      }),
                                    ],
                                  }),
                                  onClick: function () {
                                    Ce({ type: "open", payload: se.job }),
                                      le({ type: "close", payload: null });
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "remove-video",
                                      defaultMessage: "Remove Video",
                                    })
                                  ),
                                }),
                                0 === te &&
                                  (0, V.jsx)(j.z, {
                                    variant: "studioPopUp",
                                    leftIcon: (0, V.jsx)("svg", {
                                      width: "30",
                                      height: "30",
                                      viewBox: "0 0 30 30",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, V.jsx)("path", {
                                        d: "M4 10.8H17.3462V13.2H4V10.8ZM4 8.4H17.3462V6H4V8.4ZM4 18H12.493V15.6H4V18ZM22.2115 14.244L23.0729 13.392C23.1852 13.2808 23.3185 13.1925 23.4653 13.1323C23.6121 13.0721 23.7694 13.0411 23.9283 13.0411C24.0872 13.0411 24.2445 13.0721 24.3913 13.1323C24.5381 13.1925 24.6714 13.2808 24.7837 13.392L25.6451 14.244C26.1183 14.712 26.1183 15.468 25.6451 15.936L24.7837 16.788L22.2115 14.244ZM21.3501 15.096L14.9196 21.456V24H17.4918L23.9222 17.64L21.3501 15.096Z",
                                        fill: "#ffffff",
                                      }),
                                    }),
                                    onClick: function () {
                                      i("/subtitle/".concat(se.job.id));
                                    },
                                    children: "".concat(
                                      n.formatMessage({
                                        id: "add-captions",
                                        defaultMessage: "Add Captions",
                                      })
                                    ),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, V.jsx)(x.Z.Backdrop, { onTap: ke }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=1610.aa6802f6.chunk.js.map
