"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [3780],
  {
    90603: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return ht;
          },
        });
      var r,
        a,
        i,
        s,
        o,
        l = n(93433),
        d = n(74165),
        c = n(1413),
        m = n(15861),
        p = n(29439),
        h = n(30168),
        u = n(72791),
        g = n(26088),
        f = n(57689),
        x = n(93539),
        w = n(4349),
        v = n(42164),
        y = n(52840),
        b = n(2582),
        j = n(94969),
        k = n(91580),
        F = n(75366),
        Z = n(83874),
        M = n(69655),
        C = n(38062),
        z = n(54261),
        P = n(8007),
        E = n(44695),
        T = n(61134),
        L = n(55705),
        S = n(65930),
        H = (n(432), n(37623)),
        A = n(29275),
        _ = n(40801),
        I = n(57631),
        B = n(56666),
        O = n(50888),
        G = n(65370),
        V = n(938),
        q = n(45987),
        N = n(47976),
        W = n(24805),
        R = n(80184),
        D = ["active", "onChange", "formik", "isValidToStep2", "children"],
        U = (0, g.Z)(v.k)(
          r ||
            (r = (0, h.Z)([
              "\n  cursor:pointer;\n  width:fit-content;\n  border:1px solid #E5FF00;\n  border-radius:8px;\n  padding:6px 12px;\n",
            ]))
        ),
        Y = (0, g.Z)(F.ZP)(
          a ||
            (a = (0, h.Z)([
              "\nborder: none;\ndisplay:flex;\nmin-height: 70px;\nmin-width: 100%;\nheight:70px;\nwidth:100%;\nbackground: transparent;\npadding: 20px!important;\n>span{\n  background-image: transparent;\n  width: 100%;\n  height: 100%;\n}\n:hover {\n    cursor: pointer;\n}\n:disabled {\n  color:grey;\n}\n",
            ]))
        ),
        J = (0, g.Z)(v.k)(
          i ||
            (i = (0, h.Z)([
              "\nwidth:100%;\njustify-content:center;\n& div:nth-of-type(n){\n  border-right:2px solid #777E90;\n  border-radius:0px;\n}\n& div:nth-last-of-type(1){\n  border-right:none;\n}\n",
            ]))
        ),
        X = (0, g.Z)(v.k)(
          s ||
            (s = (0, h.Z)([
              "\nwidth:fit-content;\nheight:fit-content;\nborder-radius:0px;\n",
            ]))
        ),
        $ = (0, g.Z)(F.ZP)(
          o ||
            (o = (0, h.Z)([
              "\nwidth:172px;\nbackground:transparent;\nheight:fit-content;\nborder-radius:0px;\n\n:disabled{\n  cursor:not-allowed;\n  color:grey;\n}\n\n",
            ]))
        ),
        K = "open",
        Q = "close";
      function ee(e, t) {
        switch (t.type) {
          case K:
            return { isVisible: !0, job: t.payload };
          case Q:
            return { isVisible: !1, job: null };
          default:
            return e;
        }
      }
      var te,
        ne,
        re,
        ae,
        ie,
        se,
        oe,
        le,
        de,
        ce,
        me,
        pe,
        he,
        ue,
        ge,
        fe,
        xe,
        we,
        ve,
        ye,
        be,
        je,
        ke,
        Fe,
        Ze,
        Me,
        Ce,
        ze = function (e) {
          var t = e.active,
            n = e.children;
          (0, x.Z)();
          return 1 === n.length || void 0 === n.length
            ? (0, R.jsx)(R.Fragment, { children: n })
            : (0, R.jsx)(R.Fragment, { children: n[t] });
        },
        Pe = function (e) {
          var t = e.active,
            n = e.onChange,
            r = (e.formik, e.isValidToStep2),
            a = e.children,
            i =
              ((0, q.Z)(e, D),
              (0, x.Z)(),
              (0, W.useMediaQuery)({ query: "(max-width: 992px)" })),
            s = (0, u.useRef)(),
            o = (0, u.useReducer)(ee, { isVisible: !1, job: null }),
            l = (0, p.Z)(o, 2),
            d = l[0],
            c = l[1],
            m = function () {
              c({ type: "close", payload: null });
            },
            h = function (e) {
              n(e), c({ type: "close", payload: null });
            };
          return i
            ? (0, R.jsxs)(v.k, {
                direction: "column",
                style: { position: "relative", width: "100%" },
                children: [
                  (0, R.jsx)(U, {
                    align: "center",
                    children: (0, R.jsxs)(v.k, {
                      gap: "10px",
                      align: "center",
                      onClick: function () {
                        c({ type: "open", payload: null });
                      },
                      children: [
                        a[t],
                        (0, R.jsx)("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 14 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, R.jsx)("path", {
                            d: "M1 4.91315H12.7394L8.8263 1M13 8.17411H1.26055L5.1737 12.0873",
                            stroke: "#E5FF00",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, R.jsxs)(N.Z, {
                    isOpen: d.isVisible,
                    onClose: m,
                    ref: s,
                    detent: "content-height",
                    children: [
                      (0, R.jsxs)(N.Z.Container, {
                        style: {
                          background: "#000000",
                          borderTop: "2px solid #777E90",
                          borderRight: "2px solid #777E90",
                          borderLeft: "2px solid #777E90",
                        },
                        children: [
                          (0, R.jsx)(N.Z.Header, {}),
                          (0, R.jsx)(N.Z.Content, {
                            children: (0, R.jsx)(v.k, {
                              direction: "column",
                              children: a.map(function (e, n) {
                                return (0, R.jsx)(Y, {
                                  onClick: function () {
                                    return h(n);
                                  },
                                  disabled: r && 1 === n,
                                  children: (0, R.jsx)(v.k, {
                                    align: "center",
                                    gap: "10px",
                                    style: { width: "100%" },
                                    children: (0, R.jsx)(O.tP, {
                                      size: "clamp(0.9rem,2vw,0.9375rem)",
                                      color: t === n ? "#E5FF00" : "",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        textTransform: "capitalize",
                                      },
                                      children: e.props.children.props.children,
                                    }),
                                  }),
                                });
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, R.jsx)(N.Z.Backdrop, { onTap: m }),
                    ],
                  }),
                ],
              })
            : (0, R.jsx)(R.Fragment, {
                children: (0, R.jsx)(J, {
                  children: a.map(function (e, n) {
                    return (0, R.jsx)(X, {
                      children: (0, R.jsx)($, {
                        onClick: function () {
                          return h(n);
                        },
                        disabled: r && 1 === n,
                        children: (0, R.jsxs)(v.k, {
                          align: "center",
                          gap: "10px",
                          style: { width: "100%" },
                          children: [
                            t === n &&
                              (0, R.jsx)("svg", {
                                width: "9",
                                height: "19",
                                viewBox: "0 0 9 19",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, R.jsx)("path", {
                                  d: "M8 1L2 9.5L8 18",
                                  stroke: "#E5FF00",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                }),
                              }),
                            (0, R.jsx)(O.tP, {
                              size: "clamp(0.9rem,2vw,0.9375rem)",
                              color: t === n ? "#E5FF00" : "",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily3)",
                                textTransform: "capitalize",
                              },
                              children: e.props.children.props.children,
                            }),
                            t === n &&
                              (0, R.jsx)("svg", {
                                width: "9",
                                height: "19",
                                viewBox: "0 0 9 19",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, R.jsx)("path", {
                                  d: "M1 1L7 9.5L1 18",
                                  stroke: "#E5FF00",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                }),
                              }),
                          ],
                        }),
                      }),
                    });
                  }),
                }),
              });
        },
        Ee = n(31243),
        Te = n(96944),
        Le = n(11600),
        Se = n(30456),
        He = n(83719),
        Ae = (0, g.Z)(F.ZP)(
          te ||
            (te = (0, h.Z)([
              "\nborder-radius: ",
              ";\nbackground-image: ",
              "!important;\npadding:3px 8px;!important;\nheight:42px;\nmin-width:110px;\n:hover {\n    cursor: pointer;\n  }\n:disabled{\n  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;\n}\n",
            ])),
          function (e) {
            return e.borderradius;
          },
          function (e) {
            return e.bg;
          }
        ),
        _e = function (e) {
          var t = e.show,
            n = e.onClose,
            r = e.onConfirm,
            a = (e.jobInfo, (0, x.Z)()),
            i = (0, M.zn)().notify,
            s = (0, G.q)().content,
            o = (0, V.Z)().onGetTranslation,
            l = (0, u.useContext)(He.u).isOverlapLoading,
            p = (function () {
              var e = (0, m.Z)(
                (0, d.Z)().mark(function e() {
                  return (0, d.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            r(s.token);
                          } catch (t) {
                            i(o(t.message), "error");
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
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(O.b4, {
                width: "430px",
                preventClose: !0,
                closeButton: !0,
                open: t,
                onClose: function () {
                  n();
                },
                children: [
                  (0, R.jsx)(O.lb, {
                    children: (0, R.jsx)(O.tP, {
                      size: "clamp(1.7rem,2vw,1.875rem)",
                      color: "var(--yellowColor)",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        lineHeight: "1",
                        textTransform: "uppercase",
                      },
                      children: (0, R.jsx)(w.Z, {
                        id: "confirm-order",
                        defaultMessage: "Confirm Order",
                        values: { br: (0, R.jsx)("br", {}) },
                      }),
                    }),
                  }),
                  (0, R.jsx)("svg", {
                    style: { alignSelf: "center" },
                    width: "29",
                    height: "1",
                    viewBox: "0 0 29 1",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, R.jsx)("line", {
                      x1: "0.5",
                      y1: "0.5",
                      x2: "28.5",
                      y2: "0.500002",
                      stroke: "#A5A2BA",
                    }),
                  }),
                  (0, R.jsx)(Te.ZP.Body, {
                    children: (0, R.jsxs)(v.k, {
                      direction: "column",
                      gap: "20px",
                      align: "center",
                      style: { width: "100%" },
                      children: [
                        (0, R.jsx)(O.tP, {
                          size: "clamp(1/4rem,2vw,1.5rem)",
                          color: "#ffffff",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily3)",
                            lineHeight: "1.1",
                            textAlign: "center",
                            textAlignLast: "center",
                          },
                          children: (0, R.jsx)(w.Z, {
                            id: "are-you-sure-you-want-to-confirm-this-order-you",
                            defaultMessage:
                              "Are you sure you want to confirm this order?{br} You will receive an email notification in your mailbox as soon as the generation process has been completed.",
                            values: { br: (0, R.jsx)("br", {}) },
                          }),
                        }),
                        (0, R.jsxs)(v.k, {
                          gap: "20px",
                          style: { width: "100%" },
                          children: [
                            (0, R.jsx)(Ae, {
                              onClick: function () {
                                p();
                              },
                              type: "button",
                              bg: "#E5FF00",
                              borderradius: "8px",
                              style: { width: "100%" },
                              children: (0, R.jsx)(O.tP, {
                                size: "clamp(1rem,2vw,1.1rem)",
                                color: "#000000",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  lineHeight: 1,
                                  textTransform: "uppercase",
                                },
                                children: "".concat(
                                  a.formatMessage({
                                    id: "confirm",
                                    defaultMessage: "Confirm",
                                  })
                                ),
                              }),
                            }),
                            (0, R.jsx)(Ae, {
                              onClick: function () {
                                n();
                              },
                              type: "button",
                              bg: "#E5FF00",
                              borderradius: "8px",
                              style: { width: "100%" },
                              children: (0, R.jsx)(O.tP, {
                                size: "clamp(1rem,2vw,1.1rem)",
                                color: "#000000",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  lineHeight: 1,
                                  textTransform: "uppercase",
                                },
                                children: "".concat(
                                  a.formatMessage({
                                    id: "cancel",
                                    defaultMessage: "Cancel",
                                  })
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              l.isLoading &&
                (0, R.jsx)(_.Z, {
                  children: (0, R.jsx)(O.tP, {
                    size: "clamp(1.3rem,2vw,1.8rem)",
                    color: "#FFFFFF",
                    weight: "bold",
                    css: {
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                    },
                    children:
                      l.title.id &&
                      (0, R.jsx)(
                        w.Z,
                        (0, c.Z)(
                          (0, c.Z)({}, l.title),
                          {},
                          { values: { br: (0, R.jsx)("br", {}) } }
                        )
                      ),
                  }),
                }),
            ],
          });
        },
        Ie = function (e) {
          var t = e.show,
            n = e.onClose,
            r = e.onConfirm,
            a = (0, x.Z)(),
            i = (0, M.zn)().notify,
            s = (0, G.q)().content,
            o = (0, V.Z)().onGetTranslation,
            l = (0, I.n7)().onEditOrBindEmail,
            h = (0, u.useContext)(He.u),
            g = h.isOverlapLoading,
            f = h.setIsOverlapLoading,
            y = (0, Le.Z)(["_acc"]),
            b = (0, p.Z)(y, 3),
            j = (b[0], b[1]),
            k =
              (b[2],
              P.Ry().shape({
                email: P.Z_()
                  .email(
                    a.formatMessage({
                      id: "please-enter-a-valid-email-address",
                      defaultMessage: "Please enter a valid email address.",
                    })
                  )
                  .required(
                    a.formatMessage({
                      id: "email-is-required",
                      defaultMessage: "Email address is required",
                    })
                  )
                  .min(
                    1,
                    a.formatMessage({
                      id: "email-is-too-short",
                      defaultMessage: "Email address is too short",
                    })
                  )
                  .max(
                    50,
                    a.formatMessage({
                      id: "email-address-exceeds-the-allowed-length",
                      defaultMessage:
                        "Email address exceeds the allowed length",
                    })
                  ),
              })),
            F = { resolver: (0, E.X)(k) },
            Z = (0, T.cI)(F),
            C =
              (Z.register,
              Z.handleSubmit,
              Z.formState.errors,
              (0, L.TA)({
                initialValues: { email: "" },
                validationSchema: k,
                onSubmit: (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t, m) {
                      var p, h, u, g;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (p = m.resetForm),
                                  (e.prev = 1),
                                  f({
                                    isLoading: !0,
                                    title: {
                                      id: "loading",
                                      defaultMessage: "Loading...",
                                    },
                                  }),
                                  (e.next = 5),
                                  l(s.token, t.email)
                                );
                              case 5:
                                if (!(h = e.sent).error && !h.data.error) {
                                  e.next = 8;
                                  break;
                                }
                                throw new Error(h.message);
                              case 8:
                                return (
                                  h.data.token &&
                                    ((u = (0, Se.Z)(h.data.token)),
                                    (g = new Date(1e3 * u.exp)),
                                    j(
                                      "_acc",
                                      JSON.stringify(
                                        (0, c.Z)(
                                          (0, c.Z)({}, u),
                                          {},
                                          { token: h.data.token }
                                        )
                                      ),
                                      {
                                        sameSite: !0,
                                        secure: !0,
                                        expires: g,
                                        path: "/",
                                      }
                                    ),
                                    i(
                                      "".concat(
                                        a.formatMessage({
                                          id: "the-email-has-been-successfully-saved",
                                          defaultMessage:
                                            "The email has been successfully saved",
                                        })
                                      ),
                                      "success"
                                    ),
                                    p(),
                                    n(),
                                    r(h.data.token),
                                    f({
                                      isLoading: !1,
                                      title: { id: "", defaultMessage: "" },
                                    })),
                                  e.abrupt("return")
                                );
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(1)),
                                  i(o(e.t0.message), "error"),
                                  f({
                                    isLoading: !1,
                                    title: { id: "", defaultMessage: "" },
                                  });
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 12]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              }));
          return (0, R.jsxs)(R.Fragment, {
            children: [
              (0, R.jsxs)(O.b4, {
                width: "430px",
                preventClose: !0,
                closeButton: !0,
                open: t,
                onClose: function () {
                  n();
                },
                children: [
                  (0, R.jsx)(O.lb, {
                    children: (0, R.jsx)(O.tP, {
                      size: "clamp(1.7rem,2vw,1.875rem)",
                      color: "var(--yellowColor)",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        lineHeight: "1",
                        textTransform: "uppercase",
                      },
                      children: (0, R.jsx)(w.Z, {
                        id: "add-email",
                        defaultMessage: "Add email",
                        values: { br: (0, R.jsx)("br", {}) },
                      }),
                    }),
                  }),
                  (0, R.jsx)("svg", {
                    style: { alignSelf: "center" },
                    width: "29",
                    height: "1",
                    viewBox: "0 0 29 1",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, R.jsx)("line", {
                      x1: "0.5",
                      y1: "0.5",
                      x2: "28.5",
                      y2: "0.500002",
                      stroke: "#A5A2BA",
                    }),
                  }),
                  (0, R.jsx)(Te.ZP.Body, {
                    children: (0, R.jsx)(v.k, {
                      direction: "column",
                      gap: "20px",
                      align: "center",
                      style: { width: "100%" },
                      children: (0, R.jsx)(v.k, {
                        direction: "column",
                        gap: "10px",
                        align: "center",
                        style: { width: "100%" },
                        children: (0, R.jsxs)("form", {
                          onSubmit: C.handleSubmit,
                          autoComplete: "off",
                          style: {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          },
                          children: [
                            (0, R.jsxs)(v.k, {
                              direction: "column",
                              gap: "10px",
                              style: { width: "100%" },
                              children: [
                                (0, R.jsx)(O.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "#ffffff",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    lineHeight: "clamp(0.875rem,2vw,0.9rem)",
                                  },
                                  children: (0, R.jsx)(w.Z, {
                                    id: "email",
                                    defaultMessage: "Email",
                                    values: { br: (0, R.jsx)("br", {}) },
                                  }),
                                }),
                                (0, R.jsx)(v.k, {
                                  direction: "column",
                                  style: {
                                    gap: "6px",
                                    alignSelf: "center",
                                    width: "100%",
                                    position: "relative",
                                  },
                                  children: (0, R.jsxs)(v.k, {
                                    justify: "center",
                                    direction: "column",
                                    align: "flex-start",
                                    style: { width: "100%" },
                                    children: [
                                      (0, R.jsx)(O.l_, {
                                        style: { width: "100%" },
                                        name: "email",
                                        type: "email",
                                        autoCapitalize: "off",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        placeholder: a.formatMessage({
                                          id: "email",
                                          defaultMessage: "Email",
                                        }),
                                        onChange: C.handleChange,
                                        value: C.values.email,
                                        autoFocus: !0,
                                      }),
                                      (0, R.jsx)(O.d$, {
                                        children: (0, R.jsx)(O.tP, {
                                          size: "clamp(0.7rem,2vw,0.8rem)",
                                          color: "red",
                                          weight: "bold",
                                          css: {
                                            fontFamily: "var(--fontFamily1)",
                                            textTransform: "capitalize",
                                          },
                                          children: C.errors.email,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, R.jsx)(O.tP, {
                              size: "clamp(0.725rem,2vw,0.725rem)",
                              color: "#ffffff",
                              weight: "normal",
                              css: {
                                fontFamily: "var(--fontFamily1)",
                                lineHeight: 1,
                              },
                              children: "".concat(
                                a.formatMessage({
                                  id: "kindly-provide-your-email",
                                  defaultMessage:
                                    "Kindly provide your email to receive the generated result or future notifications from us.",
                                })
                              ),
                            }),
                            (0, R.jsx)(v.k, {
                              gap: "20px",
                              style: { width: "100%" },
                              children: (0, R.jsx)(Ae, {
                                type: "submit",
                                bg: "#E5FF00",
                                borderradius: "8px",
                                style: { width: "100%" },
                                children: (0, R.jsx)(O.tP, {
                                  size: "clamp(1rem,2vw,1.1rem)",
                                  color: "#000000",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily1)",
                                    lineHeight: 1,
                                    textTransform: "uppercase",
                                  },
                                  children: "".concat(
                                    a.formatMessage({
                                      id: "confirm",
                                      defaultMessage: "Confirm",
                                    })
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              g.isLoading &&
                (0, R.jsx)(_.Z, {
                  children: (0, R.jsx)(O.tP, {
                    size: "clamp(1.3rem,2vw,1.8rem)",
                    color: "#FFFFFF",
                    weight: "bold",
                    css: {
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                    },
                    children:
                      g.title.id &&
                      (0, R.jsx)(
                        w.Z,
                        (0, c.Z)(
                          (0, c.Z)({}, g.title),
                          {},
                          { values: { br: (0, R.jsx)("br", {}) } }
                        )
                      ),
                  }),
                }),
            ],
          });
        },
        Be = g.Z.div(
          ne ||
            (ne = (0, h.Z)([
              "\nbackground-image: url(/images/background-ellipse.png);\nbackground-position-x: right;\nbackground-size: contain;\nbackground-repeat: no-repeat;\nbackground-color: black; \ndisplay: flex;\nwidth: 100%;\nheight: 100%;\noverflow-y: auto;\n",
            ]))
        ),
        Oe = (0, g.Z)(F.ZP)(
          re ||
            (re = (0, h.Z)([
              "\nborder-radius: ",
              ";\nbackground-image: ",
              "!important;\n// padding:3px 8px!important;\nmargin:0px 0px 10px 0px!important;\nmin-width:110px;\ncolor:black;\nbox-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.50);\n:hover {\n    cursor: pointer;\n  }\n:disabled {\n  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;\n  color:grey;\n  box-shadow: none;\n}\n",
            ])),
          function (e) {
            return e.borderradius;
          },
          function (e) {
            return e.bg;
          }
        ),
        Ge = (0, g.Z)(v.k)(
          ae ||
            (ae = (0, h.Z)([
              "\nwidth: 100%;\ngap: 20px;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  place-content: start;\n}\n@media only screen and (min-width: 992px) {\n  place-content:space-between;\n}\n",
            ]))
        ),
        Ve = g.Z.form(
          ie ||
            (ie = (0, h.Z)([
              "\nwidth: 100%;\n// height: 100%;\ndisplay: flex;\nflex-direction: column;\npadding: 0px 10px;\ngap:28px;\n// padding:0px 0px 20px 0px;\nheight:100%;\noverflow: auto; \n",
            ]))
        ),
        qe = g.Z.input(
          se ||
            (se = (0, h.Z)([
              "\n  border-radius: 10px;\n  background-color: transparent;\n  border: 1px solid #777E90;\n  min-height:45px;\n  padding: 0px 16px;\n  font-size: clamp(0.875rem,2vw,1rem);\n  font-weight: 700;\n  font-style: normal;\n  font-family: var(--fontFamily1);\n  :disabled{\n    background-color: grey;\n  }\n",
            ]))
        ),
        Ne = g.Z.div(
          oe ||
            (oe = (0, h.Z)([
              "\nposition: absolute;\nright: 0px;\ntop:-20px;\nheight:12px;\n",
            ]))
        ),
        We = (0, g.Z)(F.ZP)(
          le ||
            (le = (0, h.Z)([
              "\nwidth: 170px;\nheight: 46px;\nmin-width: 170px;\nbackground: transparent;\nborder: ",
              ";\nborder-radius: 8px;\n>span{\n  color: ",
              ";\n}\n",
            ])),
          function (e) {
            return "true" === e.isselected
              ? "2px solid #E5FF00"
              : "2px solid #777E90";
          },
          function (e) {
            return "true" === e.isselected ? "#E5FF00" : "#777E90";
          }
        ),
        Re = (0, g.Z)(v.k)(
          de ||
            (de = (0, h.Z)([
              "\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  flex-direction: column;\n  gap: 8px;\n}\n@media only screen and (min-width: 992px) {\n  flex-direction: row;\n  gap: 20px;\n  align-items: center;\n}\n",
            ]))
        ),
        De = (0, g.Z)(v.k)(
          ce ||
            (ce = (0, h.Z)([
              "\nwidth:100%;\nflex-direction: column;\ngap: 24px;\nbackground-image:linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);\nborder-radius: 8px;\nborder: 2px solid #777E90;\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  padding:20px 10px;\n}\n@media only screen and (min-width: 992px) {\n  padding:20px 44px;\n}\n",
            ]))
        ),
        Ue = (0, g.Z)(v.k)(
          me ||
            (me = (0, h.Z)([
              "\ngap: 16px;\noverflow-y: scroll;\noverflow-x: hidden;\nflex-wrap: wrap;\nmax-height:150px\n",
            ]))
        ),
        Ye = g.Z.img(
          pe ||
            (pe = (0, h.Z)([
              "\n  height: 115px;\n  width: 115px;\n  object-fit: contain;\n  background-color: black;\n",
            ]))
        ),
        Je = (0, g.Z)(v.k)(
          he ||
            (he = (0, h.Z)([
              "\ngap: 16px;\noverflow-y: scroll;\noverflow-x: hidden;\nflex-wrap: wrap;\nmax-height:250px;\n// min-height: 250px;\nheight:100%;\npadding: 10px 0px;\n",
            ]))
        ),
        Xe = (0, g.Z)(v.k)(
          ue || (ue = (0, h.Z)(["\nposition: relative;\noverflow: show;\n"]))
        ),
        $e = (0, g.Z)(F.ZP)(
          ge ||
            (ge = (0, h.Z)([
              "\nposition: absolute;\nwidth: fit-content;\nheight: fit-content;\nmin-width: fit-content;\nbackground-color:transparent;\npadding:0px;\nborder-radius: 0px;\nright:-10px;\ntop:-10px;\nz-index: 200;\n",
            ]))
        ),
        Ke = g.Z.img(
          fe ||
            (fe = (0, h.Z)([
              "\nheight: 115px;\nwidth: 115px;\nobject-fit: contain;\nbackground-color: black;\n",
            ]))
        ),
        Qe = (0, g.Z)(F.ZP)(
          xe ||
            (xe = (0, h.Z)([
              "\nwidth: 115px;\nheight: 115px;\nmin-width: 115px;\nbackground-color:black;\nbackground-image: linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);\npadding:0px;\nborder-radius: 0px;\nborder:2px solid #E5FF00;\n",
            ]))
        ),
        et = (0, g.Z)(v.k)(
          we ||
            (we = (0, h.Z)([
              "\nwidth: 100%;\nheight: 100%;\ndisplay: grid;\ngrid-gap: 20px;\ngrid-auto-flow: dense;\nmax-height:430px;\noverflow-y:scroll;\npadding:0px 5px 20px 0px;\nalign-items: center;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  grid-template-columns:repeat(1, 1fr);\n  grid-template-rows: 100%;\n}\n\n@media only screen and (min-width: 992px) {\n  grid-template-columns:repeat(2, 1fr);\n  grid-template-rows: 100%;\n}\n\n",
            ]))
        ),
        tt = (0, g.Z)(F.ZP)(
          ve ||
            (ve = (0, h.Z)([
              "\nwidth: 100%;\nheight: 404px;\nbackground-color: black;\npadding:0px;\nbackground-image: linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);\nborder: ",
              ";\nborder-radius: 8px;\n>span{\n  color: ",
              ";\n  height: 100%;\n  width: 100%;\n  padding:20px 30px;\n}\n",
            ])),
          function (e) {
            return "true" === e.isselected
              ? "2px solid #E5FF00"
              : "2px solid #777E90";
          },
          function (e) {
            return "true" === e.isselected ? "#E5FF00" : "#777E90";
          }
        ),
        nt = (0, g.Z)(v.k)(
          ye ||
            (ye = (0, h.Z)([
              "\n  // flex-flow: wrap;\n  // justify-content: center;\n  // gap: 12px;\n  display:grid;\n  grid-gap: 10px;\n  grid-auto-rows: 125px;\n  // grid-auto-flow: dense;\n  grid-template-columns:repeat(auto-fill, minmax(82px, 1fr));\n  overflow-y: scroll;\n  padding:10px 10px 0px 0px;\n  width:100%;\n  justify-items: center;\n  // height:100%;\n\n",
            ]))
        ),
        rt = (0, g.Z)(v.k)(
          be ||
            (be = (0, h.Z)([
              "\nposition:relative;\nwidth:80px;\nflex-direction: column;\n",
            ]))
        ),
        at = g.Z.img(
          je ||
            (je = (0, h.Z)([
              "\nheight: 80px;\nwidth: 80px;\nobject-fit: contain;\nbackground-color: black;\n",
            ]))
        ),
        it = (0, g.Z)(v.k)(
          ke ||
            (ke = (0, h.Z)([
              "\nposition: absolute;\nright:-10px;\ntop:-10px;\nwidth:34px;\nheight:34px;\nalign-items: center;\nborder-radius: 50%;\nbackground-color: #000000;\nborder:2px solid #E5FF00\n",
            ]))
        ),
        st = (0, g.Z)(F.ZP)(
          Fe ||
            (Fe = (0, h.Z)([
              "\nbackground-color: transparent;\nbackground-image: linear-gradient(180deg, rgba(185, 180, 180, 0.50) 0%, rgba(185, 180, 180, 0.30) 100%);\nborder-radius: 18px;\nborder: none;\n// display: flex;\n// flex-direction: column;\n\n>span{\n  height:100%;\n  width:100%;\n}\n\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    width: 125px;\n    min-width: 125px;\n    max-width: 125px;\n    height: 115px;\n    max-height: 115px;\n    min-height: 115px;\n  }\n  @media only screen and (min-width: 992px) {\n    width: 141px;\n    min-width: 141px;\n    max-width: 141px;\n    height: 128px;\n    max-height: 128px;\n    min-height: 128px;\n  }\n",
            ]))
        ),
        ot = (0, g.Z)(v.k)(
          Ze ||
            (Ze = (0, h.Z)([
              "\n  display:grid;\n  grid-gap: 10px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding:5px 5px 0px 0px;\n  justify-items: center;\n  align-items: center;\n  width:100%;\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    grid-auto-rows: 115px;\n    grid-template-columns:repeat(auto-fill, minmax(115px, 1fr));\n  }\n  \n  @media only screen and (min-width: 992px) {\n    grid-auto-rows: 141px;\n    grid-template-columns:repeat(auto-fill, minmax(141px, 1fr));\n  }\n",
            ]))
        ),
        lt = (0, g.Z)(F.ZP)(
          Me ||
            (Me = (0, h.Z)([
              "\nmin-width:",
              ";\nmin-height:",
              ";\nmax-width:",
              ";\npadding:",
              ";\nbackground: transparent;\nmargin: 0px;\nalign-items: center;\nheight: auto;\ncursor: pointer;\nbox-sizing: border-box;\nborder-radius: var(--nextui-space-5);\nposition: relative;\n\n:hover {\n    cursor: pointer;\n  }\n\n&:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 0px;\n    pointer-events: none;\n    opacity: ",
              ";\n    z-index: 201;\n  }\n",
            ])),
          function (e) {
            return e.minwidth;
          },
          function (e) {
            return e.minheight;
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
        dt = (0, g.Z)(F.ZP)(
          Ce ||
            (Ce = (0, h.Z)([
              "\nmin-width:",
              ";\nmin-height:",
              ";\nmax-width:",
              ";\npadding:",
              ";\nbackground: transparent;\nmargin: 0px;\nalign-items: center;\nheight: auto;\ncursor: pointer;\nbox-sizing: border-box;\nborder-radius: var(--nextui-space-5);\nposition: relative;\n>span>svg>path{\n  fill: white;\n}\n:hover {\n    cursor: pointer;\n  }\n:disabled{\n  >span>svg>path{\n    fill: grey;\n  }\n}\n// &:after {\n//     content: '';\n//     position: absolute;\n//     top: 0;\n//     left: 0;\n//     width: 100%;\n//     height: 100%;\n//     background-color: rgba(0, 0, 0, 0.5);\n//     border-radius: 0px;\n//     pointer-events: none;\n//     opacity: ",
              ";\n//     z-index: 201;\n//   }\n",
            ])),
          function (e) {
            return e.minwidth;
          },
          function (e) {
            return e.minheight;
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
        ct = function (e) {
          var t = e.register,
            n = e.formik,
            r = e.optionsModelList,
            a = e.selectedOptionsModel,
            i = e.setSelectedOptionsModel,
            s = e.setSelectedGender,
            o = e.selectedGender,
            h = e.setIsOverlapLoading,
            g = (0, x.Z)(),
            f = (0, M.zn)().notify,
            w = (0, u.useState)([
              {
                id: (0, z.Z)(),
                src: "/images/magic-avatar/sample-image-1.png",
              },
              {
                id: (0, z.Z)(),
                src: "/images/magic-avatar/sample-image-2.png",
              },
              {
                id: (0, z.Z)(),
                src: "/images/magic-avatar/sample-image-3.png",
              },
            ]),
            j = (0, p.Z)(w, 1)[0],
            k = (0, u.useRef)(null),
            F = (0, V.Z)().onGetTranslation,
            C = (0, u.useState)([]),
            P = (0, p.Z)(C, 2),
            E = P[0],
            T = P[1],
            L = (0, u.useCallback)(
              (0, m.Z)(
                (0, d.Z)().mark(function e() {
                  var t;
                  return (0, d.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            h({
                              isLoading: !0,
                              title: { id: "", defaultMessage: "" },
                            }),
                              (t = r.map(function (e) {
                                return (0,
                                c.Z)((0, c.Z)({}, e), {}, { label: e.name, value: e.model });
                              })),
                              T(t),
                              h({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              });
                          } catch (n) {
                            f(F(n.message), "error"),
                              h({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              });
                          }
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [f, F, r, h]
            ),
            S = function (e) {
              s(e), i(null), n.setFieldValue("model", "");
            },
            H = (function () {
              var e = (0, m.Z)(
                (0, d.Z)().mark(function e(t) {
                  var r, a, i;
                  return (0, d.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (r = Array.from(t.target.files)),
                            (a = n.values.images || []),
                            (i = [].concat((0, l.Z)(a), r)),
                            n.setFieldValue("images", i),
                            console.log(i);
                        case 5:
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
            A = function (e) {
              n.setFieldValue("model", e),
                i(
                  r.find(function (t) {
                    return t.model === e.toString();
                  })
                );
            };
          return (
            (0, u.useEffect)(
              function () {
                L();
              },
              [L]
            ),
            (0, R.jsx)(v.k, {
              direction: "column",
              gap: "10px",
              style: {
                height: "100%",
                padding: "0px 0px 20px 0px",
                overflow: "auto",
              },
              children: (0, R.jsxs)(Ve, {
                onSubmit: n.handleSubmit,
                children: [
                  (0, R.jsxs)(Re, {
                    children: [
                      (0, R.jsx)(O.tP, {
                        size: "clamp(1rem,2vw,1.125rem)",
                        color: "#E5FF00",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          textTransform: "capitalize",
                          lineHeight: "1",
                          width: "200px",
                        },
                        children: "1. ".concat(
                          g.formatMessage({
                            id: "choose-gender",
                            defaultMessage: "Choose Gender",
                          }),
                          "  "
                        ),
                      }),
                      (0, R.jsxs)(v.k, {
                        gap: "16px",
                        style: { width: "100%", flexWrap: "wrap" },
                        children: [
                          (0, R.jsxs)(We, {
                            isselected: "female" === o ? "true" : "false",
                            onClick: function () {
                              return S("female");
                            },
                            children: [
                              (0, R.jsx)("img", {
                                src: "/images/magic-avatar/choose-gender-female.png",
                                alt: "girl",
                                style: {
                                  width: "24.38px",
                                  height: "30px",
                                  marginRight: "5px",
                                },
                              }),
                              (0, R.jsx)(O.tP, {
                                size: "clamp(1rem,2vw,1.125rem)",
                                color: "",
                                weight: "extrabold",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  textTransform: "capitalize",
                                  lineHeight: "1",
                                },
                                children: "".concat(
                                  g.formatMessage({
                                    id: "female",
                                    defaultMessage: "Female",
                                  }),
                                  " "
                                ),
                              }),
                            ],
                          }),
                          (0, R.jsxs)(We, {
                            isselected: "male" === o ? "true" : "false",
                            onClick: function () {
                              return S("male");
                            },
                            children: [
                              (0, R.jsx)("img", {
                                src: "/images/magic-avatar/choose-gender-male.png",
                                alt: "girl",
                                style: {
                                  width: "24.38px",
                                  height: "30px",
                                  marginRight: "5px",
                                },
                              }),
                              (0, R.jsx)(O.tP, {
                                size: "clamp(1rem,2vw,1.125rem)",
                                color: "",
                                weight: "extrabold",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  textTransform: "capitalize",
                                  lineHeight: "1",
                                },
                                children: "".concat(
                                  g.formatMessage({
                                    id: "male",
                                    defaultMessage: "Male",
                                  }),
                                  " "
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Re, {
                    children: [
                      (0, R.jsx)(O.tP, {
                        size: "clamp(1rem,2vw,1.125rem)",
                        color: "#E5FF00",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          textTransform: "capitalize",
                          lineHeight: "1",
                          width: "200px",
                        },
                        children: "2. ".concat(
                          g.formatMessage({
                            id: "training-photos",
                            defaultMessage: "Training photos",
                          }),
                          "  "
                        ),
                      }),
                      (0, R.jsxs)(De, {
                        children: [
                          (0, R.jsxs)(Z.ZP.Group, {
                            role: "group",
                            name: "mode",
                            defaultValue: n.values.mode,
                            onChange: function (e) {
                              return n.setFieldValue("mode", e);
                            },
                            orientation: "horizontal",
                            children: [
                              (0, R.jsx)(Z.ZP, {
                                type: "radio",
                                name: "mode",
                                value: "upload-new-photo",
                                color: "primary",
                                labelColor: "primary",
                                children: (0, R.jsx)(O.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily1)",
                                    textTransform: "capitalize",
                                  },
                                  children: "".concat(
                                    g.formatMessage({
                                      id: "upload-new-photo",
                                      defaultMessage: "Upload new photo",
                                    })
                                  ),
                                }),
                              }),
                              (0, R.jsx)(Z.ZP, {
                                type: "radio",
                                name: "mode",
                                value: "existing-model",
                                color: "primary",
                                labelColor: "primary",
                                isDisabled: r.length <= 0,
                                children: (0, R.jsx)(O.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily1)",
                                    textTransform: "capitalize",
                                  },
                                  children: "".concat(
                                    g.formatMessage({
                                      id: "existing-model",
                                      defaultMessage: "Existing model",
                                    })
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (function () {
                            switch (n.values.mode) {
                              case "upload-new-photo":
                                return (0, R.jsxs)(R.Fragment, {
                                  children: [
                                    (0, R.jsxs)(v.k, {
                                      direction: "column",
                                      gap: "10px",
                                      style: {
                                        width: "100%",
                                        position: "relative",
                                      },
                                      children: [
                                        (0, R.jsx)(O.tP, {
                                          size: "clamp(1rem,2vw,1.125rem)",
                                          color: "#ffffff",
                                          weight: "bold",
                                          css: {
                                            fontFamily: "var(--fontFamily3)",
                                            textTransform: "",
                                            lineHeight: "1",
                                          },
                                          children: "".concat(
                                            g.formatMessage({
                                              id: "to-achieve-optimal-results-please",
                                              defaultMessage:
                                                "To achieve optimal results, please follow the guidelines below",
                                            }),
                                            ":"
                                          ),
                                        }),
                                        (0, R.jsxs)(y.a, {
                                          listStyleType: "circle",
                                          style: { color: "white" },
                                          children: [
                                            (0, R.jsx)(y.a.Item, {
                                              children: (0, R.jsx)(O.tP, {
                                                size: "clamp(0.9rem,2vw,0.9rem)",
                                                color: "#ffffff",
                                                weight: "normal",
                                                css: {
                                                  fontFamily:
                                                    "var(--fontFamily3)",
                                                  textTransform: "",
                                                  lineHeight: "1",
                                                },
                                                children: "".concat(
                                                  g.formatMessage({
                                                    id: "upload-5-to-10-headshot-photos",
                                                    defaultMessage:
                                                      "Upload 5 to 10 headshot photos.",
                                                  })
                                                ),
                                              }),
                                            }),
                                            (0, R.jsx)(y.a.Item, {
                                              children: (0, R.jsx)(O.tP, {
                                                size: "clamp(0.9rem,2vw,0.9rem)",
                                                color: "#ffffff",
                                                weight: "normal",
                                                css: {
                                                  fontFamily:
                                                    "var(--fontFamily3)",
                                                  textTransform: "",
                                                  lineHeight: "1",
                                                },
                                                children: "".concat(
                                                  g.formatMessage({
                                                    id: "avoiding-having-multiple-face",
                                                    defaultMessage:
                                                      "Avoiding having multiple faces or obstructions in the image.",
                                                  })
                                                ),
                                              }),
                                            }),
                                            (0, R.jsx)(y.a.Item, {
                                              children: (0, R.jsx)(O.tP, {
                                                size: "clamp(0.9rem,2vw,0.9rem)",
                                                color: "#ffffff",
                                                weight: "normal",
                                                css: {
                                                  fontFamily:
                                                    "var(--fontFamily3)",
                                                  textTransform: "",
                                                  lineHeight: "1",
                                                },
                                                children: "".concat(
                                                  g.formatMessage({
                                                    id: "recommended-image-size-is",
                                                    defaultMessage:
                                                      "Recommended image size is between 512x512 to 1080x1400 pixel.",
                                                  })
                                                ),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, R.jsxs)(v.k, {
                                      direction: "column",
                                      gap: "10px",
                                      style: { width: "100%" },
                                      children: [
                                        (0, R.jsx)(O.tP, {
                                          size: "clamp(1rem,2vw,1.125rem)",
                                          color: "#E5FF00",
                                          weight: "extrabold",
                                          css: {
                                            fontFamily: "var(--fontFamily1)",
                                            textTransform: "uppercase",
                                            lineHeight: "1",
                                          },
                                          children: "".concat(
                                            g.formatMessage({
                                              id: "sample",
                                              defaultMessage: "Sample",
                                            })
                                          ),
                                        }),
                                        (0, R.jsx)(Ue, {
                                          children: j.map(function (e) {
                                            return (0,
                                            R.jsx)(Ye, { src: e.src, alt: e.src }, e.id);
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, R.jsxs)(v.k, {
                                      direction: "column",
                                      style: {
                                        width: "100%",
                                        position: "relative",
                                      },
                                      children: [
                                        (0, R.jsx)(O.tP, {
                                          size: "clamp(1rem,2vw,1.125rem)",
                                          color: "#E5FF00",
                                          weight: "extrabold",
                                          css: {
                                            fontFamily: "var(--fontFamily1)",
                                            textTransform: "uppercase",
                                            lineHeight: "1",
                                          },
                                          children: "".concat(
                                            g.formatMessage({
                                              id: "upload",
                                              defaultMessage: "Upload",
                                            })
                                          ),
                                        }),
                                        (0, R.jsx)(Ne, {
                                          style: { top: -5 },
                                          children: (0, R.jsx)(O.tP, {
                                            size: "clamp(0.7rem,2vw,0.8rem)",
                                            color: "red",
                                            weight: "bold",
                                            css: {
                                              fontFamily: "var(--fontFamily1)",
                                              textTransform: "capitalize",
                                            },
                                            children: n.errors.images,
                                          }),
                                        }),
                                        (0, R.jsxs)(Je, {
                                          children: [
                                            (0, R.jsx)(Qe, {
                                              onPress: function () {
                                                k.current.click();
                                              },
                                              children: (0, R.jsxs)("svg", {
                                                width: "90",
                                                height: "90",
                                                viewBox: "0 0 90 90",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: [
                                                  (0, R.jsx)("path", {
                                                    d: "M34 45C34 44.5618 34.1741 44.1415 34.484 43.8316C34.7938 43.5218 35.2141 43.3477 35.6523 43.3477H43.3477V35.6523C43.3477 35.2141 43.5218 34.7938 43.8316 34.484C44.1415 34.1741 44.5618 34 45 34C45.4382 34 45.8585 34.1741 46.1684 34.484C46.4782 34.7938 46.6523 35.2141 46.6523 35.6523V43.3477H54.3477C54.7859 43.3477 55.2062 43.5218 55.516 43.8316C55.8259 44.1415 56 44.5618 56 45C56 45.4382 55.8259 45.8585 55.516 46.1684C55.2062 46.4782 54.7859 46.6523 54.3477 46.6523H46.6523V54.3477C46.6523 54.7859 46.4782 55.2062 46.1684 55.516C45.8585 55.8259 45.4382 56 45 56C44.5618 56 44.1415 55.8259 43.8316 55.516C43.5218 55.2062 43.3477 54.7859 43.3477 54.3477V46.6523H35.6523C35.2141 46.6523 34.7938 46.4782 34.484 46.1684C34.1741 45.8585 34 45.4382 34 45Z",
                                                    fill: "white",
                                                  }),
                                                  (0, R.jsx)("defs", {
                                                    children: (0, R.jsxs)(
                                                      "linearGradient",
                                                      {
                                                        id: "paint0_linear_3033_7531",
                                                        x1: "45",
                                                        y1: "0",
                                                        x2: "45",
                                                        y2: "90",
                                                        gradientUnits:
                                                          "userSpaceOnUse",
                                                        children: [
                                                          (0, R.jsx)("stop", {
                                                            stopColor: "white",
                                                            stopOpacity: "0",
                                                          }),
                                                          (0, R.jsx)("stop", {
                                                            offset: "1",
                                                            stopColor:
                                                              "#FFF500",
                                                            stopOpacity: "0.8",
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            n.values.images.map(function (
                                              e,
                                              t
                                            ) {
                                              return (0, R.jsxs)(Xe, {
                                                children: [
                                                  (0, R.jsx)($e, {
                                                    onClick: function () {
                                                      return (function (e) {
                                                        var t =
                                                          n.values.images.filter(
                                                            function (t, n) {
                                                              return n !== e;
                                                            }
                                                          );
                                                        n.setFieldValue(
                                                          "images",
                                                          t
                                                        );
                                                      })(t);
                                                    },
                                                    children: (0, R.jsxs)(
                                                      "svg",
                                                      {
                                                        width: "26",
                                                        height: "26",
                                                        viewBox: "0 0 26 26",
                                                        fill: "none",
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        children: [
                                                          (0, R.jsx)("circle", {
                                                            cx: "13.125",
                                                            cy: "12.875",
                                                            r: "12.5",
                                                            fill: "#E5FF00",
                                                          }),
                                                          (0, R.jsx)("path", {
                                                            d: "M17.619 8.41016L8.66064 17.3685",
                                                            stroke: "black",
                                                            strokeWidth: "2",
                                                            strokeLinecap:
                                                              "round",
                                                          }),
                                                          (0, R.jsx)("path", {
                                                            d: "M8.66064 8.41016L17.619 17.3685",
                                                            stroke: "black",
                                                            strokeWidth: "2",
                                                            strokeLinecap:
                                                              "round",
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, R.jsx)(Ke, {
                                                    src: URL.createObjectURL(e),
                                                    alt: t,
                                                  }),
                                                ],
                                              });
                                            }),
                                            (0, R.jsx)(
                                              "input",
                                              (0, c.Z)(
                                                (0, c.Z)(
                                                  {
                                                    type: "file",
                                                    name: "images",
                                                  },
                                                  t("images")
                                                ),
                                                {},
                                                {
                                                  multiple: !0,
                                                  accept:
                                                    "image/png,image/jpeg",
                                                  ref: k,
                                                  onChange: function (e) {
                                                    return H(e);
                                                  },
                                                  style: { display: "none" },
                                                  "aria-label": "images",
                                                }
                                              )
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, R.jsxs)(v.k, {
                                      direction: "column",
                                      gap: "10px",
                                      style: { width: "100%" },
                                      children: [
                                        (0, R.jsx)(O.tP, {
                                          size: "clamp(1rem,2vw,1.125rem)",
                                          color: "#E5FF00",
                                          weight: "extrabold",
                                          css: {
                                            fontFamily: "var(--fontFamily1)",
                                            textTransform: "uppercase",
                                            lineHeight: "1",
                                          },
                                          children: "".concat(
                                            g.formatMessage({
                                              id: "name-your-model",
                                              defaultMessage: "Name your model",
                                            }),
                                            " "
                                          ),
                                        }),
                                        (0, R.jsxs)(v.k, {
                                          justify: "center",
                                          direction: "column",
                                          align: "flex-start",
                                          style: {
                                            width: "100%",
                                            position: "relative",
                                          },
                                          children: [
                                            (0, R.jsx)(qe, {
                                              "aria-label": "model name",
                                              style: { width: "100%" },
                                              name: "modelName",
                                              type: "text",
                                              autoCapitalize: "off",
                                              autoComplete: "off",
                                              autoCorrect: "off",
                                              placeholder: g.formatMessage({
                                                id: "new-model-title",
                                                defaultMessage:
                                                  "New Model Title",
                                              }),
                                              onChange: n.handleChange,
                                              value: n.values.modelName,
                                            }),
                                            (0, R.jsx)(Ne, {
                                              children: (0, R.jsx)(O.tP, {
                                                size: "clamp(0.7rem,2vw,0.8rem)",
                                                color: "red",
                                                weight: "bold",
                                                css: {
                                                  fontFamily:
                                                    "var(--fontFamily1)",
                                                  textTransform: "capitalize",
                                                },
                                                children: n.errors.modelName,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                              case "existing-model":
                                return (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(b.Ph, {
                                    placeholder: "".concat(
                                      g.formatMessage({
                                        id: "select-model",
                                        defaultMessage: "Select Model",
                                      })
                                    ),
                                    onChange: A,
                                    data: E,
                                    value:
                                      (null === a || void 0 === a
                                        ? void 0
                                        : a.model) || "",
                                    radius: 10,
                                    rightSection: (0, R.jsx)("svg", {
                                      width: "10",
                                      height: "5",
                                      viewBox: "0 0 10 5",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, R.jsx)("path", {
                                        d: "M9 1.03846L8.33333 0.5L5 3.34615L1.66667 0.5L1 1.03846L5 4.5L9 1.03846Z",
                                        fill: "#E5FF00",
                                        stroke: "#E5FF00",
                                        strokeWidth: "0.6",
                                      }),
                                    }),
                                    styles: function () {
                                      return {
                                        item: {
                                          fontFamily: "var(--fontFamily1)",
                                          fontSize: "clamp(0.875rem,2vw,1rem)",
                                          padding: "10px 20px",
                                          backgroundColor: "#16181A",
                                          color: "white",
                                          border: "none",
                                          borderRadius: "9px",
                                          "&[data-selected]": {
                                            "&, &:hover": {
                                              backgroundColor: "#2b2f31",
                                              color: "white",
                                            },
                                          },
                                          "&[data-hovered]": {
                                            backgroundColor: "#787f85",
                                          },
                                        },
                                        input: {
                                          padding: "10px 20px",
                                          fontFamily: "var(--fontFamily1)",
                                          fontSize: "clamp(0.875rem,2vw,1rem)",
                                          backgroundColor: "#16181A",
                                          border: "1px solid #777E90",
                                          height: "100%",
                                          color: "#ffffff",
                                          "::placeholder": {
                                            textAlign: "start",
                                          },
                                          ":focus": {
                                            outline: "none",
                                            border: "1px solid #E5FF00",
                                          },
                                        },
                                        dropdown: {
                                          backgroundColor: "#16181A",
                                          border: "none",
                                        },
                                        itemsWrapper: { gap: "2px" },
                                      };
                                    },
                                  }),
                                });
                              default:
                                return (0, R.jsx)(R.Fragment, {});
                            }
                          })(),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Re, {
                    children: [
                      (0, R.jsx)(O.tP, {
                        size: "clamp(1rem,2vw,1.125rem)",
                        color: "#E5FF00",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          textTransform: "capitalize",
                          lineHeight: "1",
                          width: "200px",
                        },
                        children: "3. ".concat(
                          g.formatMessage({
                            id: "name-your-avatar",
                            defaultMessage: "Name your avatar",
                          }),
                          " "
                        ),
                      }),
                      (0, R.jsxs)(v.k, {
                        justify: "center",
                        direction: "column",
                        align: "flex-start",
                        style: { width: "100%", position: "relative" },
                        children: [
                          (0, R.jsx)(qe, {
                            "aria-label": "title",
                            style: { width: "100%" },
                            name: "title",
                            type: "text",
                            autoCapitalize: "off",
                            autoComplete: "off",
                            autoCorrect: "off",
                            placeholder: g.formatMessage({
                              id: "new-avatar-title",
                              defaultMessage: "New Avatar Title",
                            }),
                            onChange: n.handleChange,
                            value: n.values.title,
                          }),
                          (0, R.jsx)(Ne, {
                            children: (0, R.jsx)(O.tP, {
                              size: "clamp(0.7rem,2vw,0.8rem)",
                              color: "red",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily1)",
                                textTransform: "capitalize",
                              },
                              children: n.errors.title,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsx)(v.k, {
                    style: { alignSelf: "center" },
                    children: (0, R.jsx)(Oe, {
                      type: "submit",
                      bg: "#E5FF00",
                      borderradius: "8px",
                      style: { width: "fit-content" },
                      children: (0, R.jsx)(O.tP, {
                        size: "clamp(0.985rem,2vw,1rem)",
                        color: "",
                        weight: "extrabold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          textTransform: "capitalize",
                          lineHeight: "1",
                        },
                        children: "".concat(
                          g.formatMessage({
                            id: "next",
                            defaultMessage: "Next",
                          })
                        ),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        mt = function (e) {
          var t = e.formik,
            n = e.setIsOverlapLoading,
            r = e.selectedAvatarPackage,
            a = e.setSelectedAvatarPackage,
            i = e.selectedGender,
            s = (0, x.Z)(),
            o = (0, G.q)().content,
            l = (0, M.zn)().notify,
            c = (0, u.useState)([]),
            h = (0, p.Z)(c, 2),
            g = h[0],
            f = h[1],
            w = (0, V.Z)().onGetTranslation,
            y = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t) {
                      var n, r, a, i, s, o, l, c;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                  }),
                                  (e.next = 4),
                                  Ee.Z.get(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/avatar/packages"
                                    ),
                                    n
                                  )
                                );
                              case 4:
                                return (r = e.sent), (e.next = 7), r;
                              case 7:
                                if (
                                  ((a = e.sent),
                                  (i = a.data),
                                  (s = a.status),
                                  (o = a.statusText),
                                  200 === s)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(o);
                              case 13:
                                if (!i.error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(i.msg);
                              case 15:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: i,
                                  message: "",
                                });
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (l = e.t0.message),
                                  (c = void 0 === l ? "" : l),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: c,
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetAvatarPackage: e };
            })(),
            b = y.onGetAvatarPackage,
            j = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t) {
                      var n, r, a, i, s, o, l, c;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                  }),
                                  (e.next = 4),
                                  Ee.Z.get(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "wallet/packages"
                                    ),
                                    n
                                  )
                                );
                              case 4:
                                return (r = e.sent), (e.next = 7), r;
                              case 7:
                                if (
                                  ((a = e.sent),
                                  (i = a.data),
                                  (s = a.status),
                                  (o = a.statusText),
                                  200 === s)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(o);
                              case 13:
                                if (!i.error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(i.msg);
                              case 15:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: i,
                                  message: "",
                                });
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (l = e.t0.message),
                                  (c = void 0 === l ? "" : l),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: c,
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetAvatarWalletPackage: e };
            })(),
            k = j.onGetAvatarWalletPackage;
          return (
            (0, u.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e() {
                      var t;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  n({
                                    isLoading: !0,
                                    title: { id: "", defaultMessage: "" },
                                  }),
                                  (e.next = 4),
                                  b(o.token)
                                );
                              case 4:
                                if (!(t = e.sent).error) {
                                  e.next = 7;
                                  break;
                                }
                                throw new Error(t.message);
                              case 7:
                                f(t.data.data.packages),
                                  n({
                                    isLoading: !1,
                                    title: { id: "", defaultMessage: "" },
                                  }),
                                  (e.next = 15);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  l(w(e.t0.message), "error"),
                                  n({
                                    isLoading: !1,
                                    title: { id: "", defaultMessage: "" },
                                  });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                null !== o && void 0 !== o && o.token && e();
              },
              [b, k, a, w, n, o, l]
            ),
            (0, R.jsx)(R.Fragment, {
              children: (0, R.jsx)(v.k, {
                direction: "column",
                gap: "10px",
                style: {
                  height: "100%",
                  overflow: "hidden",
                  padding: "0px 0px 20px 0px",
                },
                children: (0, R.jsxs)(Ve, {
                  onSubmit: t.handleSubmit,
                  children: [
                    (0, R.jsxs)(Re, {
                      children: [
                        (0, R.jsx)(O.tP, {
                          size: "clamp(1rem,2vw,1.125rem)",
                          color: "#E5FF00",
                          weight: "bold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "capitalize",
                            lineHeight: "1",
                            width: "200px",
                          },
                          children: "1. ".concat(
                            s.formatMessage({
                              id: "select-package",
                              defaultMessage: "Select package",
                            }),
                            "  "
                          ),
                        }),
                        (0, R.jsx)(et, {
                          children: g
                            .filter(function (e) {
                              return e.gender === i;
                            })
                            .map(function (e) {
                              return (0, R.jsx)(
                                tt,
                                {
                                  isselected:
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.id) ===
                                    (null === r || void 0 === r ? void 0 : r.id)
                                      ? "true"
                                      : "false",
                                  onClick: function () {
                                    a(e);
                                  },
                                  children: (0, R.jsxs)(v.k, {
                                    direction: "column",
                                    gap: "20px",
                                    style: {
                                      alignItems: "flex-start",
                                      height: "100%",
                                      width: "100%",
                                    },
                                    children: [
                                      (0, R.jsxs)(v.k, {
                                        style: {
                                          justifyContent: "space-between",
                                          width: "100%",
                                          alignItems: "center",
                                        },
                                        children: [
                                          (0, R.jsx)(O.tP, {
                                            size: "clamp(1.1rem,2vw,1.5rem)",
                                            color: "#ffffff",
                                            weight: "bold",
                                            css: {
                                              fontFamily: "var(--fontFamily1)",
                                              textTransform: "capitalize",
                                            },
                                            children: e.name,
                                          }),
                                          (0, R.jsxs)(v.k, {
                                            gap: "8px",
                                            style: { alignItems: "center" },
                                            children: [
                                              (0, R.jsx)("img", {
                                                src: "/images/magic-avatar/credit.png",
                                                alt: "credit",
                                                style: {
                                                  width: "40px",
                                                  height: "40px",
                                                },
                                              }),
                                              (0, R.jsxs)(v.k, {
                                                direction: "column",
                                                gap: "5px",
                                                style: {
                                                  alignItems: "flex-end",
                                                },
                                                children: [
                                                  (0, R.jsx)(O.tP, {
                                                    size: "clamp(1.2rem,2vw,1.3rem)",
                                                    color: "#ffffff",
                                                    weight: "extrabold",
                                                    css: {
                                                      fontFamily:
                                                        "var(--fontFamily1)",
                                                      textTransform:
                                                        "uppercase",
                                                      lineHeight: "1",
                                                    },
                                                    children: "".concat(
                                                      parseFloat(
                                                        e.price
                                                      ).toFixed(0),
                                                      " Credits"
                                                    ),
                                                  }),
                                                  (0, R.jsx)(O.tP, {
                                                    size: "clamp(1rem,2vw,1.125rem)",
                                                    color: "#E5FF00",
                                                    weight: "bold",
                                                    css: {
                                                      fontFamily:
                                                        "var(--fontFamily3)",
                                                      textTransform:
                                                        "capitalize",
                                                      lineHeight: "1",
                                                    },
                                                    children: "~ ".concat(
                                                      (
                                                        Number(e.price) / 100
                                                      ).toFixed(2),
                                                      " $"
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, R.jsx)(nt, {
                                        children: e.styles.map(function (e) {
                                          return (0,
                                          R.jsxs)(rt, { children: [(0, R.jsx)(it, { children: (0, R.jsx)(O.tP, { size: "clamp(0.9rem,2vw,0.985rem)", color: "#ffffff", weight: "bold", css: { fontFamily: "var(--fontFamily1)", textTransform: "capitalize", width: "100%" }, children: "x".concat(e.number_of_pictures) }) }), (0, R.jsx)(at, { src: e.image, alt: e.en_name }, e.id), (0, R.jsx)(O.tP, { size: "clamp(0.9rem,2vw,0.985rem)", color: "var(--yellowColor)", weight: "bold", css: { fontFamily: "var(--fontFamily1)", textTransform: "capitalize", width: "100%", overflow: "hidden", textOverflow: "ellipsis" }, children: "".concat(e.en_name) })] }, e.id);
                                        }),
                                      }),
                                    ],
                                  }),
                                },
                                e.id
                              );
                            }),
                        }),
                      ],
                    }),
                    (0, R.jsx)(v.k, {
                      style: { alignSelf: "center" },
                      children: (0, R.jsx)(Oe, {
                        type: "submit",
                        bg: "#E5FF00",
                        borderradius: "8px",
                        style: { width: "fit-content" },
                        children: (0, R.jsx)(O.tP, {
                          size: "clamp(0.985rem,2vw,1rem)",
                          color: "",
                          weight: "extrabold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "capitalize",
                            lineHeight: "1",
                          },
                          children: "".concat(
                            s.formatMessage({
                              id: "generate-model",
                              defaultMessage: "Generate Model",
                            })
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        pt = function (e) {
          var t = e.setIsOverlapLoading,
            n = (0, x.Z)(),
            r = (0, G.q)().content,
            a = (0, M.zn)().notify,
            i = (0, u.useRef)(null),
            s = (0, V.Z)().onGetTranslation,
            o = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t, n, r) {
                      var a, i, s, o, l, c, m, p;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (a = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                    params: { page: n, limit: r },
                                  }),
                                  (e.next = 4),
                                  Ee.Z.get(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/avatar/job"
                                    ),
                                    a
                                  )
                                );
                              case 4:
                                return (i = e.sent), (e.next = 7), i;
                              case 7:
                                if (
                                  ((s = e.sent),
                                  (o = s.data),
                                  (l = s.status),
                                  (c = s.statusText),
                                  200 === l)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(c);
                              case 13:
                                if (!o.error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(o.msg);
                              case 15:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: o,
                                  message: "",
                                });
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (m = e.t0.message),
                                  (p = void 0 === m ? "" : m),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: p,
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
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetArtGallery: e };
            })(),
            h = o.onGetArtGallery,
            g = (0, u.useState)([]),
            f = (0, p.Z)(g, 2),
            w = f[0],
            y = f[1],
            b = (0, u.useState)([]),
            k = (0, p.Z)(b, 2),
            F = k[0],
            Z = k[1],
            z = (0, u.useState)({ currentPage: 1, totalPage: 1 }),
            P = (0, p.Z)(z, 2),
            E = P[0],
            T = P[1],
            L = (0, H.Z)(
              function () {
                return h(r.token, E.currentPage, 16);
              },
              {
                refreshDeps: [r.token, E.currentPage],
                ready: !!r.token,
                onBefore: function () {
                  t({
                    isLoading: !0,
                    title: { id: "loading", defaultMessage: "Loading..." },
                  });
                },
                onFinally: function () {
                  t({ isLoading: !1, title: { id: "", defaultMessage: "" } });
                },
                onSuccess: function (e) {
                  try {
                    if (e.error || e.data.error) throw new Error(e.message);
                    var t = e.data.data.jobs;
                    y(t),
                      T(function (t) {
                        return (0,
                        c.Z)((0, c.Z)({}, t), {}, { totalPage: e.data.max_page });
                      });
                  } catch (n) {
                    console.error(n);
                  }
                },
                onError: function (e) {
                  a(s(e.message), "error");
                },
              }
            ),
            A = (function () {
              var e = (0, m.Z)(
                (0, d.Z)().mark(function e() {
                  return (0, d.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          try {
                            i.current.play(),
                              null !== r && void 0 !== r && r.token && L.run();
                          } catch (t) {
                            a(s(t.message), "error");
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
            _ = function (e) {
              Z(function (t) {
                return [].concat((0, l.Z)(t), [e]);
              });
            };
          return (0, R.jsxs)(v.k, {
            direction: "column",
            gap: "10px",
            style: {
              height: "100%",
              padding: "0px 0px 20px 0px",
              overflow: "auto",
            },
            children: [
              (0, R.jsx)(v.k, {
                style: { width: "100%", justifyContent: "space-between" },
                children: (0, R.jsx)(lt, {
                  minwidth: "140px",
                  minheight: "30px",
                  icon: (0, R.jsx)(C.J5, {
                    ref: i,
                    src: "../../lotties/art-gallery-loader.json",
                    className: "player",
                    style: { height: "24px", width: "24px" },
                  }),
                  style: { padding: "0px" },
                  onClick: function () {
                    A();
                  },
                  children: (0, R.jsx)(O.tP, {
                    size: "0.938rem",
                    color: "#E5FF00",
                    weight: "extrabold",
                    css: {
                      fontFamily: "var(--fontFamily1)",
                      textTransform: "uppercase",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "100%",
                      height: "21px",
                    },
                    children: "".concat(
                      n.formatMessage({
                        id: "refresh",
                        defaultMessage: "Refresh",
                      }),
                      " "
                    ),
                  }),
                }),
              }),
              w.length <= 0
                ? (0, R.jsx)(v.k, {
                    direction: "column",
                    gap: "10px",
                    style: { height: "100%", overflow: "hidden" },
                    children: (0, R.jsxs)(v.k, {
                      direction: "column",
                      gap: "10px",
                      style: {
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                      },
                      children: [
                        (0, R.jsx)("img", {
                          src: "/images/magic-avatar/empty-art-gallery.png",
                          alt: "empty-art-gallery",
                          style: {
                            width: "100%",
                            height: "100%",
                            maxHeight: "400px",
                            maxWidth: "400px",
                          },
                        }),
                        (0, R.jsx)(O.tP, {
                          size: "clamp(1.2rem,2vw,1.3rem)",
                          color: "#E5FF00",
                          weight: "extrabold",
                          css: {
                            fontFamily: "var(--fontFamily1)",
                            textTransform: "initial",
                            lineHeight: "1",
                            textAlign: "center",
                          },
                          children: "".concat(
                            n.formatMessage({
                              id: "select-a-style-to-craft",
                              defaultMessage:
                                "Select a style to craft breathtaking avatar creations.",
                            })
                          ),
                        }),
                      ],
                    }),
                  })
                : (0, R.jsx)(De, {
                    style: { height: "100%", overflowY: "auto" },
                    children: (0, R.jsxs)(v.k, {
                      direction: "column",
                      gap: "10px",
                      style: {
                        height: "100%",
                        overflowY: "hidden",
                        justifyContent: "space-between",
                        padding: "5px",
                      },
                      children: [
                        F.length >= 0 &&
                          (0, R.jsx)(dt, {
                            onClick: function () {
                              Z(function (e) {
                                return e.slice(0, e.length - 1);
                              });
                            },
                            minheight: "34px",
                            minwidth: "fit-content",
                            padding: "0px",
                            disabled: 0 === F.length,
                            children: (0, R.jsx)("svg", {
                              width: "34",
                              height: "34",
                              viewBox: "0 0 34 34",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, R.jsx)("path", {
                                d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                              }),
                            }),
                          }),
                        (0, R.jsx)(v.k, {
                          style: {
                            flex: 1,
                            width: "100%",
                            justifyContent: "center",
                            overflowY: "scroll",
                          },
                          children: (function () {
                            switch (F.length) {
                              case 0:
                                return (0, R.jsx)(ot, {
                                  children: w.map(function (e, t) {
                                    return e.job.length <= 0
                                      ? (0, R.jsx)(
                                          st,
                                          {
                                            onClick: function () {
                                              return _(t);
                                            },
                                            children: (0, R.jsxs)(v.k, {
                                              direction: "column",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                              },
                                              children: [
                                                (0, R.jsx)("img", {
                                                  src: "/images/magic-avatar/folder-pending.png",
                                                  alt: "folder-pending",
                                                  style: {
                                                    width: "76px",
                                                    height: "60px",
                                                  },
                                                }),
                                                (0, R.jsx)(O.tP, {
                                                  size: "clamp(1rem,2vw,1.1rem)",
                                                  color: "#ffffff",
                                                  weight: "extrabold",
                                                  css: {
                                                    fontFamily:
                                                      "var(--fontFamily1)",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    width: "100%",
                                                  },
                                                  children: e.metadata.title,
                                                }),
                                              ],
                                            }),
                                          },
                                          e.task_id
                                        )
                                      : (0, R.jsx)(
                                          st,
                                          {
                                            onClick: function () {
                                              return _(t);
                                            },
                                            children: (0, R.jsxs)(v.k, {
                                              direction: "column",
                                              style: {
                                                height: "100%",
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                              },
                                              children: [
                                                (0, R.jsx)("img", {
                                                  src: "/images/magic-avatar/folder-default.png",
                                                  alt: "folder-default",
                                                  style: {
                                                    width: "76px",
                                                    height: "60px",
                                                  },
                                                }),
                                                (0, R.jsx)(O.tP, {
                                                  size: "clamp(1rem,2vw,1.1rem)",
                                                  color: "#ffffff",
                                                  weight: "extrabold",
                                                  css: {
                                                    fontFamily:
                                                      "var(--fontFamily1)",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    width: "100%",
                                                  },
                                                  children: e.metadata.title,
                                                }),
                                              ],
                                            }),
                                          },
                                          e.task_id
                                        );
                                  }),
                                });
                              case 1:
                                return (0, R.jsx)(R.Fragment, {
                                  children:
                                    w[F[0]].job.length > 0
                                      ? (0, R.jsx)(ot, {
                                          children: w[F[0]].job.map(function (
                                            e,
                                            t
                                          ) {
                                            return "pending" === e.status
                                              ? (0, R.jsx)(
                                                  st,
                                                  {
                                                    onClick: function () {
                                                      return _(t);
                                                    },
                                                    children: (0, R.jsxs)(v.k, {
                                                      direction: "column",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                        justifyContent:
                                                          "space-evenly",
                                                        alignItems: "center",
                                                      },
                                                      children: [
                                                        (0, R.jsx)("img", {
                                                          src: "/images/magic-avatar/folder-pending.png",
                                                          alt: "folder-pending",
                                                          style: {
                                                            width: "76px",
                                                            height: "60px",
                                                          },
                                                        }),
                                                        (0, R.jsx)(O.tP, {
                                                          size: "clamp(1rem,2vw,1.1rem)",
                                                          color: "#ffffff",
                                                          weight: "extrabold",
                                                          css: {
                                                            fontFamily:
                                                              "var(--fontFamily1)",
                                                            overflow: "hidden",
                                                            textOverflow:
                                                              "ellipsis",
                                                            width: "100%",
                                                          },
                                                          children:
                                                            e.style
                                                              .style_name_en,
                                                        }),
                                                      ],
                                                    }),
                                                  },
                                                  e.style.id
                                                )
                                              : (0, R.jsx)(
                                                  st,
                                                  {
                                                    onClick: function () {
                                                      return _(t);
                                                    },
                                                    children: (0, R.jsxs)(v.k, {
                                                      direction: "column",
                                                      style: {
                                                        height: "100%",
                                                        width: "100%",
                                                        justifyContent:
                                                          "space-evenly",
                                                        alignItems: "center",
                                                      },
                                                      children: [
                                                        (0, R.jsx)("img", {
                                                          src: "/images/magic-avatar/folder-default.png",
                                                          alt: "folder-default",
                                                          style: {
                                                            width: "76px",
                                                            height: "60px",
                                                          },
                                                        }),
                                                        (0, R.jsx)(O.tP, {
                                                          size: "clamp(1rem,2vw,1.1rem)",
                                                          color: "#ffffff",
                                                          weight: "extrabold",
                                                          css: {
                                                            fontFamily:
                                                              "var(--fontFamily1)",
                                                            overflow: "hidden",
                                                            textOverflow:
                                                              "ellipsis",
                                                            width: "100%",
                                                          },
                                                          children:
                                                            e.style
                                                              .style_name_en,
                                                        }),
                                                      ],
                                                    }),
                                                  },
                                                  e.style.id
                                                );
                                          }),
                                        })
                                      : (0, R.jsx)(v.k, {
                                          direction: "column",
                                          gap: "10px",
                                          style: {
                                            height: "100%",
                                            overflow: "hidden",
                                          },
                                          children: (0, R.jsxs)(v.k, {
                                            direction: "column",
                                            gap: "10px",
                                            style: {
                                              width: "100%",
                                              height: "100%",
                                              alignItems: "center",
                                            },
                                            children: [
                                              (0, R.jsx)("img", {
                                                src: "/images/magic-avatar/empty-art-gallery.png",
                                                alt: "empty-art-gallery",
                                                style: {
                                                  width: "100%",
                                                  height: "100%",
                                                  maxHeight: "300px",
                                                  maxWidth: "300px",
                                                },
                                              }),
                                              (0, R.jsx)(O.tP, {
                                                size: "clamp(1.2rem,2vw,1.3rem)",
                                                color: "#E5FF00",
                                                weight: "extrabold",
                                                css: {
                                                  fontFamily:
                                                    "var(--fontFamily1)",
                                                  textTransform: "initial",
                                                  lineHeight: "1",
                                                  textAlign: "center",
                                                },
                                                children: "".concat(
                                                  n.formatMessage({
                                                    id: "select-a-style-to-craft",
                                                    defaultMessage:
                                                      "Select a style to craft breathtaking avatar creations.",
                                                  })
                                                ),
                                              }),
                                            ],
                                          }),
                                        }),
                                });
                              case 2:
                                return (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(S.TV, {
                                    children:
                                      w[F[0]].job[F[1]].result &&
                                      w[F[0]].job[F[1]].result.length > 0
                                        ? (0, R.jsx)(ot, {
                                            children: w[F[0]].job[
                                              F[1]
                                            ].result.map(function (e, t) {
                                              return (0,
                                              R.jsx)(S.HI, { src: e, children: (0, R.jsx)(st, { style: { padding: "0px" }, children: (0, R.jsx)(v.k, { direction: "column", style: { height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }, children: (0, R.jsx)("img", { src: e, alt: "token", style: { width: "100%", height: "100%", objectFit: "cover" } }) }) }) }, e);
                                            }),
                                          })
                                        : (0, R.jsx)(v.k, {
                                            direction: "column",
                                            gap: "10px",
                                            style: {
                                              height: "100%",
                                              overflow: "hidden",
                                            },
                                            children: (0, R.jsxs)(v.k, {
                                              direction: "column",
                                              gap: "10px",
                                              style: {
                                                width: "100%",
                                                height: "100%",
                                                alignItems: "center",
                                              },
                                              children: [
                                                (0, R.jsx)("img", {
                                                  src: "/images/magic-avatar/empty-art-gallery.png",
                                                  alt: "empty-art-gallery",
                                                  style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    maxHeight: "300px",
                                                    maxWidth: "300px",
                                                  },
                                                }),
                                                (0, R.jsx)(O.tP, {
                                                  size: "clamp(1.2rem,2vw,1.3rem)",
                                                  color: "#E5FF00",
                                                  weight: "extrabold",
                                                  css: {
                                                    fontFamily:
                                                      "var(--fontFamily1)",
                                                    textTransform: "initial",
                                                    lineHeight: "1",
                                                    textAlign: "center",
                                                  },
                                                  children: "".concat(
                                                    n.formatMessage({
                                                      id: "select-a-style-to-craft",
                                                      defaultMessage:
                                                        "Select a style to craft breathtaking avatar creations.",
                                                    })
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                  }),
                                });
                              default:
                                return (0, R.jsx)(R.Fragment, {});
                            }
                          })(),
                        }),
                        0 === F.length &&
                          (0, R.jsx)(R.Fragment, {
                            children: (0, R.jsx)(j.t, {
                              position: "center",
                              total: E.totalPage,
                              value: E.currentPage,
                              onChange: function (e) {
                                return T(function (t) {
                                  return (0,
                                  c.Z)((0, c.Z)({}, t), {}, { currentPage: e });
                                });
                              },
                              styles: function (e) {
                                return {
                                  control: {
                                    "&[data-active]": {
                                      backgroundImage: e.fn.gradient({
                                        from: "#E5FF00",
                                        to: "#E5FF00",
                                      }),
                                      color: "#000",
                                      border: 0,
                                    },
                                    fontFamily: "var(--fontFamily1)",
                                    fontWeight: "bold",
                                  },
                                };
                              },
                            }),
                          }),
                      ],
                    }),
                  }),
            ],
          });
        },
        ht = function () {
          var e = (0, x.Z)(),
            t = (0, f.s0)(),
            n = (0, G.q)(),
            r = n.tokenValidity,
            a = n.content,
            i = (0, M.zn)().notify,
            s =
              ((0, B.$)().currentLanguage.locale, (0, V.Z)().onGetTranslation),
            o = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t) {
                      var n, r, a, i, s, o, l, c;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (n = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                  }),
                                  (e.next = 4),
                                  Ee.Z.get(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/avatar/models"
                                    ),
                                    n
                                  )
                                );
                              case 4:
                                return (r = e.sent), (e.next = 7), r;
                              case 7:
                                if (
                                  ((a = e.sent),
                                  (i = a.data),
                                  (s = a.status),
                                  (o = a.statusText),
                                  200 === s)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(o);
                              case 13:
                                if (!i.error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(i.msg);
                              case 15:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: i,
                                  message: "",
                                });
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (l = e.t0.message),
                                  (c = void 0 === l ? "" : l),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: c,
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onGetModel: e };
            })(),
            l = o.onGetModel,
            h = (function () {
              var e = (0, u.useCallback)(
                (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t, n, r, a, i, s) {
                      var o, l, c, m, p, h, u, g, f;
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (o = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                  }),
                                  (l = new FormData()).append("title", r),
                                  l.append("avatar_package_id", n),
                                  i && l.append("model_name", i),
                                  s &&
                                    s.length > 0 &&
                                    s.forEach(function (e, t) {
                                      l.append("image", e);
                                    }),
                                  a && l.append("model", a),
                                  (e.next = 10),
                                  Ee.Z.post(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/avatar/job"
                                    ),
                                    l,
                                    o
                                  )
                                );
                              case 10:
                                return (c = e.sent), (e.next = 13), c;
                              case 13:
                                if (
                                  ((m = e.sent),
                                  (p = m.data),
                                  (h = m.status),
                                  (u = m.statusText),
                                  200 === h)
                                ) {
                                  e.next = 19;
                                  break;
                                }
                                throw new Error(u);
                              case 19:
                                if (!p.error) {
                                  e.next = 21;
                                  break;
                                }
                                throw new Error(p.msg);
                              case 21:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: p,
                                  message: "",
                                });
                              case 24:
                                return (
                                  (e.prev = 24),
                                  (e.t0 = e.catch(0)),
                                  (g = e.t0.message),
                                  (f = void 0 === g ? "" : g),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: f,
                                  })
                                );
                              case 28:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 24]]
                      );
                    })
                  );
                  return function (t, n, r, a, i, s) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onCreateJobwithTrainNInfr: e };
            })(),
            g = h.onCreateJobwithTrainNInfr,
            y = (0, I.jI)().onCheckAuth,
            b = (0, u.useState)(0),
            j = (0, p.Z)(b, 2),
            F = j[0],
            Z = j[1],
            C = (0, u.useState)({
              isLoading: !1,
              title: { id: "", defaultMessage: "" },
            }),
            z = (0, p.Z)(C, 2),
            S = z[0],
            H = z[1],
            q = (0, u.useState)("female"),
            N = (0, p.Z)(q, 2),
            W = N[0],
            D = N[1],
            U = (0, u.useState)(),
            Y = (0, p.Z)(U, 2),
            J = Y[0],
            X = Y[1],
            $ = (0, u.useState)([]),
            K = (0, p.Z)($, 2),
            Q = K[0],
            ee = K[1],
            te = (0, u.useState)(),
            ne = (0, p.Z)(te, 2),
            re = ne[0],
            ae = ne[1],
            ie = (0, u.useState)(!1),
            se = (0, p.Z)(ie, 2),
            oe = se[0],
            le = se[1],
            de = (0, u.useState)(!1),
            ce = (0, p.Z)(de, 2),
            me = ce[0],
            pe = ce[1],
            he = (0, u.useContext)(A.C).getCredit,
            ue = P.Ry().shape({
              mode: P.Z_().required(
                e.formatMessage({
                  id: "please-select-a-mode",
                  defaultMessage: "Please select a mode",
                })
              ),
              title: P.Z_()
                .required(
                  e.formatMessage({
                    id: "avatar-title-is-required",
                    defaultMessage: "Avatar title is required",
                  })
                )
                .min(
                  1,
                  e.formatMessage({
                    id: "avatar-title-is-too-short",
                    defaultMessage: "Avatar title is too short",
                  })
                )
                .max(
                  254,
                  e.formatMessage({
                    id: "avatar-title-exceeds-the-allowed-length",
                    defaultMessage: "Avatar title exceeds the allowed length",
                  })
                ),
              modelName: P.Z_().when("mode", {
                is: "upload-new-photo",
                then: function (t) {
                  return t
                    .required(
                      e.formatMessage({
                        id: "model-title-is-required",
                        defaultMessage: "Model title is required",
                      })
                    )
                    .min(
                      1,
                      e.formatMessage({
                        id: "model-title-is-too-short",
                        defaultMessage: "Model title is too short",
                      })
                    )
                    .max(
                      254,
                      e.formatMessage({
                        id: "model-title-exceeds-the-allowed-length",
                        defaultMessage:
                          "Model title exceeds the allowed length",
                      })
                    );
                },
                otherwise: function (e) {
                  return e.strip();
                },
              }),
              images: P.IX().when("mode", {
                is: "upload-new-photo",
                then: function (t) {
                  return t
                    .required(
                      e.formatMessage({
                        id: "please-upload-at-least-5-image",
                        defaultMessage: "Please upload at least 5 images",
                      })
                    )
                    .min(
                      5,
                      e.formatMessage({
                        id: "please-upload-at-least-5-image",
                        defaultMessage: "Please upload at least 5 images",
                      })
                    )
                    .max(
                      10,
                      e.formatMessage({
                        id: "please-upload-less-than-10-image",
                        defaultMessage: "Please upload less than 10 images",
                      })
                    )
                    .test({
                      name: "fileSize",
                      exclusive: !1,
                      message: "".concat(
                        e.formatMessage({
                          id: "please-upload-a-file-smaller-than-3MB",
                          defaultMessage:
                            "Please upload a file smaller than 3 MB",
                        })
                      ),
                      test: function (e) {
                        if (!e) return !0;
                        return e.every(function (e) {
                          return e.size <= 3145728;
                        });
                      },
                    });
                },
                otherwise: function (e) {
                  return e;
                },
              }),
              model: P.Z_().when("mode", {
                is: "existing-model",
                then: function (t) {
                  return t.required(
                    e.formatMessage({
                      id: "existing-model-is-required",
                      defaultMessage: "Existing model is required",
                    })
                  );
                },
                otherwise: function (e) {
                  return e.strip();
                },
              }),
            }),
            ge = { resolver: (0, E.X)(ue) },
            fe = (0, T.cI)(ge),
            xe = fe.register,
            we =
              (fe.handleSubmit,
              fe.formState.errors,
              (0, L.TA)({
                enableReinitialize: !0,
                initialValues: {
                  title: "",
                  mode: "upload-new-photo",
                  images: [],
                  model: "",
                  modelName: "",
                },
                validationSchema: ue,
                onSubmit: (function () {
                  var e = (0, m.Z)(
                    (0, d.Z)().mark(function e(t, n) {
                      return (0, d.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ((n.resetForm, (e.prev = 1), 0 !== F)) {
                                  e.next = 6;
                                  break;
                                }
                                Z(function (e) {
                                  return e + 1;
                                }),
                                  (e.next = 16);
                                break;
                              case 6:
                                if (1 !== F) {
                                  e.next = 16;
                                  break;
                                }
                                if (
                                  void 0 !==
                                  (null === re || void 0 === re
                                    ? void 0
                                    : re.id)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                throw new Error("Please select a package");
                              case 9:
                                return (e.next = 11), ye(a.token);
                              case 11:
                                if (e.sent.data.isValid) {
                                  e.next = 15;
                                  break;
                                }
                                throw (
                                  (pe(!0), new Error("Please add your email"))
                                );
                              case 15:
                                le(!0);
                              case 16:
                                return e.abrupt("return", "");
                              case 19:
                                return (
                                  (e.prev = 19),
                                  (e.t0 = e.catch(1)),
                                  H({
                                    isLoading: !1,
                                    title: { id: "", defaultMessage: "" },
                                  }),
                                  e.abrupt(
                                    "return",
                                    i(s(e.t0.message), "error")
                                  )
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 19]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              })),
            ve = (0, u.useMemo)(
              function () {
                return "upload-new-photo" === we.values.mode
                  ? we.values.images.length < 5 ||
                      !we.values.title ||
                      !we.values.modelName
                  : !we.values.model || !we.values.title;
              },
              [we]
            ),
            ye = (function () {
              var e = (0, m.Z)(
                (0, d.Z)().mark(function e(t) {
                  var n, r, a, i, s;
                  return (0, d.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), y(t);
                          case 3:
                            if (!(n = e.sent).error) {
                              e.next = 6;
                              break;
                            }
                            throw new Error(n.message);
                          case 6:
                            return (
                              (r = function (e) {
                                return !!e && "" !== e.trim();
                              }),
                              (a =
                                Object.keys(n.data).length > 0 &&
                                r(n.data.email)),
                              e.abrupt("return", {
                                error: !1,
                                message: "",
                                data: { isValid: a },
                              })
                            );
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              (i = e.t0.message),
                              (s = void 0 === i ? "" : i),
                              e.abrupt("return", {
                                error: !0,
                                message: s,
                                data: { isValid: !1 },
                              })
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            be = (function () {
              var t = (0, m.Z)(
                (0, d.Z)().mark(function t(n) {
                  var r, a;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((t.prev = 0),
                              le(!1),
                              H({
                                isLoading: !0,
                                title: { id: "", defaultMessage: "" },
                              }),
                              "upload-new-photo" !== we.values.mode)
                            ) {
                              t.next = 12;
                              break;
                            }
                            return (
                              (t.next = 6),
                              g(
                                n,
                                re.id,
                                we.values.title,
                                "",
                                we.values.modelName,
                                we.values.images
                              )
                            );
                          case 6:
                            if (!(r = t.sent).error && !r.data.error) {
                              t.next = 9;
                              break;
                            }
                            throw new Error(r.message);
                          case 9:
                          case 20:
                            we.resetForm(), (t.next = 24);
                            break;
                          case 12:
                            if ("existing-model" !== we.values.mode) {
                              t.next = 23;
                              break;
                            }
                            if (
                              void 0 !==
                              (null === re || void 0 === re ? void 0 : re.id)
                            ) {
                              t.next = 15;
                              break;
                            }
                            throw new Error("Please select a package");
                          case 15:
                            return (
                              (t.next = 17),
                              g(n, re.id, we.values.title, we.values.model)
                            );
                          case 17:
                            if (!(a = t.sent).error && !a.data.error) {
                              t.next = 20;
                              break;
                            }
                            throw new Error(a.message);
                          case 23:
                            throw new Error("Please select a mode");
                          case 24:
                            return (
                              i(
                                "".concat(
                                  e.formatMessage({
                                    id: "congratulation-ur-magic-avatar-is-processed",
                                    defaultMessage:
                                      "Congratulations, your magic avatar is being processed.",
                                  })
                                ),
                                "success"
                              ),
                              X(null),
                              ae(null),
                              Z(function (e) {
                                return e + 1;
                              }),
                              he.run(),
                              H({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              }),
                              t.abrupt("return", "")
                            );
                          case 33:
                            return (
                              (t.prev = 33),
                              (t.t0 = t.catch(0)),
                              H({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              }),
                              t.abrupt("return", i(s(t.t0.message), "error"))
                            );
                          case 37:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 33]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            je = (0, u.useCallback)(
              (0, m.Z)(
                (0, d.Z)().mark(function e() {
                  var t, n, r;
                  return (0, d.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), l(a.token);
                        case 2:
                          (t = e.sent).error || t.data.error,
                            (n = t.data.data.models),
                            (r = n.filter(function (e) {
                              return e.gender === W;
                            })),
                            ee(r);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [null === a || void 0 === a ? void 0 : a.token, l, ee, W]
            );
          return (
            (0, u.useEffect)(
              function () {
                r && je();
              },
              [r, je]
            ),
            (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsx)(Ie, {
                  show: me,
                  onClose: function () {
                    pe(!1);
                  },
                  onConfirm: function (e) {
                    pe(!1), le(!0);
                  },
                }),
                (0, R.jsx)(_e, {
                  show: oe,
                  onClose: function () {
                    le(!1);
                  },
                  onConfirm: be,
                }),
                (0, R.jsx)(Be, {
                  id: "opentalker-container",
                  children: (0, R.jsx)(k.W, {
                    style: { height: "100%", overflowY: "auto" },
                    children: (0, R.jsxs)(v.k, {
                      direction: "column",
                      gap: "5px",
                      style: {
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        overflow: "auto",
                      },
                      children: [
                        (0, R.jsx)(v.k, {
                          justify: "space-between",
                          style: { width: "100%" },
                          children: (0, R.jsxs)(Ge, {
                            children: [
                              (0, R.jsx)(lt, {
                                onClick: function () {
                                  t("/dashboard");
                                },
                                minheight: "fit-content",
                                minwidth: "fit-content",
                                padding: "0px",
                                style: { order: 1 },
                                children: (0, R.jsxs)("svg", {
                                  width: "34",
                                  height: "34",
                                  viewBox: "0 0 34 34",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, R.jsx)("path", {
                                      d: "M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z",
                                      fill: "url(#paint0_linear_4322_13710)",
                                    }),
                                    (0, R.jsx)("path", {
                                      d: "M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z",
                                      fill: "black",
                                      stroke: "black",
                                      strokeWidth: "0.5",
                                    }),
                                    (0, R.jsx)("path", {
                                      d: "M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z",
                                      fill: "black",
                                      stroke: "black",
                                      strokeWidth: "0.5",
                                    }),
                                    (0, R.jsx)("defs", {
                                      children: (0, R.jsxs)("linearGradient", {
                                        id: "paint0_linear_4322_13710",
                                        x1: "17",
                                        y1: "0",
                                        x2: "17",
                                        y2: "34",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, R.jsx)("stop", {
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, R.jsx)("stop", {
                                            offset: "0.546875",
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, R.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#E5FF00",
                                          }),
                                          (0, R.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#E5FF00",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, R.jsx)(O.tP, {
                                size: "clamp(1.7rem,2vw,1.8rem)",
                                color: "#E5FF00",
                                weight: "extrabold",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  textTransform: "uppercase",
                                  order: 2,
                                },
                                children: (0, R.jsx)(w.Z, {
                                  id: "magic-avatar",
                                  defaultMessage: "Magic Avatar",
                                  values: { br: (0, R.jsx)("br", {}) },
                                }),
                              }),
                              (0, R.jsx)("div", { style: { order: 3 } }),
                            ],
                          }),
                        }),
                        (0, R.jsxs)(v.k, {
                          direction: "column",
                          gap: "15px",
                          style: {
                            width: "100%",
                            height: "100%",
                            overflow: "auto",
                          },
                          children: [
                            (0, R.jsxs)(Pe, {
                              active: F,
                              onChange: function (e) {
                                return Z(e);
                              },
                              formik: we,
                              isValidToStep2: ve,
                              children: [
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(O.tP, {
                                    size: "clamp(1rem,2vw,1.125rem)",
                                    color: "#E5FF00",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "capitalize",
                                      lineHeight: "1",
                                    },
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "train-your-model",
                                        defaultMessage: "Train Your Model",
                                      }),
                                      " "
                                    ),
                                  }),
                                }),
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(O.tP, {
                                    size: "clamp(1rem,2vw,1.125rem)",
                                    color: "#E5FF00",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "capitalize",
                                      lineHeight: "1     ",
                                    },
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "choose-your-style",
                                        defaultMessage: "Choose your style",
                                      }),
                                      " "
                                    ),
                                  }),
                                }),
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(O.tP, {
                                    size: "clamp(1rem,2vw,1.125rem)",
                                    color: "#E5FF00",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "capitalize",
                                      lineHeight: "1",
                                    },
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "art-allery",
                                        defaultMessage: "Art Gallery",
                                      }),
                                      " "
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, R.jsxs)(ze, {
                              active: F,
                              children: [
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(ct, {
                                    setIsOverlapLoading: H,
                                    formik: we,
                                    register: xe,
                                    optionsModelList: Q,
                                    selectedOptionsModel: J,
                                    setSelectedOptionsModel: X,
                                    setSelectedGender: D,
                                    selectedGender: W,
                                  }),
                                }),
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(mt, {
                                    setIsOverlapLoading: H,
                                    formik: we,
                                    selectedAvatarPackage: re,
                                    setSelectedAvatarPackage: ae,
                                    selectedGender: W,
                                  }),
                                }),
                                (0, R.jsx)(R.Fragment, {
                                  children: (0, R.jsx)(pt, {
                                    setIsOverlapLoading: H,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                S.isLoading &&
                  (0, R.jsx)(_.Z, {
                    children: (0, R.jsx)(O.tP, {
                      size: "clamp(1.3rem,2vw,1.8rem)",
                      color: "#FFFFFF",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily1)",
                        textTransform: "",
                      },
                      children:
                        S.title.id &&
                        (0, R.jsx)(
                          w.Z,
                          (0, c.Z)(
                            (0, c.Z)({}, S.title),
                            {},
                            { values: { br: (0, R.jsx)("br", {}) } }
                          )
                        ),
                    }),
                  }),
              ],
            })
          );
        };
    },
  },
]);
//# sourceMappingURL=3780.b91ad68d.chunk.js.map
