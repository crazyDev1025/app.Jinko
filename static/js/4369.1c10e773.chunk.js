"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [4369],
  {
    74369: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return J;
          },
        });
      var i,
        r,
        a,
        s,
        o,
        l = t(29439),
        d = t(30168),
        m = t(72791),
        c = t(26088),
        g = t(57689),
        p = t(93539),
        u = t(4349),
        h = t(42164),
        f = t(91580),
        x = t(50806),
        b = t(69655),
        w = t(24805),
        v = t(56666),
        y = t(50888),
        j = t(65370),
        C = t(938),
        k = t(1413),
        F = t(74165),
        Z = t(15861),
        M = t(75366),
        L = t(96944),
        z = t(8007),
        P = t(44695),
        T = t(61134),
        H = t(55705),
        E = t(11600),
        S = t(30456),
        B = t(57631),
        A = t(83719),
        I = t(40801),
        _ = t(80184),
        q = (0, c.Z)(M.ZP)(
          i ||
            (i = (0, d.Z)([
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
        D = function (e) {
          var n = e.show,
            t = e.onClose,
            i = e.onConfirm,
            r = (0, p.Z)(),
            a = (0, b.zn)().notify,
            s = (0, j.q)().content,
            o = (0, C.Z)().onGetTranslation,
            d = (0, B.n7)().onEditOrBindEmail,
            c = (0, B.jI)().onCheckAuth,
            g = (0, m.useCallback)(
              (function () {
                var e = (0, Z.Z)(
                  (0, F.Z)().mark(function e(n) {
                    var t, i, r;
                    return (0, F.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), c(n);
                            case 3:
                              if (!(t = e.sent).error) {
                                e.next = 6;
                                break;
                              }
                              throw new Error(t.message);
                            case 6:
                              return e.abrupt("return", {
                                error: !1,
                                message: "",
                                data: t.data,
                              });
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(0)),
                                (i = e.t0.message),
                                (r = void 0 === i ? "" : i),
                                e.abrupt("return", {
                                  error: !0,
                                  message: r,
                                  data: "",
                                })
                              );
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 9]]
                    );
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [c]
            ),
            f = (0, m.useContext)(A.u),
            x = f.isOverlapLoading,
            w = f.setIsOverlapLoading,
            v = (0, E.Z)(["_acc"]),
            M = (0, l.Z)(v, 3),
            D = (M[0], M[1]),
            O = M[2],
            R = z.Ry().shape({
              email: z
                .Z_()
                .email(
                  r.formatMessage({
                    id: "please-enter-a-valid-email-address",
                    defaultMessage: "Please enter a valid email address.",
                  })
                )
                .required(
                  r.formatMessage({
                    id: "email-is-required",
                    defaultMessage: "Email address is required",
                  })
                )
                .min(
                  1,
                  r.formatMessage({
                    id: "email-is-too-short",
                    defaultMessage: "Email address is too short",
                  })
                )
                .max(
                  50,
                  r.formatMessage({
                    id: "email-address-exceeds-the-allowed-length",
                    defaultMessage: "Email address exceeds the allowed length",
                  })
                ),
            }),
            V = { resolver: (0, P.X)(R) },
            G = (0, T.cI)(V),
            J =
              (G.register,
              G.handleSubmit,
              G.formState.errors,
              m.useState({
                address: "",
                email: "",
                is_email_verified: !1,
                username: "",
                uuid: "",
              })),
            Y = (0, l.Z)(J, 2),
            $ = Y[0],
            N = Y[1],
            Q = (0, H.TA)({
              initialValues: {
                email: (null === $ || void 0 === $ ? void 0 : $.email) || "",
              },
              validationSchema: R,
              enableReinitialize: !0,
              onSubmit: (function () {
                var e = (0, Z.Z)(
                  (0, F.Z)().mark(function e(n, l) {
                    var m, c, g, p;
                    return (0, F.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (m = l.resetForm),
                                (e.prev = 1),
                                w({
                                  isLoading: !0,
                                  title: {
                                    id: "loading",
                                    defaultMessage: "Loading...",
                                  },
                                }),
                                (e.next = 5),
                                d(s.token, n.email)
                              );
                            case 5:
                              if (!(c = e.sent).error && !c.data.error) {
                                e.next = 8;
                                break;
                              }
                              throw new Error(c.message);
                            case 8:
                              return (
                                c.data.token &&
                                  ((g = (0, S.Z)(c.data.token)),
                                  (p = new Date(1e3 * g.exp)),
                                  D(
                                    "_acc",
                                    JSON.stringify(
                                      (0, k.Z)(
                                        (0, k.Z)({}, g),
                                        {},
                                        { token: c.data.token }
                                      )
                                    ),
                                    {
                                      sameSite: !0,
                                      secure: !0,
                                      expires: p,
                                      path: "/",
                                    }
                                  ),
                                  a(
                                    "".concat(
                                      r.formatMessage({
                                        id: "the-email-has-been-successfully-changed",
                                        defaultMessage:
                                          "The email has been successfully changed",
                                      })
                                    ),
                                    "success"
                                  ),
                                  m(),
                                  t(),
                                  i(),
                                  w({
                                    isLoading: !1,
                                    title: { id: "", defaultMessage: "" },
                                  })),
                                e.abrupt("return")
                              );
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(1)),
                                a(o(e.t0.message), "error"),
                                w({
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
                return function (n, t) {
                  return e.apply(this, arguments);
                };
              })(),
            });
          return (
            (0, m.useEffect)(
              function () {
                var e = (function () {
                  var e = (0, Z.Z)(
                    (0, F.Z)().mark(function e() {
                      var n;
                      return (0, F.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), g(s.token);
                            case 2:
                              (n = e.sent).error ? N(null) : N(n.data);
                            case 4:
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
                null !== s && void 0 !== s && s.token && e();
              },
              [g, null === s || void 0 === s ? void 0 : s.token, O]
            ),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)(y.b4, {
                  width: "430px",
                  preventClose: !0,
                  closeButton: !0,
                  open: n,
                  onClose: function () {
                    t();
                  },
                  children: [
                    (0, _.jsx)(y.lb, {
                      children: (0, _.jsx)(y.tP, {
                        size: "clamp(1.7rem,2vw,1.875rem)",
                        color: "var(--yellowColor)",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          lineHeight: "1",
                          textTransform: "uppercase",
                        },
                        children: (0, _.jsx)(u.Z, {
                          id: "edit-email",
                          defaultMessage: "Edit email",
                          values: { br: (0, _.jsx)("br", {}) },
                        }),
                      }),
                    }),
                    (0, _.jsx)("svg", {
                      style: { alignSelf: "center" },
                      width: "29",
                      height: "1",
                      viewBox: "0 0 29 1",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, _.jsx)("line", {
                        x1: "0.5",
                        y1: "0.5",
                        x2: "28.5",
                        y2: "0.500002",
                        stroke: "#A5A2BA",
                      }),
                    }),
                    (0, _.jsx)(L.ZP.Body, {
                      children: (0, _.jsx)(h.k, {
                        direction: "column",
                        gap: "20px",
                        align: "center",
                        style: { width: "100%" },
                        children: (0, _.jsx)(h.k, {
                          direction: "column",
                          gap: "10px",
                          align: "center",
                          style: { width: "100%" },
                          children: (0, _.jsxs)("form", {
                            onSubmit: Q.handleSubmit,
                            autoComplete: "off",
                            style: {
                              width: "100%",
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            },
                            children: [
                              (0, _.jsxs)(h.k, {
                                direction: "column",
                                gap: "10px",
                                style: { width: "100%" },
                                children: [
                                  (0, _.jsx)(y.tP, {
                                    size: "clamp(1rem,2vw,1.125rem)",
                                    color: "#ffffff",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily3)",
                                      lineHeight: "clamp(0.875rem,2vw,0.9rem)",
                                    },
                                    children: (0, _.jsx)(u.Z, {
                                      id: "email",
                                      defaultMessage: "Email",
                                      values: { br: (0, _.jsx)("br", {}) },
                                    }),
                                  }),
                                  (0, _.jsx)(h.k, {
                                    direction: "column",
                                    style: {
                                      gap: "6px",
                                      alignSelf: "center",
                                      width: "100%",
                                      position: "relative",
                                    },
                                    children: (0, _.jsxs)(h.k, {
                                      justify: "center",
                                      direction: "column",
                                      align: "flex-start",
                                      style: { width: "100%" },
                                      children: [
                                        (0, _.jsx)(y.l_, {
                                          style: { width: "100%" },
                                          name: "email",
                                          type: "email",
                                          autoCapitalize: "off",
                                          autoComplete: "off",
                                          autoCorrect: "off",
                                          placeholder: r.formatMessage({
                                            id: "email",
                                            defaultMessage: "Email",
                                          }),
                                          onChange: Q.handleChange,
                                          value: Q.values.email,
                                          autoFocus: !0,
                                        }),
                                        (0, _.jsx)(y.d$, {
                                          children: (0, _.jsx)(y.tP, {
                                            size: "clamp(0.7rem,2vw,0.8rem)",
                                            color: "red",
                                            weight: "bold",
                                            css: {
                                              fontFamily: "var(--fontFamily1)",
                                              textTransform: "capitalize",
                                            },
                                            children: Q.errors.email,
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, _.jsx)(y.tP, {
                                size: "clamp(0.725rem,2vw,0.725rem)",
                                color: "#ffffff",
                                weight: "normal",
                                css: {
                                  fontFamily: "var(--fontFamily1)",
                                  lineHeight: 1,
                                },
                                children: "".concat(
                                  r.formatMessage({
                                    id: "for-receive-the-generated-results",
                                    defaultMessage:
                                      "For receive the generated results or future notifications from us",
                                  })
                                ),
                              }),
                              (0, _.jsx)(h.k, {
                                gap: "20px",
                                style: { width: "100%" },
                                children: (0, _.jsx)(q, {
                                  type: "submit",
                                  bg: "#E5FF00",
                                  borderradius: "8px",
                                  style: { width: "100%" },
                                  children: (0, _.jsx)(y.tP, {
                                    size: "clamp(1rem,2vw,1.1rem)",
                                    color: "#000000",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily1)",
                                      lineHeight: 1,
                                      textTransform: "uppercase",
                                    },
                                    children: "".concat(
                                      r.formatMessage({
                                        id: "submit",
                                        defaultMessage: "Submit",
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
                x.isLoading &&
                  (0, _.jsx)(I.Z, {
                    children: (0, _.jsx)(y.tP, {
                      size: "clamp(1.3rem,2vw,1.8rem)",
                      color: "#FFFFFF",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "",
                      },
                      children:
                        x.title.id &&
                        (0, _.jsx)(
                          u.Z,
                          (0, k.Z)(
                            (0, k.Z)({}, x.title),
                            {},
                            { values: { br: (0, _.jsx)("br", {}) } }
                          )
                        ),
                    }),
                  }),
              ],
            })
          );
        },
        O = (0, c.Z)(h.k)(
          r ||
            (r = (0, d.Z)([
              "\n  height: 100%;\n  width: 100%;\n  border: ",
              ";\n  position: relative;\n  border-radius: 10px;\n  // min-height: 130px;\n  // min-width: 70px;\n  // max-height: 143px;\n  // max-width: 86px;\n  object-fit: cover;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  // padding:2px;\n  cursor: pointer;\n  position: relative;\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    background-image: ",
              ";\n  }\n  @media only screen and (min-width: 992px) {\n    background-image: ",
              ";\n  }\n\n  ",
              "\n",
            ])),
          function (e) {
            e.isactivated;
            return "3px solid #E5FF00";
          },
          function (e) {
            return e.bgmobileimage || "";
          },
          function (e) {
            return e.bgdesktopimage || "";
          },
          function (e) {
            return (
              "false" === e.isactivated &&
              "\n&:after {\n  content: '';\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius:10px;\n  background: rgba(0,0,0,0.5);\n  cursor:not-allowed;\n  z-index: 2;\n}\n"
            );
          }
        ),
        R = (0, c.Z)(h.k)(
          a ||
            (a = (0, d.Z)([
              "\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-gap: 20px;\n  grid-auto-flow: dense;\n  @media only screen and (min-width: 0px) and (max-width: 991px) {\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(17, 1fr);\n    & :nth-of-type(1) {\n      grid-column: 1/7;\n      grid-row: 1/4;\n    }\n    & :nth-of-type(2) {\n      grid-column: 1/4;\n      grid-row: 4/8;\n    }\n    & :nth-of-type(3) {\n      grid-column: 4/7;\n      grid-row: 4/8;\n    }\n    & :nth-of-type(4) {\n      grid-column: 1/7;\n      grid-row: 8/11;\n    }\n    & :nth-of-type(5) {\n      grid-column: 1/4;\n      grid-row: 11/15;\n    }\n    & :nth-of-type(6) {\n      grid-column: 4/7;\n      grid-row: 11/15;\n    }\n\n    & :nth-of-type(7) {\n      grid-column: 1/7;\n      grid-row: 15/18;\n    }\n  }\n\n  @media only screen and (min-width: 992px) {\n    grid-template-columns: repeat(18, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n\n    & :nth-of-type(1) {\n      grid-column: 1/10;\n      grid-row: 1/3;\n    }\n    & :nth-of-type(2) {\n      grid-column: 10/19;\n      grid-row: 1/3;\n    }\n    & :nth-of-type(3) {\n      grid-column: 1/7;\n      grid-row: 3/7;\n    }\n    & :nth-of-type(4) {\n      grid-column: 7/19;\n      grid-row: 3/5;\n    }\n    & :nth-of-type(5) {\n      grid-column: 7/11;\n      grid-row: 5/7;\n    }\n    & :nth-of-type(6) {\n      grid-column: 11/15;\n      grid-row: 5/7;\n    }\n\n    & :nth-of-type(7) {\n      grid-column: 15/19;\n      grid-row: 5/7;\n    }\n  }\n",
            ]))
        ),
        V = c.Z.video(
          s ||
            (s = (0, d.Z)([
              "\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n  object-position: right;\n",
            ]))
        ),
        G = c.Z.div(
          o ||
            (o = (0, d.Z)([
              "\n  background-image: url(/images/background-ellipse.png);\n  background-position-x: right;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: black;\n  display: flex;\n  height: 100%;\n  paddingbottom: 14px;\n  overflow: hidden;\n",
            ]))
        ),
        J = function () {
          var e = (0, p.Z)(),
            n = (0, g.s0)(),
            t = (0, j.q)(),
            i =
              (t.tokenValidity,
              t.content,
              (0, b.zn)().notify,
              (0, w.useMediaQuery)({ query: "(max-width: 992px)" })),
            r =
              ((0, v.$)().currentLanguage.locale,
              (0, C.Z)().onGetTranslation,
              (0, m.useState)(!1)),
            a = (0, l.Z)(r, 2),
            s = a[0],
            o = a[1],
            d = (0, m.useState)(!1),
            c = (0, l.Z)(d, 2),
            k = c[0],
            F = c[1],
            Z = function (e) {
              n("/".concat(e));
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(D, {
                show: k,
                onClose: function () {
                  F(!1);
                },
                onConfirm: function () {
                  F(!1);
                },
              }),
              (0, _.jsx)(G, {
                children: (0, _.jsx)(f.W, {
                  style: {
                    paddingBottom: "14px",
                    overflow: "hidden",
                    height: "100%",
                  },
                  children: (0, _.jsxs)(h.k, {
                    direction: "column",
                    style: { height: "100%", width: "100%" },
                    children: [
                      (0, _.jsxs)(h.k, {
                        direction: "row",
                        justify: "space-between",
                        align: "center",
                        style: { height: "10%", width: "100%" },
                        children: [
                          (0, _.jsx)(y.tP, {
                            size: "clamp(1.3rem,2vw,1.8rem)",
                            color: "#E5FF00",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily3)",
                              textTransform: "",
                            },
                            children: (0, _.jsx)(u.Z, {
                              id: "home",
                              defaultMessage: "Home",
                              values: { br: (0, _.jsx)("br", {}) },
                            }),
                          }),
                          (0, _.jsxs)(x.Z, {
                            placement: "bottom-right",
                            isOpen: s,
                            onOpenChange: function () {
                              return o(!s);
                            },
                            children: [
                              (0, _.jsx)(x.Z.Trigger, {
                                children: (0, _.jsx)("svg", {
                                  style: {
                                    alignSelf: "center",
                                    cursor: "pointer",
                                  },
                                  width: "30",
                                  height: "30",
                                  viewBox: "0 0 20 20",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, _.jsx)("path", {
                                    d: "M16.5307 9.99493C16.4105 9.85808 16.3442 9.68216 16.3442 9.5C16.3442 9.31784 16.4105 9.14192 16.5307 9.00507L17.4906 7.92521C17.5964 7.80723 17.6621 7.65878 17.6782 7.50115C17.6944 7.34353 17.6602 7.18483 17.5806 7.04783L16.0808 4.45319C16.002 4.31635 15.882 4.20788 15.7379 4.14324C15.5938 4.07861 15.433 4.06111 15.2784 4.09324L13.8686 4.3782C13.6892 4.41526 13.5025 4.38539 13.3436 4.29421C13.1847 4.20303 13.0647 4.05685 13.0062 3.88326L12.5488 2.51095C12.4985 2.362 12.4026 2.23264 12.2748 2.14113C12.147 2.04963 11.9936 2.00061 11.8364 2.00102H8.83679C8.67327 1.99248 8.51144 2.03771 8.37603 2.12979C8.24062 2.22187 8.13907 2.35574 8.0869 2.51095L7.66695 3.88326C7.60846 4.05685 7.48846 4.20303 7.32958 4.29421C7.17071 4.38539 6.98396 4.41526 6.80457 4.3782L5.35727 4.09324C5.2107 4.07252 5.06128 4.09565 4.92784 4.15971C4.79439 4.22376 4.68289 4.32588 4.60737 4.45319L3.10757 7.04783C3.02595 7.1833 2.98926 7.34111 3.00272 7.49869C3.01619 7.65627 3.07914 7.80556 3.18256 7.92521L4.13493 9.00507C4.25516 9.14192 4.32146 9.31784 4.32146 9.5C4.32146 9.68216 4.25516 9.85808 4.13493 9.99493L3.18256 11.0748C3.07914 11.1944 3.01619 11.3437 3.00272 11.5013C2.98926 11.6589 3.02595 11.8167 3.10757 11.9522L4.60737 14.5468C4.68618 14.6837 4.80618 14.7921 4.95026 14.8568C5.09434 14.9214 5.25515 14.9389 5.40976 14.9068L6.81957 14.6218C6.99896 14.5847 7.18571 14.6146 7.34458 14.7058C7.50345 14.797 7.62346 14.9431 7.68195 15.1167L8.13939 16.489C8.19157 16.6443 8.29311 16.7781 8.42852 16.8702C8.56393 16.9623 8.72576 17.0075 8.88929 16.999H11.8889C12.0461 16.9994 12.1995 16.9504 12.3273 16.8589C12.4551 16.7674 12.551 16.638 12.6013 16.489L13.0587 15.1167C13.1172 14.9431 13.2372 14.797 13.3961 14.7058C13.555 14.6146 13.7417 14.5847 13.9211 14.6218L15.3309 14.9068C15.4855 14.9389 15.6463 14.9214 15.7904 14.8568C15.9345 14.7921 16.0545 14.6837 16.1333 14.5468L17.6331 11.9522C17.7127 11.8152 17.7469 11.6565 17.7307 11.4988C17.7146 11.3412 17.6489 11.1928 17.5431 11.0748L16.5307 9.99493ZM15.4134 10.9998L16.0133 11.6747L15.0534 13.3395L14.1686 13.1595C13.6285 13.0491 13.0666 13.1408 12.5897 13.4173C12.1128 13.6938 11.754 14.1357 11.5814 14.6593L11.2965 15.4992H9.37672L9.10676 14.6443C8.93417 14.1208 8.57537 13.6788 8.09845 13.4023C7.62153 13.1258 7.0597 13.0341 6.51961 13.1445L5.63473 13.3245L4.65986 11.6672L5.25978 10.9923C5.6287 10.5798 5.83265 10.0459 5.83265 9.4925C5.83265 8.93913 5.6287 8.40517 5.25978 7.9927L4.65986 7.3178L5.61973 5.66802L6.50461 5.848C7.0447 5.9584 7.60653 5.86665 8.08345 5.59018C8.56037 5.31371 8.91917 4.87175 9.09176 4.3482L9.37672 3.50082H11.2965L11.5814 4.3557C11.754 4.87925 12.1128 5.32121 12.5897 5.59768C13.0666 5.87415 13.6285 5.9659 14.1686 5.8555L15.0534 5.67552L16.0133 7.34029L15.4134 8.0152C15.0486 8.42672 14.8472 8.95759 14.8472 9.5075C14.8472 10.0574 15.0486 10.5883 15.4134 10.9998ZM10.3366 6.50041C9.74333 6.50041 9.16339 6.67633 8.67011 7.00593C8.17683 7.33553 7.79236 7.804 7.56533 8.35211C7.3383 8.90021 7.27889 9.50333 7.39463 10.0852C7.51037 10.6671 7.79606 11.2015 8.21556 11.621C8.63506 12.0405 9.16953 12.3262 9.7514 12.442C10.3333 12.5577 10.9364 12.4983 11.4845 12.2713C12.0326 12.0442 12.5011 11.6598 12.8307 11.1665C13.1603 10.6732 13.3362 10.0933 13.3362 9.5C13.3362 8.70446 13.0202 7.9415 12.4576 7.37897C11.8951 6.81644 11.1321 6.50041 10.3366 6.50041ZM10.3366 10.9998C10.04 10.9998 9.74999 10.9118 9.50335 10.747C9.25671 10.5822 9.06448 10.348 8.95096 10.0739C8.83744 9.79989 8.80774 9.49834 8.86561 9.2074C8.92348 8.91647 9.06632 8.64923 9.27607 8.43948C9.48582 8.22973 9.75306 8.08689 10.044 8.02902C10.3349 7.97115 10.6365 8.00085 10.9105 8.11437C11.1846 8.22788 11.4188 8.42012 11.5836 8.66676C11.7484 8.9134 11.8364 9.20337 11.8364 9.5C11.8364 9.89777 11.6784 10.2792 11.3971 10.5605C11.1158 10.8418 10.7344 10.9998 10.3366 10.9998Z",
                                    fill: "#E5FF00",
                                  }),
                                }),
                              }),
                              (0, _.jsx)(x.Z.Content, {
                                css: { boxShadow: "0px 4px 15px 0px #E5FF00" },
                                children: (0, _.jsx)(h.k, {
                                  direction: "column",
                                  gap: "10px",
                                  style: {
                                    padding: "10px 20px",
                                    boxShadow: "0px 4px 15px 0px #E5FF00",
                                  },
                                  children: (0, _.jsx)(y.Ei, {
                                    minwidth: "150px",
                                    minheight: "fit-content",
                                    onClick: function () {
                                      o(!1), F(!0);
                                    },
                                    children: (0, _.jsx)(y.tP, {
                                      size: "clamp(1rem,2vw,1.125rem)",
                                      color: "#FFFFFF",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        textTransform: "capitalize",
                                      },
                                      children: "".concat(
                                        e.formatMessage({
                                          id: "edit-email",
                                          defaultMessage: "Edit Email",
                                        })
                                      ),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsxs)(R, {
                        children: [
                          (0, _.jsx)(O, {
                            role: "button",
                            onClick: function () {
                              Z("magic-avatar");
                            },
                            isactivated: "true",
                            bgdesktopimage:
                              "url(/images/dashboard/magic-avatar.png)",
                            bgmobileimage:
                              "url(/images/dashboard/magic-avatar-mobile.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "magic-avatar",
                                    defaultMessage: "Magic Avatar",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "your-journey-to-ai-avatars-begins-here",
                                    defaultMessage:
                                      "Your Journey to AI Avatars Begins Here",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(O, {
                            isactivated: "false",
                            role: "button",
                            onClick: function () {},
                            bgdesktopimage:
                              "url(/images/dashboard/instant-photo.png)",
                            bgmobileimage:
                              "url(/images/dashboard/instant-photo-mobile.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "instant-photo",
                                    defaultMessage: "Instant Photo",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "coming-soon",
                                    defaultMessage: "Coming soon",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsxs)(O, {
                            onClick: function () {
                              Z("studio");
                            },
                            isactivated: "true",
                            role: "button",
                            bgdesktopimage: "transparent",
                            bgmobileimage: "transparent",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: [
                              (0, _.jsx)(V, {
                                autoPlay: !0,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                children: (0, _.jsx)("source", {
                                  src: "/images/dashboard/creative-ai-studio-mobile.mp4",
                                  type: "video/mp4",
                                }),
                              }),
                              (0, _.jsxs)(h.k, {
                                direction: "column",
                                gap: "2px",
                                w: i ? "100%" : "60%",
                                style: { zIndex: 1 },
                                children: [
                                  (0, _.jsx)(y.tP, {
                                    size: "clamp(1.0rem,2vw,2.375rem)",
                                    color: "white",
                                    weight: "bold",
                                    css: {
                                      fontFamily: "var(--fontFamily3)",
                                      textTransform: "",
                                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                    },
                                    children: (0, _.jsx)(u.Z, {
                                      id: "creative-ai-studio",
                                      defaultMessage: "Creative AI Studio",
                                      values: { br: (0, _.jsx)("br", {}) },
                                    }),
                                  }),
                                  (0, _.jsx)(y.tP, {
                                    size: "clamp(1rem,2vw,1.125rem)",
                                    color: "white",
                                    weight: "normal",
                                    css: {
                                      fontFamily: "var(--fontFamily3)",
                                      textTransform: "",
                                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                                    },
                                    children: (0, _.jsx)(u.Z, {
                                      id: "transforming-images-into-capativating-reel-videos",
                                      defaultMessage:
                                        "Transforming Images into Captivating Short Reel Videos",
                                      values: { br: (0, _.jsx)("br", {}) },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsx)(O, {
                            isactivated: "false",
                            role: "button",
                            bgdesktopimage:
                              "url(/images/dashboard/ai-chat-1.png)",
                            bgmobileimage:
                              "url(/images/dashboard/ai-chat-mobile-1.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "ai-chat",
                                    defaultMessage: "AI Chat",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "coming-soon",
                                    defaultMessage: "Coming soon",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(O, {
                            isactivated: "false",
                            role: "button",
                            bgdesktopimage:
                              "url(/images/dashboard/train-ur-ai.png)",
                            bgmobileimage:
                              "url(/images/dashboard/train-ur-ai-mobile.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "train-your-ai",
                                    defaultMessage: "Train Your AI",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "coming-soon",
                                    defaultMessage: "Coming soon",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(O, {
                            isactivated: "false",
                            role: "button",
                            onClick: function () {},
                            bgdesktopimage: "url(/images/dashboard/3d.png)",
                            bgmobileimage: "url(/images/dashboard/3d.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "3d",
                                    defaultMessage: "3D",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "coming-soon",
                                    defaultMessage: "Coming soon",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)(O, {
                            isactivated: "false",
                            role: "button",
                            bgdesktopimage:
                              "url(/images/dashboard/marketplace.png)",
                            bgmobileimage:
                              "url(/images/dashboard/marketplace-mobile.png)",
                            align: "center",
                            style: {
                              placeContent: "flex-start",
                              padding: "0px 30px",
                            },
                            children: (0, _.jsxs)(h.k, {
                              direction: "column",
                              gap: "2px",
                              children: [
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1.0rem,2vw,2.375rem)",
                                  color: "white",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "marketplace",
                                    defaultMessage: "Marketplace",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                                (0, _.jsx)(y.tP, {
                                  size: "clamp(1rem,2vw,1.125rem)",
                                  color: "white",
                                  weight: "normal",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "",
                                    lineHeight: "clamp(1rem,2vw,1.125rem)",
                                  },
                                  children: (0, _.jsx)(u.Z, {
                                    id: "coming-soon",
                                    defaultMessage: "Coming soon",
                                    values: { br: (0, _.jsx)("br", {}) },
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=4369.1c10e773.chunk.js.map
