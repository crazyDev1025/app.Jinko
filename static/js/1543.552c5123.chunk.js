/*! For license information please see 1543.552c5123.chunk.js.LICENSE.txt */
(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [1543],
  {
    3708: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return z;
        },
      });
      var o = r(37762),
        i = r(72791),
        n = r(14077),
        a = r(97581),
        s = r(25431),
        c = r(47653),
        d = Object.defineProperty,
        l = Object.defineProperties,
        u = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        f = Object.prototype.propertyIsEnumerable,
        v = function (e, t, r) {
          return t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        g = function (e, t) {
          for (var r in t || (t = {})) p.call(t, r) && v(e, r, t[r]);
          if (h) {
            var i,
              n = (0, o.Z)(h(t));
            try {
              for (n.s(); !(i = n.n()).done; ) {
                r = i.value;
                f.call(t, r) && v(e, r, t[r]);
              }
            } catch (a) {
              n.e(a);
            } finally {
              n.f();
            }
          }
          return e;
        },
        m = (0, a.k)(function (e, t) {
          var r,
            o,
            i = t.captionSide,
            n = t.horizontalSpacing,
            a = t.verticalSpacing,
            d = t.fontSize,
            h = t.withBorder,
            p = t.withColumnBorders,
            f = ""
              .concat((0, s.h)(1), " solid ")
              .concat(
                "dark" === e.colorScheme ? e.colors.dark[4] : e.colors.gray[3]
              );
          return {
            root:
              ((r = g({}, e.fn.fontStyles())),
              (o = {
                width: "100%",
                borderCollapse: "collapse",
                captionSide: i,
                color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
                lineHeight: e.lineHeight,
                border: h ? f : void 0,
                "& caption": {
                  marginTop: "top" === i ? 0 : e.spacing.xs,
                  marginBottom: "bottom" === i ? 0 : e.spacing.xs,
                  fontSize: e.fontSizes.sm,
                  color:
                    "dark" === e.colorScheme
                      ? e.colors.dark[2]
                      : e.colors.gray[6],
                },
                "& thead tr th, & tfoot tr th, & tbody tr th": {
                  textAlign: "left",
                  fontWeight: "bold",
                  color:
                    "dark" === e.colorScheme
                      ? e.colors.dark[0]
                      : e.colors.gray[7],
                  fontSize: (0, c.a)({ size: d, sizes: e.fontSizes }),
                  padding: ""
                    .concat((0, c.a)({ size: a, sizes: e.spacing }), " ")
                    .concat((0, c.a)({ size: n, sizes: e.spacing })),
                },
                "& thead tr th": { borderBottom: f },
                "& tfoot tr th, & tbody tr th": { borderTop: f },
                "& tbody tr td": {
                  padding: ""
                    .concat((0, c.a)({ size: a, sizes: e.spacing }), " ")
                    .concat((0, c.a)({ size: n, sizes: e.spacing })),
                  borderTop: f,
                  fontSize: (0, c.a)({ size: d, sizes: e.fontSizes }),
                },
                "& tbody tr:first-of-type td, & tbody tr:first-of-type th": {
                  borderTop: "none",
                },
                "& thead th, & tbody td": {
                  borderRight: p ? f : "none",
                  "&:last-of-type": {
                    borderRight: "none",
                    borderLeft: p ? f : "none",
                  },
                },
                "& tbody tr th": { borderRight: p ? f : "none" },
                "&[data-striped] tbody tr:nth-of-type(odd)": {
                  backgroundColor:
                    "dark" === e.colorScheme
                      ? e.colors.dark[6]
                      : e.colors.gray[0],
                },
                "&[data-hover] tbody tr": e.fn.hover({
                  backgroundColor:
                    "dark" === e.colorScheme
                      ? e.colors.dark[5]
                      : e.colors.gray[1],
                }),
              }),
              l(r, u(o))),
          };
        }),
        y = r(44414),
        b = Object.defineProperty,
        S = Object.defineProperties,
        w = Object.getOwnPropertyDescriptors,
        O = Object.getOwnPropertySymbols,
        M = Object.prototype.hasOwnProperty,
        U = Object.prototype.propertyIsEnumerable,
        j = function (e, t, r) {
          return t in e
            ? b(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r);
        },
        k = {
          striped: !1,
          highlightOnHover: !1,
          captionSide: "top",
          horizontalSpacing: "xs",
          fontSize: "sm",
          verticalSpacing: 7,
          withBorder: !1,
          withColumnBorders: !1,
        },
        z = (0, i.forwardRef)(function (e, t) {
          var r,
            a,
            s = (0, n.N4)("Table", k, e),
            c = s.className,
            d = s.children,
            l = s.striped,
            u = s.highlightOnHover,
            h = s.captionSide,
            p = s.horizontalSpacing,
            f = s.verticalSpacing,
            v = s.fontSize,
            g = s.unstyled,
            b = s.withBorder,
            z = s.withColumnBorders,
            P = s.variant,
            C = (function (e, t) {
              var r = {};
              for (var i in e)
                M.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
              if (null != e && O) {
                var n,
                  a = (0, o.Z)(O(e));
                try {
                  for (a.s(); !(n = a.n()).done; )
                    (i = n.value),
                      t.indexOf(i) < 0 && U.call(e, i) && (r[i] = e[i]);
                } catch (s) {
                  a.e(s);
                } finally {
                  a.f();
                }
              }
              return r;
            })(s, [
              "className",
              "children",
              "striped",
              "highlightOnHover",
              "captionSide",
              "horizontalSpacing",
              "verticalSpacing",
              "fontSize",
              "unstyled",
              "withBorder",
              "withColumnBorders",
              "variant",
            ]),
            x = m(
              {
                captionSide: h,
                verticalSpacing: f,
                horizontalSpacing: p,
                fontSize: v,
                withBorder: b,
                withColumnBorders: z,
              },
              { unstyled: g, name: "Table", variant: P }
            ),
            E = x.classes,
            T = x.cx;
          return i.createElement(
            y.x,
            ((r = (function (e, t) {
              for (var r in t || (t = {})) M.call(t, r) && j(e, r, t[r]);
              if (O) {
                var i,
                  n = (0, o.Z)(O(t));
                try {
                  for (n.s(); !(i = n.n()).done; )
                    (r = i.value), U.call(t, r) && j(e, r, t[r]);
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              }
              return e;
            })({}, C)),
            (a = {
              component: "table",
              ref: t,
              className: T(E.root, c),
              "data-striped": l || void 0,
              "data-hover": u || void 0,
            }),
            S(r, w(a))),
            d
          );
        });
      z.displayName = "@mantine/core/Table";
    },
    30097: function (e, t, r) {
      var o;
      (o = function (e) {
        return (function (e) {
          var t = {};
          function r(o) {
            if (t[o]) return t[o].exports;
            var i = (t[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, o) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (r.r = function (e) {
              "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" === typeof e && e && e.__esModule) return e;
              var o = Object.create(null);
              if (
                (r.r(o),
                Object.defineProperty(o, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var i in e)
                  r.d(
                    o,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return o;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = "./src/react-webcam.tsx"))
          );
        })({
          "./src/react-webcam.tsx": function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r("react"),
              i = (function () {
                var e = function (t, r) {
                  return (
                    (e =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                          e.__proto__ = t;
                        }) ||
                      function (e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                      }),
                    e(t, r)
                  );
                };
                return function (t, r) {
                  function o() {
                    this.constructor = t;
                  }
                  e(t, r),
                    (t.prototype =
                      null === r
                        ? Object.create(r)
                        : ((o.prototype = r.prototype), new o()));
                };
              })(),
              n = function () {
                return (
                  (n =
                    Object.assign ||
                    function (e) {
                      for (var t, r = 1, o = arguments.length; r < o; r++)
                        for (var i in (t = arguments[r]))
                          Object.prototype.hasOwnProperty.call(t, i) &&
                            (e[i] = t[i]);
                      return e;
                    }),
                  n.apply(this, arguments)
                );
              },
              a = function (e, t) {
                var r = {};
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) &&
                    t.indexOf(o) < 0 &&
                    (r[o] = e[o]);
                if (
                  null != e &&
                  "function" === typeof Object.getOwnPropertySymbols
                ) {
                  var i = 0;
                  for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
                    t.indexOf(o[i]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, o[i]) &&
                      (r[o[i]] = e[o[i]]);
                }
                return r;
              };
            function s() {
              return !(
                !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
              );
            }
            "undefined" !== typeof window &&
              (void 0 === navigator.mediaDevices &&
                (navigator.mediaDevices = {}),
              void 0 === navigator.mediaDevices.getUserMedia &&
                (navigator.mediaDevices.getUserMedia = function (e) {
                  var t =
                    navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia ||
                    navigator.msGetUserMedia;
                  return t
                    ? new Promise(function (r, o) {
                        t.call(navigator, e, r, o);
                      })
                    : Promise.reject(
                        new Error(
                          "getUserMedia is not implemented in this browser"
                        )
                      );
                }));
            var c = (function (e) {
              function t(t) {
                var r = e.call(this, t) || this;
                return (
                  (r.canvas = null),
                  (r.ctx = null),
                  (r.requestUserMediaId = 0),
                  (r.unmounted = !1),
                  (r.state = { hasUserMedia: !1 }),
                  r
                );
              }
              return (
                i(t, e),
                (t.prototype.componentDidMount = function () {
                  var e = this.state,
                    t = this.props;
                  (this.unmounted = !1),
                    s()
                      ? (e.hasUserMedia || this.requestUserMedia(),
                        t.children &&
                          "function" != typeof t.children &&
                          console.warn("children must be a function"))
                      : t.onUserMediaError("getUserMedia not supported");
                }),
                (t.prototype.componentDidUpdate = function (e) {
                  var t = this.props;
                  if (s()) {
                    var r =
                        JSON.stringify(e.audioConstraints) !==
                        JSON.stringify(t.audioConstraints),
                      o =
                        JSON.stringify(e.videoConstraints) !==
                        JSON.stringify(t.videoConstraints),
                      i = e.minScreenshotWidth !== t.minScreenshotWidth,
                      n = e.minScreenshotHeight !== t.minScreenshotHeight;
                    (o || i || n) && ((this.canvas = null), (this.ctx = null)),
                      (r || o) &&
                        (this.stopAndCleanup(), this.requestUserMedia());
                  } else t.onUserMediaError("getUserMedia not supported");
                }),
                (t.prototype.componentWillUnmount = function () {
                  (this.unmounted = !0), this.stopAndCleanup();
                }),
                (t.stopMediaStream = function (e) {
                  e &&
                    (e.getVideoTracks && e.getAudioTracks
                      ? (e.getVideoTracks().map(function (t) {
                          e.removeTrack(t), t.stop();
                        }),
                        e.getAudioTracks().map(function (t) {
                          e.removeTrack(t), t.stop();
                        }))
                      : e.stop());
                }),
                (t.prototype.stopAndCleanup = function () {
                  var e = this.state;
                  e.hasUserMedia &&
                    (t.stopMediaStream(this.stream),
                    e.src && window.URL.revokeObjectURL(e.src));
                }),
                (t.prototype.getScreenshot = function (e) {
                  var t = this.state,
                    r = this.props;
                  if (!t.hasUserMedia) return null;
                  var o = this.getCanvas(e);
                  return (
                    o && o.toDataURL(r.screenshotFormat, r.screenshotQuality)
                  );
                }),
                (t.prototype.getCanvas = function (e) {
                  var t = this.state,
                    r = this.props;
                  if (!this.video) return null;
                  if (!t.hasUserMedia || !this.video.videoHeight) return null;
                  if (!this.ctx) {
                    var o = this.video.videoWidth,
                      i = this.video.videoHeight;
                    if (!this.props.forceScreenshotSourceSize) {
                      var n = o / i;
                      (i =
                        (o = r.minScreenshotWidth || this.video.clientWidth) /
                        n),
                        r.minScreenshotHeight &&
                          i < r.minScreenshotHeight &&
                          (o = (i = r.minScreenshotHeight) * n);
                    }
                    (this.canvas = document.createElement("canvas")),
                      (this.canvas.width =
                        (null === e || void 0 === e ? void 0 : e.width) || o),
                      (this.canvas.height =
                        (null === e || void 0 === e ? void 0 : e.height) || i),
                      (this.ctx = this.canvas.getContext("2d"));
                  }
                  var a = this.ctx,
                    s = this.canvas;
                  return (
                    a &&
                      s &&
                      ((s.width =
                        (null === e || void 0 === e ? void 0 : e.width) ||
                        s.width),
                      (s.height =
                        (null === e || void 0 === e ? void 0 : e.height) ||
                        s.height),
                      r.mirrored && (a.translate(s.width, 0), a.scale(-1, 1)),
                      (a.imageSmoothingEnabled = r.imageSmoothing),
                      a.drawImage(
                        this.video,
                        0,
                        0,
                        (null === e || void 0 === e ? void 0 : e.width) ||
                          s.width,
                        (null === e || void 0 === e ? void 0 : e.height) ||
                          s.height
                      ),
                      r.mirrored && (a.scale(-1, 1), a.translate(-s.width, 0))),
                    s
                  );
                }),
                (t.prototype.requestUserMedia = function () {
                  var e = this,
                    r = this.props,
                    o = function (o, i) {
                      var n = { video: "undefined" === typeof i || i };
                      r.audio && (n.audio = "undefined" === typeof o || o),
                        e.requestUserMediaId++;
                      var a = e.requestUserMediaId;
                      navigator.mediaDevices
                        .getUserMedia(n)
                        .then(function (r) {
                          e.unmounted || a !== e.requestUserMediaId
                            ? t.stopMediaStream(r)
                            : e.handleUserMedia(null, r);
                        })
                        .catch(function (t) {
                          e.handleUserMedia(t);
                        });
                    };
                  if ("mediaDevices" in navigator)
                    o(r.audioConstraints, r.videoConstraints);
                  else {
                    var i = function (e) {
                        return { optional: [{ sourceId: e }] };
                      },
                      n = function (e) {
                        var t = e.deviceId;
                        return "string" === typeof t
                          ? t
                          : Array.isArray(t) && t.length > 0
                          ? t[0]
                          : "object" === typeof t && t.ideal
                          ? t.ideal
                          : null;
                      };
                    MediaStreamTrack.getSources(function (e) {
                      var t = null,
                        a = null;
                      e.forEach(function (e) {
                        "audio" === e.kind
                          ? (t = e.id)
                          : "video" === e.kind && (a = e.id);
                      });
                      var s = n(r.audioConstraints);
                      s && (t = s);
                      var c = n(r.videoConstraints);
                      c && (a = c), o(i(t), i(a));
                    });
                  }
                }),
                (t.prototype.handleUserMedia = function (e, t) {
                  var r = this.props;
                  if (e || !t)
                    return (
                      this.setState({ hasUserMedia: !1 }),
                      void r.onUserMediaError(e)
                    );
                  this.stream = t;
                  try {
                    this.video && (this.video.srcObject = t),
                      this.setState({ hasUserMedia: !0 });
                  } catch (o) {
                    this.setState({
                      hasUserMedia: !0,
                      src: window.URL.createObjectURL(t),
                    });
                  }
                  r.onUserMedia(t);
                }),
                (t.prototype.render = function () {
                  var e = this,
                    t = this.state,
                    r = this.props,
                    i = r.audio,
                    s =
                      (r.forceScreenshotSourceSize, r.disablePictureInPicture),
                    c =
                      (r.onUserMedia,
                      r.onUserMediaError,
                      r.screenshotFormat,
                      r.screenshotQuality,
                      r.minScreenshotWidth,
                      r.minScreenshotHeight,
                      r.audioConstraints,
                      r.videoConstraints,
                      r.imageSmoothing,
                      r.mirrored),
                    d = r.style,
                    l = void 0 === d ? {} : d,
                    u = r.children,
                    h = a(r, [
                      "audio",
                      "forceScreenshotSourceSize",
                      "disablePictureInPicture",
                      "onUserMedia",
                      "onUserMediaError",
                      "screenshotFormat",
                      "screenshotQuality",
                      "minScreenshotWidth",
                      "minScreenshotHeight",
                      "audioConstraints",
                      "videoConstraints",
                      "imageSmoothing",
                      "mirrored",
                      "style",
                      "children",
                    ]),
                    p = c
                      ? n(n({}, l), {
                          transform: (l.transform || "") + " scaleX(-1)",
                        })
                      : l,
                    f = { getScreenshot: this.getScreenshot.bind(this) };
                  return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "video",
                      n(
                        {
                          autoPlay: !0,
                          disablePictureInPicture: s,
                          src: t.src,
                          muted: !i,
                          playsInline: !0,
                          ref: function (t) {
                            e.video = t;
                          },
                          style: p,
                        },
                        h
                      )
                    ),
                    u && u(f)
                  );
                }),
                (t.defaultProps = {
                  audio: !1,
                  disablePictureInPicture: !1,
                  forceScreenshotSourceSize: !1,
                  imageSmoothing: !0,
                  mirrored: !1,
                  onUserMedia: function () {},
                  onUserMediaError: function () {},
                  screenshotFormat: "image/webp",
                  screenshotQuality: 0.92,
                }),
                t
              );
            })(o.Component);
            t.default = c;
          },
          react: function (t, r) {
            t.exports = e;
          },
        }).default;
      }),
        (e.exports = o(r(72791)));
    },
  },
]);
//# sourceMappingURL=1543.552c5123.chunk.js.map
