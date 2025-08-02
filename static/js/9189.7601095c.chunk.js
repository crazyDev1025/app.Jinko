"use strict";
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [9189],
  {
    59189: function (n, e, t) {
      t.r(e);
      var i,
        r,
        a,
        o,
        l,
        s,
        d,
        c,
        p = t(29439),
        h = t(30168),
        g = t(72791),
        x = t(17691),
        u = t(57689),
        m = t(97625),
        f = t.n(m),
        C = t(42164),
        w = t(91580),
        b = t(75366),
        v = t(93539),
        y = t(50888),
        j = t(24805),
        k = t(80184),
        Z = x.ZP.div(
          i ||
            (i = (0, h.Z)([
              "\nbackground-image: url(/images/background-ellipse.png);\nbackground-position-x: right;\nbackground-size: contain;\nbackground-repeat: no-repeat;\n",
            ]))
        ),
        z = x.ZP.div(
          r ||
            (r = (0, h.Z)([
              "\ndisplay:flex;\ngap:20px;\njustify-content:space-between;\nflex-direction:column;\nbackground-color:transparent;\nwidth:100%;\nheight:100%;\nalign-items:center;\npadding:0px 0px 5px 0px;\n",
            ]))
        ),
        F = x.ZP.div(
          a ||
            (a = (0, h.Z)([
              "\ndisplay:flex;\nwidth:100%;\nheight:100%;\n@media only screen and (max-width: 991px) {\n  align-items:end;\n  gap:50px;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  background-color:transparent;\n  align-items:center;\n}\n@media only screen and (min-width: 992px) {\n  align-items:end;\n  gap:50px;\n  justify-content:center;\n  align-items:center;\n  flex-direction:row;\n  background-color:transparent;\n  align-items:center;\n}\n ",
            ]))
        ),
        P = (0, x.ZP)(C.k)(
          o ||
            (o = (0, h.Z)([
              "\nborder-radius:10px;\nmin-height: 180px;\nmin-width: 255px;\nheight:100%;\nwidth:100%;\nmax-height:200px;\nmax-width:350px;\nposition: relative;\ncursor: pointer;\n",
            ]))
        ),
        _ = x.ZP.div(
          l ||
            (l = (0, h.Z)([
              "\nwidth: 50%;\nheight: 100px;\nbackground: var(--yellowColor);\nclip-path: polygon(100% 0%, 0% 100%, 100% 100%);\nbottom:",
              ";\nright:",
              ";\nposition: absolute;\nborder-bottom-right-radius: 10px;\nz-index:2;\n  // width: 100%;\n  // height: 100%;\n  // overflow: hidden;\n  // position: relative;\n  // bottom:0px;\n  // right:0px;\n\n  // ::after {\n  // content: '';\n  // background: var(--yellowColor);\n  // width: 130%;\n  // height: 100%;\n  // position: absolute;\n  // transform: rotate(242deg) translate(-71%,0);\n}\n",
            ])),
          function (n) {
            return n.bottom;
          },
          function (n) {
            return n.right;
          }
        ),
        M = (0, x.ZP)(b.ZP)(
          s ||
            (s = (0, h.Z)([
              "\nheight: ",
              ";\nwidth: ",
              ";\npadding: 10px 15px;\nborder-radius: 20px;\nbackground-color: ",
              "!important;\nmin-width: 255px;\nmax-width:350px;\n\n:hover {\n    cursor: pointer;\n  }\n",
            ])),
          function (n) {
            return n.height;
          },
          function (n) {
            return n.width;
          },
          function (n) {
            return n.bg;
          }
        );
      (0, x.ZP)(C.k)(
        d ||
          (d = (0, h.Z)([
            "\nwidth: 100%;\ngap: 20px;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  place-content: start;\n}\n@media only screen and (min-width: 992px) {\n  place-content:space-between;\n}\n",
          ]))
      ),
        (0, x.ZP)(b.ZP)(
          c ||
            (c = (0, h.Z)([
              "\nmin-width:",
              ";\nmin-height:",
              ";\nmax-width:",
              ";\n// min-width:fit-content;\npadding:",
              ";\nbackground: transparent;\n// border: none;\nmargin: 0px;\nalign-items: center;\nheight: auto;\ncursor: pointer;\nbox-sizing: border-box;\nborder-radius: var(--nextui-space-5);\nposition: relative;\n:hover {\n    cursor: pointer;\n  }\n&:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 0px;\n    pointer-events: none;\n    opacity: ",
              ";\n    z-index: 201;\n  }\n",
            ])),
          function (n) {
            return n.minwidth;
          },
          function (n) {
            return n.minheight;
          },
          function (n) {
            return n.minwidth;
          },
          function (n) {
            return n.padding || "";
          },
          function (n) {
            return n.disabled ? "1" : "0";
          }
        );
      e.default = function () {
        var n = (0, v.Z)(),
          e = (0, u.s0)(),
          t = (0, j.useMediaQuery)({ query: "(max-width: 992px)" }),
          i = (0, g.useState)(""),
          r = (0, p.Z)(i, 2),
          a = r[0],
          o = r[1],
          l = (0, g.useCallback)(function (n, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              r = document.getElementById(n),
              a = f().loadAnimation({
                name: n,
                container: r,
                renderer: "canvas",
                loop: t,
                autoplay: i,
                path: e,
              }),
              o = function () {
                if (void 0 === f().play()) {
                  var e = document.getElementById("".concat(n, "-prev"));
                  e && (e.remove(), (r.style.display = null), a.resize());
                }
              };
            return (
              a.addEventListener("loaded_images", o),
              function () {
                a.removeEventListener("loaded_images", o);
              }
            );
          }, []);
        (0, g.useEffect)(
          function () {
            if (!t)
              return (
                l("male-idle-lottie", "/lotties/male-idle.json", !0),
                l("female-idle-lottie", "/lotties/female-idle.json", !0),
                function () {
                  f().destroy("male-idle-lottie"),
                    f().destroy("female-idle-lottie");
                }
              );
          },
          [l, t]
        );
        var s = (0, g.useCallback)(function (n) {
            o(n);
          }, []),
          d = (0, g.useCallback)(
            function () {
              a && e("../chat/".concat(a));
            },
            [a, e]
          );
        return (0, k.jsx)(Z, {
          style: { height: "100%" },
          children: (0, k.jsx)(w.W, {
            style: { height: "100%", padding: "5px 0px 0px 0px" },
            children: (0, k.jsxs)(z, {
              children: [
                (0, k.jsx)(y.tP, {
                  size: "clamp(1.7rem, 2vw, 1.8rem)",
                  color: "var(--yellowColor)",
                  weight: "bold",
                  css: {
                    fontFamily: "var(--fontFamily1)",
                    textTransform: "uppercase",
                  },
                  children: "".concat(
                    n.formatMessage({
                      id: "choose-a-gender",
                      defaultMessage: "Choose A Gender",
                    })
                  ),
                }),
                (0, k.jsxs)(F, {
                  children: [
                    (0, k.jsxs)(P, {
                      align: "start",
                      direction: "row",
                      onClick: function () {
                        s("male");
                      },
                      style: {
                        background:
                          "male" === a
                            ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 245, 0, 0.4) 100%)"
                            : "linear-gradient(180deg, rgba(54, 56, 41, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
                      },
                      children: [
                        (0, k.jsxs)(C.k, {
                          align: "start",
                          direction: "row",
                          style: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            border: "1px solid var(--yellowColor)",
                            borderRadius: "10px",
                          },
                          children: [
                            (0, k.jsxs)(C.k, {
                              align: "start",
                              direction: "column",
                              style: {
                                alignSelf: "end",
                                padding: "0px 0px 0px 0px",
                                height: "120%",
                                width: "100%",
                                maxWidth: "230px",
                              },
                              children: [
                                (0, k.jsx)("img", {
                                  id: "male-idle-lottie-prev",
                                  alt: "male",
                                  src: "/images/male-avatar.png",
                                  style: { height: "100%", width: "100%" },
                                }),
                                (0, k.jsx)("div", {
                                  id: "male-idle-lottie",
                                  style: {
                                    height: "100%",
                                    width: "100%",
                                    display: "none",
                                  },
                                }),
                              ],
                            }),
                            (0, k.jsxs)(C.k, {
                              align: "flex-end",
                              direction: "column",
                              wrap: "wrap",
                              style: {
                                flex: "1",
                                placeContent: "space-between",
                                height: "100%",
                                position: "relative",
                                padding: "20px 25px 15px 0px",
                                alignContent: "flex-end",
                              },
                              children: [
                                (0, k.jsxs)("svg", {
                                  width: "60",
                                  height: "60",
                                  viewBox: "0 0 60 60",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, k.jsx)("path", {
                                      d: "M57.1252 1.1875H42.8752C42.4277 1.1875 41.9985 1.36529 41.682 1.68176V1.68176C41.3655 1.99823 41.1877 2.42745 41.1877 2.875C41.1877 3.32255 41.3655 3.75178 41.682 4.06824C41.9985 4.38471 42.4277 4.5625 42.8752 4.5625H53.0531L38.9408 18.672C34.5193 14.855 28.808 12.8539 22.9596 13.0851C16.9529 13.3226 11.2763 15.896 7.13908 20.2572C3.00184 24.6183 0.730933 30.4225 0.810108 36.4334C0.889284 42.4442 3.31228 48.1866 7.56296 52.4373C11.8136 56.6879 17.556 59.1109 23.5669 59.1901C29.5777 59.2693 35.3819 56.9984 39.7431 52.8611C44.1042 48.7239 46.6776 43.0473 46.9151 37.0407C47.1463 31.1922 45.1453 25.481 41.3282 21.0594L55.4377 6.94992V17.125C55.4377 17.5726 55.6155 18.0018 55.932 18.3182C56.2485 18.6347 56.6777 18.8125 57.1252 18.8125C57.5728 18.8125 58.002 18.6347 58.3185 18.3182C58.6349 18.0018 58.8127 17.5726 58.8127 17.125V2.875C58.8127 2.42745 58.6349 1.99823 58.3185 1.68176C58.002 1.36529 57.5728 1.1875 57.1252 1.1875ZM37.7921 50.0545C35.0386 52.807 31.5308 54.6814 27.7121 55.4406C23.8932 56.1997 19.935 55.8095 16.3379 54.3193C12.7408 52.829 9.66639 50.3056 7.50335 47.0682C5.3403 43.8307 4.18579 40.0245 4.18579 36.1309C4.18579 32.2374 5.3403 28.4312 7.50335 25.1937C9.66639 21.9562 12.7408 19.4328 16.3379 17.9426C19.935 16.4523 23.8932 16.0621 27.7121 16.8213C31.5308 17.5805 35.0386 19.4548 37.7921 22.2074C41.4798 25.9028 43.551 30.9103 43.551 36.1309C43.551 41.3516 41.4798 46.3591 37.7921 50.0545Z",
                                      fill: "url(#paint0_linear_1339_3146)",
                                      stroke: "#E5FF00",
                                    }),
                                    (0, k.jsx)("defs", {
                                      children: (0, k.jsxs)("linearGradient", {
                                        id: "paint0_linear_1339_3146",
                                        x1: "29.8104",
                                        y1: "1.6875",
                                        x2: "29.8104",
                                        y2: "58.6921",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, k.jsx)("stop", {
                                            stopColor: "#FEFB80",
                                          }),
                                          (0, k.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#FBF7BD",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(y.tP, {
                                  size: "clamp(1.1rem,2vw,1.2rem)",
                                  color: "var(--blackColor)",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily1)",
                                    zIndex: 3,
                                    margin: "0px",
                                    textTransform: "uppercase",
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "male",
                                      defaultMessage: "Male",
                                    })
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsx)(_, { bottom: "0px", right: "0px" }),
                      ],
                    }),
                    (0, k.jsxs)(P, {
                      align: "start",
                      direction: "row",
                      onClick: function () {
                        s("female");
                      },
                      style: {
                        background:
                          "female" === a
                            ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 245, 0, 0.4) 100%)"
                            : "linear-gradient(180deg, rgba(54, 56, 41, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
                      },
                      children: [
                        (0, k.jsxs)(C.k, {
                          align: "start",
                          direction: "row",
                          style: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            border: "1px solid var(--yellowColor)",
                            borderRadius: "10px",
                          },
                          children: [
                            (0, k.jsxs)(C.k, {
                              align: "start",
                              direction: "column",
                              style: {
                                alignSelf: "end",
                                padding: "0px 0px 0px 0px",
                                height: "120%",
                                width: "100%",
                                maxWidth: "230px",
                              },
                              children: [
                                (0, k.jsx)("img", {
                                  id: "female-idle-lottie-prev",
                                  alt: "female",
                                  src: "/images/female-avatar.png",
                                  style: { height: "100%", width: "100%" },
                                }),
                                (0, k.jsx)("div", {
                                  id: "female-idle-lottie",
                                  style: {
                                    height: "100%",
                                    width: "100%",
                                    display: "none",
                                  },
                                }),
                              ],
                            }),
                            (0, k.jsxs)(C.k, {
                              align: "flex-end",
                              direction: "column",
                              wrap: "wrap",
                              style: {
                                flex: "1",
                                placeContent: "space-between",
                                height: "100%",
                                position: "relative",
                                padding: "20px 25px 15px 0px",
                                alignContent: "flex-end",
                              },
                              children: [
                                (0, k.jsxs)("svg", {
                                  width: "48",
                                  height: "69",
                                  viewBox: "0 0 48 69",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, k.jsx)("path", {
                                      d: "M46.625 23.5644V23.5639C46.6253 19.0542 45.3034 14.6434 42.8229 10.8771C40.3424 7.11092 36.8121 4.15459 32.6688 2.37392C28.5256 0.593251 23.9512 0.066384 19.5116 0.858508C15.072 1.65063 10.9621 3.72699 7.69032 6.83067C4.41855 9.93435 2.12851 13.9292 1.10356 18.3208C0.078599 22.7125 0.363695 27.3083 1.92357 31.5396C3.48345 35.771 6.24965 39.4521 9.87993 42.1276C13.3828 44.7092 17.5417 46.2452 21.875 46.5631V55.1263H11.6875C11.24 55.1263 10.8107 55.3041 10.4943 55.6206C10.1778 55.9371 10 56.3663 10 56.8138C10 57.2614 10.1778 57.6906 10.4943 58.0071C10.8107 58.3235 11.24 58.5013 11.6875 58.5013H21.875V66.3138C21.875 66.7614 22.0528 67.1906 22.3693 67.5071C22.6857 67.8235 23.115 68.0013 23.5625 68.0013C24.0101 68.0013 24.4393 67.8235 24.7557 67.5071C25.0722 67.1906 25.25 66.7614 25.25 66.3138V58.5013H35.4375C35.8851 58.5013 36.3143 58.3235 36.6307 58.0071C36.9472 57.6906 37.125 57.2614 37.125 56.8138C37.125 56.3663 36.9472 55.9371 36.6307 55.6206C36.3143 55.3041 35.8851 55.1263 35.4375 55.1263H25.25V46.5626C30.9688 46.137 36.3313 43.5971 40.286 39.4287C44.3496 35.1456 46.618 29.4685 46.625 23.5644ZM3.875 23.5636C3.87506 19.6698 5.02971 15.8636 7.19295 12.626C9.35624 9.38845 12.431 6.86506 16.0284 5.37496C19.6258 3.88486 23.5843 3.49498 27.4033 4.25463C31.2223 5.01427 34.7303 6.88933 37.4837 9.64267C40.237 12.396 42.1121 15.904 42.8717 19.723C43.6314 23.542 43.2415 27.5005 41.7514 31.0979C40.2613 34.6953 37.7379 37.7701 34.5003 39.9334C31.2628 42.0966 27.4567 43.2512 23.563 43.2513C18.3431 43.246 13.3385 41.17 9.64742 37.4789C5.95641 33.7879 3.88043 28.7834 3.875 23.5636Z",
                                      fill: "url(#paint0_linear_1339_3154)",
                                      stroke: "#E5FF00",
                                    }),
                                    (0, k.jsx)("defs", {
                                      children: (0, k.jsxs)("linearGradient", {
                                        id: "paint0_linear_1339_3154",
                                        x1: "23.5625",
                                        y1: "0.999939",
                                        x2: "23.5625",
                                        y2: "67.5013",
                                        gradientUnits: "userSpaceOnUse",
                                        children: [
                                          (0, k.jsx)("stop", {
                                            stopColor: "#FEFB80",
                                          }),
                                          (0, k.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#FBF7BD",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(y.tP, {
                                  size: "clamp(1.1rem,2vw,1.2rem)",
                                  color: "var(--blackColor)",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily1)",
                                    zIndex: 3,
                                    margin: "0px",
                                    textTransform: "uppercase",
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "female",
                                      defaultMessage: "Female",
                                    })
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsx)(_, { bottom: "0px", right: "0px" }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsx)(M, {
                  width: "100%",
                  height: "48px",
                  bg: "var(--yellowColor)",
                  onClick: function () {
                    d();
                  },
                  children: (0, k.jsx)(y.tP, {
                    size: "clamp(0.8rem,2vw,0.9rem)",
                    color: "var(--blackColor)",
                    weight: "bold",
                    css: {
                      fontFamily: "var(--fontFamily1)",
                      textTransform: "uppercase",
                    },
                    children: "".concat(
                      n.formatMessage({
                        id: "continue",
                        defaultMessage: "Continue",
                      })
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    91580: function (n, e, t) {
      t.d(e, {
        W: function () {
          return f;
        },
      });
      var i = t(37762),
        r = t(72791),
        a = t(25431),
        o = t(14077),
        l = t(97581),
        s = t(47653),
        d = (0, l.k)(function (n, e, t) {
          var i = e.fluid,
            r = e.sizes,
            a = t.size;
          return {
            root: {
              paddingLeft: n.spacing.md,
              paddingRight: n.spacing.md,
              maxWidth: i ? "100%" : (0, s.a)({ size: a, sizes: r }),
              marginLeft: "auto",
              marginRight: "auto",
            },
          };
        }),
        c = t(44414),
        p = Object.defineProperty,
        h = Object.getOwnPropertySymbols,
        g = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable,
        u = function (n, e, t) {
          return e in n
            ? p(n, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (n[e] = t);
        },
        m = {
          sizes: {
            xs: (0, a.h)(540),
            sm: (0, a.h)(720),
            md: (0, a.h)(960),
            lg: (0, a.h)(1140),
            xl: (0, a.h)(1320),
          },
        },
        f = (0, r.forwardRef)(function (n, e) {
          var t = (0, o.N4)("Container", m, n),
            a = t.className,
            l = t.fluid,
            s = t.size,
            p = t.unstyled,
            f = t.sizes,
            C = t.variant,
            w = (function (n, e) {
              var t = {};
              for (var r in n)
                g.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
              if (null != n && h) {
                var a,
                  o = (0, i.Z)(h(n));
                try {
                  for (o.s(); !(a = o.n()).done; )
                    (r = a.value),
                      e.indexOf(r) < 0 && x.call(n, r) && (t[r] = n[r]);
                } catch (l) {
                  o.e(l);
                } finally {
                  o.f();
                }
              }
              return t;
            })(t, [
              "className",
              "fluid",
              "size",
              "unstyled",
              "sizes",
              "variant",
            ]),
            b = d(
              { fluid: l, sizes: f },
              { unstyled: p, name: "Container", variant: C, size: s }
            ),
            v = b.classes,
            y = b.cx;
          return r.createElement(
            c.x,
            (function (n, e) {
              for (var t in e || (e = {})) g.call(e, t) && u(n, t, e[t]);
              if (h) {
                var r,
                  a = (0, i.Z)(h(e));
                try {
                  for (a.s(); !(r = a.n()).done; )
                    (t = r.value), x.call(e, t) && u(n, t, e[t]);
                } catch (o) {
                  a.e(o);
                } finally {
                  a.f();
                }
              }
              return n;
            })({ className: y(v.root, a), ref: e }, w)
          );
        });
      f.displayName = "@mantine/core/Container";
    },
  },
]);
//# sourceMappingURL=9189.7601095c.chunk.js.map
