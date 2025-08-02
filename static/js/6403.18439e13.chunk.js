(self.webpackChunkjinko_frontend = self.webpackChunkjinko_frontend || []).push([
  [6403],
  {
    46403: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Ke;
          },
        });
      var i = n(1413),
        r = n(93433),
        a = n(74165),
        s = n(15861),
        o = n(29439),
        l = n(30168),
        c = n(72791),
        d = n(26088),
        h = n(57689),
        u = n(93539),
        p = n(4349),
        f = n(42164),
        m = n(98296),
        g = n(91580),
        x = n(69655),
        C = n(24805),
        w = n(84038),
        v = n(38062),
        y = n(44695),
        j = n(61134),
        b = n(55705),
        k = n(8007),
        M = n(29275),
        Z = n(56666),
        L = n(50888),
        F = n(40801),
        H = n(27498),
        V = n(65370),
        z = n(46553),
        S = n(31243),
        _ = n(17448),
        P = n(83719),
        T = n(938),
        E = n(45987),
        R = n(15671),
        A = n(43144),
        B = n(60136),
        I = n(29388),
        O = function (e, t) {
          return new Promise(function (n, i) {
            var r = new Image();
            (r.onload = function () {
              return n(r);
            }),
              (r.onerror = i),
              !e.match(
                /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i
              ) &&
                t &&
                (r.crossOrigin = t),
              (r.src = e);
          });
        },
        U = function (e) {
          return new Promise(function (t, n) {
            var i = new FileReader();
            (i.onload = function (e) {
              try {
                var i;
                if (
                  null === e ||
                  void 0 === e ||
                  null === (i = e.target) ||
                  void 0 === i ||
                  !i.result
                )
                  throw new Error("No image data");
                var r = O(e.target.result);
                t(r);
              } catch (a) {
                n(a);
              }
            }),
              i.readAsDataURL(e);
          });
        },
        W =
          "undefined" !== typeof window &&
          "undefined" !== typeof navigator &&
          ("ontouchstart" in window || navigator.maxTouchPoints > 0),
        N = "undefined" !== typeof File,
        D = [
          "scale",
          "rotate",
          "image",
          "border",
          "borderRadius",
          "width",
          "height",
          "position",
          "color",
          "backgroundColor",
          "style",
          "crossOrigin",
          "onLoadFailure",
          "onLoadSuccess",
          "onImageReady",
          "onImageChange",
          "onMouseUp",
          "onMouseMove",
          "onPositionChange",
          "disableBoundaryChecks",
          "disableHiDPIScaling",
          "disableCanvasRotation",
        ],
        G = { x: 0.5, y: 0.5 },
        Y = (function (e) {
          (0, B.Z)(n, e);
          var t = (0, I.Z)(n);
          function n() {
            var e;
            (0, R.Z)(this, n);
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++)
              a[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(a))).canvas = c.createRef()),
              (e.pixelRatio =
                "undefined" !== typeof window && window.devicePixelRatio
                  ? window.devicePixelRatio
                  : 1),
              (e.state = {
                drag: !1,
                my: void 0,
                mx: void 0,
                image: G,
                frame: G,
              }),
              (e.handleFrameReady = function (t) {
                var n = (0, i.Z)(
                  (0, i.Z)({}, e.getInitialSize(t.width, t.height)),
                  {},
                  { resource: t, x: 0, y: 0 }
                );
                e.setState({ drag: !1, frame: n });
              }),
              (e.handleImageReady = function (t) {
                var n,
                  r,
                  a = (0, i.Z)(
                    (0, i.Z)({}, e.getInitialSize(t.width, t.height)),
                    {},
                    { resource: t, x: 0.5, y: 0.5 }
                  );
                e.setState({ drag: !1, image: a }, e.props.onImageReady),
                  null === (n = (r = e.props).onLoadSuccess) ||
                    void 0 === n ||
                    n.call(r, a);
              }),
              (e.clearImage = function () {
                var t = e.getCanvas();
                e.getContext().clearRect(0, 0, t.width, t.height),
                  e.setState({ image: G });
              }),
              (e.handleMouseDown = function (t) {
                t.preventDefault(),
                  e.setState({ drag: !0, mx: void 0, my: void 0 });
              }),
              (e.handleTouchStart = function (t) {
                e.setState({ drag: !0, mx: void 0, my: void 0 });
              }),
              (e.handleMouseUp = function () {
                var t, n;
                e.state.drag &&
                  (e.setState({ drag: !1 }),
                  null === (t = (n = e.props).onMouseUp) ||
                    void 0 === t ||
                    t.call(n));
              }),
              (e.handleMouseMove = function (t) {
                var n, r;
                if (e.state.drag) {
                  t.preventDefault();
                  var a =
                      "targetTouches" in t
                        ? t.targetTouches[0].pageX
                        : t.clientX,
                    s =
                      "targetTouches" in t
                        ? t.targetTouches[0].pageY
                        : t.clientY;
                  e.setState({ mx: a, my: s });
                  var o = e.props.rotate;
                  if (
                    ((o = (o %= 360) < 0 ? o + 360 : o),
                    e.state.mx &&
                      e.state.my &&
                      e.state.image.width &&
                      e.state.image.height)
                  ) {
                    var l,
                      c,
                      d = e.state.mx - a,
                      h = e.state.my - s,
                      u = e.state.image.width * e.props.scale,
                      p = e.state.image.height * e.props.scale,
                      f = e.getCroppingRect(),
                      m = f.x,
                      g = f.y;
                    (m *= u), (g *= p);
                    var x = function (e) {
                        return e * (Math.PI / 180);
                      },
                      C = Math.cos(x(o)),
                      w = Math.sin(x(o)),
                      v = g + -d * w + h * C,
                      y = {
                        x:
                          (m + d * C + h * w) / u +
                          ((1 / e.props.scale) * e.getXScale()) / 2,
                        y: v / p + ((1 / e.props.scale) * e.getYScale()) / 2,
                      };
                    null === (l = (c = e.props).onPositionChange) ||
                      void 0 === l ||
                      l.call(c, y),
                      e.setState({
                        image: (0, i.Z)((0, i.Z)({}, e.state.image), y),
                      });
                  }
                  null === (n = (r = e.props).onMouseMove) ||
                    void 0 === n ||
                    n.call(r, t);
                }
              }),
              e
            );
          }
          return (
            (0, A.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.disableHiDPIScaling && (this.pixelRatio = 1);
                  var e = this.getContext();
                  this.props.image && this.loadImage(this.props.image),
                    this.props.frame && this.loadFrame(this.props.frame),
                    this.paint(e);
                  var t = !!(function () {
                    var e = !1;
                    try {
                      var t = Object.defineProperty({}, "passive", {
                          get: function () {
                            e = !0;
                          },
                        }),
                        n = function () {};
                      window.addEventListener("test", n, t),
                        window.removeEventListener("test", n, t);
                    } catch (i) {
                      e = !1;
                    }
                    return e;
                  })() && { passive: !1 };
                  document.addEventListener(
                    "mousemove",
                    this.handleMouseMove,
                    t
                  ),
                    document.addEventListener("mouseup", this.handleMouseUp, t),
                    W &&
                      (document.addEventListener(
                        "touchmove",
                        this.handleMouseMove,
                        t
                      ),
                      document.addEventListener(
                        "touchend",
                        this.handleMouseUp,
                        t
                      ));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  !this.props.image ||
                  (this.props.image === e.image &&
                    this.props.width === e.width &&
                    this.props.height === e.height &&
                    this.props.backgroundColor === e.backgroundColor)
                    ? this.props.image || t.image === G || this.clearImage()
                    : this.loadImage(this.props.image),
                    this.props.frame && this.props.frame !== e.frame
                      ? this.loadFrame(this.props.frame)
                      : this.props.frame || t.frame === G || this.clearImage();
                  var n,
                    i,
                    r = this.getContext();
                  (r.clearRect(
                    0,
                    0,
                    this.getCanvas().width,
                    this.getCanvas().height
                  ),
                  this.state.frame.resource &&
                    this.paintFrame(
                      r,
                      this.state.frame,
                      this.state.image,
                      this.props.border
                    ),
                  this.paint(r),
                  this.paintImage(r, this.state.image, this.props.border),
                  e.image !== this.props.image ||
                    e.width !== this.props.width ||
                    e.height !== this.props.height ||
                    e.position !== this.props.position ||
                    e.scale !== this.props.scale ||
                    e.rotate !== this.props.rotate ||
                    t.my !== this.state.my ||
                    t.mx !== this.state.mx ||
                    t.image.x !== this.state.image.x ||
                    t.image.y !== this.state.image.y) &&
                    (null === (n = (i = this.props).onImageChange) ||
                      void 0 === n ||
                      n.call(i));
                },
              },
              {
                key: "getCanvas",
                value: function () {
                  if (!this.canvas.current)
                    throw new Error(
                      "No canvas found, please report this to: https://github.com/mosch/react-avatar-editor/issues"
                    );
                  return this.canvas.current;
                },
              },
              {
                key: "getContext",
                value: function () {
                  var e = this.getCanvas().getContext("2d");
                  if (!e)
                    throw new Error(
                      "No context found, please report this to: https://github.com/mosch/react-avatar-editor/issues"
                    );
                  return e;
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "mousemove",
                    this.handleMouseMove,
                    !1
                  ),
                    document.removeEventListener(
                      "mouseup",
                      this.handleMouseUp,
                      !1
                    ),
                    W &&
                      (document.removeEventListener(
                        "touchmove",
                        this.handleMouseMove,
                        !1
                      ),
                      document.removeEventListener(
                        "touchend",
                        this.handleMouseUp,
                        !1
                      ));
                },
              },
              {
                key: "isVertical",
                value: function () {
                  return (
                    !this.props.disableCanvasRotation &&
                    this.props.rotate % 180 !== 0
                  );
                },
              },
              {
                key: "getBorders",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : this.props.border;
                  return Array.isArray(e) ? e : [e, e];
                },
              },
              {
                key: "getDimensions",
                value: function () {
                  var e = this.props,
                    t = e.width,
                    n = e.height,
                    i = e.rotate,
                    r = e.border,
                    a = { width: 0, height: 0 },
                    s = this.getBorders(r),
                    l = (0, o.Z)(s, 2),
                    c = l[0],
                    d = l[1];
                  return (
                    this.isVertical()
                      ? ((a.width = n), (a.height = t))
                      : ((a.width = t), (a.height = n)),
                    (a.width += 2 * c),
                    (a.height += 2 * d),
                    { canvas: a, rotate: i, width: t, height: n, border: r }
                  );
                },
              },
              {
                key: "getImage",
                value: function () {
                  var e = this.getCroppingRect(),
                    t = this.state.image,
                    n = this.state.frame;
                  if (!t.resource)
                    throw new Error(
                      "No image resource available, please report this to: https://github.com/mosch/react-avatar-editor/issues"
                    );
                  (e.x *= t.resource.width),
                    (e.y *= t.resource.height),
                    (e.width *= t.resource.width),
                    (e.height *= t.resource.height);
                  var i = document.createElement("canvas");
                  this.isVertical()
                    ? ((i.width = e.height), (i.height = e.width))
                    : ((i.width = e.width), (i.height = e.height));
                  var r = i.getContext("2d");
                  return (
                    r.translate(i.width / 2, i.height / 2),
                    r.rotate((this.props.rotate * Math.PI) / 180),
                    r.translate(-i.width / 2, -i.height / 2),
                    this.isVertical() &&
                      r.translate(
                        (i.width - i.height) / 2,
                        (i.height - i.width) / 2
                      ),
                    this.props.backgroundColor &&
                      ((r.fillStyle = this.props.backgroundColor),
                      r.fillRect(0, 0, i.width, i.height)),
                    r.drawImage(t.resource, -e.x, -e.y),
                    n.resource &&
                      r.drawImage(n.resource, 0, 0, i.width, i.height),
                    i
                  );
                },
              },
              {
                key: "getImageScaledToCanvas",
                value: function () {
                  var e = this.getDimensions(),
                    t = e.width,
                    n = e.height,
                    i = document.createElement("canvas");
                  return (
                    this.isVertical()
                      ? ((i.width = n), (i.height = t))
                      : ((i.width = t), (i.height = n)),
                    this.paintImage(i.getContext("2d"), this.state.image, 0, 1),
                    this.state.frame.resource &&
                      this.paintFrame(
                        i.getContext("2d"),
                        this.state.frame,
                        this.state.image,
                        0,
                        1
                      ),
                    i
                  );
                },
              },
              {
                key: "getXScale",
                value: function () {
                  if (!this.state.image.width || !this.state.image.height)
                    throw new Error("Image dimension is unknown.");
                  var e = this.props.width / this.props.height,
                    t = this.state.image.width / this.state.image.height;
                  return Math.min(1, e / t);
                },
              },
              {
                key: "getYScale",
                value: function () {
                  if (!this.state.image.width || !this.state.image.height)
                    throw new Error("Image dimension is unknown.");
                  var e = this.props.height / this.props.width,
                    t = this.state.image.height / this.state.image.width;
                  return Math.min(1, e / t);
                },
              },
              {
                key: "getCroppingRect",
                value: function () {
                  var e = this.props.position || {
                      x: this.state.image.x,
                      y: this.state.image.y,
                    },
                    t = (1 / this.props.scale) * this.getXScale(),
                    n = (1 / this.props.scale) * this.getYScale(),
                    r = { x: e.x - t / 2, y: e.y - n / 2, width: t, height: n },
                    a = 0,
                    s = 1 - r.width,
                    o = 0,
                    l = 1 - r.height;
                  return (
                    (this.props.disableBoundaryChecks || t > 1 || n > 1) &&
                      ((a = -r.width), (s = 1), (o = -r.height), (l = 1)),
                    (0, i.Z)(
                      (0, i.Z)({}, r),
                      {},
                      {
                        x: Math.max(a, Math.min(r.x, s)),
                        y: Math.max(o, Math.min(r.y, l)),
                      }
                    )
                  );
                },
              },
              {
                key: "loadImage",
                value: (function () {
                  var e = (0, s.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, i, r, s, o, l;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(N && t instanceof File)) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.prev = 1), (e.next = 4), U(t);
                              case 4:
                                (n = e.sent),
                                  this.handleImageReady(n),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  null ===
                                    (i = (r = this.props).onLoadFailure) ||
                                    void 0 === i ||
                                    i.call(r);
                              case 11:
                                e.next = 24;
                                break;
                              case 13:
                                if ("string" !== typeof t) {
                                  e.next = 24;
                                  break;
                                }
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  O(t, this.props.crossOrigin)
                                );
                              case 17:
                                (s = e.sent),
                                  this.handleImageReady(s),
                                  (e.next = 24);
                                break;
                              case 21:
                                (e.prev = 21),
                                  (e.t1 = e.catch(14)),
                                  null ===
                                    (o = (l = this.props).onLoadFailure) ||
                                    void 0 === o ||
                                    o.call(l);
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [1, 8],
                          [14, 21],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "loadFrame",
                value: (function () {
                  var e = (0, s.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, i, r, s, o, l;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(N && t instanceof File)) {
                                  e.next = 13;
                                  break;
                                }
                                return (e.prev = 1), (e.next = 4), U(t);
                              case 4:
                                (n = e.sent),
                                  this.handleFrameReady(n),
                                  (e.next = 11);
                                break;
                              case 8:
                                (e.prev = 8),
                                  (e.t0 = e.catch(1)),
                                  null ===
                                    (i = (r = this.props).onLoadFailure) ||
                                    void 0 === i ||
                                    i.call(r);
                              case 11:
                                e.next = 24;
                                break;
                              case 13:
                                if ("string" !== typeof t) {
                                  e.next = 24;
                                  break;
                                }
                                return (
                                  (e.prev = 14),
                                  (e.next = 17),
                                  O(t, this.props.crossOrigin)
                                );
                              case 17:
                                (s = e.sent),
                                  this.handleFrameReady(s),
                                  (e.next = 24);
                                break;
                              case 21:
                                (e.prev = 21),
                                  (e.t1 = e.catch(14)),
                                  null ===
                                    (o = (l = this.props).onLoadFailure) ||
                                    void 0 === o ||
                                    o.call(l);
                              case 24:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [1, 8],
                          [14, 21],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getInitialSize",
                value: function (e, t) {
                  var n,
                    i,
                    r = this.getDimensions();
                  return (
                    r.height / r.width > t / e
                      ? (i = e * ((n = r.height) / t))
                      : (n = t * ((i = r.width) / e)),
                    { height: n, width: i }
                  );
                },
              },
              {
                key: "paintImage",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : this.pixelRatio;
                  if (t.resource) {
                    var r = this.calculatePosition(t, n);
                    e.save(),
                      e.translate(e.canvas.width / 2, e.canvas.height / 2),
                      e.rotate((this.props.rotate * Math.PI) / 180),
                      e.translate(-e.canvas.width / 2, -e.canvas.height / 2),
                      this.isVertical() &&
                        e.translate(
                          (e.canvas.width - e.canvas.height) / 2,
                          (e.canvas.height - e.canvas.width) / 2
                        ),
                      e.scale(i, i),
                      (e.globalCompositeOperation = "destination-over"),
                      e.drawImage(t.resource, r.x, r.y, r.width, r.height),
                      this.props.backgroundColor &&
                        ((e.fillStyle = this.props.backgroundColor),
                        e.fillRect(0, 0, e.canvas.width, e.canvas.height)),
                      e.restore();
                  }
                },
              },
              {
                key: "calculatePosition",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.state.image,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = this.getBorders(t),
                    i = (0, o.Z)(n, 2),
                    r = i[0],
                    a = i[1];
                  if (!e.width || !e.height)
                    throw new Error("Image dimension is unknown.");
                  var s = this.getCroppingRect(),
                    l = e.width * this.props.scale,
                    c = e.height * this.props.scale,
                    d = -s.x * l,
                    h = -s.y * c;
                  return (
                    this.isVertical()
                      ? ((d += a), (h += r))
                      : ((d += r), (h += a)),
                    { x: d, y: h, height: c, width: l }
                  );
                },
              },
              {
                key: "paintFrame",
                value: function (e, t, n, i) {
                  var r =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.pixelRatio;
                  if (t.resource) {
                    var a = this.getDimensions(),
                      s = a.canvas.height,
                      l = a.canvas.width,
                      c =
                        (this.calculatePosition(t, i),
                        this.getBorders(a.border)),
                      d = (0, o.Z)(c, 2);
                    d[0], d[1];
                    e.save(),
                      e.translate(0, 0),
                      e.scale(r, r),
                      e.drawImage(t.resource, -1, 0, l + 1, s),
                      e.restore();
                  }
                },
              },
              {
                key: "paint",
                value: function (e) {
                  e.save(),
                    e.scale(this.pixelRatio, this.pixelRatio),
                    e.translate(0, 0),
                    (e.fillStyle =
                      "rgba(" + this.props.color.slice(0, 4).join(",") + ")");
                  var t = this.props.borderRadius,
                    n = this.getDimensions(),
                    i = this.getBorders(n.border),
                    r = (0, o.Z)(i, 2),
                    a = r[0],
                    s = r[1],
                    l = n.canvas.height,
                    c = n.canvas.width;
                  (t = Math.max(t, 0)),
                    (t = Math.min(t, c / 2 - a, l / 2 - s)),
                    e.beginPath(),
                    (function (e, t, n, i, r, a) {
                      if (0 === a) e.rect(t, n, i, r);
                      else {
                        var s = i - a,
                          o = r - a;
                        e.translate(t, n),
                          e.arc(a, a, a, Math.PI, 1.5 * Math.PI),
                          e.lineTo(s, 0),
                          e.arc(s, a, a, 1.5 * Math.PI, 2 * Math.PI),
                          e.lineTo(i, o),
                          e.arc(s, o, a, 2 * Math.PI, 0.5 * Math.PI),
                          e.lineTo(a, r),
                          e.arc(a, o, a, 0.5 * Math.PI, Math.PI),
                          e.translate(-t, -n);
                      }
                    })(e, a, s, c - 2 * a, l - 2 * s, t),
                    e.rect(c, 0, -c, l),
                    e.fill("evenodd"),
                    this.props.showGrid &&
                      (function (e, t, n, i, r, a) {
                        e.fillStyle = a;
                        var s = i / 3,
                          o = r / 3;
                        e.fillRect(t, n, 1, r),
                          e.fillRect(s + t, n, 1, r),
                          e.fillRect(2 * s + t, n, 1, r),
                          e.fillRect(3 * s + t, n, 1, r),
                          e.fillRect(4 * s + t, n, 1, r),
                          e.fillRect(t, n, i, 1),
                          e.fillRect(t, o + n, i, 1),
                          e.fillRect(t, 2 * o + n, i, 1),
                          e.fillRect(t, 3 * o + n, i, 1),
                          e.fillRect(t, 4 * o + n, i, 1);
                      })(e, a, s, c - 2 * a, l - 2 * s, this.props.gridColor),
                    e.restore();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t =
                      (e.scale,
                      e.rotate,
                      e.image,
                      e.border,
                      e.borderRadius,
                      e.width,
                      e.height,
                      e.position,
                      e.color,
                      e.backgroundColor,
                      e.style),
                    n =
                      (e.crossOrigin,
                      e.onLoadFailure,
                      e.onLoadSuccess,
                      e.onImageReady,
                      e.onImageChange,
                      e.onMouseUp,
                      e.onMouseMove,
                      e.onPositionChange,
                      e.disableBoundaryChecks,
                      e.disableHiDPIScaling,
                      e.disableCanvasRotation,
                      (0, E.Z)(e, D)),
                    r = this.getDimensions(),
                    a = {
                      width: r.canvas.width,
                      height: r.canvas.height,
                      cursor: this.state.drag ? "grabbing" : "grab",
                      touchAction: "none",
                    },
                    s = {
                      width: r.canvas.width * this.pixelRatio,
                      height: r.canvas.height * this.pixelRatio,
                      onMouseDown: this.handleMouseDown,
                      onTouchStart: this.handleTouchStart,
                      style: (0, i.Z)((0, i.Z)({}, a), t),
                    };
                  return c.createElement(
                    "canvas",
                    (0, i.Z)(
                      (0, i.Z)((0, i.Z)({}, s), n),
                      {},
                      { ref: this.canvas }
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component);
      Y.defaultProps = {
        scale: 1,
        rotate: 0,
        border: 25,
        borderRadius: 0,
        width: 200,
        height: 200,
        color: [0, 0, 0, 0.5],
        showGrid: !1,
        gridColor: "#666",
        disableBoundaryChecks: !1,
        disableHiDPIScaling: !1,
        disableCanvasRotation: !0,
      };
      var q,
        X,
        Q = Y,
        $ = n(17691),
        K = n(75366),
        J = n(80184),
        ee = (0, $.ZP)(K.ZP)(
          q ||
            (q = (0, l.Z)([
              "\nborder-radius: 8px;\n// background: linear-gradient(180deg, #787FFC 0%, #42A8F6 54.69%, #4DDBEE 100%, #4DDBEE 100%);\nbackground: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);\npadding:12px 16px!important;\nborder:2px solid #E5FF00;\nmin-height:32px;\nwidth:100%;\ncolor:black;\n:hover {\n    cursor: pointer;\n  }\n  > span {\n    // width: 100%;\n    // justify-content: flex-start!important;\n\n  }\n  .nextui-button-text{\n    width:100%;\n    justify-content: flex-start!important;\n  }\n",
            ]))
        ),
        te = $.ZP.div(
          X ||
            (X = (0, l.Z)([
              "\nbackground: #FFFFFF;\nborder-radius: 8px;\nborder:1px solid #E6E8EC;\nwidth:100%;\npadding:8px 16px;\noverflow:hidden scroll;\nmax-height: 132px;\n",
            ]))
        );
      var ne,
        ie,
        re,
        ae,
        se,
        oe,
        le,
        ce,
        de,
        he,
        ue,
        pe,
        fe,
        me,
        ge,
        xe,
        Ce,
        we,
        ve,
        ye,
        je = function (e) {
          var t = e.title,
            n = e.children,
            i = e.setIsOpen,
            r = e.isOpen;
          return (0, J.jsxs)("div", {
            style: { width: "100%" },
            children: [
              (0, J.jsx)(ee, {
                iconRight: (0, J.jsx)("svg", {
                  width: "26",
                  height: "26",
                  viewBox: "0 0 26 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, J.jsx)("path", {
                    d: "M13.2 16.2002L7.19995 10.2002H19.2L13.2 16.2002Z",
                    fill: "#E5FF00",
                  }),
                }),
                type: "button",
                onClick: function () {
                  i(!r);
                },
                children: t,
              }),
              r && (0, J.jsx)(te, { children: n }),
            ],
          });
        },
        be = d.Z.div(
          ne ||
            (ne = (0, l.Z)([
              "\ndisplay:flex;\nflex-direction:row;\nwidth:100%;\nheight:fit-content;\npadding:0px 0px;\njustify-content:space-between;\nalign-items:center;\n",
            ]))
        ),
        ke = (0, d.Z)(f.k)(
          ie ||
            (ie = (0, l.Z)([
              "\nwidth:100%;\nheight:296px;\nposition:relative;\nbackdrop-filter: blur(21px);\nbox-shadow: 0px 0px 15px 0px rgba(52, 70, 233, 0.25);\n",
            ]))
        ),
        Me = d.Z.div(
          re ||
            (re = (0, l.Z)([
              "\ndisplay:flex;\nz-index: 500;\noverflow:hidden;\nposition:relative;\nheight:296px;\nwidth:100%;\n\n",
            ]))
        ),
        Ze = d.Z.div(
          ae ||
            (ae = (0, l.Z)([
              "\nbackground:#2C2C2C;\n// backdrop-filter: blur(21px);\n// box-shadow: 0px 0px 15px 0px rgba(52, 70, 233, 0.25);\nwidth:100%;\nheight:100%;\npadding:18px;\ngap:20px;\nposition:absolute;\ndisplay:flex;\nflex-direction:column;\n\n",
            ]))
        ),
        Le = d.Z.div(
          se ||
            (se = (0, l.Z)([
              "\n@media only screen and (min-width: 0px) and (max-width: 991px) {\noverflow-y: scroll;\nheight:100%;\nwidth:100%;\nborder-radius: 8px;\nalign-content: flex-start;\n  @media only screen and (min-width: 411px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  @media only screen and (min-width: 321px) and (max-width: 410px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (max-width: 320px) {\n    grid-template-columns: 1fr ;\n  }\n  display: grid;\n  justify-items: center;\n  grid-column-gap: 5px;\n  grid-row-gap: 5px;\n}\n@media only screen and (min-width: 992px) {\n  align-items:center;\n  overflow:hidden scroll;\n  padding:5px 5px 5px 5px;\n  display:flex;\n  flex-direction:row;\n  gap:10px;\n  width:100%;\n  justify-content:center;\n  flex-wrap:wrap;\n  }\n",
            ]))
        ),
        Fe = (0, d.Z)(f.k)(
          oe ||
            (oe = (0, l.Z)([
              "\nborder-radius: 8px;\npadding: 12px;\nalign-items: center;\nbackground: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);\nbox-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.50);\nborder:1.5px solid #E5FF00;\n// box-shadow: 0px 2px 10px 0px rgba(229, 255, 0, 0.50);\nwidth: 100%;\nheight: 100%;\ncursor:pointer;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  max-width: 122px;\n  min-height: 130px;\n  max-height: 148px;\n}\n@media only screen and (min-width: 992px) {\n  max-width: 174px;\n  min-height: 149px;\n  max-height: 149px;\n}\n\n// border-image-source: url(/images/button-frame.svg);\n// border-image-width: 20px;\n// border-image-outset: 1px;\n// border-image-slice: 40% 11%; \n",
            ]))
        ),
        He = (0, d.Z)(f.k)(
          le ||
            (le = (0, l.Z)([
              "\nbackground: #E5FF00;\njustify-content: center;\nalign-items: center;\nborder-radius: 8px;\nheight:100%;\nwidth:100%;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  min-height: 80px;\n  min-width: 78px;\n  max-height: 98px;\n  max-width: 96px;\n}\n@media only screen and (min-width: 992px) {\n\n  min-height: 96px;\n  min-width: 150px;\n  max-height: 96px;\n  max-width: 150px;\n}\n",
            ]))
        ),
        Ve = (0, d.Z)(f.k)(
          ce ||
            (ce = (0, l.Z)([
              "\nheight: 100%;\nwidth: 100%;\nmin-height: 130px;\nmin-width: 70px;\nmax-height: 143px;\nmax-width: 86px;\nobject-fit: cover;\nbackground-image: ",
              ";\nbackground-size:contain;\nbackground-repeat:no-repeat;\nbackground-position:center;\n// padding:2px;\nborder-image-source: ",
              ";\n// border-color: linear-gradient( 180deg, rgba(44, 135, 124, 1), rgba(95, 250, 255, 1), rgba(63, 166, 156, 1) );\nborder-image-width:  ",
              ";\nborder-image-outset: ",
              ";\nborder-image-slice: 30%;  \ncursor:pointer;\n\n",
            ])),
          function (e) {
            return e.bgImage || "";
          },
          function (e) {
            return e.borderimagesource || "";
          },
          function (e) {
            return e.borderimagesource ? "3px" : "0px";
          },
          function (e) {
            return e.borderimagesource ? "5px" : "0px";
          }
        ),
        ze = d.Z.img(
          de ||
            (de = (0, l.Z)([
              "\n  height: 100%;\n  width: 100%;\n  min-height: 130px;\n  min-width: 70px;\n  max-height: 143px;\n  max-width: 86px;\n  object-fit: cover;\n  background-image: ",
              ";\n  background-size:contain;\n  background-repeat:no-repeat;\n  background-position:center;\n  // padding:2px;\n  border-image-source: ",
              ";\n  // border-color: linear-gradient( 180deg, rgba(44, 135, 124, 1), rgba(95, 250, 255, 1), rgba(63, 166, 156, 1) );\n  border-image-width:  ",
              ";\n  border-image-outset: ",
              ";\n  border-image-slice: 30%;  \n  cursor:pointer;\n",
            ])),
          function (e) {
            return e.bgImage || "";
          },
          function (e) {
            return e.borderimagesource || "";
          },
          function (e) {
            return e.borderimagesource ? "3px" : "0px";
          },
          function (e) {
            return e.borderimagesource ? "5px" : "0px";
          }
        ),
        Se = (0, d.Z)(f.k)(
          he ||
            (he = (0, l.Z)([
              "\n  height: fit-content;\n  width: fit-content;\n  object-fit: cover;\n  background-image: ",
              ";\n  background-size:contain;\n  background-repeat:no-repeat;\n  background-position:center;\n  // padding:2px;\n  border-image-source: ",
              ";\n  // border-color: linear-gradient( 180deg, rgba(44, 135, 124, 1), rgba(95, 250, 255, 1), rgba(63, 166, 156, 1) );\n  border-image-width:  ",
              ";\n  border-image-outset: ",
              ";\n  border-image-slice: 30%;  \n  cursor:pointer;\n",
            ])),
          function (e) {
            return e.bgImage || "";
          },
          function (e) {
            return e.borderimagesource || "";
          },
          function (e) {
            return e.borderimagesource ? "3px" : "0px";
          },
          function (e) {
            return e.borderimagesource ? "5px" : "0px";
          }
        ),
        _e = d.Z.div(
          ue ||
            (ue = (0, l.Z)([
              "\nheight:100%;\nalign-items: center;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\noverflow:hidden scroll;\npadding:5px 5px 20px 5px;\nwidth:100%;\n/* first breakpoint */\n--w1: 500px;\n--n: 5;\n\n/* second breakpoint */\n--w2: 411px;\n--m: 4;\n\n/* third breakpoint */\n--w3: 300px;\n--p: 3;\n\ndisplay: grid;\ngap: 10px 10px;\njustify-items: start;\nalign-items:start;\ngrid-template-columns: repeat(\n  auto-fill,\n  minmax(\n  clamp(\n      clamp(\n        clamp(\n          100% / (var(--n) + 1) + 0.1%,\n          (var(--w1) - 100vw) * 1000,\n          100% / (var(--m) + 1) + 0.1%\n        ),\n        (var(--w2) - 100vw) * 1000,\n        100% / (var(--p) + 1) + 0.1%\n      ),\n      (var(--w3) - 100vw) * 1000,\n      100%\n    ),\n    1fr\n  )\n);\n}\n@media only screen and (min-width: 992px) {\n  overflow:hidden scroll;\n  padding:5px 5px 5px 5px;\n  display:flex;\n  flex-direction:row;\n  gap:10px;\n  width:100%;\n  justify-content:center;\n  flex-wrap:wrap;\n}\n\n",
            ]))
        ),
        Pe = d.Z.div(
          pe ||
            (pe = (0, l.Z)([
              "\noverflow-y: scroll;\nheight:100%;\nwidth:100%;\n\nborder-radius: 8px;\nalign-content: flex-start;\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  @media only screen and (min-width: 700px) {\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n  @media only screen and (min-width: 531px) and (max-width: 699px){\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  @media only screen and (min-width: 365px) and (max-width: 530px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media only screen and (max-width: 364px) {\n    grid-template-columns: 1fr ;\n  }\n  display: grid;\n  justify-items: center;\n  grid-column-gap: 5px;\n  grid-row-gap: 5px;\n}\n@media only screen and (min-width: 992px) {\n  align-content:center;\n  overflow:hidden scroll;\n  padding:5px 5px 5px 5px;\n  display:flex;\n  flex-direction:row;\n  gap:10px;\n  width:100%;\n  justify-content:center;\n  flex-wrap:wrap;\n}\n",
            ]))
        ),
        Te = (0, d.Z)(f.k)(
          fe ||
            (fe = (0, l.Z)([
              "\nborder-radius: 8px;\nalign-items: center;\npadding: 12px;\ncursor:pointer;\nborder:1.5px solid #E5FF00;\nbackground: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);\nbox-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.50);\nwidth: 100%;\nheight: 100%;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  max-width: 170px;\n  min-height: 90px;\n  max-height: 120px;\n}\n@media only screen and (min-width: 992px) {\n  max-width: 174px;\n  min-height: 149px;\n  max-height: 160px;\n}\n  // border-image-source: url(/images/button-frame.svg);\n  // border-image-width: 20px;\n  // border-image-outset: 1px;\n  // border-image-slice: 40% 11%; \n",
            ]))
        ),
        Ee = (0, d.Z)(f.k)(
          me ||
            (me = (0, l.Z)([
              "\nbackground: #E5FF00;\njustify-content: center;\nalign-items: center;\nheight:100%;\nwidth:100%;\njustify-content: center;\nalign-items: center;\nborder-radius: 8px;\n\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  min-height: 44px;\n  min-width: 132px;\n  max-height: 46px;\n  max-width: 154px;\n}\n@media only screen and (min-width: 992px) {\n  min-height: 96px;\n  min-width: 150px;\n  max-height: 96px;\n  max-width: 150px;\n}\n",
            ]))
        ),
        Re = (0, d.Z)(f.k)(
          ge ||
            (ge = (0, l.Z)([
              "\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n  height:100%;\n  width:100%;\n  flex-direction:column;\n  gap:10px;\n}\n@media only screen and (min-width: 992px) {\n  height:100%;\n  width:100%;\n  flex-direction:row;\n  gap:10px;\n  flex-wrap: wrap;\n  // justify-content: center;\n}\n",
            ]))
        ),
        Ae = d.Z.textarea(
          xe ||
            (xe = (0, l.Z)([
              "\n  border-radius: 10px;\n  // background-color: #D3EAF4;\n  border: 1px solid #C3C3DE;\n  min-height:45px;\n  padding: 12px 16px;\n  font-size: clamp(0.875rem,2vw,1rem);\n  font-weight: 700;\n  font-style: normal;\n  font-family: var(--fontFamily3);\n  resize: none;\n",
            ]))
        ),
        Be = d.Z.div(
          Ce ||
            (Ce = (0, l.Z)(["\nposition: absolute;\nright: 0px;\ntop:0px;\n"]))
        ),
        Ie = (0, d.Z)(f.k)(
          we ||
            (we = (0, l.Z)([
              "\n@media only screen and (min-width: 0px) and (max-width: 991px) {\nflex-direction:column;\nalign-items:center;\ngap:20px;\npadding: 10px;\n// height:100%;\n// overflow: hidden scroll\n}\n@media only screen and (min-width: 992px) {\n  align-items:flex-start;\n  gap:20px;\n  padding: 10px;\n  height:100%;\n  // overflow: hidden scroll\n}\n\n",
            ]))
        ),
        Oe = (0, d.Z)(f.k)(
          ve ||
            (ve = (0, l.Z)([
              "\nflex-direction:column;\ngap: 6px;\nalign-self: flex-start;\nwidth: 100%;\nposition: relative;\n@media only screen and (min-width: 0px) and (max-width: 991px) {\n\n}\n@media only screen and (min-width: 992px) {\n  max-width: 50%;\n}\n\n",
            ]))
        ),
        Ue = (0, d.Z)(f.k)(
          ye ||
            (ye = (0, l.Z)([
              "\nflex-direction:column;\ngap:6px;\nwidth: 100%;\n@media only screen and (min-width: 992px) {\n  max-width: 50%;\n}\n",
            ]))
        ),
        We = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = (0, u.Z)(),
            i = (0, x.zn)().notify,
            l = (0, c.useRef)(null),
            d = (0, c.useState)(null),
            h = (0, o.Z)(d, 2),
            p = h[0],
            g = h[1],
            C = (0, c.useContext)(P.u),
            w = C.uploadPhotoList,
            v = C.setUploadPhotoList,
            y = C.setUploadPhoto,
            j = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var r, s;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (!(r = t.target.files[0]) || r.name) &&
                            void 0 !== r &&
                            null !== r
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            g(null),
                            i(
                              "".concat(
                                n.formatMessage({
                                  id: "please-select-a-file",
                                  defaultMessage: "Please select a file",
                                })
                              ),
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 5:
                          if (!(r.size > 5e6)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            g(null),
                            i(
                              "".concat(
                                n.formatMessage({
                                  id: "please-upload-a-file-smaller-than-4MB",
                                  defaultMessage:
                                    "Please upload a file smaller than 4 MB",
                                })
                              ),
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 9:
                          return (e.next = 11), (0, _.lH)(t.target.files[0]);
                        case 11:
                          return (
                            (s = e.sent),
                            g({ filename: t.target.files[0].name, base64: s }),
                            e.abrupt("return", !0)
                          );
                        case 14:
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
            b = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e() {
                  var n;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = {
                            uuid: Date.now(),
                            displayName: p.filename,
                            filename: p.filename,
                            base64: p.base64,
                          }),
                            v([].concat((0, r.Z)(w), [n])),
                            y(n),
                            g(null),
                            t();
                        case 5:
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
          return (0, J.jsxs)(f.k, {
            direction: "column",
            style: { height: "100%" },
            children: [
              (0, J.jsxs)(f.k, {
                align: "center",
                children: [
                  (0, J.jsx)(m.z, {
                    variant: "iconWithTransparentBg",
                    onClick: function () {
                      return t();
                    },
                    children: (0, J.jsx)("svg", {
                      width: "34",
                      height: "34",
                      viewBox: "0 0 34 34",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, J.jsx)("path", {
                        d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                        fill: "#ffffff",
                      }),
                    }),
                  }),
                  (0, J.jsx)(f.k, {
                    direction: "column",
                    align: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(L.tP, {
                      size: "clamp(1.125rem,2vw,1.3rem)",
                      color: "#ffffff",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "capitalize",
                        lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                      },
                      children: "".concat(
                        n.formatMessage({
                          id: "upload-your-photo",
                          defaultMessage: "Upload Your Photo",
                        })
                      ),
                    }),
                  }),
                ],
              }),
              (0, J.jsxs)(f.k, {
                direction: "column",
                align: "center",
                style: { height: "100%" },
                children: [
                  (0, J.jsxs)(f.k, {
                    gap: "20px",
                    align: "center",
                    style: {
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                    },
                    children: [
                      (0, J.jsx)(m.z, {
                        variant: "text",
                        onClick: function () {
                          l.current.click();
                        },
                        children: "".concat(
                          n.formatMessage({
                            id: "choose-a-photo",
                            defaultMessage: "Choose a photo",
                          })
                        ),
                      }),
                      p
                        ? (0, J.jsx)(L.tP, {
                            size: "clamp(0.985rem,2vw,1rem)",
                            color: "#ffffff",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily1)",
                              textTransform: "capitalize",
                              lineHeight: "1",
                            },
                            children: "".concat(p.filename, " "),
                          })
                        : (0, J.jsx)(L.tP, {
                            size: "clamp(0.985rem,2vw,1rem)",
                            color: "#ffffff",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily1)",
                              textTransform: "capitalize",
                              lineHeight: "1",
                            },
                            children: "".concat(
                              n.formatMessage({
                                id: "no-file-chosen",
                                defaultMessage: "No file is chosen",
                              }),
                              " "
                            ),
                          }),
                    ],
                  }),
                  (0, J.jsx)("input", {
                    type: "file",
                    accept: "image/png,image/jpeg",
                    ref: l,
                    onChange: function (e) {
                      return j(e);
                    },
                    style: { display: "none" },
                  }),
                  (0, J.jsx)(f.k, {
                    justify: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(m.z, {
                      variant: "text",
                      disabled: !p,
                      onClick: b,
                      style: { minWidth: "150px" },
                      children: "".concat(
                        n.formatMessage({
                          id: "upload",
                          defaultMessage: "Upload",
                        })
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ne = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = (0, u.Z)(),
            i = (0, c.useContext)(P.u),
            r = i.uploadPhotoList,
            a = (i.setUploadPhotoList, i.uploadPhoto),
            s = i.setUploadPhoto;
          return (0, J.jsxs)(f.k, {
            direction: "column",
            gap: "20px",
            style: { height: "100%" },
            children: [
              (0, J.jsxs)(f.k, {
                align: "center",
                children: [
                  (0, J.jsx)(m.z, {
                    variant: "iconWithTransparentBg",
                    onClick: function () {
                      return t();
                    },
                    children: (0, J.jsx)("svg", {
                      width: "34",
                      height: "34",
                      viewBox: "0 0 34 34",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, J.jsx)("path", {
                        d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                        fill: "#ffffff",
                      }),
                    }),
                  }),
                  (0, J.jsx)(f.k, {
                    direction: "column",
                    align: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(L.tP, {
                      size: "clamp(1.125rem,2vw,1.3rem)",
                      color: "#ffffff",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "capitalize",
                        lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                      },
                      children: "".concat(
                        n.formatMessage({
                          id: "my-gallery",
                          defaultMessage: "My Gallery",
                        })
                      ),
                    }),
                  }),
                ],
              }),
              (0, J.jsx)(f.k, {
                direction: "column",
                align: "center",
                style: {
                  padding: "5px",
                  height: "100%",
                  overflow: "hidden scroll",
                  justifyContent: "center",
                },
                children:
                  r.length > 0
                    ? (0, J.jsx)(_e, {
                        children: r.map(function (e, t) {
                          return (0, J.jsx)(ze, {
                            borderimagesource:
                              e.uuid === a.uuid
                                ? "url(/images/opentalker/frames/frame.svg)"
                                : "",
                            src: "string" === typeof e.base64 ? e.base64 : "",
                            alt: e.displayName,
                            onClick: function () {
                              return s(e);
                            },
                          });
                        }),
                      })
                    : (0, J.jsxs)(f.k, {
                        direction: "column",
                        align: "center",
                        children: [
                          (0, J.jsx)("img", {
                            alt: "not-found",
                            src: "/images/opentalker/not-found.svg",
                            style: { width: "150px", height: "150px" },
                          }),
                          (0, J.jsx)(L.tP, {
                            size: "clamp(1.5rem,2vw,1.6rem)",
                            color: "#777E90",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily3)",
                              fontStyle: "normal",
                              lineHeight: "clamp(1.5rem,2vw,1.6rem)",
                            },
                            children: "".concat(
                              n.formatMessage({
                                id: "oops-its-empty-here",
                                defaultMessage: "Oops, it's empty here!",
                              })
                            ),
                          }),
                        ],
                      }),
              }),
            ],
          });
        },
        De = function (e) {
          var t = e.handleNextButtonOnClick,
            n = (0, u.Z)(),
            i = (0, c.useState)("home"),
            r = (0, o.Z)(i, 2),
            a = r[0],
            s = r[1],
            l = (0, C.useMediaQuery)({ query: "(max-width: 991px)" }),
            d = (0, c.useContext)(P.u).uploadPhoto,
            h = (0, c.useState)(!1),
            p = (0, o.Z)(h, 2),
            g = p[0],
            x = p[1],
            w = function () {
              s("home");
            };
          return (0, J.jsx)(J.Fragment, {
            children: (function () {
              switch (a) {
                case "home":
                  return (0, J.jsxs)(J.Fragment, {
                    children: [
                      (0, J.jsx)(H.Tu, {
                        show: g,
                        onClose: function () {
                          x(!1);
                        },
                      }),
                      (0, J.jsx)(m.z, {
                        variant: "text-with-glow-anim",
                        onClick: function () {
                          t();
                        },
                        disabled:
                          null ===
                            (null === d || void 0 === d ? void 0 : d.base64) ||
                          null === d,
                        rightIcon: (0, J.jsxs)("svg", {
                          width: "16",
                          height: "14",
                          viewBox: "0 0 16 14",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, J.jsx)("path", {
                              d: "M14.249 7.625L1.74902 7.625C1.58326 7.625 1.42429 7.55915 1.30708 7.44194C1.18987 7.32473 1.12402 7.16576 1.12402 7C1.12402 6.83424 1.18987 6.67527 1.30708 6.55806C1.42429 6.44085 1.58326 6.375 1.74902 6.375L14.249 6.375C14.4148 6.375 14.5738 6.44085 14.691 6.55806C14.8082 6.67527 14.874 6.83424 14.874 7C14.874 7.16576 14.8082 7.32473 14.691 7.44194C14.5738 7.55915 14.4148 7.625 14.249 7.625Z",
                              fill: "",
                              stroke: "",
                              strokeWidth: "0.5",
                            }),
                            (0, J.jsx)("path", {
                              d: "M13.9901 7.00019L8.80638 1.81769C8.68902 1.70033 8.62309 1.54116 8.62309 1.37519C8.62309 1.20922 8.68902 1.05005 8.80638 0.932688C8.92374 0.815329 9.08291 0.749399 9.24888 0.749399C9.41485 0.749399 9.57402 0.815329 9.69138 0.932688L15.3164 6.55769C15.3746 6.61574 15.4208 6.68471 15.4523 6.76065C15.4838 6.83658 15.5 6.91798 15.5 7.00019C15.5 7.0824 15.4838 7.1638 15.4523 7.23973C15.4208 7.31566 15.3746 7.38463 15.3164 7.44269L9.69138 13.0677C9.57402 13.185 9.41485 13.251 9.24888 13.251C9.08291 13.251 8.92374 13.185 8.80638 13.0677C8.68902 12.9503 8.62309 12.7912 8.62309 12.6252C8.62309 12.4592 8.68902 12.3 8.80638 12.1827L13.9901 7.00019Z",
                              fill: "",
                              stroke: "",
                              strokeWidth: "0.5",
                            }),
                          ],
                        }),
                        style: { alignSelf: "self-end", minWidth: "150px" },
                        children: "".concat(
                          n.formatMessage({
                            id: "next",
                            defaultMessage: "Next",
                          })
                        ),
                      }),
                      l &&
                        (0, J.jsxs)(f.k, {
                          direction: "column",
                          align: "center",
                          children: [
                            (0, J.jsx)(L.tP, {
                              size: "clamp(0.875rem,2vw,1rem)",
                              color: "#777E90",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily3)",
                                textTransform: "capitalize",
                              },
                              children: "".concat(
                                n.formatMessage({
                                  id: "step",
                                  defaultMessage: "Step",
                                }),
                                " 1"
                              ),
                            }),
                            (0, J.jsx)(L.tP, {
                              size: "clamp(1.125rem,2vw,1.3rem)",
                              color: "#ffffff",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily3)",
                                textTransform: "capitalize",
                                lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                              },
                              children: "".concat(
                                n.formatMessage({
                                  id: "choose-your-avatar",
                                  defaultMessage: "Choose Your Avatar",
                                })
                              ),
                            }),
                          ],
                        }),
                      (0, J.jsxs)(Le, {
                        style: { height: "100%" },
                        children: [
                          (0, J.jsxs)(Fe, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return s("upload-photo");
                            },
                            children: [
                              (0, J.jsx)(He, {
                                children: (0, J.jsxs)("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 32 32",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsxs)("g", {
                                      clipPath: "url(#clip0_4418_9672)",
                                      children: [
                                        (0, J.jsx)("mask", {
                                          id: "mask0_4418_9672",
                                          style: { maskType: "luminance" },
                                          maskUnits: "userSpaceOnUse",
                                          x: "0",
                                          y: "4",
                                          width: "27",
                                          height: "28",
                                          children: (0, J.jsx)("path", {
                                            d: "M0.695312 4.34668H26.6681V31.3036H0.695312V4.34668Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, J.jsx)("g", {
                                          mask: "url(#mask0_4418_9672)",
                                          children: (0, J.jsx)("path", {
                                            d: "M23.5404 26.7851C23.4718 26.8847 23.2836 26.9631 23.0363 26.9734C23.012 26.9881 22.9828 26.9881 22.9219 26.9881H9.84842C8.86791 26.9881 7.87302 26.9734 6.89178 26.9631C6.44156 26.9631 5.98213 26.9472 5.53413 26.9472C5.11307 26.9472 4.69828 27.0328 4.26283 26.9881C4.24733 26.9881 4.23848 26.9881 4.20859 26.9734C4.17648 26.9734 4.13293 26.9631 4.08902 26.9324C3.81779 26.7544 4.38018 26.3226 4.47982 26.1904C4.78058 25.8033 8.08521 21.0508 8.13171 20.9958C8.57712 20.3156 9.18601 19.9296 9.81926 19.9296C10.7559 19.9296 11.2301 20.95 11.9688 21.3769C12.935 21.9568 13.5689 21.1841 14.0461 20.4012C14.369 19.8815 14.6985 19.3493 15.0166 18.8152C15.2048 18.5069 15.4026 18.1804 15.5919 17.8539C15.8237 17.4831 16.0514 17.1137 16.2831 16.7319L16.7459 15.96C16.7902 15.899 16.8193 15.8562 16.8485 15.7967C17.0223 15.543 17.2201 15.3797 17.3791 15.3797C17.5282 15.3797 17.702 15.543 17.8589 15.8115C19.4756 18.7754 21.1045 21.7788 22.6891 24.6939L23.457 26.1196C23.526 26.22 23.557 26.3385 23.5869 26.4279C23.6017 26.5465 23.6161 26.6915 23.5404 26.7851ZM8.44685 8.36586C10.34 8.35108 11.8711 9.91695 11.8711 11.8749C11.8711 13.8138 10.3699 15.3699 8.47711 15.3797C6.58622 15.3797 5.05993 13.7991 5.05993 11.8749C5.05993 9.94688 6.57146 8.38063 8.44685 8.36586ZM24.9541 15.174C20.676 15.174 17.2053 11.6162 17.2053 7.2246C17.2053 6.21099 17.3917 5.24207 17.726 4.35156H4.10378C3.80007 4.35156 3.49969 4.38149 3.21074 4.42694C1.78039 4.66292 0.715381 5.89243 0.715381 7.34505C0.715381 14.2407 0.700989 21.1284 0.715381 28.0089C0.715381 29.743 2.18558 31.266 3.87572 31.2812H23.7895C24.3792 31.2812 24.9124 31.088 25.3752 30.735C26.2557 30.0415 26.6465 29.0915 26.6465 27.9692C26.6609 24.5488 26.6609 21.1133 26.6609 17.6759V14.9808C26.111 15.1062 25.5409 15.174 24.9541 15.174Z",
                                            fill: "black",
                                          }),
                                        }),
                                        (0, J.jsx)("mask", {
                                          id: "mask1_4418_9672",
                                          style: { maskType: "luminance" },
                                          maskUnits: "userSpaceOnUse",
                                          x: "18",
                                          y: "0",
                                          width: "14",
                                          height: "14",
                                          children: (0, J.jsx)("path", {
                                            d: "M18.5439 0.695312H31.3041V13.7529H18.5439V0.695312Z",
                                            fill: "white",
                                          }),
                                        }),
                                        (0, J.jsx)("g", {
                                          mask: "url(#mask1_4418_9672)",
                                          children: (0, J.jsx)("path", {
                                            d: "M28.5137 6.59285L27.7564 7.33033C27.6992 7.38677 27.6092 7.38488 27.5527 7.3273L25.9508 5.65765C25.8585 5.56333 25.7006 5.63 25.7006 5.76219V11.5397C25.7006 11.6211 25.6367 11.6889 25.5563 11.6889H24.4857C24.406 11.6889 24.34 11.6211 24.34 11.5397V5.58038C24.34 5.4478 24.1831 5.38038 24.092 5.4728L22.231 7.36405C22.1701 7.42579 22.0701 7.42162 22.0147 7.35117L21.3826 6.54323C21.3368 6.48339 21.3409 6.39816 21.394 6.34437L24.8481 2.80431C24.9046 2.7456 24.9976 2.7456 25.0537 2.80431L28.5177 6.37922C28.5749 6.43869 28.5738 6.53641 28.5137 6.59285ZM24.9548 0.700195C21.4435 0.700195 18.5957 3.62134 18.5957 7.22465C18.5957 10.8284 21.4435 13.7484 24.9548 13.7484C28.4672 13.7484 31.3142 10.8284 31.3142 7.22465C31.3142 3.62134 28.4672 0.700195 24.9548 0.700195Z",
                                            fill: "black",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, J.jsx)("defs", {
                                      children: (0, J.jsx)("clipPath", {
                                        id: "clip0_4418_9672",
                                        children: (0, J.jsx)("rect", {
                                          width: "32",
                                          height: "32",
                                          fill: "white",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "white",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                },
                                children: "".concat(
                                  n.formatMessage({
                                    id: "upload-phpto",
                                    defaultMessage: "Upload Photo",
                                  })
                                ),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Fe, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return x(!0);
                            },
                            children: [
                              (0, J.jsx)(He, {
                                children: (0, J.jsxs)("svg", {
                                  width: "40",
                                  height: "40",
                                  viewBox: "0 0 40 40",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsx)("path", {
                                      d: "M12.3204 12.5337H15.2004L17.1204 10.4004H22.8804L24.8004 12.5337H27.6804C28.1896 12.5337 28.678 12.7585 29.038 13.1586C29.3981 13.5586 29.6004 14.1013 29.6004 14.6671V27.4671C29.6004 28.0329 29.3981 28.5755 29.038 28.9756C28.678 29.3756 28.1896 29.6004 27.6804 29.6004H12.3204C11.8112 29.6004 11.3228 29.3756 10.9627 28.9756C10.6027 28.5755 10.4004 28.0329 10.4004 27.4671V14.6671C10.4004 14.1013 10.6027 13.5586 10.9627 13.1586C11.3228 12.7585 11.8112 12.5337 12.3204 12.5337ZM20.0004 15.7337C18.7274 15.7337 17.5065 16.2956 16.6063 17.2958C15.7061 18.296 15.2004 19.6526 15.2004 21.0671C15.2004 22.4815 15.7061 23.8381 16.6063 24.8383C17.5065 25.8385 18.7274 26.4004 20.0004 26.4004C21.2734 26.4004 22.4943 25.8385 23.3945 24.8383C24.2947 23.8381 24.8004 22.4815 24.8004 21.0671C24.8004 19.6526 24.2947 18.296 23.3945 17.2958C22.4943 16.2956 21.2734 15.7337 20.0004 15.7337ZM20.0004 17.8671C20.7642 17.8671 21.4968 18.2042 22.0369 18.8043C22.577 19.4044 22.8804 20.2184 22.8804 21.0671C22.8804 21.9158 22.577 22.7297 22.0369 23.3298C21.4968 23.9299 20.7642 24.2671 20.0004 24.2671C19.2366 24.2671 18.504 23.9299 17.9639 23.3298C17.4238 22.7297 17.1204 21.9158 17.1204 21.0671C17.1204 20.2184 17.4238 19.4044 17.9639 18.8043C18.504 18.2042 19.2366 17.8671 20.0004 17.8671Z",
                                      fill: "black",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M5.6 15.2C6.02435 15.2 6.43131 15.0314 6.73137 14.7314C7.03143 14.4313 7.2 14.0243 7.2 13.6V8.8C7.2 8.37565 7.36857 7.96869 7.66863 7.66863C7.96869 7.36857 8.37565 7.2 8.8 7.2H13.6C14.0243 7.2 14.4313 7.03143 14.7314 6.73137C15.0314 6.43131 15.2 6.02435 15.2 5.6C15.2 5.17565 15.0314 4.76869 14.7314 4.46863C14.4313 4.16857 14.0243 4 13.6 4H8.8C7.52696 4 6.30606 4.50571 5.40589 5.40589C4.50571 6.30606 4 7.52696 4 8.8V13.6C4 14.0243 4.16857 14.4313 4.46863 14.7314C4.76869 15.0314 5.17565 15.2 5.6 15.2ZM13.6 32.8H8.8C8.37565 32.8 7.96869 32.6314 7.66863 32.3314C7.36857 32.0313 7.2 31.6243 7.2 31.2V26.4C7.2 25.9757 7.03143 25.5687 6.73137 25.2686C6.43131 24.9686 6.02435 24.8 5.6 24.8C5.17565 24.8 4.76869 24.9686 4.46863 25.2686C4.16857 25.5687 4 25.9757 4 26.4V31.2C4 32.473 4.50571 33.6939 5.40589 34.5941C6.30606 35.4943 7.52696 36 8.8 36H13.6C14.0243 36 14.4313 35.8314 14.7314 35.5314C15.0314 35.2313 15.2 34.8243 15.2 34.4C15.2 33.9757 15.0314 33.5687 14.7314 33.2686C14.4313 32.9686 14.0243 32.8 13.6 32.8ZM31.2 4H26.4C25.9757 4 25.5687 4.16857 25.2686 4.46863C24.9686 4.76869 24.8 5.17565 24.8 5.6C24.8 6.02435 24.9686 6.43131 25.2686 6.73137C25.5687 7.03143 25.9757 7.2 26.4 7.2H31.2C31.6243 7.2 32.0313 7.36857 32.3314 7.66863C32.6314 7.96869 32.8 8.37565 32.8 8.8V13.6C32.8 14.0243 32.9686 14.4313 33.2686 14.7314C33.5687 15.0314 33.9757 15.2 34.4 15.2C34.8243 15.2 35.2313 15.0314 35.5314 14.7314C35.8314 14.4313 36 14.0243 36 13.6V8.8C36 7.52696 35.4943 6.30606 34.5941 5.40589C33.6939 4.50571 32.473 4 31.2 4ZM34.4 24.8C33.9757 24.8 33.5687 24.9686 33.2686 25.2686C32.9686 25.5687 32.8 25.9757 32.8 26.4V31.2C32.8 31.6243 32.6314 32.0313 32.3314 32.3314C32.0313 32.6314 31.6243 32.8 31.2 32.8H26.4C25.9757 32.8 25.5687 32.9686 25.2686 33.2686C24.9686 33.5687 24.8 33.9757 24.8 34.4C24.8 34.8243 24.9686 35.2313 25.2686 35.5314C25.5687 35.8314 25.9757 36 26.4 36H31.2C32.473 36 33.6939 35.4943 34.5941 34.5941C35.4943 33.6939 36 32.473 36 31.2V26.4C36 25.9757 35.8314 25.5687 35.5314 25.2686C35.2313 24.9686 34.8243 24.8 34.4 24.8Z",
                                      fill: "black",
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "white",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                },
                                children: "".concat(
                                  n.formatMessage({
                                    id: "capture-photo",
                                    defaultMessage: "Capture Photo",
                                  })
                                ),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Fe, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return s("my-gallery");
                            },
                            children: [
                              (0, J.jsx)(He, {
                                children: (0, J.jsxs)("svg", {
                                  width: "40",
                                  height: "40",
                                  viewBox: "0 0 40 40",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsx)("path", {
                                      d: "M31.3813 5.06665C31.3813 4.78376 31.2826 4.51245 31.1068 4.31241C30.9309 4.11238 30.6925 4 30.4438 4H9.81885C9.57021 4 9.33175 4.11238 9.15594 4.31241C8.98012 4.51245 8.88135 4.78376 8.88135 5.06665V6.1333H31.3813V5.06665Z",
                                      fill: "black",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M33.2373 9.33325C33.2373 9.05036 33.1385 8.77905 32.9627 8.57902C32.7869 8.37898 32.5484 8.2666 32.2998 8.2666H7.9248C7.67616 8.2666 7.43771 8.37898 7.26189 8.57902C7.08608 8.77905 6.9873 9.05036 6.9873 9.33325V10.3999H33.2373V9.33325Z",
                                      fill: "black",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M33.2375 12.5342H6.7625C6.29506 12.5342 5.84676 12.7455 5.51622 13.1215C5.18569 13.4976 5 14.0076 5 14.5395V33.9952C5 34.527 5.18569 35.0371 5.51622 35.4131C5.84676 35.7892 6.29506 36.0005 6.7625 36.0005H33.2375C33.7049 36.0005 34.1532 35.7892 34.4838 35.4131C34.8143 35.0371 35 34.527 35 33.9952V14.5395C35 14.0076 34.8143 13.4976 34.4838 13.1215C34.1532 12.7455 33.7049 12.5342 33.2375 12.5342ZM11.15 16.2141C11.7063 16.2141 12.25 16.4018 12.7125 16.7534C13.1751 17.105 13.5355 17.6048 13.7484 18.1895C13.9613 18.7742 14.017 19.4176 13.9085 20.0383C13.7999 20.6591 13.5321 21.2293 13.1387 21.6768C12.7454 22.1243 12.2443 22.4291 11.6987 22.5525C11.1531 22.676 10.5876 22.6126 10.0737 22.3704C9.55979 22.1282 9.12053 21.7181 8.81149 21.1919C8.50245 20.6656 8.3375 20.047 8.3375 19.4141C8.3375 18.5654 8.63382 17.7515 9.16126 17.1514C9.68871 16.5513 10.4041 16.2141 11.15 16.2141ZM31.25 31.7339H8.75L15.7438 23.766C15.8684 23.6253 16.0369 23.5464 16.2125 23.5464C16.3881 23.5464 16.5566 23.6253 16.6813 23.766L20.1312 27.6913L24.8844 22.134C25.009 21.9933 25.1775 21.9144 25.3531 21.9144C25.5287 21.9144 25.6972 21.9933 25.8219 22.134L31.25 28.3099V31.7339Z",
                                      fill: "black",
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "white",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                },
                                children: "".concat(
                                  n.formatMessage({
                                    id: "my-gallery",
                                    defaultMessage: "My Gallery",
                                  })
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                case "upload-photo":
                  return (0, J.jsx)(We, { handleBackToAvatarHomeOnClick: w });
                case "my-gallery":
                  return (0, J.jsx)(Ne, { handleBackToAvatarHomeOnClick: w });
                default:
                  return null;
              }
            })(),
          });
        },
        Ge = function (e) {
          var t = e.handleNextButtonOnClick,
            n = (0, u.Z)(),
            i = (0, C.useMediaQuery)({ query: "(max-width: 991px)" }),
            r = (0, c.useContext)(P.u),
            a = r.frameList,
            s = (r.setFrameList, r.selectedFrame),
            o = r.setSelectedFrame;
          return (0, J.jsx)(J.Fragment, {
            children: (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(m.z, {
                  variant: "text-with-glow-anim",
                  onClick: function () {
                    t();
                  },
                  disabled: null === s,
                  rightIcon: (0, J.jsxs)("svg", {
                    width: "16",
                    height: "14",
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, J.jsx)("path", {
                        d: "M14.249 7.625L1.74902 7.625C1.58326 7.625 1.42429 7.55915 1.30708 7.44194C1.18987 7.32473 1.12402 7.16576 1.12402 7C1.12402 6.83424 1.18987 6.67527 1.30708 6.55806C1.42429 6.44085 1.58326 6.375 1.74902 6.375L14.249 6.375C14.4148 6.375 14.5738 6.44085 14.691 6.55806C14.8082 6.67527 14.874 6.83424 14.874 7C14.874 7.16576 14.8082 7.32473 14.691 7.44194C14.5738 7.55915 14.4148 7.625 14.249 7.625Z",
                        fill: "#000000",
                        stroke: "#000000",
                        strokeWidth: "0.5",
                      }),
                      (0, J.jsx)("path", {
                        d: "M13.9901 7.00019L8.80638 1.81769C8.68902 1.70033 8.62309 1.54116 8.62309 1.37519C8.62309 1.20922 8.68902 1.05005 8.80638 0.932688C8.92374 0.815329 9.08291 0.749399 9.24888 0.749399C9.41485 0.749399 9.57402 0.815329 9.69138 0.932688L15.3164 6.55769C15.3746 6.61574 15.4208 6.68471 15.4523 6.76065C15.4838 6.83658 15.5 6.91798 15.5 7.00019C15.5 7.0824 15.4838 7.1638 15.4523 7.23973C15.4208 7.31566 15.3746 7.38463 15.3164 7.44269L9.69138 13.0677C9.57402 13.185 9.41485 13.251 9.24888 13.251C9.08291 13.251 8.92374 13.185 8.80638 13.0677C8.68902 12.9503 8.62309 12.7912 8.62309 12.6252C8.62309 12.4592 8.68902 12.3 8.80638 12.1827L13.9901 7.00019Z",
                        fill: "#000000",
                        stroke: "#000000",
                        strokeWidth: "0.5",
                      }),
                    ],
                  }),
                  style: {
                    width: "fit-content",
                    alignSelf: "self-end",
                    minWidth: "150px",
                  },
                  children: "".concat(
                    n.formatMessage({ id: "next", defaultMessage: "Next" })
                  ),
                }),
                i &&
                  (0, J.jsxs)(f.k, {
                    direction: "column",
                    align: "center",
                    children: [
                      (0, J.jsx)(L.tP, {
                        size: "clamp(0.875rem,2vw,1rem)",
                        color: "#777E90",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily3)",
                          textTransform: "capitalize",
                        },
                        children: "".concat(
                          n.formatMessage({
                            id: "step",
                            defaultMessage: "Step",
                          }),
                          " 2"
                        ),
                      }),
                      (0, J.jsx)(L.tP, {
                        size: "clamp(1.125rem,2vw,1.3rem)",
                        color: "#ffffff",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily3)",
                          textTransform: "capitalize",
                          lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                        },
                        children: "".concat(
                          n.formatMessage({
                            id: "select-your-frame",
                            defaultMessage: "Select Your Frame",
                          })
                        ),
                      }),
                    ],
                  }),
                (0, J.jsx)(_e, {
                  children: a.map(function (e) {
                    return 0 === e.uuid
                      ? (0, J.jsx)(
                          Ve,
                          {
                            bg: "linear-gradient(180deg, #01010100 0%, #fff50066 100%)",
                            borderimagesource:
                              e.uuid === s.uuid
                                ? "url(/images/opentalker/frames/frame.svg)"
                                : "",
                            style: { height: "100%", width: "100%" },
                            onClick: function () {
                              return o(e);
                            },
                            children: (0, J.jsxs)(f.k, {
                              direction: "column",
                              justify: "center",
                              align: "center",
                              style: { width: "100%", height: "100%" },
                              children: [
                                (0, J.jsxs)("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsx)("path", {
                                      d: "M5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604Z",
                                      stroke: "#ffffff",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M6 6L18 18",
                                      stroke: "#ffffff",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                    }),
                                  ],
                                }),
                                (0, J.jsx)(L.tP, {
                                  size: "clamp(0.725rem,2vw,0.8rem)",
                                  color: "#ffffff",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "capitalize",
                                    lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                                    textAlign: "center",
                                    textAlignLast: "center",
                                  },
                                  children: "".concat(
                                    n.formatMessage({
                                      id: "no-frame",
                                      defaultMessage: "No Frame",
                                    })
                                  ),
                                }),
                              ],
                            }),
                          },
                          e.uuid
                        )
                      : (0, J.jsx)(
                          Se,
                          {
                            borderimagesource:
                              e.uuid === s.uuid
                                ? "url(/images/opentalker/frames/frame.svg)"
                                : "",
                            children: (0, J.jsx)(ze, {
                              borderimagesource: "",
                              src: e.path,
                              alt: e.displayName,
                              onClick: function () {
                                o(e);
                              },
                              bgImage:
                                "url(/images/opentalker/frames/frame-sample-image-v2.png)",
                            }),
                          },
                          e.uuid
                        );
                  }),
                }),
              ],
            }),
          });
        },
        Ye = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = (0, u.Z)(),
            i = (0, x.zn)().notify,
            l =
              ((0, C.useMediaQuery)({ query: "(max-width: 992px)" }),
              (0, c.useRef)(null)),
            d = (0, c.useState)(null),
            h = (0, o.Z)(d, 2),
            p = h[0],
            g = h[1],
            w = (0, c.useContext)(P.u),
            v = w.uploadAudioList,
            y = w.setUploadAudioList,
            j = w.setUploadAudio,
            b = (0, c.useContext)(M.C).durationLimit,
            k = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var r, s, o;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (!(r = t.target.files[0]) || r.name) &&
                            void 0 !== r &&
                            null !== r
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (
                            g(null),
                            i(
                              "".concat(
                                n.formatMessage({
                                  id: "please-select-a-file",
                                  defaultMessage: "Please select a file",
                                })
                              ),
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 5:
                          if (!(r.size > 5e6)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            g(null),
                            i(
                              "".concat(
                                n.formatMessage({
                                  id: "please-upload-a-file-smaller-than-4MB",
                                  defaultMessage:
                                    "Please upload a file smaller than 4 MB",
                                })
                              ),
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 9:
                          return (e.next = 11), (0, _.Rr)(r);
                        case 11:
                          if (!((s = e.sent) > b)) {
                            e.next = 16;
                            break;
                          }
                          return (
                            g(null),
                            i(
                              "".concat(
                                n.formatMessage(
                                  {
                                    id: "kindly-upload-a-file-thats-under-sec",
                                    defaultMessage:
                                      "Kindly upload a file that's under {dr} seconds in duration.",
                                  },
                                  { dr: b }
                                )
                              ),
                              "warning"
                            ),
                            e.abrupt("return", !1)
                          );
                        case 16:
                          return (e.next = 18), (0, _.lH)(t.target.files[0]);
                        case 18:
                          return (
                            (o = e.sent),
                            g({
                              filename: t.target.files[0].name,
                              base64: o,
                              duration: s,
                            }),
                            e.abrupt("return", !0)
                          );
                        case 21:
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
            Z = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e() {
                  var n;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = {
                            uuid: Date.now(),
                            displayName: p.filename,
                            filename: p.filename,
                            base64: p.base64,
                            duration: p.duration,
                          }),
                            y([].concat((0, r.Z)(v), [n])),
                            j(n),
                            g(null),
                            t();
                        case 5:
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
          return (0, J.jsxs)(f.k, {
            direction: "column",
            style: { height: "100%" },
            children: [
              (0, J.jsxs)(f.k, {
                align: "center",
                children: [
                  (0, J.jsx)(m.z, {
                    variant: "iconWithTransparentBg",
                    onClick: function () {
                      return t();
                    },
                    children: (0, J.jsx)("svg", {
                      width: "34",
                      height: "34",
                      viewBox: "0 0 34 34",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, J.jsx)("path", {
                        d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                        fill: "#ffffff",
                      }),
                    }),
                  }),
                  (0, J.jsx)(f.k, {
                    direction: "column",
                    align: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(L.tP, {
                      size: "clamp(1.125rem,2vw,1.3rem)",
                      color: "#ffffff",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "capitalize",
                        lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                      },
                      children: "".concat(
                        n.formatMessage({
                          id: "upload-your-audio",
                          defaultMessage: "Upload Your Audio",
                        })
                      ),
                    }),
                  }),
                ],
              }),
              (0, J.jsxs)(f.k, {
                direction: "column",
                align: "center",
                style: { height: "100%" },
                children: [
                  (0, J.jsxs)(f.k, {
                    gap: "20px",
                    align: "center",
                    style: {
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                    },
                    children: [
                      (0, J.jsx)(m.z, {
                        variant: "text",
                        onClick: function () {
                          l.current.click();
                        },
                        style: { width: "fit-content" },
                        children: "".concat(
                          n.formatMessage({
                            id: "choose-a-audio",
                            defaultMessage: "Choose a Audio",
                          })
                        ),
                      }),
                      p
                        ? (0, J.jsx)(L.tP, {
                            size: "clamp(0.985rem,2vw,1rem)",
                            color: "#ffffff",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily1)",
                              textTransform: "capitalize",
                              lineHeight: "1",
                            },
                            children: "".concat(p.filename, " "),
                          })
                        : (0, J.jsx)(L.tP, {
                            size: "clamp(0.985rem,2vw,1rem)",
                            color: "#ffffff",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily1)",
                              textTransform: "capitalize",
                              lineHeight: "1",
                            },
                            children: "".concat(
                              n.formatMessage({
                                id: "no-file-chosen",
                                defaultMessage: "No file is chosen",
                              }),
                              " "
                            ),
                          }),
                    ],
                  }),
                  (0, J.jsx)("input", {
                    type: "file",
                    accept: "audio/mp3",
                    ref: l,
                    onChange: function (e) {
                      return k(e);
                    },
                    style: { display: "none" },
                  }),
                  (0, J.jsx)(f.k, {
                    justify: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(m.z, {
                      variant: "text",
                      disabled: !p,
                      onClick: function () {
                        Z();
                      },
                      style: { minWidth: "150px" },
                      children: "".concat(
                        n.formatMessage({
                          id: "upload",
                          defaultMessage: "Upload",
                        })
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        qe = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = e.handleGoToAudioGalleryOnClick,
            i = (0, u.Z)(),
            r = ((0, x.zn)().notify, (0, c.useContext)(P.u)),
            a = r.isRecording,
            s = r.setIsRecording,
            l = r.uploadAudio,
            d = (0, c.useRef)(!1),
            h = (0, c.useState)(1),
            p = (0, o.Z)(h, 2),
            g = p[0],
            C = p[1],
            w = function () {
              C(1);
            };
          return (
            (0, c.useEffect)(
              function () {
                !d.current && a
                  ? (d.current = !0)
                  : d.current &&
                    !a &&
                    null !== l &&
                    void 0 !== l &&
                    l.displayName
                  ? ((d.current = !1), C(2))
                  : d.current && !a && (d.current = !1);
              },
              [a, null === l || void 0 === l ? void 0 : l.displayName]
            ),
            (0, J.jsxs)(f.k, {
              direction: "column",
              style: { height: "100%" },
              children: [
                (0, J.jsxs)(f.k, {
                  align: "center",
                  children: [
                    (0, J.jsx)(m.z, {
                      variant: "iconWithTransparentBg",
                      onClick: function () {
                        return t();
                      },
                      children: (0, J.jsx)("svg", {
                        width: "34",
                        height: "34",
                        viewBox: "0 0 34 34",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, J.jsx)("path", {
                          d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                          fill: "#ffffff",
                        }),
                      }),
                    }),
                    (0, J.jsx)(f.k, {
                      direction: "column",
                      align: "center",
                      style: { width: "100%" },
                      children: (0, J.jsx)(L.tP, {
                        size: "clamp(1.125rem,2vw,1.3rem)",
                        color: "#ffffff",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily1)",
                          textTransform: "capitalize",
                          lineHeight: "1",
                        },
                        children: "".concat(
                          i.formatMessage({
                            id: "voice-recording",
                            defaultMessage: "Voice Recording",
                          })
                        ),
                      }),
                    }),
                  ],
                }),
                (0, J.jsx)(f.k, {
                  direction: "column",
                  align: "center",
                  justify: "center",
                  gap: "20px",
                  style: { height: "100%" },
                  children: (function () {
                    switch (g) {
                      case 1:
                        return (0, J.jsxs)(J.Fragment, {
                          children: [
                            (0, J.jsxs)(f.k, {
                              direction: "column",
                              gap: "10px",
                              style: { alignItems: "center" },
                              children: [
                                a
                                  ? (0, J.jsx)(v.J5, {
                                      src: "./lotties/voice-recording-animation.json",
                                      className: "player",
                                      loop: !0,
                                      autoplay: !0,
                                      style: { height: "80px", width: "80px" },
                                    })
                                  : (0, J.jsxs)("svg", {
                                      width: "80",
                                      height: "80",
                                      viewBox: "0 0 80 80",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, J.jsxs)("mask", {
                                          id: "mask0_3795_8551",
                                          style: { maskType: "luminance" },
                                          maskUnits: "userSpaceOnUse",
                                          x: "14",
                                          y: "4",
                                          width: "53",
                                          height: "69",
                                          children: [
                                            (0, J.jsx)("path", {
                                              d: "M51.4997 17.75C51.4997 11.6288 46.5375 6.66663 40.4163 6.66663C34.2952 6.66663 29.333 11.6288 29.333 17.75V38.3333C29.333 44.4545 34.2952 49.4166 40.4163 49.4166C46.5375 49.4166 51.4997 44.4545 51.4997 38.3333V17.75Z",
                                              fill: "white",
                                              stroke: "white",
                                              strokeWidth: "5",
                                              strokeLinejoin: "round",
                                            }),
                                            (0, J.jsx)("path", {
                                              d: "M16.6665 36.75C16.6665 49.8663 27.3002 60.5 40.4165 60.5M40.4165 60.5C53.5328 60.5 64.1665 49.8663 64.1665 36.75M40.4165 60.5V70",
                                              stroke: "white",
                                              strokeWidth: "5",
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                            }),
                                          ],
                                        }),
                                        (0, J.jsx)("g", {
                                          mask: "url(#mask0_3795_8551)",
                                          children: (0, J.jsx)("path", {
                                            d: "M2.4165 0.333252H78.4165V76.3333H2.4165V0.333252Z",
                                            fill: "#E5FF00",
                                          }),
                                        }),
                                      ],
                                    }),
                                (0, J.jsx)(L.tP, {
                                  size: "clamp(0.855rem,2vw,0.875rem)",
                                  color: "#E5FF00",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "capitalize",
                                    lineHeight: "clamp(0.855rem,2vw,0.875rem)",
                                  },
                                  children: "".concat(
                                    i.formatMessage({
                                      id: "record-your-voice",
                                      defaultMessage: "Record Your Voice",
                                    })
                                  ),
                                }),
                              ],
                            }),
                            (0, J.jsx)(f.k, {
                              justify: "center",
                              style: { width: "100%" },
                              children: (0, J.jsx)(m.z, {
                                variant: "text",
                                onClick: function () {
                                  return s(!a);
                                },
                                children: a
                                  ? (0, J.jsx)(J.Fragment, {
                                      children: "".concat(
                                        i.formatMessage({
                                          id: "click-to-stop",
                                          defaultMessage: "Click To Stop",
                                        })
                                      ),
                                    })
                                  : (0, J.jsx)(J.Fragment, {
                                      children: "".concat(
                                        i.formatMessage({
                                          id: "click-to-record",
                                          defaultMessage: "Click To Record",
                                        })
                                      ),
                                    }),
                              }),
                            }),
                          ],
                        });
                      case 2:
                        return (0, J.jsxs)(J.Fragment, {
                          children: [
                            (0, J.jsxs)(f.k, {
                              direction: "column",
                              gap: "10px",
                              style: { alignItems: "center" },
                              children: [
                                (0, J.jsx)("svg", {
                                  width: "60",
                                  height: "60",
                                  viewBox: "0 0 60 60",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: (0, J.jsx)("path", {
                                    d: "M17.2292 7C13.7934 7 11 9.57852 11 12.75V47.25C11 50.4215 13.7934 53 17.2292 53H42.1458C45.5816 53 48.375 50.4215 48.375 47.25V21.375H35.9167C34.1939 21.375 32.8021 20.0902 32.8021 18.5V7H17.2292ZM35.9167 7V18.5H48.375L35.9167 7ZM36.1113 27.3316C39.7223 29.3441 42.1458 33.0008 42.1458 37.1875C42.1458 41.3742 39.7223 45.0309 36.1113 47.0434C35.3716 47.4566 34.4178 47.232 33.9701 46.5582C33.5223 45.8844 33.7657 44.9949 34.4956 44.5816C37.2209 43.0723 39.0312 40.323 39.0312 37.1875C39.0312 34.052 37.2209 31.3027 34.5054 29.7934C33.7657 29.3801 33.5321 28.4996 33.9798 27.8168C34.4275 27.134 35.3813 26.9184 36.1211 27.3316H36.1113ZM27.1666 30.1078C27.7506 30.3324 28.1302 30.8535 28.1302 31.4375V42.9375C28.1302 43.5215 27.7506 44.0426 27.1666 44.2672C26.5827 44.4918 25.9111 44.366 25.4731 43.9527L22.0373 40.7812H18.7865C17.9299 40.7812 17.2292 40.1344 17.2292 39.3438V35.0312C17.2292 34.2406 17.9299 33.5938 18.7865 33.5938H22.0373L25.4731 30.4223C25.9208 30.009 26.5924 29.8922 27.1666 30.1078ZM32.1305 33.2434C32.7729 32.7133 33.7559 32.7672 34.3302 33.3602C35.3132 34.3664 35.9167 35.7141 35.9167 37.1875C35.9167 38.6609 35.3132 40.0086 34.3302 41.0238C33.7559 41.6168 32.7729 41.6617 32.1305 41.1406C31.4881 40.6195 31.4395 39.7031 32.004 39.1102C32.5004 38.598 32.7923 37.9332 32.7923 37.1965C32.7923 36.4598 32.4906 35.7859 32.004 35.2828C31.4297 34.6898 31.4881 33.7824 32.1305 33.2523V33.2434Z",
                                    fill: "#E5FF00",
                                  }),
                                }),
                                (0, J.jsx)(L.tP, {
                                  size: "clamp(0.855rem,2vw,0.875rem)",
                                  color: "#E5FF00",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "capitalize",
                                    lineHeight: "clamp(0.855rem,2vw,0.875rem)",
                                  },
                                  children:
                                    null === l || void 0 === l
                                      ? void 0
                                      : l.displayName,
                                }),
                              ],
                            }),
                            (0, J.jsxs)(f.k, {
                              justify: "center",
                              gap: "20px",
                              wrap: "wrap",
                              style: { width: "100%" },
                              children: [
                                (0, J.jsx)(m.z, {
                                  variant: "text",
                                  onClick: w,
                                  children: "".concat(
                                    i.formatMessage({
                                      id: "retry-again",
                                      defaultMessage: "Retry again",
                                    })
                                  ),
                                }),
                                (0, J.jsx)(m.z, {
                                  variant: "text",
                                  onClick: n,
                                  children: "".concat(
                                    i.formatMessage({
                                      id: "audio-gallery",
                                      defaultMessage: "Audio Gallery",
                                    })
                                  ),
                                }),
                              ],
                            }),
                          ],
                        });
                      default:
                        return null;
                    }
                  })(),
                }),
              ],
            })
          );
        },
        Xe = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = (0, u.Z)(),
            r =
              ((0, C.useMediaQuery)({ query: "(max-width: 992px)" }),
              (0, c.useContext)(P.u)),
            o = r.uploadAudioList,
            l = r.uploadAudio,
            d = r.setUploadAudio,
            h = (function () {
              var e = (0, s.Z)(
                (0, a.Z)().mark(function e(t) {
                  var n, r;
                  return (0, a.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((n = {
                              uuid: t.uuid,
                              displayName: t.displayName,
                              filename: t.filename,
                              base64: t.base64,
                              duration: t.duration,
                            }),
                            !(
                              t.duration <= 0 ||
                              void 0 === t.duration ||
                              null === t.duration
                            ))
                          ) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 4),
                            (0, _.Rr)(
                              (0, _.WF)((0, _.ug)(t.base64), t.filename)
                            )
                          );
                        case 4:
                          (r = e.sent),
                            (n = (0, i.Z)(
                              (0, i.Z)({}, n),
                              {},
                              { duration: r }
                            ));
                        case 6:
                          d(n);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, J.jsxs)(f.k, {
            direction: "column",
            gap: "20px",
            style: { height: "100%" },
            children: [
              (0, J.jsxs)(f.k, {
                align: "center",
                children: [
                  (0, J.jsx)(m.z, {
                    variant: "iconWithTransparentBg",
                    onClick: function () {
                      return t();
                    },
                    children: (0, J.jsx)("svg", {
                      width: "34",
                      height: "34",
                      viewBox: "0 0 34 34",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, J.jsx)("path", {
                        d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                        fill: "#ffffff",
                      }),
                    }),
                  }),
                  (0, J.jsx)(f.k, {
                    direction: "column",
                    align: "center",
                    style: { width: "100%" },
                    children: (0, J.jsx)(L.tP, {
                      size: "clamp(1.125rem,2vw,1.3rem)",
                      color: "#ffffff",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "capitalize",
                        lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                      },
                      children: "".concat(
                        n.formatMessage({
                          id: "my-audio-gallery",
                          defaultMessage: "My Audio Gallery",
                        })
                      ),
                    }),
                  }),
                ],
              }),
              (0, J.jsx)(f.k, {
                direction: "column",
                gap: "5px",
                style: {
                  height: "100%",
                  width: "100%",
                  overflowY: "scroll",
                  padding: "0px 10px",
                },
                children:
                  o.length > 0
                    ? (0, J.jsx)(Re, {
                        children: o.map(function (e, t) {
                          return (0, J.jsx)(
                            m.z,
                            {
                              variant: "text-with-color-bg",
                              onClick: function () {
                                return h(e);
                              },
                              leftIcon: (0, J.jsx)("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, J.jsx)("path", {
                                  d: "M15.5 5V28M9.25 12.1875V20.8125M28 13.625V19.375M3 13.625V19.375M21.75 9.3125V23.6875",
                                  stroke: "#E5FF00",
                                  strokeWidth: "3",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                              rightIcon:
                                e.uuid ===
                                (null === l || void 0 === l ? void 0 : l.uuid)
                                  ? (0, J.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 30 30",
                                      width: "20px",
                                      height: "20px",
                                      children: (0, J.jsx)("path", {
                                        d: "M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z",
                                        fill: "#ffffff",
                                      }),
                                    })
                                  : (0, J.jsx)("div", {
                                      style: { width: "20px" },
                                    }),
                              children: e.displayName,
                            },
                            e.uuid
                          );
                        }),
                      })
                    : (0, J.jsxs)(f.k, {
                        direction: "column",
                        align: "center",
                        children: [
                          (0, J.jsx)("img", {
                            alt: "not-found",
                            src: "/images/opentalker/not-found.svg",
                            style: { width: "150px", height: "150px" },
                          }),
                          (0, J.jsx)(L.tP, {
                            size: "clamp(1.5rem,2vw,1.6rem)",
                            color: "#777E90",
                            weight: "bold",
                            css: {
                              fontFamily: "var(--fontFamily3)",
                              fontStyle: "normal",
                              lineHeight: "clamp(1.5rem,2vw,1.6rem)",
                            },
                            children: "".concat(
                              n.formatMessage({
                                id: "oops-its-empty-here",
                                defaultMessage: "Oops, it's empty here!",
                              })
                            ),
                          }),
                        ],
                      }),
              }),
            ],
          });
        },
        Qe = function (e) {
          var t = e.handleBackToAvatarHomeOnClick,
            n = (0, u.Z)(),
            i = (0, x.zn)().notify,
            l = (0, c.useContext)(P.u),
            d = l.setIsOverlapLoading,
            h = l.uploadAudioList,
            p = l.setUploadAudioList,
            g = (l.uploadAudio, l.setUploadAudio),
            C = (0, c.useContext)(M.C).durationLimit,
            w = (0, V.q)().content,
            v = (function () {
              var e = (0, c.useCallback)(
                (function () {
                  var e = (0, s.Z)(
                    (0, a.Z)().mark(function e(t, n, i) {
                      var r, s, o, l, c, d, h, u;
                      return (0, a.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (r = {
                                    headers: {
                                      accept: "application/json",
                                      Authorization: t,
                                    },
                                  }),
                                  (e.next = 4),
                                  S.Z.post(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/voice"
                                    ),
                                    { voice_id: n, message: i },
                                    r
                                  )
                                );
                              case 4:
                                return (s = e.sent), (e.next = 7), s;
                              case 7:
                                if (
                                  ((o = e.sent),
                                  (l = o.data),
                                  (c = o.status),
                                  (d = o.statusText),
                                  200 === c)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(d);
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
                                  (h = e.t0.message),
                                  (u = void 0 === h ? "" : h),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: u,
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
                  return function (t, n, i) {
                    return e.apply(this, arguments);
                  };
                })(),
                []
              );
              return { onCreateVoice: e };
            })(),
            Z = v.onCreateVoice,
            F = (function () {
              var e = (0, c.useCallback)(
                (function () {
                  var e = (0, s.Z)(
                    (0, a.Z)().mark(function e(t) {
                      var n, i, r, s, o, l, c, d;
                      return (0, a.Z)().wrap(
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
                                  S.Z.get(
                                    "".concat(
                                      "https://generative-api.jinkoai.com/",
                                      "generative/voice"
                                    ),
                                    n
                                  )
                                );
                              case 4:
                                return (i = e.sent), (e.next = 7), i;
                              case 7:
                                if (
                                  ((r = e.sent),
                                  (s = r.data),
                                  (o = r.status),
                                  (l = r.statusText),
                                  200 === o)
                                ) {
                                  e.next = 13;
                                  break;
                                }
                                throw new Error(l);
                              case 13:
                                if (!s.error) {
                                  e.next = 15;
                                  break;
                                }
                                throw new Error(s.msg);
                              case 15:
                                return e.abrupt("return", {
                                  error: !1,
                                  data: s,
                                  message: "",
                                });
                              case 18:
                                return (
                                  (e.prev = 18),
                                  (e.t0 = e.catch(0)),
                                  (c = e.t0.message),
                                  (d = void 0 === c ? "" : c),
                                  e.abrupt("return", {
                                    error: !0,
                                    data: "",
                                    message: d,
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
              return { onGetVoice: e };
            })(),
            H = F.onGetVoice,
            z = (0, T.Z)().onGetTranslation,
            E = k.Ry().shape({
              script: k
                .Z_()
                .required(
                  n.formatMessage({
                    id: "script-is-required",
                    defaultMessage: "Script is required",
                  })
                )
                .min(
                  1,
                  n.formatMessage({
                    id: "script-is-too-short",
                    defaultMessage: "Script is too short",
                  })
                )
                .max(
                  100,
                  n.formatMessage({
                    id: "script-exceeds-the-allowed-length",
                    defaultMessage: "Script exceeds the allowed length",
                  })
                ),
            }),
            R = { resolver: (0, y.X)(E) },
            A = (0, j.cI)(R),
            B =
              (A.register,
              A.handleSubmit,
              A.formState.errors,
              (0, c.useState)({ id: 0, name: "", gender: "", sample_url: "" })),
            I = (0, o.Z)(B, 2),
            O = I[0],
            U = I[1],
            W = (0, c.useState)({
              id: 0,
              name: "",
              gender: "",
              sample_url: "",
            }),
            N = (0, o.Z)(W, 2),
            D = N[0],
            G = N[1],
            Y = (0, c.useState)([]),
            q = (0, o.Z)(Y, 2),
            X = q[0],
            Q = q[1],
            $ = (0, c.useState)(!1),
            K = (0, o.Z)($, 2),
            ee = K[0],
            te = K[1],
            ne = (0, b.TA)({
              initialValues: { script: "" },
              validationSchema: E,
              onSubmit: (function () {
                var e = (0, s.Z)(
                  (0, a.Z)().mark(function e(s, o) {
                    var l, c, u, f, m;
                    return (0, a.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (l = o.resetForm),
                                (e.prev = 1),
                                d({
                                  isLoading: !0,
                                  title: {
                                    id: "generating-voice",
                                    defaultMessage: "Generating Voice...",
                                  },
                                }),
                                (e.next = 5),
                                Z(w.token, O.id, s.script)
                              );
                            case 5:
                              if (
                                !1 !== (c = e.sent).error ||
                                !1 !== c.data.error
                              ) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (u = "generate_voice.mp3"),
                                (e.next = 10),
                                (0, _.Rr)(
                                  (0, _.WF)((0, _.ug)(c.data.data.audio), u)
                                )
                              );
                            case 10:
                              if (!((f = e.sent) > C)) {
                                e.next = 14;
                                break;
                              }
                              return (
                                i(
                                  "".concat(
                                    n.formatMessage(
                                      {
                                        id: "kindly-upload-a-file-thats-under-sec",
                                        defaultMessage:
                                          "Kindly upload a file that's under {dr} seconds in duration.",
                                      },
                                      { dr: C }
                                    )
                                  ),
                                  "warning"
                                ),
                                e.abrupt("return", !1)
                              );
                            case 14:
                              (m = {
                                uuid: Date.now(),
                                displayName: "Generated Voice (".concat(
                                  O.name,
                                  ")"
                                ),
                                filename: u,
                                base64: c.data.data.audio,
                                duration: f,
                              }),
                                p([].concat((0, r.Z)(h), [m])),
                                g(m),
                                t();
                            case 18:
                              return (
                                l(),
                                d({
                                  isLoading: !1,
                                  title: { id: "", defaultMessage: "" },
                                }),
                                e.abrupt("return", !0)
                              );
                            case 23:
                              return (
                                (e.prev = 23),
                                (e.t0 = e.catch(1)),
                                i(z(e.t0.message), "error"),
                                d({
                                  isLoading: !1,
                                  title: { id: "", defaultMessage: "" },
                                }),
                                e.abrupt("return", !1)
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 23]]
                    );
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            }),
            ie = (0, c.useRef)(null);
          return (
            (0, c.useEffect)(
              function () {
                if (!(X.length > 0)) {
                  var e = (function () {
                    var e = (0, s.Z)(
                      (0, a.Z)().mark(function e() {
                        var t;
                        return (0, a.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), H(w.token);
                              case 2:
                                !1 === (t = e.sent).error &&
                                  !1 === t.data.error &&
                                  (Q(t.data.data.voices),
                                  U(t.data.data.voices[0]));
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
                  e();
                }
              },
              [X, w.token, H]
            ),
            (0, J.jsxs)(f.k, {
              direction: "column",
              gap: "20px",
              style: { height: "100%" },
              children: [
                (0, J.jsx)("audio", {
                  ref: ie,
                  onEnded: function () {
                    G({ id: 0, name: "", gender: "", sample_url: "" });
                  },
                }),
                (0, J.jsxs)(f.k, {
                  align: "center",
                  children: [
                    (0, J.jsx)(m.z, {
                      variant: "iconWithTransparentBg",
                      onClick: function () {
                        return t();
                      },
                      children: (0, J.jsx)("svg", {
                        width: "34",
                        height: "34",
                        viewBox: "0 0 34 34",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, J.jsx)("path", {
                          d: "M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z",
                          fill: "#ffffff",
                        }),
                      }),
                    }),
                    (0, J.jsx)(f.k, {
                      direction: "column",
                      align: "center",
                      style: { width: "100%" },
                      children: (0, J.jsx)(L.tP, {
                        size: "clamp(1.125rem,2vw,1.3rem)",
                        color: "#ffffff",
                        weight: "bold",
                        css: {
                          fontFamily: "var(--fontFamily3)",
                          textTransform: "capitalize",
                          lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                        },
                        children: "".concat(
                          n.formatMessage({
                            id: "select-your-audio",
                            defaultMessage: "Select Your Audio",
                          })
                        ),
                      }),
                    }),
                  ],
                }),
                (0, J.jsx)("form", {
                  onSubmit: ne.handleSubmit,
                  autoComplete: "off",
                  style: { overflow: "hidden" },
                  children: (0, J.jsxs)(f.k, {
                    direction: "column",
                    style: {
                      width: "100%",
                      height: "100%",
                      overflow: "hidden scroll",
                    },
                    children: [
                      (0, J.jsxs)(Ie, {
                        children: [
                          (0, J.jsxs)(Oe, {
                            children: [
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.875rem,2vw,1rem)",
                                color: "var(--fontColor)",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  lineHeight: "1rem",
                                  textTransform: "capitalize",
                                  textAlign: "left",
                                },
                                children: n.formatMessage({
                                  id: "type-your-script-here",
                                  defaultMessage: "Type Your Script Here",
                                }),
                              }),
                              (0, J.jsx)(Ae, {
                                rows: 3,
                                style: { width: "100%" },
                                name: "script",
                                autoCapitalize: "off",
                                autoComplete: "off",
                                autoCorrect: "off",
                                placeholder: "".concat(
                                  n.formatMessage({
                                    id: "enter-your-script-here",
                                    defaultMessage: "Enter your script here",
                                  })
                                ),
                                onChange: ne.handleChange,
                                value: ne.values.script,
                              }),
                              (0, J.jsxs)(L.tP, {
                                size: "clamp(0.7rem,2vw,0.8rem)",
                                color:
                                  ne.values.script.length > 100
                                    ? "red"
                                    : "var(--fontColor)",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  lineHeight: "1rem",
                                  textTransform: "capitalize",
                                  textAlign: "left",
                                  alignSelf: "flex-end",
                                },
                                children: [ne.values.script.length, "/100"],
                              }),
                              (0, J.jsx)(Be, {
                                children: (0, J.jsx)(L.tP, {
                                  size: "clamp(0.7rem,2vw,0.8rem)",
                                  color: "red",
                                  weight: "bold",
                                  css: {
                                    fontFamily: "var(--fontFamily3)",
                                    textTransform: "capitalize",
                                  },
                                  children: ne.errors.script,
                                }),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Ue, {
                            children: [
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.875rem,2vw,1rem)",
                                color: "var(--fontColor)",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  lineHeight: "1rem",
                                  textTransform: "capitalize",
                                  textAlign: "left",
                                },
                                children: n.formatMessage({
                                  id: "voices",
                                  defaultMessage: "Voices",
                                }),
                              }),
                              (0, J.jsx)(je, {
                                isOpen: ee,
                                setIsOpen: te,
                                title: (0, J.jsx)(f.k, {
                                  gap: "10px",
                                  align: "center",
                                  children:
                                    "male" === O.gender
                                      ? (0, J.jsxs)(J.Fragment, {
                                          children: [
                                            (0, J.jsxs)("svg", {
                                              width: "26",
                                              height: "26",
                                              viewBox: "0 0 26 26",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: [
                                                (0, J.jsx)("g", {
                                                  clipPath:
                                                    "url(#clip0_4598_8013)",
                                                  children: (0, J.jsx)("path", {
                                                    d: "M10.8667 0.200297C6.856 0.178964 3.368 3.50696 3.4 7.66696V8.73363V12.7315C2.83486 13.2406 2.34375 14.0673 2.34375 15.1461C2.34375 16.4952 3.10992 17.4711 3.83125 17.892C4.21685 18.1169 4.32604 18.075 4.6 18.1315C6.2021 21.4562 9.30959 24.2549 12.8583 24.7274L13 24.7461L13.1417 24.7274C16.6901 24.2538 19.7979 21.4552 21.4 18.1315C21.674 18.075 21.7831 18.1169 22.1688 17.892C22.8901 17.4711 23.6563 16.4952 23.6563 15.1461C23.6563 13.797 22.8901 12.8191 22.1688 12.3982C21.8502 12.2124 21.7815 12.2581 21.5333 12.1982V6.6003C21.5333 4.24403 19.6229 2.33363 17.2667 2.33363H16.2V2.34405C16.2 2.34405 15.112 0.200297 10.8667 0.200297ZM13.475 8.73363H14.0667H16.2C17.939 8.73363 19.3465 10.1222 19.3917 11.8503V14.0815H20.6188C20.6249 14.0822 20.8592 14.1051 21.0938 14.242C21.3314 14.3806 21.5229 14.4707 21.5229 15.1461C21.5229 15.8216 21.3314 15.9096 21.0938 16.0482C20.8561 16.1868 20.6125 16.2107 20.6125 16.2107L19.9542 16.2482L19.6938 16.8524C18.4706 19.6734 15.6459 22.1407 13 22.567C10.3544 22.1416 7.52944 19.6745 6.30625 16.8524L6.04583 16.2482L5.3875 16.2107C5.3875 16.2107 5.14385 16.1868 4.90625 16.0482C4.66865 15.9096 4.47708 15.8216 4.47708 15.1461C4.47708 14.4707 4.66865 14.3806 4.90625 14.242C5.14077 14.1051 5.37507 14.0822 5.38125 14.0815H6.60833V10.867H9.8C11.3755 10.867 12.7358 10.004 13.475 8.73363Z",
                                                    fill: "#ffffff",
                                                  }),
                                                }),
                                                (0, J.jsx)("defs", {
                                                  children: (0, J.jsx)(
                                                    "clipPath",
                                                    {
                                                      id: "clip0_4598_8013",
                                                      children: (0, J.jsx)(
                                                        "rect",
                                                        {
                                                          width: "25.6",
                                                          height: "25.6",
                                                          fill: "white",
                                                          transform:
                                                            "translate(0.199951 0.200195)",
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            (0, J.jsx)(L.tP, {
                                              size: "clamp(0.9rem,2vw,0.938rem)",
                                              color: "#ffffff",
                                              weight: "bold",
                                              css: {
                                                fontFamily:
                                                  "var(--fontFamily3)",
                                                textTransform: "capitalize",
                                                lineHeight:
                                                  "clamp(0.725rem,2vw,0.875rem)",
                                              },
                                              children: O.name,
                                            }),
                                          ],
                                        })
                                      : (0, J.jsxs)(J.Fragment, {
                                          children: [
                                            (0, J.jsx)("svg", {
                                              width: "32",
                                              height: "32",
                                              viewBox: "0 0 32 32",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: (0, J.jsx)("path", {
                                                d: "M13.8333 3C8.14583 3 3 9.53358 3 18.1667C3 24.6667 5.16667 29 5.16667 29L11.5884 26.133C12.8776 27.0536 14.3207 27.7059 15.8561 27.9103L16 27.9294L16.1439 27.9103C18.0094 27.6613 19.7485 26.7718 21.2241 25.5109L26.8333 29C26.8333 29 29 24.6667 29 18.1667C29 9.5 25.1943 5.16667 19.25 5.16667H19.2394C19.2153 5.12015 18.0969 3 13.8333 3ZM17.0833 12.75L22.4873 14.9167L22.4915 14.9209V17.0981H23.7378C23.7441 17.0988 23.982 17.1221 24.2202 17.2611C24.4615 17.4019 24.6561 17.4934 24.6561 18.1794C24.6561 18.8654 24.4615 18.9548 24.2202 19.0955C23.9789 19.2363 23.7314 19.2606 23.7314 19.2606L23.0628 19.2987L22.7983 19.9123C21.5561 22.7774 18.6873 25.2832 16 25.7161C13.313 25.2841 10.444 22.7785 9.20166 19.9123L8.93717 19.2987L8.26855 19.2606C8.26855 19.2606 8.0211 19.2363 7.77979 19.0955C7.53847 18.9548 7.34391 18.8654 7.34391 18.1794C7.34391 17.4934 7.53847 17.4019 7.77979 17.2611C8.01797 17.1221 8.25593 17.0988 8.26221 17.0981H9.50846V17.0833C11.5426 17.0823 15.7308 16.6722 17.0833 12.75Z",
                                                fill: "#ffffff",
                                              }),
                                            }),
                                            (0, J.jsx)(L.tP, {
                                              size: "clamp(0.9rem,2vw,0.938rem)",
                                              color: "#ffffff",
                                              weight: "bold",
                                              css: {
                                                fontFamily:
                                                  "var(--fontFamily3)",
                                                textTransform: "capitalize",
                                                lineHeight:
                                                  "clamp(0.725rem,2vw,0.875rem)",
                                              },
                                              children: O.name,
                                            }),
                                          ],
                                        }),
                                }),
                                children: (0, J.jsx)(f.k, {
                                  direction: "column",
                                  gap: "14px",
                                  style: { padding: "0px" },
                                  children: X.map(function (e) {
                                    return (0, J.jsx)(
                                      m.z,
                                      {
                                        variant: "iconWithTransparentBg",
                                        onClick: function () {
                                          te(!ee), U(e);
                                        },
                                        styles: function () {
                                          return {
                                            root: { width: "100%" },
                                            inner: {
                                              width: "100%",
                                              ">span": { width: "100%" },
                                            },
                                          };
                                        },
                                        children: (0, J.jsxs)(f.k, {
                                          align: "center",
                                          style: { width: "100%" },
                                          children: [
                                            (0, J.jsxs)(f.k, {
                                              align: "center",
                                              gap: "10px",
                                              style: { width: "100%" },
                                              children: [
                                                "female" === e.gender
                                                  ? (0, J.jsx)("svg", {
                                                      width: "32",
                                                      height: "32",
                                                      viewBox: "0 0 32 32",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      children: (0, J.jsx)(
                                                        "path",
                                                        {
                                                          d: "M13.8333 3C8.14583 3 3 9.53358 3 18.1667C3 24.6667 5.16667 29 5.16667 29L11.5884 26.133C12.8776 27.0536 14.3207 27.7059 15.8561 27.9103L16 27.9294L16.1439 27.9103C18.0094 27.6613 19.7485 26.7718 21.2241 25.5109L26.8333 29C26.8333 29 29 24.6667 29 18.1667C29 9.5 25.1943 5.16667 19.25 5.16667H19.2394C19.2153 5.12015 18.0969 3 13.8333 3ZM17.0833 12.75L22.4873 14.9167L22.4915 14.9209V17.0981H23.7378C23.7441 17.0988 23.982 17.1221 24.2202 17.2611C24.4615 17.4019 24.6561 17.4934 24.6561 18.1794C24.6561 18.8654 24.4615 18.9548 24.2202 19.0955C23.9789 19.2363 23.7314 19.2606 23.7314 19.2606L23.0628 19.2987L22.7983 19.9123C21.5561 22.7774 18.6873 25.2832 16 25.7161C13.313 25.2841 10.444 22.7785 9.20166 19.9123L8.93717 19.2987L8.26855 19.2606C8.26855 19.2606 8.0211 19.2363 7.77979 19.0955C7.53847 18.9548 7.34391 18.8654 7.34391 18.1794C7.34391 17.4934 7.53847 17.4019 7.77979 17.2611C8.01797 17.1221 8.25593 17.0988 8.26221 17.0981H9.50846V17.0833C11.5426 17.0823 15.7308 16.6722 17.0833 12.75Z",
                                                          fill: "black",
                                                        }
                                                      ),
                                                    })
                                                  : (0, J.jsxs)("svg", {
                                                      width: "26",
                                                      height: "26",
                                                      viewBox: "0 0 26 26",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      children: [
                                                        (0, J.jsx)("g", {
                                                          clipPath:
                                                            "url(#clip0_4598_8013)",
                                                          children: (0, J.jsx)(
                                                            "path",
                                                            {
                                                              d: "M10.8667 0.200297C6.856 0.178964 3.368 3.50696 3.4 7.66696V8.73363V12.7315C2.83486 13.2406 2.34375 14.0673 2.34375 15.1461C2.34375 16.4952 3.10992 17.4711 3.83125 17.892C4.21685 18.1169 4.32604 18.075 4.6 18.1315C6.2021 21.4562 9.30959 24.2549 12.8583 24.7274L13 24.7461L13.1417 24.7274C16.6901 24.2538 19.7979 21.4552 21.4 18.1315C21.674 18.075 21.7831 18.1169 22.1688 17.892C22.8901 17.4711 23.6563 16.4952 23.6563 15.1461C23.6563 13.797 22.8901 12.8191 22.1688 12.3982C21.8502 12.2124 21.7815 12.2581 21.5333 12.1982V6.6003C21.5333 4.24403 19.6229 2.33363 17.2667 2.33363H16.2V2.34405C16.2 2.34405 15.112 0.200297 10.8667 0.200297ZM13.475 8.73363H14.0667H16.2C17.939 8.73363 19.3465 10.1222 19.3917 11.8503V14.0815H20.6188C20.6249 14.0822 20.8592 14.1051 21.0938 14.242C21.3314 14.3806 21.5229 14.4707 21.5229 15.1461C21.5229 15.8216 21.3314 15.9096 21.0938 16.0482C20.8561 16.1868 20.6125 16.2107 20.6125 16.2107L19.9542 16.2482L19.6938 16.8524C18.4706 19.6734 15.6459 22.1407 13 22.567C10.3544 22.1416 7.52944 19.6745 6.30625 16.8524L6.04583 16.2482L5.3875 16.2107C5.3875 16.2107 5.14385 16.1868 4.90625 16.0482C4.66865 15.9096 4.47708 15.8216 4.47708 15.1461C4.47708 14.4707 4.66865 14.3806 4.90625 14.242C5.14077 14.1051 5.37507 14.0822 5.38125 14.0815H6.60833V10.867H9.8C11.3755 10.867 12.7358 10.004 13.475 8.73363Z",
                                                              fill: "black",
                                                            }
                                                          ),
                                                        }),
                                                        (0, J.jsx)("defs", {
                                                          children: (0, J.jsx)(
                                                            "clipPath",
                                                            {
                                                              id: "clip0_4598_8013",
                                                              children: (0,
                                                              J.jsx)("rect", {
                                                                width: "25.6",
                                                                height: "25.6",
                                                                fill: "white",
                                                                transform:
                                                                  "translate(0.199951 0.200195)",
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                (0, J.jsx)(L.tP, {
                                                  size: "clamp(0.9rem,2vw,0.938rem)",
                                                  color: "#444A50",
                                                  weight: "bold",
                                                  css: {
                                                    fontFamily:
                                                      "var(--fontFamily3)",
                                                    textTransform: "capitalize",
                                                    lineHeight: "1",
                                                  },
                                                  children: e.name,
                                                }),
                                              ],
                                            }),
                                            (0, J.jsx)(m.z, {
                                              variant: "iconWithTransparentBg",
                                              style: {
                                                margin: "0px 15px 0px 0px",
                                              },
                                              onClick: function () {
                                                !(function (e) {
                                                  D === e
                                                    ? (ie.current.pause(),
                                                      (ie.current.currentTime = 0),
                                                      G({
                                                        id: 0,
                                                        name: "",
                                                        gender: "",
                                                        sample_url: "",
                                                      }))
                                                    : ((ie.current.src =
                                                        e.sample_url),
                                                      ie.current.play(),
                                                      G(e));
                                                })(e);
                                              },
                                              children:
                                                D === e
                                                  ? (0, J.jsxs)("svg", {
                                                      width: "26",
                                                      height: "27",
                                                      viewBox: "0 0 26 27",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      children: [
                                                        (0, J.jsx)("circle", {
                                                          cx: "12.9998",
                                                          cy: "14.4232",
                                                          r: "7.38461",
                                                          fill: "#000000",
                                                        }),
                                                        (0, J.jsx)("path", {
                                                          fillRule: "evenodd",
                                                          clipRule: "evenodd",
                                                          d: "M13 25.5C16.1826 25.5 19.2348 24.2357 21.4853 21.9853C23.7357 19.7348 25 16.6826 25 13.5C25 10.3174 23.7357 7.26516 21.4853 5.01472C19.2348 2.76428 16.1826 1.5 13 1.5C9.8174 1.5 6.76516 2.76428 4.51472 5.01472C2.26428 7.26516 1 10.3174 1 13.5C1 16.6826 2.26428 19.7348 4.51472 21.9853C6.76516 24.2357 9.8174 25.5 13 25.5ZM12.3325 9.252C12.1066 9.10128 11.844 9.01472 11.5728 9.00154C11.3015 8.98837 11.0318 9.04907 10.7924 9.17719C10.5529 9.3053 10.3527 9.49602 10.2132 9.72899C10.0736 9.96195 9.99996 10.2284 10 10.5V16.5C9.99996 16.7716 10.0736 17.038 10.2132 17.271C10.3527 17.504 10.5529 17.6947 10.7924 17.8228C11.0318 17.9509 11.3015 18.0116 11.5728 17.9985C11.844 17.9853 12.1066 17.8987 12.3325 17.748L16.8325 14.748C17.0379 14.611 17.2064 14.4254 17.3229 14.2077C17.4394 13.99 17.5003 13.7469 17.5003 13.5C17.5003 13.2531 17.4394 13.01 17.3229 12.7923C17.2064 12.5746 17.0379 12.389 16.8325 12.252L12.3325 9.252Z",
                                                          fill: "#E5FF00",
                                                        }),
                                                      ],
                                                    })
                                                  : (0, J.jsxs)("svg", {
                                                      width: "32",
                                                      height: "33",
                                                      viewBox: "0 0 32 33",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      children: [
                                                        (0, J.jsx)("circle", {
                                                          cx: "16",
                                                          cy: "16.5",
                                                          r: "12",
                                                          fill: "url(#paint0_linear_4525_14401)",
                                                        }),
                                                        (0, J.jsx)("path", {
                                                          d: "M20.8601 19.685L19.4499 18.7865C19.4267 18.7718 19.4012 18.7624 19.3747 18.7586C19.3482 18.7549 19.3213 18.7569 19.2955 18.7647C19.2698 18.7724 19.2456 18.7856 19.2245 18.8037C19.2034 18.8217 19.1857 18.8441 19.1724 18.8697L18.918 19.3563C18.8618 19.4635 18.895 19.6018 18.9922 19.6638L20.4024 20.5624C20.4256 20.577 20.4511 20.5865 20.4776 20.5902C20.5041 20.5939 20.531 20.5919 20.5567 20.5842C20.5825 20.5764 20.6066 20.5632 20.6278 20.5452C20.6489 20.5271 20.6666 20.5047 20.6798 20.4791L20.9343 19.9925C20.9905 19.8853 20.956 19.7471 20.8601 19.685ZM19.1712 14.1301C19.1844 14.1557 19.2021 14.1781 19.2232 14.1961C19.2444 14.2142 19.2685 14.2274 19.2943 14.2351C19.32 14.2429 19.3469 14.2449 19.3734 14.2412C19.3999 14.2374 19.4254 14.228 19.4486 14.2134L20.8588 13.3148C20.956 13.2527 20.9892 13.1145 20.933 13.0073L20.6798 12.5221C20.6666 12.4965 20.6489 12.4741 20.6278 12.4561C20.6066 12.438 20.5825 12.4248 20.5567 12.4171C20.531 12.4093 20.5041 12.4073 20.4776 12.411C20.4511 12.4148 20.4256 12.4242 20.4024 12.4388L18.9922 13.3374C18.9455 13.3674 18.9115 13.4166 18.8976 13.4743C18.8837 13.5319 18.891 13.5932 18.918 13.6449L19.1712 14.1301ZM21.3958 15.9921H19.7593C19.6468 15.9921 19.5547 16.0937 19.5547 16.2178V16.782C19.5547 16.9061 19.6468 17.0077 19.7593 17.0077H21.3958C21.5083 17.0077 21.6004 16.9061 21.6004 16.782V16.2178C21.6004 16.0937 21.5083 15.9921 21.3958 15.9921ZM17.4566 10.8999C17.3812 10.8999 17.3045 10.9225 17.2342 10.9747L12.7018 14.243H10.605C10.4924 14.243 10.4004 14.3445 10.4004 14.4687V18.5311C10.4004 18.6553 10.4924 18.7568 10.605 18.7568H12.7018L17.2342 22.0251C17.3045 22.0759 17.3825 22.0999 17.4566 22.0999C17.6702 22.0999 17.8671 21.9123 17.8671 21.6471V11.3527C17.8671 11.0875 17.6702 10.8999 17.4566 10.8999Z",
                                                          fill: "black",
                                                        }),
                                                        (0, J.jsx)("defs", {
                                                          children: (0, J.jsxs)(
                                                            "linearGradient",
                                                            {
                                                              id: "paint0_linear_4525_14401",
                                                              x1: "16",
                                                              y1: "4.5",
                                                              x2: "16",
                                                              y2: "28.5",
                                                              gradientUnits:
                                                                "userSpaceOnUse",
                                                              children: [
                                                                (0, J.jsx)(
                                                                  "stop",
                                                                  {
                                                                    stopColor:
                                                                      "#E5FF00",
                                                                  }
                                                                ),
                                                                (0, J.jsx)(
                                                                  "stop",
                                                                  {
                                                                    offset:
                                                                      "0.546875",
                                                                    stopColor:
                                                                      "#E5FF00",
                                                                  }
                                                                ),
                                                                (0, J.jsx)(
                                                                  "stop",
                                                                  {
                                                                    offset: "1",
                                                                    stopColor:
                                                                      "#E5FF00",
                                                                  }
                                                                ),
                                                                (0, J.jsx)(
                                                                  "stop",
                                                                  {
                                                                    offset: "1",
                                                                    stopColor:
                                                                      "#E5FF00",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                          ],
                                        }),
                                      },
                                      e.id
                                    );
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, J.jsx)(m.z, {
                        variant: "text",
                        type: "submit",
                        style: {
                          width: "fit-content",
                          minHeight: "35px",
                          alignSelf: "end",
                        },
                        children: "".concat(
                          n.formatMessage({
                            id: "generate-voice",
                            defaultMessage: "Generate Voice",
                          })
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        $e = function (e) {
          e.handleNextButtonOnClick;
          var t = (0, u.Z)(),
            n = (0, c.useState)("home"),
            i = (0, o.Z)(n, 2),
            r = i[0],
            a = i[1],
            s = (0, C.useMediaQuery)({ query: "(max-width: 991px)" }),
            l = function () {
              a("home");
            },
            d = function () {
              a("my-audio-gallery");
            };
          return (0, J.jsx)(J.Fragment, {
            children: (function () {
              switch (r) {
                case "home":
                  return (0, J.jsxs)(J.Fragment, {
                    children: [
                      s &&
                        (0, J.jsxs)(f.k, {
                          direction: "column",
                          align: "center",
                          children: [
                            (0, J.jsx)(L.tP, {
                              size: "clamp(0.875rem,2vw,1rem)",
                              color: "#777E90",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily3)",
                                textTransform: "capitalize",
                              },
                              children: "".concat(
                                t.formatMessage({
                                  id: "step",
                                  defaultMessage: "Step",
                                }),
                                " 3"
                              ),
                            }),
                            (0, J.jsx)(L.tP, {
                              size: "clamp(1.125rem,2vw,1.3rem)",
                              color: "#ffffff",
                              weight: "bold",
                              css: {
                                fontFamily: "var(--fontFamily3)",
                                textTransform: "capitalize",
                                lineHeight: "clamp(1.125rem,2vw,1.3rem)",
                              },
                              children: "".concat(
                                t.formatMessage({
                                  id: "select-your-audio",
                                  defaultMessage: "Select Your Audio",
                                })
                              ),
                            }),
                          ],
                        }),
                      (0, J.jsxs)(Pe, {
                        style: { height: "100%" },
                        children: [
                          (0, J.jsxs)(Te, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return a("upload-audio");
                            },
                            children: [
                              (0, J.jsx)(Ee, {
                                children: (0, J.jsxs)("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 32 32",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsx)("mask", {
                                      id: "mask0_4500_3811",
                                      style: { maskType: "luminance" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "7",
                                      y: "2",
                                      width: "10",
                                      height: "6",
                                      children: (0, J.jsx)("path", {
                                        d: "M7.42334 2.78223H16.2147V7.18289H7.42334V2.78223Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, J.jsx)("g", {
                                      mask: "url(#mask0_4500_3811)",
                                      children: (0, J.jsx)("path", {
                                        d: "M14.6831 6.97756C15.0902 6.35728 15.5871 5.80031 16.1548 5.32526C15.3893 3.79135 13.8171 2.78223 12.0435 2.78223C9.70941 2.78223 7.78345 4.52039 7.49048 6.77044C8.27174 6.83412 10.8802 7.31024 14.6831 6.97756Z",
                                        fill: "#000000",
                                      }),
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M13.4604 10.8513C13.4901 9.86683 13.7112 8.9296 14.0868 8.07465C10.5432 8.30681 8.04704 7.87147 7.45215 7.82031V10.5612C7.88928 10.6009 10.2066 10.9965 13.4604 10.8513Z",
                                      fill: "#000000",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M7.45264 11.6162L7.45443 14.3864L7.5299 14.4014C7.81322 14.425 10.6081 14.894 14.3498 14.63C13.9023 13.8001 13.6068 12.8772 13.501 11.8981C10.1913 12.0451 7.76493 11.6438 7.45264 11.6162Z",
                                      fill: "#000000",
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M7.46533 15.4496C7.62559 17.8359 9.61451 19.7208 12.0456 19.7208C13.9418 19.7208 15.5691 18.5725 16.2699 16.9348C15.7945 16.5528 15.3666 16.1146 14.996 15.6299C12.521 15.8466 10.0484 15.7923 7.58338 15.4642L7.46533 15.4492V15.4496Z",
                                      fill: "#000000",
                                    }),
                                    (0, J.jsx)("mask", {
                                      id: "mask1_4500_3811",
                                      style: { maskType: "luminance" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "4",
                                      y: "13",
                                      width: "15",
                                      height: "17",
                                      children: (0, J.jsx)("path", {
                                        d: "M4.17383 13.7764H18.8704V29.4996H4.17383V13.7764Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, J.jsx)("g", {
                                      mask: "url(#mask1_4500_3811)",
                                      children: (0, J.jsx)("path", {
                                        d: "M18.8364 18.2822C18.2401 18.1052 17.6745 17.8558 17.1497 17.5446C16.2436 19.4667 14.2891 20.768 12.0461 20.768C9.08888 20.768 6.61668 18.4622 6.4185 15.5192L6.40491 14.2561V13.7832H4.69787C4.40812 13.7832 4.1731 14.0179 4.1731 14.3069C4.1731 18.4661 7.42584 21.8802 11.525 22.1478L11.5192 24.7845H8.85386C7.11784 24.7845 5.70521 26.1946 5.70521 27.9274V28.9752C5.70521 29.2646 5.94023 29.4993 6.22998 29.4993H17.862C18.1514 29.4993 18.3864 29.2646 18.3864 28.9752V27.9274C18.3864 26.1946 16.9741 24.7845 15.2381 24.7845H12.5688L12.5745 22.1474C15.1934 21.9718 17.5311 20.5044 18.8364 18.2815V18.2822Z",
                                        fill: "#000000",
                                      }),
                                    }),
                                    (0, J.jsx)("mask", {
                                      id: "mask2_4500_3811",
                                      style: { maskType: "luminance" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "14",
                                      y: "4",
                                      width: "14",
                                      height: "14",
                                      children: (0, J.jsx)("path", {
                                        d: "M14.4741 4.61914H27.4565V17.5314H14.4741V4.61914Z",
                                        fill: "white",
                                      }),
                                    }),
                                    (0, J.jsx)("g", {
                                      mask: "url(#mask2_4500_3811)",
                                      children: (0, J.jsx)("path", {
                                        d: "M20.9788 4.62047C17.4098 4.62047 14.5059 7.51979 14.5059 11.083C14.5059 14.6463 17.1294 17.2569 20.454 17.5241V11.2072L19.4109 12.5504C19.2331 12.7786 18.9037 12.8208 18.6747 12.6431C18.4461 12.466 18.4039 12.1365 18.5821 11.9079L20.5649 9.35597C20.801 9.05191 21.2753 9.09769 21.4485 9.44218L23.4667 11.8972C23.6502 12.1208 23.6177 12.451 23.3941 12.6341C23.1713 12.8169 22.84 12.7861 22.6561 12.5615L21.5046 11.161V17.5234C24.8293 17.2558 27.4532 14.4692 27.4532 11.0823C27.4532 7.51908 24.5492 4.62012 20.9799 4.62012L20.9788 4.62047Z",
                                        fill: "#000000",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "#ffffff",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                  lineHeight: 1,
                                },
                                children: "".concat(
                                  t.formatMessage({
                                    id: "upload-audio",
                                    defaultMessage: "Upload Audio",
                                  })
                                ),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Te, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return a("record-audio");
                            },
                            children: [
                              (0, J.jsx)(Ee, {
                                children: (0, J.jsxs)("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 32 32",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsxs)("mask", {
                                      id: "mask0_4500_4427",
                                      style: { maskType: "luminance" },
                                      maskUnits: "userSpaceOnUse",
                                      x: "7",
                                      y: "8",
                                      width: "18",
                                      height: "22",
                                      children: [
                                        (0, J.jsx)("path", {
                                          d: "M19.2347 13.1188C19.2347 11.4254 17.8332 10.0527 16.1043 10.0527C14.3754 10.0527 12.9739 11.4254 12.9739 13.1188V18.8128C12.9739 20.5061 14.3754 21.8788 16.1043 21.8788C17.8332 21.8788 19.2347 20.5061 19.2347 18.8128V13.1188Z",
                                          fill: "white",
                                          stroke: "white",
                                          strokeWidth: "4",
                                          strokeLinejoin: "round",
                                        }),
                                        (0, J.jsx)("path", {
                                          d: "M8.80005 18.6367C8.80005 22.6827 12.0802 25.9629 16.1262 25.9629M16.1262 25.9629C20.1722 25.9629 23.4524 22.6827 23.4524 18.6367M16.1262 25.9629V28.8934",
                                          stroke: "white",
                                          strokeWidth: "2",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                        }),
                                      ],
                                    }),
                                    (0, J.jsx)("g", {
                                      mask: "url(#mask0_4500_4427)",
                                      children: (0, J.jsx)("path", {
                                        d: "M4.40454 7.40332H27.8483V30.8471H4.40454V7.40332Z",
                                        fill: "#000000",
                                      }),
                                    }),
                                    (0, J.jsx)("path", {
                                      d: "M12.7855 6.57422C12.7855 6.57422 13.978 5.43588 15.9656 5.43588C17.9532 5.43588 19.1457 6.57422 19.1457 6.57422M10.4004 4.29754C10.4004 4.29754 12.388 2.40031 15.9656 2.40031C19.5432 2.40031 21.5308 4.29754 21.5308 4.29754",
                                      stroke: "#000000",
                                      strokeWidth: "1.5",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "#ffffff",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                  lineHeight: 1,
                                },
                                children: "".concat(
                                  t.formatMessage({
                                    id: "capture-your-voice",
                                    defaultMessage: "Capture Your Voice",
                                  })
                                ),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Te, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return a("text-to-audio");
                            },
                            children: [
                              (0, J.jsx)(Ee, {
                                children: (0, J.jsxs)("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 32 32",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsxs)("g", {
                                      clipPath: "url(#clip0_4500_10552)",
                                      children: [
                                        (0, J.jsx)("path", {
                                          d: "M21.4596 12.9636C20.4434 12.9636 20.7552 15.0916 17.3371 16.2738C16.3902 16.5974 15.9167 16.8463 15.9167 18.0658V21.3138C15.9167 22.5334 16.3902 22.7823 17.3371 23.1058C20.7552 24.3005 20.4434 26.4161 21.4596 26.4161H21.8984C22.3603 26.4161 22.7298 25.9556 22.7298 25.3707V13.9965C22.7298 13.4241 22.3487 12.9512 21.8984 12.9512H21.4596V12.9636Z",
                                          fill: "#000000",
                                        }),
                                        (0, J.jsx)("path", {
                                          d: "M26.2875 14.1961C25.7563 14.2334 25.4676 14.9801 25.7909 15.5152C26.426 16.5854 26.8071 18.1037 26.8071 19.6965C26.8071 21.2894 26.426 22.8076 25.7909 23.8779C25.5715 24.2388 25.6408 24.7614 25.9295 25.0228C26.2297 25.2841 26.6339 25.2094 26.8533 24.8485C27.6847 23.4423 28.1235 21.6005 28.1235 19.6965C28.1235 17.7925 27.6847 15.9508 26.8533 14.5445C26.7147 14.3205 26.5069 14.1837 26.2875 14.1961Z",
                                          fill: "#000000",
                                        }),
                                        (0, J.jsx)("path", {
                                          d: "M24.4854 16.2741C23.9888 16.2741 23.6655 16.9585 23.9195 17.4936C24.5085 18.8376 24.5085 20.5301 23.9195 21.8741C23.7348 22.2723 23.8503 22.7825 24.1736 23.0065C24.4969 23.2305 24.9126 23.0687 25.0743 22.6581C25.8826 20.8163 25.8826 18.5514 25.0743 16.7096C24.9588 16.4358 24.7279 16.2616 24.4854 16.2741Z",
                                          fill: "#000000",
                                        }),
                                        (0, J.jsx)("path", {
                                          fillRule: "evenodd",
                                          clipRule: "evenodd",
                                          d: "M18.6538 5.73314C18.1342 5.1358 17.4414 4.7998 16.7139 4.7998H9.73913C9.66985 4.7998 9.61211 4.83714 9.55437 4.88692C9.51973 4.93669 9.49664 5.01136 9.49664 5.08603V11.582C9.49664 11.806 9.40425 12.03 9.26568 12.1918C9.12711 12.3536 8.94235 12.4407 8.7345 12.4407H4.26559C4.18476 12.4407 4.12702 12.4656 4.08083 12.5278C4.03464 12.5776 4 12.6522 4 12.7269V24.0389C4 24.8851 4.28869 25.6816 4.81988 26.2665C5.32797 26.8638 6.02082 27.1998 6.74832 27.1998H16.7139C17.4414 27.1998 18.1573 26.9509 18.6885 26.4282C18.8155 26.2789 19.0349 26.2042 19.0118 25.7314C18.9887 25.2834 17.4529 24.5491 16.0441 24.0514C15.3282 23.8149 14.8316 23.5909 14.5429 23.1429C14.4505 22.9936 14.3697 22.8194 14.3235 22.6078H10.2126C10.2126 22.6078 10.2241 22.6949 10.2241 22.7447C10.2241 23.1056 9.94699 23.3918 9.61211 23.3918H6.20558C5.8707 23.3918 5.59356 23.1056 5.59356 22.7447C5.59356 22.3838 5.8707 22.0851 6.20558 22.0851H8.06474C8.01855 21.9856 7.99545 21.8611 7.99545 21.7491C7.99545 21.5127 8.07629 21.3011 8.21486 21.1394C8.35343 20.9776 8.54974 20.878 8.7345 20.878H14.2311V18.0158H8.7345C8.54974 18.0158 8.35343 17.9162 8.21486 17.7545C8.07629 17.6051 7.99545 17.3811 7.99545 17.1571C7.99545 16.9954 8.04164 16.8336 8.11093 16.6967H6.20558C5.8707 16.6967 5.59356 16.4105 5.59356 16.0496C5.59356 15.6887 5.8707 15.39 6.20558 15.39H11.5636C11.8985 15.39 12.1757 15.6887 12.1757 16.0496C12.1757 16.1367 12.1641 16.2114 12.1295 16.286H14.5083C14.5083 16.286 14.5314 16.2487 14.5429 16.2362C14.8316 15.7882 15.3397 15.5767 16.0441 15.3278C17.834 14.7056 18.8271 13.8842 19.4622 13.1376V7.96069C19.4622 7.12692 19.1735 6.31803 18.6538 5.73314ZM6.20558 18.7376H11.5636C11.8985 18.7376 12.1757 19.0362 12.1757 19.3971C12.1757 19.758 11.8985 20.0442 11.5636 20.0442H6.20558C5.8707 20.0442 5.59356 19.758 5.59356 19.3971C5.59356 19.0362 5.8707 18.7376 6.20558 18.7376ZM17.3374 16.2611C16.4021 16.5971 15.9171 16.8585 15.9171 18.0656V21.326C15.9171 22.5331 16.4021 22.782 17.3374 23.118C18.3074 23.4416 18.9656 23.8647 19.4506 24.2754C19.4622 24.1882 19.4622 24.126 19.4622 24.0389V15.1038C18.9772 15.5145 18.3074 15.9376 17.3374 16.2611Z",
                                          fill: "#000000",
                                        }),
                                        (0, J.jsx)("path", {
                                          d: "M7.74096 5.45891C7.74096 5.24735 7.54465 5.11046 7.40608 5.24735C7.29061 5.35935 7.17513 5.49624 7.08275 5.64557L4.08039 10.4616C4.0111 10.5736 4.08039 10.7105 4.20741 10.7105H7.49846C7.56775 10.7105 7.62548 10.6856 7.67168 10.6233C7.71787 10.5736 7.74096 10.4989 7.74096 10.4242V5.45891Z",
                                          fill: "#000000",
                                        }),
                                        (0, J.jsx)("path", {
                                          d: "M7.14062 14.8301V15.3901H11.5633C11.8982 15.3901 12.1754 15.6887 12.1754 16.0496C12.1754 16.1367 12.1638 16.2114 12.1292 16.2861C12.0368 16.535 11.8174 16.6967 11.5633 16.6967H7.14062V18.7376H11.5633C11.8982 18.7376 12.1754 19.0363 12.1754 19.3972C12.1754 19.7581 11.8982 20.0443 11.5633 20.0443H7.14062V22.0852H9.6118C9.90049 22.0852 10.1545 22.3092 10.2123 22.6079C10.2238 22.6576 10.2238 22.695 10.2238 22.7447C10.2238 23.1056 9.94668 23.3919 9.6118 23.3919H7.14062V24.5492H14.5426V14.8301H7.14062Z",
                                          fill: "#000000",
                                        }),
                                      ],
                                    }),
                                    (0, J.jsx)("defs", {
                                      children: (0, J.jsx)("clipPath", {
                                        id: "clip0_4500_10552",
                                        children: (0, J.jsx)("rect", {
                                          width: "25.6",
                                          height: "25.6",
                                          fill: "white",
                                          transform:
                                            "translate(3.19995 3.2002)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "#ffffff",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                  lineHeight: "clamp(0.9rem,2vw,0.92rem)",
                                  textAlign: "center",
                                  textAlignLast: "center",
                                },
                                children: "".concat(
                                  t.formatMessage({
                                    id: "convert-text-into-speech",
                                    defaultMessage: "Convert Text into Speech",
                                  })
                                ),
                              }),
                            ],
                          }),
                          (0, J.jsxs)(Te, {
                            gap: "5px",
                            direction: "column",
                            role: "button",
                            onClick: function () {
                              return a("my-audio-gallery");
                            },
                            children: [
                              (0, J.jsx)(Ee, {
                                children: (0, J.jsxs)("svg", {
                                  width: "26",
                                  height: "26",
                                  viewBox: "0 0 26 26",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: [
                                    (0, J.jsx)("g", {
                                      clipPath: "url(#clip0_4500_9810)",
                                      children: (0, J.jsx)("path", {
                                        d: "M6.06652 0.200195C4.15444 0.200195 2.59985 1.6352 2.59985 3.4002V22.6002C2.59985 24.3652 4.15444 25.8002 6.06652 25.8002H19.9332C21.8453 25.8002 23.3999 24.3652 23.3999 22.6002V8.20019H16.4665C15.5078 8.20019 14.7332 7.48519 14.7332 6.60019V0.200195H6.06652ZM16.4665 0.200195V6.60019H23.3999L16.4665 0.200195ZM16.5749 11.5152C18.5844 12.6352 19.9332 14.6702 19.9332 17.0002C19.9332 19.3302 18.5844 21.3652 16.5749 22.4852C16.1632 22.7152 15.6324 22.5902 15.3832 22.2152C15.134 21.8402 15.2694 21.3452 15.6757 21.1152C17.1924 20.2752 18.1999 18.7452 18.1999 17.0002C18.1999 15.2552 17.1924 13.7252 15.6811 12.8852C15.2694 12.6552 15.1394 12.1652 15.3886 11.7852C15.6378 11.4052 16.1686 11.2852 16.5803 11.5152H16.5749ZM11.5969 13.0602C11.9219 13.1852 12.1332 13.4752 12.1332 13.8002V20.2002C12.1332 20.5252 11.9219 20.8152 11.5969 20.9402C11.2719 21.0652 10.8982 20.9952 10.6544 20.7652L8.74235 19.0002H6.93319C6.45652 19.0002 6.06652 18.6402 6.06652 18.2002V15.8002C6.06652 15.3602 6.45652 15.0002 6.93319 15.0002H8.74235L10.6544 13.2352C10.9036 13.0052 11.2774 12.9402 11.5969 13.0602ZM14.3594 14.8052C14.7169 14.5102 15.264 14.5402 15.5836 14.8702C16.1307 15.4302 16.4665 16.1802 16.4665 17.0002C16.4665 17.8202 16.1307 18.5702 15.5836 19.1352C15.264 19.4652 14.7169 19.4902 14.3594 19.2002C14.0019 18.9102 13.9749 18.4002 14.289 18.0702C14.5653 17.7852 14.7278 17.4152 14.7278 17.0052C14.7278 16.5952 14.5599 16.2202 14.289 15.9402C13.9694 15.6102 14.0019 15.1052 14.3594 14.8102V14.8052Z",
                                        fill: "#000000",
                                      }),
                                    }),
                                    (0, J.jsx)("defs", {
                                      children: (0, J.jsx)("clipPath", {
                                        id: "clip0_4500_9810",
                                        children: (0, J.jsx)("rect", {
                                          width: "25.6",
                                          height: "25.6",
                                          fill: "white",
                                          transform:
                                            "translate(0.199951 0.200195)",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, J.jsx)(L.tP, {
                                size: "clamp(0.9rem,2vw,0.92rem)",
                                color: "#ffffff",
                                weight: "bold",
                                css: {
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  alignSelf: "center",
                                  lineHeight: 1,
                                },
                                children: "".concat(
                                  t.formatMessage({
                                    id: "audio-gallery",
                                    defaultMessage: "Audio Gallery",
                                  })
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                case "upload-audio":
                  return (0, J.jsx)(Ye, { handleBackToAvatarHomeOnClick: l });
                case "record-audio":
                  return (0, J.jsx)(qe, {
                    handleBackToAvatarHomeOnClick: l,
                    handleGoToAudioGalleryOnClick: d,
                  });
                case "my-audio-gallery":
                  return (0, J.jsx)(Xe, { handleBackToAvatarHomeOnClick: l });
                case "text-to-audio":
                  return (0, J.jsx)(Qe, { handleBackToAvatarHomeOnClick: l });
                default:
                  return null;
              }
            })(),
          });
        },
        Ke = function () {
          var e = (0, u.Z)(),
            t = (0, h.s0)(),
            n = (0, V.q)(),
            r = n.tokenValidity,
            l = n.content,
            d = (0, z.u4)().onCreateVideoWithoutSubtitle,
            v = (0, x.zn)().notify,
            y =
              ((0, Z.$)().currentLanguage.locale, (0, T.Z)().onGetTranslation),
            j = (0, c.useState)(1),
            b = (0, o.Z)(j, 2),
            k = b[0],
            S = b[1],
            E = (0, c.useState)(
              "".concat(
                e.formatMessage({
                  id: "choose-your-avatar",
                  defaultMessage: "Choose Your Avatar",
                })
              )
            ),
            R = (0, o.Z)(E, 2),
            A = R[0],
            B = R[1],
            I = (0, c.useRef)(null),
            O = (0, C.useMediaQuery)({ query: "(max-width: 991px)" }),
            U = (0, c.useContext)(P.u),
            W = U.isOverlapLoading,
            N = U.setIsOverlapLoading,
            D = U.isExportModalVisible,
            G = U.setIsExportModalVisible,
            Y = U.uploadPhoto,
            q = U.setUploadPhoto,
            X = U.uploadAudio,
            $ = U.setUploadAudio,
            K = U.previewVideo,
            ee = (U.setPreviewVideo, U.selectedFrame),
            te = U.avatarRef,
            ne = (0, c.useContext)(M.C).getCredit,
            ie = (0, c.useState)({ width: 0, height: 0 }),
            re = (0, o.Z)(ie, 2),
            ae = re[0],
            se = re[1],
            oe = (0, c.useState)({ width: 0, height: 0 }),
            le = (0, o.Z)(oe, 2),
            ce = le[0],
            de = le[1],
            he = (0, c.useState)(!1),
            ue = (0, o.Z)(he, 2),
            pe = ue[0],
            fe = ue[1],
            me = (0, c.useState)(!1),
            ge = (0, o.Z)(me, 2),
            xe = ge[0],
            Ce = ge[1],
            we = function () {
              S(k + 1);
            },
            ve = (function () {
              var n = (0, s.Z)(
                (0, a.Z)().mark(function n() {
                  var i, r;
                  return (0, a.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              (fe(!1),
                              N({
                                isLoading: !0,
                                title: {
                                  id: "hang-tight-we-are-putting-the-final-touches",
                                  defaultMessage:
                                    "Hang tight! We're putting the final touches on your video. {br} It's best not to refresh - thanks for waiting!",
                                },
                              }),
                              null !== Y && null !== X)
                            ) {
                              n.next = 4;
                              break;
                            }
                            return n.abrupt("return", void 0);
                          case 4:
                            if (
                              "string" === typeof Y.base64 &&
                              "string" === typeof X.base64
                            ) {
                              n.next = 6;
                              break;
                            }
                            throw new Error(
                              "Something went wrong, Please try again."
                            );
                          case 6:
                            return (
                              (n.prev = 6),
                              (i =
                                0 !==
                                (null === ee || void 0 === ee
                                  ? void 0
                                  : ee.uuid)
                                  ? (0, _.WF)(
                                      (0, _.ug)(
                                        te.current
                                          .getImageScaledToCanvas()
                                          .toDataURL()
                                      ),
                                      "image.jpeg"
                                    )
                                  : (0, _.WF)((0, _.ug)(Y.base64), Y.filename)),
                              (n.next = 10),
                              d(
                                l.token,
                                i,
                                (0, _.WF)((0, _.ug)(X.base64), X.filename)
                              )
                            );
                          case 10:
                            if (!(r = n.sent).error) {
                              n.next = 13;
                              break;
                            }
                            throw new Error(r.message);
                          case 13:
                            return (
                              N({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              }),
                              S(1),
                              q(null),
                              $(null),
                              ne.run(),
                              t("/studio"),
                              n.abrupt(
                                "return",
                                v(
                                  e.formatMessage(
                                    {
                                      id: "got-it-your-video-creation-is-in-the-works-we-ll",
                                      defaultMessage:
                                        "Got it, your video creation is in the works! We'll pop an exciting email your way once it's all set and ready to dazzle!",
                                    },
                                    { br: (0, J.jsx)("br", {}) }
                                  ),
                                  "success",
                                  { dismissAfter: 1e4 }
                                )
                              )
                            );
                          case 22:
                            return (
                              (n.prev = 22),
                              (n.t0 = n.catch(6)),
                              N({
                                isLoading: !1,
                                title: { id: "", defaultMessage: "" },
                              }),
                              n.abrupt(
                                "return",
                                v("".concat(y(n.t0.message)), "error")
                              )
                            );
                          case 26:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[6, 22]]
                  );
                })
              );
              return function () {
                return n.apply(this, arguments);
              };
            })();
          return (
            (0, c.useEffect)(
              function () {
                if (
                  null !== I.current &&
                  null !== Y &&
                  null !== (null === Y || void 0 === Y ? void 0 : Y.base64)
                ) {
                  var e = (function () {
                    var e = (0, s.Z)(
                      (0, a.Z)().mark(function e() {
                        var t, n, i;
                        return (0, a.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), (0, _.C)(Y.base64);
                              case 2:
                                (t = e.sent),
                                  de({ width: t.width, height: t.height }),
                                  (n = t.width / t.height),
                                  (i =
                                    I.current.offsetWidth /
                                    I.current.offsetHeight),
                                  se(
                                    i > n
                                      ? {
                                          width: I.current.offsetHeight * n,
                                          height: I.current.offsetHeight,
                                        }
                                      : {
                                          width: I.current.offsetWidth,
                                          height: I.current.offsetWidth / n,
                                        }
                                  );
                              case 7:
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
                    e(),
                    window.addEventListener("resize", e),
                    function () {
                      window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [Y]
            ),
            (0, c.useEffect)(
              function () {
                !1 === r && t("/dashboard");
              },
              [r, t, l]
            ),
            (0, c.useEffect)(
              function () {
                switch (k) {
                  case 1:
                    B(
                      "".concat(
                        e.formatMessage({
                          id: "choose-your-avatar",
                          defaultMessage: "Choose Your Avatar",
                        })
                      )
                    );
                    break;
                  case 2:
                    B(
                      "".concat(
                        e.formatMessage({
                          id: "select-your-frame",
                          defaultMessage: "Select Your Frame",
                        })
                      )
                    );
                    break;
                  case 3:
                    B(
                      "".concat(
                        e.formatMessage({
                          id: "select-your-audio",
                          defaultMessage: "Select Your Audio",
                        })
                      )
                    );
                }
              },
              [k, e]
            ),
            (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(H.VW, {
                  show: D,
                  onClose: function () {
                    G(!1), S(1), t("/studio");
                  },
                  jobInfo: K,
                }),
                (0, J.jsx)(H.R$, {
                  show: pe,
                  onClose: function () {
                    fe(!1);
                  },
                  onSave: ve,
                  uploadAudio: X,
                }),
                (0, J.jsx)(H.tk, {
                  show: xe,
                  onClose: function () {
                    Ce(!1);
                  },
                }),
                (0, J.jsx)("div", {
                  id: "opentalker-container",
                  style: { height: "100%", display: "contents" },
                  children: (0, J.jsxs)(f.k, {
                    direction: "column",
                    style: { overflow: "hidden", height: "100%" },
                    children: [
                      (0, J.jsxs)(g.W, {
                        style: {
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          flexWrap: "unset",
                          gap: "10px",
                          paddingBottom: "14px",
                        },
                        children: [
                          (0, J.jsxs)(be, {
                            children: [
                              (0, J.jsx)(f.k, {
                                style: { width: !O && "192px" },
                                children: (0, J.jsx)(m.z, {
                                  variant: "iconWithTransparentBg",
                                  onClick: function () {
                                    1 === k ? t("/studio") : S(k - 1);
                                  },
                                  children:
                                    1 === k
                                      ? (0, J.jsxs)("svg", {
                                          width: "34",
                                          height: "34",
                                          viewBox: "0 0 34 34",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, J.jsx)("path", {
                                              d: "M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z",
                                              fill: "url(#paint0_linear_4322_13706)",
                                            }),
                                            (0, J.jsx)("path", {
                                              d: "M17.8297 17L23.3074 12.0605L22.1314 11L16.6537 15.9395L11.176 11L10 12.0605L15.4777 17L10 21.9395L11.176 23L16.6537 18.0605L22.1314 23L23.3074 21.9395L17.8297 17Z",
                                              fill: "black",
                                            }),
                                            (0, J.jsx)("defs", {
                                              children: (0, J.jsxs)(
                                                "linearGradient",
                                                {
                                                  id: "paint0_linear_4322_13706",
                                                  x1: "17",
                                                  y1: "0",
                                                  x2: "17",
                                                  y2: "34",
                                                  gradientUnits:
                                                    "userSpaceOnUse",
                                                  children: [
                                                    (0, J.jsx)("stop", {
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "0.546875",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "1",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "1",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                  ],
                                                }
                                              ),
                                            }),
                                          ],
                                        })
                                      : (0, J.jsxs)("svg", {
                                          width: "34",
                                          height: "34",
                                          viewBox: "0 0 34 34",
                                          fill: "none",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          children: [
                                            (0, J.jsx)("path", {
                                              d: "M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z",
                                              fill: "url(#paint0_linear_4322_13710)",
                                            }),
                                            (0, J.jsx)("path", {
                                              d: "M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z",
                                              fill: "black",
                                              stroke: "black",
                                              strokeWidth: "0.5",
                                            }),
                                            (0, J.jsx)("path", {
                                              d: "M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z",
                                              fill: "black",
                                              stroke: "black",
                                              strokeWidth: "0.5",
                                            }),
                                            (0, J.jsx)("defs", {
                                              children: (0, J.jsxs)(
                                                "linearGradient",
                                                {
                                                  id: "paint0_linear_4322_13710",
                                                  x1: "17",
                                                  y1: "0",
                                                  x2: "17",
                                                  y2: "34",
                                                  gradientUnits:
                                                    "userSpaceOnUse",
                                                  children: [
                                                    (0, J.jsx)("stop", {
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "0.546875",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "1",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                    (0, J.jsx)("stop", {
                                                      offset: "1",
                                                      stopColor: "#E5FF00",
                                                    }),
                                                  ],
                                                }
                                              ),
                                            }),
                                          ],
                                        }),
                                }),
                              }),
                              !O &&
                                (0, J.jsxs)(f.k, {
                                  direction: "column",
                                  align: "center",
                                  children: [
                                    (0, J.jsx)(L.tP, {
                                      size: "clamp(0.875rem,2vw,1rem)",
                                      color: "#777E90",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        textTransform: "capitalize",
                                      },
                                      children: ""
                                        .concat(
                                          e.formatMessage({
                                            id: "step",
                                            defaultMessage: "Step",
                                          }),
                                          " "
                                        )
                                        .concat(k),
                                    }),
                                    (0, J.jsx)(L.tP, {
                                      size: "clamp(1.125rem,2vw,1.3rem)",
                                      color: "#ffffff",
                                      weight: "bold",
                                      css: {
                                        fontFamily: "var(--fontFamily3)",
                                        textTransform: "capitalize",
                                        lineHeight: 1,
                                      },
                                      children: A,
                                    }),
                                  ],
                                }),
                              (0, J.jsxs)(f.k, {
                                gap: "10px",
                                align: "center",
                                children: [
                                  (0, J.jsx)(m.z, {
                                    variant: "text-with-color-border",
                                    onClick: function () {
                                      Ce(!0);
                                    },
                                    leftIcon: (0, J.jsx)("img", {
                                      src: ".././images/opentalker/pricing-table-icon.svg",
                                      alt: "pricing-table",
                                      style: { height: "25px", width: "25px" },
                                    }),
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "pricing",
                                        defaultMessage: "Pricing",
                                      })
                                    ),
                                  }),
                                  (0, J.jsx)(m.z, {
                                    variant: "text-with-glow-anim",
                                    onClick: function () {
                                      fe(!0);
                                    },
                                    disabled: !Y || !X,
                                    children: "".concat(
                                      e.formatMessage({
                                        id: "generate",
                                        defaultMessage: "Generate",
                                      })
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, J.jsx)(f.k, {
                            ref: I,
                            style: {
                              background: "#767689",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                              position: "relative",
                            },
                            children: (0, J.jsx)(f.k, {
                              style: {
                                width: "fit-content",
                                position: "relative",
                              },
                              children:
                                null !== Y && void 0 !== Y && Y.base64
                                  ? (0, J.jsxs)(J.Fragment, {
                                      children: [
                                        (0, J.jsx)(Q, {
                                          image:
                                            ae.width > 0 &&
                                            "string" === typeof Y.base64 &&
                                            Y.base64,
                                          width: ae.width || 0,
                                          height: ae.height || 0,
                                          border: 0,
                                          color: [255, 255, 255, 0.6],
                                          scale: 1,
                                          rotate: 0,
                                          frame:
                                            "string" === typeof Y.base64 &&
                                            ee.path,
                                          style: { aspectRatio: 1 },
                                        }),
                                        ee &&
                                          (0, J.jsx)(Q, {
                                            ref: te,
                                            image:
                                              ae.width > 0 &&
                                              "string" === typeof Y.base64 &&
                                              Y.base64,
                                            width: ce.width,
                                            height: ce.height,
                                            border: 0,
                                            color: [255, 255, 255, 0.6],
                                            scale: 1,
                                            rotate: 0,
                                            frame:
                                              "string" === typeof Y.base64 &&
                                              ee.path,
                                            style: { display: "none" },
                                          }),
                                        (null === X || void 0 === X
                                          ? void 0
                                          : X.base64) &&
                                          (0, J.jsxs)(f.k, {
                                            style: {
                                              width: "70%",
                                              height: "auto",
                                              position: "absolute",
                                              top: 9,
                                              left: 7,
                                              borderRadius: "35px",
                                              backgroundColor: "#0d166680",
                                              padding: "4px 16px",
                                            },
                                            children: [
                                              (0, J.jsxs)("svg", {
                                                width: "17",
                                                height: "17",
                                                viewBox: "0 0 17 17",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: [
                                                  (0, J.jsx)("g", {
                                                    clipPath:
                                                      "url(#clip0_4398_11973)",
                                                    children: (0, J.jsx)(
                                                      "path",
                                                      {
                                                        d: "M4.91016 3.5V12.9C4.51016 12.7 4.01016 12.5 3.41016 12.5C2.01016 12.5 0.910156 13.4 0.910156 14.5C0.910156 15.6 2.01016 16.5 3.41016 16.5C4.81016 16.5 5.91016 15.6 5.91016 14.5V7.2L12.9102 4.9V10C12.5102 9.7 12.0102 9.5 11.4102 9.5C10.0102 9.5 8.91016 10.4 8.91016 11.5C8.91016 12.6 10.0102 13.5 11.4102 13.5C12.8102 13.5 13.9102 12.6 13.9102 11.5V0.5L4.91016 3.5Z",
                                                        fill: "white",
                                                      }
                                                    ),
                                                  }),
                                                  (0, J.jsx)("defs", {
                                                    children: (0, J.jsx)(
                                                      "clipPath",
                                                      {
                                                        id: "clip0_4398_11973",
                                                        children: (0, J.jsx)(
                                                          "rect",
                                                          {
                                                            width: "16",
                                                            height: "16",
                                                            fill: "white",
                                                            transform:
                                                              "translate(0.910156 0.5)",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, J.jsx)(w.Z, {
                                                style: { overflow: "hidden" },
                                                children: (0, J.jsx)(L.tP, {
                                                  size: "clamp(0.9rem,2vw,0.938rem)",
                                                  color: "white",
                                                  weight: "bold",
                                                  css: {
                                                    fontFamily:
                                                      "var(--fontFamily3)",
                                                    textTransform: "capitalize",
                                                    lineHeight: "1",
                                                  },
                                                  children: X.displayName,
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    })
                                  : (0, J.jsx)("svg", {
                                      width: "89",
                                      height: "81",
                                      viewBox: "0 0 89 81",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, J.jsx)("g", {
                                        opacity: "0.3",
                                        children: (0, J.jsx)("path", {
                                          d: "M0 11.5408C0 8.47999 1.16727 5.54454 3.24503 3.38022C5.32278 1.2159 8.14082 0 11.0792 0H77.5545C80.4929 0 83.3109 1.2159 85.3886 3.38022C87.4664 5.54454 88.6337 8.47999 88.6337 11.5408V69.2448C88.6337 72.3056 87.4664 75.2411 85.3886 77.4054C83.3109 79.5697 80.4929 80.7856 77.5545 80.7856H11.0792C8.14082 80.7856 5.32278 79.5697 3.24503 77.4054C1.16727 75.2411 0 72.3056 0 69.2448V11.5408ZM5.5396 63.4744V69.2448C5.5396 70.7752 6.12324 72.2429 7.16212 73.3251C8.201 74.4073 9.61001 75.0152 11.0792 75.0152H77.5545C79.0237 75.0152 80.4327 74.4073 81.4716 73.3251C82.5104 72.2429 83.0941 70.7752 83.0941 69.2448V49.0484L62.171 37.8134C61.6515 37.5424 61.0633 37.4483 60.4897 37.5446C59.9161 37.6409 59.3861 37.9227 58.9746 38.3501L38.4227 59.7583L23.6873 49.5331C23.1553 49.1642 22.5172 48.9982 21.8811 49.0634C21.245 49.1286 20.6502 49.421 20.1974 49.8909L5.5396 63.4744ZM33.2376 25.9668C33.2376 23.6712 32.3622 21.4696 30.8039 19.8464C29.2455 18.2231 27.132 17.3112 24.9282 17.3112C22.7244 17.3112 20.6109 18.2231 19.0526 19.8464C17.4943 21.4696 16.6188 23.6712 16.6188 25.9668C16.6188 28.2624 17.4943 30.464 19.0526 32.0872C20.6109 33.7105 22.7244 34.6224 24.9282 34.6224C27.132 34.6224 29.2455 33.7105 30.8039 32.0872C32.3622 30.464 33.2376 28.2624 33.2376 25.9668Z",
                                          fill: "white",
                                        }),
                                      }),
                                    }),
                            }),
                          }),
                        ],
                      }),
                      (0, J.jsx)(ke, {
                        id: "slider-wrapper",
                        children: (0, J.jsx)(Me, {
                          id: "slider",
                          children: (0, J.jsx)(Ze, {
                            children: (function () {
                              switch (k) {
                                case 1:
                                  return (0, J.jsx)(De, {
                                    handleNextButtonOnClick: we,
                                  });
                                case 2:
                                  return (0, J.jsx)(Ge, {
                                    handleNextButtonOnClick: we,
                                  });
                                case 3:
                                  return (0, J.jsx)($e, {
                                    handleNextButtonOnClick: we,
                                  });
                                default:
                                  return null;
                              }
                            })(),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                W.isLoading &&
                  (0, J.jsx)(F.Z, {
                    children: (0, J.jsx)(L.tP, {
                      size: "clamp(1.3rem,2vw,1.8rem)",
                      color: "#FFFFFF",
                      weight: "bold",
                      css: {
                        fontFamily: "var(--fontFamily3)",
                        textTransform: "",
                      },
                      children:
                        W.title.id &&
                        (0, J.jsx)(
                          p.Z,
                          (0, i.Z)(
                            (0, i.Z)({}, W.title),
                            {},
                            { values: { br: (0, J.jsx)("br", {}) } }
                          )
                        ),
                    }),
                  }),
              ],
            })
          );
        };
    },
    84038: function (e, t, n) {
      var i = n(861).default,
        r = n(38416).default,
        a = n(27424).default;
      var s = n(72791);
      function o(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var l = o(s);
      !(function (e) {
        if (e && "undefined" !== typeof window) {
          var t = document.createElement("style");
          t.setAttribute("type", "text/css"),
            (t.innerHTML = e),
            document.head.appendChild(t);
        }
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), transparent);\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      var c = s.forwardRef(function (e, t) {
        var n = e.style,
          o = void 0 === n ? {} : n,
          c = e.className,
          d = void 0 === c ? "" : c,
          h = e.autoFill,
          u = void 0 !== h && h,
          p = e.play,
          f = void 0 === p || p,
          m = e.pauseOnHover,
          g = void 0 !== m && m,
          x = e.pauseOnClick,
          C = void 0 !== x && x,
          w = e.direction,
          v = void 0 === w ? "left" : w,
          y = e.speed,
          j = void 0 === y ? 50 : y,
          b = e.delay,
          k = void 0 === b ? 0 : b,
          M = e.loop,
          Z = void 0 === M ? 0 : M,
          L = e.gradient,
          F = void 0 !== L && L,
          H = e.gradientColor,
          V = void 0 === H ? "white" : H,
          z = e.gradientWidth,
          S = void 0 === z ? 200 : z,
          _ = e.onFinish,
          P = e.onCycleComplete,
          T = e.onMount,
          E = e.children,
          R = s.useState(0),
          A = a(R, 2),
          B = A[0],
          I = A[1],
          O = s.useState(0),
          U = a(O, 2),
          W = U[0],
          N = U[1],
          D = s.useState(1),
          G = a(D, 2),
          Y = G[0],
          q = G[1],
          X = s.useState(!1),
          Q = a(X, 2),
          $ = Q[0],
          K = Q[1],
          J = s.useRef(null),
          ee = t || J,
          te = s.useRef(null),
          ne = s.useCallback(
            function () {
              if (te.current && ee.current) {
                var e = ee.current.getBoundingClientRect(),
                  t = te.current.getBoundingClientRect(),
                  n = e.width,
                  i = t.width;
                ("up" !== v && "down" !== v) ||
                  ((n = e.height), (i = t.height)),
                  q(u && n && i && i < n ? Math.ceil(n / i) : 1),
                  I(n),
                  N(i);
              }
            },
            [u, ee, v]
          );
        s.useEffect(
          function () {
            if ($ && (ne(), te.current && ee.current)) {
              var e = new ResizeObserver(function () {
                return ne();
              });
              return (
                e.observe(ee.current),
                e.observe(te.current),
                function () {
                  e && e.disconnect();
                }
              );
            }
          },
          [ne, ee, $]
        ),
          s.useEffect(
            function () {
              ne();
            },
            [ne, E]
          ),
          s.useEffect(function () {
            K(!0);
          }, []),
          s.useEffect(function () {
            "function" === typeof T && T();
          }, []);
        var ie = s.useMemo(
            function () {
              return u ? (W * Y) / j : W < B ? B / j : W / j;
            },
            [u, B, W, Y, j]
          ),
          re = s.useMemo(
            function () {
              var e;
              return Object.assign(
                Object.assign({}, o),
                (r(
                  (e = {}),
                  "--pause-on-hover",
                  !f || g ? "paused" : "running"
                ),
                r(
                  e,
                  "--pause-on-click",
                  !f || (g && !C) || C ? "paused" : "running"
                ),
                r(e, "--width", "up" === v || "down" === v ? "100vh" : "100%"),
                r(
                  e,
                  "--transform",
                  "up" === v
                    ? "rotate(-90deg)"
                    : "down" === v
                    ? "rotate(90deg)"
                    : "none"
                ),
                e)
              );
            },
            [o, f, g, C, v]
          ),
          ae = s.useMemo(
            function () {
              var e;
              return (
                r((e = {}), "--gradient-color", V),
                r(
                  e,
                  "--gradient-width",
                  "number" === typeof S ? "".concat(S, "px") : S
                ),
                e
              );
            },
            [V, S]
          ),
          se = s.useMemo(
            function () {
              var e;
              return (
                r((e = {}), "--play", f ? "running" : "paused"),
                r(e, "--direction", "left" === v ? "normal" : "reverse"),
                r(e, "--duration", "".concat(ie, "s")),
                r(e, "--delay", "".concat(k, "s")),
                r(e, "--iteration-count", Z ? "".concat(Z) : "infinite"),
                r(e, "--min-width", u ? "auto" : "100%"),
                e
              );
            },
            [f, v, ie, k, Z, u]
          ),
          oe = s.useMemo(
            function () {
              return r(
                {},
                "--transform",
                "up" === v
                  ? "rotate(90deg)"
                  : "down" === v
                  ? "rotate(-90deg)"
                  : "none"
              );
            },
            [v]
          ),
          le = s.useCallback(
            function (e) {
              return i(Array(Number.isFinite(e) && e >= 0 ? e : 0)).map(
                function (e, t) {
                  return l.default.createElement(
                    s.Fragment,
                    { key: t },
                    s.Children.map(E, function (e) {
                      return l.default.createElement(
                        "div",
                        { style: oe, className: "rfm-child" },
                        e
                      );
                    })
                  );
                }
              );
            },
            [oe, E]
          );
        return $
          ? l.default.createElement(
              "div",
              { ref: ee, style: re, className: "rfm-marquee-container " + d },
              F &&
                l.default.createElement("div", {
                  style: ae,
                  className: "rfm-overlay",
                }),
              l.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: se,
                  onAnimationIteration: P,
                  onAnimationEnd: _,
                },
                l.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: te },
                  s.Children.map(E, function (e) {
                    return l.default.createElement(
                      "div",
                      { style: oe, className: "rfm-child" },
                      e
                    );
                  })
                ),
                le(Y - 1)
              ),
              l.default.createElement(
                "div",
                { className: "rfm-marquee", style: se },
                le(Y)
              )
            )
          : null;
      });
      t.Z = c;
    },
    73897: function (e) {
      (e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    85372: function (e) {
      (e.exports = function (e) {
        if (Array.isArray(e)) return e;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    63405: function (e, t, n) {
      var i = n(73897);
      (e.exports = function (e) {
        if (Array.isArray(e)) return i(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    38416: function (e, t, n) {
      var i = n(64062);
      (e.exports = function (e, t, n) {
        return (
          (t = i(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    79498: function (e) {
      (e.exports = function (e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    68872: function (e) {
      (e.exports = function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != n) {
          var i,
            r,
            a,
            s,
            o = [],
            l = !0,
            c = !1;
          try {
            if (((a = (n = n.call(e)).next), 0 === t)) {
              if (Object(n) !== n) return;
              l = !1;
            } else
              for (
                ;
                !(l = (i = a.call(n)).done) &&
                (o.push(i.value), o.length !== t);
                l = !0
              );
          } catch (d) {
            (c = !0), (r = d);
          } finally {
            try {
              if (!l && null != n.return && ((s = n.return()), Object(s) !== s))
                return;
            } finally {
              if (c) throw r;
            }
          }
          return o;
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    12218: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    42281: function (e) {
      (e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    27424: function (e, t, n) {
      var i = n(85372),
        r = n(68872),
        a = n(86116),
        s = n(12218);
      (e.exports = function (e, t) {
        return i(e) || r(e, t) || a(e, t) || s();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    861: function (e, t, n) {
      var i = n(63405),
        r = n(79498),
        a = n(86116),
        s = n(42281);
      (e.exports = function (e) {
        return i(e) || r(e) || a(e) || s();
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    95036: function (e, t, n) {
      var i = n(18698).default;
      (e.exports = function (e, t) {
        if ("object" !== i(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== i(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    64062: function (e, t, n) {
      var i = n(18698).default,
        r = n(95036);
      (e.exports = function (e) {
        var t = r(e, "string");
        return "symbol" === i(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    18698: function (e) {
      function t(n) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    86116: function (e, t, n) {
      var i = n(73897);
      (e.exports = function (e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
//# sourceMappingURL=6403.18439e13.chunk.js.map
