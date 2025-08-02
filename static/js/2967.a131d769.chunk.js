"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [2967],
  {
    58028: function (e, n, r) {
      r.d(n, {
        b: function () {
          return s;
        },
        t: function () {
          return l;
        },
      });
      var t = r(74165),
        i = r(15861),
        a = r(72791),
        o = r(31243),
        s = function () {
          var e = (0, a.useCallback)(
            (function () {
              var e = (0, i.Z)(
                (0, t.Z)().mark(function e(n, r, i, a, s) {
                  var l, d, c, u, f, p, g;
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (l = {
                                headers: {
                                  accept: "application/json",
                                  Authorization: n,
                                },
                              }),
                              (e.next = 4),
                              o.Z.post(
                                "".concat(
                                  "https://generative-api.jinkoai.com/",
                                  "nft/claim"
                                ),
                                {
                                  nft_id: r,
                                  nft_contract: i,
                                  address: a,
                                  signature: s,
                                },
                                l
                              )
                            );
                          case 4:
                            return (d = e.sent), (e.next = 7), d;
                          case 7:
                            if (
                              ((c = e.sent),
                              (u = c.data),
                              (f = c.status),
                              (p = c.statusText),
                              200 === f)
                            ) {
                              e.next = 13;
                              break;
                            }
                            throw new Error(p);
                          case 13:
                            if (!u.error) {
                              e.next = 15;
                              break;
                            }
                            throw new Error(u.msg);
                          case 15:
                            return e.abrupt("return", {
                              error: !1,
                              data: u,
                              message: "",
                            });
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              (g = e.t0.message),
                              e.abrupt("return", {
                                error: !0,
                                data: "",
                                message: g,
                              })
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function (n, r, t, i, a) {
                return e.apply(this, arguments);
              };
            })(),
            []
          );
          return { onClaimNft: e };
        },
        l = function () {
          var e = (0, a.useCallback)(
            (function () {
              var e = (0, i.Z)(
                (0, t.Z)().mark(function e(n, r) {
                  var i, a, s, l, d, c, u, f;
                  return (0, t.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (i = {
                                headers: {
                                  accept: "application/json",
                                  Authorization: n,
                                },
                              }),
                              (e.next = 4),
                              o.Z.get(
                                ""
                                  .concat(
                                    "https://generative-api.jinkoai.com/",
                                    "nft/claim?address="
                                  )
                                  .concat(r),
                                i
                              )
                            );
                          case 4:
                            return (a = e.sent), (e.next = 7), a;
                          case 7:
                            if (
                              ((s = e.sent),
                              (l = s.data),
                              (d = s.status),
                              (c = s.statusText),
                              200 === d)
                            ) {
                              e.next = 13;
                              break;
                            }
                            throw new Error(c);
                          case 13:
                            if (!l.error) {
                              e.next = 15;
                              break;
                            }
                            throw new Error(l.msg);
                          case 15:
                            return e.abrupt("return", {
                              error: !1,
                              data: l,
                              message: "",
                            });
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              (u = e.t0.message),
                              (f = void 0 === u ? "" : u),
                              e.abrupt("return", {
                                error: !0,
                                data: "",
                                message: f,
                              })
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })(),
            []
          );
          return { onGetListOfNfts: e };
        };
    },
    52967: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return Ce;
          },
        });
      var t = r(1413),
        i = r(74165),
        a = r(15861),
        o = r(29439),
        s = r(30168),
        l = r(72791),
        d = r(26088),
        c = r(57689),
        u = r(93539),
        f = r(4349),
        p = r(42164),
        g = r(91580),
        m = r(75366),
        x = r(45987),
        h = r(17504),
        b = r(18024),
        w = r(20161),
        v =
          ((0, w.zo)("div", {}),
          (0, w.zo)("div", {
            margin: 0,
            boxSizing: "border-box",
            padding: "$$gridGapUnit",
          })),
        y = r(80184),
        Z = [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "css",
          "justify",
          "direction",
          "alignItems",
          "alignContent",
          "children",
          "className",
        ],
        C = function (e) {
          var n = 0 === e ? "none" : "inherit";
          if ("number" == typeof e) {
            var r = (100 / 12) * e,
              t = r > 100 ? "100%" : r < 0 ? "0" : "".concat(r, "%");
            return { flexGrow: 0, display: n, maxWidth: t, flexBasis: t };
          }
          return { flexGrow: 1, display: n, maxWidth: "100%", flexBasis: "0" };
        },
        j = l.forwardRef(function (e, n) {
          var r = e.xs,
            i = e.sm,
            a = e.md,
            o = e.lg,
            s = e.xl,
            d = e.css,
            c = e.justify,
            u = e.direction,
            f = e.alignItems,
            p = e.alignContent,
            g = e.children,
            m = e.className,
            b = (0, x.Z)(e, Z),
            w = (0, l.useMemo)(
              function () {
                var e = { xs: r, sm: i, md: a, lg: o, xl: s };
                return Object.keys(e)
                  .reduce(function (n, r) {
                    return void 0 !== e[r] && !1 !== e[r]
                      ? "".concat(n, " ").concat(r)
                      : n;
                  }, "")
                  .trim();
              },
              [r, i, a, o, s]
            );
          return (0,
          y.jsx)(v, (0, t.Z)((0, t.Z)({ ref: n, className: (0, h.Z)("nextui-grid-item", w, m), css: (0, t.Z)({ alignItems: f, alignContent: p, justifyContent: c, flexDirection: u, "&.xs": (0, t.Z)({}, C(r)), "@xsMax": { "&.xs": (0, t.Z)({}, C(r)) }, "@sm": { "&.sm": (0, t.Z)({}, C(i)) }, "@md": { "&.md": (0, t.Z)({}, C(a)) }, "@lg": { "&.lg": (0, t.Z)({}, C(o)) }, "@xl": { "&.xl": (0, t.Z)({}, C(s)) } }, d) }, b), {}, { children: g }));
        });
      (j.displayName = "NextUI.GridItem"),
        (j.toString = function () {
          return ".nextui-grid-item";
        });
      var k = (0, b.Z)(j, {
          xs: !1,
          sm: !1,
          md: !1,
          lg: !1,
          xl: !1,
          className: "",
        }),
        F = ["children", "css"],
        $ = l.forwardRef(function (e, n) {
          var r = e.children,
            i = e.css,
            a = (0, x.Z)(e, F);
          return (0,
          y.jsx)(k, (0, t.Z)((0, t.Z)({ ref: n, css: i }, a), {}, { children: r }));
        });
      ($.displayName = "NextUI.Grid"),
        ($.toString = function () {
          return ".nextui-grid";
        });
      var z = $,
        P = ["gap", "wrap", "css", "children", "className"],
        S = l.forwardRef(function (e, n) {
          var r = e.gap,
            i = e.wrap,
            a = e.css,
            o = e.children,
            s = e.className,
            d = (0, x.Z)(e, P),
            c = (0, l.useMemo)(
              function () {
                return "calc(".concat(r, " * $space$3)");
              },
              [r]
            );
          return (0,
          y.jsx)(k, (0, t.Z)((0, t.Z)({ ref: n, className: (0, h.Z)("nextui-grid-container", s), css: (0, t.Z)({ $$gridGapUnit: c, display: "flex", flexWrap: i, boxSizing: "border-box", margin: "calc(-1 * $$gridGapUnit)", width: "calc(100% + $$gridGapUnit * 2)" }, a) }, d), {}, { children: o }));
        });
      (S.displayName = "NextUI.GridContainer"),
        (S.toString = function () {
          return ".nextui-grid-container";
        });
      var N = (0, b.Z)(S, { gap: 0, wrap: "wrap", className: "" });
      z.Container = N;
      var H,
        M = z,
        _ = r(69891),
        L = r(93978),
        O = r(36459),
        T = r(98244),
        E = r(90470),
        I = r(42570),
        W = r(25741),
        A = r(61144),
        G = r(32124),
        R = r(67291),
        U = [
          "ref",
          "disableAnimation",
          "disableRipple",
          "variant",
          "isHoverable",
          "borderWeight",
          "isPressable",
          "onClick",
          "onPress",
          "autoFocus",
          "allowTextSelectionOnPress",
        ],
        B = ["onClick"],
        V = r(4942),
        D = r(60569),
        J = (0, w.zo)("div", {
          d: "flex",
          w: "100%",
          h: "auto",
          flex: "1 1 auto",
          fd: "column",
          jc: "inherit",
          ai: "inherit",
          ac: "inherit",
          py: "$lg",
          px: "$sm",
          oy: "auto",
          position: "relative",
          ta: "left",
        }),
        q = (0, w.zo)(
          "div",
          ((H = {
            $$cardColor: "$colors$backgroundContrast",
            $$cardTextColor: "$colors$text",
            m: 0,
            p: 0,
            br: "$lg",
            bg: "$$cardColor",
            color: "$$cardTextColor",
            position: "relative",
            display: "flex",
            overflow: "hidden",
            fd: "column",
            width: "100%",
            height: "auto",
            boxSizing: "border-box",
            "@motion": { transition: "none" },
            ".nextui-image": { width: "100%" },
          }),
          (0, V.Z)(H, "& ".concat(T.q), {
            zIndex: "$1",
            ".nextui-drip-filler": { opacity: 0.25, fill: "$accents6" },
          }),
          (0, V.Z)(H, "variants", {
            variant: {
              flat: { bg: "$accents0" },
              shadow: {
                dropShadow: "$lg",
                "@safari": { boxShadow: "$lg", dropShadow: "none" },
                "@-moz-document url-prefix()": {
                  boxShadow: "$lg",
                  dropShadow: "none",
                },
              },
              bordered: { borderStyle: "solid", borderColor: "$border" },
            },
            borderWeight: {
              light: { bw: "$light" },
              normal: { bw: "$normal" },
              bold: { bw: "$bold" },
              extrabold: { bw: "$extrabold" },
              black: { bw: "$black" },
            },
            disableAnimation: {
              true: { transition: "none" },
              false: { transition: "$card" },
            },
            isPressable: {
              true: {
                cursor: "pointer",
                us: "none",
                WebkitTapHighlightColor: "transparent",
              },
            },
            isPressed: { true: {} },
            isHovered: {
              true: {
                dropShadow: "$lg",
                "@safari": { boxShadow: "$lg", dropShadow: "none" },
                "@-moz-document url-prefix()": {
                  boxShadow: "$lg",
                  dropShadow: "none",
                },
              },
            },
          }),
          (0, V.Z)(H, "compoundVariants", [
            {
              isPressed: !0,
              disableAnimation: !1,
              css: { transform: "scale(0.97)" },
            },
            {
              isHovered: !0,
              disableAnimation: !1,
              css: { transform: "translateY(-2px)" },
            },
            {
              isHovered: !0,
              variant: "shadow",
              css: {
                dropShadow: "$xl",
                "@safari": { boxShadow: "$xl", dropShadow: "none" },
                "@-moz-document url-prefix()": {
                  boxShadow: "$xl",
                  dropShadow: "none",
                },
              },
            },
          ]),
          H),
          D.UU,
          D.BM
        ),
        Y = (0, w.zo)("div", {
          w: "100%",
          display: "flex",
          flexShrink: 0,
          zIndex: "$1",
          jc: "flex-start",
          ai: "center",
          overflow: "hidden",
          color: "inherit",
          p: "$sm",
        }),
        Q = (0, w.zo)("div", {
          w: "100%",
          h: "auto",
          p: "$sm",
          d: "flex",
          ai: "center",
          overflow: "hidden",
          color: "inherit",
          bblr: "$lg",
          bbrr: "$lg",
          variants: {
            isBlurred: {
              true: { bf: "saturate(180%) blur(10px)", bg: "$$cardColor" },
            },
          },
        }),
        X = ["as", "css", "children"],
        K = l.forwardRef(function (e, n) {
          var r = Object.assign({}, ((0, O.Z)(e), e)),
            i = r.as,
            a = r.css,
            o = r.children,
            s = (0, x.Z)(r, X),
            d = (function (e) {
              var n = e.ref,
                r = e.disableAnimation,
                i = void 0 !== r && r,
                a = e.disableRipple,
                o = void 0 !== a && a,
                s = e.variant,
                d = void 0 === s ? "shadow" : s,
                c = e.isHoverable,
                u = void 0 !== c && c,
                f = e.borderWeight,
                p = void 0 === f ? "light" : f,
                g = e.isPressable,
                m = void 0 !== g && g,
                h = e.onClick,
                b = e.onPress,
                w = e.autoFocus,
                v = e.allowTextSelectionOnPress,
                y = void 0 === v || v,
                Z = (0, x.Z)(e, U),
                C = (0, R.gy)(n),
                j = (0, G.Z)(!1, C),
                k = j.onClick,
                F = (0, x.Z)(j, B),
                $ = function (e) {
                  i || o || !C.current || k(e);
                },
                z = (0, A.r7)(
                  (0, t.Z)(
                    {
                      isDisabled: !m,
                      onPress: function (e) {
                        ("keyboard" !== e.pointerType &&
                          "virtual" !== e.pointerType) ||
                          ($(e), null == h || h(e)),
                          null == b || b(e);
                      },
                      allowTextSelectionOnPress: y,
                    },
                    Z
                  )
                ),
                P = z.isPressed,
                S = z.pressProps,
                N = (0, A.XI)((0, t.Z)({ isDisabled: !u }, Z)),
                H = N.hoverProps,
                M = N.isHovered,
                _ = (0, I.Fx)({ autoFocus: w }),
                L = _.isFocusVisible,
                O = _.focusProps;
              S.onClick = function (e) {
                m && ($(e), null == h || h(e));
              };
              var T = (0, l.useCallback)(
                function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (0, t.Z)(
                    {},
                    (0, W.dG)(
                      m ? (0, t.Z)((0, t.Z)({}, S), O) : {},
                      u ? H : {},
                      Z,
                      e
                    )
                  );
                },
                [m, u, S, O, H, Z]
              );
              return {
                cardRef: C,
                variant: d,
                borderWeight: p,
                isPressable: m,
                isHovered: M,
                isPressed: P,
                disableAnimation: i,
                disableRipple: o,
                dripBindings: F,
                onDripClickHandler: k,
                isFocusVisible: L,
                getCardProps: T,
              };
            })((0, t.Z)((0, t.Z)({}, s), {}, { ref: n })),
            c = d.cardRef,
            u = d.variant,
            f = d.isFocusVisible,
            p = d.isPressable,
            g = d.isPressed,
            m = d.disableAnimation,
            h = d.disableRipple,
            b = d.borderWeight,
            w = d.isHovered,
            v = d.getCardProps,
            Z = d.dripBindings;
          return (0,
          y.jsxs)(q, (0, t.Z)((0, t.Z)({ ref: c, as: i, borderWeight: b, css: a, disableAnimation: m, isFocusVisible: f, isHovered: w, isPressable: p, isPressed: g, role: p ? "button" : "section", tabIndex: p ? 0 : -1, variant: u }, v()), {}, { children: [p && !m && !h && (0, y.jsx)(T.Z, (0, t.Z)({}, Z)), o] }));
        });
      E.Ts && (K.displayName = "NextUI.Card"),
        (K.toString = function () {
          return ".nextui-card";
        });
      var ee = K;
      (ee.Header = Y),
        (ee.Body = J),
        (ee.Footer = Q),
        (ee.Image = _.ZP),
        (ee.Divider = L.ZP);
      var ne,
        re,
        te,
        ie,
        ae,
        oe,
        se = ee,
        le = r(69655),
        de = r(38308),
        ce = r(37623),
        ue = r(40801),
        fe = r(29275),
        pe = r(56666),
        ge = r(50888),
        me = r(65370),
        xe = r(938),
        he = r(58028),
        be = d.Z.div(
          ne ||
            (ne = (0, s.Z)([
              "\n  background-image: url(/images/background-ellipse.png);\n  background-position-x: right;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: black;\n  display: flex;\n  height: 100%;\n  overflow-y: auto;\n",
            ]))
        ),
        we = (0, d.Z)(m.ZP)(
          re ||
            (re = (0, s.Z)([
              "\n  border-radius: ",
              ";\n  background-image: ",
              "!important;\n  // padding:3px 8px!important;\n  margin: 0px 0px 10px 0px !important;\n  min-width: 110px;\n  color: black;\n  box-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.5);\n  :hover {\n    cursor: pointer;\n  }\n  :disabled {\n    background-image: linear-gradient(\n      180deg,\n      #9596b2 0%,\n      #bcc6ce 54.69%,\n      #cbdbdd 100%\n    ) !important;\n    color: grey;\n    box-shadow: none;\n  }\n",
            ])),
          function (e) {
            return e.borderradius;
          },
          function (e) {
            return e.bg;
          }
        ),
        ve = (0, d.Z)(p.k)(
          te ||
            (te = (0, s.Z)([
              "\n  width: 100%;\n  gap: 20px;\n  align-items: start;\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    place-content: start;\n    text-align: left;\n  }\n  @media only screen and (min-width: 992px) {\n    place-content: space-between;\n    text-align: center;\n  }\n",
            ]))
        ),
        ye = (0, d.Z)(m.ZP)(
          ie ||
            (ie = (0, s.Z)([
              "\n  min-width: ",
              ";\n  min-height: ",
              ";\n  max-width: ",
              ";\n  // min-width:fit-content;\n  padding: ",
              ';\n  background: transparent;\n  // border: none;\n  margin: 0px;\n  align-items: center;\n  height: auto;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: var(--nextui-space-5);\n  position: relative;\n  :hover {\n    cursor: pointer;\n  }\n  &:after {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 0px;\n    pointer-events: none;\n    opacity: ',
              ";\n    z-index: 201;\n  }\n",
            ])),
          function (e) {
            return e.minwidth;
          },
          function (e) {
            return e.minHeight;
          },
          function (e) {
            return e.minwidth;
          },
          function (e) {
            return e.padding || "";
          },
          function (e) {
            return e.disabled ? "1" : "0";
          }
        ),
        Ze = (0, d.Z)(p.k)(
          ae ||
            (ae = (0, s.Z)([
              "\n  display: grid;\n  grid-gap: 10px;\n  grid-auto-rows: 300px;\n  padding: 5px 10px;\n  // grid-auto-flow: dense;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  overflow-y: scroll;\n  // padding:10px 10px 0px 0px;\n  justify-items: center;\n  align-items: center;\n  width: 100%;\n  // height:100%;\n",
            ]))
        ),
        Ce =
          ((0, d.Z)(p.k)(
            oe ||
              (oe = (0, s.Z)([
                "\n  border-radius: 8px;\n  border: 2px solid #777e90;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    180deg,\n    rgba(54, 56, 41, 0.5) 0%,\n    rgba(0, 0, 0, 0.5) 100%\n  );\n",
              ]))
          ),
          function () {
            var e = (0, u.Z)(),
              n = (0, c.s0)(),
              r = (0, me.q)().content,
              s = (0, le.zn)().notify,
              d =
                ((0, pe.$)().currentLanguage.locale,
                (0, xe.Z)().onGetTranslation),
              m = (0, de.QW)(),
              x = m.signMessageAsync,
              h = (m.data, m.error, m.isLoading, (0, he.t)().onGetListOfNfts),
              b = (0, l.useState)({
                isLoading: !1,
                title: { id: "", defaultMessage: "" },
              }),
              w = (0, o.Z)(b, 2),
              v = w[0],
              Z = w[1],
              C = (0, l.useState)([]),
              j = (0, o.Z)(C, 2),
              k = j[0],
              F = j[1],
              $ = (0, he.b)().onClaimNft,
              z = (0, l.useContext)(fe.C).getCredit,
              P = (0, ce.Z)(
                function () {
                  return h(r.token, r.walletAddress);
                },
                {
                  onBefore: function () {
                    Z({
                      isLoading: !0,
                      title: { id: "loading", defaultMessage: "Loading..." },
                    });
                  },
                  onFinally: function () {
                    Z({ isLoading: !1, title: { id: "", defaultMessage: "" } });
                  },
                  onSuccess: function (e) {
                    try {
                      if (e.error || e.data.error) throw new Error(e.message);
                      F(e.data.data.nfts);
                    } catch (n) {
                      console.error(n);
                    }
                  },
                  onError: function (e) {
                    F([]);
                  },
                }
              ),
              S = (0, ce.Z)(
                (function () {
                  var e = (0, a.Z)(
                    (0, i.Z)().mark(function e(n, t, a) {
                      var o, s, l;
                      return (0, i.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = { nft_id: n, _nft_contract: t, uuid: a }),
                                (s = ""),
                                (e.next = 4),
                                x({ message: JSON.stringify(o) })
                                  .then(function (e) {
                                    s = e;
                                  })
                                  .catch(function (e) {
                                    throw new Error(e);
                                  })
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                $(r.token, n, t, r.walletAddress, s)
                              );
                            case 6:
                              if (!(l = e.sent).error && !l.data.error) {
                                e.next = 9;
                                break;
                              }
                              throw new Error(l.message);
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (n, r, t) {
                    return e.apply(this, arguments);
                  };
                })(),
                {
                  manual: !0,
                  onBefore: function () {
                    Z({
                      isLoading: !0,
                      title: {
                        id: "processing",
                        defaultMessage: "Processing...",
                      },
                    });
                  },
                  onFinally: function () {
                    Z({ isLoading: !1, title: { id: "", defaultMessage: "" } });
                  },
                  onSuccess: function (n) {
                    P.run(),
                      z.run(),
                      s(
                        "".concat(
                          e.formatMessage({
                            id: "claim-nft-successfully",
                            defaultMessage: "Claimed NFT successfully",
                          })
                        ),
                        "success"
                      );
                  },
                  onError: function (e) {
                    s("".concat(d(e.message)), "error");
                  },
                }
              ),
              N = (function () {
                var e = (0, a.Z)(
                  (0, i.Z)().mark(function e(n, t) {
                    return (0, i.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            S.run(n, t.toLowerCase(), r.uuid);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n, r) {
                  return e.apply(this, arguments);
                };
              })();
            return (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(be, {
                  children: (0, y.jsx)(g.W, {
                    h: "100%",
                    px: "lg",
                    style: { overflowY: "auto" },
                    children: (0, y.jsxs)(p.k, {
                      direction: "column",
                      gap: "35px",
                      style: {
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        overflow: "auto",
                      },
                      children: [
                        (0, y.jsx)(p.k, {
                          justify: "space-between",
                          style: { width: "100%" },
                          children: (0, y.jsxs)(ve, {
                            children: [
                              (0, y.jsx)(ye, {
                                onClick: function () {
                                  n("/dashboard");
                                },
                                minHeight: "fit-content",
                                minwidth: "fit-content",
                                padding: "0px",
                                style: { order: 1 },
                                children: (0, y.jsxs)("svg", {
                                  width: "34",
                                  height: "34",
                                  viewBox: "0 0 34 34",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, y.jsx)("path", {
                                      d: "M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z",
                                      fill: "url(#paint0_linear_4322_13710)",
                                    }),
                                    (0, y.jsx)("path", {
                                      d: "M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z",
                                      fill: "black",
                                      stroke: "black",
                                      strokeWidth: "0.5",
                                    }),
                                    (0, y.jsx)("path", {
                                      d: "M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z",
                                      fill: "black",
                                      stroke: "black",
                                      strokeWidth: "0.5",
                                    }),
                                    (0, y.jsx)("defs", {
                                      children: (0, y.jsxs)("linearGradient", {
                                        id: "paint0_linear_4322_13710",
                                        x1: "17",
                                        y1: "0",
                                        x2: "17",
                                        y2: "34",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, y.jsx)("stop", {
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, y.jsx)("stop", {
                                            offset: "0.546875",
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, y.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, y.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#E5FF00",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, y.jsxs)(p.k, {
                                direction: "column",
                                gap: "10px",
                                style: { order: 2 },
                                children: [
                                  (0, y.jsx)(ge.tP, {
                                    size: "clamp(1.7rem,2vw,1.8rem)",
                                    color: "#E5FF00",
                                    weight: "extrabold",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "uppercase",
                                      lineHeight: "1",
                                    },
                                    children: (0, y.jsx)(f.Z, {
                                      id: "claim-rewards",
                                      defaultMessage: "Claim Rewards",
                                      values: { br: (0, y.jsx)("br", {}) },
                                    }),
                                  }),
                                  (0, y.jsx)(ge.tP, {
                                    size: "clamp(0.8rem,2vw,1rem)",
                                    color: "#FFFFFF",
                                    weight: "normal",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      lineHeight: "1",
                                    },
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "claim-and-enjoy-free-credits",
                                        defaultMessage:
                                          "Claim and enjoy 5000 free credits with your INFT Mint Pass holdings.",
                                      })
                                    ),
                                  }),
                                ],
                              }),
                              (0, y.jsx)("div", { style: { order: 3 } }),
                            ],
                          }),
                        }),
                        k.length <= 0
                          ? (0, y.jsx)(y.Fragment, {
                              children: (0, y.jsx)(p.k, {
                                direction: "column",
                                gap: "10px",
                                style: {
                                  width: "100%",
                                  height: "100%",
                                  alignItems: "center",
                                  justifyContent: "center",
                                },
                                children: (0, y.jsx)("img", {
                                  src: "/images/magic-avatar/empty-art-gallery.png",
                                  alt: "empty-nft",
                                  style: {
                                    width: "100%",
                                    height: "100%",
                                    maxHeight: "400px",
                                    maxWidth: "400px",
                                  },
                                }),
                              }),
                            })
                          : (0, y.jsx)(Ze, {
                              children: k.map(function (n, r) {
                                var t, i;
                                return (0, y.jsx)(y.Fragment, {
                                  children:
                                    (null === (t = n.nft_data) || void 0 === t
                                      ? void 0
                                      : t.metadata) &&
                                    JSON.parse(n.nft_data.metadata).name &&
                                    (0, y.jsx)(
                                      M,
                                      {
                                        className: "wrapper-card",
                                        children: (0, y.jsxs)(se, {
                                          variant: "flat",
                                          css: { w: "100%", h: "100%" },
                                          className: "cs-card",
                                          style: {
                                            minHeight: "60px",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            gap: "10px",
                                          },
                                          children: [
                                            (0, y.jsx)("img", {
                                              src: "/images/nfts/".concat(
                                                n.nft_contract,
                                                ".png"
                                              ),
                                              alt: "nft",
                                              style: {
                                                width: "100%",
                                                height: "100%",
                                                maxHeight: "150px",
                                                maxWidth: "150px",
                                              },
                                            }),
                                            (0, y.jsx)(ge.tP, {
                                              size: "clamp(0.985rem,2vw,1rem)",
                                              color: "",
                                              weight: "extrabold",
                                              css: {
                                                fontFamily:
                                                  "var(--fontFamily3)",
                                                textTransform: "capitalize",
                                                lineHeight: "1",
                                                textAlignLast: "center",
                                                textAlign: "center",
                                              },
                                              children: "".concat(
                                                (null === (i = n.nft_data) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.metadata) &&
                                                  JSON.parse(
                                                    n.nft_data.metadata
                                                  ).name
                                              ),
                                            }),
                                            n.is_claimed
                                              ? (0, y.jsx)(we, {
                                                  disabled: !0,
                                                  bg: "#E5FF00",
                                                  borderradius: "8px",
                                                  style: {
                                                    width: "fit-content",
                                                  },
                                                  children: (0, y.jsx)(ge.tP, {
                                                    size: "clamp(0.985rem,2vw,1rem)",
                                                    color: "",
                                                    weight: "extrabold",
                                                    css: {
                                                      fontFamily:
                                                        "var(--fontFamily1)",
                                                      textTransform:
                                                        "capitalize",
                                                      lineHeight: "1",
                                                    },
                                                    children: "".concat(
                                                      e.formatMessage({
                                                        id: "claimed",
                                                        defaultMessage:
                                                          "Claimed",
                                                      })
                                                    ),
                                                  }),
                                                })
                                              : (0, y.jsx)(we, {
                                                  onPress: function () {
                                                    return N(
                                                      n.nft_id,
                                                      n.nft_contract
                                                    );
                                                  },
                                                  bg: "#E5FF00",
                                                  borderradius: "8px",
                                                  style: {
                                                    width: "fit-content",
                                                  },
                                                  children: (0, y.jsx)(ge.tP, {
                                                    size: "clamp(0.985rem,2vw,1rem)",
                                                    color: "",
                                                    weight: "extrabold",
                                                    css: {
                                                      fontFamily:
                                                        "var(--fontFamily1)",
                                                      textTransform:
                                                        "capitalize",
                                                      lineHeight: "1",
                                                    },
                                                    children: "".concat(
                                                      e.formatMessage({
                                                        id: "claim",
                                                        defaultMessage: "Claim",
                                                      })
                                                    ),
                                                  }),
                                                }),
                                          ],
                                        }),
                                      },
                                      ""
                                        .concat(n.nft_contract, " - ")
                                        .concat(n.nft_id)
                                    ),
                                });
                              }),
                            }),
                      ],
                    }),
                  }),
                }),
                v.isLoading &&
                  (0, y.jsx)(ue.Z, {
                    children: (0, y.jsx)(ge.tP, {
                      size: "clamp(1.3rem,2vw,1.8rem)",
                      color: "#FFFFFF",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        textTransform: "",
                      },
                      children:
                        v.title.id &&
                        (0, y.jsx)(
                          f.Z,
                          (0, t.Z)(
                            (0, t.Z)({}, v.title),
                            {},
                            { values: { br: (0, y.jsx)("br", {}) } }
                          )
                        ),
                    }),
                  }),
              ],
            });
          });
    },
    91580: function (e, n, r) {
      r.d(n, {
        W: function () {
          return h;
        },
      });
      var t = r(37762),
        i = r(72791),
        a = r(25431),
        o = r(14077),
        s = r(97581),
        l = r(47653),
        d = (0, s.k)(function (e, n, r) {
          var t = n.fluid,
            i = n.sizes,
            a = r.size;
          return {
            root: {
              paddingLeft: e.spacing.md,
              paddingRight: e.spacing.md,
              maxWidth: t ? "100%" : (0, l.a)({ size: a, sizes: i }),
              marginLeft: "auto",
              marginRight: "auto",
            },
          };
        }),
        c = r(44414),
        u = Object.defineProperty,
        f = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        m = function (e, n, r) {
          return n in e
            ? u(e, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[n] = r);
        },
        x = {
          sizes: {
            xs: (0, a.h)(540),
            sm: (0, a.h)(720),
            md: (0, a.h)(960),
            lg: (0, a.h)(1140),
            xl: (0, a.h)(1320),
          },
        },
        h = (0, i.forwardRef)(function (e, n) {
          var r = (0, o.N4)("Container", x, e),
            a = r.className,
            s = r.fluid,
            l = r.size,
            u = r.unstyled,
            h = r.sizes,
            b = r.variant,
            w = (function (e, n) {
              var r = {};
              for (var i in e)
                p.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
              if (null != e && f) {
                var a,
                  o = (0, t.Z)(f(e));
                try {
                  for (o.s(); !(a = o.n()).done; )
                    (i = a.value),
                      n.indexOf(i) < 0 && g.call(e, i) && (r[i] = e[i]);
                } catch (s) {
                  o.e(s);
                } finally {
                  o.f();
                }
              }
              return r;
            })(r, [
              "className",
              "fluid",
              "size",
              "unstyled",
              "sizes",
              "variant",
            ]),
            v = d(
              { fluid: s, sizes: h },
              { unstyled: u, name: "Container", variant: b, size: l }
            ),
            y = v.classes,
            Z = v.cx;
          return i.createElement(
            c.x,
            (function (e, n) {
              for (var r in n || (n = {})) p.call(n, r) && m(e, r, n[r]);
              if (f) {
                var i,
                  a = (0, t.Z)(f(n));
                try {
                  for (a.s(); !(i = a.n()).done; )
                    (r = i.value), g.call(n, r) && m(e, r, n[r]);
                } catch (o) {
                  a.e(o);
                } finally {
                  a.f();
                }
              }
              return e;
            })({ className: Z(y.root, a), ref: n }, w)
          );
        });
      h.displayName = "@mantine/core/Container";
    },
  },
]);
//# sourceMappingURL=2967.a131d769.chunk.js.map
